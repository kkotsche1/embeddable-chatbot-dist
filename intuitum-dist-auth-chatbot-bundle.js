parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ZJmq":[function(require,module,exports) {
function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(){"use strict";e=function(){return n};var n={},o=Object.prototype,r=o.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(j){l=function(t,e,n){return t[e]=n}}function d(t,e,n,o){var r=e&&e.prototype instanceof h?e:h,a=Object.create(r.prototype),c=new I(o||[]);return i(a,"_invoke",{value:B(t,n,c)}),a}function m(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(j){return{type:"throw",arg:j}}}n.wrap=d;var p={};function h(){}function g(){}function f(){}var b={};l(b,c,function(){return this});var y=Object.getPrototypeOf,v=y&&y(y(q([])));v&&v!==o&&r.call(v,c)&&(b=v);var x=f.prototype=h.prototype=Object.create(b);function k(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function w(e,n){var o;i(this,"_invoke",{value:function(i,a){function c(){return new n(function(o,c){!function o(i,a,c,s){var u=m(e[i],e,a);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==t(d)&&r.call(d,"__await")?n.resolve(d.__await).then(function(t){o("next",t,c,s)},function(t){o("throw",t,c,s)}):n.resolve(d).then(function(t){l.value=t,c(l)},function(t){return o("throw",t,c,s)})}s(u.arg)}(i,a,o,c)})}return o=o?o.then(c,c):c()}})}function B(t,e,n){var o="suspendedStart";return function(r,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===r)throw i;return T()}for(n.method=r,n.arg=i;;){var a=n.delegate;if(a){var c=E(a,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===o)throw o="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o="executing";var s=m(t,e,n);if("normal"===s.type){if(o=n.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o="completed",n.method="throw",n.arg=s.arg)}}}function E(t,e){var n=e.method,o=t.iterator[n];if(void 0===o)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var r=m(o,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,p;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function q(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:T}}function T(){return{value:void 0,done:!0}}return g.prototype=f,i(x,"constructor",{value:f,configurable:!0}),i(f,"constructor",{value:g,configurable:!0}),g.displayName=l(f,u,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,l(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},n.awrap=function(t){return{__await:t}},k(w.prototype),l(w.prototype,s,function(){return this}),n.AsyncIterator=w,n.async=function(t,e,o,r,i){void 0===i&&(i=Promise);var a=new w(d(t,e,o,r),i);return n.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},k(x),l(x,u,"Generator"),l(x,c,function(){return this}),l(x,"toString",function(){return"[object Generator]"}),n.keys=function(t){var e=Object(t),n=[];for(var o in e)n.push(o);return n.reverse(),function t(){for(;n.length;){var o=n.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},n.values=q,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return a.type="throw",a.arg=t,e.next=n,o&&(e.method="next",e.arg=void 0),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var o=n.completion;if("throw"===o.type){var r=o.arg;L(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:q(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},n}function n(t,e,n,o,r,i,a){try{var c=t[i](a),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(o,r)}function o(t){return function(){var e=this,o=arguments;return new Promise(function(r,i){var a=t.apply(e,o);function c(t){n(a,r,i,c,s,"next",t)}function s(t){n(a,r,i,c,s,"throw",t)}c(void 0)})}}window.MyWidgetConfig=window.MyWidgetConfig||{};var r=window.MyWidgetConfig,i={publicApiKey:r.publicApiKey||"",chatBodyBackgroundColor:r.chatBodyBackgroundColor||"white",botMessageTextColor:r.botMessageTextColor||"black",botMessageBackgroundColor:r.botMessageBackgroundColor||"#fafafa",userMessageTextColor:r.userMessageTextColor||"white",userMessageBackgroundColor:r.userMessageBackgroundColor||"purple",bubbleImageUrl:r.bubbleImageUrl||"http://intuitum.ai/wp-content/uploads/2023/07/bubble-chat.png",bubbleBackgroundColor:r.bubbleBackgroundColor||"purple",closeImageUrl:r.closeImageUrl||"http://intuitum.ai/wp-content/uploads/2023/07/close_white.png",logoUrl:r.logoUrl||"http://intuitum.ai/wp-content/uploads/2023/06/logo_white_accent-min.png",fontFamily:r.fontFamily||"'Roboto', sans-serif",chatbotHeaderBackgroundColor:r.chatbotHeaderBackgroundColor||"#fafafa",sendButtonBackgroundColor:r.sendButtonBackgroundColor||"white",sendButtonBorderColor:r.sendButtonBorderColor||"purple",chatbotFooterBackgroundColor:r.chatbotFooterBackgroundColor||"#fafafa",quickChatBadgeBackgroundColor:r.quickChatBadgeBackgroundColor||"purple",inputBackgroundColor:r.inputBackgroundColor||"white",inputTextPlaceholder:r.inputTextPlaceholder||"Type your message...",sendButtonImageUrl:r.sendButtonImageUrl||"http://intuitum.ai/wp-content/uploads/2023/07/send.png",showIntuitumBadge:void 0===r.showIntuitumBadge||r.showIntuitumBadge,isModelPermissive:void 0!==r.isModelPermissive&&r.isModelPermissive,openOnStart:void 0!==r.openOnStart&&r.openOnStart,quickQuestion1:r.quickQuestion1||"",quickQuestion2:r.quickQuestion2||"",quickQuestion3:r.quickQuestion3||"",chatBotTitleText:r.chatBotTitleText||"Ask anything about Intuitum"},a="\n\n#intuitum-quick-replies{\n  background-color:".concat(i.chatBodyBackgroundColor,"\n}\n\n  #intuitum-chatbot-messages .intuitum-chatbot-message {\n    max-width: 80%;\n    padding: 12px;\n    margin: 5px;\n    border-radius: 16px;\n    color: ").concat(i.botMessageTextColor,";\n    overflow-wrap: break-word;\n    font-size:0.75rem;\n    \n}\n\n#intuitum-chatbot-messages .intuitum-chatbot-message.user {\n    align-self: flex-end;\n    background-color: ").concat(i.userMessageBackgroundColor,";\n    color: ").concat(i.userMessageTextColor,";\n}\n\n#intuitum-chatbot-messages .intuitum-chatbot-message.bot {\n    align-self: flex-start;\n    background-color: ").concat(i.botMessageBackgroundColor,";\n    color: ").concat(i.botMessageTextColor,";\n    border: 0.5px solid black;\n}\n\n#intuitum-chatbot.active {\n    display: flex !important;\n}\n\n#intuitum-chatbot.hidden {\n    display: none !important;\n}\n\n#intuitum-chatbot-body {\n    background-color: white;\n}\n\n#intuitum-chat-bubble {\n    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.25);\n    width: 70px;\n    height: 70px;\n    border-radius: 50%;\n    background-color: ").concat(i.bubbleBackgroundColor,";\n    background-size: cover;\n    background-image: url(").concat(i.bubbleImageUrl,");\n        background-size: 55%;\n            background-position: center;\n            background-repeat: no-repeat;\n    overflow: hidden;\n    cursor: pointer;\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    transform: rotate(0deg);\n        /* No rotation initially */\n        transition: background 0.15s ease-in-out, transform 0.15s ease-in-out;\n        /* Add transition for transform */\n}\n\n#intuitum-chat-bubble.open {\n    background-image: url(").concat(i.closeImageUrl,");\n    background-size:40%;\n    background-position: center;\n    background-repeat: no-repeat;\n    transform: rotate(360deg);\n}\n\n#intuitum-chatbot {\n    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.25);\n    /* Position the chat interface at the top left of the chat bubble */\n    bottom: 4.5rem;\n    /* height of bubble plus margin */\n    right: 3.5rem;\n    font-family: 'Roboto', sans-serif;\n\n}\n\n\n#intuitum-chatbot-button {\n    background-color: ").concat(i.sendButtonBackgroundColor,";\n    \n}\n\n.btn-primary.intuitum-send-button{\n    --bs-btn-border-color: ").concat(i.sendButtonBorderColor," !important;\n    --bs-btn-active-border-color: purple !important;\n}\n\n.intuitum-hidden {\n    display: none;\n}\n\n#intuitum-chatbot-footer {\n    background-color: ").concat(i.chatbotFooterBackgroundColor,";\n    border-radius: 0 0 .75rem .75rem;\n        /*TL TR BR BL*/\n}\n\n#intuitum-chatbot-header {\n    border-radius: .75rem .75rem 0 0;\n        /*TL TR BR BL*/\n}\n\n.intuitum-bot-icon {\n    position: absolute;\n    bottom: -2vh;\n    /* Adjust this to fit the icon size */\n    width: 1.75rem;\n    height: 1.75rem;\n    border-radius: 50%;\n}\n\n.intuitum-bot-container {\n    display: relative;\n    align-items: flex-start;\n    position: relative;\n}\n\n.intuitum-chatbot-message {\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n}\n\n#intuitum-quick-replies{\n  justify-items: center;\n  justify-content:center;\n  text-align:center;\n}\n\n.intuitum-chatbot-message.user {\n    justify-content: flex-end;\n}\n\n.intuitum-chatbot-message.bot {\n    justify-content: flex-start;\n}\n\n.intuitum-bot-text {\n    order: 2;\n    display: inline-block;\n    vertical-align: middle;\n    horizontal-align: middle;\n}\n\n.intuitum-badge{\n    background-color: ").concat(i.quickChatBadgeBackgroundColor," !important;\n    border-radius: .75rem !important;\n    }\n\n@media screen and (min-width: 576px) {\n    #intuitum-chatbot {\n        width: 50%;\n        max-width: 500px;\n    }\n}\n\n@media screen and (max-width: 576px) {\n    #intuitum-chatbot {\n        width: 100%;\n        max-width: 100%;\n        right: 2%;\n    }\n\n    #intuitum-quick-replies {\n        flex-direction: column;\n        align-items: flex-start;\n    }\n}\n\n\n"),c='\n\n   <div> \n    <div id="intuitum-chat-bubble" class="position-fixed d-flex justify-content-center align-items-center"\n        style="bottom: 1.5rem; right: 1.5rem; z-index: 9999999">\n    </div>\n\n    <div id="intuitum-chatbot" class="position-fixed d-none flex-column "\n        style="width: 95%; max-width: 475px; height: 70vh; border-radius: .75rem; z-index: 9999999">\n<div id="intuitum-chatbot-header" class="d-flex align-items-center justify-content-center text-light p-2"\n    style="background-color: '.concat(i.chatbotHeaderBackgroundColor,'; height: auto;">\n    <span  style="font-size: 1.25rem; padding-left: 2%; text-align: center; color:black; font-weight:bold;" class="pb-8"><img class="intuitum-logo" style="height:5rem !important;" src="').concat(i.logoUrl,'"><br>').concat(i.chatBotTitleText,'</span>\n        \n</div>\n\n        <div id="intuitum-chatbot-body" class="p-2 overflow-auto flex-grow-1">\n\n            <div id="intuitum-chatbot-messages" class="d-flex flex-column align-items-start w-100"></div>\n        </div>\n        <div class="d-flex justify-content-center" style="background-color:').concat(i.chatBodyBackgroundColor,';">\n            <div id="loading-indicator" class="spinner-grow spinner-grow-sm text-secondary text-center mx-auto" role="status"\n                style="display: none;">\n            </div>\n            <div id="quick-replies-container" class="justify-content-center d-flex text-center">\n  <div id="intuitum-quick-replies" class="d-flex flex-wrap justify-content-center pb-2">\n                    <span id="intuitum-quick-question-1" class="intuitum-badge badge m-1 p-2 cursor-pointer text-center " style="cursor: pointer; font-size: 0.7rem; font-weight: 400 !important;">').concat(i.quickQuestion1,'</span>\n                    <span id="intuitum-quick-question-2" class="intuitum-badge badge m-1 p-2 cursor-pointer text-center " style="cursor: pointer; font-size: 0.7rem; font-weight: 400 !important;">').concat(i.quickQuestion2,'</span>\n                    <span id="intuitum-quick-question-3" class="intuitum-badge badge m-1 p-2 cursor-pointer text-center " style="cursor: pointer; font-size: 0.7rem; font-weight: 400 !important;">').concat(i.quickQuestion3,'</span>\n                </div>\n                </div>\n        </div>\n        <div id="intuitum-chatbot-footer" class="p-2" style="background-color:').concat(i.chatbotFooterBackgroundColor,'">\n            <form id="chatbot-form" class="d-flex align-items-center">\n                <input id="chatbot-input" type="text" class="form-control flex-grow-1 mr-2 pr-2"\n                    style="border-radius: .25rem; background-color:').concat(i.inputBackgroundColor,';" placeholder="').concat(i.inputTextPlaceholder,'">\n                <button id="intuitum-chatbot-button" class="btn btn-primary ms-2 intuitum-send-button" type="submit">\n                    <img src=').concat(i.sendButtonImageUrl,' alt="Send" width="20px" height="20px">\n                    \n                </button>\n                \n            </form>\n            <div id="intuitum-badge"><p style="color: black; font-size: 0.7rem; font-weight: 300 !important; text-align: center; margin-bottom: 0; padding-top: 2%;">Powered by Intuitum</p></div>\n           \n        </div>\n    </div>\n    </div>\n  \n\n'),s=document.createElement("div"),u=s.attachShadow({mode:"open"}),l=document.createElement("style");l.textContent=a,u.appendChild(l);var d=document.createElement("link");d.rel="stylesheet",d.href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",d.integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM",d.crossOrigin="anonymous",u.appendChild(d);var m=document.createElement("link");if(m.rel="stylesheet",m.href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap",u.appendChild(m),!window.jQuery){var p=document.createElement("script");p.src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js",u.appendChild(p)}var h=document.createElement("div");h.innerHTML=c,u.appendChild(h),document.body.appendChild(s);var g="english",f=u.querySelectorAll(".dropdown-item");j();for(var b=0;b<f.length;b++)f[b].addEventListener("click",function(t){t.preventDefault(),g=this.getAttribute("data-language"),u.getElementById("selectedLanguage").textContent=g.charAt(0).toUpperCase()+g.slice(1)});var y=!1,v=!1,x=[];function k(t){x.push(t)}function w(){return(x.length<5?x:x.slice(-4)).join("")}function B(t){Object.assign(i,t),renderWidget()}i.openOnStart&&((L=u.getElementById("intuitum-chatbot")).classList.remove("d-none"),L.classList.add("d-flex","flex-column"),u.getElementById("intuitum-chat-bubble").classList.add("open"),y=!0);function E(t){return C.apply(this,arguments)}function C(){return(C=o(e().mark(function t(n){var o,r,a,c,s,u,l,d,m,p,h,g;return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(""===n.trim()){t.next=36;break}return"https://suitably-delicate-mustang.ngrok-free.app",o="".concat("https://suitably-delicate-mustang.ngrok-free.app","/chat_overlay_query_auth"),r={"Content-Type":"application/json"},a="en",c=i.isModelPermissive,s=i.publicApiKey,u=w(),l={submitted_query:n,selected_language:a,is_model_permissive:c,conversation_history:u,public_api_key:s},t.prev=9,t.next=12,fetch(o,{method:"POST",headers:r,body:JSON.stringify(l)});case 12:if(!(d=t.sent).ok){t.next=25;break}return t.next=16,d.json();case 16:return m=t.sent,p=m.bot_response,k("USER: ".concat(n," ")),k("ASSISTANT: ".concat(p," ")),""===p&&(p="en"===a?"Hmmm. It seems like I don't quite understand. Could you maybe try rephrasing that for me?":"Hmmm. Es scheint, als würde ich das nicht ganz verstehen. Könnten Sie vielleicht versuchen, das für mich umzuformulieren?"),"Our servers are currently at capacity, please try again later!"===p&&(p="de"===a?"Unsere Server sind aktuell überlastet. Bitte probiere es später nochmal.":p),t.abrupt("return",p);case 25:return h="Our Servers are currently at capacity, please try again later!",h="de"===a?"Unsere Server sind aktuell überlastet. Bitte probiere es später nochmal.":h,t.abrupt("return",h);case 28:t.next=36;break;case 30:return t.prev=30,t.t0=t.catch(9),console.error("Error:",t.t0),g="Whoops, something seems to have gone wrong. We are working our hardest to get it fixed as soon as possible! Why not look back later and try again?",g="en"===a?g:"Unsere Server sind aktuell überlastet. Bitte probiere es später nochmal.",t.abrupt("return",g);case 36:return t.abrupt("return",null);case 37:case"end":return t.stop()}},t,null,[[9,30]])}))).apply(this,arguments)}if(i.showIntuitumBadge||u.getElementById("intuitum-badge").classList.add("intuitum-hidden"),u.getElementById("intuitum-chat-bubble").addEventListener("click",function(){var t=u.getElementById("intuitum-chatbot");y?(t.classList.remove("d-flex","flex-column"),t.classList.add("d-none"),this.classList.remove("open"),y=!1):(t.classList.remove("d-none"),t.classList.add("d-flex","flex-column"),this.classList.add("open"),y=!0)}),i.openOnStart){var L=u.getElementById("intuitum-chatbot"),I=u.getElementById("intuitum-chat-bubble");L.classList.remove("d-none"),L.classList.add("d-flex","flex-column"),I.classList.add("open"),y=!0}function q(t){var e,n,o;return e=/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim,n=/(^|[^\/])(www\.[\S]+(\b|$))/gim,o=/(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/gim,t.replace(e,'<a href="$1" target="_blank">$1</a>').replace(n,'$1<a href="http://$2" target="_blank">$2</a>').replace(o,'<a href="mailto:$1">$1</a>')}function T(t,e){var n=q(t),o=document.createElement("span");o.classList.add("intuitum-bot-text"),o.innerHTML=n,e.parentNode.replaceChild(o,e)}function j(){u.querySelectorAll(".intuitum-badge").forEach(function(t){t.addEventListener("click",function(){if(!v){var t=this.textContent;console.log(u.getElementById("intuitum-quick-replies")),u.getElementById("intuitum-quick-replies").classList.remove("d-flex"),u.getElementById("intuitum-quick-replies").classList.add("intuitum-hidden");var n=u.getElementById("chatbot-input"),r=u.getElementById("intuitum-chatbot-messages"),a=u.getElementById("loading-indicator"),c=u.getElementById("intuitum-chatbot-body");c.scrollTop=c.scrollHeight,n.disabled=!0,a.style.display="block";var s=document.createElement("div");s.classList.add("intuitum-chatbot-message","user"),s.textContent=t,r.appendChild(s);var l="";o(e().mark(function o(){var s,d,m,p,h,g;return e().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:l=e.sent,a.style.display="none",(s=document.createElement("div")).classList.add("intuitum-bot-container"),(d=document.createElement("div")).classList.add("intuitum-chatbot-message","bot"),s.appendChild(d),(m=document.createElement("img")).src=i.logoUrl,m.classList.add("intuitum-bot-icon"),s.appendChild(m),r.appendChild(s),(p=document.createElement("span")).classList.add("intuitum-bot-text"),d.appendChild(p),v=!0,h=0,g=setInterval(function(){c.scrollTop=c.scrollHeight,h<l.length?(p.textContent+=l[h],h++):(clearInterval(g),v=!1,T(l,p))},50),n.disabled=!1,submitButton.disabled=!1,u.getElementById("chatbot-input").value="",u.getElementById("chatbot-button").disabled=!1,u.getElementById("chatbot-input").disabled=!1;case 25:case"end":return e.stop()}},o)}))()}})})}""==i.quickQuestion1&&u.getElementById("intuitum-quick-question-1").classList.add("d-none"),""==i.quickQuestion2&&u.getElementById("intuitum-quick-question-2").classList.add("d-none"),""==i.quickQuestion3&&u.getElementById("intuitum-quick-question-3").classList.add("d-none"),u.getElementById("chatbot-form").addEventListener("submit",function(t){if(t.preventDefault(),!v){u.getElementById("intuitum-quick-replies").classList.remove("d-flex"),u.getElementById("intuitum-quick-replies").classList.add("intuitum-hidden");var n=u.getElementById("intuitum-chatbot-button");n.disabled=!0;var r=u.getElementById("chatbot-input"),a=u.getElementById("intuitum-chatbot-messages"),c=u.getElementById("loading-indicator"),s=u.getElementById("intuitum-chatbot-body");r.disabled=!0,c.style.display="block";var l=document.createElement("div");l.classList.add("intuitum-chatbot-message","user"),l.textContent=r.value,a.appendChild(l),s.scrollTop=s.scrollHeight;var d=r.value;r.value="";var m="";o(e().mark(function t(){var n,o,r,u,l,p;return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(d);case 2:m=t.sent,c.style.display="none",(n=document.createElement("div")).classList.add("intuitum-bot-container"),(o=document.createElement("div")).classList.add("intuitum-chatbot-message","bot"),(r=document.createElement("img")).src=i.logoUrl,r.classList.add("intuitum-bot-icon"),n.appendChild(r),n.appendChild(o),a.appendChild(n),(u=document.createElement("span")).classList.add("intuitum-bot-text"),o.appendChild(u),v=!0,l=0,p=setInterval(function(){s.scrollTop=s.scrollHeight,l<m.length?(u.textContent+=m[l],l++):(clearInterval(p),v=!1,T(m,u))},50);case 20:case"end":return t.stop()}},t)}))(),r.disabled=!1,n.disabled=!1}});
},{}]},{},["ZJmq"], null)
//# sourceMappingURL=/to_bundle_customizable.js.map