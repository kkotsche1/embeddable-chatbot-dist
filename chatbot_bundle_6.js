parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Yte9":[function(require,module,exports) {
function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(){"use strict";e=function(){return n};var n={},r=Object.prototype,i=r.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(S){l=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var i=e&&e.prototype instanceof h?e:h,a=Object.create(i.prototype),s=new C(r||[]);return o(a,"_invoke",{value:E(t,n,s)}),a}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(S){return{type:"throw",arg:S}}}n.wrap=d;var m={};function h(){}function f(){}function g(){}var b={};l(b,s,function(){return this});var y=Object.getPrototypeOf,v=y&&y(y(B([])));v&&v!==r&&i.call(v,s)&&(b=v);var x=g.prototype=h.prototype=Object.create(b);function w(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function k(e,n){var r;o(this,"_invoke",{value:function(o,a){function s(){return new n(function(r,s){!function r(o,a,s,c){var u=p(e[o],e,a);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==t(d)&&i.call(d,"__await")?n.resolve(d.__await).then(function(t){r("next",t,s,c)},function(t){r("throw",t,s,c)}):n.resolve(d).then(function(t){l.value=t,s(l)},function(t){return r("throw",t,s,c)})}c(u.arg)}(o,a,r,s)})}return r=r?r.then(s,s):s()}})}function E(t,e,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return _()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=L(a,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=p(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function L(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=p(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,m;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,m):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function B(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:_}}function _(){return{value:void 0,done:!0}}return f.prototype=g,o(x,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:f,configurable:!0}),f.displayName=l(g,u,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},n.awrap=function(t){return{__await:t}},w(k.prototype),l(k.prototype,c,function(){return this}),n.AsyncIterator=k,n.async=function(t,e,r,i,o){void 0===o&&(o=Promise);var a=new k(d(t,e,r,i),o);return n.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},w(x),l(x,u,"Generator"),l(x,s,function(){return this}),l(x,"toString",function(){return"[object Generator]"}),n.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=B,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;j(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:B(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},n}function n(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,i)}function r(t){return function(){var e=this,r=arguments;return new Promise(function(i,o){var a=t.apply(e,r);function s(t){n(a,i,o,s,c,"next",t)}function c(t){n(a,i,o,s,c,"throw",t)}s(void 0)})}}var i="\n\n#intuitum-quick-replies{\n  background-color:#ffffff\n}\n\n  #intuitum-chatbot-messages .intuitum-chatbot-message {\n    max-width: 80%;\n    padding: 12px;\n    margin: 5px;\n    border-radius: 16px;\n    color: white;\n    overflow-wrap: break-word;\n    font-size:0.75rem;\n    \n}\n\n#intuitum-chatbot-messages .intuitum-chatbot-message.user {\n    align-self: flex-end;\n    background-color: purple;\n    color: white;\n}\n\n#intuitum-chatbot-messages .intuitum-chatbot-message.bot {\n    align-self: flex-start;\n    background-color: #fafafa;\n    color: black;\n    border: 0.5px solid black;\n}\n\n#intuitum-chatbot.active {\n    display: flex !important;\n}\n\n#intuitum-chatbot.hidden {\n    display: none !important;\n}\n\n#intuitum-chatbot-body {\n    background-color: white;\n}\n\n#intuitum-chat-bubble {\n    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.25);\n    width: 70px;\n    height: 70px;\n    border-radius: 50%;\n    background-color: purple;\n    background-size: cover;\n    background-image: url(\"http://intuitum.ai/wp-content/uploads/2023/07/bubble-chat.png\");\n        background-size: 55%;\n            background-position: center;\n            background-repeat: no-repeat;\n    overflow: hidden;\n    cursor: pointer;\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    transform: rotate(0deg);\n        /* No rotation initially */\n        transition: background 0.15s ease-in-out, transform 0.15s ease-in-out;\n        /* Add transition for transform */\n}\n\n#intuitum-chat-bubble.open {\n    /* Change this to your 'close chat' image */\n    background-image: url('http://intuitum.ai/wp-content/uploads/2023/07/close_white.png');\n    background-size:40%;\n    background-position: center;\n    background-repeat: no-repeat;\n    transform: rotate(360deg);\n}\n\n#intuitum-chatbot {\n    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.25);\n    /* Position the chat interface at the top left of the chat bubble */\n    bottom: 4.5rem;\n    /* height of bubble plus margin */\n    right: 3.5rem;\n    font-family: 'Roboto', sans-serif;\n\n}\n\n\n#intuitum-chatbot-button {\n    background-color: white;\n    \n}\n\n.btn-secondary.intuitum-language-selector{\n    --bs-btn-bg: purple !important;\n    --bs-btn-border-color: purple !important;\n    --bs-btn-active-bg: purple !important;\n    border-radius: 0.75rem !important;\n}\n\n.btn-primary.intuitum-send-button{\n    --bs-btn-border-color: purple !important;\n    --bs-btn-active-border-color: purple !important;\n}\n\n.intuitum-hidden {\n    display: none;\n}\n\n#intuitum-chatbot-footer {\n    background-color: #fafafa;\n    border-radius: 0 0 .75rem .75rem;\n        /*TL TR BR BL*/\n}\n\n#intuitum-chatbot-header {\n    border-radius: .75rem .75rem 0 0;\n        /*TL TR BR BL*/\n}\n\n.intuitum-bot-icon {\n    position: absolute;\n    bottom: -2vh;\n    /* Adjust this to fit the icon size */\n    width: 1.75rem;\n    height: 1.75rem;\n    border-radius: 50%;\n}\n\n.intuitum-bot-container {\n    display: relative;\n    align-items: flex-start;\n    position: relative;\n}\n\n.intuitum-chatbot-message {\n    display: flex;\n    align-items: center;\n    margin-bottom: 0.5rem;\n    flex-direction: row;\n}\n\n#intuitum-quick-replies{\n  justify-items: center;\n  justify-content:center;\n  text-align:center;\n}\n\n.intuitum-chatbot-message.user {\n    justify-content: flex-end;\n}\n\n.intuitum-chatbot-message.bot {\n    justify-content: flex-start;\n}\n\n.intuitum-bot-text {\n    order: 2;\n    display: inline-block;\n    vertical-align: middle;\n    horizontal-align: middle;\n    padding-right: 8px !important;\n}\n\n.intuitum-badge{\n    background-color: purple !important;\n    border-radius: .75rem !important;\n    }\n\n@media screen and (min-width: 576px) {\n    #intuitum-chatbot {\n        width: 50%;\n        max-width: 500px;\n    }\n}\n\n@media screen and (max-width: 576px) {\n    #intuitum-chatbot {\n        width: 100%;\n        max-width: 100%;\n        right: 2%;\n    }\n\n    #intuitum-quick-replies {\n        flex-direction: column;\n        align-items: flex-start;\n    }\n}\n\n\n",o='\n\n   <div> \n    <div id="intuitum-chat-bubble" class="position-fixed d-flex justify-content-center align-items-center"\n        style="bottom: 1.5rem; right: 1.5rem; z-index: 9999999">\n    </div>\n\n    <div id="intuitum-chatbot" class="position-fixed d-none flex-column "\n        style="width: 95%; max-width: 475px; height: 70vh; border-radius: .75rem; z-index: 9999999">\n<div id="intuitum-chatbot-header" class="d-flex align-items-center justify-content-center text-light p-2"\n    style="background-color: #fafafa; height: auto;">\n    <span  style="font-size: 1.25rem; padding-left: 2%; text-align: center; color:black; font-weight:bold;" class="pb-8"><img class="intuitum-logo" style="height:5rem !important;" src="http://intuitum.ai/wp-content/uploads/2023/06/logo_white_accent-min.png"><br>Ask anything about Intuitum</span>\n        \n</div>\n\n        <div id="intuitum-chatbot-body" class="p-2 overflow-auto flex-grow-1">\n          \n            <div id="intuitum-chatbot-messages" class="d-flex flex-column align-items-start w-100"></div>\n        </div>\n        <div class="d-flex justify-content-center" style="background-color:#ffffff;">\n            <div id="loading-indicator" class="spinner-grow spinner-grow-sm text-secondary text-center mx-auto" role="status"\n                style="display: none;">\n            </div>\n            <div id="quick-replies-container" class="justify-content-center d-flex text-center">\n  <div id="intuitum-quick-replies" class="d-flex flex-wrap justify-content-center pb-2">\n                    <span class="intuitum-badge badge m-1 p-2 cursor-pointer text-center" style="cursor: pointer; font-size: 0.7rem; font-weight: 400 !important;">What can I use Inuitum for?</span>\n                    <span class="intuitum-badge badge m-1 p-2 cursor-pointer text-center" style="cursor: pointer; font-size: 0.7rem; font-weight: 400 !important;">How does Intuitum work?</span>\n                    <span class="intuitum-badge badge m-1 p-2 cursor-pointer text-center" style="cursor: pointer; font-size: 0.7rem; font-weight: 400 !important;">How can trained models be deployed?</span>\n                </div>\n                </div>\n        </div>\n        <div id="intuitum-chatbot-footer" class="p-2" style="background-color:#fafafa">\n            <form id="chatbot-form" class="d-flex align-items-center">\n                <input id="chatbot-input" type="text" class="form-control flex-grow-1 mr-2 pr-2"\n                    style="border-radius: .25rem; background-color:#ffffff;" placeholder="Type your message...">\n                <button id="intuitum-chatbot-button" class="btn btn-primary ms-2 intuitum-send-button" type="submit">\n                    <img src="http://intuitum.ai/wp-content/uploads/2023/07/send.png" alt="Send" width="20px" height="20px">\n                    \n                </button>\n                \n            </form>\n            <div><p style="color: black; font-size: 0.7rem; font-weight: 300 !important; text-align: center; margin-bottom: 0; padding-top: 2%;">Powered by Intuitum</p></div>\n           \n        </div>\n    </div>\n    </div>\n  \n\n',a=document.createElement("div"),s=a.attachShadow({mode:"open"}),c=document.createElement("style");c.textContent=i,s.appendChild(c);var u=document.createElement("link");u.rel="stylesheet",u.href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",u.integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM",u.crossOrigin="anonymous",s.appendChild(u);var l=document.createElement("link");l.rel="stylesheet",l.href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap",s.appendChild(l);var d=document.createElement("script");d.src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js",s.appendChild(d);var p=document.createElement("div");p.innerHTML=o,s.appendChild(p),document.body.appendChild(a);var m=!1;function h(t){return f.apply(this,arguments)}function f(){return(f=r(e().mark(function t(n){var r,i,o,a,s,c,u,l,d;return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(""===n.trim()){t.next=33;break}return"https://811c-34-127-62-183.ngrok-free.app",r="".concat("https://811c-34-127-62-183.ngrok-free.app","/query"),i={"Content-Type":"application/json"},"123","testing",a={submitted_query:n,user_id:"123",model_name:"testing",selected_language:o="en"},t.prev=8,t.next=11,fetch(r,{method:"POST",headers:i,body:JSON.stringify(a)});case 11:if(!(s=t.sent).ok){t.next=22;break}return t.next=15,s.json();case 15:return c=t.sent,""===(u=c.bot_response)&&(u="en"===o?"Hmmm. It seems like I don't quite understand. Could you maybe try rephrasing that for me?":"Hmmm. Es scheint, als würde ich das nicht ganz verstehen. Könnten Sie vielleicht versuchen, das für mich umzuformulieren?"),"Our servers are currently at capacity, please try again later!"===u&&(u="de"===o?"Unsere Server sind aktuell überlastet. Bitte probiere es später nochmal.":u),t.abrupt("return",u);case 22:return l="Our Servers are currently at capacity, please try again later!",l="de"===o?"Unsere Server sind aktuell überlastet. Bitte probiere es später nochmal.":l,t.abrupt("return",l);case 25:t.next=33;break;case 27:return t.prev=27,t.t0=t.catch(8),console.error("Error:",t.t0),d="Whoops, something seems to have gone wrong. We are working our hardest to get it fixed as soon as possible! Why not look back later and try again?",d="en"===o?d:"Unsere Server sind aktuell überlastet. Bitte probiere es später nochmal.",t.abrupt("return",d);case 33:return t.abrupt("return",null);case 34:case"end":return t.stop()}},t,null,[[8,27]])}))).apply(this,arguments)}s.addEventListener("DOMContentLoaded",function(){var t="english",e=s.querySelectorAll(".dropdown-item");b();for(var n=0;n<e.length;n++)e[n].addEventListener("click",function(e){e.preventDefault(),t=this.getAttribute("data-language"),s.getElementById("selectedLanguage").textContent=t.charAt(0).toUpperCase()+t.slice(1),console.log("Selected language: "+t)})});var g=!1;function b(){s.querySelectorAll("#intuitum-quick-replies .badge").forEach(function(t){t.addEventListener("click",function(){if(!m){var t=this.textContent;console.log(s.getElementById("intuitum-quick-replies")),s.getElementById("intuitum-quick-replies").classList.remove("d-flex"),s.getElementById("intuitum-quick-replies").classList.add("intuitum-hidden");var n=s.getElementById("chatbot-input"),i=s.getElementById("intuitum-chatbot-messages"),o=s.getElementById("loading-indicator"),a=s.getElementById("intuitum-chatbot-body");a.scrollTop=a.scrollHeight,n.disabled=!0,o.style.display="block";var c=document.createElement("div");c.classList.add("intuitum-chatbot-message","user"),c.textContent=t,i.appendChild(c),r(e().mark(function n(){var r,c,u,l,d,p,f;return e().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t);case 2:r=e.sent,o.style.display="none",(c=document.createElement("div")).classList.add("intuitum-bot-container"),(u=document.createElement("div")).classList.add("intuitum-chatbot-message","bot"),c.appendChild(u),(l=document.createElement("img")).src="http://intuitum.ai/wp-content/uploads/2023/06/logo_white_accent-min.png",l.classList.add("intuitum-bot-icon"),c.appendChild(l),i.appendChild(c),(d=document.createElement("span")).classList.add("intuitum-bot-text"),u.appendChild(d),m=!0,p=0,f=setInterval(function(){a.scrollTop=a.scrollHeight,p<r.length?(d.textContent+=r[p],p++):(clearInterval(f),m=!1)},50),s.getElementById("chatbot-input").value="",s.getElementById("chatbot-button").disabled=!1,s.getElementById("chatbot-input").disabled=!1;case 23:case"end":return e.stop()}},n)}))()}})})}s.getElementById("intuitum-chat-bubble").addEventListener("click",function(){var t=s.getElementById("intuitum-chatbot");g?(t.classList.remove("d-flex","flex-column"),t.classList.add("d-none"),this.classList.remove("open"),g=!1):(t.classList.remove("d-none"),t.classList.add("d-flex","flex-column"),this.classList.add("open"),g=!0)}),s.getElementById("chatbot-form").addEventListener("submit",function(t){if(t.preventDefault(),!m){s.getElementById("intuitum-quick-replies").classList.remove("d-flex"),s.getElementById("intuitum-quick-replies").classList.add("intuitum-hidden");var n=s.getElementById("intuitum-chatbot-button");n.disabled=!0;var i=s.getElementById("chatbot-input"),o=s.getElementById("intuitum-chatbot-messages"),a=s.getElementById("loading-indicator"),c=s.getElementById("intuitum-chatbot-body");i.disabled=!0,a.style.display="block";var u=document.createElement("div");u.classList.add("intuitum-chatbot-message","user"),u.textContent=i.value,o.appendChild(u),c.scrollTop=c.scrollHeight;var l=i.value;i.value="",r(e().mark(function t(){var n,r,i,s,u,d,p;return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(l);case 2:n=t.sent,a.style.display="none",(r=document.createElement("div")).classList.add("intuitum-bot-container"),(i=document.createElement("div")).classList.add("intuitum-chatbot-message","bot"),(s=document.createElement("img")).src="http://intuitum.ai/wp-content/uploads/2023/06/logo_white_accent-min.png",s.classList.add("intuitum-bot-icon"),r.appendChild(s),r.appendChild(i),o.appendChild(r),(u=document.createElement("span")).classList.add("intuitum-bot-text"),i.appendChild(u),m=!0,d=0,p=setInterval(function(){c.scrollTop=c.scrollHeight,d<n.length?(u.textContent+=n[d],d++):(clearInterval(p),m=!1)},50);case 20:case"end":return t.stop()}},t)}))(),i.disabled=!1,n.disabled=!1}});
},{}]},{},["Yte9"], null)
//# sourceMappingURL=/to_bundle.js.map