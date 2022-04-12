!function(n){function t(u){if(o[u])return o[u].exports;var c=o[u]={i:u,l:!1,exports:{}};return n[u].call(c.exports,c,c.exports,t),c.l=!0,c.exports}var o={};t.m=n,t.c=o,t.d=function(n,o,u){t.o(n,o)||Object.defineProperty(n,o,{enumerable:!0,get:u})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,o){if(1&o&&(n=t(n)),8&o)return n;if(4&o&&"object"==typeof n&&n&&n.__esModule)return n;var u=Object.create(null);if(t.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:n}),2&o&&"string"!=typeof n)for(var c in n)t.d(u,c,function(t){return n[t]}.bind(null,c));return u},t.n=function(n){var o=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(o,"a",o),o},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=239)}([function(n,t,o){},function(n,t,o){},function(n,t){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){n.exports=function(n){}},function(n,t,o){var u=o(73),c=o(68),i=o(20),f=o(5),r=o(87),e=[].push,a=function(n){var t=1==n,o=2==n,a=3==n,s=4==n,l=6==n,p=5==n||l;return function(v,y,x,d){for(var b,g,h=i(v),O=c(h),m=u(y,x,3),j=f(O.length),I=0,S=d||r,w=t?S(v,j):o?S(v,0):void 0;j>I;I++)if((p||I in O)&&(g=m(b=O[I],I,h),n))if(t)w[I]=g;else if(g)switch(n){case 3:return!0;case 5:return b;case 6:return I;case 2:e.call(w,b)}else if(s)return!1;return l?-1:a||s?s:w}};n.exports={forEach:a(0),map:a(1),filter:a(2),some:a(3),every:a(4),find:a(5),findIndex:a(6)}},function(n,t,o){},function(n,t,o){},function(n,t){},function(n,t){var o={}.hasOwnProperty;n.exports=function(n,t){return o.call(n,t)}},function(n,t,o){},function(n,t){n.exports=function(n){return t}},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){var u=o(65),c=o(113);u("inspectSource",function(n){return c.call(n)}),n.exports=function(n,t,o,u){}},function(n,t,o){},function(n,t,o){},function(n,t){var o=Math.ceil,u=Math.floor;n.exports=function(n){return isNaN(n=+n)?0:(n>0?u:o)(n)}},function(n,t,o){},function(n,t){n.exports=function(n){if(null==n)throw TypeError("Can't call method on "+n);return n}},function(n,t,o){},function(n,t){n.exports=function(n){}},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){n.exports=function(n,t){}},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){var u,c,i,f=o(145),r=o(1),e=o(15),a=o(26),s=o(25),l=o(75),p=o(76),v=r.WeakMap;if(f){var y=new v,x=y.get,d=y.has,b=y.set;u=function(n,t){return b.call(y,n,t),t},c=function(n){return x.call(y,n)||{}},i=function(n){return d.call(y,n)}}else{var g=l("state");p[g]=!0,u=function(n,t){return a(n,g,t),t},c=function(n){return s(n,g)?n[g]:{}},i=function(n){return s(n,g)}}n.exports={set:u,get:c,has:i,enforce:function(n){return i(n)?c(n):u(n,{})},getterFor:function(n){return function(t){var o;if(!e(t)||(o=c(t)).type!==n)throw TypeError("Incompatible receiver, "+n+" required");return o}}}},function(n,t,o){n.exports=function(n,t){}},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){var u=o(15);n.exports=function(n,t){if(!u(n))return n;var o,c;if(t&&"function"==typeof(o=n.toString)&&!u(c=o.call(n)))return c;if("function"==typeof(o=n.valueOf)&&!u(c=o.call(n)))return c;if(!t&&"function"==typeof(o=n.toString)&&!u(c=o.call(n)))return c;throw TypeError("Can't convert object to primitive value")}},function(n,t){n.exports=function(n,t){return{enumerable:!(1&n),configurable:!(2&n),writable:!(4&n),value:t}}},function(n,t,o){n.exports=Array.isArray||function(n){}},function(n,t){n.exports=function(n){}},function(n,t,o){n.exports=function(n,t,o){}},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){var u=o(4),c=o(70),i=o(26),f=u("unscopables"),r=Array.prototype;null==r[f]&&i(r,f,c(null)),n.exports=function(n){r[f][n]=!0}},function(n,t){},function(n,t,o){var u=o(144);n.exports=function(n,t){return u[n]||(u[n]=void 0!==t?t:{})}},function(n,t,o){n.exports=function(n){}},function(n,t){},function(n,t,o){var u=o(2),c=o(41),i="".split;n.exports=u(function(){return!Object("z").propertyIsEnumerable(0)})?function(n){return"String"==c(n)?i.call(n,""):Object(n)}:Object},function(n,t){},function(n,t,o){},function(n,t,o){n.exports=Object.keys||function(n){}},function(n,t,o){},function(n,t,o){var u=o(57);n.exports=function(n,t,o){if(u(n),void 0===t)return n;switch(o){case 0:return function(){return n.call(t)};case 1:return function(o){return n.call(t,o)};case 2:return function(o,u){return n.call(t,o,u)};case 3:return function(o,u,c){return n.call(t,o,u,c)}}return function(){return n.apply(t,arguments)}}},function(n,t,o){},function(n,t,o){var u=o(65),c=o(84),i=u("keys");n.exports=function(n){return i[n]||(i[n]=c(n))}},function(n,t){},function(n,t,o){"use strict";var u=o(54),c=o(22),i=o(55);n.exports=function(n,t,o){var f=u(t);f in n?c.f(n,f,i(0,o)):n[f]=o}},function(n,t,o){},function(n,t){},function(n,t,o){"use strict";var u,c,i=o(95),f=RegExp.prototype.exec,r=String.prototype.replace,e=f,a=(u=/a/,c=/b*/g,f.call(u,"a"),f.call(c,"a"),0!==u.lastIndex||0!==c.lastIndex),s=void 0!==/()??/.exec("")[1];(a||s)&&(e=function(n){var t,o,u,c,e=this;return s&&(o=new RegExp("^"+e.source+"$(?!\\s)",i.call(e))),a&&(t=e.lastIndex),u=f.call(e,n),a&&u&&(e.lastIndex=e.global?u.index+u[0].length:t),s&&u&&u.length>1&&r.call(u[0],o,function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(u[c]=void 0)}),u}),n.exports=e},function(n,t,o){n.exports=function(n,t,o,u){}},function(n,t,o){},function(n,t,o){},function(n,t){n.exports=function(n){}},function(n,t,o){},function(n,t,o){var u=o(2),c=/#|\.prototype\./,i=function(n,t){var o=r[f(n)];return o==a||o!=e&&("function"==typeof t?u(t):!!t)},f=i.normalize=function(n){return String(n).replace(c,".").toLowerCase()},r=i.data={},e=i.NATIVE="N",a=i.POLYFILL="P";n.exports=i},function(n,t,o){var u=o(15),c=o(56),i=o(4)("species");n.exports=function(n,t){var o;return c(n)&&("function"!=typeof(o=n.constructor)||o!==Array&&!c(o.prototype)?u(o)&&null===(o=o[i])&&(o=void 0):o=void 0),new(void 0===o?Array:o)(0===t?0:t)}},function(n,t,o){var u=o(25),c=o(20),i=o(75),f=o(126),r=i("IE_PROTO"),e=Object.prototype;n.exports=f?Object.getPrototypeOf:function(n){return n=c(n),u(n,r)?n[r]:"function"==typeof n.constructor&&n instanceof n.constructor?n.constructor.prototype:n instanceof Object?e:null}},function(n,t,o){},function(n,t,o){},function(n,t){},function(n,t,o){},function(n,t,o){n.exports=function(n,t){}},function(n,t){n.exports=""},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){n.exports=o(1)},function(n,t){},function(n,t,o){},function(n,t,o){n.exports=function(n){}},function(n,t){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){var u=o(98),c=o(25),i=o(117),f=o(22).f;n.exports=function(n){var t=u.Symbol||(u.Symbol={});c(t,n)||f(t,n,{value:i.f(n)})}},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){"use strict";var u=o(0),c=o(147),i=o(88),f=o(74),r=o(58),e=o(26),a=o(34),s=o(4),l=o(69),p=o(67),v=o(119),y=v.IteratorPrototype,x=v.BUGGY_SAFARI_ITERATORS,d=s("iterator"),b=function(){return this};n.exports=function(n,t,o,s,v,g,h){c(o,t,s);var O,m,j,I=function(n){if(n===v&&E)return E;if(!x&&n in A)return A[n];switch(n){case"keys":case"values":case"entries":return function(){return new o(this,n)}}return function(){return new o(this)}},S=t+" Iterator",w=!1,A=n.prototype,P=A[d]||A["@@iterator"]||v&&A[v],E=!x&&P||I(v),T="Array"==t&&A.entries||P;if(T&&(O=i(T.call(new n)),y!==Object.prototype&&O.next&&(l||i(O)===y||(f?f(O,y):"function"!=typeof O[d]&&e(O,d,b)),r(O,S,!0,!0),l&&(p[S]=b))),"values"==v&&P&&"values"!==P.name&&(w=!0,E=function(){return P.call(this)}),l&&!h||A[d]===E||e(A,d,E),p[t]=E,v)if(m={values:I("values"),keys:g?E:I("keys"),entries:I("entries")},h)for(j in m)!x&&!w&&j in A||a(A,j,m[j]);else u({target:t,proto:!0,forced:x||w},m);return m}},function(n,t,o){"use strict";var u,c,i,f=o(88),r=o(26),e=o(25),a=o(4),s=o(69),l=a("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(c=f(f(i)))!==Object.prototype&&(u=c):p=!0),null==u&&(u={}),s||e(u,l)||r(u,l,function(){return this}),n.exports={IteratorPrototype:u,BUGGY_SAFARI_ITERATORS:p}},function(n,t,o){},function(n,t,o){},function(n,t){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){n.exports=function(n){}},function(n,t,o){},function(n,t){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t){},function(n,t,o){},function(n,t){},function(n,t,o){},function(n,t){},function(n,t){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){var u=o(4)("match");n.exports=function(n){var t=/./;try{"/./"[n](t)}catch(o){try{return t[u]=!1,"/./"[n](t)}catch(n){}}return!1}},function(n,t,o){"use strict";o(36),o(6)},function(n,t,o){},function(n,t,o){},function(n,t){},function(n,t,o){},function(n,t,o){},function(n,t,o){"use strict"},function(n,t){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t,o){},function(n,t){},function(n,t){},,,,,function(n,t,o){"use strict";o.r(t),o(158),o(162),o(171),o(175),o(176),o(211),o(209),o(207),o(208),o(223),o(216),o(217),o(214),o(226),o(215),o(225),o(220),o(224),o(221),o(228),o(229),o(104),o(105),o(230),o(227),o(212),o(222),o(174),o(210),o(173),o(231),o(232),o(234)}]);

// Use of javascript to define parameters of preview file
"use strict";
var _typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
              return typeof e;
          }
        : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          };
