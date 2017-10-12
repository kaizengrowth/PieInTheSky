<!DOCTYPE html>
<html lang="en-US">
<head>
  <title>MarketWatch.com</title>
  <link href='http://sts3.wsj.net/bucket-a/foxtrot/public/article.min-5f3de69271.css' media='all' rel='stylesheet' type='text/css'/>
  <script src='http://sts3.wsj.net/bucket-a/foxtrot/public/article.min-ebaf39a94a.js' type='text/javascript'></script>
  <meta charset="utf-8" />
<meta name="robots" content="noarchive,noodp" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
<meta name="page.site" content="marketwatch" />
<meta name="apple-itunes-app" content="app-id=336693422" />
<meta name="fb:app_id" content="283204329838" />
<meta property="og:site_name" content="MarketWatch" />
<meta name="twitter:site:id" content="624413" />
  <script>
      var slotMachine = (function () {
          var _slots = {};
          return {
              add: function(name, slot, id) {
                  if (!_slots[name]) { _slots[name] = {} };
                  _slots[name].slot = slot;
                  _slots[name].id = id;
              },
              get: function(key) {
                  if (typeof key === 'string') {
                      return _slots[key];
                  }
                  else if (typeof key === 'object') {
                      for (var name in _slots) {
                          if (_slots.hasOwnProperty(name) && _slots[name].slot === key) {
                              return name;
                          }
                      }
                  }
              },
              getAll: function(device) {
                  return _slots;
              },
              onRenderEnd: function (event) {
                  var name = slotMachine.get(event.slot);
                  if (_slots[name]) {
                      _slots[name].rendered = true;
                  }
                  if ($) {
                      //$(window).trigger('adRendered', { name: name, slot: event.slot });
                      $('#' + _slots[name].id).trigger('rendered', { name: name, slot: event.slot });
                  }
              },
              slots: _slots
          }
      })();
    var googletag = googletag || {};
    googletag.cmd = googletag.cmd || [];
    (function() {
      var gads = document.createElement("script");
      gads.async = true;
      gads.type = "text/javascript";
      var useSSL = "https:" == document.location.protocol;
      gads.src = (useSSL ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js";
      var node =document.getElementsByTagName("script")[0];
      node.parentNode.insertBefore(gads, node);
    })();

    googletag.cmd.push(function() {
        googletag.pubads().addEventListener('slotRenderEnded', slotMachine.onRenderEnd);
        googletag.enableServices();
    });
  </script>
</head>
<body class="_404 ">
<div id="banner-chrome">

<header id="site-header" role="banner" class="">
    <div class="lame-content-wrapper">
        <div id="latest-news">
            <h3 class="module-header">
                <a href="http://www.marketwatch.com/newsviewer/">Latest <b>News</b></a>
                <div class="scroll-up fa fa-angle-up"></div>
                <div class="scroll-down fa fa-angle-down"></div>
            </h3>
                <div class="header-data">
                  <div id="market-overview-placeholder">
                    <div id="market-overview" class="timer" data-timer-interval="10000" data-timer-selector="li">
                      <ul class="fa-ul">
                            <li class="up active">
                              <div class="fa-li fa fa-circle icon"></div>
                              <div class="instrument">
                                <div class="display">Dow</div>
                                <div class="quote bgQuote" data-channel="/quotes/zigman/627449/realtime" data-bgformat='{"last":"0,0"}'>
                                  <span class="price bgLast">22,873</span>
                                  <span class="change bgChange">+42.21</span>
                                  <span class="change bgPercentChange">+0.18%</span>
                                </div>
                              </div>
                            </li>
                            <li class="up ">
                              <div class="fa-li fa fa-circle icon"></div>
                              <div class="instrument">
                                <div class="display">Nasdaq</div>
                                <div class="quote bgQuote" data-channel="/quotes/zigman/12633936/realtime" data-bgformat='{"last":"0,0"}'>
                                  <span class="price bgLast">6,604</span>
                                  <span class="change bgChange">+16.30</span>
                                  <span class="change bgPercentChange">+0.25%</span>
                                </div>
                              </div>
                            </li>
                            <li class="up ">
                              <div class="fa-li fa fa-circle icon"></div>
                              <div class="instrument">
                                <div class="display">S&amp;P 500</div>
                                <div class="quote bgQuote" data-channel="/quotes/zigman/3870025/realtime" data-bgformat='{"last":"0,0"}'>
                                  <span class="price bgLast">2,555</span>
                                  <span class="change bgChange">+4.60</span>
                                  <span class="change bgPercentChange">+0.18%</span>
                                </div>
                              </div>
                            </li>
                      </ul>
                    </div>
                  </div>
                <div class="viewport">
                    <ul class="headlines">
                            <li class="shareable" data-sequence="8c077dc4-5ad2-4f73-b9c3-a381c5fece05" data-number="961135" data-share-modprefix="mw_latestnews_" data-share-hover="true" data-share-text="Oil supply rises, as U.S. production keeps up pace despite hurricanes: IEA" data-share-url="http://www.marketwatch.com/story/oil-supply-rises-as-us-production-keeps-up-pace-despite-hurricanes-iea-2017-10-12">
                              <span class="timestamp">5:37 A.M. ET</span>
                              <div class="headline">
                                <a target="_blank" href="/story/oil-supply-rises-as-us-production-keeps-up-pace-despite-hurricanes-iea-2017-10-12?mod=MW_story_latest_news">
                                  Oil supply rises, as U.S. production keeps up pace despite hurricanes: IEA
                                </a>
                                <div class="share-icons dark-matter">
                                  <button class="social-button facebook fa fa-facebook-square trackable" data-track-click="social_latestnews_facebook"></button>
                                  <button class="social-button twitter fa fa-twitter trackable" data-track-click="social_latestnews_twitter"></button>
                                </div>
                              </div>
</li>                            <li class="shareable" data-sequence="8c077dc4-5ad2-4f73-b9c3-a381c5fece05" data-number="961134" data-share-modprefix="mw_latestnews_" data-share-hover="true" data-share-text="Bitcoin jumps 7% to new all-time high above $5,100" data-share-url="http://www.marketwatch.com/story/bitcoin-jumps-7-to-new-all-time-high-above-5100-2017-10-12">
                              <span class="timestamp">5:30 A.M. ET</span>
                              <div class="headline">
                                <a target="_blank" href="/story/bitcoin-jumps-7-to-new-all-time-high-above-5100-2017-10-12?mod=MW_story_latest_news">
                                  Bitcoin jumps 7% to new all-time high above $5,100
                                </a>
                                <div class="share-icons dark-matter">
                                  <button class="social-button facebook fa fa-facebook-square trackable" data-track-click="social_latestnews_facebook"></button>
                                  <button class="social-button twitter fa fa-twitter trackable" data-track-click="social_latestnews_twitter"></button>
                                </div>
                              </div>
</li>                            <li class="shareable" data-sequence="8c077dc4-5ad2-4f73-b9c3-a381c5fece05" data-number="961133" data-share-modprefix="mw_latestnews_" data-share-hover="true" data-share-text="Trump to start unwinding Obamacare with executive order today" data-share-url="http://www.marketwatch.com/story/trump-to-start-unwinding-obamacare-with-executive-order-today-2017-10-12">
                              <span class="timestamp">5:20 A.M. ET</span>
                              <div class="headline">
                                <a target="_blank" href="/story/trump-to-start-unwinding-obamacare-with-executive-order-today-2017-10-12?mod=MW_story_latest_news">
                                  Trump to start unwinding Obamacare with executive order today
                                </a>
                                <div class="share-icons dark-matter">
                                  <button class="social-button facebook fa fa-facebook-square trackable" data-track-click="social_latestnews_facebook"></button>
                                  <button class="social-button twitter fa fa-twitter trackable" data-track-click="social_latestnews_twitter"></button>
                                </div>
                              </div>
</li>                            <li class="shareable" data-sequence="8c077dc4-5ad2-4f73-b9c3-a381c5fece05" data-number="961132" data-share-modprefix="mw_latestnews_" data-share-hover="true" data-share-text="Five things to do when every investment is  too expensive" data-share-url="http://www.marketwatch.com/story/five-things-to-do-when-every-investment-is-too-expensive-2017-10-12">
                              <span class="timestamp">5:11 A.M. ET</span>
                              <div class="headline">
                                <a target="_blank" href="/story/five-things-to-do-when-every-investment-is-too-expensive-2017-10-12?mod=MW_story_latest_news">
                                    <span class="label Opinion">Opinion</span>
      Five things to do when every investment is  too expensive
                                </a>
                                <div class="share-icons dark-matter">
                                  <button class="social-button facebook fa fa-facebook-square trackable" data-track-click="social_latestnews_facebook"></button>
                                  <button class="social-button twitter fa fa-twitter trackable" data-track-click="social_latestnews_twitter"></button>
                                </div>
                              </div>
</li>                            <li class="shareable" data-sequence="8c077dc4-5ad2-4f73-b9c3-a381c5fece05" data-number="961131" data-share-modprefix="mw_latestnews_" data-share-hover="true" data-share-text="Soledad O’Brien tells Moneyish how Maria Shriver mentored her through a pregnancy" data-share-url="https://moneyish.com/upgrade/soledad-obrien-tells-moneyish-how-maria-shriver-mentored-her-through-a-pregnancy/">
                              <span class="timestamp">5:04 A.M. ET</span>
                              <div class="headline">
                                <a target="_blank" href="https://moneyish.com/upgrade/soledad-obrien-tells-moneyish-how-maria-shriver-mentored-her-through-a-pregnancy/?mod=MW_story_latest_news">
                                    <span class="label Moneyish">Moneyish</span>
      Soledad O’Brien tells Moneyish how Maria Shriver mentored her through a pregnancy
                                </a>
                                <div class="share-icons dark-matter">
                                  <button class="social-button facebook fa fa-facebook-square trackable" data-track-click="social_latestnews_facebook"></button>
                                  <button class="social-button twitter fa fa-twitter trackable" data-track-click="social_latestnews_twitter"></button>
                                </div>
                              </div>
</li>                            <li class="shareable" data-sequence="8c077dc4-5ad2-4f73-b9c3-a381c5fece05" data-number="961130" data-share-modprefix="mw_latestnews_" data-share-hover="true" data-share-text="Eurozone factory output surges in August" data-share-url="http://www.marketwatch.com/story/eurozone-factory-output-surges-in-august-2017-10-12">
                              <span class="timestamp">5:06 A.M. ET</span>
                              <div class="headline">
                                <a target="_blank" href="/story/eurozone-factory-output-surges-in-august-2017-10-12?mod=MW_story_latest_news">
                                  Eurozone factory output surges in August
                                </a>
                                <div class="share-icons dark-matter">
                                  <button class="social-button facebook fa fa-facebook-square trackable" data-track-click="social_latestnews_facebook"></button>
                                  <button class="social-button twitter fa fa-twitter trackable" data-track-click="social_latestnews_twitter"></button>
                                </div>
                              </div>
</li>                            <li class="shareable" data-sequence="8c077dc4-5ad2-4f73-b9c3-a381c5fece05" data-number="961129" data-share-modprefix="mw_latestnews_" data-share-hover="true" data-share-text="5 apps to help teach teens about money" data-share-url="http://www.marketwatch.com/story/5-apps-to-help-teach-teens-about-money-2017-10-12">
                              <span class="timestamp">5:02 A.M. ET</span>
                              <div class="headline">
                                <a target="_blank" href="/story/5-apps-to-help-teach-teens-about-money-2017-10-12?mod=MW_story_latest_news">
                                  5 apps to help teach teens about money
                                </a>
                                <div class="share-icons dark-matter">
                                  <button class="social-button facebook fa fa-facebook-square trackable" data-track-click="social_latestnews_facebook"></button>
                                  <button class="social-button twitter fa fa-twitter trackable" data-track-click="social_latestnews_twitter"></button>
                                </div>
                              </div>
</li>                            <li class="shareable" data-sequence="8c077dc4-5ad2-4f73-b9c3-a381c5fece05" data-number="961128" data-share-modprefix="mw_latestnews_" data-share-hover="true" data-share-text="Do hybrid cars and EVs really save you money?" data-share-url="http://www.marketwatch.com/story/do-hybrid-cars-and-evs-really-save-you-money-2017-10-12">
                              <span class="timestamp">5:01 A.M. ET</span>
                              <div class="headline">
                                <a target="_blank" href="/story/do-hybrid-cars-and-evs-really-save-you-money-2017-10-12?mod=MW_story_latest_news">
                                  Do hybrid cars and EVs really save you money?
                                </a>
                                <div class="share-icons dark-matter">
                                  <button class="social-button facebook fa fa-facebook-square trackable" data-track-click="social_latestnews_facebook"></button>
                                  <button class="social-button twitter fa fa-twitter trackable" data-track-click="social_latestnews_twitter"></button>
                                </div>
                              </div>
</li>                            <li class="shareable" data-sequence="8c077dc4-5ad2-4f73-b9c3-a381c5fece05" data-number="961127" data-share-modprefix="mw_latestnews_" data-share-hover="true" data-share-text="Smart retirement solutions for women" data-share-url="http://www.marketwatch.com/story/smart-retirement-solutions-for-women-2017-10-12">
                              <span class="timestamp">4:58 A.M. ET</span>
                              <div class="headline">
                                <a target="_blank" href="/story/smart-retirement-solutions-for-women-2017-10-12?mod=MW_story_latest_news">
                                  Smart retirement solutions for women
                                </a>
                                <div class="share-icons dark-matter">
                                  <button class="social-button facebook fa fa-facebook-square trackable" data-track-click="social_latestnews_facebook"></button>
                                  <button class="social-button twitter fa fa-twitter trackable" data-track-click="social_latestnews_twitter"></button>
                                </div>
                              </div>
</li>                            <li class="shareable" data-sequence="8c077dc4-5ad2-4f73-b9c3-a381c5fece05" data-number="961126" data-share-modprefix="mw_latestnews_" data-share-hover="true" data-share-text="Uniqlo parent Fast expects profit to hit a record" data-share-url="http://www.marketwatch.com/story/uniqlo-parent-fast-expects-profit-to-hit-a-record-2017-10-12">
                              <span class="timestamp">4:54 A.M. ET</span>
                              <div class="headline">
                                <a target="_blank" href="/story/uniqlo-parent-fast-expects-profit-to-hit-a-record-2017-10-12?mod=MW_story_latest_news">
                                  Uniqlo parent Fast expects profit to hit a record
                                </a>
                                <div class="share-icons dark-matter">
                                  <button class="social-button facebook fa fa-facebook-square trackable" data-track-click="social_latestnews_facebook"></button>
                                  <button class="social-button twitter fa fa-twitter trackable" data-track-click="social_latestnews_twitter"></button>
                                </div>
                              </div>
</li>                            <li class="shareable" data-sequence="8c077dc4-5ad2-4f73-b9c3-a381c5fece05" data-number="961125" data-share-modprefix="mw_latestnews_" data-share-hover="true" data-share-text="Bank earnings: ‘Lower for longer’ means buybacks will continue " data-share-url="http://www.marketwatch.com/story/bank-earnings-lower-for-longer-means-buybacks-will-continue-2017-10-06">
                              <span class="timestamp">4:49 A.M. ET</span>
                              <div class="headline">
                                <a target="_blank" href="/story/bank-earnings-lower-for-longer-means-buybacks-will-continue-2017-10-06?mod=MW_story_latest_news">
                                    <span class="label Updated">Updated</span>
      Bank earnings: ‘Lower for longer’ means buybacks will continue 
                                </a>
                                <div class="share-icons dark-matter">
                                  <button class="social-button facebook fa fa-facebook-square trackable" data-track-click="social_latestnews_facebook"></button>
                                  <button class="social-button twitter fa fa-twitter trackable" data-track-click="social_latestnews_twitter"></button>
                                </div>
                              </div>
</li>                            <li class="shareable" data-sequence="8c077dc4-5ad2-4f73-b9c3-a381c5fece05" data-number="961124" data-share-modprefix="mw_latestnews_" data-share-hover="true" data-share-text="FTSE 100 keeps dancing just below its all-time high" data-share-url="http://www.marketwatch.com/story/ftse-100-keeps-dancing-just-below-its-all-time-high-2017-10-12">
                              <span class="timestamp">4:44 A.M. ET</span>
                              <div class="headline">
                                <a target="_blank" href="/story/ftse-100-keeps-dancing-just-below-its-all-time-high-2017-10-12?mod=MW_story_latest_news">
                                  FTSE 100 keeps dancing just below its all-time high
                                </a>
                                <div class="share-icons dark-matter">
                                  <button class="social-button facebook fa fa-facebook-square trackable" data-track-click="social_latestnews_facebook"></button>
                                  <button class="social-button twitter fa fa-twitter trackable" data-track-click="social_latestnews_twitter"></button>
                                </div>
                              </div>
</li>                            <li class="shareable" data-sequence="8c077dc4-5ad2-4f73-b9c3-a381c5fece05" data-number="961123" data-share-modprefix="mw_latestnews_" data-share-hover="true" data-share-text="Lufthansa poised to sign Air Berlin deal" data-share-url="http://www.marketwatch.com/story/lufthansa-poised-to-sign-air-berlin-deal-2017-10-12">
                              <span class="timestamp">4:25 A.M. ET</span>
                              <div class="headline">
                                <a target="_blank" href="/story/lufthansa-poised-to-sign-air-berlin-deal-2017-10-12?mod=MW_story_latest_news">
                                  Lufthansa poised to sign Air Berlin deal
                                </a>
                                <div class="share-icons dark-matter">
                                  <button class="social-button facebook fa fa-facebook-square trackable" data-track-click="social_latestnews_facebook"></button>
                                  <button class="social-button twitter fa fa-twitter trackable" data-track-click="social_latestnews_twitter"></button>
                                </div>
                              </div>
</li>                            <li class="shareable" data-sequence="8c077dc4-5ad2-4f73-b9c3-a381c5fece05" data-number="961122" data-share-modprefix="mw_latestnews_" data-share-hover="true" data-share-text="Tullow buys land in Ivory Coast for exploration" data-share-url="http://www.marketwatch.com/story/tullow-buys-land-in-ivory-coast-for-exploration-2017-10-12">
                              <span class="timestamp">4:24 A.M. ET</span>
                              <div class="headline">
                                <a target="_blank" href="/story/tullow-buys-land-in-ivory-coast-for-exploration-2017-10-12?mod=MW_story_latest_news">
                                  Tullow buys land in Ivory Coast for exploration
                                </a>
                                <div class="share-icons dark-matter">
                                  <button class="social-button facebook fa fa-facebook-square trackable" data-track-click="social_latestnews_facebook"></button>
                                  <button class="social-button twitter fa fa-twitter trackable" data-track-click="social_latestnews_twitter"></button>
                                </div>
                              </div>
</li>                            <li class="shareable" data-sequence="8c077dc4-5ad2-4f73-b9c3-a381c5fece05" data-number="961121" data-share-modprefix="mw_latestnews_" data-share-hover="true" data-share-text="Cryptocurrency bitcoin jumps 4% at $5,022" data-share-url="">
                              <span class="timestamp">4:08 A.M. ET</span>
                              <div class="headline">
                                <a target="_blank" href="/investing/stock/btcusd?mod=MW_story_latest_news">
                                  Cryptocurrency bitcoin jumps 4% at $5,022
                                </a>
                                <div class="share-icons dark-matter">
                                  <button class="social-button facebook fa fa-facebook-square trackable" data-track-click="social_latestnews_facebook"></button>
                                  <button class="social-button twitter fa fa-twitter trackable" data-track-click="social_latestnews_twitter"></button>
                                </div>
                              </div>
</li>                            <li class="shareable" data-sequence="8c077dc4-5ad2-4f73-b9c3-a381c5fece05" data-number="961120" data-share-modprefix="mw_latestnews_" data-share-hover="true" data-share-text="Trump tells Hannity that Wall Street gains ‘in a sense’ are a cut in national debt" data-share-url="http://www.marketwatch.com/story/trump-tells-hannity-hes-very-happy-with-wall-street-gains-2017-10-11">
                              <span class="timestamp">4:00 A.M. ET</span>
                              <div class="headline">
                                <a target="_blank" href="/story/trump-tells-hannity-hes-very-happy-with-wall-street-gains-2017-10-11?mod=MW_story_latest_news">
                                    <span class="label Updated">Updated</span>
      Trump tells Hannity that Wall Street gains ‘in a sense’ are a cut in national debt
                                </a>
                                <div class="share-icons dark-matter">
                                  <button class="social-button facebook fa fa-facebook-square trackable" data-track-click="social_latestnews_facebook"></button>
                                  <button class="social-button twitter fa fa-twitter trackable" data-track-click="social_latestnews_twitter"></button>
                                </div>
                              </div>
</li>                            <li class="shareable" data-sequence="8c077dc4-5ad2-4f73-b9c3-a381c5fece05" data-number="961119" data-share-modprefix="mw_latestnews_" data-share-hover="true" data-share-text="Spanish stocks pull back after rally, as other European markets struggle for direction" data-share-url="http://www.marketwatch.com/story/spanish-stocks-pull-back-after-rally-as-other-european-markets-struggle-for-direction-2017-10-12">
                              <span class="timestamp">3:51 A.M. ET</span>
                              <div class="headline">
                                <a target="_blank" href="/story/spanish-stocks-pull-back-after-rally-as-other-european-markets-struggle-for-direction-2017-10-12?mod=MW_story_latest_news">
                                  Spanish stocks pull back after rally, as other European markets struggle for direction
                                </a>
                                <div class="share-icons dark-matter">
                                  <button class="social-button facebook fa fa-facebook-square trackable" data-track-click="social_latestnews_facebook"></button>
                                  <button class="social-button twitter fa fa-twitter trackable" data-track-click="social_latestnews_twitter"></button>
                                </div>
                              </div>
</li>                            <li class="shareable" data-sequence="8c077dc4-5ad2-4f73-b9c3-a381c5fece05" data-number="961118" data-share-modprefix="mw_latestnews_" data-share-hover="true" data-share-text="There’s a link between CEOs who torture the English language and poor stock performance" data-share-url="http://www.marketwatch.com/story/theres-a-link-between-ceos-who-torture-the-english-language-and-poor-stock-performance-2017-10-11">
                              <span class="timestamp">3:39 A.M. ET</span>
                              <div class="headline">
                                <a target="_blank" href="/story/theres-a-link-between-ceos-who-torture-the-english-language-and-poor-stock-performance-2017-10-11?mod=MW_story_latest_news">
                                    <span class="label Updated">Updated</span>
      There’s a link between CEOs who torture the English language and poor stock performance
                                </a>
                                <div class="share-icons dark-matter">
                                  <button class="social-button facebook fa fa-facebook-square trackable" data-track-click="social_latestnews_facebook"></button>
                                  <button class="social-button twitter fa fa-twitter trackable" data-track-click="social_latestnews_twitter"></button>
                                </div>
                              </div>
</li>                            <li class="shareable" data-sequence="8c077dc4-5ad2-4f73-b9c3-a381c5fece05" data-number="961117" data-share-modprefix="mw_latestnews_" data-share-hover="true" data-share-text="BNP Paribas to stop financing shale projects" data-share-url="http://www.marketwatch.com/story/bnp-paribas-to-stop-financing-shale-projects-2017-10-12">
                              <span class="timestamp">3:22 A.M. ET</span>
                              <div class="headline">
                                <a target="_blank" href="/story/bnp-paribas-to-stop-financing-shale-projects-2017-10-12?mod=MW_story_latest_news">
                                  BNP Paribas to stop financing shale projects
                                </a>
                                <div class="share-icons dark-matter">
                                  <button class="social-button facebook fa fa-facebook-square trackable" data-track-click="social_latestnews_facebook"></button>
                                  <button class="social-button twitter fa fa-twitter trackable" data-track-click="social_latestnews_twitter"></button>
                                </div>
                              </div>
</li>                            <li class="shareable" data-sequence="8c077dc4-5ad2-4f73-b9c3-a381c5fece05" data-number="961116" data-share-modprefix="mw_latestnews_" data-share-hover="true" data-share-text="There’s been a shocking surge in the number of obese children" data-share-url="http://www.marketwatch.com/story/theres-been-a-shocking-surge-in-the-number-of-obese-children-2017-10-11">
                              <span class="timestamp">3:20 A.M. ET</span>
                              <div class="headline">
                                <a target="_blank" href="/story/theres-been-a-shocking-surge-in-the-number-of-obese-children-2017-10-11?mod=MW_story_latest_news">
                                    <span class="label Updated">Updated</span>
      There’s been a shocking surge in the number of obese children
                                </a>
                                <div class="share-icons dark-matter">
                                  <button class="social-button facebook fa fa-facebook-square trackable" data-track-click="social_latestnews_facebook"></button>
                                  <button class="social-button twitter fa fa-twitter trackable" data-track-click="social_latestnews_twitter"></button>
                                </div>
                              </div>
</li>                    </ul>
                </div>
            </div>
        </div>

        <div id="site-identity">
            <a id="site-logo" href="//www.marketwatch.com/">
                <img class="logo" src="http://mw3.wsj.net/mw5/content/logos/mw_logo_onDark.svg" />
            </a>
            <div id="site-share">
                <div class="social-button facebook">
                    <a href="https://www.facebook.com/MarketWatch" alt="Like & Follow MarketWatch on Facebook" target="_blank">
                        <span class="icon"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 330.3 330.3" enable-background="new 0 0 330.3 330.3" xml:space="preserve">
<path d="M0,0v330.3h330.3V0H0z M284.8,72.1h-30.2c-10.6,0-14.4,6-14.4,14.4v28.7h44.6l-5.3,50.6h-39.3V307h-59.7V165.7h-30.2v-50.6
	h30.2V86.5c0-34,11.3-61.2,59.7-62.7h44.6V72.1z"/>
</svg></span>
                    </a>
                </div>
                <div class="social-button twitter">
                    <a href="https://twitter.com/MarketWatch" alt="Follow MarketWatch on Twitter" target="_blank">
                        <span class="icon"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 273.4 222.2" enable-background="new 0 0 273.4 222.2" xml:space="preserve">
<path fill="#FFFFFF" d="M273.4,26.3c-10.1,4.5-20.9,7.5-32.2,8.8c11.6-6.9,20.5-17.9,24.7-31C255,10.5,243,15.2,230.2,17.7
	C220,6.8,205.4,0,189.3,0c-31,0-56.1,25.1-56.1,56.1c0,4.4,0.5,8.7,1.5,12.8C88,66.5,46.7,44.2,19,10.3c-4.8,8.3-7.6,17.9-7.6,28.2
	c0,19.5,9.9,36.6,25,46.7c-9.2-0.3-17.8-2.8-25.4-7c0,0.2,0,0.5,0,0.7c0,27.2,19.3,49.8,45,55c-4.7,1.3-9.7,2-14.8,2
	c-3.6,0-7.1-0.4-10.6-1c7.1,22.3,27.9,38.5,52.4,39c-19.2,15-43.4,24-69.7,24c-4.5,0-9-0.3-13.4-0.8c24.8,15.9,54.3,25.2,86,25.2
	c103.2,0,159.6-85.5,159.6-159.6c0-2.4-0.1-4.9-0.2-7.3C256.4,47.4,265.9,37.5,273.4,26.3z"/>
</svg>
</span>
                    </a>
                </div>
                <div class="social-button linkedin">
                    <a href="https://www.linkedin.com/company/marketwatch" alt="Follow MarketWatch on LinkedIn" target="_blank">
                        <span class="icon"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 331.6 333.7" enable-background="new 0 0 331.6 333.7" xml:space="preserve">
<path d="M178.3,150.5V150c-0.1,0.2-0.2,0.3-0.3,0.5H178.3z M307.1,0H24.5C11,0,0,10.7,0,23.9v285.9c0,13.2,11,23.9,24.5,23.9h282.6
	c13.5,0,24.5-10.7,24.5-23.9V23.9C331.6,10.7,320.6,0,307.1,0z M100.5,279.3H50.4V128.7h50.1V279.3z M75.5,108.1h-0.3
	c-16.8,0-27.7-11.6-27.7-26c0-14.8,11.2-26,28.3-26c17.1,0,27.7,11.3,28,26C103.8,96.5,92.9,108.1,75.5,108.1z M281.1,279.3H231
	v-80.6c0-20.2-7.2-34.1-25.4-34.1c-13.8,0-22.1,9.3-25.7,18.3c-1.3,3.2-1.7,7.7-1.7,12.2v84.1h-50.1c0,0,0.7-136.5,0-150.7h50.1V150
	c6.6-10.3,18.5-24.9,45.1-24.9c33,0,57.7,21.5,57.7,67.8V279.3z"/>
</svg></span>
                    </a>
                </div>
                <div class="social-button google-plus">
                    <a href="https://plus.google.com/+MarketWatch" alt="Follow MarketWatch on Google Plus" target="_blank" rel="publisher">
                        <span class="icon"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 18 18" enable-background="new 0 0 18 18" xml:space="preserve">
<path fill="#FFFFFF" d="M8.2,0.9c0.1,0.1,0.3,0.2,0.5,0.4c0.2,0.2,0.3,0.4,0.5,0.7c0.2,0.3,0.3,0.6,0.4,0.9C9.8,3.2,9.8,3.6,9.8,4
	c0,0.8-0.2,1.5-0.5,2C9.1,6.3,8.9,6.5,8.7,6.8C8.5,7,8.3,7.2,8.1,7.4C7.9,7.5,7.8,7.7,7.7,7.9C7.5,8.1,7.5,8.3,7.5,8.6
	c0,0.2,0.1,0.4,0.2,0.6C7.8,9.3,7.9,9.5,8,9.6l0.8,0.7c0.5,0.4,0.9,0.9,1.3,1.3c0.3,0.5,0.5,1.2,0.5,2c0,1.1-0.5,2.2-1.5,3
	c-1,0.9-2.5,1.4-4.4,1.4c-1.6,0-2.8-0.4-3.6-1.1C0.4,16.3,0,15.5,0,14.6c0-0.4,0.1-0.9,0.4-1.5c0.3-0.5,0.7-1,1.4-1.4
	c0.7-0.4,1.5-0.7,2.3-0.9c0.8-0.1,1.5-0.2,2-0.2c-0.2-0.2-0.3-0.5-0.4-0.7C5.5,9.7,5.4,9.4,5.4,9.1c0-0.2,0-0.4,0.1-0.5
	c0.1-0.1,0.1-0.3,0.1-0.4c-0.3,0-0.5,0-0.7,0C3.7,8.2,2.8,7.8,2.1,7c-0.7-0.7-1-1.6-1-2.5c0-1.2,0.5-2.2,1.4-3.2
	c0.6-0.6,1.3-0.9,2-1.1C5.3,0.1,5.9,0,6.5,0h4.6L9.7,0.9H8.2z M9.1,14.5c0-0.6-0.2-1.1-0.6-1.6c-0.4-0.4-1-0.9-1.9-1.6
	c-0.1,0-0.3,0-0.5,0c-0.1,0-0.4,0-0.9,0c-0.5,0.1-1,0.2-1.4,0.3c-0.1,0-0.3,0.1-0.5,0.2c-0.2,0.1-0.4,0.2-0.6,0.4
	c-0.2,0.2-0.4,0.4-0.5,0.7c-0.2,0.3-0.2,0.7-0.2,1.1c0,0.8,0.4,1.5,1.1,2.1C3.7,16.7,4.6,17,5.8,17c1.1,0,1.9-0.3,2.5-0.7
	C8.9,15.8,9.1,15.2,9.1,14.5z M6,7.5c0.6,0,1.1-0.2,1.5-0.7c0.2-0.3,0.3-0.6,0.4-0.9c0-0.3,0-0.6,0-0.8c0-0.9-0.2-1.9-0.7-2.8
	C7,1.9,6.7,1.5,6.3,1.2C6,0.9,5.6,0.8,5.1,0.8C4.5,0.8,4,1.1,3.6,1.6C3.2,2.1,3,2.7,3.1,3.3c0,0.9,0.2,1.7,0.7,2.7
	C4,6.4,4.3,6.8,4.7,7.1C5.1,7.4,5.5,7.5,6,7.5z"/>
<path fill="#FFFFFF" d="M18,7.4h-2.4V5h-1.2v2.5H12v1.2h2.4v2.5h1.2V8.7H18V7.4z"/>
</svg>
</span>
                    </a>
                </div>
            </div>
              <a href="#" class="user" data-identity="login"><i class="fa fa-user"></i>Log In</a>
        </div>

    </div>
</header>
<div id="site-nav-placeholder">
  <nav id="site-nav" role="navigation">
    <div class="lame-content-wrapper">
      <div class="right-stuff">

        <button id="site-search-button" class="fa fa-search"></button>
      </div>
      <div id="nav-burger">
        <div class="nav-items">
          <button class="close">
            <svg version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 792 612" overflow="scroll" xml:space="preserve">
              <polygon fill="#FFFFFF" points="396,320.927 104.927,612 90,600.805 384.805,306 90,14.927 104.927,0 396,294.805 690.805,0 702,14.927 410.927,306 702,600.805 690.805,612 "/>
            </svg>
          </button>
          <div class="nav-item nav-home  with-child"   data-deltoro="topnews">
            <a href="/" data-track-click="MW_Nav_FP" class="site-nav-top trackable">Home</a>
            <div class="nav-dropdown">
              <button class="close fa fa-times-circle"></button>
              <div class="so-many-wrappers">
                  <div class="wrapper">
                    <div class="other-wrapper">
                      <ul class="nav-drop-children">
                        <li>
                          <a class="site-nav-sub" href="/newsviewer">News Viewer</a>
                        </li>
                        <li>
                          <a class="site-nav-sub" href="/video">Video</a>
                        </li>
                        <li>
                          <a class="site-nav-sub" href="/video/sectorwatch">SectorWatch</a>
                        </li>
                        <li>
                          <a class="site-nav-sub" href="/topics/columns/money-markets-and-more">Podcasts</a>
                        </li>
                        <li>
                          <a class="site-nav-sub" href="/commentary/first-take">First Take</a>
                        </li>
                        <li>
                          <a class="site-nav-sub" href="/game">Games</a>
                        </li>
                        <li>
                          <a class="site-nav-sub" href="/myportfolio">Portfolio</a>
                        </li>
                        <li>
                          <a class="site-nav-sub" href="/my">My MarketWatch</a>
                        </li>
                      </ul>
                      <div class="news">
                                <div id="ad-nav-home-sponsor" class="ad      " data-name="Sponsor" data-alias="Nav Home Sponsor" data-conditions="1"     data-site="marketwatch.com" data-zone="nav_front"
                                data-size="280x40" data-phone="" data-portrait="" data-landscape="" data-desktop="" data-targeting="">
                                                
                                </div>
                                                <div class="articles"></div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="nav-item nav-news-viewer  "  data-channel="/news/metasearch/mktw/foxtrotlatestnews" data-news-viewer="true">
            <a href="/newsviewer" data-track-click="MW_Nav_NV" class="site-nav-top trackable">News Viewer</a>
            <div class="nav-dropdown">
              <button class="close fa fa-times-circle"></button>
              <div class="so-many-wrappers">
                  <div class="wrapper">
                    <div class="news">
                              <div id="ad-nav-news-viewer-sponsor" class="ad      " data-name="Sponsor" data-alias="Nav News Viewer Sponsor" data-conditions="1"     data-site="marketwatch.com" data-zone="nav_newsviewer"
                              data-size="280x40" data-phone="" data-portrait="" data-landscape="" data-desktop="" data-targeting="">
                                              
                              </div>
                                            <div class="articles"></div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="nav-item nav-markets  with-child"  data-channel="/news/metasearch/mktw/navdropmarkets" >
            <a href="/markets" data-track-click="MW_Nav_MA" class="site-nav-top trackable">Markets</a>
            <div class="nav-dropdown">
              <button class="close fa fa-times-circle"></button>
              <div class="so-many-wrappers">
                  <div class="wrapper">
                    <div class="other-wrapper">
                      <ul class="nav-drop-children">
                        <li>
                          <a class="site-nav-sub" href="/markets/us">U.S.</a>
                        </li>
                        <li>
                          <a class="site-nav-sub" href="/markets/europe-middle-east">Europe/Middle East</a>
                        </li>
                        <li>
                          <a class="site-nav-sub" href="/markets/emerging-markets">Emerging Markets</a>
                        </li>
                        <li>
                          <a class="site-nav-sub" href="/markets/asia">Asia</a>
                        </li>
                        <li>
                          <a class="site-nav-sub" href="/markets/canada">Canada</a>
                        </li>
                        <li>
                          <a class="site-nav-sub" href="/video/sectorwatch">SectorWatch</a>
                        </li>
                        <li>
                          <span class="site-nav-label">Columns</span>
                          <ul>
                            <li>
                              <a class="site-nav-sub" href="/topics/columns/market-snapshot">Market Snapshot</a>
                            </li>
                            <li>
                              <a class="site-nav-sub" href="/topics/columns/movers-and-shakers">Movers &amp; Shakers</a>
                            </li>
                            <li>
                              <a class="site-nav-sub" href="/topics/columns/the-tell">The Tell</a>
                            </li>
                            <li>
                              <a class="site-nav-sub" href="/topics/columns/currencies">Currencies</a>
                            </li>
                            <li>
                              <a class="site-nav-sub" href="/topics/columns/futures-movers">Futures Movers</a>
                            </li>
                            <li>
                              <a class="site-nav-sub" href="/topics/columns/need-to-know">Pre-Market News</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <span class="site-nav-label">Tools</span>
                          <ul>
                            <li>
                              <a class="site-nav-sub" href="/earningswall">Earnings Wall</a>
                            </li>
                            <li>
                              <a class="site-nav-sub" href="/tools/marketsummary">Markets Overview</a>
                            </li>
                            <li>
                              <a class="site-nav-sub" href="/tools/ipocalendar">IPO Calendar</a>
                            </li>
                            <li>
                              <a class="site-nav-sub" href="/tools/earningscalendar">Earnings Calendar</a>
                            </li>
                            <li>
                              <a class="site-nav-sub" href="/investing/currencies/tools">Currency Tools</a>
                            </li>
                            <li>
                              <a class="site-nav-sub" href="/tools/marketsummary/futures/contracts.asp">Futures Contracts</a>
                            </li>
                            <li>
                              <a class="site-nav-sub" href="/tools/marketsummary/screener">Market Screener</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <div class="news">
                                <div id="ad-nav-markets-sponsor" class="ad      " data-name="Sponsor" data-alias="Nav Markets Sponsor" data-conditions="1"     data-site="marketwatch.com" data-zone="nav_markets"
                                data-size="280x40" data-phone="" data-portrait="" data-landscape="" data-desktop="" data-targeting="">
                                                
                                </div>
                                                <div class="articles"></div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="nav-item nav-investing  with-child"  data-channel="/news/metasearch/mktw/navdropinvesting" >
            <a href="/investing" data-track-click="MW_Nav_INV" class="site-nav-top trackable">Investing</a>
            <div class="nav-dropdown">
              <button class="close fa fa-times-circle"></button>
              <div class="so-many-wrappers">
                  <div class="wrapper">
                    <div class="other-wrapper">
                      <ul class="nav-drop-children">
                        <li>
                          <a class="site-nav-sub" href="/investing/stocks">Stocks</a>
                        </li>
                        <li>
                          <a class="site-nav-sub" href="/investing/mutual-funds">Mutual Funds</a>
                        </li>
                        <li>
                          <a class="site-nav-sub" href="/investing/etf">ETFs</a>
                        </li>
                        <li>
                          <a class="site-nav-sub" href="/optionscenter">Options</a>
                        </li>
                        <li>
                          <a class="site-nav-sub" href="/investing/bonds">Bonds</a>
                        </li>
                        <li>
                          <a class="site-nav-sub" href="/investing/commodities">Commodities</a>
                        </li>
                        <li>
                          <a class="site-nav-sub" href="/investing/currencies">Currencies</a>
                        </li>
                        <li>
                          <a class="site-nav-sub" href="/investing/futures">Futures</a>
                        </li>
                        <li>
                          <a class="site-nav-sub" href="/section/financial-adviser-center">Financial Adviser Center</a>
                        </li>
                        <li>
                          <a class="site-nav-sub" href="/investing/hedge-funds">Hedge Funds/Insider Trades</a>
                        </li>
                        <li>
                          <a class="site-nav-sub" href="/pf/started/gettingstarted_default.asp">Getting Started</a>
                        </li>
                        <li>
                          <a class="site-nav-sub" href="/investing/marketwatch-adviser">MarketWatch Adviser</a>
                        </li>
                        <li>
                          <span class="site-nav-label">Columns</span>
                          <ul>
                            <li>
                              <a class="site-nav-sub" href="/topics/columns/marketwatch-options-trader?dist=IBILM1AUM">Options Trader</a>
                            </li>
                            <li>
                              <a class="site-nav-sub" href="/topics/columns/revolution-investing?dist=IBILM1AVV">Revolution Investing</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <span class="site-nav-label">Tools</span>
                          <ul>
                            <li>
                              <a class="site-nav-sub" href="/tools/stockresearch/screener/">Stock Screener</a>
                            </li>
                            <li>
                              <a class="site-nav-sub" href="/tools/mutual-fund/screener">Funds Finder</a>
                            </li>
                            <li>
                              <a class="site-nav-sub" href="/tools/etfs/html-adv-screener.asp">ETF Screener</a>
                            </li>
                            <li>
                              <a class="site-nav-sub" href="/optionscenter/screener">Options Screener</a>
                            </li>
                            <li>
                              <a class="site-nav-sub" href="/tools/ipocalendar">IPO Calendar</a>
                            </li>
                            <li>
                              <a class="site-nav-sub" href="/tools/earningscalendar">Earnings Calendar</a>
                            </li>
                            <li>
                              <a class="site-nav-sub" href="/investing/research-tools">More...</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <div class="news">
                                <div id="ad-nav-investing-sponsor" class="ad      " data-name="Sponsor" data-alias="Nav Investing Sponsor" data-conditions="1"     data-site="marketwatch.com" data-zone="nav_investing"
                                data-size="280x40" data-phone="" data-portrait="" data-landscape="" data-desktop="" data-targeting="">
                                                
                                </div>
                                                <div class="articles"></div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="nav-item nav-personal-finance  with-child"  data-channel="/news/metasearch/mktw/navdroppersonalfinance" >
            <a href="/personal-finance" data-track-click="MW_Nav_PF" class="site-nav-top trackable">Personal Finance</a>
            <div class="nav-dropdown">
              <button class="close fa fa-times-circle"></button>
              <div class="so-many-wrappers">
                  <div class="wrapper">
                    <div class="other-wrapper">
                      <ul class="nav-drop-children">
                        <li>
                          <a class="site-nav-sub" href="/search?m=Column&amp;mp=10%20Things">10 Things</a>
                        </li>
                        <li>
                          <a class="site-nav-sub" href="/search?m=Column&amp;mp=Big%20Spender">Big Spender</a>
                        </li>
                        <li>
                          <a class="site-nav-sub" href="/real-estate">Real Estate</a>
                        </li>
                        <li>
                          <a class="site-nav-sub" href="/spending-saving">Spending &amp; Saving</a>
                        </li>
                        <li>
                          <a class="site-nav-sub" href="/search?m=Column&amp;mp=TaxWatch">Taxes</a>
                        </li>
                        <li>
                          <span class="site-nav-label">Columns</span>
                          <ul>
                            <li>
                              <a class="site-nav-sub" href="/topics/columns/the-moneyologist">The Moneyologist</a>
                            </li>
                            <li>
                              <a class="site-nav-sub" href="/search?m=Column&amp;mp=Brett%20Arends%27s%20ROI">Brett Arends</a>
                            </li>
                            <li>
                              <a class="site-nav-sub" href="/topics/columns/tax-guy">Bill Bischoff</a>
                            </li>
                            <li>
                              <a class="site-nav-sub" href="/topics/columns/amy-hoaks-home-economics">Amy Hoak</a>
                            </li>
                            <li>
                              <a class="site-nav-sub" href="/topics/columns/chuck-jaffe">Chuck Jaffe</a>
                            </li>
                            <li>
                              <a class="site-nav-sub" href="/topics/columns/jennifer-openshaw">Jennifer Openshaw</a>
                            </li>
                            <li>
                              <a class="site-nav-sub" href="/topics/columns/jennifer-waterss-consumer-confidential">Jennifer Waters</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <span class="site-nav-label">Tools</span>
                          <ul>
                            <li>
                              <a class="site-nav-sub" href="/tools/mutual-fund/screener">Funds Finder</a>
                            </li>
                            <li>
                              <a class="site-nav-sub" href="/tools/pftools/">Today&#39;s Rates</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <div class="news">
                                <div id="ad-nav-personal-finance-sponsor" class="ad      " data-name="Sponsor" data-alias="Nav Personal Finance Sponsor" data-conditions="1"     data-site="marketwatch.com" data-zone="nav_personalfinance"
                                data-size="280x40" data-phone="" data-portrait="" data-landscape="" data-desktop="" data-targeting="">
                                                
                                </div>
                                                <div class="articles"></div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="nav-item nav-retirement  with-child"  data-channel="/news/metasearch/mktw/navdropretirement" >
            <a href="/retirement" data-track-click="MW_Nav_Retirement" class="site-nav-top trackable">Retirement</a>
            <div class="nav-dropdown">
              <button class="close fa fa-times-circle"></button>
              <div class="so-many-wrappers">
                  <div class="wrapper">
                    <div class="other-wrapper">
                      <ul class="nav-drop-children">
                        <li>
                          <a class="site-nav-sub" href="/retirement/locations">Retire Here, Not There</a>
                        </li>
                        <li>
                          <a class="site-nav-sub" href="/topics/columns/encore">Encore</a>
                        </li>
                        <li>
                          <a class="site-nav-sub" href="/retirement/taxes">Taxes</a>
                        </li>
                        <li>
                          <a class="site-nav-sub" href="/retirement/guides">How-to Guides</a>
                        </li>
                        <li>
                          <a class="site-nav-sub" href="/retirement/social-security">Social Security</a>
                        </li>
                        <li>
                          <a class="site-nav-sub" href="/retirement/estate-planning">Estate Planning</a>
                        </li>
                        <li>
                          <a class="site-nav-sub" href="/retirement/events">Events</a>
                        </li>
                        <li>
                          <span class="site-nav-label">Columns</span>
                          <ul>
                            <li>
                              <a class="site-nav-sub" href="/topics/columns/robert-powells-retirement-portfolio">Robert Powell&#39;s Retirement Portfolio</a>
                            </li>
                            <li>
                              <a class="site-nav-sub" href="/topics/columns/andrea-coombes-working-retirement">Andrea Coombes&#39;s Working Retirement</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <span class="site-nav-label">Tools</span>
                          <ul>
                            <li>
                              <a class="site-nav-sub" href="/retirement/tools/retirement-planning-calculator">Retirement Planner</a>
                            </li>
                            <li>
                              <a class="site-nav-sub" href="/retirement/tools/retirement-savings-calculator">How long will my money last?</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <div class="news">
                                <div id="ad-nav-retirement-sponsor" class="ad      " data-name="Sponsor" data-alias="Nav Retirement Sponsor" data-conditions="1"     data-site="marketwatch.com" data-zone="nav_retirement"
                                data-size="280x40" data-phone="" data-portrait="" data-landscape="" data-desktop="" data-targeting="">
                                                
                                </div>
                                                <div class="articles"></div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="nav-item nav-economy  with-child"  data-channel="/news/metasearch/mktw/navdropeconomypolitics" >
            <a href="/economy-politics" data-track-click="MW_Nav_EP" class="site-nav-top trackable">Economy</a>
            <div class="nav-dropdown">
              <button class="close fa fa-times-circle"></button>
              <div class="so-many-wrappers">
                  <div class="wrapper">
                    <div class="other-wrapper">
                      <ul class="nav-drop-children">
                        <li>
                          <a class="site-nav-sub" href="/topics/columns/the-fed">Federal Reserve</a>
                        </li>
                        <li>
                          <a class="site-nav-sub" href="/topics/columns/capitol-report">Capitol Report</a>
                        </li>
                        <li>
                          <a class="site-nav-sub" href="/topics/columns/economic-report">Economic Report</a>
                        </li>
                        <li>
                          <span class="site-nav-label">Columns</span>
                          <ul>
                            <li>
                              <a class="site-nav-sub" href="/topics/columns/darrell-delamaides-political-capital">Darrell Delamaide</a>
                            </li>
                            <li>
                              <a class="site-nav-sub" href="/topics/columns/rex-nutting">Rex Nutting</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <span class="site-nav-label">Tools</span>
                          <ul>
                            <li>
                              <a class="site-nav-sub" href="/economy-politics/calendars/economic">Economic Calendar</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <div class="news">
                                <div id="ad-nav-economy-sponsor" class="ad      " data-name="Sponsor" data-alias="Nav Economy Sponsor" data-conditions="1"     data-site="marketwatch.com" data-zone="nav_economypolitics"
                                data-size="280x40" data-phone="" data-portrait="" data-landscape="" data-desktop="" data-targeting="">
                                                
                                </div>
                                                <div class="articles"></div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="nav-item nav-real-estate  with-child"  data-channel="/news/metasearch/mktw/realestatenav" >
            <a href="/real-estate" data-track-click="MW_Nav_RE" class="site-nav-top trackable">Real Estate</a>
            <div class="nav-dropdown">
              <button class="close fa fa-times-circle"></button>
              <div class="so-many-wrappers">
                  <div class="wrapper">
                    <div class="other-wrapper">
                      <ul class="nav-drop-children">
                        <li>
                          <a class="site-nav-sub" href="https://www.realtor.com/">realtor.com</a>
                        </li>
                      </ul>
                      <div class="news">
                                <div id="ad-nav-real-estate-sponsor" class="ad      " data-name="Sponsor" data-alias="Nav Real Estate Sponsor" data-conditions="1"     data-site="marketwatch.com" data-zone="nav_realestate"
                                data-size="280x40" data-phone="" data-portrait="" data-landscape="" data-desktop="" data-targeting="">
                                                
                                </div>
                                                <div class="articles"></div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="nav-item nav-entertainment  "  data-channel="/news/metasearch/mktw/entertainment" >
            <a href="/entertainment" data-track-click="MW_Nav_ENT" class="site-nav-top trackable">Entertainment</a>
            <div class="nav-dropdown">
              <button class="close fa fa-times-circle"></button>
              <div class="so-many-wrappers">
                  <div class="wrapper">
                    <div class="other-wrapper">
                      <ul class="nav-drop-children">
                        .
                      </ul>
                      <div class="news">
                                <div id="ad-nav-entertainment-sponsor" class="ad      " data-name="Sponsor" data-alias="Nav Entertainment Sponsor" data-conditions="1"     data-site="marketwatch.com" data-zone="nav_entertainment"
                                data-size="280x40" data-phone="" data-portrait="" data-landscape="" data-desktop="" data-targeting="">
                                                
                                </div>
                                                <div class="articles"></div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div id="member-nav">
          <span class="title">My MarketWatch</span>
          <ul >
            <li class="nav-item nav-watchlist">
              <a href="/watchlist">Watchlist</a>
            </li>
            <li class="nav-item nav-alerts">
              <a href="/tools/alerts/myalertsummary.asp?link=MW_Nav_AL">Alerts</a>
            </li>
            <li class="nav-item nav-games">
              <a href="/game">Games</a>
            </li>
            <li class="nav-item nav-login">
              <a href="https://accounts.marketwatch.com/login?ifr=1&amp;target=http://www.marketwatch.com/story/putin-russian-central-bank-come-down-hard-against-bitcoin-2017-10-10">Log In</a>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div id="share-tools-fixed">
    <div id="share-tools-content"></div>
  </div>
</div></div>
<div id="non-chrome">
  <div id="content-cutout">
    <div class="lame-content-wrapper">
      <div id="market-overview-mobile-placeholder"></div>
    </div>
  </div>

  <main id="main-hole" role="main">
    <div class="lame-content-wrapper">

      <div id="right-rail-cutout">
      </div>

      <div id="above">
      </div>

      <div id="brass-rail">
        <div id="ad-display-ad" class="ad module  sticky inactive  " data-name="Display Ad"  data-conditions="2"  data-sticky-lower-bound-id="brass-rail" data-scroll-padding="500" data-refresh="20000" data-refresh-once="true" data-site="marketwatch.com" data-zone="article"
        data-size="300x250,300x600,300x1050" data-phone="" data-portrait="300x250" data-landscape="" data-desktop="" data-targeting="">
                        
        </div>
      </div>

      <div id="topper">
      </div>

      <div id="content-hole">
        <p>Well, this is unfortunate...</p>
        <h1>Your story was not found</h1>
        <div class="message">
          <p>The story you requested could not be found.</p>
          <p>To find what you're looking for, try one of these options.</p>
        </div>
        <h3><a href="/">MarketWatch Front Page</a></h3>
        <p>A starting place for all your financial news and information needs.</p>
        <h3><a href="/search?q=">Search</a></h3>
        <p>Search MarketWatch news, past and present.</p>
        <h3><a href="/investing">Quotes</a></h3>
        <p>Get quotes for stocks, mutual funds, options and market indexes.</p>
        <p class="feedback">If you reached this page by clicking a link on the MarketWatch site, please report it to <a href="/support/feedback.asp">MarketWatch Feedback</a>.</p>
        <h3>Suggest Content</h3>
        <p>Have a suggestion for a future MarketWatch article, <a href="/support/feedback.asp">tell us about it</a>!</p>
      </div>

      <div id="right-rail">
<div id="trading-center" class="module">
    <h3 class="module-header">MarketWatch <b>Partner Center</b></h3>
    <ul class="list list--broker">
    <li class="broker__item">
                <div id="ad-broker-button-1" class="ad      " data-name="Broker Button 1"  data-conditions="1"    data-refresh="420000" data-refresh-once="false" data-site="brokerbuttons.marketwatch.com" data-zone="article"
                data-size="120x60" data-phone="" data-portrait="" data-landscape="" data-desktop="" data-targeting="pos=1;tile=10;">
                                
                </div>
            </li>
    <li class="broker__item">
                <div id="ad-broker-button-2" class="ad      " data-name="Broker Button 2"  data-conditions="0"    data-refresh="420000" data-refresh-once="false" data-site="brokerbuttons.marketwatch.com" data-zone="article"
                data-size="120x60" data-phone="" data-portrait="" data-landscape="" data-desktop="" data-targeting="pos=2;tile=11;">
                                
                </div>
            </li>
    <li class="broker__item">
                <div id="ad-broker-button-3" class="ad      " data-name="Broker Button 3"  data-conditions="1"    data-refresh="420000" data-refresh-once="false" data-site="brokerbuttons.marketwatch.com" data-zone="article"
                data-size="120x60" data-phone="" data-portrait="" data-landscape="" data-desktop="" data-targeting="pos=3;tile=12;">
                                
                </div>
            </li>
  </ul>
</div>
<div id="moreNews" class="module">
    <h3 class="module-header">Most Popular</h3>
    <ul class="topStories">
      <li>
        <div class="thumbnail ">
          <img src="http://s.marketwatch.com/public/resources/MWimages/MW-FW102_fire10_MC_20171011190211.jpg">
        </div>
        <a href="/story/frightening-surreal-scenes-of-wildfires-in-californias-wine-country-in-4-videos-2017-10-11?mod=MW_story_top_stories">Frightening, surreal scenes of wildfires in California’s Wine Country, in 4 videos</a>
      </li>
      <li>
        <div class="thumbnail ">
          <img src="http://s.marketwatch.com/public/resources/MWimages/MW-FH194_snapip_MC_20170302144630.jpg">
        </div>
        <a href="/story/snap-stock-enjoys-best-trading-day-since-ipo-as-analyst-predicts-stronger-user-growth-2017-10-11?mod=MW_story_top_stories">Snap stock enjoys best trading day since IPO as analyst predicts stronger user growth</a>
      </li>
      <li>
        <div class="thumbnail ">
          <img src="http://s.marketwatch.com/public/resources/MWimages/MW-FW075_Teenag_MC_20171011135232.jpg">
        </div>
        <a href="/story/teenagers-just-like-their-parents-crave-this-one-status-symbol-more-than-ever-before-2017-10-11?mod=MW_story_top_stories">Teenagers, just like their parents, crave this status symbol more than ever</a>
      </li>
      <li>
        <div class="thumbnail ">
          <img src="http://s.marketwatch.com/public/resources/MWimages/MW-FV939_ss_ben_MC_20171009155204.jpg">
        </div>
        <a href="/story/heres-how-much-social-security-checks-could-increase-in-2018-2017-10-10?mod=MW_story_top_stories">Here’s how much Social Security checks could increase in 2018</a>
      </li>
      <li>
        <div class="thumbnail ">
          <img src="https://m.wsj.net/video/20170210/02102017thaler_sectorwatch/02102017thaler_sectorwatch_167x94.jpg">
        </div>
        <a href="/video/sectorwatch/richard-thaler-here-the-best-investing-strategy/7EAB465B-F550-4590-AF3D-45654E7A486A.html?mod=MW_story_top_stories">Richard Thaler: Here&#39;s the best investing strategy</a>
      </li>
    </ul>
</div>        <div id="ad-bottom-display-ad" class="ad module in-view sticky   " data-name="Bottom Display Ad"  data-conditions="4"  data-sticky-lower-bound-id="main-hole"   data-site="bottom.marketwatch.com" data-zone="article"
        data-size="300x250,300x600" data-phone="" data-portrait="" data-landscape="" data-desktop="" data-targeting="">
                        
        </div>
      </div>

      <div id="little-hole">
      </div>

    </div>
  </main>

</div>
<footer id="site-footer" class="placeholder" role="contentinfo">
    <div id="end-cap">
        <div class="lame-content-wrapper">
            <div class="link-list">
                <span class="column">MarketWatch</span>
                <ul>
                    <li><a href="/site-index">Site Index</a></li>
                    <li><a href="/topics">Topics</a></li>
                    <li><a href="/help">Help</a></li>
                    <li><a href="/support/feedback.asp">Feedback</a></li>
                    <li><a href="/newsroom/roster">Newsroom Roster</a></li>
                    <li><a href="http://live.wsj.com">Media Archive</a></li>
                    <li><a href="/premium-newsletters?link=djmc_footer_multi">Premium Products</a></li>
                    <li><a href="/mobile">Mobile</a></li>
                </ul>
            </div>
            <div class="link-list">
                <span class="column">Company</span>
                <ul>
                    <li><a href="/companyinfo">Company Info</a></li>
                    <li><a href="http://www.dowjones.com/code-conduct/">Code of Conduct</a></li>
                    <li><a href="/column/corrections">Corrections</a></li>
                    <li><a href="http://dowjonesonline.com/">Advertising Media Kit</a></li>
                    <li><a href="http://www.wsjlocal.com/">Advertise Locally</a></li>
                    <li><a href="http://www.djreprints.com/">Reprints &amp; Licensing</a></li>
                    <li><a href="/brokercenter?reflink=djm_mwbrokercenter_footer">Broker Center</a></li>
                    <li><a href="/support/cookie.asp#cookies_advertising">Your Ad Choices</a></li>
                </ul>
            </div>
            <div class="link-list">
                <span class="column">Dow Jones Network</span>
                <ul>
                    <li><a href="http://online.wsj.com/">WSJ.com</a></li>
                    <li><a href="http://online.barrons.com/">Barron's Online</a></li>
                    <li><a href="http://www.bigcharts.com/">BigCharts</a></li>
                    <li><a href="/game">Virtual Stock Exchange</a></li>
                    <li><a href="https://www.fnlondon.com/">Financial News London</a></li>
                    <li><a href="http://guides.wsj.com/small-business/">WSJ.com Small Business</a></li>
                    <li><a href="https://www.realtor.com/" target="_blank">realtor.com</a></li>
                    <li><a href="https://www.mansionglobal.com/" target="_blank">Mansion Global</a></li>
                </ul>
            </div>
            <div id="back-to-top">
                <button id="back-to-top-button">Back to Top</button>
            </div>
            <div id="footer-app-store">
                <a id="footer-apple-app-store" href="https://itunes.apple.com/app/marketwatch/id336693422?ign-mpt=uo%3D6&mt=8" target="_blank"></a>
                <a id="footer-google-play" href="https://play.google.com/store/apps/details?id=com.marketwatch" target="_blank"></a>
            </div>
        </div>
    </div>
    <div id="legal-footer">
        <div class="lame-content-wrapper">
            <div id="footer-identity">
                <div id="footer-logo">
                    <img class="logo-on-dark" src="http://mw3.wsj.net/mw5/content/logos/mw_logo_onDark.svg" alt="MarketWatch" />
                    <img class="logo-on-light" src="http://mw3.wsj.net/mw5/content/logos/mw_logo_onLight.svg" alt="MarketWatch" />
                </div>
              <div id="site-share-footer">
                <div class="social-button facebook">
                  <a href="https://www.facebook.com/MarketWatch" alt="Like & Follow MarketWatch on Facebook" target="_blank">
                    <span class="icon"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 330.3 330.3" enable-background="new 0 0 330.3 330.3" xml:space="preserve">
<path d="M0,0v330.3h330.3V0H0z M284.8,72.1h-30.2c-10.6,0-14.4,6-14.4,14.4v28.7h44.6l-5.3,50.6h-39.3V307h-59.7V165.7h-30.2v-50.6
	h30.2V86.5c0-34,11.3-61.2,59.7-62.7h44.6V72.1z"/>
</svg></span>
                  </a>
                </div>
                <div class="social-button twitter">
                  <a href="https://twitter.com/MarketWatch" alt="Follow MarketWatch on Twitter" target="_blank">
                    <span class="icon"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 273.4 222.2" enable-background="new 0 0 273.4 222.2" xml:space="preserve">
<path fill="#FFFFFF" d="M273.4,26.3c-10.1,4.5-20.9,7.5-32.2,8.8c11.6-6.9,20.5-17.9,24.7-31C255,10.5,243,15.2,230.2,17.7
	C220,6.8,205.4,0,189.3,0c-31,0-56.1,25.1-56.1,56.1c0,4.4,0.5,8.7,1.5,12.8C88,66.5,46.7,44.2,19,10.3c-4.8,8.3-7.6,17.9-7.6,28.2
	c0,19.5,9.9,36.6,25,46.7c-9.2-0.3-17.8-2.8-25.4-7c0,0.2,0,0.5,0,0.7c0,27.2,19.3,49.8,45,55c-4.7,1.3-9.7,2-14.8,2
	c-3.6,0-7.1-0.4-10.6-1c7.1,22.3,27.9,38.5,52.4,39c-19.2,15-43.4,24-69.7,24c-4.5,0-9-0.3-13.4-0.8c24.8,15.9,54.3,25.2,86,25.2
	c103.2,0,159.6-85.5,159.6-159.6c0-2.4-0.1-4.9-0.2-7.3C256.4,47.4,265.9,37.5,273.4,26.3z"/>
</svg>
</span>
                  </a>
                </div>
                <div class="social-button linkedin">
                  <a href="https://www.linkedin.com/company/marketwatch" alt="Follow MarketWatch on LinkedIn" target="_blank">
                    <span class="icon"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 331.6 333.7" enable-background="new 0 0 331.6 333.7" xml:space="preserve">
<path d="M178.3,150.5V150c-0.1,0.2-0.2,0.3-0.3,0.5H178.3z M307.1,0H24.5C11,0,0,10.7,0,23.9v285.9c0,13.2,11,23.9,24.5,23.9h282.6
	c13.5,0,24.5-10.7,24.5-23.9V23.9C331.6,10.7,320.6,0,307.1,0z M100.5,279.3H50.4V128.7h50.1V279.3z M75.5,108.1h-0.3
	c-16.8,0-27.7-11.6-27.7-26c0-14.8,11.2-26,28.3-26c17.1,0,27.7,11.3,28,26C103.8,96.5,92.9,108.1,75.5,108.1z M281.1,279.3H231
	v-80.6c0-20.2-7.2-34.1-25.4-34.1c-13.8,0-22.1,9.3-25.7,18.3c-1.3,3.2-1.7,7.7-1.7,12.2v84.1h-50.1c0,0,0.7-136.5,0-150.7h50.1V150
	c6.6-10.3,18.5-24.9,45.1-24.9c33,0,57.7,21.5,57.7,67.8V279.3z"/>
</svg></span>
                  </a>
                </div>
                <div class="social-button google-plus">
                  <a href="https://plus.google.com/+MarketWatch" alt="Follow MarketWatch on Google Plus" target="_blank">
                    <span class="icon"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 18 18" enable-background="new 0 0 18 18" xml:space="preserve">
<path fill="#FFFFFF" d="M8.2,0.9c0.1,0.1,0.3,0.2,0.5,0.4c0.2,0.2,0.3,0.4,0.5,0.7c0.2,0.3,0.3,0.6,0.4,0.9C9.8,3.2,9.8,3.6,9.8,4
	c0,0.8-0.2,1.5-0.5,2C9.1,6.3,8.9,6.5,8.7,6.8C8.5,7,8.3,7.2,8.1,7.4C7.9,7.5,7.8,7.7,7.7,7.9C7.5,8.1,7.5,8.3,7.5,8.6
	c0,0.2,0.1,0.4,0.2,0.6C7.8,9.3,7.9,9.5,8,9.6l0.8,0.7c0.5,0.4,0.9,0.9,1.3,1.3c0.3,0.5,0.5,1.2,0.5,2c0,1.1-0.5,2.2-1.5,3
	c-1,0.9-2.5,1.4-4.4,1.4c-1.6,0-2.8-0.4-3.6-1.1C0.4,16.3,0,15.5,0,14.6c0-0.4,0.1-0.9,0.4-1.5c0.3-0.5,0.7-1,1.4-1.4
	c0.7-0.4,1.5-0.7,2.3-0.9c0.8-0.1,1.5-0.2,2-0.2c-0.2-0.2-0.3-0.5-0.4-0.7C5.5,9.7,5.4,9.4,5.4,9.1c0-0.2,0-0.4,0.1-0.5
	c0.1-0.1,0.1-0.3,0.1-0.4c-0.3,0-0.5,0-0.7,0C3.7,8.2,2.8,7.8,2.1,7c-0.7-0.7-1-1.6-1-2.5c0-1.2,0.5-2.2,1.4-3.2
	c0.6-0.6,1.3-0.9,2-1.1C5.3,0.1,5.9,0,6.5,0h4.6L9.7,0.9H8.2z M9.1,14.5c0-0.6-0.2-1.1-0.6-1.6c-0.4-0.4-1-0.9-1.9-1.6
	c-0.1,0-0.3,0-0.5,0c-0.1,0-0.4,0-0.9,0c-0.5,0.1-1,0.2-1.4,0.3c-0.1,0-0.3,0.1-0.5,0.2c-0.2,0.1-0.4,0.2-0.6,0.4
	c-0.2,0.2-0.4,0.4-0.5,0.7c-0.2,0.3-0.2,0.7-0.2,1.1c0,0.8,0.4,1.5,1.1,2.1C3.7,16.7,4.6,17,5.8,17c1.1,0,1.9-0.3,2.5-0.7
	C8.9,15.8,9.1,15.2,9.1,14.5z M6,7.5c0.6,0,1.1-0.2,1.5-0.7c0.2-0.3,0.3-0.6,0.4-0.9c0-0.3,0-0.6,0-0.8c0-0.9-0.2-1.9-0.7-2.8
	C7,1.9,6.7,1.5,6.3,1.2C6,0.9,5.6,0.8,5.1,0.8C4.5,0.8,4,1.1,3.6,1.6C3.2,2.1,3,2.7,3.1,3.3c0,0.9,0.2,1.7,0.7,2.7
	C4,6.4,4.3,6.8,4.7,7.1C5.1,7.4,5.5,7.5,6,7.5z"/>
<path fill="#FFFFFF" d="M18,7.4h-2.4V5h-1.2v2.5H12v1.2h2.4v2.5h1.2V8.7H18V7.4z"/>
</svg>
</span>
                  </a>
                </div>
              </div>
            </div>
            <p>Copyright &copy;2017 MarketWatch, Inc.  All rights reserved.</p>
            <p>
                By using this site you agree to the <a href="//www.marketwatch.com/support/disclaimer.asp">Terms of Service</a>,
                <a href="/support/privacy.asp">Privacy Policy</a>, and <a href="https://www.dowjones.com/cookies-policy/" target="_blank">Cookie Policy</a>.
            </p>
            <p class="data">
                Intraday Data provided by SIX Financial Information and subject to <a href="/investing/terms-of-use">terms of use</a>.
                Historical and current end-of-day data provided by SIX Financial Information.
                All quotes are in local exchange time. Real-time last sale data for U.S. stock quotes reflect trades reported through Nasdaq only. 
                Intraday data delayed at least 15 minutes or per exchange requirements.
            </p>
        </div>
    </div>
</footer>
<div class="lightbox lightbox--search">
    <div class="container search--container">
        <div class="row search--bar">
            <div class="col col--12">
                <button class="close"><svg version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 792 612" overflow="scroll" xml:space="preserve"><polygon fill="#FFFFFF" points="396,320.927 104.927,612 90,600.805 384.805,306 90,14.927 104.927,0 396,294.805 690.805,0 702,14.927 410.927,306 702,600.805 690.805,612 "/></svg></button>
                <input class="search__input" type="text" placeholder="Enter a symbol or keyword">
                <i class="fa fa-search"></i>
                <div class="search--advanced">
                    <a href="/search?q=">Advanced Search</a>
                </div>
            </div>
        </div>
        <div class="row row--results search--results"></div>
    </div>

    <template id="sr-template">
        <div id="search-stocks" class="col col--7 search--section">
            <h3>Stocks</h3>
        </div>
        <div class="col col--5 search--editorial">
            <div id="search-columns" class="search--section">
                <h3>Columns</h3>
            </div>
            <div id="search-authors" class="search--section">
                <h3>Authors</h3>
            </div>
            <div id="search-topics" class="search--section">
                <h3>Topics</h3>
            </div>
        </div>
    </template>

    <template id="sr-result-count">
        <span class="results-count"></span>
    </template>

    <template id="sr-no-results">
        <div class="no-results">No results found</div>
    </template>

    <template id="sr-quote-result">
        <a class="quote-box" href="">
            <h4></h4>
            <div class="company"></div>
            <div class="quote">
                <span class="price"></span>
                <span class="net change"></span>
                <span class="percent change"></span>
            </div>
        </a>
    </template>

    <template id="sr-editorial-result">
        <div>
            <a href=""></a>
        </div>
    </template>

    <template id="sr-topic-result">
        <div class="result-type"></div>
        <div class="result-value">
            <a href=""></a>
        </div>
    </template>
</div><div id="media-swatch"></div>
<script src='http://sts3.wsj.net/bucket-a/foxtrot/public/vendor.min-66e6eb83d3.js' type='text/javascript'></script>
<script src='http://sts3.wsj.net/bucket-a/foxtrot/public/articletail.min-76a4294203.js' type='text/javascript'></script>

<div data-module-id="12" data-module-name="mw.svc.page.Partials" data-module-zone="partials" class="zonedModule">

<script data-template-id="../view/partials/_latest_news" type="text/mustache"><li class="shareable" data-sequence="{{Sequence}}" data-number="{{MessageNumber}}" data-share-modprefix="mw_latestnews_" data-share-hover="true" data-share-text="{{Headline}}" data-share-url="{{ShareUrl}}">
  {{#Url}}
  <span class="timestamp">{{FormattedTimestamp}}</span>
  <div class="headline">
    <a target="_blank" href="{{Url}}">
      {{#Label}}
        <span class="label {{Label}}">{{Label}}</span>
      {{/Label}}
      {{Headline}}
    </a>
    <div class="share-icons dark-matter">
      <button class="social-button facebook fa fa-facebook-square trackable" data-track-click="social_latestnews_facebook"></button>
      <button class="social-button twitter fa fa-twitter trackable" data-track-click="social_latestnews_twitter"></button>
    </div>
  </div>
  {{/Url}}
  {{^Url}}
  <span class="timestamp no-social">{{FormattedTimestamp}}</span>
  <span class="headline">{{Headline}}</span>
  {{/Url}}
</li></script>

<script data-template-id="../view/partials/_search_results" type="text/mustache">{{#linker}}

{{#results}}
    <div id="site-search-stocks" class="site-search-section">
        {{#symbolsResultsText}}
            <span class="results-count">{{symbolsResultsText}}</span>
        {{/symbolsResultsText}}
        <h3>Stocks</h3>
        {{#symbols}}
            {{#quote}}
                <a class="quote-box" href="{{quote.link}}">
                    <h4 class="display">{{ticker}}</h4>
                    <div class="company">{{company}}</div>
                    <div class="quote">
                        <span class="price">{{formattedLastPrice}}</span>
                        <span class="change {{netChange}}">{{formattedNetChange}}</span>
                        <span class="change {{changePercent}}">{{formattedChangePercent}}</span>
                    </div>
                </a>
            {{/quote}}
        {{/symbols}}
        {{^symbols}}
            <div class="no-results">No results found</div>
        {{/symbols}}
    </div>
    <div id="site-search-editorial">
        <div id="site-search-columns" class="site-search-section">
            {{#columnsResultsText}}
                <span class="results-count">{{columnsResultsText}}</span>
            {{/columnsResultsText}}
            <h3>Columns</h3>
            {{#columns}}
                <div>
                    <a href="{{columnLink}}">{{title}}</a>
                </div>
            {{/columns}}
            {{^columns}}
                <div class="no-results">No results found</div>
            {{/columns}}
        </div>
        <div id="site-search-authors" class="site-search-section">
            {{#authorsResultsText}}
                <span class="results-count">{{authorsResultsText}}</span>
            {{/authorsResultsText}}
            <h3>Authors</h3>
            {{#authors}}
                <div>
                    <a href="{{authorLink}}">{{name}}</a>
                </div>
            {{/authors}}
            {{^authors}}
                <div class="no-results">No results found</div>
            {{/authors}}
        </div>
        <div id="site-search-topics" class="site-search-section">
            {{#topicsResultsText}}
                <span class="results-count">{{topicsResultsText}}</span>
            {{/topicsResultsText}}
            <h3>Topics</h3>
            {{#organizations}}
                <div class="result-type">Organizations</div>
                <div class="result-value">
                    <a href="/organizations/{{link}}">{{name}}</a>
                </div>
            {{/organizations}}
            {{#people}}
                <div class="result-type">People</div>
                <div class="result-value">
                    <a href="/people/{{link}}">{{name}}</a>
                </div>
            {{/people}}
            {{#subjects}}
                <div class="result-type">Subjects</div>
                <div class="result-value">
                    <a href="/subjects/{{link}}">{{name}}</a>
                </div>
            {{/subjects}}
            {{#companies}}
                <div class="result-type">Companies</div>
                <div class="result-value">
                    <a href="/companies/{{link}}">{{name}}</a>
                </div>
            {{/companies}}
            {{^topics}}
                <div class="no-results">No results found</div>
            {{/topics}}
        </div>
    </div>
{{/results}}

{{/linker}}</script>

<script data-template-id="../view/partials/_nav_news" type="text/mustache">{{#headlines}}
    <div class="article">
        <a class="headline" href="{{Url}}">{{Headline}}</a>
        <p class="summary">{{Abstract}}</p>
    </div>
{{/headlines}}</script>

<script data-template-id="../view/partials/_nav_newsviewer" type="text/mustache">{{#headlines}}
<div class="article shareable" data-share-hover="true" data-share-text="{{Headline}}" data-share-url="{{ShareUrl}}">
  <span class="timestamp">{{FormattedTimestamp}}</span>
  <div class="stuff">
    {{#Url}}
    {{#Label}}
      <span class="label {{Label}}">{{Label}}</span>
    {{/Label}}
    <a class="headline trackable" target="_blank" href="{{Url}}" data-track-mod="MW_story_latest_news">{{Headline}}</a>
    <div class="share-icons invisible">
      <button class="social-button facebook fa fa-facebook-square trackable" data-track-click="social_navnewsviewer_facebook"></button>
      <button class="social-button twitter fa fa-twitter trackable" data-track-click="social_navnewsviewer_twitter"></button>
    </div>
    {{/Url}}
    {{^Url}}
    <span class="headline">{{Headline}}</span>
    {{/Url}}
  </div>
</div>
{{/headlines}}</script>

<script data-template-id="../../mw.module.article/view/partials/_qt_news" type="text/mustache"><li><span class="timestamp">{{FormattedTimestamp}}</span><a href="{{Url}}?mod=MW_story_hoverstory">{{Headline}}</a></li></script>

<script data-template-id="../view/bulletin" type="text/mustache">{{#bulletins}}
    {{^Expired}}
    {{^closed}}
        {{#Bulletin}}
            <div class="notification bulletin {{bg}}">
                <h3 class="module-header">Bulletin</h3>
                {{^link}}
                    <span class="message">{{Subject}}</span>
                    <button class="bulletin-close"><img src="{{resources.content}}/svg/icons/ico-close-white.svg" alt="Close Bulletin" /></button>
                {{/link}}
                {{#link}}
                    <a href="{{url}}">
                        <span class="message">{{Subject}}</span>
                    </a>
                    <button class="bulletin-close"><img src="{{resources.content}}/svg/icons/ico-close-white.svg" alt="Close Bulletin" /></button>
                    <div class="shareable" data-share-url="{{shareUrl}}" data-share-text="{{Subject}}">
                        <button class="twitter"><img src="{{resources.content}}/svg/icons/ico-twitter-white.svg" alt="Share on Twitter" /></button>
                        <button class="facebook"><img src="{{resources.content}}/svg/icons/ico-facebook-white.svg" alt="Share on Facebook" /></button>
                    </div>
                {{/link}}
            </div>
        {{/Bulletin}}
    {{/closed}}
    {{/Expired}}
{{/bulletins}}</script>

<script data-template-id="../view/investor_alert" type="text/mustache">{{#alert}}
<div id="investor-alert" class="notification">
  {{#text}}
  <h3 class="module-header">Investor</h3>
  <span class="message">
    {{text}}
    <span class="timestamp">{{time}}</span>
  </span>
  <div class="investor-alert-ad">
    {{#sponsor}}
    {{> ad}}
    {{/sponsor}}
  </div>
  {{/text}}
</div>
{{/alert}}</script>

</div> <!-- data-module-name="mw.svc.page.Partials" -->

    <script>
        var ScrillaZilla = {
            number: '2',
            site: 'marketwatch.com',
            zone: 'article'
        }
    </script>
<script>
    var utag_data = {
	"user_type": "free",
	"page_site_product": "MW",
	"page_site": "MarketWatch",
	"page_ad_zone": "article"
};
</script>
<div id="settings" data-e-bg="http://mwstream.wsj.net/bg2" data-e-c="http://www.marketwatch.com/community/commenting" data-e-m="http://api.wsj.net" data-e-ap="http://sts3.wsj.net/bucket-a/foxtrot/public" data-e-u="//www.marketwatch.com/" data-e-vd="http://video-api.wsj.com" data-e-dt="http://api.wsj.net/api/deltoro-mw" data-e-id="https://accounts.marketwatch.com">
</div></body>
</html>
