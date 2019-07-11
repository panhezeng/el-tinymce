(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  [
    ,
    ,
    ,
    ,
    function(e, t, n) {
      var r, o, i, a;
      window,
        (e.exports = ((r = n(3)),
        (o = n(5)),
        (i = n(6)),
        (a = n(7)),
        (function(e) {
          var t = {};
          function n(r) {
            if (t[r]) return t[r].exports;
            var o = (t[r] = { i: r, l: !1, exports: {} });
            return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
          }
          return (
            (n.m = e),
            (n.c = t),
            (n.d = function(e, t, r) {
              n.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: r });
            }),
            (n.r = function(e) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module"
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (n.t = function(e, t) {
              if ((1 & t && (e = n(e)), 8 & t)) return e;
              if (4 & t && "object" == typeof e && e && e.__esModule) return e;
              var r = Object.create(null);
              if (
                (n.r(r),
                Object.defineProperty(r, "default", {
                  enumerable: !0,
                  value: e
                }),
                2 & t && "string" != typeof e)
              )
                for (var o in e)
                  n.d(
                    r,
                    o,
                    function(t) {
                      return e[t];
                    }.bind(null, o)
                  );
              return r;
            }),
            (n.n = function(e) {
              var t =
                e && e.__esModule
                  ? function() {
                      return e.default;
                    }
                  : function() {
                      return e;
                    };
              return n.d(t, "a", t), t;
            }),
            (n.o = function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = ""),
            n((n.s = 5))
          );
        })([
          function(e, t) {
            e.exports = r;
          },
          function(e, t, n) {
            var r = n(7);
            "string" == typeof r && (r = [[e.i, r, ""]]),
              r.locals && (e.exports = r.locals),
              (0, n(10).default)("311e7b4e", r, !1, {});
          },
          function(e, t) {
            e.exports = o;
          },
          function(e, t) {
            e.exports = i;
          },
          function(e, t) {
            e.exports = a;
          },
          function(e, t, n) {
            "use strict";
            n.r(t),
              n.d(t, "ElSingleUpload", function() {
                return o;
              });
            var r,
              o = n(9).default;
            function i(e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "undefined" != typeof window &&
                    window.ElSingleUploadOptions;
              r
                ? console.warn(
                    "[ElSingleUpload] already installed. Vue.use(ElSingleUpload) should be called only once."
                  )
                : ((r = e),
                  "[object Object]" === Object.prototype.toString.call(t) &&
                    "[object Function]" ===
                      Object.prototype.toString.call(t.upload) &&
                    Object.assign(o.props.upload, {
                      required: !1,
                      default: t.upload
                    }),
                  r.component(o.name, o));
            }
            (o.install = i),
              "undefined" != typeof window && window.Vue && i(window.Vue);
          },
          function(e, t, n) {
            "use strict";
            var r = n(1);
            n.n(r).a;
          },
          function(e, t, n) {
            (e.exports = n(8)(!1)).push([
              e.i,
              ".el-single-upload {\n  position: relative;\n  width: 300px;\n  height: 90px;\n  display: inline-block;\n}\n.el-single-upload .view {\n  line-height: 1;\n  display: block;\n  border: 1px solid #d9d9d9;\n  width: calc(100% - 2px);\n  height: 100%;\n}\n.el-single-upload .upload {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  position: relative;\n  line-height: 1;\n}\n.el-single-upload .el-upload-dragger {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n}\n.el-single-upload .el-upload-dragger .el-icon-upload {\n  font-size: 24px !important;\n  margin: 0 0 0 2px;\n  line-height: normal;\n}\n.el-single-upload.input .view {\n  height: calc(100% - 40px);\n}\n.el-single-upload.input .upload {\n  height: calc(100% - 40px);\n}\n.el-single-upload .el-upload__input {\n  display: none !important;\n}\n.el-single-upload .el-upload {\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.el-single-upload .el-upload:hover {\n  border-color: #20a0ff;\n}\n.el-single-upload .upload.update {\n  position: absolute;\n  top: 0;\n  right: -28px;\n  z-index: 2;\n  width: auto;\n  height: auto;\n}\n.el-single-upload .upload.update .el-upload {\n  padding: 0 1px;\n  width: auto;\n  height: auto;\n  border-left: none;\n  border-radius: 0;\n}\n.el-single-upload .upload-btn {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 28px !important;\n}\n.el-single-upload .el-icon-upload {\n  font-size: 24px !important;\n  color: #8c939d;\n  background: #ffffff;\n}\n.el-single-upload .el-icon-upload:hover {\n  color: #20a0ff;\n}\n.el-single-upload .icon-delete {\n  position: absolute;\n  top: 28px;\n  right: -28px;\n  font-size: 24px !important;\n  cursor: pointer;\n  color: #8c939d;\n  border: 1px dashed #d9d9d9;\n  border-left: none;\n  padding: 0 1px;\n  line-height: 1;\n}\n.el-single-upload .icon-delete:hover {\n  border-color: #20a0ff;\n  color: #20a0ff;\n}\n.el-single-upload .icon-delete .el-icon-delete {\n  margin-left: 2px;\n}\n.el-single-upload .tip {\n  padding: 10px 0;\n  text-align: center;\n}\n.el-single-upload.image,\n.el-single-upload.video {\n  width: 200px;\n  height: 200px;\n}\n.el-single-upload.image .img,\n.el-single-upload.video .img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n",
              ""
            ]);
          },
          function(e, t, n) {
            "use strict";
            e.exports = function(e) {
              var t = [];
              return (
                (t.toString = function() {
                  return this.map(function(t) {
                    var n = (function(e, t) {
                      var n,
                        r = e[1] || "",
                        o = e[3];
                      if (!o) return r;
                      if (t && "function" == typeof btoa) {
                        var i = ((n = o),
                          "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                            btoa(
                              unescape(encodeURIComponent(JSON.stringify(n)))
                            ) +
                            " */"),
                          a = o.sources.map(function(e) {
                            return "/*# sourceURL=" + o.sourceRoot + e + " */";
                          });
                        return [r]
                          .concat(a)
                          .concat([i])
                          .join("\n");
                      }
                      return [r].join("\n");
                    })(t, e);
                    return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
                  }).join("");
                }),
                (t.i = function(e, n) {
                  "string" == typeof e && (e = [[null, e, ""]]);
                  for (var r = {}, o = 0; o < this.length; o++) {
                    var i = this[o][0];
                    null != i && (r[i] = !0);
                  }
                  for (o = 0; o < e.length; o++) {
                    var a = e[o];
                    (null != a[0] && r[a[0]]) ||
                      (n && !a[2]
                        ? (a[2] = n)
                        : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                      t.push(a));
                  }
                }),
                t
              );
            };
          },
          function(e, t, n) {
            "use strict";
            n.r(t);
            var r = function() {
              var e,
                t = this,
                n = t.$createElement,
                r = t._self._c || n;
              return r(
                "div",
                {
                  staticClass: "el-single-upload",
                  class: ((e = { input: t.input }),
                  (e[t.acceptClassName] = !0),
                  e)
                },
                [
                  t.view && t.urlInternal
                    ? [
                        "video" === t.acceptClassName
                          ? r("video", {
                              ref: "media",
                              staticClass: "view",
                              attrs: { controls: "", src: t.urlInternal }
                            })
                          : "audio" === t.acceptClassName
                          ? r("audio", {
                              ref: "media",
                              staticClass: "view",
                              attrs: { controls: "", src: t.urlInternal }
                            })
                          : r(
                              "a",
                              {
                                staticClass: "view",
                                attrs: { href: t.urlInternal, target: "_blank" }
                              },
                              [
                                "image" === t.acceptClassName
                                  ? r("img", {
                                      staticClass: "img",
                                      attrs: { src: t.urlInternal }
                                    })
                                  : r(
                                      "span",
                                      {
                                        staticStyle: {
                                          display: "inline-block",
                                          padding: "10px 15px"
                                        }
                                      },
                                      [
                                        t._v(
                                          t._s(
                                            t.file ? t.file.name : t.urlInternal
                                          )
                                        )
                                      ]
                                    )
                              ]
                            )
                      ]
                    : t._e(),
                  t._v(" "),
                  100 !== t.percentage
                    ? r("el-progress", { attrs: { percentage: t.percentage } })
                    : t._e(),
                  t._v(" "),
                  t.$attrs.disabled
                    ? t._e()
                    : r(
                        "el-upload",
                        t._b(
                          {
                            ref: "upload",
                            staticClass: "upload",
                            class: { update: t.urlInternal },
                            attrs: {
                              action: "",
                              "before-upload": t.beforeUpload,
                              "http-request": t.requestUpload,
                              "on-progress": t.progressUpload,
                              "on-success": t.successUpload,
                              "on-error": t.errorUpload,
                              accept: t.accept,
                              drag: t.drag,
                              multiple: !1,
                              "show-file-list": !1
                            }
                          },
                          "el-upload",
                          t.$attrs,
                          !1
                        ),
                        [
                          t.urlInternal
                            ? r("i", {
                                staticClass: "re-upload-btn el-icon-upload"
                              })
                            : r("i", {
                                staticClass: "upload-btn el-icon-upload"
                              })
                        ]
                      ),
                  t._v(" "),
                  t.urlInternal && t.del && !t.$attrs.disabled
                    ? r(
                        "el-popover-dialog",
                        t._b(
                          {
                            staticClass: "icon-delete",
                            attrs: { "btn-show": !1 },
                            on: { confirm: t.delConfirm }
                          },
                          "el-popover-dialog",
                          t.$attrs,
                          !1
                        ),
                        [
                          r("i", {
                            staticClass: "el-icon-delete",
                            attrs: { slot: "reference" },
                            slot: "reference"
                          })
                        ]
                      )
                    : t._e(),
                  t._v(" "),
                  t.input
                    ? r("el-input", {
                        attrs: {
                          placeholder: t.$attrs.placeholder || "文件链接地址",
                          disabled: t.$attrs.disabled,
                          readonly: t.readonly
                        },
                        on: {
                          blur: function(e) {
                            return t.setUrl(t.urlInternal);
                          }
                        },
                        model: {
                          value: t.urlInternal,
                          callback: function(e) {
                            t.urlInternal = e;
                          },
                          expression: "urlInternal"
                        }
                      })
                    : t._e(),
                  t._v(" "),
                  t.tip
                    ? r("div", { staticClass: "tip" }, [t._v(t._s(t.tip))])
                    : t._e(),
                  t._v(" "),
                  t._t("default")
                ],
                2
              );
            };
            r._withStripped = !0;
            var o = n(0),
              i = n(2),
              a = n.n(i),
              u = n(3),
              s = n.n(u),
              c = n(4),
              l = n.n(c),
              f = {
                name: "ElSingleUpload",
                components: {
                  "el-progress": o.Progress,
                  "el-upload": o.Upload,
                  "el-input": o.Input,
                  ElPopoverDialog: l.a
                },
                inheritAttrs: !1,
                props: {
                  upload: { required: !0, type: Function },
                  resPathOfUrl: { type: String, default: "data.url" },
                  url: { required: !0 },
                  checkUpload: Function,
                  error: Function,
                  del: { type: Boolean, default: !0 },
                  view: { type: Boolean, default: !0 },
                  size: { type: Number },
                  accept: {
                    validator: function(e) {
                      return (
                        "" === e ||
                        /^(image|audio|video|text|application|\.)/.test(e)
                      );
                    },
                    default: "image/*"
                  },
                  input: { type: Boolean, default: !0 },
                  readonly: { type: Boolean, default: !1 },
                  drag: { type: Boolean, default: !0 },
                  tip: String
                },
                data: function() {
                  return { file: null, urlInternal: "", percentage: 100 };
                },
                watch: {
                  url: {
                    immediate: !0,
                    handler: function(e, t) {
                      this.setUrl(e);
                    }
                  }
                },
                computed: {
                  acceptClassName: function() {
                    return /^\.(png|jpe?g|gif|svg|webp)/.test(this.accept) ||
                      /^image/.test(this.accept)
                      ? "image"
                      : /^\.(ogg|mp3|wav|flac|aac)/.test(this.accept) ||
                        /^audio/.test(this.accept)
                      ? "audio"
                      : /^\.(mp4|webm)/.test(this.accept) ||
                        /^video/.test(this.accept)
                      ? "video"
                      : "";
                  }
                },
                methods: {
                  setUrl: function(e) {
                    var t =
                      "[object String]" === Object.prototype.toString.call(e);
                    t && (t = /^https?:\/\//i.test(e)),
                      t
                        ? ((this.urlInternal = e),
                          this.$nextTick(function() {
                            var e = this;
                            this.$refs.media &&
                              (this.$refs.media.addEventListener(
                                "loadedmetadata",
                                function(t) {
                                  e.$emit(
                                    "media-duration",
                                    e.$refs.media.duration
                                  ),
                                    e.$emit("media", e.$refs.media);
                                },
                                !0
                              ),
                              this.$refs.media.addEventListener(
                                "error",
                                function(t) {
                                  e.$emit("media-load-error", t);
                                },
                                !0
                              ));
                          }))
                        : ((this.file = null),
                          this.$emit("file", this.file),
                          (this.urlInternal = ""),
                          this.$refs.upload && this.$refs.upload.clearFiles(),
                          this.$emit("media-duration", ""),
                          this.$emit("media", null)),
                      this.urlInternal !== this.url &&
                        this.$emit("update:url", this.urlInternal);
                  },
                  beforeUpload: function(e) {
                    (this.file = e), this.$emit("file", this.file);
                    var t = a()(e, this.accept, this.size);
                    return this.checkUpload
                      ? this.checkUpload(e, t)
                      : (t.message && o.Message.error(t.message), t.validate);
                  },
                  requestUpload: function(e) {
                    return this.$emit("request-upload", e), this.upload(e);
                  },
                  progressUpload: function(e, t) {
                    var n = parseInt(e.percent);
                    "[object Number]" ===
                      Object.prototype.toString.call(e.percent) &&
                      (n = e.percent),
                      n >= 100 && (n = 99),
                      (this.percentage = n);
                  },
                  successUpload: function(e) {
                    this.setUrl(s()(e, this.resPathOfUrl)),
                      (this.percentage = 100),
                      this.$emit("success-upload", e),
                      this.$emit("finish-upload");
                  },
                  errorUpload: function(e, t) {
                    (this.percentage = 100),
                      this.error
                        ? this.error(e, t)
                        : o.Message.error("上传失败"),
                      this.setUrl(),
                      this.$emit("error-upload", { err: e, file: t }),
                      this.$emit("finish-upload");
                  },
                  delConfirm: function() {
                    this.setUrl();
                  }
                }
              };
            n(6);
            var d = (function(e, t, n, r, o, i, a, u) {
              var s,
                c = "function" == typeof e ? e.options : e;
              if (
                (t &&
                  ((c.render = t),
                  (c.staticRenderFns = []),
                  (c._compiled = !0)),
                s)
              )
                if (c.functional) {
                  c._injectStyles = s;
                  var l = c.render;
                  c.render = function(e, t) {
                    return s.call(t), l(e, t);
                  };
                } else {
                  var f = c.beforeCreate;
                  c.beforeCreate = f ? [].concat(f, s) : [s];
                }
              return { exports: e, options: c };
            })(f, r);
            (d.options.__file = "src/ElSingleUpload.vue"),
              (t.default = d.exports);
          },
          function(e, t, n) {
            "use strict";
            function r(e, t) {
              for (var n = [], r = {}, o = 0; o < t.length; o++) {
                var i = t[o],
                  a = i[0],
                  u = {
                    id: e + ":" + o,
                    css: i[1],
                    media: i[2],
                    sourceMap: i[3]
                  };
                r[a]
                  ? r[a].parts.push(u)
                  : n.push((r[a] = { id: a, parts: [u] }));
              }
              return n;
            }
            n.r(t),
              n.d(t, "default", function() {
                return m;
              });
            var o = "undefined" != typeof document;
            if ("undefined" != typeof DEBUG && DEBUG && !o)
              throw new Error(
                "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
              );
            var i = {},
              a =
                o &&
                (document.head || document.getElementsByTagName("head")[0]),
              u = null,
              s = 0,
              c = !1,
              l = function() {},
              f = null,
              d = "data-vue-ssr-id",
              h =
                "undefined" != typeof navigator &&
                /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
            function m(e, t, n, o) {
              (c = n), (f = o || {});
              var a = r(e, t);
              return (
                g(a),
                function(t) {
                  for (var n = [], o = 0; o < a.length; o++) {
                    var u = a[o];
                    (s = i[u.id]).refs--, n.push(s);
                  }
                  for (
                    t ? g((a = r(e, t))) : (a = []), o = 0;
                    o < n.length;
                    o++
                  ) {
                    var s;
                    if (0 === (s = n[o]).refs) {
                      for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                      delete i[s.id];
                    }
                  }
                }
              );
            }
            function g(e) {
              for (var t = 0; t < e.length; t++) {
                var n = e[t],
                  r = i[n.id];
                if (r) {
                  r.refs++;
                  for (var o = 0; o < r.parts.length; o++)
                    r.parts[o](n.parts[o]);
                  for (; o < n.parts.length; o++) r.parts.push(v(n.parts[o]));
                  r.parts.length > n.parts.length &&
                    (r.parts.length = n.parts.length);
                } else {
                  var a = [];
                  for (o = 0; o < n.parts.length; o++) a.push(v(n.parts[o]));
                  i[n.id] = { id: n.id, refs: 1, parts: a };
                }
              }
            }
            function p() {
              var e = document.createElement("style");
              return (e.type = "text/css"), a.appendChild(e), e;
            }
            function v(e) {
              var t,
                n,
                r = document.querySelector("style[" + d + '~="' + e.id + '"]');
              if (r) {
                if (c) return l;
                r.parentNode.removeChild(r);
              }
              if (h) {
                var o = s++;
                (r = u || (u = p())),
                  (t = C.bind(null, r, o, !1)),
                  (n = C.bind(null, r, o, !0));
              } else
                (r = p()),
                  (t = function(e, t) {
                    var n = t.css,
                      r = t.media,
                      o = t.sourceMap;
                    if (
                      (r && e.setAttribute("media", r),
                      f.ssrId && e.setAttribute(d, t.id),
                      o &&
                        ((n += "\n/*# sourceURL=" + o.sources[0] + " */"),
                        (n +=
                          "\n/*# sourceMappingURL=data:application/json;base64," +
                          btoa(
                            unescape(encodeURIComponent(JSON.stringify(o)))
                          ) +
                          " */")),
                      e.styleSheet)
                    )
                      e.styleSheet.cssText = n;
                    else {
                      for (; e.firstChild; ) e.removeChild(e.firstChild);
                      e.appendChild(document.createTextNode(n));
                    }
                  }.bind(null, r)),
                  (n = function() {
                    r.parentNode.removeChild(r);
                  });
              return (
                t(e),
                function(r) {
                  if (r) {
                    if (
                      r.css === e.css &&
                      r.media === e.media &&
                      r.sourceMap === e.sourceMap
                    )
                      return;
                    t((e = r));
                  } else n();
                }
              );
            }
            var b,
              y = ((b = []),
              function(e, t) {
                return (b[e] = t), b.filter(Boolean).join("\n");
              });
            function C(e, t, n, r) {
              var o = n ? "" : r.css;
              if (e.styleSheet) e.styleSheet.cssText = y(t, o);
              else {
                var i = document.createTextNode(o),
                  a = e.childNodes;
                a[t] && e.removeChild(a[t]),
                  a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
              }
            }
          }
        ]).ElSingleUpload));
    },
    function(e, t, n) {
      window,
        (e.exports = (function(e) {
          var t = {};
          function n(r) {
            if (t[r]) return t[r].exports;
            var o = (t[r] = { i: r, l: !1, exports: {} });
            return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
          }
          return (
            (n.m = e),
            (n.c = t),
            (n.d = function(e, t, r) {
              n.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: r });
            }),
            (n.r = function(e) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module"
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (n.t = function(e, t) {
              if ((1 & t && (e = n(e)), 8 & t)) return e;
              if (4 & t && "object" == typeof e && e && e.__esModule) return e;
              var r = Object.create(null);
              if (
                (n.r(r),
                Object.defineProperty(r, "default", {
                  enumerable: !0,
                  value: e
                }),
                2 & t && "string" != typeof e)
              )
                for (var o in e)
                  n.d(
                    r,
                    o,
                    function(t) {
                      return e[t];
                    }.bind(null, o)
                  );
              return r;
            }),
            (n.n = function(e) {
              var t =
                e && e.__esModule
                  ? function() {
                      return e.default;
                    }
                  : function() {
                      return e;
                    };
              return n.d(t, "a", t), t;
            }),
            (n.o = function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = ""),
            n((n.s = 0))
          );
        })([
          function(e, t) {
            e.exports = function(e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "",
                n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : NaN,
                r = { message: "", error: 0, validate: !0 };
              if ("[object File]" === Object.prototype.toString.call(e)) {
                isNaN(n) && (n = 1024e3);
                var o = !0,
                  i = "",
                  a = e.name.lastIndexOf(".");
                -1 !== a && (i = e.name.substring(a));
                var u = i ? i.substring(1) : e.type && e.type.split("/")[0];
                e.type &&
                  t &&
                  ((o = t.split(",").some(function(t) {
                    return (
                      (t = t.trim()) &&
                      (new RegExp("^".concat(t)).test(e.type) ||
                        new RegExp("^".concat(t)).test(i))
                    );
                  })),
                  isNaN(n) &&
                    (/^\.(png|jpe?g|gif|svg|webp)/.test(i) ||
                    /^image/.test(e.type)
                      ? (n = 10240)
                      : (/^\.(ogg|mp3|wav|flac|aac)/.test(i) ||
                          /^audio/.test(e.type)) &&
                        (n = 102400)));
                var s = !0;
                if (
                  (n && (s = e.size / 1024 < n),
                  o ||
                    ((r.message = "只能上传".concat(u, "!")),
                    (r.error = 1),
                    (r.validate = !1)),
                  !s)
                ) {
                  var c =
                    n >= 1024 ? "".concat(n / 1024, "M") : "".concat(n, "KB");
                  (r.message = "上传".concat(u, "大小不能超过").concat(c, "!")),
                    (r.error = 2),
                    (r.validate = !1);
                }
              } else
                (r.message = "file参数必须为File数据类型"),
                  (r.error = 3),
                  (r.validate = !1);
              return r;
            };
          }
        ]));
    },
    function(e, t, n) {
      window,
        (e.exports = (function(e) {
          var t = {};
          function n(r) {
            if (t[r]) return t[r].exports;
            var o = (t[r] = { i: r, l: !1, exports: {} });
            return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
          }
          return (
            (n.m = e),
            (n.c = t),
            (n.d = function(e, t, r) {
              n.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: r });
            }),
            (n.r = function(e) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module"
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (n.t = function(e, t) {
              if ((1 & t && (e = n(e)), 8 & t)) return e;
              if (4 & t && "object" == typeof e && e && e.__esModule) return e;
              var r = Object.create(null);
              if (
                (n.r(r),
                Object.defineProperty(r, "default", {
                  enumerable: !0,
                  value: e
                }),
                2 & t && "string" != typeof e)
              )
                for (var o in e)
                  n.d(
                    r,
                    o,
                    function(t) {
                      return e[t];
                    }.bind(null, o)
                  );
              return r;
            }),
            (n.n = function(e) {
              var t =
                e && e.__esModule
                  ? function() {
                      return e.default;
                    }
                  : function() {
                      return e;
                    };
              return n.d(t, "a", t), t;
            }),
            (n.o = function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = ""),
            n((n.s = 4))
          );
        })({
          4: function(e, t) {
            e.exports = function(e, t, n) {
              if (
                "[object Object]" === Object.prototype.toString.call(e) &&
                "[object String]" === Object.prototype.toString.call(t)
              ) {
                for (
                  var r = t.split("."), o = 0, i = r.length;
                  "[object Object]" === Object.prototype.toString.call(e) &&
                  o < i;

                )
                  e = e[r[o++]];
                return o && o == i ? e : n;
              }
              return n;
            };
          }
        }));
    },
    function(e, t, n) {
      var r;
      window,
        (e.exports = ((r = n(3)),
        (function(e) {
          var t = {};
          function n(r) {
            if (t[r]) return t[r].exports;
            var o = (t[r] = { i: r, l: !1, exports: {} });
            return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
          }
          return (
            (n.m = e),
            (n.c = t),
            (n.d = function(e, t, r) {
              n.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: r });
            }),
            (n.r = function(e) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module"
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (n.t = function(e, t) {
              if ((1 & t && (e = n(e)), 8 & t)) return e;
              if (4 & t && "object" == typeof e && e && e.__esModule) return e;
              var r = Object.create(null);
              if (
                (n.r(r),
                Object.defineProperty(r, "default", {
                  enumerable: !0,
                  value: e
                }),
                2 & t && "string" != typeof e)
              )
                for (var o in e)
                  n.d(
                    r,
                    o,
                    function(t) {
                      return e[t];
                    }.bind(null, o)
                  );
              return r;
            }),
            (n.n = function(e) {
              var t =
                e && e.__esModule
                  ? function() {
                      return e.default;
                    }
                  : function() {
                      return e;
                    };
              return n.d(t, "a", t), t;
            }),
            (n.o = function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = ""),
            n((n.s = 1))
          );
        })([
          function(e, t) {
            e.exports = r;
          },
          function(e, t, n) {
            "use strict";
            n.r(t),
              n.d(t, "ElPopoverDialog", function() {
                return o;
              });
            var r,
              o = n(2).default;
            function i(e) {
              r
                ? console.warn(
                    "[ElPopoverDialog] already installed. Vue.use(ElPopoverDialog) should be called only once."
                  )
                : (r = e).component(o.name, o);
            }
            (o.install = i),
              "undefined" != typeof window && window.Vue && i(window.Vue);
          },
          function(e, t, n) {
            "use strict";
            n.r(t);
            var r = function() {
              var e = this,
                t = e.$createElement,
                n = e._self._c || t;
              return n(
                "el-popover",
                e._g(
                  e._b(
                    {
                      staticClass: "popover-dialog",
                      staticStyle: { "font-size": "0px" },
                      attrs: { placement: e.$attrs.placement || "top" },
                      model: {
                        value: e.visible,
                        callback: function(t) {
                          e.visible = t;
                        },
                        expression: "visible"
                      }
                    },
                    "el-popover",
                    e.$attrs,
                    !1
                  ),
                  e.$listeners
                ),
                [
                  e.popoverContentShow
                    ? n("p", { staticClass: "popover-content" }, [
                        e._v(e._s(e.popoverContent))
                      ])
                    : e._e(),
                  e._v(" "),
                  e._t("popover-content", null, { hide: e.hide }),
                  e._v(" "),
                  e.showConfirmButton || e.showCancelButton
                    ? n(
                        "div",
                        {
                          staticClass: "popover-btn",
                          style: e.popoverBtnStyle
                        },
                        [
                          e.showCancelButton
                            ? n(
                                "el-button",
                                {
                                  staticClass: "cancel-btn",
                                  attrs: { type: "text", size: "mini" },
                                  on: { click: e.cancel }
                                },
                                [e._v(e._s(e.cancelButtonText) + "\n    ")]
                              )
                            : e._e(),
                          e._v(" "),
                          e.showConfirmButton
                            ? n(
                                "el-button",
                                {
                                  staticClass: "confirm-btn",
                                  attrs: { type: "primary", size: "mini" },
                                  on: { click: e.confirm }
                                },
                                [
                                  e._v(
                                    "\n      " +
                                      e._s(e.confirmButtonText) +
                                      "\n    "
                                  )
                                ]
                              )
                            : e._e(),
                          e._v(" "),
                          e._t("popover-btn", null, { hide: e.hide })
                        ],
                        2
                      )
                    : e._e(),
                  e._v(" "),
                  n(
                    "span",
                    {
                      staticClass: "reference",
                      attrs: { slot: "reference" },
                      slot: "reference"
                    },
                    [
                      e.btnShow
                        ? n(
                            "el-button",
                            e._b(
                              {
                                staticClass: "reference-btn",
                                style: e.btnStyle,
                                attrs: { size: e.btnSize, type: e.btnType }
                              },
                              "el-button",
                              e.$attrs,
                              !1
                            ),
                            [e._v(e._s(e.btnTxt) + "\n    ")]
                          )
                        : e._e(),
                      e._v(" "),
                      e._t("reference", null, { hide: e.hide })
                    ],
                    2
                  )
                ],
                2
              );
            };
            r._withStripped = !0;
            var o = n(0),
              i = (function(e, t, n, r, o, i, a, u) {
                var s,
                  c = "function" == typeof e ? e.options : e;
                if (
                  (t &&
                    ((c.render = t),
                    (c.staticRenderFns = []),
                    (c._compiled = !0)),
                  s)
                )
                  if (c.functional) {
                    c._injectStyles = s;
                    var l = c.render;
                    c.render = function(e, t) {
                      return s.call(t), l(e, t);
                    };
                  } else {
                    var f = c.beforeCreate;
                    c.beforeCreate = f ? [].concat(f, s) : [s];
                  }
                return { exports: e, options: c };
              })(
                {
                  name: "ElPopoverDialog",
                  components: {
                    "el-button": o.Button,
                    "el-popover": o.Popover
                  },
                  inheritAttrs: !1,
                  props: {
                    popoverContentShow: { type: Boolean, default: !0 },
                    popoverContent: { type: String, default: "确认要删除？" },
                    popoverBtnStyle: {
                      type: String,
                      default: "text-align: right; margin: 0"
                    },
                    showCancelButton: { type: Boolean, default: !0 },
                    showConfirmButton: { type: Boolean, default: !0 },
                    cancelButtonText: { type: String, default: "取消" },
                    confirmButtonText: { type: String, default: "确定" },
                    btnShow: { type: Boolean, default: !0 },
                    btnTxt: { type: String, default: "删除" },
                    btnType: { type: String, default: "text" },
                    btnSize: { type: String, default: "" },
                    btnStyle: {
                      type: String,
                      default: "color:#f56c6c; margin-right: 0 !important;"
                    },
                    confirmHide: { type: Boolean, default: !0 }
                  },
                  data: function() {
                    return { visible: !1 };
                  },
                  methods: {
                    cancel: function() {
                      (this.visible = !1), this.$emit("cancel");
                    },
                    confirm: function() {
                      this.confirmHide && (this.visible = !1),
                        this.$emit("confirm");
                    },
                    hide: function(e) {
                      (this.visible = !1),
                        "[object Function]" ===
                          Object.prototype.toString.call(e) && e();
                    }
                  }
                },
                r
              );
            (i.options.__file = "src/ElPopoverDialog.vue"),
              (t.default = i.exports);
          }
        ]).ElPopoverDialog));
    },
    function(e, t, n) {
      var r;
      window,
        (e.exports = ((r = n(9)),
        (function(e) {
          var t = {};
          function n(r) {
            if (t[r]) return t[r].exports;
            var o = (t[r] = { i: r, l: !1, exports: {} });
            return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
          }
          return (
            (n.m = e),
            (n.c = t),
            (n.d = function(e, t, r) {
              n.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: r });
            }),
            (n.r = function(e) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module"
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (n.t = function(e, t) {
              if ((1 & t && (e = n(e)), 8 & t)) return e;
              if (4 & t && "object" == typeof e && e && e.__esModule) return e;
              var r = Object.create(null);
              if (
                (n.r(r),
                Object.defineProperty(r, "default", {
                  enumerable: !0,
                  value: e
                }),
                2 & t && "string" != typeof e)
              )
                for (var o in e)
                  n.d(
                    r,
                    o,
                    function(t) {
                      return e[t];
                    }.bind(null, o)
                  );
              return r;
            }),
            (n.n = function(e) {
              var t =
                e && e.__esModule
                  ? function() {
                      return e.default;
                    }
                  : function() {
                      return e;
                    };
              return n.d(t, "a", t), t;
            }),
            (n.o = function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = ""),
            n((n.s = 1))
          );
        })([
          function(e, t) {
            e.exports = r;
          },
          function(e, t, n) {
            "use strict";
            n.r(t),
              n.d(t, "VueTinymce", function() {
                return o;
              });
            var r,
              o = n(2).default;
            function i(e) {
              r
                ? console.warn(
                    "[VueTinymce] already installed. Vue.use(VueTinymce) should be called only once."
                  )
                : (r = e).component(o.name, o);
            }
            (o.install = i),
              "undefined" != typeof window && window.Vue && i(window.Vue);
          },
          function(e, t, n) {
            "use strict";
            n.r(t);
            var r = function() {
              var e = this.$createElement,
                t = this._self._c || e;
              return t("div", { staticClass: "vue-tinymce-comp" }, [
                t("textarea", { ref: "editor" })
              ]);
            };
            r._withStripped = !0;
            var o = n(0),
              i = n.n(o),
              a = (function(e, t, n, r, o, i, a, u) {
                var s,
                  c = "function" == typeof e ? e.options : e;
                if (
                  (t &&
                    ((c.render = t),
                    (c.staticRenderFns = []),
                    (c._compiled = !0)),
                  s)
                )
                  if (c.functional) {
                    c._injectStyles = s;
                    var l = c.render;
                    c.render = function(e, t) {
                      return s.call(t), l(e, t);
                    };
                  } else {
                    var f = c.beforeCreate;
                    c.beforeCreate = f ? [].concat(f, s) : [s];
                  }
                return { exports: e, options: c };
              })(
                {
                  name: "VueTinymce",
                  props: {
                    content: { type: String, required: !0 },
                    updateEvent: {
                      type: String,
                      default: "beforeaddundo undo redo keyup"
                    },
                    url: {
                      type: String,
                      default: "https://cdn.jsdelivr.net/npm/tinymce@~5"
                    },
                    config: {
                      type: Object,
                      default: function() {
                        return {};
                      }
                    }
                  },
                  data: function() {
                    return { editor: null };
                  },
                  watch: {
                    config: { handler: "init", immediate: !0, deep: !0 },
                    content: { handler: "setContent", immediate: !0 }
                  },
                  beforeDestroy: function() {
                    this.destroy();
                  },
                  created: function() {
                    i.a.EditorManager.baseURL = this.url;
                  },
                  methods: {
                    init: function() {
                      var e = this;
                      this.destroy();
                      var t = {
                        allow_script_urls: !0,
                        remove_script_host: !1,
                        convert_urls: !1,
                        relative_urls: !1,
                        branding: !1,
                        menubar: !1,
                        fontsize_formats:
                          "12px 13px 14px 15px 16px 18px 20px 24px",
                        external_plugins: {},
                        plugins:
                          "code hr link advlist lists paste table image imagetools media preview",
                        contextmenu: "selectall copy paste inserttable",
                        toolbar1:
                          "code | undo redo | fontsizeselect fontselect | blockquote hr | removeformat link unlink pastetext preview | image media",
                        toolbar2:
                          "bold italic underline strikethrough | forecolor backcolor | indent outdent | alignleft aligncenter alignright alignjustify | bullist numlist"
                      };
                      Object.assign(t, this.config),
                        t.language || (t.language = "zh_CN"),
                        "[object String]" ===
                          Object.prototype.toString.call(t.language) &&
                          "en_US" !== t.language &&
                          "[object String]" !==
                            Object.prototype.toString.call(t.language_url) &&
                          (t.language_url = "https://cdn.jsdelivr.net/npm/@panhezeng/vue-tinymce@latest/src/langs/".concat(
                            t.language,
                            ".min.js"
                          )),
                        "zh_CN" === t.language &&
                          "[object String]" !==
                            Object.prototype.toString.call(t.font_formats) &&
                          (t.font_formats =
                            '微软雅黑="微软雅黑";苹方="苹方";宋体="宋体";黑体="黑体";仿宋="仿宋";楷体="楷体";隶书="隶书";幼圆="幼圆";Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats'),
                        "en_US" === t.language &&
                          (delete t.language, delete t.language_url),
                        this.$nextTick(function() {
                          (t.target = e.$refs.editor),
                            (t.init_instance_callback = function(t) {
                              "[object Function]" ===
                                Object.prototype.toString.call(
                                  e.config.init_instance_callback
                                ) && e.config.init_instance_callback(t),
                                (e.editor = t),
                                e.setContent(),
                                t.on(
                                  e.updateEvent,
                                  i.a.util.Delay.debounce(function() {
                                    e.contentChange();
                                  }, 300)
                                );
                            }),
                            i.a.init(t);
                        });
                    },
                    destroy: function() {
                      try {
                        this.editor &&
                          (this.editor.remove(),
                          this.editor.destroy(),
                          (this.editor = null));
                      } catch (e) {}
                    },
                    setContent: function() {
                      this.editor &&
                        this.editor.getContent() !== this.content &&
                        this.editor.setContent(this.content);
                    },
                    contentChange: function() {
                      if (this.editor) {
                        var e = this.editor.getContent();
                        this.$emit("update:content", e),
                          this.$emit("content-change", e);
                      }
                    }
                  }
                },
                r
              );
            (a.options.__file = "src/VueTinymce.vue"), (t.default = a.exports);
          }
        ]).VueTinymce));
    },
    function(e, t, n) {
      !(function(t) {
        "use strict";
        var n = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
          },
          r = function(e, t) {
            return function() {
              for (var n = [], r = 0; r < arguments.length; r++)
                n[r] = arguments[r];
              return e(t.apply(null, n));
            };
          },
          o = function(e) {
            return function() {
              return e;
            };
          },
          i = function(e) {
            return e;
          };
        function a(e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
          return function() {
            for (var n = [], r = 0; r < arguments.length; r++)
              n[r] = arguments[r];
            var o = t.concat(n);
            return e.apply(null, o);
          };
        }
        var u,
          s,
          c,
          l,
          f,
          d,
          h,
          m,
          g,
          p,
          v,
          b,
          y,
          C = function(e) {
            return function() {
              for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              return !e.apply(null, t);
            };
          },
          w = function(e) {
            return function() {
              throw new Error(e);
            };
          },
          x = o(!1),
          z = o(!0),
          S = x,
          N = z,
          E = function() {
            return k;
          },
          k = (function() {
            var e = function(e) {
                return e.isNone();
              },
              t = function(e) {
                return e();
              },
              n = function(e) {
                return e;
              },
              r = {
                fold: function(e, t) {
                  return e();
                },
                is: S,
                isSome: S,
                isNone: N,
                getOr: n,
                getOrThunk: t,
                getOrDie: function(e) {
                  throw new Error(e || "error: getOrDie called on none.");
                },
                getOrNull: function() {
                  return null;
                },
                getOrUndefined: function() {},
                or: n,
                orThunk: t,
                map: E,
                ap: E,
                each: function() {},
                bind: E,
                flatten: E,
                exists: S,
                forall: N,
                filter: E,
                equals: e,
                equals_: e,
                toArray: function() {
                  return [];
                },
                toString: o("none()")
              };
            return Object.freeze && Object.freeze(r), r;
          })(),
          T = function(e) {
            var t = function() {
                return e;
              },
              n = function() {
                return o;
              },
              r = function(t) {
                return t(e);
              },
              o = {
                fold: function(t, n) {
                  return n(e);
                },
                is: function(t) {
                  return e === t;
                },
                isSome: N,
                isNone: S,
                getOr: t,
                getOrThunk: t,
                getOrDie: t,
                getOrNull: t,
                getOrUndefined: t,
                or: n,
                orThunk: n,
                map: function(t) {
                  return T(t(e));
                },
                ap: function(t) {
                  return t.fold(E, function(t) {
                    return T(t(e));
                  });
                },
                each: function(t) {
                  t(e);
                },
                bind: r,
                flatten: t,
                exists: r,
                forall: r,
                filter: function(t) {
                  return t(e) ? o : k;
                },
                equals: function(t) {
                  return t.is(e);
                },
                equals_: function(t, n) {
                  return t.fold(S, function(t) {
                    return n(e, t);
                  });
                },
                toArray: function() {
                  return [e];
                },
                toString: function() {
                  return "some(" + e + ")";
                }
              };
            return o;
          },
          A = {
            some: T,
            none: E,
            from: function(e) {
              return null == e ? k : T(e);
            }
          },
          M = function(e) {
            return function(t) {
              return (
                (function(e) {
                  if (null === e) return "null";
                  var t = typeof e;
                  return "object" === t && Array.prototype.isPrototypeOf(e)
                    ? "array"
                    : "object" === t && String.prototype.isPrototypeOf(e)
                    ? "string"
                    : t;
                })(t) === e
              );
            };
          },
          _ = M("string"),
          R = M("object"),
          B = M("array"),
          O = M("null"),
          D = M("boolean"),
          H = M("function"),
          P = M("number"),
          L =
            void 0 === (u = Array.prototype.indexOf)
              ? function(e, t) {
                  return J(e, t);
                }
              : function(e, t) {
                  return u.call(e, t);
                },
          V = function(e, t) {
            var n = L(e, t);
            return -1 === n ? A.none() : A.some(n);
          },
          I = function(e, t) {
            return L(e, t) > -1;
          },
          F = function(e, t) {
            return G(e, t).isSome();
          },
          U = function(e, t) {
            for (var n = e.length, r = new Array(n), o = 0; o < n; o++) {
              var i = e[o];
              r[o] = t(i, o, e);
            }
            return r;
          },
          j = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++) t(e[n], n, e);
          },
          q = function(e, t) {
            for (var n = e.length - 1; n >= 0; n--) t(e[n], n, e);
          },
          $ = function(e, t) {
            for (var n = [], r = [], o = 0, i = e.length; o < i; o++) {
              var a = e[o];
              (t(a, o, e) ? n : r).push(a);
            }
            return { pass: n, fail: r };
          },
          W = function(e, t) {
            for (var n = [], r = 0, o = e.length; r < o; r++) {
              var i = e[r];
              t(i, r, e) && n.push(i);
            }
            return n;
          },
          K = function(e, t, n) {
            return (
              q(e, function(e) {
                n = t(n, e);
              }),
              n
            );
          },
          X = function(e, t, n) {
            return (
              j(e, function(e) {
                n = t(n, e);
              }),
              n
            );
          },
          Y = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++) {
              var o = e[n];
              if (t(o, n, e)) return A.some(o);
            }
            return A.none();
          },
          G = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
              if (t(e[n], n, e)) return A.some(n);
            return A.none();
          },
          J = function(e, t) {
            for (var n = 0, r = e.length; n < r; ++n) if (e[n] === t) return n;
            return -1;
          },
          Q = Array.prototype.push,
          Z = function(e) {
            for (var t = [], n = 0, r = e.length; n < r; ++n) {
              if (!Array.prototype.isPrototypeOf(e[n]))
                throw new Error(
                  "Arr.flatten item " + n + " was not an array, input: " + e
                );
              Q.apply(t, e[n]);
            }
            return t;
          },
          ee = function(e, t) {
            var n = U(e, t);
            return Z(n);
          },
          te = function(e, t) {
            for (var n = 0, r = e.length; n < r; ++n)
              if (!0 !== t(e[n], n, e)) return !1;
            return !0;
          },
          ne = Array.prototype.slice,
          re = function(e) {
            var t = ne.call(e, 0);
            return t.reverse(), t;
          },
          oe = function(e, t) {
            return W(e, function(e) {
              return !I(t, e);
            });
          },
          ie = function(e, t) {
            for (var n = {}, r = 0, o = e.length; r < o; r++) {
              var i = e[r];
              n[String(i)] = t(i, r);
            }
            return n;
          },
          ae = function(e, t) {
            var n = ne.call(e, 0);
            return n.sort(t), n;
          },
          ue = function(e) {
            return 0 === e.length ? A.none() : A.some(e[0]);
          },
          se = function(e) {
            return 0 === e.length ? A.none() : A.some(e[e.length - 1]);
          },
          ce = H(Array.from)
            ? Array.from
            : function(e) {
                return ne.call(e);
              },
          le = void 0 !== t.window ? t.window : Function("return this;")(),
          fe = function(e, t) {
            return (function(e, t) {
              for (
                var n = null != t ? t : le, r = 0;
                r < e.length && null != n;
                ++r
              )
                n = n[e[r]];
              return n;
            })(e.split("."), t);
          },
          de = {
            getOrDie: function(e, t) {
              var n = (function(e, t) {
                return fe(e, t);
              })(e, t);
              if (null == n) throw e + " not available on this browser";
              return n;
            }
          },
          he = function() {
            return de.getOrDie("URL");
          },
          me = function(e) {
            return he().createObjectURL(e);
          },
          ge = function(e) {
            he().revokeObjectURL(e);
          },
          pe = t.navigator,
          ve = pe.userAgent,
          be = function(e) {
            return "matchMedia" in t.window && t.matchMedia(e).matches;
          };
        (g = /Android/.test(ve)),
          (c =
            (c =
              !(s = /WebKit/.test(ve)) &&
              /MSIE/gi.test(ve) &&
              /Explorer/gi.test(pe.appName)) && /MSIE (\w+)\./.exec(ve)[1]),
          (l =
            -1 !== ve.indexOf("Trident/") &&
            (-1 !== ve.indexOf("rv:") ||
              -1 !== pe.appName.indexOf("Netscape")) &&
            11),
          (f = -1 !== ve.indexOf("Edge/") && !c && !l && 12),
          (c = c || l || f),
          (d = !s && !l && /Gecko/.test(ve)),
          (h = -1 !== ve.indexOf("Mac")),
          (m = /(iPad|iPhone)/.test(ve)),
          (p =
            "FormData" in t.window &&
            "FileReader" in t.window &&
            "URL" in t.window &&
            !!me),
          (v = be("only screen and (max-device-width: 480px)") && (g || m)),
          (b = be("only screen and (min-width: 800px)") && (g || m)),
          (y = -1 !== ve.indexOf("Windows Phone")),
          f && (s = !1);
        var ye,
          Ce,
          we,
          xe,
          ze,
          Se,
          Ne,
          Ee,
          ke,
          Te,
          Ae,
          Me,
          _e,
          Re,
          Be,
          Oe,
          De,
          He,
          Pe,
          Le = {
            opera: !1,
            webkit: s,
            ie: c,
            gecko: d,
            mac: h,
            iOS: m,
            android: g,
            contentEditable:
              !m || p || parseInt(ve.match(/AppleWebKit\/(\d*)/)[1], 10) >= 534,
            transparentSrc:
              "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            caretAfter: 8 !== c,
            range: t.window.getSelection && "Range" in t.window,
            documentMode: c && !f ? t.document.documentMode || 7 : 10,
            fileApi: p,
            ceFalse: !1 === c || c > 8,
            cacheSuffix: null,
            container: null,
            experimentalShadowDom: !1,
            canHaveCSP: !1 === c || c > 11,
            desktop: !v && !b,
            windowsPhone: y
          },
          Ve = window.Promise
            ? window.Promise
            : (function() {
                function e(e, t) {
                  return function() {
                    e.apply(t, arguments);
                  };
                }
                var n =
                    Array.isArray ||
                    function(e) {
                      return (
                        "[object Array]" === Object.prototype.toString.call(e)
                      );
                    },
                  r = function(t) {
                    if ("object" != typeof this)
                      throw new TypeError(
                        "Promises must be constructed via new"
                      );
                    if ("function" != typeof t)
                      throw new TypeError("not a function");
                    (this._state = null),
                      (this._value = null),
                      (this._deferreds = []),
                      l(t, e(a, this), e(u, this));
                  },
                  o =
                    r.immediateFn ||
                    ("function" == typeof t.setImmediate && t.setImmediate) ||
                    function(e) {
                      t.setTimeout(e, 1);
                    };
                function i(e) {
                  var t = this;
                  null !== this._state
                    ? o(function() {
                        var n = t._state ? e.onFulfilled : e.onRejected;
                        if (null !== n) {
                          var r;
                          try {
                            r = n(t._value);
                          } catch (t) {
                            return void e.reject(t);
                          }
                          e.resolve(r);
                        } else (t._state ? e.resolve : e.reject)(t._value);
                      })
                    : this._deferreds.push(e);
                }
                function a(t) {
                  try {
                    if (t === this)
                      throw new TypeError(
                        "A promise cannot be resolved with itself."
                      );
                    if (t && ("object" == typeof t || "function" == typeof t)) {
                      var n = t.then;
                      if ("function" == typeof n)
                        return void l(e(n, t), e(a, this), e(u, this));
                    }
                    (this._state = !0), (this._value = t), s.call(this);
                  } catch (e) {
                    u.call(this, e);
                  }
                }
                function u(e) {
                  (this._state = !1), (this._value = e), s.call(this);
                }
                function s() {
                  for (var e = 0, t = this._deferreds.length; e < t; e++)
                    i.call(this, this._deferreds[e]);
                  this._deferreds = null;
                }
                function c(e, t, n, r) {
                  (this.onFulfilled = "function" == typeof e ? e : null),
                    (this.onRejected = "function" == typeof t ? t : null),
                    (this.resolve = n),
                    (this.reject = r);
                }
                function l(e, t, n) {
                  var r = !1;
                  try {
                    e(
                      function(e) {
                        r || ((r = !0), t(e));
                      },
                      function(e) {
                        r || ((r = !0), n(e));
                      }
                    );
                  } catch (e) {
                    if (r) return;
                    (r = !0), n(e);
                  }
                }
                return (
                  (r.prototype.catch = function(e) {
                    return this.then(null, e);
                  }),
                  (r.prototype.then = function(e, t) {
                    var n = this;
                    return new r(function(r, o) {
                      i.call(n, new c(e, t, r, o));
                    });
                  }),
                  (r.all = function() {
                    var e = Array.prototype.slice.call(
                      1 === arguments.length && n(arguments[0])
                        ? arguments[0]
                        : arguments
                    );
                    return new r(function(t, n) {
                      if (0 === e.length) return t([]);
                      var r = e.length;
                      function o(i, a) {
                        try {
                          if (
                            a &&
                            ("object" == typeof a || "function" == typeof a)
                          ) {
                            var u = a.then;
                            if ("function" == typeof u)
                              return void u.call(
                                a,
                                function(e) {
                                  o(i, e);
                                },
                                n
                              );
                          }
                          (e[i] = a), 0 == --r && t(e);
                        } catch (e) {
                          n(e);
                        }
                      }
                      for (var i = 0; i < e.length; i++) o(i, e[i]);
                    });
                  }),
                  (r.resolve = function(e) {
                    return e && "object" == typeof e && e.constructor === r
                      ? e
                      : new r(function(t) {
                          t(e);
                        });
                  }),
                  (r.reject = function(e) {
                    return new r(function(t, n) {
                      n(e);
                    });
                  }),
                  (r.race = function(e) {
                    return new r(function(t, n) {
                      for (var r = 0, o = e.length; r < o; r++) e[r].then(t, n);
                    });
                  }),
                  r
                );
              })(),
          Ie = function(e, n) {
            return "number" != typeof n && (n = 0), t.setTimeout(e, n);
          },
          Fe = function(e, n) {
            return "number" != typeof n && (n = 1), t.setInterval(e, n);
          },
          Ue = function(e, n) {
            var r, o;
            return (
              ((o = function() {
                for (var o = [], i = 0; i < arguments.length; i++)
                  o[i] = arguments[i];
                t.clearTimeout(r),
                  (r = Ie(function() {
                    e.apply(this, o);
                  }, n));
              }).stop = function() {
                t.clearTimeout(r);
              }),
              o
            );
          },
          je = {
            requestAnimationFrame: function(e, n) {
              ye
                ? ye.then(e)
                : (ye = new Ve(function(e) {
                    n || (n = t.document.body),
                      (function(e, n) {
                        var r,
                          o = t.window.requestAnimationFrame,
                          i = ["ms", "moz", "webkit"];
                        for (r = 0; r < i.length && !o; r++)
                          o = t.window[i[r] + "RequestAnimationFrame"];
                        o ||
                          (o = function(e) {
                            t.window.setTimeout(e, 0);
                          }),
                          o(e, n);
                      })(e, n);
                  }).then(e));
            },
            setTimeout: Ie,
            setInterval: Fe,
            setEditorTimeout: function(e, t, n) {
              return Ie(function() {
                e.removed || t();
              }, n);
            },
            setEditorInterval: function(e, n, r) {
              var o;
              return (o = Fe(function() {
                e.removed ? t.clearInterval(o) : n();
              }, r));
            },
            debounce: Ue,
            throttle: Ue,
            clearInterval: function(e) {
              return t.clearInterval(e);
            },
            clearTimeout: function(e) {
              return t.clearTimeout(e);
            }
          },
          qe = "mce-data-",
          $e = /^(?:mouse|contextmenu)|click/,
          We = {
            keyLocation: 1,
            layerX: 1,
            layerY: 1,
            returnValue: 1,
            webkitMovementX: 1,
            webkitMovementY: 1,
            keyIdentifier: 1
          },
          Ke = function() {
            return !1;
          },
          Xe = function() {
            return !0;
          },
          Ye = function(e, t, n, r) {
            e.addEventListener
              ? e.addEventListener(t, n, r || !1)
              : e.attachEvent && e.attachEvent("on" + t, n);
          },
          Ge = function(e, t, n, r) {
            e.removeEventListener
              ? e.removeEventListener(t, n, r || !1)
              : e.detachEvent && e.detachEvent("on" + t, n);
          },
          Je = function(e, n) {
            var r,
              o = n || {};
            for (r in e) We[r] || (o[r] = e[r]);
            if (
              (o.target || (o.target = o.srcElement || t.document),
              Le.experimentalShadowDom &&
                (o.target = (function(e, t) {
                  if (e.composedPath) {
                    var n = e.composedPath();
                    if (n && n.length > 0) return n[0];
                  }
                  return t;
                })(e, o.target)),
              e &&
                $e.test(e.type) &&
                void 0 === e.pageX &&
                void 0 !== e.clientX)
            ) {
              var i = o.target.ownerDocument || t.document,
                a = i.documentElement,
                u = i.body;
              (o.pageX =
                e.clientX +
                ((a && a.scrollLeft) || (u && u.scrollLeft) || 0) -
                ((a && a.clientLeft) || (u && u.clientLeft) || 0)),
                (o.pageY =
                  e.clientY +
                  ((a && a.scrollTop) || (u && u.scrollTop) || 0) -
                  ((a && a.clientTop) || (u && u.clientTop) || 0));
            }
            return (
              (o.preventDefault = function() {
                (o.isDefaultPrevented = Xe),
                  e &&
                    (e.preventDefault
                      ? e.preventDefault()
                      : (e.returnValue = !1));
              }),
              (o.stopPropagation = function() {
                (o.isPropagationStopped = Xe),
                  e &&
                    (e.stopPropagation
                      ? e.stopPropagation()
                      : (e.cancelBubble = !0));
              }),
              (o.stopImmediatePropagation = function() {
                (o.isImmediatePropagationStopped = Xe), o.stopPropagation();
              }),
              !1 ===
                (function(e) {
                  return (
                    e.isDefaultPrevented === Xe || e.isDefaultPrevented === Ke
                  );
                })(o) &&
                ((o.isDefaultPrevented = Ke),
                (o.isPropagationStopped = Ke),
                (o.isImmediatePropagationStopped = Ke)),
              void 0 === o.metaKey && (o.metaKey = !1),
              o
            );
          },
          Qe = function(e, t, n) {
            var r = e.document,
              o = { type: "ready" };
            if (n.domLoaded) t(o);
            else {
              var i = function() {
                  return (
                    "complete" === r.readyState ||
                    ("interactive" === r.readyState && r.body)
                  );
                },
                a = function() {
                  Ge(e, "DOMContentLoaded", a),
                    Ge(e, "load", a),
                    n.domLoaded || ((n.domLoaded = !0), t(o));
                },
                u = function() {
                  i() && (Ge(r, "readystatechange", u), a());
                },
                s = function() {
                  try {
                    r.documentElement.doScroll("left");
                  } catch (e) {
                    return void je.setTimeout(s);
                  }
                  a();
                };
              !r.addEventListener || (Le.ie && Le.ie < 11)
                ? (Ye(r, "readystatechange", u),
                  r.documentElement.doScroll && e.self === e.top && s())
                : i()
                ? a()
                : Ye(e, "DOMContentLoaded", a),
                Ye(e, "load", a);
            }
          },
          Ze = (function() {
            function e() {
              (this.domLoaded = !1),
                (this.events = {}),
                (this.count = 1),
                (this.expando = qe + (+new Date()).toString(32)),
                (this.hasMouseEnterLeave =
                  "onmouseenter" in t.document.documentElement),
                (this.hasFocusIn = "onfocusin" in t.document.documentElement),
                (this.count = 1);
            }
            return (
              (e.prototype.bind = function(e, n, r, o) {
                var i,
                  a,
                  u,
                  s,
                  c,
                  l,
                  f,
                  d = this,
                  h = t.window,
                  m = function(e) {
                    d.executeHandlers(Je(e || h.event), i);
                  };
                if (e && 3 !== e.nodeType && 8 !== e.nodeType) {
                  e[d.expando]
                    ? (i = e[d.expando])
                    : ((i = d.count++), (e[d.expando] = i), (d.events[i] = {})),
                    (o = o || e);
                  var g = n.split(" ");
                  for (u = g.length; u--; )
                    (l = m),
                      (c = f = !1),
                      "DOMContentLoaded" === (s = g[u]) && (s = "ready"),
                      d.domLoaded &&
                      "ready" === s &&
                      "complete" === e.readyState
                        ? r.call(o, Je({ type: s }))
                        : (d.hasMouseEnterLeave ||
                            ((c = d.mouseEnterLeave[s]) &&
                              (l = function(e) {
                                var t, n;
                                if (
                                  ((t = e.currentTarget),
                                  (n = e.relatedTarget) && t.contains)
                                )
                                  n = t.contains(n);
                                else for (; n && n !== t; ) n = n.parentNode;
                                n ||
                                  (((e = Je(e || h.event)).type =
                                    "mouseout" === e.type
                                      ? "mouseleave"
                                      : "mouseenter"),
                                  (e.target = t),
                                  d.executeHandlers(e, i));
                              })),
                          d.hasFocusIn ||
                            ("focusin" !== s && "focusout" !== s) ||
                            ((f = !0),
                            (c = "focusin" === s ? "focus" : "blur"),
                            (l = function(e) {
                              ((e = Je(e || h.event)).type =
                                "focus" === e.type ? "focusin" : "focusout"),
                                d.executeHandlers(e, i);
                            })),
                          (a = d.events[i][s])
                            ? "ready" === s && d.domLoaded
                              ? r(Je({ type: s }))
                              : a.push({ func: r, scope: o })
                            : ((d.events[i][s] = a = [{ func: r, scope: o }]),
                              (a.fakeName = c),
                              (a.capture = f),
                              (a.nativeHandler = l),
                              "ready" === s
                                ? Qe(e, l, d)
                                : Ye(e, c || s, l, f)));
                  return (e = a = 0), r;
                }
              }),
              (e.prototype.unbind = function(e, t, n) {
                var r, o, i, a, u, s;
                if (!e || 3 === e.nodeType || 8 === e.nodeType) return this;
                if ((r = e[this.expando])) {
                  if (((s = this.events[r]), t)) {
                    var c = t.split(" ");
                    for (i = c.length; i--; )
                      if ((o = s[(u = c[i])])) {
                        if (n)
                          for (a = o.length; a--; )
                            if (o[a].func === n) {
                              var l = o.nativeHandler,
                                f = o.fakeName,
                                d = o.capture;
                              ((o = o
                                .slice(0, a)
                                .concat(o.slice(a + 1))).nativeHandler = l),
                                (o.fakeName = f),
                                (o.capture = d),
                                (s[u] = o);
                            }
                        (n && 0 !== o.length) ||
                          (delete s[u],
                          Ge(e, o.fakeName || u, o.nativeHandler, o.capture));
                      }
                  } else {
                    for (u in s)
                      (o = s[u]),
                        Ge(e, o.fakeName || u, o.nativeHandler, o.capture);
                    s = {};
                  }
                  for (u in s) return this;
                  delete this.events[r];
                  try {
                    delete e[this.expando];
                  } catch (t) {
                    e[this.expando] = null;
                  }
                }
                return this;
              }),
              (e.prototype.fire = function(e, t, n) {
                var r;
                if (!e || 3 === e.nodeType || 8 === e.nodeType) return this;
                var o = Je(null, n);
                (o.type = t), (o.target = e);
                do {
                  (r = e[this.expando]) && this.executeHandlers(o, r),
                    (e =
                      e.parentNode ||
                      e.ownerDocument ||
                      e.defaultView ||
                      e.parentWindow);
                } while (e && !o.isPropagationStopped());
                return this;
              }),
              (e.prototype.clean = function(e) {
                var t, n;
                if (!e || 3 === e.nodeType || 8 === e.nodeType) return this;
                if (
                  (e[this.expando] && this.unbind(e),
                  e.getElementsByTagName || (e = e.document),
                  e && e.getElementsByTagName)
                )
                  for (
                    this.unbind(e),
                      t = (n = e.getElementsByTagName("*")).length;
                    t--;

                  )
                    (e = n[t])[this.expando] && this.unbind(e);
                return this;
              }),
              (e.prototype.destroy = function() {
                this.events = {};
              }),
              (e.prototype.cancel = function(e) {
                return (
                  e && (e.preventDefault(), e.stopImmediatePropagation()), !1
                );
              }),
              (e.prototype.executeHandlers = function(e, t) {
                var n,
                  r,
                  o,
                  i,
                  a = this.events[t];
                if ((n = a && a[e.type]))
                  for (r = 0, o = n.length; r < o; r++)
                    if (
                      ((i = n[r]) &&
                        !1 === i.func.call(i.scope, e) &&
                        e.preventDefault(),
                      e.isImmediatePropagationStopped())
                    )
                      return;
              }),
              (e.Event = new e()),
              e
            );
          })(),
          et = "sizzle" + -new Date(),
          tt = t.window.document,
          nt = 0,
          rt = 0,
          ot = Pt(),
          it = Pt(),
          at = Pt(),
          ut = function(e, t) {
            return e === t && (Me = !0), 0;
          },
          st = "undefined",
          ct = 1 << 31,
          lt = {}.hasOwnProperty,
          ft = [],
          dt = ft.pop,
          ht = ft.push,
          mt = ft.push,
          gt = ft.slice,
          pt =
            ft.indexOf ||
            function(e) {
              for (var t = 0, n = this.length; t < n; t++)
                if (this[t] === e) return t;
              return -1;
            },
          vt = "[\\x20\\t\\r\\n\\f]",
          bt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
          yt =
            "\\[" +
            vt +
            "*(" +
            bt +
            ")(?:" +
            vt +
            "*([*^$|!~]?=)" +
            vt +
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
            bt +
            "))|)" +
            vt +
            "*\\]",
          Ct =
            ":(" +
            bt +
            ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
            yt +
            ")*)|.*)\\)|)",
          wt = new RegExp(
            "^" + vt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + vt + "+$",
            "g"
          ),
          xt = new RegExp("^" + vt + "*," + vt + "*"),
          zt = new RegExp("^" + vt + "*([>+~]|" + vt + ")" + vt + "*"),
          St = new RegExp("=" + vt + "*([^\\]'\"]*?)" + vt + "*\\]", "g"),
          Nt = new RegExp(Ct),
          Et = new RegExp("^" + bt + "$"),
          kt = {
            ID: new RegExp("^#(" + bt + ")"),
            CLASS: new RegExp("^\\.(" + bt + ")"),
            TAG: new RegExp("^(" + bt + "|[*])"),
            ATTR: new RegExp("^" + yt),
            PSEUDO: new RegExp("^" + Ct),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                vt +
                "*(even|odd|(([+-]|)(\\d*)n|)" +
                vt +
                "*(?:([+-]|)" +
                vt +
                "*(\\d+)|))" +
                vt +
                "*\\)|)",
              "i"
            ),
            bool: new RegExp(
              "^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$",
              "i"
            ),
            needsContext: new RegExp(
              "^" +
                vt +
                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                vt +
                "*((?:-\\d)?\\d*)" +
                vt +
                "*\\)|)(?=[^-]|$)",
              "i"
            )
          },
          Tt = /^(?:input|select|textarea|button)$/i,
          At = /^h\d$/i,
          Mt = /^[^{]+\{\s*\[native \w/,
          _t = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          Rt = /[+~]/,
          Bt = /'|\\/g,
          Ot = new RegExp(
            "\\\\([\\da-f]{1,6}" + vt + "?|(" + vt + ")|.)",
            "ig"
          ),
          Dt = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n
              ? t
              : r < 0
              ? String.fromCharCode(r + 65536)
              : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
          };
        try {
          mt.apply((ft = gt.call(tt.childNodes)), tt.childNodes),
            ft[tt.childNodes.length].nodeType;
        } catch (e) {
          mt = {
            apply: ft.length
              ? function(e, t) {
                  ht.apply(e, gt.call(t));
                }
              : function(e, t) {
                  for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                  e.length = n - 1;
                }
          };
        }
        var Ht = function(e, t, n, r) {
          var o, i, a, u, s, c, l, f, d, h;
          if (
            ((t ? t.ownerDocument || t : tt) !== Re && _e(t),
            (n = n || []),
            !e || "string" != typeof e)
          )
            return n;
          if (1 !== (u = (t = t || Re).nodeType) && 9 !== u) return [];
          if (Oe && !r) {
            if ((o = _t.exec(e)))
              if ((a = o[1])) {
                if (9 === u) {
                  if (!(i = t.getElementById(a)) || !i.parentNode) return n;
                  if (i.id === a) return n.push(i), n;
                } else if (
                  t.ownerDocument &&
                  (i = t.ownerDocument.getElementById(a)) &&
                  Pe(t, i) &&
                  i.id === a
                )
                  return n.push(i), n;
              } else {
                if (o[2]) return mt.apply(n, t.getElementsByTagName(e)), n;
                if ((a = o[3]) && we.getElementsByClassName)
                  return mt.apply(n, t.getElementsByClassName(a)), n;
              }
            if (we.qsa && (!De || !De.test(e))) {
              if (
                ((f = l = et),
                (d = t),
                (h = 9 === u && e),
                1 === u && "object" !== t.nodeName.toLowerCase())
              ) {
                for (
                  c = Ne(e),
                    (l = t.getAttribute("id"))
                      ? (f = l.replace(Bt, "\\$&"))
                      : t.setAttribute("id", f),
                    f = "[id='" + f + "'] ",
                    s = c.length;
                  s--;

                )
                  c[s] = f + $t(c[s]);
                (d = (Rt.test(e) && jt(t.parentNode)) || t), (h = c.join(","));
              }
              if (h)
                try {
                  return mt.apply(n, d.querySelectorAll(h)), n;
                } catch (e) {
                } finally {
                  l || t.removeAttribute("id");
                }
            }
          }
          return ke(e.replace(wt, "$1"), t, n, r);
        };
        function Pt() {
          var e = [];
          return function t(n, r) {
            return (
              e.push(n + " ") > xe.cacheLength && delete t[e.shift()],
              (t[n + " "] = r)
            );
          };
        }
        function Lt(e) {
          return (e[et] = !0), e;
        }
        function Vt(e, t) {
          var n = t && e,
            r =
              n &&
              1 === e.nodeType &&
              1 === t.nodeType &&
              (~t.sourceIndex || ct) - (~e.sourceIndex || ct);
          if (r) return r;
          if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
          return e ? 1 : -1;
        }
        function It(e) {
          return function(t) {
            return "input" === t.nodeName.toLowerCase() && t.type === e;
          };
        }
        function Ft(e) {
          return function(t) {
            var n = t.nodeName.toLowerCase();
            return ("input" === n || "button" === n) && t.type === e;
          };
        }
        function Ut(e) {
          return Lt(function(t) {
            return (
              (t = +t),
              Lt(function(n, r) {
                for (var o, i = e([], n.length, t), a = i.length; a--; )
                  n[(o = i[a])] && (n[o] = !(r[o] = n[o]));
              })
            );
          });
        }
        function jt(e) {
          return e && typeof e.getElementsByTagName !== st && e;
        }
        for (Ce in ((we = Ht.support = {}),
        (Se = Ht.isXML = function(e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName;
        }),
        (_e = Ht.setDocument = function(e) {
          var t,
            n = e ? e.ownerDocument || e : tt,
            r = n.defaultView;
          return n !== Re && 9 === n.nodeType && n.documentElement
            ? ((Re = n),
              (Be = n.documentElement),
              (Oe = !Se(n)),
              r &&
                r !==
                  (function(e) {
                    try {
                      return e.top;
                    } catch (e) {}
                    return null;
                  })(r) &&
                (r.addEventListener
                  ? r.addEventListener(
                      "unload",
                      function() {
                        _e();
                      },
                      !1
                    )
                  : r.attachEvent &&
                    r.attachEvent("onunload", function() {
                      _e();
                    })),
              (we.attributes = !0),
              (we.getElementsByTagName = !0),
              (we.getElementsByClassName = Mt.test(n.getElementsByClassName)),
              (we.getById = !0),
              (xe.find.ID = function(e, t) {
                if (typeof t.getElementById !== st && Oe) {
                  var n = t.getElementById(e);
                  return n && n.parentNode ? [n] : [];
                }
              }),
              (xe.filter.ID = function(e) {
                var t = e.replace(Ot, Dt);
                return function(e) {
                  return e.getAttribute("id") === t;
                };
              }),
              (xe.find.TAG = we.getElementsByTagName
                ? function(e, t) {
                    if (typeof t.getElementsByTagName !== st)
                      return t.getElementsByTagName(e);
                  }
                : function(e, t) {
                    var n,
                      r = [],
                      o = 0,
                      i = t.getElementsByTagName(e);
                    if ("*" === e) {
                      for (; (n = i[o++]); ) 1 === n.nodeType && r.push(n);
                      return r;
                    }
                    return i;
                  }),
              (xe.find.CLASS =
                we.getElementsByClassName &&
                function(e, t) {
                  if (Oe) return t.getElementsByClassName(e);
                }),
              (He = []),
              (De = []),
              (we.disconnectedMatch = !0),
              (De = De.length && new RegExp(De.join("|"))),
              (He = He.length && new RegExp(He.join("|"))),
              (t = Mt.test(Be.compareDocumentPosition)),
              (Pe =
                t || Mt.test(Be.contains)
                  ? function(e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                      return (
                        e === r ||
                        !(
                          !r ||
                          1 !== r.nodeType ||
                          !(n.contains
                            ? n.contains(r)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(r))
                        )
                      );
                    }
                  : function(e, t) {
                      if (t)
                        for (; (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
              (ut = t
                ? function(e, t) {
                    if (e === t) return (Me = !0), 0;
                    var r =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      r ||
                      (1 &
                        (r =
                          (e.ownerDocument || e) === (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1) ||
                      (!we.sortDetached && t.compareDocumentPosition(e) === r)
                        ? e === n || (e.ownerDocument === tt && Pe(tt, e))
                          ? -1
                          : t === n || (t.ownerDocument === tt && Pe(tt, t))
                          ? 1
                          : Ae
                          ? pt.call(Ae, e) - pt.call(Ae, t)
                          : 0
                        : 4 & r
                        ? -1
                        : 1)
                    );
                  }
                : function(e, t) {
                    if (e === t) return (Me = !0), 0;
                    var r,
                      o = 0,
                      i = e.parentNode,
                      a = t.parentNode,
                      u = [e],
                      s = [t];
                    if (!i || !a)
                      return e === n
                        ? -1
                        : t === n
                        ? 1
                        : i
                        ? -1
                        : a
                        ? 1
                        : Ae
                        ? pt.call(Ae, e) - pt.call(Ae, t)
                        : 0;
                    if (i === a) return Vt(e, t);
                    for (r = e; (r = r.parentNode); ) u.unshift(r);
                    for (r = t; (r = r.parentNode); ) s.unshift(r);
                    for (; u[o] === s[o]; ) o++;
                    return o
                      ? Vt(u[o], s[o])
                      : u[o] === tt
                      ? -1
                      : s[o] === tt
                      ? 1
                      : 0;
                  }),
              n)
            : Re;
        }),
        (Ht.matches = function(e, t) {
          return Ht(e, null, null, t);
        }),
        (Ht.matchesSelector = function(e, t) {
          if (
            ((e.ownerDocument || e) !== Re && _e(e),
            (t = t.replace(St, "='$1']")),
            we.matchesSelector &&
              Oe &&
              (!He || !He.test(t)) &&
              (!De || !De.test(t)))
          )
            try {
              var n = (void 0).call(e, t);
              if (
                n ||
                we.disconnectedMatch ||
                (e.document && 11 !== e.document.nodeType)
              )
                return n;
            } catch (e) {}
          return Ht(t, Re, null, [e]).length > 0;
        }),
        (Ht.contains = function(e, t) {
          return (e.ownerDocument || e) !== Re && _e(e), Pe(e, t);
        }),
        (Ht.attr = function(e, t) {
          (e.ownerDocument || e) !== Re && _e(e);
          var n = xe.attrHandle[t.toLowerCase()],
            r =
              n && lt.call(xe.attrHandle, t.toLowerCase())
                ? n(e, t, !Oe)
                : void 0;
          return void 0 !== r
            ? r
            : we.attributes || !Oe
            ? e.getAttribute(t)
            : (r = e.getAttributeNode(t)) && r.specified
            ? r.value
            : null;
        }),
        (Ht.error = function(e) {
          throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (Ht.uniqueSort = function(e) {
          var t,
            n = [],
            r = 0,
            o = 0;
          if (
            ((Me = !we.detectDuplicates),
            (Ae = !we.sortStable && e.slice(0)),
            e.sort(ut),
            Me)
          ) {
            for (; (t = e[o++]); ) t === e[o] && (r = n.push(o));
            for (; r--; ) e.splice(n[r], 1);
          }
          return (Ae = null), e;
        }),
        (ze = Ht.getText = function(e) {
          var t,
            n = "",
            r = 0,
            o = e.nodeType;
          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += ze(e);
            } else if (3 === o || 4 === o) return e.nodeValue;
          } else for (; (t = e[r++]); ) n += ze(t);
          return n;
        }),
        ((xe = Ht.selectors = {
          cacheLength: 50,
          createPseudo: Lt,
          match: kt,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" }
          },
          preFilter: {
            ATTR: function(e) {
              return (
                (e[1] = e[1].replace(Ot, Dt)),
                (e[3] = (e[3] || e[4] || e[5] || "").replace(Ot, Dt)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function(e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || Ht.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && Ht.error(e[0]),
                e
              );
            },
            PSEUDO: function(e) {
              var t,
                n = !e[6] && e[2];
              return kt.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || "")
                    : n &&
                      Nt.test(n) &&
                      (t = Ne(n, !0)) &&
                      (t = n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            }
          },
          filter: {
            TAG: function(e) {
              var t = e.replace(Ot, Dt).toLowerCase();
              return "*" === e
                ? function() {
                    return !0;
                  }
                : function(e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function(e) {
              var t = ot[e + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + vt + ")" + e + "(" + vt + "|$)")) &&
                  ot(e, function(e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        (typeof e.getAttribute !== st &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function(e, t, n) {
              return function(r) {
                var o = Ht.attr(r, e);
                return null == o
                  ? "!=" === t
                  : !t ||
                      ((o += ""),
                      "=" === t
                        ? o === n
                        : "!=" === t
                        ? o !== n
                        : "^=" === t
                        ? n && 0 === o.indexOf(n)
                        : "*=" === t
                        ? n && o.indexOf(n) > -1
                        : "$=" === t
                        ? n && o.slice(-n.length) === n
                        : "~=" === t
                        ? (" " + o + " ").indexOf(n) > -1
                        : "|=" === t &&
                          (o === n || o.slice(0, n.length + 1) === n + "-"));
              };
            },
            CHILD: function(e, t, n, r, o) {
              var i = "nth" !== e.slice(0, 3),
                a = "last" !== e.slice(-4),
                u = "of-type" === t;
              return 1 === r && 0 === o
                ? function(e) {
                    return !!e.parentNode;
                  }
                : function(t, n, s) {
                    var c,
                      l,
                      f,
                      d,
                      h,
                      m,
                      g = i !== a ? "nextSibling" : "previousSibling",
                      p = t.parentNode,
                      v = u && t.nodeName.toLowerCase(),
                      b = !s && !u;
                    if (p) {
                      if (i) {
                        for (; g; ) {
                          for (f = t; (f = f[g]); )
                            if (
                              u
                                ? f.nodeName.toLowerCase() === v
                                : 1 === f.nodeType
                            )
                              return !1;
                          m = g = "only" === e && !m && "nextSibling";
                        }
                        return !0;
                      }
                      if (((m = [a ? p.firstChild : p.lastChild]), a && b)) {
                        for (
                          h =
                            (c = (l = p[et] || (p[et] = {}))[e] || [])[0] ===
                              nt && c[1],
                            d = c[0] === nt && c[2],
                            f = h && p.childNodes[h];
                          (f = (++h && f && f[g]) || (d = h = 0) || m.pop());

                        )
                          if (1 === f.nodeType && ++d && f === t) {
                            l[e] = [nt, h, d];
                            break;
                          }
                      } else if (
                        b &&
                        (c = (t[et] || (t[et] = {}))[e]) &&
                        c[0] === nt
                      )
                        d = c[1];
                      else
                        for (
                          ;
                          (f = (++h && f && f[g]) || (d = h = 0) || m.pop()) &&
                          ((u
                            ? f.nodeName.toLowerCase() !== v
                            : 1 !== f.nodeType) ||
                            !++d ||
                            (b && ((f[et] || (f[et] = {}))[e] = [nt, d]),
                            f !== t));

                        );
                      return (d -= o) === r || (d % r == 0 && d / r >= 0);
                    }
                  };
            },
            PSEUDO: function(e, t) {
              var n,
                r =
                  xe.pseudos[e] ||
                  xe.setFilters[e.toLowerCase()] ||
                  Ht.error("unsupported pseudo: " + e);
              return r[et]
                ? r(t)
                : r.length > 1
                ? ((n = [e, e, "", t]),
                  xe.setFilters.hasOwnProperty(e.toLowerCase())
                    ? Lt(function(e, n) {
                        for (var o, i = r(e, t), a = i.length; a--; )
                          e[(o = pt.call(e, i[a]))] = !(n[o] = i[a]);
                      })
                    : function(e) {
                        return r(e, 0, n);
                      })
                : r;
            }
          },
          pseudos: {
            not: Lt(function(e) {
              var t = [],
                n = [],
                r = Ee(e.replace(wt, "$1"));
              return r[et]
                ? Lt(function(e, t, n, o) {
                    for (var i, a = r(e, null, o, []), u = e.length; u--; )
                      (i = a[u]) && (e[u] = !(t[u] = i));
                  })
                : function(e, o, i) {
                    return (t[0] = e), r(t, null, i, n), !n.pop();
                  };
            }),
            has: Lt(function(e) {
              return function(t) {
                return Ht(e, t).length > 0;
              };
            }),
            contains: Lt(function(e) {
              return (
                (e = e.replace(Ot, Dt)),
                function(t) {
                  return (
                    (t.textContent || t.innerText || ze(t)).indexOf(e) > -1
                  );
                }
              );
            }),
            lang: Lt(function(e) {
              return (
                Et.test(e || "") || Ht.error("unsupported lang: " + e),
                (e = e.replace(Ot, Dt).toLowerCase()),
                function(t) {
                  var n;
                  do {
                    if (
                      (n = Oe
                        ? t.lang
                        : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                    )
                      return (
                        (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                      );
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function(e) {
              var n = t.window.location && t.window.location.hash;
              return n && n.slice(1) === e.id;
            },
            root: function(e) {
              return e === Be;
            },
            focus: function(e) {
              return (
                e === Re.activeElement &&
                (!Re.hasFocus || Re.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: function(e) {
              return !1 === e.disabled;
            },
            disabled: function(e) {
              return !0 === e.disabled;
            },
            checked: function(e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function(e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              );
            },
            empty: function(e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function(e) {
              return !xe.pseudos.empty(e);
            },
            header: function(e) {
              return At.test(e.nodeName);
            },
            input: function(e) {
              return Tt.test(e.nodeName);
            },
            button: function(e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function(e) {
              var t;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (t = e.getAttribute("type")) ||
                  "text" === t.toLowerCase())
              );
            },
            first: Ut(function() {
              return [0];
            }),
            last: Ut(function(e, t) {
              return [t - 1];
            }),
            eq: Ut(function(e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: Ut(function(e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: Ut(function(e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: Ut(function(e, t, n) {
              for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
              return e;
            }),
            gt: Ut(function(e, t, n) {
              for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
              return e;
            })
          }
        }).pseudos.nth = xe.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
          xe.pseudos[Ce] = It(Ce);
        for (Ce in { submit: !0, reset: !0 }) xe.pseudos[Ce] = Ft(Ce);
        function qt() {}
        function $t(e) {
          for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
          return r;
        }
        function Wt(e, t, n) {
          var r = t.dir,
            o = n && "parentNode" === r,
            i = rt++;
          return t.first
            ? function(t, n, i) {
                for (; (t = t[r]); )
                  if (1 === t.nodeType || o) return e(t, n, i);
              }
            : function(t, n, a) {
                var u,
                  s,
                  c = [nt, i];
                if (a) {
                  for (; (t = t[r]); )
                    if ((1 === t.nodeType || o) && e(t, n, a)) return !0;
                } else
                  for (; (t = t[r]); )
                    if (1 === t.nodeType || o) {
                      if (
                        (u = (s = t[et] || (t[et] = {}))[r]) &&
                        u[0] === nt &&
                        u[1] === i
                      )
                        return (c[2] = u[2]);
                      if (((s[r] = c), (c[2] = e(t, n, a)))) return !0;
                    }
              };
        }
        function Kt(e) {
          return e.length > 1
            ? function(t, n, r) {
                for (var o = e.length; o--; ) if (!e[o](t, n, r)) return !1;
                return !0;
              }
            : e[0];
        }
        function Xt(e, t, n, r, o) {
          for (var i, a = [], u = 0, s = e.length, c = null != t; u < s; u++)
            (i = e[u]) && ((n && !n(i, r, o)) || (a.push(i), c && t.push(u)));
          return a;
        }
        function Yt(e, t, n, r, o, i) {
          return (
            r && !r[et] && (r = Yt(r)),
            o && !o[et] && (o = Yt(o, i)),
            Lt(function(i, a, u, s) {
              var c,
                l,
                f,
                d = [],
                h = [],
                m = a.length,
                g =
                  i ||
                  (function(e, t, n) {
                    for (var r = 0, o = t.length; r < o; r++) Ht(e, t[r], n);
                    return n;
                  })(t || "*", u.nodeType ? [u] : u, []),
                p = !e || (!i && t) ? g : Xt(g, d, e, u, s),
                v = n ? (o || (i ? e : m || r) ? [] : a) : p;
              if ((n && n(p, v, u, s), r))
                for (c = Xt(v, h), r(c, [], u, s), l = c.length; l--; )
                  (f = c[l]) && (v[h[l]] = !(p[h[l]] = f));
              if (i) {
                if (o || e) {
                  if (o) {
                    for (c = [], l = v.length; l--; )
                      (f = v[l]) && c.push((p[l] = f));
                    o(null, (v = []), c, s);
                  }
                  for (l = v.length; l--; )
                    (f = v[l]) &&
                      (c = o ? pt.call(i, f) : d[l]) > -1 &&
                      (i[c] = !(a[c] = f));
                }
              } else (v = Xt(v === a ? v.splice(m, v.length) : v)), o ? o(null, a, v, s) : mt.apply(a, v);
            })
          );
        }
        function Gt(e) {
          for (
            var t,
              n,
              r,
              o = e.length,
              i = xe.relative[e[0].type],
              a = i || xe.relative[" "],
              u = i ? 1 : 0,
              s = Wt(
                function(e) {
                  return e === t;
                },
                a,
                !0
              ),
              c = Wt(
                function(e) {
                  return pt.call(t, e) > -1;
                },
                a,
                !0
              ),
              l = [
                function(e, n, r) {
                  return (
                    (!i && (r || n !== Te)) ||
                    ((t = n).nodeType ? s(e, n, r) : c(e, n, r))
                  );
                }
              ];
            u < o;
            u++
          )
            if ((n = xe.relative[e[u].type])) l = [Wt(Kt(l), n)];
            else {
              if ((n = xe.filter[e[u].type].apply(null, e[u].matches))[et]) {
                for (r = ++u; r < o && !xe.relative[e[r].type]; r++);
                return Yt(
                  u > 1 && Kt(l),
                  u > 1 &&
                    $t(
                      e
                        .slice(0, u - 1)
                        .concat({ value: " " === e[u - 2].type ? "*" : "" })
                    ).replace(wt, "$1"),
                  n,
                  u < r && Gt(e.slice(u, r)),
                  r < o && Gt((e = e.slice(r))),
                  r < o && $t(e)
                );
              }
              l.push(n);
            }
          return Kt(l);
        }
        (qt.prototype = xe.filters = xe.pseudos),
          (xe.setFilters = new qt()),
          (Ne = Ht.tokenize = function(e, t) {
            var n,
              r,
              o,
              i,
              a,
              u,
              s,
              c = it[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (a = e, u = [], s = xe.preFilter; a; ) {
              for (i in ((n && !(r = xt.exec(a))) ||
                (r && (a = a.slice(r[0].length) || a), u.push((o = []))),
              (n = !1),
              (r = zt.exec(a)) &&
                ((n = r.shift()),
                o.push({ value: n, type: r[0].replace(wt, " ") }),
                (a = a.slice(n.length))),
              xe.filter))
                xe.filter.hasOwnProperty(i) &&
                  (!(r = kt[i].exec(a)) ||
                    (s[i] && !(r = s[i](r))) ||
                    ((n = r.shift()),
                    o.push({ value: n, type: i, matches: r }),
                    (a = a.slice(n.length))));
              if (!n) break;
            }
            return t ? a.length : a ? Ht.error(e) : it(e, u).slice(0);
          }),
          (Ee = Ht.compile = function(e, t) {
            var n,
              r = [],
              o = [],
              i = at[e + " "];
            if (!i) {
              for (t || (t = Ne(e)), n = t.length; n--; )
                (i = Gt(t[n]))[et] ? r.push(i) : o.push(i);
              (i = at(
                e,
                (function(e, t) {
                  var n = t.length > 0,
                    r = e.length > 0,
                    o = function(o, i, a, u, s) {
                      var c,
                        l,
                        f,
                        d = 0,
                        h = "0",
                        m = o && [],
                        g = [],
                        p = Te,
                        v = o || (r && xe.find.TAG("*", s)),
                        b = (nt += null == p ? 1 : Math.random() || 0.1),
                        y = v.length;
                      for (
                        s && (Te = i !== Re && i);
                        h !== y && null != (c = v[h]);
                        h++
                      ) {
                        if (r && c) {
                          for (l = 0; (f = e[l++]); )
                            if (f(c, i, a)) {
                              u.push(c);
                              break;
                            }
                          s && (nt = b);
                        }
                        n && ((c = !f && c) && d--, o && m.push(c));
                      }
                      if (((d += h), n && h !== d)) {
                        for (l = 0; (f = t[l++]); ) f(m, g, i, a);
                        if (o) {
                          if (d > 0)
                            for (; h--; ) m[h] || g[h] || (g[h] = dt.call(u));
                          g = Xt(g);
                        }
                        mt.apply(u, g),
                          s &&
                            !o &&
                            g.length > 0 &&
                            d + t.length > 1 &&
                            Ht.uniqueSort(u);
                      }
                      return s && ((nt = b), (Te = p)), m;
                    };
                  return n ? Lt(o) : o;
                })(o, r)
              )).selector = e;
            }
            return i;
          }),
          (ke = Ht.select = function(e, t, n, r) {
            var o,
              i,
              a,
              u,
              s,
              c = "function" == typeof e && e,
              l = !r && Ne((e = c.selector || e));
            if (((n = n || []), 1 === l.length)) {
              if (
                (i = l[0] = l[0].slice(0)).length > 2 &&
                "ID" === (a = i[0]).type &&
                we.getById &&
                9 === t.nodeType &&
                Oe &&
                xe.relative[i[1].type]
              ) {
                if (
                  !(t = (xe.find.ID(a.matches[0].replace(Ot, Dt), t) || [])[0])
                )
                  return n;
                c && (t = t.parentNode), (e = e.slice(i.shift().value.length));
              }
              for (
                o = kt.needsContext.test(e) ? 0 : i.length;
                o-- && ((a = i[o]), !xe.relative[(u = a.type)]);

              )
                if (
                  (s = xe.find[u]) &&
                  (r = s(
                    a.matches[0].replace(Ot, Dt),
                    (Rt.test(i[0].type) && jt(t.parentNode)) || t
                  ))
                ) {
                  if ((i.splice(o, 1), !(e = r.length && $t(i))))
                    return mt.apply(n, r), n;
                  break;
                }
            }
            return (
              (c || Ee(e, l))(
                r,
                t,
                !Oe,
                n,
                (Rt.test(e) && jt(t.parentNode)) || t
              ),
              n
            );
          }),
          (we.sortStable =
            et
              .split("")
              .sort(ut)
              .join("") === et),
          (we.detectDuplicates = !!Me),
          _e(),
          (we.sortDetached = !0);
        var Jt = Array.isArray,
          Qt = function(e, t, n) {
            var r, o;
            if (!e) return 0;
            if (((n = n || e), void 0 !== e.length)) {
              for (r = 0, o = e.length; r < o; r++)
                if (!1 === t.call(n, e[r], r, e)) return 0;
            } else
              for (r in e)
                if (e.hasOwnProperty(r) && !1 === t.call(n, e[r], r, e))
                  return 0;
            return 1;
          },
          Zt = function(e, t, n) {
            var r, o;
            for (r = 0, o = e.length; r < o; r++)
              if (t.call(n, e[r], r, e)) return r;
            return -1;
          },
          en = {
            isArray: Jt,
            toArray: function(e) {
              var t,
                n,
                r = e;
              if (!Jt(e))
                for (r = [], t = 0, n = e.length; t < n; t++) r[t] = e[t];
              return r;
            },
            each: Qt,
            map: function(e, t) {
              var n = [];
              return (
                Qt(e, function(r, o) {
                  n.push(t(r, o, e));
                }),
                n
              );
            },
            filter: function(e, t) {
              var n = [];
              return (
                Qt(e, function(r, o) {
                  (t && !t(r, o, e)) || n.push(r);
                }),
                n
              );
            },
            indexOf: function(e, t) {
              var n, r;
              if (e)
                for (n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
              return -1;
            },
            reduce: function(e, t, n, r) {
              var o = 0;
              for (arguments.length < 3 && (n = e[0]); o < e.length; o++)
                n = t.call(r, n, e[o], o);
              return n;
            },
            findIndex: Zt,
            find: function(e, t, n) {
              var r = Zt(e, t, n);
              if (-1 !== r) return e[r];
            },
            last: function(e) {
              return e[e.length - 1];
            }
          },
          tn = /^\s*|\s*$/g,
          nn = function(e) {
            return null == e ? "" : ("" + e).replace(tn, "");
          },
          rn = function(e, t) {
            return t
              ? !("array" !== t || !en.isArray(e)) || typeof e === t
              : void 0 !== e;
          },
          on = function(e, t, n, r) {
            (r = r || this),
              e &&
                (n && (e = e[n]),
                en.each(e, function(e, o) {
                  if (!1 === t.call(r, e, o, n)) return !1;
                  on(e, t, n, r);
                }));
          },
          an = {
            trim: nn,
            isArray: en.isArray,
            is: rn,
            toArray: en.toArray,
            makeMap: function(e, t, n) {
              var r;
              for (
                t = t || ",",
                  "string" == typeof (e = e || []) && (e = e.split(t)),
                  n = n || {},
                  r = e.length;
                r--;

              )
                n[e[r]] = {};
              return n;
            },
            each: en.each,
            map: en.map,
            grep: en.filter,
            inArray: en.indexOf,
            hasOwn: function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            },
            extend: function(e, t) {
              for (var n, r, o, i = [], a = 2; a < arguments.length; a++)
                i[a - 2] = arguments[a];
              var u,
                s = arguments;
              for (n = 1, r = s.length; n < r; n++)
                for (o in (t = s[n]))
                  t.hasOwnProperty(o) && void 0 !== (u = t[o]) && (e[o] = u);
              return e;
            },
            create: function(e, t, n) {
              var r,
                o,
                i,
                a,
                u,
                s = 0;
              if (
                ((e = /^((static) )?([\w.]+)(:([\w.]+))?/.exec(e)),
                (i = e[3].match(/(^|\.)(\w+)$/i)[2]),
                !(o = this.createNS(e[3].replace(/\.\w+$/, ""), n))[i])
              ) {
                if ("static" === e[2])
                  return (
                    (o[i] = t),
                    void (this.onCreate && this.onCreate(e[2], e[3], o[i]))
                  );
                t[i] || ((t[i] = function() {}), (s = 1)),
                  (o[i] = t[i]),
                  this.extend(o[i].prototype, t),
                  e[5] &&
                    ((r = this.resolve(e[5]).prototype),
                    (a = e[5].match(/\.(\w+)$/i)[1]),
                    (u = o[i]),
                    (o[i] = s
                      ? function() {
                          return r[a].apply(this, arguments);
                        }
                      : function() {
                          return (this.parent = r[a]), u.apply(this, arguments);
                        }),
                    (o[i].prototype[i] = o[i]),
                    this.each(r, function(e, t) {
                      o[i].prototype[t] = r[t];
                    }),
                    this.each(t, function(e, t) {
                      r[t]
                        ? (o[i].prototype[t] = function() {
                            return (
                              (this.parent = r[t]), e.apply(this, arguments)
                            );
                          })
                        : t !== i && (o[i].prototype[t] = e);
                    })),
                  this.each(t.static, function(e, t) {
                    o[i][t] = e;
                  });
              }
            },
            walk: on,
            createNS: function(e, n) {
              var r, o;
              for (
                n = n || t.window, e = e.split("."), r = 0;
                r < e.length;
                r++
              )
                n[(o = e[r])] || (n[o] = {}), (n = n[o]);
              return n;
            },
            resolve: function(e, n) {
              var r, o;
              for (
                n = n || t.window, r = 0, o = (e = e.split(".")).length;
                r < o && (n = n[e[r]]);
                r++
              );
              return n;
            },
            explode: function(e, t) {
              return !e || rn(e, "array") ? e : en.map(e.split(t || ","), nn);
            },
            _addCacheSuffix: function(e) {
              var t = Le.cacheSuffix;
              return t && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e;
            }
          },
          un = t.document,
          sn = Array.prototype.push,
          cn = Array.prototype.slice,
          ln = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
          fn = Ze.Event,
          dn = an.makeMap("children,contents,next,prev"),
          hn = function(e) {
            return void 0 !== e;
          },
          mn = function(e) {
            return "string" == typeof e;
          },
          gn = function(e, t) {
            var n, r, o;
            for (
              o = (t = t || un).createElement("div"),
                n = t.createDocumentFragment(),
                o.innerHTML = e;
              (r = o.firstChild);

            )
              n.appendChild(r);
            return n;
          },
          pn = function(e, t, n, r) {
            var o;
            if (mn(t)) t = gn(t, Mn(e[0]));
            else if (t.length && !t.nodeType) {
              if (((t = Fn.makeArray(t)), r))
                for (o = t.length - 1; o >= 0; o--) pn(e, t[o], n, r);
              else for (o = 0; o < t.length; o++) pn(e, t[o], n, r);
              return e;
            }
            if (t.nodeType) for (o = e.length; o--; ) n.call(e[o], t);
            return e;
          },
          vn = function(e, t) {
            return (
              e && t && -1 !== (" " + e.className + " ").indexOf(" " + t + " ")
            );
          },
          bn = function(e, t, n) {
            var r, o;
            return (
              (t = Fn(t)[0]),
              e.each(function() {
                n && r === this.parentNode
                  ? o.appendChild(this)
                  : ((r = this.parentNode),
                    (o = t.cloneNode(!1)),
                    this.parentNode.insertBefore(o, this),
                    o.appendChild(this));
              }),
              e
            );
          },
          yn = an.makeMap(
            "fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom",
            " "
          ),
          Cn = an.makeMap(
            "checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected",
            " "
          ),
          wn = { for: "htmlFor", class: "className", readonly: "readOnly" },
          xn = { float: "cssFloat" },
          zn = {},
          Sn = {},
          Nn = function(e, t) {
            return new Fn.fn.init(e, t);
          },
          En = /^\s*|\s*$/g,
          kn = function(e) {
            return null == e ? "" : ("" + e).replace(En, "");
          },
          Tn = function(e, t) {
            var n, r, o, i;
            if (e)
              if (void 0 === (n = e.length)) {
                for (r in e)
                  if (
                    e.hasOwnProperty(r) &&
                    ((i = e[r]), !1 === t.call(i, r, i))
                  )
                    break;
              } else
                for (o = 0; o < n && ((i = e[o]), !1 !== t.call(i, o, i)); o++);
            return e;
          },
          An = function(e, t) {
            var n = [];
            return (
              Tn(e, function(e, r) {
                t(r, e) && n.push(r);
              }),
              n
            );
          },
          Mn = function(e) {
            return e ? (9 === e.nodeType ? e : e.ownerDocument) : un;
          };
        (Nn.fn = Nn.prototype = {
          constructor: Nn,
          selector: "",
          context: null,
          length: 0,
          init: function(e, n) {
            var r, o;
            if (!e) return this;
            if (e.nodeType)
              return (this.context = this[0] = e), (this.length = 1), this;
            if (n && n.nodeType) this.context = n;
            else {
              if (n) return Fn(e).attr(n);
              this.context = n = t.document;
            }
            if (mn(e)) {
              if (
                ((this.selector = e),
                !(r =
                  "<" === e.charAt(0) &&
                  ">" === e.charAt(e.length - 1) &&
                  e.length >= 3
                    ? [null, e, null]
                    : ln.exec(e)))
              )
                return Fn(n).find(e);
              if (r[1])
                for (o = gn(e, Mn(n)).firstChild; o; )
                  sn.call(this, o), (o = o.nextSibling);
              else {
                if (!(o = Mn(n).getElementById(r[2]))) return this;
                if (o.id !== r[2]) return this.find(e);
                (this.length = 1), (this[0] = o);
              }
            } else this.add(e, !1);
            return this;
          },
          toArray: function() {
            return an.toArray(this);
          },
          add: function(e, t) {
            var n, r;
            if (mn(e)) return this.add(Fn(e));
            if (!1 !== t)
              for (
                n = Fn.unique(this.toArray().concat(Fn.makeArray(e))),
                  this.length = n.length,
                  r = 0;
                r < n.length;
                r++
              )
                this[r] = n[r];
            else sn.apply(this, Fn.makeArray(e));
            return this;
          },
          attr: function(e, t) {
            var n,
              r = this;
            if ("object" == typeof e)
              Tn(e, function(e, t) {
                r.attr(e, t);
              });
            else {
              if (!hn(t)) {
                if (r[0] && 1 === r[0].nodeType) {
                  if ((n = zn[e]) && n.get) return n.get(r[0], e);
                  if (Cn[e]) return r.prop(e) ? e : void 0;
                  null === (t = r[0].getAttribute(e, 2)) && (t = void 0);
                }
                return t;
              }
              this.each(function() {
                var n;
                if (1 === this.nodeType) {
                  if ((n = zn[e]) && n.set) return void n.set(this, t);
                  null === t
                    ? this.removeAttribute(e, 2)
                    : this.setAttribute(e, t, 2);
                }
              });
            }
            return r;
          },
          removeAttr: function(e) {
            return this.attr(e, null);
          },
          prop: function(e, t) {
            var n = this;
            if ("object" == typeof (e = wn[e] || e))
              Tn(e, function(e, t) {
                n.prop(e, t);
              });
            else {
              if (!hn(t))
                return n[0] && n[0].nodeType && e in n[0] ? n[0][e] : t;
              this.each(function() {
                1 === this.nodeType && (this[e] = t);
              });
            }
            return n;
          },
          css: function(e, t) {
            var n,
              r,
              o = this,
              i = function(e) {
                return e.replace(/-(\D)/g, function(e, t) {
                  return t.toUpperCase();
                });
              },
              a = function(e) {
                return e.replace(/[A-Z]/g, function(e) {
                  return "-" + e;
                });
              };
            if ("object" == typeof e)
              Tn(e, function(e, t) {
                o.css(e, t);
              });
            else if (hn(t))
              (e = i(e)),
                "number" != typeof t || yn[e] || (t = t.toString() + "px"),
                o.each(function() {
                  var n = this.style;
                  if ((r = Sn[e]) && r.set) r.set(this, t);
                  else {
                    try {
                      this.style[xn[e] || e] = t;
                    } catch (e) {}
                    (null !== t && "" !== t) ||
                      (n.removeProperty
                        ? n.removeProperty(a(e))
                        : n.removeAttribute(e));
                  }
                });
            else {
              if (((n = o[0]), (r = Sn[e]) && r.get)) return r.get(n);
              if (!n.ownerDocument.defaultView)
                return n.currentStyle ? n.currentStyle[i(e)] : "";
              try {
                return n.ownerDocument.defaultView
                  .getComputedStyle(n, null)
                  .getPropertyValue(a(e));
              } catch (e) {
                return;
              }
            }
            return o;
          },
          remove: function() {
            for (var e, t = this.length; t--; )
              (e = this[t]),
                fn.clean(e),
                e.parentNode && e.parentNode.removeChild(e);
            return this;
          },
          empty: function() {
            for (var e, t = this.length; t--; )
              for (e = this[t]; e.firstChild; ) e.removeChild(e.firstChild);
            return this;
          },
          html: function(e) {
            var t;
            if (hn(e)) {
              t = this.length;
              try {
                for (; t--; ) this[t].innerHTML = e;
              } catch (n) {
                Fn(this[t])
                  .empty()
                  .append(e);
              }
              return this;
            }
            return this[0] ? this[0].innerHTML : "";
          },
          text: function(e) {
            var t;
            if (hn(e)) {
              for (t = this.length; t--; )
                "innerText" in this[t]
                  ? (this[t].innerText = e)
                  : (this[0].textContent = e);
              return this;
            }
            return this[0] ? this[0].innerText || this[0].textContent : "";
          },
          append: function() {
            return pn(this, arguments, function(e) {
              (1 === this.nodeType ||
                (this.host && 1 === this.host.nodeType)) &&
                this.appendChild(e);
            });
          },
          prepend: function() {
            return pn(
              this,
              arguments,
              function(e) {
                (1 === this.nodeType ||
                  (this.host && 1 === this.host.nodeType)) &&
                  this.insertBefore(e, this.firstChild);
              },
              !0
            );
          },
          before: function() {
            return this[0] && this[0].parentNode
              ? pn(this, arguments, function(e) {
                  this.parentNode.insertBefore(e, this);
                })
              : this;
          },
          after: function() {
            return this[0] && this[0].parentNode
              ? pn(
                  this,
                  arguments,
                  function(e) {
                    this.parentNode.insertBefore(e, this.nextSibling);
                  },
                  !0
                )
              : this;
          },
          appendTo: function(e) {
            return Fn(e).append(this), this;
          },
          prependTo: function(e) {
            return Fn(e).prepend(this), this;
          },
          replaceWith: function(e) {
            return this.before(e).remove();
          },
          wrap: function(e) {
            return bn(this, e);
          },
          wrapAll: function(e) {
            return bn(this, e, !0);
          },
          wrapInner: function(e) {
            return (
              this.each(function() {
                Fn(this)
                  .contents()
                  .wrapAll(e);
              }),
              this
            );
          },
          unwrap: function() {
            return this.parent().each(function() {
              Fn(this).replaceWith(this.childNodes);
            });
          },
          clone: function() {
            var e = [];
            return (
              this.each(function() {
                e.push(this.cloneNode(!0));
              }),
              Fn(e)
            );
          },
          addClass: function(e) {
            return this.toggleClass(e, !0);
          },
          removeClass: function(e) {
            return this.toggleClass(e, !1);
          },
          toggleClass: function(e, t) {
            var n = this;
            return "string" != typeof e
              ? n
              : (-1 !== e.indexOf(" ")
                  ? Tn(e.split(" "), function() {
                      n.toggleClass(this, t);
                    })
                  : n.each(function(n, r) {
                      var o, i;
                      (i = vn(r, e)) !== t &&
                        ((o = r.className),
                        i
                          ? (r.className = kn(
                              (" " + o + " ").replace(" " + e + " ", " ")
                            ))
                          : (r.className += o ? " " + e : e));
                    }),
                n);
          },
          hasClass: function(e) {
            return vn(this[0], e);
          },
          each: function(e) {
            return Tn(this, e);
          },
          on: function(e, t) {
            return this.each(function() {
              fn.bind(this, e, t);
            });
          },
          off: function(e, t) {
            return this.each(function() {
              fn.unbind(this, e, t);
            });
          },
          trigger: function(e) {
            return this.each(function() {
              "object" == typeof e
                ? fn.fire(this, e.type, e)
                : fn.fire(this, e);
            });
          },
          show: function() {
            return this.css("display", "");
          },
          hide: function() {
            return this.css("display", "none");
          },
          slice: function() {
            return new Fn(cn.apply(this, arguments));
          },
          eq: function(e) {
            return -1 === e ? this.slice(e) : this.slice(e, +e + 1);
          },
          first: function() {
            return this.eq(0);
          },
          last: function() {
            return this.eq(-1);
          },
          find: function(e) {
            var t,
              n,
              r = [];
            for (t = 0, n = this.length; t < n; t++) Fn.find(e, this[t], r);
            return Fn(r);
          },
          filter: function(e) {
            return Fn(
              "function" == typeof e
                ? An(this.toArray(), function(t, n) {
                    return e(n, t);
                  })
                : Fn.filter(e, this.toArray())
            );
          },
          closest: function(e) {
            var t = [];
            return (
              e instanceof Fn && (e = e[0]),
              this.each(function(n, r) {
                for (; r; ) {
                  if ("string" == typeof e && Fn(r).is(e)) {
                    t.push(r);
                    break;
                  }
                  if (r === e) {
                    t.push(r);
                    break;
                  }
                  r = r.parentNode;
                }
              }),
              Fn(t)
            );
          },
          offset: function(e) {
            var t,
              n,
              r,
              o,
              i = 0,
              a = 0;
            return e
              ? this.css(e)
              : ((t = this[0]) &&
                  ((r = (n = t.ownerDocument).documentElement),
                  t.getBoundingClientRect &&
                    ((i =
                      (o = t.getBoundingClientRect()).left +
                      (r.scrollLeft || n.body.scrollLeft) -
                      r.clientLeft),
                    (a =
                      o.top +
                      (r.scrollTop || n.body.scrollTop) -
                      r.clientTop))),
                { left: i, top: a });
          },
          push: sn,
          sort: Array.prototype.sort,
          splice: Array.prototype.splice
        }),
          an.extend(Nn, {
            extend: an.extend,
            makeArray: function(e) {
              return ((t = e) && t === t.window) || e.nodeType
                ? [e]
                : an.toArray(e);
              var t;
            },
            inArray: function(e, t) {
              var n;
              if (t.indexOf) return t.indexOf(e);
              for (n = t.length; n--; ) if (t[n] === e) return n;
              return -1;
            },
            isArray: an.isArray,
            each: Tn,
            trim: kn,
            grep: An,
            find: Ht,
            expr: Ht.selectors,
            unique: Ht.uniqueSort,
            text: Ht.getText,
            contains: Ht.contains,
            filter: function(e, t, n) {
              var r = t.length;
              for (n && (e = ":not(" + e + ")"); r--; )
                1 !== t[r].nodeType && t.splice(r, 1);
              return (t =
                1 === t.length
                  ? Fn.find.matchesSelector(t[0], e)
                    ? [t[0]]
                    : []
                  : Fn.find.matches(e, t));
            }
          });
        var _n = function(e, t, n) {
            var r = [],
              o = e[t];
            for (
              "string" != typeof n && n instanceof Fn && (n = n[0]);
              o && 9 !== o.nodeType;

            ) {
              if (void 0 !== n) {
                if (o === n) break;
                if ("string" == typeof n && Fn(o).is(n)) break;
              }
              1 === o.nodeType && r.push(o), (o = o[t]);
            }
            return r;
          },
          Rn = function(e, t, n, r) {
            var o = [];
            for (r instanceof Fn && (r = r[0]); e; e = e[t])
              if (!n || e.nodeType === n) {
                if (void 0 !== r) {
                  if (e === r) break;
                  if ("string" == typeof r && Fn(e).is(r)) break;
                }
                o.push(e);
              }
            return o;
          },
          Bn = function(e, t, n) {
            for (e = e[t]; e; e = e[t]) if (e.nodeType === n) return e;
            return null;
          };
        Tn(
          {
            parent: function(e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function(e) {
              return _n(e, "parentNode");
            },
            next: function(e) {
              return Bn(e, "nextSibling", 1);
            },
            prev: function(e) {
              return Bn(e, "previousSibling", 1);
            },
            children: function(e) {
              return Rn(e.firstChild, "nextSibling", 1);
            },
            contents: function(e) {
              return an.toArray(
                ("iframe" === e.nodeName
                  ? e.contentDocument || e.contentWindow.document
                  : e
                ).childNodes
              );
            }
          },
          function(e, t) {
            Nn.fn[e] = function(n) {
              var r = [];
              this.each(function() {
                var e = t.call(r, this, n, r);
                e && (Fn.isArray(e) ? r.push.apply(r, e) : r.push(e));
              }),
                this.length > 1 &&
                  (dn[e] || (r = Fn.unique(r)),
                  0 === e.indexOf("parents") && (r = r.reverse()));
              var o = Fn(r);
              return n ? o.filter(n) : o;
            };
          }
        ),
          Tn(
            {
              parentsUntil: function(e, t) {
                return _n(e, "parentNode", t);
              },
              nextUntil: function(e, t) {
                return Rn(e, "nextSibling", 1, t).slice(1);
              },
              prevUntil: function(e, t) {
                return Rn(e, "previousSibling", 1, t).slice(1);
              }
            },
            function(e, t) {
              Nn.fn[e] = function(n, r) {
                var o = [];
                this.each(function() {
                  var e = t.call(o, this, n, o);
                  e && (Fn.isArray(e) ? o.push.apply(o, e) : o.push(e));
                }),
                  this.length > 1 &&
                    ((o = Fn.unique(o)),
                    (0 !== e.indexOf("parents") && "prevUntil" !== e) ||
                      (o = o.reverse()));
                var i = Fn(o);
                return r ? i.filter(r) : i;
              };
            }
          ),
          (Nn.fn.is = function(e) {
            return !!e && this.filter(e).length > 0;
          }),
          (Nn.fn.init.prototype = Nn.fn),
          (Nn.overrideDefaults = function(e) {
            var t,
              n = function(r, o) {
                return (
                  (t = t || e()),
                  0 === arguments.length && (r = t.element),
                  o || (o = t.context),
                  new n.fn.init(r, o)
                );
              };
            return Fn.extend(n, this), n;
          });
        var On = function(e, t, n) {
          Tn(n, function(n, r) {
            (e[n] = e[n] || {}), (e[n][t] = r);
          });
        };
        Le.ie &&
          Le.ie < 8 &&
          (On(zn, "get", {
            maxlength: function(e) {
              var t = e.maxLength;
              if (2147483647 !== t) return t;
            },
            size: function(e) {
              var t = e.size;
              if (20 !== t) return t;
            },
            class: function(e) {
              return e.className;
            },
            style: function(e) {
              var t = e.style.cssText;
              if (0 !== t.length) return t;
            }
          }),
          On(zn, "set", {
            class: function(e, t) {
              e.className = t;
            },
            style: function(e, t) {
              e.style.cssText = t;
            }
          })),
          Le.ie &&
            Le.ie < 9 &&
            ((xn.float = "styleFloat"),
            On(Sn, "set", {
              opacity: function(e, t) {
                var n = e.style;
                null === t || "" === t
                  ? n.removeAttribute("filter")
                  : ((n.zoom = 1),
                    (n.filter = "alpha(opacity=" + 100 * t + ")"));
              }
            })),
          (Nn.attrHooks = zn),
          (Nn.cssHooks = Sn);
        var Dn,
          Hn,
          Pn,
          Ln,
          Vn,
          In,
          Fn = Nn,
          Un = function() {
            return jn(0, 0);
          },
          jn = function(e, t) {
            return { major: e, minor: t };
          },
          qn = {
            nu: jn,
            detect: function(e, t) {
              var n = String(t).toLowerCase();
              return 0 === e.length
                ? Un()
                : (function(e, t) {
                    var n = (function(e, t) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        if (r.test(t)) return r;
                      }
                    })(e, t);
                    if (!n) return { major: 0, minor: 0 };
                    var r = function(e) {
                      return Number(t.replace(n, "$" + e));
                    };
                    return jn(r(1), r(2));
                  })(e, n);
            },
            unknown: Un
          },
          $n = function(e, t) {
            return function() {
              return t === e;
            };
          },
          Wn = function(e) {
            var t = e.current;
            return {
              current: t,
              version: e.version,
              isEdge: $n("Edge", t),
              isChrome: $n("Chrome", t),
              isIE: $n("IE", t),
              isOpera: $n("Opera", t),
              isFirefox: $n("Firefox", t),
              isSafari: $n("Safari", t)
            };
          },
          Kn = {
            unknown: function() {
              return Wn({ current: void 0, version: qn.unknown() });
            },
            nu: Wn,
            edge: o("Edge"),
            chrome: o("Chrome"),
            ie: o("IE"),
            opera: o("Opera"),
            firefox: o("Firefox"),
            safari: o("Safari")
          },
          Xn = function(e, t) {
            return function() {
              return t === e;
            };
          },
          Yn = function(e) {
            var t = e.current;
            return {
              current: t,
              version: e.version,
              isWindows: Xn("Windows", t),
              isiOS: Xn("iOS", t),
              isAndroid: Xn("Android", t),
              isOSX: Xn("OSX", t),
              isLinux: Xn("Linux", t),
              isSolaris: Xn("Solaris", t),
              isFreeBSD: Xn("FreeBSD", t)
            };
          },
          Gn = {
            unknown: function() {
              return Yn({ current: void 0, version: qn.unknown() });
            },
            nu: Yn,
            windows: o("Windows"),
            ios: o("iOS"),
            android: o("Android"),
            linux: o("Linux"),
            osx: o("OSX"),
            solaris: o("Solaris"),
            freebsd: o("FreeBSD")
          },
          Jn = function(e, t) {
            var n = String(t).toLowerCase();
            return Y(e, function(e) {
              return e.search(n);
            });
          },
          Qn = function(e, t) {
            return Jn(e, t).map(function(e) {
              var n = qn.detect(e.versionRegexes, t);
              return { current: e.name, version: n };
            });
          },
          Zn = function(e, t) {
            return Jn(e, t).map(function(e) {
              var n = qn.detect(e.versionRegexes, t);
              return { current: e.name, version: n };
            });
          },
          er = function(e, t) {
            return -1 !== e.indexOf(t);
          },
          tr = function(e) {
            return e.replace(/^\s+|\s+$/g, "");
          },
          nr = function(e) {
            return e.replace(/\s+$/g, "");
          },
          rr = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
          or = function(e) {
            return function(t) {
              return er(t, e);
            };
          },
          ir = [
            {
              name: "Edge",
              versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
              search: function(e) {
                return (
                  er(e, "edge/") &&
                  er(e, "chrome") &&
                  er(e, "safari") &&
                  er(e, "applewebkit")
                );
              }
            },
            {
              name: "Chrome",
              versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, rr],
              search: function(e) {
                return er(e, "chrome") && !er(e, "chromeframe");
              }
            },
            {
              name: "IE",
              versionRegexes: [
                /.*?msie\ ?([0-9]+)\.([0-9]+).*/,
                /.*?rv:([0-9]+)\.([0-9]+).*/
              ],
              search: function(e) {
                return er(e, "msie") || er(e, "trident");
              }
            },
            {
              name: "Opera",
              versionRegexes: [rr, /.*?opera\/([0-9]+)\.([0-9]+).*/],
              search: or("opera")
            },
            {
              name: "Firefox",
              versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
              search: or("firefox")
            },
            {
              name: "Safari",
              versionRegexes: [rr, /.*?cpu os ([0-9]+)_([0-9]+).*/],
              search: function(e) {
                return (
                  (er(e, "safari") || er(e, "mobile/")) && er(e, "applewebkit")
                );
              }
            }
          ],
          ar = [
            {
              name: "Windows",
              search: or("win"),
              versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
            },
            {
              name: "iOS",
              search: function(e) {
                return er(e, "iphone") || er(e, "ipad");
              },
              versionRegexes: [
                /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
                /.*cpu os ([0-9]+)_([0-9]+).*/,
                /.*cpu iphone os ([0-9]+)_([0-9]+).*/
              ]
            },
            {
              name: "Android",
              search: or("android"),
              versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
            },
            {
              name: "OSX",
              search: or("os x"),
              versionRegexes: [/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]
            },
            { name: "Linux", search: or("linux"), versionRegexes: [] },
            { name: "Solaris", search: or("sunos"), versionRegexes: [] },
            { name: "FreeBSD", search: or("freebsd"), versionRegexes: [] }
          ],
          ur = { browsers: o(ir), oses: o(ar) },
          sr = function(e) {
            var t = ur.browsers(),
              n = ur.oses(),
              r = Qn(t, e).fold(Kn.unknown, Kn.nu),
              i = Zn(n, e).fold(Gn.unknown, Gn.nu),
              a = (function(e, t, n) {
                var r = e.isiOS() && !0 === /ipad/i.test(n),
                  i = e.isiOS() && !r,
                  a = e.isAndroid() && 3 === e.version.major,
                  u = e.isAndroid() && 4 === e.version.major,
                  s = r || a || (u && !0 === /mobile/i.test(n)),
                  c = e.isiOS() || e.isAndroid(),
                  l = c && !s,
                  f = t.isSafari() && e.isiOS() && !1 === /safari/i.test(n);
                return {
                  isiPad: o(r),
                  isiPhone: o(i),
                  isTablet: o(s),
                  isPhone: o(l),
                  isTouch: o(c),
                  isAndroid: e.isAndroid,
                  isiOS: e.isiOS,
                  isWebView: o(f)
                };
              })(i, r, e);
            return { browser: r, os: i, deviceType: a };
          },
          cr = {
            detect: ((Dn = function() {
              var e = t.navigator.userAgent;
              return sr(e);
            }),
            (Pn = !1),
            function() {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return Pn || ((Pn = !0), (Hn = Dn.apply(null, e))), Hn;
            })
          },
          lr = function(e) {
            if (null == e) throw new Error("Node cannot be null or undefined");
            return { dom: o(e) };
          },
          fr = {
            fromHtml: function(e, n) {
              var r = (n || t.document).createElement("div");
              if (
                ((r.innerHTML = e),
                !r.hasChildNodes() || r.childNodes.length > 1)
              )
                throw (t.console.error(
                  "HTML does not have a single root node",
                  e
                ),
                new Error("HTML must have a single root node"));
              return lr(r.childNodes[0]);
            },
            fromTag: function(e, n) {
              var r = (n || t.document).createElement(e);
              return lr(r);
            },
            fromText: function(e, n) {
              var r = (n || t.document).createTextNode(e);
              return lr(r);
            },
            fromDom: lr,
            fromPoint: function(e, t, n) {
              var r = e.dom();
              return A.from(r.elementFromPoint(t, n)).map(lr);
            }
          },
          dr = (t.Node.ATTRIBUTE_NODE,
          t.Node.CDATA_SECTION_NODE,
          t.Node.COMMENT_NODE,
          t.Node.DOCUMENT_NODE),
          hr = (t.Node.DOCUMENT_TYPE_NODE,
          t.Node.DOCUMENT_FRAGMENT_NODE,
          t.Node.ELEMENT_NODE),
          mr = t.Node.TEXT_NODE,
          gr = (t.Node.PROCESSING_INSTRUCTION_NODE,
          t.Node.ENTITY_REFERENCE_NODE,
          t.Node.ENTITY_NODE,
          t.Node.NOTATION_NODE,
          function(e) {
            return e.dom().nodeName.toLowerCase();
          }),
          pr = function(e) {
            return function(t) {
              return (
                (function(e) {
                  return e.dom().nodeType;
                })(t) === e
              );
            };
          },
          vr = pr(hr),
          br = pr(mr),
          yr = Object.keys,
          Cr = Object.hasOwnProperty,
          wr = function(e, t) {
            for (var n = yr(e), r = 0, o = n.length; r < o; r++) {
              var i = n[r];
              t(e[i], i, e);
            }
          },
          xr = function(e, t) {
            return zr(e, function(e, n, r) {
              return { k: n, v: t(e, n, r) };
            });
          },
          zr = function(e, t) {
            var n = {};
            return (
              wr(e, function(r, o) {
                var i = t(r, o, e);
                n[i.k] = i.v;
              }),
              n
            );
          },
          Sr = function(e, t) {
            var n = {},
              r = {};
            return (
              wr(e, function(e, o) {
                (t(e, o) ? n : r)[o] = e;
              }),
              { t: n, f: r }
            );
          },
          Nr = function(e, t) {
            return Er(e, t) ? A.from(e[t]) : A.none();
          },
          Er = function(e, t) {
            return Cr.call(e, t);
          },
          kr = function(e, n, r) {
            if (!(_(r) || D(r) || P(r)))
              throw (t.console.error(
                "Invalid call to Attr.set. Key ",
                n,
                ":: Value ",
                r,
                ":: Element ",
                e
              ),
              new Error("Attribute value was not simple"));
            e.setAttribute(n, r + "");
          },
          Tr = function(e, t, n) {
            kr(e.dom(), t, n);
          },
          Ar = function(e, t) {
            var n = e.dom();
            wr(t, function(e, t) {
              kr(n, t, e);
            });
          },
          Mr = function(e, t) {
            var n = e.dom().getAttribute(t);
            return null === n ? void 0 : n;
          },
          _r = function(e, t) {
            e.dom().removeAttribute(t);
          },
          Rr = function(e, n) {
            var r = e.dom(),
              o = t.window.getComputedStyle(r).getPropertyValue(n),
              i =
                "" !== o ||
                (function(e) {
                  var t = br(e) ? e.dom().parentNode : e.dom();
                  return null != t && t.ownerDocument.body.contains(t);
                })(e)
                  ? o
                  : Br(r, n);
            return null === i ? void 0 : i;
          },
          Br = function(e, t) {
            return (function(e) {
              return void 0 !== e.style;
            })(e)
              ? e.style.getPropertyValue(t)
              : "";
          },
          Or = function(e, t) {
            var n = e.dom(),
              r = Br(n, t);
            return A.from(r).filter(function(e) {
              return e.length > 0;
            });
          },
          Dr = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            return function() {
              for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              if (e.length !== t.length)
                throw new Error(
                  'Wrong number of arguments to struct. Expected "[' +
                    e.length +
                    ']", got ' +
                    t.length +
                    " arguments"
                );
              var r = {};
              return (
                j(e, function(e, n) {
                  r[e] = o(t[n]);
                }),
                r
              );
            };
          },
          Hr = function(e, t) {
            var n = [],
              r = function(e) {
                return n.push(e), t(e);
              },
              o = t(e);
            do {
              o = o.bind(r);
            } while (o.isSome());
            return n;
          },
          Pr = function() {
            return de.getOrDie("Node");
          },
          Lr = function(e, t, n) {
            return 0 != (e.compareDocumentPosition(t) & n);
          },
          Vr = function(e, t) {
            return Lr(e, t, Pr().DOCUMENT_POSITION_CONTAINED_BY);
          },
          Ir = hr,
          Fr = dr,
          Ur = function(e, t) {
            var n = e.dom();
            if (n.nodeType !== Ir) return !1;
            if (void 0 !== n.matches) return n.matches(t);
            if (void 0 !== n.msMatchesSelector) return n.msMatchesSelector(t);
            if (void 0 !== n.webkitMatchesSelector)
              return n.webkitMatchesSelector(t);
            if (void 0 !== n.mozMatchesSelector) return n.mozMatchesSelector(t);
            throw new Error("Browser lacks native selectors");
          },
          jr = function(e) {
            return (
              (e.nodeType !== Ir && e.nodeType !== Fr) ||
              0 === e.childElementCount
            );
          },
          qr = function(e, n) {
            var r = void 0 === n ? t.document : n.dom();
            return jr(r) ? [] : U(r.querySelectorAll(e), fr.fromDom);
          },
          $r = function(e, t) {
            return e.dom() === t.dom();
          },
          Wr = cr.detect().browser.isIE()
            ? function(e, t) {
                return Vr(e.dom(), t.dom());
              }
            : function(e, t) {
                var n = e.dom(),
                  r = t.dom();
                return n !== r && n.contains(r);
              },
          Kr = function(e) {
            return fr.fromDom(e.dom().ownerDocument);
          },
          Xr = function(e) {
            var t = e.dom();
            return A.from(t.parentNode).map(fr.fromDom);
          },
          Yr = function(e, t) {
            for (
              var n = H(t) ? t : o(!1), r = e.dom(), i = [];
              null !== r.parentNode && void 0 !== r.parentNode;

            ) {
              var a = r.parentNode,
                u = fr.fromDom(a);
              if ((i.push(u), !0 === n(u))) break;
              r = a;
            }
            return i;
          },
          Gr = function(e) {
            var t = e.dom();
            return A.from(t.previousSibling).map(fr.fromDom);
          },
          Jr = function(e) {
            var t = e.dom();
            return A.from(t.nextSibling).map(fr.fromDom);
          },
          Qr = function(e) {
            return re(Hr(e, Gr));
          },
          Zr = function(e) {
            return Hr(e, Jr);
          },
          eo = function(e) {
            var t = e.dom();
            return U(t.childNodes, fr.fromDom);
          },
          to = function(e, t) {
            var n = e.dom().childNodes;
            return A.from(n[t]).map(fr.fromDom);
          },
          no = function(e) {
            return to(e, 0);
          },
          ro = function(e) {
            return to(e, e.dom().childNodes.length - 1);
          },
          oo = (Dr("element", "offset"), cr.detect().browser),
          io = function(e) {
            return Y(e, vr);
          },
          ao = {
            getPos: function(e, t, n) {
              var r,
                o,
                i = 0,
                a = 0,
                u = e.ownerDocument;
              if (((n = n || e), t)) {
                if (
                  n === e &&
                  t.getBoundingClientRect &&
                  "static" === Rr(fr.fromDom(e), "position")
                )
                  return {
                    x: (i =
                      (o = t.getBoundingClientRect()).left +
                      (u.documentElement.scrollLeft || e.scrollLeft) -
                      u.documentElement.clientLeft),
                    y: (a =
                      o.top +
                      (u.documentElement.scrollTop || e.scrollTop) -
                      u.documentElement.clientTop)
                  };
                for (r = t; r && r !== n && r.nodeType; )
                  (i += r.offsetLeft || 0),
                    (a += r.offsetTop || 0),
                    (r = r.offsetParent);
                for (r = t.parentNode; r && r !== n && r.nodeType; )
                  (i -= r.scrollLeft || 0),
                    (a -= r.scrollTop || 0),
                    (r = r.parentNode);
                a += (function(e) {
                  return oo.isFirefox() && "table" === gr(e)
                    ? io(eo(e))
                        .filter(function(e) {
                          return "caption" === gr(e);
                        })
                        .bind(function(e) {
                          return io(Zr(e)).map(function(t) {
                            var n = t.dom().offsetTop,
                              r = e.dom().offsetTop,
                              o = e.dom().offsetHeight;
                            return n <= r ? -o : 0;
                          });
                        })
                        .getOr(0)
                    : 0;
                })(fr.fromDom(t));
              }
              return { x: i, y: a };
            }
          },
          uo = function(e) {
            var n = A.none(),
              r = [],
              o = function(e) {
                i() ? u(e) : r.push(e);
              },
              i = function() {
                return n.isSome();
              },
              a = function(e) {
                j(e, u);
              },
              u = function(e) {
                n.each(function(n) {
                  t.setTimeout(function() {
                    e(n);
                  }, 0);
                });
              };
            return (
              e(function(e) {
                (n = A.some(e)), a(r), (r = []);
              }),
              {
                get: o,
                map: function(e) {
                  return uo(function(t) {
                    o(function(n) {
                      t(e(n));
                    });
                  });
                },
                isReady: i
              }
            );
          },
          so = {
            nu: uo,
            pure: function(e) {
              return uo(function(t) {
                t(e);
              });
            }
          },
          co = function(e) {
            var n = function(n) {
                var r;
                e(
                  ((r = n),
                  function() {
                    for (var e = [], n = 0; n < arguments.length; n++)
                      e[n] = arguments[n];
                    var o = this;
                    t.setTimeout(function() {
                      r.apply(o, e);
                    }, 0);
                  })
                );
              },
              r = function() {
                return so.nu(n);
              };
            return {
              map: function(e) {
                return co(function(t) {
                  n(function(n) {
                    var r = e(n);
                    t(r);
                  });
                });
              },
              bind: function(e) {
                return co(function(t) {
                  n(function(n) {
                    e(n).get(t);
                  });
                });
              },
              anonBind: function(e) {
                return co(function(t) {
                  n(function(n) {
                    e.get(t);
                  });
                });
              },
              toLazy: r,
              toCached: function() {
                var e = null;
                return co(function(t) {
                  null === e && (e = r()), e.get(t);
                });
              },
              get: n
            };
          },
          lo = {
            nu: co,
            pure: function(e) {
              return co(function(t) {
                t(e);
              });
            }
          },
          fo = function(e, t) {
            return t(function(t) {
              var n = [],
                r = 0;
              0 === e.length
                ? t([])
                : j(e, function(o, i) {
                    o.get(
                      (function(o) {
                        return function(i) {
                          (n[o] = i), ++r >= e.length && t(n);
                        };
                      })(i)
                    );
                  });
            });
          },
          ho = function(e) {
            return fo(e, lo.nu);
          },
          mo = function(e) {
            return {
              is: function(t) {
                return e === t;
              },
              isValue: z,
              isError: x,
              getOr: o(e),
              getOrThunk: o(e),
              getOrDie: o(e),
              or: function(t) {
                return mo(e);
              },
              orThunk: function(t) {
                return mo(e);
              },
              fold: function(t, n) {
                return n(e);
              },
              map: function(t) {
                return mo(t(e));
              },
              mapError: function(t) {
                return mo(e);
              },
              each: function(t) {
                t(e);
              },
              bind: function(t) {
                return t(e);
              },
              exists: function(t) {
                return t(e);
              },
              forall: function(t) {
                return t(e);
              },
              toOption: function() {
                return A.some(e);
              }
            };
          },
          go = function(e) {
            return {
              is: x,
              isValue: x,
              isError: z,
              getOr: i,
              getOrThunk: function(e) {
                return e();
              },
              getOrDie: function() {
                return w(String(e))();
              },
              or: function(e) {
                return e;
              },
              orThunk: function(e) {
                return e();
              },
              fold: function(t, n) {
                return t(e);
              },
              map: function(t) {
                return go(e);
              },
              mapError: function(t) {
                return go(t(e));
              },
              each: n,
              bind: function(t) {
                return go(e);
              },
              exists: x,
              forall: z,
              toOption: A.none
            };
          },
          po = {
            value: mo,
            error: go,
            fromOption: function(e, t) {
              return e.fold(function() {
                return go(t);
              }, mo);
            }
          },
          vo = function(e) {
            return function(t) {
              return !!t && t.nodeType === e;
            };
          },
          bo = vo(1),
          yo = function(e) {
            var t = e.toLowerCase().split(" ");
            return function(e) {
              var n, r;
              if (e && e.nodeType)
                for (r = e.nodeName.toLowerCase(), n = 0; n < t.length; n++)
                  if (r === t[n]) return !0;
              return !1;
            };
          },
          Co = function(e) {
            return function(t) {
              if (bo(t)) {
                if (t.contentEditable === e) return !0;
                if (t.getAttribute("data-mce-contenteditable") === e) return !0;
              }
              return !1;
            };
          },
          wo = vo(3),
          xo = vo(8),
          zo = vo(9),
          So = vo(11),
          No = yo("br"),
          Eo = Co("true"),
          ko = Co("false"),
          To = {
            isText: wo,
            isElement: bo,
            isComment: xo,
            isDocument: zo,
            isDocumentFragment: So,
            isBr: No,
            isContentEditableTrue: Eo,
            isContentEditableFalse: ko,
            matchNodeNames: yo,
            hasPropValue: function(e, t) {
              return function(n) {
                return bo(n) && n[e] === t;
              };
            },
            hasAttribute: function(e, t) {
              return function(t) {
                return bo(t) && t.hasAttribute(e);
              };
            },
            hasAttributeValue: function(e, t) {
              return function(n) {
                return bo(n) && n.getAttribute(e) === t;
              };
            },
            matchStyleValues: function(e, t) {
              var n = t.toLowerCase().split(" ");
              return function(t) {
                var r;
                if (bo(t))
                  for (r = 0; r < n.length; r++) {
                    var o = t.ownerDocument.defaultView.getComputedStyle(
                      t,
                      null
                    );
                    if ((o ? o.getPropertyValue(e) : null) === n[r]) return !0;
                  }
                return !1;
              };
            },
            isBogus: function(e) {
              return bo(e) && e.hasAttribute("data-mce-bogus");
            },
            isBogusAll: function(e) {
              return bo(e) && "all" === e.getAttribute("data-mce-bogus");
            },
            isTable: function(e) {
              return bo(e) && "TABLE" === e.tagName;
            }
          },
          Ao = (function() {
            function e(e, t) {
              (this.node = e),
                (this.rootNode = t),
                (this.current = this.current.bind(this)),
                (this.next = this.next.bind(this)),
                (this.prev = this.prev.bind(this)),
                (this.prev2 = this.prev2.bind(this));
            }
            return (
              (e.prototype.current = function() {
                return this.node;
              }),
              (e.prototype.next = function(e) {
                return (
                  (this.node = this.findSibling(
                    this.node,
                    "firstChild",
                    "nextSibling",
                    e
                  )),
                  this.node
                );
              }),
              (e.prototype.prev = function(e) {
                return (
                  (this.node = this.findSibling(
                    this.node,
                    "lastChild",
                    "previousSibling",
                    e
                  )),
                  this.node
                );
              }),
              (e.prototype.prev2 = function(e) {
                return (
                  (this.node = this.findPreviousNode(
                    this.node,
                    "lastChild",
                    "previousSibling",
                    e
                  )),
                  this.node
                );
              }),
              (e.prototype.findSibling = function(e, t, n, r) {
                var o, i;
                if (e) {
                  if (!r && e[t]) return e[t];
                  if (e !== this.rootNode) {
                    if ((o = e[n])) return o;
                    for (
                      i = e.parentNode;
                      i && i !== this.rootNode;
                      i = i.parentNode
                    )
                      if ((o = i[n])) return o;
                  }
                }
              }),
              (e.prototype.findPreviousNode = function(e, t, n, r) {
                var o, i, a;
                if (e) {
                  if (((o = e[n]), this.rootNode && o === this.rootNode))
                    return;
                  if (o) {
                    if (!r) for (a = o[t]; a; a = a[t]) if (!a[t]) return a;
                    return o;
                  }
                  if ((i = e.parentNode) && i !== this.rootNode) return i;
                }
              }),
              e
            );
          })(),
          Mo = function(e) {
            var t;
            return function(n) {
              return (t = t || ie(e, o(!0))).hasOwnProperty(gr(n));
            };
          },
          _o = Mo(["h1", "h2", "h3", "h4", "h5", "h6"]),
          Ro = Mo([
            "article",
            "aside",
            "details",
            "div",
            "dt",
            "figcaption",
            "footer",
            "form",
            "fieldset",
            "header",
            "hgroup",
            "html",
            "main",
            "nav",
            "section",
            "summary",
            "body",
            "p",
            "dl",
            "multicol",
            "dd",
            "figure",
            "address",
            "center",
            "blockquote",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "listing",
            "xmp",
            "pre",
            "plaintext",
            "menu",
            "dir",
            "ul",
            "ol",
            "li",
            "hr",
            "table",
            "tbody",
            "thead",
            "tfoot",
            "th",
            "tr",
            "td",
            "caption"
          ]),
          Bo = function(e) {
            return vr(e) && !Ro(e);
          },
          Oo = function(e) {
            return vr(e) && "br" === gr(e);
          },
          Do = Mo([
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "p",
            "div",
            "address",
            "pre",
            "form",
            "blockquote",
            "center",
            "dir",
            "fieldset",
            "header",
            "footer",
            "article",
            "section",
            "hgroup",
            "aside",
            "nav",
            "figure"
          ]),
          Ho = Mo(["ul", "ol", "dl"]),
          Po = Mo(["li", "dd", "dt"]),
          Lo = Mo([
            "area",
            "base",
            "basefont",
            "br",
            "col",
            "frame",
            "hr",
            "img",
            "input",
            "isindex",
            "link",
            "meta",
            "param",
            "embed",
            "source",
            "wbr",
            "track"
          ]),
          Vo = Mo(["thead", "tbody", "tfoot"]),
          Io = Mo(["td", "th"]),
          Fo = Mo(["pre", "script", "textarea", "style"]),
          Uo = function(e) {
            return (
              e &&
              "SPAN" === e.tagName &&
              "bookmark" === e.getAttribute("data-mce-type")
            );
          },
          jo = function(e, t) {
            var n,
              r = t.childNodes;
            if (!To.isElement(t) || !Uo(t)) {
              for (n = r.length - 1; n >= 0; n--) jo(e, r[n]);
              if (!1 === To.isDocument(t)) {
                if (To.isText(t) && t.nodeValue.length > 0) {
                  var o = an.trim(t.nodeValue).length;
                  if (e.isBlock(t.parentNode) || o > 0) return;
                  if (
                    0 === o &&
                    (function(e) {
                      var t =
                          e.previousSibling &&
                          "SPAN" === e.previousSibling.nodeName,
                        n = e.nextSibling && "SPAN" === e.nextSibling.nodeName;
                      return t && n;
                    })(t)
                  )
                    return;
                } else if (
                  To.isElement(t) &&
                  (1 === (r = t.childNodes).length &&
                    Uo(r[0]) &&
                    t.parentNode.insertBefore(r[0], t),
                  r.length || Lo(fr.fromDom(t)))
                )
                  return;
                e.remove(t);
              }
              return t;
            }
          },
          qo = { trimNode: jo },
          $o = an.makeMap,
          Wo = /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
          Ko = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
          Xo = /[<>&\"\']/g,
          Yo = /&#([a-z0-9]+);?|&([a-z0-9]+);/gi,
          Go = {
            128: "€",
            130: "‚",
            131: "ƒ",
            132: "„",
            133: "…",
            134: "†",
            135: "‡",
            136: "ˆ",
            137: "‰",
            138: "Š",
            139: "‹",
            140: "Œ",
            142: "Ž",
            145: "‘",
            146: "’",
            147: "“",
            148: "”",
            149: "•",
            150: "–",
            151: "—",
            152: "˜",
            153: "™",
            154: "š",
            155: "›",
            156: "œ",
            158: "ž",
            159: "Ÿ"
          };
        (Vn = {
          '"': "&quot;",
          "'": "&#39;",
          "<": "&lt;",
          ">": "&gt;",
          "&": "&amp;",
          "`": "&#96;"
        }),
          (In = {
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&quot;": '"',
            "&apos;": "'"
          });
        var Jo = function(e, t) {
          var n,
            r,
            o,
            i = {};
          if (e) {
            for (e = e.split(","), t = t || 10, n = 0; n < e.length; n += 2)
              (r = String.fromCharCode(parseInt(e[n], t))),
                Vn[r] || ((o = "&" + e[n + 1] + ";"), (i[r] = o), (i[o] = r));
            return i;
          }
        };
        Ln = Jo(
          "50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",
          32
        );
        var Qo = function(e, t) {
            return e.replace(t ? Wo : Ko, function(e) {
              return Vn[e] || e;
            });
          },
          Zo = function(e, t) {
            return e.replace(t ? Wo : Ko, function(e) {
              return e.length > 1
                ? "&#" +
                    (1024 * (e.charCodeAt(0) - 55296) +
                      (e.charCodeAt(1) - 56320) +
                      65536) +
                    ";"
                : Vn[e] || "&#" + e.charCodeAt(0) + ";";
            });
          },
          ei = function(e, t, n) {
            return (
              (n = n || Ln),
              e.replace(t ? Wo : Ko, function(e) {
                return Vn[e] || n[e] || e;
              })
            );
          },
          ti = {
            encodeRaw: Qo,
            encodeAllRaw: function(e) {
              return ("" + e).replace(Xo, function(e) {
                return Vn[e] || e;
              });
            },
            encodeNumeric: Zo,
            encodeNamed: ei,
            getEncodeFunc: function(e, t) {
              var n = Jo(t) || Ln,
                r = $o(e.replace(/\+/g, ","));
              return r.named && r.numeric
                ? function(e, t) {
                    return e.replace(t ? Wo : Ko, function(e) {
                      return void 0 !== Vn[e]
                        ? Vn[e]
                        : void 0 !== n[e]
                        ? n[e]
                        : e.length > 1
                        ? "&#" +
                          (1024 * (e.charCodeAt(0) - 55296) +
                            (e.charCodeAt(1) - 56320) +
                            65536) +
                          ";"
                        : "&#" + e.charCodeAt(0) + ";";
                    });
                  }
                : r.named
                ? t
                  ? function(e, t) {
                      return ei(e, t, n);
                    }
                  : ei
                : r.numeric
                ? Zo
                : Qo;
            },
            decode: function(e) {
              return e.replace(Yo, function(e, t) {
                return t
                  ? (t =
                      "x" === t.charAt(0).toLowerCase()
                        ? parseInt(t.substr(1), 16)
                        : parseInt(t, 10)) > 65535
                    ? ((t -= 65536),
                      String.fromCharCode(
                        55296 + (t >> 10),
                        56320 + (1023 & t)
                      ))
                    : Go[t] || String.fromCharCode(t)
                  : In[e] ||
                      Ln[e] ||
                      ((n = e),
                      ((r = fr.fromTag("div").dom()).innerHTML = n),
                      r.textContent || r.innerText || n);
                var n, r;
              });
            }
          },
          ni = {},
          ri = {},
          oi = an.makeMap,
          ii = an.each,
          ai = an.extend,
          ui = an.explode,
          si = an.inArray,
          ci = function(e, t) {
            return (e = an.trim(e)) ? e.split(t || " ") : [];
          },
          li = function(e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              u = {},
              s = function(e, n, r) {
                var o,
                  i,
                  a,
                  s = function(e, t) {
                    var n,
                      r,
                      o = {};
                    for (n = 0, r = e.length; n < r; n++) o[e[n]] = t || {};
                    return o;
                  };
                for (
                  n = n || "",
                    "string" == typeof (r = r || []) && (r = ci(r)),
                    o = (e = ci(e)).length;
                  o--;

                )
                  (a = {
                    attributes: s((i = ci([t, n].join(" ")))),
                    attributesOrder: i,
                    children: s(r, ri)
                  }),
                    (u[e[o]] = a);
              },
              c = function(e, t) {
                var n, r, o, i;
                for (n = (e = ci(e)).length, t = ci(t); n--; )
                  for (r = u[e[n]], o = 0, i = t.length; o < i; o++)
                    (r.attributes[t[o]] = {}), r.attributesOrder.push(t[o]);
              };
            return ni[e]
              ? ni[e]
              : ((t = "id accesskey class dir lang style tabindex title role"),
                (n =
                  "address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul"),
                (r =
                  "a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment"),
                "html4" !== e &&
                  ((t +=
                    " contenteditable contextmenu draggable dropzone hidden spellcheck translate"),
                  (n +=
                    " article aside details dialog figure main header footer hgroup section nav"),
                  (r +=
                    " audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen")),
                "html5-strict" !== e &&
                  ((t += " xml:lang"),
                  (r = [
                    r,
                    (a = "acronym applet basefont big font strike tt")
                  ].join(" ")),
                  ii(ci(a), function(e) {
                    s(e, "", r);
                  }),
                  (n = [n, (i = "center dir isindex noframes")].join(" ")),
                  (o = [n, r].join(" ")),
                  ii(ci(i), function(e) {
                    s(e, "", o);
                  })),
                (o = o || [n, r].join(" ")),
                s("html", "manifest", "head body"),
                s(
                  "head",
                  "",
                  "base command link meta noscript script style title"
                ),
                s("title hr noscript br"),
                s("base", "href target"),
                s("link", "href rel media hreflang type sizes hreflang"),
                s("meta", "name http-equiv content charset"),
                s("style", "media type scoped"),
                s("script", "src async defer type charset"),
                s(
                  "body",
                  "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload",
                  o
                ),
                s("address dt dd div caption", "", o),
                s(
                  "h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn",
                  "",
                  r
                ),
                s("blockquote", "cite", o),
                s("ol", "reversed start type", "li"),
                s("ul", "", "li"),
                s("li", "value", o),
                s("dl", "", "dt dd"),
                s("a", "href target rel media hreflang type", r),
                s("q", "cite", r),
                s("ins del", "cite datetime", o),
                s("img", "src sizes srcset alt usemap ismap width height"),
                s("iframe", "src name width height", o),
                s("embed", "src type width height"),
                s(
                  "object",
                  "data type typemustmatch name usemap form width height",
                  [o, "param"].join(" ")
                ),
                s("param", "name value"),
                s("map", "name", [o, "area"].join(" ")),
                s(
                  "area",
                  "alt coords shape href target rel media hreflang type"
                ),
                s(
                  "table",
                  "border",
                  "caption colgroup thead tfoot tbody tr" +
                    ("html4" === e ? " col" : "")
                ),
                s("colgroup", "span", "col"),
                s("col", "span"),
                s("tbody thead tfoot", "", "tr"),
                s("tr", "", "td th"),
                s("td", "colspan rowspan headers", o),
                s("th", "colspan rowspan headers scope abbr", o),
                s(
                  "form",
                  "accept-charset action autocomplete enctype method name novalidate target",
                  o
                ),
                s("fieldset", "disabled form name", [o, "legend"].join(" ")),
                s("label", "form for", r),
                s(
                  "input",
                  "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"
                ),
                s(
                  "button",
                  "disabled form formaction formenctype formmethod formnovalidate formtarget name type value",
                  "html4" === e ? o : r
                ),
                s(
                  "select",
                  "disabled form multiple name required size",
                  "option optgroup"
                ),
                s("optgroup", "disabled label", "option"),
                s("option", "disabled label selected value"),
                s(
                  "textarea",
                  "cols dirname disabled form maxlength name readonly required rows wrap"
                ),
                s("menu", "type label", [o, "li"].join(" ")),
                s("noscript", "", o),
                "html4" !== e &&
                  (s("wbr"),
                  s("ruby", "", [r, "rt rp"].join(" ")),
                  s("figcaption", "", o),
                  s("mark rt rp summary bdi", "", r),
                  s("canvas", "width height", o),
                  s(
                    "video",
                    "src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered",
                    [o, "track source"].join(" ")
                  ),
                  s(
                    "audio",
                    "src crossorigin preload autoplay mediagroup loop muted controls buffered volume",
                    [o, "track source"].join(" ")
                  ),
                  s("picture", "", "img source"),
                  s("source", "src srcset type media sizes"),
                  s("track", "kind src srclang label default"),
                  s("datalist", "", [r, "option"].join(" ")),
                  s("article section nav aside main header footer", "", o),
                  s("hgroup", "", "h1 h2 h3 h4 h5 h6"),
                  s("figure", "", [o, "figcaption"].join(" ")),
                  s("time", "datetime", r),
                  s("dialog", "open", o),
                  s(
                    "command",
                    "type label icon disabled checked radiogroup command"
                  ),
                  s("output", "for form name", r),
                  s("progress", "value max", r),
                  s("meter", "value min max low high optimum", r),
                  s("details", "open", [o, "summary"].join(" ")),
                  s(
                    "keygen",
                    "autofocus challenge disabled form keytype name"
                  )),
                "html5-strict" !== e &&
                  (c("script", "language xml:space"),
                  c("style", "xml:space"),
                  c(
                    "object",
                    "declare classid code codebase codetype archive standby align border hspace vspace"
                  ),
                  c("embed", "align name hspace vspace"),
                  c("param", "valuetype type"),
                  c("a", "charset name rev shape coords"),
                  c("br", "clear"),
                  c(
                    "applet",
                    "codebase archive code object alt name width height align hspace vspace"
                  ),
                  c("img", "name longdesc align border hspace vspace"),
                  c(
                    "iframe",
                    "longdesc frameborder marginwidth marginheight scrolling align"
                  ),
                  c("font basefont", "size color face"),
                  c("input", "usemap align"),
                  c("select", "onchange"),
                  c("textarea"),
                  c("h1 h2 h3 h4 h5 h6 div p legend caption", "align"),
                  c("ul", "type compact"),
                  c("li", "type"),
                  c("ol dl menu dir", "compact"),
                  c("pre", "width xml:space"),
                  c("hr", "align noshade size width"),
                  c("isindex", "prompt"),
                  c(
                    "table",
                    "summary width frame rules cellspacing cellpadding align bgcolor"
                  ),
                  c("col", "width align char charoff valign"),
                  c("colgroup", "width align char charoff valign"),
                  c("thead", "align char charoff valign"),
                  c("tr", "align char charoff valign bgcolor"),
                  c(
                    "th",
                    "axis align char charoff valign nowrap bgcolor width height"
                  ),
                  c("form", "accept"),
                  c(
                    "td",
                    "abbr axis scope align char charoff valign nowrap bgcolor width height"
                  ),
                  c("tfoot", "align char charoff valign"),
                  c("tbody", "align char charoff valign"),
                  c("area", "nohref"),
                  c("body", "background bgcolor text link vlink alink")),
                "html4" !== e &&
                  (c("input button select textarea", "autofocus"),
                  c("input textarea", "placeholder"),
                  c("a", "download"),
                  c("link script img", "crossorigin"),
                  c("iframe", "sandbox seamless allowfullscreen")),
                ii(ci("a form meter progress dfn"), function(e) {
                  u[e] && delete u[e].children[e];
                }),
                delete u.caption.children.table,
                delete u.script,
                (ni[e] = u),
                u);
          },
          fi = function(e, t) {
            var n;
            return (
              e &&
                ((n = {}),
                "string" == typeof e && (e = { "*": e }),
                ii(e, function(e, r) {
                  n[r] = n[r.toUpperCase()] =
                    "map" === t ? oi(e, /[, ]/) : ui(e, /[, ]/);
                })),
              n
            );
          };
        function di(e) {
          var t,
            n,
            r,
            o,
            i,
            a,
            u,
            s,
            c,
            l,
            f,
            d,
            h,
            m = {},
            g = {},
            p = [],
            v = {},
            b = {},
            y = function(t, n, r) {
              var o = e[t];
              return (
                o
                  ? (o = oi(o, /[, ]/, oi(o.toUpperCase(), /[, ]/)))
                  : (o = ni[t]) ||
                    ((o = oi(n, " ", oi(n.toUpperCase(), " "))),
                    (o = ai(o, r)),
                    (ni[t] = o)),
                o
              );
            };
          (r = li((e = e || {}).schema)),
            !1 === e.verify_html && (e.valid_elements = "*[*]"),
            (t = fi(e.valid_styles)),
            (n = fi(e.invalid_styles, "map")),
            (s = fi(e.valid_classes, "map")),
            (o = y(
              "whitespace_elements",
              "pre script noscript style textarea video audio iframe object code"
            )),
            (i = y(
              "self_closing_elements",
              "colgroup dd dt li option p td tfoot th thead tr"
            )),
            (a = y(
              "short_ended_elements",
              "area base basefont br col frame hr img input isindex link meta param embed source wbr track"
            )),
            (u = y(
              "boolean_attributes",
              "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"
            )),
            (l = y(
              "non_empty_elements",
              "td th iframe video audio object script pre code",
              a
            )),
            (f = y("move_caret_before_on_enter_elements", "table", l)),
            (d = y(
              "text_block_elements",
              "h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"
            )),
            (c = y(
              "block_elements",
              "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary",
              d
            )),
            (h = y(
              "text_inline_elements",
              "span strong b em i font strike u var cite dfn code mark q sup sub samp"
            )),
            ii(
              (
                e.special ||
                "script noscript noframes noembed title style textarea xmp"
              ).split(" "),
              function(e) {
                b[e] = new RegExp("</" + e + "[^>]*>", "gi");
              }
            );
          var C = function(e) {
              return new RegExp("^" + e.replace(/([?+*])/g, ".$1") + "$");
            },
            w = function(e) {
              var t,
                n,
                r,
                o,
                i,
                a,
                u,
                s,
                c,
                l,
                f,
                d,
                h,
                g,
                v,
                b,
                y,
                w,
                x,
                z = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)\])?$/,
                S = /^([!\-])?(\w+[\\:]:\w+|[^=:<]+)?(?:([=:<])(.*))?$/,
                N = /[*?+]/;
              if (e)
                for (
                  e = ci(e, ","),
                    m["@"] &&
                      ((b = m["@"].attributes), (y = m["@"].attributesOrder)),
                    t = 0,
                    n = e.length;
                  t < n;
                  t++
                )
                  if ((i = z.exec(e[t]))) {
                    if (
                      ((g = i[1]),
                      (c = i[2]),
                      (v = i[3]),
                      (s = i[5]),
                      (a = { attributes: (d = {}), attributesOrder: (h = []) }),
                      "#" === g && (a.paddEmpty = !0),
                      "-" === g && (a.removeEmpty = !0),
                      "!" === i[4] && (a.removeEmptyAttrs = !0),
                      b)
                    ) {
                      for (w in b) d[w] = b[w];
                      h.push.apply(h, y);
                    }
                    if (s)
                      for (r = 0, o = (s = ci(s, "|")).length; r < o; r++)
                        if ((i = S.exec(s[r]))) {
                          if (
                            ((u = {}),
                            (f = i[1]),
                            (l = i[2].replace(/[\\:]:/g, ":")),
                            (g = i[3]),
                            (x = i[4]),
                            "!" === f &&
                              ((a.attributesRequired =
                                a.attributesRequired || []),
                              a.attributesRequired.push(l),
                              (u.required = !0)),
                            "-" === f)
                          ) {
                            delete d[l], h.splice(si(h, l), 1);
                            continue;
                          }
                          g &&
                            ("=" === g &&
                              ((a.attributesDefault =
                                a.attributesDefault || []),
                              a.attributesDefault.push({ name: l, value: x }),
                              (u.defaultValue = x)),
                            ":" === g &&
                              ((a.attributesForced = a.attributesForced || []),
                              a.attributesForced.push({ name: l, value: x }),
                              (u.forcedValue = x)),
                            "<" === g && (u.validValues = oi(x, "?"))),
                            N.test(l)
                              ? ((a.attributePatterns =
                                  a.attributePatterns || []),
                                (u.pattern = C(l)),
                                a.attributePatterns.push(u))
                              : (d[l] || h.push(l), (d[l] = u));
                        }
                    b || "@" !== c || ((b = d), (y = h)),
                      v && ((a.outputName = c), (m[v] = a)),
                      N.test(c) ? ((a.pattern = C(c)), p.push(a)) : (m[c] = a);
                  }
            },
            x = function(e) {
              (m = {}),
                (p = []),
                w(e),
                ii(r, function(e, t) {
                  g[t] = e.children;
                });
            },
            z = function(e) {
              var t = /^(~)?(.+)$/;
              e &&
                ((ni.text_block_elements = ni.block_elements = null),
                ii(ci(e, ","), function(e) {
                  var n = t.exec(e),
                    r = "~" === n[1],
                    o = r ? "span" : "div",
                    i = n[2];
                  if (
                    ((g[i] = g[o]),
                    (v[i] = o),
                    r || ((c[i.toUpperCase()] = {}), (c[i] = {})),
                    !m[i])
                  ) {
                    var a = m[o];
                    delete (a = ai({}, a)).removeEmptyAttrs,
                      delete a.removeEmpty,
                      (m[i] = a);
                  }
                  ii(g, function(e, t) {
                    e[o] && ((g[t] = e = ai({}, g[t])), (e[i] = e[o]));
                  });
                }));
            },
            S = function(t) {
              var n = /^([+\-]?)(\w+)\[([^\]]+)\]$/;
              (ni[e.schema] = null),
                t &&
                  ii(ci(t, ","), function(e) {
                    var t,
                      r,
                      o = n.exec(e);
                    o &&
                      ((r = o[1]),
                      (t = r ? g[o[2]] : (g[o[2]] = { "#comment": {} })),
                      (t = g[o[2]]),
                      ii(ci(o[3], "|"), function(e) {
                        "-" === r ? delete t[e] : (t[e] = {});
                      }));
                  });
            },
            N = function(e) {
              var t,
                n = m[e];
              if (n) return n;
              for (t = p.length; t--; )
                if ((n = p[t]).pattern.test(e)) return n;
            };
          return (
            e.valid_elements
              ? x(e.valid_elements)
              : (ii(r, function(e, t) {
                  (m[t] = {
                    attributes: e.attributes,
                    attributesOrder: e.attributesOrder
                  }),
                    (g[t] = e.children);
                }),
                "html5" !== e.schema &&
                  ii(ci("strong/b em/i"), function(e) {
                    (e = ci(e, "/")), (m[e[1]].outputName = e[0]);
                  }),
                ii(
                  ci(
                    "ol ul sub sup blockquote span font a table tbody tr strong em b i"
                  ),
                  function(e) {
                    m[e] && (m[e].removeEmpty = !0);
                  }
                ),
                ii(
                  ci("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"),
                  function(e) {
                    m[e].paddEmpty = !0;
                  }
                ),
                ii(ci("span"), function(e) {
                  m[e].removeEmptyAttrs = !0;
                })),
            z(e.custom_elements),
            S(e.valid_children),
            w(e.extended_valid_elements),
            S("+ol[ul|ol],+ul[ul|ol]"),
            ii(
              {
                dd: "dl",
                dt: "dl",
                li: "ul ol",
                td: "tr",
                th: "tr",
                tr: "tbody thead tfoot",
                tbody: "table",
                thead: "table",
                tfoot: "table",
                legend: "fieldset",
                area: "map",
                param: "video audio object"
              },
              function(e, t) {
                m[t] && (m[t].parentsRequired = ci(e));
              }
            ),
            e.invalid_elements &&
              ii(ui(e.invalid_elements), function(e) {
                m[e] && delete m[e];
              }),
            N("span") || w("span[!data-mce-type|*]"),
            {
              children: g,
              elements: m,
              getValidStyles: function() {
                return t;
              },
              getValidClasses: function() {
                return s;
              },
              getBlockElements: function() {
                return c;
              },
              getInvalidStyles: function() {
                return n;
              },
              getShortEndedElements: function() {
                return a;
              },
              getTextBlockElements: function() {
                return d;
              },
              getTextInlineElements: function() {
                return h;
              },
              getBoolAttrs: function() {
                return u;
              },
              getElementRule: N,
              getSelfClosingElements: function() {
                return i;
              },
              getNonEmptyElements: function() {
                return l;
              },
              getMoveCaretBeforeOnEnterElements: function() {
                return f;
              },
              getWhiteSpaceElements: function() {
                return o;
              },
              getSpecialElements: function() {
                return b;
              },
              isValidChild: function(e, t) {
                var n = g[e.toLowerCase()];
                return !(!n || !n[t.toLowerCase()]);
              },
              isValid: function(e, t) {
                var n,
                  r,
                  o = N(e);
                if (o) {
                  if (!t) return !0;
                  if (o.attributes[t]) return !0;
                  if ((n = o.attributePatterns))
                    for (r = n.length; r--; )
                      if (n[r].pattern.test(e)) return !0;
                }
                return !1;
              },
              getCustomElements: function() {
                return v;
              },
              addValidElements: w,
              setValidElements: x,
              addCustomElements: z,
              addValidChildren: S
            }
          );
        }
        var hi = function(e, t, n, r) {
            var o = function(e) {
              return (e = parseInt(e, 10).toString(16)).length > 1
                ? e
                : "0" + e;
            };
            return "#" + o(t) + o(n) + o(r);
          },
          mi = function(e, t) {
            var n,
              r,
              o,
              i,
              a = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,
              u = /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,
              s = /\s*([^:]+):\s*([^;]+);?/g,
              c = /\s+$/,
              l = {};
            for (
              e = e || {},
                t && ((o = t.getValidStyles()), (i = t.getInvalidStyles())),
                r = "\\\" \\' \\; \\: ; : \ufeff".split(" "),
                n = 0;
              n < r.length;
              n++
            )
              (l[r[n]] = "\ufeff" + n), (l["\ufeff" + n] = r[n]);
            return {
              toHex: function(e) {
                return e.replace(a, hi);
              },
              parse: function(t) {
                var r,
                  o,
                  i,
                  f,
                  d,
                  h,
                  m,
                  g,
                  p = {},
                  v = e.url_converter,
                  b = e.url_converter_scope || this,
                  y = function(e, t, r) {
                    var o, i, a, u;
                    if (
                      (o = p[e + "-top" + t]) &&
                      (i = p[e + "-right" + t]) &&
                      (a = p[e + "-bottom" + t]) &&
                      (u = p[e + "-left" + t])
                    ) {
                      var s = [o, i, a, u];
                      for (n = s.length - 1; n-- && s[n] === s[n + 1]; );
                      (n > -1 && r) ||
                        ((p[e + t] = -1 === n ? s[0] : s.join(" ")),
                        delete p[e + "-top" + t],
                        delete p[e + "-right" + t],
                        delete p[e + "-bottom" + t],
                        delete p[e + "-left" + t]);
                    }
                  },
                  C = function(e) {
                    var t,
                      n = p[e];
                    if (n) {
                      for (t = (n = n.split(" ")).length; t--; )
                        if (n[t] !== n[0]) return !1;
                      return (p[e] = n[0]), !0;
                    }
                  },
                  w = function(e) {
                    return (f = !0), l[e];
                  },
                  x = function(e, t) {
                    return (
                      f &&
                        (e = e.replace(/\uFEFF[0-9]/g, function(e) {
                          return l[e];
                        })),
                      t || (e = e.replace(/\\([\'\";:])/g, "$1")),
                      e
                    );
                  },
                  z = function(e) {
                    return String.fromCharCode(parseInt(e.slice(1), 16));
                  },
                  S = function(e) {
                    return e.replace(/\\[0-9a-f]+/gi, z);
                  },
                  N = function(t, n, r, o, i, a) {
                    if ((i = i || a))
                      return "'" + (i = x(i)).replace(/\'/g, "\\'") + "'";
                    if (((n = x(n || r || o)), !e.allow_script_urls)) {
                      var u = n.replace(/[\s\r\n]+/g, "");
                      if (/(java|vb)script:/i.test(u)) return "";
                      if (!e.allow_svg_data_urls && /^data:image\/svg/i.test(u))
                        return "";
                    }
                    return (
                      v && (n = v.call(b, n, "style")),
                      "url('" + n.replace(/\'/g, "\\'") + "')"
                    );
                  };
                if (t) {
                  for (
                    t = (t = t.replace(/[\u0000-\u001F]/g, ""))
                      .replace(/\\[\"\';:\uFEFF]/g, w)
                      .replace(/\"[^\"]+\"|\'[^\']+\'/g, function(e) {
                        return e.replace(/[;:]/g, w);
                      });
                    (r = s.exec(t));

                  )
                    if (
                      ((s.lastIndex = r.index + r[0].length),
                      (o = r[1].replace(c, "").toLowerCase()),
                      (i = r[2].replace(c, "")),
                      o && i)
                    ) {
                      if (
                        ((o = S(o)),
                        (i = S(i)),
                        -1 !== o.indexOf("\ufeff") || -1 !== o.indexOf('"'))
                      )
                        continue;
                      if (
                        !e.allow_script_urls &&
                        ("behavior" === o ||
                          /expression\s*\(|\/\*|\*\//.test(i))
                      )
                        continue;
                      "font-weight" === o && "700" === i
                        ? (i = "bold")
                        : ("color" !== o && "background-color" !== o) ||
                          (i = i.toLowerCase()),
                        (i = (i = i.replace(a, hi)).replace(u, N)),
                        (p[o] = f ? x(i, !0) : i);
                    }
                  y("border", "", !0),
                    y("border", "-width"),
                    y("border", "-color"),
                    y("border", "-style"),
                    y("padding", ""),
                    y("margin", ""),
                    (d = "border"),
                    (m = "border-style"),
                    (g = "border-color"),
                    C((h = "border-width")) &&
                      C(m) &&
                      C(g) &&
                      ((p[d] = p[h] + " " + p[m] + " " + p[g]),
                      delete p[h],
                      delete p[m],
                      delete p[g]),
                    "medium none" === p.border && delete p.border,
                    "none" === p["border-image"] && delete p["border-image"];
                }
                return p;
              },
              serialize: function(e, t) {
                var n,
                  r,
                  a = "",
                  u = function(t) {
                    var n, r, i, u;
                    if ((n = o[t]))
                      for (r = 0, i = n.length; r < i; r++)
                        (t = n[r]),
                          (u = e[t]) &&
                            (a +=
                              (a.length > 0 ? " " : "") + t + ": " + u + ";");
                  },
                  s = function(e, t) {
                    var n;
                    return !(((n = i["*"]) && n[e]) || ((n = i[t]) && n[e]));
                  };
                if (t && o) u("*"), u(t);
                else
                  for (n in e)
                    !(r = e[n]) ||
                      (i && !s(n, t)) ||
                      (a += (a.length > 0 ? " " : "") + n + ": " + r + ";");
                return a;
              }
            };
          },
          gi = an.each,
          pi = an.grep,
          vi = Le.ie,
          bi = /^([a-z0-9],?)+$/i,
          yi = /^[ \t\r\n]*$/,
          Ci = function(e, t, n) {
            var r = t.keep_values,
              o = {
                set: function(e, r, o) {
                  t.url_converter &&
                    (r = t.url_converter.call(
                      t.url_converter_scope || n(),
                      r,
                      o,
                      e[0]
                    )),
                    e.attr("data-mce-" + o, r).attr(o, r);
                },
                get: function(e, t) {
                  return e.attr("data-mce-" + t) || e.attr(t);
                }
              },
              i = {
                style: {
                  set: function(e, t) {
                    null === t || "object" != typeof t
                      ? (r && e.attr("data-mce-style", t), e.attr("style", t))
                      : e.css(t);
                  },
                  get: function(t) {
                    var n = t.attr("data-mce-style") || t.attr("style");
                    return (n = e.serialize(e.parse(n), t[0].nodeName));
                  }
                }
              };
            return r && (i.href = i.src = o), i;
          },
          wi = function(e, t) {
            var n = t.attr("style"),
              r = e.serialize(e.parse(n), t[0].nodeName);
            r || (r = null), t.attr("data-mce-style", r);
          },
          xi = function(e, t) {
            var n,
              r,
              o = 0;
            if (e)
              for (
                n = e.nodeType, e = e.previousSibling;
                e;
                e = e.previousSibling
              )
                (r = e.nodeType),
                  (!t || 3 !== r || (r !== n && e.nodeValue.length)) &&
                    (o++, (n = r));
            return o;
          };
        function zi(e, n) {
          var a,
            u = this;
          void 0 === n && (n = {});
          var s = {},
            c = t.window,
            l = {},
            f = 0,
            d = (function(e, n) {
              void 0 === n && (n = {});
              var a,
                u = 0,
                s = {};
              a = n.maxLoadTime || 5e3;
              var c = function(t) {
                  e.getElementsByTagName("head")[0].appendChild(t);
                },
                l = function(r, o, i) {
                  var l,
                    f,
                    d,
                    h,
                    m = function(e) {
                      (h.status = e),
                        (h.passed = []),
                        (h.failed = []),
                        l &&
                          ((l.onload = null), (l.onerror = null), (l = null));
                    },
                    g = function() {
                      for (var e = h.passed, t = e.length; t--; ) e[t]();
                      m(2);
                    },
                    p = function() {
                      for (var e = h.failed, t = e.length; t--; ) e[t]();
                      m(3);
                    },
                    v = function(e, t) {
                      e() ||
                        (new Date().getTime() - d < a ? je.setTimeout(t) : p());
                    },
                    b = function() {
                      v(function() {
                        for (var t, n, r = e.styleSheets, o = r.length; o--; )
                          if (
                            (n = (t = r[o]).ownerNode
                              ? t.ownerNode
                              : t.owningElement) &&
                            n.id === l.id
                          )
                            return g(), !0;
                      }, b);
                    },
                    y = function() {
                      v(function() {
                        try {
                          var e = f.sheet.cssRules;
                          return g(), !!e;
                        } catch (e) {}
                      }, y);
                    };
                  if (
                    ((r = an._addCacheSuffix(r)),
                    s[r]
                      ? (h = s[r])
                      : ((h = { passed: [], failed: [] }), (s[r] = h)),
                    o && h.passed.push(o),
                    i && h.failed.push(i),
                    1 !== h.status)
                  )
                    if (2 !== h.status)
                      if (3 !== h.status) {
                        if (
                          ((h.status = 1),
                          ((l = e.createElement("link")).rel = "stylesheet"),
                          (l.type = "text/css"),
                          (l.id = "u" + u++),
                          (l.async = !1),
                          (l.defer = !1),
                          (d = new Date().getTime()),
                          n.contentCssCors && (l.crossOrigin = "anonymous"),
                          "onload" in l &&
                            !(
                              (C = t.navigator.userAgent.match(
                                /WebKit\/(\d*)/
                              )) && parseInt(C[1], 10) < 536
                            ))
                        )
                          (l.onload = b), (l.onerror = p);
                        else {
                          if (t.navigator.userAgent.indexOf("Firefox") > 0)
                            return (
                              ((f = e.createElement("style")).textContent =
                                '@import "' + r + '"'),
                              y(),
                              void c(f)
                            );
                          b();
                        }
                        var C;
                        c(l), (l.href = r);
                      } else p();
                    else g();
                },
                f = function(e) {
                  return lo.nu(function(t) {
                    l(e, r(t, o(po.value(e))), r(t, o(po.error(e))));
                  });
                },
                d = function(e) {
                  return e.fold(i, i);
                };
              return {
                load: l,
                loadAll: function(e, t, n) {
                  ho(U(e, f)).get(function(e) {
                    var r = $(e, function(e) {
                      return e.isValue();
                    });
                    r.fail.length > 0 ? n(r.fail.map(d)) : t(r.pass.map(d));
                  });
                }
              };
            })(e, { contentCssCors: n.contentCssCors }),
            h = [],
            m = n.schema ? n.schema : di({}),
            g = mi(
              {
                url_converter: n.url_converter,
                url_converter_scope: n.url_converter_scope
              },
              n.schema
            ),
            p = n.ownEvents ? new Ze() : Ze.Event,
            v = m.getBlockElements(),
            b = Fn.overrideDefaults(function() {
              return { context: e, element: X.getRoot() };
            }),
            y = function(t) {
              if (t && e && "string" == typeof t) {
                var n = e.getElementById(t);
                return n && n.id !== t ? e.getElementsByName(t)[1] : n;
              }
              return t;
            },
            C = function(e) {
              return "string" == typeof e && (e = y(e)), b(e);
            },
            w = function(e, t, n) {
              var r,
                o,
                i = C(e);
              return (
                i.length && (o = (r = a[t]) && r.get ? r.get(i, t) : i.attr(t)),
                void 0 === o && (o = n || ""),
                o
              );
            },
            x = function(e) {
              var t = y(e);
              return t ? t.attributes : [];
            },
            z = function(e, t, r) {
              var o, i;
              "" === r && (r = null);
              var u = C(e);
              (o = u.attr(t)),
                u.length &&
                  ((i = a[t]) && i.set ? i.set(u, r, t) : u.attr(t, r),
                  o !== r &&
                    n.onSetAttrib &&
                    n.onSetAttrib({ attrElm: u, attrName: t, attrValue: r }));
            },
            S = function() {
              return n.root_element || e.body;
            },
            N = function(t, n) {
              return ao.getPos(e.body, y(t), n);
            },
            E = function(e, t, n) {
              var r = C(e);
              return n
                ? r.css(t)
                : ("float" ===
                    (t = t.replace(/-(\D)/g, function(e, t) {
                      return t.toUpperCase();
                    })) &&
                    (t = Le.ie && Le.ie < 12 ? "styleFloat" : "cssFloat"),
                  r[0] && r[0].style ? r[0].style[t] : void 0);
            },
            k = function(e) {
              var t, n;
              return (
                (e = y(e)),
                (t = E(e, "width")),
                (n = E(e, "height")),
                -1 === t.indexOf("px") && (t = 0),
                -1 === n.indexOf("px") && (n = 0),
                {
                  w: parseInt(t, 10) || e.offsetWidth || e.clientWidth,
                  h: parseInt(n, 10) || e.offsetHeight || e.clientHeight
                }
              );
            },
            T = function(e, t) {
              var n;
              if (!e) return !1;
              if (!Array.isArray(e)) {
                if ("*" === t) return 1 === e.nodeType;
                if (bi.test(t)) {
                  var r = t.toLowerCase().split(/,/),
                    o = e.nodeName.toLowerCase();
                  for (n = r.length - 1; n >= 0; n--) if (r[n] === o) return !0;
                  return !1;
                }
                if (e.nodeType && 1 !== e.nodeType) return !1;
              }
              var i = Array.isArray(e) ? e : [e];
              return Ht(t, i[0].ownerDocument || i[0], null, i).length > 0;
            },
            A = function(e, t, n, r) {
              var o,
                i = [],
                a = y(e);
              for (
                r = void 0 === r,
                  n = n || ("BODY" !== S().nodeName ? S().parentNode : null),
                  an.is(t, "string") &&
                    ((o = t),
                    (t =
                      "*" === t
                        ? function(e) {
                            return 1 === e.nodeType;
                          }
                        : function(e) {
                            return T(e, o);
                          }));
                a && a !== n && a.nodeType && 9 !== a.nodeType;

              ) {
                if (!t || ("function" == typeof t && t(a))) {
                  if (!r) return [a];
                  i.push(a);
                }
                a = a.parentNode;
              }
              return r ? i : null;
            },
            M = function(e, t, n) {
              var r = t;
              if (e)
                for (
                  "string" == typeof t &&
                    (r = function(e) {
                      return T(e, t);
                    }),
                    e = e[n];
                  e;
                  e = e[n]
                )
                  if ("function" == typeof r && r(e)) return e;
              return null;
            },
            R = function(e, t, n) {
              var r,
                o = "string" == typeof e ? y(e) : e;
              if (!o) return !1;
              if (an.isArray(o) && (o.length || 0 === o.length))
                return (
                  (r = []),
                  gi(o, function(e, o) {
                    e &&
                      ("string" == typeof e && (e = y(e)),
                      r.push(t.call(n, e, o)));
                  }),
                  r
                );
              var i = n || u;
              return t.call(i, o);
            },
            B = function(e, t) {
              C(e).each(function(e, n) {
                gi(t, function(e, t) {
                  z(n, t, e);
                });
              });
            },
            O = function(e, t) {
              var n = C(e);
              vi
                ? n.each(function(e, n) {
                    if (!1 !== n.canHaveHTML) {
                      for (; n.firstChild; ) n.removeChild(n.firstChild);
                      try {
                        (n.innerHTML = "<br>" + t), n.removeChild(n.firstChild);
                      } catch (e) {
                        Fn("<div></div>")
                          .html("<br>" + t)
                          .contents()
                          .slice(1)
                          .appendTo(n);
                      }
                      return t;
                    }
                  })
                : n.html(t);
            },
            D = function(t, n, r, o, i) {
              return R(t, function(t) {
                var a = "string" == typeof n ? e.createElement(n) : n;
                return (
                  B(a, r),
                  o &&
                    ("string" != typeof o && o.nodeType
                      ? a.appendChild(o)
                      : "string" == typeof o && O(a, o)),
                  i ? a : t.appendChild(a)
                );
              });
            },
            H = function(t, n, r) {
              return D(e.createElement(t), t, n, r, !0);
            },
            P = ti.decode,
            L = ti.encodeAllRaw,
            V = function(e, t) {
              var n = C(e);
              return (
                t
                  ? n
                      .each(function() {
                        for (var e; (e = this.firstChild); )
                          3 === e.nodeType && 0 === e.data.length
                            ? this.removeChild(e)
                            : this.parentNode.insertBefore(e, this);
                      })
                      .remove()
                  : n.remove(),
                n.length > 1 ? n.toArray() : n[0]
              );
            },
            I = function(e, t, n) {
              C(e)
                .toggleClass(t, n)
                .each(function() {
                  "" === this.className && Fn(this).attr("class", null);
                });
            },
            F = function(e, t, n) {
              return R(t, function(t) {
                return (
                  an.is(t, "array") && (e = e.cloneNode(!0)),
                  n &&
                    gi(pi(t.childNodes), function(t) {
                      e.appendChild(t);
                    }),
                  t.parentNode.replaceChild(e, t)
                );
              });
            },
            j = function() {
              return e.createRange();
            },
            q = function(t, r, o, i) {
              if (an.isArray(t)) {
                for (var a = t.length, u = []; a--; ) u[a] = q(t[a], r, o, i);
                return u;
              }
              return (
                !n.collect || (t !== e && t !== c) || h.push([t, r, o, i]),
                p.bind(t, r, o, i || X)
              );
            },
            W = function(t, n, r) {
              var o;
              if (an.isArray(t)) {
                o = t.length;
                for (var i = []; o--; ) i[o] = W(t[o], n, r);
                return i;
              }
              if (h && (t === e || t === c))
                for (o = h.length; o--; ) {
                  var a = h[o];
                  t !== a[0] ||
                    (n && n !== a[1]) ||
                    (r && r !== a[2]) ||
                    p.unbind(a[0], a[1], a[2]);
                }
              return p.unbind(t, n, r);
            },
            K = function(e) {
              if (e && To.isElement(e)) {
                var t = e.getAttribute("data-mce-contenteditable");
                return t && "inherit" !== t
                  ? t
                  : "inherit" !== e.contentEditable
                  ? e.contentEditable
                  : null;
              }
              return null;
            },
            X = {
              doc: e,
              settings: n,
              win: c,
              files: l,
              stdMode: !0,
              boxModel: !0,
              styleSheetLoader: d,
              boundEvents: h,
              styles: g,
              schema: m,
              events: p,
              isBlock: function(e) {
                if ("string" == typeof e) return !!v[e];
                if (e) {
                  var t = e.nodeType;
                  if (t) return !(1 !== t || !v[e.nodeName]);
                }
                return !1;
              },
              $: b,
              $$: C,
              root: null,
              clone: function(t, n) {
                if (!vi || 1 !== t.nodeType || n) return t.cloneNode(n);
                if (!n) {
                  var r = e.createElement(t.nodeName);
                  return (
                    gi(x(t), function(e) {
                      z(r, e.nodeName, w(t, e.nodeName));
                    }),
                    r
                  );
                }
                return null;
              },
              getRoot: S,
              getViewPort: function(e) {
                var t = e || c,
                  n = t.document.documentElement;
                return {
                  x: t.pageXOffset || n.scrollLeft,
                  y: t.pageYOffset || n.scrollTop,
                  w: t.innerWidth || n.clientWidth,
                  h: t.innerHeight || n.clientHeight
                };
              },
              getRect: function(e) {
                var t, n;
                return (
                  (e = y(e)),
                  (t = N(e)),
                  (n = k(e)),
                  { x: t.x, y: t.y, w: n.w, h: n.h }
                );
              },
              getSize: k,
              getParent: function(e, t, n) {
                var r = A(e, t, n, !1);
                return r && r.length > 0 ? r[0] : null;
              },
              getParents: A,
              get: y,
              getNext: function(e, t) {
                return M(e, t, "nextSibling");
              },
              getPrev: function(e, t) {
                return M(e, t, "previousSibling");
              },
              select: function(t, r) {
                return Ht(t, y(r) || n.root_element || e, []);
              },
              is: T,
              add: D,
              create: H,
              createHTML: function(e, t, n) {
                var r,
                  o = "";
                for (r in ((o += "<" + e), t))
                  t.hasOwnProperty(r) &&
                    null !== t[r] &&
                    void 0 !== t[r] &&
                    (o += " " + r + '="' + L(t[r]) + '"');
                return void 0 !== n ? o + ">" + n + "</" + e + ">" : o + " />";
              },
              createFragment: function(t) {
                var n,
                  r = e.createElement("div"),
                  o = e.createDocumentFragment();
                for (t && (r.innerHTML = t); (n = r.firstChild); )
                  o.appendChild(n);
                return o;
              },
              remove: V,
              setStyle: function(e, t, r) {
                var o = _(t) ? C(e).css(t, r) : C(e).css(t);
                n.update_styles && wi(g, o);
              },
              getStyle: E,
              setStyles: function(e, t) {
                var r = C(e).css(t);
                n.update_styles && wi(g, r);
              },
              removeAllAttribs: function(e) {
                return R(e, function(e) {
                  var t,
                    n = e.attributes;
                  for (t = n.length - 1; t >= 0; t--)
                    e.removeAttributeNode(n.item(t));
                });
              },
              setAttrib: z,
              setAttribs: B,
              getAttrib: w,
              getPos: N,
              parseStyle: function(e) {
                return g.parse(e);
              },
              serializeStyle: function(e, t) {
                return g.serialize(e, t);
              },
              addStyle: function(n) {
                var r, o;
                if (X !== zi.DOM && e === t.document) {
                  if (s[n]) return;
                  s[n] = !0;
                }
                (o = e.getElementById("mceDefaultStyles")) ||
                  (((o = e.createElement("style")).id = "mceDefaultStyles"),
                  (o.type = "text/css"),
                  (r = e.getElementsByTagName("head")[0]).firstChild
                    ? r.insertBefore(o, r.firstChild)
                    : r.appendChild(o)),
                  o.styleSheet
                    ? (o.styleSheet.cssText += n)
                    : o.appendChild(e.createTextNode(n));
              },
              loadCSS: function(n) {
                var r;
                X === zi.DOM || e !== t.document
                  ? (n || (n = ""),
                    (r = e.getElementsByTagName("head")[0]),
                    gi(n.split(","), function(e) {
                      var t;
                      (e = an._addCacheSuffix(e)),
                        l[e] ||
                          ((l[e] = !0),
                          (t = H("link", { rel: "stylesheet", href: e })),
                          r.appendChild(t));
                    }))
                  : zi.DOM.loadCSS(n);
              },
              addClass: function(e, t) {
                C(e).addClass(t);
              },
              removeClass: function(e, t) {
                I(e, t, !1);
              },
              hasClass: function(e, t) {
                return C(e).hasClass(t);
              },
              toggleClass: I,
              show: function(e) {
                C(e).show();
              },
              hide: function(e) {
                C(e).hide();
              },
              isHidden: function(e) {
                return "none" === C(e).css("display");
              },
              uniqueId: function(e) {
                return (e || "mce_") + f++;
              },
              setHTML: O,
              getOuterHTML: function(e) {
                var t = "string" == typeof e ? y(e) : e;
                return To.isElement(t)
                  ? t.outerHTML
                  : Fn("<div></div>")
                      .append(Fn(t).clone())
                      .html();
              },
              setOuterHTML: function(e, t) {
                C(e).each(function() {
                  try {
                    if ("outerHTML" in this) return void (this.outerHTML = t);
                  } catch (e) {}
                  V(Fn(this).html(t), !0);
                });
              },
              decode: P,
              encode: L,
              insertAfter: function(e, t) {
                var n = y(t);
                return R(e, function(e) {
                  var t, r;
                  return (
                    (t = n.parentNode),
                    (r = n.nextSibling)
                      ? t.insertBefore(e, r)
                      : t.appendChild(e),
                    e
                  );
                });
              },
              replace: F,
              rename: function(e, t) {
                var n;
                return (
                  e.nodeName !== t.toUpperCase() &&
                    ((n = H(t)),
                    gi(x(e), function(t) {
                      z(n, t.nodeName, w(e, t.nodeName));
                    }),
                    F(n, e, !0)),
                  n || e
                );
              },
              findCommonAncestor: function(e, t) {
                for (var n, r = e; r; ) {
                  for (n = t; n && r !== n; ) n = n.parentNode;
                  if (r === n) break;
                  r = r.parentNode;
                }
                return !r && e.ownerDocument
                  ? e.ownerDocument.documentElement
                  : r;
              },
              toHex: function(e) {
                return g.toHex(an.trim(e));
              },
              run: R,
              getAttribs: x,
              isEmpty: function(e, t) {
                var n,
                  r,
                  o,
                  i,
                  a = 0;
                if ((e = e.firstChild)) {
                  var u = new Ao(e, e.parentNode),
                    s = m ? m.getWhiteSpaceElements() : {};
                  t = t || (m ? m.getNonEmptyElements() : null);
                  do {
                    if (((o = e.nodeType), To.isElement(e))) {
                      var c = e.getAttribute("data-mce-bogus");
                      if (c) {
                        e = u.next("all" === c);
                        continue;
                      }
                      if (((i = e.nodeName.toLowerCase()), t && t[i])) {
                        if ("br" === i) {
                          a++, (e = u.next());
                          continue;
                        }
                        return !1;
                      }
                      for (n = (r = x(e)).length; n--; )
                        if (
                          "name" === (i = r[n].nodeName) ||
                          "data-mce-bookmark" === i
                        )
                          return !1;
                    }
                    if (8 === o) return !1;
                    if (3 === o && !yi.test(e.nodeValue)) return !1;
                    if (
                      3 === o &&
                      e.parentNode &&
                      s[e.parentNode.nodeName] &&
                      yi.test(e.nodeValue)
                    )
                      return !1;
                    e = u.next();
                  } while (e);
                }
                return a <= 1;
              },
              createRng: j,
              nodeIndex: xi,
              split: function(e, t, n) {
                var r,
                  o,
                  i,
                  a = j();
                if (e && t)
                  return (
                    a.setStart(e.parentNode, xi(e)),
                    a.setEnd(t.parentNode, xi(t)),
                    (r = a.extractContents()),
                    (a = j()).setStart(t.parentNode, xi(t) + 1),
                    a.setEnd(e.parentNode, xi(e) + 1),
                    (o = a.extractContents()),
                    (i = e.parentNode).insertBefore(qo.trimNode(X, r), e),
                    n ? i.insertBefore(n, e) : i.insertBefore(t, e),
                    i.insertBefore(qo.trimNode(X, o), e),
                    V(e),
                    n || t
                  );
              },
              bind: q,
              unbind: W,
              fire: function(e, t, n) {
                return p.fire(e, t, n);
              },
              getContentEditable: K,
              getContentEditableParent: function(e) {
                for (
                  var t = S(), n = null;
                  e && e !== t && null === (n = K(e));
                  e = e.parentNode
                );
                return n;
              },
              destroy: function() {
                if (h)
                  for (var e = h.length; e--; ) {
                    var t = h[e];
                    p.unbind(t[0], t[1], t[2]);
                  }
                Ht.setDocument && Ht.setDocument();
              },
              isChildOf: function(e, t) {
                for (; e; ) {
                  if (t === e) return !0;
                  e = e.parentNode;
                }
                return !1;
              },
              dumpRng: function(e) {
                return (
                  "startContainer: " +
                  e.startContainer.nodeName +
                  ", startOffset: " +
                  e.startOffset +
                  ", endContainer: " +
                  e.endContainer.nodeName +
                  ", endOffset: " +
                  e.endOffset
                );
              }
            };
          return (
            (a = Ci(g, n, function() {
              return X;
            })),
            X
          );
        }
        !(function(e) {
          (e.DOM = e(t.document)), (e.nodeIndex = xi);
        })(zi || (zi = {}));
        var Si = zi,
          Ni = Si.DOM,
          Ei = an.each,
          ki = an.grep,
          Ti = (function() {
            function e() {
              (this.states = {}),
                (this.queue = []),
                (this.scriptLoadedCallbacks = {}),
                (this.queueLoadedCallbacks = []),
                (this.loading = 0);
            }
            return (
              (e.prototype.loadScript = function(e, n, r) {
                var o,
                  i,
                  a = Ni;
                (i = a.uniqueId()),
                  ((o = t.document.createElement("script")).id = i),
                  (o.type = "text/javascript"),
                  (o.src = an._addCacheSuffix(e)),
                  (o.onload = function() {
                    a.remove(i),
                      o && (o.onreadystatechange = o.onload = o = null),
                      n();
                  }),
                  (o.onerror = function() {
                    H(r)
                      ? r()
                      : void 0 !== t.console &&
                        t.console.log &&
                        t.console.log("Failed to load script: " + e);
                  }),
                  (
                    t.document.getElementsByTagName("head")[0] ||
                    t.document.body
                  ).appendChild(o);
              }),
              (e.prototype.isDone = function(e) {
                return 2 === this.states[e];
              }),
              (e.prototype.markDone = function(e) {
                this.states[e] = 2;
              }),
              (e.prototype.add = function(e, t, n, r) {
                void 0 === this.states[e] &&
                  (this.queue.push(e), (this.states[e] = 0)),
                  t &&
                    (this.scriptLoadedCallbacks[e] ||
                      (this.scriptLoadedCallbacks[e] = []),
                    this.scriptLoadedCallbacks[e].push({
                      success: t,
                      failure: r,
                      scope: n || this
                    }));
              }),
              (e.prototype.load = function(e, t, n, r) {
                return this.add(e, t, n, r);
              }),
              (e.prototype.remove = function(e) {
                delete this.states[e], delete this.scriptLoadedCallbacks[e];
              }),
              (e.prototype.loadQueue = function(e, t, n) {
                this.loadScripts(this.queue, e, t, n);
              }),
              (e.prototype.loadScripts = function(e, t, n, r) {
                var o,
                  i = this,
                  a = [],
                  u = function(e, t) {
                    Ei(i.scriptLoadedCallbacks[t], function(t) {
                      H(t[e]) && t[e].call(t.scope);
                    }),
                      (i.scriptLoadedCallbacks[t] = void 0);
                  };
                i.queueLoadedCallbacks.push({
                  success: t,
                  failure: r,
                  scope: n || this
                }),
                  (o = function() {
                    var t = ki(e);
                    if (
                      ((e.length = 0),
                      Ei(t, function(e) {
                        2 !== i.states[e]
                          ? 3 !== i.states[e]
                            ? 1 !== i.states[e] &&
                              ((i.states[e] = 1),
                              i.loading++,
                              i.loadScript(
                                e,
                                function() {
                                  (i.states[e] = 2),
                                    i.loading--,
                                    u("success", e),
                                    o();
                                },
                                function() {
                                  (i.states[e] = 3),
                                    i.loading--,
                                    a.push(e),
                                    u("failure", e),
                                    o();
                                }
                              ))
                            : u("failure", e)
                          : u("success", e);
                      }),
                      !i.loading)
                    ) {
                      var n = i.queueLoadedCallbacks.slice(0);
                      (i.queueLoadedCallbacks.length = 0),
                        Ei(n, function(e) {
                          0 === a.length
                            ? H(e.success) && e.success.call(e.scope)
                            : H(e.failure) && e.failure.call(e.scope, a);
                        });
                    }
                  })();
              }),
              (e.ScriptLoader = new e()),
              e
            );
          })(),
          Ai = function() {
            return (Ai =
              Object.assign ||
              function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }).apply(this, arguments);
          };
        function Mi(e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 && (n[r[o]] = e[r[o]]);
          }
          return n;
        }
        var _i = function(e) {
            var t = e,
              n = function() {
                return t;
              };
            return {
              get: n,
              set: function(e) {
                t = e;
              },
              clone: function() {
                return _i(n());
              }
            };
          },
          Ri = {},
          Bi = _i("en"),
          Oi = {
            getData: function() {
              return xr(Ri, function(e) {
                return Ai({}, e);
              });
            },
            setCode: function(e) {
              e && Bi.set(e);
            },
            getCode: function() {
              return Bi.get();
            },
            add: function(e, t) {
              var n = Ri[e];
              for (var r in (n || (Ri[e] = n = {}), t))
                n[r.toLowerCase()] = t[r];
            },
            translate: function(e) {
              var t,
                n = Ri[Bi.get()] || {},
                r = function(e) {
                  return H(e)
                    ? Object.prototype.toString.call(e)
                    : o(e)
                    ? ""
                    : "" + e;
                },
                o = function(e) {
                  return "" === e || null == e;
                },
                i = function(e) {
                  var t = r(e),
                    o = t.toLowerCase();
                  return Er(n, o) ? r(n[o]) : t;
                },
                a = function(e) {
                  return e.replace(/{context:\w+}$/, "");
                },
                u = function(e) {
                  return e;
                };
              if (o(e)) return u("");
              if (R((t = e)) && Er(t, "raw")) return u(r(e.raw));
              if (
                (function(e) {
                  return B(e) && e.length > 1;
                })(e)
              ) {
                var s = e.slice(1);
                return u(
                  a(
                    i(e[0]).replace(/\{([0-9]+)\}/g, function(e, t) {
                      return Er(s, t) ? r(s[t]) : e;
                    })
                  )
                );
              }
              return u(a(i(e)));
            },
            isRtl: function() {
              return Nr(Ri, Bi.get())
                .bind(function(e) {
                  return Nr(e, "_dir");
                })
                .exists(function(e) {
                  return "rtl" === e;
                });
            },
            hasCode: function(e) {
              return Er(Ri, e);
            }
          },
          Di = an.each;
        function Hi() {
          var e = this,
            t = [],
            n = {},
            r = {},
            o = [],
            i = function(e) {
              var t;
              return r[e] && (t = r[e].dependencies), t || [];
            },
            a = function(e, t) {
              return "object" == typeof t
                ? t
                : "string" == typeof e
                ? { prefix: "", resource: t, suffix: "" }
                : { prefix: e.prefix, resource: t, suffix: e.suffix };
            },
            u = function(e, t, n, r) {
              var o = i(e);
              Di(o, function(e) {
                var n = a(t, e);
                s(n.resource, n, void 0, void 0);
              }),
                n && (r ? n.call(r) : n.call(Ti));
            },
            s = function(e, t, o, i, a) {
              if (!n[e]) {
                var s =
                  "string" == typeof t ? t : t.prefix + t.resource + t.suffix;
                0 !== s.indexOf("/") &&
                  -1 === s.indexOf("://") &&
                  (s = Hi.baseURL + "/" + s),
                  (n[e] = s.substring(0, s.lastIndexOf("/"))),
                  r[e]
                    ? u(e, t, o, i)
                    : Ti.ScriptLoader.add(
                        s,
                        function() {
                          return u(e, t, o, i);
                        },
                        i,
                        a
                      );
              }
            };
          return {
            items: t,
            urls: n,
            lookup: r,
            _listeners: o,
            get: function(e) {
              if (r[e]) return r[e].instance;
            },
            dependencies: i,
            requireLangPack: function(e, t) {
              var r = Oi.getCode();
              if (r && !1 !== Hi.languageLoad) {
                if (t)
                  if (
                    -1 !==
                    (t = "," + t + ",").indexOf("," + r.substr(0, 2) + ",")
                  )
                    r = r.substr(0, 2);
                  else if (-1 === t.indexOf("," + r + ",")) return;
                Ti.ScriptLoader.add(n[e] + "/langs/" + r + ".js");
              }
            },
            add: function(e, n, i) {
              t.push(n), (r[e] = { instance: n, dependencies: i });
              var a = $(o, function(t) {
                return t.name === e;
              });
              return (
                (o = a.fail),
                Di(a.pass, function(e) {
                  e.callback();
                }),
                n
              );
            },
            remove: function(e) {
              delete n[e], delete r[e];
            },
            createUrl: a,
            addComponents: function(t, n) {
              var r = e.urls[t];
              Di(n, function(e) {
                Ti.ScriptLoader.add(r + "/" + e);
              });
            },
            load: s,
            waitFor: function(e, t) {
              r.hasOwnProperty(e) ? t() : o.push({ name: e, callback: t });
            }
          };
        }
        !(function(e) {
          (e.PluginManager = e()), (e.ThemeManager = e());
        })(Hi || (Hi = {}));
        var Pi = Hi,
          Li = function(e, t) {
            Xr(e).each(function(n) {
              n.dom().insertBefore(t.dom(), e.dom());
            });
          },
          Vi = function(e, t) {
            Jr(e).fold(
              function() {
                Xr(e).each(function(e) {
                  Fi(e, t);
                });
              },
              function(e) {
                Li(e, t);
              }
            );
          },
          Ii = function(e, t) {
            no(e).fold(
              function() {
                Fi(e, t);
              },
              function(n) {
                e.dom().insertBefore(t.dom(), n.dom());
              }
            );
          },
          Fi = function(e, t) {
            e.dom().appendChild(t.dom());
          },
          Ui = function(e, t) {
            j(t, function(t) {
              Fi(e, t);
            });
          },
          ji = function(e) {
            (e.dom().textContent = ""),
              j(eo(e), function(e) {
                qi(e);
              });
          },
          qi = function(e) {
            var t = e.dom();
            null !== t.parentNode && t.parentNode.removeChild(t);
          },
          $i = function(e) {
            var t,
              n = eo(e);
            n.length > 0 &&
              ((t = e),
              j(n, function(e) {
                Li(t, e);
              })),
              qi(e);
          },
          Wi = function(e, n) {
            var r = null;
            return {
              cancel: function() {
                null !== r && (t.clearTimeout(r), (r = null));
              },
              throttle: function() {
                for (var o = [], i = 0; i < arguments.length; i++)
                  o[i] = arguments[i];
                null === r &&
                  (r = t.setTimeout(function() {
                    e.apply(null, o), (r = null);
                  }, n));
              }
            };
          },
          Ki = function(e, t) {
            var n = Mr(e, t);
            return void 0 === n || "" === n ? [] : n.split(" ");
          },
          Xi = function(e) {
            return void 0 !== e.dom().classList;
          },
          Yi = function(e) {
            return Ki(e, "class");
          },
          Gi = function(e, t) {
            return (function(e, t, n) {
              var r = Ki(e, t).concat([n]);
              return Tr(e, t, r.join(" ")), !0;
            })(e, "class", t);
          },
          Ji = function(e, t) {
            return (function(e, t, n) {
              var r = W(Ki(e, t), function(e) {
                return e !== n;
              });
              return r.length > 0 ? Tr(e, t, r.join(" ")) : _r(e, t), !1;
            })(e, "class", t);
          },
          Qi = function(e, t) {
            Xi(e) ? e.dom().classList.add(t) : Gi(e, t);
          },
          Zi = function(e, t) {
            Xi(e) ? e.dom().classList.remove(t) : Ji(e, t),
              (function(e) {
                0 === (Xi(e) ? e.dom().classList : Yi(e)).length &&
                  _r(e, "class");
              })(e);
          },
          ea = function(e, t) {
            return Xi(e) && e.dom().classList.contains(t);
          },
          ta = function(e, t) {
            var n = [];
            return (
              j(eo(e), function(e) {
                t(e) && (n = n.concat([e])), (n = n.concat(ta(e, t)));
              }),
              n
            );
          },
          na = function(e, t) {
            return qr(t, e);
          };
        function ra(e, t, n, r, o) {
          return e(n, r) ? A.some(n) : H(o) && o(n) ? A.none() : t(n, r, o);
        }
        var oa = function(e, t, n) {
            for (var r = e.dom(), i = H(n) ? n : o(!1); r.parentNode; ) {
              r = r.parentNode;
              var a = fr.fromDom(r);
              if (t(a)) return A.some(a);
              if (i(a)) break;
            }
            return A.none();
          },
          ia = function(e, t, n) {
            return ra(
              function(e) {
                return t(e);
              },
              oa,
              e,
              t,
              n
            );
          },
          aa = function(e, t, n) {
            return oa(
              e,
              function(e) {
                return Ur(e, t);
              },
              n
            );
          },
          ua = function(e, n) {
            return (function(e, n) {
              var r = void 0 === n ? t.document : n.dom();
              return jr(r)
                ? A.none()
                : A.from(r.querySelector(e)).map(fr.fromDom);
            })(n, e);
          },
          sa = function(e, t, n) {
            return ra(Ur, aa, e, t, n);
          },
          ca = o("mce-annotation"),
          la = o("data-mce-annotation"),
          fa = o("data-mce-annotation-uid"),
          da = function(e, t) {
            var n = e.selection.getRng(),
              r = fr.fromDom(n.startContainer),
              o = fr.fromDom(e.getBody()),
              i = t.fold(
                function() {
                  return "." + ca();
                },
                function(e) {
                  return "[" + la() + '="' + e + '"]';
                }
              ),
              a = to(r, n.startOffset).getOr(r),
              u = sa(a, i, function(e) {
                return $r(e, o);
              }),
              s = function(e, t) {
                return (
                  (n = t),
                  (r = e.dom()) && r.hasAttribute && r.hasAttribute(n)
                    ? A.some(Mr(e, t))
                    : A.none()
                );
                var n, r;
              };
            return u.bind(function(t) {
              return s(t, "" + fa()).bind(function(n) {
                return s(t, "" + la()).map(function(t) {
                  var r = ha(e, n);
                  return { uid: n, name: t, elements: r };
                });
              });
            });
          },
          ha = function(e, t) {
            var n = fr.fromDom(e.getBody());
            return na(n, "[" + fa() + '="' + t + '"]');
          },
          ma = function(e, n) {
            var r,
              o,
              i,
              a = _i({}),
              u = function(e, t) {
                s(e, function(e) {
                  return t(e), e;
                });
              },
              s = function(e, t) {
                var n = a.get(),
                  r = t(
                    n.hasOwnProperty(e)
                      ? n[e]
                      : { listeners: [], previous: _i(A.none()) }
                  );
                (n[e] = r), a.set(n);
              },
              c = ((r = function() {
                var t = a.get(),
                  n = ae(yr(t));
                j(n, function(t) {
                  s(t, function(n) {
                    var r = n.previous.get();
                    return (
                      da(e, A.some(t)).fold(
                        function() {
                          r.isSome() &&
                            ((function(e) {
                              u(e, function(t) {
                                j(t.listeners, function(t) {
                                  return t(!1, e);
                                });
                              });
                            })(t),
                            n.previous.set(A.none()));
                        },
                        function(e) {
                          var t = e.uid,
                            o = e.name,
                            i = e.elements;
                          r.is(t) ||
                            ((function(e, t, n) {
                              u(e, function(r) {
                                j(r.listeners, function(r) {
                                  return r(!0, e, {
                                    uid: t,
                                    nodes: U(n, function(e) {
                                      return e.dom();
                                    })
                                  });
                                });
                              });
                            })(o, t, i),
                            n.previous.set(A.some(t)));
                        }
                      ),
                      { previous: n.previous, listeners: n.listeners }
                    );
                  });
                });
              }),
              (o = 30),
              (i = null),
              {
                cancel: function() {
                  null !== i && (t.clearTimeout(i), (i = null));
                },
                throttle: function() {
                  for (var e = [], n = 0; n < arguments.length; n++)
                    e[n] = arguments[n];
                  null !== i && t.clearTimeout(i),
                    (i = t.setTimeout(function() {
                      r.apply(null, e), (i = null);
                    }, o));
                }
              });
            return (
              e.on("remove", function() {
                c.cancel();
              }),
              e.on("NodeChange", function() {
                c.throttle();
              }),
              {
                addListener: function(e, t) {
                  s(e, function(e) {
                    return {
                      previous: e.previous,
                      listeners: e.listeners.concat([t])
                    };
                  });
                }
              }
            );
          },
          ga = function(e, t) {
            e.on("init", function() {
              e.serializer.addNodeFilter("span", function(e) {
                j(e, function(e) {
                  (function(e) {
                    return A.from(e.attr(la())).bind(t.lookup);
                  })(e).each(function(t) {
                    !1 === t.persistent && e.unwrap();
                  });
                });
              });
            });
          },
          pa = 0,
          va = function(e, t) {
            return fr.fromDom(e.dom().cloneNode(t));
          },
          ba = function(e) {
            return va(e, !1);
          },
          ya = function(e) {
            return va(e, !0);
          },
          Ca = function(e, n) {
            var r,
              o,
              i = Kr(e).dom(),
              a = fr.fromDom(i.createDocumentFragment()),
              u = ((r = n),
              ((o = (i || t.document).createElement("div")).innerHTML = r),
              eo(fr.fromDom(o)));
            Ui(a, u), ji(e), Fi(e, a);
          },
          wa = function(e) {
            return "\ufeff" === e;
          },
          xa = "\ufeff",
          za = function(e) {
            return e.replace(new RegExp("\ufeff", "g"), "");
          },
          Sa = To.isElement,
          Na = To.isText,
          Ea = function(e) {
            return (
              Na(e) && (e = e.parentNode),
              Sa(e) && e.hasAttribute("data-mce-caret")
            );
          },
          ka = function(e) {
            return Na(e) && wa(e.data);
          },
          Ta = function(e) {
            return Ea(e) || ka(e);
          },
          Aa = function(e) {
            return e.firstChild !== e.lastChild || !To.isBr(e.firstChild);
          },
          Ma = function(e, t) {
            var n, r, o;
            if (
              ((r = e.ownerDocument.createTextNode(xa)), (o = e.parentNode), t)
            ) {
              if (((n = e.previousSibling), Na(n))) {
                if (Ta(n)) return n;
                if (Da(n)) return n.splitText(n.data.length - 1);
              }
              o.insertBefore(r, e);
            } else {
              if (((n = e.nextSibling), Na(n))) {
                if (Ta(n)) return n;
                if (Oa(n)) return n.splitText(1), n;
              }
              e.nextSibling
                ? o.insertBefore(r, e.nextSibling)
                : o.appendChild(r);
            }
            return r;
          },
          _a = function(e) {
            var t = e.container();
            return (
              !(!e || !To.isText(t)) &&
              (t.data.charAt(e.offset()) === xa ||
                (e.isAtStart() && ka(t.previousSibling)))
            );
          },
          Ra = function(e) {
            var t = e.container();
            return (
              !(!e || !To.isText(t)) &&
              (t.data.charAt(e.offset() - 1) === xa ||
                (e.isAtEnd() && ka(t.nextSibling)))
            );
          },
          Ba = function(e, n, r) {
            var o, i, a;
            return (
              (o = n.ownerDocument.createElement(e)).setAttribute(
                "data-mce-caret",
                r ? "before" : "after"
              ),
              o.setAttribute("data-mce-bogus", "all"),
              o.appendChild(
                ((a = t.document.createElement("br")).setAttribute(
                  "data-mce-bogus",
                  "1"
                ),
                a)
              ),
              (i = n.parentNode),
              r
                ? i.insertBefore(o, n)
                : n.nextSibling
                ? i.insertBefore(o, n.nextSibling)
                : i.appendChild(o),
              o
            );
          },
          Oa = function(e) {
            return Na(e) && e.data[0] === xa;
          },
          Da = function(e) {
            return Na(e) && e.data[e.data.length - 1] === xa;
          },
          Ha = function(e) {
            return e && e.hasAttribute("data-mce-caret")
              ? ((t = e.getElementsByTagName("br")),
                (n = t[t.length - 1]),
                To.isBogus(n) && n.parentNode.removeChild(n),
                e.removeAttribute("data-mce-caret"),
                e.removeAttribute("data-mce-bogus"),
                e.removeAttribute("style"),
                e.removeAttribute("_moz_abspos"),
                e)
              : null;
            var t, n;
          },
          Pa = function(e) {
            return Ea(e.startContainer);
          },
          La = To.isContentEditableTrue,
          Va = To.isContentEditableFalse,
          Ia = To.isBr,
          Fa = To.isText,
          Ua = To.matchNodeNames("script style textarea"),
          ja = To.matchNodeNames(
            "img input textarea hr iframe video audio object"
          ),
          qa = To.matchNodeNames("table"),
          $a = Ta,
          Wa = function(e) {
            return (
              !$a(e) &&
              (Fa(e) ? !Ua(e.parentNode) : ja(e) || Ia(e) || qa(e) || Ka(e))
            );
          },
          Ka = function(e) {
            return (
              !1 ===
                (function(e) {
                  return (
                    To.isElement(e) && "true" === e.getAttribute("unselectable")
                  );
                })(e) && Va(e)
            );
          },
          Xa = function(e, t) {
            return (
              Wa(e) &&
              (function(e, t) {
                for (e = e.parentNode; e && e !== t; e = e.parentNode) {
                  if (Ka(e)) return !1;
                  if (La(e)) return !0;
                }
                return !0;
              })(e, t)
            );
          },
          Ya = Math.round,
          Ga = function(e) {
            return e
              ? {
                  left: Ya(e.left),
                  top: Ya(e.top),
                  bottom: Ya(e.bottom),
                  right: Ya(e.right),
                  width: Ya(e.width),
                  height: Ya(e.height)
                }
              : { left: 0, top: 0, bottom: 0, right: 0, width: 0, height: 0 };
          },
          Ja = function(e, t) {
            return (
              (e = Ga(e)),
              t
                ? (e.right = e.left)
                : ((e.left = e.left + e.width), (e.right = e.left)),
              (e.width = 0),
              e
            );
          },
          Qa = function(e, t, n) {
            return e >= 0 && e <= Math.min(t.height, n.height) / 2;
          },
          Za = function(e, t) {
            return (
              e.bottom - e.height / 2 < t.top ||
              (!(e.top > t.bottom) && Qa(t.top - e.bottom, e, t))
            );
          },
          eu = function(e, t) {
            return (
              e.top > t.bottom ||
              (!(e.bottom < t.top) && Qa(t.bottom - e.top, e, t))
            );
          },
          tu = function(e, t) {
            return t.left > e.left && t.right < e.right
              ? 0
              : t.left < e.left
              ? t.left - e.left
              : t.right - e.right;
          },
          nu = function(e, t) {
            return t.top > e.top && t.bottom < e.bottom
              ? 0
              : t.top < e.top
              ? t.top - e.top
              : t.bottom - e.bottom;
          },
          ru = function(e) {
            var t = e.startContainer,
              n = e.startOffset;
            return t.hasChildNodes() && e.endOffset === n + 1
              ? t.childNodes[n]
              : null;
          },
          ou = function(e, t) {
            return (
              1 === e.nodeType &&
                e.hasChildNodes() &&
                (t >= e.childNodes.length && (t = e.childNodes.length - 1),
                (e = e.childNodes[t])),
              e
            );
          },
          iu = new RegExp(
            "[̀-ͯ҃-҇҈-҉֑-ֽֿׁ-ׂׄ-ׇׅؐ-ًؚ-ٰٟۖ-ۜ۟-ۤۧ-۪ۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣣ-ंऺ़ु-ै्॑-ॗॢ-ॣঁ়াু-ৄ্ৗৢ-ৣਁ-ਂ਼ੁ-ੂੇ-ੈੋ-੍ੑੰ-ੱੵઁ-ં઼ુ-ૅે-ૈ્ૢ-ૣଁ଼ାିୁ-ୄ୍ୖୗୢ-ୣஂாீ்ௗఀా-ీె-ైొ-్ౕ-ౖౢ-ౣಁ಼ಿೂೆೌ-್ೕ-ೖೢ-ೣഁാു-ൄ്ൗൢ-ൣ්ාි-ුූෟัิ-ฺ็-๎ັິ-ູົ-ຼ່-ໍ༘-ཱ༹༙༵༷-ཾྀ-྄྆-྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္-်ွ-ှၘ-ၙၞ-ၠၱ-ၴႂႅ-ႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒ-ᝓᝲ-ᝳ឴-឵ិ-ួំ៉-៓៝᠋-᠍ᢩᤠ-ᤢᤧ-ᤨᤲ᤹-᤻ᨗ-ᨘᨛᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼᪰-᪽᪾ᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀ-ᮁᮢ-ᮥᮨ-ᮩ᮫-ᮭ᯦ᯨ-ᯩᯭᯯ-ᯱᰬ-ᰳᰶ-᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸-᳹᷀-᷵᷼-᷿‌-‍⃐-⃜⃝-⃠⃡⃢-⃤⃥-⃰⳯-⵿⳱ⷠ-〪ⷿ-〭〮-゙〯-゚꙯꙰-꙲ꙴ-꙽ꚞ-ꚟ꛰-꛱ꠂ꠆ꠋꠥ-ꠦ꣄꣠-꣱ꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꧥꨩ-ꨮꨱ-ꨲꨵ-ꨶꩃꩌꩼꪰꪲ-ꪴꪷ-ꪸꪾ-꪿꫁ꫬ-ꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︯ﾞ-ﾟ]"
          ),
          au = function(e) {
            return "string" == typeof e && e.charCodeAt(0) >= 768 && iu.test(e);
          },
          uu = function(e, t) {
            for (var n = [], r = 0; r < e.length; r++) {
              var o = e[r];
              if (!o.isSome()) return A.none();
              n.push(o.getOrDie());
            }
            return A.some(t.apply(null, n));
          },
          su = [].slice,
          cu = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            var n = su.call(arguments);
            return function(e) {
              for (var t = 0; t < n.length; t++) if (!n[t](e)) return !1;
              return !0;
            };
          },
          lu = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            var n = su.call(arguments);
            return function(e) {
              for (var t = 0; t < n.length; t++) if (n[t](e)) return !0;
              return !1;
            };
          },
          fu = To.isElement,
          du = Wa,
          hu = To.matchStyleValues("display", "block table"),
          mu = To.matchStyleValues("float", "left right"),
          gu = cu(fu, du, C(mu)),
          pu = C(To.matchStyleValues("white-space", "pre pre-line pre-wrap")),
          vu = To.isText,
          bu = To.isBr,
          yu = Si.nodeIndex,
          Cu = ou,
          wu = function(e) {
            return "createRange" in e ? e.createRange() : Si.DOM.createRng();
          },
          xu = function(e) {
            return e && /[\r\n\t ]/.test(e);
          },
          zu = function(e) {
            return !!e.setStart && !!e.setEnd;
          },
          Su = function(e) {
            var t,
              n = e.startContainer,
              r = e.startOffset;
            return !!(
              xu(e.toString()) &&
              pu(n.parentNode) &&
              To.isText(n) &&
              ((t = n.data), xu(t[r - 1]) || xu(t[r + 1]))
            );
          },
          Nu = function(e) {
            return (
              0 === e.left && 0 === e.right && 0 === e.top && 0 === e.bottom
            );
          },
          Eu = function(e) {
            var t, n;
            return (
              (t =
                (n = e.getClientRects()).length > 0
                  ? Ga(n[0])
                  : Ga(e.getBoundingClientRect())),
              !zu(e) && bu(e) && Nu(t)
                ? (function(e) {
                    var t,
                      n = e.ownerDocument,
                      r = wu(n),
                      o = n.createTextNode(" "),
                      i = e.parentNode;
                    return (
                      i.insertBefore(o, e),
                      r.setStart(o, 0),
                      r.setEnd(o, 1),
                      (t = Ga(r.getBoundingClientRect())),
                      i.removeChild(o),
                      t
                    );
                  })(e)
                : Nu(t) && zu(e)
                ? (function(e) {
                    var t = e.startContainer,
                      n = e.endContainer,
                      r = e.startOffset,
                      o = e.endOffset;
                    if (t === n && To.isText(n) && 0 === r && 1 === o) {
                      var i = e.cloneRange();
                      return i.setEndAfter(n), Eu(i);
                    }
                    return null;
                  })(e)
                : t
            );
          },
          ku = function(e, t) {
            var n = Ja(e, t);
            return (n.width = 1), (n.right = n.left + 1), n;
          },
          Tu = function(e) {
            var t,
              n,
              r = [],
              o = function(e) {
                var t, n;
                0 !== e.height &&
                  ((r.length > 0 &&
                    ((t = e),
                    (n = r[r.length - 1]),
                    t.left === n.left &&
                      t.top === n.top &&
                      t.bottom === n.bottom &&
                      t.right === n.right)) ||
                    r.push(e));
              },
              i = function(e, t) {
                var n = wu(e.ownerDocument);
                if (t < e.data.length) {
                  if (au(e.data[t])) return r;
                  if (
                    au(e.data[t - 1]) &&
                    (n.setStart(e, t), n.setEnd(e, t + 1), !Su(n))
                  )
                    return o(ku(Eu(n), !1)), r;
                }
                t > 0 &&
                  (n.setStart(e, t - 1),
                  n.setEnd(e, t),
                  Su(n) || o(ku(Eu(n), !1))),
                  t < e.data.length &&
                    (n.setStart(e, t),
                    n.setEnd(e, t + 1),
                    Su(n) || o(ku(Eu(n), !0)));
              };
            if (vu(e.container())) return i(e.container(), e.offset()), r;
            if (fu(e.container()))
              if (e.isAtEnd())
                (n = Cu(e.container(), e.offset())),
                  vu(n) && i(n, n.data.length),
                  gu(n) && !bu(n) && o(ku(Eu(n), !1));
              else {
                if (
                  ((n = Cu(e.container(), e.offset())),
                  vu(n) && i(n, 0),
                  gu(n) && e.isAtEnd())
                )
                  return o(ku(Eu(n), !1)), r;
                (t = Cu(e.container(), e.offset() - 1)),
                  gu(t) &&
                    !bu(t) &&
                    (hu(t) || hu(n) || !gu(n)) &&
                    o(ku(Eu(t), !1)),
                  gu(n) && o(ku(Eu(n), !0));
              }
            return r;
          };
        function Au(e, t, n) {
          var r = function() {
            return n || (n = Tu(Au(e, t))), n;
          };
          return {
            container: o(e),
            offset: o(t),
            toRange: function() {
              var n;
              return (
                (n = wu(e.ownerDocument)).setStart(e, t), n.setEnd(e, t), n
              );
            },
            getClientRects: r,
            isVisible: function() {
              return r().length > 0;
            },
            isAtStart: function() {
              return vu(e), 0 === t;
            },
            isAtEnd: function() {
              return vu(e) ? t >= e.data.length : t >= e.childNodes.length;
            },
            isEqual: function(n) {
              return n && e === n.container() && t === n.offset();
            },
            getNode: function(n) {
              return Cu(e, n ? t - 1 : t);
            }
          };
        }
        !(function(e) {
          (e.fromRangeStart = function(t) {
            return e(t.startContainer, t.startOffset);
          }),
            (e.fromRangeEnd = function(t) {
              return e(t.endContainer, t.endOffset);
            }),
            (e.after = function(t) {
              return e(t.parentNode, yu(t) + 1);
            }),
            (e.before = function(t) {
              return e(t.parentNode, yu(t));
            }),
            (e.isAbove = function(e, t) {
              return uu(
                [ue(t.getClientRects()), se(e.getClientRects())],
                Za
              ).getOr(!1);
            }),
            (e.isBelow = function(e, t) {
              return uu(
                [se(t.getClientRects()), ue(e.getClientRects())],
                eu
              ).getOr(!1);
            }),
            (e.isAtStart = function(e) {
              return !!e && e.isAtStart();
            }),
            (e.isAtEnd = function(e) {
              return !!e && e.isAtEnd();
            }),
            (e.isTextPosition = function(e) {
              return !!e && To.isText(e.container());
            }),
            (e.isElementPosition = function(t) {
              return !1 === e.isTextPosition(t);
            });
        })(Au || (Au = {}));
        var Mu,
          _u = Au,
          Ru = To.isText,
          Bu = To.isBogus,
          Ou = Si.nodeIndex,
          Du = function(e) {
            var t = e.parentNode;
            return Bu(t) ? Du(t) : t;
          },
          Hu = function(e) {
            return e
              ? en.reduce(
                  e.childNodes,
                  function(e, t) {
                    return (
                      Bu(t) && "BR" !== t.nodeName
                        ? (e = e.concat(Hu(t)))
                        : e.push(t),
                      e
                    );
                  },
                  []
                )
              : [];
          },
          Pu = function(e) {
            return function(t) {
              return e === t;
            };
          },
          Lu = function(e) {
            return (
              (Ru(e) ? "text()" : e.nodeName.toLowerCase()) +
              "[" +
              (function(e) {
                var t, n, r;
                return (
                  (t = Hu(Du(e))),
                  (n = en.findIndex(t, Pu(e), e)),
                  (t = t.slice(0, n + 1)),
                  (r = en.reduce(
                    t,
                    function(e, n, r) {
                      return Ru(n) && Ru(t[r - 1]) && e++, e;
                    },
                    0
                  )),
                  (t = en.filter(t, To.matchNodeNames(e.nodeName))),
                  (n = en.findIndex(t, Pu(e), e)) - r
                );
              })(e) +
              "]"
            );
          },
          Vu = function(e, t) {
            var n,
              r,
              o,
              i,
              a,
              u = [];
            return (
              (n = t.container()),
              (r = t.offset()),
              Ru(n)
                ? (o = (function(e, t) {
                    for (; (e = e.previousSibling) && Ru(e); )
                      t += e.data.length;
                    return t;
                  })(n, r))
                : (r >= (i = n.childNodes).length
                    ? ((o = "after"), (r = i.length - 1))
                    : (o = "before"),
                  (n = i[r])),
              u.push(Lu(n)),
              (a = (function(e, t, n) {
                var r = [];
                for (
                  t = t.parentNode;
                  !(t === e || (n && n(t)));
                  t = t.parentNode
                )
                  r.push(t);
                return r;
              })(e, n)),
              (a = en.filter(a, C(To.isBogus))),
              (u = u.concat(
                en.map(a, function(e) {
                  return Lu(e);
                })
              ))
                .reverse()
                .join("/") +
                "," +
                o
            );
          },
          Iu = function(e, t) {
            var n, r, o;
            return t
              ? ((n = t.split(",")),
                (t = n[0].split("/")),
                (o = n.length > 1 ? n[1] : "before"),
                (r = en.reduce(
                  t,
                  function(e, t) {
                    return (t = /([\w\-\(\)]+)\[([0-9]+)\]/.exec(t))
                      ? ("text()" === t[1] && (t[1] = "#text"),
                        (n = e),
                        (r = t[1]),
                        (o = parseInt(t[2], 10)),
                        (i = Hu(n)),
                        (i = en.filter(i, function(e, t) {
                          return !Ru(e) || !Ru(i[t - 1]);
                        })),
                        (i = en.filter(i, To.matchNodeNames(r)))[o])
                      : null;
                    var n, r, o, i;
                  },
                  e
                ))
                  ? Ru(r)
                    ? (function(e, t) {
                        for (var n, r = e, o = 0; Ru(r); ) {
                          if (((n = r.data.length), t >= o && t <= o + n)) {
                            (e = r), (t -= o);
                            break;
                          }
                          if (!Ru(r.nextSibling)) {
                            (e = r), (t = n);
                            break;
                          }
                          (o += n), (r = r.nextSibling);
                        }
                        return (
                          Ru(e) && t > e.data.length && (t = e.data.length),
                          _u(e, t)
                        );
                      })(r, parseInt(o, 10))
                    : ((o = "after" === o ? Ou(r) + 1 : Ou(r)),
                      _u(r.parentNode, o))
                  : null)
              : null;
          },
          Fu = function(e, t) {
            To.isText(t) && 0 === t.data.length && e.remove(t);
          },
          Uu = function(e, t, n) {
            To.isDocumentFragment(n)
              ? (function(e, t, n) {
                  var r = A.from(n.firstChild),
                    o = A.from(n.lastChild);
                  t.insertNode(n),
                    r.each(function(t) {
                      return Fu(e, t.previousSibling);
                    }),
                    o.each(function(t) {
                      return Fu(e, t.nextSibling);
                    });
                })(e, t, n)
              : (function(e, t, n) {
                  t.insertNode(n),
                    Fu(e, n.previousSibling),
                    Fu(e, n.nextSibling);
                })(e, t, n);
          },
          ju = To.isContentEditableFalse,
          qu = function(e, t, n, r, o) {
            var i,
              a = r[o ? "startContainer" : "endContainer"],
              u = r[o ? "startOffset" : "endOffset"],
              s = [],
              c = 0,
              l = e.getRoot();
            for (
              To.isText(a)
                ? s.push(
                    n
                      ? (function(e, t, n) {
                          var r, o;
                          for (
                            o = e(t.data.slice(0, n)).length,
                              r = t.previousSibling;
                            r && To.isText(r);
                            r = r.previousSibling
                          )
                            o += e(r.data).length;
                          return o;
                        })(t, a, u)
                      : u
                  )
                : (u >= (i = a.childNodes).length &&
                    i.length &&
                    ((c = 1), (u = Math.max(0, i.length - 1))),
                  s.push(e.nodeIndex(i[u], n) + c));
              a && a !== l;
              a = a.parentNode
            )
              s.push(e.nodeIndex(a, n));
            return s;
          },
          $u = function(e, t, n) {
            var r = 0;
            return (
              an.each(e.select(t), function(e) {
                if ("all" !== e.getAttribute("data-mce-bogus"))
                  return e !== n && void r++;
              }),
              r
            );
          },
          Wu = function(e, t) {
            var n,
              r,
              o,
              i = t ? "start" : "end";
            (n = e[i + "Container"]),
              (r = e[i + "Offset"]),
              To.isElement(n) &&
                "TR" === n.nodeName &&
                (n = (o = n.childNodes)[
                  Math.min(t ? r : r - 1, o.length - 1)
                ]) &&
                ((r = t ? 0 : n.childNodes.length),
                e["set" + (t ? "Start" : "End")](n, r));
          },
          Ku = function(e) {
            return Wu(e, !0), Wu(e, !1), e;
          },
          Xu = function(e, t) {
            var n;
            if (To.isElement(e) && ((e = ou(e, t)), ju(e))) return e;
            if (Ta(e)) {
              if (
                (To.isText(e) && Ea(e) && (e = e.parentNode),
                (n = e.previousSibling),
                ju(n))
              )
                return n;
              if (((n = e.nextSibling), ju(n))) return n;
            }
          },
          Yu = function(e, t, n) {
            var r = n.getNode(),
              o = r ? r.nodeName : null,
              i = n.getRng();
            if (ju(r) || "IMG" === o)
              return { name: o, index: $u(n.dom, o, r) };
            var a = (function(e) {
              return (
                Xu(e.startContainer, e.startOffset) ||
                Xu(e.endContainer, e.endOffset)
              );
            })(i);
            return a
              ? { name: (o = a.tagName), index: $u(n.dom, o, a) }
              : (function(e, t, n, r) {
                  var o = t.dom,
                    i = {};
                  return (
                    (i.start = qu(o, e, n, r, !0)),
                    t.isCollapsed() || (i.end = qu(o, e, n, r, !1)),
                    i
                  );
                })(e, n, t, i);
          },
          Gu = function(e, t, n) {
            var r = {
              "data-mce-type": "bookmark",
              id: t,
              style: "overflow:hidden;line-height:0px"
            };
            return n ? e.create("span", r, "&#xFEFF;") : e.create("span", r);
          },
          Ju = function(e, t) {
            var n = e.dom,
              r = e.getRng(),
              o = n.uniqueId(),
              i = e.isCollapsed(),
              a = e.getNode(),
              u = a.nodeName;
            if ("IMG" === u) return { name: u, index: $u(n, u, a) };
            var s = Ku(r.cloneRange());
            if (!i) {
              s.collapse(!1);
              var c = Gu(n, o + "_end", t);
              Uu(n, s, c);
            }
            (r = Ku(r)).collapse(!0);
            var l = Gu(n, o + "_start", t);
            return Uu(n, r, l), e.moveToBookmark({ id: o, keep: 1 }), { id: o };
          },
          Qu = {
            getBookmark: function(e, t, n) {
              return 2 === t
                ? Yu(za, n, e)
                : 3 === t
                ? (function(e) {
                    var t = e.getRng();
                    return {
                      start: Vu(e.dom.getRoot(), _u.fromRangeStart(t)),
                      end: Vu(e.dom.getRoot(), _u.fromRangeEnd(t))
                    };
                  })(e)
                : t
                ? (function(e) {
                    return { rng: e.getRng() };
                  })(e)
                : Ju(e, !1);
            },
            getUndoBookmark: a(Yu, i, !0),
            getPersistentBookmark: Ju
          },
          Zu = function(e) {
            return To.isElement(e) && "_mce_caret" === e.id;
          },
          es = function(e, t) {
            for (; t && t !== e; ) {
              if ("_mce_caret" === t.id) return t;
              t = t.parentNode;
            }
            return null;
          },
          ts = To.isElement,
          ns = To.isText,
          rs = function(e) {
            var t = e.parentNode;
            t && t.removeChild(e);
          },
          os = function(e, t) {
            0 === t.length ? rs(e) : (e.nodeValue = t);
          },
          is = function(e) {
            var t = za(e);
            return { count: e.length - t.length, text: t };
          },
          as = function(e, t) {
            return cs(e), t;
          },
          us = function(e, t) {
            return ns(e) && t.container() === e
              ? (function(e, t) {
                  var n = is(e.data.substr(0, t.offset())),
                    r = is(e.data.substr(t.offset())),
                    o = n.text + r.text;
                  return o.length > 0
                    ? (os(e, o), _u(e, t.offset() - n.count))
                    : t;
                })(e, t)
              : as(e, t);
          },
          ss = function(e, t) {
            return t.container() === e.parentNode
              ? (function(e, t) {
                  var n = t.container(),
                    r = V(ce(n.childNodes), e)
                      .map(function(e) {
                        return e < t.offset() ? _u(n, t.offset() - 1) : t;
                      })
                      .getOr(t);
                  return cs(e), r;
                })(e, t)
              : as(e, t);
          },
          cs = function(e) {
            if (
              (ts(e) &&
                Ta(e) &&
                (Aa(e) ? e.removeAttribute("data-mce-caret") : rs(e)),
              ns(e))
            ) {
              var t = za(
                (function(e) {
                  try {
                    return e.nodeValue;
                  } catch (e) {
                    return "";
                  }
                })(e)
              );
              os(e, t);
            }
          },
          ls = {
            removeAndReposition: function(e, t) {
              return _u.isTextPosition(t) ? us(e, t) : ss(e, t);
            },
            remove: cs
          },
          fs = cr.detect().browser,
          ds = To.isContentEditableFalse,
          hs = function(e, t, n) {
            var r,
              o,
              i,
              a,
              u,
              s = Ja(t.getBoundingClientRect(), n);
            return (
              "BODY" === e.tagName
                ? ((r = e.ownerDocument.documentElement),
                  (o = e.scrollLeft || r.scrollLeft),
                  (i = e.scrollTop || r.scrollTop))
                : ((u = e.getBoundingClientRect()),
                  (o = e.scrollLeft - u.left),
                  (i = e.scrollTop - u.top)),
              (s.left += o),
              (s.right += o),
              (s.top += i),
              (s.bottom += i),
              (s.width = 1),
              (a = t.offsetWidth - t.clientWidth) > 0 &&
                (n && (a *= -1), (s.left += a), (s.right += a)),
              s
            );
          },
          ms = function(e, t, n) {
            var r,
              o,
              i = _i(A.none()),
              a = function() {
                !(function(e) {
                  var t, n, r, o, i;
                  for (
                    t = Fn("*[contentEditable=false]", e), o = 0;
                    o < t.length;
                    o++
                  )
                    (r = (n = t[o]).previousSibling),
                      Da(r) &&
                        (1 === (i = r.data).length
                          ? r.parentNode.removeChild(r)
                          : r.deleteData(i.length - 1, 1)),
                      (r = n.nextSibling),
                      Oa(r) &&
                        (1 === (i = r.data).length
                          ? r.parentNode.removeChild(r)
                          : r.deleteData(0, 1));
                })(e),
                  o && (ls.remove(o), (o = null)),
                  i.get().each(function(e) {
                    Fn(e.caret).remove(), i.set(A.none());
                  }),
                  je.clearInterval(r);
              },
              u = function() {
                r = je.setInterval(function() {
                  n()
                    ? Fn("div.mce-visual-caret", e).toggleClass(
                        "mce-visual-caret-hidden"
                      )
                    : Fn("div.mce-visual-caret", e).addClass(
                        "mce-visual-caret-hidden"
                      );
                }, 500);
              };
            return {
              show: function(n, r) {
                var s, c, l;
                if (
                  (a(),
                  (l = r),
                  To.isElement(l) && /^(TD|TH)$/i.test(l.tagName))
                )
                  return null;
                if (!t(r))
                  return (
                    (o = Ma(r, n)),
                    (c = r.ownerDocument.createRange()),
                    ds(o.nextSibling)
                      ? (c.setStart(o, 0), c.setEnd(o, 0))
                      : (c.setStart(o, 1), c.setEnd(o, 1)),
                    c
                  );
                (o = Ba("p", r, n)), (s = hs(e, r, n)), Fn(o).css("top", s.top);
                var f = Fn(
                  '<div class="mce-visual-caret" data-mce-bogus="all"></div>'
                )
                  .css(s)
                  .appendTo(e)[0];
                return (
                  i.set(A.some({ caret: f, element: r, before: n })),
                  i.get().each(function(e) {
                    n && Fn(e.caret).addClass("mce-visual-caret-before");
                  }),
                  u(),
                  (c = r.ownerDocument.createRange()).setStart(o, 0),
                  c.setEnd(o, 0),
                  c
                );
              },
              hide: a,
              getCss: function() {
                return ".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}";
              },
              reposition: function() {
                i.get().each(function(t) {
                  var n = hs(e, t.element, t.before);
                  Fn(t.caret).css(Ai({}, n));
                });
              },
              destroy: function() {
                return je.clearInterval(r);
              }
            };
          },
          gs = function() {
            return fs.isIE() || fs.isEdge() || fs.isFirefox();
          },
          ps = function(e) {
            return ds(e) || (To.isTable(e) && gs());
          },
          vs = To.isContentEditableFalse,
          bs = To.matchStyleValues(
            "display",
            "block table table-cell table-caption list-item"
          ),
          ys = Ta,
          Cs = Ea,
          ws = To.isElement,
          xs = Wa,
          zs = function(e) {
            return e > 0;
          },
          Ss = function(e) {
            return e < 0;
          },
          Ns = function(e, t) {
            for (var n; (n = e(t)); ) if (!Cs(n)) return n;
            return null;
          },
          Es = function(e, t, n, r, o) {
            var i = new Ao(e, r);
            if (Ss(t)) {
              if ((vs(e) || Cs(e)) && n((e = Ns(i.prev, !0)))) return e;
              for (; (e = Ns(i.prev, o)); ) if (n(e)) return e;
            }
            if (zs(t)) {
              if ((vs(e) || Cs(e)) && n((e = Ns(i.next, !0)))) return e;
              for (; (e = Ns(i.next, o)); ) if (n(e)) return e;
            }
            return null;
          },
          ks = function(e, t) {
            for (; e && e !== t; ) {
              if (bs(e)) return e;
              e = e.parentNode;
            }
            return null;
          },
          Ts = function(e, t, n) {
            return ks(e.container(), n) === ks(t.container(), n);
          },
          As = function(e, t) {
            var n, r;
            return t
              ? ((n = t.container()),
                (r = t.offset()),
                ws(n) ? n.childNodes[r + e] : null)
              : null;
          },
          Ms = function(e, t) {
            var n = t.ownerDocument.createRange();
            return (
              e
                ? (n.setStartBefore(t), n.setEndBefore(t))
                : (n.setStartAfter(t), n.setEndAfter(t)),
              n
            );
          },
          _s = function(e, t, n) {
            return ks(t, e) === ks(n, e);
          },
          Rs = function(e, t, n) {
            var r, o;
            for (o = e ? "previousSibling" : "nextSibling"; n && n !== t; ) {
              if (((r = n[o]), ys(r) && (r = r[o]), vs(r))) {
                if (_s(t, r, n)) return r;
                break;
              }
              if (xs(r)) break;
              n = n.parentNode;
            }
            return null;
          },
          Bs = a(Ms, !0),
          Os = a(Ms, !1),
          Ds = function(e, t, n) {
            var r,
              o,
              i,
              u,
              s = a(Rs, !0, t),
              c = a(Rs, !1, t);
            if (((o = n.startContainer), (i = n.startOffset), Ea(o))) {
              if (
                (ws(o) || (o = o.parentNode),
                "before" === (u = o.getAttribute("data-mce-caret")) &&
                  ((r = o.nextSibling), ps(r)))
              )
                return Bs(r);
              if ("after" === u && ((r = o.previousSibling), ps(r)))
                return Os(r);
            }
            if (!n.collapsed) return n;
            if (To.isText(o)) {
              if (ys(o)) {
                if (1 === e) {
                  if ((r = c(o))) return Bs(r);
                  if ((r = s(o))) return Os(r);
                }
                if (-1 === e) {
                  if ((r = s(o))) return Os(r);
                  if ((r = c(o))) return Bs(r);
                }
                return n;
              }
              if (Da(o) && i >= o.data.length - 1)
                return 1 === e && (r = c(o)) ? Bs(r) : n;
              if (Oa(o) && i <= 1) return -1 === e && (r = s(o)) ? Os(r) : n;
              if (i === o.data.length) return (r = c(o)) ? Bs(r) : n;
              if (0 === i) return (r = s(o)) ? Os(r) : n;
            }
            return n;
          },
          Hs = function(e, t) {
            return A.from(As(e ? 0 : -1, t)).filter(vs);
          },
          Ps = function(e, t, n) {
            var r = Ds(e, t, n);
            return -1 === e ? Au.fromRangeStart(r) : Au.fromRangeEnd(r);
          },
          Ls = function(e) {
            return A.from(e.getNode()).map(fr.fromDom);
          },
          Vs = function(e, t) {
            for (; (t = e(t)); ) if (t.isVisible()) return t;
            return t;
          },
          Is = function(e, t) {
            var n = Ts(e, t);
            return !(n || !To.isBr(e.getNode())) || n;
          };
        !(function(e) {
          (e[(e.Backwards = -1)] = "Backwards"),
            (e[(e.Forwards = 1)] = "Forwards");
        })(Mu || (Mu = {}));
        var Fs = To.isContentEditableFalse,
          Us = To.isText,
          js = To.isElement,
          qs = To.isBr,
          $s = Wa,
          Ws = function(e) {
            return (
              ja(e) ||
              (function(e) {
                return (
                  !!Ka(e) &&
                  !0 !==
                    X(
                      ce(e.getElementsByTagName("*")),
                      function(e, t) {
                        return e || La(t);
                      },
                      !1
                    )
                );
              })(e)
            );
          },
          Ks = Xa,
          Xs = function(e, t) {
            return e.hasChildNodes() && t < e.childNodes.length
              ? e.childNodes[t]
              : null;
          },
          Ys = function(e, t) {
            if (zs(e)) {
              if ($s(t.previousSibling) && !Us(t.previousSibling))
                return _u.before(t);
              if (Us(t)) return _u(t, 0);
            }
            if (Ss(e)) {
              if ($s(t.nextSibling) && !Us(t.nextSibling)) return _u.after(t);
              if (Us(t)) return _u(t, t.data.length);
            }
            return Ss(e) ? (qs(t) ? _u.before(t) : _u.after(t)) : _u.before(t);
          },
          Gs = function(e, t, n) {
            var r, i, a, u, s;
            if (!js(n) || !t) return null;
            if (t.isEqual(_u.after(n)) && n.lastChild) {
              if (
                ((s = _u.after(n.lastChild)),
                Ss(e) && $s(n.lastChild) && js(n.lastChild))
              )
                return qs(n.lastChild) ? _u.before(n.lastChild) : s;
            } else s = t;
            var c = s.container(),
              l = s.offset();
            if (Us(c)) {
              if (Ss(e) && l > 0) return _u(c, --l);
              if (zs(e) && l < c.length) return _u(c, ++l);
              r = c;
            } else {
              if (Ss(e) && l > 0 && ((i = Xs(c, l - 1)), $s(i)))
                return !Ws(i) && (a = Es(i, e, Ks, i))
                  ? Us(a)
                    ? _u(a, a.data.length)
                    : _u.after(a)
                  : Us(i)
                  ? _u(i, i.data.length)
                  : _u.before(i);
              if (zs(e) && l < c.childNodes.length && ((i = Xs(c, l)), $s(i)))
                return qs(i)
                  ? (function(e, t) {
                      var n = t.nextSibling;
                      return n && $s(n)
                        ? Us(n)
                          ? _u(n, 0)
                          : _u.before(n)
                        : Gs(Mu.Forwards, _u.after(t), e);
                    })(n, i)
                  : !Ws(i) && (a = Es(i, e, Ks, i))
                  ? Us(a)
                    ? _u(a, 0)
                    : _u.before(a)
                  : Us(i)
                  ? _u(i, 0)
                  : _u.after(i);
              r = i || s.getNode();
            }
            return ((zs(e) && s.isAtEnd()) || (Ss(e) && s.isAtStart())) &&
              ((r = Es(r, e, o(!0), n, !0)), Ks(r, n))
              ? Ys(e, r)
              : ((i = Es(r, e, Ks, n)),
                !(u = en.last(
                  W(
                    (function(e, t) {
                      for (var n = []; e && e !== t; )
                        n.push(e), (e = e.parentNode);
                      return n;
                    })(c, n),
                    Fs
                  )
                )) ||
                (i && u.contains(i))
                  ? i
                    ? Ys(e, i)
                    : null
                  : (s = zs(e) ? _u.after(u) : _u.before(u)));
          },
          Js = function(e) {
            return {
              next: function(t) {
                return Gs(Mu.Forwards, t, e);
              },
              prev: function(t) {
                return Gs(Mu.Backwards, t, e);
              }
            };
          },
          Qs = function(e) {
            return _u.isTextPosition(e) ? 0 === e.offset() : Wa(e.getNode());
          },
          Zs = function(e) {
            if (_u.isTextPosition(e)) {
              var t = e.container();
              return e.offset() === t.data.length;
            }
            return Wa(e.getNode(!0));
          },
          ec = function(e, t) {
            return (
              !_u.isTextPosition(e) &&
              !_u.isTextPosition(t) &&
              e.getNode() === t.getNode(!0)
            );
          },
          tc = function(e, t, n) {
            return e
              ? !ec(t, n) &&
                  ((r = t), !(!_u.isTextPosition(r) && To.isBr(r.getNode()))) &&
                  Zs(t) &&
                  Qs(n)
              : !ec(n, t) && Qs(t) && Zs(n);
            var r;
          },
          nc = function(e, t, n) {
            var r = Js(t);
            return A.from(e ? r.next(n) : r.prev(n));
          },
          rc = function(e, t, n) {
            return nc(e, t, n).bind(function(r) {
              return Ts(n, r, t) && tc(e, n, r) ? nc(e, t, r) : A.some(r);
            });
          },
          oc = function(e, t, n, r) {
            return rc(e, t, n).bind(function(n) {
              return r(n) ? oc(e, t, n, r) : A.some(n);
            });
          },
          ic = function(e, t) {
            var n,
              r = e ? t.firstChild : t.lastChild;
            return To.isText(r)
              ? A.some(_u(r, e ? 0 : r.data.length))
              : r
              ? Wa(r)
                ? A.some(
                    e
                      ? _u.before(r)
                      : ((n = r), To.isBr(n) ? _u.before(n) : _u.after(n))
                  )
                : (function(e, t, n) {
                    var r = e ? _u.before(n) : _u.after(n);
                    return nc(e, t, r);
                  })(e, t, r)
              : A.none();
          },
          ac = a(nc, !0),
          uc = a(nc, !1),
          sc = {
            fromPosition: nc,
            nextPosition: ac,
            prevPosition: uc,
            navigate: rc,
            navigateIgnore: oc,
            positionIn: ic,
            firstPositionIn: a(ic, !0),
            lastPositionIn: a(ic, !1)
          },
          cc = function(e, t) {
            return (
              !e.isBlock(t) ||
                t.innerHTML ||
                Le.ie ||
                (t.innerHTML = '<br data-mce-bogus="1" />'),
              t
            );
          },
          lc = function(e, t) {
            return sc.lastPositionIn(e).fold(
              function() {
                return !1;
              },
              function(e) {
                return (
                  t.setStart(e.container(), e.offset()),
                  t.setEnd(e.container(), e.offset()),
                  !0
                );
              }
            );
          },
          fc = function(e, t, n) {
            return !(
              !(function(e) {
                return !1 === e.hasChildNodes();
              })(t) ||
              !es(e, t) ||
              ((function(e, t) {
                var n = e.ownerDocument.createTextNode(xa);
                e.appendChild(n), t.setStart(n, 0), t.setEnd(n, 0);
              })(t, n),
              0)
            );
          },
          dc = function(e, t, n, r) {
            var o,
              i,
              a,
              u,
              s = n[t ? "start" : "end"],
              c = e.getRoot();
            if (s) {
              for (a = s[0], i = c, o = s.length - 1; o >= 1; o--) {
                if (((u = i.childNodes), fc(c, i, r))) return !0;
                if (s[o] > u.length - 1) return !!fc(c, i, r) || lc(i, r);
                i = u[s[o]];
              }
              3 === i.nodeType && (a = Math.min(s[0], i.nodeValue.length)),
                1 === i.nodeType && (a = Math.min(s[0], i.childNodes.length)),
                t ? r.setStart(i, a) : r.setEnd(i, a);
            }
            return !0;
          },
          hc = function(e) {
            return To.isText(e) && e.data.length > 0;
          },
          mc = function(e, t, n) {
            var r,
              o,
              i,
              a,
              u,
              s,
              c = e.get(n.id + "_" + t),
              l = n.keep;
            if (c) {
              if (
                ((r = c.parentNode),
                "start" === t
                  ? (l
                      ? c.hasChildNodes()
                        ? ((r = c.firstChild), (o = 1))
                        : hc(c.nextSibling)
                        ? ((r = c.nextSibling), (o = 0))
                        : hc(c.previousSibling)
                        ? ((r = c.previousSibling),
                          (o = c.previousSibling.data.length))
                        : ((r = c.parentNode), (o = e.nodeIndex(c) + 1))
                      : (o = e.nodeIndex(c)),
                    (u = r),
                    (s = o))
                  : (l
                      ? c.hasChildNodes()
                        ? ((r = c.firstChild), (o = 1))
                        : hc(c.previousSibling)
                        ? ((r = c.previousSibling),
                          (o = c.previousSibling.data.length))
                        : ((r = c.parentNode), (o = e.nodeIndex(c)))
                      : (o = e.nodeIndex(c)),
                    (u = r),
                    (s = o)),
                !l)
              ) {
                for (
                  a = c.previousSibling,
                    i = c.nextSibling,
                    an.each(an.grep(c.childNodes), function(e) {
                      To.isText(e) &&
                        (e.nodeValue = e.nodeValue.replace(/\uFEFF/g, ""));
                    });
                  (c = e.get(n.id + "_" + t));

                )
                  e.remove(c, !0);
                a &&
                  i &&
                  a.nodeType === i.nodeType &&
                  To.isText(a) &&
                  !Le.opera &&
                  ((o = a.nodeValue.length),
                  a.appendData(i.nodeValue),
                  e.remove(i),
                  (u = a),
                  (s = o));
              }
              return A.some(_u(u, s));
            }
            return A.none();
          },
          gc = function(e, t) {
            var n = e.dom;
            if (t) {
              if (
                (function(e) {
                  return an.isArray(e.start);
                })(t)
              )
                return (function(e, t) {
                  var n = e.createRng();
                  return dc(e, !0, t, n) && dc(e, !1, t, n)
                    ? A.some(n)
                    : A.none();
                })(n, t);
              if (
                (function(e) {
                  return "string" == typeof e.start;
                })(t)
              )
                return A.some(
                  (function(e, t) {
                    var n, r;
                    return (
                      (n = e.createRng()),
                      (r = Iu(e.getRoot(), t.start)),
                      n.setStart(r.container(), r.offset()),
                      (r = Iu(e.getRoot(), t.end)),
                      n.setEnd(r.container(), r.offset()),
                      n
                    );
                  })(n, t)
                );
              if (
                (function(e) {
                  return e.hasOwnProperty("id");
                })(t)
              )
                return (function(e, t) {
                  var n,
                    r,
                    o = mc(e, "start", t),
                    i = mc(e, "end", t);
                  return uu(
                    [o, ((n = i), (r = o), n.isSome() ? n : r)],
                    function(t, n) {
                      var r = e.createRng();
                      return (
                        r.setStart(cc(e, t.container()), t.offset()),
                        r.setEnd(cc(e, n.container()), n.offset()),
                        r
                      );
                    }
                  );
                })(n, t);
              if (
                (function(e) {
                  return e.hasOwnProperty("name");
                })(t)
              )
                return (function(e, t) {
                  return A.from(e.select(t.name)[t.index]).map(function(t) {
                    var n = e.createRng();
                    return n.selectNode(t), n;
                  });
                })(n, t);
              if (
                (function(e) {
                  return e.hasOwnProperty("rng");
                })(t)
              )
                return A.some(t.rng);
            }
            return A.none();
          },
          pc = {
            getBookmark: function(e, t, n) {
              return Qu.getBookmark(e, t, n);
            },
            moveToBookmark: function(e, t) {
              gc(e, t).each(function(t) {
                e.setRng(t);
              });
            },
            isBookmarkNode: function(e) {
              return (
                To.isElement(e) &&
                "SPAN" === e.tagName &&
                "bookmark" === e.getAttribute("data-mce-type")
              );
            }
          },
          vc = function(e) {
            return e && /^(IMG)$/.test(e.nodeName);
          },
          bc = function(e) {
            return e && 3 === e.nodeType && /^([\t \r\n]+|)$/.test(e.nodeValue);
          },
          yc = function(e, t, n) {
            return (
              ("color" !== n && "backgroundColor" !== n) || (t = e.toHex(t)),
              "fontWeight" === n && 700 === t && (t = "bold"),
              "fontFamily" === n &&
                (t = t.replace(/[\'\"]/g, "").replace(/,\s+/g, ",")),
              "" + t
            );
          },
          Cc = {
            isInlineBlock: vc,
            moveStart: function(e, t, n) {
              var r,
                o,
                i,
                a = n.startOffset,
                u = n.startContainer;
              if (
                (n.startContainer !== n.endContainer ||
                  !vc(n.startContainer.childNodes[n.startOffset])) &&
                1 === u.nodeType
              )
                for (
                  a < (i = u.childNodes).length
                    ? ((u = i[a]), (r = new Ao(u, e.getParent(u, e.isBlock))))
                    : ((u = i[i.length - 1]),
                      (r = new Ao(u, e.getParent(u, e.isBlock))).next(!0)),
                    o = r.current();
                  o;
                  o = r.next()
                )
                  if (3 === o.nodeType && !bc(o))
                    return n.setStart(o, 0), void t.setRng(n);
            },
            getNonWhiteSpaceSibling: function(e, t, n) {
              if (e)
                for (
                  t = t ? "nextSibling" : "previousSibling", e = n ? e : e[t];
                  e;
                  e = e[t]
                )
                  if (1 === e.nodeType || !bc(e)) return e;
            },
            isTextBlock: function(e, t) {
              return (
                t.nodeType && (t = t.nodeName),
                !!e.schema.getTextBlockElements()[t.toLowerCase()]
              );
            },
            isValid: function(e, t, n) {
              return e.schema.isValidChild(t, n);
            },
            isWhiteSpaceNode: bc,
            replaceVars: function(e, t) {
              return (
                "string" != typeof e
                  ? (e = e(t))
                  : t &&
                    (e = e.replace(/%(\w+)/g, function(e, n) {
                      return t[n] || e;
                    })),
                e
              );
            },
            isEq: function(e, t) {
              return (
                (t = t || ""),
                (e = "" + ((e = e || "").nodeName || e)),
                (t = "" + (t.nodeName || t)),
                e.toLowerCase() === t.toLowerCase()
              );
            },
            normalizeStyleValue: yc,
            getStyle: function(e, t, n) {
              return yc(e, e.getStyle(t, n), n);
            },
            getTextDecoration: function(e, t) {
              var n;
              return (
                e.getParent(t, function(t) {
                  return (n = e.getStyle(t, "text-decoration")) && "none" !== n;
                }),
                n
              );
            },
            getParents: function(e, t, n) {
              return e.getParents(t, n, e.getRoot());
            }
          },
          wc = pc.isBookmarkNode,
          xc = Cc.getParents,
          zc = Cc.isWhiteSpaceNode,
          Sc = Cc.isTextBlock,
          Nc = function(e, t) {
            for (
              void 0 === t &&
              (t = 3 === e.nodeType ? e.length : e.childNodes.length);
              e && e.hasChildNodes();

            )
              (e = e.childNodes[t]) &&
                (t = 3 === e.nodeType ? e.length : e.childNodes.length);
            return { node: e, offset: t };
          },
          Ec = function(e, t) {
            for (var n = t; n; ) {
              if (1 === n.nodeType && e.getContentEditable(n))
                return "false" === e.getContentEditable(n) ? n : t;
              n = n.parentNode;
            }
            return t;
          },
          kc = function(e, t, n, r) {
            var o,
              i,
              a = n.nodeValue;
            return (
              void 0 === r && (r = e ? a.length : 0),
              e
                ? -1 !==
                    (o =
                      (o = a.lastIndexOf(" ", r)) > (i = a.lastIndexOf(" ", r))
                        ? o
                        : i) &&
                  !t &&
                  (o < r || !e) &&
                  o <= a.length &&
                  o++
                : ((o = a.indexOf(" ", r)),
                  (i = a.indexOf(" ", r)),
                  (o = -1 !== o && (-1 === i || o < i) ? o : i)),
              o
            );
          },
          Tc = function(e, t, n, r, o, i) {
            var a, u, s;
            if (3 === n.nodeType) {
              if (-1 !== (u = kc(o, i, n, r)))
                return { container: n, offset: u };
              s = n;
            }
            for (
              var c = new Ao(n, e.getParent(n, e.isBlock) || t);
              (a = c[o ? "prev" : "next"]());

            )
              if (3 !== a.nodeType || wc(a.parentNode)) {
                if (e.isBlock(a) || Cc.isEq(a, "BR")) break;
              } else if (((s = a), -1 !== (u = kc(o, i, a))))
                return { container: a, offset: u };
            if (s) return { container: s, offset: (r = o ? 0 : s.length) };
          },
          Ac = function(e, t, n, r, o) {
            var i, a, u, s;
            for (
              3 === r.nodeType &&
                0 === r.nodeValue.length &&
                r[o] &&
                (r = r[o]),
                i = xc(e, r),
                a = 0;
              a < i.length;
              a++
            )
              for (u = 0; u < t.length; u++)
                if (
                  !("collapsed" in (s = t[u]) && s.collapsed !== n.collapsed) &&
                  e.is(i[a], s.selector)
                )
                  return i[a];
            return r;
          },
          Mc = function(e, t, n, r) {
            var o,
              i = e.dom,
              a = i.getRoot();
            if ((t[0].wrapper || (o = i.getParent(n, t[0].block, a)), !o)) {
              var u = i.getParent(n, "LI,TD,TH");
              o = i.getParent(
                3 === n.nodeType ? n.parentNode : n,
                function(t) {
                  return t !== a && Sc(e, t);
                },
                u
              );
            }
            if (
              (o && t[0].wrapper && (o = xc(i, o, "ul,ol").reverse()[0] || o),
              !o)
            )
              for (
                o = n;
                o[r] && !i.isBlock(o[r]) && ((o = o[r]), !Cc.isEq(o, "br"));

              );
            return o || n;
          },
          _c = function(e, t, n, r, o, i, a) {
            var u, s, c, l, f, d;
            if (
              ((u = s = a ? n : o),
              (l = a ? "previousSibling" : "nextSibling"),
              (f = e.getRoot()),
              3 === u.nodeType &&
                !zc(u) &&
                (a ? r > 0 : i < u.nodeValue.length))
            )
              return u;
            for (;;) {
              if (!t[0].block_expand && e.isBlock(s)) return s;
              for (c = s[l]; c; c = c[l])
                if (
                  !wc(c) &&
                  !zc(c) &&
                  ("BR" !== (d = c).nodeName ||
                    !d.getAttribute("data-mce-bogus") ||
                    d.nextSibling)
                )
                  return s;
              if (s === f || s.parentNode === f) {
                u = s;
                break;
              }
              s = s.parentNode;
            }
            return u;
          },
          Rc = function(e, t, n, r) {
            var o,
              i = t.startContainer,
              a = t.startOffset,
              u = t.endContainer,
              s = t.endOffset,
              c = e.dom;
            return (
              1 === i.nodeType &&
                i.hasChildNodes() &&
                3 === (i = ou(i, a)).nodeType &&
                (a = 0),
              1 === u.nodeType &&
                u.hasChildNodes() &&
                3 === (u = ou(u, t.collapsed ? s : s - 1)).nodeType &&
                (s = u.nodeValue.length),
              (i = Ec(c, i)),
              (u = Ec(c, u)),
              (wc(i.parentNode) || wc(i)) &&
                ((i = wc(i) ? i : i.parentNode),
                3 ===
                  (i = t.collapsed
                    ? i.previousSibling || i
                    : i.nextSibling || i).nodeType &&
                  (a = t.collapsed ? i.length : 0)),
              (wc(u.parentNode) || wc(u)) &&
                ((u = wc(u) ? u : u.parentNode),
                3 ===
                  (u = t.collapsed
                    ? u.nextSibling || u
                    : u.previousSibling || u).nodeType &&
                  (s = t.collapsed ? 0 : u.length)),
              t.collapsed &&
                ((o = Tc(c, e.getBody(), i, a, !0, r)) &&
                  ((i = o.container), (a = o.offset)),
                (o = Tc(c, e.getBody(), u, s, !1, r)) &&
                  ((u = o.container), (s = o.offset))),
              n[0].inline &&
                (u = r
                  ? u
                  : (function(e, t) {
                      var n = Nc(e, t);
                      if (n.node) {
                        for (
                          ;
                          n.node && 0 === n.offset && n.node.previousSibling;

                        )
                          n = Nc(n.node.previousSibling);
                        n.node &&
                          n.offset > 0 &&
                          3 === n.node.nodeType &&
                          " " === n.node.nodeValue.charAt(n.offset - 1) &&
                          n.offset > 1 &&
                          (e = n.node).splitText(n.offset - 1);
                      }
                      return e;
                    })(u, s)),
              (n[0].inline || n[0].block_expand) &&
                ((n[0].inline && 3 === i.nodeType && 0 !== a) ||
                  (i = _c(c, n, i, a, u, s, !0)),
                (n[0].inline && 3 === u.nodeType && s !== u.nodeValue.length) ||
                  (u = _c(c, n, i, a, u, s, !1))),
              n[0].selector &&
                !1 !== n[0].expand &&
                !n[0].inline &&
                ((i = Ac(c, n, t, i, "previousSibling")),
                (u = Ac(c, n, t, u, "nextSibling"))),
              (n[0].block || n[0].selector) &&
                ((i = Mc(e, n, i, "previousSibling")),
                (u = Mc(e, n, u, "nextSibling")),
                n[0].block &&
                  (c.isBlock(i) || (i = _c(c, n, i, a, u, s, !0)),
                  c.isBlock(u) || (u = _c(c, n, i, a, u, s, !1)))),
              1 === i.nodeType && ((a = c.nodeIndex(i)), (i = i.parentNode)),
              1 === u.nodeType &&
                ((s = c.nodeIndex(u) + 1), (u = u.parentNode)),
              {
                startContainer: i,
                startOffset: a,
                endContainer: u,
                endOffset: s
              }
            );
          },
          Bc = an.each,
          Oc = {
            walk: function(e, t, n) {
              var r,
                o,
                i,
                a,
                u,
                s,
                c,
                l = t.startContainer,
                f = t.startOffset,
                d = t.endContainer,
                h = t.endOffset;
              if (
                (c = e.select("td[data-mce-selected],th[data-mce-selected]"))
                  .length > 0
              )
                Bc(c, function(e) {
                  n([e]);
                });
              else {
                var m,
                  g,
                  p,
                  v = function(e) {
                    var t;
                    return (
                      3 === (t = e[0]).nodeType &&
                        t === l &&
                        f >= t.nodeValue.length &&
                        e.splice(0, 1),
                      (t = e[e.length - 1]),
                      0 === h &&
                        e.length > 0 &&
                        t === d &&
                        3 === t.nodeType &&
                        e.splice(e.length - 1, 1),
                      e
                    );
                  },
                  b = function(e, t, n) {
                    for (var r = []; e && e !== n; e = e[t]) r.push(e);
                    return r;
                  },
                  y = function(e, t) {
                    do {
                      if (e.parentNode === t) return e;
                      e = e.parentNode;
                    } while (e);
                  },
                  C = function(e, t, r) {
                    var o = r ? "nextSibling" : "previousSibling";
                    for (u = (a = e).parentNode; a && a !== t; a = u)
                      (u = a.parentNode),
                        (s = b(a === e ? a : a[o], o)).length &&
                          (r || s.reverse(), n(v(s)));
                  };
                if (
                  (1 === l.nodeType &&
                    l.hasChildNodes() &&
                    (l = l.childNodes[f]),
                  1 === d.nodeType &&
                    d.hasChildNodes() &&
                    ((g = h),
                    (p = (m = d).childNodes),
                    --g > p.length - 1 ? (g = p.length - 1) : g < 0 && (g = 0),
                    (d = p[g] || m)),
                  l === d)
                )
                  return n(v([l]));
                for (
                  r = e.findCommonAncestor(l, d), a = l;
                  a;
                  a = a.parentNode
                ) {
                  if (a === d) return C(l, r, !0);
                  if (a === r) break;
                }
                for (a = d; a; a = a.parentNode) {
                  if (a === l) return C(d, r);
                  if (a === r) break;
                }
                (o = y(l, r) || l),
                  (i = y(d, r) || d),
                  C(l, o, !0),
                  (s = b(
                    o === l ? o : o.nextSibling,
                    "nextSibling",
                    i === d ? i.nextSibling : i
                  )).length && n(v(s)),
                  C(d, i);
              }
            }
          },
          Dc = (function(e, t) {
            var n = function(t) {
                return e(t) ? A.from(t.dom().nodeValue) : A.none();
              },
              r = cr.detect().browser,
              o =
                r.isIE() && 10 === r.version.major
                  ? function(e) {
                      try {
                        return n(e);
                      } catch (e) {
                        return A.none();
                      }
                    }
                  : n;
            return {
              get: function(n) {
                if (!e(n))
                  throw new Error(
                    "Can only get " + t + " value of a " + t + " node"
                  );
                return o(n).getOr("");
              },
              getOption: o,
              set: function(n, r) {
                if (!e(n))
                  throw new Error(
                    "Can only set raw " + t + " value of a " + t + " node"
                  );
                n.dom().nodeValue = r;
              }
            };
          })(br, "text"),
          Hc = function(e) {
            return Dc.get(e);
          },
          Pc = function(e, t, n, r) {
            return Xr(t).fold(
              function() {
                return "skipping";
              },
              function(o) {
                return "br" === r ||
                  (function(e) {
                    return br(e) && "\ufeff" === Hc(e);
                  })(t)
                  ? "valid"
                  : (function(e) {
                      return vr(e) && ea(e, ca());
                    })(t)
                  ? "existing"
                  : Zu(t)
                  ? "caret"
                  : Cc.isValid(e, n, r) && Cc.isValid(e, gr(o), n)
                  ? "valid"
                  : "invalid-child";
              }
            );
          },
          Lc = function(e, t, n, r) {
            var o,
              i,
              a = t.uid,
              u =
                void 0 === a
                  ? ((o = "mce-annotation"),
                    (i = new Date().getTime()),
                    o +
                      "_" +
                      Math.floor(1e9 * Math.random()) +
                      ++pa +
                      String(i))
                  : a,
              s = Mi(t, ["uid"]),
              c = fr.fromTag("span", e);
            Qi(c, ca()), Tr(c, "" + fa(), u), Tr(c, "" + la(), n);
            var l = r(u, s),
              f = l.attributes,
              d = void 0 === f ? {} : f,
              h = l.classes,
              m = void 0 === h ? [] : h;
            return (
              Ar(c, d),
              (function(e, t) {
                j(t, function(t) {
                  Qi(e, t);
                });
              })(c, m),
              c
            );
          },
          Vc = function(e, t, n, r, o) {
            var i = [],
              a = Lc(e.getDoc(), o, n, r),
              u = _i(A.none()),
              s = function() {
                u.set(A.none());
              },
              c = function(e) {
                j(e, l);
              },
              l = function(t) {
                var n, r;
                switch (Pc(e, t, "span", gr(t))) {
                  case "invalid-child":
                    s();
                    var o = eo(t);
                    c(o), s();
                    break;
                  case "valid":
                    var u = r.get().getOrThunk(function() {
                      var e = ba(a);
                      return i.push(e), r.set(A.some(e)), e;
                    });
                    Li((n = t), (r = u)), Fi(r, n);
                }
              };
            return (
              Oc.walk(e.dom, t, function(e) {
                s(),
                  (function(e) {
                    var t = U(e, fr.fromDom);
                    c(t);
                  })(e);
              }),
              i
            );
          },
          Ic = function(e, t, n, r) {
            e.undoManager.transact(function() {
              var o = e.selection.getRng();
              if (
                (o.collapsed &&
                  (function(e, t) {
                    var n = Rc(
                      e,
                      t,
                      [{ inline: !0 }],
                      (function(e) {
                        return (
                          3 === e.startContainer.nodeType &&
                          e.startContainer.nodeValue.length >= e.startOffset &&
                          " " === e.startContainer.nodeValue[e.startOffset]
                        );
                      })(t)
                    );
                    t.setStart(n.startContainer, n.startOffset),
                      t.setEnd(n.endContainer, n.endOffset),
                      e.selection.setRng(t);
                  })(e, o),
                e.selection.getRng().collapsed)
              ) {
                var i = Lc(e.getDoc(), r, t, n.decorate);
                Ca(i, " "),
                  e.selection.getRng().insertNode(i.dom()),
                  e.selection.select(i.dom());
              } else {
                var a = Qu.getPersistentBookmark(e.selection, !1),
                  u = e.selection.getRng();
                Vc(e, u, t, n.decorate, r), e.selection.moveToBookmark(a);
              }
            });
          },
          Fc = function(e) {
            var t,
              n = ((t = {}),
              {
                register: function(e, n) {
                  t[e] = { name: e, settings: n };
                },
                lookup: function(e) {
                  return t.hasOwnProperty(e)
                    ? A.from(t[e]).map(function(e) {
                        return e.settings;
                      })
                    : A.none();
                }
              });
            ga(e, n);
            var r = ma(e);
            return {
              register: function(e, t) {
                n.register(e, t);
              },
              annotate: function(t, r) {
                n.lookup(t).each(function(n) {
                  Ic(e, t, n, r);
                });
              },
              annotationChanged: function(e, t) {
                r.addListener(e, t);
              },
              remove: function(t) {
                da(e, A.some(t)).each(function(e) {
                  var t = e.elements;
                  j(t, $i);
                });
              },
              getAll: function(t) {
                var n = (function(e, t) {
                  var n = fr.fromDom(e.getBody()),
                    r = na(n, "[" + la() + '="' + t + '"]'),
                    o = {};
                  return (
                    j(r, function(e) {
                      var t = Mr(e, fa()),
                        n = o.hasOwnProperty(t) ? o[t] : [];
                      o[t] = n.concat([e]);
                    }),
                    o
                  );
                })(e, t);
                return xr(n, function(e) {
                  return U(e, function(e) {
                    return e.dom();
                  });
                });
              }
            };
          },
          Uc = /^[ \t\r\n]*$/,
          jc = {
            "#text": 3,
            "#comment": 8,
            "#cdata": 4,
            "#pi": 7,
            "#doctype": 10,
            "#document-fragment": 11
          },
          qc = function(e, t, n) {
            var r,
              o,
              i = n ? "lastChild" : "firstChild",
              a = n ? "prev" : "next";
            if (e[i]) return e[i];
            if (e !== t) {
              if ((r = e[a])) return r;
              for (o = e.parent; o && o !== t; o = o.parent)
                if ((r = o[a])) return r;
            }
          },
          $c = (function() {
            function e(e, t) {
              (this.name = e),
                (this.type = t),
                1 === t && ((this.attributes = []), (this.attributes.map = {}));
            }
            return (
              (e.create = function(t, n) {
                var r, o;
                if (((r = new e(t, jc[t] || 1)), n))
                  for (o in n) r.attr(o, n[o]);
                return r;
              }),
              (e.prototype.replace = function(e) {
                return (
                  e.parent && e.remove(),
                  this.insert(e, this),
                  this.remove(),
                  this
                );
              }),
              (e.prototype.attr = function(e, t) {
                var n, r;
                if ("string" != typeof e) {
                  for (r in e) this.attr(r, e[r]);
                  return this;
                }
                if ((n = this.attributes)) {
                  if (void 0 !== t) {
                    if (null === t) {
                      if (e in n.map)
                        for (delete n.map[e], r = n.length; r--; )
                          if (n[r].name === e)
                            return (n = n.splice(r, 1)), this;
                      return this;
                    }
                    if (e in n.map) {
                      for (r = n.length; r--; )
                        if (n[r].name === e) {
                          n[r].value = t;
                          break;
                        }
                    } else n.push({ name: e, value: t });
                    return (n.map[e] = t), this;
                  }
                  return n.map[e];
                }
              }),
              (e.prototype.clone = function() {
                var t,
                  n,
                  r,
                  o,
                  i,
                  a = new e(this.name, this.type);
                if ((r = this.attributes)) {
                  for ((i = []).map = {}, t = 0, n = r.length; t < n; t++)
                    "id" !== (o = r[t]).name &&
                      ((i[i.length] = { name: o.name, value: o.value }),
                      (i.map[o.name] = o.value));
                  a.attributes = i;
                }
                return (
                  (a.value = this.value), (a.shortEnded = this.shortEnded), a
                );
              }),
              (e.prototype.wrap = function(e) {
                return this.parent.insert(e, this), e.append(this), this;
              }),
              (e.prototype.unwrap = function() {
                var e, t;
                for (e = this.firstChild; e; )
                  (t = e.next), this.insert(e, this, !0), (e = t);
                this.remove();
              }),
              (e.prototype.remove = function() {
                var e = this.parent,
                  t = this.next,
                  n = this.prev;
                return (
                  e &&
                    (e.firstChild === this
                      ? ((e.firstChild = t), t && (t.prev = null))
                      : (n.next = t),
                    e.lastChild === this
                      ? ((e.lastChild = n), n && (n.next = null))
                      : (t.prev = n),
                    (this.parent = this.next = this.prev = null)),
                  this
                );
              }),
              (e.prototype.append = function(e) {
                var t;
                return (
                  e.parent && e.remove(),
                  (t = this.lastChild)
                    ? ((t.next = e), (e.prev = t), (this.lastChild = e))
                    : (this.lastChild = this.firstChild = e),
                  (e.parent = this),
                  e
                );
              }),
              (e.prototype.insert = function(e, t, n) {
                var r;
                return (
                  e.parent && e.remove(),
                  (r = t.parent || this),
                  n
                    ? (t === r.firstChild
                        ? (r.firstChild = e)
                        : (t.prev.next = e),
                      (e.prev = t.prev),
                      (e.next = t),
                      (t.prev = e))
                    : (t === r.lastChild
                        ? (r.lastChild = e)
                        : (t.next.prev = e),
                      (e.next = t.next),
                      (e.prev = t),
                      (t.next = e)),
                  (e.parent = r),
                  e
                );
              }),
              (e.prototype.getAll = function(e) {
                var t,
                  n = [];
                for (t = this.firstChild; t; t = qc(t, this))
                  t.name === e && n.push(t);
                return n;
              }),
              (e.prototype.empty = function() {
                var e, t, n;
                if (this.firstChild) {
                  for (e = [], n = this.firstChild; n; n = qc(n, this))
                    e.push(n);
                  for (t = e.length; t--; )
                    (n =
                      e[
                        t
                      ]).parent = n.firstChild = n.lastChild = n.next = n.prev = null;
                }
                return (this.firstChild = this.lastChild = null), this;
              }),
              (e.prototype.isEmpty = function(e, t, n) {
                var r,
                  o,
                  i = this.firstChild;
                if (((t = t || {}), i))
                  do {
                    if (1 === i.type) {
                      if (i.attr("data-mce-bogus")) continue;
                      if (e[i.name]) return !1;
                      for (r = i.attributes.length; r--; )
                        if (
                          "name" === (o = i.attributes[r].name) ||
                          0 === o.indexOf("data-mce-bookmark")
                        )
                          return !1;
                    }
                    if (8 === i.type) return !1;
                    if (3 === i.type && !Uc.test(i.value)) return !1;
                    if (
                      3 === i.type &&
                      i.parent &&
                      t[i.parent.name] &&
                      Uc.test(i.value)
                    )
                      return !1;
                    if (n && n(i)) return !1;
                  } while ((i = qc(i, this)));
                return !0;
              }),
              (e.prototype.walk = function(e) {
                return qc(this, null, e);
              }),
              e
            );
          })(),
          Wc = function(e) {
            return 0 === e.indexOf("data-") || 0 === e.indexOf("aria-");
          },
          Kc = function(e) {
            return e.replace(/<!--|-->/g, "");
          },
          Xc = function(e, t) {
            return (
              !e.allow_html_data_urls &&
              (/^data:image\//i.test(t)
                ? !1 === e.allow_svg_data_urls &&
                  /^data:image\/svg\+xml/i.test(t)
                : /^data:/i.test(t))
            );
          },
          Yc = function(e, t, n) {
            var r,
              o,
              i,
              a,
              u = 1;
            for (
              a = e.getShortEndedElements(),
                (i = /<([!?\/])?([A-Za-z0-9\-_\:\.]+)((?:\s+[^"\'>]+(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>]*))*|\/|\s+)>/g).lastIndex = r = n;
              (o = i.exec(t));

            ) {
              if (((r = i.lastIndex), "/" === o[1])) u--;
              else if (!o[1]) {
                if (o[2] in a) continue;
                u++;
              }
              if (0 === u) break;
            }
            return r;
          },
          Gc = function(e, t) {
            var n = e.exec(t);
            if (n) {
              var r = n[1],
                o = n[2];
              return "string" == typeof r &&
                "data-mce-bogus" === r.toLowerCase()
                ? o
                : null;
            }
            return null;
          };
        function Jc(e, t) {
          void 0 === t && (t = di());
          var n = function() {};
          !1 !== (e = e || {}).fix_self_closing && (e.fix_self_closing = !0);
          var r = e.comment ? e.comment : n,
            o = e.cdata ? e.cdata : n,
            i = e.text ? e.text : n,
            a = e.start ? e.start : n,
            u = e.end ? e.end : n,
            s = e.pi ? e.pi : n,
            c = e.doctype ? e.doctype : n;
          return {
            parse: function(n) {
              var l,
                f,
                d,
                h,
                m,
                g,
                p,
                v,
                b,
                y,
                C,
                w,
                x,
                z,
                S,
                N,
                E,
                k,
                T,
                A,
                M,
                _,
                R,
                B,
                O,
                D,
                H,
                P,
                L,
                V = 0,
                I = [],
                F = 0,
                U = ti.decode,
                j = an.makeMap(
                  "src,href,data,background,formaction,poster,xlink:href"
                ),
                q = /((java|vb)script|mhtml):/i,
                $ = function(e) {
                  var t, n;
                  for (t = I.length; t-- && I[t].name !== e; );
                  if (t >= 0) {
                    for (n = I.length - 1; n >= t; n--)
                      (e = I[n]).valid && u(e.name);
                    I.length = t;
                  }
                },
                W = function(t, n, r, o, i) {
                  var a, u;
                  if (
                    ((r =
                      (n = n.toLowerCase()) in C ? n : U(r || o || i || "")),
                    x && !v && !1 === Wc(n))
                  ) {
                    if (!(a = k[n]) && T) {
                      for (u = T.length; u-- && !(a = T[u]).pattern.test(n); );
                      -1 === u && (a = null);
                    }
                    if (!a) return;
                    if (a.validValues && !(r in a.validValues)) return;
                  }
                  if (j[n] && !e.allow_script_urls) {
                    var s = r.replace(/[\s\u0000-\u001F]+/g, "");
                    try {
                      s = decodeURIComponent(s);
                    } catch (e) {
                      s = unescape(s);
                    }
                    if (q.test(s)) return;
                    if (Xc(e, s)) return;
                  }
                  (v && (n in j || 0 === n.indexOf("on"))) ||
                    ((h.map[n] = r), h.push({ name: n, value: r }));
                };
              for (
                O = new RegExp(
                  "<(?:(?:!--([\\w\\W]*?)--\x3e)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:!DOCTYPE([\\w\\W]*?)>)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)>)|(?:([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)((?:\\s+[^\"'>]+(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>]*))*|\\/|\\s+)>))",
                  "g"
                ),
                  D = /([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g,
                  y = t.getShortEndedElements(),
                  B = e.self_closing_elements || t.getSelfClosingElements(),
                  C = t.getBoolAttrs(),
                  x = e.validate,
                  b = e.remove_internals,
                  L = e.fix_self_closing,
                  H = t.getSpecialElements(),
                  R = n + ">";
                (l = O.exec(R));

              ) {
                if ((V < l.index && i(U(n.substr(V, l.index - V))), (f = l[6])))
                  ":" === (f = f.toLowerCase()).charAt(0) && (f = f.substr(1)),
                    $(f);
                else if ((f = l[7])) {
                  if (l.index + l[0].length > n.length) {
                    i(U(n.substr(l.index))), (V = l.index + l[0].length);
                    continue;
                  }
                  ":" === (f = f.toLowerCase()).charAt(0) && (f = f.substr(1)),
                    (w = f in y),
                    L &&
                      B[f] &&
                      I.length > 0 &&
                      I[I.length - 1].name === f &&
                      $(f);
                  var K = Gc(D, l[8]);
                  if (null !== K) {
                    if ("all" === K) {
                      (V = Yc(t, n, O.lastIndex)), (O.lastIndex = V);
                      continue;
                    }
                    S = !1;
                  }
                  if (!x || (z = t.getElementRule(f))) {
                    if (
                      ((S = !0),
                      x && ((k = z.attributes), (T = z.attributePatterns)),
                      (E = l[8])
                        ? ((v = -1 !== E.indexOf("data-mce-type")) &&
                            b &&
                            (S = !1),
                          ((h = []).map = {}),
                          E.replace(D, W))
                        : ((h = []).map = {}),
                      x && !v)
                    ) {
                      if (
                        ((A = z.attributesRequired),
                        (M = z.attributesDefault),
                        (_ = z.attributesForced),
                        z.removeEmptyAttrs && !h.length && (S = !1),
                        _)
                      )
                        for (m = _.length; m--; )
                          (p = (N = _[m]).name),
                            "{$uid}" === (P = N.value) && (P = "mce_" + F++),
                            (h.map[p] = P),
                            h.push({ name: p, value: P });
                      if (M)
                        for (m = M.length; m--; )
                          (p = (N = M[m]).name) in h.map ||
                            ("{$uid}" === (P = N.value) && (P = "mce_" + F++),
                            (h.map[p] = P),
                            h.push({ name: p, value: P }));
                      if (A) {
                        for (m = A.length; m-- && !(A[m] in h.map); );
                        -1 === m && (S = !1);
                      }
                      if ((N = h.map["data-mce-bogus"])) {
                        if ("all" === N) {
                          (V = Yc(t, n, O.lastIndex)), (O.lastIndex = V);
                          continue;
                        }
                        S = !1;
                      }
                    }
                    S && a(f, h, w);
                  } else S = !1;
                  if ((d = H[f])) {
                    (d.lastIndex = V = l.index + l[0].length),
                      (l = d.exec(n))
                        ? (S && (g = n.substr(V, l.index - V)),
                          (V = l.index + l[0].length))
                        : ((g = n.substr(V)), (V = n.length)),
                      S && (g.length > 0 && i(g, !0), u(f)),
                      (O.lastIndex = V);
                    continue;
                  }
                  w ||
                    (E && E.indexOf("/") === E.length - 1
                      ? S && u(f)
                      : I.push({ name: f, valid: S }));
                } else
                  (f = l[1])
                    ? (">" === f.charAt(0) && (f = " " + f),
                      e.allow_conditional_comments ||
                        "[if" !== f.substr(0, 3).toLowerCase() ||
                        (f = " " + f),
                      r(f))
                    : (f = l[2])
                    ? o(Kc(f))
                    : (f = l[3])
                    ? c(f)
                    : (f = l[4]) && s(f, l[5]);
                V = l.index + l[0].length;
              }
              for (
                V < n.length && i(U(n.substr(V))), m = I.length - 1;
                m >= 0;
                m--
              )
                (f = I[m]).valid && u(f.name);
            }
          };
        }
        !(function(e) {
          e.findEndTag = Yc;
        })(Jc || (Jc = {}));
        var Qc = Jc,
          Zc = function(e, t) {
            var n,
              r,
              o,
              i,
              a,
              u = t,
              s = /<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,
              c = e.schema;
            for (
              u = (function(e, t) {
                var n = new RegExp(
                  ["\\s?(" + e.join("|") + ')="[^"]+"'].join("|"),
                  "gi"
                );
                return t.replace(n, "");
              })(e.getTempAttrs(), u),
                a = c.getShortEndedElements();
              (i = s.exec(u));

            )
              (r = s.lastIndex),
                (o = i[0].length),
                (n = a[i[1]] ? r : Qc.findEndTag(c, u, r)),
                (u = u.substring(0, r - o) + u.substring(n)),
                (s.lastIndex = r - o);
            return za(u);
          },
          el = { trimExternal: Zc, trimInternal: Zc },
          tl = function(e, t, n) {
            var r = e.getParam(t, n);
            if (-1 !== r.indexOf("=")) {
              var o = e.getParam(t, "", "hash");
              return o.hasOwnProperty(e.id) ? o[e.id] : n;
            }
            return r;
          },
          nl = function(e) {
            return e.getParam("iframe_attrs", {});
          },
          rl = function(e) {
            return e.getParam("doctype", "<!DOCTYPE html>");
          },
          ol = function(e) {
            return e.getParam("document_base_url", "");
          },
          il = function(e) {
            return tl(e, "body_id", "tinymce");
          },
          al = function(e) {
            return tl(e, "body_class", "");
          },
          ul = function(e) {
            return e.getParam("content_security_policy", "");
          },
          sl = function(e) {
            return e.getParam("br_in_pre", !0);
          },
          cl = function(e) {
            if (e.getParam("force_p_newlines", !1)) return "p";
            var t = e.getParam("forced_root_block", "p");
            return !1 === t ? "" : !0 === t ? "p" : t;
          },
          ll = function(e) {
            return e.getParam("forced_root_block_attrs", {});
          },
          fl = function(e) {
            return e.getParam(
              "br_newline_selector",
              ".mce-toc h2,figcaption,caption"
            );
          },
          dl = function(e) {
            return e.getParam("no_newline_selector", "");
          },
          hl = function(e) {
            return e.getParam("keep_styles", !0);
          },
          ml = function(e) {
            return e.getParam("end_container_on_empty_block", !1);
          },
          gl = function(e) {
            return an.explode(
              e.getParam(
                "font_size_style_values",
                "xx-small,x-small,small,medium,large,x-large,xx-large"
              )
            );
          },
          pl = function(e) {
            return an.explode(e.getParam("font_size_classes", ""));
          },
          vl = function(e) {
            return e.getParam("icons", "", "string");
          },
          bl = function(e) {
            return e.getParam("icons_url", "", "string");
          },
          yl = function(e) {
            return e.getParam("images_dataimg_filter", o(!0), "function");
          },
          Cl = function(e) {
            return e.getParam("automatic_uploads", !0, "boolean");
          },
          wl = function(e) {
            return e.getParam("images_reuse_filename", !1, "boolean");
          },
          xl = function(e) {
            return e.getParam("images_replace_blob_uris", !0, "boolean");
          },
          zl = function(e) {
            return e.getParam("images_upload_url", "", "string");
          },
          Sl = function(e) {
            return e.getParam("images_upload_base_path", "", "string");
          },
          Nl = function(e) {
            return e.getParam("images_upload_credentials", !1, "boolean");
          },
          El = function(e) {
            return e.getParam("images_upload_handler", null, "function");
          },
          kl = function(e) {
            return e.getParam("content_css_cors", !1, "boolean");
          },
          Tl = function(e) {
            return e.getParam("language", "en", "string");
          },
          Al = function(e) {
            return e.getParam("language_url", "", "string");
          },
          Ml = function(e) {
            return e.getParam("indent_use_margin", !1);
          },
          _l = function(e) {
            return e.getParam("indentation", "40px", "string");
          },
          Rl = function(e) {
            var t = e.settings.content_css;
            return _(t)
              ? U(t.split(","), tr)
              : B(t)
              ? t
              : !1 === t || e.inline
              ? []
              : ["default"];
          },
          Bl = function(e) {
            return e.getParam("directionality", Oi.isRtl() ? "rtl" : void 0);
          },
          Ol = function(e, t, n) {
            var r;
            if (
              ((t.format = t.format ? t.format : "html"),
              (t.get = !0),
              (t.getInner = !0),
              t.no_events || e.fire("BeforeGetContent", t),
              "raw" === t.format)
            )
              r = an.trim(el.trimExternal(e.serializer, n.innerHTML));
            else if ("text" === t.format) r = za(n.innerText || n.textContent);
            else {
              if ("tree" === t.format) return e.serializer.serialize(n, t);
              r = (function(e, t) {
                var n = cl(e),
                  r = new RegExp(
                    "^(<" +
                      n +
                      "[^>]*>(&nbsp;|&#160;|\\s| |<br \\/>|)<\\/" +
                      n +
                      ">[\r\n]*|<br \\/>[\r\n]*)$"
                  );
                return t.replace(r, "");
              })(e, e.serializer.serialize(n, t));
            }
            return (
              "text" === t.format || Fo(fr.fromDom(n))
                ? (t.content = r)
                : (t.content = an.trim(r)),
              t.no_events || e.fire("GetContent", t),
              t.content
            );
          },
          Dl = an.makeMap,
          Hl = function(e) {
            var t,
              n,
              r,
              o,
              i,
              a = [];
            return (
              (t = (e = e || {}).indent),
              (n = Dl(e.indent_before || "")),
              (r = Dl(e.indent_after || "")),
              (o = ti.getEncodeFunc(e.entity_encoding || "raw", e.entities)),
              (i = "html" === e.element_format),
              {
                start: function(e, u, s) {
                  var c, l, f, d;
                  if (
                    (t &&
                      n[e] &&
                      a.length > 0 &&
                      (d = a[a.length - 1]).length > 0 &&
                      "\n" !== d &&
                      a.push("\n"),
                    a.push("<", e),
                    u)
                  )
                    for (c = 0, l = u.length; c < l; c++)
                      (f = u[c]),
                        a.push(" ", f.name, '="', o(f.value, !0), '"');
                  (a[a.length] = !s || i ? ">" : " />"),
                    s &&
                      t &&
                      r[e] &&
                      a.length > 0 &&
                      (d = a[a.length - 1]).length > 0 &&
                      "\n" !== d &&
                      a.push("\n");
                },
                end: function(e) {
                  var n;
                  a.push("</", e, ">"),
                    t &&
                      r[e] &&
                      a.length > 0 &&
                      (n = a[a.length - 1]).length > 0 &&
                      "\n" !== n &&
                      a.push("\n");
                },
                text: function(e, t) {
                  e.length > 0 && (a[a.length] = t ? e : o(e));
                },
                cdata: function(e) {
                  a.push("<![CDATA[", e, "]]>");
                },
                comment: function(e) {
                  a.push("\x3c!--", e, "--\x3e");
                },
                pi: function(e, n) {
                  n ? a.push("<?", e, " ", o(n), "?>") : a.push("<?", e, "?>"),
                    t && a.push("\n");
                },
                doctype: function(e) {
                  a.push("<!DOCTYPE", e, ">", t ? "\n" : "");
                },
                reset: function() {
                  a.length = 0;
                },
                getContent: function() {
                  return a.join("").replace(/\n$/, "");
                }
              }
            );
          },
          Pl = function(e, t) {
            void 0 === t && (t = di());
            var n = Hl(e);
            return (
              ((e = e || {}).validate = !("validate" in e) || e.validate),
              {
                serialize: function(r) {
                  var o, i;
                  (i = e.validate),
                    (o = {
                      3: function(e) {
                        n.text(e.value, e.raw);
                      },
                      8: function(e) {
                        n.comment(e.value);
                      },
                      7: function(e) {
                        n.pi(e.name, e.value);
                      },
                      10: function(e) {
                        n.doctype(e.value);
                      },
                      4: function(e) {
                        n.cdata(e.value);
                      },
                      11: function(e) {
                        if ((e = e.firstChild))
                          do {
                            a(e);
                          } while ((e = e.next));
                      }
                    }),
                    n.reset();
                  var a = function(e) {
                    var r,
                      u,
                      s,
                      c,
                      l,
                      f,
                      d,
                      h,
                      m,
                      g = o[e.type];
                    if (g) g(e);
                    else {
                      if (
                        ((r = e.name),
                        (u = e.shortEnded),
                        (s = e.attributes),
                        i &&
                          s &&
                          s.length > 1 &&
                          (((f = []).map = {}), (m = t.getElementRule(e.name))))
                      ) {
                        for (d = 0, h = m.attributesOrder.length; d < h; d++)
                          (c = m.attributesOrder[d]) in s.map &&
                            ((l = s.map[c]),
                            (f.map[c] = l),
                            f.push({ name: c, value: l }));
                        for (d = 0, h = s.length; d < h; d++)
                          (c = s[d].name) in f.map ||
                            ((l = s.map[c]),
                            (f.map[c] = l),
                            f.push({ name: c, value: l }));
                        s = f;
                      }
                      if ((n.start(e.name, s, u), !u)) {
                        if ((e = e.firstChild))
                          do {
                            a(e);
                          } while ((e = e.next));
                        n.end(r);
                      }
                    }
                  };
                  return (
                    1 !== r.type || e.inner ? o[11](r) : a(r), n.getContent()
                  );
                }
              }
            );
          },
          Ll = function(e, t) {
            t(e), e.firstChild && Ll(e.firstChild, t), e.next && Ll(e.next, t);
          },
          Vl = function(e, t, n) {
            var r = (function(e, t, n) {
              var r = {},
                o = {},
                i = [];
              for (var a in (n.firstChild &&
                Ll(n.firstChild, function(n) {
                  j(e, function(e) {
                    e.name === n.name &&
                      (r[e.name]
                        ? r[e.name].nodes.push(n)
                        : (r[e.name] = { filter: e, nodes: [n] }));
                  }),
                    j(t, function(e) {
                      "string" == typeof n.attr(e.name) &&
                        (o[e.name]
                          ? o[e.name].nodes.push(n)
                          : (o[e.name] = { filter: e, nodes: [n] }));
                    });
                }),
              r))
                r.hasOwnProperty(a) && i.push(r[a]);
              for (var a in o) o.hasOwnProperty(a) && i.push(o[a]);
              return i;
            })(e, t, n);
            j(r, function(e) {
              j(e.filter.callbacks, function(t) {
                t(e.nodes, e.filter.name, {});
              });
            });
          },
          Il = function(e) {
            var t = Kr(e).dom();
            return e.dom() === t.activeElement;
          },
          Fl = function(e) {
            return ((n = Kr(e)),
            (r = void 0 !== n ? n.dom() : t.document),
            A.from(r.activeElement).map(fr.fromDom)).filter(function(t) {
              return e.dom().contains(t.dom());
            });
            var n, r;
          },
          Ul = function(e) {
            if (!B(e)) throw new Error("cases must be an array");
            if (0 === e.length)
              throw new Error("there must be at least one case");
            var n = [],
              r = {};
            return (
              j(e, function(o, i) {
                var a = yr(o);
                if (1 !== a.length)
                  throw new Error("one and only one name per case");
                var u = a[0],
                  s = o[u];
                if (void 0 !== r[u])
                  throw new Error("duplicate key detected:" + u);
                if ("cata" === u)
                  throw new Error("cannot have a case named cata (sorry)");
                if (!B(s)) throw new Error("case arguments must be an array");
                n.push(u),
                  (r[u] = function() {
                    var r = arguments.length;
                    if (r !== s.length)
                      throw new Error(
                        "Wrong number of arguments to case " +
                          u +
                          ". Expected " +
                          s.length +
                          " (" +
                          s +
                          "), got " +
                          r
                      );
                    for (var o = new Array(r), a = 0; a < o.length; a++)
                      o[a] = arguments[a];
                    return {
                      fold: function() {
                        if (arguments.length !== e.length)
                          throw new Error(
                            "Wrong number of arguments to fold. Expected " +
                              e.length +
                              ", got " +
                              arguments.length
                          );
                        return arguments[i].apply(null, o);
                      },
                      match: function(e) {
                        var t = yr(e);
                        if (n.length !== t.length)
                          throw new Error(
                            "Wrong number of arguments to match. Expected: " +
                              n.join(",") +
                              "\nActual: " +
                              t.join(",")
                          );
                        if (
                          !te(n, function(e) {
                            return I(t, e);
                          })
                        )
                          throw new Error(
                            "Not all branches were specified when using match. Specified: " +
                              t.join(", ") +
                              "\nRequired: " +
                              n.join(", ")
                          );
                        return e[u].apply(null, o);
                      },
                      log: function(e) {
                        t.console.log(e, {
                          constructors: n,
                          constructor: u,
                          params: o
                        });
                      }
                    };
                  });
              }),
              r
            );
          },
          jl = (Ul([
            { before: ["element"] },
            { on: ["element", "offset"] },
            { after: ["element"] }
          ]),
          Ul([
            { domRange: ["rng"] },
            { relative: ["startSitu", "finishSitu"] },
            { exact: ["start", "soffset", "finish", "foffset"] }
          ]),
          Dr("start", "soffset", "finish", "foffset")),
          ql = cr.detect().browser,
          $l = function(e, t) {
            var n = br(t) ? Hc(t).length : eo(t).length + 1;
            return e > n ? n : e < 0 ? 0 : e;
          },
          Wl = function(e) {
            return jl(
              e.start(),
              $l(e.soffset(), e.start()),
              e.finish(),
              $l(e.foffset(), e.finish())
            );
          },
          Kl = function(e, t) {
            return Wr(e, t) || $r(e, t);
          },
          Xl = function(e) {
            return function(t) {
              return Kl(e, t.start()) && Kl(e, t.finish());
            };
          },
          Yl = function(e) {
            return !0 === e.inline || ql.isIE();
          },
          Gl = function(e) {
            return jl(
              fr.fromDom(e.startContainer),
              e.startOffset,
              fr.fromDom(e.endContainer),
              e.endOffset
            );
          },
          Jl = function(e) {
            var t = e.getSelection();
            return (t && 0 !== t.rangeCount
              ? A.from(t.getRangeAt(0))
              : A.none()
            ).map(Gl);
          },
          Ql = function(e) {
            var t,
              n = ((t = e.dom().ownerDocument.defaultView), fr.fromDom(t));
            return Jl(n.dom()).filter(Xl(e));
          },
          Zl = function(e, t) {
            return A.from(t)
              .filter(Xl(e))
              .map(Wl);
          },
          ef = function(e) {
            var n = t.document.createRange();
            try {
              return (
                n.setStart(e.start().dom(), e.soffset()),
                n.setEnd(e.finish().dom(), e.foffset()),
                A.some(n)
              );
            } catch (e) {
              return A.none();
            }
          },
          tf = function(e) {
            return (e.bookmark ? e.bookmark : A.none())
              .bind(a(Zl, fr.fromDom(e.getBody())))
              .bind(ef);
          },
          nf = function(e) {
            var t = Yl(e) ? Ql(fr.fromDom(e.getBody())) : A.none();
            e.bookmark = t.isSome() ? t : e.bookmark;
          },
          rf = function(e) {
            tf(e).each(function(t) {
              e.selection.setRng(t);
            });
          },
          of = tf,
          af = function(e, t) {
            return (function(e) {
              return e.collapsed
                ? A.from(ou(e.startContainer, e.startOffset)).map(fr.fromDom)
                : A.none();
            })(t).bind(function(t) {
              return Vo(t) ? A.some(t) : !1 === Wr(e, t) ? A.some(e) : A.none();
            });
          },
          uf = function(e, t) {
            af(fr.fromDom(e.getBody()), t)
              .bind(function(e) {
                return sc.firstPositionIn(e.dom());
              })
              .fold(
                function() {
                  e.selection.normalize();
                },
                function(t) {
                  return e.selection.setRng(t.toRange());
                }
              );
          },
          sf = function(e) {
            if (e.setActive)
              try {
                e.setActive();
              } catch (t) {
                e.focus();
              }
            else e.focus();
          },
          cf = function(e) {
            var t,
              n = e.getBody();
            return n && ((t = fr.fromDom(n)), Il(t) || Fl(t).isSome());
          },
          lf = function(e) {
            return e.inline
              ? cf(e)
              : (function(e) {
                  return e.iframeElement && Il(fr.fromDom(e.iframeElement));
                })(e);
          },
          ff = function(e) {
            return e.editorManager.setActive(e);
          },
          df = function(e, t) {
            e.removed ||
              (t
                ? ff(e)
                : (function(e) {
                    var t = e.selection,
                      n = e.getBody(),
                      r = t.getRng();
                    e.quirks.refreshContentEditable();
                    var o = (function(e, t) {
                      return e.dom.getParent(t, function(t) {
                        return "true" === e.dom.getContentEditable(t);
                      });
                    })(e, t.getNode());
                    if (e.$.contains(n, o)) return sf(o), uf(e, r), void ff(e);
                    void 0 !== e.bookmark &&
                      !1 === lf(e) &&
                      of(e).each(function(t) {
                        e.selection.setRng(t), (r = t);
                      }),
                      e.inline || (Le.opera || sf(n), e.getWin().focus()),
                      (Le.gecko || e.inline) && (sf(n), uf(e, r)),
                      ff(e);
                  })(e));
          },
          hf = lf,
          mf = function(e) {
            return e instanceof $c;
          },
          gf = function(e, t) {
            e.dom.setHTML(e.getBody(), t),
              (function(e) {
                hf(e) &&
                  sc.firstPositionIn(e.getBody()).each(function(t) {
                    var n = t.getNode(),
                      r = To.isTable(n) ? sc.firstPositionIn(n).getOr(t) : t;
                    e.selection.setRng(r.toRange());
                  });
              })(e);
          },
          pf = function(e, t, n) {
            return (
              void 0 === n && (n = {}),
              (n.format = n.format ? n.format : "html"),
              (n.set = !0),
              (n.content = mf(t) ? "" : t),
              mf(t) ||
                n.no_events ||
                (e.fire("BeforeSetContent", n), (t = n.content)),
              A.from(e.getBody()).fold(o(t), function(r) {
                return mf(t)
                  ? (function(e, t, n, r) {
                      Vl(
                        e.parser.getNodeFilters(),
                        e.parser.getAttributeFilters(),
                        n
                      );
                      var o = Pl({ validate: e.validate }, e.schema).serialize(
                        n
                      );
                      return (
                        (r.content = Fo(fr.fromDom(t)) ? o : an.trim(o)),
                        gf(e, r.content),
                        r.no_events || e.fire("SetContent", r),
                        n
                      );
                    })(e, r, t, n)
                  : (function(e, t, n, r) {
                      var o, i;
                      return (
                        0 === n.length || /^\s+$/.test(n)
                          ? ((i = '<br data-mce-bogus="1">'),
                            "TABLE" === t.nodeName
                              ? (n = "<tr><td>" + i + "</td></tr>")
                              : /^(UL|OL)$/.test(t.nodeName) &&
                                (n = "<li>" + i + "</li>"),
                            (o = cl(e)) &&
                            e.schema.isValidChild(
                              t.nodeName.toLowerCase(),
                              o.toLowerCase()
                            )
                              ? ((n = i),
                                (n = e.dom.createHTML(
                                  o,
                                  e.settings.forced_root_block_attrs,
                                  n
                                )))
                              : n || (n = '<br data-mce-bogus="1">'),
                            gf(e, n),
                            e.fire("SetContent", r))
                          : ("raw" !== r.format &&
                              (n = Pl(
                                { validate: e.validate },
                                e.schema
                              ).serialize(
                                e.parser.parse(n, {
                                  isRootContent: !0,
                                  insert: !0
                                })
                              )),
                            (r.content = Fo(fr.fromDom(t)) ? n : an.trim(n)),
                            gf(e, r.content),
                            r.no_events || e.fire("SetContent", r)),
                        r.content
                      );
                    })(e, r, t, n);
              })
            );
          },
          vf = function(e, t) {
            return e.fire("PreProcess", t);
          },
          bf = function(e, t) {
            return e.fire("PostProcess", t);
          },
          yf = function(e) {
            return e.fire("remove");
          },
          Cf = function(e) {
            return e.fire("detach");
          },
          wf = function(e, t) {
            return e.fire("SwitchMode", { mode: t });
          },
          xf = function(e, t, n, r) {
            e.fire("ObjectResizeStart", { target: t, width: n, height: r });
          },
          zf = function(e, t, n, r) {
            e.fire("ObjectResized", { target: t, width: n, height: r });
          },
          Sf = Si.DOM,
          Nf = function(e) {
            return A.from(e).each(function(e) {
              return e.destroy();
            });
          },
          Ef = function(e) {
            if (!e.removed) {
              var t = e._selectionOverrides,
                n = e.editorUpload,
                r = e.getBody(),
                o = e.getElement();
              r && e.save({ is_removing: !0 }),
                (e.removed = !0),
                e.unbindAllNativeEvents(),
                e.hasHiddenInput && o && Sf.remove(o.nextSibling),
                yf(e),
                e.editorManager.remove(e),
                !e.inline &&
                  r &&
                  (function(e) {
                    Sf.setStyle(e.id, "display", e.orgDisplay);
                  })(e),
                Cf(e),
                Sf.remove(e.getContainer()),
                Nf(t),
                Nf(n),
                e.destroy();
            }
          },
          kf = function(e, t) {
            var n = e.selection,
              r = e.dom;
            e.destroyed ||
              (t || e.removed
                ? (t ||
                    (e.editorManager.off("beforeunload", e._beforeUnload),
                    e.theme && e.theme.destroy && e.theme.destroy(),
                    Nf(n),
                    Nf(r)),
                  (function(e) {
                    var t = e.formElement;
                    t &&
                      (t._mceOldSubmit &&
                        ((t.submit = t._mceOldSubmit),
                        (t._mceOldSubmit = null)),
                      Sf.unbind(t, "submit reset", e.formEventDelegate));
                  })(e),
                  (function(e) {
                    (e.contentAreaContainer = e.formElement = e.container = e.editorContainer = null),
                      (e.bodyElement = e.contentDocument = e.contentWindow = null),
                      (e.iframeElement = e.targetElm = null),
                      e.selection &&
                        (e.selection = e.selection.win = e.selection.dom = e.selection.dom.doc = null);
                  })(e),
                  (e.destroyed = !0))
                : e.remove());
          },
          Tf = Dr("sections", "settings"),
          Af = cr.detect(),
          Mf = Af.deviceType.isTouch(),
          _f = Af.deviceType.isPhone(),
          Rf = ["lists", "autolink", "autosave"],
          Bf = _f ? { theme: "mobile" } : {},
          Of = function(e) {
            var t = B(e) ? e.join(" ") : e,
              n = U(_(t) ? t.split(" ") : [], tr);
            return W(n, function(e) {
              return e.length > 0;
            });
          },
          Df = function(e, t) {
            var n = Sr(t, function(t, n) {
              return I(e, n);
            });
            return Tf(n.t, n.f);
          },
          Hf = function(e, t) {
            var n = t.external_plugins ? t.external_plugins : {};
            return e && e.external_plugins
              ? an.extend({}, e.external_plugins, n)
              : n;
          },
          Pf = function(e, t, n, r) {
            var o = Of(n.forced_plugins),
              i = Of(r.plugins),
              u = (function(e, t) {
                return [].concat(Of(e)).concat(Of(t));
              })(
                o,
                e &&
                  (function(e, t) {
                    return e.sections().hasOwnProperty(t);
                  })(t, "mobile")
                  ? (function(e) {
                      return W(e, a(I, Rf));
                    })(i)
                  : i
              );
            return an.extend(r, { plugins: u.join(" ") });
          },
          Lf = function(e, t, n, r) {
            var o = Df(["mobile"], r),
              i = an.extend(
                t,
                n,
                o.settings(),
                (function(e, t) {
                  var n = t.settings().inline;
                  return e && !n;
                })(e, o)
                  ? (function(e, t, n) {
                      var r = e.sections(),
                        o = r.hasOwnProperty(t) ? r[t] : {};
                      return an.extend({}, n, o);
                    })(o, "mobile", Bf)
                  : {},
                { validate: !0, external_plugins: Hf(n, o.settings()) }
              );
            return Pf(e, o, n, i);
          },
          Vf = function(e, t, n, r, o) {
            var i = (function(e, t, n) {
              return {
                id: e,
                theme: "silver",
                plugins: "",
                document_base_url: t,
                add_form_submit_trigger: !0,
                submit_patch: !0,
                add_unload_trigger: !0,
                convert_urls: !0,
                relative_urls: !0,
                remove_script_host: !0,
                object_resizing: !0,
                doctype: "<!DOCTYPE html>",
                visual: !0,
                font_size_legacy_values:
                  "xx-small,small,medium,large,x-large,xx-large,300%",
                forced_root_block: "p",
                hidden_input: !0,
                inline_styles: !0,
                convert_fonts_to_spans: !0,
                indent: !0,
                indent_before:
                  "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
                indent_after:
                  "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
                entity_encoding: "named",
                url_converter: n.convertURL,
                url_converter_scope: n
              };
            })(t, n, e);
            return Lf(Mf, i, r, o);
          },
          If = function(e, t, n) {
            return A.from(t.settings[n]).filter(e);
          },
          Ff = a(If, _),
          Uf = function(e, t, n, r) {
            var o,
              i = t in e.settings ? e.settings[t] : n;
            return "hash" === r
              ? (function(e) {
                  var t = {};
                  return (
                    "string" == typeof e
                      ? j(
                          e.indexOf("=") > 0
                            ? e.split(/[;,](?![^=;,]*(?:[;,]|$))/)
                            : e.split(","),
                          function(e) {
                            var n = e.split("=");
                            n.length > 1
                              ? (t[an.trim(n[0])] = an.trim(n[1]))
                              : (t[an.trim(n[0])] = an.trim(n[0]));
                          }
                        )
                      : (t = e),
                    t
                  );
                })(i)
              : "string" === r
              ? If(_, e, t).getOr(n)
              : "number" === r
              ? If(P, e, t).getOr(n)
              : "boolean" === r
              ? If(D, e, t).getOr(n)
              : "object" === r
              ? If(R, e, t).getOr(n)
              : "array" === r
              ? If(B, e, t).getOr(n)
              : "string[]" === r
              ? If(
                  ((o = _),
                  function(e) {
                    return B(e) && te(e, o);
                  }),
                  e,
                  t
                ).getOr(n)
              : "function" === r
              ? If(H, e, t).getOr(n)
              : i;
          },
          jf = function(e, t) {
            return t.dom()[e];
          },
          qf = function(e, t) {
            return parseInt(Rr(t, e), 10);
          },
          $f = a(jf, "clientWidth"),
          Wf = a(jf, "clientHeight"),
          Kf = a(qf, "margin-top"),
          Xf = a(qf, "margin-left"),
          Yf = {
            isXYInContentArea: function(e, t, n) {
              var r,
                o = fr.fromDom(e.getBody()),
                i = e.inline
                  ? o
                  : ((r = o),
                    fr.fromDom(r.dom().ownerDocument.documentElement)),
                a = (function(e, t, n, r) {
                  var o = (function(e) {
                    return e.dom().getBoundingClientRect();
                  })(t);
                  return {
                    x: n - (e ? o.left + t.dom().clientLeft + Xf(t) : 0),
                    y: r - (e ? o.top + t.dom().clientTop + Kf(t) : 0)
                  };
                })(e.inline, i, t, n);
              return (function(e, t, n) {
                var r = $f(e),
                  o = Wf(e);
                return t >= 0 && n >= 0 && t <= r && n <= o;
              })(i, a.x, a.y);
            },
            isEditorAttachedToDom: function(e) {
              var t,
                n = e.inline ? e.getBody() : e.getContentAreaContainer();
              return ((t = n), A.from(t).map(fr.fromDom))
                .map(function(e) {
                  return Wr(Kr(e), e);
                })
                .getOr(!1);
            }
          };
        function Gf(e) {
          var t = [],
            n = function() {
              var t,
                n = e.theme;
              return n && n.getNotificationManagerImpl
                ? n.getNotificationManagerImpl()
                : {
                    open: (t = function() {
                      throw new Error(
                        "Theme did not provide a NotificationManager implementation."
                      );
                    }),
                    close: t,
                    reposition: t,
                    getArgs: t
                  };
            },
            r = function() {
              t.length > 0 && n().reposition(t);
            },
            o = function(e) {
              G(t, function(t) {
                return t === e;
              }).each(function(e) {
                t.splice(e, 1);
              });
            },
            i = function(i) {
              if (!e.removed && Yf.isEditorAttachedToDom(e))
                return Y(t, function(e) {
                  return (
                    (t = n().getArgs(e)),
                    (r = i),
                    !(
                      t.type !== r.type ||
                      t.text !== r.text ||
                      t.progressBar ||
                      t.timeout ||
                      r.progressBar ||
                      r.timeout
                    )
                  );
                  var t, r;
                }).getOrThunk(function() {
                  e.editorManager.setActive(e);
                  var a = n().open(i, function() {
                    o(a), r();
                  });
                  return (
                    (function(e) {
                      t.push(e);
                    })(a),
                    r(),
                    a
                  );
                });
            };
          return (
            (function(e) {
              e.on("SkinLoaded", function() {
                var t = e.settings.service_message;
                t && i({ text: t, type: "warn", timeout: 0 });
              }),
                e.on("ResizeEditor ResizeWindow NodeChange", function() {
                  je.requestAnimationFrame(r);
                }),
                e.on("remove", function() {
                  j(t.slice(), function(e) {
                    n().close(e);
                  });
                });
            })(e),
            {
              open: i,
              close: function() {
                A.from(t[0]).each(function(e) {
                  n().close(e), o(e), r();
                });
              },
              getNotifications: function() {
                return t;
              }
            }
          );
        }
        var Jf,
          Qf = function(e) {
            var t = [],
              n = function() {
                var t,
                  n = e.theme;
                return n && n.getWindowManagerImpl
                  ? n.getWindowManagerImpl()
                  : {
                      open: (t = function() {
                        throw new Error(
                          "Theme did not provide a WindowManager implementation."
                        );
                      }),
                      openUrl: t,
                      alert: t,
                      confirm: t,
                      close: t,
                      getParams: t,
                      setParams: t
                    };
              },
              r = function(e, t) {
                return function() {
                  return t ? t.apply(e, arguments) : void 0;
                };
              },
              o = function(n) {
                t.push(n),
                  (function(t) {
                    e.fire("OpenWindow", { dialog: t });
                  })(n);
              },
              i = function(n) {
                !(function(t) {
                  e.fire("CloseWindow", { dialog: t });
                })(n),
                  0 ===
                    (t = W(t, function(e) {
                      return e !== n;
                    })).length && e.focus();
              },
              a = function(t) {
                e.editorManager.setActive(e), nf(e);
                var n = t();
                return o(n), n;
              };
            return (
              e.on("remove", function() {
                j(t, function(e) {
                  n().close(e);
                });
              }),
              {
                open: function(e, t) {
                  return a(function() {
                    return n().open(e, t, i);
                  });
                },
                openUrl: function(e) {
                  return a(function() {
                    return n().openUrl(e, i);
                  });
                },
                alert: function(e, t, o) {
                  n().alert(e, r(o || this, t));
                },
                confirm: function(e, t, o) {
                  n().confirm(e, r(o || this, t));
                },
                close: function() {
                  A.from(t[t.length - 1]).each(function(e) {
                    n().close(e), i(e);
                  });
                }
              }
            );
          },
          Zf = function(e, t) {
            e.notificationManager.open({ type: "error", text: t });
          },
          ed = function(e, t) {
            e._skinLoaded
              ? Zf(e, t)
              : e.on("SkinLoaded", function() {
                  Zf(e, t);
                });
          },
          td = function(e) {
            t.console.error(e);
          },
          nd = function(e, t, n) {
            return n
              ? "Failed to load " + e + ": " + n + " from url " + t
              : "Failed to load " + e + " url: " + t;
          },
          rd = function(e) {
            for (var n = [], r = 1; r < arguments.length; r++)
              n[r - 1] = arguments[r];
            var o = t.window.console;
            o &&
              (o.error
                ? o.error.apply(o, arguments)
                : o.log.apply(o, arguments));
          },
          od = {
            pluginLoadError: function(e, t) {
              td(nd("plugin", e, t));
            },
            iconsLoadError: function(e, t) {
              td(nd("icons", e, t));
            },
            languageLoadError: function(e, t) {
              td(nd("language", e, t));
            },
            pluginInitError: function(e, t, n) {
              var r = Oi.translate(["Failed to initialize plugin: {0}", t]);
              rd(r, n), ed(e, r);
            },
            uploadError: function(e, t) {
              ed(e, Oi.translate(["Failed to upload image: {0}", t]));
            },
            displayError: ed,
            initError: rd
          },
          id = ((Jf = {}),
          {
            add: function(e, t) {
              Jf[e] = t;
            },
            get: function(e) {
              return Jf[e] ? Jf[e] : { icons: {} };
            },
            has: function(e) {
              return Er(Jf, e);
            }
          }),
          ad = Pi.PluginManager,
          ud = Pi.ThemeManager;
        function sd() {
          return new (de.getOrDie("XMLHttpRequest"))();
        }
        function cd(e, n) {
          var r = {},
            o = function(e, r, o, i) {
              var a, u;
              (a = sd()).open("POST", n.url),
                (a.withCredentials = n.credentials),
                (a.upload.onprogress = function(e) {
                  i((e.loaded / e.total) * 100);
                }),
                (a.onerror = function() {
                  o(
                    "Image upload failed due to a XHR Transport error. Code: " +
                      a.status
                  );
                }),
                (a.onload = function() {
                  var e, t, i;
                  a.status < 200 || a.status >= 300
                    ? o("HTTP Error: " + a.status)
                    : (e = JSON.parse(a.responseText)) &&
                      "string" == typeof e.location
                    ? r(
                        ((t = n.basePath),
                        (i = e.location),
                        t
                          ? t.replace(/\/$/, "") + "/" + i.replace(/^\//, "")
                          : i)
                      )
                    : o("Invalid JSON: " + a.responseText);
                }),
                (u = new t.FormData()).append("file", e.blob(), e.filename()),
                a.send(u);
            },
            i = function(e, t) {
              return { url: t, blobInfo: e, status: !0 };
            },
            a = function(e, t) {
              return { url: "", blobInfo: e, status: !1, error: t };
            },
            u = function(e, t) {
              an.each(r[e], function(e) {
                e(t);
              }),
                delete r[e];
            },
            s = function(t, o) {
              return (
                (t = an.grep(t, function(t) {
                  return !e.isUploaded(t.blobUri());
                })),
                Ve.all(
                  an.map(t, function(t) {
                    return e.isPending(t.blobUri())
                      ? (function(e) {
                          var t = e.blobUri();
                          return new Ve(function(e) {
                            (r[t] = r[t] || []), r[t].push(e);
                          });
                        })(t)
                      : (function(t, n, r) {
                          return (
                            e.markPending(t.blobUri()),
                            new Ve(function(o) {
                              var s;
                              try {
                                var c = function() {
                                  s && s.close();
                                };
                                n(
                                  t,
                                  function(n) {
                                    c(),
                                      e.markUploaded(t.blobUri(), n),
                                      u(t.blobUri(), i(t, n)),
                                      o(i(t, n));
                                  },
                                  function(n) {
                                    c(),
                                      e.removeFailed(t.blobUri()),
                                      u(t.blobUri(), a(t, n)),
                                      o(a(t, n));
                                  },
                                  function(e) {
                                    e < 0 ||
                                      e > 100 ||
                                      (s || (s = r()), s.progressBar.value(e));
                                  }
                                );
                              } catch (e) {
                                o(a(t, e.message));
                              }
                            })
                          );
                        })(t, n.handler, o);
                  })
                )
              );
            };
          return (
            !1 === H(n.handler) && (n.handler = o),
            {
              upload: function(e, t) {
                return n.url || n.handler !== o
                  ? s(e, t)
                  : new Ve(function(e) {
                      e([]);
                    });
              }
            }
          );
        }
        var ld,
          fd = function(e) {
            return de.getOrDie("atob")(e);
          },
          dd = function(e) {
            var t,
              n,
              r = decodeURIComponent(e).split(",");
            return (
              (n = /data:([^;]+)/.exec(r[0])) && (t = n[1]),
              { type: t, data: r[1] }
            );
          },
          hd = function(e) {
            return new Ve(function(n) {
              var r,
                o,
                i,
                a = dd(e);
              try {
                r = fd(a.data);
              } catch (e) {
                return void n(new t.Blob([]));
              }
              for (
                o = (function(e) {
                  return new (de.getOrDie("Uint8Array"))(e);
                })(r.length),
                  i = 0;
                i < o.length;
                i++
              )
                o[i] = r.charCodeAt(i);
              n(new t.Blob([o], { type: a.type }));
            });
          },
          md = function(e) {
            return 0 === e.indexOf("blob:")
              ? (function(e) {
                  return new Ve(function(t, n) {
                    var r = function() {
                      n(
                        "Cannot convert " +
                          e +
                          " to Blob. Resource might not exist or is inaccessible."
                      );
                    };
                    try {
                      var o = sd();
                      o.open("GET", e, !0),
                        (o.responseType = "blob"),
                        (o.onload = function() {
                          200 === this.status ? t(this.response) : r();
                        }),
                        (o.onerror = r),
                        o.send();
                    } catch (e) {
                      r();
                    }
                  });
                })(e)
              : 0 === e.indexOf("data:")
              ? hd(e)
              : null;
          },
          gd = function(e) {
            return new Ve(function(t) {
              var n = new (de.getOrDie("FileReader"))();
              (n.onloadend = function() {
                t(n.result);
              }),
                n.readAsDataURL(e);
            });
          },
          pd = dd,
          vd = 0,
          bd = function(e) {
            return (e || "blobid") + vd++;
          },
          yd = function(e, t, n, r) {
            var o, i;
            0 !== t.src.indexOf("blob:")
              ? ((o = pd(t.src).data),
                (i = e.findFirst(function(e) {
                  return e.base64() === o;
                }))
                  ? n({ image: t, blobInfo: i })
                  : md(t.src).then(
                      function(r) {
                        (i = e.create(bd(), r, o)),
                          e.add(i),
                          n({ image: t, blobInfo: i });
                      },
                      function(e) {
                        r(e);
                      }
                    ))
              : (i = e.getByUri(t.src))
              ? n({ image: t, blobInfo: i })
              : md(t.src).then(
                  function(r) {
                    gd(r).then(function(a) {
                      (o = pd(a).data),
                        (i = e.create(bd(), r, o)),
                        e.add(i),
                        n({ image: t, blobInfo: i });
                    });
                  },
                  function(e) {
                    r(e);
                  }
                );
          },
          Cd = function(e) {
            return e ? ce(e.getElementsByTagName("img")) : [];
          },
          wd = 0,
          xd = function(e) {
            return (
              e +
              wd++ +
              ((t = function() {
                return Math.round(4294967295 * Math.random()).toString(36);
              }),
              "s" + new Date().getTime().toString(36) + t() + t() + t())
            );
            var t;
          },
          zd = function(e) {
            var t,
              n,
              r,
              i,
              a,
              u,
              s,
              c,
              l,
              f = ((t = []),
              (n = function(e) {
                var t, n, r;
                if (!e.blob || !e.base64)
                  throw new Error(
                    "blob and base64 representations of the image are required for BlobInfo to be created"
                  );
                return (
                  (t = e.id || xd("blobid")),
                  (n = e.name || t),
                  {
                    id: o(t),
                    name: o(n),
                    filename: o(
                      n +
                        "." +
                        ((r = e.blob.type),
                        {
                          "image/jpeg": "jpg",
                          "image/jpg": "jpg",
                          "image/gif": "gif",
                          "image/png": "png"
                        }[r.toLowerCase()] || "dat")
                    ),
                    blob: o(e.blob),
                    base64: o(e.base64),
                    blobUri: o(e.blobUri || me(e.blob)),
                    uri: o(e.uri)
                  }
                );
              }),
              {
                create: function(e, t, r, o) {
                  if (_(e)) return n({ id: e, name: o, blob: t, base64: r });
                  if (R(e)) return n(e);
                  throw new Error("Unknown input type");
                },
                add: function(e) {
                  r(e.id()) || t.push(e);
                },
                get: (r = function(e) {
                  return i(function(t) {
                    return t.id() === e;
                  });
                }),
                getByUri: function(e) {
                  return i(function(t) {
                    return t.blobUri() === e;
                  });
                },
                findFirst: (i = function(e) {
                  return W(t, e)[0];
                }),
                removeByUri: function(e) {
                  t = W(t, function(t) {
                    return t.blobUri() !== e || (ge(t.blobUri()), !1);
                  });
                },
                destroy: function() {
                  j(t, function(e) {
                    ge(e.blobUri());
                  }),
                    (t = []);
                }
              }),
              d = ((s = {}),
              (c = function(e, t) {
                return { status: e, resultUri: t };
              }),
              {
                hasBlobUri: (l = function(e) {
                  return e in s;
                }),
                getResultUri: function(e) {
                  var t = s[e];
                  return t ? t.resultUri : null;
                },
                isPending: function(e) {
                  return !!l(e) && 1 === s[e].status;
                },
                isUploaded: function(e) {
                  return !!l(e) && 2 === s[e].status;
                },
                markPending: function(e) {
                  s[e] = c(1, null);
                },
                markUploaded: function(e, t) {
                  s[e] = c(2, t);
                },
                removeFailed: function(e) {
                  delete s[e];
                },
                destroy: function() {
                  s = {};
                }
              }),
              h = [],
              m = function(t) {
                return function(n) {
                  return e.selection ? t(n) : [];
                };
              },
              g = function(e, t, n) {
                var r = 0;
                do {
                  -1 !== (r = e.indexOf(t, r)) &&
                    ((e = e.substring(0, r) + n + e.substr(r + t.length)),
                    (r += n.length - t.length + 1));
                } while (-1 !== r);
                return e;
              },
              p = function(e, t, n) {
                return (
                  (e = g(e, 'src="' + t + '"', 'src="' + n + '"')),
                  (e = g(
                    e,
                    'data-mce-src="' + t + '"',
                    'data-mce-src="' + n + '"'
                  ))
                );
              },
              v = function(t, n) {
                j(e.undoManager.data, function(e) {
                  "fragmented" === e.type
                    ? (e.fragments = U(e.fragments, function(e) {
                        return p(e, t, n);
                      }))
                    : (e.content = p(e.content, t, n));
                });
              },
              b = function() {
                return e.notificationManager.open({
                  text: e.translate("Image uploading..."),
                  type: "info",
                  timeout: -1,
                  progressBar: !0
                });
              },
              y = function(t) {
                return (
                  a ||
                    (a = cd(d, {
                      url: zl(e),
                      basePath: Sl(e),
                      credentials: Nl(e),
                      handler: El(e)
                    })),
                  x().then(
                    m(function(n) {
                      var r;
                      return (
                        (r = U(n, function(e) {
                          return e.blobInfo;
                        })),
                        a.upload(r, b).then(
                          m(function(r) {
                            var o = U(r, function(t, r) {
                              var o = n[r].image;
                              return (
                                t.status && xl(e)
                                  ? (function(t, n) {
                                      f.removeByUri(t.src),
                                        v(t.src, n),
                                        e
                                          .$(t)
                                          .attr({
                                            src: wl(e)
                                              ? n + "?" + new Date().getTime()
                                              : n,
                                            "data-mce-src": e.convertURL(
                                              n,
                                              "src"
                                            )
                                          });
                                    })(o, t.url)
                                  : t.error && od.uploadError(e, t.error),
                                { element: o, status: t.status }
                              );
                            });
                            return t && t(o), o;
                          })
                        )
                      );
                    })
                  )
                );
              },
              C = function(t) {
                if (Cl(e)) return y(t);
              },
              w = function(t) {
                return (
                  !1 !==
                    te(h, function(e) {
                      return e(t);
                    }) &&
                  (0 !== t.getAttribute("src").indexOf("data:") || yl(e)(t))
                );
              },
              x = function() {
                return (
                  u ||
                    (u = (function(e, t) {
                      var n = {};
                      return {
                        findAll: function(r, i) {
                          var a;
                          i || (i = o(!0)),
                            (a = W(Cd(r), function(t) {
                              var n = t.src;
                              return (
                                !!Le.fileApi &&
                                !t.hasAttribute("data-mce-bogus") &&
                                !t.hasAttribute("data-mce-placeholder") &&
                                !(!n || n === Le.transparentSrc) &&
                                (0 === n.indexOf("blob:")
                                  ? !e.isUploaded(n) && i(t)
                                  : 0 === n.indexOf("data:") && i(t))
                              );
                            }));
                          var u = U(a, function(e) {
                            if (n[e.src])
                              return new Ve(function(t) {
                                n[e.src].then(function(n) {
                                  if ("string" == typeof n) return n;
                                  t({ image: e, blobInfo: n.blobInfo });
                                });
                              });
                            var r = new Ve(function(n, r) {
                              yd(t, e, n, r);
                            })
                              .then(function(e) {
                                return delete n[e.image.src], e;
                              })
                              .catch(function(t) {
                                return delete n[e.src], t;
                              });
                            return (n[e.src] = r), r;
                          });
                          return Ve.all(u);
                        }
                      };
                    })(d, f)),
                  u.findAll(e.getBody(), w).then(
                    m(function(t) {
                      return (
                        (t = W(t, function(t) {
                          return (
                            "string" != typeof t || (od.displayError(e, t), !1)
                          );
                        })),
                        j(t, function(e) {
                          v(e.image.src, e.blobInfo.blobUri()),
                            (e.image.src = e.blobInfo.blobUri()),
                            e.image.removeAttribute("data-mce-src");
                        }),
                        t
                      );
                    })
                  )
                );
              },
              z = function(t) {
                return t.replace(/src="(blob:[^"]+)"/g, function(t, n) {
                  var r = d.getResultUri(n);
                  if (r) return 'src="' + r + '"';
                  var o = f.getByUri(n);
                  return (
                    o ||
                      (o = X(
                        e.editorManager.get(),
                        function(e, t) {
                          return (
                            e ||
                            (t.editorUpload &&
                              t.editorUpload.blobCache.getByUri(n))
                          );
                        },
                        null
                      )),
                    o
                      ? 'src="data:' +
                        o.blob().type +
                        ";base64," +
                        o.base64() +
                        '"'
                      : t
                  );
                });
              };
            return (
              e.on("SetContent", function() {
                Cl(e) ? C() : x();
              }),
              e.on("RawSaveContent", function(e) {
                e.content = z(e.content);
              }),
              e.on("GetContent", function(e) {
                e.source_view ||
                  "raw" === e.format ||
                  (e.content = z(e.content));
              }),
              e.on("PostRender", function() {
                e.parser.addNodeFilter("img", function(e) {
                  j(e, function(e) {
                    var t = e.attr("src");
                    if (!f.getByUri(t)) {
                      var n = d.getResultUri(t);
                      n && e.attr("src", n);
                    }
                  });
                });
              }),
              {
                blobCache: f,
                addFilter: function(e) {
                  h.push(e);
                },
                uploadImages: y,
                uploadImagesAuto: C,
                scanForImages: x,
                destroy: function() {
                  f.destroy(), d.destroy(), (u = a = null);
                }
              }
            );
          },
          Sd = function(e, t, n) {
            return Wr(t, e)
              ? Yr(e, function(e) {
                  return n(e) || $r(e, t);
                }).slice(0, -1)
              : [];
          },
          Nd = function(e, t) {
            return Sd(e, t, o(!1));
          },
          Ed = Nd,
          kd = function(e, t) {
            return [e].concat(Nd(e, t));
          },
          Td = function(e, t) {
            return e.hasOwnProperty(t.nodeName);
          },
          Ad = function(e, t) {
            return (
              !!To.isText(t) ||
              (!!To.isElement(t) && !Td(e, t) && !pc.isBookmarkNode(t))
            );
          },
          Md = function(e, t) {
            if (To.isText(t)) {
              if (0 === t.nodeValue.length) return !0;
              if (
                /^\s+$/.test(t.nodeValue) &&
                (!t.nextSibling || Td(e, t.nextSibling))
              )
                return !0;
            }
            return !1;
          },
          _d = function(e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              u,
              s,
              c,
              l,
              f = e.dom,
              d = e.selection,
              h = e.schema,
              m = h.getBlockElements(),
              g = d.getStart(),
              p = e.getBody(),
              v = cl(e);
            if (
              g &&
              To.isElement(g) &&
              v &&
              ((l = p.nodeName.toLowerCase()),
              h.isValidChild(l, v.toLowerCase()) &&
                !(function(e, t, n) {
                  return F(Ed(fr.fromDom(n), fr.fromDom(t)), function(t) {
                    return Td(e, t.dom());
                  });
                })(m, p, g))
            ) {
              for (
                n = (t = d.getRng()).startContainer,
                  r = t.startOffset,
                  o = t.endContainer,
                  i = t.endOffset,
                  c = hf(e),
                  g = p.firstChild;
                g;

              )
                if (Ad(m, g)) {
                  if (Md(m, g)) {
                    (u = g), (g = g.nextSibling), f.remove(u);
                    continue;
                  }
                  a ||
                    ((a = f.create(v, ll(e))),
                    g.parentNode.insertBefore(a, g),
                    (s = !0)),
                    (u = g),
                    (g = g.nextSibling),
                    a.appendChild(u);
                } else (a = null), (g = g.nextSibling);
              s &&
                c &&
                (t.setStart(n, r),
                t.setEnd(o, i),
                d.setRng(t),
                e.nodeChanged());
            }
          },
          Rd = function(e) {
            cl(e) && e.on("NodeChange", a(_d, e));
          },
          Bd = {
            isEq: function(e, t) {
              return (
                e &&
                t &&
                e.startContainer === t.startContainer &&
                e.startOffset === t.startOffset &&
                e.endContainer === t.endContainer &&
                e.endOffset === t.endOffset
              );
            }
          },
          Od = function(e) {
            var t = e.startContainer,
              n = e.startOffset;
            return To.isText(t)
              ? 0 === n
                ? A.some(fr.fromDom(t))
                : A.none()
              : A.from(t.childNodes[n]).map(fr.fromDom);
          },
          Dd = function(e) {
            var t = e.endContainer,
              n = e.endOffset;
            return To.isText(t)
              ? n === t.data.length
                ? A.some(fr.fromDom(t))
                : A.none()
              : A.from(t.childNodes[n - 1]).map(fr.fromDom);
          },
          Hd = function(e) {
            return no(e).fold(o([e]), function(t) {
              return [e].concat(Hd(t));
            });
          },
          Pd = function(e) {
            return ro(e).fold(o([e]), function(t) {
              return "br" === gr(t)
                ? Gr(t)
                    .map(function(t) {
                      return [e].concat(Pd(t));
                    })
                    .getOr([])
                : [e].concat(Pd(t));
            });
          },
          Ld = function(e, t, n, r) {
            var o = n,
              i = new Ao(n, o),
              a = e.schema.getNonEmptyElements();
            do {
              if (3 === n.nodeType && 0 !== an.trim(n.nodeValue).length)
                return void (r
                  ? t.setStart(n, 0)
                  : t.setEnd(n, n.nodeValue.length));
              if (a[n.nodeName] && !/^(TD|TH)$/.test(n.nodeName))
                return void (r
                  ? t.setStartBefore(n)
                  : "BR" === n.nodeName
                  ? t.setEndBefore(n)
                  : t.setEndAfter(n));
              if (Le.ie && Le.ie < 11 && e.isBlock(n) && e.isEmpty(n))
                return void (r ? t.setStart(n, 0) : t.setEnd(n, 0));
            } while ((n = r ? i.next() : i.prev()));
            "BODY" === o.nodeName &&
              (r ? t.setStart(o, 0) : t.setEnd(o, o.childNodes.length));
          },
          Vd = function(e) {
            var t = e.selection.getSel();
            return t && t.rangeCount > 0;
          },
          Id = (function() {
            function e(e) {
              var t;
              (this.lastPath = []), (this.editor = e);
              var n = this;
              "onselectionchange" in e.getDoc() ||
                e.on("NodeChange click mouseup keyup focus", function(n) {
                  var r, o;
                  (o = {
                    startContainer: (r = e.selection.getRng()).startContainer,
                    startOffset: r.startOffset,
                    endContainer: r.endContainer,
                    endOffset: r.endOffset
                  }),
                    ("nodechange" !== n.type && Bd.isEq(o, t)) ||
                      e.fire("SelectionChange"),
                    (t = o);
                }),
                e.on("contextmenu", function() {
                  e.fire("SelectionChange");
                }),
                e.on("SelectionChange", function() {
                  var t = e.selection.getStart(!0);
                  !t ||
                    (!Le.range && e.selection.isCollapsed()) ||
                    (Vd(e) &&
                      !n.isSameElementPath(t) &&
                      e.dom.isChildOf(t, e.getBody()) &&
                      e.nodeChanged({ selectionChange: !0 }));
                }),
                e.on("mouseup", function(t) {
                  !t.isDefaultPrevented() &&
                    Vd(e) &&
                    ("IMG" === e.selection.getNode().nodeName
                      ? je.setEditorTimeout(e, function() {
                          e.nodeChanged();
                        })
                      : e.nodeChanged());
                });
            }
            return (
              (e.prototype.nodeChanged = function(e) {
                var t,
                  n,
                  r,
                  o = this.editor.selection;
                this.editor.initialized &&
                  o &&
                  !this.editor.settings.disable_nodechange &&
                  !this.editor.readonly &&
                  ((r = this.editor.getBody()),
                  ((t = o.getStart(!0) || r).ownerDocument ===
                    this.editor.getDoc() &&
                    this.editor.dom.isChildOf(t, r)) ||
                    (t = r),
                  (n = []),
                  this.editor.dom.getParent(t, function(e) {
                    if (e === r) return !0;
                    n.push(e);
                  }),
                  ((e = e || {}).element = t),
                  (e.parents = n),
                  this.editor.fire("NodeChange", e));
              }),
              (e.prototype.isSameElementPath = function(e) {
                var t, n;
                if (
                  (n = this.editor
                    .$(e)
                    .parentsUntil(this.editor.getBody())
                    .add(e)).length === this.lastPath.length
                ) {
                  for (t = n.length; t >= 0 && n[t] === this.lastPath[t]; t--);
                  if (-1 === t) return (this.lastPath = n), !0;
                }
                return (this.lastPath = n), !1;
              }),
              e
            );
          })(),
          Fd = function(e) {
            var t, n, r, o;
            return (
              (o = e.getBoundingClientRect()),
              (n = (t = e.ownerDocument).documentElement),
              (r = t.defaultView),
              {
                top: o.top + r.pageYOffset - n.clientTop,
                left: o.left + r.pageXOffset - n.clientLeft
              }
            );
          },
          Ud = function(e, t) {
            return (
              (n = (function(e) {
                return e.inline ? Fd(e.getBody()) : { left: 0, top: 0 };
              })(e)),
              (r = (function(e) {
                var t = e.getBody();
                return e.inline
                  ? { left: t.scrollLeft, top: t.scrollTop }
                  : { left: 0, top: 0 };
              })(e)),
              {
                pageX:
                  (o = (function(e, t) {
                    if (t.target.ownerDocument !== e.getDoc()) {
                      var n = Fd(e.getContentAreaContainer()),
                        r = (function(e) {
                          var t = e.getBody(),
                            n = e.getDoc().documentElement,
                            r = { left: t.scrollLeft, top: t.scrollTop },
                            o = {
                              left: t.scrollLeft || n.scrollLeft,
                              top: t.scrollTop || n.scrollTop
                            };
                          return e.inline ? r : o;
                        })(e);
                      return {
                        left: t.pageX - n.left + r.left,
                        top: t.pageY - n.top + r.top
                      };
                    }
                    return { left: t.pageX, top: t.pageY };
                  })(e, t)).left -
                  n.left +
                  r.left,
                pageY: o.top - n.top + r.top
              }
            );
            var n, r, o;
          },
          jd = To.isContentEditableFalse,
          qd = To.isContentEditableTrue,
          $d = function(e) {
            e && e.parentNode && e.parentNode.removeChild(e);
          },
          Wd = function(e, t) {
            return function(n) {
              if (
                (function(e) {
                  return 0 === e.button;
                })(n)
              ) {
                var r = Y(t.dom.getParents(n.target), lu(jd, qd)).getOr(null);
                if (((u = t.getBody()), jd((s = r)) && s !== u)) {
                  var o = t.dom.getPos(r),
                    i = t.getBody(),
                    a = t.getDoc().documentElement;
                  (e.element = r),
                    (e.screenX = n.screenX),
                    (e.screenY = n.screenY),
                    (e.maxX = (t.inline ? i.scrollWidth : a.offsetWidth) - 2),
                    (e.maxY = (t.inline ? i.scrollHeight : a.offsetHeight) - 2),
                    (e.relX = n.pageX - o.x),
                    (e.relY = n.pageY - o.y),
                    (e.width = r.offsetWidth),
                    (e.height = r.offsetHeight),
                    (e.ghost = (function(e, t, n, r) {
                      var o = t.cloneNode(!0);
                      e.dom.setStyles(o, { width: n, height: r }),
                        e.dom.setAttrib(o, "data-mce-selected", null);
                      var i = e.dom.create("div", {
                        class: "mce-drag-container",
                        "data-mce-bogus": "all",
                        unselectable: "on",
                        contenteditable: "false"
                      });
                      return (
                        e.dom.setStyles(i, {
                          position: "absolute",
                          opacity: 0.5,
                          overflow: "hidden",
                          border: 0,
                          padding: 0,
                          margin: 0,
                          width: n,
                          height: r
                        }),
                        e.dom.setStyles(o, {
                          margin: 0,
                          boxSizing: "border-box"
                        }),
                        i.appendChild(o),
                        i
                      );
                    })(t, r, e.width, e.height));
                }
              }
              var u, s;
            };
          },
          Kd = function(e, t) {
            return function(n) {
              if (
                e.dragging &&
                (function(e, t, n) {
                  return t !== n && !e.dom.isChildOf(t, n) && !jd(t);
                })(
                  t,
                  ((u = t.selection),
                  3 === (s = u.getSel().getRangeAt(0).startContainer).nodeType
                    ? s.parentNode
                    : s),
                  e.element
                )
              ) {
                var r = ((i = e.element),
                  (a = i.cloneNode(!0)).removeAttribute("data-mce-selected"),
                  a),
                  o = t.fire("drop", {
                    targetClone: r,
                    clientX: n.clientX,
                    clientY: n.clientY
                  });
                o.isDefaultPrevented() ||
                  ((r = o.targetClone),
                  t.undoManager.transact(function() {
                    $d(e.element),
                      t.insertContent(t.dom.getOuterHTML(r)),
                      t._selectionOverrides.hideFakeCaret();
                  }));
              }
              var i, a, u, s;
              Xd(e);
            };
          },
          Xd = function(e) {
            (e.dragging = !1), (e.element = null), $d(e.ghost);
          },
          Yd = function(e) {
            var n,
              r,
              o,
              i,
              a,
              u,
              s = {};
            (n = Si.DOM),
              (u = t.document),
              (r = Wd(s, e)),
              (o = (function(e, t) {
                var n = je.throttle(function(e, n) {
                  t._selectionOverrides.hideFakeCaret(),
                    t.selection.placeCaretAt(e, n);
                }, 0);
                return function(r) {
                  var o,
                    i,
                    a = Math.max(
                      Math.abs(r.screenX - e.screenX),
                      Math.abs(r.screenY - e.screenY)
                    );
                  if (
                    (function(e) {
                      return e.element;
                    })(e) &&
                    !e.dragging &&
                    a > 10
                  ) {
                    if (
                      t
                        .fire("dragstart", { target: e.element })
                        .isDefaultPrevented()
                    )
                      return;
                    (e.dragging = !0), t.focus();
                  }
                  if (e.dragging) {
                    var u = (function(e, t) {
                      return { pageX: t.pageX - e.relX, pageY: t.pageY + 5 };
                    })(e, Ud(t, r));
                    (o = e.ghost),
                      (i = t.getBody()),
                      o.parentNode !== i && i.appendChild(o),
                      (function(e, t, n, r, o, i) {
                        var a = 0,
                          u = 0;
                        (e.style.left = t.pageX + "px"),
                          (e.style.top = t.pageY + "px"),
                          t.pageX + n > o && (a = t.pageX + n - o),
                          t.pageY + r > i && (u = t.pageY + r - i),
                          (e.style.width = n - a + "px"),
                          (e.style.height = r - u + "px");
                      })(e.ghost, u, e.width, e.height, e.maxX, e.maxY),
                      n(r.clientX, r.clientY);
                  }
                };
              })(s, e)),
              (i = Kd(s, e)),
              (a = (function(e, t) {
                return function() {
                  e.dragging && t.fire("dragend"), Xd(e);
                };
              })(s, e)),
              e.on("mousedown", r),
              e.on("mousemove", o),
              e.on("mouseup", i),
              n.bind(u, "mousemove", o),
              n.bind(u, "mouseup", a),
              e.on("remove", function() {
                n.unbind(u, "mousemove", o), n.unbind(u, "mouseup", a);
              });
          },
          Gd = function(e) {
            Yd(e),
              (function(e) {
                e.on("drop", function(t) {
                  var n =
                    void 0 !== t.clientX
                      ? e.getDoc().elementFromPoint(t.clientX, t.clientY)
                      : null;
                  (jd(n) || jd(e.dom.getContentEditableParent(n))) &&
                    t.preventDefault();
                });
              })(e);
          },
          Jd = function(e) {
            return X(
              e,
              function(e, t) {
                return e.concat(
                  (function(e) {
                    var t = function(t) {
                      return U(t, function(t) {
                        return ((t = Ga(t)).node = e), t;
                      });
                    };
                    if (To.isElement(e)) return t(e.getClientRects());
                    if (To.isText(e)) {
                      var n = e.ownerDocument.createRange();
                      return (
                        n.setStart(e, 0),
                        n.setEnd(e, e.data.length),
                        t(n.getClientRects())
                      );
                    }
                  })(t)
                );
              },
              []
            );
          };
        !(function(e) {
          (e[(e.Up = -1)] = "Up"), (e[(e.Down = 1)] = "Down");
        })(ld || (ld = {}));
        var Qd,
          Zd = function(e, t, n, r, o, i) {
            var a,
              u,
              s = 0,
              c = [],
              l = function(r) {
                var i, a, l;
                for (
                  l = Jd([r]), -1 === e && (l = l.reverse()), i = 0;
                  i < l.length;
                  i++
                )
                  if (((a = l[i]), !n(a, u))) {
                    if (
                      (c.length > 0 && t(a, en.last(c)) && s++,
                      (a.line = s),
                      o(a))
                    )
                      return !0;
                    c.push(a);
                  }
              };
            return (u = en.last(i.getClientRects()))
              ? (l((a = i.getNode())),
                (function(e, t, n, r) {
                  for (; (r = Es(r, e, Xa, t)); ) if (n(r)) return;
                })(e, r, l, a),
                c)
              : c;
          },
          eh = a(Zd, ld.Up, Za, eu),
          th = a(Zd, ld.Down, eu, Za),
          nh = function(e) {
            return function(t) {
              return (function(e, t) {
                return t.line > e;
              })(e, t);
            };
          },
          rh = function(e) {
            return function(t) {
              return (function(e, t) {
                return t.line === e;
              })(e, t);
            };
          },
          oh = To.isContentEditableFalse,
          ih = Es,
          ah = function(e, t) {
            return Math.abs(e.left - t);
          },
          uh = function(e, t) {
            return Math.abs(e.right - t);
          },
          sh = function(e, t) {
            return e >= t.left && e <= t.right;
          },
          ch = function(e, t) {
            return en.reduce(e, function(e, n) {
              var r, o;
              return (
                (r = Math.min(ah(e, t), uh(e, t))),
                (o = Math.min(ah(n, t), uh(n, t))),
                sh(t, n)
                  ? n
                  : sh(t, e)
                  ? e
                  : o === r && oh(n.node)
                  ? n
                  : o < r
                  ? n
                  : e
              );
            });
          },
          lh = function(e, t, n, r) {
            for (; (r = ih(r, e, Xa, t)); ) if (n(r)) return;
          },
          fh = function(e, t, n) {
            var r,
              o = Jd(
                (function(e) {
                  return W(ce(e.getElementsByTagName("*")), ps);
                })(e)
              ),
              i = W(o, function(e) {
                return n >= e.top && n <= e.bottom;
              });
            return (r = ch(i, t)) &&
              (r = ch(
                (function(e, t) {
                  var n = [],
                    r = function(e, r) {
                      var o;
                      return (
                        (o = W(Jd([r]), function(n) {
                          return !e(n, t);
                        })),
                        (n = n.concat(o)),
                        0 === o.length
                      );
                    };
                  return (
                    n.push(t),
                    lh(ld.Up, e, a(r, Za), t.node),
                    lh(ld.Down, e, a(r, eu), t.node),
                    n
                  );
                })(e, r),
                t
              )) &&
              ps(r.node)
              ? (function(e, t) {
                  return { node: e.node, before: ah(e, t) < uh(e, t) };
                })(r, t)
              : null;
          },
          dh = function(e, t, n) {
            return (
              !n.collapsed &&
              X(
                n.getClientRects(),
                function(n, r) {
                  return (
                    n ||
                    (function(e, t, n) {
                      return (
                        t >= e.left &&
                        t <= e.right &&
                        n >= e.top &&
                        n <= e.bottom
                      );
                    })(r, e, t)
                  );
                },
                !1
              )
            );
          },
          hh = To.isContentEditableTrue,
          mh = To.isContentEditableFalse,
          gh = function(e, t, n, r, o) {
            return t._selectionOverrides.showCaret(e, n, r, o);
          },
          ph = function(e, t) {
            return e
              .fire("BeforeObjectSelected", { target: t })
              .isDefaultPrevented()
              ? null
              : (function(e) {
                  var t = e.ownerDocument.createRange();
                  return t.selectNode(e), t;
                })(t);
          },
          vh = function(e, t, n) {
            var r = Ds(1, e.getBody(), t),
              o = _u.fromRangeStart(r),
              i = o.getNode();
            if (mh(i)) return gh(1, e, i, !o.isAtEnd(), !1);
            var a = o.getNode(!0);
            if (mh(a)) return gh(1, e, a, !1, !1);
            var u = e.dom.getParent(o.getNode(), function(e) {
              return mh(e) || hh(e);
            });
            return mh(u) ? gh(1, e, u, !1, n) : null;
          },
          bh = function(e, t, n) {
            if (!t || !t.collapsed) return t;
            var r = vh(e, t, n);
            return r || t;
          },
          yh = function(e) {
            var n = Wi(function() {
              if (
                !e.removed &&
                e.getBody().contains(t.document.activeElement) &&
                e.selection.getRng().collapsed
              ) {
                var n = bh(e, e.selection.getRng(), !1);
                e.selection.setRng(n);
              }
            }, 0);
            e.on("focus", function() {
              n.throttle();
            }),
              e.on("blur", function() {
                n.cancel();
              });
          },
          Ch = {
            BACKSPACE: 8,
            DELETE: 46,
            DOWN: 40,
            ENTER: 13,
            LEFT: 37,
            RIGHT: 39,
            SPACEBAR: 32,
            TAB: 9,
            UP: 38,
            END: 35,
            HOME: 36,
            modifierPressed: function(e) {
              return (
                e.shiftKey || e.ctrlKey || e.altKey || this.metaKeyPressed(e)
              );
            },
            metaKeyPressed: function(e) {
              return Le.mac ? e.metaKey : e.ctrlKey && !e.altKey;
            }
          },
          wh = ((Qd = " "),
          function(e) {
            return Qd === e;
          }),
          xh = function(e) {
            return /^[\r\n\t ]$/.test(e);
          },
          zh = function(e) {
            return !xh(e) && !wh(e);
          },
          Sh = function(e, t, n) {
            return A.from(n.container())
              .filter(To.isText)
              .exists(function(r) {
                var o = e ? 0 : -1;
                return t(r.data.charAt(n.offset() + o));
              });
          },
          Nh = a(Sh, !0, xh),
          Eh = a(Sh, !1, xh),
          kh = function(e) {
            var t = e.container();
            return To.isText(t) && 0 === t.data.length;
          },
          Th = function(e, t) {
            return function(n) {
              return A.from(As(e ? 0 : -1, n))
                .filter(t)
                .isSome();
            };
          },
          Ah = function(e) {
            return (
              "IMG" === e.nodeName && "block" === Rr(fr.fromDom(e), "display")
            );
          },
          Mh = function(e) {
            return To.isContentEditableFalse(e) && !To.isBogusAll(e);
          },
          _h = Th(!0, Ah),
          Rh = Th(!1, Ah),
          Bh = Th(!0, To.isTable),
          Oh = Th(!1, To.isTable),
          Dh = Th(!0, Mh),
          Hh = Th(!1, Mh),
          Ph = To.isContentEditableTrue,
          Lh = To.isContentEditableFalse,
          Vh = function(e, t) {
            for (var n = e.getBody(); t && t !== n; ) {
              if (Ph(t) || Lh(t)) return t;
              t = t.parentNode;
            }
            return null;
          },
          Ih = function(e) {
            var t,
              n = e.getBody(),
              r = ms(
                e.getBody(),
                function(t) {
                  return e.dom.isBlock(t);
                },
                function() {
                  return hf(e);
                }
              ),
              o = "sel-" + e.dom.uniqueId(),
              i = function(t) {
                t && e.selection.setRng(t);
              },
              a = function() {
                return e.selection.getRng();
              },
              u = function(t, n, o, i) {
                return (
                  void 0 === i && (i = !0),
                  e
                    .fire("ShowCaret", { target: n, direction: t, before: o })
                    .isDefaultPrevented()
                    ? null
                    : (i && e.selection.scrollIntoView(n, -1 === t),
                      r.show(o, n))
                );
              },
              s = function(e, t) {
                return (
                  (t = Ds(e, n, t)),
                  -1 === e ? _u.fromRangeStart(t) : _u.fromRangeEnd(t)
                );
              },
              c = function(e) {
                return Ta(e) || Oa(e) || Da(e);
              },
              l = function(e) {
                return c(e.startContainer) || c(e.endContainer);
              },
              f = function(n, r) {
                var i,
                  a,
                  c,
                  f,
                  d,
                  m,
                  g,
                  p,
                  v,
                  b,
                  y = e.$,
                  C = e.dom;
                if (!n) return null;
                if (n.collapsed) {
                  if (!l(n))
                    if (!1 === r) {
                      if (((p = s(-1, n)), ps(p.getNode(!0))))
                        return u(-1, p.getNode(!0), !1, !1);
                      if (ps(p.getNode()))
                        return u(-1, p.getNode(), !p.isAtEnd(), !1);
                    } else {
                      if (((p = s(1, n)), ps(p.getNode())))
                        return u(1, p.getNode(), !p.isAtEnd(), !1);
                      if (ps(p.getNode(!0))) return u(1, p.getNode(!0), !1, !1);
                    }
                  return null;
                }
                return (
                  (f = n.startContainer),
                  (d = n.startOffset),
                  (m = n.endOffset),
                  3 === f.nodeType &&
                    0 === d &&
                    Lh(f.parentNode) &&
                    ((f = f.parentNode),
                    (d = C.nodeIndex(f)),
                    (f = f.parentNode)),
                  1 !== f.nodeType
                    ? null
                    : (m === d + 1 && (i = f.childNodes[d]),
                      Lh(i)
                        ? ((v = b = i.cloneNode(!0)),
                          (g = e.fire("ObjectSelected", {
                            target: i,
                            targetClone: v
                          })).isDefaultPrevented()
                            ? null
                            : ((a = ua(fr.fromDom(e.getBody()), "#" + o).fold(
                                function() {
                                  return y([]);
                                },
                                function(e) {
                                  return y([e.dom()]);
                                }
                              )),
                              (v = g.targetClone),
                              0 === a.length &&
                                (a = y(
                                  '<div data-mce-bogus="all" class="mce-offscreen-selection"></div>'
                                ).attr("id", o)).appendTo(e.getBody()),
                              (n = e.dom.createRng()),
                              v === b && Le.ie
                                ? (a
                                    .empty()
                                    .append(
                                      '<p style="font-size: 0" data-mce-bogus="all"> </p>'
                                    )
                                    .append(v),
                                  n.setStartAfter(a[0].firstChild.firstChild),
                                  n.setEndAfter(v))
                                : (a
                                    .empty()
                                    .append(" ")
                                    .append(v)
                                    .append(" "),
                                  n.setStart(a[0].firstChild, 1),
                                  n.setEnd(a[0].lastChild, 0)),
                              a.css({ top: C.getPos(i, e.getBody()).y }),
                              a[0].focus(),
                              (c = e.selection.getSel()).removeAllRanges(),
                              c.addRange(n),
                              j(
                                na(
                                  fr.fromDom(e.getBody()),
                                  "*[data-mce-selected]"
                                ),
                                function(e) {
                                  _r(e, "data-mce-selected");
                                }
                              ),
                              i.setAttribute("data-mce-selected", "1"),
                              (t = i),
                              h(),
                              n))
                        : null)
                );
              },
              d = function() {
                t &&
                  (t.removeAttribute("data-mce-selected"),
                  ua(fr.fromDom(e.getBody()), "#" + o).each(qi),
                  (t = null)),
                  ua(fr.fromDom(e.getBody()), "#" + o).each(qi),
                  (t = null);
              },
              h = function() {
                r.hide();
              };
            return (
              Le.ceFalse &&
                (function() {
                  e.on("mouseup", function(t) {
                    var n = a();
                    n.collapsed &&
                      Yf.isXYInContentArea(e, t.clientX, t.clientY) &&
                      i(vh(e, n, !1));
                  }),
                    e.on("click", function(t) {
                      var n;
                      (n = Vh(e, t.target)) &&
                        (Lh(n) && (t.preventDefault(), e.focus()),
                        Ph(n) &&
                          e.dom.isChildOf(n, e.selection.getNode()) &&
                          d());
                    }),
                    e.on("blur NewBlock", function() {
                      d();
                    }),
                    e.on("ResizeWindow FullscreenStateChanged", function() {
                      return r.reposition();
                    });
                  var s = function(t, n) {
                    var r,
                      o,
                      i = e.dom.getParent(t, e.dom.isBlock),
                      a = e.dom.getParent(n, e.dom.isBlock);
                    return (
                      !(!i || !e.dom.isChildOf(i, a) || !1 !== Lh(Vh(e, i))) ||
                      (i &&
                        ((r = i),
                        (o = a),
                        !(
                          e.dom.getParent(r, e.dom.isBlock) ===
                          e.dom.getParent(o, e.dom.isBlock)
                        )) &&
                        (function(e) {
                          var t = Js(e);
                          if (!e.firstChild) return !1;
                          var n = _u.before(e.firstChild),
                            r = t.next(n);
                          return r && !Dh(r) && !Hh(r);
                        })(i))
                    );
                  };
                  !(function(e) {
                    var t = !1;
                    e.on("touchstart", function() {
                      t = !1;
                    }),
                      e.on("touchmove", function() {
                        t = !0;
                      }),
                      e.on("touchend", function(n) {
                        var r = Vh(e, n.target);
                        Lh(r) && (t || (n.preventDefault(), f(ph(e, r))));
                      });
                  })(e),
                    e.on("mousedown", function(t) {
                      var r,
                        o = t.target;
                      if (
                        (o === n ||
                          "HTML" === o.nodeName ||
                          e.dom.isChildOf(o, n)) &&
                        !1 !== Yf.isXYInContentArea(e, t.clientX, t.clientY)
                      )
                        if ((r = Vh(e, o)))
                          Lh(r)
                            ? (t.preventDefault(), f(ph(e, r)))
                            : (d(),
                              (Ph(r) && t.shiftKey) ||
                                dh(
                                  t.clientX,
                                  t.clientY,
                                  e.selection.getRng()
                                ) ||
                                (h(),
                                e.selection.placeCaretAt(
                                  t.clientX,
                                  t.clientY
                                )));
                        else if (!1 === ps(o)) {
                          d(), h();
                          var a = fh(n, t.clientX, t.clientY);
                          if (a && !s(t.target, a.node)) {
                            t.preventDefault();
                            var c = u(1, a.node, a.before, !1);
                            e.getBody().focus(), i(c);
                          }
                        }
                    }),
                    e.on("keypress", function(t) {
                      Ch.modifierPressed(t) ||
                        (t.keyCode,
                        Lh(e.selection.getNode()) && t.preventDefault());
                    }),
                    e.on("GetSelectionRange", function(e) {
                      var n = e.range;
                      if (t) {
                        if (!t.parentNode) return void (t = null);
                        (n = n.cloneRange()).selectNode(t), (e.range = n);
                      }
                    }),
                    e.on("SetSelectionRange", function(e) {
                      var t;
                      (t = f(e.range, e.forward)) && (e.range = t);
                    }),
                    e.on("AfterSetSelectionRange", function(t) {
                      var n,
                        r = t.range;
                      l(r) ||
                        "mcepastebin" === r.startContainer.parentNode.id ||
                        h(),
                        (n = r.startContainer.parentNode),
                        e.dom.hasClass(n, "mce-offscreen-selection") || d();
                    }),
                    e.on("copy", function(t) {
                      var n,
                        r = t.clipboardData;
                      if (
                        !t.isDefaultPrevented() &&
                        t.clipboardData &&
                        !Le.ie
                      ) {
                        var i = (n = e.dom.get(o))
                          ? n.getElementsByTagName("*")[0]
                          : n;
                        i &&
                          (t.preventDefault(),
                          r.clearData(),
                          r.setData("text/html", i.outerHTML),
                          r.setData("text/plain", i.outerText));
                      }
                    }),
                    Gd(e),
                    yh(e);
                })(),
              {
                showCaret: u,
                showBlockCaretContainer: function(t) {
                  t.hasAttribute("data-mce-caret") &&
                    (Ha(t), i(a()), e.selection.scrollIntoView(t[0]));
                },
                hideFakeCaret: h,
                destroy: function() {
                  r.destroy(), (t = null);
                }
              }
            );
          },
          Fh = 0,
          Uh = 2,
          jh = 1,
          qh = function(e, t) {
            var n = e.length + t.length + 2,
              r = new Array(n),
              o = new Array(n),
              i = function(n, r, o, a, s) {
                var c = u(n, r, o, a);
                if (
                  null === c ||
                  (c.start === r && c.diag === r - a) ||
                  (c.end === n && c.diag === n - o)
                )
                  for (var l = n, f = o; l < r || f < a; )
                    l < r && f < a && e[l] === t[f]
                      ? (s.push([0, e[l]]), ++l, ++f)
                      : r - n > a - o
                      ? (s.push([2, e[l]]), ++l)
                      : (s.push([1, t[f]]), ++f);
                else {
                  i(n, c.start, o, c.start - c.diag, s);
                  for (var d = c.start; d < c.end; ++d) s.push([0, e[d]]);
                  i(c.end, r, c.end - c.diag, a, s);
                }
              },
              a = function(n, r, o, i) {
                for (var a = n; a - r < i && a < o && e[a] === t[a - r]; ) ++a;
                return (function(e, t, n) {
                  return { start: e, end: t, diag: n };
                })(n, a, r);
              },
              u = function(n, i, u, s) {
                var c = i - n,
                  l = s - u;
                if (0 === c || 0 === l) return null;
                var f,
                  d,
                  h,
                  m,
                  g,
                  p = c - l,
                  v = l + c,
                  b = (v % 2 == 0 ? v : v + 1) / 2;
                for (r[1 + b] = n, o[1 + b] = i + 1, f = 0; f <= b; ++f) {
                  for (d = -f; d <= f; d += 2) {
                    for (
                      h = d + b,
                        d === -f || (d !== f && r[h - 1] < r[h + 1])
                          ? (r[h] = r[h + 1])
                          : (r[h] = r[h - 1] + 1),
                        g = (m = r[h]) - n + u - d;
                      m < i && g < s && e[m] === t[g];

                    )
                      (r[h] = ++m), ++g;
                    if (
                      p % 2 != 0 &&
                      p - f <= d &&
                      d <= p + f &&
                      o[h - p] <= r[h]
                    )
                      return a(o[h - p], d + n - u, i, s);
                  }
                  for (d = p - f; d <= p + f; d += 2) {
                    for (
                      h = d + b - p,
                        d === p - f || (d !== p + f && o[h + 1] <= o[h - 1])
                          ? (o[h] = o[h + 1] - 1)
                          : (o[h] = o[h - 1]),
                        g = (m = o[h] - 1) - n + u - d;
                      m >= n && g >= u && e[m] === t[g];

                    )
                      (o[h] = m--), g--;
                    if (p % 2 == 0 && -f <= d && d <= f && o[h] <= r[h + p])
                      return a(o[h], d + n - u, i, s);
                  }
                }
              },
              s = [];
            return i(0, e.length, 0, t.length, s), s;
          },
          $h = function(e) {
            return To.isElement(e)
              ? e.outerHTML
              : To.isText(e)
              ? ti.encodeRaw(e.data, !1)
              : To.isComment(e)
              ? "\x3c!--" + e.data + "--\x3e"
              : "";
          },
          Wh = function(e, n, r) {
            var o = (function(e) {
              var n, r, o;
              for (
                o = t.document.createElement("div"),
                  n = t.document.createDocumentFragment(),
                  e && (o.innerHTML = e);
                (r = o.firstChild);

              )
                n.appendChild(r);
              return n;
            })(n);
            if (e.hasChildNodes() && r < e.childNodes.length) {
              var i = e.childNodes[r];
              i.parentNode.insertBefore(o, i);
            } else e.appendChild(o);
          },
          Kh = function(e) {
            return W(U(ce(e.childNodes), $h), function(e) {
              return e.length > 0;
            });
          },
          Xh = function(e, t) {
            var n = U(ce(t.childNodes), $h);
            return (
              (function(e, t) {
                var n = 0;
                j(e, function(e) {
                  e[0] === Fh
                    ? n++
                    : e[0] === jh
                    ? (Wh(t, e[1], n), n++)
                    : e[0] === Uh &&
                      (function(e, t) {
                        if (e.hasChildNodes() && t < e.childNodes.length) {
                          var n = e.childNodes[t];
                          n.parentNode.removeChild(n);
                        }
                      })(t, n);
                });
              })(qh(n, e), t),
              t
            );
          },
          Yh = _i(A.none()),
          Gh = function(e) {
            return {
              type: "fragmented",
              fragments: e,
              content: "",
              bookmark: null,
              beforeBookmark: null
            };
          },
          Jh = function(e) {
            return {
              type: "complete",
              fragments: null,
              content: e,
              bookmark: null,
              beforeBookmark: null
            };
          },
          Qh = function(e) {
            return "fragmented" === e.type ? e.fragments.join("") : e.content;
          },
          Zh = function(e) {
            var n = fr.fromTag(
              "body",
              Yh.get().getOrThunk(function() {
                var e = t.document.implementation.createHTMLDocument("undo");
                return Yh.set(A.some(e)), e;
              })
            );
            return (
              Ca(n, Qh(e)), j(na(n, "*[data-mce-bogus]"), $i), n.dom().innerHTML
            );
          },
          em = function(e) {
            var t, n, r;
            return (
              (t = Kh(e.getBody())),
              -1 !==
              (n = (r = ee(t, function(t) {
                var n = el.trimInternal(e.serializer, t);
                return n.length > 0 ? [n] : [];
              })).join("")).indexOf("</iframe>")
                ? Gh(r)
                : Jh(n)
            );
          },
          tm = function(e, t, n) {
            "fragmented" === t.type
              ? Xh(t.fragments, e.getBody())
              : e.setContent(t.content, { format: "raw" }),
              e.selection.moveToBookmark(n ? t.beforeBookmark : t.bookmark);
          },
          nm = function(e, t) {
            return (
              !(!e || !t) &&
              (!!(function(e, t) {
                return Qh(e) === Qh(t);
              })(e, t) ||
                (function(e, t) {
                  return Zh(e) === Zh(t);
                })(e, t))
            );
          },
          rm = function(e) {
            var t,
              n,
              r = this,
              o = 0,
              i = [],
              a = 0,
              u = function() {
                return 0 === a;
              },
              s = function(e) {
                u() && (r.typing = e);
              },
              c = function(t) {
                e.setDirty(t);
              },
              l = function(e) {
                s(!1), r.add({}, e);
              },
              f = function() {
                r.typing && (s(!1), r.add());
              };
            return (
              e.on("init", function() {
                r.add();
              }),
              e.on("BeforeExecCommand", function(e) {
                var t = e.command;
                "Undo" !== t &&
                  "Redo" !== t &&
                  "mceRepaint" !== t &&
                  (f(), r.beforeChange());
              }),
              e.on("ExecCommand", function(e) {
                var t = e.command;
                "Undo" !== t && "Redo" !== t && "mceRepaint" !== t && l(e);
              }),
              e.on("ObjectResizeStart cut", function() {
                r.beforeChange();
              }),
              e.on("SaveContent ObjectResized blur", l),
              e.on("dragend", l),
              e.on("keyup", function(t) {
                var o = t.keyCode;
                t.isDefaultPrevented() ||
                  (((o >= 33 && o <= 36) ||
                    (o >= 37 && o <= 40) ||
                    45 === o ||
                    t.ctrlKey) &&
                    (l(), e.nodeChanged()),
                  (46 !== o && 8 !== o) || e.nodeChanged(),
                  n &&
                    r.typing &&
                    !1 === nm(em(e), i[0]) &&
                    (!1 === e.isDirty() &&
                      (c(!0),
                      e.fire("change", { level: i[0], lastLevel: null })),
                    e.fire("TypingUndo"),
                    (n = !1),
                    e.nodeChanged()));
              }),
              e.on("keydown", function(e) {
                var t = e.keyCode;
                if (!e.isDefaultPrevented())
                  if ((t >= 33 && t <= 36) || (t >= 37 && t <= 40) || 45 === t)
                    r.typing && l(e);
                  else {
                    var o = (e.ctrlKey && !e.altKey) || e.metaKey;
                    !(t < 16 || t > 20) ||
                      224 === t ||
                      91 === t ||
                      r.typing ||
                      o ||
                      (r.beforeChange(), s(!0), r.add({}, e), (n = !0));
                  }
              }),
              e.on("mousedown", function(e) {
                r.typing && l(e);
              }),
              e.on("input", function(e) {
                e.inputType &&
                  ("insertReplacementText" === e.inputType ||
                    (function(e) {
                      return "insertText" === e.inputType && null === e.data;
                    })(e)) &&
                  l(e);
              }),
              e.addShortcut("meta+z", "", "Undo"),
              e.addShortcut("meta+y,meta+shift+z", "", "Redo"),
              e.on("AddUndo Undo Redo ClearUndos", function(t) {
                t.isDefaultPrevented() || e.nodeChanged();
              }),
              (r = {
                data: i,
                typing: !1,
                beforeChange: function() {
                  u() && (t = Qu.getUndoBookmark(e.selection));
                },
                add: function(n, r) {
                  var a,
                    s,
                    l,
                    f = e.settings;
                  if (
                    ((l = em(e)),
                    (n = n || {}),
                    (n = an.extend(n, l)),
                    !1 === u() || e.removed)
                  )
                    return null;
                  if (
                    ((s = i[o]),
                    e
                      .fire("BeforeAddUndo", {
                        level: n,
                        lastLevel: s,
                        originalEvent: r
                      })
                      .isDefaultPrevented())
                  )
                    return null;
                  if (s && nm(s, n)) return null;
                  if (
                    (i[o] && (i[o].beforeBookmark = t),
                    f.custom_undo_redo_levels &&
                      i.length > f.custom_undo_redo_levels)
                  ) {
                    for (a = 0; a < i.length - 1; a++) i[a] = i[a + 1];
                    i.length--, (o = i.length);
                  }
                  (n.bookmark = Qu.getUndoBookmark(e.selection)),
                    o < i.length - 1 && (i.length = o + 1),
                    i.push(n),
                    (o = i.length - 1);
                  var d = { level: n, lastLevel: s, originalEvent: r };
                  return (
                    e.fire("AddUndo", d),
                    o > 0 && (c(!0), e.fire("change", d)),
                    n
                  );
                },
                undo: function() {
                  var t;
                  return (
                    r.typing && (r.add(), (r.typing = !1), s(!1)),
                    o > 0 &&
                      ((t = i[--o]),
                      tm(e, t, !0),
                      c(!0),
                      e.fire("Undo", { level: t })),
                    t
                  );
                },
                redo: function() {
                  var t;
                  return (
                    o < i.length - 1 &&
                      ((t = i[++o]),
                      tm(e, t, !1),
                      c(!0),
                      e.fire("Redo", { level: t })),
                    t
                  );
                },
                clear: function() {
                  (i = []),
                    (o = 0),
                    (r.typing = !1),
                    (r.data = i),
                    e.fire("ClearUndos");
                },
                reset: function() {
                  r.clear(), r.add();
                },
                hasUndo: function() {
                  return o > 0 || (r.typing && i[0] && !nm(em(e), i[0]));
                },
                hasRedo: function() {
                  return o < i.length - 1 && !r.typing;
                },
                transact: function(e) {
                  return f(), r.beforeChange(), r.ignore(e), r.add();
                },
                ignore: function(e) {
                  try {
                    a++, e();
                  } finally {
                    a--;
                  }
                },
                extra: function(t, n) {
                  var a, u;
                  r.transact(t) &&
                    ((u = i[o].bookmark),
                    (a = i[o - 1]),
                    tm(e, a, !0),
                    r.transact(n) && (i[o - 1].beforeBookmark = u));
                }
              })
            );
          },
          om = function(e) {
            var t = na(e, "br"),
              n = W(
                (function(e) {
                  for (var t = [], n = e.dom(); n; )
                    t.push(fr.fromDom(n)), (n = n.lastChild);
                  return t;
                })(e).slice(-1),
                Oo
              );
            t.length === n.length && j(n, qi);
          },
          im = function(e) {
            ji(e), Fi(e, fr.fromHtml('<br data-mce-bogus="1">'));
          },
          am = function(e) {
            ro(e).each(function(t) {
              Gr(t).each(function(n) {
                Ro(e) && Oo(t) && Ro(n) && qi(t);
              });
            });
          },
          um = Cc.isEq,
          sm = function(e, t, n) {
            var r = e.formatter.get(n);
            if (r)
              for (var o = 0; o < r.length; o++)
                if (!1 === r[o].inherit && e.dom.is(t, r[o].selector))
                  return !0;
            return !1;
          },
          cm = function(e, t, n, r) {
            var o = e.dom.getRoot();
            return (
              t !== o &&
              ((t = e.dom.getParent(t, function(t) {
                return (
                  !!sm(e, t, n) || t.parentNode === o || !!dm(e, t, n, r, !0)
                );
              })),
              dm(e, t, n, r))
            );
          },
          lm = function(e, t, n) {
            return (
              !!um(t, n.inline) ||
              !!um(t, n.block) ||
              (n.selector ? 1 === t.nodeType && e.is(t, n.selector) : void 0)
            );
          },
          fm = function(e, t, n, r, o, i) {
            var a,
              u,
              s,
              c = n[r];
            if (n.onmatch) return n.onmatch(t, n, r);
            if (c)
              if (void 0 === c.length) {
                for (a in c)
                  if (c.hasOwnProperty(a)) {
                    if (
                      ((u =
                        "attributes" === r
                          ? e.getAttrib(t, a)
                          : Cc.getStyle(e, t, a)),
                      o && !u && !n.exact)
                    )
                      return;
                    if (
                      (!o || n.exact) &&
                      !um(
                        u,
                        Cc.normalizeStyleValue(e, Cc.replaceVars(c[a], i), a)
                      )
                    )
                      return;
                  }
              } else
                for (s = 0; s < c.length; s++)
                  if (
                    "attributes" === r
                      ? e.getAttrib(t, c[s])
                      : Cc.getStyle(e, t, c[s])
                  )
                    return n;
            return n;
          },
          dm = function(e, t, n, r, o) {
            var i,
              a,
              u,
              s,
              c = e.formatter.get(n),
              l = e.dom;
            if (c && t)
              for (a = 0; a < c.length; a++)
                if (
                  ((i = c[a]),
                  lm(e.dom, t, i) &&
                    fm(l, t, i, "attributes", o, r) &&
                    fm(l, t, i, "styles", o, r))
                ) {
                  if ((s = i.classes))
                    for (u = 0; u < s.length; u++)
                      if (!e.dom.hasClass(t, s[u])) return;
                  return i;
                }
          },
          hm = {
            matchNode: dm,
            matchName: lm,
            match: function(e, t, n, r) {
              var o;
              return r
                ? cm(e, r, t, n)
                : ((r = e.selection.getNode()),
                  !!cm(e, r, t, n) ||
                    !((o = e.selection.getStart()) === r || !cm(e, o, t, n)));
            },
            matchAll: function(e, t, n) {
              var r,
                o = [],
                i = {};
              return (
                (r = e.selection.getStart()),
                e.dom.getParent(
                  r,
                  function(r) {
                    var a, u;
                    for (a = 0; a < t.length; a++)
                      (u = t[a]),
                        !i[u] && dm(e, r, u, n) && ((i[u] = !0), o.push(u));
                  },
                  e.dom.getRoot()
                ),
                o
              );
            },
            canApply: function(e, t) {
              var n,
                r,
                o,
                i,
                a,
                u = e.formatter.get(t),
                s = e.dom;
              if (u)
                for (
                  n = e.selection.getStart(),
                    r = Cc.getParents(s, n),
                    i = u.length - 1;
                  i >= 0;
                  i--
                ) {
                  if (!(a = u[i].selector) || u[i].defaultBlock) return !0;
                  for (o = r.length - 1; o >= 0; o--)
                    if (s.is(r[o], a)) return !0;
                }
              return !1;
            },
            matchesUnInheritedFormatSelector: sm
          },
          mm = function(e, t) {
            return e.splitText(t);
          },
          gm = function(e) {
            var t = e.startContainer,
              n = e.startOffset,
              r = e.endContainer,
              o = e.endOffset;
            return (
              t === r && To.isText(t)
                ? n > 0 &&
                  n < t.nodeValue.length &&
                  ((t = (r = mm(t, n)).previousSibling),
                  o > n
                    ? ((t = r = mm(r, (o -= n)).previousSibling),
                      (o = r.nodeValue.length),
                      (n = 0))
                    : (o = 0))
                : (To.isText(t) &&
                    n > 0 &&
                    n < t.nodeValue.length &&
                    ((t = mm(t, n)), (n = 0)),
                  To.isText(r) &&
                    o > 0 &&
                    o < r.nodeValue.length &&
                    (o = (r = mm(r, o).previousSibling).nodeValue.length)),
              {
                startContainer: t,
                startOffset: n,
                endContainer: r,
                endOffset: o
              }
            );
          },
          pm = function(e, t, n) {
            if (0 !== n) {
              var r = e.data.slice(t, t + n),
                o = t + n >= e.data.length,
                i = 0 === t;
              e.replaceData(
                t,
                n,
                (function(e, t, n) {
                  return X(
                    e.split(""),
                    function(r, o) {
                      return (function(e) {
                        return -1 !== " \f\n\r\t\v".indexOf(e);
                      })(o) || " " === o
                        ? r.previousCharIsSpace ||
                          ("" === r.str && t) ||
                          (r.str.length === e.length - 1 && n)
                          ? { previousCharIsSpace: !1, str: r.str + " " }
                          : { previousCharIsSpace: !0, str: r.str + " " }
                        : { previousCharIsSpace: !1, str: r.str + o };
                    },
                    { previousCharIsSpace: !1, str: "" }
                  ).str;
                })(r, i, o)
              );
            }
          },
          vm = function(e, t) {
            var n,
              r = e.data.slice(t),
              o = r.length - ((n = r), n.replace(/^\s+/g, "")).length;
            return pm(e, t, o);
          },
          bm = function(e, t) {
            var n,
              r,
              o,
              i = fr.fromDom(e),
              u = fr.fromDom(t);
            return (
              (n = u), (r = "pre,code"), (o = a($r, i)), aa(n, r, o).isSome()
            );
          },
          ym = function(e, t) {
            return (
              (Wa(t) &&
                !1 ===
                  (function(e, t) {
                    return (
                      To.isText(t) &&
                      /^[ \t\r\n]*$/.test(t.data) &&
                      !1 === bm(e, t)
                    );
                  })(e, t)) ||
              (function(e) {
                return (
                  To.isElement(e) &&
                  "A" === e.nodeName &&
                  e.hasAttribute("name")
                );
              })(t) ||
              Cm(t)
            );
          },
          Cm = To.hasAttribute("data-mce-bookmark"),
          wm = To.hasAttribute("data-mce-bogus"),
          xm = To.hasAttributeValue("data-mce-bogus", "all"),
          zm = function(e) {
            return (function(e) {
              var t,
                n = 0;
              if (ym(e, e)) return !1;
              if (!(t = e.firstChild)) return !0;
              var r = new Ao(t, e);
              do {
                if (xm(t)) t = r.next(!0);
                else if (wm(t)) t = r.next();
                else if (To.isBr(t)) n++, (t = r.next());
                else {
                  if (ym(e, t)) return !1;
                  t = r.next();
                }
              } while (t);
              return n <= 1;
            })(e.dom());
          },
          Sm = function(e, t) {
            return (function(e, t) {
              var n = e.container(),
                r = e.offset();
              return (
                !1 === _u.isTextPosition(e) &&
                n === t.parentNode &&
                r > _u.before(t).offset()
              );
            })(t, e)
              ? _u(t.container(), t.offset() - 1)
              : t;
          },
          Nm = function(e) {
            return Wa(e.previousSibling)
              ? A.some(
                  ((t = e.previousSibling),
                  To.isText(t) ? _u(t, t.data.length) : _u.after(t))
                )
              : e.previousSibling
              ? sc.lastPositionIn(e.previousSibling)
              : A.none();
            var t;
          },
          Em = function(e) {
            return Wa(e.nextSibling)
              ? A.some(
                  ((t = e.nextSibling), To.isText(t) ? _u(t, 0) : _u.before(t))
                )
              : e.nextSibling
              ? sc.firstPositionIn(e.nextSibling)
              : A.none();
            var t;
          },
          km = function(e, t) {
            return Nm(t)
              .orThunk(function() {
                return Em(t);
              })
              .orThunk(function() {
                return (function(e, t) {
                  var n = _u.before(
                    t.previousSibling ? t.previousSibling : t.parentNode
                  );
                  return sc.prevPosition(e, n).fold(function() {
                    return sc.nextPosition(e, _u.after(t));
                  }, A.some);
                })(e, t);
              });
          },
          Tm = function(e, t) {
            return Em(t)
              .orThunk(function() {
                return Nm(t);
              })
              .orThunk(function() {
                return (function(e, t) {
                  return sc.nextPosition(e, _u.after(t)).fold(function() {
                    return sc.prevPosition(e, _u.before(t));
                  }, A.some);
                })(e, t);
              });
          },
          Am = function(e, t, n) {
            return (function(e, t, n) {
              return e ? Tm(t, n) : km(t, n);
            })(e, t, n).map(a(Sm, n));
          },
          Mm = function(e, t, n) {
            n.fold(
              function() {
                e.focus();
              },
              function(n) {
                e.selection.setRng(n.toRange(), t);
              }
            );
          },
          _m = function(e, t) {
            return t && e.schema.getBlockElements().hasOwnProperty(gr(t));
          },
          Rm = function(e) {
            if (zm(e)) {
              var t = fr.fromHtml('<br data-mce-bogus="1">');
              return ji(e), Fi(e, t), A.some(_u.before(t.dom()));
            }
            return A.none();
          },
          Bm = function(e, t, n) {
            var r = Gr(e).filter(function(e) {
                return To.isText(e.dom());
              }),
              o = Jr(e).filter(function(e) {
                return To.isText(e.dom());
              });
            return (
              qi(e),
              uu([r, o, t], function(e, t, r) {
                var o = e.dom(),
                  i = t.dom(),
                  a = o.data.length;
                return (
                  (function(e, t, n) {
                    var r = nr(e.data).length;
                    e.appendData(t.data), qi(fr.fromDom(t)), n && vm(e, r);
                  })(o, i, n),
                  r.container() === i ? _u(o, a) : r
                );
              }).orThunk(function() {
                return (
                  n &&
                    (r.each(function(e) {
                      return (
                        (t = e.dom()),
                        (n = e.dom().length),
                        (r = t.data.slice(0, n)),
                        (o = r.length - nr(r).length),
                        pm(t, n - o, o)
                      );
                      var t, n, r, o;
                    }),
                    o.each(function(e) {
                      return vm(e.dom(), 0);
                    })),
                  t
                );
              })
            );
          },
          Om = function(e, t, n, r) {
            void 0 === r && (r = !0);
            var o,
              i = Am(t, e.getBody(), n.dom()),
              u = oa(
                n,
                a(_m, e),
                ((o = e.getBody()),
                function(e) {
                  return e.dom() === o;
                })
              ),
              s = Bm(
                n,
                i,
                (function(e, t) {
                  return Er(e.schema.getTextInlineElements(), gr(t));
                })(e, n)
              );
            e.dom.isEmpty(e.getBody())
              ? (e.setContent(""), e.selection.setCursorLocation())
              : u.bind(Rm).fold(
                  function() {
                    r && Mm(e, t, s);
                  },
                  function(n) {
                    r && Mm(e, t, A.some(n));
                  }
                );
          },
          Dm = xa,
          Hm = function(e) {
            return (
              (function(e) {
                for (var t = []; e; ) {
                  if (
                    (3 === e.nodeType && e.nodeValue !== Dm) ||
                    e.childNodes.length > 1
                  )
                    return [];
                  1 === e.nodeType && t.push(e), (e = e.firstChild);
                }
                return t;
              })(e).length > 0
            );
          },
          Pm = function(e) {
            if (e) {
              var t = new Ao(e, e);
              for (e = t.current(); e; e = t.next())
                if (3 === e.nodeType) return e;
            }
            return null;
          },
          Lm = function(e) {
            var t = fr.fromTag("span");
            return (
              Ar(t, {
                id: "_mce_caret",
                "data-mce-bogus": "1",
                "data-mce-type": "format-caret"
              }),
              e && Fi(t, fr.fromText(Dm)),
              t
            );
          },
          Vm = function(e, t, n) {
            void 0 === n && (n = !0);
            var r = e.dom,
              o = e.selection;
            if (Hm(t)) Om(e, !1, fr.fromDom(t), n);
            else {
              var i = o.getRng(),
                a = r.getParent(t, r.isBlock),
                u = (function(e) {
                  var t = Pm(e);
                  return (
                    t && t.nodeValue.charAt(0) === Dm && t.deleteData(0, 1), t
                  );
                })(t);
              i.startContainer === u &&
                i.startOffset > 0 &&
                i.setStart(u, i.startOffset - 1),
                i.endContainer === u &&
                  i.endOffset > 0 &&
                  i.setEnd(u, i.endOffset - 1),
                r.remove(t, !0),
                a && r.isEmpty(a) && im(fr.fromDom(a)),
                o.setRng(i);
            }
          },
          Im = function(e, t, n) {
            void 0 === n && (n = !0);
            var r = e.dom,
              o = e.selection;
            if (t) Vm(e, t, n);
            else if (!(t = es(e.getBody(), o.getStart())))
              for (; (t = r.get("_mce_caret")); ) Vm(e, t, !1);
          },
          Fm = function(e, t, n) {
            var r = e.dom,
              o = r.getParent(n, a(Cc.isTextBlock, e));
            o && r.isEmpty(o)
              ? n.parentNode.replaceChild(t, n)
              : (om(fr.fromDom(n)),
                r.isEmpty(n)
                  ? n.parentNode.replaceChild(t, n)
                  : r.insertAfter(t, n));
          },
          Um = function(e, t) {
            return e.appendChild(t), t;
          },
          jm = function(e, t) {
            var n = K(
              e,
              function(e, t) {
                return Um(e, t.cloneNode(!1));
              },
              t
            );
            return Um(n, n.ownerDocument.createTextNode(Dm));
          },
          qm = function(e) {
            e.on("mouseup keydown", function(t) {
              !(function(e, t) {
                var n = e.selection,
                  r = e.getBody();
                Im(e, null, !1),
                  (8 !== t && 46 !== t) ||
                    !n.isCollapsed() ||
                    n.getStart().innerHTML !== Dm ||
                    Im(e, es(r, n.getStart())),
                  (37 !== t && 39 !== t) || Im(e, es(r, n.getStart()));
              })(e, t.keyCode);
            });
          },
          $m = function(e, t) {
            return (
              e.schema.getTextInlineElements().hasOwnProperty(gr(t)) &&
              !Zu(t.dom()) &&
              !To.isBogus(t.dom())
            );
          },
          Wm = {},
          Km = en.filter,
          Xm = en.each;
        !(function(e, t) {
          var n = Wm[e];
          n || (Wm[e] = n = []), Wm[e].push(t);
        })("pre", function(e) {
          var t,
            n,
            r = e.selection.getRng();
          (t = To.matchNodeNames("pre")),
            r.collapsed ||
              ((n = e.selection.getSelectedBlocks()),
              Xm(
                Km(Km(n, t), function(e) {
                  return (
                    t(e.previousSibling) &&
                    -1 !== en.indexOf(n, e.previousSibling)
                  );
                }),
                function(e) {
                  var t, n;
                  (t = e.previousSibling),
                    Fn((n = e)).remove(),
                    Fn(t)
                      .append("<br><br>")
                      .append(n.childNodes);
                }
              ));
        });
        var Ym,
          Gm = function(e, t) {
            Xm(Wm[e], function(e) {
              e(t);
            });
          },
          Jm = an.each,
          Qm = function(e) {
            this.compare = function(t, n) {
              if (t.nodeName !== n.nodeName) return !1;
              var r = function(t) {
                  var n = {};
                  return (
                    Jm(e.getAttribs(t), function(r) {
                      var o = r.nodeName.toLowerCase();
                      0 !== o.indexOf("_") &&
                        "style" !== o &&
                        0 !== o.indexOf("data-") &&
                        (n[o] = e.getAttrib(t, o));
                    }),
                    n
                  );
                },
                o = function(e, t) {
                  var n, r;
                  for (r in e)
                    if (e.hasOwnProperty(r)) {
                      if (void 0 === (n = t[r])) return !1;
                      if (e[r] !== n) return !1;
                      delete t[r];
                    }
                  for (r in t) if (t.hasOwnProperty(r)) return !1;
                  return !0;
                };
              return !(
                !o(r(t), r(n)) ||
                !o(
                  e.parseStyle(e.getAttrib(t, "style")),
                  e.parseStyle(e.getAttrib(n, "style"))
                ) ||
                pc.isBookmarkNode(t) ||
                pc.isBookmarkNode(n)
              );
            };
          },
          Zm = /^(src|href|style)$/,
          eg = an.each,
          tg = Cc.isEq,
          ng = function(e, t, n) {
            return e.isChildOf(t, n) && t !== n && !e.isBlock(n);
          },
          rg = function(e, t, n) {
            var r, o, i;
            return (
              (r = t[n ? "startContainer" : "endContainer"]),
              (o = t[n ? "startOffset" : "endOffset"]),
              To.isElement(r) &&
                ((i = r.childNodes.length - 1),
                !n && o && o--,
                (r = r.childNodes[o > i ? i : o])),
              To.isText(r) &&
                n &&
                o >= r.nodeValue.length &&
                (r = new Ao(r, e.getBody()).next() || r),
              To.isText(r) &&
                !n &&
                0 === o &&
                (r = new Ao(r, e.getBody()).prev() || r),
              r
            );
          },
          og = function(e, t, n, r) {
            var o = e.create(n, r);
            return t.parentNode.insertBefore(o, t), o.appendChild(t), o;
          },
          ig = function(e, t, n, r, o) {
            var i = fr.fromDom(t),
              a = fr.fromDom(e.create(r, o)),
              u = n ? Zr(i) : Qr(i);
            return (
              Ui(a, u), n ? (Li(i, a), Ii(a, i)) : (Vi(i, a), Fi(a, i)), a.dom()
            );
          },
          ag = function(e, t, n, r) {
            return (
              !(t = Cc.getNonWhiteSpaceSibling(t, n, r)) ||
              "BR" === t.nodeName ||
              e.isBlock(t)
            );
          },
          ug = function(e, t, n, r, o) {
            var i,
              a,
              u,
              s = e.dom;
            if (
              !(function(e, t, n) {
                return (
                  !!tg(t, n.inline) ||
                  !!tg(t, n.block) ||
                  (n.selector ? To.isElement(t) && e.is(t, n.selector) : void 0)
                );
              })(s, r, t) &&
              !(function(e, t) {
                return t.links && "A" === e.tagName;
              })(r, t)
            )
              return !1;
            if ("all" !== t.remove)
              for (
                eg(t.styles, function(e, i) {
                  (e = Cc.normalizeStyleValue(s, Cc.replaceVars(e, n), i)),
                    "number" == typeof i && ((i = e), (o = 0)),
                    (t.remove_similar || !o || tg(Cc.getStyle(s, o, i), e)) &&
                      s.setStyle(r, i, ""),
                    (u = 1);
                }),
                  u &&
                    "" === s.getAttrib(r, "style") &&
                    (r.removeAttribute("style"),
                    r.removeAttribute("data-mce-style")),
                  eg(t.attributes, function(e, t) {
                    var i;
                    if (
                      ((e = Cc.replaceVars(e, n)),
                      "number" == typeof t && ((t = e), (o = 0)),
                      !o || tg(s.getAttrib(o, t), e))
                    ) {
                      if (
                        "class" === t &&
                        (e = s.getAttrib(r, t)) &&
                        ((i = ""),
                        eg(e.split(/\s+/), function(e) {
                          /mce\-\w+/.test(e) && (i += (i ? " " : "") + e);
                        }),
                        i)
                      )
                        return void s.setAttrib(r, t, i);
                      "class" === t && r.removeAttribute("className"),
                        Zm.test(t) && r.removeAttribute("data-mce-" + t),
                        r.removeAttribute(t);
                    }
                  }),
                  eg(t.classes, function(e) {
                    (e = Cc.replaceVars(e, n)),
                      (o && !s.hasClass(o, e)) || s.removeClass(r, e);
                  }),
                  a = s.getAttribs(r),
                  i = 0;
                i < a.length;
                i++
              ) {
                var c = a[i].nodeName;
                if (0 !== c.indexOf("_") && 0 !== c.indexOf("data-")) return !1;
              }
            return "none" !== t.remove
              ? ((function(e, t, n) {
                  var r,
                    o = t.parentNode,
                    i = e.dom,
                    a = cl(e);
                  n.block &&
                    (a
                      ? o === i.getRoot() &&
                        ((n.list_block && tg(t, n.list_block)) ||
                          eg(an.grep(t.childNodes), function(t) {
                            Cc.isValid(e, a, t.nodeName.toLowerCase())
                              ? r
                                ? r.appendChild(t)
                                : ((r = og(i, t, a)),
                                  i.setAttribs(
                                    r,
                                    e.settings.forced_root_block_attrs
                                  ))
                              : (r = 0);
                          }))
                      : i.isBlock(t) &&
                        !i.isBlock(o) &&
                        (ag(i, t, !1) ||
                          ag(i, t.firstChild, !0, 1) ||
                          t.insertBefore(i.create("br"), t.firstChild),
                        ag(i, t, !0) ||
                          ag(i, t.lastChild, !1, 1) ||
                          t.appendChild(i.create("br")))),
                    (n.selector && n.inline && !tg(n.inline, t)) ||
                      i.remove(t, 1);
                })(e, r, t),
                !0)
              : void 0;
          },
          sg = ug,
          cg = function(e, t, n, r, o) {
            var i,
              a,
              u = e.formatter.get(t),
              s = u[0],
              c = !0,
              l = e.dom,
              f = e.selection,
              d = function(r) {
                var i = (function(e, t, n, r, o) {
                  var i;
                  return (
                    eg(Cc.getParents(e.dom, t.parentNode).reverse(), function(
                      t
                    ) {
                      var a;
                      i ||
                        "_start" === t.id ||
                        "_end" === t.id ||
                        ((a = hm.matchNode(e, t, n, r, o)) &&
                          !1 !== a.split &&
                          (i = t));
                    }),
                    i
                  );
                })(e, r, t, n, o);
                return (function(e, t, n, r, o, i, a, u) {
                  var s,
                    c,
                    l,
                    f,
                    d,
                    h,
                    m = e.dom;
                  if (n) {
                    for (
                      h = n.parentNode, s = r.parentNode;
                      s && s !== h;
                      s = s.parentNode
                    ) {
                      for (c = m.clone(s, !1), d = 0; d < t.length; d++)
                        if (ug(e, t[d], u, c, c)) {
                          c = 0;
                          break;
                        }
                      c && (l && c.appendChild(l), f || (f = c), (l = c));
                    }
                    !i || (a.mixed && m.isBlock(n)) || (r = m.split(n, r)),
                      l && (o.parentNode.insertBefore(l, o), f.appendChild(o));
                  }
                  return r;
                })(e, u, i, r, r, !0, s, n);
              },
              h = function(t) {
                var r, o, i, a, f;
                if (
                  (To.isElement(t) &&
                    l.getContentEditable(t) &&
                    ((a = c),
                    (c = "true" === l.getContentEditable(t)),
                    (f = !0)),
                  (r = an.grep(t.childNodes)),
                  c && !f)
                )
                  for (
                    o = 0, i = u.length;
                    o < i && !ug(e, u[o], n, t, t);
                    o++
                  );
                if (s.deep && r.length) {
                  for (o = 0, i = r.length; o < i; o++) h(r[o]);
                  f && (c = a);
                }
              },
              m = function(e) {
                var t = l.get(e ? "_start" : "_end"),
                  n = t[e ? "firstChild" : "lastChild"];
                return (
                  (function(e) {
                    return (
                      pc.isBookmarkNode(e) &&
                      To.isElement(e) &&
                      ("_start" === e.id || "_end" === e.id)
                    );
                  })(n) && (n = n[e ? "firstChild" : "lastChild"]),
                  To.isText(n) &&
                    0 === n.data.length &&
                    (n = e
                      ? t.previousSibling || t.nextSibling
                      : t.nextSibling || t.previousSibling),
                  l.remove(t, !0),
                  n
                );
              },
              g = function(t) {
                var n,
                  r,
                  o = t.commonAncestorContainer;
                if (((t = Rc(e, t, u, !0)), s.split)) {
                  if (((t = gm(t)), (n = rg(e, t, !0)) !== (r = rg(e, t)))) {
                    if (
                      (/^(TR|TH|TD)$/.test(n.nodeName) &&
                        n.firstChild &&
                        (n =
                          "TR" === n.nodeName
                            ? n.firstChild.firstChild || n
                            : n.firstChild || n),
                      o &&
                        /^T(HEAD|BODY|FOOT|R)$/.test(o.nodeName) &&
                        /^(TH|TD)$/.test(r.nodeName) &&
                        r.firstChild &&
                        (r = r.firstChild || r),
                      ng(l, n, r))
                    ) {
                      var i = A.from(n.firstChild).getOr(n);
                      return (
                        d(
                          ig(l, i, !0, "span", {
                            id: "_start",
                            "data-mce-type": "bookmark"
                          })
                        ),
                        void m(!0)
                      );
                    }
                    if (ng(l, r, n))
                      return (
                        (i = A.from(r.lastChild).getOr(r)),
                        d(
                          ig(l, i, !1, "span", {
                            id: "_end",
                            "data-mce-type": "bookmark"
                          })
                        ),
                        void m(!1)
                      );
                    (n = og(l, n, "span", {
                      id: "_start",
                      "data-mce-type": "bookmark"
                    })),
                      (r = og(l, r, "span", {
                        id: "_end",
                        "data-mce-type": "bookmark"
                      })),
                      d(n),
                      d(r),
                      (n = m(!0)),
                      (r = m());
                  } else n = r = d(n);
                  (t.startContainer = n.parentNode ? n.parentNode : n),
                    (t.startOffset = l.nodeIndex(n)),
                    (t.endContainer = r.parentNode ? r.parentNode : r),
                    (t.endOffset = l.nodeIndex(r) + 1);
                }
                Oc.walk(l, t, function(t) {
                  eg(t, function(t) {
                    h(t),
                      To.isElement(t) &&
                        "underline" === e.dom.getStyle(t, "text-decoration") &&
                        t.parentNode &&
                        "underline" === Cc.getTextDecoration(l, t.parentNode) &&
                        ug(
                          e,
                          {
                            deep: !1,
                            exact: !0,
                            inline: "span",
                            styles: { textDecoration: "underline" }
                          },
                          null,
                          t
                        );
                  });
                });
              };
            if (r)
              r.nodeType
                ? ((a = l.createRng()).setStartBefore(r),
                  a.setEndAfter(r),
                  g(a))
                : g(r);
            else if ("false" !== l.getContentEditable(f.getNode()))
              f.isCollapsed() &&
              s.inline &&
              !l.select("td[data-mce-selected],th[data-mce-selected]").length
                ? (function(e, t, n, r) {
                    var o,
                      i,
                      a,
                      u,
                      s,
                      c,
                      l,
                      f = e.dom,
                      d = e.selection,
                      h = [],
                      m = d.getRng();
                    for (
                      o = m.startContainer,
                        i = m.startOffset,
                        s = o,
                        3 === o.nodeType &&
                          (i !== o.nodeValue.length && (u = !0),
                          (s = s.parentNode));
                      s;

                    ) {
                      if (hm.matchNode(e, s, t, n, r)) {
                        c = s;
                        break;
                      }
                      s.nextSibling && (u = !0), h.push(s), (s = s.parentNode);
                    }
                    if (c)
                      if (u) {
                        (a = d.getBookmark()), m.collapse(!0);
                        var g = Rc(e, m, e.formatter.get(t), !0);
                        (g = gm(g)),
                          e.formatter.remove(t, n, g),
                          d.moveToBookmark(a);
                      } else {
                        l = es(e.getBody(), c);
                        var p = Lm(!1).dom(),
                          v = jm(h, p);
                        Fm(e, p, l || c),
                          Vm(e, l, !1),
                          d.setCursorLocation(v, 1),
                          f.isEmpty(c) && f.remove(c);
                      }
                  })(e, t, n, o)
                : ((i = Qu.getPersistentBookmark(e.selection, !0)),
                  g(f.getRng()),
                  f.moveToBookmark(i),
                  s.inline &&
                    hm.match(e, t, n, f.getStart()) &&
                    Cc.moveStart(l, f, f.getRng()),
                  e.nodeChanged());
            else {
              r = f.getNode();
              for (
                var p = 0, v = u.length;
                p < v && (!u[p].ceFalseOverride || !ug(e, u[p], n, r, r));
                p++
              );
            }
          },
          lg = an.each,
          fg = function(e) {
            return (
              e &&
              1 === e.nodeType &&
              !pc.isBookmarkNode(e) &&
              !Zu(e) &&
              !To.isBogus(e)
            );
          },
          dg = function(e, t) {
            var n;
            for (n = e; n; n = n[t]) {
              if (3 === n.nodeType && 0 !== n.nodeValue.length) return e;
              if (1 === n.nodeType && !pc.isBookmarkNode(n)) return n;
            }
            return e;
          },
          hg = function(e, t, n) {
            var r,
              o,
              i = new Qm(e);
            if (
              t &&
              n &&
              ((t = dg(t, "previousSibling")),
              (n = dg(n, "nextSibling")),
              i.compare(t, n))
            ) {
              for (r = t.nextSibling; r && r !== n; )
                (o = r), (r = r.nextSibling), t.appendChild(o);
              return (
                e.remove(n),
                an.each(an.grep(n.childNodes), function(e) {
                  t.appendChild(e);
                }),
                t
              );
            }
            return n;
          },
          mg = function(e, t, n) {
            lg(e.childNodes, function(e) {
              fg(e) && (t(e) && n(e), e.hasChildNodes() && mg(e, t, n));
            });
          },
          gg = function(e, t) {
            return a(function(t, n) {
              return !(!n || !Cc.getStyle(e, n, t));
            }, t);
          },
          pg = function(e, t, n) {
            return a(
              function(t, n, r) {
                e.setStyle(r, t, n),
                  "" === r.getAttribute("style") && r.removeAttribute("style"),
                  vg(e, r);
              },
              t,
              n
            );
          },
          vg = function(e, t) {
            "SPAN" === t.nodeName &&
              0 === e.getAttribs(t).length &&
              e.remove(t, !0);
          },
          bg = function(e, t) {
            var n;
            1 === t.nodeType &&
              t.parentNode &&
              1 === t.parentNode.nodeType &&
              ((n = Cc.getTextDecoration(e, t.parentNode)),
              e.getStyle(t, "color") && n
                ? e.setStyle(t, "text-decoration", n)
                : e.getStyle(t, "text-decoration") === n &&
                  e.setStyle(t, "text-decoration", null));
          },
          yg = function(e, t, n, r) {
            lg(t, function(t) {
              lg(e.dom.select(t.inline, r), function(r) {
                fg(r) && sg(e, t, n, r, t.exact ? r : null);
              }),
                (function(e, t, n) {
                  if (t.clear_child_styles) {
                    var r = t.links ? "*:not(a)" : "*";
                    lg(e.select(r, n), function(n) {
                      fg(n) &&
                        lg(t.styles, function(t, r) {
                          e.setStyle(n, r, "");
                        });
                    });
                  }
                })(e.dom, t, r);
            });
          },
          Cg = function(e, t, n, r) {
            (t.styles.color || t.styles.textDecoration) &&
              (an.walk(r, a(bg, e), "childNodes"), bg(e, r));
          },
          wg = function(e, t, n, r) {
            t.styles &&
              t.styles.backgroundColor &&
              mg(
                r,
                gg(e, "fontSize"),
                pg(
                  e,
                  "backgroundColor",
                  Cc.replaceVars(t.styles.backgroundColor, n)
                )
              );
          },
          xg = function(e, t, n, r) {
            ("sub" !== t.inline && "sup" !== t.inline) ||
              (mg(r, gg(e, "fontSize"), pg(e, "fontSize", "")),
              e.remove(e.select("sup" === t.inline ? "sub" : "sup", r), !0));
          },
          zg = function(e, t, n, r) {
            r &&
              !1 !== t.merge_siblings &&
              ((r = hg(e, Cc.getNonWhiteSpaceSibling(r), r)),
              (r = hg(e, r, Cc.getNonWhiteSpaceSibling(r, !0))));
          },
          Sg = function(e, t, n, r, o) {
            (hm.matchNode(e, o.parentNode, n, r) && sg(e, t, r, o)) ||
              (t.merge_with_parents &&
                e.dom.getParent(o.parentNode, function(i) {
                  if (hm.matchNode(e, i, n, r)) return sg(e, t, r, o), !0;
                }));
          },
          Ng = function(e) {
            var n = _u.fromRangeStart(e),
              r = _u.fromRangeEnd(e),
              o = e.commonAncestorContainer;
            return sc
              .fromPosition(!1, o, r)
              .map(function(i) {
                return !Ts(n, r, o) && Ts(n, i, o)
                  ? (function(e, n, r, o) {
                      var i = t.document.createRange();
                      return i.setStart(e, n), i.setEnd(r, o), i;
                    })(n.container(), n.offset(), i.container(), i.offset())
                  : e;
              })
              .getOr(e);
          },
          Eg = function(e) {
            return e.collapsed ? e : Ng(e);
          },
          kg = an.each,
          Tg = function(e, t, n, r) {
            var o,
              i,
              a = e.formatter.get(t),
              u = a[0],
              s = !r && e.selection.isCollapsed(),
              c = e.dom,
              l = e.selection,
              f = function(e, t) {
                if (((t = t || u), e)) {
                  if (
                    (t.onformat && t.onformat(e, t, n, r),
                    kg(t.styles, function(t, r) {
                      c.setStyle(e, r, Cc.replaceVars(t, n));
                    }),
                    t.styles)
                  ) {
                    var o = c.getAttrib(e, "style");
                    o && e.setAttribute("data-mce-style", o);
                  }
                  kg(t.attributes, function(t, r) {
                    c.setAttrib(e, r, Cc.replaceVars(t, n));
                  }),
                    kg(t.classes, function(t) {
                      (t = Cc.replaceVars(t, n)),
                        c.hasClass(e, t) || c.addClass(e, t);
                    });
                }
              },
              d = function(e, t) {
                var n = !1;
                return (
                  !!u.selector &&
                  (kg(e, function(e) {
                    if (!("collapsed" in e && e.collapsed !== s))
                      return c.is(t, e.selector) && !Zu(t)
                        ? (f(t, e), (n = !0), !1)
                        : void 0;
                  }),
                  n)
                );
              },
              h = function(r, o, i, s) {
                var c,
                  l,
                  h = [],
                  m = !0;
                (c = u.inline || u.block),
                  (l = r.create(c)),
                  f(l),
                  Oc.walk(r, o, function(o) {
                    var i,
                      g = function(o) {
                        var p, v, b, y;
                        if (
                          ((y = m),
                          (p = o.nodeName.toLowerCase()),
                          (v = o.parentNode.nodeName.toLowerCase()),
                          1 === o.nodeType &&
                            r.getContentEditable(o) &&
                            ((y = m),
                            (m = "true" === r.getContentEditable(o)),
                            (b = !0)),
                          Cc.isEq(p, "br"))
                        )
                          return (i = 0), void (u.block && r.remove(o));
                        if (u.wrapper && hm.matchNode(e, o, t, n)) i = 0;
                        else {
                          if (
                            m &&
                            !b &&
                            u.block &&
                            !u.wrapper &&
                            Cc.isTextBlock(e, p) &&
                            Cc.isValid(e, v, c)
                          )
                            return (
                              (o = r.rename(o, c)),
                              f(o),
                              h.push(o),
                              void (i = 0)
                            );
                          if (u.selector) {
                            var C = d(a, o);
                            if (!u.inline || C) return void (i = 0);
                          }
                          !m ||
                          b ||
                          !Cc.isValid(e, c, p) ||
                          !Cc.isValid(e, v, c) ||
                          (!s &&
                            3 === o.nodeType &&
                            1 === o.nodeValue.length &&
                            65279 === o.nodeValue.charCodeAt(0)) ||
                          Zu(o) ||
                          (u.inline && r.isBlock(o))
                            ? ((i = 0),
                              kg(an.grep(o.childNodes), g),
                              b && (m = y),
                              (i = 0))
                            : (i ||
                                ((i = r.clone(l, !1)),
                                o.parentNode.insertBefore(i, o),
                                h.push(i)),
                              i.appendChild(o));
                        }
                      };
                    kg(o, g);
                  }),
                  !0 === u.links &&
                    kg(h, function(e) {
                      var t = function(e) {
                        "A" === e.nodeName && f(e, u),
                          kg(an.grep(e.childNodes), t);
                      };
                      t(e);
                    }),
                  kg(h, function(o) {
                    var i,
                      s = function(e) {
                        var t = !1;
                        return (
                          kg(e.childNodes, function(e) {
                            if (
                              (function(e) {
                                return (
                                  e &&
                                  1 === e.nodeType &&
                                  !pc.isBookmarkNode(e) &&
                                  !Zu(e) &&
                                  !To.isBogus(e)
                                );
                              })(e)
                            )
                              return (t = e), !1;
                          }),
                          t
                        );
                      };
                    (i = (function(e) {
                      var t = 0;
                      return (
                        kg(e.childNodes, function(e) {
                          Cc.isWhiteSpaceNode(e) || pc.isBookmarkNode(e) || t++;
                        }),
                        t
                      );
                    })(o)),
                      (!(h.length > 1) && r.isBlock(o)) || 0 !== i
                        ? (u.inline || u.wrapper) &&
                          (u.exact ||
                            1 !== i ||
                            (o = (function(e) {
                              var t, n;
                              return (
                                (t = s(e)) &&
                                  !pc.isBookmarkNode(t) &&
                                  hm.matchName(r, t, u) &&
                                  ((n = r.clone(t, !1)),
                                  f(n),
                                  r.replace(n, e, !0),
                                  r.remove(t, 1)),
                                n || e
                              );
                            })(o)),
                          yg(e, a, n, o),
                          Sg(e, u, t, n, o),
                          wg(r, u, n, o),
                          xg(r, u, n, o),
                          zg(r, u, n, o))
                        : r.remove(o, 1);
                  });
              };
            if ("false" !== c.getContentEditable(l.getNode())) {
              if (u) {
                if (r)
                  r.nodeType
                    ? d(a, r) ||
                      ((i = c.createRng()).setStartBefore(r),
                      i.setEndAfter(r),
                      h(c, Rc(e, i, a), 0, !0))
                    : h(c, r, 0, !0);
                else if (
                  s &&
                  u.inline &&
                  !c.select("td[data-mce-selected],th[data-mce-selected]")
                    .length
                )
                  !(function(e, t, n) {
                    var r,
                      o,
                      i,
                      a,
                      u,
                      s,
                      c = e.selection;
                    (a = (r = c.getRng()).startOffset),
                      (s = r.startContainer.nodeValue),
                      (o = es(e.getBody(), c.getStart())) && (i = Pm(o));
                    var l,
                      f,
                      d = /[^\s\u00a0\u00ad\u200b\ufeff]/;
                    s &&
                    a > 0 &&
                    a < s.length &&
                    d.test(s.charAt(a)) &&
                    d.test(s.charAt(a - 1))
                      ? ((u = c.getBookmark()),
                        r.collapse(!0),
                        (r = Rc(e, r, e.formatter.get(t))),
                        (r = gm(r)),
                        e.formatter.apply(t, n, r),
                        c.moveToBookmark(u))
                      : (o && i.nodeValue === Dm
                          ? e.formatter.apply(t, n, o)
                          : ((l = e.getDoc()),
                            (f = Lm(!0).dom()),
                            (i = (o = l.importNode(f, !0)).firstChild),
                            r.insertNode(o),
                            (a = 1),
                            e.formatter.apply(t, n, o)),
                        c.setCursorLocation(i, a));
                  })(e, t, n);
                else {
                  var m = e.selection.getNode();
                  e.settings.forced_root_block ||
                    !a[0].defaultBlock ||
                    c.getParent(m, c.isBlock) ||
                    Tg(e, a[0].defaultBlock),
                    e.selection.setRng(Eg(e.selection.getRng())),
                    (o = Qu.getPersistentBookmark(e.selection, !0)),
                    h(c, Rc(e, l.getRng(), a)),
                    u.styles && Cg(c, u, n, m),
                    l.moveToBookmark(o),
                    Cc.moveStart(c, l, l.getRng()),
                    e.nodeChanged();
                }
                Gm(t, e);
              }
            } else {
              r = l.getNode();
              for (var g = 0, p = a.length; g < p; g++)
                if (a[g].ceFalseOverride && c.is(r, a[g].selector))
                  return void f(r, a[g]);
            }
          },
          Ag = { applyFormat: Tg },
          Mg = function(e, t, n, r) {
            var o = yr(n.get()),
              i = {},
              a = {},
              u = W(Cc.getParents(e.dom, t), function(e) {
                return 1 === e.nodeType && !e.getAttribute("data-mce-bogus");
              });
            wr(r, function(t, n) {
              an.each(u, function(r) {
                return e.formatter.matchNode(r, n, {}, t.similar)
                  ? (-1 === o.indexOf(n) &&
                      (j(t.callbacks, function(e) {
                        e(!0, { node: r, format: n, parents: u });
                      }),
                      (i[n] = t.callbacks)),
                    (a[n] = t.callbacks),
                    !1)
                  : !hm.matchesUnInheritedFormatSelector(e, r, n) && void 0;
              });
            });
            var s = _g(n.get(), a, t, u);
            n.set(Ai({}, i, s));
          },
          _g = function(e, t, n, r) {
            return Sr(e, function(e, o) {
              return (
                !!Er(t, o) ||
                (j(e, function(e) {
                  e(!1, { node: n, format: o, parents: r });
                }),
                !1)
              );
            }).t;
          },
          Rg = function(e, t, n, r, o) {
            return (
              null === t.get() &&
                (function(e, t) {
                  var n = _i({});
                  e.set({}),
                    t.on("NodeChange", function(r) {
                      Mg(t, r.element, n, e.get());
                    });
                })(t, e),
              (function(e, t, n, r) {
                var o = e.get();
                j(t.split(","), function(e) {
                  o[e] || (o[e] = { similar: r, callbacks: [] }),
                    o[e].callbacks.push(n);
                }),
                  e.set(o);
              })(t, n, r, o),
              {
                unbind: function() {
                  return (function(e, t, n) {
                    var r = e.get();
                    j(t.split(","), function(e) {
                      (r[e].callbacks = W(r[e].callbacks, function(e) {
                        return e !== n;
                      })),
                        0 === r[e].callbacks.length && delete r[e];
                    }),
                      e.set(r);
                  })(t, n, r);
                }
              }
            );
          },
          Bg = {
            get: function(e) {
              var t = {
                valigntop: [
                  { selector: "td,th", styles: { verticalAlign: "top" } }
                ],
                valignmiddle: [
                  { selector: "td,th", styles: { verticalAlign: "middle" } }
                ],
                valignbottom: [
                  { selector: "td,th", styles: { verticalAlign: "bottom" } }
                ],
                alignleft: [
                  {
                    selector: "figure.image",
                    collapsed: !1,
                    classes: "align-left",
                    ceFalseOverride: !0,
                    preview: "font-family font-size"
                  },
                  {
                    selector:
                      "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                    styles: { textAlign: "left" },
                    inherit: !1,
                    preview: !1,
                    defaultBlock: "div"
                  },
                  {
                    selector: "img,table",
                    collapsed: !1,
                    styles: { float: "left" },
                    preview: "font-family font-size"
                  }
                ],
                aligncenter: [
                  {
                    selector:
                      "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                    styles: { textAlign: "center" },
                    inherit: !1,
                    preview: "font-family font-size",
                    defaultBlock: "div"
                  },
                  {
                    selector: "figure.image",
                    collapsed: !1,
                    classes: "align-center",
                    ceFalseOverride: !0,
                    preview: "font-family font-size"
                  },
                  {
                    selector: "img",
                    collapsed: !1,
                    styles: {
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto"
                    },
                    preview: !1
                  },
                  {
                    selector: "table",
                    collapsed: !1,
                    styles: { marginLeft: "auto", marginRight: "auto" },
                    preview: "font-family font-size"
                  }
                ],
                alignright: [
                  {
                    selector: "figure.image",
                    collapsed: !1,
                    classes: "align-right",
                    ceFalseOverride: !0,
                    preview: "font-family font-size"
                  },
                  {
                    selector:
                      "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                    styles: { textAlign: "right" },
                    inherit: !1,
                    preview: "font-family font-size",
                    defaultBlock: "div"
                  },
                  {
                    selector: "img,table",
                    collapsed: !1,
                    styles: { float: "right" },
                    preview: "font-family font-size"
                  }
                ],
                alignjustify: [
                  {
                    selector:
                      "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                    styles: { textAlign: "justify" },
                    inherit: !1,
                    defaultBlock: "div",
                    preview: "font-family font-size"
                  }
                ],
                bold: [
                  { inline: "strong", remove: "all" },
                  { inline: "span", styles: { fontWeight: "bold" } },
                  { inline: "b", remove: "all" }
                ],
                italic: [
                  { inline: "em", remove: "all" },
                  { inline: "span", styles: { fontStyle: "italic" } },
                  { inline: "i", remove: "all" }
                ],
                underline: [
                  {
                    inline: "span",
                    styles: { textDecoration: "underline" },
                    exact: !0
                  },
                  { inline: "u", remove: "all" }
                ],
                strikethrough: [
                  {
                    inline: "span",
                    styles: { textDecoration: "line-through" },
                    exact: !0
                  },
                  { inline: "strike", remove: "all" }
                ],
                forecolor: {
                  inline: "span",
                  styles: { color: "%value" },
                  links: !0,
                  remove_similar: !0,
                  clear_child_styles: !0
                },
                hilitecolor: {
                  inline: "span",
                  styles: { backgroundColor: "%value" },
                  links: !0,
                  remove_similar: !0,
                  clear_child_styles: !0
                },
                fontname: {
                  inline: "span",
                  toggle: !1,
                  styles: { fontFamily: "%value" },
                  clear_child_styles: !0
                },
                fontsize: {
                  inline: "span",
                  toggle: !1,
                  styles: { fontSize: "%value" },
                  clear_child_styles: !0
                },
                fontsize_class: {
                  inline: "span",
                  attributes: { class: "%value" }
                },
                blockquote: { block: "blockquote", wrapper: !0, remove: "all" },
                subscript: { inline: "sub" },
                superscript: { inline: "sup" },
                code: { inline: "code" },
                link: {
                  inline: "a",
                  selector: "a",
                  remove: "all",
                  split: !0,
                  deep: !0,
                  onmatch: function() {
                    return !0;
                  },
                  onformat: function(t, n, r) {
                    an.each(r, function(n, r) {
                      e.setAttrib(t, r, n);
                    });
                  }
                },
                removeformat: [
                  {
                    selector:
                      "b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins",
                    remove: "all",
                    split: !0,
                    expand: !1,
                    block_expand: !0,
                    deep: !0
                  },
                  {
                    selector: "span",
                    attributes: ["style", "class"],
                    remove: "empty",
                    split: !0,
                    expand: !1,
                    deep: !0
                  },
                  {
                    selector: "*",
                    attributes: ["style", "class"],
                    split: !1,
                    expand: !1,
                    deep: !0
                  }
                ]
              };
              return (
                an.each(
                  "p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp".split(
                    /\s/
                  ),
                  function(e) {
                    t[e] = { block: e, remove: "all" };
                  }
                ),
                t
              );
            }
          },
          Og = an.each,
          Dg = Si.DOM,
          Hg = function(e, t) {
            var n,
              r,
              o,
              i = (t && t.schema) || di({}),
              a = function(e) {
                var t;
                return (
                  (r =
                    "string" == typeof e
                      ? { name: e, classes: [], attrs: {} }
                      : e),
                  (function(e, t) {
                    t.classes.length && Dg.addClass(e, t.classes.join(" ")),
                      Dg.setAttribs(e, t.attrs);
                  })((t = Dg.create(r.name)), r),
                  t
                );
              },
              u = function(e, t, n) {
                var r,
                  o,
                  s,
                  c = t.length > 0 && t[0],
                  l = c && c.name;
                if (
                  (s = (function(e, t) {
                    var n = "string" != typeof e ? e.nodeName.toLowerCase() : e,
                      r = i.getElementRule(n),
                      o = r && r.parentsRequired;
                    return (
                      !(!o || !o.length) &&
                      (t && -1 !== an.inArray(o, t) ? t : o[0])
                    );
                  })(e, l))
                )
                  l === s ? ((o = t[0]), (t = t.slice(1))) : (o = s);
                else if (c) (o = t[0]), (t = t.slice(1));
                else if (!n) return e;
                return (
                  o && (r = a(o)).appendChild(e),
                  n &&
                    (r || (r = Dg.create("div")).appendChild(e),
                    an.each(n, function(t) {
                      var n = a(t);
                      r.insertBefore(n, e);
                    })),
                  u(r, t, o && o.siblings)
                );
              };
            return e && e.length
              ? ((r = e[0]),
                (n = a(r)),
                (o = Dg.create("div")).appendChild(
                  u(n, e.slice(1), r.siblings)
                ),
                o)
              : "";
          },
          Pg = function(e) {
            var t,
              n = { classes: [], attrs: {} };
            return (
              "*" !== (e = n.selector = an.trim(e)) &&
                (t = e.replace(
                  /(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g,
                  function(e, t, r, o, i) {
                    switch (t) {
                      case "#":
                        n.attrs.id = r;
                        break;
                      case ".":
                        n.classes.push(r);
                        break;
                      case ":":
                        -1 !==
                          an.inArray(
                            "checked disabled enabled read-only required".split(
                              " "
                            ),
                            r
                          ) && (n.attrs[r] = r);
                    }
                    if ("[" === o) {
                      var a = i.match(/([\w\-]+)(?:\=\"([^\"]+))?/);
                      a && (n.attrs[a[1]] = a[2]);
                    }
                    return "";
                  }
                )),
              (n.name = t || "div"),
              n
            );
          },
          Lg = function(e) {
            return e && "string" == typeof e
              ? ((e = (e = e.split(/\s*,\s*/)[0]).replace(
                  /\s*(~\+|~|\+|>)\s*/g,
                  "$1"
                )),
                an
                  .map(e.split(/(?:>|\s+(?![^\[\]]+\]))/), function(e) {
                    var t = an.map(e.split(/(?:~\+|~|\+)/), Pg),
                      n = t.pop();
                    return t.length && (n.siblings = t), n;
                  })
                  .reverse())
              : [];
          },
          Vg = function(e, t) {
            var n,
              r,
              o,
              i,
              a,
              u,
              s = "";
            if (!1 === (u = e.settings.preview_styles)) return "";
            "string" != typeof u &&
              (u =
                "font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow");
            var c = function(e) {
              return e.replace(/%(\w+)/g, "");
            };
            if ("string" == typeof t) {
              if (!(t = e.formatter.get(t))) return;
              t = t[0];
            }
            return "preview" in t && !1 === (u = t.preview)
              ? ""
              : ((n = t.block || t.inline || "span"),
                (i = Lg(t.selector)).length
                  ? (i[0].name || (i[0].name = n),
                    (n = t.selector),
                    (r = Hg(i, e)))
                  : (r = Hg([n], e)),
                (o = Dg.select(n, r)[0] || r.firstChild),
                Og(t.styles, function(e, t) {
                  (e = c(e)) && Dg.setStyle(o, t, e);
                }),
                Og(t.attributes, function(e, t) {
                  (e = c(e)) && Dg.setAttrib(o, t, e);
                }),
                Og(t.classes, function(e) {
                  (e = c(e)), Dg.hasClass(o, e) || Dg.addClass(o, e);
                }),
                e.fire("PreviewFormats"),
                Dg.setStyles(r, { position: "absolute", left: -65535 }),
                e.getBody().appendChild(r),
                (a = Dg.getStyle(e.getBody(), "fontSize", !0)),
                (a = /px$/.test(a) ? parseInt(a, 10) : 0),
                Og(u.split(" "), function(t) {
                  var n = Dg.getStyle(o, t, !0);
                  if (
                    !(
                      ("background-color" === t &&
                        /transparent|rgba\s*\([^)]+,\s*0\)/.test(n) &&
                        ((n = Dg.getStyle(e.getBody(), t, !0)),
                        "#ffffff" === Dg.toHex(n).toLowerCase())) ||
                      ("color" === t && "#000000" === Dg.toHex(n).toLowerCase())
                    )
                  ) {
                    if ("font-size" === t && /em|%$/.test(n)) {
                      if (0 === a) return;
                      n = (parseFloat(n) / (/%$/.test(n) ? 100 : 1)) * a + "px";
                    }
                    "border" === t && n && (s += "padding:0 2px;"),
                      (s += t + ":" + n + ";");
                  }
                }),
                e.fire("AfterPreviewFormats"),
                Dg.remove(r),
                s);
          },
          Ig = function(e, t, n, r, o) {
            var i = t.get(n);
            !hm.match(e, n, r, o) || ("toggle" in i[0] && !i[0].toggle)
              ? Ag.applyFormat(e, n, r, o)
              : cg(e, n, r, o);
          },
          Fg = function(e) {
            e.addShortcut("meta+b", "", "Bold"),
              e.addShortcut("meta+i", "", "Italic"),
              e.addShortcut("meta+u", "", "Underline");
            for (var t = 1; t <= 6; t++)
              e.addShortcut("access+" + t, "", ["FormatBlock", !1, "h" + t]);
            e.addShortcut("access+7", "", ["FormatBlock", !1, "p"]),
              e.addShortcut("access+8", "", ["FormatBlock", !1, "div"]),
              e.addShortcut("access+9", "", ["FormatBlock", !1, "address"]);
          },
          Ug = function(e) {
            var t = (function(e) {
                var t = {},
                  n = function(e, r) {
                    e &&
                      ("string" != typeof e
                        ? an.each(e, function(e, t) {
                            n(t, e);
                          })
                        : (B(r) || (r = [r]),
                          an.each(r, function(e) {
                            void 0 === e.deep && (e.deep = !e.selector),
                              void 0 === e.split &&
                                (e.split = !e.selector || e.inline),
                              void 0 === e.remove &&
                                e.selector &&
                                !e.inline &&
                                (e.remove = "none"),
                              e.selector &&
                                e.inline &&
                                ((e.mixed = !0), (e.block_expand = !0)),
                              "string" == typeof e.classes &&
                                (e.classes = e.classes.split(/\s+/));
                          }),
                          (t[e] = r)));
                  };
                return (
                  n(Bg.get(e.dom)),
                  n(e.settings.formats),
                  {
                    get: function(e) {
                      return e ? t[e] : t;
                    },
                    has: function(e) {
                      return Er(t, e);
                    },
                    register: n,
                    unregister: function(e) {
                      return e && t[e] && delete t[e], t;
                    }
                  }
                );
              })(e),
              n = _i(null);
            return (
              Fg(e),
              qm(e),
              {
                get: t.get,
                has: t.has,
                register: t.register,
                unregister: t.unregister,
                apply: a(Ag.applyFormat, e),
                remove: a(cg, e),
                toggle: a(Ig, e, t),
                match: a(hm.match, e),
                matchAll: a(hm.matchAll, e),
                matchNode: a(hm.matchNode, e),
                canApply: a(hm.canApply, e),
                formatChanged: a(Rg, e, n),
                getCssText: a(Vg, e)
              }
            );
          },
          jg = Object.prototype.hasOwnProperty,
          qg = ((Ym = function(e, t) {
            return t;
          }),
          function() {
            for (var e = new Array(arguments.length), t = 0; t < e.length; t++)
              e[t] = arguments[t];
            if (0 === e.length) throw new Error("Can't merge zero objects");
            for (var n = {}, r = 0; r < e.length; r++) {
              var o = e[r];
              for (var i in o) jg.call(o, i) && (n[i] = Ym(n[i], o[i]));
            }
            return n;
          }),
          $g = function(e, t, n) {
            e.addAttributeFilter("data-mce-tabindex", function(e, t) {
              for (var n, r = e.length; r--; )
                (n = e[r]).attr("tabindex", n.attr("data-mce-tabindex")),
                  n.attr(t, null);
            }),
              e.addAttributeFilter("src,href,style", function(e, r) {
                for (
                  var o,
                    i,
                    a = e.length,
                    u = "data-mce-" + r,
                    s = t.url_converter,
                    c = t.url_converter_scope;
                  a--;

                )
                  void 0 !== (i = (o = e[a]).attr(u))
                    ? (o.attr(r, i.length > 0 ? i : null), o.attr(u, null))
                    : ((i = o.attr(r)),
                      "style" === r
                        ? (i = n.serializeStyle(n.parseStyle(i), o.name))
                        : s && (i = s.call(c, i, r, o.name)),
                      o.attr(r, i.length > 0 ? i : null));
              }),
              e.addAttributeFilter("class", function(e) {
                for (var t, n, r = e.length; r--; )
                  (n = (t = e[r]).attr("class")) &&
                    ((n = t
                      .attr("class")
                      .replace(/(?:^|\s)mce-item-\w+(?!\S)/g, "")),
                    t.attr("class", n.length > 0 ? n : null));
              }),
              e.addAttributeFilter("data-mce-type", function(e, t, n) {
                for (var r, o = e.length; o--; )
                  "bookmark" !== (r = e[o]).attr("data-mce-type") ||
                    n.cleanup ||
                    (A.from(r.firstChild).exists(function(e) {
                      return !wa(e.value);
                    })
                      ? r.unwrap()
                      : r.remove());
              }),
              e.addNodeFilter("noscript", function(e) {
                for (var t, n = e.length; n--; )
                  (t = e[n].firstChild) && (t.value = ti.decode(t.value));
              }),
              e.addNodeFilter("script,style", function(e, n) {
                for (
                  var r,
                    o,
                    i,
                    a = e.length,
                    u = function(e) {
                      return e
                        .replace(/(<!--\[CDATA\[|\]\]-->)/g, "\n")
                        .replace(/^[\r\n]*|[\r\n]*$/g, "")
                        .replace(
                          /^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi,
                          ""
                        )
                        .replace(
                          /\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g,
                          ""
                        );
                    };
                  a--;

                )
                  (o = (r = e[a]).firstChild ? r.firstChild.value : ""),
                    "script" === n
                      ? ((i = r.attr("type")) &&
                          r.attr(
                            "type",
                            "mce-no/type" === i ? null : i.replace(/^mce\-/, "")
                          ),
                        "xhtml" === t.element_format &&
                          o.length > 0 &&
                          (r.firstChild.value =
                            "// <![CDATA[\n" + u(o) + "\n// ]]>"))
                      : "xhtml" === t.element_format &&
                        o.length > 0 &&
                        (r.firstChild.value = "\x3c!--\n" + u(o) + "\n--\x3e");
              }),
              e.addNodeFilter("#comment", function(e) {
                for (var t, n = e.length; n--; )
                  0 === (t = e[n]).value.indexOf("[CDATA[")
                    ? ((t.name = "#cdata"),
                      (t.type = 4),
                      (t.value = t.value.replace(/^\[CDATA\[|\]\]$/g, "")))
                    : 0 === t.value.indexOf("mce:protected ") &&
                      ((t.name = "#text"),
                      (t.type = 3),
                      (t.raw = !0),
                      (t.value = unescape(t.value).substr(14)));
              }),
              e.addNodeFilter("xml:namespace,input", function(e, t) {
                for (var n, r = e.length; r--; )
                  7 === (n = e[r]).type
                    ? n.remove()
                    : 1 === n.type &&
                      ("input" !== t ||
                        n.attr("type") ||
                        n.attr("type", "text"));
              }),
              e.addAttributeFilter("data-mce-type", function(t) {
                j(t, function(t) {
                  "format-caret" === t.attr("data-mce-type") &&
                    (t.isEmpty(e.schema.getNonEmptyElements())
                      ? t.remove()
                      : t.unwrap());
                });
              }),
              e.addAttributeFilter(
                "data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize",
                function(e, t) {
                  for (var n = e.length; n--; ) e[n].attr(t, null);
                }
              );
          },
          Wg = function(e) {
            var t,
              n,
              r = function(e) {
                return e && "br" === e.name;
              };
            r((t = e.lastChild)) && r((n = t.prev)) && (t.remove(), n.remove());
          },
          Kg = function(e, n, r) {
            return (function(e, t) {
              return e && e.hasEventListeners("PreProcess") && !t.no_events;
            })(e, r)
              ? (function(e, n, r) {
                  var o,
                    i,
                    a,
                    u = e.dom;
                  return (
                    (n = n.cloneNode(!0)),
                    (o = t.document.implementation).createHTMLDocument &&
                      ((i = o.createHTMLDocument("")),
                      an.each(
                        "BODY" === n.nodeName ? n.childNodes : [n],
                        function(e) {
                          i.body.appendChild(i.importNode(e, !0));
                        }
                      ),
                      (n = "BODY" !== n.nodeName ? i.body.firstChild : i.body),
                      (a = u.doc),
                      (u.doc = i)),
                    vf(e, qg(r, { node: n })),
                    a && (u.doc = a),
                    n
                  );
                })(e, n, r)
              : n;
          },
          Xg = function(e, t, n) {
            e.addNodeFilter("font", function(e) {
              j(e, function(e) {
                var r = t.parse(e.attr("style")),
                  o = e.attr("color"),
                  i = e.attr("face"),
                  a = e.attr("size");
                o && (r.color = o),
                  i && (r["font-family"] = i),
                  a && (r["font-size"] = n[parseInt(e.attr("size"), 10) - 1]),
                  (e.name = "span"),
                  e.attr("style", t.serialize(r)),
                  (function(e, t) {
                    j(t, function(t) {
                      e.attr(t, null);
                    });
                  })(e, ["color", "face", "size"]);
              });
            });
          },
          Yg = function(e, t) {
            var n = mi();
            t.convert_fonts_to_spans &&
              Xg(e, n, an.explode(t.font_size_legacy_values)),
              (function(e, t) {
                e.addNodeFilter("strike", function(e) {
                  j(e, function(e) {
                    var n = t.parse(e.attr("style"));
                    (n["text-decoration"] = "line-through"),
                      (e.name = "span"),
                      e.attr("style", t.serialize(n));
                  });
                });
              })(e, n);
          },
          Gg = function(e, t) {
            t.inline_styles && Yg(e, t);
          },
          Jg = function(e, t, n, r) {
            (e.padd_empty_with_br || t.insert) && n[r.name]
              ? (r.empty().append(new $c("br", 1)).shortEnded = !0)
              : (r.empty().append(new $c("#text", 3)).value = " ");
          },
          Qg = function(e, t) {
            return (
              e &&
              e.firstChild &&
              e.firstChild === e.lastChild &&
              e.firstChild.name === t
            );
          },
          Zg = function(e, t, n, r) {
            return r.isEmpty(t, n, function(t) {
              return (function(e, t) {
                var n = e.getElementRule(t.name);
                return n && n.paddEmpty;
              })(e, t);
            });
          },
          ep = an.makeMap,
          tp = an.each,
          np = an.explode,
          rp = an.extend,
          op = function(e, t) {
            void 0 === t && (t = di());
            var n = {},
              r = [],
              o = {},
              i = {};
            ((e = e || {}).validate = !("validate" in e) || e.validate),
              (e.root_name = e.root_name || "body");
            var a = function(e) {
                var t, a, u;
                (a = e.name) in n && ((u = o[a]) ? u.push(e) : (o[a] = [e])),
                  (t = r.length);
                for (; t--; )
                  (a = r[t].name) in e.attributes.map &&
                    ((u = i[a]) ? u.push(e) : (i[a] = [e]));
                return e;
              },
              u = {
                schema: t,
                addAttributeFilter: function(e, t) {
                  tp(np(e), function(e) {
                    var n;
                    for (n = 0; n < r.length; n++)
                      if (r[n].name === e) return void r[n].callbacks.push(t);
                    r.push({ name: e, callbacks: [t] });
                  });
                },
                getAttributeFilters: function() {
                  return [].concat(r);
                },
                addNodeFilter: function(e, t) {
                  tp(np(e), function(e) {
                    var r = n[e];
                    r || (n[e] = r = []), r.push(t);
                  });
                },
                getNodeFilters: function() {
                  var e = [];
                  for (var t in n)
                    n.hasOwnProperty(t) && e.push({ name: t, callbacks: n[t] });
                  return e;
                },
                filterNode: a,
                parse: function(u, s) {
                  var c,
                    l,
                    f,
                    d,
                    h,
                    m,
                    g,
                    p,
                    v,
                    b,
                    y,
                    C = [];
                  (s = s || {}),
                    (o = {}),
                    (i = {}),
                    (v = rp(
                      ep("script,style,head,html,body,title,meta,param"),
                      t.getBlockElements()
                    ));
                  var w = t.getNonEmptyElements(),
                    x = t.children,
                    z = e.validate,
                    S = (function(e) {
                      return !1 === e ? "" : !0 === e ? "p" : e;
                    })(
                      "forced_root_block" in s
                        ? s.forced_root_block
                        : e.forced_root_block
                    ),
                    N = t.getWhiteSpaceElements(),
                    E = /^[ \t\r\n]+/,
                    k = /[ \t\r\n]+$/,
                    T = /[ \t\r\n]+/g,
                    A = /^[ \t\r\n]+$/;
                  b =
                    N.hasOwnProperty(s.context) ||
                    N.hasOwnProperty(e.root_name);
                  var M = function(e, t) {
                      var r,
                        i = new $c(e, t);
                      return (
                        e in n && ((r = o[e]) ? r.push(i) : (o[e] = [i])), i
                      );
                    },
                    _ = function(e) {
                      var n,
                        r,
                        o,
                        i,
                        a = t.getBlockElements();
                      for (n = e.prev; n && 3 === n.type; ) {
                        if ((o = n.value.replace(k, "")).length > 0)
                          return void (n.value = o);
                        if ((r = n.next)) {
                          if (3 === r.type && r.value.length) {
                            n = n.prev;
                            continue;
                          }
                          if (
                            !a[r.name] &&
                            "script" !== r.name &&
                            "style" !== r.name
                          ) {
                            n = n.prev;
                            continue;
                          }
                        }
                        (i = n.prev), n.remove(), (n = i);
                      }
                    };
                  c = Qc(
                    {
                      validate: z,
                      allow_script_urls: e.allow_script_urls,
                      allow_conditional_comments: e.allow_conditional_comments,
                      self_closing_elements: (function(e) {
                        var t,
                          n = {};
                        for (t in e) "li" !== t && "p" !== t && (n[t] = e[t]);
                        return n;
                      })(t.getSelfClosingElements()),
                      cdata: function(e) {
                        y.append(M("#cdata", 4)).value = e;
                      },
                      text: function(e, t) {
                        var n;
                        b ||
                          ((e = e.replace(T, " ")),
                          (function(e, t) {
                            return e && (t[e.name] || "br" === e.name);
                          })(y.lastChild, v) && (e = e.replace(E, ""))),
                          0 !== e.length &&
                            (((n = M("#text", 3)).raw = !!t),
                            (y.append(n).value = e));
                      },
                      comment: function(e) {
                        y.append(M("#comment", 8)).value = e;
                      },
                      pi: function(e, t) {
                        (y.append(M(e, 7)).value = t), _(y);
                      },
                      doctype: function(e) {
                        (y.append(M("#doctype", 10)).value = e), _(y);
                      },
                      start: function(e, n, o) {
                        var a, u, s, c, l;
                        if ((s = z ? t.getElementRule(e) : {})) {
                          for (
                            (a = M(s.outputName || e, 1)).attributes = n,
                              a.shortEnded = o,
                              y.append(a),
                              (l = x[y.name]) &&
                                x[a.name] &&
                                !l[a.name] &&
                                C.push(a),
                              u = r.length;
                            u--;

                          )
                            (c = r[u].name) in n.map &&
                              ((g = i[c]) ? g.push(a) : (i[c] = [a]));
                          v[e] && _(a), o || (y = a), !b && N[e] && (b = !0);
                        }
                      },
                      end: function(n) {
                        var r, o, i, a, u;
                        if ((o = z ? t.getElementRule(n) : {})) {
                          if (v[n] && !b) {
                            if ((r = y.firstChild) && 3 === r.type)
                              if ((i = r.value.replace(E, "")).length > 0)
                                (r.value = i), (r = r.next);
                              else
                                for (
                                  a = r.next, r.remove(), r = a;
                                  r && 3 === r.type;

                                )
                                  (i = r.value),
                                    (a = r.next),
                                    (0 === i.length || A.test(i)) &&
                                      (r.remove(), (r = a)),
                                    (r = a);
                            if ((r = y.lastChild) && 3 === r.type)
                              if ((i = r.value.replace(k, "")).length > 0)
                                (r.value = i), (r = r.prev);
                              else
                                for (
                                  a = r.prev, r.remove(), r = a;
                                  r && 3 === r.type;

                                )
                                  (i = r.value),
                                    (a = r.prev),
                                    (0 === i.length || A.test(i)) &&
                                      (r.remove(), (r = a)),
                                    (r = a);
                          }
                          if (
                            (b && N[n] && (b = !1),
                            o.removeEmpty &&
                              Zg(t, w, N, y) &&
                              !y.attr("name") &&
                              !y.attr("id"))
                          )
                            return (
                              (u = y.parent),
                              v[y.name] ? y.empty().remove() : y.unwrap(),
                              void (y = u)
                            );
                          o.paddEmpty &&
                            ((function(e) {
                              return (
                                Qg(e, "#text") && " " === e.firstChild.value
                              );
                            })(y) ||
                              Zg(t, w, N, y)) &&
                            Jg(e, s, v, y),
                            (y = y.parent);
                        }
                      }
                    },
                    t
                  );
                  var R = (y = new $c(s.context || e.root_name, 11));
                  if (
                    (c.parse(u),
                    z &&
                      C.length &&
                      (s.context
                        ? (s.invalid = !0)
                        : (function(e) {
                            var n, r, o, i, u, s, c, l, f, d, h, m, g, p, v, b;
                            for (
                              m = ep("tr,td,th,tbody,thead,tfoot,table"),
                                d = t.getNonEmptyElements(),
                                h = t.getWhiteSpaceElements(),
                                g = t.getTextBlockElements(),
                                p = t.getSpecialElements(),
                                n = 0;
                              n < e.length;
                              n++
                            )
                              if ((r = e[n]).parent && !r.fixed)
                                if (g[r.name] && "li" === r.parent.name) {
                                  for (v = r.next; v && g[v.name]; )
                                    (v.name = "li"),
                                      (v.fixed = !0),
                                      r.parent.insert(v, r.parent),
                                      (v = v.next);
                                  r.unwrap(r);
                                } else {
                                  for (
                                    i = [r], o = r.parent;
                                    o &&
                                    !t.isValidChild(o.name, r.name) &&
                                    !m[o.name];
                                    o = o.parent
                                  )
                                    i.push(o);
                                  if (o && i.length > 1) {
                                    for (
                                      i.reverse(),
                                        u = s = a(i[0].clone()),
                                        f = 0;
                                      f < i.length - 1;
                                      f++
                                    ) {
                                      for (
                                        t.isValidChild(s.name, i[f].name)
                                          ? ((c = a(i[f].clone())), s.append(c))
                                          : (c = s),
                                          l = i[f].firstChild;
                                        l && l !== i[f + 1];

                                      )
                                        (b = l.next), c.append(l), (l = b);
                                      s = c;
                                    }
                                    Zg(t, d, h, u)
                                      ? o.insert(r, i[0], !0)
                                      : (o.insert(u, i[0], !0), o.insert(r, u)),
                                      (o = i[0]),
                                      (Zg(t, d, h, o) || Qg(o, "br")) &&
                                        o.empty().remove();
                                  } else if (r.parent) {
                                    if ("li" === r.name) {
                                      if (
                                        (v = r.prev) &&
                                        ("ul" === v.name || "ul" === v.name)
                                      ) {
                                        v.append(r);
                                        continue;
                                      }
                                      if (
                                        (v = r.next) &&
                                        ("ul" === v.name || "ul" === v.name)
                                      ) {
                                        v.insert(r, v.firstChild, !0);
                                        continue;
                                      }
                                      r.wrap(a(new $c("ul", 1)));
                                      continue;
                                    }
                                    t.isValidChild(r.parent.name, "div") &&
                                    t.isValidChild("div", r.name)
                                      ? r.wrap(a(new $c("div", 1)))
                                      : p[r.name]
                                      ? r.empty().remove()
                                      : r.unwrap();
                                  }
                                }
                          })(C)),
                    S &&
                      ("body" === R.name || s.isRootContent) &&
                      (function() {
                        var n,
                          r,
                          o = R.firstChild,
                          i = function(e) {
                            e &&
                              ((o = e.firstChild) &&
                                3 === o.type &&
                                (o.value = o.value.replace(E, "")),
                              (o = e.lastChild) &&
                                3 === o.type &&
                                (o.value = o.value.replace(k, "")));
                          };
                        if (t.isValidChild(R.name, S.toLowerCase())) {
                          for (; o; )
                            (n = o.next),
                              3 === o.type ||
                              (1 === o.type &&
                                "p" !== o.name &&
                                !v[o.name] &&
                                !o.attr("data-mce-type"))
                                ? r
                                  ? r.append(o)
                                  : ((r = M(S, 1)).attr(
                                      e.forced_root_block_attrs
                                    ),
                                    R.insert(r, o),
                                    r.append(o))
                                : (i(r), (r = null)),
                              (o = n);
                          i(r);
                        }
                      })(),
                    !s.invalid)
                  ) {
                    for (p in o)
                      if (o.hasOwnProperty(p)) {
                        for (g = n[p], h = (l = o[p]).length; h--; )
                          l[h].parent || l.splice(h, 1);
                        for (f = 0, d = g.length; f < d; f++) g[f](l, p, s);
                      }
                    for (f = 0, d = r.length; f < d; f++)
                      if ((g = r[f]).name in i) {
                        for (h = (l = i[g.name]).length; h--; )
                          l[h].parent || l.splice(h, 1);
                        for (h = 0, m = g.callbacks.length; h < m; h++)
                          g.callbacks[h](l, g.name, s);
                      }
                  }
                  return R;
                }
              };
            return (
              (function(e, t) {
                var n = e.schema;
                t.remove_trailing_brs &&
                  e.addNodeFilter("br", function(e, r, o) {
                    var i,
                      a,
                      u,
                      s,
                      c,
                      l,
                      f,
                      d,
                      h = e.length,
                      m = an.extend({}, n.getBlockElements()),
                      g = n.getNonEmptyElements(),
                      p = n.getNonEmptyElements();
                    for (m.body = 1, i = 0; i < h; i++)
                      if (
                        ((u = (a = e[i]).parent),
                        m[a.parent.name] && a === u.lastChild)
                      ) {
                        for (c = a.prev; c; ) {
                          if (
                            "span" !== (l = c.name) ||
                            "bookmark" !== c.attr("data-mce-type")
                          ) {
                            if ("br" !== l) break;
                            if ("br" === l) {
                              a = null;
                              break;
                            }
                          }
                          c = c.prev;
                        }
                        a &&
                          (a.remove(),
                          Zg(n, g, p, u) &&
                            (f = n.getElementRule(u.name)) &&
                            (f.removeEmpty
                              ? u.remove()
                              : f.paddEmpty && Jg(t, o, m, u)));
                      } else {
                        for (
                          s = a;
                          u &&
                          u.firstChild === s &&
                          u.lastChild === s &&
                          ((s = u), !m[u.name]);

                        )
                          u = u.parent;
                        s === u &&
                          !0 !== t.padd_empty_with_br &&
                          (((d = new $c("#text", 3)).value = " "),
                          a.replace(d));
                      }
                  }),
                  e.addAttributeFilter("href", function(e) {
                    var n,
                      r,
                      o,
                      i = e.length;
                    if (!t.allow_unsafe_link_target)
                      for (; i--; )
                        "a" === (n = e[i]).name &&
                          "_blank" === n.attr("target") &&
                          n.attr(
                            "rel",
                            ((r = n.attr("rel")),
                            (o = void 0),
                            (o = r ? an.trim(r) : ""),
                            /\b(noopener)\b/g.test(o)
                              ? o
                              : (function(e) {
                                  return e
                                    .split(" ")
                                    .filter(function(e) {
                                      return e.length > 0;
                                    })
                                    .concat(["noopener"])
                                    .sort()
                                    .join(" ");
                                })(o))
                          );
                  }),
                  t.allow_html_in_named_anchor ||
                    e.addAttributeFilter("id,name", function(e) {
                      for (var t, n, r, o, i = e.length; i--; )
                        if (
                          "a" === (o = e[i]).name &&
                          o.firstChild &&
                          !o.attr("href")
                        ) {
                          (r = o.parent), (t = o.lastChild);
                          do {
                            (n = t.prev), r.insert(t, o), (t = n);
                          } while (t);
                        }
                    }),
                  t.fix_list_elements &&
                    e.addNodeFilter("ul,ol", function(e) {
                      for (var t, n, r = e.length; r--; )
                        if (
                          "ul" === (n = (t = e[r]).parent).name ||
                          "ol" === n.name
                        )
                          if (t.prev && "li" === t.prev.name) t.prev.append(t);
                          else {
                            var o = new $c("li", 1);
                            o.attr("style", "list-style-type: none"), t.wrap(o);
                          }
                    }),
                  t.validate &&
                    n.getValidClasses() &&
                    e.addAttributeFilter("class", function(e) {
                      for (
                        var t,
                          r,
                          o,
                          i,
                          a,
                          u,
                          s,
                          c = e.length,
                          l = n.getValidClasses();
                        c--;

                      ) {
                        for (
                          r = (t = e[c]).attr("class").split(" "),
                            a = "",
                            o = 0;
                          o < r.length;
                          o++
                        )
                          (i = r[o]),
                            (s = !1),
                            (u = l["*"]) && u[i] && (s = !0),
                            (u = l[t.name]),
                            !s && u && u[i] && (s = !0),
                            s && (a && (a += " "), (a += i));
                        a.length || (a = null), t.attr("class", a);
                      }
                    });
              })(u, e),
              Gg(u, e),
              u
            );
          },
          ip = function(e, t, n) {
            -1 === an.inArray(t, n) &&
              (e.addAttributeFilter(n, function(e, t) {
                for (var n = e.length; n--; ) e[n].attr(t, null);
              }),
              t.push(n));
          },
          ap = function(e, t, n, r, o) {
            return (function(e, t, n) {
              return !t.no_events && e
                ? bf(e, qg(t, { content: n })).content
                : n;
            })(
              e,
              o,
              (function(e, t, n) {
                return Pl(e, t).serialize(n);
              })(t, n, r)
            );
          },
          up = function(e, t) {
            var n,
              r,
              o,
              i = ["data-mce-selected"];
            return (
              (n = t && t.dom ? t.dom : Si.DOM),
              (r = t && t.schema ? t.schema : di(e)),
              (e.entity_encoding = e.entity_encoding || "named"),
              (e.remove_trailing_brs =
                !("remove_trailing_brs" in e) || e.remove_trailing_brs),
              (o = op(e, r)),
              $g(o, e, n),
              {
                schema: r,
                addNodeFilter: o.addNodeFilter,
                addAttributeFilter: o.addAttributeFilter,
                serialize: function(i, a) {
                  var u = qg({ format: "html" }, a || {}),
                    s = Kg(t, i, u),
                    c = (function(e, t, n) {
                      var r = za(n.getInner ? t.innerHTML : e.getOuterHTML(t));
                      return n.selection || Fo(fr.fromDom(t)) ? r : an.trim(r);
                    })(n, s, u),
                    l = (function(e, t, n) {
                      var r = n.selection
                          ? qg({ forced_root_block: !1 }, n)
                          : n,
                        o = e.parse(t, r);
                      return Wg(o), o;
                    })(o, c, u);
                  return "tree" === u.format ? l : ap(t, e, r, l, u);
                },
                addRules: function(e) {
                  r.addValidElements(e);
                },
                setRules: function(e) {
                  r.setValidElements(e);
                },
                addTempAttr: a(ip, o, i),
                getTempAttrs: function() {
                  return i;
                }
              }
            );
          },
          sp = function(e, t) {
            var n = up(e, t);
            return {
              schema: n.schema,
              addNodeFilter: n.addNodeFilter,
              addAttributeFilter: n.addAttributeFilter,
              serialize: n.serialize,
              addRules: n.addRules,
              setRules: n.setRules,
              addTempAttr: n.addTempAttr,
              getTempAttrs: n.getTempAttrs
            };
          };
        function cp(e) {
          return {
            getBookmark: a(pc.getBookmark, e),
            moveToBookmark: a(pc.moveToBookmark, e)
          };
        }
        !(function(e) {
          e.isBookmarkNode = pc.isBookmarkNode;
        })(cp || (cp = {}));
        var lp,
          fp = cp,
          dp = To.isContentEditableFalse,
          hp = To.isContentEditableTrue,
          mp = function(e, n) {
            var r,
              o,
              i,
              a,
              u,
              s,
              c,
              l,
              f,
              d,
              h,
              m,
              g,
              p,
              v,
              b,
              y,
              C = n.dom,
              w = an.each,
              x = n.getDoc(),
              z = t.document,
              S = Math.abs,
              N = Math.round,
              E = n.getBody();
            a = {
              nw: [0, 0, -1, -1],
              ne: [1, 0, 1, -1],
              se: [1, 1, 1, 1],
              sw: [0, 1, -1, 1]
            };
            var k = function(e) {
                return (
                  e && ("IMG" === e.nodeName || n.dom.is(e, "figure.image"))
                );
              },
              T = function(e) {
                var t = e.target;
                (function(e, t) {
                  return k(e.target) && !dh(e.clientX, e.clientY, t);
                })(e, n.selection.getRng()) &&
                  !e.isDefaultPrevented() &&
                  (e.preventDefault(), n.selection.select(t));
              },
              A = function(e) {
                return n.dom.is(e, "figure.image") ? e.querySelector("img") : e;
              },
              M = function(e) {
                var t = n.settings.object_resizing;
                return (
                  !1 !== t &&
                  !Le.iOS &&
                  ("string" != typeof t && (t = "table,img,figure.image,div"),
                  "false" !== e.getAttribute("data-mce-resize") &&
                    e !== n.getBody() &&
                    Ur(fr.fromDom(e), t))
                );
              },
              _ = function(e) {
                var t, a, w, x;
                (t = e.screenX - s),
                  (a = e.screenY - c),
                  (p = t * u[2] + d),
                  (v = a * u[3] + h),
                  (p = p < 5 ? 5 : p),
                  (v = v < 5 ? 5 : v),
                  (k(r) && !1 !== n.settings.resize_img_proportional
                    ? !Ch.modifierPressed(e)
                    : Ch.modifierPressed(e) || (k(r) && u[2] * u[3] != 0)) &&
                    (S(t) > S(a)
                      ? ((v = N(p * m)), (p = N(v / m)))
                      : ((p = N(v / m)), (v = N(p * m)))),
                  C.setStyles(A(o), { width: p, height: v }),
                  (w = (w = u.startPos.x + t) > 0 ? w : 0),
                  (x = (x = u.startPos.y + a) > 0 ? x : 0),
                  C.setStyles(i, { left: w, top: x, display: "block" }),
                  (i.innerHTML = p + " &times; " + v),
                  u[2] < 0 &&
                    o.clientWidth <= p &&
                    C.setStyle(o, "left", l + (d - p)),
                  u[3] < 0 &&
                    o.clientHeight <= v &&
                    C.setStyle(o, "top", f + (h - v)),
                  (t = E.scrollWidth - b) + (a = E.scrollHeight - y) != 0 &&
                    C.setStyles(i, { left: w - t, top: x - a }),
                  g || (xf(n, r, d, h), (g = !0));
              },
              R = function() {
                g = !1;
                var e = function(e, t) {
                  t &&
                    (r.style[e] ||
                    !n.schema.isValid(r.nodeName.toLowerCase(), e)
                      ? C.setStyle(A(r), e, t)
                      : C.setAttrib(A(r), e, t));
                };
                e("width", p),
                  e("height", v),
                  C.unbind(x, "mousemove", _),
                  C.unbind(x, "mouseup", R),
                  z !== x &&
                    (C.unbind(z, "mousemove", _), C.unbind(z, "mouseup", R)),
                  C.remove(o),
                  C.remove(i),
                  B(r),
                  zf(n, r, p, v),
                  C.setAttrib(r, "style", C.getAttrib(r, "style")),
                  n.nodeChanged();
              },
              B = function(e) {
                var t, g, S, N, k;
                O(),
                  P(),
                  (t = C.getPos(e, E)),
                  (l = t.x),
                  (f = t.y),
                  (k = e.getBoundingClientRect()),
                  (g = k.width || k.right - k.left),
                  (S = k.height || k.bottom - k.top),
                  r !== e && ((r = e), (p = v = 0)),
                  (N = n.fire("ObjectSelected", { target: e })),
                  M(e) && !N.isDefaultPrevented()
                    ? w(a, function(e, t) {
                        var n;
                        (n = C.get("mceResizeHandle" + t)) && C.remove(n),
                          (n = C.add(E, "div", {
                            id: "mceResizeHandle" + t,
                            "data-mce-bogus": "all",
                            class: "mce-resizehandle",
                            unselectable: !0,
                            style:
                              "cursor:" + t + "-resize; margin:0; padding:0"
                          })),
                          11 === Le.ie && (n.contentEditable = !1),
                          C.bind(n, "mousedown", function(t) {
                            t.stopImmediatePropagation(),
                              t.preventDefault(),
                              (function(t) {
                                (s = t.screenX),
                                  (c = t.screenY),
                                  (d = A(r).clientWidth),
                                  (h = A(r).clientHeight),
                                  (m = h / d),
                                  (u = e),
                                  (e.startPos = {
                                    x: g * e[0] + l,
                                    y: S * e[1] + f
                                  }),
                                  (b = E.scrollWidth),
                                  (y = E.scrollHeight),
                                  (o = r.cloneNode(!0)),
                                  C.addClass(o, "mce-clonedresizable"),
                                  C.setAttrib(o, "data-mce-bogus", "all"),
                                  (o.contentEditable = !1),
                                  (o.unSelectabe = !0),
                                  C.setStyles(o, {
                                    left: l,
                                    top: f,
                                    margin: 0
                                  }),
                                  o.removeAttribute("data-mce-selected"),
                                  E.appendChild(o),
                                  C.bind(x, "mousemove", _),
                                  C.bind(x, "mouseup", R),
                                  z !== x &&
                                    (C.bind(z, "mousemove", _),
                                    C.bind(z, "mouseup", R)),
                                  (i = C.add(
                                    E,
                                    "div",
                                    {
                                      class: "mce-resize-helper",
                                      "data-mce-bogus": "all"
                                    },
                                    d + " &times; " + h
                                  ));
                              })(t);
                          }),
                          (e.elm = n),
                          C.setStyles(n, {
                            left: g * e[0] + l - n.offsetWidth / 2,
                            top: S * e[1] + f - n.offsetHeight / 2
                          });
                      })
                    : O(),
                  r.setAttribute("data-mce-selected", "1");
              },
              O = function() {
                var e, t;
                for (e in (P(), r && r.removeAttribute("data-mce-selected"), a))
                  (t = C.get("mceResizeHandle" + e)) &&
                    (C.unbind(t), C.remove(t));
              },
              D = function(t) {
                var r,
                  o = function(e, t) {
                    if (e)
                      do {
                        if (e === t) return !0;
                      } while ((e = e.parentNode));
                  };
                g ||
                  n.removed ||
                  (w(
                    C.select("img[data-mce-selected],hr[data-mce-selected]"),
                    function(e) {
                      e.removeAttribute("data-mce-selected");
                    }
                  ),
                  (r = "mousedown" === t.type ? t.target : e.getNode()),
                  o((r = C.$(r).closest("table,img,figure.image,hr")[0]), E) &&
                  (L(), o(e.getStart(!0), r) && o(e.getEnd(!0), r))
                    ? B(r)
                    : O());
              },
              H = function(e) {
                return dp(
                  (function(e, t) {
                    for (; t && t !== e; ) {
                      if (hp(t) || dp(t)) return t;
                      t = t.parentNode;
                    }
                    return null;
                  })(n.getBody(), e)
                );
              },
              P = function() {
                for (var e in a) {
                  var t = a[e];
                  t.elm && (C.unbind(t.elm), delete t.elm);
                }
              },
              L = function() {
                try {
                  n.getDoc().execCommand("enableObjectResizing", !1, !1);
                } catch (e) {}
              };
            return (
              n.on("init", function() {
                L(),
                  Le.ie &&
                    Le.ie >= 11 &&
                    (n.on("mousedown click", function(e) {
                      var t = e.target,
                        r = t.nodeName;
                      g ||
                        !/^(TABLE|IMG|HR)$/.test(r) ||
                        H(t) ||
                        (2 !== e.button && n.selection.select(t, "TABLE" === r),
                        "mousedown" === e.type && n.nodeChanged());
                    }),
                    n.dom.bind(E, "mscontrolselect", function(e) {
                      var t = function(e) {
                        je.setEditorTimeout(n, function() {
                          n.selection.select(e);
                        });
                      };
                      if (H(e.target))
                        return e.preventDefault(), void t(e.target);
                      /^(TABLE|IMG|HR)$/.test(e.target.nodeName) &&
                        (e.preventDefault(),
                        "IMG" === e.target.tagName && t(e.target));
                    }));
                var e = je.throttle(function(e) {
                  n.composing || D(e);
                });
                n.on(
                  "nodechange ResizeEditor ResizeWindow drop FullscreenStateChanged",
                  e
                ),
                  n.on("keyup compositionend", function(t) {
                    r && "TABLE" === r.nodeName && e(t);
                  }),
                  n.on("hide blur", O),
                  n.on("contextmenu", T);
              }),
              n.on("remove", P),
              {
                isResizable: M,
                showResizeRect: B,
                hideResizeRect: O,
                updateResizeRect: D,
                destroy: function() {
                  r = o = null;
                }
              }
            );
          },
          gp = function(e) {
            for (var t = 0, n = 0, r = e; r && r.nodeType; )
              (t += r.offsetLeft || 0),
                (n += r.offsetTop || 0),
                (r = r.offsetParent);
            return { x: t, y: n };
          },
          pp = function(e, t, n) {
            var r,
              o,
              i,
              a,
              u = e.dom,
              s = u.getRoot(),
              c = 0;
            if (
              !(function(e, t, n) {
                var r = { elm: t, alignToTop: n };
                return e.fire("ScrollIntoView", r), r.isDefaultPrevented();
              })(e, t, n) &&
              To.isElement(t)
            ) {
              if ((!1 === n && (c = t.offsetHeight), "BODY" !== s.nodeName)) {
                var l = e.selection.getScrollContainer();
                if (l)
                  return (
                    (r = gp(t).y - gp(l).y + c),
                    (a = l.clientHeight),
                    void (
                      (r < (i = l.scrollTop) || r + 25 > i + a) &&
                      (l.scrollTop = r < i ? r : r - a + 25)
                    )
                  );
              }
              (o = u.getViewPort(e.getWin())),
                (r = u.getPos(t).y + c),
                (i = o.y),
                (a = o.h),
                (r < o.y || r + 25 > i + a) &&
                  e.getWin().scrollTo(0, r < i ? r : r - a + 25);
            }
          },
          vp = function(e, t) {
            ue(Au.fromRangeStart(t).getClientRects()).each(function(t) {
              var n,
                r,
                o = (function(e) {
                  if (e.inline) return e.getBody().getBoundingClientRect();
                  var t = e.getWin();
                  return {
                    left: 0,
                    right: t.innerWidth,
                    top: 0,
                    bottom: t.innerHeight,
                    width: t.innerWidth,
                    height: t.innerHeight
                  };
                })(e),
                i = { x: tu((n = o), (r = t)), y: nu(n, r) };
              !(function(e, t, n) {
                e.inline
                  ? ((e.getBody().scrollLeft += t),
                    (e.getBody().scrollTop += n))
                  : e.getWin().scrollBy(t, n);
              })(
                e,
                0 !== i.x ? (i.x > 0 ? i.x + 4 : i.x - 4) : 0,
                0 !== i.y ? (i.y > 0 ? i.y + 4 : i.y - 4) : 0
              );
            });
          },
          bp = function(e) {
            return To.isContentEditableTrue(e) || To.isContentEditableFalse(e);
          },
          yp = function(e, t, n) {
            var r,
              o,
              i = n;
            if (i.caretPositionFromPoint)
              (o = i.caretPositionFromPoint(e, t)) &&
                ((r = n.createRange()).setStart(o.offsetNode, o.offset),
                r.collapse(!0));
            else if (n.caretRangeFromPoint) r = n.caretRangeFromPoint(e, t);
            else if (i.body.createTextRange) {
              r = i.body.createTextRange();
              try {
                r.moveToPoint(e, t), r.collapse(!0);
              } catch (o) {
                r = (function(e, t, n) {
                  var r, o, i;
                  if (
                    ((r = n.elementFromPoint(e, t)),
                    (o = n.body.createTextRange()),
                    (r && "HTML" !== r.tagName) || (r = n.body),
                    o.moveToElementText(r),
                    (i = (i = an.toArray(o.getClientRects())).sort(function(
                      e,
                      n
                    ) {
                      return (
                        (e = Math.abs(Math.max(e.top - t, e.bottom - t))) -
                        (n = Math.abs(Math.max(n.top - t, n.bottom - t)))
                      );
                    })).length > 0)
                  ) {
                    t = (i[0].bottom + i[0].top) / 2;
                    try {
                      return o.moveToPoint(e, t), o.collapse(!0), o;
                    } catch (e) {}
                  }
                  return null;
                })(e, t, n);
              }
              return (function(e, t) {
                var n = e && e.parentElement ? e.parentElement() : null;
                return To.isContentEditableFalse(
                  (function(e, t, n) {
                    for (; e && e !== t; ) {
                      if (n(e)) return e;
                      e = e.parentNode;
                    }
                    return null;
                  })(n, t, bp)
                )
                  ? null
                  : e;
              })(r, n.body);
            }
            return r;
          },
          Cp = function(e, t) {
            return U(t, function(t) {
              var n = e.fire("GetSelectionRange", { range: t });
              return n.range !== t ? n.range : t;
            });
          },
          wp = function(e, n) {
            var r = (n || t.document).createDocumentFragment();
            return (
              j(e, function(e) {
                r.appendChild(e.dom());
              }),
              fr.fromDom(r)
            );
          },
          xp = Dr("element", "width", "rows"),
          zp = Dr("element", "cells"),
          Sp = Dr("x", "y"),
          Np = function(e, t) {
            var n = parseInt(Mr(e, t), 10);
            return isNaN(n) ? 1 : n;
          },
          Ep = function(e, t, n) {
            var r = e.rows();
            return !!(r[n] ? r[n].cells() : [])[t];
          },
          kp = function(e) {
            return X(
              e,
              function(e, t) {
                return t.cells().length > e ? t.cells().length : e;
              },
              0
            );
          },
          Tp = function(e, t) {
            for (var n = e.rows(), r = 0; r < n.length; r++)
              for (var o = n[r].cells(), i = 0; i < o.length; i++)
                if ($r(o[i], t)) return A.some(Sp(i, r));
            return A.none();
          },
          Ap = function(e, t, n, r, o) {
            for (var i = [], a = e.rows(), u = n; u <= o; u++) {
              var s = a[u].cells(),
                c = t < r ? s.slice(t, r + 1) : s.slice(r, t + 1);
              i.push(zp(a[u].element(), c));
            }
            return i;
          },
          Mp = function(e) {
            var t = xp(ba(e), 0, []);
            return (
              j(na(e, "tr"), function(e, n) {
                j(na(e, "td,th"), function(r, o) {
                  !(function(e, t, n, r, o) {
                    for (
                      var i = Np(o, "rowspan"),
                        a = Np(o, "colspan"),
                        u = e.rows(),
                        s = n;
                      s < n + i;
                      s++
                    ) {
                      u[s] || (u[s] = zp(ya(r), []));
                      for (var c = t; c < t + a; c++)
                        u[s].cells()[c] = s === n && c === t ? o : ba(o);
                    }
                  })(
                    t,
                    (function(e, t, n) {
                      for (; Ep(e, t, n); ) t++;
                      return t;
                    })(t, o, n),
                    n,
                    e,
                    r
                  );
                });
              }),
              xp(t.element(), kp(t.rows()), t.rows())
            );
          },
          _p = function(e) {
            return (function(e, t) {
              var n = ba(e.element()),
                r = fr.fromTag("tbody");
              return Ui(r, t), Fi(n, r), n;
            })(
              e,
              (function(e) {
                return U(e.rows(), function(e) {
                  var t = U(e.cells(), function(e) {
                      var t = ya(e);
                      return _r(t, "colspan"), _r(t, "rowspan"), t;
                    }),
                    n = ba(e.element());
                  return Ui(n, t), n;
                });
              })(e)
            );
          },
          Rp = function(e, t, n) {
            return Tp(e, t).bind(function(t) {
              return Tp(e, n).map(function(n) {
                return (function(e, t, n) {
                  var r = t.x(),
                    o = t.y(),
                    i = n.x(),
                    a = n.y(),
                    u = o < a ? Ap(e, r, o, i, a) : Ap(e, r, a, i, o);
                  return xp(e.element(), kp(u), u);
                })(e, t, n);
              });
            });
          },
          Bp = function(e) {
            var t = [];
            if (e)
              for (var n = 0; n < e.rangeCount; n++) t.push(e.getRangeAt(n));
            return t;
          },
          Op = Bp,
          Dp = function(e) {
            return ee(e, function(e) {
              var t = ru(e);
              return t ? [fr.fromDom(t)] : [];
            });
          },
          Hp = function(e) {
            return Bp(e).length > 1;
          },
          Pp = function(e) {
            return W(Dp(e), Io);
          },
          Lp = function(e) {
            return na(e, "td[data-mce-selected],th[data-mce-selected]");
          },
          Vp = function(e, t) {
            var n = Lp(t),
              r = Pp(e);
            return n.length > 0 ? n : r;
          },
          Ip = Vp,
          Fp = function(e) {
            return Vp(Op(e.selection.getSel()), fr.fromDom(e.getBody()));
          },
          Up = function(e, t) {
            return Y(e, function(e) {
              return (
                "li" === gr(e) &&
                (function(e, t) {
                  return uu([Od(t), Dd(t)], function(t, n) {
                    var r = Y(Hd(e), a($r, t)),
                      o = Y(Pd(e), a($r, n));
                    return r.isSome() && o.isSome();
                  }).getOr(!1);
                })(e, t)
              );
            }).fold(o([]), function(t) {
              return (function(e) {
                return Y(e, function(e) {
                  return "ul" === gr(e) || "ol" === gr(e);
                });
              })(e)
                .map(function(e) {
                  return [fr.fromTag("li"), fr.fromTag(gr(e))];
                })
                .getOr([]);
            });
          },
          jp = function(e, t) {
            var n = fr.fromDom(t.commonAncestorContainer),
              r = kd(n, e),
              i = W(r, function(e) {
                return Bo(e) || _o(e);
              }),
              a = Up(r, t),
              u = i.concat(
                a.length
                  ? a
                  : (function(e) {
                      return Po(e)
                        ? Xr(e)
                            .filter(Ho)
                            .fold(o([]), function(t) {
                              return [e, t];
                            })
                        : Ho(e)
                        ? [e]
                        : [];
                    })(n)
              );
            return U(u, ba);
          },
          qp = function() {
            return wp([]);
          },
          $p = function(e, t) {
            return (
              (n = fr.fromDom(t.cloneContents())),
              (r = jp(e, t)),
              (o = X(
                r,
                function(e, t) {
                  return Fi(t, e), t;
                },
                n
              )),
              r.length > 0 ? wp([o]) : o
            );
            var n, r, o;
          },
          Wp = function(e, t) {
            return ((n = e), (r = t[0]), aa(r, "table", a($r, n)))
              .bind(function(e) {
                var n = t[0],
                  r = t[t.length - 1],
                  o = Mp(e);
                return Rp(o, n, r).map(function(e) {
                  return wp([_p(e)]);
                });
              })
              .getOrThunk(qp);
            var n, r;
          },
          Kp = function(e, t) {
            var n = Ip(t, e);
            return n.length > 0
              ? Wp(e, n)
              : (function(e, t) {
                  return t.length > 0 && t[0].collapsed ? qp() : $p(e, t[0]);
                })(e, t);
          },
          Xp = function(e, t) {
            if (
              (void 0 === t && (t = {}),
              (t.get = !0),
              (t.format = t.format || "html"),
              (t.selection = !0),
              (t = e.fire("BeforeGetContent", t)).isDefaultPrevented())
            )
              return e.fire("GetContent", t), t.content;
            if ("text" === t.format)
              return (function(e) {
                return A.from(e.selection.getRng())
                  .map(function(t) {
                    var n = e.dom.add(
                        e.getBody(),
                        "div",
                        {
                          "data-mce-bogus": "all",
                          style: "overflow: hidden; opacity: 0;"
                        },
                        t.cloneContents()
                      ),
                      r = za(n.innerText);
                    return e.dom.remove(n), r;
                  })
                  .getOr("");
              })(e);
            t.getInner = !0;
            var n = (function(e, t) {
              var n,
                r = e.selection.getRng(),
                o = e.dom.create("body"),
                i = e.selection.getSel(),
                a = Cp(e, Op(i));
              return (
                (n = t.contextual
                  ? Kp(fr.fromDom(e.getBody()), a).dom()
                  : r.cloneContents()) && o.appendChild(n),
                e.selection.serializer.serialize(o, t)
              );
            })(e, t);
            return "tree" === t.format
              ? n
              : ((t.content = e.selection.isCollapsed() ? "" : n),
                e.fire("GetContent", t),
                t.content);
          },
          Yp = function(e, t, n) {
            return (
              null !==
              (function(e, t, n) {
                for (; e && e !== t; ) {
                  if (n(e)) return e;
                  e = e.parentNode;
                }
                return null;
              })(e, t, n)
            );
          },
          Gp = function(e, t, n) {
            return Yp(e, t, function(e) {
              return e.nodeName === n;
            });
          },
          Jp = function(e) {
            return e && "TABLE" === e.nodeName;
          },
          Qp = function(e) {
            return e && /^(TD|TH|CAPTION)$/.test(e.nodeName);
          },
          Zp = function(e, t) {
            return Ta(e) && !1 === Yp(e, t, Zu);
          },
          ev = function(e, t, n) {
            for (
              var r = new Ao(
                t,
                e.getParent(t.parentNode, e.isBlock) || e.getRoot()
              );
              (t = r[n ? "prev" : "next"]());

            )
              if (To.isBr(t)) return !0;
          },
          tv = function(e, t, n, r, o) {
            var i,
              a,
              u = e.getRoot(),
              s = e.schema.getNonEmptyElements(),
              c = e.getParent(o.parentNode, e.isBlock) || u;
            if (r && To.isBr(o) && t && e.isEmpty(c))
              return A.some(Au(o.parentNode, e.nodeIndex(o)));
            for (var l = new Ao(o, c); (a = l[r ? "prev" : "next"]()); ) {
              if ("false" === e.getContentEditableParent(a) || Zp(a, u))
                return A.none();
              if (To.isText(a) && a.nodeValue.length > 0)
                return !1 === Gp(a, u, "A")
                  ? A.some(Au(a, r ? a.nodeValue.length : 0))
                  : A.none();
              if (e.isBlock(a) || s[a.nodeName.toLowerCase()]) return A.none();
              i = a;
            }
            return n && i ? A.some(Au(i, 0)) : A.none();
          },
          nv = function(e, t, n, r) {
            var o,
              i,
              a,
              u,
              s,
              c,
              l = e.getRoot(),
              f = !1;
            if (
              ((o = r[(n ? "start" : "end") + "Container"]),
              (i = r[(n ? "start" : "end") + "Offset"]),
              (c = To.isElement(o) && i === o.childNodes.length),
              (u = e.schema.getNonEmptyElements()),
              (s = n),
              Ta(o))
            )
              return A.none();
            if (
              (To.isElement(o) && i > o.childNodes.length - 1 && (s = !1),
              To.isDocument(o) && ((o = l), (i = 0)),
              o === l)
            ) {
              if (s && (a = o.childNodes[i > 0 ? i - 1 : 0])) {
                if (Ta(a)) return A.none();
                if (u[a.nodeName] || Jp(a)) return A.none();
              }
              if (o.hasChildNodes()) {
                if (
                  ((i = Math.min(
                    !s && i > 0 ? i - 1 : i,
                    o.childNodes.length - 1
                  )),
                  (o = o.childNodes[i]),
                  (i = To.isText(o) && c ? o.data.length : 0),
                  !t && o === l.lastChild && Jp(o))
                )
                  return A.none();
                if (
                  (function(e, t) {
                    for (; t && t !== e; ) {
                      if (To.isContentEditableFalse(t)) return !0;
                      t = t.parentNode;
                    }
                    return !1;
                  })(l, o) ||
                  Ta(o)
                )
                  return A.none();
                if (o.hasChildNodes() && !1 === Jp(o)) {
                  a = o;
                  var d = new Ao(o, l);
                  do {
                    if (To.isContentEditableFalse(a) || Ta(a)) {
                      f = !1;
                      break;
                    }
                    if (To.isText(a) && a.nodeValue.length > 0) {
                      (i = s ? 0 : a.nodeValue.length), (o = a), (f = !0);
                      break;
                    }
                    if (u[a.nodeName.toLowerCase()] && !Qp(a)) {
                      (i = e.nodeIndex(a)),
                        (o = a.parentNode),
                        s || i++,
                        (f = !0);
                      break;
                    }
                  } while ((a = s ? d.next() : d.prev()));
                }
              }
            }
            return (
              t &&
                (To.isText(o) &&
                  0 === i &&
                  tv(e, c, t, !0, o).each(function(e) {
                    (o = e.container()), (i = e.offset()), (f = !0);
                  }),
                To.isElement(o) &&
                  ((a = o.childNodes[i]) || (a = o.childNodes[i - 1]),
                  !a ||
                    !To.isBr(a) ||
                    (function(e, t) {
                      return (
                        e.previousSibling && e.previousSibling.nodeName === t
                      );
                    })(a, "A") ||
                    ev(e, a, !1) ||
                    ev(e, a, !0) ||
                    tv(e, c, t, !0, a).each(function(e) {
                      (o = e.container()), (i = e.offset()), (f = !0);
                    }))),
              s &&
                !t &&
                To.isText(o) &&
                i === o.nodeValue.length &&
                tv(e, c, t, !1, o).each(function(e) {
                  (o = e.container()), (i = e.offset()), (f = !0);
                }),
              f ? A.some(Au(o, i)) : A.none()
            );
          },
          rv = {
            normalize: function(e, t) {
              var n = t.collapsed,
                r = t.cloneRange(),
                o = Au.fromRangeStart(t);
              return (
                nv(e, n, !0, r).each(function(e) {
                  (n && Au.isAbove(o, e)) ||
                    r.setStart(e.container(), e.offset());
                }),
                n ||
                  nv(e, n, !1, r).each(function(e) {
                    r.setEnd(e.container(), e.offset());
                  }),
                n && r.collapse(!0),
                Bd.isEq(t, r) ? A.none() : A.some(r)
              );
            }
          },
          ov = function(e) {
            return 0 === e.dom().length ? (qi(e), A.none()) : A.some(e);
          },
          iv = function(e, t, n) {
            if (
              (n = (function(e, t) {
                return (
                  ((e = e || { format: "html" }).set = !0),
                  (e.selection = !0),
                  (e.content = t),
                  e
                );
              })(n, t)).no_events ||
              !(n = e.fire("BeforeSetContent", n)).isDefaultPrevented()
            ) {
              var r = e.selection.getRng();
              !(function(e, t) {
                var n = A.from(t.firstChild).map(fr.fromDom),
                  r = A.from(t.lastChild).map(fr.fromDom);
                e.deleteContents(), e.insertNode(t);
                var o = n
                    .bind(Gr)
                    .filter(br)
                    .bind(ov),
                  i = r
                    .bind(Jr)
                    .filter(br)
                    .bind(ov);
                uu([o, n.filter(br)], function(e, t) {
                  var n, r;
                  (n = t.dom()), (r = e.dom().data), n.insertData(0, r), qi(e);
                }),
                  uu([i, r.filter(br)], function(t, n) {
                    var r = n.dom().length;
                    n.dom().appendData(t.dom().data),
                      e.setEnd(n.dom(), r),
                      qi(t);
                  }),
                  e.collapse(!1);
              })(r, r.createContextualFragment(n.content)),
                e.selection.setRng(r),
                vp(e, r),
                n.no_events || e.fire("SetContent", n);
            } else e.fire("SetContent", n);
          },
          av = function(e, t, n, r, o) {
            var i = n ? t.startContainer : t.endContainer,
              a = n ? t.startOffset : t.endOffset;
            return A.from(i)
              .map(fr.fromDom)
              .map(function(e) {
                return r && t.collapsed ? e : to(e, o(e, a)).getOr(e);
              })
              .bind(function(e) {
                return vr(e) ? A.some(e) : Xr(e);
              })
              .map(function(e) {
                return e.dom();
              })
              .getOr(e);
          },
          uv = function(e, t, n) {
            return av(e, t, !0, n, function(e, t) {
              return Math.min(e.dom().childNodes.length, t);
            });
          },
          sv = function(e, t, n) {
            return av(e, t, !1, n, function(e, t) {
              return t > 0 ? t - 1 : t;
            });
          },
          cv = function(e, t) {
            for (var n = e; e && To.isText(e) && 0 === e.length; )
              e = t ? e.nextSibling : e.previousSibling;
            return e || n;
          },
          lv = function(e, t, n) {
            if (e && e.hasOwnProperty(t)) {
              var r = W(e[t], function(e) {
                return e !== n;
              });
              0 === r.length ? delete e[t] : (e[t] = r);
            }
          },
          fv = function(e) {
            return !!e.select;
          },
          dv = function(e) {
            return (
              !(!e || !e.ownerDocument) &&
              Wr(fr.fromDom(e.ownerDocument), fr.fromDom(e))
            );
          },
          hv = function(e, t, n, r) {
            var o,
              i,
              a,
              u,
              s = (function(e, t) {
                var n, r;
                return {
                  selectorChangedWithUnbind: function(o, i) {
                    return (
                      n ||
                        ((n = {}),
                        (r = {}),
                        t.on("NodeChange", function(t) {
                          var o = t.element,
                            i = e.getParents(o, null, e.getRoot()),
                            a = {};
                          an.each(n, function(t, n) {
                            an.each(i, function(o) {
                              if (e.is(o, n))
                                return (
                                  r[n] ||
                                    (an.each(t, function(e) {
                                      e(!0, {
                                        node: o,
                                        selector: n,
                                        parents: i
                                      });
                                    }),
                                    (r[n] = t)),
                                  (a[n] = t),
                                  !1
                                );
                            });
                          }),
                            an.each(r, function(e, t) {
                              a[t] ||
                                (delete r[t],
                                an.each(e, function(e) {
                                  e(!1, { node: o, selector: t, parents: i });
                                }));
                            });
                        })),
                      n[o] || (n[o] = []),
                      n[o].push(i),
                      {
                        unbind: function() {
                          lv(n, o, i), lv(r, o, i);
                        }
                      }
                    );
                  }
                };
              })(e, r).selectorChangedWithUnbind,
              c = function(e, t) {
                return iv(r, e, t);
              },
              l = function(e) {
                var t = d();
                t.collapse(!!e), h(t);
              },
              f = function() {
                return t.getSelection ? t.getSelection() : t.document.selection;
              },
              d = function() {
                var n,
                  o,
                  i,
                  s,
                  c = function(e, t, n) {
                    try {
                      return t.compareBoundaryPoints(e, n);
                    } catch (e) {
                      return -1;
                    }
                  };
                if (!t) return null;
                if (null == (s = t.document)) return null;
                if (void 0 !== r.bookmark && !1 === hf(r)) {
                  var l = of(r);
                  if (l.isSome())
                    return l
                      .map(function(e) {
                        return Cp(r, [e])[0];
                      })
                      .getOr(s.createRange());
                }
                try {
                  (n = f()) &&
                    (o =
                      n.rangeCount > 0
                        ? n.getRangeAt(0)
                        : n.createRange
                        ? n.createRange()
                        : s.createRange());
                } catch (e) {}
                return (
                  (o = Cp(r, [o])[0]) ||
                    (o = s.createRange
                      ? s.createRange()
                      : s.body.createTextRange()),
                  o.setStart &&
                    9 === o.startContainer.nodeType &&
                    o.collapsed &&
                    ((i = e.getRoot()), o.setStart(i, 0), o.setEnd(i, 0)),
                  a &&
                    u &&
                    (0 === c(o.START_TO_START, o, a) &&
                    0 === c(o.END_TO_END, o, a)
                      ? (o = u)
                      : ((a = null), (u = null))),
                  o
                );
              },
              h = function(e, t) {
                var n, o;
                if (
                  (function(e) {
                    return (
                      !!e &&
                      (!!fv(e) || (dv(e.startContainer) && dv(e.endContainer)))
                    );
                  })(e)
                ) {
                  var i = fv(e) ? e : null;
                  if (i) {
                    u = null;
                    try {
                      i.select();
                    } catch (e) {}
                  } else {
                    if (
                      ((n = f()),
                      (e = r.fire("SetSelectionRange", { range: e, forward: t })
                        .range),
                      n)
                    ) {
                      u = e;
                      try {
                        n.removeAllRanges(), n.addRange(e);
                      } catch (e) {}
                      !1 === t &&
                        n.extend &&
                        (n.collapse(e.endContainer, e.endOffset),
                        n.extend(e.startContainer, e.startOffset)),
                        (a = n.rangeCount > 0 ? n.getRangeAt(0) : null);
                    }
                    e.collapsed ||
                      e.startContainer !== e.endContainer ||
                      !n.setBaseAndExtent ||
                      Le.ie ||
                      (e.endOffset - e.startOffset < 2 &&
                        e.startContainer.hasChildNodes() &&
                        (o = e.startContainer.childNodes[e.startOffset]) &&
                        "IMG" === o.tagName &&
                        (n.setBaseAndExtent(
                          e.startContainer,
                          e.startOffset,
                          e.endContainer,
                          e.endOffset
                        ),
                        (n.anchorNode === e.startContainer &&
                          n.focusNode === e.endContainer) ||
                          n.setBaseAndExtent(o, 0, o, 1))),
                      r.fire("AfterSetSelectionRange", {
                        range: e,
                        forward: t
                      });
                  }
                }
              },
              m = function() {
                var t,
                  n,
                  r = f();
                return (
                  !(r && r.anchorNode && r.focusNode) ||
                  ((t = e.createRng()).setStart(r.anchorNode, r.anchorOffset),
                  t.collapse(!0),
                  (n = e.createRng()).setStart(r.focusNode, r.focusOffset),
                  n.collapse(!0),
                  t.compareBoundaryPoints(t.START_TO_START, n) <= 0)
                );
              },
              g = {
                bookmarkManager: null,
                controlSelection: null,
                dom: e,
                win: t,
                serializer: n,
                editor: r,
                collapse: l,
                setCursorLocation: function(t, n) {
                  var o = e.createRng();
                  t
                    ? (o.setStart(t, n), o.setEnd(t, n), h(o), l(!1))
                    : (Ld(e, o, r.getBody(), !0), h(o));
                },
                getContent: function(e) {
                  return Xp(r, e);
                },
                setContent: c,
                getBookmark: function(e, t) {
                  return o.getBookmark(e, t);
                },
                moveToBookmark: function(e) {
                  return o.moveToBookmark(e);
                },
                select: function(t, n) {
                  return (
                    (function(e, t, n) {
                      return A.from(t).map(function(t) {
                        var r = e.nodeIndex(t),
                          o = e.createRng();
                        return (
                          o.setStart(t.parentNode, r),
                          o.setEnd(t.parentNode, r + 1),
                          n && (Ld(e, o, t, !0), Ld(e, o, t, !1)),
                          o
                        );
                      });
                    })(e, t, n).each(h),
                    t
                  );
                },
                isCollapsed: function() {
                  var e = d(),
                    t = f();
                  return (
                    !(!e || e.item) &&
                    (e.compareEndPoints
                      ? 0 === e.compareEndPoints("StartToEnd", e)
                      : !t || e.collapsed)
                  );
                },
                isForward: m,
                setNode: function(t) {
                  return c(e.getOuterHTML(t)), t;
                },
                getNode: function() {
                  return (
                    (e = r.getBody()),
                    (t = d())
                      ? ((o = t.startContainer),
                        (i = t.endContainer),
                        (a = t.startOffset),
                        (u = t.endOffset),
                        (n = t.commonAncestorContainer),
                        !t.collapsed &&
                        (o === i &&
                          u - a < 2 &&
                          o.hasChildNodes() &&
                          (n = o.childNodes[a]),
                        3 === o.nodeType &&
                          3 === i.nodeType &&
                          ((o =
                            o.length === a
                              ? cv(o.nextSibling, !0)
                              : o.parentNode),
                          (i =
                            0 === u ? cv(i.previousSibling, !1) : i.parentNode),
                          o && o === i))
                          ? o
                          : n && 3 === n.nodeType
                          ? n.parentNode
                          : n)
                      : e
                  );
                  var e, t, n, o, i, a, u;
                },
                getSel: f,
                setRng: h,
                getRng: d,
                getStart: function(e) {
                  return uv(r.getBody(), d(), e);
                },
                getEnd: function(e) {
                  return sv(r.getBody(), d(), e);
                },
                getSelectedBlocks: function(t, n) {
                  return (function(e, t, n, r) {
                    var o,
                      i,
                      a = [];
                    if (
                      ((i = e.getRoot()),
                      (n = e.getParent(n || uv(i, t, t.collapsed), e.isBlock)),
                      (r = e.getParent(r || sv(i, t, t.collapsed), e.isBlock)),
                      n && n !== i && a.push(n),
                      n && r && n !== r)
                    ) {
                      o = n;
                      for (var u = new Ao(n, i); (o = u.next()) && o !== r; )
                        e.isBlock(o) && a.push(o);
                    }
                    return r && n !== r && r !== i && a.push(r), a;
                  })(e, d(), t, n);
                },
                normalize: function() {
                  var t = d(),
                    n = f();
                  if (!Hp(n) && Vd(r)) {
                    var o = rv.normalize(e, t);
                    return (
                      o.each(function(e) {
                        h(e, m());
                      }),
                      o.getOr(t)
                    );
                  }
                  return t;
                },
                selectorChanged: function(e, t) {
                  return s(e, t), g;
                },
                selectorChangedWithUnbind: s,
                getScrollContainer: function() {
                  for (var t, n = e.getRoot(); n && "BODY" !== n.nodeName; ) {
                    if (n.scrollHeight > n.clientHeight) {
                      t = n;
                      break;
                    }
                    n = n.parentNode;
                  }
                  return t;
                },
                scrollIntoView: function(e, t) {
                  return pp(r, e, t);
                },
                placeCaretAt: function(e, t) {
                  return h(yp(e, t, r.getDoc()));
                },
                getBoundingClientRect: function() {
                  var e = d();
                  return e.collapsed
                    ? _u.fromRangeStart(e).getClientRects()[0]
                    : e.getBoundingClientRect();
                },
                destroy: function() {
                  (t = a = u = null), i.destroy();
                }
              };
            return (
              (o = fp(g)),
              (i = mp(g, r)),
              (g.bookmarkManager = o),
              (g.controlSelection = i),
              g
            );
          },
          mv = To.isText,
          gv = function(e) {
            return mv(e) && e.data[0] === xa;
          },
          pv = function(e) {
            return mv(e) && e.data[e.data.length - 1] === xa;
          },
          vv = function(e) {
            return e.ownerDocument.createTextNode(xa);
          },
          bv = function(e, t) {
            return e
              ? (function(e) {
                  if (mv(e.previousSibling))
                    return pv(e.previousSibling)
                      ? e.previousSibling
                      : (e.previousSibling.appendData(xa), e.previousSibling);
                  if (mv(e)) return gv(e) ? e : (e.insertData(0, xa), e);
                  var t = vv(e);
                  return e.parentNode.insertBefore(t, e), t;
                })(t)
              : (function(e) {
                  if (mv(e.nextSibling))
                    return gv(e.nextSibling)
                      ? e.nextSibling
                      : (e.nextSibling.insertData(0, xa), e.nextSibling);
                  if (mv(e)) return pv(e) ? e : (e.appendData(xa), e);
                  var t = vv(e);
                  return (
                    e.nextSibling
                      ? e.parentNode.insertBefore(t, e.nextSibling)
                      : e.parentNode.appendChild(t),
                    t
                  );
                })(t);
          },
          yv = a(bv, !0),
          Cv = a(bv, !1),
          wv = function(e, t) {
            return To.isText(e.container())
              ? bv(t, e.container())
              : bv(t, e.getNode());
          },
          xv = function(e, t) {
            var n = t.get();
            return n && e.container() === n && ka(n);
          },
          zv = function(e, t) {
            return t.fold(
              function(t) {
                ls.remove(e.get());
                var n = yv(t);
                return e.set(n), A.some(_u(n, n.length - 1));
              },
              function(t) {
                return sc.firstPositionIn(t).map(function(t) {
                  if (xv(t, e)) return _u(e.get(), 1);
                  ls.remove(e.get());
                  var n = wv(t, !0);
                  return e.set(n), _u(n, 1);
                });
              },
              function(t) {
                return sc.lastPositionIn(t).map(function(t) {
                  if (xv(t, e)) return _u(e.get(), e.get().length - 1);
                  ls.remove(e.get());
                  var n = wv(t, !1);
                  return e.set(n), _u(n, n.length - 1);
                });
              },
              function(t) {
                ls.remove(e.get());
                var n = Cv(t);
                return e.set(n), A.some(_u(n, 1));
              }
            );
          },
          Sv = /[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,
          Nv = function(e, t) {
            if (!t) return t;
            var n = t.container(),
              r = t.offset();
            return e
              ? ka(n)
                ? To.isText(n.nextSibling)
                  ? _u(n.nextSibling, 0)
                  : _u.after(n)
                : _a(t)
                ? _u(n, r + 1)
                : t
              : ka(n)
              ? To.isText(n.previousSibling)
                ? _u(n.previousSibling, n.previousSibling.data.length)
                : _u.before(n)
              : Ra(t)
              ? _u(n, r - 1)
              : t;
          },
          Ev = {
            isInlineTarget: function(e, t) {
              var n = Ff(e, "inline_boundaries_selector").getOr("a[href],code");
              return Ur(fr.fromDom(t), n);
            },
            findRootInline: function(e, t, n) {
              var r = (function(e, t, n) {
                return W(Si.DOM.getParents(n.container(), "*", t), e);
              })(e, t, n);
              return A.from(r[r.length - 1]);
            },
            isRtl: function(e) {
              return (
                "rtl" === Si.DOM.getStyle(e, "direction", !0) ||
                ((t = e.textContent), Sv.test(t))
              );
              var t;
            },
            isAtZwsp: function(e) {
              return _a(e) || Ra(e);
            },
            normalizePosition: Nv,
            normalizeForwards: a(Nv, !0),
            normalizeBackwards: a(Nv, !1),
            hasSameParentBlock: function(e, t, n) {
              var r = ks(t, e),
                o = ks(n, e);
              return r && r === o;
            }
          },
          kv = function(e, t) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n].apply(null, t);
              if (r.isSome()) return r;
            }
            return A.none();
          },
          Tv = Ul([
            { before: ["element"] },
            { start: ["element"] },
            { end: ["element"] },
            { after: ["element"] }
          ]),
          Av = function(e, t) {
            var n = ks(t, e);
            return n || e;
          },
          Mv = function(e, t, n) {
            var r = Ev.normalizeForwards(n),
              o = Av(t, r.container());
            return Ev.findRootInline(e, o, r).fold(function() {
              return sc
                .nextPosition(o, r)
                .bind(a(Ev.findRootInline, e, o))
                .map(function(e) {
                  return Tv.before(e);
                });
            }, A.none);
          },
          _v = function(e, t) {
            return null === es(e, t);
          },
          Rv = function(e, t, n) {
            return Ev.findRootInline(e, t, n).filter(a(_v, t));
          },
          Bv = function(e, t, n) {
            var r = Ev.normalizeBackwards(n);
            return Rv(e, t, r).bind(function(e) {
              return sc.prevPosition(e, r).isNone()
                ? A.some(Tv.start(e))
                : A.none();
            });
          },
          Ov = function(e, t, n) {
            var r = Ev.normalizeForwards(n);
            return Rv(e, t, r).bind(function(e) {
              return sc.nextPosition(e, r).isNone()
                ? A.some(Tv.end(e))
                : A.none();
            });
          },
          Dv = function(e, t, n) {
            var r = Ev.normalizeBackwards(n),
              o = Av(t, r.container());
            return Ev.findRootInline(e, o, r).fold(function() {
              return sc
                .prevPosition(o, r)
                .bind(a(Ev.findRootInline, e, o))
                .map(function(e) {
                  return Tv.after(e);
                });
            }, A.none);
          },
          Hv = function(e) {
            return !1 === Ev.isRtl(Lv(e));
          },
          Pv = function(e, t, n) {
            return kv([Mv, Bv, Ov, Dv], [e, t, n]).filter(Hv);
          },
          Lv = function(e) {
            return e.fold(i, i, i, i);
          },
          Vv = function(e) {
            return e.fold(o("before"), o("start"), o("end"), o("after"));
          },
          Iv = function(e) {
            return e.fold(Tv.before, Tv.before, Tv.after, Tv.after);
          },
          Fv = function(e, t, n, r, o, i) {
            return uu(
              [Ev.findRootInline(t, n, r), Ev.findRootInline(t, n, o)],
              function(t, r) {
                return t !== r && Ev.hasSameParentBlock(n, t, r)
                  ? Tv.after(e ? t : r)
                  : i;
              }
            ).getOr(i);
          },
          Uv = function(e, t) {
            return e.fold(o(!0), function(e) {
              return (r = t), !(Vv((n = e)) === Vv(r) && Lv(n) === Lv(r));
              var n, r;
            });
          },
          jv = function(e, t) {
            return e
              ? t.fold(r(A.some, Tv.start), A.none, r(A.some, Tv.after), A.none)
              : t.fold(A.none, r(A.some, Tv.before), A.none, r(A.some, Tv.end));
          },
          qv = function(e, t, n, r) {
            var o = Ev.normalizePosition(e, r),
              i = Pv(t, n, o);
            return Pv(t, n, o)
              .bind(a(jv, e))
              .orThunk(function() {
                return (function(e, t, n, r, o) {
                  var i = Ev.normalizePosition(e, o);
                  return sc
                    .fromPosition(e, n, i)
                    .map(a(Ev.normalizePosition, e))
                    .fold(
                      function() {
                        return r.map(Iv);
                      },
                      function(o) {
                        return Pv(t, n, o)
                          .map(a(Fv, e, t, n, i, o))
                          .filter(a(Uv, r));
                      }
                    )
                    .filter(Hv);
                })(e, t, n, i, r);
              });
          },
          $v = Pv,
          Wv = qv,
          Kv = (a(qv, !1), a(qv, !0), Iv),
          Xv = function(e) {
            return e.fold(Tv.start, Tv.start, Tv.end, Tv.end);
          },
          Yv = function(e) {
            return H(e.selection.getSel().modify);
          },
          Gv = function(e, t, n) {
            var r = e ? 1 : -1;
            return (
              t.setRng(_u(n.container(), n.offset() + r).toRange()),
              t.getSel().modify("move", e ? "forward" : "backward", "word"),
              !0
            );
          },
          Jv = function(e, t) {
            var n = t.selection.getRng(),
              r = e ? _u.fromRangeEnd(n) : _u.fromRangeStart(n);
            return (
              !!Yv(t) &&
              (e && _a(r)
                ? Gv(!0, t.selection, r)
                : !(e || !Ra(r)) && Gv(!1, t.selection, r))
            );
          },
          Qv = function(e, t) {
            var n = e.dom.createRng();
            n.setStart(t.container(), t.offset()),
              n.setEnd(t.container(), t.offset()),
              e.selection.setRng(n);
          },
          Zv = function(e) {
            return !1 !== e.settings.inline_boundaries;
          },
          eb = function(e, t) {
            e
              ? t.setAttribute("data-mce-selected", "inline-boundary")
              : t.removeAttribute("data-mce-selected");
          },
          tb = function(e, t, n) {
            return zv(t, n).map(function(t) {
              return Qv(e, t), n;
            });
          },
          nb = function(e, t, n) {
            return function() {
              return !!Zv(t) && Jv(e, t);
            };
          },
          rb = {
            move: function(e, t, n) {
              return function() {
                return (
                  !!Zv(e) &&
                  (function(e, t, n) {
                    var r = e.getBody(),
                      o = _u.fromRangeStart(e.selection.getRng()),
                      i = a(Ev.isInlineTarget, e);
                    return Wv(n, i, r, o).bind(function(n) {
                      return tb(e, t, n);
                    });
                  })(e, t, n).isSome()
                );
              };
            },
            moveNextWord: a(nb, !0),
            movePrevWord: a(nb, !1),
            setupSelectedState: function(e) {
              var t = _i(null),
                n = a(Ev.isInlineTarget, e);
              return (
                e.on("NodeChange", function(r) {
                  Zv(e) &&
                    ((function(e, t, n) {
                      var r = W(
                          t.select('*[data-mce-selected="inline-boundary"]'),
                          e
                        ),
                        o = W(n, e);
                      j(oe(r, o), a(eb, !1)), j(oe(o, r), a(eb, !0));
                    })(n, e.dom, r.parents),
                    (function(e, t) {
                      if (
                        e.selection.isCollapsed() &&
                        !0 !== e.composing &&
                        t.get()
                      ) {
                        var n = _u.fromRangeStart(e.selection.getRng());
                        _u.isTextPosition(n) &&
                          !1 === Ev.isAtZwsp(n) &&
                          (Qv(e, ls.removeAndReposition(t.get(), n)),
                          t.set(null));
                      }
                    })(e, t),
                    (function(e, t, n, r) {
                      if (t.selection.isCollapsed()) {
                        var o = W(r, e);
                        j(o, function(r) {
                          var o = _u.fromRangeStart(t.selection.getRng());
                          $v(e, t.getBody(), o).bind(function(e) {
                            return tb(t, n, e);
                          });
                        });
                      }
                    })(n, e, t, r.parents));
                }),
                t
              );
            },
            setCaretPosition: Qv
          };
        !(function(e) {
          (e[(e.Br = 0)] = "Br"),
            (e[(e.Block = 1)] = "Block"),
            (e[(e.Wrap = 2)] = "Wrap"),
            (e[(e.Eol = 3)] = "Eol");
        })(lp || (lp = {}));
        var ob,
          ib,
          ab,
          ub = function(e, t) {
            return e === Mu.Backwards ? t.reverse() : t;
          },
          sb = function(e, t, n) {
            return e === Mu.Forwards ? t.next(n) : t.prev(n);
          },
          cb = function(e, t, n, r) {
            return To.isBr(r.getNode(t === Mu.Forwards))
              ? lp.Br
              : !1 === Ts(n, r)
              ? lp.Block
              : lp.Wrap;
          },
          lb = function(e, t, n, r) {
            for (var o, i = Js(n), a = r, u = []; a && (o = sb(t, i, a)); ) {
              if (To.isBr(o.getNode(!1)))
                return t === Mu.Forwards
                  ? {
                      positions: ub(t, u).concat([o]),
                      breakType: lp.Br,
                      breakAt: A.some(o)
                    }
                  : {
                      positions: ub(t, u),
                      breakType: lp.Br,
                      breakAt: A.some(o)
                    };
              if (o.isVisible()) {
                if (e(a, o)) {
                  var s = cb(0, t, a, o);
                  return {
                    positions: ub(t, u),
                    breakType: s,
                    breakAt: A.some(o)
                  };
                }
                u.push(o), (a = o);
              } else a = o;
            }
            return {
              positions: ub(t, u),
              breakType: lp.Eol,
              breakAt: A.none()
            };
          },
          fb = function(e, t, n, r) {
            return t(n, r)
              .breakAt.map(function(r) {
                var o = t(n, r).positions;
                return e === Mu.Backwards ? o.concat(r) : [r].concat(o);
              })
              .getOr([]);
          },
          db = function(e, t) {
            return X(
              e,
              function(e, n) {
                return e.fold(
                  function() {
                    return A.some(n);
                  },
                  function(r) {
                    return uu(
                      [ue(r.getClientRects()), ue(n.getClientRects())],
                      function(e, o) {
                        var i = Math.abs(t - e.left);
                        return Math.abs(t - o.left) <= i ? n : r;
                      }
                    ).or(e);
                  }
                );
              },
              A.none()
            );
          },
          hb = function(e, t) {
            return ue(t.getClientRects()).bind(function(t) {
              return db(e, t.left);
            });
          },
          mb = a(lb, Au.isAbove, -1),
          gb = a(lb, Au.isBelow, 1),
          pb = a(fb, -1, mb),
          vb = a(fb, 1, gb),
          bb = To.isContentEditableFalse,
          yb = ru,
          Cb = function(e, t, n, r) {
            var o, i, a, u, s, c, l, f, d;
            if (
              ((d = yb(r)),
              (o = Ps(e, t.getBody(), r)),
              (i = n(t.getBody(), nh(1), o)),
              (a = W(i, rh(1))),
              (s = en.last(o.getClientRects())),
              (Dh(o) || Bh(o)) && (d = o.getNode()),
              (Hh(o) || Oh(o)) && (d = o.getNode(!0)),
              !s)
            )
              return null;
            if (((c = s.left), (u = ch(a, c)) && bb(u.node)))
              return (
                (l = Math.abs(c - u.left)),
                (f = Math.abs(c - u.right)),
                gh(e, t, u.node, l < f, !0)
              );
            if (d) {
              var h = (function(e, t, n, r) {
                var o,
                  i,
                  a,
                  u,
                  s,
                  c,
                  l = Js(t),
                  f = [],
                  d = 0,
                  h = function(e) {
                    return en.last(e.getClientRects());
                  };
                1 === e
                  ? ((o = l.next), (i = eu), (a = Za), (u = _u.after(r)))
                  : ((o = l.prev), (i = Za), (a = eu), (u = _u.before(r))),
                  (c = h(u));
                do {
                  if (u.isVisible() && !a((s = h(u)), c)) {
                    if (
                      (f.length > 0 && i(s, en.last(f)) && d++,
                      ((s = Ga(s)).position = u),
                      (s.line = d),
                      n(s))
                    )
                      return f;
                    f.push(s);
                  }
                } while ((u = o(u)));
                return f;
              })(e, t.getBody(), nh(1), d);
              if ((u = ch(W(h, rh(1)), c)))
                return bh(t, u.position.toRange(), !0);
              if ((u = en.last(W(h, rh(0)))))
                return bh(t, u.position.toRange(), !0);
            }
          },
          wb = function(e, t, n) {
            var r,
              o,
              i = Js(e.getBody()),
              u = a(Vs, i.next),
              s = a(Vs, i.prev);
            if (n.collapsed && e.settings.forced_root_block) {
              if (!(r = e.dom.getParent(n.startContainer, "PRE"))) return;
              (1 === t ? u(_u.fromRangeStart(n)) : s(_u.fromRangeStart(n))) ||
                ((o = (function(e) {
                  var t = e.dom.create(cl(e));
                  return (
                    (!Le.ie || Le.ie >= 11) &&
                      (t.innerHTML = '<br data-mce-bogus="1">'),
                    t
                  );
                })(e)),
                1 === t ? e.$(r).after(o) : e.$(r).before(o),
                e.selection.select(o, !0),
                e.selection.collapse());
            }
          },
          xb = function(e, t) {
            var n,
              r = Js(e.getBody()),
              o = a(Vs, r.next),
              i = a(Vs, r.prev),
              u = t ? Mu.Forwards : Mu.Backwards,
              s = t ? o : i,
              c = e.selection.getRng();
            return (n = (function(e, t, n, r) {
              var o = e === Mu.Forwards,
                i = o ? Dh : Hh;
              if (!r.collapsed) {
                var a = yb(r);
                if (bb(a)) return gh(e, t, a, e === Mu.Backwards, !0);
              }
              var u = Pa(r),
                s = Ps(e, t.getBody(), r);
              if (i(s)) return ph(t, s.getNode(!o));
              var c = Ev.normalizePosition(o, n(s));
              if (!c) return u ? r : null;
              if (i(c)) return gh(e, t, c.getNode(!o), o, !0);
              var l = n(c);
              return l && i(l) && Is(c, l)
                ? gh(e, t, l.getNode(!o), o, !0)
                : u
                ? bh(t, c.toRange(), !0)
                : null;
            })(u, e, s, c))
              ? n
              : (n = wb(e, u, c)) || null;
          },
          zb = function(e, t) {
            return function() {
              var n = xb(e, t);
              return !!n && (e.selection.setRng(n), !0);
            };
          },
          Sb = function(e, t) {
            return function() {
              var n = (function(e, t) {
                var n,
                  r = t ? 1 : -1,
                  o = t ? th : eh,
                  i = e.selection.getRng();
                return (n = Cb(r, e, o, i)) ? n : (n = wb(e, r, i)) || null;
              })(e, t);
              return !!n && (e.selection.setRng(n), !0);
            };
          },
          Nb = function(e, t) {
            return function() {
              var n = t
                  ? _u.fromRangeEnd(e.selection.getRng())
                  : _u.fromRangeStart(e.selection.getRng()),
                r = t ? gb(e.getBody(), n) : mb(e.getBody(), n);
              return (t ? se(r.positions) : ue(r.positions))
                .filter(
                  (function(e) {
                    return function(t) {
                      return e ? Hh(t) : Dh(t);
                    };
                  })(t)
                )
                .fold(o(!1), function(t) {
                  return e.selection.setRng(t.toRange()), !0;
                });
            };
          },
          Eb = function(e, t, n, r, o) {
            var i = na(fr.fromDom(n), "td,th,caption").map(function(e) {
              return e.dom();
            });
            return (function(e, t, n) {
              return X(
                e,
                function(e, r) {
                  return e.fold(
                    function() {
                      return A.some(r);
                    },
                    function(e) {
                      var o = Math.sqrt(Math.abs(e.x - t) + Math.abs(e.y - n)),
                        i = Math.sqrt(Math.abs(r.x - t) + Math.abs(r.y - n));
                      return A.some(i < o ? r : e);
                    }
                  );
                },
                A.none()
              );
            })(
              W(
                (function(e, t) {
                  return ee(t, function(t) {
                    var n = (function(e, t) {
                      return {
                        left: e.left - t,
                        top: e.top - t,
                        right: e.right + 2 * t,
                        bottom: e.bottom + 2 * t,
                        width: e.width + t,
                        height: e.height + t
                      };
                    })(Ga(t.getBoundingClientRect()), -1);
                    return [
                      { x: n.left, y: e(n), cell: t },
                      { x: n.right, y: e(n), cell: t }
                    ];
                  });
                })(e, i),
                function(e) {
                  return t(e, o);
                }
              ),
              r,
              o
            ).map(function(e) {
              return e.cell;
            });
          },
          kb = a(
            Eb,
            function(e) {
              return e.bottom;
            },
            function(e, t) {
              return e.y < t;
            }
          ),
          Tb = a(
            Eb,
            function(e) {
              return e.top;
            },
            function(e, t) {
              return e.y > t;
            }
          ),
          Ab = function(e, t) {
            return ue(t.getClientRects())
              .bind(function(t) {
                return kb(e, t.left, t.top);
              })
              .bind(function(e) {
                return hb(
                  ((n = e),
                  sc
                    .lastPositionIn(n)
                    .map(function(e) {
                      return mb(n, e).positions.concat(e);
                    })
                    .getOr([])),
                  t
                );
                var n;
              });
          },
          Mb = function(e, t) {
            return se(t.getClientRects())
              .bind(function(t) {
                return Tb(e, t.left, t.top);
              })
              .bind(function(e) {
                return hb(
                  ((n = e),
                  sc
                    .firstPositionIn(n)
                    .map(function(e) {
                      return [e].concat(gb(n, e).positions);
                    })
                    .getOr([])),
                  t
                );
                var n;
              });
          },
          _b = function(e, t) {
            e.selection.setRng(t), vp(e, t);
          },
          Rb = function(e, t, n) {
            var r = e(t, n);
            return (function(e) {
              return e.breakType === lp.Wrap && 0 === e.positions.length;
            })(r) ||
              (!To.isBr(n.getNode()) &&
                (function(e) {
                  return e.breakType === lp.Br && 1 === e.positions.length;
                })(r))
              ? !(function(e, t, n) {
                  return n.breakAt
                    .map(function(n) {
                      return e(t, n).breakAt.isSome();
                    })
                    .getOr(!1);
                })(e, t, r)
              : r.breakAt.isNone();
          },
          Bb = a(Rb, mb),
          Ob = a(Rb, gb),
          Db = function(e, t, n, r) {
            var o = e.selection.getRng(),
              i = t ? 1 : -1;
            if (
              gs() &&
              (function(e, t, n) {
                var r = _u.fromRangeStart(t);
                return sc
                  .positionIn(!e, n)
                  .map(function(e) {
                    return e.isEqual(r);
                  })
                  .getOr(!1);
              })(t, o, n)
            ) {
              var a = gh(i, e, n, !t, !0);
              return _b(e, a), !0;
            }
            return !1;
          },
          Hb = function(e, t) {
            var n = t.getNode(e);
            return To.isElement(n) && "TABLE" === n.nodeName
              ? A.some(n)
              : A.none();
          },
          Pb = function(e, t, n) {
            var r = Hb(!!t, n),
              o = !1 === t;
            r.fold(
              function() {
                return _b(e, n.toRange());
              },
              function(r) {
                return sc
                  .positionIn(o, e.getBody())
                  .filter(function(e) {
                    return e.isEqual(n);
                  })
                  .fold(
                    function() {
                      return _b(e, n.toRange());
                    },
                    function(o) {
                      return (function(e, t, n, r) {
                        var o = cl(t);
                        o
                          ? t.undoManager.transact(function() {
                              var r = fr.fromTag(o);
                              Ar(r, ll(t)),
                                Fi(r, fr.fromTag("br")),
                                e ? Vi(fr.fromDom(n), r) : Li(fr.fromDom(n), r);
                              var i = t.dom.createRng();
                              i.setStart(r.dom(), 0),
                                i.setEnd(r.dom(), 0),
                                _b(t, i);
                            })
                          : _b(t, r.toRange());
                      })(t, e, r, n);
                    }
                  );
              }
            );
          },
          Lb = function(e, t, n, r) {
            var o = e.selection.getRng(),
              i = _u.fromRangeStart(o),
              a = e.getBody();
            if (!t && Bb(r, i)) {
              var u = (function(e, t, n) {
                return Ab(t, n)
                  .orThunk(function() {
                    return ue(n.getClientRects()).bind(function(n) {
                      return db(pb(e, _u.before(t)), n.left);
                    });
                  })
                  .getOr(_u.before(t));
              })(a, n, i);
              return Pb(e, t, u), !0;
            }
            return (
              !(!t || !Ob(r, i)) &&
              ((u = (function(e, t, n) {
                return Mb(t, n)
                  .orThunk(function() {
                    return ue(n.getClientRects()).bind(function(n) {
                      return db(vb(e, _u.after(t)), n.left);
                    });
                  })
                  .getOr(_u.after(t));
              })(a, n, i)),
              Pb(e, t, u),
              !0)
            );
          },
          Vb = function(e, t) {
            return function() {
              return A.from(e.dom.getParent(e.selection.getNode(), "td,th"))
                .bind(function(n) {
                  return A.from(e.dom.getParent(n, "table")).map(function(n) {
                    return Db(e, t, n);
                  });
                })
                .getOr(!1);
            };
          },
          Ib = function(e, t) {
            return function() {
              return A.from(e.dom.getParent(e.selection.getNode(), "td,th"))
                .bind(function(n) {
                  return A.from(e.dom.getParent(n, "table")).map(function(r) {
                    return Lb(e, t, r, n);
                  });
                })
                .getOr(!1);
            };
          },
          Fb = function(e) {
            return I(["figcaption"], gr(e));
          },
          Ub = function(e) {
            var n = t.document.createRange();
            return n.setStartBefore(e.dom()), n.setEndBefore(e.dom()), n;
          },
          jb = function(e, t, n) {
            n ? Fi(e, t) : Ii(e, t);
          },
          qb = function(e, t, n, r) {
            return "" === t
              ? (function(e, t) {
                  var n = fr.fromTag("br");
                  return jb(e, n, t), Ub(n);
                })(e, r)
              : (function(e, t, n, r) {
                  var o = fr.fromTag(n),
                    i = fr.fromTag("br");
                  return Ar(o, r), Fi(o, i), jb(e, o, t), Ub(i);
                })(e, r, t, n);
          },
          $b = function(e, t, n) {
            return t
              ? (function(e, t) {
                  return gb(e, t).breakAt.isNone();
                })(e.dom(), n)
              : (function(e, t) {
                  return mb(e, t).breakAt.isNone();
                })(e.dom(), n);
          },
          Wb = function(e, t) {
            var n = fr.fromDom(e.getBody()),
              r = _u.fromRangeStart(e.selection.getRng()),
              o = cl(e),
              i = ll(e);
            return (function(e, t) {
              var n = a($r, t);
              return ia(fr.fromDom(e.container()), Ro, n).filter(Fb);
            })(r, n).exists(function() {
              if ($b(n, t, r)) {
                var a = qb(n, o, i, t);
                return e.selection.setRng(a), !0;
              }
              return !1;
            });
          },
          Kb = function(e, t) {
            return function() {
              return !!e.selection.isCollapsed() && Wb(e, t);
            };
          },
          Xb = function(e, t) {
            return ee(
              (function(e) {
                return U(e, function(e) {
                  return qg(
                    {
                      shiftKey: !1,
                      altKey: !1,
                      ctrlKey: !1,
                      metaKey: !1,
                      keyCode: 0,
                      action: n
                    },
                    e
                  );
                });
              })(e),
              function(e) {
                return (function(e, t) {
                  return (
                    t.keyCode === e.keyCode &&
                    t.shiftKey === e.shiftKey &&
                    t.altKey === e.altKey &&
                    t.ctrlKey === e.ctrlKey &&
                    t.metaKey === e.metaKey
                  );
                })(e, t)
                  ? [e]
                  : [];
              }
            );
          },
          Yb = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
              t[n - 1] = arguments[n];
            var r = Array.prototype.slice.call(arguments, 1);
            return function() {
              return e.apply(null, r);
            };
          },
          Gb = function(e, t) {
            return Y(Xb(e, t), function(e) {
              return e.action();
            });
          },
          Jb = function(e, t) {
            e.on("keydown", function(n) {
              !1 === n.isDefaultPrevented() &&
                (function(e, t, n) {
                  var r = cr.detect().os;
                  Gb(
                    [
                      { keyCode: Ch.RIGHT, action: zb(e, !0) },
                      { keyCode: Ch.LEFT, action: zb(e, !1) },
                      { keyCode: Ch.UP, action: Sb(e, !1) },
                      { keyCode: Ch.DOWN, action: Sb(e, !0) },
                      { keyCode: Ch.RIGHT, action: Vb(e, !0) },
                      { keyCode: Ch.LEFT, action: Vb(e, !1) },
                      { keyCode: Ch.UP, action: Ib(e, !1) },
                      { keyCode: Ch.DOWN, action: Ib(e, !0) },
                      { keyCode: Ch.RIGHT, action: rb.move(e, t, !0) },
                      { keyCode: Ch.LEFT, action: rb.move(e, t, !1) },
                      {
                        keyCode: Ch.RIGHT,
                        ctrlKey: !r.isOSX(),
                        altKey: r.isOSX(),
                        action: rb.moveNextWord(e, t)
                      },
                      {
                        keyCode: Ch.LEFT,
                        ctrlKey: !r.isOSX(),
                        altKey: r.isOSX(),
                        action: rb.movePrevWord(e, t)
                      },
                      { keyCode: Ch.UP, action: Kb(e, !1) },
                      { keyCode: Ch.DOWN, action: Kb(e, !0) }
                    ],
                    n
                  ).each(function(e) {
                    n.preventDefault();
                  });
                })(e, t, n);
            });
          },
          Qb = function(e, t) {
            return Wr(e, t)
              ? ia(
                  t,
                  function(e) {
                    return Do(e) || Po(e);
                  },
                  (function(e) {
                    return function(t) {
                      return $r(e, fr.fromDom(t.dom().parentNode));
                    };
                  })(e)
                )
              : A.none();
          },
          Zb = function(e) {
            e.dom.isEmpty(e.getBody()) &&
              (e.setContent(""),
              (function(e) {
                var t = e.getBody(),
                  n =
                    t.firstChild && e.dom.isBlock(t.firstChild)
                      ? t.firstChild
                      : t;
                e.selection.setCursorLocation(n, 0);
              })(e));
          },
          ey = function(e, t, n) {
            return uu([sc.firstPositionIn(n), sc.lastPositionIn(n)], function(
              r,
              o
            ) {
              var i = Ev.normalizePosition(!0, r),
                a = Ev.normalizePosition(!1, o),
                u = Ev.normalizePosition(!1, t);
              return e
                ? sc
                    .nextPosition(n, u)
                    .map(function(e) {
                      return e.isEqual(a) && t.isEqual(i);
                    })
                    .getOr(!1)
                : sc
                    .prevPosition(n, u)
                    .map(function(e) {
                      return e.isEqual(i) && t.isEqual(a);
                    })
                    .getOr(!1);
            }).getOr(!0);
          },
          ty = Dr("block", "position"),
          ny = Dr("from", "to"),
          ry = function(e, t) {
            var n = fr.fromDom(e),
              r = fr.fromDom(t.container());
            return Qb(n, r).map(function(e) {
              return ty(e, t);
            });
          },
          oy = function(e, t, n) {
            var r = ry(e, _u.fromRangeStart(n)),
              o = r.bind(function(n) {
                return sc.fromPosition(t, e, n.position()).bind(function(n) {
                  return ry(e, n).map(function(n) {
                    return (function(e, t, n) {
                      return To.isBr(n.position().getNode()) &&
                        !1 === zm(n.block())
                        ? sc
                            .positionIn(!1, n.block().dom())
                            .bind(function(r) {
                              return r.isEqual(n.position())
                                ? sc.fromPosition(t, e, r).bind(function(t) {
                                    return ry(e, t);
                                  })
                                : A.some(n);
                            })
                            .getOr(n)
                        : n;
                    })(e, t, n);
                  });
                });
              });
            return uu([r, o], ny).filter(function(e) {
              return (
                (function(e) {
                  return !1 === $r(e.from().block(), e.to().block());
                })(e) &&
                (function(e) {
                  return Xr(e.from().block())
                    .bind(function(t) {
                      return Xr(e.to().block()).filter(function(e) {
                        return $r(t, e);
                      });
                    })
                    .isSome();
                })(e) &&
                (function(e) {
                  return (
                    !1 === To.isContentEditableFalse(e.from().block()) &&
                    !1 === To.isContentEditableFalse(e.to().block())
                  );
                })(e)
              );
            });
          },
          iy = function(e, t, n) {
            return n.collapsed ? oy(e, t, n) : A.none();
          },
          ay = function(e) {
            var t = eo(e);
            return G(t, Ro).fold(
              function() {
                return t;
              },
              function(e) {
                return t.slice(0, e);
              }
            );
          },
          uy = function(e) {
            var t = ay(e);
            return j(t, qi), t;
          },
          sy = function(e, t) {
            var n = kd(t, e);
            return Y(n.reverse(), zm).each(qi);
          },
          cy = function(e, t, n, r) {
            if (zm(n)) return im(n), sc.firstPositionIn(n.dom());
            0 ===
              W(Qr(r), function(e) {
                return !zm(e);
              }).length &&
              zm(t) &&
              Li(r, fr.fromTag("br"));
            var o = sc.prevPosition(n.dom(), _u.before(r.dom()));
            return (
              j(uy(t), function(e) {
                Li(r, e);
              }),
              sy(e, t),
              o
            );
          },
          ly = function(e, t, n) {
            if (zm(n))
              return qi(n), zm(t) && im(t), sc.firstPositionIn(t.dom());
            var r = sc.lastPositionIn(n.dom());
            return (
              j(uy(t), function(e) {
                Fi(n, e);
              }),
              sy(e, t),
              r
            );
          },
          fy = function(e, t) {
            return Wr(t, e)
              ? (function(e, t) {
                  var n = kd(t, e);
                  return A.from(n[n.length - 1]);
                })(t, e)
              : A.none();
          },
          dy = function(e, t) {
            sc.positionIn(e, t.dom())
              .map(function(e) {
                return e.getNode();
              })
              .map(fr.fromDom)
              .filter(Oo)
              .each(qi);
          },
          hy = function(e, t, n) {
            return (
              dy(!0, t),
              dy(!1, n),
              fy(t, n).fold(a(ly, e, t, n), a(cy, e, t, n))
            );
          },
          my = function(e, t, n, r) {
            return t ? hy(e, r, n) : hy(e, n, r);
          },
          gy = function(e, t) {
            var n,
              r = fr.fromDom(e.getBody());
            return (
              (n = iy(r.dom(), t, e.selection.getRng()).bind(function(e) {
                return my(r, t, e.from().block(), e.to().block());
              })).each(function(t) {
                e.selection.setRng(t.toRange());
              }),
              n.isSome()
            );
          },
          py = function(e, t) {
            var n = fr.fromDom(t),
              r = a($r, e);
            return oa(n, Io, r).isSome();
          },
          vy = function(e, t) {
            var n = sc.prevPosition(e.dom(), _u.fromRangeStart(t)).isNone(),
              r = sc.nextPosition(e.dom(), _u.fromRangeEnd(t)).isNone();
            return (
              !(function(e, t) {
                return py(e, t.startContainer) || py(e, t.endContainer);
              })(e, t) &&
              n &&
              r
            );
          },
          by = function(e) {
            var t = fr.fromDom(e.getBody()),
              n = e.selection.getRng();
            return vy(t, n)
              ? (function(e) {
                  return e.setContent(""), e.selection.setCursorLocation(), !0;
                })(e)
              : (function(e, t) {
                  var n = t.getRng();
                  return uu(
                    [
                      Qb(e, fr.fromDom(n.startContainer)),
                      Qb(e, fr.fromDom(n.endContainer))
                    ],
                    function(r, o) {
                      return (
                        !1 === $r(r, o) &&
                        (n.deleteContents(),
                        my(e, !0, r, o).each(function(e) {
                          t.setRng(e.toRange());
                        }),
                        !0)
                      );
                    }
                  ).getOr(!1);
                })(t, e.selection);
          },
          yy = function(e, t) {
            return !e.selection.isCollapsed() && by(e);
          },
          Cy = function(e) {
            return Ls(e).exists(Oo);
          },
          wy = function(e, t, n) {
            var r = W(kd(fr.fromDom(n.container()), t), Ro),
              o = ue(r).getOr(t);
            return sc.fromPosition(e, o.dom(), n).filter(Cy);
          },
          xy = function(e, t) {
            return Ls(t).exists(Oo) || wy(!0, e, t).isSome();
          },
          zy = function(e, t) {
            return (
              (function(e) {
                return A.from(e.getNode(!0)).map(fr.fromDom);
              })(t).exists(Oo) || wy(!1, e, t).isSome()
            );
          },
          Sy = a(wy, !1),
          Ny = a(wy, !0),
          Ey = Ul([
            { remove: ["element"] },
            { moveToElement: ["element"] },
            { moveToPosition: ["position"] }
          ]),
          ky = function(e, t, n, r) {
            var o = r.getNode(!1 === t);
            return Qb(fr.fromDom(e), fr.fromDom(n.getNode()))
              .map(function(e) {
                return zm(e) ? Ey.remove(e.dom()) : Ey.moveToElement(o);
              })
              .orThunk(function() {
                return A.some(Ey.moveToElement(o));
              });
          },
          Ty = function(e, t, n) {
            return sc.fromPosition(t, e, n).bind(function(r) {
              return (
                (i = r.getNode()),
                Io(fr.fromDom(i)) || Po(fr.fromDom(i))
                  ? A.none()
                  : (function(e, t, n, r) {
                      var i = function(t) {
                        return Bo(fr.fromDom(t)) && !Ts(n, r, e);
                      };
                      return Hs(!t, n).fold(function() {
                        return Hs(t, r).fold(o(!1), i);
                      }, i);
                    })(e, t, n, r)
                  ? A.none()
                  : t && To.isContentEditableFalse(r.getNode())
                  ? ky(e, t, n, r)
                  : !1 === t && To.isContentEditableFalse(r.getNode(!0))
                  ? ky(e, t, n, r)
                  : t && Hh(n)
                  ? A.some(Ey.moveToPosition(r))
                  : !1 === t && Dh(n)
                  ? A.some(Ey.moveToPosition(r))
                  : A.none()
              );
              var i;
            });
          },
          Ay = function(e, t, n) {
            return (function(e, t) {
              var n = t.getNode(!1 === e),
                r = e ? "after" : "before";
              return To.isElement(n) && n.getAttribute("data-mce-caret") === r;
            })(t, n)
              ? (function(e, t) {
                  return e && To.isContentEditableFalse(t.nextSibling)
                    ? A.some(Ey.moveToElement(t.nextSibling))
                    : !1 === e && To.isContentEditableFalse(t.previousSibling)
                    ? A.some(Ey.moveToElement(t.previousSibling))
                    : A.none();
                })(t, n.getNode(!1 === t)).fold(function() {
                  return Ty(e, t, n);
                }, A.some)
              : Ty(e, t, n).bind(function(t) {
                  return (function(e, t, n) {
                    return n.fold(
                      function(e) {
                        return A.some(Ey.remove(e));
                      },
                      function(e) {
                        return A.some(Ey.moveToElement(e));
                      },
                      function(n) {
                        return Ts(t, n, e)
                          ? A.none()
                          : A.some(Ey.moveToPosition(n));
                      }
                    );
                  })(e, n, t);
                });
          },
          My = function(e, t) {
            return (function(e, t, n) {
              var r = Ds(t ? 1 : -1, e, n),
                o = _u.fromRangeStart(r),
                i = fr.fromDom(e);
              return !1 === t && Hh(o)
                ? A.some(Ey.remove(o.getNode(!0)))
                : t && Dh(o)
                ? A.some(Ey.remove(o.getNode()))
                : !1 === t && Dh(o) && zy(i, o)
                ? Sy(i, o).map(function(e) {
                    return Ey.remove(e.getNode());
                  })
                : t && Hh(o) && xy(i, o)
                ? Ny(i, o).map(function(e) {
                    return Ey.remove(e.getNode());
                  })
                : Ay(e, t, o);
            })(e.getBody(), t, e.selection.getRng())
              .map(function(n) {
                return n.fold(
                  (function(e, t) {
                    return function(n) {
                      return (
                        e._selectionOverrides.hideFakeCaret(),
                        Om(e, t, fr.fromDom(n)),
                        !0
                      );
                    };
                  })(e, t),
                  (function(e, t) {
                    return function(n) {
                      var r = t ? _u.before(n) : _u.after(n);
                      return e.selection.setRng(r.toRange()), !0;
                    };
                  })(e, t),
                  (function(e) {
                    return function(t) {
                      return e.selection.setRng(t.toRange()), !0;
                    };
                  })(e)
                );
              })
              .getOr(!1);
          },
          _y = function(e, t) {
            var n,
              r = e.selection.getNode();
            return (
              !!To.isContentEditableFalse(r) &&
              ((n = fr.fromDom(e.getBody())),
              j(na(n, ".mce-offscreen-selection"), qi),
              Om(e, t, fr.fromDom(e.selection.getNode())),
              Zb(e),
              !0)
            );
          },
          Ry = function(e, t) {
            return e.selection.isCollapsed() ? My(e, t) : _y(e, t);
          },
          By = function(e) {
            var t,
              n = (function(e, t) {
                for (; t && t !== e; ) {
                  if (
                    To.isContentEditableTrue(t) ||
                    To.isContentEditableFalse(t)
                  )
                    return t;
                  t = t.parentNode;
                }
                return null;
              })(e.getBody(), e.selection.getNode());
            return (
              To.isContentEditableTrue(n) &&
                e.dom.isBlock(n) &&
                e.dom.isEmpty(n) &&
                ((t = e.dom.create("br", { "data-mce-bogus": "1" })),
                e.dom.setHTML(n, ""),
                n.appendChild(t),
                e.selection.setRng(_u.before(t).toRange())),
              !0
            );
          },
          Oy = function(e, t, n, r, o, i) {
            var a = gh(r, e, i.getNode(!o), o, !0);
            if (t.collapsed) {
              var u = t.cloneRange();
              o
                ? u.setEnd(a.startContainer, a.startOffset)
                : u.setStart(a.endContainer, a.endOffset),
                u.deleteContents();
            } else t.deleteContents();
            return (
              e.selection.setRng(a),
              (function(e, t) {
                To.isText(t) && 0 === t.data.length && e.remove(t);
              })(e.dom, n),
              !0
            );
          },
          Dy = function(e, t) {
            return (function(e, t) {
              var n = e.selection.getRng();
              if (!To.isText(n.commonAncestorContainer)) return !1;
              var r = t ? Mu.Forwards : Mu.Backwards,
                o = Js(e.getBody()),
                i = a(Vs, o.next),
                u = a(Vs, o.prev),
                s = t ? i : u,
                c = t ? Dh : Hh,
                l = Ps(r, e.getBody(), n),
                f = Ev.normalizePosition(t, s(l));
              if (!f) return !1;
              if (c(f)) return Oy(e, n, l.getNode(), r, t, f);
              var d = s(f);
              return (
                !!(d && c(d) && Is(f, d)) && Oy(e, n, l.getNode(), r, t, d)
              );
            })(e, t);
          },
          Hy = function(e, t) {
            return function(n) {
              return zv(t, n)
                .map(function(t) {
                  return rb.setCaretPosition(e, t), !0;
                })
                .getOr(!1);
            };
          },
          Py = function(e, n, r, o) {
            var i = e.getBody(),
              u = a(Ev.isInlineTarget, e);
            e.undoManager.ignore(function() {
              e.selection.setRng(
                (function(e, n) {
                  var r = t.document.createRange();
                  return (
                    r.setStart(e.container(), e.offset()),
                    r.setEnd(n.container(), n.offset()),
                    r
                  );
                })(r, o)
              ),
                e.execCommand("Delete"),
                $v(u, i, _u.fromRangeStart(e.selection.getRng()))
                  .map(Xv)
                  .map(Hy(e, n));
            }),
              e.nodeChanged();
          },
          Ly = function(e, t, n, r) {
            var i = (function(e, t) {
                var n = ks(t, e);
                return n || e;
              })(e.getBody(), r.container()),
              u = a(Ev.isInlineTarget, e),
              s = $v(u, i, r);
            return s
              .bind(function(e) {
                return n
                  ? e.fold(o(A.some(Xv(e))), A.none, o(A.some(Kv(e))), A.none)
                  : e.fold(A.none, o(A.some(Kv(e))), A.none, o(A.some(Xv(e))));
              })
              .map(Hy(e, t))
              .getOrThunk(function() {
                var o = sc.navigate(n, i, r),
                  a = o.bind(function(e) {
                    return $v(u, i, e);
                  });
                return s.isSome() && a.isSome()
                  ? Ev.findRootInline(u, i, r)
                      .map(function(t) {
                        return (
                          !!(function(e) {
                            return uu(
                              [sc.firstPositionIn(e), sc.lastPositionIn(e)],
                              function(t, n) {
                                var r = Ev.normalizePosition(!0, t),
                                  o = Ev.normalizePosition(!1, n);
                                return sc
                                  .nextPosition(e, r)
                                  .map(function(e) {
                                    return e.isEqual(o);
                                  })
                                  .getOr(!0);
                              }
                            ).getOr(!0);
                          })(t) && (Om(e, n, fr.fromDom(t)), !0)
                        );
                      })
                      .getOr(!1)
                  : a
                      .bind(function(i) {
                        return o.map(function(o) {
                          return n ? Py(e, t, r, o) : Py(e, t, o, r), !0;
                        });
                      })
                      .getOr(!1);
              });
          },
          Vy = function(e, t, n) {
            if (
              e.selection.isCollapsed() &&
              (function(e) {
                return !1 !== e.settings.inline_boundaries;
              })(e)
            ) {
              var r = _u.fromRangeStart(e.selection.getRng());
              return Ly(e, t, n, r);
            }
            return !1;
          },
          Iy = function(e) {
            return 1 === eo(e).length;
          },
          Fy = function(e, t, n, r) {
            var o = a($m, t),
              i = U(W(r, o), function(e) {
                return e.dom();
              });
            if (0 === i.length) Om(t, e, n);
            else {
              var u = (function(e, t) {
                var n = Lm(!1),
                  r = jm(t, n.dom());
                return Li(fr.fromDom(e), n), qi(fr.fromDom(e)), _u(r, 0);
              })(n.dom(), i);
              t.selection.setRng(u.toRange());
            }
          },
          Uy = function(e, t) {
            var n = fr.fromDom(e.getBody()),
              r = fr.fromDom(e.selection.getStart()),
              i = W(
                (function(e, t) {
                  var n = kd(t, e);
                  return G(n, Ro).fold(o(n), function(e) {
                    return n.slice(0, e);
                  });
                })(n, r),
                Iy
              );
            return se(i)
              .map(function(n) {
                var r,
                  o = _u.fromRangeStart(e.selection.getRng());
                return !(
                  !ey(t, o, n.dom()) ||
                  ((r = n), Zu(r.dom()) && Hm(r.dom())) ||
                  (Fy(t, e, n, i), 0)
                );
              })
              .getOr(!1);
          },
          jy = function(e, t) {
            return !!e.selection.isCollapsed() && Uy(e, t);
          },
          qy = Dr("start", "end"),
          $y = Dr("rng", "table", "cells"),
          Wy = Ul([{ removeTable: ["element"] }, { emptyCells: ["cells"] }]),
          Ky = function(e, t) {
            return sa(fr.fromDom(e), "td,th", t);
          },
          Xy = function(e, t) {
            return aa(e, "table", t);
          },
          Yy = function(e) {
            return !1 === $r(e.start(), e.end());
          },
          Gy = function(e, t) {
            return Xy(e.start(), t).bind(function(n) {
              return Xy(e.end(), t).bind(function(e) {
                return $r(n, e) ? A.some(n) : A.none();
              });
            });
          },
          Jy = function(e) {
            return na(e, "td,th");
          },
          Qy = function(e, t) {
            var n = Ky(t.startContainer, e),
              r = Ky(t.endContainer, e);
            return t.collapsed
              ? A.none()
              : uu([n, r], qy).fold(
                  function() {
                    return n.fold(
                      function() {
                        return r.bind(function(t) {
                          return Xy(t, e).bind(function(e) {
                            return ue(Jy(e)).map(function(e) {
                              return qy(e, t);
                            });
                          });
                        });
                      },
                      function(t) {
                        return Xy(t, e).bind(function(e) {
                          return se(Jy(e)).map(function(e) {
                            return qy(t, e);
                          });
                        });
                      }
                    );
                  },
                  function(t) {
                    return Zy(e, t)
                      ? A.none()
                      : (function(e, t) {
                          return Xy(e.start(), t).bind(function(t) {
                            return se(Jy(t)).map(function(t) {
                              return qy(e.start(), t);
                            });
                          });
                        })(t, e);
                  }
                );
          },
          Zy = function(e, t) {
            return Gy(t, e).isSome();
          },
          eC = function(e, t) {
            var n = (function(e) {
              return a($r, e);
            })(e);
            return (function(e, t) {
              var n = Ky(e.startContainer, t),
                r = Ky(e.endContainer, t);
              return uu([n, r], qy)
                .filter(Yy)
                .filter(function(e) {
                  return Zy(t, e);
                })
                .orThunk(function() {
                  return Qy(t, e);
                });
            })(t, n).bind(function(e) {
              return (function(e, t) {
                return Gy(e, t).map(function(t) {
                  return $y(e, t, Jy(t));
                });
              })(e, n);
            });
          },
          tC = function(e, t) {
            return G(e, function(e) {
              return $r(e, t);
            });
          },
          nC = function(e) {
            return (function(e) {
              return uu(
                [tC(e.cells(), e.rng().start()), tC(e.cells(), e.rng().end())],
                function(t, n) {
                  return e.cells().slice(t, n + 1);
                }
              );
            })(e).map(function(t) {
              var n = e.cells();
              return t.length === n.length
                ? Wy.removeTable(e.table())
                : Wy.emptyCells(t);
            });
          },
          rC = function(e, t) {
            return eC(e, t).bind(nC);
          },
          oC = function(e, t) {
            return j(t, im), e.selection.setCursorLocation(t[0].dom(), 0), !0;
          },
          iC = function(e, t) {
            return Om(e, !1, t), !0;
          },
          aC = function(e, t, n, r) {
            return sC(t, r)
              .fold(
                function() {
                  return (function(e, t, n) {
                    return rC(t, n).map(function(t) {
                      return t.fold(a(iC, e), a(oC, e));
                    });
                  })(e, t, n);
                },
                function(t) {
                  return (function(e, t) {
                    return cC(e, t);
                  })(e, t);
                }
              )
              .getOr(!1);
          },
          uC = function(e, t) {
            return Y(kd(t, e), Io);
          },
          sC = function(e, t) {
            return Y(kd(t, e), function(e) {
              return "caption" === gr(e);
            });
          },
          cC = function(e, t) {
            return im(t), e.selection.setCursorLocation(t.dom(), 0), A.some(!0);
          },
          lC = function(e, t, n, r, o) {
            return sc
              .navigate(n, e.getBody(), o)
              .bind(function(i) {
                return (function(e, t, n, r) {
                  return sc
                    .firstPositionIn(e.dom())
                    .bind(function(o) {
                      return sc.lastPositionIn(e.dom()).map(function(e) {
                        return t
                          ? n.isEqual(o) && r.isEqual(e)
                          : n.isEqual(e) && r.isEqual(o);
                      });
                    })
                    .getOr(!0);
                })(r, n, o, i)
                  ? (function(e, t) {
                      return cC(e, t);
                    })(e, r)
                  : (function(e, t, n) {
                      return sC(e, fr.fromDom(n.getNode())).map(function(e) {
                        return !1 === $r(e, t);
                      });
                    })(t, r, i);
              })
              .or(A.some(!0));
          },
          fC = function(e, t, n, r) {
            var o = _u.fromRangeStart(e.selection.getRng());
            return uC(n, r)
              .bind(function(r) {
                return zm(r)
                  ? cC(e, r)
                  : (function(e, t, n, r, o) {
                      return sc.navigate(n, e.getBody(), o).bind(function(e) {
                        return uC(t, fr.fromDom(e.getNode())).map(function(e) {
                          return !1 === $r(e, r);
                        });
                      });
                    })(e, n, t, r, o);
              })
              .getOr(!1);
          },
          dC = function(e, t) {
            return e ? Bh(t) : Oh(t);
          },
          hC = function(e, t, n) {
            var r = fr.fromDom(e.getBody());
            return sC(r, n).fold(
              function() {
                return (
                  fC(e, t, r, n) ||
                  (function(e, t) {
                    var n = _u.fromRangeStart(e.selection.getRng());
                    return (
                      dC(t, n) ||
                      sc
                        .fromPosition(t, e.getBody(), n)
                        .map(function(e) {
                          return dC(t, e);
                        })
                        .getOr(!1)
                    );
                  })(e, t)
                );
              },
              function(n) {
                return (function(e, t, n, r) {
                  var o = _u.fromRangeStart(e.selection.getRng());
                  return zm(r) ? cC(e, r) : lC(e, n, t, r, o);
                })(e, t, r, n).getOr(!1);
              }
            );
          },
          mC = function(e, t) {
            var n = fr.fromDom(e.selection.getStart(!0)),
              r = Fp(e);
            return e.selection.isCollapsed() && 0 === r.length
              ? hC(e, t, n)
              : (function(e, t) {
                  var n = fr.fromDom(e.getBody()),
                    r = e.selection.getRng(),
                    o = Fp(e);
                  return 0 !== o.length ? oC(e, o) : aC(e, n, r, t);
                })(e, n);
          },
          gC = function(e, t) {
            return (
              !!e.selection.isCollapsed() &&
              (function(e, t) {
                var n = _u.fromRangeStart(e.selection.getRng());
                return sc
                  .fromPosition(t, e.getBody(), n)
                  .filter(function(e) {
                    return t ? _h(e) : Rh(e);
                  })
                  .bind(function(e) {
                    return A.from(As(t ? 0 : -1, e));
                  })
                  .map(function(t) {
                    return e.selection.select(t), !0;
                  })
                  .getOr(!1);
              })(e, t)
            );
          },
          pC = function(e, t) {
            e.on("keydown", function(n) {
              !1 === n.isDefaultPrevented() &&
                (function(e, t, n) {
                  Gb(
                    [
                      { keyCode: Ch.BACKSPACE, action: Yb(Ry, e, !1) },
                      { keyCode: Ch.DELETE, action: Yb(Ry, e, !0) },
                      { keyCode: Ch.BACKSPACE, action: Yb(Dy, e, !1) },
                      { keyCode: Ch.DELETE, action: Yb(Dy, e, !0) },
                      { keyCode: Ch.BACKSPACE, action: Yb(Vy, e, t, !1) },
                      { keyCode: Ch.DELETE, action: Yb(Vy, e, t, !0) },
                      { keyCode: Ch.BACKSPACE, action: Yb(mC, e, !1) },
                      { keyCode: Ch.DELETE, action: Yb(mC, e, !0) },
                      { keyCode: Ch.BACKSPACE, action: Yb(gC, e, !1) },
                      { keyCode: Ch.DELETE, action: Yb(gC, e, !0) },
                      { keyCode: Ch.BACKSPACE, action: Yb(yy, e, !1) },
                      { keyCode: Ch.DELETE, action: Yb(yy, e, !0) },
                      { keyCode: Ch.BACKSPACE, action: Yb(gy, e, !1) },
                      { keyCode: Ch.DELETE, action: Yb(gy, e, !0) },
                      { keyCode: Ch.BACKSPACE, action: Yb(jy, e, !1) },
                      { keyCode: Ch.DELETE, action: Yb(jy, e, !0) }
                    ],
                    n
                  ).each(function(e) {
                    n.preventDefault();
                  });
                })(e, t, n);
            }),
              e.on("keyup", function(t) {
                !1 === t.isDefaultPrevented() &&
                  (function(e, t) {
                    Gb(
                      [
                        { keyCode: Ch.BACKSPACE, action: Yb(By, e) },
                        { keyCode: Ch.DELETE, action: Yb(By, e) }
                      ],
                      t
                    );
                  })(e, t);
              });
          },
          vC = function(e) {
            return A.from(
              e.dom.getParent(e.selection.getStart(!0), e.dom.isBlock)
            );
          },
          bC = function(e, t) {
            var n,
              r,
              o = t,
              i = e.dom,
              a = e.schema.getMoveCaretBeforeOnEnterElements();
            if (t) {
              if (/^(LI|DT|DD)$/.test(t.nodeName)) {
                var u = (function(e) {
                  for (; e; ) {
                    if (
                      1 === e.nodeType ||
                      (3 === e.nodeType && e.data && /[\r\n\s]/.test(e.data))
                    )
                      return e;
                    e = e.nextSibling;
                  }
                })(t.firstChild);
                u &&
                  /^(UL|OL|DL)$/.test(u.nodeName) &&
                  t.insertBefore(i.doc.createTextNode(" "), t.firstChild);
              }
              if (((r = i.createRng()), t.normalize(), t.hasChildNodes())) {
                for (var s = new Ao(t, t); (n = s.current()); ) {
                  if (To.isText(n)) {
                    r.setStart(n, 0), r.setEnd(n, 0);
                    break;
                  }
                  if (a[n.nodeName.toLowerCase()]) {
                    r.setStartBefore(n), r.setEndBefore(n);
                    break;
                  }
                  (o = n), (n = s.next());
                }
                n || (r.setStart(o, 0), r.setEnd(o, 0));
              } else
                To.isBr(t)
                  ? t.nextSibling && i.isBlock(t.nextSibling)
                    ? (r.setStartBefore(t), r.setEndBefore(t))
                    : (r.setStartAfter(t), r.setEndAfter(t))
                  : (r.setStart(t, 0), r.setEnd(t, 0));
              e.selection.setRng(r), e.selection.scrollIntoView(t);
            }
          },
          yC = function(e, t) {
            var n,
              r,
              o = e.getRoot();
            for (n = t; n !== o && "false" !== e.getContentEditable(n); )
              "true" === e.getContentEditable(n) && (r = n), (n = n.parentNode);
            return n !== o ? r : o;
          },
          CC = vC,
          wC = function(e) {
            return vC(e).fold(o(""), function(e) {
              return e.nodeName.toUpperCase();
            });
          },
          xC = function(e) {
            return vC(e)
              .filter(function(e) {
                return Po(fr.fromDom(e));
              })
              .isSome();
          },
          zC = function(e, t) {
            return e && e.parentNode && e.parentNode.nodeName === t;
          },
          SC = function(e) {
            return e && /^(OL|UL|LI)$/.test(e.nodeName);
          },
          NC = function(e) {
            var t = e.parentNode;
            return /^(LI|DT|DD)$/.test(t.nodeName) ? t : e;
          },
          EC = function(e, t, n) {
            for (
              var r = e[n ? "firstChild" : "lastChild"];
              r && !To.isElement(r);

            )
              r = r[n ? "nextSibling" : "previousSibling"];
            return r === t;
          },
          kC = function(e, t, n, r, o) {
            var i = e.dom,
              a = e.selection.getRng();
            if (n !== e.getBody()) {
              var u;
              SC((u = n)) && SC(u.parentNode) && (o = "LI");
              var s = o ? t(o) : i.create("BR");
              if (EC(n, r, !0) && EC(n, r, !1))
                zC(n, "LI") ? i.insertAfter(s, NC(n)) : i.replace(s, n);
              else if (EC(n, r, !0))
                zC(n, "LI")
                  ? (i.insertAfter(s, NC(n)),
                    s.appendChild(i.doc.createTextNode(" ")),
                    s.appendChild(n))
                  : n.parentNode.insertBefore(s, n);
              else if (EC(n, r, !1)) i.insertAfter(s, NC(n));
              else {
                n = NC(n);
                var c = a.cloneRange();
                c.setStartAfter(r), c.setEndAfter(n);
                var l = c.extractContents();
                "LI" === o &&
                (function(e, t) {
                  return e.firstChild && e.firstChild.nodeName === t;
                })(l, "LI")
                  ? ((s = l.firstChild), i.insertAfter(l, n))
                  : (i.insertAfter(l, n), i.insertAfter(s, n));
              }
              i.remove(r), bC(e, s);
            }
          },
          TC = function(e, t) {
            return t && "A" === t.nodeName && e.isEmpty(t);
          },
          AC = function(e) {
            e.innerHTML = '<br data-mce-bogus="1">';
          },
          MC = function(e, t) {
            return (
              e.nodeName === t ||
              (e.previousSibling && e.previousSibling.nodeName === t)
            );
          },
          _C = function(e, t) {
            return (
              t &&
              e.isBlock(t) &&
              !/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName) &&
              !/^(fixed|absolute)/i.test(t.style.position) &&
              "true" !== e.getContentEditable(t)
            );
          },
          RC = function(e, t, n) {
            return !1 === To.isText(t)
              ? n
              : e
              ? 1 === n && t.data.charAt(n - 1) === xa
                ? 0
                : n
              : n === t.data.length - 1 && t.data.charAt(n) === xa
              ? t.data.length
              : n;
          },
          BC = function(e, t) {
            var n,
              r,
              o = e.getRoot();
            for (n = t; n !== o && "false" !== e.getContentEditable(n); )
              "true" === e.getContentEditable(n) && (r = n), (n = n.parentNode);
            return n !== o ? r : o;
          },
          OC = function(e, t) {
            var n = cl(e);
            n &&
              n.toLowerCase() === t.tagName.toLowerCase() &&
              e.dom.setAttribs(t, ll(e));
          },
          DC = function(e, t) {
            var n,
              r,
              o,
              i,
              a,
              u,
              s,
              c,
              l,
              f,
              d,
              h,
              m,
              g = e.dom,
              p = e.schema,
              v = p.getNonEmptyElements(),
              b = e.selection.getRng(),
              y = function(t) {
                var n,
                  i,
                  u,
                  s = o,
                  c = p.getTextInlineElements();
                if (
                  (t || "TABLE" === f || "HR" === f
                    ? ((n = g.create(t || h)), OC(e, n))
                    : (n = a.cloneNode(!1)),
                  (u = n),
                  !1 === hl(e))
                )
                  g.setAttrib(n, "style", null), g.setAttrib(n, "class", null);
                else
                  do {
                    if (c[s.nodeName]) {
                      if (Zu(s) || pc.isBookmarkNode(s)) continue;
                      (i = s.cloneNode(!1)),
                        g.setAttrib(i, "id", ""),
                        n.hasChildNodes()
                          ? (i.appendChild(n.firstChild), n.appendChild(i))
                          : ((u = i), n.appendChild(i));
                    }
                  } while ((s = s.parentNode) && s !== r);
                return AC(u), n;
              },
              C = function(e) {
                var t,
                  n,
                  r = RC(e, o, i);
                if (To.isText(o) && (e ? r > 0 : r < o.nodeValue.length))
                  return !1;
                if (o.parentNode === a && m && !e) return !0;
                if (e && To.isElement(o) && o === a.firstChild) return !0;
                if (MC(o, "TABLE") || MC(o, "HR"))
                  return (m && !e) || (!m && e);
                var u = new Ao(o, a);
                for (
                  To.isText(o) &&
                  (e && 0 === r
                    ? u.prev()
                    : e || r !== o.nodeValue.length || u.next());
                  (t = u.current());

                ) {
                  if (To.isElement(t)) {
                    if (
                      !t.getAttribute("data-mce-bogus") &&
                      ((n = t.nodeName.toLowerCase()), v[n] && "br" !== n)
                    )
                      return !1;
                  } else if (To.isText(t) && !/^[ \t\r\n]*$/.test(t.nodeValue))
                    return !1;
                  e ? u.prev() : u.next();
                }
                return !0;
              },
              w = function() {
                (s =
                  /^(H[1-6]|PRE|FIGURE)$/.test(f) && "HGROUP" !== d
                    ? y(h)
                    : y()),
                  ml(e) && _C(g, l) && g.isEmpty(a)
                    ? (s = g.split(l, a))
                    : g.insertAfter(s, a),
                  bC(e, s);
              };
            rv.normalize(g, b).each(function(e) {
              b.setStart(e.startContainer, e.startOffset),
                b.setEnd(e.endContainer, e.endOffset);
            }),
              (o = b.startContainer),
              (i = b.startOffset),
              (h = cl(e)),
              (u = !(!t || !t.shiftKey));
            var x = !(!t || !t.ctrlKey);
            To.isElement(o) &&
              o.hasChildNodes() &&
              ((m = i > o.childNodes.length - 1),
              (o = o.childNodes[Math.min(i, o.childNodes.length - 1)] || o),
              (i = m && To.isText(o) ? o.nodeValue.length : 0)),
              (r = BC(g, o)) &&
                (((h && !u) || (!h && u)) &&
                  (o = (function(e, t, n, r, o) {
                    var i,
                      a,
                      u,
                      s,
                      c,
                      l,
                      f = t || "P",
                      d = e.dom,
                      h = BC(d, r);
                    if (!(a = d.getParent(r, d.isBlock)) || !_C(d, a)) {
                      if (
                        ((l =
                          (a = a || h) === e.getBody() ||
                          (function(e) {
                            return e && /^(TD|TH|CAPTION)$/.test(e.nodeName);
                          })(a)
                            ? a.nodeName.toLowerCase()
                            : a.parentNode.nodeName.toLowerCase()),
                        !a.hasChildNodes())
                      )
                        return (
                          (i = d.create(f)),
                          OC(e, i),
                          a.appendChild(i),
                          n.setStart(i, 0),
                          n.setEnd(i, 0),
                          i
                        );
                      for (s = r; s.parentNode !== a; ) s = s.parentNode;
                      for (; s && !d.isBlock(s); )
                        (u = s), (s = s.previousSibling);
                      if (u && e.schema.isValidChild(l, f.toLowerCase())) {
                        for (
                          i = d.create(f),
                            OC(e, i),
                            u.parentNode.insertBefore(i, u),
                            s = u;
                          s && !d.isBlock(s);

                        )
                          (c = s.nextSibling), i.appendChild(s), (s = c);
                        n.setStart(r, o), n.setEnd(r, o);
                      }
                    }
                    return r;
                  })(e, h, b, o, i)),
                (a = g.getParent(o, g.isBlock)),
                (l = a ? g.getParent(a.parentNode, g.isBlock) : null),
                (f = a ? a.nodeName.toUpperCase() : ""),
                "LI" !== (d = l ? l.nodeName.toUpperCase() : "") ||
                  x ||
                  ((a = l), (l = l.parentNode), (f = d)),
                /^(LI|DT|DD)$/.test(f) && g.isEmpty(a)
                  ? kC(e, y, l, a, h)
                  : (h && a === e.getBody()) ||
                    ((h = h || "P"),
                    Ea(a)
                      ? ((s = Ha(a)), g.isEmpty(a) && AC(a), bC(e, s))
                      : C()
                      ? w()
                      : C(!0)
                      ? ((s = a.parentNode.insertBefore(y(), a)),
                        bC(e, MC(a, "HR") ? s : a))
                      : ((n = (function(e) {
                          var t = e.cloneRange();
                          return (
                            t.setStart(
                              e.startContainer,
                              RC(!0, e.startContainer, e.startOffset)
                            ),
                            t.setEnd(
                              e.endContainer,
                              RC(!1, e.endContainer, e.endOffset)
                            ),
                            t
                          );
                        })(b).cloneRange()).setEndAfter(a),
                        (function(e) {
                          j(ta(fr.fromDom(e), br), function(e) {
                            var t = e.dom();
                            t.nodeValue = za(t.nodeValue);
                          });
                        })((c = n.extractContents())),
                        (function(e) {
                          do {
                            To.isText(e) &&
                              (e.nodeValue = e.nodeValue.replace(
                                /^[\r\n]+/,
                                ""
                              )),
                              (e = e.firstChild);
                          } while (e);
                        })(c),
                        (s = c.firstChild),
                        g.insertAfter(c, a),
                        (function(e, t, n) {
                          var r,
                            o = n,
                            i = [];
                          if (o) {
                            for (; (o = o.firstChild); ) {
                              if (e.isBlock(o)) return;
                              To.isElement(o) &&
                                !t[o.nodeName.toLowerCase()] &&
                                i.push(o);
                            }
                            for (r = i.length; r--; )
                              !(o = i[r]).hasChildNodes() ||
                              (o.firstChild === o.lastChild &&
                                "" === o.firstChild.nodeValue)
                                ? e.remove(o)
                                : TC(e, o) && e.remove(o);
                          }
                        })(g, v, s),
                        (function(e, t) {
                          var n;
                          t.normalize(),
                            ((n = t.lastChild) &&
                              !/^(left|right)$/gi.test(
                                e.getStyle(n, "float", !0)
                              )) ||
                              e.add(t, "br");
                        })(g, a),
                        g.isEmpty(a) && AC(a),
                        s.normalize(),
                        g.isEmpty(s) ? (g.remove(s), w()) : bC(e, s)),
                    g.setAttrib(s, "id", ""),
                    e.fire("NewBlock", { newBlock: s })));
          },
          HC = function(e, t, n) {
            var r = e.create("span", {}, "&nbsp;");
            n.parentNode.insertBefore(r, n), t.scrollIntoView(r), e.remove(r);
          },
          PC = function(e, t, n, r) {
            var o = e.createRng();
            r
              ? (o.setStartBefore(n), o.setEndBefore(n))
              : (o.setStartAfter(n), o.setEndAfter(n)),
              t.setRng(o);
          },
          LC = function(e, t) {
            var n,
              r,
              o = e.selection,
              i = e.dom,
              a = o.getRng();
            rv.normalize(i, a).each(function(e) {
              a.setStart(e.startContainer, e.startOffset),
                a.setEnd(e.endContainer, e.endOffset);
            });
            var u = a.startOffset,
              s = a.startContainer;
            if (1 === s.nodeType && s.hasChildNodes()) {
              var c = u > s.childNodes.length - 1;
              (s = s.childNodes[Math.min(u, s.childNodes.length - 1)] || s),
                (u = c && 3 === s.nodeType ? s.nodeValue.length : 0);
            }
            var l = i.getParent(s, i.isBlock),
              f = l ? i.getParent(l.parentNode, i.isBlock) : null,
              d = f ? f.nodeName.toUpperCase() : "",
              h = !(!t || !t.ctrlKey);
            "LI" !== d || h || (l = f),
              s &&
                3 === s.nodeType &&
                u >= s.nodeValue.length &&
                ((function(e, t, n) {
                  for (
                    var r, o = new Ao(t, n), i = e.getNonEmptyElements();
                    (r = o.next());

                  )
                    if (i[r.nodeName.toLowerCase()] || r.length > 0) return !0;
                })(e.schema, s, l) ||
                  ((n = i.create("br")),
                  a.insertNode(n),
                  a.setStartAfter(n),
                  a.setEndAfter(n),
                  (r = !0))),
              (n = i.create("br")),
              Uu(i, a, n),
              HC(i, o, n),
              PC(i, o, n, r),
              e.undoManager.add();
          },
          VC = function(e, t) {
            var n = fr.fromTag("br");
            Li(fr.fromDom(t), n), e.undoManager.add();
          },
          IC = function(e, t) {
            FC(e.getBody(), t) || Vi(fr.fromDom(t), fr.fromTag("br"));
            var n = fr.fromTag("br");
            Vi(fr.fromDom(t), n),
              HC(e.dom, e.selection, n.dom()),
              PC(e.dom, e.selection, n.dom(), !1),
              e.undoManager.add();
          },
          FC = function(e, t) {
            return (
              (n = _u.after(t)),
              !!To.isBr(n.getNode()) ||
                sc
                  .nextPosition(e, _u.after(t))
                  .map(function(e) {
                    return To.isBr(e.getNode());
                  })
                  .getOr(!1)
            );
            var n;
          },
          UC = function(e) {
            return e && "A" === e.nodeName && "href" in e;
          },
          jC = function(e) {
            return e.fold(o(!1), UC, UC, o(!1));
          },
          qC = function(e, t) {
            t.fold(n, a(VC, e), a(IC, e), n);
          },
          $C = function(e, t) {
            var n = (function(e) {
              var t = a(Ev.isInlineTarget, e),
                n = _u.fromRangeStart(e.selection.getRng());
              return $v(t, e.getBody(), n).filter(jC);
            })(e);
            n.isSome() ? n.each(a(qC, e)) : LC(e, t);
          },
          WC = function(e, t) {
            return CC(e)
              .filter(function(e) {
                return t.length > 0 && Ur(fr.fromDom(e), t);
              })
              .isSome();
          },
          KC = function(e) {
            return WC(e, fl(e));
          },
          XC = function(e) {
            return WC(e, dl(e));
          },
          YC = Ul([{ br: [] }, { block: [] }, { none: [] }]),
          GC = function(e, t) {
            return XC(e);
          },
          JC = function(e) {
            return function(t, n) {
              return ("" === cl(t)) === e;
            };
          },
          QC = function(e) {
            return function(t, n) {
              return xC(t) === e;
            };
          },
          ZC = function(e, t) {
            return function(n, r) {
              return (wC(n) === e.toUpperCase()) === t;
            };
          },
          ew = function(e) {
            return ZC("pre", e);
          },
          tw = function(e) {
            return function(t, n) {
              return sl(t) === e;
            };
          },
          nw = function(e, t) {
            return KC(e);
          },
          rw = function(e, t) {
            return t;
          },
          ow = function(e) {
            var t = cl(e),
              n = yC(e.dom, e.selection.getStart());
            return n && e.schema.isValidChild(n.nodeName, t || "P");
          },
          iw = function(e, t) {
            return function(n, r) {
              return X(
                e,
                function(e, t) {
                  return e && t(n, r);
                },
                !0
              )
                ? A.some(t)
                : A.none();
            };
          },
          aw = function(e, t) {
            return kv(
              [
                iw([GC], YC.none()),
                iw([ZC("summary", !0)], YC.br()),
                iw([ew(!0), tw(!1), rw], YC.br()),
                iw([ew(!0), tw(!1)], YC.block()),
                iw([ew(!0), tw(!0), rw], YC.block()),
                iw([ew(!0), tw(!0)], YC.br()),
                iw([QC(!0), rw], YC.br()),
                iw([QC(!0)], YC.block()),
                iw([JC(!0), rw, ow], YC.block()),
                iw([JC(!0)], YC.br()),
                iw([nw], YC.br()),
                iw([JC(!1), rw], YC.br()),
                iw([ow], YC.block())
              ],
              [e, !(!t || !t.shiftKey)]
            ).getOr(YC.none());
          },
          uw = function(e, t) {
            aw(e, t).fold(
              function() {
                $C(e, t);
              },
              function() {
                DC(e, t);
              },
              n
            );
          },
          sw = function(e) {
            e.on("keydown", function(t) {
              t.keyCode === Ch.ENTER &&
                (function(e, t) {
                  var n;
                  t.isDefaultPrevented() ||
                    (t.preventDefault(),
                    (n = e.undoManager).typing && ((n.typing = !1), n.add()),
                    e.undoManager.transact(function() {
                      !1 === e.selection.isCollapsed() &&
                        e.execCommand("Delete"),
                        uw(e, t);
                    }));
                })(e, t);
            });
          },
          cw = function(e, t) {
            var n = t.container(),
              r = t.offset();
            return To.isText(n)
              ? (n.insertData(r, e), A.some(Au(n, r + e.length)))
              : Ls(t).map(function(n) {
                  var r = fr.fromText(e);
                  return (
                    t.isAtEnd() ? Vi(n, r) : Li(n, r), Au(r.dom(), e.length)
                  );
                });
          },
          lw = a(cw, " "),
          fw = a(cw, " "),
          dw = function(e, t, n) {
            return sc.navigateIgnore(e, t, n, kh);
          },
          hw = function(e, t, n) {
            var r = W(kd(fr.fromDom(n.container()), t), Ro);
            return ue(r).fold(
              function() {
                return dw(e, t.dom(), n).forall(function(e) {
                  return !1 === Ts(e, n, t.dom());
                });
              },
              function(t) {
                return dw(e, t.dom(), n).isNone();
              }
            );
          },
          mw = a(hw, !1),
          gw = a(hw, !0),
          pw = function(e) {
            return Au.isTextPosition(e) && !e.isAtStart() && !e.isAtEnd();
          },
          vw = function(e, t) {
            var n = W(kd(fr.fromDom(t.container()), e), Ro);
            return ue(n).getOr(e);
          },
          bw = function(e, t) {
            return pw(t)
              ? Eh(t)
              : Eh(t) || sc.prevPosition(vw(e, t).dom(), t).exists(Eh);
          },
          yw = function(e, t) {
            return pw(t)
              ? Nh(t)
              : Nh(t) || sc.nextPosition(vw(e, t).dom(), t).exists(Nh);
          },
          Cw = function(e) {
            return Ls(e)
              .bind(function(e) {
                return ia(e, vr);
              })
              .exists(function(e) {
                return (t = Rr(e, "white-space")), I(["pre", "pre-wrap"], t);
                var t;
              });
          },
          ww = function(e, t) {
            return (
              (function(e, t) {
                return sc.prevPosition(e.dom(), t).isNone();
              })(e, t) ||
              (function(e, t) {
                return sc.nextPosition(e.dom(), t).isNone();
              })(e, t) ||
              mw(e, t) ||
              gw(e, t) ||
              zy(e, t) ||
              xy(e, t)
            );
          },
          xw = function(e, t) {
            var n = (function(e) {
              var t = e.container(),
                n = e.offset();
              return To.isText(t) && n < t.data.length ? Au(t, n + 1) : e;
            })(t);
            return !Cw(n) && (gw(e, n) || xy(e, n) || yw(e, n));
          },
          zw = function(e, t) {
            return (
              (function(e, t) {
                return !Cw(t) && (mw(e, t) || zy(e, t) || bw(e, t));
              })(e, t) || xw(e, t)
            );
          },
          Sw = function(e, t) {
            return wh(e.charAt(t));
          },
          Nw = function(e) {
            var t = e.container();
            return To.isText(t) && er(t.data, " ");
          },
          Ew = function(e) {
            var t = e.data,
              n = (function(e) {
                return U(e.split(""), function(e, t, n) {
                  return wh(e) &&
                    t > 0 &&
                    t < n.length - 1 &&
                    zh(n[t - 1]) &&
                    zh(n[t + 1])
                    ? " "
                    : e;
                }).join("");
              })(t);
            return n !== t && ((e.data = n), !0);
          },
          kw = function(e, t) {
            return A.some(t)
              .filter(Nw)
              .bind(function(t) {
                var n = t.container();
                return (function(e, t) {
                  var n = t.data,
                    r = Au(t, 0);
                  return !(
                    !Sw(n, 0) ||
                    zw(e, r) ||
                    ((t.data = " " + n.slice(1)), 0)
                  );
                })(e, n) ||
                  Ew(n) ||
                  (function(e, t) {
                    var n = t.data,
                      r = Au(t, n.length - 1);
                    return !(
                      !Sw(n, n.length - 1) ||
                      zw(e, r) ||
                      ((t.data = n.slice(0, -1) + " "), 0)
                    );
                  })(e, n)
                  ? A.some(t)
                  : A.none();
              });
          },
          Tw = function(e) {
            var t = fr.fromDom(e.getBody());
            e.selection.isCollapsed() &&
              kw(t, Au.fromRangeStart(e.selection.getRng())).each(function(t) {
                e.selection.setRng(t.toRange());
              });
          },
          Aw = function(e, t) {
            return function(n) {
              return (function(e, t) {
                return !Cw(t) && (ww(e, t) || bw(e, t) || yw(e, t));
              })(e, n)
                ? lw(t)
                : fw(t);
            };
          },
          Mw = function(e) {
            var t = _u.fromRangeStart(e.selection.getRng()),
              n = fr.fromDom(e.getBody());
            if (e.selection.isCollapsed()) {
              var r = a(Ev.isInlineTarget, e),
                o = _u.fromRangeStart(e.selection.getRng());
              return $v(r, e.getBody(), o)
                .bind(
                  (function(e) {
                    return function(t) {
                      return t.fold(
                        function(t) {
                          return sc.prevPosition(e.dom(), _u.before(t));
                        },
                        function(e) {
                          return sc.firstPositionIn(e);
                        },
                        function(e) {
                          return sc.lastPositionIn(e);
                        },
                        function(t) {
                          return sc.nextPosition(e.dom(), _u.after(t));
                        }
                      );
                    };
                  })(n)
                )
                .bind(Aw(n, t))
                .exists(
                  (function(e) {
                    return function(t) {
                      return (
                        e.selection.setRng(t.toRange()), e.nodeChanged(), !0
                      );
                    };
                  })(e)
                );
            }
            return !1;
          },
          _w = function(e) {
            e.on("keydown", function(t) {
              !1 === t.isDefaultPrevented() &&
                (function(e, t) {
                  Gb([{ keyCode: Ch.SPACEBAR, action: Yb(Mw, e) }], t).each(
                    function(e) {
                      t.preventDefault();
                    }
                  );
                })(e, t);
            });
          },
          Rw = function(e, t) {
            t.hasAttribute("data-mce-caret") &&
              (Ha(t),
              (function(e) {
                e.selection.setRng(e.selection.getRng());
              })(e),
              e.selection.scrollIntoView(t));
          },
          Bw = function(e, t) {
            var n = (function(e) {
              return ua(fr.fromDom(e.getBody()), "*[data-mce-caret]").fold(
                o(null),
                function(e) {
                  return e.dom();
                }
              );
            })(e);
            if (n)
              return "compositionstart" === t.type
                ? (t.preventDefault(), t.stopPropagation(), void Rw(e, n))
                : void (Aa(n) && (Rw(e, n), e.undoManager.add()));
          },
          Ow = function(e) {
            e.on("keyup compositionstart", a(Bw, e));
          },
          Dw = cr.detect().browser,
          Hw = function(e) {
            !(function(e) {
              var t = Wi(function() {
                e.composing || Tw(e);
              }, 0);
              Dw.isIE() &&
                (e.on("keypress", function(e) {
                  t.throttle();
                }),
                e.on("remove", function(e) {
                  t.cancel();
                }));
            })(e),
              e.on("input", function(t) {
                !1 === t.isComposing && Tw(e);
              });
          },
          Pw = function(e) {
            e.on("keydown", function(t) {
              !1 === t.isDefaultPrevented() &&
                (function(e, t) {
                  Gb(
                    [
                      { keyCode: Ch.END, action: Nb(e, !0) },
                      { keyCode: Ch.HOME, action: Nb(e, !1) }
                    ],
                    t
                  ).each(function(e) {
                    t.preventDefault();
                  });
                })(e, t);
            });
          },
          Lw = function(e) {
            var t = rb.setupSelectedState(e);
            Ow(e), Jb(e, t), pC(e, t), sw(e), _w(e), Hw(e), Pw(e);
          },
          Vw = function(e) {
            var n,
              r,
              o,
              i = an.each,
              a = Ch.BACKSPACE,
              u = Ch.DELETE,
              s = e.dom,
              c = e.selection,
              l = e.settings,
              f = e.parser,
              d = Le.gecko,
              h = Le.ie,
              m = Le.webkit,
              g = h ? "Text" : "URL",
              p = function(t, n) {
                try {
                  e.getDoc().execCommand(t, !1, n);
                } catch (e) {}
              },
              v = function(e) {
                return e.isDefaultPrevented();
              },
              b = function() {
                e.shortcuts.add("meta+a", null, "SelectAll");
              },
              y = function() {
                e.on("keydown", function(e) {
                  if (
                    !v(e) &&
                    e.keyCode === a &&
                    c.isCollapsed() &&
                    0 === c.getRng().startOffset
                  ) {
                    var t = c.getNode().previousSibling;
                    if (t && t.nodeName && "table" === t.nodeName.toLowerCase())
                      return e.preventDefault(), !1;
                  }
                });
              },
              C = function() {
                e.inline ||
                  (e.contentStyles.push("body {min-height: 150px}"),
                  e.on("click", function(t) {
                    var n;
                    if ("HTML" === t.target.nodeName) {
                      if (Le.ie > 11) return void e.getBody().focus();
                      (n = e.selection.getRng()),
                        e.getBody().focus(),
                        e.selection.setRng(n),
                        e.selection.normalize(),
                        e.nodeChanged();
                    }
                  }));
              };
            return (
              e.on("keydown", function(t) {
                var n, r, o, i, a;
                if (
                  !v(t) &&
                  t.keyCode === Ch.BACKSPACE &&
                  ((r = (n = c.getRng()).startContainer),
                  (o = n.startOffset),
                  (i = s.getRoot()),
                  (a = r),
                  n.collapsed && 0 === o)
                ) {
                  for (
                    ;
                    a &&
                    a.parentNode &&
                    a.parentNode.firstChild === a &&
                    a.parentNode !== i;

                  )
                    a = a.parentNode;
                  "BLOCKQUOTE" === a.tagName &&
                    (e.formatter.toggle("blockquote", null, a),
                    (n = s.createRng()).setStart(r, 0),
                    n.setEnd(r, 0),
                    c.setRng(n));
                }
              }),
              (n = function(e) {
                var t = s.create("body"),
                  n = e.cloneContents();
                return (
                  t.appendChild(n),
                  c.serializer.serialize(t, { format: "html" })
                );
              }),
              e.on("keydown", function(t) {
                var r,
                  o,
                  i,
                  c,
                  l,
                  f = t.keyCode;
                if (!v(t) && (f === u || f === a)) {
                  if (
                    ((r = e.selection.isCollapsed()),
                    (o = e.getBody()),
                    r && !s.isEmpty(o))
                  )
                    return;
                  if (
                    !r &&
                    ((i = e.selection.getRng()),
                    (c = n(i)),
                    (l = s.createRng()).selectNode(e.getBody()),
                    c !== n(l))
                  )
                    return;
                  t.preventDefault(),
                    e.setContent(""),
                    o.firstChild && s.isBlock(o.firstChild)
                      ? e.selection.setCursorLocation(o.firstChild, 0)
                      : e.selection.setCursorLocation(o, 0),
                    e.nodeChanged();
                }
              }),
              Le.windowsPhone ||
                e.on(
                  "keyup focusin mouseup",
                  function(e) {
                    Ch.modifierPressed(e) || c.normalize();
                  },
                  !0
                ),
              m &&
                (e.inline ||
                  s.bind(e.getDoc(), "mousedown mouseup", function(t) {
                    var n;
                    if (t.target === e.getDoc().documentElement)
                      if (
                        ((n = c.getRng()),
                        e.getBody().focus(),
                        "mousedown" === t.type)
                      ) {
                        if (Ta(n.startContainer)) return;
                        c.placeCaretAt(t.clientX, t.clientY);
                      } else c.setRng(n);
                  }),
                e.on("click", function(t) {
                  var n = t.target;
                  /^(IMG|HR)$/.test(n.nodeName) &&
                    "false" !== s.getContentEditableParent(n) &&
                    (t.preventDefault(),
                    e.selection.select(n),
                    e.nodeChanged()),
                    "A" === n.nodeName &&
                      s.hasClass(n, "mce-item-anchor") &&
                      (t.preventDefault(), c.select(n));
                }),
                l.forced_root_block &&
                  e.on("init", function() {
                    p("DefaultParagraphSeparator", cl(e));
                  }),
                e.on("init", function() {
                  e.dom.bind(e.getBody(), "submit", function(e) {
                    e.preventDefault();
                  });
                }),
                y(),
                f.addNodeFilter("br", function(e) {
                  for (var t = e.length; t--; )
                    "Apple-interchange-newline" === e[t].attr("class") &&
                      e[t].remove();
                }),
                Le.iOS
                  ? (e.inline ||
                      e.on("keydown", function() {
                        t.document.activeElement === t.document.body &&
                          e.getWin().focus();
                      }),
                    C(),
                    e.on("click", function(e) {
                      var t = e.target;
                      do {
                        if ("A" === t.tagName) return void e.preventDefault();
                      } while ((t = t.parentNode));
                    }),
                    e.contentStyles.push(
                      ".mce-content-body {-webkit-touch-callout: none}"
                    ))
                  : b()),
              Le.ie >= 11 && (C(), y()),
              Le.ie &&
                (b(),
                p("AutoUrlDetect", !1),
                e.on("dragstart", function(t) {
                  !(function(t) {
                    var n, r;
                    t.dataTransfer &&
                      (e.selection.isCollapsed() &&
                        "IMG" === t.target.tagName &&
                        c.select(t.target),
                      (n = e.selection.getContent()).length > 0 &&
                        ((r =
                          "data:text/mce-internal," +
                          escape(e.id) +
                          "," +
                          escape(n)),
                        t.dataTransfer.setData(g, r)));
                  })(t);
                }),
                e.on("drop", function(t) {
                  if (!v(t)) {
                    var n = (function(e) {
                      var t;
                      return e.dataTransfer &&
                        (t = e.dataTransfer.getData(g)) &&
                        t.indexOf("data:text/mce-internal,") >= 0
                        ? ((t = t
                            .substr("data:text/mce-internal,".length)
                            .split(",")),
                          { id: unescape(t[0]), html: unescape(t[1]) })
                        : null;
                    })(t);
                    if (n && n.id !== e.id) {
                      t.preventDefault();
                      var r = yp(t.x, t.y, e.getDoc());
                      c.setRng(r),
                        (o = n.html),
                        (i = !0),
                        e.queryCommandSupported("mceInsertClipboardContent")
                          ? e.execCommand("mceInsertClipboardContent", !1, {
                              content: o,
                              internal: i
                            })
                          : e.execCommand("mceInsertContent", !1, o);
                    }
                  }
                  var o, i;
                })),
              d &&
                (e.on("keydown", function(t) {
                  if (!v(t) && t.keyCode === a) {
                    if (!e.getBody().getElementsByTagName("hr").length) return;
                    if (c.isCollapsed() && 0 === c.getRng().startOffset) {
                      var n = c.getNode(),
                        r = n.previousSibling;
                      if ("HR" === n.nodeName)
                        return s.remove(n), void t.preventDefault();
                      r &&
                        r.nodeName &&
                        "hr" === r.nodeName.toLowerCase() &&
                        (s.remove(r), t.preventDefault());
                    }
                  }
                }),
                t.Range.prototype.getClientRects ||
                  e.on("mousedown", function(t) {
                    if (!v(t) && "HTML" === t.target.nodeName) {
                      var n = e.getBody();
                      n.blur(),
                        je.setEditorTimeout(e, function() {
                          n.focus();
                        });
                    }
                  }),
                (r = function() {
                  var t = s.getAttribs(c.getStart().cloneNode(!1));
                  return function() {
                    var n = c.getStart();
                    n !== e.getBody() &&
                      (s.setAttrib(n, "style", null),
                      i(t, function(e) {
                        n.setAttributeNode(e.cloneNode(!0));
                      }));
                  };
                }),
                (o = function() {
                  return (
                    !c.isCollapsed() &&
                    s.getParent(c.getStart(), s.isBlock) !==
                      s.getParent(c.getEnd(), s.isBlock)
                  );
                }),
                e.on("keypress", function(t) {
                  var n;
                  if (!v(t) && (8 === t.keyCode || 46 === t.keyCode) && o())
                    return (
                      (n = r()),
                      e.getDoc().execCommand("delete", !1, null),
                      n(),
                      t.preventDefault(),
                      !1
                    );
                }),
                s.bind(e.getDoc(), "cut", function(t) {
                  var n;
                  !v(t) &&
                    o() &&
                    ((n = r()),
                    je.setEditorTimeout(e, function() {
                      n();
                    }));
                }),
                l.readonly ||
                  e.on("BeforeExecCommand mousedown", function() {
                    p("StyleWithCSS", !1),
                      p("enableInlineTableEditing", !1),
                      l.object_resizing || p("enableObjectResizing", !1);
                  }),
                e.on("SetContent ExecCommand", function(e) {
                  ("setcontent" !== e.type && "mceInsertLink" !== e.command) ||
                    i(s.select("a"), function(e) {
                      var t = e.parentNode,
                        n = s.getRoot();
                      if (t.lastChild === e) {
                        for (; t && !s.isBlock(t); ) {
                          if (t.parentNode.lastChild !== t || t === n) return;
                          t = t.parentNode;
                        }
                        s.add(t, "br", { "data-mce-bogus": 1 });
                      }
                    });
                }),
                e.contentStyles.push(
                  "img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}"
                ),
                Le.mac &&
                  e.on("keydown", function(t) {
                    !Ch.metaKeyPressed(t) ||
                      t.shiftKey ||
                      (37 !== t.keyCode && 39 !== t.keyCode) ||
                      (t.preventDefault(),
                      e.selection
                        .getSel()
                        .modify(
                          "move",
                          37 === t.keyCode ? "backward" : "forward",
                          "lineboundary"
                        ));
                  }),
                y()),
              {
                refreshContentEditable: function() {},
                isHidden: function() {
                  var t;
                  return !(
                    !d ||
                    e.removed ||
                    ((t = e.selection.getSel()) &&
                      t.rangeCount &&
                      0 !== t.rangeCount)
                  );
                }
              }
            );
          },
          Iw = function(e) {
            return To.isElement(e) && Do(fr.fromDom(e));
          },
          Fw = function(e) {
            e.on("click", function(t) {
              t.detail >= 3 &&
                (function(e) {
                  var t = e.selection.getRng(),
                    n = Au.fromRangeStart(t),
                    r = Au.fromRangeEnd(t);
                  if (Au.isElementPosition(n)) {
                    var o = n.container();
                    Iw(o) &&
                      sc.firstPositionIn(o).each(function(e) {
                        return t.setStart(e.container(), e.offset());
                      });
                  }
                  Au.isElementPosition(r) &&
                    ((o = n.container()),
                    Iw(o) &&
                      sc.lastPositionIn(o).each(function(e) {
                        return t.setEnd(e.container(), e.offset());
                      })),
                    e.selection.setRng(Eg(t));
                })(e);
            });
          },
          Uw = function(e) {
            !(function(e) {
              e.on("click", function(t) {
                e.dom.getParent(t.target, "details") && t.preventDefault();
              });
            })(e),
              (function(e) {
                e.parser.addNodeFilter("details", function(e) {
                  j(e, function(e) {
                    e.attr("data-mce-open", e.attr("open")),
                      e.attr("open", "open");
                  });
                }),
                  e.serializer.addNodeFilter("details", function(e) {
                    j(e, function(e) {
                      var t = e.attr("data-mce-open");
                      e.attr("open", _(t) ? t : null),
                        e.attr("data-mce-open", null);
                    });
                  });
              })(e);
          },
          jw = Si.DOM,
          qw = function(e) {
            e.bindPendingEventDelegates(),
              (e.initialized = !0),
              e.fire("init"),
              e.focus(!0),
              e.nodeChanged({ initial: !0 }),
              e.execCallback("init_instance_callback", e),
              (function(e) {
                e.settings.auto_focus &&
                  je.setEditorTimeout(
                    e,
                    function() {
                      var t;
                      (t =
                        !0 === e.settings.auto_focus
                          ? e
                          : e.editorManager.get(e.settings.auto_focus))
                        .destroyed || t.focus();
                    },
                    100
                  );
              })(e);
          },
          $w = function(e, n) {
            var r,
              o,
              i = e.settings,
              a = e.getElement(),
              u = e.getDoc();
            i.inline || (e.getElement().style.visibility = e.orgVisibility),
              n || e.inline || (u.open(), u.write(e.iframeHTML), u.close()),
              e.inline &&
                (e.on("remove", function() {
                  var e = this.getBody();
                  jw.removeClass(e, "mce-content-body"),
                    jw.removeClass(e, "mce-edit-focus"),
                    jw.setAttrib(e, "contentEditable", null);
                }),
                jw.addClass(a, "mce-content-body"),
                (e.contentDocument = u = t.document),
                (e.contentWindow = t.window),
                (e.bodyElement = a),
                (e.contentAreaContainer = a),
                (i.root_name = a.nodeName.toLowerCase())),
              ((r = e.getBody()).disabled = !0),
              (e.readonly = i.readonly),
              e.readonly ||
                (e.inline &&
                  "static" === jw.getStyle(r, "position", !0) &&
                  (r.style.position = "relative"),
                (r.contentEditable = e.getParam("content_editable_state", !0))),
              (r.disabled = !1),
              (e.editorUpload = zd(e)),
              (e.schema = di(i)),
              (e.dom = Si(u, {
                keep_values: !0,
                url_converter: e.convertURL,
                url_converter_scope: e,
                hex_colors: i.force_hex_style_colors,
                update_styles: !0,
                root_element: e.inline ? e.getBody() : null,
                collect: function() {
                  return e.inline;
                },
                schema: e.schema,
                contentCssCors: kl(e),
                onSetAttrib: function(t) {
                  e.fire("SetAttrib", t);
                }
              })),
              (e.parser = (function(e) {
                var t = op(e.settings, e.schema);
                return (
                  t.addAttributeFilter("src,href,style,tabindex", function(
                    t,
                    n
                  ) {
                    for (var r, o, i, a = t.length, u = e.dom; a--; )
                      if (
                        ((o = (r = t[a]).attr(n)),
                        (i = "data-mce-" + n),
                        !r.attr(i))
                      ) {
                        if (
                          0 === o.indexOf("data:") ||
                          0 === o.indexOf("blob:")
                        )
                          continue;
                        "style" === n
                          ? ((o = u.serializeStyle(u.parseStyle(o), r.name))
                              .length || (o = null),
                            r.attr(i, o),
                            r.attr(n, o))
                          : "tabindex" === n
                          ? (r.attr(i, o), r.attr(n, null))
                          : r.attr(i, e.convertURL(o, n, r.name));
                      }
                  }),
                  t.addNodeFilter("script", function(e) {
                    for (var t, n, r = e.length; r--; )
                      0 !==
                        (n = (t = e[r]).attr("type") || "no/type").indexOf(
                          "mce-"
                        ) && t.attr("type", "mce-" + n);
                  }),
                  t.addNodeFilter("#cdata", function(e) {
                    for (var t, n = e.length; n--; )
                      ((t = e[n]).type = 8),
                        (t.name = "#comment"),
                        (t.value = "[CDATA[" + t.value + "]]");
                  }),
                  t.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div", function(t) {
                    for (
                      var n, r = t.length, o = e.schema.getNonEmptyElements();
                      r--;

                    )
                      (n = t[r]).isEmpty(o) &&
                        0 === n.getAll("br").length &&
                        (n.append(new $c("br", 1)).shortEnded = !0);
                  }),
                  t
                );
              })(e)),
              (e.serializer = sp(i, e)),
              (e.selection = hv(e.dom, e.getWin(), e.serializer, e)),
              (e.annotator = Fc(e)),
              (e.formatter = Ug(e)),
              (e.undoManager = rm(e)),
              (e._nodeChangeDispatcher = new Id(e)),
              (e._selectionOverrides = Ih(e)),
              Uw(e),
              Fw(e),
              Lw(e),
              Rd(e),
              e.fire("PreInit"),
              i.browser_spellcheck ||
                i.gecko_spellcheck ||
                ((u.body.spellcheck = !1),
                jw.setAttrib(r, "spellcheck", "false")),
              (e.quirks = Vw(e)),
              e.fire("PostRender");
            var s = Bl(e);
            void 0 !== s && (r.dir = s),
              i.protect &&
                e.on("BeforeSetContent", function(e) {
                  an.each(i.protect, function(t) {
                    e.content = e.content.replace(t, function(e) {
                      return "\x3c!--mce:protected " + escape(e) + "--\x3e";
                    });
                  });
                }),
              e.on("SetContent", function() {
                e.addVisual(e.getBody());
              }),
              e.load({ initial: !0, format: "html" }),
              (e.startContent = e.getContent({ format: "raw" })),
              e.on("compositionstart compositionend", function(t) {
                e.composing = "compositionstart" === t.type;
              }),
              e.contentStyles.length > 0 &&
                ((o = ""),
                an.each(e.contentStyles, function(e) {
                  o += e + "\r\n";
                }),
                e.dom.addStyle(o)),
              (function(e) {
                return e.inline ? jw.styleSheetLoader : e.dom.styleSheetLoader;
              })(e).loadAll(
                e.contentCSS,
                function(t) {
                  qw(e);
                },
                function(t) {
                  qw(e);
                }
              ),
              i.content_style &&
                (function(e, t) {
                  var n = fr.fromDom(e.getDoc().head),
                    r = fr.fromTag("style");
                  Tr(r, "type", "text/css"), Fi(r, fr.fromText(t)), Fi(n, r);
                })(e, i.content_style);
          },
          Ww = Si.DOM,
          Kw = function(e, n) {
            var r = e.editorManager.translate(
                "Rich Text Area. Press ALT-0 for help."
              ),
              o = (function(e, t, n, r) {
                var o = fr.fromTag("iframe");
                return (
                  Ar(o, r),
                  Ar(o, {
                    id: e + "_ifr",
                    frameBorder: "0",
                    allowTransparency: "true",
                    title: t
                  }),
                  Qi(o, "tox-edit-area__iframe"),
                  o
                );
              })(e.id, r, n.height, nl(e)).dom();
            o.onload = function() {
              (o.onload = null), e.fire("load");
            };
            var i = (function(e, n) {
              if (
                t.document.domain !== t.window.location.hostname &&
                Le.ie &&
                Le.ie < 12
              ) {
                var r = xd("mce");
                e[r] = function() {
                  $w(e);
                };
                var o =
                  'javascript:(function(){document.open();document.domain="' +
                  t.document.domain +
                  '";var ed = window.parent.tinymce.get("' +
                  e.id +
                  '");document.write(ed.iframeHTML);document.close();ed.' +
                  r +
                  "(true);})()";
                return Ww.setAttrib(n, "src", o), !0;
              }
              return !1;
            })(e, o);
            return (
              (e.contentAreaContainer = n.iframeContainer),
              (e.iframeElement = o),
              (e.iframeHTML = (function(e) {
                var t, n, r;
                return (
                  (r = rl(e) + "<html><head>"),
                  ol(e) !== e.documentBaseUrl &&
                    (r += '<base href="' + e.documentBaseURI.getURI() + '" />'),
                  (r +=
                    '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'),
                  (t = il(e)),
                  (n = al(e)),
                  ul(e) &&
                    (r +=
                      '<meta http-equiv="Content-Security-Policy" content="' +
                      ul(e) +
                      '" />'),
                  (r +=
                    '</head><body id="' +
                    t +
                    '" class="mce-content-body ' +
                    n +
                    '" data-id="' +
                    e.id +
                    '"><br></body></html>')
                );
              })(e)),
              Ww.add(n.iframeContainer, o),
              i
            );
          },
          Xw = function(e, t) {
            var n = Kw(e, t);
            t.editorContainer &&
              ((Ww.get(t.editorContainer).style.display = e.orgDisplay),
              (e.hidden = Ww.isHidden(t.editorContainer))),
              (e.getElement().style.display = "none"),
              Ww.setAttrib(e.id, "aria-hidden", "true"),
              n || $w(e);
          },
          Yw = function(e) {
            e.contentCSS = e.contentCSS.concat(
              (function(e) {
                var t = Rl(e),
                  n = e.editorManager.baseURL + "/skins/content",
                  r = "content" + e.editorManager.suffix + ".css",
                  o = !0 === e.inline;
                return U(t, function(t) {
                  return (function(e) {
                    return /^[a-z0-9\-]+$/i.test(e);
                  })(t) && !o
                    ? n + "/" + t + "/" + r
                    : e.documentBaseURI.toAbsolute(t);
                });
              })(e)
            );
          },
          Gw = Si.DOM,
          Jw = function(e, t, n) {
            var r = ad.get(n),
              o = ad.urls[n] || e.documentBaseUrl.replace(/\/$/, "");
            if (((n = an.trim(n)), r && -1 === an.inArray(t, n))) {
              if (
                (an.each(ad.dependencies(n), function(n) {
                  Jw(e, t, n);
                }),
                e.plugins[n])
              )
                return;
              try {
                var i = new r(e, o, e.$);
                (e.plugins[n] = i), i.init && (i.init(e, o), t.push(n));
              } catch (t) {
                od.pluginInitError(e, n, t);
              }
            }
          },
          Qw = function(e) {
            return e.replace(/^\-/, "");
          },
          Zw = function(e) {
            return { editorContainer: e, iframeContainer: e };
          },
          ex = function(e) {
            var t = e.getElement();
            return e.inline
              ? Zw(null)
              : (function(e) {
                  var t = Gw.create("div");
                  return Gw.insertAfter(t, e), Zw(t);
                })(t);
          },
          tx = function(e) {
            e.fire("ScriptsLoaded"),
              (function(e) {
                var t = an.trim(e.settings.icons),
                  n = e.ui.registry.getAll().icons,
                  r = Ai(
                    {},
                    {
                      "accessibility-check":
                        '<svg width="24" height="24"><path d="M12 2a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2zm8 7h-5v12c0 .6-.4 1-1 1a1 1 0 0 1-1-1v-5c0-.6-.4-1-1-1a1 1 0 0 0-1 1v5c0 .6-.4 1-1 1a1 1 0 0 1-1-1V9H4a1 1 0 1 1 0-2h16c.6 0 1 .4 1 1s-.4 1-1 1z" fill-rule="nonzero"/></svg>',
                      "align-center":
                        '<svg width="24" height="24"><path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm3 4h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 1 1 0-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 0 1 0-2zm-3-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2z" fill-rule="evenodd"/></svg>',
                      "align-justify":
                        '<svg width="24" height="24"><path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2z" fill-rule="evenodd"/></svg>',
                      "align-left":
                        '<svg width="24" height="24"><path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm0 4h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2zm0-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2z" fill-rule="evenodd"/></svg>',
                      "align-none":
                        '<svg width="24" height="24"><path d="M14.2 5L13 7H5a1 1 0 1 1 0-2h9.2zm4 0h.8a1 1 0 0 1 0 2h-2l1.2-2zm-6.4 4l-1.2 2H5a1 1 0 0 1 0-2h6.8zm4 0H19a1 1 0 0 1 0 2h-4.4l1.2-2zm-6.4 4l-1.2 2H5a1 1 0 0 1 0-2h4.4zm4 0H19a1 1 0 0 1 0 2h-6.8l1.2-2zM7 17l-1.2 2H5a1 1 0 0 1 0-2h2zm4 0h8a1 1 0 0 1 0 2H9.8l1.2-2zm5.2-13.5l1.3.7-9.7 16.3-1.3-.7 9.7-16.3z" fill-rule="evenodd"/></svg>',
                      "align-right":
                        '<svg width="24" height="24"><path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm6 4h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm-6-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2z" fill-rule="evenodd"/></svg>',
                      "arrow-left":
                        '<svg width="24" height="24"><path d="M5.6 13l12 6a1 1 0 0 0 1.4-1V6a1 1 0 0 0-1.4-.9l-12 6a1 1 0 0 0 0 1.8z" fill-rule="evenodd"/></svg>',
                      "arrow-right":
                        '<svg width="24" height="24"><path d="M18.5 13l-12 6A1 1 0 0 1 5 18V6a1 1 0 0 1 1.4-.9l12 6a1 1 0 0 1 0 1.8z" fill-rule="evenodd"/></svg>',
                      bold:
                        '<svg width="24" height="24"><path d="M7.8 19c-.3 0-.5 0-.6-.2l-.2-.5V5.7c0-.2 0-.4.2-.5l.6-.2h5c1.5 0 2.7.3 3.5 1 .7.6 1.1 1.4 1.1 2.5a3 3 0 0 1-.6 1.9c-.4.6-1 1-1.6 1.2.4.1.9.3 1.3.6s.8.7 1 1.2c.4.4.5 1 .5 1.6 0 1.3-.4 2.3-1.3 3-.8.7-2.1 1-3.8 1H7.8zm5-8.3c.6 0 1.2-.1 1.6-.5.4-.3.6-.7.6-1.3 0-1.1-.8-1.7-2.3-1.7H9.3v3.5h3.4zm.5 6c.7 0 1.3-.1 1.7-.4.4-.4.6-.9.6-1.5s-.2-1-.7-1.4c-.4-.3-1-.4-2-.4H9.4v3.8h4z" fill-rule="evenodd"/></svg>',
                      bookmark:
                        '<svg width="24" height="24"><path d="M6 4v17l6-4 6 4V4c0-.6-.4-1-1-1H7a1 1 0 0 0-1 1z" fill-rule="nonzero"/></svg>',
                      "border-width":
                        '<svg width="24" height="24"><path d="M5 14.8h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm-.5 3.7h15c.3 0 .5.2.5.5s-.2.5-.5.5h-15a.5.5 0 1 1 0-1zm.5-8.3h14c.6 0 1 .4 1 1v1c0 .5-.4 1-1 1H5a1 1 0 0 1-1-1v-1c0-.6.4-1 1-1zm0-5.7h14c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1v-2c0-.6.4-1 1-1z" fill-rule="evenodd"/></svg>',
                      brightness:
                        '<svg width="24" height="24"><path d="M12 17c.3 0 .5.1.7.3.2.2.3.4.3.7v1c0 .3-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7v-1c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3zm0-10a1 1 0 0 1-.7-.3A1 1 0 0 1 11 6V5c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3.3 0 .5.1.7.3.2.2.3.4.3.7v1c0 .3-.1.5-.3.7a1 1 0 0 1-.7.3zm7 4c.3 0 .5.1.7.3.2.2.3.4.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3h-1a1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h1zM7 12c0 .3-.1.5-.3.7a1 1 0 0 1-.7.3H5a1 1 0 0 1-.7-.3A1 1 0 0 1 4 12c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h1c.3 0 .5.1.7.3.2.2.3.4.3.7zm10 3.5l.7.8c.2.1.3.4.3.6 0 .3-.1.6-.3.8a1 1 0 0 1-.8.3 1 1 0 0 1-.6-.3l-.8-.7a1 1 0 0 1-.3-.8c0-.2.1-.5.3-.7a1 1 0 0 1 1.4 0zm-10-7l-.7-.8a1 1 0 0 1-.3-.6c0-.3.1-.6.3-.8.2-.2.5-.3.8-.3.2 0 .5.1.7.3l.7.7c.2.2.3.5.3.8 0 .2-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.8-.3zm10 0a1 1 0 0 1-.8.3 1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.3.1-.6.3-.8l.8-.7c.1-.2.4-.3.6-.3.3 0 .6.1.8.3.2.2.3.5.3.8 0 .2-.1.5-.3.7l-.7.7zm-10 7c.2-.2.5-.3.8-.3.2 0 .5.1.7.3a1 1 0 0 1 0 1.4l-.8.8a1 1 0 0 1-.6.3 1 1 0 0 1-.8-.3 1 1 0 0 1-.3-.8c0-.2.1-.5.3-.6l.7-.8zM12 8a4 4 0 0 1 3.7 2.4 4 4 0 0 1 0 3.2A4 4 0 0 1 12 16a4 4 0 0 1-3.7-2.4 4 4 0 0 1 0-3.2A4 4 0 0 1 12 8zm0 6.5c.7 0 1.3-.2 1.8-.7.5-.5.7-1.1.7-1.8s-.2-1.3-.7-1.8c-.5-.5-1.1-.7-1.8-.7s-1.3.2-1.8.7c-.5.5-.7 1.1-.7 1.8s.2 1.3.7 1.8c.5.5 1.1.7 1.8.7z" fill-rule="evenodd"/></svg>',
                      browse:
                        '<svg width="24" height="24"><path d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4v-2h4V8H5v10h4v2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h14zm-8 9.4l-2.3 2.3a1 1 0 1 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L13 13.4V20a1 1 0 0 1-2 0v-6.6z" fill-rule="nonzero"/></svg>',
                      cancel:
                        '<svg width="24" height="24"><path d="M12 4.6a7.4 7.4 0 1 1 0 14.8 7.4 7.4 0 0 1 0-14.8zM12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 8L14.8 8l1 1.1-2.7 2.8 2.7 2.7-1.1 1.1-2.7-2.7-2.7 2.7-1-1.1 2.6-2.7-2.7-2.7 1-1.1 2.8 2.7z" fill-rule="nonzero"/></svg>',
                      "change-case":
                        '<svg width="24" height="24"><path d="M18.4 18.2v-.6c-.5.8-1.3 1.2-2.4 1.2-2.2 0-3.3-1.6-3.3-4.8 0-3.1 1-4.7 3.3-4.7 1.1 0 1.8.3 2.4 1.1v-.6c0-.5.4-.8.8-.8s.8.3.8.8v8.4c0 .5-.4.8-.8.8a.8.8 0 0 1-.8-.8zm-2-7.4c-1.3 0-1.8.9-1.8 3.2 0 2.4.5 3.3 1.7 3.3 1.3 0 1.8-.9 1.8-3.2 0-2.4-.5-3.3-1.7-3.3zM10 15.7H5.5l-.8 2.6a1 1 0 0 1-1 .7h-.2a.7.7 0 0 1-.7-1l4-12a1 1 0 1 1 2 0l4 12a.7.7 0 0 1-.8 1h-.2a1 1 0 0 1-1-.7l-.8-2.6zm-.3-1.5l-2-6.5-1.9 6.5h3.9z" fill-rule="evenodd"/></svg>',
                      "character-count":
                        '<svg width="24" height="24"><path d="M4 11.5h16v1H4v-1zm4.8-6.8V10H7.7V5.8h-1v-1h2zM11 8.3V9h2v1h-3V7.7l2-1v-.9h-2v-1h3v2.4l-2 1zm6.3-3.4V10h-3.1V9h2.1V8h-2.1V6.8h2.1v-1h-2.1v-1h3.1zM5.8 16.4c0-.5.2-.8.5-1 .2-.2.6-.3 1.2-.3l.8.1c.2 0 .4.2.5.3l.4.4v2.8l.2.3H8.2v-.1-.2l-.6.3H7c-.4 0-.7 0-1-.2a1 1 0 0 1-.3-.9c0-.3 0-.6.3-.8.3-.2.7-.4 1.2-.4l.6-.2h.3v-.2l-.1-.2a.8.8 0 0 0-.5-.1 1 1 0 0 0-.4 0l-.3.4h-1zm2.3.8h-.2l-.2.1-.4.1a1 1 0 0 0-.4.2l-.2.2.1.3.5.1h.4l.4-.4v-.6zm2-3.4h1.2v1.7l.5-.3h.5c.5 0 .9.1 1.2.5.3.4.5.8.5 1.4 0 .6-.2 1.1-.5 1.5-.3.4-.7.6-1.3.6l-.6-.1-.4-.4v.4h-1.1v-5.4zm1.1 3.3c0 .3 0 .6.2.8a.7.7 0 0 0 1.2 0l.2-.8c0-.4 0-.6-.2-.8a.7.7 0 0 0-.6-.3l-.6.3-.2.8zm6.1-.5c0-.2 0-.3-.2-.4a.8.8 0 0 0-.5-.2c-.3 0-.5.1-.6.3l-.2.9c0 .3 0 .6.2.8.1.2.3.3.6.3.2 0 .4 0 .5-.2l.2-.4h1.1c0 .5-.3.8-.6 1.1a2 2 0 0 1-1.3.4c-.5 0-1-.2-1.3-.6a2 2 0 0 1-.5-1.4c0-.6.1-1.1.5-1.5.3-.4.8-.5 1.4-.5.5 0 1 0 1.2.3.4.3.5.7.5 1.2h-1v-.1z" fill-rule="evenodd"/></svg>',
                      "checklist-rtl":
                        '<svg width="24" height="24"><path d="M5 17h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm14.2 11c.2-.4.6-.5.9-.3.3.2.4.6.2 1L18 20c-.2.3-.7.4-1 0l-1.3-1.3a.7.7 0 0 1 0-1c.3-.2.7-.2 1 0l.7.9 1.7-2.8zm0-6c.2-.4.6-.5.9-.3.3.2.4.6.2 1L18 14c-.2.3-.7.4-1 0l-1.3-1.3a.7.7 0 0 1 0-1c.3-.2.7-.2 1 0l.7.9 1.7-2.8zm0-6c.2-.4.6-.5.9-.3.3.2.4.6.2 1L18 8c-.2.3-.7.4-1 0l-1.3-1.3a.7.7 0 0 1 0-1c.3-.2.7-.2 1 0l.7.9 1.7-2.8z" fill-rule="evenodd"/></svg>',
                      checklist:
                        '<svg width="24" height="24"><path d="M11 17h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm0-6h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2zM7.2 16c.2-.4.6-.5.9-.3.3.2.4.6.2 1L6 20c-.2.3-.7.4-1 0l-1.3-1.3a.7.7 0 0 1 0-1c.3-.2.7-.2 1 0l.7.9 1.7-2.8zm0-6c.2-.4.6-.5.9-.3.3.2.4.6.2 1L6 14c-.2.3-.7.4-1 0l-1.3-1.3a.7.7 0 0 1 0-1c.3-.2.7-.2 1 0l.7.9 1.7-2.8zm0-6c.2-.4.6-.5.9-.3.3.2.4.6.2 1L6 8c-.2.3-.7.4-1 0L3.8 6.9a.7.7 0 0 1 0-1c.3-.2.7-.2 1 0l.7.9 1.7-2.8z" fill-rule="evenodd"/></svg>',
                      checkmark:
                        '<svg width="24" height="24"><path d="M18.2 5.4a1 1 0 0 1 1.6 1.2l-8 12a1 1 0 0 1-1.5.1l-5-5a1 1 0 1 1 1.4-1.4l4.1 4.1 7.4-11z" fill-rule="nonzero"/></svg>',
                      "chevron-down":
                        '<svg width="10" height="10"><path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fill-rule="nonzero"/></svg>',
                      "chevron-left":
                        '<svg width="10" height="10"><path d="M7.8 1.3L4 5l3.8 3.7c.3.3.3.8 0 1-.4.4-.9.4-1.2 0L2.2 5.7a.8.8 0 0 1 0-1.2L6.6.2C7 0 7.4 0 7.8.2c.3.3.3.8 0 1.1z" fill-rule="nonzero"/></svg>',
                      "chevron-right":
                        '<svg width="10" height="10"><path d="M2.2 1.3a.8.8 0 0 1 0-1c.4-.4.9-.4 1.2 0l4.4 4.1c.3.4.3.9 0 1.2L3.4 9.8c-.3.3-.8.3-1.2 0a.8.8 0 0 1 0-1.1L6 5 2.2 1.3z" fill-rule="nonzero"/></svg>',
                      "chevron-up":
                        '<svg width="10" height="10"><path d="M8.7 7.8L5 4 1.3 7.8c-.3.3-.8.3-1 0a.8.8 0 0 1 0-1.2l4.1-4.4c.3-.3.9-.3 1.2 0l4.2 4.4c.3.3.3.9 0 1.2-.3.3-.8.3-1.1 0z" fill-rule="nonzero"/></svg>',
                      close:
                        '<svg width="24" height="24"><path d="M17.3 8.2L13.4 12l3.9 3.8a1 1 0 0 1-1.5 1.5L12 13.4l-3.8 3.9a1 1 0 0 1-1.5-1.5l3.9-3.8-3.9-3.8a1 1 0 0 1 1.5-1.5l3.8 3.9 3.8-3.9a1 1 0 0 1 1.5 1.5z" fill-rule="evenodd"/></svg>',
                      "code-sample":
                        '<svg width="24" height="26"><path d="M7.1 11a2.8 2.8 0 0 1-.8 2 2.8 2.8 0 0 1 .8 2v1.7c0 .3.1.6.4.8.2.3.5.4.8.4.3 0 .4.2.4.4v.8c0 .2-.1.4-.4.4-.7 0-1.4-.3-2-.8-.5-.6-.8-1.3-.8-2V15c0-.3-.1-.6-.4-.8-.2-.3-.5-.4-.8-.4a.4.4 0 0 1-.4-.4v-.8c0-.2.2-.4.4-.4.3 0 .6-.1.8-.4.3-.2.4-.5.4-.8V9.3c0-.7.3-1.4.8-2 .6-.5 1.3-.8 2-.8.3 0 .4.2.4.4v.8c0 .2-.1.4-.4.4-.3 0-.6.1-.8.4-.3.2-.4.5-.4.8V11zm9.8 0V9.3c0-.3-.1-.6-.4-.8-.2-.3-.5-.4-.8-.4a.4.4 0 0 1-.4-.4V7c0-.2.1-.4.4-.4.7 0 1.4.3 2 .8.5.6.8 1.3.8 2V11c0 .3.1.6.4.8.2.3.5.4.8.4.2 0 .4.2.4.4v.8c0 .2-.2.4-.4.4-.3 0-.6.1-.8.4-.3.2-.4.5-.4.8v1.7c0 .7-.3 1.4-.8 2-.6.5-1.3.8-2 .8a.4.4 0 0 1-.4-.4v-.8c0-.2.1-.4.4-.4.3 0 .6-.1.8-.4.3-.2.4-.5.4-.8V15a2.8 2.8 0 0 1 .8-2 2.8 2.8 0 0 1-.8-2zm-3.3-.4c0 .4-.1.8-.5 1.1-.3.3-.7.5-1.1.5-.4 0-.8-.2-1.1-.5-.4-.3-.5-.7-.5-1.1 0-.5.1-.9.5-1.2.3-.3.7-.4 1.1-.4.4 0 .8.1 1.1.4.4.3.5.7.5 1.2zM12 13c.4 0 .8.1 1.1.5.4.3.5.7.5 1.1 0 1-.1 1.6-.5 2a3 3 0 0 1-1.1 1c-.4.3-.8.4-1.1.4a.5.5 0 0 1-.5-.5V17a3 3 0 0 0 1-.2l.6-.6c-.6 0-1-.2-1.3-.5-.2-.3-.3-.7-.3-1 0-.5.1-1 .5-1.2.3-.4.7-.5 1.1-.5z" fill-rule="evenodd"/></svg>',
                      "color-levels":
                        '<svg width="24" height="24"><path d="M17.5 11.4A9 9 0 0 1 18 14c0 .5 0 1-.2 1.4 0 .4-.3.9-.5 1.3a6.2 6.2 0 0 1-3.7 3 5.7 5.7 0 0 1-3.2 0A5.9 5.9 0 0 1 7.6 18a6.2 6.2 0 0 1-1.4-2.6 6.7 6.7 0 0 1 0-2.8c0-.4.1-.9.3-1.3a13.6 13.6 0 0 1 2.3-4A20 20 0 0 1 12 4a26.4 26.4 0 0 1 3.2 3.4 18.2 18.2 0 0 1 2.3 4zm-2 4.5c.4-.7.5-1.4.5-2a7.3 7.3 0 0 0-1-3.2c.2.6.2 1.2.2 1.9a4.5 4.5 0 0 1-1.3 3 5.3 5.3 0 0 1-2.3 1.5 4.9 4.9 0 0 1-2 .1 4.3 4.3 0 0 0 2.4.8 4 4 0 0 0 2-.6 4 4 0 0 0 1.5-1.5z" fill-rule="evenodd"/></svg>',
                      "color-picker":
                        '<svg width="24" height="24"><path d="M12 3a9 9 0 0 0 0 18 1.5 1.5 0 0 0 1.1-2.5c-.2-.3-.4-.6-.4-1 0-.8.7-1.5 1.5-1.5H16a5 5 0 0 0 5-5c0-4.4-4-8-9-8zm-5.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill-rule="nonzero"/></svg>',
                      "color-swatch-remove-color":
                        '<svg width="24" height="24"><path stroke="#000" stroke-width="2" d="M21 3L3 21" fill-rule="evenodd"/></svg>',
                      "color-swatch":
                        '<svg width="24" height="24"><rect x="3" y="3" width="18" height="18" rx="1" fill-rule="evenodd"/></svg>',
                      "comment-add":
                        '<svg width="24" height="24"><g fill-rule="nonzero"><path d="M9 19l3-2h7c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H5a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h4v2zm-2 4v-4H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-6.4L7 23z"/><path d="M13 10h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V8a1 1 0 0 1 2 0v2z"/></g></svg>',
                      comment:
                        '<svg width="24" height="24"><path fill-rule="nonzero" d="M9 19l3-2h7c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H5a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h4v2zm-2 4v-4H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-6.4L7 23z"/></svg>',
                      contrast:
                        '<svg width="24" height="24"><path d="M12 4a7.8 7.8 0 0 1 5.7 2.3A8 8 0 1 1 12 4zm-6 8a6 6 0 0 0 6 6V6a6 6 0 0 0-6 6z" fill-rule="evenodd"/></svg>',
                      copy:
                        '<svg width="24" height="24"><path d="M16 3H6a2 2 0 0 0-2 2v11h2V5h10V3zm1 4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9c0-1.2.9-2 2-2h7zm0 12V9h-7v10h7z" fill-rule="nonzero"/></svg>',
                      crop:
                        '<svg width="24" height="24"><path d="M17 8v7h2c.6 0 1 .4 1 1s-.4 1-1 1h-2v2c0 .6-.4 1-1 1a1 1 0 0 1-1-1v-2H7V9H5a1 1 0 1 1 0-2h2V5c0-.6.4-1 1-1s1 .4 1 1v2h7l3-3 1 1-3 3zM9 9v5l5-5H9zm1 6h5v-5l-5 5z" fill-rule="evenodd"/></svg>',
                      cut:
                        '<svg width="24" height="24"><path d="M18 15c.6.7 1 1.4 1 2.3 0 .8-.2 1.5-.7 2l-.8.5-1 .2c-.4 0-.8 0-1.2-.3a3.9 3.9 0 0 1-2.1-2.2c-.2-.5-.3-1-.2-1.5l-1-1-1 1c0 .5 0 1-.2 1.5-.1.5-.4 1-.9 1.4-.3.4-.7.6-1.2.8l-1.2.3c-.4 0-.7 0-1-.2-.3 0-.6-.3-.8-.5-.5-.5-.8-1.2-.7-2 0-.9.4-1.6 1-2.2A3.7 3.7 0 0 1 8.6 14H9l1-1-4-4-.5-1a3.3 3.3 0 0 1 0-2c0-.4.3-.7.5-1l6 6 6-6 .5 1a3.3 3.3 0 0 1 0 2c0 .4-.3.7-.5 1l-4 4 1 1h.5c.4 0 .8 0 1.2.3.5.2.9.4 1.2.8zm-8.5 2.2l.1-.4v-.3-.4a1 1 0 0 0-.2-.5 1 1 0 0 0-.4-.2 1.6 1.6 0 0 0-.8 0 2.6 2.6 0 0 0-.8.3 2.5 2.5 0 0 0-.9 1.1l-.1.4v.7l.2.5.5.2h.7a2.5 2.5 0 0 0 .8-.3 2.8 2.8 0 0 0 1-1zm2.5-2.8c.4 0 .7-.1 1-.4.3-.3.4-.6.4-1s-.1-.7-.4-1c-.3-.3-.6-.4-1-.4s-.7.1-1 .4c-.3.3-.4.6-.4 1s.1.7.4 1c.3.3.6.4 1 .4zm5.4 4l.2-.5v-.4-.3a2.6 2.6 0 0 0-.3-.8 2.4 2.4 0 0 0-.7-.7 2.5 2.5 0 0 0-.8-.3 1.5 1.5 0 0 0-.8 0 1 1 0 0 0-.4.2 1 1 0 0 0-.2.5 1.5 1.5 0 0 0 0 .7v.4l.3.4.3.4a2.8 2.8 0 0 0 .8.5l.4.1h.7l.5-.2z" fill-rule="evenodd"/></svg>',
                      "document-properties":
                        '<svg width="24" height="24"><path d="M14.4 3H7a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V7.6L14.4 3zM17 19H7V5h6v4h4v10z" fill-rule="nonzero"/></svg>',
                      drag:
                        '<svg width="24" height="24"><path d="M13 5h2v2h-2V5zm0 4h2v2h-2V9zM9 9h2v2H9V9zm4 4h2v2h-2v-2zm-4 0h2v2H9v-2zm0 4h2v2H9v-2zm4 0h2v2h-2v-2zM9 5h2v2H9V5z" fill-rule="evenodd"/></svg>',
                      duplicate:
                        '<svg width="24" height="24"><g fill-rule="nonzero"><path d="M16 3v2H6v11H4V5c0-1.1.9-2 2-2h10zm3 8h-2V9h-7v10h9a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9c0-1.2.9-2 2-2h7a2 2 0 0 1 2 2v2z"/><path d="M17 14h1a1 1 0 0 1 0 2h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1z"/></g></svg>',
                      "edit-block":
                        '<svg width="24" height="24"><path fill-rule="nonzero" d="M19.8 8.8l-9.4 9.4c-.2.2-.5.4-.9.4l-5.4 1.2 1.2-5.4.5-.8 9.4-9.4c.7-.7 1.8-.7 2.5 0l2.1 2.1c.7.7.7 1.8 0 2.5zm-2-.2l1-.9v-.3l-2.2-2.2a.3.3 0 0 0-.3 0l-1 1L18 8.5zm-1 1l-2.5-2.4-6 6 2.5 2.5 6-6zm-7 7.1l-2.6-2.4-.3.3-.1.2-.7 3 3.1-.6h.1l.4-.5z"/></svg>',
                      "edit-image":
                        '<svg width="24" height="24"><path d="M18 16h2V7a2 2 0 0 0-2-2H7v2h11v9zM6 17h15a1 1 0 0 1 0 2h-1v1a1 1 0 0 1-2 0v-1H6a2 2 0 0 1-2-2V7H3a1 1 0 1 1 0-2h1V4a1 1 0 1 1 2 0v13zm3-5.3l1.3 2 3-4.7 3.7 6H7l2-3.3z" fill-rule="nonzero"/></svg>',
                      "embed-page":
                        '<svg width="24" height="24"><path d="M19 6V5H5v14h2A13 13 0 0 1 19 6zm0 1.4c-.8.8-1.6 2.4-2.2 4.6H19V7.4zm0 5.6h-2.4c-.4 1.8-.6 3.8-.6 6h3v-6zm-4 6c0-2.2.2-4.2.6-6H13c-.7 1.8-1.1 3.8-1.1 6h3zm-4 0c0-2.2.4-4.2 1-6H9.6A12 12 0 0 0 8 19h3zM4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V4c0-.6.4-1 1-1zm11.8 9c.4-1.9 1-3.4 1.8-4.5a9.2 9.2 0 0 0-4 4.5h2.2zm-3.4 0a12 12 0 0 1 2.8-4 12 12 0 0 0-5 4h2.2z" fill-rule="nonzero"/></svg>',
                      embed:
                        '<svg width="24" height="24"><path d="M4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V4c0-.6.4-1 1-1zm1 2v14h14V5H5zm4.8 2.6l5.6 4a.5.5 0 0 1 0 .8l-5.6 4A.5.5 0 0 1 9 16V8a.5.5 0 0 1 .8-.4z" fill-rule="nonzero"/></svg>',
                      emoji:
                        '<svg width="24" height="24"><path d="M9 11c.6 0 1-.4 1-1s-.4-1-1-1a1 1 0 0 0-1 1c0 .6.4 1 1 1zm6 0c.6 0 1-.4 1-1s-.4-1-1-1a1 1 0 0 0-1 1c0 .6.4 1 1 1zm-3 5.5c2.1 0 4-1.5 4.4-3.5H7.6c.5 2 2.3 3.5 4.4 3.5zM12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 14.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z" fill-rule="nonzero"/></svg>',
                      fill:
                        '<svg width="24" height="26"><path d="M16.6 12l-9-9-1.4 1.4 2.4 2.4-5.2 5.1c-.5.6-.5 1.6 0 2.2L9 19.6a1.5 1.5 0 0 0 2.2 0l5.5-5.5c.5-.6.5-1.6 0-2.2zM5.2 13L10 8.2l4.8 4.8H5.2zM19 14.5s-2 2.2-2 3.5c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.3-2-3.5-2-3.5z" fill-rule="nonzero"/></svg>',
                      "flip-horizontally":
                        '<svg width="24" height="24"><path d="M14 19h2v-2h-2v2zm4-8h2V9h-2v2zM4 7v10c0 1.1.9 2 2 2h3v-2H6V7h3V5H6a2 2 0 0 0-2 2zm14-2v2h2a2 2 0 0 0-2-2zm-7 16h2V3h-2v18zm7-6h2v-2h-2v2zm-4-8h2V5h-2v2zm4 12a2 2 0 0 0 2-2h-2v2z" fill-rule="nonzero"/></svg>',
                      "flip-vertically":
                        '<svg width="24" height="24"><path d="M5 14v2h2v-2H5zm8 4v2h2v-2h-2zm4-14H7a2 2 0 0 0-2 2v3h2V6h10v3h2V6a2 2 0 0 0-2-2zm2 14h-2v2a2 2 0 0 0 2-2zM3 11v2h18v-2H3zm6 7v2h2v-2H9zm8-4v2h2v-2h-2zM5 18c0 1.1.9 2 2 2v-2H5z" fill-rule="nonzero"/></svg>',
                      "format-painter":
                        '<svg width="24" height="24"><path d="M18 5V4c0-.5-.4-1-1-1H5a1 1 0 0 0-1 1v4c0 .6.5 1 1 1h12c.6 0 1-.4 1-1V7h1v4H9v9c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-7h8V5h-3z" fill-rule="nonzero"/></svg>',
                      fullscreen:
                        '<svg width="24" height="24"><path d="M15.3 10l-1.2-1.3 2.9-3h-2.3a.9.9 0 1 1 0-1.7H19c.5 0 .9.4.9.9v4.4a.9.9 0 1 1-1.8 0V7l-2.9 3zm0 4l3 3v-2.3a.9.9 0 1 1 1.7 0V19c0 .5-.4.9-.9.9h-4.4a.9.9 0 1 1 0-1.8H17l-3-2.9 1.3-1.2zM10 15.4l-2.9 3h2.3a.9.9 0 1 1 0 1.7H5a.9.9 0 0 1-.9-.9v-4.4a.9.9 0 1 1 1.8 0V17l2.9-3 1.2 1.3zM8.7 10L5.7 7v2.3a.9.9 0 0 1-1.7 0V5c0-.5.4-.9.9-.9h4.4a.9.9 0 0 1 0 1.8H7l3 2.9-1.3 1.2z" fill-rule="nonzero"/></svg>',
                      gallery:
                        '<svg width="24" height="24"><path fill-rule="nonzero" d="M5 15.7l2.3-2.2c.3-.3.7-.3 1 0L11 16l5.1-5c.3-.4.8-.4 1 0l2 1.9V8H5v7.7zM5 18V19h3l1.8-1.9-2-2L5 17.9zm14-3l-2.5-2.4-6.4 6.5H19v-4zM4 6h16c.6 0 1 .4 1 1v13c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V7c0-.6.4-1 1-1zm6 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM4.5 4h15a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1zm2-2h11a.5.5 0 1 1 0 1h-11a.5.5 0 0 1 0-1z"/></svg>',
                      gamma:
                        '<svg width="24" height="24"><path d="M4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V4c0-.6.4-1 1-1zm1 2v14h14V5H5zm6.5 11.8V14L9.2 8.7a5.1 5.1 0 0 0-.4-.8l-.1-.2H8 8v-1l.3-.1.3-.1h.7a1 1 0 0 1 .6.5l.1.3a8.5 8.5 0 0 1 .3.6l1.9 4.6 2-5.2a1 1 0 0 1 1-.6.5.5 0 0 1 .5.6L13 14v2.8a.7.7 0 0 1-1.4 0z" fill-rule="nonzero"/></svg>',
                      help:
                        '<svg width="24" height="24"><g fill-rule="evenodd"><path d="M12 5.5a6.5 6.5 0 0 0-6 9 6.3 6.3 0 0 0 1.4 2l1 1a6.3 6.3 0 0 0 3.6 1 6.5 6.5 0 0 0 6-9 6.3 6.3 0 0 0-1.4-2l-1-1a6.3 6.3 0 0 0-3.6-1zM12 4a7.8 7.8 0 0 1 5.7 2.3A8 8 0 1 1 12 4z"/><path d="M9.6 9.7a.7.7 0 0 1-.7-.8c0-1.1 1.5-1.8 3.2-1.8 1.8 0 3.2.8 3.2 2.4 0 1.4-.4 2.1-1.5 2.8-.2 0-.3.1-.3.2a2 2 0 0 0-.8.8.8.8 0 0 1-1.4-.6c.3-.7.8-1 1.3-1.5l.4-.2c.7-.4.8-.6.8-1.5 0-.5-.6-.9-1.7-.9-.5 0-1 .1-1.4.3-.2 0-.3.1-.3.2v-.2c0 .4-.4.8-.8.8z" fill-rule="nonzero"/><circle cx="12" cy="16" r="1"/></g></svg>',
                      "highlight-bg-color":
                        '<svg width="24" height="24"><g fill-rule="evenodd"><path id="tox-icon-highlight-bg-color__color" d="M3 18h18v3H3z"/><path fill-rule="nonzero" d="M7.7 16.7H3l3.3-3.3-.7-.8L10.2 8l4 4.1-4 4.2c-.2.2-.6.2-.8 0l-.6-.7-1.1 1.1zm5-7.5L11 7.4l3-2.9a2 2 0 0 1 2.6 0L18 6c.7.7.7 2 0 2.7l-2.9 2.9-1.8-1.8-.5-.6"/></g></svg>',
                      home:
                        '<svg width="24" height="24"><path fill-rule="nonzero" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>',
                      "horizontal-rule":
                        '<svg width="24" height="24"><path d="M4 11h16v2H4z" fill-rule="evenodd"/></svg>',
                      "image-options":
                        '<svg width="24" height="24"><path d="M6 10a2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2 2 2 0 0 0-2-2zm12 0a2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2 2 2 0 0 0-2-2zm-6 0a2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2 2 2 0 0 0-2-2z" fill-rule="nonzero"/></svg>',
                      image:
                        '<svg width="24" height="24"><path d="M5 15.7l3.3-3.2c.3-.3.7-.3 1 0L12 15l4.1-4c.3-.4.8-.4 1 0l2 1.9V5H5v10.7zM5 18V19h3l2.8-2.9-2-2L5 17.9zm14-3l-2.5-2.4-6.4 6.5H19v-4zM4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V4c0-.6.4-1 1-1zm6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill-rule="nonzero"/></svg>',
                      indent:
                        '<svg width="24" height="24"><path d="M7 5h12c.6 0 1 .4 1 1s-.4 1-1 1H7a1 1 0 1 1 0-2zm5 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 0 1 0-2zm0 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 0 1 0-2zm-5 4h12a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2zm-2.6-3.8L6.2 12l-1.8-1.2a1 1 0 0 1 1.2-1.6l3 2a1 1 0 0 1 0 1.6l-3 2a1 1 0 1 1-1.2-1.6z" fill-rule="evenodd"/></svg>',
                      info:
                        '<svg width="24" height="24"><path d="M12 4a7.8 7.8 0 0 1 5.7 2.3A8 8 0 1 1 12 4zm-1 3v2h2V7h-2zm3 10v-1h-1v-5h-3v1h1v4h-1v1h4z" fill-rule="evenodd"/></svg>',
                      "insert-character":
                        '<svg width="24" height="24"><path d="M15 18h4l1-2v4h-6v-3.3l1.4-1a6 6 0 0 0 1.8-2.9 6.3 6.3 0 0 0-.1-4.1 5.8 5.8 0 0 0-3-3.2c-.6-.3-1.3-.5-2.1-.5a5.1 5.1 0 0 0-3.9 1.8 6.3 6.3 0 0 0-1.3 6 6.2 6.2 0 0 0 1.8 3l1.4.9V20H4v-4l1 2h4v-.5l-2-1L5.4 15A6.5 6.5 0 0 1 4 11c0-1 .2-1.9.6-2.7A7 7 0 0 1 6.3 6C7.1 5.4 8 5 9 4.5c1-.3 2-.5 3.1-.5a8.8 8.8 0 0 1 5.7 2 7 7 0 0 1 1.7 2.3 6 6 0 0 1 .2 4.8c-.2.7-.6 1.3-1 1.9a7.6 7.6 0 0 1-3.6 2.5v.5z" fill-rule="evenodd"/></svg>',
                      "insert-time":
                        '<svg width="24" height="24"><g fill-rule="nonzero"><path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm0 2a9 9 0 1 1 0-18 9 9 0 0 1 0 18z"/><path d="M16 12h-3V7c0-.6-.4-1-1-1a1 1 0 0 0-1 1v7h5c.6 0 1-.4 1-1s-.4-1-1-1z"/></g></svg>',
                      invert:
                        '<svg width="24" height="24"><path d="M18 19.3L16.5 18a5.8 5.8 0 0 1-3.1 1.9 6.1 6.1 0 0 1-5.5-1.6A5.8 5.8 0 0 1 6 14v-.3l.1-1.2A13.9 13.9 0 0 1 7.7 9l-3-3 .7-.8 2.8 2.9 9 8.9 1.5 1.6-.7.6zm0-5.5v.3l-.1 1.1-.4 1-1.2-1.2a4.3 4.3 0 0 0 .2-1v-.2c0-.4 0-.8-.2-1.3l-.5-1.4a14.8 14.8 0 0 0-3-4.2L12 6a26.1 26.1 0 0 0-2.2 2.5l-1-1a20.9 20.9 0 0 1 2.9-3.3L12 4l1 .8a22.2 22.2 0 0 1 4 5.4c.6 1.2 1 2.4 1 3.6z" fill-rule="evenodd"/></svg>',
                      italic:
                        '<svg width="24" height="24"><path d="M16.7 4.7l-.1.9h-.3c-.6 0-1 0-1.4.3-.3.3-.4.6-.5 1.1l-2.1 9.8v.6c0 .5.4.8 1.4.8h.2l-.2.8H8l.2-.8h.2c1.1 0 1.8-.5 2-1.5l2-9.8.1-.5c0-.6-.4-.8-1.4-.8h-.3l.2-.9h5.8z" fill-rule="evenodd"/></svg>',
                      line:
                        '<svg width="24" height="24"><path d="M15 9l-8 8H4v-3l8-8 3 3zm1-1l-3-3 1-1h1c-.2 0 0 0 0 0l2 2s0 .2 0 0v1l-1 1zM4 18h16v2H4v-2z" fill-rule="evenodd"/></svg>',
                      link:
                        '<svg width="24" height="24"><path d="M6.2 12.3a1 1 0 0 1 1.4 1.4l-2.1 2a2 2 0 1 0 2.7 2.8l4.8-4.8a1 1 0 0 0 0-1.4 1 1 0 1 1 1.4-1.3 2.9 2.9 0 0 1 0 4L9.6 20a3.9 3.9 0 0 1-5.5-5.5l2-2zm11.6-.6a1 1 0 0 1-1.4-1.4l2-2a2 2 0 1 0-2.6-2.8L11 10.3a1 1 0 0 0 0 1.4A1 1 0 1 1 9.6 13a2.9 2.9 0 0 1 0-4L14.4 4a3.9 3.9 0 0 1 5.5 5.5l-2 2z" fill-rule="nonzero"/></svg>',
                      "list-bull-circle":
                        '<svg width="48" height="48"><g fill-rule="evenodd"><path d="M11 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM11 26a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM11 36a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" fill-rule="nonzero"/><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/></g></svg>',
                      "list-bull-default":
                        '<svg width="48" height="48"><g fill-rule="evenodd"><circle cx="11" cy="14" r="3"/><circle cx="11" cy="24" r="3"/><circle cx="11" cy="34" r="3"/><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/></g></svg>',
                      "list-bull-square":
                        '<svg width="48" height="48"><g fill-rule="evenodd"><path d="M8 11h6v6H8zM8 21h6v6H8zM8 31h6v6H8z"/><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/></g></svg>',
                      "list-num-default-rtl":
                        '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M8 12h22v4H8zM8 22h22v4H8zM8 32h22v4H8z"/><path d="M37.4 17v-4.8l-1.6 1v-1.1l1.6-1h1.2V17zM33.3 17.1c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm1.7 5.7c0-1.2 1-2 2.2-2 1.3 0 2.1.8 2.1 1.8 0 .7-.3 1.2-1.3 2.2l-1.2 1v.2h2.6v1h-4.3v-.9l2-1.9c.8-.8 1-1.1 1-1.5 0-.5-.4-.8-1-.8-.5 0-.9.3-.9.9H35zm-1.7 4.3c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm3.2 7.3v-1h.7c.6 0 1-.3 1-.8 0-.4-.4-.7-1-.7s-1 .3-1 .8H35c0-1.1 1-1.8 2.2-1.8 1.2 0 2.1.6 2.1 1.6 0 .7-.4 1.2-1 1.3v.1c.7.1 1.3.7 1.3 1.4 0 1-1 1.9-2.4 1.9-1.3 0-2.2-.8-2.3-2h1.2c0 .6.5 1 1.1 1 .6 0 1-.4 1-1 0-.5-.3-.8-1-.8h-.7zm-3.3 2.7c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.5 0 .8.3.8.7 0 .4-.3.7-.8.7z"/></g></svg>',
                      "list-num-default":
                        '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/><path d="M10 17v-4.8l-1.5 1v-1.1l1.6-1h1.2V17h-1.2zm3.6.1c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.5 0 .7.3.7.7 0 .4-.2.7-.7.7zm-5 5.7c0-1.2.8-2 2.1-2s2.1.8 2.1 1.8c0 .7-.3 1.2-1.4 2.2l-1.1 1v.2h2.6v1H8.6v-.9l2-1.9c.8-.8 1-1.1 1-1.5 0-.5-.4-.8-1-.8-.5 0-.9.3-.9.9H8.5zm6.3 4.3c-.5 0-.7-.3-.7-.7 0-.4.2-.7.7-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zM10 34.4v-1h.7c.6 0 1-.3 1-.8 0-.4-.4-.7-1-.7s-1 .3-1 .8H8.6c0-1.1 1-1.8 2.2-1.8 1.3 0 2.1.6 2.1 1.6 0 .7-.4 1.2-1 1.3v.1c.8.1 1.3.7 1.3 1.4 0 1-1 1.9-2.4 1.9-1.3 0-2.2-.8-2.3-2h1.2c0 .6.5 1 1.1 1 .7 0 1-.4 1-1 0-.5-.3-.8-1-.8h-.7zm4.7 2.7c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.5 0 .8.3.8.7 0 .4-.3.7-.8.7z"/></g></svg>',
                      "list-num-lower-alpha-rtl":
                        '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M8 12h22v4H8zM8 22h22v4H8zM8 32h22v4H8z"/><path d="M36.5 16c-.9 0-1.5-.5-1.5-1.3s.6-1.3 1.8-1.4h1v-.4c0-.4-.2-.6-.7-.6-.4 0-.7.1-.8.4h-1.1c0-.8.8-1.4 2-1.4S39 12 39 13V16h-1.2v-.6c-.3.4-.8.7-1.4.7zm.4-.8c.6 0 1-.4 1-.9V14h-1c-.5.1-.7.3-.7.6 0 .4.3.6.7.6zM33.1 16.1c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.5 0 .8.3.8.7 0 .4-.3.7-.8.7zM37.7 26c-.7 0-1.2-.2-1.5-.7v.7H35v-6.3h1.2v2.5c.3-.5.8-.9 1.5-.9 1.1 0 1.8 1 1.8 2.4 0 1.5-.7 2.4-1.8 2.4zm-.5-3.6c-.6 0-1 .5-1 1.3s.4 1.4 1 1.4c.7 0 1-.6 1-1.4 0-.8-.3-1.3-1-1.3zM33.2 26.1c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.5 0 .8.3.8.7 0 .4-.3.7-.8.7zm6 7h-1c-.1-.5-.4-.8-1-.8s-1 .5-1 1.4c0 1 .4 1.4 1 1.4.5 0 .9-.2 1-.7h1c0 1-.8 1.7-2 1.7-1.4 0-2.2-.9-2.2-2.4s.8-2.4 2.2-2.4c1.2 0 2 .7 2 1.7zm-6.1 3c-.5 0-.7-.3-.7-.7 0-.4.2-.7.7-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7z"/></g></svg>',
                      "list-num-lower-alpha":
                        '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/><path d="M10.3 15.2c.5 0 1-.4 1-.9V14h-1c-.5.1-.8.3-.8.6 0 .4.3.6.8.6zm-.4.9c-1 0-1.5-.6-1.5-1.4 0-.8.6-1.3 1.7-1.4h1.1v-.4c0-.4-.2-.6-.7-.6-.5 0-.8.1-.9.4h-1c0-.8.8-1.4 2-1.4 1.1 0 1.8.6 1.8 1.6V16h-1.1v-.6h-.1c-.2.4-.7.7-1.3.7zm4.6 0c-.5 0-.7-.3-.7-.7 0-.4.2-.7.7-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm-3.2 10c-.6 0-1.2-.3-1.4-.8v.7H8.5v-6.3H10v2.5c.3-.5.8-.9 1.4-.9 1.2 0 1.9 1 1.9 2.4 0 1.5-.7 2.4-1.9 2.4zm-.4-3.7c-.7 0-1 .5-1 1.3s.3 1.4 1 1.4c.6 0 1-.6 1-1.4 0-.8-.4-1.3-1-1.3zm4 3.7c-.5 0-.7-.3-.7-.7 0-.4.2-.7.7-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm-2.2 7h-1.2c0-.5-.4-.8-.9-.8-.6 0-1 .5-1 1.4 0 1 .4 1.4 1 1.4.5 0 .8-.2 1-.7h1c0 1-.8 1.7-2 1.7-1.4 0-2.2-.9-2.2-2.4s.8-2.4 2.2-2.4c1.2 0 2 .7 2 1.7zm1.8 3c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7z"/></g></svg>',
                      "list-num-lower-greek-rtl":
                        '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M8 12h22v4H8zM8 22h22v4H8zM8 32h22v4H8z"/><path d="M37.4 16c-1.2 0-2-.8-2-2.3 0-1.5.8-2.4 2-2.4.6 0 1 .4 1.3 1v-.9H40v3.2c0 .4.1.5.4.5h.2v.9h-.6c-.6 0-1-.2-1-.7h-.2c-.2.4-.7.8-1.3.8zm.3-1c.6 0 1-.5 1-1.3s-.4-1.3-1-1.3-1 .5-1 1.3.4 1.4 1 1.4zM33.3 16.1c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zM36 21.9c0-1.5.8-2.3 2.1-2.3 1.2 0 2 .6 2 1.6 0 .6-.3 1-.9 1.3.9.3 1.3.8 1.3 1.7 0 1.2-.7 1.9-1.8 1.9-.6 0-1.1-.3-1.4-.8v2.2H36V22zm1.8 1.2v-1h.3c.5 0 .9-.2.9-.7 0-.5-.3-.8-.9-.8-.5 0-.8.3-.8 1v2.2c0 .8.4 1.3 1 1.3s1-.4 1-1-.4-1-1.2-1h-.3zM33.3 26.1c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zM37.1 34.6L34.8 30h1.4l1.7 3.5 1.7-3.5h1.1l-2.2 4.6v.1c.5.8.7 1.4.7 1.8 0 .4-.2.8-.4 1-.2.2-.6.3-1 .3-.9 0-1.3-.4-1.3-1.2 0-.5.2-1 .5-1.7l.1-.2zm.7 1a2 2 0 0 0-.4.9c0 .3.1.4.4.4.3 0 .4-.1.4-.4 0-.2-.1-.6-.4-1zM33.3 36.1c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7z"/></g></svg>',
                      "list-num-lower-greek":
                        '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/><path d="M10.5 15c.7 0 1-.5 1-1.3s-.3-1.3-1-1.3c-.5 0-.9.5-.9 1.3s.4 1.4 1 1.4zm-.3 1c-1.1 0-1.8-.8-1.8-2.3 0-1.5.7-2.4 1.8-2.4.7 0 1.1.4 1.3 1h.1v-.9h1.2v3.2c0 .4.1.5.4.5h.2v.9h-.6c-.6 0-1-.2-1.1-.7h-.1c-.2.4-.7.8-1.4.8zm5 .1c-.5 0-.8-.3-.8-.7 0-.4.3-.7.7-.7.5 0 .8.3.8.7 0 .4-.3.7-.8.7zm-4.9 7v-1h.3c.6 0 1-.2 1-.7 0-.5-.4-.8-1-.8-.5 0-.8.3-.8 1v2.2c0 .8.4 1.3 1.1 1.3.6 0 1-.4 1-1s-.5-1-1.3-1h-.3zM8.6 22c0-1.5.7-2.3 2-2.3 1.2 0 2 .6 2 1.6 0 .6-.3 1-.8 1.3.8.3 1.3.8 1.3 1.7 0 1.2-.8 1.9-1.9 1.9-.6 0-1.1-.3-1.3-.8v2.2H8.5V22zm6.2 4.2c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.5 0 .7.3.7.7 0 .4-.2.7-.7.7zm-4.5 8.5L8 30h1.4l1.7 3.5 1.7-3.5h1.1l-2.2 4.6v.1c.5.8.7 1.4.7 1.8 0 .4-.1.8-.4 1-.2.2-.6.3-1 .3-.9 0-1.3-.4-1.3-1.2 0-.5.2-1 .5-1.7l.1-.2zm.7 1a2 2 0 0 0-.4.9c0 .3.1.4.4.4.3 0 .4-.1.4-.4 0-.2-.1-.6-.4-1zm4.5.5c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7z"/></g></svg>',
                      "list-num-lower-roman-rtl":
                        '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M8 12h22v4H8zM8 22h22v4H8zM8 32h22v4H8z"/><path d="M32.9 16v-1.2h-1.3V16H33zm0 10v-1.2h-1.3V26H33zm0 10v-1.2h-1.3V36H33z"/><path fill-rule="nonzero" d="M36 21h-1.5v5H36zM36 31h-1.5v5H36zM39 21h-1.5v5H39zM39 31h-1.5v5H39zM42 31h-1.5v5H42zM36 11h-1.5v5H36zM36 19h-1.5v1H36zM36 29h-1.5v1H36zM39 19h-1.5v1H39zM39 29h-1.5v1H39zM42 29h-1.5v1H42zM36 9h-1.5v1H36z"/></g></svg>',
                      "list-num-lower-roman":
                        '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/><path d="M15.1 16v-1.2h1.3V16H15zm0 10v-1.2h1.3V26H15zm0 10v-1.2h1.3V36H15z"/><path fill-rule="nonzero" d="M12 21h1.5v5H12zM12 31h1.5v5H12zM9 21h1.5v5H9zM9 31h1.5v5H9zM6 31h1.5v5H6zM12 11h1.5v5H12zM12 19h1.5v1H12zM12 29h1.5v1H12zM9 19h1.5v1H9zM9 29h1.5v1H9zM6 29h1.5v1H6zM12 9h1.5v1H12z"/></g></svg>',
                      "list-num-upper-alpha-rtl":
                        '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M8 12h22v4H8zM8 22h22v4H8zM8 32h22v4H8z"/><path d="M39.3 17l-.5-1.4h-2l-.5 1.4H35l2-6h1.6l2 6h-1.3zm-1.6-4.7l-.7 2.3h1.6l-.8-2.3zM33.4 17c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.5 0 .7.3.7.7 0 .4-.2.7-.7.7zm4.7 9.9h-2.7v-6H38c1.2 0 1.9.6 1.9 1.5 0 .6-.5 1.2-1 1.3.7.1 1.3.7 1.3 1.5 0 1-.8 1.7-2 1.7zm-1.4-5v1.5h1c.6 0 1-.3 1-.8 0-.4-.4-.7-1-.7h-1zm0 4h1.1c.7 0 1.1-.3 1.1-.8 0-.6-.4-.9-1.1-.9h-1.1V26zM33 27.1c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm4.9 10c-1.8 0-2.8-1.1-2.8-3.1s1-3.1 2.8-3.1c1.4 0 2.5.9 2.6 2.2h-1.3c0-.7-.6-1.1-1.3-1.1-1 0-1.6.7-1.6 2s.6 2 1.6 2c.7 0 1.2-.4 1.4-1h1.2c-.1 1.3-1.2 2.2-2.6 2.2zm-4.5 0c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7z"/></g></svg>',
                      "list-num-upper-alpha":
                        '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/><path d="M12.6 17l-.5-1.4h-2L9.5 17H8.3l2-6H12l2 6h-1.3zM11 12.3l-.7 2.3h1.6l-.8-2.3zm4.7 4.8c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.5 0 .7.3.7.7 0 .4-.2.7-.7.7zM11.4 27H8.7v-6h2.6c1.2 0 1.9.6 1.9 1.5 0 .6-.5 1.2-1 1.3.7.1 1.3.7 1.3 1.5 0 1-.8 1.7-2 1.7zM10 22v1.5h1c.6 0 1-.3 1-.8 0-.4-.4-.7-1-.7h-1zm0 4H11c.7 0 1.1-.3 1.1-.8 0-.6-.4-.9-1.1-.9H10V26zm5.4 1.1c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm-4.1 10c-1.8 0-2.8-1.1-2.8-3.1s1-3.1 2.8-3.1c1.4 0 2.5.9 2.6 2.2h-1.3c0-.7-.6-1.1-1.3-1.1-1 0-1.6.7-1.6 2s.6 2 1.6 2c.7 0 1.2-.4 1.4-1h1.2c-.1 1.3-1.2 2.2-2.6 2.2zm4.5 0c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7z"/></g></svg>',
                      "list-num-upper-roman-rtl":
                        '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M8 12h22v4H8zM8 22h22v4H8zM8 32h22v4H8z"/><path d="M31.6 17v-1.2H33V17h-1.3zm0 10v-1.2H33V27h-1.3zm0 10v-1.2H33V37h-1.3z"/><path fill-rule="nonzero" d="M34.5 20H36v7h-1.5zM34.5 30H36v7h-1.5zM37.5 20H39v7h-1.5zM37.5 30H39v7h-1.5zM40.5 30H42v7h-1.5zM34.5 10H36v7h-1.5z"/></g></svg>',
                      "list-num-upper-roman":
                        '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/><path d="M15.1 17v-1.2h1.3V17H15zm0 10v-1.2h1.3V27H15zm0 10v-1.2h1.3V37H15z"/><path fill-rule="nonzero" d="M12 20h1.5v7H12zM12 30h1.5v7H12zM9 20h1.5v7H9zM9 30h1.5v7H9zM6 30h1.5v7H6zM12 10h1.5v7H12z"/></g></svg>',
                      lock:
                        '<svg width="24" height="24"><path d="M16.3 11c.2 0 .3 0 .5.2l.2.6v7.4c0 .3 0 .4-.2.6l-.6.2H7.8c-.3 0-.4 0-.6-.2a.7.7 0 0 1-.2-.6v-7.4c0-.3 0-.4.2-.6l.5-.2H8V8c0-.8.3-1.5.9-2.1.6-.6 1.3-.9 2.1-.9h2c.8 0 1.5.3 2.1.9.6.6.9 1.3.9 2.1v3h.3zM10 8v3h4V8a1 1 0 0 0-.3-.7A1 1 0 0 0 13 7h-2a1 1 0 0 0-.7.3 1 1 0 0 0-.3.7z" fill-rule="evenodd"/></svg>',
                      ltr:
                        '<svg width="24" height="24"><path d="M11 5h7a1 1 0 0 1 0 2h-1v11a1 1 0 0 1-2 0V7h-2v11a1 1 0 0 1-2 0v-6c-.5 0-1 0-1.4-.3A3.4 3.4 0 0 1 7.8 10a3.3 3.3 0 0 1 0-2.8 3.4 3.4 0 0 1 1.8-1.8L11 5zM4.4 16.2L6.2 15l-1.8-1.2a1 1 0 0 1 1.2-1.6l3 2a1 1 0 0 1 0 1.6l-3 2a1 1 0 1 1-1.2-1.6z" fill-rule="evenodd"/></svg>',
                      "more-drawer":
                        '<svg width="24" height="24"><path d="M6 10a2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2 2 2 0 0 0-2-2zm12 0a2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2 2 2 0 0 0-2-2zm-6 0a2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2 2 2 0 0 0-2-2z" fill-rule="nonzero"/></svg>',
                      "new-document":
                        '<svg width="24" height="24"><path d="M14.4 3H7a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V7.6L14.4 3zM17 19H7V5h6v4h4v10z" fill-rule="nonzero"/></svg>',
                      "new-tab":
                        '<svg width="24" height="24"><path d="M15 13l2-2v8H5V7h8l-2 2H7v8h8v-4zm4-8v5.5l-2-2-5.6 5.5H10v-1.4L15.5 7l-2-2H19z" fill-rule="evenodd"/></svg>',
                      "non-breaking":
                        '<svg width="24" height="24"><path d="M11 11H8a1 1 0 1 1 0-2h3V6c0-.6.4-1 1-1s1 .4 1 1v3h3c.6 0 1 .4 1 1s-.4 1-1 1h-3v3c0 .6-.4 1-1 1a1 1 0 0 1-1-1v-3zm10 4v5H3v-5c0-.6.4-1 1-1s1 .4 1 1v3h14v-3c0-.6.4-1 1-1s1 .4 1 1z" fill-rule="evenodd"/></svg>',
                      notice:
                        '<svg width="24" height="24"><path d="M17.8 9.8L15.4 4 20 8.5v7L15.5 20h-7L4 15.5v-7L8.5 4h7l2.3 5.8zm0 0l2.2 5.7-2.3-5.8zM13 17v-2h-2v2h2zm0-4V7h-2v6h2z" fill-rule="evenodd"/></svg>',
                      "ordered-list-rtl":
                        '<svg width="24" height="24"><path d="M6 17h8a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2zm0-6h8a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2zm0-6h8a1 1 0 0 1 0 2H6a1 1 0 1 1 0-2zm13-1v3.5a.5.5 0 1 1-1 0V5h-.5a.5.5 0 1 1 0-1H19zm-1 8.8l.2.2h1.3a.5.5 0 1 1 0 1h-1.6a1 1 0 0 1-.9-1V13c0-.4.3-.8.6-1l1.2-.4.2-.3a.2.2 0 0 0-.2-.2h-1.3a.5.5 0 0 1-.5-.5c0-.3.2-.5.5-.5h1.6c.5 0 .9.4.9 1v.1c0 .4-.3.8-.6 1l-1.2.4-.2.3zm2 4.2v2c0 .6-.4 1-1 1h-1.5a.5.5 0 0 1 0-1h1.2a.3.3 0 1 0 0-.6h-1.3a.4.4 0 1 1 0-.8h1.3a.3.3 0 0 0 0-.6h-1.2a.5.5 0 1 1 0-1H19c.6 0 1 .4 1 1z" fill-rule="evenodd"/></svg>',
                      "ordered-list":
                        '<svg width="24" height="24"><path d="M10 17h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 1 1 0-2zM6 4v3.5c0 .3-.2.5-.5.5a.5.5 0 0 1-.5-.5V5h-.5a.5.5 0 0 1 0-1H6zm-1 8.8l.2.2h1.3c.3 0 .5.2.5.5s-.2.5-.5.5H4.9a1 1 0 0 1-.9-1V13c0-.4.3-.8.6-1l1.2-.4.2-.3a.2.2 0 0 0-.2-.2H4.5a.5.5 0 0 1-.5-.5c0-.3.2-.5.5-.5h1.6c.5 0 .9.4.9 1v.1c0 .4-.3.8-.6 1l-1.2.4-.2.3zM7 17v2c0 .6-.4 1-1 1H4.5a.5.5 0 0 1 0-1h1.2c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.4a.4.4 0 1 1 0-.8h1.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.5a.5.5 0 1 1 0-1H6c.6 0 1 .4 1 1z" fill-rule="evenodd"/></svg>',
                      orientation:
                        '<svg width="24" height="24"><path d="M7.3 6.4L1 13l6.4 6.5 6.5-6.5-6.5-6.5zM3.7 13l3.6-3.7L11 13l-3.7 3.7-3.6-3.7zM12 6l2.8 2.7c.3.3.3.8 0 1-.3.4-.9.4-1.2 0L9.2 5.7a.8.8 0 0 1 0-1.2L13.6.2c.3-.3.9-.3 1.2 0 .3.3.3.8 0 1.1L12 4h1a9 9 0 1 1-4.3 16.9l1.5-1.5A7 7 0 1 0 13 6h-1z" fill-rule="nonzero"/></svg>',
                      outdent:
                        '<svg width="24" height="24"><path d="M7 5h12c.6 0 1 .4 1 1s-.4 1-1 1H7a1 1 0 1 1 0-2zm5 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 0 1 0-2zm0 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 0 1 0-2zm-5 4h12a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2zm1.6-3.8a1 1 0 0 1-1.2 1.6l-3-2a1 1 0 0 1 0-1.6l3-2a1 1 0 0 1 1.2 1.6L6.8 12l1.8 1.2z" fill-rule="evenodd"/></svg>',
                      "page-break":
                        '<svg width="24" height="24"><g fill-rule="evenodd"><path d="M5 11c.6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1 0-2zm3 0h1c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 0 1 0-2zm4 0c.6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1 0-2zm3 0h1c.6 0 1 .4 1 1s-.4 1-1 1h-1a1 1 0 0 1 0-2zm4 0c.6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1 0-2zM7 3v5h10V3c0-.6.4-1 1-1s1 .4 1 1v7H5V3c0-.6.4-1 1-1s1 .4 1 1zM6 22a1 1 0 0 1-1-1v-7h14v7c0 .6-.4 1-1 1a1 1 0 0 1-1-1v-5H7v5c0 .6-.4 1-1 1z"/></g></svg>',
                      paragraph:
                        '<svg width="24" height="24"><path d="M10 5h7a1 1 0 0 1 0 2h-1v11a1 1 0 0 1-2 0V7h-2v11a1 1 0 0 1-2 0v-6c-.5 0-1 0-1.4-.3A3.4 3.4 0 0 1 6.8 10a3.3 3.3 0 0 1 0-2.8 3.4 3.4 0 0 1 1.8-1.8L10 5z" fill-rule="evenodd"/></svg>',
                      "paste-text":
                        '<svg width="24" height="24"><path d="M18 9V5h-2v1c0 .6-.4 1-1 1H9a1 1 0 0 1-1-1V5H6v13h3V9h9zM9 20H6a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.2A3 3 0 0 1 12 1a3 3 0 0 1 2.8 2H18a2 2 0 0 1 2 2v4h1v12H9v-1zm1.5-9.5v9h9v-9h-9zM12 3a1 1 0 0 0-1 1c0 .5.4 1 1 1s1-.5 1-1-.4-1-1-1zm0 9h6v2h-.5l-.5-1h-1v4h.8v1h-3.6v-1h.8v-4h-1l-.5 1H12v-2z" fill-rule="nonzero"/></svg>',
                      paste:
                        '<svg width="24" height="24"><path d="M18 9V5h-2v1c0 .6-.4 1-1 1H9a1 1 0 0 1-1-1V5H6v13h3V9h9zM9 20H6a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.2A3 3 0 0 1 12 1a3 3 0 0 1 2.8 2H18a2 2 0 0 1 2 2v4h1v12H9v-1zm1.5-9.5v9h9v-9h-9zM12 3a1 1 0 0 0-1 1c0 .5.4 1 1 1s1-.5 1-1-.4-1-1-1z" fill-rule="nonzero"/></svg>',
                      "permanent-pen":
                        '<svg width="24" height="24"><path d="M10.5 17.5L8 20H3v-3l3.5-3.5a2 2 0 0 1 0-3L14 3l1 1-7.3 7.3a1 1 0 0 0 0 1.4l3.6 3.6c.4.4 1 .4 1.4 0L20 9l1 1-7.6 7.6a2 2 0 0 1-2.8 0l-.1-.1z" fill-rule="nonzero"/></svg>',
                      plus:
                        '<svg width="24" height="24"><g fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="#000" stroke-width="2"><path d="M12 5v14M5 12h14"/></g></svg>',
                      preferences:
                        '<svg width="24" height="24"><path d="M20.1 13.5l-1.9.2a5.8 5.8 0 0 1-.6 1.5l1.2 1.5c.4.4.3 1 0 1.4l-.7.7a1 1 0 0 1-1.4 0l-1.5-1.2a6.2 6.2 0 0 1-1.5.6l-.2 1.9c0 .5-.5.9-1 .9h-1a1 1 0 0 1-1-.9l-.2-1.9a5.8 5.8 0 0 1-1.5-.6l-1.5 1.2a1 1 0 0 1-1.4 0l-.7-.7a1 1 0 0 1 0-1.4l1.2-1.5a6.2 6.2 0 0 1-.6-1.5l-1.9-.2a1 1 0 0 1-.9-1v-1c0-.5.4-1 .9-1l1.9-.2a5.8 5.8 0 0 1 .6-1.5L5.2 7.3a1 1 0 0 1 0-1.4l.7-.7a1 1 0 0 1 1.4 0l1.5 1.2a6.2 6.2 0 0 1 1.5-.6l.2-1.9c0-.5.5-.9 1-.9h1c.5 0 1 .4 1 .9l.2 1.9a5.8 5.8 0 0 1 1.5.6l1.5-1.2a1 1 0 0 1 1.4 0l.7.7c.3.4.4 1 0 1.4l-1.2 1.5a6.2 6.2 0 0 1 .6 1.5l1.9.2c.5 0 .9.5.9 1v1c0 .5-.4 1-.9 1zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill-rule="evenodd"/></svg>',
                      preview:
                        '<svg width="24" height="24"><path d="M3.5 12.5c.5.8 1.1 1.6 1.8 2.3 2 2 4.2 3.2 6.7 3.2s4.7-1.2 6.7-3.2a16.2 16.2 0 0 0 2.1-2.8 15.7 15.7 0 0 0-2.1-2.8c-2-2-4.2-3.2-6.7-3.2a9.3 9.3 0 0 0-6.7 3.2A16.2 16.2 0 0 0 3.2 12c0 .2.2.3.3.5zm-2.4-1l.7-1.2L4 7.8C6.2 5.4 8.9 4 12 4c3 0 5.8 1.4 8.1 3.8a18.2 18.2 0 0 1 2.8 3.7v1l-.7 1.2-2.1 2.5c-2.3 2.4-5 3.8-8.1 3.8-3 0-5.8-1.4-8.1-3.8a18.2 18.2 0 0 1-2.8-3.7 1 1 0 0 1 0-1zm12-3.3a2 2 0 1 0 2.7 2.6 4 4 0 1 1-2.6-2.6z" fill-rule="nonzero"/></svg>',
                      print:
                        '<svg width="24" height="24"><path d="M18 8H6a3 3 0 0 0-3 3v6h2v3h14v-3h2v-6a3 3 0 0 0-3-3zm-1 10H7v-4h10v4zm.5-5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm.5-8H6v2h12V5z" fill-rule="nonzero"/></svg>',
                      quote:
                        '<svg width="24" height="24"><path d="M7.5 17h.9c.4 0 .7-.2.9-.6L11 13V8c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v4c0 .6.4 1 1 1h2l-1.3 2.7a1 1 0 0 0 .8 1.3zm8 0h.9c.4 0 .7-.2.9-.6L19 13V8c0-.6-.4-1-1-1h-4a1 1 0 0 0-1 1v4c0 .6.4 1 1 1h2l-1.3 2.7a1 1 0 0 0 .8 1.3z" fill-rule="nonzero"/></svg>',
                      redo:
                        '<svg width="24" height="24"><path d="M17.6 10H12c-2.8 0-4.4 1.4-4.9 3.5-.4 2 .3 4 1.4 4.6a1 1 0 1 1-1 1.8c-2-1.2-2.9-4.1-2.3-6.8.6-3 3-5.1 6.8-5.1h5.6l-3.3-3.3a1 1 0 1 1 1.4-1.4l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4l3.3-3.3z" fill-rule="nonzero"/></svg>',
                      reload:
                        '<svg width="24" height="24"><g fill-rule="nonzero"><path d="M5 22.1l-1.2-4.7v-.2a1 1 0 0 1 1-1l5 .4a1 1 0 1 1-.2 2l-2.2-.2a7.8 7.8 0 0 0 8.4.2 7.5 7.5 0 0 0 3.5-6.4 1 1 0 1 1 2 0 9.5 9.5 0 0 1-4.5 8 9.9 9.9 0 0 1-10.2 0l.4 1.4a1 1 0 1 1-2 .5zM13.6 7.4c0-.5.5-1 1-.9l2.8.2a8 8 0 0 0-9.5-1 7.5 7.5 0 0 0-3.6 7 1 1 0 0 1-2 0 9.5 9.5 0 0 1 4.5-8.6 10 10 0 0 1 10.9.3l-.3-1a1 1 0 0 1 2-.5l1.1 4.8a1 1 0 0 1-1 1.2l-5-.4a1 1 0 0 1-.9-1z"/></g></svg>',
                      "remove-formatting":
                        '<svg width="24" height="24"><path d="M13.2 6a1 1 0 0 1 0 .2l-2.6 10a1 1 0 0 1-1 .8h-.2a.8.8 0 0 1-.8-1l2.6-10H8a1 1 0 1 1 0-2h9a1 1 0 0 1 0 2h-3.8zM5 18h7a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm13 1.5L16.5 18 15 19.5a.7.7 0 0 1-1-1l1.5-1.5-1.5-1.5a.7.7 0 0 1 1-1l1.5 1.5 1.5-1.5a.7.7 0 0 1 1 1L17.5 17l1.5 1.5a.7.7 0 0 1-1 1z" fill-rule="evenodd"/></svg>',
                      remove:
                        '<svg width="24" height="24"><path d="M16 7h3a1 1 0 0 1 0 2h-1v9a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9H5a1 1 0 1 1 0-2h3V6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1zm-2 0V6c0-.6-.4-1-1-1h-2a1 1 0 0 0-1 1v1h4zm2 2H8v9c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V9zm-7 3a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0v-4zm4 0a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0v-4z" fill-rule="nonzero"/></svg>',
                      "resize-handle":
                        '<svg width="10" height="10"><g fill-rule="nonzero"><path d="M8.1 1.1A.5.5 0 1 1 9 2l-7 7A.5.5 0 1 1 1 8l7-7zM8.1 5.1A.5.5 0 1 1 9 6l-3 3A.5.5 0 1 1 5 8l3-3z"/></g></svg>',
                      resize:
                        '<svg width="24" height="24"><path d="M4 5c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h6c.3 0 .5.1.7.3.2.2.3.4.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3H7.4L18 16.6V13c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3.3 0 .5.1.7.3.2.2.3.4.3.7v6c0 .3-.1.5-.3.7a1 1 0 0 1-.7.3h-6a1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h3.6L6 7.4V11c0 .3-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3A1 1 0 0 1 4 11V5z" fill-rule="evenodd"/></svg>',
                      "restore-draft":
                        '<svg width="24" height="24"><g fill-rule="evenodd"><path d="M17 13c0 .6-.4 1-1 1h-4V8c0-.6.4-1 1-1s1 .4 1 1v4h2c.6 0 1 .4 1 1z"/><path d="M4.7 10H9a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v3l2.5-2.4a9.2 9.2 0 0 1 10.8-1.5A9 9 0 0 1 13.4 21c-2.4.1-4.7-.7-6.5-2.2a1 1 0 1 1 1.3-1.5 7.2 7.2 0 0 0 11.6-3.7 7 7 0 0 0-3.5-7.7A7.2 7.2 0 0 0 8 7L4.7 10z" fill-rule="nonzero"/></g></svg>',
                      "rotate-left":
                        '<svg width="24" height="24"><path d="M4.7 10H9a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v3l2.5-2.4a9.2 9.2 0 0 1 10.8-1.5A9 9 0 0 1 13.4 21c-2.4.1-4.7-.7-6.5-2.2a1 1 0 1 1 1.3-1.5 7.2 7.2 0 0 0 11.6-3.7 7 7 0 0 0-3.5-7.7A7.2 7.2 0 0 0 8 7L4.7 10z" fill-rule="nonzero"/></svg>',
                      "rotate-right":
                        '<svg width="24" height="24"><path d="M20 8V5a1 1 0 0 1 2 0v6c0 .6-.4 1-1 1h-6a1 1 0 0 1 0-2h4.3L16 7A7.2 7.2 0 0 0 7.7 6a7 7 0 0 0 3 13.1c1.9.1 3.7-.5 5-1.7a1 1 0 0 1 1.4 1.5A9.2 9.2 0 0 1 2.2 14c-.9-3.9 1-8 4.5-9.9 3.5-1.9 8-1.3 10.8 1.5L20 8z" fill-rule="nonzero"/></svg>',
                      rtl:
                        '<svg width="24" height="24"><path d="M8 5h8v2h-2v12h-2V7h-2v12H8v-7c-.5 0-1 0-1.4-.3A3.4 3.4 0 0 1 4.8 10a3.3 3.3 0 0 1 0-2.8 3.4 3.4 0 0 1 1.8-1.8L8 5zm12 11.2a1 1 0 1 1-1 1.6l-3-2a1 1 0 0 1 0-1.6l3-2a1 1 0 1 1 1 1.6L18.4 15l1.8 1.2z" fill-rule="evenodd"/></svg>',
                      save:
                        '<svg width="24" height="24"><path d="M5 16h14a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2zm0 2v2h14v-2H5zm10 0h2v2h-2v-2zm-4-6.4L8.7 9.3a1 1 0 1 0-1.4 1.4l4 4c.4.4 1 .4 1.4 0l4-4a1 1 0 1 0-1.4-1.4L13 11.6V4a1 1 0 0 0-2 0v7.6z" fill-rule="nonzero"/></svg>',
                      search:
                        '<svg width="24" height="24"><path d="M16 17.3a8 8 0 1 1 1.4-1.4l4.3 4.4a1 1 0 0 1-1.4 1.4l-4.4-4.3zm-5-.3a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" fill-rule="nonzero"/></svg>',
                      "select-all":
                        '<svg width="24" height="24"><path d="M3 5h2V3a2 2 0 0 0-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2a2 2 0 0 0-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8a2 2 0 0 0 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z" fill-rule="nonzero"/></svg>',
                      selected:
                        '<svg width="24" height="24"><path fill-rule="nonzero" d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm3.6 10.9L7 12.3a.7.7 0 0 0-1 1L9.6 17 18 8.6a.7.7 0 0 0 0-1 .7.7 0 0 0-1 0l-7.4 7.3z"/></svg>',
                      settings:
                        '<svg width="24" height="24"><path d="M11 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8v.3c0 .2 0 .3-.2.5l-.6.2H7.8c-.3 0-.4 0-.6-.2a.7.7 0 0 1-.2-.6V8H5a1 1 0 1 1 0-2h2v-.3c0-.2 0-.3.2-.5l.5-.2h2.5c.3 0 .4 0 .6.2l.2.5V6zM8 8h2V6H8v2zm9 2.8v.2h2c.6 0 1 .4 1 1s-.4 1-1 1h-2v.3c0 .2 0 .3-.2.5l-.6.2h-2.4c-.3 0-.4 0-.6-.2a.7.7 0 0 1-.2-.6V13H5a1 1 0 0 1 0-2h8v-.3c0-.2 0-.3.2-.5l.6-.2h2.4c.3 0 .4 0 .6.2l.2.6zM14 13h2v-2h-2v2zm-3 2.8v.2h8c.6 0 1 .4 1 1s-.4 1-1 1h-8v.3c0 .2 0 .3-.2.5l-.6.2H7.8c-.3 0-.4 0-.6-.2a.7.7 0 0 1-.2-.6V18H5a1 1 0 0 1 0-2h2v-.3c0-.2 0-.3.2-.5l.5-.2h2.5c.3 0 .4 0 .6.2l.2.6zM8 18h2v-2H8v2z" fill-rule="evenodd"/></svg>',
                      sharpen:
                        '<svg width="24" height="24"><path d="M16 6l4 4-8 9-8-9 4-4h8zm-4 10.2l5.5-6.2-.1-.1H12v-.3h5.1l-.2-.2H12V9h4.6l-.2-.2H12v-.3h4.1l-.2-.2H12V8h3.6l-.2-.2H8.7L6.5 10l.1.1H12v.3H6.9l.2.2H12v.3H7.3l.2.2H12v.3H7.7l.3.2h4v.3H8.2l.2.2H12v.3H8.6l.3.2H12v.3H9l.3.2H12v.3H9.5l.2.2H12v.3h-2l.2.2H12v.3h-1.6l.2.2H12v.3h-1.1l.2.2h.9v.3h-.7l.2.2h.5v.3h-.3l.3.2z" fill-rule="evenodd"/></svg>',
                      sourcecode:
                        '<svg width="24" height="24"><g fill-rule="nonzero"><path d="M9.8 15.7c.3.3.3.8 0 1-.3.4-.9.4-1.2 0l-4.4-4.1a.8.8 0 0 1 0-1.2l4.4-4.2c.3-.3.9-.3 1.2 0 .3.3.3.8 0 1.1L6 12l3.8 3.7zM14.2 15.7c-.3.3-.3.8 0 1 .4.4.9.4 1.2 0l4.4-4.1c.3-.3.3-.9 0-1.2l-4.4-4.2a.8.8 0 0 0-1.2 0c-.3.3-.3.8 0 1.1L18 12l-3.8 3.7z"/></g></svg>',
                      "spell-check":
                        '<svg width="24" height="24"><path d="M6 8v3H5V5c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h2c.3 0 .5.1.7.3.2.2.3.4.3.7v6H8V8H6zm0-3v2h2V5H6zm13 0h-3v5h3v1h-3a1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7V5c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h3v1zm-5 1.5l-.1.7c-.1.2-.3.3-.6.3.3 0 .5.1.6.3l.1.7V10c0 .3-.1.5-.3.7a1 1 0 0 1-.7.3h-3V4h3c.3 0 .5.1.7.3.2.2.3.4.3.7v1.5zM13 10V8h-2v2h2zm0-3V5h-2v2h2zm3 5l1 1-6.5 7L7 15.5l1.3-1 2.2 2.2L16 12z" fill-rule="evenodd"/></svg>',
                      "strike-through":
                        '<svg width="24" height="24"><g fill-rule="evenodd"><path d="M15.6 8.5c-.5-.7-1-1.1-1.3-1.3-.6-.4-1.3-.6-2-.6-2.7 0-2.8 1.7-2.8 2.1 0 1.6 1.8 2 3.2 2.3 4.4.9 4.6 2.8 4.6 3.9 0 1.4-.7 4.1-5 4.1A6.2 6.2 0 0 1 7 16.4l1.5-1.1c.4.6 1.6 2 3.7 2 1.6 0 2.5-.4 3-1.2.4-.8.3-2-.8-2.6-.7-.4-1.6-.7-2.9-1-1-.2-3.9-.8-3.9-3.6C7.6 6 10.3 5 12.4 5c2.9 0 4.2 1.6 4.7 2.4l-1.5 1.1z"/><path d="M5 11h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2z" fill-rule="nonzero"/></g></svg>',
                      subscript:
                        '<svg width="24" height="24"><path d="M10.4 10l4.6 4.6-1.4 1.4L9 11.4 4.4 16 3 14.6 7.6 10 3 5.4 4.4 4 9 8.6 13.6 4 15 5.4 10.4 10zM21 19h-5v-1l1-.8 1.7-1.6c.3-.4.5-.8.5-1.2 0-.3 0-.6-.2-.7-.2-.2-.5-.3-.9-.3a2 2 0 0 0-.8.2l-.7.3-.4-1.1 1-.6 1.2-.2c.8 0 1.4.3 1.8.7.4.4.6.9.6 1.5s-.2 1.1-.5 1.6a8 8 0 0 1-1.3 1.3l-.6.6h2.6V19z" fill-rule="nonzero"/></svg>',
                      superscript:
                        '<svg width="24" height="24"><path d="M15 9.4L10.4 14l4.6 4.6-1.4 1.4L9 15.4 4.4 20 3 18.6 7.6 14 3 9.4 4.4 8 9 12.6 13.6 8 15 9.4zm5.9 1.6h-5v-1l1-.8 1.7-1.6c.3-.5.5-.9.5-1.3 0-.3 0-.5-.2-.7-.2-.2-.5-.3-.9-.3l-.8.2-.7.4-.4-1.2c.2-.2.5-.4 1-.5.3-.2.8-.2 1.2-.2.8 0 1.4.2 1.8.6.4.4.6 1 .6 1.6 0 .5-.2 1-.5 1.5l-1.3 1.4-.6.5h2.6V11z" fill-rule="nonzero"/></svg>',
                      "table-cell-properties":
                        '<svg width="24" height="24"><path d="M4 5h16v14H4V5zm10 10h-4v3h4v-3zm0-8h-4v3h4V7zM9 7H5v3h4V7zm-4 4v3h4v-3H5zm10 0v3h4v-3h-4zm0-1h4V7h-4v3zM5 15v3h4v-3H5zm10 3h4v-3h-4v3z" fill-rule="evenodd"/></svg>',
                      "table-cell-select-all":
                        '<svg width="24" height="24"><path d="M12.5 5.5v6h6v-6h-6zm-1 0h-6v6h6v-6zm1 13h6v-6h-6v6zm-1 0v-6h-6v6h6zm-7-14h15v15h-15v-15z" fill-rule="nonzero"/></svg>',
                      "table-cell-select-inner":
                        '<svg width="24" height="24"><g fill-rule="nonzero"><path d="M5.5 5.5v13h13v-13h-13zm-1-1h15v15h-15v-15z" opacity=".2"/><path d="M11.5 11.5v-7h1v7h7v1h-7v7h-1v-7h-7v-1h7z"/></g></svg>',
                      "table-delete-column":
                        '<svg width="24" height="24"><path d="M9 11.2l1 1v.2l-1 1v-2.2zm5 1l1-1v2.2l-1-1v-.2zM20 5v14H4V5h16zm-1 2h-4v.8l-.2-.2-.8.8V7h-4v1.4l-.8-.8-.2.2V7H5v11h4v-1.8l.5.5.5-.4V18h4v-1.8l.8.8.2-.3V18h4V7zm-3.9 3.4l-1.8 1.9 1.8 1.9c.4.3.4.9 0 1.2-.3.3-.8.3-1.2 0L12 13.5l-1.8 1.9a.8.8 0 0 1-1.2 0 .9.9 0 0 1 0-1.2l1.8-1.9-1.9-2a.9.9 0 0 1 1.2-1.2l2 2 1.8-1.8c.3-.4.9-.4 1.2 0a.8.8 0 0 1 0 1.1z" fill-rule="evenodd"/></svg>',
                      "table-delete-row":
                        '<svg width="24" height="24"><path d="M16.7 8.8l1.1 1.2-2.4 2.5L18 15l-1.2 1.2-2.5-2.5-2.4 2.5-1.3-1.2 2.5-2.5-2.5-2.5 1.2-1.3 2.6 2.6 2.4-2.5zM4 5h16v14H4V5zm15 5V7H5v3h4.8l1 1H5v3h5.8l-1 1H5v3h14v-3h-.4l-1-1H19v-3h-1.3l1-1h.3z" fill-rule="evenodd"/></svg>',
                      "table-delete-table":
                        '<svg width="24" height="26"><path d="M4 6h16v14H4V6zm1 2v11h14V8H5zm11.7 8.7l-1.5 1.5L12 15l-3.3 3.2-1.4-1.5 3.2-3.2-3.3-3.2 1.5-1.5L12 12l3.2-3.2 1.5 1.5-3.2 3.2 3.2 3.2z" fill-rule="evenodd"/></svg>',
                      "table-insert-column-after":
                        '<svg width="24" height="24"><path d="M14.3 9c.4 0 .7.3.7.6v2.2h2.1c.4 0 .7.3.7.7 0 .4-.3.7-.7.7H15v2.2c0 .3-.3.6-.7.6a.7.7 0 0 1-.6-.6v-2.2h-2.2a.7.7 0 0 1 0-1.4h2.2V9.6c0-.3.3-.6.6-.6zM4 5h16v14H4V5zm5 13v-3H5v3h4zm0-4v-3H5v3h4zm0-4V7H5v3h4zm10 8V7h-9v11h9z" fill-rule="evenodd"/></svg>',
                      "table-insert-column-before":
                        '<svg width="24" height="24"><path d="M9.7 16a.7.7 0 0 1-.7-.6v-2.2H6.9a.7.7 0 0 1 0-1.4H9V9.6c0-.3.3-.6.7-.6.3 0 .6.3.6.6v2.2h2.2c.4 0 .8.3.8.7 0 .4-.4.7-.8.7h-2.2v2.2c0 .3-.3.6-.6.6zM4 5h16v14H4V5zm10 13V7H5v11h9zm5 0v-3h-4v3h4zm0-4v-3h-4v3h4zm0-4V7h-4v3h4z" fill-rule="evenodd"/></svg>',
                      "table-insert-row-above":
                        '<svg width="24" height="24"><path d="M14.8 10.5c0 .3-.2.5-.5.5h-1.8v1.8c0 .3-.2.5-.5.5a.5.5 0 0 1-.5-.6V11H9.7a.5.5 0 0 1 0-1h1.8V8.3c0-.3.2-.6.5-.6s.5.3.5.6V10h1.8c.3 0 .5.2.5.5zM4 5h16v14H4V5zm5 13v-3H5v3h4zm5 0v-3h-4v3h4zm5 0v-3h-4v3h4zm0-4V7H5v7h14z" fill-rule="evenodd"/></svg>',
                      "table-insert-row-after":
                        '<svg width="24" height="24"><path d="M9.2 14.5c0-.3.2-.5.5-.5h1.8v-1.8c0-.3.2-.5.5-.5s.5.2.5.6V14h1.8c.3 0 .5.2.5.5s-.2.5-.5.5h-1.8v1.7c0 .3-.2.6-.5.6a.5.5 0 0 1-.5-.6V15H9.7a.5.5 0 0 1-.5-.5zM4 5h16v14H4V5zm6 2v3h4V7h-4zM5 7v3h4V7H5zm14 11v-7H5v7h14zm0-8V7h-4v3h4z" fill-rule="evenodd"/></svg>',
                      "table-left-header":
                        '<svg width="24" height="24"><path d="M4 5h16v13H4V5zm10 12v-3h-4v3h4zm0-4v-3h-4v3h4zm0-4V6h-4v3h4zm5 8v-3h-4v3h4zm0-4v-3h-4v3h4zm0-4V6h-4v3h4z" fill-rule="evenodd"/></svg>',
                      "table-merge-cells":
                        '<svg width="24" height="24"><path d="M4 5h16v14H4V5zm6 13h9v-7h-9v7zm4-11h-4v3h4V7zM9 7H5v3h4V7zm-4 4v3h4v-3H5zm10-1h4V7h-4v3zM5 15v3h4v-3H5z" fill-rule="evenodd"/></svg>',
                      "table-row-properties":
                        '<svg width="24" height="24"><path d="M4 5h16v14H4V5zm10 10h-4v3h4v-3zm0-8h-4v3h4V7zM9 7H5v3h4V7zm6 3h4V7h-4v3zM5 15v3h4v-3H5zm10 3h4v-3h-4v3z" fill-rule="evenodd"/></svg>',
                      "table-split-cells":
                        '<svg width="24" height="24"><path d="M4 5h16v14H4V5zm6 2v3h4V7h-4zM9 18v-3H5v3h4zm0-4v-3H5v3h4zm0-4V7H5v3h4zm10 8v-7h-9v7h9zm0-8V7h-4v3h4zm-3.5 4.5l1.5 1.6c.3.2.3.7 0 1-.2.2-.7.2-1 0l-1.5-1.6-1.6 1.5c-.2.3-.7.3-1 0a.7.7 0 0 1 0-1l1.6-1.5-1.5-1.6a.7.7 0 0 1 1-1l1.5 1.6 1.6-1.5c.2-.3.7-.3 1 0 .2.2.2.7 0 1l-1.6 1.5z" fill-rule="evenodd"/></svg>',
                      "table-top-header":
                        '<svg width="24" height="24"><path d="M4 5h16v13H4V5zm5 12v-3H5v3h4zm0-4v-3H5v3h4zm5 4v-3h-4v3h4zm0-4v-3h-4v3h4zm5 4v-3h-4v3h4zm0-4v-3h-4v3h4z" fill-rule="evenodd"/></svg>',
                      table:
                        '<svg width="24" height="24"><path d="M4 5h16v14H4V5zm6 9h4v-3h-4v3zm4 1h-4v3h4v-3zm0-8h-4v3h4V7zM9 7H5v3h4V7zm-4 4v3h4v-3H5zm10 0v3h4v-3h-4zm0-1h4V7h-4v3zM5 15v3h4v-3H5zm10 3h4v-3h-4v3z" fill-rule="evenodd"/></svg>',
                      template:
                        '<svg width="24" height="24"><path d="M19 19v-1H5v1h14zM9 16v-4a5 5 0 1 1 6 0v4h4a2 2 0 0 1 2 2v3H3v-3c0-1.1.9-2 2-2h4zm4 0v-5l.8-.6a3 3 0 1 0-3.6 0l.8.6v5h2z" fill-rule="nonzero"/></svg>',
                      "temporary-placeholder":
                        '<svg width="24" height="24"><g fill-rule="evenodd"><path d="M9 7.6V6h2.5V4.5a.5.5 0 1 1 1 0V6H15v1.6a8 8 0 1 1-6 0zm-2.6 5.3a.5.5 0 0 0 .3.6c.3 0 .6 0 .6-.3l.1-.2a5 5 0 0 1 3.3-2.8c.3-.1.4-.4.4-.6-.1-.3-.4-.5-.6-.4a6 6 0 0 0-4.1 3.7z"/><circle cx="14" cy="4" r="1"/><circle cx="12" cy="2" r="1"/><circle cx="10" cy="4" r="1"/></g></svg>',
                      "text-color":
                        '<svg width="24" height="24"><g fill-rule="evenodd"><path id="tox-icon-text-color__color" d="M3 18h18v3H3z"/><path d="M8.7 16h-.8a.5.5 0 0 1-.5-.6l2.7-9c.1-.3.3-.4.5-.4h2.8c.2 0 .4.1.5.4l2.7 9a.5.5 0 0 1-.5.6h-.8a.5.5 0 0 1-.4-.4l-.7-2.2c0-.3-.3-.4-.5-.4h-3.4c-.2 0-.4.1-.5.4l-.7 2.2c0 .3-.2.4-.4.4zm2.6-7.6l-.6 2a.5.5 0 0 0 .5.6h1.6a.5.5 0 0 0 .5-.6l-.6-2c0-.3-.3-.4-.5-.4h-.4c-.2 0-.4.1-.5.4z"/></g></svg>',
                      toc:
                        '<svg width="24" height="24"><path d="M5 5c.6 0 1 .4 1 1s-.4 1-1 1a1 1 0 1 1 0-2zm3 0h11c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 1 1 0-2zm-3 8c.6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1 0-2zm3 0h11c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 0 1 0-2zm0-4c.6 0 1 .4 1 1s-.4 1-1 1a1 1 0 1 1 0-2zm3 0h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm-3 8c.6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1 0-2zm3 0h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2z" fill-rule="evenodd"/></svg>',
                      translate:
                        '<svg width="24" height="24"><path d="M12.7 14.3l-.3.7-.4.7-2.2-2.2-3.1 3c-.3.4-.8.4-1 0a.7.7 0 0 1 0-1l3.1-3A12.4 12.4 0 0 1 6.7 9H8a10.1 10.1 0 0 0 1.7 2.4c.5-.5 1-1.1 1.4-1.8l.9-2H4.7a.7.7 0 1 1 0-1.5h4.4v-.7c0-.4.3-.8.7-.8.4 0 .7.4.7.8v.7H15c.4 0 .8.3.8.7 0 .4-.4.8-.8.8h-1.4a12.3 12.3 0 0 1-1 2.4 13.5 13.5 0 0 1-1.7 2.3l1.9 1.8zm4.3-3l2.7 7.3a.5.5 0 0 1-.4.7 1 1 0 0 1-1-.7l-.6-1.5h-3.4l-.6 1.5a1 1 0 0 1-1 .7.5.5 0 0 1-.4-.7l2.7-7.4a1 1 0 1 1 2 0zm-2.2 4.4h2.4L16 12.5l-1.2 3.2z" fill-rule="evenodd"/></svg>',
                      underline:
                        '<svg width="24" height="24"><path d="M16 5c.6 0 1 .4 1 1v5.5a4 4 0 0 1-.4 1.8l-1 1.4a5.3 5.3 0 0 1-5.5 1 5 5 0 0 1-1.6-1c-.5-.4-.8-.9-1.1-1.4a4 4 0 0 1-.4-1.8V6c0-.6.4-1 1-1s1 .4 1 1v5.5c0 .3 0 .6.2 1l.6.7a3.3 3.3 0 0 0 2.2.8 3.4 3.4 0 0 0 2.2-.8c.3-.2.4-.5.6-.8l.2-.9V6c0-.6.4-1 1-1zM8 17h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 0 1 0-2z" fill-rule="evenodd"/></svg>',
                      undo:
                        '<svg width="24" height="24"><path d="M6.4 8H12c3.7 0 6.2 2 6.8 5.1.6 2.7-.4 5.6-2.3 6.8a1 1 0 0 1-1-1.8c1.1-.6 1.8-2.7 1.4-4.6-.5-2.1-2.1-3.5-4.9-3.5H6.4l3.3 3.3a1 1 0 1 1-1.4 1.4l-5-5a1 1 0 0 1 0-1.4l5-5a1 1 0 0 1 1.4 1.4L6.4 8z" fill-rule="nonzero"/></svg>',
                      unlink:
                        '<svg width="24" height="24"><path d="M6.2 12.3a1 1 0 0 1 1.4 1.4l-2 2a2 2 0 1 0 2.6 2.8l4.8-4.8a1 1 0 0 0 0-1.4 1 1 0 1 1 1.4-1.3 2.9 2.9 0 0 1 0 4L9.6 20a3.9 3.9 0 0 1-5.5-5.5l2-2zm11.6-.6a1 1 0 0 1-1.4-1.4l2.1-2a2 2 0 1 0-2.7-2.8L11 10.3a1 1 0 0 0 0 1.4A1 1 0 1 1 9.6 13a2.9 2.9 0 0 1 0-4L14.4 4a3.9 3.9 0 0 1 5.5 5.5l-2 2zM7.6 6.3a.8.8 0 0 1-1 1.1L3.3 4.2a.7.7 0 1 1 1-1l3.2 3.1zM5.1 8.6a.8.8 0 0 1 0 1.5H3a.8.8 0 0 1 0-1.5H5zm5-3.5a.8.8 0 0 1-1.5 0V3a.8.8 0 0 1 1.5 0V5zm6 11.8a.8.8 0 0 1 1-1l3.2 3.2a.8.8 0 0 1-1 1L16 17zm-2.2 2a.8.8 0 0 1 1.5 0V21a.8.8 0 0 1-1.5 0V19zm5-3.5a.7.7 0 1 1 0-1.5H21a.8.8 0 0 1 0 1.5H19z" fill-rule="nonzero"/></svg>',
                      unlock:
                        '<svg width="24" height="24"><path d="M16 5c.8 0 1.5.3 2.1.9.6.6.9 1.3.9 2.1v3h-2V8a1 1 0 0 0-.3-.7A1 1 0 0 0 16 7h-2a1 1 0 0 0-.7.3 1 1 0 0 0-.3.7v3h.3c.2 0 .3 0 .5.2l.2.6v7.4c0 .3 0 .4-.2.6l-.6.2H4.8c-.3 0-.4 0-.6-.2a.7.7 0 0 1-.2-.6v-7.4c0-.3 0-.4.2-.6l.5-.2H11V8c0-.8.3-1.5.9-2.1.6-.6 1.3-.9 2.1-.9h2z" fill-rule="evenodd"/></svg>',
                      "unordered-list":
                        '<svg width="24" height="24"><path d="M11 5h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zM4.5 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1z" fill-rule="evenodd"/></svg>',
                      unselected:
                        '<svg width="24" height="24"><path fill-rule="nonzero" d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm0 1a1 1 0 0 0-1 1v12c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H6z"/></svg>',
                      upload:
                        '<svg width="24" height="24"><path d="M18 19v-2a1 1 0 0 1 2 0v3c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v2h12zM11 6.4L8.7 8.7a1 1 0 0 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 1 1-1.4 1.4L13 6.4V16a1 1 0 0 1-2 0V6.4z" fill-rule="nonzero"/></svg>',
                      user:
                        '<svg width="24" height="24"><path d="M12 24a12 12 0 1 1 0-24 12 12 0 0 1 0 24zm-8.7-5.3a11 11 0 0 0 17.4 0C19.4 16.3 14.6 15 12 15c-2.6 0-7.4 1.3-8.7 3.7zM12 13c2.2 0 4-2 4-4.5S14.2 4 12 4 8 6 8 8.5 9.8 13 12 13z" fill-rule="nonzero"/></svg>',
                      warning:
                        '<svg width="24" height="24"><path d="M19.8 18.3c.2.5.3.9 0 1.2-.1.3-.5.5-1 .5H5.2c-.5 0-.9-.2-1-.5-.3-.3-.2-.7 0-1.2L11 4.7l.5-.5.5-.2c.2 0 .3 0 .5.2.2 0 .3.3.5.5l6.8 13.6zM12 18c.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7a1 1 0 0 0-.3-.7 1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3 1 1 0 0 0-.3.7c0 .3.1.5.3.7.2.2.4.3.7.3zm.7-3l.3-4a1 1 0 0 0-.3-.7 1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3 1 1 0 0 0-.3.7l.3 4h1.4z" fill-rule="evenodd"/></svg>',
                      "zoom-in":
                        '<svg width="24" height="24"><path d="M16 17.3a8 8 0 1 1 1.4-1.4l4.3 4.4a1 1 0 0 1-1.4 1.4l-4.4-4.3zm-5-.3a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm-1-9a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0V8zm-2 4a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2H8z" fill-rule="nonzero"/></svg>',
                      "zoom-out":
                        '<svg width="24" height="24"><path d="M16 17.3a8 8 0 1 1 1.4-1.4l4.3 4.4a1 1 0 0 1-1.4 1.4l-4.4-4.3zm-5-.3a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm-3-5a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2H8z" fill-rule="nonzero"/></svg>'
                    },
                    id.get(t).icons
                  );
                wr(r, function(t, r) {
                  Er(n, r) || e.ui.registry.addIcon(r, t);
                });
              })(e),
              (function(e) {
                var t = e.settings.theme;
                if (_(t)) {
                  e.settings.theme = Qw(t);
                  var n = ud.get(t);
                  (e.theme = new n(e, ud.urls[t])),
                    e.theme.init &&
                      e.theme.init(
                        e,
                        ud.urls[t] || e.documentBaseUrl.replace(/\/$/, ""),
                        e.$
                      );
                } else e.theme = {};
              })(e),
              (function(e) {
                var t = [];
                an.each(e.settings.plugins.split(/[ ,]/), function(n) {
                  Jw(e, t, Qw(n));
                });
              })(e);
            var t = (function(e) {
              var t = e.getElement();
              return (
                (e.orgDisplay = t.style.display),
                _(e.settings.theme)
                  ? (function(e) {
                      return e.theme.renderUI();
                    })(e)
                  : H(e.settings.theme)
                  ? (function(e) {
                      var t = e.getElement(),
                        n = (0, e.settings.theme)(e, t);
                      return (
                        n.editorContainer.nodeType &&
                          (n.editorContainer.id =
                            n.editorContainer.id || e.id + "_parent"),
                        n.iframeContainer &&
                          n.iframeContainer.nodeType &&
                          (n.iframeContainer.id =
                            n.iframeContainer.id || e.id + "_iframecontainer"),
                        (n.height = n.iframeHeight
                          ? n.iframeHeight
                          : t.offsetHeight),
                        n
                      );
                    })(e)
                  : ex(e)
              );
            })(e);
            return (
              (e.editorContainer = t.editorContainer
                ? t.editorContainer
                : null),
              Yw(e),
              e.inline ? $w(e) : Xw(e, t)
            );
          },
          nx = Si.DOM,
          rx = function(e) {
            return "-" === e.charAt(0);
          },
          ox = function(e, t) {
            (function(e) {
              return A.from(bl(e))
                .filter(function(e) {
                  return e.length > 0;
                })
                .map(function(e) {
                  return { url: e, name: A.none() };
                });
            })(t)
              .orThunk(function() {
                return (function(e) {
                  return A.from(vl(e))
                    .filter(function(e) {
                      return e.length > 0 && !id.has(e);
                    })
                    .map(function(t) {
                      return {
                        url:
                          e.editorManager.baseURL + "/icons/" + t + "/icons.js",
                        name: A.some(t)
                      };
                    });
                })(t);
              })
              .each(function(t) {
                e.add(t.url, n, void 0, function() {
                  od.iconsLoadError(t.url, t.name.getOrUndefined());
                });
              });
          },
          ix = function(e, t) {
            var r = Ti.ScriptLoader;
            !(function(e, t, n, r) {
              var o = t.settings,
                i = o.theme;
              if (_(i)) {
                if (!rx(i) && !ud.urls.hasOwnProperty(i)) {
                  var a = o.theme_url;
                  a
                    ? ud.load(i, t.documentBaseURI.toAbsolute(a))
                    : ud.load(i, "themes/" + i + "/theme" + n + ".js");
                }
                e.loadQueue(function() {
                  ud.waitFor(i, r);
                });
              } else r();
            })(r, e, t, function() {
              !(function(e, t) {
                var r = Tl(t),
                  o = Al(t);
                if (!1 === Oi.hasCode(r) && "en" !== r) {
                  var i =
                    "" !== o
                      ? o
                      : t.editorManager.baseURL + "/langs/" + r + ".js";
                  e.add(i, n, void 0, function() {
                    od.languageLoadError(i, r);
                  });
                }
              })(r, e),
                ox(r, e),
                (function(e, t) {
                  B(e.plugins) && (e.plugins = e.plugins.join(" ")),
                    an.each(e.external_plugins, function(t, r) {
                      ad.load(r, t, n, void 0, function() {
                        od.pluginLoadError(r, t);
                      }),
                        (e.plugins += " " + r);
                    }),
                    an.each(e.plugins.split(/[ ,]/), function(e) {
                      if ((e = an.trim(e)) && !ad.urls[e])
                        if (rx(e)) {
                          e = e.substr(1, e.length);
                          var r = ad.dependencies(e);
                          an.each(r, function(e) {
                            var r = {
                              prefix: "plugins/",
                              resource: e,
                              suffix: "/plugin" + t + ".js"
                            };
                            (e = ad.createUrl(r, e)),
                              ad.load(e.resource, e, n, void 0, function() {
                                od.pluginLoadError(
                                  e.prefix + e.resource + e.suffix,
                                  e.resource
                                );
                              });
                          });
                        } else {
                          var o = {
                            prefix: "plugins/",
                            resource: e,
                            suffix: "/plugin" + t + ".js"
                          };
                          ad.load(e, o, n, void 0, function() {
                            od.pluginLoadError(
                              o.prefix + o.resource + o.suffix,
                              e
                            );
                          });
                        }
                    });
                })(e.settings, t),
                r.loadQueue(
                  function() {
                    e.removed || tx(e);
                  },
                  e,
                  function() {
                    e.removed || tx(e);
                  }
                );
            });
          },
          ax = function(e) {
            var n = e.settings,
              r = e.id;
            Oi.setCode(Tl(e));
            var o = function() {
              nx.unbind(t.window, "ready", o), e.render();
            };
            if (Ze.Event.domLoaded) {
              if (e.getElement() && Le.contentEditable) {
                n.inline
                  ? (e.inline = !0)
                  : ((e.orgVisibility = e.getElement().style.visibility),
                    (e.getElement().style.visibility = "hidden"));
                var i = e.getElement().form || nx.getParent(r, "form");
                i &&
                  ((e.formElement = i),
                  n.hidden_input &&
                    !/TEXTAREA|INPUT/i.test(e.getElement().nodeName) &&
                    (nx.insertAfter(
                      nx.create("input", { type: "hidden", name: r }),
                      r
                    ),
                    (e.hasHiddenInput = !0)),
                  (e.formEventDelegate = function(t) {
                    e.fire(t.type, t);
                  }),
                  nx.bind(i, "submit reset", e.formEventDelegate),
                  e.on("reset", function() {
                    e.resetContent();
                  }),
                  !n.submit_patch ||
                    i.submit.nodeType ||
                    i.submit.length ||
                    i._mceOldSubmit ||
                    ((i._mceOldSubmit = i.submit),
                    (i.submit = function() {
                      return (
                        e.editorManager.triggerSave(),
                        e.setDirty(!1),
                        i._mceOldSubmit(i)
                      );
                    }))),
                  (e.windowManager = Qf(e)),
                  (e.notificationManager = Gf(e)),
                  "xml" === n.encoding &&
                    e.on("GetContent", function(e) {
                      e.save && (e.content = nx.encode(e.content));
                    }),
                  n.add_form_submit_trigger &&
                    e.on("submit", function() {
                      e.initialized && e.save();
                    }),
                  n.add_unload_trigger &&
                    ((e._beforeUnload = function() {
                      !e.initialized ||
                        e.destroyed ||
                        e.isHidden() ||
                        e.save({ format: "raw", no_events: !0, set_dirty: !1 });
                    }),
                    e.editorManager.on("BeforeUnload", e._beforeUnload)),
                  e.editorManager.add(e),
                  ix(e, e.suffix);
              }
            } else nx.bind(t.window, "ready", o);
          },
          ux = function(e, t, n) {
            try {
              e.getDoc().execCommand(t, !1, n);
            } catch (e) {}
          },
          sx = function(e, t) {
            e.dom().contentEditable = t ? "true" : "false";
          },
          cx = function(e, t) {
            var n = fr.fromDom(e.getBody());
            !(function(e, t, n) {
              ea(e, t) && !1 === n ? Zi(e, t) : n && Qi(e, t);
            })(n, "mce-content-readonly", t),
              t
                ? (e.selection.controlSelection.hideResizeRect(),
                  e._selectionOverrides.hideFakeCaret(),
                  (function(e) {
                    A.from(e.selection.getNode()).each(function(e) {
                      e.removeAttribute("data-mce-selected");
                    });
                  })(e),
                  (e.readonly = !0),
                  sx(n, !1),
                  j(na(n, '*[contenteditable="true"]'), function(e) {
                    Tr(e, "data-mce-contenteditable", "true"), sx(e, !1);
                  }))
                : ((e.readonly = !1),
                  sx(n, !0),
                  (function(e) {
                    j(na(e, '*[data-mce-contenteditable="true"]'), function(e) {
                      _r(e, "data-mce-contenteditable"), sx(e, !0);
                    });
                  })(n),
                  ux(e, "StyleWithCSS", !1),
                  ux(e, "enableInlineTableEditing", !1),
                  ux(e, "enableObjectResizing", !1),
                  e.focus(),
                  (function(e) {
                    e.selection.setRng(e.selection.getRng());
                  })(e),
                  e.nodeChanged());
          },
          lx = function(e) {
            return !0 === e.readonly;
          },
          fx = function(e) {
            e.parser.addAttributeFilter("contenteditable", function(t) {
              lx(e) &&
                j(t, function(e) {
                  e.attr("data-mce-contenteditable", e.attr("contenteditable")),
                    e.attr("contenteditable", "false");
                });
            }),
              e.serializer.addAttributeFilter(
                "data-mce-contenteditable",
                function(t) {
                  lx(e) &&
                    j(t, function(e) {
                      e.attr(
                        "contenteditable",
                        e.attr("data-mce-contenteditable")
                      );
                    });
                }
              ),
              e.serializer.addTempAttr("data-mce-contenteditable");
          },
          dx = ["design", "readonly"],
          hx = function(e, n, r, o) {
            var i = r[n.get()],
              a = r[o];
            try {
              a.activate();
            } catch (e) {
              return void t.console.error(
                "problem while activating editor mode " + o + ":",
                e
              );
            }
            i.deactivate(),
              i.editorReadOnly !== a.editorReadOnly && cx(e, a.editorReadOnly),
              n.set(o),
              wf(e, o);
          },
          mx = function(e) {
            var r = _i("design"),
              o = _i({
                design: { activate: n, deactivate: n, editorReadOnly: !1 },
                readonly: { activate: n, deactivate: n, editorReadOnly: !0 }
              });
            return (
              (function(e) {
                e.serializer
                  ? fx(e)
                  : e.on("PreInit", function() {
                      fx(e);
                    });
              })(e),
              (function(e) {
                e.on("ShowCaret", function(t) {
                  lx(e) && t.preventDefault();
                }),
                  e.on("ObjectSelected", function(t) {
                    lx(e) && t.preventDefault();
                  });
              })(e),
              {
                isReadOnly: function() {
                  return lx(e);
                },
                set: function(t) {
                  return (function(e, t, n, r) {
                    if (r !== n.get()) {
                      if (!Er(t, r))
                        throw new Error("Editor mode '" + r + "' is invalid");
                      e.initialized
                        ? hx(e, n, t, r)
                        : e.on("init", function() {
                            return hx(e, n, t, r);
                          });
                    }
                  })(e, o.get(), r, t);
                },
                get: function() {
                  return r.get();
                },
                register: function(e, n) {
                  o.set(
                    (function(e, n, r) {
                      var o;
                      if (I(dx, n))
                        throw new Error("Cannot override default mode " + n);
                      return Ai(
                        {},
                        e,
                        (((o = {})[n] = Ai({}, r, {
                          deactivate: function() {
                            try {
                              r.deactivate();
                            } catch (e) {
                              t.console.error(
                                "problem while deactivating editor mode " +
                                  n +
                                  ":"
                              ),
                                t.console.error(e);
                            }
                          }
                        })),
                        o)
                      );
                    })(o.get(), e, n)
                  );
                }
              }
            );
          },
          gx = function(e) {
            return an.grep(e.childNodes, function(e) {
              return "LI" === e.nodeName;
            });
          },
          px = function(e) {
            return (
              e &&
              e.firstChild &&
              e.firstChild === e.lastChild &&
              (function(e) {
                return " " === e.data || To.isBr(e);
              })(e.firstChild)
            );
          },
          vx = function(e) {
            return e.length > 0 && (!(t = e[e.length - 1]).firstChild || px(t))
              ? e.slice(0, -1)
              : e;
            var t;
          },
          bx = function(e, t) {
            var n = e.getParent(t, e.isBlock);
            return n && "LI" === n.nodeName ? n : null;
          },
          yx = function(e, t) {
            var n = _u.after(e),
              r = Js(t).prev(n);
            return r ? r.toRange() : null;
          },
          Cx = function(e, t, n) {
            var r = e.parentNode;
            return (
              an.each(t, function(t) {
                r.insertBefore(t, e);
              }),
              (function(e, t) {
                var n = _u.before(e),
                  r = Js(t).next(n);
                return r ? r.toRange() : null;
              })(e, n)
            );
          },
          wx = function(e, t) {
            var n = t.firstChild,
              r = t.lastChild;
            return (
              n && "meta" === n.name && (n = n.next),
              r && "mce_marker" === r.attr("id") && (r = r.prev),
              (function(e, t) {
                var n = e.getNonEmptyElements();
                return (
                  t &&
                  (t.isEmpty(n) ||
                    (function(e, t) {
                      return (
                        e.getBlockElements()[t.name] &&
                        (function(e) {
                          return e.firstChild && e.firstChild === e.lastChild;
                        })(t) &&
                        (function(e) {
                          return "br" === e.name || " " === e.value;
                        })(t.firstChild)
                      );
                    })(e, t))
                );
              })(e, r) && (r = r.prev),
              !(!n || n !== r || ("ul" !== n.name && "ol" !== n.name))
            );
          },
          xx = function(e, t, n, r) {
            var o = (function(e, t, n) {
                var r = t.serialize(n);
                return (function(e) {
                  var t = e.firstChild,
                    n = e.lastChild;
                  return (
                    t && "META" === t.nodeName && t.parentNode.removeChild(t),
                    n && "mce_marker" === n.id && n.parentNode.removeChild(n),
                    e
                  );
                })(e.createFragment(r));
              })(t, e, r),
              i = bx(t, n.startContainer),
              a = vx(gx(o.firstChild)),
              u = t.getRoot(),
              s = function(e) {
                var r = _u.fromRangeStart(n),
                  o = Js(t.getRoot()),
                  a = 1 === e ? o.prev(r) : o.next(r);
                return !a || bx(t, a.getNode()) !== i;
              };
            return s(1)
              ? Cx(i, a, u)
              : s(2)
              ? (function(e, t, n, r) {
                  return r.insertAfter(t.reverse(), e), yx(t[0], n);
                })(i, a, u, t)
              : (function(e, t, n, r) {
                  var o = (function(e, t) {
                      var n = t.cloneRange(),
                        r = t.cloneRange();
                      return (
                        n.setStartBefore(e),
                        r.setEndAfter(e),
                        [n.cloneContents(), r.cloneContents()]
                      );
                    })(e, r),
                    i = e.parentNode;
                  return (
                    i.insertBefore(o[0], e),
                    an.each(t, function(t) {
                      i.insertBefore(t, e);
                    }),
                    i.insertBefore(o[1], e),
                    i.removeChild(e),
                    yx(t[t.length - 1], n)
                  );
                })(i, a, u, n);
          },
          zx = function(e, t) {
            return !!bx(e, t);
          },
          Sx = To.matchNodeNames("td th"),
          Nx = function(e, t) {
            var n = e.selection.getRng(),
              r = n.startContainer,
              o = n.startOffset;
            n.collapsed &&
              (function(e, t) {
                return To.isText(e) && " " === e.nodeValue[t - 1];
              })(r, o) &&
              To.isText(r) &&
              (r.insertData(o - 1, " "),
              r.deleteData(o, 1),
              n.setStart(r, o),
              n.setEnd(r, o),
              e.selection.setRng(n)),
              e.selection.setContent(t);
          },
          Ex = function(e, t, n) {
            var r,
              o,
              i,
              a,
              u,
              s,
              c,
              l,
              f,
              d,
              h,
              m = e.selection,
              g = e.dom;
            if (
              (/^ | $/.test(t) &&
                (t = (function(e, t) {
                  var n, r;
                  (n = e.startContainer), (r = e.startOffset);
                  var o = function(e) {
                    return n[e] && 3 === n[e].nodeType;
                  };
                  return (
                    3 === n.nodeType &&
                      (r > 0
                        ? (t = t.replace(/^&nbsp;/, " "))
                        : o("previousSibling") ||
                          (t = t.replace(/^ /, "&nbsp;")),
                      r < n.length
                        ? (t = t.replace(/&nbsp;(<br>|)$/, " "))
                        : o("nextSibling") ||
                          (t = t.replace(/(&nbsp;| )(<br>|)$/, "&nbsp;"))),
                    t
                  );
                })(m.getRng(), t)),
              (r = e.parser),
              (h = n.merge),
              (o = Pl({ validate: e.settings.validate }, e.schema)),
              (d =
                '<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;&#x200B;</span>'),
              (s = {
                content: t,
                format: "html",
                selection: !0,
                paste: n.paste
              }),
              (s = e.fire("BeforeSetContent", s)).isDefaultPrevented())
            )
              e.fire("SetContent", {
                content: s.content,
                format: "html",
                selection: !0,
                paste: n.paste
              });
            else {
              -1 === (t = s.content).indexOf("{$caret}") && (t += "{$caret}"),
                (t = t.replace(/\{\$caret\}/, d));
              var p =
                  (l = m.getRng()).startContainer ||
                  (l.parentElement ? l.parentElement() : null),
                v = e.getBody();
              p === v &&
                m.isCollapsed() &&
                g.isBlock(v.firstChild) &&
                (function(e, t) {
                  return t && !e.schema.getShortEndedElements()[t.nodeName];
                })(e, v.firstChild) &&
                g.isEmpty(v.firstChild) &&
                ((l = g.createRng()).setStart(v.firstChild, 0),
                l.setEnd(v.firstChild, 0),
                m.setRng(l)),
                m.isCollapsed() ||
                  (e.selection.setRng(Eg(e.selection.getRng())),
                  e.getDoc().execCommand("Delete", !1, null),
                  (t = (function(e, t) {
                    var n, r;
                    return (
                      (n = e.startContainer),
                      (r = e.startOffset),
                      3 === n.nodeType &&
                        e.collapsed &&
                        (" " === n.data[r]
                          ? (n.deleteData(r, 1),
                            /[\u00a0| ]$/.test(t) || (t += " "))
                          : " " === n.data[r - 1] &&
                            (n.deleteData(r - 1, 1),
                            /[\u00a0| ]$/.test(t) || (t = " " + t))),
                      t
                    );
                  })(e.selection.getRng(), t)));
              var b,
                y = {
                  context: (i = m.getNode()).nodeName.toLowerCase(),
                  data: n.data,
                  insert: !0
                };
              if (
                ((u = r.parse(t, y)),
                !0 === n.paste && wx(e.schema, u) && zx(g, i))
              )
                return (
                  (l = xx(o, g, e.selection.getRng(), u)),
                  e.selection.setRng(l),
                  void e.fire("SetContent", s)
                );
              if (
                ((function(e) {
                  for (var t = e; (t = t.walk()); )
                    1 === t.type && t.attr("data-mce-fragment", "1");
                })(u),
                "mce_marker" === (f = u.lastChild).attr("id"))
              )
                for (c = f, f = f.prev; f; f = f.walk(!0))
                  if (3 === f.type || !g.isBlock(f.name)) {
                    e.schema.isValidChild(f.parent.name, "span") &&
                      f.parent.insert(c, f, "br" === f.name);
                    break;
                  }
              if (
                (e._selectionOverrides.showBlockCaretContainer(i), y.invalid)
              ) {
                for (
                  Nx(e, d),
                    i = m.getNode(),
                    a = e.getBody(),
                    9 === i.nodeType ? (i = f = a) : (f = i);
                  f !== a;

                )
                  (i = f), (f = f.parentNode);
                (t = i === a ? a.innerHTML : g.getOuterHTML(i)),
                  (t = o.serialize(
                    r.parse(
                      t.replace(
                        /<span (id="mce_marker"|id=mce_marker).+?<\/span>/i,
                        function() {
                          return o.serialize(u);
                        }
                      )
                    )
                  )),
                  i === a ? g.setHTML(a, t) : g.setOuterHTML(i, t);
              } else
                !(function(e, t, n) {
                  if ("all" === n.getAttribute("data-mce-bogus"))
                    n.parentNode.insertBefore(e.dom.createFragment(t), n);
                  else {
                    var r = n.firstChild,
                      o = n.lastChild;
                    !r || (r === o && "BR" === r.nodeName)
                      ? e.dom.setHTML(n, t)
                      : Nx(e, t);
                  }
                })(e, (t = o.serialize(u)), i);
              !(function(e, t) {
                var n = e.schema.getTextInlineElements(),
                  r = e.dom;
                if (t) {
                  var o = e.getBody(),
                    i = new Qm(r);
                  an.each(r.select("*[data-mce-fragment]"), function(e) {
                    for (var t = e.parentNode; t && t !== o; t = t.parentNode)
                      n[e.nodeName.toLowerCase()] &&
                        i.compare(t, e) &&
                        r.remove(e, !0);
                  });
                }
              })(e, h),
                (function(e, t) {
                  var n,
                    r,
                    o,
                    i,
                    a,
                    u = e.dom,
                    s = e.selection;
                  if (t) {
                    if (
                      (e.selection.scrollIntoView(t),
                      (n = (function(t) {
                        for (
                          var n = e.getBody();
                          t && t !== n;
                          t = t.parentNode
                        )
                          if ("false" === e.dom.getContentEditable(t)) return t;
                        return null;
                      })(t)))
                    )
                      return u.remove(t), void s.select(n);
                    var c = u.createRng();
                    (i = t.previousSibling) && 3 === i.nodeType
                      ? (c.setStart(i, i.nodeValue.length),
                        Le.ie ||
                          ((a = t.nextSibling) &&
                            3 === a.nodeType &&
                            (i.appendData(a.data),
                            a.parentNode.removeChild(a))))
                      : (c.setStartBefore(t), c.setEndBefore(t)),
                      (r = u.getParent(t, u.isBlock)),
                      u.remove(t),
                      r &&
                        u.isEmpty(r) &&
                        (e.$(r).empty(),
                        c.setStart(r, 0),
                        c.setEnd(r, 0),
                        Sx(r) ||
                        (function(e) {
                          return !!e.getAttribute("data-mce-fragment");
                        })(r) ||
                        !(o = (function(t) {
                          var n = _u.fromRangeStart(t);
                          if ((n = Js(e.getBody()).next(n))) return n.toRange();
                        })(c))
                          ? u.add(r, u.create("br", { "data-mce-bogus": "1" }))
                          : ((c = o), u.remove(r))),
                      s.setRng(c);
                  }
                })(e, g.get("mce_marker")),
                (b = e.getBody()),
                an.each(b.getElementsByTagName("*"), function(e) {
                  e.removeAttribute("data-mce-fragment");
                }),
                (function(e, t) {
                  A.from(e.getParent(t, "td,th"))
                    .map(fr.fromDom)
                    .each(am);
                })(e.dom, e.selection.getStart()),
                e.fire("SetContent", s),
                e.addVisual();
            }
          },
          kx = function(e, t) {
            var n = (function(e) {
              var t;
              return "string" != typeof e
                ? ((t = an.extend(
                    { paste: e.paste, data: { paste: e.paste } },
                    e
                  )),
                  { content: e.content, details: t })
                : { content: e, details: {} };
            })(t);
            Ex(e, n.content, n.details);
          },
          Tx = function(e, t) {
            e.getDoc().execCommand(t, !1, null);
          },
          Ax = function(e) {
            Ry(e, !1) ||
              Dy(e, !1) ||
              Vy(e, !1) ||
              gy(e, !1) ||
              mC(e) ||
              yy(e, !1) ||
              jy(e, !1) ||
              (Tx(e, "Delete"), Zb(e));
          },
          Mx = function(e) {
            Ry(e, !0) ||
              Dy(e, !0) ||
              Vy(e, !0) ||
              gy(e, !0) ||
              mC(e) ||
              yy(e, !0) ||
              jy(e, !0) ||
              Tx(e, "ForwardDelete");
          },
          _x = function(e) {
            return function(t, n) {
              return A.from(n)
                .map(fr.fromDom)
                .filter(vr)
                .bind(function(n) {
                  return (function(e, t, n) {
                    var r = function(t) {
                      return Or(t, e);
                    };
                    return ia(
                      fr.fromDom(n),
                      function(e) {
                        return r(e).isSome();
                      },
                      function(e) {
                        return $r(fr.fromDom(t), e);
                      }
                    ).bind(r);
                  })(e, t, n.dom()).or(
                    (function(e, t) {
                      return A.from(Si.DOM.getStyle(t, e, !0));
                    })(e, n.dom())
                  );
                })
                .getOr("");
            };
          },
          Rx = {
            getFontSize: _x("font-size"),
            getFontFamily: r(function(e) {
              return e.replace(/[\'\"\\]/g, "").replace(/,\s+/g, ",");
            }, _x("font-family")),
            toPt: function(e, t) {
              return /[0-9.]+px$/.test(e)
                ? (function(e, t) {
                    var n = Math.pow(10, t);
                    return Math.round(e * n) / n;
                  })((72 * parseInt(e, 10)) / 96, t || 0) + "pt"
                : e;
            }
          },
          Bx = function(e) {
            return sc.firstPositionIn(e.getBody()).map(function(e) {
              var t = e.container();
              return To.isText(t) ? t.parentNode : t;
            });
          },
          Ox = function(e) {
            return A.from(e.selection.getRng()).bind(function(t) {
              return (function(e, t) {
                return e.startContainer === t && 0 === e.startOffset;
              })(t, e.getBody())
                ? A.none()
                : A.from(e.selection.getStart(!0));
            });
          },
          Dx = function(e, t) {
            if (/^[0-9\.]+$/.test(t)) {
              var n = parseInt(t, 10);
              if (n >= 1 && n <= 7) {
                var r = gl(e),
                  o = pl(e);
                return o ? o[n - 1] || t : r[n - 1] || t;
              }
              return t;
            }
            return t;
          },
          Hx = function(e) {
            var t = parseInt(e, 10);
            return isNaN(t) ? 0 : t;
          },
          Px = function(e, t) {
            return (
              (e || "table" === gr(t) ? "margin" : "padding") +
              ("rtl" === Rr(t, "direction") ? "-right" : "-left")
            );
          },
          Lx = function(e) {
            var t = Ix(e);
            return (
              !0 !== e.readonly &&
              (t.length > 1 ||
                (function(e, t) {
                  return te(t, function(t) {
                    var n = Px(Ml(e), t),
                      r = Or(t, n)
                        .map(Hx)
                        .getOr(0);
                    return (
                      "false" !== e.dom.getContentEditable(t.dom()) && r > 0
                    );
                  });
                })(e, t))
            );
          },
          Vx = function(e) {
            return Ho(e) || Po(e);
          },
          Ix = function(e) {
            return W(U(e.selection.getSelectedBlocks(), fr.fromDom), function(
              e
            ) {
              return (
                !Vx(e) &&
                !(function(e) {
                  return Xr(e)
                    .map(Vx)
                    .getOr(!1);
                })(e) &&
                ia(e, function(e) {
                  return (
                    To.isContentEditableTrue(e.dom()) ||
                    To.isContentEditableFalse(e.dom())
                  );
                }).exists(function(e) {
                  return To.isContentEditableTrue(e.dom());
                })
              );
            });
          },
          Fx = function(e, t) {
            var n = e.dom,
              r = e.selection,
              o = e.formatter,
              i = _l(e),
              a = /[a-z%]+$/i.exec(i)[0],
              u = parseInt(i, 10),
              s = Ml(e),
              c = cl(e);
            e.queryCommandState("InsertUnorderedList") ||
              e.queryCommandState("InsertOrderedList") ||
              "" !== c ||
              n.getParent(r.getNode(), n.isBlock) ||
              o.apply("div"),
              j(Ix(e), function(e) {
                !(function(e, t, n, r, o, i) {
                  var a = Px(n, fr.fromDom(i));
                  if ("outdent" === t) {
                    var u = Math.max(0, Hx(i.style[a]) - r);
                    e.setStyle(i, a, u ? u + o : "");
                  } else (u = Hx(i.style[a]) + r + o), e.setStyle(i, a, u);
                })(n, t, s, u, a, e.dom());
              });
          },
          Ux = an.each,
          jx = an.map,
          qx = an.inArray,
          $x = (function() {
            function e(e) {
              (this.commands = { state: {}, exec: {}, value: {} }),
                (this.editor = e),
                this.setupCommands(e);
            }
            return (
              (e.prototype.execCommand = function(e, t, n, r) {
                var o,
                  i,
                  a = !1,
                  u = this;
                if (!u.editor.removed) {
                  if (
                    (/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(
                      e
                    ) ||
                    (r && r.skip_focus)
                      ? rf(u.editor)
                      : u.editor.focus(),
                    (r = u.editor.fire("BeforeExecCommand", {
                      command: e,
                      ui: t,
                      value: n
                    })).isDefaultPrevented())
                  )
                    return !1;
                  if (((i = e.toLowerCase()), (o = u.commands.exec[i])))
                    return (
                      o(i, t, n),
                      u.editor.fire("ExecCommand", {
                        command: e,
                        ui: t,
                        value: n
                      }),
                      !0
                    );
                  if (
                    (Ux(this.editor.plugins, function(r) {
                      if (r.execCommand && r.execCommand(e, t, n))
                        return (
                          u.editor.fire("ExecCommand", {
                            command: e,
                            ui: t,
                            value: n
                          }),
                          (a = !0),
                          !1
                        );
                    }),
                    a)
                  )
                    return a;
                  if (
                    u.editor.theme &&
                    u.editor.theme.execCommand &&
                    u.editor.theme.execCommand(e, t, n)
                  )
                    return (
                      u.editor.fire("ExecCommand", {
                        command: e,
                        ui: t,
                        value: n
                      }),
                      !0
                    );
                  try {
                    a = u.editor.getDoc().execCommand(e, t, n);
                  } catch (e) {}
                  return (
                    !!a &&
                    (u.editor.fire("ExecCommand", {
                      command: e,
                      ui: t,
                      value: n
                    }),
                    !0)
                  );
                }
              }),
              (e.prototype.queryCommandState = function(e) {
                var t;
                if (!this.editor.quirks.isHidden() && !this.editor.removed) {
                  if (((e = e.toLowerCase()), (t = this.commands.state[e])))
                    return t(e);
                  try {
                    return this.editor.getDoc().queryCommandState(e);
                  } catch (e) {}
                  return !1;
                }
              }),
              (e.prototype.queryCommandValue = function(e) {
                var t;
                if (!this.editor.quirks.isHidden() && !this.editor.removed) {
                  if (((e = e.toLowerCase()), (t = this.commands.value[e])))
                    return t(e);
                  try {
                    return this.editor.getDoc().queryCommandValue(e);
                  } catch (e) {}
                }
              }),
              (e.prototype.addCommands = function(e, t) {
                var n = this;
                (t = t || "exec"),
                  Ux(e, function(e, r) {
                    Ux(r.toLowerCase().split(","), function(r) {
                      n.commands[t][r] = e;
                    });
                  });
              }),
              (e.prototype.addCommand = function(e, t, n) {
                var r = this;
                (e = e.toLowerCase()),
                  (this.commands.exec[e] = function(e, o, i, a) {
                    return t.call(n || r.editor, o, i, a);
                  });
              }),
              (e.prototype.queryCommandSupported = function(e) {
                if (((e = e.toLowerCase()), this.commands.exec[e])) return !0;
                try {
                  return this.editor.getDoc().queryCommandSupported(e);
                } catch (e) {}
                return !1;
              }),
              (e.prototype.addQueryStateHandler = function(e, t, n) {
                var r = this;
                (e = e.toLowerCase()),
                  (this.commands.state[e] = function() {
                    return t.call(n || r.editor);
                  });
              }),
              (e.prototype.addQueryValueHandler = function(e, t, n) {
                var r = this;
                (e = e.toLowerCase()),
                  (this.commands.value[e] = function() {
                    return t.call(n || r.editor);
                  });
              }),
              (e.prototype.hasCustomCommand = function(e) {
                return (e = e.toLowerCase()), !!this.commands.exec[e];
              }),
              (e.prototype.execNativeCommand = function(e, t, n) {
                return (
                  void 0 === t && (t = !1),
                  void 0 === n && (n = null),
                  this.editor.getDoc().execCommand(e, t, n)
                );
              }),
              (e.prototype.isFormatMatch = function(e) {
                return this.editor.formatter.match(e);
              }),
              (e.prototype.toggleFormat = function(e, t) {
                this.editor.formatter.toggle(e, t ? { value: t } : void 0),
                  this.editor.nodeChanged();
              }),
              (e.prototype.storeSelection = function(e) {
                this.selectionBookmark = this.editor.selection.getBookmark(e);
              }),
              (e.prototype.restoreSelection = function() {
                this.editor.selection.moveToBookmark(this.selectionBookmark);
              }),
              (e.prototype.setupCommands = function(e) {
                var t = this;
                this.addCommands({
                  "mceResetDesignMode,mceBeginUndoLevel": function() {},
                  "mceEndUndoLevel,mceAddUndoLevel": function() {
                    e.undoManager.add();
                  },
                  "Cut,Copy,Paste": function(n) {
                    var r,
                      o = e.getDoc();
                    try {
                      t.execNativeCommand(n);
                    } catch (e) {
                      r = !0;
                    }
                    if (
                      ("paste" !== n || o.queryCommandEnabled(n) || (r = !0),
                      r || !o.queryCommandSupported(n))
                    ) {
                      var i = e.translate(
                        "Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead."
                      );
                      Le.mac && (i = i.replace(/Ctrl\+/g, "⌘+")),
                        e.notificationManager.open({ text: i, type: "error" });
                    }
                  },
                  unlink: function() {
                    if (e.selection.isCollapsed()) {
                      var t = e.dom.getParent(e.selection.getStart(), "a");
                      t && e.dom.remove(t, !0);
                    } else e.formatter.remove("link");
                  },
                  "JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone": function(
                    n
                  ) {
                    var r = n.substring(7);
                    "full" === r && (r = "justify"),
                      Ux("left,center,right,justify".split(","), function(t) {
                        r !== t && e.formatter.remove("align" + t);
                      }),
                      "none" !== r && t.toggleFormat("align" + r);
                  },
                  "InsertUnorderedList,InsertOrderedList": function(n) {
                    var r, o;
                    t.execNativeCommand(n),
                      (r = e.dom.getParent(e.selection.getNode(), "ol,ul")) &&
                        ((o = r.parentNode),
                        /^(H[1-6]|P|ADDRESS|PRE)$/.test(o.nodeName) &&
                          (t.storeSelection(),
                          e.dom.split(o, r),
                          t.restoreSelection()));
                  },
                  "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function(
                    e
                  ) {
                    t.toggleFormat(e);
                  },
                  "ForeColor,HiliteColor": function(e, n, r) {
                    t.toggleFormat(e, r);
                  },
                  FontName: function(t, n, r) {
                    !(function(e, t) {
                      e.formatter.toggle("fontname", { value: Dx(e, t) }),
                        e.nodeChanged();
                    })(e, r);
                  },
                  FontSize: function(t, n, r) {
                    !(function(e, t) {
                      e.formatter.toggle("fontsize", { value: Dx(e, t) }),
                        e.nodeChanged();
                    })(e, r);
                  },
                  RemoveFormat: function(t) {
                    e.formatter.remove(t);
                  },
                  mceBlockQuote: function() {
                    t.toggleFormat("blockquote");
                  },
                  FormatBlock: function(e, n, r) {
                    return t.toggleFormat(r || "p");
                  },
                  mceCleanup: function() {
                    var t = e.selection.getBookmark();
                    e.setContent(e.getContent()), e.selection.moveToBookmark(t);
                  },
                  mceRemoveNode: function(n, r, o) {
                    var i = o || e.selection.getNode();
                    i !== e.getBody() &&
                      (t.storeSelection(),
                      e.dom.remove(i, !0),
                      t.restoreSelection());
                  },
                  mceSelectNodeDepth: function(t, n, r) {
                    var o = 0;
                    e.dom.getParent(
                      e.selection.getNode(),
                      function(t) {
                        if (1 === t.nodeType && o++ === r)
                          return e.selection.select(t), !1;
                      },
                      e.getBody()
                    );
                  },
                  mceSelectNode: function(t, n, r) {
                    e.selection.select(r);
                  },
                  mceInsertContent: function(t, n, r) {
                    kx(e, r);
                  },
                  mceInsertRawHTML: function(t, n, r) {
                    e.selection.setContent("tiny_mce_marker");
                    var o = e.getContent();
                    e.setContent(
                      o.replace(/tiny_mce_marker/g, function() {
                        return r;
                      })
                    );
                  },
                  mceInsertNewLine: function(t, n, r) {
                    uw(e, r);
                  },
                  mceToggleFormat: function(e, n, r) {
                    t.toggleFormat(r);
                  },
                  mceSetContent: function(t, n, r) {
                    e.setContent(r);
                  },
                  "Indent,Outdent": function(t) {
                    Fx(e, t);
                  },
                  mceRepaint: function() {},
                  InsertHorizontalRule: function() {
                    e.execCommand("mceInsertContent", !1, "<hr />");
                  },
                  mceToggleVisualAid: function() {
                    (e.hasVisual = !e.hasVisual), e.addVisual();
                  },
                  mceReplaceContent: function(t, n, r) {
                    e.execCommand(
                      "mceInsertContent",
                      !1,
                      r.replace(
                        /\{\$selection\}/g,
                        e.selection.getContent({ format: "text" })
                      )
                    );
                  },
                  mceInsertLink: function(t, n, r) {
                    var o;
                    "string" == typeof r && (r = { href: r }),
                      (o = e.dom.getParent(e.selection.getNode(), "a")),
                      (r.href = r.href.replace(/ /g, "%20")),
                      (o && r.href) || e.formatter.remove("link"),
                      r.href && e.formatter.apply("link", r, o);
                  },
                  selectAll: function() {
                    var t = e.dom.getParent(
                      e.selection.getStart(),
                      To.isContentEditableTrue
                    );
                    if (t) {
                      var n = e.dom.createRng();
                      n.selectNodeContents(t), e.selection.setRng(n);
                    }
                  },
                  delete: function() {
                    Ax(e);
                  },
                  forwardDelete: function() {
                    Mx(e);
                  },
                  mceNewDocument: function() {
                    e.setContent("");
                  },
                  InsertLineBreak: function(t, n, r) {
                    return $C(e, r), !0;
                  }
                });
                var n = function(t) {
                  return function() {
                    var n = e.selection.isCollapsed()
                        ? [
                            e.dom.getParent(
                              e.selection.getNode(),
                              e.dom.isBlock
                            )
                          ]
                        : e.selection.getSelectedBlocks(),
                      r = jx(n, function(n) {
                        return !!e.formatter.matchNode(n, t);
                      });
                    return -1 !== qx(r, !0);
                  };
                };
                t.addCommands(
                  {
                    JustifyLeft: n("alignleft"),
                    JustifyCenter: n("aligncenter"),
                    JustifyRight: n("alignright"),
                    JustifyFull: n("alignjustify"),
                    "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function(
                      e
                    ) {
                      return t.isFormatMatch(e);
                    },
                    mceBlockQuote: function() {
                      return t.isFormatMatch("blockquote");
                    },
                    Outdent: function() {
                      return Lx(e);
                    },
                    "InsertUnorderedList,InsertOrderedList": function(t) {
                      var n = e.dom.getParent(e.selection.getNode(), "ul,ol");
                      return (
                        n &&
                        (("insertunorderedlist" === t && "UL" === n.tagName) ||
                          ("insertorderedlist" === t && "OL" === n.tagName))
                      );
                    }
                  },
                  "state"
                ),
                  t.addCommands({
                    Undo: function() {
                      e.undoManager.undo();
                    },
                    Redo: function() {
                      e.undoManager.redo();
                    }
                  }),
                  t.addQueryValueHandler(
                    "FontName",
                    function() {
                      return (function(e) {
                        return Ox(e).fold(
                          function() {
                            return Bx(e)
                              .map(function(t) {
                                return Rx.getFontFamily(e.getBody(), t);
                              })
                              .getOr("");
                          },
                          function(t) {
                            return Rx.getFontFamily(e.getBody(), t);
                          }
                        );
                      })(e);
                    },
                    this
                  ),
                  t.addQueryValueHandler(
                    "FontSize",
                    function() {
                      return (function(e) {
                        return Ox(e).fold(
                          function() {
                            return Bx(e)
                              .map(function(t) {
                                return Rx.getFontSize(e.getBody(), t);
                              })
                              .getOr("");
                          },
                          function(t) {
                            return Rx.getFontSize(e.getBody(), t);
                          }
                        );
                      })(e);
                    },
                    this
                  );
              }),
              e
            );
          })(),
          Wx = an.makeMap(
            "focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend",
            " "
          ),
          Kx = function() {
            return !1;
          },
          Xx = function() {
            return !0;
          },
          Yx = (function() {
            function e(e) {
              (this.bindings = {}),
                (this.settings = e || {}),
                (this.scope = this.settings.scope || this),
                (this.toggleEvent = this.settings.toggleEvent || Kx);
            }
            return (
              (e.isNative = function(e) {
                return !!Wx[e.toLowerCase()];
              }),
              (e.prototype.fire = function(e, t) {
                var n, r, o, i;
                if (
                  ((e = e.toLowerCase()),
                  ((t = t || {}).type = e),
                  t.target || (t.target = this.scope),
                  t.preventDefault ||
                    ((t.preventDefault = function() {
                      t.isDefaultPrevented = Xx;
                    }),
                    (t.stopPropagation = function() {
                      t.isPropagationStopped = Xx;
                    }),
                    (t.stopImmediatePropagation = function() {
                      t.isImmediatePropagationStopped = Xx;
                    }),
                    (t.isDefaultPrevented = Kx),
                    (t.isPropagationStopped = Kx),
                    (t.isImmediatePropagationStopped = Kx)),
                  this.settings.beforeFire && this.settings.beforeFire(t),
                  (n = this.bindings[e]))
                )
                  for (r = 0, o = n.length; r < o; r++) {
                    if (
                      ((i = n[r]).once && this.off(e, i.func),
                      t.isImmediatePropagationStopped())
                    )
                      return t.stopPropagation(), t;
                    if (!1 === i.func.call(this.scope, t))
                      return t.preventDefault(), t;
                  }
                return t;
              }),
              (e.prototype.on = function(e, t, n, r) {
                var o, i, a;
                if ((!1 === t && (t = Kx), t)) {
                  var u = { func: t };
                  for (
                    r && an.extend(u, r),
                      a = (i = e.toLowerCase().split(" ")).length;
                    a--;

                  )
                    (e = i[a]),
                      (o = this.bindings[e]) ||
                        ((o = this.bindings[e] = []), this.toggleEvent(e, !0)),
                      n ? o.unshift(u) : o.push(u);
                }
                return this;
              }),
              (e.prototype.off = function(e, t) {
                var n, r, o, i, a;
                if (e)
                  for (n = (i = e.toLowerCase().split(" ")).length; n--; ) {
                    if (((e = i[n]), (r = this.bindings[e]), !e)) {
                      for (o in this.bindings)
                        this.toggleEvent(o, !1), delete this.bindings[o];
                      return this;
                    }
                    if (r) {
                      if (t)
                        for (a = r.length; a--; )
                          r[a].func === t &&
                            ((r = r.slice(0, a).concat(r.slice(a + 1))),
                            (this.bindings[e] = r));
                      else r.length = 0;
                      r.length ||
                        (this.toggleEvent(e, !1), delete this.bindings[e]);
                    }
                  }
                else {
                  for (e in this.bindings) this.toggleEvent(e, !1);
                  this.bindings = {};
                }
                return this;
              }),
              (e.prototype.once = function(e, t, n) {
                return this.on(e, t, n, { once: !0 });
              }),
              (e.prototype.has = function(e) {
                return (
                  (e = e.toLowerCase()),
                  !(!this.bindings[e] || 0 === this.bindings[e].length)
                );
              }),
              e
            );
          })(),
          Gx = function(e) {
            return (
              e._eventDispatcher ||
                (e._eventDispatcher = new Yx({
                  scope: e,
                  toggleEvent: function(t, n) {
                    Yx.isNative(t) &&
                      e.toggleNativeEvent &&
                      e.toggleNativeEvent(t, n);
                  }
                })),
              e._eventDispatcher
            );
          },
          Jx = {
            fire: function(e, t, n) {
              if (this.removed && "remove" !== e && "detach" !== e) return t;
              var r = Gx(this).fire(e, t);
              if (!1 !== n && this.parent)
                for (var o = this.parent(); o && !r.isPropagationStopped(); )
                  o.fire(e, r, !1), (o = o.parent());
              return r;
            },
            on: function(e, t, n) {
              return Gx(this).on(e, t, n);
            },
            off: function(e, t) {
              return Gx(this).off(e, t);
            },
            once: function(e, t) {
              return Gx(this).once(e, t);
            },
            hasEventListeners: function(e) {
              return Gx(this).has(e);
            }
          },
          Qx = Si.DOM,
          Zx = function(e, t) {
            return "selectionchange" === t
              ? e.getDoc()
              : !e.inline &&
                /^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t)
              ? e.getDoc().documentElement
              : e.settings.event_root
              ? (e.eventRoot ||
                  (e.eventRoot = Qx.select(e.settings.event_root)[0]),
                e.eventRoot)
              : e.getBody();
          },
          ez = function(e, t, n) {
            !(function(e) {
              return !e.hidden && !lx(e);
            })(e)
              ? lx(e) &&
                (function(e) {
                  var t = e.target;
                  "click" === e.type && "A" === t.tagName && e.preventDefault();
                })(n)
              : e.fire(t, n);
          },
          tz = function(e, t) {
            var n, r;
            if (
              (e.delegates || (e.delegates = {}), !e.delegates[t] && !e.removed)
            )
              if (((n = Zx(e, t)), e.settings.event_root)) {
                if (
                  (ob ||
                    ((ob = {}),
                    e.editorManager.on("removeEditor", function() {
                      var t;
                      if (!e.editorManager.activeEditor && ob) {
                        for (t in ob) e.dom.unbind(Zx(e, t));
                        ob = null;
                      }
                    })),
                  ob[t])
                )
                  return;
                (r = function(n) {
                  for (
                    var r = n.target, o = e.editorManager.get(), i = o.length;
                    i--;

                  ) {
                    var a = o[i].getBody();
                    (a === r || Qx.isChildOf(r, a)) && ez(o[i], t, n);
                  }
                }),
                  (ob[t] = r),
                  Qx.bind(n, t, r);
              } else
                (r = function(n) {
                  ez(e, t, n);
                }),
                  Qx.bind(n, t, r),
                  (e.delegates[t] = r);
          },
          nz = Ai({}, Jx, {
            bindPendingEventDelegates: function() {
              var e = this;
              an.each(e._pendingNativeEvents, function(t) {
                tz(e, t);
              });
            },
            toggleNativeEvent: function(e, t) {
              "focus" !== e &&
                "blur" !== e &&
                (t
                  ? this.initialized
                    ? tz(this, e)
                    : this._pendingNativeEvents
                    ? this._pendingNativeEvents.push(e)
                    : (this._pendingNativeEvents = [e])
                  : this.initialized &&
                    (this.dom.unbind(Zx(this, e), e, this.delegates[e]),
                    delete this.delegates[e]));
            },
            unbindAllNativeEvents: function() {
              var e,
                t = this.getBody(),
                n = this.dom;
              if (this.delegates) {
                for (e in this.delegates)
                  this.dom.unbind(Zx(this, e), e, this.delegates[e]);
                delete this.delegates;
              }
              !this.inline &&
                t &&
                n &&
                ((t.onload = null),
                n.unbind(this.getWin()),
                n.unbind(this.getDoc())),
                n && (n.unbind(t), n.unbind(this.getContainer()));
            }
          }),
          rz = an.each,
          oz = an.explode,
          iz = {
            f1: 112,
            f2: 113,
            f3: 114,
            f4: 115,
            f5: 116,
            f6: 117,
            f7: 118,
            f8: 119,
            f9: 120,
            f10: 121,
            f11: 122,
            f12: 123
          },
          az = an.makeMap("alt,ctrl,shift,meta,access"),
          uz = (function() {
            function e(e) {
              (this.shortcuts = {}),
                (this.pendingPatterns = []),
                (this.editor = e);
              var t = this;
              e.on("keyup keypress keydown", function(e) {
                (!t.hasModifier(e) && !t.isFunctionKey(e)) ||
                  e.isDefaultPrevented() ||
                  (rz(t.shortcuts, function(n) {
                    if (t.matchShortcut(e, n))
                      return (
                        (t.pendingPatterns = n.subpatterns.slice(0)),
                        "keydown" === e.type && t.executeShortcutAction(n),
                        !0
                      );
                  }),
                  t.matchShortcut(e, t.pendingPatterns[0]) &&
                    (1 === t.pendingPatterns.length &&
                      "keydown" === e.type &&
                      t.executeShortcutAction(t.pendingPatterns[0]),
                    t.pendingPatterns.shift()));
              });
            }
            return (
              (e.prototype.add = function(e, t, n, r) {
                var o,
                  i = this;
                return (
                  (o = n),
                  "string" == typeof n
                    ? (n = function() {
                        i.editor.execCommand(o, !1, null);
                      })
                    : an.isArray(o) &&
                      (n = function() {
                        i.editor.execCommand(o[0], o[1], o[2]);
                      }),
                  rz(oz(an.trim(e.toLowerCase())), function(e) {
                    var o = i.createShortcut(e, t, n, r);
                    i.shortcuts[o.id] = o;
                  }),
                  !0
                );
              }),
              (e.prototype.remove = function(e) {
                var t = this.createShortcut(e);
                return (
                  !!this.shortcuts[t.id] && (delete this.shortcuts[t.id], !0)
                );
              }),
              (e.prototype.parseShortcut = function(e) {
                var t,
                  n,
                  r = {};
                for (n in (rz(oz(e, "+"), function(e) {
                  e in az
                    ? (r[e] = !0)
                    : /^[0-9]{2,}$/.test(e)
                    ? (r.keyCode = parseInt(e, 10))
                    : ((r.charCode = e.charCodeAt(0)),
                      (r.keyCode = iz[e] || e.toUpperCase().charCodeAt(0)));
                }),
                (t = [r.keyCode]),
                az))
                  r[n] ? t.push(n) : (r[n] = !1);
                return (
                  (r.id = t.join(",")),
                  r.access &&
                    ((r.alt = !0), Le.mac ? (r.ctrl = !0) : (r.shift = !0)),
                  r.meta &&
                    (Le.mac ? (r.meta = !0) : ((r.ctrl = !0), (r.meta = !1))),
                  r
                );
              }),
              (e.prototype.createShortcut = function(e, t, n, r) {
                var o;
                return (
                  ((o = an.map(oz(e, ">"), this.parseShortcut))[
                    o.length - 1
                  ] = an.extend(o[o.length - 1], {
                    func: n,
                    scope: r || this.editor
                  })),
                  an.extend(o[0], {
                    desc: this.editor.translate(t),
                    subpatterns: o.slice(1)
                  })
                );
              }),
              (e.prototype.hasModifier = function(e) {
                return e.altKey || e.ctrlKey || e.metaKey;
              }),
              (e.prototype.isFunctionKey = function(e) {
                return (
                  "keydown" === e.type && e.keyCode >= 112 && e.keyCode <= 123
                );
              }),
              (e.prototype.matchShortcut = function(e, t) {
                return (
                  !!t &&
                  t.ctrl === e.ctrlKey &&
                  t.meta === e.metaKey &&
                  t.alt === e.altKey &&
                  t.shift === e.shiftKey &&
                  !!(
                    e.keyCode === t.keyCode ||
                    (e.charCode && e.charCode === t.charCode)
                  ) &&
                  (e.preventDefault(), !0)
                );
              }),
              (e.prototype.executeShortcutAction = function(e) {
                return e.func ? e.func.call(e.scope) : null;
              }),
              e
            );
          })(),
          sz = an.each,
          cz = an.trim,
          lz = "source protocol authority userInfo user password host port relative path directory file query anchor".split(
            " "
          ),
          fz = { ftp: 21, http: 80, https: 443, mailto: 25 },
          dz = (function() {
            function e(n, r) {
              (n = cz(n)), (this.settings = r || {});
              var o = this.settings.base_uri,
                i = this;
              if (/^([\w\-]+):([^\/]{2})/i.test(n) || /^\s*#/.test(n))
                i.source = n;
              else {
                var a = 0 === n.indexOf("//");
                if (
                  (0 !== n.indexOf("/") ||
                    a ||
                    (n = ((o && o.protocol) || "http") + "://mce_host" + n),
                  !/^[\w\-]*:?\/\//.test(n))
                ) {
                  var u = this.settings.base_uri
                    ? this.settings.base_uri.path
                    : new e(t.document.location.href).directory;
                  if ("" == this.settings.base_uri.protocol)
                    n = "//mce_host" + i.toAbsPath(u, n);
                  else {
                    var s = /([^#?]*)([#?]?.*)/.exec(n);
                    n =
                      ((o && o.protocol) || "http") +
                      "://mce_host" +
                      i.toAbsPath(u, s[1]) +
                      s[2];
                  }
                }
                n = n.replace(/@@/g, "(mce_at)");
                var c = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(
                  n
                );
                sz(lz, function(e, t) {
                  var n = c[t];
                  n && (n = n.replace(/\(mce_at\)/g, "@@")), (i[e] = n);
                }),
                  o &&
                    (i.protocol || (i.protocol = o.protocol),
                    i.userInfo || (i.userInfo = o.userInfo),
                    i.port || "mce_host" !== i.host || (i.port = o.port),
                    (i.host && "mce_host" !== i.host) || (i.host = o.host),
                    (i.source = "")),
                  a && (i.protocol = "");
              }
            }
            return (
              (e.parseDataUri = function(e) {
                var t,
                  n = decodeURIComponent(e).split(","),
                  r = /data:([^;]+)/.exec(n[0]);
                return r && (t = r[1]), { type: t, data: n[1] };
              }),
              (e.getDocumentBaseUrl = function(e) {
                var t;
                return (
                  (t =
                    0 !== e.protocol.indexOf("http") && "file:" !== e.protocol
                      ? e.href
                      : e.protocol + "//" + e.host + e.pathname),
                  /^[^:]+:\/\/\/?[^\/]+\//.test(t) &&
                    ((t = t
                      .replace(/[\?#].*$/, "")
                      .replace(/[\/\\][^\/]+$/, "")),
                    /[\/\\]$/.test(t) || (t += "/")),
                  t
                );
              }),
              (e.prototype.setPath = function(e) {
                var t = /^(.*?)\/?(\w+)?$/.exec(e);
                (this.path = t[0]),
                  (this.directory = t[1]),
                  (this.file = t[2]),
                  (this.source = ""),
                  this.getURI();
              }),
              (e.prototype.toRelative = function(t) {
                var n;
                if ("./" === t) return t;
                var r = new e(t, { base_uri: this });
                if (
                  ("mce_host" !== r.host && this.host !== r.host && r.host) ||
                  this.port !== r.port ||
                  (this.protocol !== r.protocol && "" !== r.protocol)
                )
                  return r.getURI();
                var o = this.getURI(),
                  i = r.getURI();
                return o === i ||
                  ("/" === o.charAt(o.length - 1) &&
                    o.substr(0, o.length - 1) === i)
                  ? o
                  : ((n = this.toRelPath(this.path, r.path)),
                    r.query && (n += "?" + r.query),
                    r.anchor && (n += "#" + r.anchor),
                    n);
              }),
              (e.prototype.toAbsolute = function(t, n) {
                var r = new e(t, { base_uri: this });
                return r.getURI(n && this.isSameOrigin(r));
              }),
              (e.prototype.isSameOrigin = function(e) {
                if (this.host == e.host && this.protocol == e.protocol) {
                  if (this.port == e.port) return !0;
                  var t = fz[this.protocol];
                  if (t && (this.port || t) == (e.port || t)) return !0;
                }
                return !1;
              }),
              (e.prototype.toRelPath = function(e, t) {
                var n,
                  r,
                  o,
                  i = 0,
                  a = "",
                  u = e.substring(0, e.lastIndexOf("/")).split("/");
                if (((n = t.split("/")), u.length >= n.length))
                  for (r = 0, o = u.length; r < o; r++)
                    if (r >= n.length || u[r] !== n[r]) {
                      i = r + 1;
                      break;
                    }
                if (u.length < n.length)
                  for (r = 0, o = n.length; r < o; r++)
                    if (r >= u.length || u[r] !== n[r]) {
                      i = r + 1;
                      break;
                    }
                if (1 === i) return t;
                for (r = 0, o = u.length - (i - 1); r < o; r++) a += "../";
                for (r = i - 1, o = n.length; r < o; r++)
                  a += r !== i - 1 ? "/" + n[r] : n[r];
                return a;
              }),
              (e.prototype.toAbsPath = function(e, t) {
                var n,
                  r,
                  o,
                  i = 0,
                  a = [];
                r = /\/$/.test(t) ? "/" : "";
                var u = e.split("/"),
                  s = t.split("/");
                for (
                  sz(u, function(e) {
                    e && a.push(e);
                  }),
                    u = a,
                    n = s.length - 1,
                    a = [];
                  n >= 0;
                  n--
                )
                  0 !== s[n].length &&
                    "." !== s[n] &&
                    (".." !== s[n] ? (i > 0 ? i-- : a.push(s[n])) : i++);
                return (
                  0 !==
                    (o =
                      (n = u.length - i) <= 0
                        ? a.reverse().join("/")
                        : u.slice(0, n).join("/") +
                          "/" +
                          a.reverse().join("/")).indexOf("/") && (o = "/" + o),
                  r && o.lastIndexOf("/") !== o.length - 1 && (o += r),
                  o
                );
              }),
              (e.prototype.getURI = function(e) {
                var t;
                return (
                  void 0 === e && (e = !1),
                  (this.source && !e) ||
                    ((t = ""),
                    e ||
                      (this.protocol
                        ? (t += this.protocol + "://")
                        : (t += "//"),
                      this.userInfo && (t += this.userInfo + "@"),
                      this.host && (t += this.host),
                      this.port && (t += ":" + this.port)),
                    this.path && (t += this.path),
                    this.query && (t += "?" + this.query),
                    this.anchor && (t += "#" + this.anchor),
                    (this.source = t)),
                  this.source
                );
              }),
              e
            );
          })(),
          hz = function() {
            var e,
              t,
              n,
              r,
              o,
              i,
              a,
              u,
              s = ((t = {}),
              (n = {}),
              (r = {}),
              (o = {}),
              (i = {}),
              (a = {}),
              {
                addButton: (u = function(e, t) {
                  return function(n, r) {
                    return (e[n.toLowerCase()] = qg({ type: t }, r));
                  };
                })((e = {}), "button"),
                addToggleButton: u(e, "togglebutton"),
                addMenuButton: u(e, "menubutton"),
                addSplitButton: u(e, "splitbutton"),
                addMenuItem: u(t, "menuitem"),
                addNestedMenuItem: u(t, "nestedmenuitem"),
                addToggleMenuItem: u(t, "togglemenuitem"),
                addAutocompleter: u(n, "autocompleter"),
                addContextMenu: u(o, "contextmenu"),
                addContextToolbar: u(i, "contexttoolbar"),
                addContextForm: u(i, "contextform"),
                addSidebar: u(a, "sidebar"),
                addIcon: function(e, t) {
                  return (r[e.toLowerCase()] = t);
                },
                getAll: function() {
                  return {
                    buttons: e,
                    menuItems: t,
                    icons: r,
                    popups: n,
                    contextMenus: o,
                    contextToolbars: i,
                    sidebars: a
                  };
                }
              });
            return {
              addAutocompleter: s.addAutocompleter,
              addButton: s.addButton,
              addContextForm: s.addContextForm,
              addContextMenu: s.addContextMenu,
              addContextToolbar: s.addContextToolbar,
              addIcon: s.addIcon,
              addMenuButton: s.addMenuButton,
              addMenuItem: s.addMenuItem,
              addNestedMenuItem: s.addNestedMenuItem,
              addSidebar: s.addSidebar,
              addSplitButton: s.addSplitButton,
              addToggleButton: s.addToggleButton,
              addToggleMenuItem: s.addToggleMenuItem,
              getAll: s.getAll
            };
          },
          mz = Si.DOM,
          gz = an.extend,
          pz = an.each,
          vz = an.resolve,
          bz = Le.ie,
          yz = (function() {
            function e(e, t, n) {
              var r = this;
              (this.plugins = {}),
                (this.contentCSS = []),
                (this.contentStyles = []),
                (this.loadedCSS = {}),
                (this.isNotDirty = !1),
                (this.editorManager = n),
                (this.documentBaseUrl = n.documentBaseURL),
                (this.baseUri = n.baseURI),
                gz(this, nz),
                (this.settings = Vf(
                  this,
                  e,
                  this.documentBaseUrl,
                  n.defaultSettings,
                  t
                )),
                (Pi.languageLoad = this.settings.language_load),
                (Pi.baseURL = n.baseURL),
                (this.id = e),
                this.setDirty(!1),
                (this.documentBaseURI = new dz(
                  this.settings.document_base_url,
                  { base_uri: this.baseUri }
                )),
                (this.baseURI = this.baseUri),
                (this.inline = this.settings.inline),
                (this.suffix = n.suffix),
                (this.shortcuts = new uz(this)),
                (this.editorCommands = new $x(this)),
                this.settings.cache_suffix &&
                  (Le.cacheSuffix = this.settings.cache_suffix.replace(
                    /^[\?\&]+/,
                    ""
                  )),
                (this.ui = { registry: hz() });
              var o = mx(this);
              (this.mode = o),
                (this.setMode = o.set),
                n.fire("SetupEditor", { editor: this }),
                this.execCallback("setup", this),
                (this.$ = Fn.overrideDefaults(function() {
                  return {
                    context: r.inline ? r.getBody() : r.getDoc(),
                    element: r.getBody()
                  };
                }));
            }
            return (
              (e.prototype.render = function() {
                ax(this);
              }),
              (e.prototype.focus = function(e) {
                df(this, e);
              }),
              (e.prototype.hasFocus = function() {
                return hf(this);
              }),
              (e.prototype.execCallback = function(e) {
                for (var t = [], n = 1; n < arguments.length; n++)
                  t[n - 1] = arguments[n];
                var r,
                  o = this.settings[e];
                if (o)
                  return (
                    this.callbackLookup &&
                      (r = this.callbackLookup[e]) &&
                      ((o = r.func), (r = r.scope)),
                    "string" == typeof o &&
                      ((r = (r = o.replace(/\.\w+$/, "")) ? vz(r) : 0),
                      (o = vz(o)),
                      (this.callbackLookup = this.callbackLookup || {}),
                      (this.callbackLookup[e] = { func: o, scope: r })),
                    o.apply(r || this, Array.prototype.slice.call(arguments, 1))
                  );
              }),
              (e.prototype.translate = function(e) {
                return Oi.translate(e);
              }),
              (e.prototype.getParam = function(e, t, n) {
                return Uf(this, e, t, n);
              }),
              (e.prototype.nodeChanged = function(e) {
                this._nodeChangeDispatcher.nodeChanged(e);
              }),
              (e.prototype.addCommand = function(e, t, n) {
                this.editorCommands.addCommand(e, t, n);
              }),
              (e.prototype.addQueryStateHandler = function(e, t, n) {
                this.editorCommands.addQueryStateHandler(e, t, n);
              }),
              (e.prototype.addQueryValueHandler = function(e, t, n) {
                this.editorCommands.addQueryValueHandler(e, t, n);
              }),
              (e.prototype.addShortcut = function(e, t, n, r) {
                this.shortcuts.add(e, t, n, r);
              }),
              (e.prototype.execCommand = function(e, t, n, r) {
                return this.editorCommands.execCommand(e, t, n, r);
              }),
              (e.prototype.queryCommandState = function(e) {
                return this.editorCommands.queryCommandState(e);
              }),
              (e.prototype.queryCommandValue = function(e) {
                return this.editorCommands.queryCommandValue(e);
              }),
              (e.prototype.queryCommandSupported = function(e) {
                return this.editorCommands.queryCommandSupported(e);
              }),
              (e.prototype.show = function() {
                this.hidden &&
                  ((this.hidden = !1),
                  this.inline
                    ? (this.getBody().contentEditable = "true")
                    : (mz.show(this.getContainer()), mz.hide(this.id)),
                  this.load(),
                  this.fire("show"));
              }),
              (e.prototype.hide = function() {
                var e = this.getDoc();
                this.hidden ||
                  (bz && e && !this.inline && e.execCommand("SelectAll"),
                  this.save(),
                  this.inline
                    ? ((this.getBody().contentEditable = "false"),
                      this === this.editorManager.focusedEditor &&
                        (this.editorManager.focusedEditor = null))
                    : (mz.hide(this.getContainer()),
                      mz.setStyle(this.id, "display", this.orgDisplay)),
                  (this.hidden = !0),
                  this.fire("hide"));
              }),
              (e.prototype.isHidden = function() {
                return !!this.hidden;
              }),
              (e.prototype.setProgressState = function(e, t) {
                this.fire("ProgressState", { state: e, time: t });
              }),
              (e.prototype.load = function(e) {
                var t,
                  n = this.getElement();
                if (this.removed) return "";
                if (n) {
                  (e = e || {}).load = !0;
                  var r = n.value;
                  return (
                    (t = this.setContent(void 0 !== r ? r : n.innerHTML, e)),
                    (e.element = n),
                    e.no_events || this.fire("LoadContent", e),
                    (e.element = n = null),
                    t
                  );
                }
              }),
              (e.prototype.save = function(e) {
                var t,
                  n,
                  r = this,
                  o = r.getElement();
                if (o && r.initialized && !r.removed)
                  return (
                    ((e = e || {}).save = !0),
                    (e.element = o),
                    (e.content = r.getContent(e)),
                    e.no_events || r.fire("SaveContent", e),
                    "raw" === e.format && r.fire("RawSaveContent", e),
                    (t = e.content),
                    /TEXTAREA|INPUT/i.test(o.nodeName)
                      ? (o.value = t)
                      : ((!e.is_removing && r.inline) || (o.innerHTML = t),
                        (n = mz.getParent(r.id, "form")) &&
                          pz(n.elements, function(e) {
                            if (e.name === r.id) return (e.value = t), !1;
                          })),
                    (e.element = o = null),
                    !1 !== e.set_dirty && r.setDirty(!1),
                    t
                  );
              }),
              (e.prototype.setContent = function(e, t) {
                return pf(this, e, t);
              }),
              (e.prototype.getContent = function(e) {
                return (function(e, t) {
                  return (
                    void 0 === t && (t = {}),
                    A.from(e.getBody()).fold(
                      o("tree" === t.format ? new $c("body", 11) : ""),
                      function(n) {
                        return Ol(e, t, n);
                      }
                    )
                  );
                })(this, e);
              }),
              (e.prototype.insertContent = function(e, t) {
                t && (e = gz({ content: e }, t)),
                  this.execCommand("mceInsertContent", !1, e);
              }),
              (e.prototype.resetContent = function(e) {
                void 0 === e
                  ? pf(this, this.startContent, { format: "raw" })
                  : pf(this, e),
                  this.undoManager.reset(),
                  this.setDirty(!1),
                  this.nodeChanged();
              }),
              (e.prototype.isDirty = function() {
                return !this.isNotDirty;
              }),
              (e.prototype.setDirty = function(e) {
                var t = !this.isNotDirty;
                (this.isNotDirty = !e), e && e !== t && this.fire("dirty");
              }),
              (e.prototype.getContainer = function() {
                return (
                  this.container ||
                    (this.container = mz.get(
                      this.editorContainer || this.id + "_parent"
                    )),
                  this.container
                );
              }),
              (e.prototype.getContentAreaContainer = function() {
                return this.contentAreaContainer;
              }),
              (e.prototype.getElement = function() {
                return (
                  this.targetElm || (this.targetElm = mz.get(this.id)),
                  this.targetElm
                );
              }),
              (e.prototype.getWin = function() {
                var e;
                return (
                  this.contentWindow ||
                    ((e = this.iframeElement) &&
                      (this.contentWindow = e.contentWindow)),
                  this.contentWindow
                );
              }),
              (e.prototype.getDoc = function() {
                var e;
                return (
                  this.contentDocument ||
                    ((e = this.getWin()) &&
                      (this.contentDocument = e.document)),
                  this.contentDocument
                );
              }),
              (e.prototype.getBody = function() {
                var e = this.getDoc();
                return this.bodyElement || (e ? e.body : null);
              }),
              (e.prototype.convertURL = function(e, t, n) {
                var r = this.settings;
                return r.urlconverter_callback
                  ? this.execCallback("urlconverter_callback", e, n, !0, t)
                  : !r.convert_urls ||
                    (n && "LINK" === n.nodeName) ||
                    0 === e.indexOf("file:") ||
                    0 === e.length
                  ? e
                  : r.relative_urls
                  ? this.documentBaseURI.toRelative(e)
                  : (e = this.documentBaseURI.toAbsolute(
                      e,
                      r.remove_script_host
                    ));
              }),
              (e.prototype.addVisual = function(e) {
                var t,
                  n = this,
                  r = n.settings,
                  o = n.dom;
                (e = e || n.getBody()),
                  void 0 === n.hasVisual && (n.hasVisual = r.visual),
                  pz(o.select("table,a", e), function(e) {
                    var i;
                    switch (e.nodeName) {
                      case "TABLE":
                        return (
                          (t = r.visual_table_class || "mce-item-table"),
                          void (((i = o.getAttrib(e, "border")) && "0" !== i) ||
                          !n.hasVisual
                            ? o.removeClass(e, t)
                            : o.addClass(e, t))
                        );
                      case "A":
                        return void (
                          o.getAttrib(e, "href") ||
                          ((i = o.getAttrib(e, "name") || e.id),
                          (t = r.visual_anchor_class || "mce-item-anchor"),
                          i && n.hasVisual
                            ? o.addClass(e, t)
                            : o.removeClass(e, t))
                        );
                    }
                  }),
                  n.fire("VisualAid", { element: e, hasVisual: n.hasVisual });
              }),
              (e.prototype.remove = function() {
                Ef(this);
              }),
              (e.prototype.destroy = function(e) {
                kf(this, e);
              }),
              (e.prototype.uploadImages = function(e) {
                return this.editorUpload.uploadImages(e);
              }),
              (e.prototype._scanForImages = function() {
                return this.editorUpload.scanForImages();
              }),
              (e.prototype.addButton = function() {
                throw new Error(
                  "editor.addButton has been removed in tinymce 5x, use editor.ui.registry.addButton or editor.ui.registry.addToggleButton or editor.ui.registry.addSplitButton instead"
                );
              }),
              (e.prototype.addSidebar = function() {
                throw new Error(
                  "editor.addSidebar has been removed in tinymce 5x, use editor.ui.registry.addSidebar instead"
                );
              }),
              (e.prototype.addMenuItem = function() {
                throw new Error(
                  "editor.addMenuItem has been removed in tinymce 5x, use editor.ui.registry.addMenuItem instead"
                );
              }),
              (e.prototype.addContextToolbar = function() {
                throw new Error(
                  "editor.addContextToolbar has been removed in tinymce 5x, use editor.ui.registry.addContextToolbar instead"
                );
              }),
              e
            );
          })(),
          Cz = {
            isEditorUIElement: function(e) {
              return (
                -1 !== e.className.toString().indexOf("tox-") ||
                -1 !== e.className.toString().indexOf("mce-")
              );
            }
          },
          wz = function(e, t) {
            cr.detect().browser.isIE()
              ? (function(e) {
                  e.on("focusout", function() {
                    nf(e);
                  });
                })(e)
              : (function(e, t) {
                  e.on("mouseup touchend", function(e) {
                    t.throttle();
                  });
                })(e, t),
              e.on("keyup NodeChange", function(t) {
                (function(e) {
                  return "nodechange" === e.type && e.selectionChange;
                })(t) || nf(e);
              });
          },
          xz = function(e) {
            var n = Wi(function() {
              nf(e);
            }, 0);
            e.inline &&
              (function(e, n) {
                var r = function() {
                  n.throttle();
                };
                Si.DOM.bind(t.document, "mouseup", r),
                  e.on("remove", function() {
                    Si.DOM.unbind(t.document, "mouseup", r);
                  });
              })(e, n),
              e.on("init", function() {
                wz(e, n);
              }),
              e.on("remove", function() {
                n.cancel();
              });
          },
          zz = Si.DOM,
          Sz = function(e) {
            return Cz.isEditorUIElement(e);
          },
          Nz = function(e, t) {
            var n = e ? e.settings.custom_ui_selector : "";
            return (
              null !==
              zz.getParent(t, function(t) {
                return Sz(t) || (!!n && e.dom.is(t, n));
              })
            );
          },
          Ez = function(e, n) {
            var r = n.editor;
            xz(r),
              r.on("focusin", function() {
                var t = e.focusedEditor;
                t !== this &&
                  (t && t.fire("blur", { focusedEditor: this }),
                  e.setActive(this),
                  (e.focusedEditor = this),
                  this.fire("focus", { blurredEditor: t }),
                  this.focus(!0));
              }),
              r.on("focusout", function() {
                var n = this;
                je.setEditorTimeout(n, function() {
                  var r = e.focusedEditor;
                  Nz(
                    n,
                    (function() {
                      try {
                        return t.document.activeElement;
                      } catch (e) {
                        return t.document.body;
                      }
                    })()
                  ) ||
                    r !== n ||
                    (n.fire("blur", { focusedEditor: null }),
                    (e.focusedEditor = null));
                });
              }),
              ib ||
                ((ib = function(n) {
                  var r,
                    o = e.activeEditor;
                  (r = n.target),
                    o &&
                      r.ownerDocument === t.document &&
                      (r === t.document.body ||
                        Nz(o, r) ||
                        e.focusedEditor !== o ||
                        (o.fire("blur", { focusedEditor: null }),
                        (e.focusedEditor = null)));
                }),
                zz.bind(t.document, "focusin", ib));
          },
          kz = function(e, n) {
            e.focusedEditor === n.editor && (e.focusedEditor = null),
              e.activeEditor ||
                (zz.unbind(t.document, "focusin", ib), (ib = null));
          },
          Tz = function(e) {
            e.on("AddEditor", a(Ez, e)), e.on("RemoveEditor", a(kz, e));
          },
          Az = Si.DOM,
          Mz = an.explode,
          _z = an.each,
          Rz = an.extend,
          Bz = 0,
          Oz = !1,
          Dz = [],
          Hz = [],
          Pz = function(e) {
            var t = e.type;
            _z(Iz.get(), function(n) {
              switch (t) {
                case "scroll":
                  n.fire("ScrollWindow", e);
                  break;
                case "resize":
                  n.fire("ResizeWindow", e);
              }
            });
          },
          Lz = function(e) {
            e !== Oz &&
              (e
                ? Fn(window).on("resize scroll", Pz)
                : Fn(window).off("resize scroll", Pz),
              (Oz = e));
          },
          Vz = function(e) {
            var t = Hz;
            delete Dz[e.id];
            for (var n = 0; n < Dz.length; n++)
              if (Dz[n] === e) {
                Dz.splice(n, 1);
                break;
              }
            return (
              (Hz = W(Hz, function(t) {
                return e !== t;
              })),
              Iz.activeEditor === e &&
                (Iz.activeEditor = Hz.length > 0 ? Hz[0] : null),
              Iz.focusedEditor === e && (Iz.focusedEditor = null),
              t.length !== Hz.length
            );
          },
          Iz = Ai({}, Jx, {
            _beforeUnloadHandler: null,
            baseURI: null,
            baseURL: null,
            defaultSettings: {},
            documentBaseURL: null,
            suffix: null,
            $: Fn,
            majorVersion: "5",
            minorVersion: "0.6",
            releaseDate: "2019-05-22",
            editors: Dz,
            i18n: Oi,
            activeEditor: null,
            focusedEditor: null,
            settings: {},
            setup: function() {
              var e,
                n,
                r,
                o,
                i = "";
              if (
                ((n = dz.getDocumentBaseUrl(t.document.location)),
                /^[^:]+:\/\/\/?[^\/]+\//.test(n) &&
                  ((n = n.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, "")),
                  /[\/\\]$/.test(n) || (n += "/")),
                (r = window.tinymce || window.tinyMCEPreInit))
              )
                (e = r.base || r.baseURL), (i = r.suffix);
              else {
                for (
                  var a = t.document.getElementsByTagName("script"), u = 0;
                  u < a.length;
                  u++
                ) {
                  var s = (o = a[u].src).substring(o.lastIndexOf("/"));
                  if (/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(o)) {
                    -1 !== s.indexOf(".min") && (i = ".min"),
                      (e = o.substring(0, o.lastIndexOf("/")));
                    break;
                  }
                }
                !e &&
                  t.document.currentScript &&
                  (-1 !== (o = t.document.currentScript.src).indexOf(".min") &&
                    (i = ".min"),
                  (e = o.substring(0, o.lastIndexOf("/"))));
              }
              (this.baseURL = new dz(n).toAbsolute(e)),
                (this.documentBaseURL = n),
                (this.baseURI = new dz(this.baseURL)),
                (this.suffix = i),
                Tz(this);
            },
            overrideDefaults: function(e) {
              var t, n;
              (t = e.base_url) &&
                ((this.baseURL = new dz(this.documentBaseURL).toAbsolute(
                  t.replace(/\/+$/, "")
                )),
                (this.baseURI = new dz(this.baseURL))),
                (n = e.suffix),
                e.suffix && (this.suffix = n),
                (this.defaultSettings = e);
              var r = e.plugin_base_urls;
              for (var o in r) Pi.PluginManager.urls[o] = r[o];
            },
            init: function(e) {
              var n,
                r,
                o = this;
              r = an.makeMap(
                "area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option table tbody tfoot thead tr th td script noscript style textarea video audio iframe object menu",
                " "
              );
              var i = function(e) {
                  var t = e.id;
                  return (
                    t ||
                      ((t =
                        (t = e.name) && !Az.get(t) ? e.name : Az.uniqueId()),
                      e.setAttribute("id", t)),
                    t
                  );
                },
                a = function(e, t) {
                  return t.constructor === RegExp
                    ? t.test(e.className)
                    : Az.hasClass(e, t);
                },
                u = function(e) {
                  n = e;
                },
                s = function() {
                  var n,
                    c = 0,
                    l = [],
                    f = function(e, t, r) {
                      var i = new yz(e, t, o);
                      l.push(i),
                        i.on("init", function() {
                          ++c === n.length && u(l);
                        }),
                        (i.targetElm = i.targetElm || r),
                        i.render();
                    };
                  Az.unbind(window, "ready", s),
                    (function(t) {
                      var n = e[t];
                      n && n.apply(o, Array.prototype.slice.call(arguments, 2));
                    })("onpageload"),
                    (n = Fn.unique(
                      (function(e) {
                        var n,
                          r = [];
                        if (Le.ie && Le.ie < 11)
                          return (
                            od.initError(
                              "TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tinymce.com/docs/get-started/system-requirements/"
                            ),
                            []
                          );
                        if (e.types)
                          return (
                            _z(e.types, function(e) {
                              r = r.concat(Az.select(e.selector));
                            }),
                            r
                          );
                        if (e.selector) return Az.select(e.selector);
                        if (e.target) return [e.target];
                        switch (e.mode) {
                          case "exact":
                            (n = e.elements || "").length > 0 &&
                              _z(Mz(n), function(e) {
                                var n;
                                (n = Az.get(e))
                                  ? r.push(n)
                                  : _z(t.document.forms, function(t) {
                                      _z(t.elements, function(t) {
                                        t.name === e &&
                                          ((e = "mce_editor_" + Bz++),
                                          Az.setAttrib(t, "id", e),
                                          r.push(t));
                                      });
                                    });
                              });
                            break;
                          case "textareas":
                          case "specific_textareas":
                            _z(Az.select("textarea"), function(t) {
                              (e.editor_deselector &&
                                a(t, e.editor_deselector)) ||
                                (e.editor_selector &&
                                  !a(t, e.editor_selector)) ||
                                r.push(t);
                            });
                        }
                        return r;
                      })(e)
                    )),
                    e.types
                      ? _z(e.types, function(t) {
                          an.each(n, function(n) {
                            return (
                              !Az.is(n, t.selector) ||
                              (f(i(n), Rz({}, e, t), n), !1)
                            );
                          });
                        })
                      : (an.each(n, function(e) {
                          var t;
                          (t = o.get(e.id)) &&
                            t.initialized &&
                            !(t.getContainer() || t.getBody()).parentNode &&
                            (Vz(t),
                            t.unbindAllNativeEvents(),
                            t.destroy(!0),
                            (t.removed = !0),
                            (t = null));
                        }),
                        0 ===
                        (n = an.grep(n, function(e) {
                          return !o.get(e.id);
                        })).length
                          ? u([])
                          : _z(n, function(t) {
                              !(function(e, t) {
                                return e.inline && t.tagName.toLowerCase() in r;
                              })(e, t)
                                ? f(i(t), e, t)
                                : od.initError(
                                    "Could not initialize inline editor on invalid inline target element",
                                    t
                                  );
                            }));
                };
              return (
                (o.settings = e),
                Az.bind(window, "ready", s),
                new Ve(function(e) {
                  n
                    ? e(n)
                    : (u = function(t) {
                        e(t);
                      });
                })
              );
            },
            get: function(e) {
              return 0 === arguments.length
                ? Hz.slice(0)
                : _(e)
                ? Y(Hz, function(t) {
                    return t.id === e;
                  }).getOr(null)
                : P(e) && Hz[e]
                ? Hz[e]
                : null;
            },
            add: function(e) {
              var t = this;
              return Dz[e.id] === e
                ? e
                : (null === t.get(e.id) &&
                    ("length" !== e.id && (Dz[e.id] = e),
                    Dz.push(e),
                    Hz.push(e)),
                  Lz(!0),
                  (t.activeEditor = e),
                  t.fire("AddEditor", { editor: e }),
                  ab ||
                    ((ab = function() {
                      t.fire("BeforeUnload");
                    }),
                    Az.bind(window, "beforeunload", ab)),
                  e);
            },
            createEditor: function(e, t) {
              return this.add(new yz(e, t, this));
            },
            remove: function(e) {
              var t,
                n,
                r = this;
              if (e) {
                if (!_(e))
                  return (
                    (n = e),
                    O(r.get(n.id))
                      ? null
                      : (Vz(n) && r.fire("RemoveEditor", { editor: n }),
                        0 === Hz.length &&
                          Az.unbind(window, "beforeunload", ab),
                        n.remove(),
                        Lz(Hz.length > 0),
                        n)
                  );
                _z(Az.select(e), function(e) {
                  (n = r.get(e.id)) && r.remove(n);
                });
              } else for (t = Hz.length - 1; t >= 0; t--) r.remove(Hz[t]);
            },
            execCommand: function(e, t, n) {
              var r = this.get(n);
              switch (e) {
                case "mceAddEditor":
                  return (
                    this.get(n) || new yz(n, this.settings, this).render(), !0
                  );
                case "mceRemoveEditor":
                  return r && r.remove(), !0;
                case "mceToggleEditor":
                  return r
                    ? (r.isHidden() ? r.show() : r.hide(), !0)
                    : (this.execCommand("mceAddEditor", 0, n), !0);
              }
              return (
                !!this.activeEditor && this.activeEditor.execCommand(e, t, n)
              );
            },
            triggerSave: function() {
              _z(Hz, function(e) {
                e.save();
              });
            },
            addI18n: function(e, t) {
              Oi.add(e, t);
            },
            translate: function(e) {
              return Oi.translate(e);
            },
            setActive: function(e) {
              var t = this.activeEditor;
              this.activeEditor !== e &&
                (t && t.fire("deactivate", { relatedTarget: e }),
                e.fire("activate", { relatedTarget: t })),
                (this.activeEditor = e);
            }
          });
        function Fz(e) {
          return {
            walk: function(t, n) {
              return Oc.walk(e, t, n);
            },
            split: gm,
            normalize: function(t) {
              return rv.normalize(e, t).fold(o(!1), function(e) {
                return (
                  t.setStart(e.startContainer, e.startOffset),
                  t.setEnd(e.endContainer, e.endOffset),
                  !0
                );
              });
            }
          };
        }
        Iz.setup(),
          (function(e) {
            (e.compareRanges = Bd.isEq),
              (e.getCaretRangeFromPoint = yp),
              (e.getSelectedNode = ru),
              (e.getNode = ou);
          })(Fz || (Fz = {}));
        var Uz,
          jz,
          qz = Fz,
          $z = Math.min,
          Wz = Math.max,
          Kz = Math.round,
          Xz = function(e, t, n) {
            var r, o, i, a, u, s;
            return (
              (r = t.x),
              (o = t.y),
              (i = e.w),
              (a = e.h),
              (u = t.w),
              (s = t.h),
              "b" === (n = (n || "").split(""))[0] && (o += s),
              "r" === n[1] && (r += u),
              "c" === n[0] && (o += Kz(s / 2)),
              "c" === n[1] && (r += Kz(u / 2)),
              "b" === n[3] && (o -= a),
              "r" === n[4] && (r -= i),
              "c" === n[3] && (o -= Kz(a / 2)),
              "c" === n[4] && (r -= Kz(i / 2)),
              Yz(r, o, i, a)
            );
          },
          Yz = function(e, t, n, r) {
            return { x: e, y: t, w: n, h: r };
          },
          Gz = {
            inflate: function(e, t, n) {
              return Yz(e.x - t, e.y - n, e.w + 2 * t, e.h + 2 * n);
            },
            relativePosition: Xz,
            findBestRelativePosition: function(e, t, n, r) {
              var o, i;
              for (i = 0; i < r.length; i++)
                if (
                  (o = Xz(e, t, r[i])).x >= n.x &&
                  o.x + o.w <= n.w + n.x &&
                  o.y >= n.y &&
                  o.y + o.h <= n.h + n.y
                )
                  return r[i];
              return null;
            },
            intersect: function(e, t) {
              var n, r, o, i;
              return (
                (n = Wz(e.x, t.x)),
                (r = Wz(e.y, t.y)),
                (o = $z(e.x + e.w, t.x + t.w)),
                (i = $z(e.y + e.h, t.y + t.h)),
                o - n < 0 || i - r < 0 ? null : Yz(n, r, o - n, i - r)
              );
            },
            clamp: function(e, t, n) {
              var r, o, i, a, u, s, c, l, f, d;
              return (
                (u = e.x),
                (s = e.y),
                (c = e.x + e.w),
                (l = e.y + e.h),
                (f = t.x + t.w),
                (d = t.y + t.h),
                (r = Wz(0, t.x - u)),
                (o = Wz(0, t.y - s)),
                (i = Wz(0, c - f)),
                (a = Wz(0, l - d)),
                (u += r),
                (s += o),
                n && ((c += r), (l += o), (u -= i), (s -= a)),
                Yz(u, s, (c -= i) - u, (l -= a) - s)
              );
            },
            create: Yz,
            fromClientRect: function(e) {
              return Yz(e.left, e.top, e.width, e.height);
            }
          },
          Jz = an.each,
          Qz = an.extend,
          Zz = function() {};
        Zz.extend = Uz = function(e) {
          var t,
            n,
            r,
            o = this.prototype,
            i = function() {
              var e, t, n;
              if (
                !jz &&
                (this.init && this.init.apply(this, arguments),
                (t = this.Mixins))
              )
                for (e = t.length; e--; )
                  (n = t[e]).init && n.init.apply(this, arguments);
            },
            a = function() {
              return this;
            },
            u = function(e, t) {
              return function() {
                var n,
                  r = this._super;
                return (
                  (this._super = o[e]),
                  (n = t.apply(this, arguments)),
                  (this._super = r),
                  n
                );
              };
            };
          for (n in ((jz = !0),
          (t = new this()),
          (jz = !1),
          e.Mixins &&
            (Jz(e.Mixins, function(t) {
              for (var n in t) "init" !== n && (e[n] = t[n]);
            }),
            o.Mixins && (e.Mixins = o.Mixins.concat(e.Mixins))),
          e.Methods &&
            Jz(e.Methods.split(","), function(t) {
              e[t] = a;
            }),
          e.Properties &&
            Jz(e.Properties.split(","), function(t) {
              var n = "_" + t;
              e[t] = function(e) {
                return void 0 !== e ? ((this[n] = e), this) : this[n];
              };
            }),
          e.Statics &&
            Jz(e.Statics, function(e, t) {
              i[t] = e;
            }),
          e.Defaults &&
            o.Defaults &&
            (e.Defaults = Qz({}, o.Defaults, e.Defaults)),
          e))
            "function" == typeof (r = e[n]) && o[n]
              ? (t[n] = u(n, r))
              : (t[n] = r);
          return (i.prototype = t), (i.constructor = i), (i.extend = Uz), i;
        };
        var eS,
          tS = Math.min,
          nS = Math.max,
          rS = Math.round,
          oS = {
            serialize: function(e) {
              var t = JSON.stringify(e);
              return _(t)
                ? t.replace(/[\u0080-\uFFFF]/g, function(e) {
                    var t = e.charCodeAt(0).toString(16);
                    return "\\u" + "0000".substring(t.length) + t;
                  })
                : t;
            },
            parse: function(e) {
              try {
                return JSON.parse(e);
              } catch (e) {}
            }
          },
          iS = {
            callbacks: {},
            count: 0,
            send: function(e) {
              var t = this,
                n = Si.DOM,
                r = void 0 !== e.count ? e.count : t.count,
                o = "tinymce_jsonp_" + r;
              (t.callbacks[r] = function(i) {
                n.remove(o), delete t.callbacks[r], e.callback(i);
              }),
                n.add(n.doc.body, "script", {
                  id: o,
                  src: e.url,
                  type: "text/javascript"
                }),
                t.count++;
            }
          },
          aS = Ai({}, Jx, {
            send: function(e) {
              var t,
                n = 0,
                r = function() {
                  !e.async || 4 === t.readyState || n++ > 1e4
                    ? (e.success && n < 1e4 && 200 === t.status
                        ? e.success.call(
                            e.success_scope,
                            "" + t.responseText,
                            t,
                            e
                          )
                        : e.error &&
                          e.error.call(
                            e.error_scope,
                            n > 1e4 ? "TIMED_OUT" : "GENERAL",
                            t,
                            e
                          ),
                      (t = null))
                    : je.setTimeout(r, 10);
                };
              if (
                ((e.scope = e.scope || this),
                (e.success_scope = e.success_scope || e.scope),
                (e.error_scope = e.error_scope || e.scope),
                (e.async = !1 !== e.async),
                (e.data = e.data || ""),
                aS.fire("beforeInitialize", { settings: e }),
                (t = sd()))
              ) {
                if (
                  (t.overrideMimeType && t.overrideMimeType(e.content_type),
                  t.open(e.type || (e.data ? "POST" : "GET"), e.url, e.async),
                  e.crossDomain && (t.withCredentials = !0),
                  e.content_type &&
                    t.setRequestHeader("Content-Type", e.content_type),
                  e.requestheaders &&
                    an.each(e.requestheaders, function(e) {
                      t.setRequestHeader(e.key, e.value);
                    }),
                  t.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                  (t = aS.fire("beforeSend", { xhr: t, settings: e }).xhr).send(
                    e.data
                  ),
                  !e.async)
                )
                  return r();
                je.setTimeout(r, 10);
              }
            }
          }),
          uS = an.extend,
          sS = (function() {
            function e(e) {
              (this.settings = uS({}, e)), (this.count = 0);
            }
            return (
              (e.sendRPC = function(t) {
                return new e().send(t);
              }),
              (e.prototype.send = function(e) {
                var t = e.error,
                  n = e.success,
                  r = uS(this.settings, e);
                (r.success = function(e, o) {
                  void 0 === (e = oS.parse(e)) &&
                    (e = { error: "JSON Parse error." }),
                    e.error
                      ? t.call(r.error_scope || r.scope, e.error, o)
                      : n.call(r.success_scope || r.scope, e.result);
                }),
                  (r.error = function(e, n) {
                    t && t.call(r.error_scope || r.scope, e, n);
                  }),
                  (r.data = oS.serialize({
                    id: e.id || "c" + this.count++,
                    method: e.method,
                    params: e.params
                  })),
                  (r.content_type = "application/json"),
                  aS.send(r);
              }),
              e
            );
          })();
        try {
          eS = t.window.localStorage;
        } catch (e) {
          eS = (function() {
            return (
              (e = {}),
              (t = []),
              (n = {
                getItem: function(t) {
                  var n = e[t];
                  return n || null;
                },
                setItem: function(n, r) {
                  t.push(n), (e[n] = String(r));
                },
                key: function(e) {
                  return t[e];
                },
                removeItem: function(n) {
                  (t = t.filter(function(e) {
                    return e === n;
                  })),
                    delete e[n];
                },
                clear: function() {
                  (t = []), (e = {});
                },
                length: 0
              }),
              Object.defineProperty(n, "length", {
                get: function() {
                  return t.length;
                },
                configurable: !1,
                enumerable: !1
              }),
              n
            );
            var e, t, n;
          })();
        }
        var cS = {
            geom: { Rect: Gz },
            util: {
              Promise: Ve,
              Delay: je,
              Tools: an,
              VK: Ch,
              URI: dz,
              Class: Zz,
              EventDispatcher: Yx,
              Observable: Jx,
              I18n: Oi,
              XHR: aS,
              JSON: oS,
              JSONRequest: sS,
              JSONP: iS,
              LocalStorage: eS,
              Color: function(e) {
                var t = {},
                  n = 0,
                  r = 0,
                  o = 0,
                  i = function(e) {
                    var i;
                    return (
                      "object" == typeof e
                        ? "r" in e
                          ? ((n = e.r), (r = e.g), (o = e.b))
                          : "v" in e &&
                            (function(e, t, i) {
                              var a, u, s, c;
                              if (
                                ((e = (parseInt(e, 10) || 0) % 360),
                                (t = parseInt(t, 10) / 100),
                                (i = parseInt(i, 10) / 100),
                                (t = nS(0, tS(t, 1))),
                                (i = nS(0, tS(i, 1))),
                                0 !== t)
                              ) {
                                switch (
                                  ((a = e / 60),
                                  (s =
                                    (u = i * t) * (1 - Math.abs((a % 2) - 1))),
                                  (c = i - u),
                                  Math.floor(a))
                                ) {
                                  case 0:
                                    (n = u), (r = s), (o = 0);
                                    break;
                                  case 1:
                                    (n = s), (r = u), (o = 0);
                                    break;
                                  case 2:
                                    (n = 0), (r = u), (o = s);
                                    break;
                                  case 3:
                                    (n = 0), (r = s), (o = u);
                                    break;
                                  case 4:
                                    (n = s), (r = 0), (o = u);
                                    break;
                                  case 5:
                                    (n = u), (r = 0), (o = s);
                                    break;
                                  default:
                                    n = r = o = 0;
                                }
                                (n = rS(255 * (n + c))),
                                  (r = rS(255 * (r + c))),
                                  (o = rS(255 * (o + c)));
                              } else n = r = o = rS(255 * i);
                            })(e.h, e.s, e.v)
                        : (i = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(
                            e
                          ))
                        ? ((n = parseInt(i[1], 10)),
                          (r = parseInt(i[2], 10)),
                          (o = parseInt(i[3], 10)))
                        : (i = /#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e))
                        ? ((n = parseInt(i[1], 16)),
                          (r = parseInt(i[2], 16)),
                          (o = parseInt(i[3], 16)))
                        : (i = /#([0-F])([0-F])([0-F])/gi.exec(e)) &&
                          ((n = parseInt(i[1] + i[1], 16)),
                          (r = parseInt(i[2] + i[2], 16)),
                          (o = parseInt(i[3] + i[3], 16))),
                      (n = n < 0 ? 0 : n > 255 ? 255 : n),
                      (r = r < 0 ? 0 : r > 255 ? 255 : r),
                      (o = o < 0 ? 0 : o > 255 ? 255 : o),
                      t
                    );
                  };
                return (
                  e && i(e),
                  (t.toRgb = function() {
                    return { r: n, g: r, b: o };
                  }),
                  (t.toHsv = function() {
                    return (function(e, t, n) {
                      var r, o, i, a;
                      return (
                        (o = 0),
                        (i = tS((e /= 255), tS((t /= 255), (n /= 255)))) ===
                        (a = nS(e, nS(t, n)))
                          ? { h: 0, s: 0, v: 100 * (o = i) }
                          : ((r = (a - i) / a),
                            (o = a),
                            {
                              h: rS(
                                60 *
                                  ((e === i ? 3 : n === i ? 1 : 5) -
                                    (e === i
                                      ? t - n
                                      : n === i
                                      ? e - t
                                      : n - e) /
                                      (a - i))
                              ),
                              s: rS(100 * r),
                              v: rS(100 * o)
                            })
                      );
                    })(n, r, o);
                  }),
                  (t.toHex = function() {
                    var e = function(e) {
                      return (e = parseInt(e, 10).toString(16)).length > 1
                        ? e
                        : "0" + e;
                    };
                    return "#" + e(n) + e(r) + e(o);
                  }),
                  (t.parse = i),
                  t
                );
              }
            },
            dom: {
              EventUtils: Ze,
              Sizzle: Ht,
              DomQuery: Fn,
              TreeWalker: Ao,
              DOMUtils: Si,
              ScriptLoader: Ti,
              RangeUtils: qz,
              Serializer: sp,
              ControlSelection: mp,
              BookmarkManager: fp,
              Selection: hv,
              Event: Ze.Event
            },
            html: {
              Styles: mi,
              Entities: ti,
              Node: $c,
              Schema: di,
              SaxParser: Qc,
              DomParser: op,
              Writer: Hl,
              Serializer: Pl
            },
            Env: Le,
            AddOnManager: Pi,
            Annotator: Fc,
            Formatter: Ug,
            UndoManager: rm,
            EditorCommands: $x,
            WindowManager: Qf,
            NotificationManager: Gf,
            EditorObservable: nz,
            Shortcuts: uz,
            Editor: yz,
            FocusManager: Cz,
            EditorManager: Iz,
            DOM: Si.DOM,
            ScriptLoader: Ti.ScriptLoader,
            PluginManager: Pi.PluginManager,
            ThemeManager: Pi.ThemeManager,
            IconManager: id,
            trim: an.trim,
            isArray: an.isArray,
            is: an.is,
            toArray: an.toArray,
            makeMap: an.makeMap,
            each: an.each,
            map: an.map,
            grep: an.grep,
            inArray: an.inArray,
            extend: an.extend,
            create: an.create,
            walk: an.walk,
            createNS: an.createNS,
            resolve: an.resolve,
            explode: an.explode,
            _addCacheSuffix: an._addCacheSuffix,
            isOpera: Le.opera,
            isWebKit: Le.webkit,
            isIE: Le.ie,
            isGecko: Le.gecko,
            isMac: Le.mac
          },
          lS = an.extend(Iz, cS);
        !(function(e) {
          (window.tinymce = e), (window.tinyMCE = e);
        })(lS),
          (function(t) {
            try {
              e.exports = t;
            } catch (e) {}
          })(lS);
      })(window);
    }
  ]
]);
