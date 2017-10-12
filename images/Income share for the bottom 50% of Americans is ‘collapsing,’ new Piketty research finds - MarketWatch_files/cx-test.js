var cxTest = {
    version : '1.08',
    prefix : null,
    persistedQueryId : null,
    testGroup : -1,
    testVariant : null,
    startTime : new Date(),
    visibilityField : 'timeHalf',
    trackTime : 0.5,

    init : function(scriptPattern, prefix, persistedQueryId, visibilityField) {
        this.prefix = prefix;
        this.persistedQueryId = persistedQueryId;

        var params = {};

        if (scriptPattern) {
            var scripts = document.getElementsByTagName('script');
            var script = null;
            for (var i = 0; !script && (i < scripts.length); ++i) {
                if (scripts[i] && scripts[i].src && scripts[i].src.indexOf(scriptPattern) > -1) {
                    script = scripts[i];
                }
            }
            if (script && script.src && (script.src.indexOf('#') > -1)) {
                var searchPart = script.src.replace(/.*#/, '');
                params = cX.decodeUrlEncodedNameValuePairs(searchPart);
            }
        }

        this.testVariant = cX.library.parseUrlArgs().testVariant || params.testVariant || params.ver;
        this.testGroup = this.getTestGroup();

        cX.setCustomParameters({ver : this.version, testGroup : this.testGroup });

        var delay = (new Date() - this.startTime) / 1000;

        if (visibilityField && visibilityField.length) {
            this.visibilityField = visibilityField;
        }

        if (delay > 2.0) {
            cX.setCustomParameters({ loadDelay : delay.toFixed(1)});
        }
    },

    getTestGroup : function () {
        var cxId = cX.getUserId();
        var newBucket = -1;
        if (cxId && cxId.length) {
            var newHash = 0;

            for (var i = 0; i < cxId.length; i++) {
                newHash = ((newHash << 5) - newHash) + cxId.charCodeAt(i);
                newHash |= 0;
            }

            newBucket = Math.abs(newHash) % 100;
        } else {
            newBucket = Math.floor(Math.random() * 100);
        }

        return newBucket;
    },

    reportTestImpression : function (testId, testVariant) {
        if (testId !== null) {
            if (this.prefix && this.persistedQueryId) {
                cX.setEventAttributes({origin: this.prefix + '-web', persistedQueryId: this.persistedQueryId});
                cX.sendEvent('imp', {
                    testId: '' + testId,
                    testVariant: testVariant
                });
            }
        }
    },

    _reportWidgetVisible : function(testId, testVariant) {
        cX.sendEvent('widgetVisible', {
            testId: '' + testId,
            testVariant: testVariant
        });
    },

    trackVisibility : function(divId, testId, testVariant) {
        if (testId !== null) {
            var self = this;
            cX.trackElement({
                elementId: divId,
                trigger: {
                    on: function (state) {
                        return state.visibility[self.visibilityField] >= self.trackTime;
                    },
                    callback: function (state) {
                        self._reportWidgetVisible(testId, testVariant);
                    }
                }
            });
        }
    },

    instrumentClickLinks : function(divId, testId, testVariant) {

        var element = document.getElementById(divId);
        var links = [].slice.call(element.getElementsByTagName('a'));

        var urlData = 'cx_testId=' + encodeURIComponent(testId) +
            '&cx_testVariant=' + encodeURIComponent(testVariant);

        for (var i = 0; i < links.length; ++i) {
            var href = links[i].href;
            href += (href.indexOf('#') < 0 ? '#' : '&') + urlData + '&cx_artPos=' + i;
            links[i].href = href;
        }
    },

    updateRecsClickUrls : function(testId, testVariant, items) {
        if (items) {
            for (var i = 0; i < items.length; ++ i) {
                var item = items[i];
                if (item.click_url) {
                    item.click_url += '?cx_testId=' + testId + '&cx_testVariant=' + testVariant + '&cx_artPos=' + i;

                    if (item.tag) {
                        item.click_url += '&cx_tag=' + item.tag;
                    }
                }
            }
        }
    },

    getDivId : function(className) {
        if (className && className.length) {
            var testCandidates = document.getElementsByClassName(className);
            if (testCandidates && testCandidates.length === 1) {
                var div = testCandidates[0];

                if (!(div.id && div.id.length)) {
                    div.id = className + '-01';
                }
                return div.id;
            }
        }
        return null;
    },

    processCxResult : function(testId, divId) {
        this.reportTestImpression(testId, 'cx');
        var element = document.getElementById(divId);
        var cxDivId = null;
        if (element.previousElementSibling) {
            cxDivId = element.previousElementSibling.id;
            if (element.className === 'template') {
                element.parentNode.removeChild(element);
            }
        }
        this.trackVisibility(cxDivId || divId, testId, 'cx');
    },

    runCxVersion : function(testId, divId, widgetParams, context, callback) {
        var self = this;

        if (widgetParams.renderTemplateUrl) {
            widgetParams.insertBeforeElementId = divId;
            widgetParams.testId = testId;
            widgetParams.testVariant = 'cx';
            widgetParams.onImpressionResult = function () {
                self.processCxResult(testId, divId);
                if(callback) {
                    callback();
                }
            };
        } else {
            if (!widgetParams.renderFunction) {
                widgetParams.renderFunction = function(data, context) {
                    var template = data.response.template;

                    var rawStyle = data.response.style;

                    if (rawStyle && rawStyle.length) {
                        var style = document.createElement('style');

                        style.type = 'text/css';
                        if (style.styleSheet) {
                            style.styleSheet.cssText = css;
                        } else {
                            style.appendChild(document.createTextNode(rawStyle));
                        }
                        document.getElementsByTagName('head')[0].appendChild(style);
                    }

                    document.getElementById(divId).innerHTML =
                        '<div id="' + divId + '-tmp" class="template" style="display:none">' + template + '</div>';

                    if (testId && template.indexOf('cx_testVariant') === -1) {
                        self.updateRecsClickUrls(testId, 'cx', data.response.items);
                    }
                    cX.renderTemplate(divId + '-tmp', divId, data, context);

                    self.processCxResult(testId, divId);
                    if(callback) {
                        // data and context only available when running in-page
                        callback(data, context);
                    }
                }
            } else {
                var origRenderFunc = widgetParams.renderFunction;
                widgetParams.renderFunction =  function(data, context) {
                    self.updateRecsClickUrls(testId, 'cx', data.response.items);
                    self.processCxResult(testId, divId);
                    origRenderFunc(data, context);
                    if(callback) {
                        callback(data, context);
                    }
                };
            }
        }

        if (!context) {
            context = {};
        }

        if (!context.context) {
            context.context = {};
        }

        if(!context.context.categories) {
            context.context.categories = {};
        }

        context.context.categories.testgroup = '' + this.testGroup;

        cX.insertWidget(widgetParams, context);
    },

    displayWidget : function(divId, widgetParams, context, callback) {
        this.runCxVersion(null, divId, widgetParams, context, callback);
    },

    runCtrlVersion : function(testId, divId, callback) {
        this.reportTestImpression(testId, 'ctrl');
        this.instrumentClickLinks(divId, testId, 'ctrl');
        this.trackVisibility(divId, testId, 'ctrl');
        if (callback) {
            setTimeout(callback, 1);
        }
    },

    runTest : function (testId, divId, testSize, widgetParams, context, callback) {
        if (this.testVariant === 'cx') {
            this.runCxVersion(testId, divId, widgetParams, context, callback);
        } else if (this.testVariant === 'ctrl') {
            this.runCtrlVersion(testId, divId ,callback);
        } else if ((this.testGroup > -1)&&(testSize  > 0)) {
            if (this.testGroup < testSize*100) {
                this.runCxVersion(testId, divId, widgetParams, context, callback);
            } else if (this.testGroup > 100 * (1.0-testSize)) {
                this.runCtrlVersion(testId, divId, callback);
            }
        } else if (callback) {
            setTimeout(callback, 1);
        }
    }
};

(function(d,s,e,t){e=d.createElement(s);e.type='text/java'+s;e.async='async';
    e.src='http'+('https:'===location.protocol?'s://s':'://')+'cdn.cxense.com/cx.js';
    t=d.getElementsByTagName(s)[0];t.parentNode.insertBefore(e,t);})(document,'script');
