parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ZJmq":[function(require,module,exports) {
function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(){"use strict";e=function(){return n};var n={},o=Object.prototype,r=o.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(S){l=function(t,e,n){return t[e]=n}}function d(t,e,n,o){var r=e&&e.prototype instanceof h?e:h,a=Object.create(r.prototype),s=new I(o||[]);return i(a,"_invoke",{value:B(t,n,s)}),a}function m(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(S){return{type:"throw",arg:S}}}n.wrap=d;var p={};function h(){}function g(){}function f(){}var b={};l(b,s,function(){return this});var y=Object.getPrototypeOf,v=y&&y(y(j([])));v&&v!==o&&r.call(v,s)&&(b=v);var x=f.prototype=h.prototype=Object.create(b);function w(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function k(e,n){var o;i(this,"_invoke",{value:function(i,a){function s(){return new n(function(o,s){!function o(i,a,s,c){var u=m(e[i],e,a);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==t(d)&&r.call(d,"__await")?n.resolve(d.__await).then(function(t){o("next",t,s,c)},function(t){o("throw",t,s,c)}):n.resolve(d).then(function(t){l.value=t,s(l)},function(t){return o("throw",t,s,c)})}c(u.arg)}(i,a,o,s)})}return o=o?o.then(s,s):s()}})}function B(t,e,n){var o="suspendedStart";return function(r,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===r)throw i;return T()}for(n.method=r,n.arg=i;;){var a=n.delegate;if(a){var s=C(a,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===o)throw o="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o="executing";var c=m(t,e,n);if("normal"===c.type){if(o=n.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o="completed",n.method="throw",n.arg=c.arg)}}}function C(t,e){var n=e.method,o=t.iterator[n];if(void 0===o)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,C(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var r=m(o,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,p;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function j(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:T}}function T(){return{value:void 0,done:!0}}return g.prototype=f,i(x,"constructor",{value:f,configurable:!0}),i(f,"constructor",{value:g,configurable:!0}),g.displayName=l(f,u,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,l(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},n.awrap=function(t){return{__await:t}},w(k.prototype),l(k.prototype,c,function(){return this}),n.AsyncIterator=k,n.async=function(t,e,o,r,i){void 0===i&&(i=Promise);var a=new k(d(t,e,o,r),i);return n.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},w(x),l(x,u,"Generator"),l(x,s,function(){return this}),l(x,"toString",function(){return"[object Generator]"}),n.keys=function(t){var e=Object(t),n=[];for(var o in e)n.push(o);return n.reverse(),function t(){for(;n.length;){var o=n.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},n.values=j,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return a.type="throw",a.arg=t,e.next=n,o&&(e.method="next",e.arg=void 0),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var o=n.completion;if("throw"===o.type){var r=o.arg;L(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},n}function n(t,e,n,o,r,i,a){try{var s=t[i](a),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(o,r)}function o(t){return function(){var e=this,o=arguments;return new Promise(function(r,i){var a=t.apply(e,o);function s(t){n(a,r,i,s,c,"next",t)}function c(t){n(a,r,i,s,c,"throw",t)}s(void 0)})}}var r={chatBodyBackgroundColor:"#ffffff",botMessageBackgroundColor:"white",userMessageBackgroundColor:"purple",chatBubbleBackgroundColor:"purple",bubbleImageUrl:"http://intuitum.ai/wp-content/uploads/2023/07/bubble-chat.png",closeImageUrl:"http://intuitum.ai/wp-content/uploads/2023/07/close_white.png",fontFamily:"'Roboto', sans-serif",headerColor:"#fafafa",botMessageTextColor:"white",userMessageTextColor:"white"};window.MyWidgetConfig=window.MyWidgetConfig||{};var i=window.MyWidgetConfig,a={chatBodyBackgroundColor:i.chatBodyBackgroundColor||"white",botMessageTextColor:i.botMessageTextColor||"black",botMessageBackgroundColor:i.botMessageBackgroundColor||"#fafafa",userMessageTextColor:i.userMessageTextColor||"white",userMessageBackgroundColor:i.userMessageBackgroundColor||"purple",bubbleImageUrl:i.bubbleImageUrl||"http://intuitum.ai/wp-content/uploads/2023/07/bubble-chat.png",bubbleBackgroundColor:i.bubbleBackgroundColor||"purple",closeImageUrl:i.closeImageUrl||"http://intuitum.ai/wp-content/uploads/2023/07/close_white.png",logoUrl:i.logoUrl||"http://intuitum.ai/wp-content/uploads/2023/06/logo_white_accent-min.png",fontFamily:i.fontFamily||"'Roboto', sans-serif",chatbotHeaderBackgroundColor:i.headerColor||"#fafafa",sendButtonBackgroundColor:i.sendButtonBackgroundColor||"white",sendButtonBorderColor:i.sendButtonBorderColor||"purple",chatbotFooterBackgroundColor:i.chatbotFooterBackgroundColor||"#fafafa",quickChatBadgeBackgroundColor:i.quickChatBadgeBackgroundColor||"purple",inputBackgroundColor:i.inputBackgroundColor||"white",inputTextPlaceholder:i.inputTextPlaceholder||"Type your message...",sendButtonImageUrl:i.sendButtonImageUrl||"http://intuitum.ai/wp-content/uploads/2023/07/send.png",showIntuitumBadge:i.showIntuitumBadge||"block",userID:i.userID||"",modelName:i.modelName||"",isModelPermissive:i.isModelPermissive||!1},s="\n\n#intuitum-quick-replies{\n  background-color:".concat(a.chatBodyBackgroundColor,"\n}\n\n  #intuitum-chatbot-messages .intuitum-chatbot-message {\n    max-width: 80%;\n    padding: 12px;\n    margin: 5px;\n    border-radius: 16px;\n    color: ").concat(a.botMessageTextColor,";\n    overflow-wrap: break-word;\n    font-size:0.75rem;\n    \n}\n\n#intuitum-chatbot-messages .intuitum-chatbot-message.user {\n    align-self: flex-end;\n    background-color: ").concat(a.userMessageBackgroundColor,";\n    color: ").concat(a.userMessageTextColor,";\n}\n\n#intuitum-chatbot-messages .intuitum-chatbot-message.bot {\n    align-self: flex-start;\n    background-color: ").concat(a.botMessageBackgroundColor,";\n    color: ").concat(a.botMessageTextColor,";\n    border: 0.5px solid black;\n}\n\n#intuitum-chatbot.active {\n    display: flex !important;\n}\n\n#intuitum-chatbot.hidden {\n    display: none !important;\n}\n\n#intuitum-chatbot-body {\n    background-color: white;\n}\n\n#intuitum-chat-bubble {\n    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.25);\n    width: 70px;\n    height: 70px;\n    border-radius: 50%;\n    background-color: ").concat(a.bubbleBackgroundColor,";\n    background-size: cover;\n    background-image: url(").concat(a.bubbleImageUrl,");\n        background-size: 55%;\n            background-position: center;\n            background-repeat: no-repeat;\n    overflow: hidden;\n    cursor: pointer;\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    transform: rotate(0deg);\n        /* No rotation initially */\n        transition: background 0.15s ease-in-out, transform 0.15s ease-in-out;\n        /* Add transition for transform */\n}\n\n#intuitum-chat-bubble.open {\n    background-image: url(").concat(a.closeImageUrl,");\n    background-size:40%;\n    background-position: center;\n    background-repeat: no-repeat;\n    transform: rotate(360deg);\n}\n\n#intuitum-chatbot {\n    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.25);\n    /* Position the chat interface at the top left of the chat bubble */\n    bottom: 4.5rem;\n    /* height of bubble plus margin */\n    right: 3.5rem;\n    font-family: 'Roboto', sans-serif;\n\n}\n\n\n#intuitum-chatbot-button {\n    background-color: ").concat(a.sendButtonBackgroundColor,";\n    \n}\n\n.btn-primary.intuitum-send-button{\n    --bs-btn-border-color: ").concat(a.sendButtonBorderColor," !important;\n    --bs-btn-active-border-color: purple !important;\n}\n\n.intuitum-hidden {\n    display: none;\n}\n\n#intuitum-chatbot-footer {\n    background-color: ").concat(a.chatbotFooterBackgroundColor,";\n    border-radius: 0 0 .75rem .75rem;\n        /*TL TR BR BL*/\n}\n\n#intuitum-chatbot-header {\n    border-radius: .75rem .75rem 0 0;\n        /*TL TR BR BL*/\n}\n\n.intuitum-bot-icon {\n    position: absolute;\n    bottom: -2vh;\n    /* Adjust this to fit the icon size */\n    width: 1.75rem;\n    height: 1.75rem;\n    border-radius: 50%;\n}\n\n.intuitum-bot-container {\n    display: relative;\n    align-items: flex-start;\n    position: relative;\n}\n\n.intuitum-chatbot-message {\n    display: flex;\n    align-items: center;\n    margin-bottom: 0.5rem;\n    flex-direction: row;\n}\n\n#intuitum-quick-replies{\n  justify-items: center;\n  justify-content:center;\n  text-align:center;\n}\n\n.intuitum-chatbot-message.user {\n    justify-content: flex-end;\n}\n\n.intuitum-chatbot-message.bot {\n    justify-content: flex-start;\n}\n\n.intuitum-bot-text {\n    order: 2;\n    display: inline-block;\n    vertical-align: middle;\n    horizontal-align: middle;\n}\n\n.intuitum-badge{\n    background-color: ").concat(a.quickChatBadgeBackgroundColor," !important;\n    border-radius: .75rem !important;\n    }\n\n@media screen and (min-width: 576px) {\n    #intuitum-chatbot {\n        width: 50%;\n        max-width: 500px;\n    }\n}\n\n@media screen and (max-width: 576px) {\n    #intuitum-chatbot {\n        width: 100%;\n        max-width: 100%;\n        right: 2%;\n    }\n\n    #intuitum-quick-replies {\n        flex-direction: column;\n        align-items: flex-start;\n    }\n}\n\n\n"),c='\n\n   <div> \n    <div id="intuitum-chat-bubble" class="position-fixed d-flex justify-content-center align-items-center"\n        style="bottom: 1.5rem; right: 1.5rem; z-index: 9999999">\n    </div>\n\n    <div id="intuitum-chatbot" class="position-fixed d-none flex-column "\n        style="width: 95%; max-width: 475px; height: 70vh; border-radius: .75rem; z-index: 9999999">\n<div id="intuitum-chatbot-header" class="d-flex align-items-center justify-content-center text-light p-2"\n    style="background-color: '.concat(a.chatbotHeaderBackgroundColor,'; height: auto;">\n    <span  style="font-size: 1.25rem; padding-left: 2%; text-align: center; color:black; font-weight:bold;" class="pb-8"><img class="intuitum-logo" style="height:5rem !important;" src="').concat(a.logoUrl,'"><br>Ask anything about Intuitum</span>\n        \n</div>\n\n        <div id="intuitum-chatbot-body" class="p-2 overflow-auto flex-grow-1">\n\n            <div id="intuitum-chatbot-messages" class="d-flex flex-column align-items-start w-100"></div>\n        </div>\n        <div class="d-flex justify-content-center" style="background-color:').concat(a.chatBodyBackgroundColor,';">\n            <div id="loading-indicator" class="spinner-grow spinner-grow-sm text-secondary text-center mx-auto" role="status"\n                style="display: none;">\n            </div>\n            <div id="quick-replies-container" class="justify-content-center d-flex text-center">\n  <div id="intuitum-quick-replies" class="d-flex flex-wrap justify-content-center pb-2">\n                    <span class="intuitum-badge badge m-1 p-2 cursor-pointer text-center" style="cursor: pointer; font-size: 0.7rem; font-weight: 400 !important;">What is Intuitum?</span>\n                    <span class="intuitum-badge badge m-1 p-2 cursor-pointer text-center" style="cursor: pointer; font-size: 0.7rem; font-weight: 400 !important;">How does Intuitum work?</span>\n                    <span class="intuitum-badge badge m-1 p-2 cursor-pointer text-center" style="cursor: pointer; font-size: 0.7rem; font-weight: 400 !important;">What deployment options are available for Intuitum models?</span>\n                </div>\n                </div>\n        </div>\n        <div id="intuitum-chatbot-footer" class="p-2" style="background-color:').concat(a.chatbotFooterBackgroundColor,'">\n            <form id="chatbot-form" class="d-flex align-items-center">\n                <input id="chatbot-input" type="text" class="form-control flex-grow-1 mr-2 pr-2"\n                    style="border-radius: .25rem; background-color:').concat(a.inputBackgroundColor,';" placeholder="').concat(a.inputTextPlaceholder,'">\n                <button id="intuitum-chatbot-button" class="btn btn-primary ms-2 intuitum-send-button" type="submit">\n                    <img src=').concat(a.sendButtonImageUrl,' alt="Send" width="20px" height="20px">\n                    \n                </button>\n                \n            </form>\n            <div><p style="color: black; font-size: 0.7rem; font-weight: 300 !important; text-align: center; margin-bottom: 0; padding-top: 2%; display: ').concat(a.showIntuitumBadge,'">Powered by Intuitum</p></div>\n           \n        </div>\n    </div>\n    </div>\n  \n\n'),u=document.createElement("div"),l=u.attachShadow({mode:"open"}),d=document.createElement("style");d.textContent=s,l.appendChild(d);var m=document.createElement("link");m.rel="stylesheet",m.href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",m.integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM",m.crossOrigin="anonymous",l.appendChild(m);var p=document.createElement("link");if(p.rel="stylesheet",p.href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap",l.appendChild(p),!window.jQuery){var h=document.createElement("script");h.src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js",l.appendChild(h)}var g=document.createElement("div");g.innerHTML=c,l.appendChild(g),document.body.appendChild(u);var f="english",b=l.querySelectorAll(".dropdown-item");C();for(var y=0;y<b.length;y++)b[y].addEventListener("click",function(t){t.preventDefault(),f=this.getAttribute("data-language"),l.getElementById("selectedLanguage").textContent=f.charAt(0).toUpperCase()+f.slice(1),console.log("Selected language: "+f)});var v=!1;function x(t){Object.assign(a,t),renderWidget()}function w(t){return k.apply(this,arguments)}function k(){return(k=o(e().mark(function t(n){var o,r,i,s,c,u,l,d,m,p,h,g;return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(""===n.trim()){t.next=35;break}return"https://30ca-34-91-178-166.ngrok-free.app",o="".concat("https://30ca-34-91-178-166.ngrok-free.app","/query"),r={"Content-Type":"application/json"},i=a.userID,s=a.modelName,c="en",u=a.isModelPermissive,l={submitted_query:n,user_id:i,model_name:s,selected_language:c,is_model_permissive:u},t.prev=9,t.next=12,fetch(o,{method:"POST",headers:r,body:JSON.stringify(l)});case 12:if(!(d=t.sent).ok){t.next=24;break}return t.next=16,d.json();case 16:return m=t.sent,(p=m.bot_response).startsWith("1. ")&&(p=p.substring(3)),""===p&&(p="en"===c?"Hmmm. It seems like I don't quite understand. Could you maybe try rephrasing that for me?":"Hmmm. Es scheint, als würde ich das nicht ganz verstehen. Könnten Sie vielleicht versuchen, das für mich umzuformulieren?"),"Our servers are currently at capacity, please try again later!"===p&&(p="de"===c?"Unsere Server sind aktuell überlastet. Bitte probiere es später nochmal.":p),t.abrupt("return",p);case 24:return h="Our Servers are currently at capacity, please try again later!",h="de"===c?"Unsere Server sind aktuell überlastet. Bitte probiere es später nochmal.":h,t.abrupt("return",h);case 27:t.next=35;break;case 29:return t.prev=29,t.t0=t.catch(9),console.error("Error:",t.t0),g="Whoops, something seems to have gone wrong. We are working our hardest to get it fixed as soon as possible! Why not look back later and try again?",g="en"===c?g:"Unsere Server sind aktuell überlastet. Bitte probiere es später nochmal.",t.abrupt("return",g);case 35:return t.abrupt("return",null);case 36:case"end":return t.stop()}},t,null,[[9,29]])}))).apply(this,arguments)}var B=!1;function C(){console.log("Attaching to quick replies"),l.querySelectorAll(".intuitum-badge").forEach(function(t){console.log("RUNNING"),t.addEventListener("click",function(){if(!v){var t=this.textContent;console.log(l.getElementById("intuitum-quick-replies")),l.getElementById("intuitum-quick-replies").classList.remove("d-flex"),l.getElementById("intuitum-quick-replies").classList.add("intuitum-hidden");var n=l.getElementById("chatbot-input"),r=l.getElementById("intuitum-chatbot-messages"),i=l.getElementById("loading-indicator"),s=l.getElementById("intuitum-chatbot-body");s.scrollTop=s.scrollHeight,n.disabled=!0,i.style.display="block";var c=document.createElement("div");c.classList.add("intuitum-chatbot-message","user"),c.textContent=t,r.appendChild(c),o(e().mark(function o(){var c,u,d,m,p,h,g;return e().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t);case 2:c=e.sent,i.style.display="none",(u=document.createElement("div")).classList.add("intuitum-bot-container"),(d=document.createElement("div")).classList.add("intuitum-chatbot-message","bot"),u.appendChild(d),(m=document.createElement("img")).src=a.logoUrl,m.classList.add("intuitum-bot-icon"),u.appendChild(m),r.appendChild(u),(p=document.createElement("span")).classList.add("intuitum-bot-text"),d.appendChild(p),v=!0,h=0,g=setInterval(function(){s.scrollTop=s.scrollHeight,h<c.length?(p.textContent+=c[h],h++):(clearInterval(g),v=!1)},50),n.disabled=!1,submitButton.disabled=!1,l.getElementById("chatbot-input").value="",l.getElementById("chatbot-button").disabled=!1,l.getElementById("chatbot-input").disabled=!1;case 25:case"end":return e.stop()}},o)}))()}})})}l.getElementById("intuitum-chat-bubble").addEventListener("click",function(){var t=l.getElementById("intuitum-chatbot");B?(t.classList.remove("d-flex","flex-column"),t.classList.add("d-none"),this.classList.remove("open"),B=!1):(t.classList.remove("d-none"),t.classList.add("d-flex","flex-column"),this.classList.add("open"),B=!0)}),l.getElementById("chatbot-form").addEventListener("submit",function(t){if(t.preventDefault(),!v){l.getElementById("intuitum-quick-replies").classList.remove("d-flex"),l.getElementById("intuitum-quick-replies").classList.add("intuitum-hidden");var n=l.getElementById("intuitum-chatbot-button");n.disabled=!0;var r=l.getElementById("chatbot-input"),i=l.getElementById("intuitum-chatbot-messages"),s=l.getElementById("loading-indicator"),c=l.getElementById("intuitum-chatbot-body");r.disabled=!0,s.style.display="block";var u=document.createElement("div");u.classList.add("intuitum-chatbot-message","user"),u.textContent=r.value,i.appendChild(u),c.scrollTop=c.scrollHeight;var d=r.value;r.value="",o(e().mark(function t(){var n,o,r,u,l,m,p;return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(d);case 2:n=t.sent,s.style.display="none",(o=document.createElement("div")).classList.add("intuitum-bot-container"),(r=document.createElement("div")).classList.add("intuitum-chatbot-message","bot"),(u=document.createElement("img")).src=a.logoUrl,u.classList.add("intuitum-bot-icon"),o.appendChild(u),o.appendChild(r),i.appendChild(o),(l=document.createElement("span")).classList.add("intuitum-bot-text"),r.appendChild(l),v=!0,m=0,p=setInterval(function(){c.scrollTop=c.scrollHeight,m<n.length?(l.textContent+=n[m],m++):(clearInterval(p),v=!1)},50);case 20:case"end":return t.stop()}},t)}))(),r.disabled=!1,n.disabled=!1}});
},{}]},{},["ZJmq"], null)
//# sourceMappingURL=/to_bundle_customizable.js.map