(function (e, i) {
    "function" == typeof define && define.amd ? define(["jquery"], i) : "object" == typeof exports ? (module.exports = i(require("jquery"))) : (e.file_upload = i(e.jQuery));
})(this, function (e) {
    function i(i, t) {
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            var s = {
                defaultFile: "",
                maxFileSize: 0,
                minWidth: 0,
                maxWidth: 0,
                minHeight: 0,
                maxHeight: 0,
                showRemove: !0,
                showLoader: !0,
                showErrors: !0,
                errorTimeout: 3e3,
                errorsPosition: "overlay",
                imgFileExtensions: ["png", "jpg", "jpeg", "gif", "bmp"],
                maxFileSizePreview: "5M",
                allowedFormats: ["portrait", "square", "landscape"],
                allowedFileExtensions: ["*"],
                messages: { default: "Arrastra aqui el archivo o da click", replace: "Arrastra aqui el archivo o da click", remove: "Eliminar ", error: "Ooops, algo salió mal." },
                error: {
                    fileSize: "The file size is too big ({{ value }} max).",
                    minWidth: "The image width is too small ({{ value }}}px min).",
                    maxWidth: "The image width is too big ({{ value }}}px max).",
                    minHeight: "The image height is too small ({{ value }}}px min).",
                    maxHeight: "The image height is too big ({{ value }}px max).",
                    imageFormat: "The image format is not allowed ({{ value }} only).",
                    fileExtension: "The file is not allowed ({{ value }} only).",
                },
                tpl: {
                    wrap: '<div class="card card-body view file-upload"></div>',
                    loader: '<div class="mask rgba-stylish-slight"></div>',
                    message: '<div class="card-text file-upload-message"><i class="fas fa-cloud-upload-alt"></i><p>{{ default }}</p></div>',
                    preview:
                        '<div class="file-upload-preview"><span class="file-upload-render"></span><div class="file-upload-infos"><div class="file-upload-infos-inner"><p class="file-upload-infos-message">{{ replace }}</p></div></div></div>',
                    filename: '<p class="file-upload-filename"><span class="file-upload-filename-inner"></span></p>',
                    clearButton: '<button type="button" class="btn btn-sm btn-danger">{{ remove }}<i class="far fa-trash-alt ml-1"></i></button>',
                    errorLine: '<p class="file-upload-error">{{ error }}</p>',
                    errorsContainer: '<div class="file-upload-errors-container"><ul></ul></div>',
                },
            };
            (this.element = i),
                (this.input = e(this.element)),
                (this.wrapper = null),
                (this.preview = null),
                (this.filenameWrapper = null),
                (this.settings = e.extend(!0, s, t, this.input.data())),
                (this.errorsEvent = e.Event("file_upload.errors")),
                (this.isDisabled = !1),
                (this.isInit = !1),
                (this.file = { object: null, name: null, size: null, width: null, height: null, type: null }),
                Array.isArray(this.settings.allowedFormats) || (this.settings.allowedFormats = this.settings.allowedFormats.split(" ")),
                Array.isArray(this.settings.allowedFileExtensions) || (this.settings.allowedFileExtensions = this.settings.allowedFileExtensions.split(" ")),
                (this.onChange = this.onChange.bind(this)),
                (this.clearElement = this.clearElement.bind(this)),
                (this.onFileReady = this.onFileReady.bind(this)),
                this.translateMessages(),
                this.createElements(),
                this.setContainerSize(),
                (this.errorsEvent.errors = []),
                this.input.on("change", this.onChange);
        }
    }
    var t = "file_upload";
    return (
        (i.prototype.onChange = function () {
            this.resetPreview(), this.readFile(this.element);
        }),
        (i.prototype.createElements = function () {
            (this.isInit = !0), this.input.wrap(e(this.settings.tpl.wrap)), (this.wrapper = this.input.parent());
            var i = e(this.settings.tpl.message).insertBefore(this.input);
            e(this.settings.tpl.errorLine).appendTo(i),
                this.isTouchDevice() === !0 && this.wrapper.addClass("touch-fallback"),
                this.input.attr("disabled") && ((this.isDisabled = !0), this.wrapper.addClass("disabled")),
                this.settings.showLoader === !0 && ((this.loader = e(this.settings.tpl.loader)), this.loader.insertBefore(this.input)),
                (this.preview = e(this.settings.tpl.preview)),
                this.preview.insertAfter(this.input),
                this.isDisabled === !1 && this.settings.showRemove === !0 && ((this.clearButton = e(this.settings.tpl.clearButton)), this.clearButton.insertAfter(this.input), this.clearButton.on("click", this.clearElement)),
                (this.filenameWrapper = e(this.settings.tpl.filename)),
                this.filenameWrapper.prependTo(this.preview.find(".file-upload-infos-inner")),
                this.settings.showErrors === !0 &&
                    ((this.errorsContainer = e(this.settings.tpl.errorsContainer)), "outside" === this.settings.errorsPosition ? this.errorsContainer.insertAfter(this.wrapper) : this.errorsContainer.insertBefore(this.input));
            var t = this.settings.defaultFile || "";
            "" !== t.trim() && ((this.file.name = this.cleanFilename(t)), this.setPreview(this.isImage(), t));
        }),
        (i.prototype.readFile = function (i) {
            if (i.files && i.files[0]) {
                var t = new FileReader(),
                    s = new Image(),
                    r = i.files[0],
                    n = null,
                    o = this,
                    l = e.Event("file_upload.fileReady");
                this.clearErrors(),
                    this.showLoader(),
                    this.setFileInformations(r),
                    (this.errorsEvent.errors = []),
                    this.checkFileSize(),
                    this.isFileExtensionAllowed(),
                    this.isImage() && this.file.size < this.sizeToByte(this.settings.maxFileSizePreview)
                        ? (this.input.on("file_upload.fileReady", this.onFileReady),
                          t.readAsDataURL(r),
                          (t.onload = function (e) {
                              (n = e.target.result),
                                  (s.src = e.target.result),
                                  (s.onload = function () {
                                      o.setFileDimensions(this.width, this.height), o.validateImage(), o.input.trigger(l, [!0, n]);
                                  });
                          }))
                        : this.onFileReady(!1);
            }
        }),
        (i.prototype.onFileReady = function (e, i, t) {
            if ((this.input.off("file_upload.fileReady", this.onFileReady), 0 === this.errorsEvent.errors.length)) this.setPreview(i, t);
            else {
                this.input.trigger(this.errorsEvent, [this]);
                for (var s = this.errorsEvent.errors.length - 1; s >= 0; s--) {
                    var r = this.errorsEvent.errors[s].namespace,
                        n = r.split(".").pop();
                    this.showError(n);
                }
                if ("undefined" != typeof this.errorsContainer) {
                    this.errorsContainer.addClass("visible");
                    var o = this.errorsContainer;
                    setTimeout(function () {
                        o.removeClass("visible");
                    }, this.settings.errorTimeout);
                }
                this.wrapper.addClass("has-error"), this.resetPreview(), this.clearElement();
            }
        }),
        (i.prototype.setFileInformations = function (e) {
            (this.file.object = e), (this.file.name = e.name), (this.file.size = e.size), (this.file.type = e.type), (this.file.width = null), (this.file.height = null);
        }),
        (i.prototype.setFileDimensions = function (e, i) {
            (this.file.width = e), (this.file.height = i);
        }),
        (i.prototype.setPreview = function (i, t) {
            this.wrapper.removeClass("has-error").addClass("has-preview"), this.filenameWrapper.children(".file-upload-filename-inner").html(this.file.name);
            var s = this.preview.children(".file-upload-render");
            if ((this.hideLoader(), i === !0)) {
                var r = e('<img class="file-upload-preview-img" />').attr("src", t);
                this.settings.height && r.css("max-height", this.settings.height), r.appendTo(s);
            } else e("<i />").attr("class", "fas fa-file").appendTo(s), e('<span class="file-upload-extension" />').html(this.getFileType()).appendTo(s);
            this.preview.fadeIn();
        }),
        (i.prototype.resetPreview = function () {
            this.wrapper.removeClass("has-preview");
            var e = this.preview.children(".file-upload-render");
            e.find(".file-upload-extension").remove(), e.find("i").remove(), e.find(".file-upload-preview-img").remove(), this.preview.hide(), this.showLoader();
        }),
        (i.prototype.cleanFilename = function (e) {
            var i = e.split("\\").pop();
            return i == e && (i = e.split("/").pop()), "" !== e ? i : "";
        }),
        (i.prototype.clearElement = function () {
            if (0 === this.errorsEvent.errors.length) {
                var i = e.Event("file_upload.beforeClear");
                this.input.trigger(i, [this]), i.result !== !1 && (this.resetFile(), this.input.val(""), this.resetPreview(), this.input.trigger(e.Event("file_upload.afterClear"), [this]));
            } else this.resetFile(), this.input.val(""), this.resetPreview();
        }),
        (i.prototype.resetFile = function () {
            (this.file.object = null), (this.file.name = null), (this.file.size = null), (this.file.type = null), (this.file.width = null), (this.file.height = null);
        }),
        (i.prototype.setContainerSize = function () {
            this.settings.height && this.wrapper.height(this.settings.height);
        }),
        (i.prototype.isTouchDevice = function () {
            return "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
        }),
        (i.prototype.getFileType = function () {
            return this.file.name.split(".").pop().toLowerCase();
        }),
        (i.prototype.isImage = function () {
            return "-1" != this.settings.imgFileExtensions.indexOf(this.getFileType());
        }),
        (i.prototype.isFileExtensionAllowed = function () {
            return "-1" != this.settings.allowedFileExtensions.indexOf("*") || "-1" != this.settings.allowedFileExtensions.indexOf(this.getFileType()) || (this.pushError("fileExtension"), !1);
        }),
        (i.prototype.translateMessages = function () {
            for (var e in this.settings.tpl) for (var i in this.settings.messages) this.settings.tpl[e] = this.settings.tpl[e].replace("{{ " + i + " }}", this.settings.messages[i]);
        }),
        (i.prototype.checkFileSize = function () {
            0 !== this.sizeToByte(this.settings.maxFileSize) && this.file.size > this.sizeToByte(this.settings.maxFileSize) && this.pushError("fileSize");
        }),
        (i.prototype.sizeToByte = function (e) {
            var i = 0;
            if (0 !== e) {
                var t = e.slice(-1).toUpperCase(),
                    s = 1024,
                    r = 1024 * s,
                    n = 1024 * r;
                "K" === t ? (i = parseFloat(e) * s) : "M" === t ? (i = parseFloat(e) * r) : "G" === t && (i = parseFloat(e) * n);
            }
            return i;
        }),
        (i.prototype.validateImage = function () {
            0 !== this.settings.minWidth && this.settings.minWidth >= this.file.width && this.pushError("minWidth"),
                0 !== this.settings.maxWidth && this.settings.maxWidth <= this.file.width && this.pushError("maxWidth"),
                0 !== this.settings.minHeight && this.settings.minHeight >= this.file.height && this.pushError("minHeight"),
                0 !== this.settings.maxHeight && this.settings.maxHeight <= this.file.height && this.pushError("maxHeight"),
                "-1" == this.settings.allowedFormats.indexOf(this.getImageFormat()) && this.pushError("imageFormat");
        }),
        (i.prototype.getImageFormat = function () {
            return this.file.width == this.file.height ? "square" : this.file.width < this.file.height ? "portrait" : this.file.width > this.file.height ? "landscape" : void 0;
        }),
        (i.prototype.pushError = function (i) {
            var t = e.Event("file_upload.error." + i);
            this.errorsEvent.errors.push(t), this.input.trigger(t, [this]);
        }),
        (i.prototype.clearErrors = function () {
            "undefined" != typeof this.errorsContainer && this.errorsContainer.children("ul").html("");
        }),
        (i.prototype.showError = function (e) {
            "undefined" != typeof this.errorsContainer && this.errorsContainer.children("ul").append("<li>" + this.getError(e) + "</li>");
        }),
        (i.prototype.getError = function (e) {
            var i = this.settings.error[e],
                t = "";
            return (
                "fileSize" === e
                    ? (t = this.settings.maxFileSize)
                    : "minWidth" === e
                    ? (t = this.settings.minWidth)
                    : "maxWidth" === e
                    ? (t = this.settings.maxWidth)
                    : "minHeight" === e
                    ? (t = this.settings.minHeight)
                    : "maxHeight" === e
                    ? (t = this.settings.maxHeight)
                    : "imageFormat" === e
                    ? (t = this.settings.allowedFormats.join(", "))
                    : "fileExtension" === e && (t = this.settings.allowedFileExtensions.join(", ")),
                "" !== t ? i.replace("{{ value }}", t) : i
            );
        }),
        (i.prototype.showLoader = function () {
            "undefined" != typeof this.loader && this.loader.show();
        }),
        (i.prototype.hideLoader = function () {
            "undefined" != typeof this.loader && this.loader.hide();
        }),
        (i.prototype.destroy = function () {
            this.input.siblings().remove(), this.input.unwrap(), (this.isInit = !1);
        }),
        (i.prototype.init = function () {
            this.createElements();
        }),
        (i.prototype.isDropified = function () {
            return this.isInit;
        }),
        (e.fn[t] = function (s) {
            return (
                this.each(function () {
                    e.data(this, t) || e.data(this, t, new i(this, s));
                }),
                this
            );
        }),
        i
    );
});

// File Upload to the element that has this class
$(".file_upload").file_upload();