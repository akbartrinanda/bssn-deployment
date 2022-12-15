function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"4fRq":function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);e.exports=function(){return n(r),r}}else{var a=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),a[t]=e>>>((3&t)<<3)&255;return a}}},"7wxJ":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("itXk");function a(e){return function(t){return t.lift(new r.a(e))}}},"8QLY":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){function t(e){var n;return _classCallCheck(this,t),n=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this)),Object.assign(_assertThisInitialized(n),e),n}return _inherits(t,e),t}(n("nlmg").a)},C7Jo:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("IheW"),a=n("0UPu"),o=n("8Y7J"),i=n("FTDy"),c=n("x/qF"),s=function(){var e=function(){function e(t,n,a){_classCallCheck(this,e),this._http=t,this._tokenService=a,this.httpOptions={headers:new r.g({Authorization:"Bearer "+this._tokenService.get()})},this.httpOptions2={headers:new r.g({Authorization:"Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2MTEyMDE0MTQsInN1YiI6ImFkbWluY0Bjb250ZW50LmNvbSIsInJlZnJlc2giOiJmYWxzZSIsImV4cCI6MTYxNjM4NTQxNH0.5l-NAjb1fiRDd8xIzxGNxYr24uspGZ90YhjebUHsKE3XCp1F1G3yHwTMtYRYOVmLMZdOxJn53gTJfpTHNtHang"})},this.handleError=n.createHandleError("SearchDocumentService")}return _createClass(e,[{key:"httpOptionNew",value:function(){return{headers:new r.g({Authorization:"Bearer "+this._tokenService.get()})}}},{key:"getUser",value:function(e){return this._http.get(a.a.api3.getUserAD+"?USER_LOGIN_NAME=".concat(e),this.httpOptions)}},{key:"getUserUAC",value:function(e){return this._http.get(a.a.uac.getUser+"?email=".concat(e),this.httpOptions2)}},{key:"getUserUpdate",value:function(e){return this._http.get(a.a.api3.getUser+"?USER_LOGIN_NAME=".concat(e),this.httpOptions)}},{key:"postUser",value:function(e){return this._http.post(a.a.api3.postUser,e,this.httpOptions)}},{key:"putUser",value:function(e){return this._http.put(a.a.api3.postUser,e,this.httpOptions)}},{key:"deleteUser",value:function(e){return this._http.delete(a.a.api3.getAllUser+"?R_OBJECT_ID=".concat(e),this.httpOptions)}},{key:"getRoles",value:function(){return{output:[{role:"Viewer",r_object_id:"1"},{role:"Contributor",r_object_id:"2"},{role:"Supervisor",r_object_id:"3"},{role:"User Admin",r_object_id:"4"},{role:"Super Admin",r_object_id:"5"}]}}},{key:"getGroupFungsi",value:function(){return{output:[{description:"Group for batch upload user",r_object_id:"1111",group_name:"bca_batch_uploader"},{description:"Group for Pemrek Contributor",r_object_id:"2222",group_name:"pemrek_contributor"},{description:"Group for User Management Admin",r_object_id:"3333",group_name:"user_admin"},{description:"Group for Pemrek Supervisor",r_object_id:"4444",group_name:"pemrek_supervisor"},{description:"Group for Pemrek Viewer",r_object_id:"5555",group_name:"pemrek_viewer"}]}}},{key:"getAllRoles",value:function(){return this._http.get(a.a.api3.role,this.httpOptionNew())}},{key:"getAllUsers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;return this._http.get("".concat(a.a.api3.user,"?q=").concat(e,"&page=").concat(t,"&size=").concat(n),this.httpOptionNew())}},{key:"createUser",value:function(e){return this._http.post(a.a.api3.user,e,this.httpOptionNew())}},{key:"updateUser",value:function(e){return this._http.put(a.a.api3.user,e,this.httpOptionNew())}},{key:"deleteUserNew",value:function(e){return this._http.delete("".concat(a.a.api3.user,"/").concat(e),this.httpOptionNew())}}]),e}();return e.ngInjectableDef=o.Yb({factory:function(){return new e(o.Zb(r.c),o.Zb(i.a),o.Zb(c.a))},token:e,providedIn:"root"}),e}()},EcEN:function(e,t,n){var r=n("xDdU"),a=n("xk4V"),o=a;o.v1=r,o.v4=a,e.exports=o},I2ZF:function(e,t){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);e.exports=function(e,t){var r=t||0;return[n[e[r++]],n[e[r++]],n[e[r++]],n[e[r++]],"-",n[e[r++]],n[e[r++]],"-",n[e[r++]],n[e[r++]],"-",n[e[r++]],n[e[r++]],"-",n[e[r++]],n[e[r++]],n[e[r++]],n[e[r++]],n[e[r++]],n[e[r++]]].join("")}},Iab2:function(e,t,n){var r,a;void 0===(a="function"==typeof(r=function(){"use strict";function t(e,t,n){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){o(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(n)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,o=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype?function(e,o,i){var c=a.URL||a.webkitURL,s=document.createElement("a");s.download=o=o||e.name||"download",s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?r(s):n(s.href)?t(e,o,i):r(s,s.target="_blank")):(s.href=c.createObjectURL(e),setTimeout((function(){c.revokeObjectURL(s.href)}),4e4),setTimeout((function(){r(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,a,o){if(a=a||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,o),a);else if(n(e))t(e,a,o);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout((function(){r(i)}))}}:function(e,n,r,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return t(e,n,r);var i="application/octet-stream"===e.type,c=/constructor/i.test(a.HTMLElement)||a.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||i&&c)&&"object"==typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=s?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},u.readAsDataURL(e)}else{var l=a.URL||a.webkitURL,h=l.createObjectURL(e);o?o.location=h:location.href=h,o=null,setTimeout((function(){l.revokeObjectURL(h)}),4e4)}});a.saveAs=o.saveAs=o,e.exports=o})?r.apply(t,[]):r)||(e.exports=a)},MZ6P:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function e(){_classCallCheck(this,e)}},Oxxi:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("IheW"),a=n("0UPu"),o=n("8Y7J"),i=n("x/qF"),c=function(){var e=function(){function e(t,n){_classCallCheck(this,e),this.http=t,this._tokenService=n}return _createClass(e,[{key:"getListLaporan",value:function(){var e={headers:new r.g({Authorization:"Bearer "+this._tokenService.get()})};return this.http.get(a.a.api3.listLaporan,e)}},{key:"getListKategori",value:function(){var e={headers:new r.g({Authorization:"Bearer "+this._tokenService.get()})};return this.http.get(a.a.api3.listKategori+"?USER_LOGIN_NAME=".concat(JSON.parse(sessionStorage.getItem("deaCurrentLogin")).user_login_name),e)}},{key:"getlaporan",value:function(e){var t={headers:new r.g({Authorization:"Bearer "+this._tokenService.get()}),params:e};return this.http.get(a.a.api3.auditTrail,t)}}]),e}();return e.ngInjectableDef=o.Yb({factory:function(){return new e(o.Zb(r.c),o.Zb(i.a))},token:e,providedIn:"root"}),e}()},"Qu+M":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function e(){_classCallCheck(this,e)}},VHBx:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function e(){_classCallCheck(this,e)}},Xf9Z:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function e(){_classCallCheck(this,e)}},"bB+m":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function e(){_classCallCheck(this,e)}},dAmK:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("IheW"),a=n("0UPu"),o=n("lJxs"),i=n("JIr8"),c=n("WQLd"),s=n("Rxik"),u=n("8Y7J"),l=n("FTDy"),h=n("x/qF"),p=function(){var e=function(){function e(t,n,r){_classCallCheck(this,e),this._http=t,this._tokenService=r,this.handleError=n.createHandleError("SearchDocumentService")}return _createClass(e,[{key:"getSearchHeaderDock",value:function(e,t){var n={headers:new r.g({Authorization:"Bearer "+this._tokenService.get()})};return this._http.get(a.a.api3.getSearchDocumentHeader+"?INQUIRY_TYPE="+e+"&SUPER_TYPE="+t,n)}},{key:"getSearchHeaderDockByObjectType",value:function(e,t,n){var o={headers:new r.g({Authorization:"Bearer "+this._tokenService.get()})};return this._http.get(a.a.api3.getSearchDocumentHeader+"?OBJECT_TYPE="+e+"&INQUIRY_TYPE="+t+"&SUPER_TYPE="+n,o)}},{key:"searchDock",value:function(e){var t={headers:new r.g({Authorization:"Bearer "+this._tokenService.get()})};return this._http.get(a.a.api3.getSearchDocument+"?KATEGORI="+e,t)}},{key:"search",value:function(e){var t={headers:new r.g({Authorization:"Bearer "+this._tokenService.get()})};return this._http.get(a.a.api3.getIdentitas+"?CIS_NUMBER=".concat(e),t).pipe(Object(o.a)((function(e){return new c.a(e)})))}},{key:"searchAny",value:function(e,t,n,o){var i={headers:new r.g({Authorization:"Bearer "+this._tokenService.get()})};return this._http.get(a.a.api3.getDocument+"/".concat(e,"/").concat(t,"?ATTRIBUTE=").concat(n,"&VALUE=").concat(o),i)}},{key:"searchByNoCis",value:function(e){var t={headers:new r.g({Authorization:"Bearer "+this._tokenService.get()})};return this._http.get(a.a.api3.getIdentitas+"?CIS_NUMBER=".concat(e),t).pipe(Object(i.a)(this.handleError("findByNoCis")))}},{key:"deleteDataSearchIdentitas",value:function(){sessionStorage.removeItem("data-search-iden")}},{key:"deleteDataSearchRekening",value:function(){sessionStorage.removeItem("data-search-rek")}},{key:"getCategorySearch",value:function(e){var t={headers:new r.g({Authorization:"Bearer "+this._tokenService.get()})};return this._http.get(a.a.api3.getCategorySearch+"?USER_LOGIN_NAME=".concat(e),t).pipe(Object(i.a)(this.handleError("getCategorySearch")))}},{key:"getListRekening",value:function(e){var t={headers:new r.g({Authorization:"Bearer "+this._tokenService.get(),ClientID:"".concat(s.a.settings.ad.ClientID)})};return this._http.get(a.a.api3.getListRekening+"/".concat(e),t).pipe()}},{key:"getNamaNasabah",value:function(e){var t={headers:new r.g({Authorization:"Bearer "+this._tokenService.get(),ClientID:"".concat(s.a.settings.ad.ClientID)})};return this._http.get(a.a.api3.getNamaNasabah+"/".concat(e,"?FunctionCode=04"),t).pipe()}}]),e}();return e.ngInjectableDef=u.Yb({factory:function(){return new e(u.Zb(r.c),u.Zb(l.a),u.Zb(h.a))},token:e,providedIn:"root"}),e}()},e8xA:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){function t(e){var n;return _classCallCheck(this,t),n=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this)),Object.assign(_assertThisInitialized(n),e),n}return _inherits(t,e),t}(n("nlmg").a)},jWwG:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function e(){_classCallCheck(this,e)}},pEsw:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("IheW"),a=n("0UPu"),o=n("8Y7J"),i=n("FTDy"),c=n("x/qF"),s=function(){var e=function(){function e(t,n,r){_classCallCheck(this,e),this._http=t,this._tokenService=r,this.handleError=n.createHandleError("SearchDocumentService")}return _createClass(e,[{key:"get",value:function(){var e={headers:new r.g({Authorization:"Bearer "+this._tokenService.get()})};return this._http.get(a.a.api3.branch,e)}},{key:"getById",value:function(e){var t={headers:new r.g({Authorization:"Bearer "+this._tokenService.get()})};return this._http.get("".concat(a.a.api3.branch,"/").concat(e),t)}},{key:"post",value:function(e){var t={headers:new r.g({Authorization:"Bearer "+this._tokenService.get()})};return this._http.post(a.a.api3.branch,e,t)}},{key:"put",value:function(e){var t={headers:new r.g({Authorization:"Bearer "+this._tokenService.get()})};return this._http.put(a.a.api3.branch,e,t)}},{key:"delete",value:function(e){var t={headers:new r.g({Authorization:"Bearer "+this._tokenService.get()})};return this._http.delete("".concat(a.a.api3.branch,"/").concat(e),t)}}]),e}();return e.ngInjectableDef=o.Yb({factory:function(){return new e(o.Zb(r.c),o.Zb(i.a),o.Zb(c.a))},token:e,providedIn:"root"}),e}()},rXhA:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("IheW"),a=n("z6cu"),o=n("JIr8"),i=n("0UPu"),c=n("8Y7J"),s=n("FTDy"),u=n("x/qF"),l=function(){var e=function(){function e(t,n,r){_classCallCheck(this,e),this.http=t,this._tokenService=r,this.handleError=n.createHandleError("FileUploadService")}return _createClass(e,[{key:"s1UploadsDone",value:function(e,t){var n={headers:new r.g({Authorization:"Bearer "+this._tokenService.get()}),params:e};return this.http.post(i.a.api3.uploadFile+"/dynamic-chunksdone",t,n).pipe(Object(o.a)(this.handleError("s1UploadsDone")))}},{key:"uploadsDoneImageOnly",value:function(e){var t={headers:new r.g({Authorization:"Bearer "+this._tokenService.get()}),params:e};return this.http.put(i.a.api3.uploadFile+"/upload-image-chunksdone",null,t).pipe(Object(o.a)(this.handleError("s1UploadsDone")))}},{key:"s1UploadsDone2",value:function(e,t){var n={headers:new r.g({Authorization:"Bearer "+this._tokenService.get(),"Content-Type":"application/json"}),params:e};return this.http.post(i.a.api3.uploadFile+"/chunksdoneVersi2",t,n).pipe(Object(o.a)(this.handleError("s1UploadsDone")))}},{key:"s1Uploads",value:function(e){var t=new FormData;t.append("qqfile",e.qqfile),e.qqfile=null;var n={headers:new r.g({Authorization:"Bearer "+this._tokenService.get()}),params:e};return this.http.post(i.a.api3.uploadFile+"/uploads",t,n).pipe(Object(o.a)(this.handleError("s1Uploads")))}},{key:"uploadsImage",value:function(e,t){var n={headers:new r.g({Authorization:"Bearer "+this._tokenService.get()}),params:e};return this.http.put(i.a.api3.uploadFile+"/upload-image-chunksdone/".concat(t),null,n).pipe(Object(o.a)(this.handleError("s1UploadsDone")))}},{key:"downloadDriver",value:function(){var e={headers:new r.g({Authorization:"Bearer "+this._tokenService.get()})};return this.http.get(i.a.api3.uploadFile+"/downloadDriver",{headers:e.headers,responseType:"blob",observe:"response"}).pipe(Object(o.a)((function(e){return Object(a.a)(e)})))}}]),e}();return e.ngInjectableDef=c.Yb({factory:function(){return new e(c.Zb(r.c),c.Zb(s.a),c.Zb(u.a))},token:e,providedIn:"root"}),e}()},xDdU:function(e,t,n){var r,a,o=n("4fRq"),i=n("I2ZF"),c=0,s=0;e.exports=function(e,t,n){var u=t&&n||0,l=t||[],h=(e=e||{}).node||r,p=void 0!==e.clockseq?e.clockseq:a;if(null==h||null==p){var f=o();null==h&&(h=r=[1|f[0],f[1],f[2],f[3],f[4],f[5]]),null==p&&(p=a=16383&(f[6]<<8|f[7]))}var d=void 0!==e.msecs?e.msecs:(new Date).getTime(),v=void 0!==e.nsecs?e.nsecs:s+1,g=d-c+(v-s)/1e4;if(g<0&&void 0===e.clockseq&&(p=p+1&16383),(g<0||d>c)&&void 0===e.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");c=d,s=v,a=p;var k=(1e4*(268435455&(d+=122192928e5))+v)%4294967296;l[u++]=k>>>24&255,l[u++]=k>>>16&255,l[u++]=k>>>8&255,l[u++]=255&k;var b=d/4294967296*1e4&268435455;l[u++]=b>>>8&255,l[u++]=255&b,l[u++]=b>>>24&15|16,l[u++]=b>>>16&255,l[u++]=p>>>8|128,l[u++]=255&p;for(var _=0;_<6;++_)l[u+_]=h[_];return t||i(l)}},xk4V:function(e,t,n){var r=n("4fRq"),a=n("I2ZF");e.exports=function(e,t,n){var o=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||r)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t)for(var c=0;c<16;++c)t[o+c]=i[c];return t||a(i)}},xu6C:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("HDdC"),a=n("8Y7J"),o=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"checkMimeType",value:function(e){var t=this;return r.a.create((function(n){if(e){var r=new FileReader;r.onload=function(e){},r.onloadend=function(e){for(var r=new Uint8Array(e.target.result).subarray(0,4),a="",o=0;o<r.length;o++)a+=t.pad(r[o].toString(16),2);var i="unknown";switch(a){case"89504e470d0a1a0a":case"89504e47":i="image/png";break;case"ffd8ffe0":case"ffd8ffe1":case"ffd8ffe2":case"ffd8ffdb":i="image/jpeg";break;case"25504446":i="application/pdf";break;case"49492a0":case"4d4d02a":case"49492a00":case"4d4d002a":i="image/tiff";break;case"424db651":case"424d7c11":case"424d66b4":case"424d384":case"424d7858":case"424d38f9":case"424d36c0":case"424dfeb3":case"424dbbe6":case"424d4e74":i="image/bmp"}for(;"unknown"===i;){if(a.toLowerCase().startsWith("424d".toLowerCase())){i="image/bmp";break}break}n.next(i),n.complete()},r.onerror=function(e){n.error(e)},r.onabort=function(e){n.error(e)},r.readAsArrayBuffer(e)}else n.next("unknown"),n.complete()}))}},{key:"mimeType",value:function(e){var t="unknown";switch(e.toLowerCase()){case"89504e47":t="image/png";break;case"47494638":t="image/gif";break;case"ffd8ffe0":case"ffd8ffe1":case"ffd8ffdb":t="jpg";break;case"ffd8ffe2":t="image/jpeg";break;case"25504446":t="pdf";break;case"7b5c7274":t="rtf";break;case"504b0304":t="zip archive (Office)";break;case"504b0506":t="zip archive empty";break;case"504b0708":t="zip archive spanned";break;case"49492a00":t="TIF (little endian format)";break;case"4d4d002a":t="TIF (big endian format)";break;case"d0cf11e0":t="Old Office Format";break;default:t="Unsupported"}return t}},{key:"getBLOBFileHeader",value:function(e,t,n){var r=this,a=new FileReader;a.onloadend=function(t){for(var n=new Uint8Array(t.target.result).subarray(0,4),a="",o=0;o<n.length;o++)a+=r.pad(n[o].toString(16),2);r.headerCallback(e,a)},a.readAsArrayBuffer(t)}},{key:"pad",value:function(e,t){var n="0000"+e;return n.substr(n.length-t)}},{key:"headerCallback",value:function(e,t){this.printHeaderInfo(e,t)}},{key:"remoteCallback",value:function(e,t){this.getBLOBFileHeader(e,t,this.headerCallback)}},{key:"printHeaderInfo",value:function(e,t){}},{key:"testReadFileInChunksAsDataURL",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:65536,n=arguments.length>2?arguments[2]:void 0,a=e.size,o=n||e.type;return r.a.create((function(n){var r=[];!function i(c){var s=c+t,u=new FileReader,l=e.slice(c,s,o);u.onload=function(){r.push(l),s>=a?(n.next(r),n.complete()):i(s)},u.onerror=function(e){return n.error(e)},u.onabort=function(e){return n.error(e)},u.readAsDataURL(l)}(0)}))}}]),e}();return e.ngInjectableDef=a.Yb({factory:function(){return new e},token:e,providedIn:"root"}),e}()},zBF3:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("IheW"),a=n("0UPu"),o=n("8Y7J"),i=n("FTDy"),c=n("x/qF"),s=function(){var e=function(){function e(t,n,r){_classCallCheck(this,e),this._http=t,this._tokenService=r,this.handleError=n.createHandleError("SearchDocumentService")}return _createClass(e,[{key:"get",value:function(){var e={headers:new r.g({Authorization:"Bearer "+this._tokenService.get()})};return this._http.get(a.a.api3.getCategory,e)}},{key:"post",value:function(e){var t={headers:new r.g({Authorization:"Bearer "+this._tokenService.get()})};return this._http.post(a.a.api3.postCategory,e,t)}},{key:"put",value:function(e){var t={headers:new r.g({Authorization:"Bearer "+this._tokenService.get()})};return this._http.put(a.a.api3.putCategory,e,t)}},{key:"delete",value:function(e){var t={headers:new r.g({Authorization:"Bearer "+this._tokenService.get()})};return this._http.delete(a.a.api3.delCategory+"?id=".concat(e),t)}},{key:"getType",value:function(){return[{name:"Text",value:"text"},{name:"Number",value:"number"},{name:"Date",value:"date"},{name:"Hidden",value:"hidden"}]}},{key:"getSuperCategory",value:function(){return[{name:"Nasabah",value:"nasabah"},{name:"Internal",value:"internal"}]}},{key:"getObjectType",value:function(){return[{name:"Identitas Document",value:"el_identitas_document"},{name:"Rekening Document",value:"el_rekening_document"}]}}]),e}();return e.ngInjectableDef=o.Yb({factory:function(){return new e(o.Zb(r.c),o.Zb(i.a),o.Zb(c.a))},token:e,providedIn:"root"}),e}()}}]);