/**
 * 201707NpcdOlaRefresh - An HTML banner
 * @version v1.0.0
 * @date 8-1-2017 at 17:30:32
 */
!function(e,t){"use strict";function a(){var e=l.getElementById("fallback");if(a){e.style.display="inline";var t=l.getElementById("product-name");t&&(t.style.display="none")}}function n(){if(rateValue&&0!=rateValue.length&&rateValue.length==params.length)for(var t=0;t<rateValue.length;t++)try{var n,r;n=l.getElementById("darate"+t),r=n.getElementsByTagName("span")[0],r.innerHTML=rateValue[t],n.style.display="inline"}catch(o){e.console&&console.error&&void 0,a();for(var s=0;t>s;s++)null!=l.getElementById("rate"+s)&&(n=l.getElementById("rate"+s),n.style.display="none");break}else a(),e.console&&console.error&&void 0}var l=e.document;parseRates(),setTimeout(function(){n()},3500)}(this);