parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Pz0o":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=l(require("react")),n=l(require("styled-components")),t=require("react-helmet"),r=l(require("../shared/components/Layout"));function l(e){return e&&e.__esModule?e:{default:e}}var a,o,u,d,i,f=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},s=n.default.div(a||(a=f(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n"],["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n"]))),c=n.default.div(o||(o=f(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  padding: 50px;\n  justify-content: center;\n  align-items: center;\n"],["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  padding: 50px;\n  justify-content: center;\n  align-items: center;\n"]))),p=n.default.h1(u||(u=f(["\n  display: flex;\n  align-self: flex-start;\n  font-size: 50px;\n  margin: 0;\n  padding-right: 50px;\n  border-bottom: 5px solid #353535;\n"],["\n  display: flex;\n  align-self: flex-start;\n  font-size: 50px;\n  margin: 0;\n  padding-right: 50px;\n  border-bottom: 5px solid #353535;\n"]))),m=n.default.div(d||(d=f(["\n  display: flex;\n  border-radius: 10px;\n  width: 100%;\n  padding: 20px;\n"],["\n  display: flex;\n  border-radius: 10px;\n  width: 100%;\n  padding: 20px;\n"]))),h=n.default.div(i||(i=f(["\n  display: flex;\n  flex-direction: column;\n  background-color: #353535;\n  border-radius: 10px;\n  flex: 1;\n  min-height: 100px;\n  padding: 10px;\n  align-items: flex-start;\n  justify-content: center;\n  a {\n    text-decoration: none;\n    color: #3b67fd;\n  }\n  @media (min-width: 768px) {\n    padding: 30px;\n  }\n"],["\n  display: flex;\n  flex-direction: column;\n  background-color: #353535;\n  border-radius: 10px;\n  flex: 1;\n  min-height: 100px;\n  padding: 10px;\n  align-items: flex-start;\n  justify-content: center;\n  a {\n    text-decoration: none;\n    color: #3b67fd;\n  }\n  @media (min-width: 768px) {\n    padding: 30px;\n  }\n"]))),x=[function(){return e.default.createElement("span",null,"Photo by",e.default.createElement("a",{href:"https://unsplash.com/@elijahsad?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",target:"_blank",rel:"noopener noreferrer"}," ","Elijah O'Donnell")," ","on",e.default.createElement("a",{href:"https://unsplash.com/photos/t8T_yUgCKSM",target:"_blank",rel:"noopener noreferrer"}," ","Unsplash"))},function(){return e.default.createElement("span",null,"Photo by",e.default.createElement("a",{href:"https://unsplash.com/@jay_skyler?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",target:"_blank",rel:"noopener noreferrer"}," ","Jay Skyler")," ","on",e.default.createElement("a",{href:"https://unsplash.com/photos/cigdmaxkcjA",target:"_blank",rel:"noopener noreferrer"}," ","Unsplash"))},function(){return e.default.createElement("span",null,"Photo by",e.default.createElement("a",{href:"https://unsplash.com/@shanerounce?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",target:"_blank",rel:"noopener noreferrer"}," ","Shane Rounce")," ","on",e.default.createElement("a",{href:"https://unsplash.com/photos/DNkoNXQti3c",target:"_blank",rel:"noopener noreferrer"}," ","Unsplash"))},function(){return e.default.createElement("span",null,"Photo by",e.default.createElement("a",{href:"https://www.pexels.com/@1585669",target:"_blank",rel:"noopener noreferrer"}," ","Анна Рыжкова"," "),"from",e.default.createElement("a",{href:"https://www.pexels.com/photo/person-rock-climbing-3077882",target:"_blank",rel:"noopener noreferrer"}," ","Pexels"," "))},function(){return e.default.createElement("span",null,"Photo by"," ",e.default.createElement("a",{href:"https://www.pexels.com/@sharn07jot",target:"_blank",rel:"noopener noreferrer"}," ","Gursharndeep Singh"," "),"from",e.default.createElement("a",{href:"https://www.pexels.com/photo/lighted-incandescent-bulb-2938278",target:"_blank",rel:"noopener noreferrer"}," ","Pexels"," "))},function(){return e.default.createElement("span",null,"Photo by"," ",e.default.createElement("a",{href:"https://www.pexels.com/@todd-trapani-488382",target:"_blank",rel:"noopener noreferrer"},"Todd Trapani")," ","from",e.default.createElement("a",{href:"https://www.pexels.com/photo/lighthouse-during-golden-hour-1535162",target:"_blank",rel:"noopener noreferrer"}," ","Pexels"))}],g=function(){return e.default.createElement(e.default.Fragment,null,e.default.createElement(t.Helmet,null,e.default.createElement("meta",{name:"robots",content:"noindex"})),e.default.createElement(r.default,null,e.default.createElement(s,null,e.default.createElement(c,null,e.default.createElement(p,null,"Credits"),e.default.createElement(m,null,e.default.createElement(h,null,e.default.createElement("h3",null,"Pictures : "),e.default.createElement("ul",null,x.map(function(n,t){return e.default.createElement("li",{key:"credit-"+t},e.default.createElement(n,null))}))))))))},b=g;exports.default=b;
},{"react":"n8MK","styled-components":"tFSs","react-helmet":"d59q","../shared/components/Layout":"mrk4"}],"xfNx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return e.default}});var e=t(require("./Credits"));function t(e){return e&&e.__esModule?e:{default:e}}
},{"./Credits":"Pz0o"}]},{},[], null)