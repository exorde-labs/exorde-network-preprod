parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"kFQp":[function(require,module,exports) {
module.exports="/newspaper_burning.eefe631e.png";
},{}],"FCrL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.StatsCards=exports.CardsContainer=exports.Appbar=exports.RightSide=exports.SocialNetworks=exports.ButtonsContainer=exports.Subtitle=exports.Title=exports.Catchwords=exports.Content=exports.LeftSide=exports.Container=void 0;var n=r(require("styled-components")),e=t(require("~style/assets/img/newspaper_burning.png"));function t(n){return n&&n.__esModule?n:{default:n}}function i(){if("function"!=typeof WeakMap)return null;var n=new WeakMap;return i=function(){return n},n}function r(n){if(n&&n.__esModule)return n;if(null===n||"object"!=typeof n&&"function"!=typeof n)return{default:n};var e=i();if(e&&e.has(n))return e.get(n);var t={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in n)if(Object.prototype.hasOwnProperty.call(n,o)){var l=r?Object.getOwnPropertyDescriptor(n,o):null;l&&(l.get||l.set)?Object.defineProperty(t,o,l):t[o]=n[o]}return t.default=n,e&&e.set(n,t),t}var o=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},l=n.default.div(v||(v=o(["\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  background-color: ",";\n"],["\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  background-color: ",";\n"])),function(n){return n.theme.colors.primary});exports.Container=l;var a=n.default.div(h||(h=o(["\n  &&:before {\n    content: '';\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-image: url(",");\n    background-size: cover;\n    background-position: center;\n    ","\n  }\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n  position: relative;\n  align-items: center;\n  justify-content: flex-end;\n"],["\n  &&:before {\n    content: '';\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-image: url(",");\n    background-size: cover;\n    background-position: center;\n    ","\n  }\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n  position: relative;\n  align-items: center;\n  justify-content: flex-end;\n"])),e.default,function(e){return e.theme.dark&&(0,n.css)(b||(b=o(["\n        filter: grayscale(1);\n      "],["\n        filter: grayscale(1);\n      "])))});exports.LeftSide=a;var s=n.default.div(m||(m=o(["\n  position: relative;\n  height: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"],["\n  position: relative;\n  height: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));exports.Content=s;var d=n.default.div(w||(w=o(["\n  flex: 1;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n"],["\n  flex: 1;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n"])));exports.Catchwords=d;var c=n.default.h1(j||(j=o(["\n  font-family: 'Jaapokki';\n  text-transform: uppercase;\n  font-size: 30px;\n  line-height: 35px;\n  color: ",";\n  margin: 0;\n"],["\n  font-family: 'Jaapokki';\n  text-transform: uppercase;\n  font-size: 30px;\n  line-height: 35px;\n  color: ",";\n  margin: 0;\n"])),function(n){return n.theme.colors.secondary});exports.Title=c;var f=(0,n.default)(c)(k||(k=o(["\n  color: ",";\n"],["\n  color: ",";\n"])),function(n){return n.theme.colors.tertiary});exports.Subtitle=f;var p=n.default.div(C||(C=o(["\n  flex: 1;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n"],["\n  flex: 1;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n"])));exports.ButtonsContainer=p;var x=n.default.div(O||(O=o(["\n  flex: 1;\n  position: relative;\n  display: flex;\n  color: ",";\n  justify-content: space-evenly;\n  align-items: flex-end;\n  width: 50%;\n  padding: 30px;\n"],["\n  flex: 1;\n  position: relative;\n  display: flex;\n  color: ",";\n  justify-content: space-evenly;\n  align-items: flex-end;\n  width: 50%;\n  padding: 30px;\n"])),function(n){return n.theme.colors.secondary});exports.SocialNetworks=x;var u=n.default.div(z||(z=o(["\n  flex: 1;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"],["\n  flex: 1;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));exports.RightSide=u;var g=n.default.div(S||(S=o(["\n  display: flex;\n  flex-direction: row;\n  padding: 50px;\n  width: 100%;\n  box-sizing: border-box;\n"],["\n  display: flex;\n  flex-direction: row;\n  padding: 50px;\n  width: 100%;\n  box-sizing: border-box;\n"])));exports.Appbar=g;var y=n.default.div(P||(P=o(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 50px;\n"],["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 50px;\n"])));exports.CardsContainer=y;var v,b,h,m,w,j,k,C,O,z,S,P,_,M=n.default.div(_||(_=o(["\n  display: flex;\n  flex-direction: row;\n  box-sizing: border-box;\n  justify-content: space-between;\n  width: 100%;\n"],["\n  display: flex;\n  flex-direction: row;\n  box-sizing: border-box;\n  justify-content: space-between;\n  width: 100%;\n"])));exports.StatsCards=M;
},{"styled-components":"tFSs","~style/assets/img/newspaper_burning.png":"kFQp"}],"UQ9i":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=c(require("react")),t=require("@fortawesome/react-fontawesome"),l=require("react-router-dom"),n=c(require("~style/components/Button")),a=c(require("~style/components/Card")),r=require("./style"),u=require("~style/constants"),o=c(require("~style/components/Logo"));function c(e){return e&&e.__esModule?e:{default:e}}var d=function(){return e.default.createElement(r.Container,null,e.default.createElement(r.LeftSide,null,e.default.createElement(r.Content,null,e.default.createElement(r.Catchwords,null,e.default.createElement(r.Title,null,"Fight against fake news"),e.default.createElement(r.Subtitle,null,"Be rewarded")),e.default.createElement(r.ButtonsContainer,null,e.default.createElement(l.Link,{to:"dashboard"},e.default.createElement(n.default,{onClick:function(){console.log("click discover")},size:u.Sizes.XL},"DISCOVER"))),e.default.createElement(r.SocialNetworks,null,e.default.createElement(t.FontAwesomeIcon,{icon:["fab","reddit-square"],size:"2x"}),e.default.createElement(t.FontAwesomeIcon,{icon:["fab","facebook-square"],size:"2x"}),e.default.createElement(t.FontAwesomeIcon,{icon:["fab","linkedin"],size:"2x"}),e.default.createElement(t.FontAwesomeIcon,{icon:["fab","medium"],size:"2x"})))),e.default.createElement(r.RightSide,null,e.default.createElement(r.Appbar,null,e.default.createElement(o.default,null)),e.default.createElement(r.CardsContainer,null,e.default.createElement(a.default,{title:"Hot Topics"},"Coming soon"),e.default.createElement(r.StatsCards,null,e.default.createElement(a.default,{title:"EXD value"},"1.35$"),e.default.createElement(a.default,{title:"Online rooters"},"45355")))))},i=d;exports.default=i;
},{"react":"n8MK","@fortawesome/react-fontawesome":"O6gX","react-router-dom":"uc19","~style/components/Button":"FAid","~style/components/Card":"x3Rk","./style":"FCrL","~style/constants":"FUjp","~style/components/Logo":"uA4t"}],"nPSv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return e.default}});var e=t(require("./Welcome"));function t(e){return e&&e.__esModule?e:{default:e}}
},{"./Welcome":"UQ9i"}]},{},[], null)