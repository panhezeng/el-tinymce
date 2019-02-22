(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  [
    ,
    ,
    ,
    ,
    function(e, t) {
      var n;
      n = (function() {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (e) {
        "object" == typeof window && (n = window);
      }
      e.exports = n;
    },
    function(e, t, n) {
      var r, o, i, a;
      window,
        (e.exports = ((r = n(3)),
        (o = n(6)),
        (i = n(7)),
        (a = n(8)),
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
                  (e[t.typeClassName] = !0),
                  e)
                },
                [
                  t.view && t.urlInternal
                    ? [
                        "video" === t.typeClassName
                          ? r("video", {
                              ref: "media",
                              staticClass: "view",
                              attrs: { controls: "", src: t.urlInternal }
                            })
                          : "audio" === t.typeClassName
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
                                "image" === t.typeClassName
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
              l = n(4),
              c = n.n(l),
              f = {
                name: "ElSingleUpload",
                components: {
                  "el-progress": o.Progress,
                  "el-upload": o.Upload,
                  "el-input": o.Input,
                  ElPopoverDialog: c.a
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
                  type: {
                    validator: function(e) {
                      return (
                        "" === e ||
                        /^(image|audio|video|text|application|\.)/.test(e)
                      );
                    },
                    default: "image"
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
                  accept: function() {
                    return /^(image|audio|video|text)$/.test(this.type)
                      ? "".concat(this.type, "/*")
                      : this.type;
                  },
                  typeClassName: function() {
                    return /^\.(png|jpe?g|gif|svg|webp)/.test(this.type) ||
                      /^image/.test(this.type)
                      ? "image"
                      : /^\.(ogg|mp3|wav|flac|aac)/.test(this.type) ||
                        /^audio/.test(this.type)
                      ? "audio"
                      : /^\.(mp4|webm)/.test(this.type) ||
                        /^video/.test(this.type)
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
                                  );
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
                          (this.urlInternal = ""),
                          this.$refs.upload && this.$refs.upload.clearFiles(),
                          this.$emit("media-duration", "")),
                      this.urlInternal !== this.url &&
                        this.$emit("update:url", this.urlInternal);
                  },
                  beforeUpload: function(e) {
                    this.file = e;
                    var t = a()(e, this.type, this.size);
                    return this.checkUpload
                      ? this.checkUpload(e, t)
                      : (t.message && o.Message.error(t.message), t.validate);
                  },
                  requestUpload: function(e) {
                    return this.$emit("request-upload", e), this.upload(e);
                  },
                  progressUpload: function(e, t) {
                    var n = parseInt(e.percent);
                    n >= 100 && (n = 99), (this.percentage = n);
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
                l = "function" == typeof e ? e.options : e;
              if (
                (t &&
                  ((l.render = t),
                  (l.staticRenderFns = []),
                  (l._compiled = !0)),
                s)
              )
                if (l.functional) {
                  l._injectStyles = s;
                  var c = l.render;
                  l.render = function(e, t) {
                    return s.call(t), c(e, t);
                  };
                } else {
                  var f = l.beforeCreate;
                  l.beforeCreate = f ? [].concat(f, s) : [s];
                }
              return { exports: e, options: l };
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
              l = !1,
              c = function() {},
              f = null,
              d = "data-vue-ssr-id",
              h =
                "undefined" != typeof navigator &&
                /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
            function m(e, t, n, o) {
              (l = n), (f = o || {});
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
                      for (var l = 0; l < s.parts.length; l++) s.parts[l]();
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
                if (l) return c;
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
                    : void 0,
                r = { message: "", error: 0, validate: !0 };
              if ("[object File]" === Object.prototype.toString.call(e)) {
                void 0 === n && (n = 1024e3);
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
                  void 0 === n &&
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
                  var l =
                    n >= 1024 ? "".concat(n / 1024, "M") : "".concat(n, "KB");
                  (r.message = "上传".concat(u, "大小不能超过").concat(l, "!")),
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
                  l = "function" == typeof e ? e.options : e;
                if (
                  (t &&
                    ((l.render = t),
                    (l.staticRenderFns = []),
                    (l._compiled = !0)),
                  s)
                )
                  if (l.functional) {
                    l._injectStyles = s;
                    var c = l.render;
                    l.render = function(e, t) {
                      return s.call(t), c(e, t);
                    };
                  } else {
                    var f = l.beforeCreate;
                    l.beforeCreate = f ? [].concat(f, s) : [s];
                  }
                return { exports: e, options: l };
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
        (e.exports = ((r = n(10)),
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
                  l = "function" == typeof e ? e.options : e;
                if (
                  (t &&
                    ((l.render = t),
                    (l.staticRenderFns = []),
                    (l._compiled = !0)),
                  s)
                )
                  if (l.functional) {
                    l._injectStyles = s;
                    var c = l.render;
                    l.render = function(e, t) {
                      return s.call(t), c(e, t);
                    };
                  } else {
                    var f = l.beforeCreate;
                    l.beforeCreate = f ? [].concat(f, s) : [s];
                  }
                return { exports: e, options: l };
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
      (function(t) {
        !(function(n) {
          "use strict";
          var r = function() {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            },
            o = function(e, t) {
              return function() {
                for (var n = [], r = 0; r < arguments.length; r++)
                  n[r] = arguments[r];
                return e(t.apply(null, n));
              };
            },
            i = function(e) {
              return function() {
                return e;
              };
            },
            a = function(e) {
              return e;
            };
          function u(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
              t[n - 1] = arguments[n];
            return function() {
              for (var n = [], r = 0; r < arguments.length; r++)
                n[r] = arguments[r];
              var o = t.concat(n);
              return e.apply(null, o);
            };
          }
          var s,
            l,
            c,
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
            w = function(e) {
              return function() {
                for (var t = [], n = 0; n < arguments.length; n++)
                  t[n] = arguments[n];
                return !e.apply(null, t);
              };
            },
            x = i(!1),
            S = i(!0),
            E = x,
            N = S,
            z = function() {
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
                  is: E,
                  isSome: E,
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
                  map: z,
                  ap: z,
                  each: function() {},
                  bind: z,
                  flatten: z,
                  exists: E,
                  forall: N,
                  filter: z,
                  equals: e,
                  equals_: e,
                  toArray: function() {
                    return [];
                  },
                  toString: i("none()")
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
                  isNone: E,
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
                    return t.fold(z, function(t) {
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
                    return t.fold(E, function(t) {
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
            _ = {
              some: T,
              none: z,
              from: function(e) {
                return null == e ? k : T(e);
              }
            },
            A = function(e) {
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
            B = A("string"),
            R = A("object"),
            M = A("array"),
            O = A("null"),
            D = A("boolean"),
            P = A("function"),
            H = A("number"),
            L =
              void 0 === (s = Array.prototype.indexOf)
                ? function(e, t) {
                    return K(e, t);
                  }
                : function(e, t) {
                    return s.call(e, t);
                  },
            I = function(e, t) {
              return L(e, t) > -1;
            },
            V = function(e, t) {
              for (var n = e.length, r = new Array(n), o = 0; o < n; o++) {
                var i = e[o];
                r[o] = t(i, o, e);
              }
              return r;
            },
            F = function(e, t) {
              for (var n = 0, r = e.length; n < r; n++) t(e[n], n, e);
            },
            U = function(e, t) {
              for (var n = [], r = [], o = 0, i = e.length; o < i; o++) {
                var a = e[o];
                (t(a, o, e) ? n : r).push(a);
              }
              return { pass: n, fail: r };
            },
            j = function(e, t) {
              for (var n = [], r = 0, o = e.length; r < o; r++) {
                var i = e[r];
                t(i, r, e) && n.push(i);
              }
              return n;
            },
            q = function(e, t, n) {
              return (
                F(e, function(e) {
                  n = t(n, e);
                }),
                n
              );
            },
            $ = function(e, t) {
              for (var n = 0, r = e.length; n < r; n++) {
                var o = e[n];
                if (t(o, n, e)) return _.some(o);
              }
              return _.none();
            },
            W = function(e, t) {
              for (var n = 0, r = e.length; n < r; n++)
                if (t(e[n], n, e)) return _.some(n);
              return _.none();
            },
            K = function(e, t) {
              for (var n = 0, r = e.length; n < r; ++n)
                if (e[n] === t) return n;
              return -1;
            },
            X = Array.prototype.push,
            Y = function(e, t) {
              return (function(e) {
                for (var t = [], n = 0, r = e.length; n < r; ++n) {
                  if (!Array.prototype.isPrototypeOf(e[n]))
                    throw new Error(
                      "Arr.flatten item " + n + " was not an array, input: " + e
                    );
                  X.apply(t, e[n]);
                }
                return t;
              })(V(e, t));
            },
            G = function(e, t) {
              for (var n = 0, r = e.length; n < r; ++n)
                if (!0 !== t(e[n], n, e)) return !1;
              return !0;
            },
            J = Array.prototype.slice,
            Q = function(e, t) {
              return j(e, function(e) {
                return !I(t, e);
              });
            },
            Z = function(e) {
              return 0 === e.length ? _.none() : _.some(e[0]);
            },
            ee = function(e) {
              return 0 === e.length ? _.none() : _.some(e[e.length - 1]);
            },
            te = P(Array.from)
              ? Array.from
              : function(e) {
                  return J.call(e);
                },
            ne =
              "undefined" != typeof window
                ? window
                : Function("return this;")(),
            re = function(e, t) {
              return (function(e, t) {
                for (
                  var n = null != t ? t : ne, r = 0;
                  r < e.length && null != n;
                  ++r
                )
                  n = n[e[r]];
                return n;
              })(e.split("."), t);
            },
            oe = {
              getOrDie: function(e, t) {
                var n = (function(e, t) {
                  return re(e, t);
                })(e, t);
                if (null == n) throw e + " not available on this browser";
                return n;
              }
            },
            ie = function() {
              return oe.getOrDie("URL");
            },
            ae = {
              createObjectURL: function(e) {
                return ie().createObjectURL(e);
              },
              revokeObjectURL: function(e) {
                ie().revokeObjectURL(e);
              }
            },
            ue = n.navigator,
            se = ue.userAgent,
            le = function(e) {
              return "matchMedia" in n.window && n.matchMedia(e).matches;
            };
          (p = /Android/.test(se)),
            (c =
              (c =
                !(l = /WebKit/.test(se)) &&
                /MSIE/gi.test(se) &&
                /Explorer/gi.test(ue.appName)) && /MSIE (\w+)\./.exec(se)[1]),
            (f =
              -1 !== se.indexOf("Trident/") &&
              (-1 !== se.indexOf("rv:") ||
                -1 !== ue.appName.indexOf("Netscape")) &&
              11),
            (d = -1 !== se.indexOf("Edge/") && !c && !f && 12),
            (c = c || f || d),
            (h = !l && !f && /Gecko/.test(se)),
            (m = -1 !== se.indexOf("Mac")),
            (g = /(iPad|iPhone)/.test(se)),
            (v =
              "FormData" in n.window &&
              "FileReader" in n.window &&
              "URL" in n.window &&
              !!ae.createObjectURL),
            (b = le("only screen and (max-device-width: 480px)") && (p || g)),
            (y = le("only screen and (min-width: 800px)") && (p || g)),
            (C = -1 !== se.indexOf("Windows Phone")),
            d && (l = !1);
          var ce,
            fe = {
              opera: !1,
              webkit: l,
              ie: c,
              gecko: h,
              mac: m,
              iOS: g,
              android: p,
              contentEditable:
                !g ||
                v ||
                parseInt(se.match(/AppleWebKit\/(\d*)/)[1], 10) >= 534,
              transparentSrc:
                "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
              caretAfter: 8 !== c,
              range: n.window.getSelection && "Range" in n.window,
              documentMode: c && !d ? n.document.documentMode || 7 : 10,
              fileApi: v,
              ceFalse: !1 === c || c > 8,
              cacheSuffix: null,
              container: null,
              overrideViewPort: null,
              experimentalShadowDom: !1,
              canHaveCSP: !1 === c || c > 11,
              desktop: !b && !y,
              windowsPhone: C
            },
            de = window.Promise
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
                        c(t, e(a, this), e(u, this));
                    },
                    o =
                      r.immediateFn ||
                      ("function" == typeof t && t) ||
                      function(e) {
                        setTimeout(e, 1);
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
                      if (
                        t &&
                        ("object" == typeof t || "function" == typeof t)
                      ) {
                        var n = t.then;
                        if ("function" == typeof n)
                          return void c(e(n, t), e(a, this), e(u, this));
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
                  function l(e, t, n, r) {
                    (this.onFulfilled = "function" == typeof e ? e : null),
                      (this.onRejected = "function" == typeof t ? t : null),
                      (this.resolve = n),
                      (this.reject = r);
                  }
                  function c(e, t, n) {
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
                        i.call(n, new l(e, t, r, o));
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
                        for (var r = 0, o = e.length; r < o; r++)
                          e[r].then(t, n);
                      });
                    }),
                    r
                  );
                })(),
            he = function(e, t) {
              return "number" != typeof t && (t = 0), setTimeout(e, t);
            },
            me = function(e, t) {
              return "number" != typeof t && (t = 1), setInterval(e, t);
            },
            ge = function(e, t) {
              var n, r;
              return (
                ((r = function() {
                  var r = arguments;
                  clearTimeout(n),
                    (n = he(function() {
                      e.apply(this, r);
                    }, t));
                }).stop = function() {
                  clearTimeout(n);
                }),
                r
              );
            },
            pe = {
              requestAnimationFrame: function(e, t) {
                ce
                  ? ce.then(e)
                  : (ce = new de(function(e) {
                      t || (t = n.document.body),
                        (function(e, t) {
                          var r,
                            o = n.window.requestAnimationFrame,
                            i = ["ms", "moz", "webkit"];
                          for (r = 0; r < i.length && !o; r++)
                            o = n.window[i[r] + "RequestAnimationFrame"];
                          o ||
                            (o = function(e) {
                              n.window.setTimeout(e, 0);
                            }),
                            o(e, t);
                        })(e, t);
                    }).then(e));
              },
              setTimeout: he,
              setInterval: me,
              setEditorTimeout: function(e, t, n) {
                return he(function() {
                  e.removed || t();
                }, n);
              },
              setEditorInterval: function(e, t, n) {
                var r;
                return (r = me(function() {
                  e.removed ? clearInterval(r) : t();
                }, n));
              },
              debounce: ge,
              throttle: ge,
              clearInterval: function(e) {
                return clearInterval(e);
              },
              clearTimeout: function(e) {
                return clearTimeout(e);
              }
            },
            ve = /^(?:mouse|contextmenu)|click/,
            be = {
              keyLocation: 1,
              layerX: 1,
              layerY: 1,
              returnValue: 1,
              webkitMovementX: 1,
              webkitMovementY: 1,
              keyIdentifier: 1
            },
            ye = function() {
              return !1;
            },
            Ce = function() {
              return !0;
            },
            we = function(e, t, n, r) {
              e.addEventListener
                ? e.addEventListener(t, n, r || !1)
                : e.attachEvent && e.attachEvent("on" + t, n);
            },
            xe = function(e, t, n, r) {
              e.removeEventListener
                ? e.removeEventListener(t, n, r || !1)
                : e.detachEvent && e.detachEvent("on" + t, n);
            },
            Se = function(e, t) {
              var r,
                o = t || {};
              for (r in e) be[r] || (o[r] = e[r]);
              if (
                (o.target || (o.target = o.srcElement || n.document),
                fe.experimentalShadowDom &&
                  (o.target = (function(e, t) {
                    if (e.composedPath) {
                      var n = e.composedPath();
                      if (n && n.length > 0) return n[0];
                    }
                    return t;
                  })(e, o.target)),
                e &&
                  ve.test(e.type) &&
                  void 0 === e.pageX &&
                  void 0 !== e.clientX)
              ) {
                var i = o.target.ownerDocument || n.document,
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
                  (o.isDefaultPrevented = Ce),
                    e &&
                      (e.preventDefault
                        ? e.preventDefault()
                        : (e.returnValue = !1));
                }),
                (o.stopPropagation = function() {
                  (o.isPropagationStopped = Ce),
                    e &&
                      (e.stopPropagation
                        ? e.stopPropagation()
                        : (e.cancelBubble = !0));
                }),
                (o.stopImmediatePropagation = function() {
                  (o.isImmediatePropagationStopped = Ce), o.stopPropagation();
                }),
                !1 ===
                  (function(e) {
                    return (
                      e.isDefaultPrevented === Ce || e.isDefaultPrevented === ye
                    );
                  })(o) &&
                  ((o.isDefaultPrevented = ye),
                  (o.isPropagationStopped = ye),
                  (o.isImmediatePropagationStopped = ye)),
                void 0 === o.metaKey && (o.metaKey = !1),
                o
              );
            },
            Ee = function(e, t, n) {
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
                    xe(e, "DOMContentLoaded", a),
                      xe(e, "load", a),
                      n.domLoaded || ((n.domLoaded = !0), t(o));
                  },
                  u = function() {
                    i() && (xe(r, "readystatechange", u), a());
                  },
                  s = function() {
                    try {
                      r.documentElement.doScroll("left");
                    } catch (e) {
                      return void pe.setTimeout(s);
                    }
                    a();
                  };
                !r.addEventListener || (fe.ie && fe.ie < 11)
                  ? (we(r, "readystatechange", u),
                    r.documentElement.doScroll && e.self === e.top && s())
                  : i()
                  ? a()
                  : we(e, "DOMContentLoaded", a),
                  we(e, "load", a);
              }
            },
            Ne = function() {
              var e,
                t,
                r,
                o,
                i,
                a = this,
                u = {};
              (t = "mce-data-" + (+new Date()).toString(32)),
                (o = "onmouseenter" in n.document.documentElement),
                (r = "onfocusin" in n.document.documentElement),
                (i = { mouseenter: "mouseover", mouseleave: "mouseout" }),
                (e = 1),
                (a.domLoaded = !1),
                (a.events = u);
              var s = function(e, t) {
                var n,
                  r,
                  o,
                  i,
                  a = u[t];
                if ((n = a && a[e.type]))
                  for (r = 0, o = n.length; r < o; r++)
                    if (
                      ((i = n[r]) &&
                        !1 === i.func.call(i.scope, e) &&
                        e.preventDefault(),
                      e.isImmediatePropagationStopped())
                    )
                      return;
              };
              (a.bind = function(l, c, f, d) {
                var h,
                  m,
                  g,
                  p,
                  v,
                  b,
                  y,
                  C = n.window,
                  w = function(e) {
                    s(Se(e || C.event), h);
                  };
                if (l && 3 !== l.nodeType && 8 !== l.nodeType) {
                  for (
                    l[t] ? (h = l[t]) : ((h = e++), (l[t] = h), (u[h] = {})),
                      d = d || l,
                      g = (c = c.split(" ")).length;
                    g--;

                  )
                    (b = w),
                      (v = y = !1),
                      "DOMContentLoaded" === (p = c[g]) && (p = "ready"),
                      a.domLoaded &&
                      "ready" === p &&
                      "complete" === l.readyState
                        ? f.call(d, Se({ type: p }))
                        : (o ||
                            ((v = i[p]) &&
                              (b = function(e) {
                                var t, n;
                                if (
                                  ((t = e.currentTarget),
                                  (n = e.relatedTarget) && t.contains)
                                )
                                  n = t.contains(n);
                                else for (; n && n !== t; ) n = n.parentNode;
                                n ||
                                  (((e = Se(e || C.event)).type =
                                    "mouseout" === e.type
                                      ? "mouseleave"
                                      : "mouseenter"),
                                  (e.target = t),
                                  s(e, h));
                              })),
                          r ||
                            ("focusin" !== p && "focusout" !== p) ||
                            ((y = !0),
                            (v = "focusin" === p ? "focus" : "blur"),
                            (b = function(e) {
                              ((e = Se(e || C.event)).type =
                                "focus" === e.type ? "focusin" : "focusout"),
                                s(e, h);
                            })),
                          (m = u[h][p])
                            ? "ready" === p && a.domLoaded
                              ? f({ type: p })
                              : m.push({ func: f, scope: d })
                            : ((u[h][p] = m = [{ func: f, scope: d }]),
                              (m.fakeName = v),
                              (m.capture = y),
                              (m.nativeHandler = b),
                              "ready" === p
                                ? Ee(l, b, a)
                                : we(l, v || p, b, y)));
                  return (l = m = 0), f;
                }
              }),
                (a.unbind = function(e, n, r) {
                  var o, i, s, l, c, f;
                  if (!e || 3 === e.nodeType || 8 === e.nodeType) return a;
                  if ((o = e[t])) {
                    if (((f = u[o]), n)) {
                      for (s = (n = n.split(" ")).length; s--; )
                        if ((i = f[(c = n[s])])) {
                          if (r)
                            for (l = i.length; l--; )
                              if (i[l].func === r) {
                                var d = i.nativeHandler,
                                  h = i.fakeName,
                                  m = i.capture;
                                ((i = i
                                  .slice(0, l)
                                  .concat(i.slice(l + 1))).nativeHandler = d),
                                  (i.fakeName = h),
                                  (i.capture = m),
                                  (f[c] = i);
                              }
                          (r && 0 !== i.length) ||
                            (delete f[c],
                            xe(e, i.fakeName || c, i.nativeHandler, i.capture));
                        }
                    } else {
                      for (c in f)
                        (i = f[c]),
                          xe(e, i.fakeName || c, i.nativeHandler, i.capture);
                      f = {};
                    }
                    for (c in f) return a;
                    delete u[o];
                    try {
                      delete e[t];
                    } catch (n) {
                      e[t] = null;
                    }
                  }
                  return a;
                }),
                (a.fire = function(e, n, r) {
                  var o;
                  if (!e || 3 === e.nodeType || 8 === e.nodeType) return a;
                  ((r = Se(null, r)).type = n), (r.target = e);
                  do {
                    (o = e[t]) && s(r, o),
                      (e =
                        e.parentNode ||
                        e.ownerDocument ||
                        e.defaultView ||
                        e.parentWindow);
                  } while (e && !r.isPropagationStopped());
                  return a;
                }),
                (a.clean = function(e) {
                  var n,
                    r,
                    o = a.unbind;
                  if (!e || 3 === e.nodeType || 8 === e.nodeType) return a;
                  if (
                    (e[t] && o(e),
                    e.getElementsByTagName || (e = e.document),
                    e && e.getElementsByTagName)
                  )
                    for (
                      o(e), n = (r = e.getElementsByTagName("*")).length;
                      n--;

                    )
                      (e = r[n])[t] && o(e);
                  return a;
                }),
                (a.destroy = function() {
                  u = {};
                }),
                (a.cancel = function(e) {
                  return (
                    e && (e.preventDefault(), e.stopImmediatePropagation()), !1
                  );
                });
            };
          (Ne.Event = new Ne()),
            Ne.Event.bind(n.window, "ready", function() {});
          var ze,
            ke,
            Te,
            _e,
            Ae,
            Be,
            Re,
            Me,
            Oe,
            De,
            Pe,
            He,
            Le,
            Ie,
            Ve,
            Fe,
            Ue,
            je,
            qe = "sizzle" + -new Date(),
            $e = n.window.document,
            We = 0,
            Ke = 0,
            Xe = kt(),
            Ye = kt(),
            Ge = kt(),
            Je = function(e, t) {
              return e === t && (Pe = !0), 0;
            },
            Qe = "undefined",
            Ze = 1 << 31,
            et = {}.hasOwnProperty,
            tt = [],
            nt = tt.pop,
            rt = tt.push,
            ot = tt.push,
            it = tt.slice,
            at =
              tt.indexOf ||
              function(e) {
                for (var t = 0, n = this.length; t < n; t++)
                  if (this[t] === e) return t;
                return -1;
              },
            ut = "[\\x20\\t\\r\\n\\f]",
            st = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            lt =
              "\\[" +
              ut +
              "*(" +
              st +
              ")(?:" +
              ut +
              "*([*^$|!~]?=)" +
              ut +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              st +
              "))|)" +
              ut +
              "*\\]",
            ct =
              ":(" +
              st +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              lt +
              ")*)|.*)\\)|)",
            ft = new RegExp(
              "^" + ut + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ut + "+$",
              "g"
            ),
            dt = new RegExp("^" + ut + "*," + ut + "*"),
            ht = new RegExp("^" + ut + "*([>+~]|" + ut + ")" + ut + "*"),
            mt = new RegExp("=" + ut + "*([^\\]'\"]*?)" + ut + "*\\]", "g"),
            gt = new RegExp(ct),
            pt = new RegExp("^" + st + "$"),
            vt = {
              ID: new RegExp("^#(" + st + ")"),
              CLASS: new RegExp("^\\.(" + st + ")"),
              TAG: new RegExp("^(" + st + "|[*])"),
              ATTR: new RegExp("^" + lt),
              PSEUDO: new RegExp("^" + ct),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  ut +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  ut +
                  "*(?:([+-]|)" +
                  ut +
                  "*(\\d+)|))" +
                  ut +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp(
                "^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$",
                "i"
              ),
              needsContext: new RegExp(
                "^" +
                  ut +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  ut +
                  "*((?:-\\d)?\\d*)" +
                  ut +
                  "*\\)|)(?=[^-]|$)",
                "i"
              )
            },
            bt = /^(?:input|select|textarea|button)$/i,
            yt = /^h\d$/i,
            Ct = /^[^{]+\{\s*\[native \w/,
            wt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            xt = /[+~]/,
            St = /'|\\/g,
            Et = new RegExp(
              "\\\\([\\da-f]{1,6}" + ut + "?|(" + ut + ")|.)",
              "ig"
            ),
            Nt = function(e, t, n) {
              var r = "0x" + t - 65536;
              return r != r || n
                ? t
                : r < 0
                ? String.fromCharCode(r + 65536)
                : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
            };
          try {
            ot.apply((tt = it.call($e.childNodes)), $e.childNodes),
              tt[$e.childNodes.length].nodeType;
          } catch (e) {
            ot = {
              apply: tt.length
                ? function(e, t) {
                    rt.apply(e, it.call(t));
                  }
                : function(e, t) {
                    for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                    e.length = n - 1;
                  }
            };
          }
          var zt = function(e, t, n, r) {
            var o, i, a, u, s, l, c, f, d, h;
            if (
              ((t ? t.ownerDocument || t : $e) !== Le && He(t),
              (n = n || []),
              !e || "string" != typeof e)
            )
              return n;
            if (1 !== (u = (t = t || Le).nodeType) && 9 !== u) return [];
            if (Ve && !r) {
              if ((o = wt.exec(e)))
                if ((a = o[1])) {
                  if (9 === u) {
                    if (!(i = t.getElementById(a)) || !i.parentNode) return n;
                    if (i.id === a) return n.push(i), n;
                  } else if (
                    t.ownerDocument &&
                    (i = t.ownerDocument.getElementById(a)) &&
                    je(t, i) &&
                    i.id === a
                  )
                    return n.push(i), n;
                } else {
                  if (o[2]) return ot.apply(n, t.getElementsByTagName(e)), n;
                  if ((a = o[3]) && ke.getElementsByClassName)
                    return ot.apply(n, t.getElementsByClassName(a)), n;
                }
              if (ke.qsa && (!Fe || !Fe.test(e))) {
                if (
                  ((f = c = qe),
                  (d = t),
                  (h = 9 === u && e),
                  1 === u && "object" !== t.nodeName.toLowerCase())
                ) {
                  for (
                    l = Be(e),
                      (c = t.getAttribute("id"))
                        ? (f = c.replace(St, "\\$&"))
                        : t.setAttribute("id", f),
                      f = "[id='" + f + "'] ",
                      s = l.length;
                    s--;

                  )
                    l[s] = f + Dt(l[s]);
                  (d = (xt.test(e) && Mt(t.parentNode)) || t),
                    (h = l.join(","));
                }
                if (h)
                  try {
                    return ot.apply(n, d.querySelectorAll(h)), n;
                  } catch (e) {
                  } finally {
                    c || t.removeAttribute("id");
                  }
              }
            }
            return Me(e.replace(ft, "$1"), t, n, r);
          };
          function kt() {
            var e = [];
            return function t(n, r) {
              return (
                e.push(n + " ") > Te.cacheLength && delete t[e.shift()],
                (t[n + " "] = r)
              );
            };
          }
          function Tt(e) {
            return (e[qe] = !0), e;
          }
          function _t(e, t) {
            var n = t && e,
              r =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                (~t.sourceIndex || Ze) - (~e.sourceIndex || Ze);
            if (r) return r;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function At(e) {
            return function(t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
          }
          function Bt(e) {
            return function(t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }
          function Rt(e) {
            return Tt(function(t) {
              return (
                (t = +t),
                Tt(function(n, r) {
                  for (var o, i = e([], n.length, t), a = i.length; a--; )
                    n[(o = i[a])] && (n[o] = !(r[o] = n[o]));
                })
              );
            });
          }
          function Mt(e) {
            return e && typeof e.getElementsByTagName !== Qe && e;
          }
          for (ze in ((ke = zt.support = {}),
          (Ae = zt.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
          }),
          (He = zt.setDocument = function(e) {
            var t,
              n = e ? e.ownerDocument || e : $e,
              r = n.defaultView;
            return n !== Le && 9 === n.nodeType && n.documentElement
              ? ((Le = n),
                (Ie = n.documentElement),
                (Ve = !Ae(n)),
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
                          He();
                        },
                        !1
                      )
                    : r.attachEvent &&
                      r.attachEvent("onunload", function() {
                        He();
                      })),
                (ke.attributes = !0),
                (ke.getElementsByTagName = !0),
                (ke.getElementsByClassName = Ct.test(n.getElementsByClassName)),
                (ke.getById = !0),
                (Te.find.ID = function(e, t) {
                  if (typeof t.getElementById !== Qe && Ve) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : [];
                  }
                }),
                (Te.filter.ID = function(e) {
                  var t = e.replace(Et, Nt);
                  return function(e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (Te.find.TAG = ke.getElementsByTagName
                  ? function(e, t) {
                      if (typeof t.getElementsByTagName !== Qe)
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
                (Te.find.CLASS =
                  ke.getElementsByClassName &&
                  function(e, t) {
                    if (Ve) return t.getElementsByClassName(e);
                  }),
                (Ue = []),
                (Fe = []),
                (ke.disconnectedMatch = !0),
                (Fe = Fe.length && new RegExp(Fe.join("|"))),
                (Ue = Ue.length && new RegExp(Ue.join("|"))),
                (t = Ct.test(Ie.compareDocumentPosition)),
                (je =
                  t || Ct.test(Ie.contains)
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
                (Je = t
                  ? function(e, t) {
                      if (e === t) return (Pe = !0), 0;
                      var r =
                        !e.compareDocumentPosition - !t.compareDocumentPosition;
                      return (
                        r ||
                        (1 &
                          (r =
                            (e.ownerDocument || e) === (t.ownerDocument || t)
                              ? e.compareDocumentPosition(t)
                              : 1) ||
                        (!ke.sortDetached && t.compareDocumentPosition(e) === r)
                          ? e === n || (e.ownerDocument === $e && je($e, e))
                            ? -1
                            : t === n || (t.ownerDocument === $e && je($e, t))
                            ? 1
                            : De
                            ? at.call(De, e) - at.call(De, t)
                            : 0
                          : 4 & r
                          ? -1
                          : 1)
                      );
                    }
                  : function(e, t) {
                      if (e === t) return (Pe = !0), 0;
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
                          : De
                          ? at.call(De, e) - at.call(De, t)
                          : 0;
                      if (i === a) return _t(e, t);
                      for (r = e; (r = r.parentNode); ) u.unshift(r);
                      for (r = t; (r = r.parentNode); ) s.unshift(r);
                      for (; u[o] === s[o]; ) o++;
                      return o
                        ? _t(u[o], s[o])
                        : u[o] === $e
                        ? -1
                        : s[o] === $e
                        ? 1
                        : 0;
                    }),
                n)
              : Le;
          }),
          (zt.matches = function(e, t) {
            return zt(e, null, null, t);
          }),
          (zt.matchesSelector = function(e, t) {
            if (
              ((e.ownerDocument || e) !== Le && He(e),
              (t = t.replace(mt, "='$1']")),
              ke.matchesSelector &&
                Ve &&
                (!Ue || !Ue.test(t)) &&
                (!Fe || !Fe.test(t)))
            )
              try {
                var n = (void 0).call(e, t);
                if (
                  n ||
                  ke.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return n;
              } catch (e) {}
            return zt(t, Le, null, [e]).length > 0;
          }),
          (zt.contains = function(e, t) {
            return (e.ownerDocument || e) !== Le && He(e), je(e, t);
          }),
          (zt.attr = function(e, t) {
            (e.ownerDocument || e) !== Le && He(e);
            var n = Te.attrHandle[t.toLowerCase()],
              r =
                n && et.call(Te.attrHandle, t.toLowerCase())
                  ? n(e, t, !Ve)
                  : void 0;
            return void 0 !== r
              ? r
              : ke.attributes || !Ve
              ? e.getAttribute(t)
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
          }),
          (zt.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (zt.uniqueSort = function(e) {
            var t,
              n = [],
              r = 0,
              o = 0;
            if (
              ((Pe = !ke.detectDuplicates),
              (De = !ke.sortStable && e.slice(0)),
              e.sort(Je),
              Pe)
            ) {
              for (; (t = e[o++]); ) t === e[o] && (r = n.push(o));
              for (; r--; ) e.splice(n[r], 1);
            }
            return (De = null), e;
          }),
          (_e = zt.getText = function(e) {
            var t,
              n = "",
              r = 0,
              o = e.nodeType;
            if (o) {
              if (1 === o || 9 === o || 11 === o) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += _e(e);
              } else if (3 === o || 4 === o) return e.nodeValue;
            } else for (; (t = e[r++]); ) n += _e(t);
            return n;
          }),
          ((Te = zt.selectors = {
            cacheLength: 50,
            createPseudo: Tt,
            match: vt,
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
                  (e[1] = e[1].replace(Et, Nt)),
                  (e[3] = (e[3] || e[4] || e[5] || "").replace(Et, Nt)),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
                );
              },
              CHILD: function(e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  "nth" === e[1].slice(0, 3)
                    ? (e[3] || zt.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ("even" === e[3] || "odd" === e[3]))),
                      (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                    : e[3] && zt.error(e[0]),
                  e
                );
              },
              PSEUDO: function(e) {
                var t,
                  n = !e[6] && e[2];
                return vt.CHILD.test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || "")
                      : n &&
                        gt.test(n) &&
                        (t = Be(n, !0)) &&
                        (t = n.indexOf(")", n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                    e.slice(0, 3));
              }
            },
            filter: {
              TAG: function(e) {
                var t = e.replace(Et, Nt).toLowerCase();
                return "*" === e
                  ? function() {
                      return !0;
                    }
                  : function(e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
              },
              CLASS: function(e) {
                var t = Xe[e + " "];
                return (
                  t ||
                  ((t = new RegExp("(^|" + ut + ")" + e + "(" + ut + "|$)")) &&
                    Xe(e, function(e) {
                      return t.test(
                        ("string" == typeof e.className && e.className) ||
                          (typeof e.getAttribute !== Qe &&
                            e.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function(e, t, n) {
                return function(r) {
                  var o = zt.attr(r, e);
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
                      var l,
                        c,
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
                              (l = (c = p[qe] || (p[qe] = {}))[e] || [])[0] ===
                                We && l[1],
                              d = l[0] === We && l[2],
                              f = h && p.childNodes[h];
                            (f = (++h && f && f[g]) || (d = h = 0) || m.pop());

                          )
                            if (1 === f.nodeType && ++d && f === t) {
                              c[e] = [We, h, d];
                              break;
                            }
                        } else if (
                          b &&
                          (l = (t[qe] || (t[qe] = {}))[e]) &&
                          l[0] === We
                        )
                          d = l[1];
                        else
                          for (
                            ;
                            (f =
                              (++h && f && f[g]) || (d = h = 0) || m.pop()) &&
                            ((u
                              ? f.nodeName.toLowerCase() !== v
                              : 1 !== f.nodeType) ||
                              !++d ||
                              (b && ((f[qe] || (f[qe] = {}))[e] = [We, d]),
                              f !== t));

                          );
                        return (d -= o) === r || (d % r == 0 && d / r >= 0);
                      }
                    };
              },
              PSEUDO: function(e, t) {
                var n,
                  r =
                    Te.pseudos[e] ||
                    Te.setFilters[e.toLowerCase()] ||
                    zt.error("unsupported pseudo: " + e);
                return r[qe]
                  ? r(t)
                  : r.length > 1
                  ? ((n = [e, e, "", t]),
                    Te.setFilters.hasOwnProperty(e.toLowerCase())
                      ? Tt(function(e, n) {
                          for (var o, i = r(e, t), a = i.length; a--; )
                            e[(o = at.call(e, i[a]))] = !(n[o] = i[a]);
                        })
                      : function(e) {
                          return r(e, 0, n);
                        })
                  : r;
              }
            },
            pseudos: {
              not: Tt(function(e) {
                var t = [],
                  n = [],
                  r = Re(e.replace(ft, "$1"));
                return r[qe]
                  ? Tt(function(e, t, n, o) {
                      for (var i, a = r(e, null, o, []), u = e.length; u--; )
                        (i = a[u]) && (e[u] = !(t[u] = i));
                    })
                  : function(e, o, i) {
                      return (t[0] = e), r(t, null, i, n), !n.pop();
                    };
              }),
              has: Tt(function(e) {
                return function(t) {
                  return zt(e, t).length > 0;
                };
              }),
              contains: Tt(function(e) {
                return (
                  (e = e.replace(Et, Nt)),
                  function(t) {
                    return (
                      (t.textContent || t.innerText || _e(t)).indexOf(e) > -1
                    );
                  }
                );
              }),
              lang: Tt(function(e) {
                return (
                  pt.test(e || "") || zt.error("unsupported lang: " + e),
                  (e = e.replace(Et, Nt).toLowerCase()),
                  function(t) {
                    var n;
                    do {
                      if (
                        (n = Ve
                          ? t.lang
                          : t.getAttribute("xml:lang") ||
                            t.getAttribute("lang"))
                      )
                        return (
                          (n = n.toLowerCase()) === e ||
                          0 === n.indexOf(e + "-")
                        );
                    } while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1;
                  }
                );
              }),
              target: function(e) {
                var t = n.window.location && n.window.location.hash;
                return t && t.slice(1) === e.id;
              },
              root: function(e) {
                return e === Ie;
              },
              focus: function(e) {
                return (
                  e === Le.activeElement &&
                  (!Le.hasFocus || Le.hasFocus()) &&
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
                return !Te.pseudos.empty(e);
              },
              header: function(e) {
                return yt.test(e.nodeName);
              },
              input: function(e) {
                return bt.test(e.nodeName);
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
              first: Rt(function() {
                return [0];
              }),
              last: Rt(function(e, t) {
                return [t - 1];
              }),
              eq: Rt(function(e, t, n) {
                return [n < 0 ? n + t : n];
              }),
              even: Rt(function(e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e;
              }),
              odd: Rt(function(e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e;
              }),
              lt: Rt(function(e, t, n) {
                for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                return e;
              }),
              gt: Rt(function(e, t, n) {
                for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                return e;
              })
            }
          }).pseudos.nth = Te.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            Te.pseudos[ze] = At(ze);
          for (ze in { submit: !0, reset: !0 }) Te.pseudos[ze] = Bt(ze);
          function Ot() {}
          function Dt(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
          }
          function Pt(e, t, n) {
            var r = t.dir,
              o = n && "parentNode" === r,
              i = Ke++;
            return t.first
              ? function(t, n, i) {
                  for (; (t = t[r]); )
                    if (1 === t.nodeType || o) return e(t, n, i);
                }
              : function(t, n, a) {
                  var u,
                    s,
                    l = [We, i];
                  if (a) {
                    for (; (t = t[r]); )
                      if ((1 === t.nodeType || o) && e(t, n, a)) return !0;
                  } else
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || o) {
                        if (
                          (u = (s = t[qe] || (t[qe] = {}))[r]) &&
                          u[0] === We &&
                          u[1] === i
                        )
                          return (l[2] = u[2]);
                        if (((s[r] = l), (l[2] = e(t, n, a)))) return !0;
                      }
                };
          }
          function Ht(e) {
            return e.length > 1
              ? function(t, n, r) {
                  for (var o = e.length; o--; ) if (!e[o](t, n, r)) return !1;
                  return !0;
                }
              : e[0];
          }
          function Lt(e, t, n, r, o) {
            for (var i, a = [], u = 0, s = e.length, l = null != t; u < s; u++)
              (i = e[u]) && ((n && !n(i, r, o)) || (a.push(i), l && t.push(u)));
            return a;
          }
          function It(e, t, n, r, o, i) {
            return (
              r && !r[qe] && (r = It(r)),
              o && !o[qe] && (o = It(o, i)),
              Tt(function(i, a, u, s) {
                var l,
                  c,
                  f,
                  d = [],
                  h = [],
                  m = a.length,
                  g =
                    i ||
                    (function(e, t, n) {
                      for (var r = 0, o = t.length; r < o; r++) zt(e, t[r], n);
                      return n;
                    })(t || "*", u.nodeType ? [u] : u, []),
                  p = !e || (!i && t) ? g : Lt(g, d, e, u, s),
                  v = n ? (o || (i ? e : m || r) ? [] : a) : p;
                if ((n && n(p, v, u, s), r))
                  for (l = Lt(v, h), r(l, [], u, s), c = l.length; c--; )
                    (f = l[c]) && (v[h[c]] = !(p[h[c]] = f));
                if (i) {
                  if (o || e) {
                    if (o) {
                      for (l = [], c = v.length; c--; )
                        (f = v[c]) && l.push((p[c] = f));
                      o(null, (v = []), l, s);
                    }
                    for (c = v.length; c--; )
                      (f = v[c]) &&
                        (l = o ? at.call(i, f) : d[c]) > -1 &&
                        (i[l] = !(a[l] = f));
                  }
                } else (v = Lt(v === a ? v.splice(m, v.length) : v)), o ? o(null, a, v, s) : ot.apply(a, v);
              })
            );
          }
          function Vt(e) {
            for (
              var t,
                n,
                r,
                o = e.length,
                i = Te.relative[e[0].type],
                a = i || Te.relative[" "],
                u = i ? 1 : 0,
                s = Pt(
                  function(e) {
                    return e === t;
                  },
                  a,
                  !0
                ),
                l = Pt(
                  function(e) {
                    return at.call(t, e) > -1;
                  },
                  a,
                  !0
                ),
                c = [
                  function(e, n, r) {
                    return (
                      (!i && (r || n !== Oe)) ||
                      ((t = n).nodeType ? s(e, n, r) : l(e, n, r))
                    );
                  }
                ];
              u < o;
              u++
            )
              if ((n = Te.relative[e[u].type])) c = [Pt(Ht(c), n)];
              else {
                if ((n = Te.filter[e[u].type].apply(null, e[u].matches))[qe]) {
                  for (r = ++u; r < o && !Te.relative[e[r].type]; r++);
                  return It(
                    u > 1 && Ht(c),
                    u > 1 &&
                      Dt(
                        e
                          .slice(0, u - 1)
                          .concat({ value: " " === e[u - 2].type ? "*" : "" })
                      ).replace(ft, "$1"),
                    n,
                    u < r && Vt(e.slice(u, r)),
                    r < o && Vt((e = e.slice(r))),
                    r < o && Dt(e)
                  );
                }
                c.push(n);
              }
            return Ht(c);
          }
          (Ot.prototype = Te.filters = Te.pseudos),
            (Te.setFilters = new Ot()),
            (Be = zt.tokenize = function(e, t) {
              var n,
                r,
                o,
                i,
                a,
                u,
                s,
                l = Ye[e + " "];
              if (l) return t ? 0 : l.slice(0);
              for (a = e, u = [], s = Te.preFilter; a; ) {
                for (i in ((n && !(r = dt.exec(a))) ||
                  (r && (a = a.slice(r[0].length) || a), u.push((o = []))),
                (n = !1),
                (r = ht.exec(a)) &&
                  ((n = r.shift()),
                  o.push({ value: n, type: r[0].replace(ft, " ") }),
                  (a = a.slice(n.length))),
                Te.filter))
                  !(r = vt[i].exec(a)) ||
                    (s[i] && !(r = s[i](r))) ||
                    ((n = r.shift()),
                    o.push({ value: n, type: i, matches: r }),
                    (a = a.slice(n.length)));
                if (!n) break;
              }
              return t ? a.length : a ? zt.error(e) : Ye(e, u).slice(0);
            }),
            (Re = zt.compile = function(e, t) {
              var n,
                r = [],
                o = [],
                i = Ge[e + " "];
              if (!i) {
                for (t || (t = Be(e)), n = t.length; n--; )
                  (i = Vt(t[n]))[qe] ? r.push(i) : o.push(i);
                (i = Ge(
                  e,
                  (function(e, t) {
                    var n = t.length > 0,
                      r = e.length > 0,
                      o = function(o, i, a, u, s) {
                        var l,
                          c,
                          f,
                          d = 0,
                          h = "0",
                          m = o && [],
                          g = [],
                          p = Oe,
                          v = o || (r && Te.find.TAG("*", s)),
                          b = (We += null == p ? 1 : Math.random() || 0.1),
                          y = v.length;
                        for (
                          s && (Oe = i !== Le && i);
                          h !== y && null != (l = v[h]);
                          h++
                        ) {
                          if (r && l) {
                            for (c = 0; (f = e[c++]); )
                              if (f(l, i, a)) {
                                u.push(l);
                                break;
                              }
                            s && (We = b);
                          }
                          n && ((l = !f && l) && d--, o && m.push(l));
                        }
                        if (((d += h), n && h !== d)) {
                          for (c = 0; (f = t[c++]); ) f(m, g, i, a);
                          if (o) {
                            if (d > 0)
                              for (; h--; ) m[h] || g[h] || (g[h] = nt.call(u));
                            g = Lt(g);
                          }
                          ot.apply(u, g),
                            s &&
                              !o &&
                              g.length > 0 &&
                              d + t.length > 1 &&
                              zt.uniqueSort(u);
                        }
                        return s && ((We = b), (Oe = p)), m;
                      };
                    return n ? Tt(o) : o;
                  })(o, r)
                )).selector = e;
              }
              return i;
            }),
            (Me = zt.select = function(e, t, n, r) {
              var o,
                i,
                a,
                u,
                s,
                l = "function" == typeof e && e,
                c = !r && Be((e = l.selector || e));
              if (((n = n || []), 1 === c.length)) {
                if (
                  (i = c[0] = c[0].slice(0)).length > 2 &&
                  "ID" === (a = i[0]).type &&
                  ke.getById &&
                  9 === t.nodeType &&
                  Ve &&
                  Te.relative[i[1].type]
                ) {
                  if (
                    !(t = (Te.find.ID(a.matches[0].replace(Et, Nt), t) ||
                      [])[0])
                  )
                    return n;
                  l && (t = t.parentNode),
                    (e = e.slice(i.shift().value.length));
                }
                for (
                  o = vt.needsContext.test(e) ? 0 : i.length;
                  o-- && ((a = i[o]), !Te.relative[(u = a.type)]);

                )
                  if (
                    (s = Te.find[u]) &&
                    (r = s(
                      a.matches[0].replace(Et, Nt),
                      (xt.test(i[0].type) && Mt(t.parentNode)) || t
                    ))
                  ) {
                    if ((i.splice(o, 1), !(e = r.length && Dt(i))))
                      return ot.apply(n, r), n;
                    break;
                  }
              }
              return (
                (l || Re(e, c))(
                  r,
                  t,
                  !Ve,
                  n,
                  (xt.test(e) && Mt(t.parentNode)) || t
                ),
                n
              );
            }),
            (ke.sortStable =
              qe
                .split("")
                .sort(Je)
                .join("") === qe),
            (ke.detectDuplicates = !!Pe),
            He(),
            (ke.sortDetached = !0);
          var Ft = Array.isArray,
            Ut = function(e, t, n) {
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
            jt = function(e, t, n) {
              var r, o;
              for (r = 0, o = e.length; r < o; r++)
                if (t.call(n, e[r], r, e)) return r;
              return -1;
            },
            qt = {
              isArray: Ft,
              toArray: function(e) {
                var t,
                  n,
                  r = e;
                if (!Ft(e))
                  for (r = [], t = 0, n = e.length; t < n; t++) r[t] = e[t];
                return r;
              },
              each: Ut,
              map: function(e, t) {
                var n = [];
                return (
                  Ut(e, function(r, o) {
                    n.push(t(r, o, e));
                  }),
                  n
                );
              },
              filter: function(e, t) {
                var n = [];
                return (
                  Ut(e, function(r, o) {
                    (t && !t(r, o, e)) || n.push(r);
                  }),
                  n
                );
              },
              indexOf: function(e, t) {
                var n, r;
                if (e)
                  for (n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1;
              },
              reduce: function(e, t, n, r) {
                var o = 0;
                for (arguments.length < 3 && (n = e[0]); o < e.length; o++)
                  n = t.call(r, n, e[o], o);
                return n;
              },
              findIndex: jt,
              find: function(e, t, n) {
                var r = jt(e, t, n);
                if (-1 !== r) return e[r];
              },
              last: function(e) {
                return e[e.length - 1];
              }
            },
            $t = /^\s*|\s*$/g,
            Wt = function(e) {
              return null == e ? "" : ("" + e).replace($t, "");
            },
            Kt = function(e, t) {
              return t
                ? !("array" !== t || !qt.isArray(e)) || typeof e === t
                : void 0 !== e;
            },
            Xt = function(e, t, n, r) {
              (r = r || this),
                e &&
                  (n && (e = e[n]),
                  qt.each(e, function(e, o) {
                    if (!1 === t.call(r, e, o, n)) return !1;
                    Xt(e, t, n, r);
                  }));
            },
            Yt = {
              trim: Wt,
              isArray: qt.isArray,
              is: Kt,
              toArray: qt.toArray,
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
              each: qt.each,
              map: qt.map,
              grep: qt.filter,
              inArray: qt.indexOf,
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
                            return (
                              (this.parent = r[a]), u.apply(this, arguments)
                            );
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
              walk: Xt,
              createNS: function(e, t) {
                var r, o;
                for (
                  t = t || n.window, e = e.split("."), r = 0;
                  r < e.length;
                  r++
                )
                  t[(o = e[r])] || (t[o] = {}), (t = t[o]);
                return t;
              },
              resolve: function(e, t) {
                var r, o;
                for (
                  t = t || n.window, r = 0, o = (e = e.split(".")).length;
                  r < o && (t = t[e[r]]);
                  r++
                );
                return t;
              },
              explode: function(e, t) {
                return !e || Kt(e, "array") ? e : qt.map(e.split(t || ","), Wt);
              },
              _addCacheSuffix: function(e) {
                var t = fe.cacheSuffix;
                return t && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e;
              }
            },
            Gt = n.document,
            Jt = Array.prototype.push,
            Qt = Array.prototype.slice,
            Zt = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
            en = Ne.Event,
            tn = Yt.makeMap("children,contents,next,prev"),
            nn = function(e) {
              return void 0 !== e;
            },
            rn = function(e) {
              return "string" == typeof e;
            },
            on = function(e, t) {
              var n, r, o;
              for (
                o = (t = t || Gt).createElement("div"),
                  n = t.createDocumentFragment(),
                  o.innerHTML = e;
                (r = o.firstChild);

              )
                n.appendChild(r);
              return n;
            },
            an = function(e, t, n, r) {
              var o;
              if (rn(t)) t = on(t, Cn(e[0]));
              else if (t.length && !t.nodeType) {
                if (((t = gn.makeArray(t)), r))
                  for (o = t.length - 1; o >= 0; o--) an(e, t[o], n, r);
                else for (o = 0; o < t.length; o++) an(e, t[o], n, r);
                return e;
              }
              if (t.nodeType) for (o = e.length; o--; ) n.call(e[o], t);
              return e;
            },
            un = function(e, t) {
              return (
                e &&
                t &&
                -1 !== (" " + e.className + " ").indexOf(" " + t + " ")
              );
            },
            sn = function(e, t, n) {
              var r, o;
              return (
                (t = gn(t)[0]),
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
            ln = Yt.makeMap(
              "fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom",
              " "
            ),
            cn = Yt.makeMap(
              "checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected",
              " "
            ),
            fn = { for: "htmlFor", class: "className", readonly: "readOnly" },
            dn = { float: "cssFloat" },
            hn = {},
            mn = {},
            gn = function(e, t) {
              return new gn.fn.init(e, t);
            },
            pn = /^\s*|\s*$/g,
            vn = function(e) {
              return null == e ? "" : ("" + e).replace(pn, "");
            },
            bn = function(e, t) {
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
                  for (
                    o = 0;
                    o < n && ((i = e[o]), !1 !== t.call(i, o, i));
                    o++
                  );
              return e;
            },
            yn = function(e, t) {
              var n = [];
              return (
                bn(e, function(e, r) {
                  t(r, e) && n.push(r);
                }),
                n
              );
            },
            Cn = function(e) {
              return e ? (9 === e.nodeType ? e : e.ownerDocument) : Gt;
            };
          (gn.fn = gn.prototype = {
            constructor: gn,
            selector: "",
            context: null,
            length: 0,
            init: function(e, t) {
              var r, o;
              if (!e) return this;
              if (e.nodeType)
                return (this.context = this[0] = e), (this.length = 1), this;
              if (t && t.nodeType) this.context = t;
              else {
                if (t) return gn(e).attr(t);
                this.context = t = n.document;
              }
              if (rn(e)) {
                if (
                  ((this.selector = e),
                  !(r =
                    "<" === e.charAt(0) &&
                    ">" === e.charAt(e.length - 1) &&
                    e.length >= 3
                      ? [null, e, null]
                      : Zt.exec(e)))
                )
                  return gn(t).find(e);
                if (r[1])
                  for (o = on(e, Cn(t)).firstChild; o; )
                    Jt.call(this, o), (o = o.nextSibling);
                else {
                  if (!(o = Cn(t).getElementById(r[2]))) return this;
                  if (o.id !== r[2]) return this.find(e);
                  (this.length = 1), (this[0] = o);
                }
              } else this.add(e, !1);
              return this;
            },
            toArray: function() {
              return Yt.toArray(this);
            },
            add: function(e, t) {
              var n, r;
              if (rn(e)) return this.add(gn(e));
              if (!1 !== t)
                for (
                  n = gn.unique(this.toArray().concat(gn.makeArray(e))),
                    this.length = n.length,
                    r = 0;
                  r < n.length;
                  r++
                )
                  this[r] = n[r];
              else Jt.apply(this, gn.makeArray(e));
              return this;
            },
            attr: function(e, t) {
              var n,
                r = this;
              if ("object" == typeof e)
                bn(e, function(e, t) {
                  r.attr(e, t);
                });
              else {
                if (!nn(t)) {
                  if (r[0] && 1 === r[0].nodeType) {
                    if ((n = hn[e]) && n.get) return n.get(r[0], e);
                    if (cn[e]) return r.prop(e) ? e : void 0;
                    null === (t = r[0].getAttribute(e, 2)) && (t = void 0);
                  }
                  return t;
                }
                this.each(function() {
                  var n;
                  if (1 === this.nodeType) {
                    if ((n = hn[e]) && n.set) return void n.set(this, t);
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
              if ("object" == typeof (e = fn[e] || e))
                bn(e, function(e, t) {
                  n.prop(e, t);
                });
              else {
                if (!nn(t))
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
                bn(e, function(e, t) {
                  o.css(e, t);
                });
              else if (nn(t))
                (e = i(e)),
                  "number" != typeof t || ln[e] || (t = t.toString() + "px"),
                  o.each(function() {
                    var n = this.style;
                    if ((r = mn[e]) && r.set) r.set(this, t);
                    else {
                      try {
                        this.style[dn[e] || e] = t;
                      } catch (e) {}
                      (null !== t && "" !== t) ||
                        (n.removeProperty
                          ? n.removeProperty(a(e))
                          : n.removeAttribute(e));
                    }
                  });
              else {
                if (((n = o[0]), (r = mn[e]) && r.get)) return r.get(n);
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
                  en.clean(e),
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
              if (nn(e)) {
                t = this.length;
                try {
                  for (; t--; ) this[t].innerHTML = e;
                } catch (n) {
                  gn(this[t])
                    .empty()
                    .append(e);
                }
                return this;
              }
              return this[0] ? this[0].innerHTML : "";
            },
            text: function(e) {
              var t;
              if (nn(e)) {
                for (t = this.length; t--; )
                  "innerText" in this[t]
                    ? (this[t].innerText = e)
                    : (this[0].textContent = e);
                return this;
              }
              return this[0] ? this[0].innerText || this[0].textContent : "";
            },
            append: function() {
              return an(this, arguments, function(e) {
                (1 === this.nodeType ||
                  (this.host && 1 === this.host.nodeType)) &&
                  this.appendChild(e);
              });
            },
            prepend: function() {
              return an(
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
                ? an(this, arguments, function(e) {
                    this.parentNode.insertBefore(e, this);
                  })
                : this;
            },
            after: function() {
              return this[0] && this[0].parentNode
                ? an(
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
              return gn(e).append(this), this;
            },
            prependTo: function(e) {
              return gn(e).prepend(this), this;
            },
            replaceWith: function(e) {
              return this.before(e).remove();
            },
            wrap: function(e) {
              return sn(this, e);
            },
            wrapAll: function(e) {
              return sn(this, e, !0);
            },
            wrapInner: function(e) {
              return (
                this.each(function() {
                  gn(this)
                    .contents()
                    .wrapAll(e);
                }),
                this
              );
            },
            unwrap: function() {
              return this.parent().each(function() {
                gn(this).replaceWith(this.childNodes);
              });
            },
            clone: function() {
              var e = [];
              return (
                this.each(function() {
                  e.push(this.cloneNode(!0));
                }),
                gn(e)
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
                    ? bn(e.split(" "), function() {
                        n.toggleClass(this, t);
                      })
                    : n.each(function(n, r) {
                        var o, i;
                        (i = un(r, e)) !== t &&
                          ((o = r.className),
                          i
                            ? (r.className = vn(
                                (" " + o + " ").replace(" " + e + " ", " ")
                              ))
                            : (r.className += o ? " " + e : e));
                      }),
                  n);
            },
            hasClass: function(e) {
              return un(this[0], e);
            },
            each: function(e) {
              return bn(this, e);
            },
            on: function(e, t) {
              return this.each(function() {
                en.bind(this, e, t);
              });
            },
            off: function(e, t) {
              return this.each(function() {
                en.unbind(this, e, t);
              });
            },
            trigger: function(e) {
              return this.each(function() {
                "object" == typeof e
                  ? en.fire(this, e.type, e)
                  : en.fire(this, e);
              });
            },
            show: function() {
              return this.css("display", "");
            },
            hide: function() {
              return this.css("display", "none");
            },
            slice: function() {
              return new gn(Qt.apply(this, arguments));
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
              for (t = 0, n = this.length; t < n; t++) gn.find(e, this[t], r);
              return gn(r);
            },
            filter: function(e) {
              return gn(
                "function" == typeof e
                  ? yn(this.toArray(), function(t, n) {
                      return e(n, t);
                    })
                  : gn.filter(e, this.toArray())
              );
            },
            closest: function(e) {
              var t = [];
              return (
                e instanceof gn && (e = e[0]),
                this.each(function(n, r) {
                  for (; r; ) {
                    if ("string" == typeof e && gn(r).is(e)) {
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
                gn(t)
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
            push: Jt,
            sort: [].sort,
            splice: [].splice
          }),
            Yt.extend(gn, {
              extend: Yt.extend,
              makeArray: function(e) {
                return ((t = e) && t === t.window) || e.nodeType
                  ? [e]
                  : Yt.toArray(e);
                var t;
              },
              inArray: function(e, t) {
                var n;
                if (t.indexOf) return t.indexOf(e);
                for (n = t.length; n--; ) if (t[n] === e) return n;
                return -1;
              },
              isArray: Yt.isArray,
              each: bn,
              trim: vn,
              grep: yn,
              find: zt,
              expr: zt.selectors,
              unique: zt.uniqueSort,
              text: zt.getText,
              contains: zt.contains,
              filter: function(e, t, n) {
                var r = t.length;
                for (n && (e = ":not(" + e + ")"); r--; )
                  1 !== t[r].nodeType && t.splice(r, 1);
                return (t =
                  1 === t.length
                    ? gn.find.matchesSelector(t[0], e)
                      ? [t[0]]
                      : []
                    : gn.find.matches(e, t));
              }
            });
          var wn = function(e, t, n) {
              var r = [],
                o = e[t];
              for (
                "string" != typeof n && n instanceof gn && (n = n[0]);
                o && 9 !== o.nodeType;

              ) {
                if (void 0 !== n) {
                  if (o === n) break;
                  if ("string" == typeof n && gn(o).is(n)) break;
                }
                1 === o.nodeType && r.push(o), (o = o[t]);
              }
              return r;
            },
            xn = function(e, t, n, r) {
              var o = [];
              for (r instanceof gn && (r = r[0]); e; e = e[t])
                if (!n || e.nodeType === n) {
                  if (void 0 !== r) {
                    if (e === r) break;
                    if ("string" == typeof r && gn(e).is(r)) break;
                  }
                  o.push(e);
                }
              return o;
            },
            Sn = function(e, t, n) {
              for (e = e[t]; e; e = e[t]) if (e.nodeType === n) return e;
              return null;
            };
          bn(
            {
              parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null;
              },
              parents: function(e) {
                return wn(e, "parentNode");
              },
              next: function(e) {
                return Sn(e, "nextSibling", 1);
              },
              prev: function(e) {
                return Sn(e, "previousSibling", 1);
              },
              children: function(e) {
                return xn(e.firstChild, "nextSibling", 1);
              },
              contents: function(e) {
                return Yt.toArray(
                  ("iframe" === e.nodeName
                    ? e.contentDocument || e.contentWindow.document
                    : e
                  ).childNodes
                );
              }
            },
            function(e, t) {
              gn.fn[e] = function(n) {
                var r = [];
                return (
                  this.each(function() {
                    var e = t.call(r, this, n, r);
                    e && (gn.isArray(e) ? r.push.apply(r, e) : r.push(e));
                  }),
                  this.length > 1 &&
                    (tn[e] || (r = gn.unique(r)),
                    0 === e.indexOf("parents") && (r = r.reverse())),
                  (r = gn(r)),
                  n ? r.filter(n) : r
                );
              };
            }
          ),
            bn(
              {
                parentsUntil: function(e, t) {
                  return wn(e, "parentNode", t);
                },
                nextUntil: function(e, t) {
                  return xn(e, "nextSibling", 1, t).slice(1);
                },
                prevUntil: function(e, t) {
                  return xn(e, "previousSibling", 1, t).slice(1);
                }
              },
              function(e, t) {
                gn.fn[e] = function(n, r) {
                  var o = [];
                  return (
                    this.each(function() {
                      var e = t.call(o, this, n, o);
                      e && (gn.isArray(e) ? o.push.apply(o, e) : o.push(e));
                    }),
                    this.length > 1 &&
                      ((o = gn.unique(o)),
                      (0 !== e.indexOf("parents") && "prevUntil" !== e) ||
                        (o = o.reverse())),
                    (o = gn(o)),
                    r ? o.filter(r) : o
                  );
                };
              }
            ),
            (gn.fn.is = function(e) {
              return !!e && this.filter(e).length > 0;
            }),
            (gn.fn.init.prototype = gn.fn),
            (gn.overrideDefaults = function(e) {
              var t,
                n = function(r, o) {
                  return (
                    (t = t || e()),
                    0 === arguments.length && (r = t.element),
                    o || (o = t.context),
                    new n.fn.init(r, o)
                  );
                };
              return gn.extend(n, this), n;
            });
          var En = function(e, t, n) {
            bn(n, function(n, r) {
              (e[n] = e[n] || {}), (e[n][t] = r);
            });
          };
          fe.ie &&
            fe.ie < 8 &&
            (En(hn, "get", {
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
            En(hn, "set", {
              class: function(e, t) {
                e.className = t;
              },
              style: function(e, t) {
                e.style.cssText = t;
              }
            })),
            fe.ie &&
              fe.ie < 9 &&
              ((dn.float = "styleFloat"),
              En(mn, "set", {
                opacity: function(e, t) {
                  var n = e.style;
                  null === t || "" === t
                    ? n.removeAttribute("filter")
                    : ((n.zoom = 1),
                      (n.filter = "alpha(opacity=" + 100 * t + ")"));
                }
              })),
            (gn.attrHooks = hn),
            (gn.cssHooks = mn);
          var Nn,
            zn,
            kn,
            Tn = function() {
              return _n(0, 0);
            },
            _n = function(e, t) {
              return { major: e, minor: t };
            },
            An = {
              nu: _n,
              detect: function(e, t) {
                var n = String(t).toLowerCase();
                return 0 === e.length
                  ? Tn()
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
                      return _n(r(1), r(2));
                    })(e, n);
              },
              unknown: Tn
            },
            Bn = function(e, t) {
              return function() {
                return t === e;
              };
            },
            Rn = function(e) {
              var t = e.current;
              return {
                current: t,
                version: e.version,
                isEdge: Bn("Edge", t),
                isChrome: Bn("Chrome", t),
                isIE: Bn("IE", t),
                isOpera: Bn("Opera", t),
                isFirefox: Bn("Firefox", t),
                isSafari: Bn("Safari", t)
              };
            },
            Mn = {
              unknown: function() {
                return Rn({ current: void 0, version: An.unknown() });
              },
              nu: Rn,
              edge: i("Edge"),
              chrome: i("Chrome"),
              ie: i("IE"),
              opera: i("Opera"),
              firefox: i("Firefox"),
              safari: i("Safari")
            },
            On = function(e, t) {
              return function() {
                return t === e;
              };
            },
            Dn = function(e) {
              var t = e.current;
              return {
                current: t,
                version: e.version,
                isWindows: On("Windows", t),
                isiOS: On("iOS", t),
                isAndroid: On("Android", t),
                isOSX: On("OSX", t),
                isLinux: On("Linux", t),
                isSolaris: On("Solaris", t),
                isFreeBSD: On("FreeBSD", t)
              };
            },
            Pn = {
              unknown: function() {
                return Dn({ current: void 0, version: An.unknown() });
              },
              nu: Dn,
              windows: i("Windows"),
              ios: i("iOS"),
              android: i("Android"),
              linux: i("Linux"),
              osx: i("OSX"),
              solaris: i("Solaris"),
              freebsd: i("FreeBSD")
            },
            Hn = function(e, t) {
              var n = String(t).toLowerCase();
              return $(e, function(e) {
                return e.search(n);
              });
            },
            Ln = function(e, t) {
              return Hn(e, t).map(function(e) {
                var n = An.detect(e.versionRegexes, t);
                return { current: e.name, version: n };
              });
            },
            In = function(e, t) {
              return Hn(e, t).map(function(e) {
                var n = An.detect(e.versionRegexes, t);
                return { current: e.name, version: n };
              });
            },
            Vn = function(e, t) {
              return -1 !== e.indexOf(t);
            },
            Fn = function(e) {
              return e.replace(/^\s+|\s+$/g, "");
            },
            Un = function(e) {
              return e.replace(/\s+$/g, "");
            },
            jn = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
            qn = function(e) {
              return function(t) {
                return Vn(t, e);
              };
            },
            $n = [
              {
                name: "Edge",
                versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
                search: function(e) {
                  return (
                    Vn(e, "edge/") &&
                    Vn(e, "chrome") &&
                    Vn(e, "safari") &&
                    Vn(e, "applewebkit")
                  );
                }
              },
              {
                name: "Chrome",
                versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, jn],
                search: function(e) {
                  return Vn(e, "chrome") && !Vn(e, "chromeframe");
                }
              },
              {
                name: "IE",
                versionRegexes: [
                  /.*?msie\ ?([0-9]+)\.([0-9]+).*/,
                  /.*?rv:([0-9]+)\.([0-9]+).*/
                ],
                search: function(e) {
                  return Vn(e, "msie") || Vn(e, "trident");
                }
              },
              {
                name: "Opera",
                versionRegexes: [jn, /.*?opera\/([0-9]+)\.([0-9]+).*/],
                search: qn("opera")
              },
              {
                name: "Firefox",
                versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
                search: qn("firefox")
              },
              {
                name: "Safari",
                versionRegexes: [jn, /.*?cpu os ([0-9]+)_([0-9]+).*/],
                search: function(e) {
                  return (
                    (Vn(e, "safari") || Vn(e, "mobile/")) &&
                    Vn(e, "applewebkit")
                  );
                }
              }
            ],
            Wn = [
              {
                name: "Windows",
                search: qn("win"),
                versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
              },
              {
                name: "iOS",
                search: function(e) {
                  return Vn(e, "iphone") || Vn(e, "ipad");
                },
                versionRegexes: [
                  /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
                  /.*cpu os ([0-9]+)_([0-9]+).*/,
                  /.*cpu iphone os ([0-9]+)_([0-9]+).*/
                ]
              },
              {
                name: "Android",
                search: qn("android"),
                versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
              },
              {
                name: "OSX",
                search: qn("os x"),
                versionRegexes: [/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]
              },
              { name: "Linux", search: qn("linux"), versionRegexes: [] },
              { name: "Solaris", search: qn("sunos"), versionRegexes: [] },
              { name: "FreeBSD", search: qn("freebsd"), versionRegexes: [] }
            ],
            Kn = { browsers: i($n), oses: i(Wn) },
            Xn = function(e) {
              var t = Kn.browsers(),
                n = Kn.oses(),
                r = Ln(t, e).fold(Mn.unknown, Mn.nu),
                o = In(n, e).fold(Pn.unknown, Pn.nu),
                a = (function(e, t, n) {
                  var r = e.isiOS() && !0 === /ipad/i.test(n),
                    o = e.isiOS() && !r,
                    a = e.isAndroid() && 3 === e.version.major,
                    u = e.isAndroid() && 4 === e.version.major,
                    s = r || a || (u && !0 === /mobile/i.test(n)),
                    l = e.isiOS() || e.isAndroid(),
                    c = l && !s,
                    f = t.isSafari() && e.isiOS() && !1 === /safari/i.test(n);
                  return {
                    isiPad: i(r),
                    isiPhone: i(o),
                    isTablet: i(s),
                    isPhone: i(c),
                    isTouch: i(l),
                    isAndroid: e.isAndroid,
                    isiOS: e.isiOS,
                    isWebView: i(f)
                  };
                })(o, r, e);
              return { browser: r, os: o, deviceType: a };
            },
            Yn = {
              detect: ((Nn = function() {
                var e = n.navigator.userAgent;
                return Xn(e);
              }),
              (kn = !1),
              function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                return kn || ((kn = !0), (zn = Nn.apply(null, e))), zn;
              })
            },
            Gn = function(e) {
              if (null == e)
                throw new Error("Node cannot be null or undefined");
              return { dom: i(e) };
            },
            Jn = {
              fromHtml: function(e, t) {
                var r = (t || n.document).createElement("div");
                if (
                  ((r.innerHTML = e),
                  !r.hasChildNodes() || r.childNodes.length > 1)
                )
                  throw (n.console.error(
                    "HTML does not have a single root node",
                    e
                  ),
                  new Error("HTML must have a single root node"));
                return Gn(r.childNodes[0]);
              },
              fromTag: function(e, t) {
                var r = (t || n.document).createElement(e);
                return Gn(r);
              },
              fromText: function(e, t) {
                var r = (t || n.document).createTextNode(e);
                return Gn(r);
              },
              fromDom: Gn,
              fromPoint: function(e, t, n) {
                var r = e.dom();
                return _.from(r.elementFromPoint(t, n)).map(Gn);
              }
            },
            Qn = (n.Node.ATTRIBUTE_NODE,
            n.Node.CDATA_SECTION_NODE,
            n.Node.COMMENT_NODE,
            n.Node.DOCUMENT_NODE),
            Zn = (n.Node.DOCUMENT_TYPE_NODE,
            n.Node.DOCUMENT_FRAGMENT_NODE,
            n.Node.ELEMENT_NODE),
            er = n.Node.TEXT_NODE,
            tr = (n.Node.PROCESSING_INSTRUCTION_NODE,
            n.Node.ENTITY_REFERENCE_NODE,
            n.Node.ENTITY_NODE,
            n.Node.NOTATION_NODE,
            function(e) {
              return e.dom().nodeName.toLowerCase();
            }),
            nr = function(e) {
              return function(t) {
                return (
                  (function(e) {
                    return e.dom().nodeType;
                  })(t) === e
                );
              };
            },
            rr = nr(Zn),
            or = nr(er),
            ir = Object.keys,
            ar = Object.hasOwnProperty,
            ur = function(e, t) {
              for (var n = ir(e), r = 0, o = n.length; r < o; r++) {
                var i = n[r];
                t(e[i], i, e);
              }
            },
            sr = function(e, t) {
              return lr(e, function(e, n, r) {
                return { k: n, v: t(e, n, r) };
              });
            },
            lr = function(e, t) {
              var n = {};
              return (
                ur(e, function(r, o) {
                  var i = t(r, o, e);
                  n[i.k] = i.v;
                }),
                n
              );
            },
            cr = function(e, t) {
              return fr(e, t) ? _.some(e[t]) : _.none();
            },
            fr = function(e, t) {
              return ar.call(e, t);
            },
            dr = function(e, t, r) {
              if (!(B(r) || D(r) || H(r)))
                throw (n.console.error(
                  "Invalid call to Attr.set. Key ",
                  t,
                  ":: Value ",
                  r,
                  ":: Element ",
                  e
                ),
                new Error("Attribute value was not simple"));
              e.setAttribute(t, r + "");
            },
            hr = function(e, t, n) {
              dr(e.dom(), t, n);
            },
            mr = function(e, t) {
              var n = e.dom();
              ur(t, function(e, t) {
                dr(n, t, e);
              });
            },
            gr = function(e, t) {
              var n = e.dom().getAttribute(t);
              return null === n ? void 0 : n;
            },
            pr = function(e, t) {
              e.dom().removeAttribute(t);
            },
            vr = function(e, t) {
              var r = e.dom(),
                o = n.window.getComputedStyle(r).getPropertyValue(t),
                i =
                  "" !== o ||
                  (function(e) {
                    var t = or(e) ? e.dom().parentNode : e.dom();
                    return null != t && t.ownerDocument.body.contains(t);
                  })(e)
                    ? o
                    : br(r, t);
              return null === i ? void 0 : i;
            },
            br = function(e, t) {
              return (function(e) {
                return void 0 !== e.style;
              })(e)
                ? e.style.getPropertyValue(t)
                : "";
            },
            yr = function(e, t) {
              var n = e.dom(),
                r = br(n, t);
              return _.from(r).filter(function(e) {
                return e.length > 0;
              });
            },
            Cr = function() {
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
                  F(e, function(e, n) {
                    r[e] = i(t[n]);
                  }),
                  r
                );
              };
            },
            wr = function(e, t) {
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
            xr = function() {
              return oe.getOrDie("Node");
            },
            Sr = function(e, t, n) {
              return 0 != (e.compareDocumentPosition(t) & n);
            },
            Er = function(e, t) {
              return Sr(e, t, xr().DOCUMENT_POSITION_CONTAINED_BY);
            },
            Nr = Zn,
            zr = Qn,
            kr = function(e, t) {
              var n = e.dom();
              if (n.nodeType !== Nr) return !1;
              if (void 0 !== n.matches) return n.matches(t);
              if (void 0 !== n.msMatchesSelector) return n.msMatchesSelector(t);
              if (void 0 !== n.webkitMatchesSelector)
                return n.webkitMatchesSelector(t);
              if (void 0 !== n.mozMatchesSelector)
                return n.mozMatchesSelector(t);
              throw new Error("Browser lacks native selectors");
            },
            Tr = function(e) {
              return (
                (e.nodeType !== Nr && e.nodeType !== zr) ||
                0 === e.childElementCount
              );
            },
            _r = function(e, t) {
              return e.dom() === t.dom();
            },
            Ar = Yn.detect().browser.isIE()
              ? function(e, t) {
                  return Er(e.dom(), t.dom());
                }
              : function(e, t) {
                  var n = e.dom(),
                    r = t.dom();
                  return n !== r && n.contains(r);
                },
            Br = function(e) {
              return Jn.fromDom(e.dom().ownerDocument);
            },
            Rr = function(e) {
              var t = e.dom();
              return _.from(t.parentNode).map(Jn.fromDom);
            },
            Mr = function(e) {
              var t = e.dom();
              return _.from(t.previousSibling).map(Jn.fromDom);
            },
            Or = function(e) {
              var t = e.dom();
              return _.from(t.nextSibling).map(Jn.fromDom);
            },
            Dr = function(e) {
              return (t = wr(e, Mr)), (n = J.call(t, 0)).reverse(), n;
              var t, n;
            },
            Pr = function(e) {
              return wr(e, Or);
            },
            Hr = function(e) {
              var t = e.dom();
              return V(t.childNodes, Jn.fromDom);
            },
            Lr = function(e, t) {
              var n = e.dom().childNodes;
              return _.from(n[t]).map(Jn.fromDom);
            },
            Ir = function(e) {
              return Lr(e, 0);
            },
            Vr = function(e) {
              return Lr(e, e.dom().childNodes.length - 1);
            },
            Fr = (Cr("element", "offset"), Yn.detect().browser),
            Ur = function(e) {
              return $(e, rr);
            },
            jr = {
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
                    "static" === vr(Jn.fromDom(e), "position")
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
                    return Fr.isFirefox() && "table" === tr(e)
                      ? Ur(Hr(e))
                          .filter(function(e) {
                            return "caption" === tr(e);
                          })
                          .bind(function(e) {
                            return Ur(Pr(e)).map(function(t) {
                              var n = t.dom().offsetTop,
                                r = e.dom().offsetTop,
                                o = e.dom().offsetHeight;
                              return n <= r ? -o : 0;
                            });
                          })
                          .getOr(0)
                      : 0;
                  })(Jn.fromDom(t));
                }
                return { x: i, y: a };
              }
            },
            qr = function(e) {
              var t = _.none(),
                n = [],
                r = function(e) {
                  o() ? a(e) : n.push(e);
                },
                o = function() {
                  return t.isSome();
                },
                i = function(e) {
                  F(e, a);
                },
                a = function(e) {
                  t.each(function(t) {
                    setTimeout(function() {
                      e(t);
                    }, 0);
                  });
                };
              return (
                e(function(e) {
                  (t = _.some(e)), i(n), (n = []);
                }),
                {
                  get: r,
                  map: function(e) {
                    return qr(function(t) {
                      r(function(n) {
                        t(e(n));
                      });
                    });
                  },
                  isReady: o
                }
              );
            },
            $r = {
              nu: qr,
              pure: function(e) {
                return qr(function(t) {
                  t(e);
                });
              }
            },
            Wr = function(e) {
              var t = function(t) {
                  var n;
                  e(
                    ((n = t),
                    function() {
                      for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                      var r = this;
                      setTimeout(function() {
                        n.apply(r, e);
                      }, 0);
                    })
                  );
                },
                n = function() {
                  return $r.nu(t);
                };
              return {
                map: function(e) {
                  return Wr(function(n) {
                    t(function(t) {
                      var r = e(t);
                      n(r);
                    });
                  });
                },
                bind: function(e) {
                  return Wr(function(n) {
                    t(function(t) {
                      e(t).get(n);
                    });
                  });
                },
                anonBind: function(e) {
                  return Wr(function(n) {
                    t(function(t) {
                      e.get(n);
                    });
                  });
                },
                toLazy: n,
                toCached: function() {
                  var e = null;
                  return Wr(function(t) {
                    null === e && (e = n()), e.get(t);
                  });
                },
                get: t
              };
            },
            Kr = {
              nu: Wr,
              pure: function(e) {
                return Wr(function(t) {
                  t(e);
                });
              }
            },
            Xr = function(e, t) {
              return t(function(t) {
                var n = [],
                  r = 0;
                0 === e.length
                  ? t([])
                  : F(e, function(o, i) {
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
            Yr = function(e) {
              return Xr(e, Kr.nu);
            },
            Gr = function(e) {
              return {
                is: function(t) {
                  return e === t;
                },
                isValue: S,
                isError: x,
                getOr: i(e),
                getOrThunk: i(e),
                getOrDie: i(e),
                or: function(t) {
                  return Gr(e);
                },
                orThunk: function(t) {
                  return Gr(e);
                },
                fold: function(t, n) {
                  return n(e);
                },
                map: function(t) {
                  return Gr(t(e));
                },
                mapError: function(t) {
                  return Gr(e);
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
                  return _.some(e);
                }
              };
            },
            Jr = function(e) {
              return {
                is: x,
                isValue: x,
                isError: S,
                getOr: a,
                getOrThunk: function(e) {
                  return e();
                },
                getOrDie: function() {
                  return ((t = String(e)),
                  function() {
                    throw new Error(t);
                  })();
                  var t;
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
                  return Jr(e);
                },
                mapError: function(t) {
                  return Jr(t(e));
                },
                each: r,
                bind: function(t) {
                  return Jr(e);
                },
                exists: x,
                forall: S,
                toOption: _.none
              };
            },
            Qr = { value: Gr, error: Jr };
          function Zr(e, t) {
            var n = e,
              r = function(e, n, r, o) {
                var i, a;
                if (e) {
                  if (!o && e[n]) return e[n];
                  if (e !== t) {
                    if ((i = e[r])) return i;
                    for (a = e.parentNode; a && a !== t; a = a.parentNode)
                      if ((i = a[r])) return i;
                  }
                }
              };
            (this.current = function() {
              return n;
            }),
              (this.next = function(e) {
                return (n = r(n, "firstChild", "nextSibling", e));
              }),
              (this.prev = function(e) {
                return (n = r(n, "lastChild", "previousSibling", e));
              }),
              (this.prev2 = function(e) {
                return (n = (function(e, n, r, o) {
                  var i, a, u;
                  if (e) {
                    if (((i = e[r]), t && i === t)) return;
                    if (i) {
                      if (!o) for (u = i[n]; u; u = u[n]) if (!u[n]) return u;
                      return i;
                    }
                    if ((a = e.parentNode) && a !== t) return a;
                  }
                })(n, "lastChild", "previousSibling", e));
              });
          }
          var eo,
            to,
            no,
            ro = function(e) {
              var t;
              return function(n) {
                return (t =
                  t ||
                  (function(e, t) {
                    for (var n = {}, r = 0, o = e.length; r < o; r++) {
                      var i = e[r];
                      n[String(i)] = t(i, r);
                    }
                    return n;
                  })(e, i(!0))).hasOwnProperty(tr(n));
              };
            },
            oo = ro(["h1", "h2", "h3", "h4", "h5", "h6"]),
            io = ro([
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
            ao = function(e) {
              return rr(e) && !io(e);
            },
            uo = function(e) {
              return rr(e) && "br" === tr(e);
            },
            so = ro([
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
            lo = ro(["ul", "ol", "dl"]),
            co = ro(["li", "dd", "dt"]),
            fo = ro([
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
            ho = ro(["thead", "tbody", "tfoot"]),
            mo = ro(["td", "th"]),
            go = ro(["pre", "script", "textarea", "style"]),
            po = function(e) {
              return function(t) {
                return !!t && t.nodeType === e;
              };
            },
            vo = po(1),
            bo = function(e) {
              var t = e.toLowerCase().split(" ");
              return function(e) {
                var n, r;
                if (e && e.nodeType)
                  for (r = e.nodeName.toLowerCase(), n = 0; n < t.length; n++)
                    if (r === t[n]) return !0;
                return !1;
              };
            },
            yo = function(e) {
              return function(t) {
                if (vo(t)) {
                  if (t.contentEditable === e) return !0;
                  if (t.getAttribute("data-mce-contenteditable") === e)
                    return !0;
                }
                return !1;
              };
            },
            Co = po(3),
            wo = po(8),
            xo = po(9),
            So = po(11),
            Eo = bo("br"),
            No = yo("true"),
            zo = yo("false"),
            ko = {
              isText: Co,
              isElement: vo,
              isComment: wo,
              isDocument: xo,
              isDocumentFragment: So,
              isBr: Eo,
              isContentEditableTrue: No,
              isContentEditableFalse: zo,
              matchNodeNames: bo,
              hasPropValue: function(e, t) {
                return function(n) {
                  return vo(n) && n[e] === t;
                };
              },
              hasAttribute: function(e, t) {
                return function(t) {
                  return vo(t) && t.hasAttribute(e);
                };
              },
              hasAttributeValue: function(e, t) {
                return function(n) {
                  return vo(n) && n.getAttribute(e) === t;
                };
              },
              matchStyleValues: function(e, t) {
                var n = t.toLowerCase().split(" ");
                return function(t) {
                  var r;
                  if (vo(t))
                    for (r = 0; r < n.length; r++) {
                      var o = t.ownerDocument.defaultView.getComputedStyle(
                        t,
                        null
                      );
                      if ((o ? o.getPropertyValue(e) : null) === n[r])
                        return !0;
                    }
                  return !1;
                };
              },
              isBogus: function(e) {
                return vo(e) && e.hasAttribute("data-mce-bogus");
              },
              isBogusAll: function(e) {
                return vo(e) && "all" === e.getAttribute("data-mce-bogus");
              },
              isTable: function(e) {
                return vo(e) && "TABLE" === e.tagName;
              }
            },
            To = function(e) {
              return (
                e &&
                "SPAN" === e.tagName &&
                "bookmark" === e.getAttribute("data-mce-type")
              );
            },
            _o = function(e, t) {
              var n,
                r = t.childNodes;
              if (!ko.isElement(t) || !To(t)) {
                for (n = r.length - 1; n >= 0; n--) _o(e, r[n]);
                if (!1 === ko.isDocument(t)) {
                  if (ko.isText(t) && t.nodeValue.length > 0) {
                    var o = Yt.trim(t.nodeValue).length;
                    if (e.isBlock(t.parentNode) || o > 0) return;
                    if (
                      0 === o &&
                      (function(e) {
                        var t =
                            e.previousSibling &&
                            "SPAN" === e.previousSibling.nodeName,
                          n =
                            e.nextSibling && "SPAN" === e.nextSibling.nodeName;
                        return t && n;
                      })(t)
                    )
                      return;
                  } else if (
                    ko.isElement(t) &&
                    (1 === (r = t.childNodes).length &&
                      To(r[0]) &&
                      t.parentNode.insertBefore(r[0], t),
                    r.length || fo(Jn.fromDom(t)))
                  )
                    return;
                  e.remove(t);
                }
                return t;
              }
            },
            Ao = { trimNode: _o },
            Bo = Yt.makeMap,
            Ro = /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
            Mo = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
            Oo = /[<>&\"\']/g,
            Do = /&#([a-z0-9]+);?|&([a-z0-9]+);/gi,
            Po = {
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
          (to = {
            '"': "&quot;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            "`": "&#96;"
          }),
            (no = {
              "&lt;": "<",
              "&gt;": ">",
              "&amp;": "&",
              "&quot;": '"',
              "&apos;": "'"
            });
          var Ho = function(e, t) {
            var n,
              r,
              o,
              i = {};
            if (e) {
              for (e = e.split(","), t = t || 10, n = 0; n < e.length; n += 2)
                (r = String.fromCharCode(parseInt(e[n], t))),
                  to[r] || ((o = "&" + e[n + 1] + ";"), (i[r] = o), (i[o] = r));
              return i;
            }
          };
          eo = Ho(
            "50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",
            32
          );
          var Lo = function(e, t) {
              return e.replace(t ? Ro : Mo, function(e) {
                return to[e] || e;
              });
            },
            Io = function(e, t) {
              return e.replace(t ? Ro : Mo, function(e) {
                return e.length > 1
                  ? "&#" +
                      (1024 * (e.charCodeAt(0) - 55296) +
                        (e.charCodeAt(1) - 56320) +
                        65536) +
                      ";"
                  : to[e] || "&#" + e.charCodeAt(0) + ";";
              });
            },
            Vo = function(e, t, n) {
              return (
                (n = n || eo),
                e.replace(t ? Ro : Mo, function(e) {
                  return to[e] || n[e] || e;
                })
              );
            },
            Fo = {
              encodeRaw: Lo,
              encodeAllRaw: function(e) {
                return ("" + e).replace(Oo, function(e) {
                  return to[e] || e;
                });
              },
              encodeNumeric: Io,
              encodeNamed: Vo,
              getEncodeFunc: function(e, t) {
                var n = Ho(t) || eo,
                  r = Bo(e.replace(/\+/g, ","));
                return r.named && r.numeric
                  ? function(e, t) {
                      return e.replace(t ? Ro : Mo, function(e) {
                        return void 0 !== to[e]
                          ? to[e]
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
                        return Vo(e, t, n);
                      }
                    : Vo
                  : r.numeric
                  ? Io
                  : Lo;
              },
              decode: function(e) {
                return e.replace(Do, function(e, t) {
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
                      : Po[t] || String.fromCharCode(t)
                    : no[e] ||
                        eo[e] ||
                        ((n = e),
                        ((r = Jn.fromTag("div").dom()).innerHTML = n),
                        r.textContent || r.innerText || n);
                  var n, r;
                });
              }
            },
            Uo = {},
            jo = {},
            qo = Yt.makeMap,
            $o = Yt.each,
            Wo = Yt.extend,
            Ko = Yt.explode,
            Xo = Yt.inArray,
            Yo = function(e, t) {
              return (e = Yt.trim(e)) ? e.split(t || " ") : [];
            },
            Go = function(e) {
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
                      "string" == typeof (r = r || []) && (r = Yo(r)),
                      o = (e = Yo(e)).length;
                    o--;

                  )
                    (a = {
                      attributes: s((i = Yo([t, n].join(" ")))),
                      attributesOrder: i,
                      children: s(r, jo)
                    }),
                      (u[e[o]] = a);
                },
                l = function(e, t) {
                  var n, r, o, i;
                  for (n = (e = Yo(e)).length, t = Yo(t); n--; )
                    for (r = u[e[n]], o = 0, i = t.length; o < i; o++)
                      (r.attributes[t[o]] = {}), r.attributesOrder.push(t[o]);
                };
              return Uo[e]
                ? Uo[e]
                : ((t =
                    "id accesskey class dir lang style tabindex title role"),
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
                    $o(Yo(a), function(e) {
                      s(e, "", r);
                    }),
                    (n = [n, (i = "center dir isindex noframes")].join(" ")),
                    (o = [n, r].join(" ")),
                    $o(Yo(i), function(e) {
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
                    (l("script", "language xml:space"),
                    l("style", "xml:space"),
                    l(
                      "object",
                      "declare classid code codebase codetype archive standby align border hspace vspace"
                    ),
                    l("embed", "align name hspace vspace"),
                    l("param", "valuetype type"),
                    l("a", "charset name rev shape coords"),
                    l("br", "clear"),
                    l(
                      "applet",
                      "codebase archive code object alt name width height align hspace vspace"
                    ),
                    l("img", "name longdesc align border hspace vspace"),
                    l(
                      "iframe",
                      "longdesc frameborder marginwidth marginheight scrolling align"
                    ),
                    l("font basefont", "size color face"),
                    l("input", "usemap align"),
                    l("select", "onchange"),
                    l("textarea"),
                    l("h1 h2 h3 h4 h5 h6 div p legend caption", "align"),
                    l("ul", "type compact"),
                    l("li", "type"),
                    l("ol dl menu dir", "compact"),
                    l("pre", "width xml:space"),
                    l("hr", "align noshade size width"),
                    l("isindex", "prompt"),
                    l(
                      "table",
                      "summary width frame rules cellspacing cellpadding align bgcolor"
                    ),
                    l("col", "width align char charoff valign"),
                    l("colgroup", "width align char charoff valign"),
                    l("thead", "align char charoff valign"),
                    l("tr", "align char charoff valign bgcolor"),
                    l(
                      "th",
                      "axis align char charoff valign nowrap bgcolor width height"
                    ),
                    l("form", "accept"),
                    l(
                      "td",
                      "abbr axis scope align char charoff valign nowrap bgcolor width height"
                    ),
                    l("tfoot", "align char charoff valign"),
                    l("tbody", "align char charoff valign"),
                    l("area", "nohref"),
                    l("body", "background bgcolor text link vlink alink")),
                  "html4" !== e &&
                    (l("input button select textarea", "autofocus"),
                    l("input textarea", "placeholder"),
                    l("a", "download"),
                    l("link script img", "crossorigin"),
                    l("iframe", "sandbox seamless allowfullscreen")),
                  $o(Yo("a form meter progress dfn"), function(e) {
                    u[e] && delete u[e].children[e];
                  }),
                  delete u.caption.children.table,
                  delete u.script,
                  (Uo[e] = u),
                  u);
            },
            Jo = function(e, t) {
              var n;
              return (
                e &&
                  ((n = {}),
                  "string" == typeof e && (e = { "*": e }),
                  $o(e, function(e, r) {
                    n[r] = n[r.toUpperCase()] =
                      "map" === t ? qo(e, /[, ]/) : Ko(e, /[, ]/);
                  })),
                n
              );
            };
          function Qo(e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              u,
              s,
              l,
              c,
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
                    ? (o = qo(o, /[, ]/, qo(o.toUpperCase(), /[, ]/)))
                    : (o = Uo[t]) ||
                      ((o = qo(n, " ", qo(n.toUpperCase(), " "))),
                      (o = Wo(o, r)),
                      (Uo[t] = o)),
                  o
                );
              };
            (r = Go((e = e || {}).schema)),
              !1 === e.verify_html && (e.valid_elements = "*[*]"),
              (t = Jo(e.valid_styles)),
              (n = Jo(e.invalid_styles, "map")),
              (s = Jo(e.valid_classes, "map")),
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
              (c = y(
                "non_empty_elements",
                "td th iframe video audio object script pre code",
                a
              )),
              (f = y("move_caret_before_on_enter_elements", "table", c)),
              (d = y(
                "text_block_elements",
                "h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"
              )),
              (l = y(
                "block_elements",
                "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary",
                d
              )),
              (h = y(
                "text_inline_elements",
                "span strong b em i font strike u var cite dfn code mark q sup sub samp"
              )),
              $o(
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
                  l,
                  c,
                  f,
                  d,
                  h,
                  g,
                  v,
                  b,
                  y,
                  w,
                  x,
                  S = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)\])?$/,
                  E = /^([!\-])?(\w+[\\:]:\w+|[^=:<]+)?(?:([=:<])(.*))?$/,
                  N = /[*?+]/;
                if (e)
                  for (
                    e = Yo(e, ","),
                      m["@"] &&
                        ((b = m["@"].attributes), (y = m["@"].attributesOrder)),
                      t = 0,
                      n = e.length;
                    t < n;
                    t++
                  )
                    if ((i = S.exec(e[t]))) {
                      if (
                        ((g = i[1]),
                        (l = i[2]),
                        (v = i[3]),
                        (s = i[5]),
                        (a = {
                          attributes: (d = {}),
                          attributesOrder: (h = [])
                        }),
                        "#" === g && (a.paddEmpty = !0),
                        "-" === g && (a.removeEmpty = !0),
                        "!" === i[4] && (a.removeEmptyAttrs = !0),
                        b)
                      ) {
                        for (w in b) d[w] = b[w];
                        h.push.apply(h, y);
                      }
                      if (s)
                        for (r = 0, o = (s = Yo(s, "|")).length; r < o; r++)
                          if ((i = E.exec(s[r]))) {
                            if (
                              ((u = {}),
                              (f = i[1]),
                              (c = i[2].replace(/[\\:]:/g, ":")),
                              (g = i[3]),
                              (x = i[4]),
                              "!" === f &&
                                ((a.attributesRequired =
                                  a.attributesRequired || []),
                                a.attributesRequired.push(c),
                                (u.required = !0)),
                              "-" === f)
                            ) {
                              delete d[c], h.splice(Xo(h, c), 1);
                              continue;
                            }
                            g &&
                              ("=" === g &&
                                ((a.attributesDefault =
                                  a.attributesDefault || []),
                                a.attributesDefault.push({ name: c, value: x }),
                                (u.defaultValue = x)),
                              ":" === g &&
                                ((a.attributesForced =
                                  a.attributesForced || []),
                                a.attributesForced.push({ name: c, value: x }),
                                (u.forcedValue = x)),
                              "<" === g && (u.validValues = qo(x, "?"))),
                              N.test(c)
                                ? ((a.attributePatterns =
                                    a.attributePatterns || []),
                                  (u.pattern = C(c)),
                                  a.attributePatterns.push(u))
                                : (d[c] || h.push(c), (d[c] = u));
                          }
                      b || "@" !== l || ((b = d), (y = h)),
                        v && ((a.outputName = l), (m[v] = a)),
                        N.test(l)
                          ? ((a.pattern = C(l)), p.push(a))
                          : (m[l] = a);
                    }
              },
              x = function(e) {
                (m = {}),
                  (p = []),
                  w(e),
                  $o(r, function(e, t) {
                    g[t] = e.children;
                  });
              },
              S = function(e) {
                var t = /^(~)?(.+)$/;
                e &&
                  ((Uo.text_block_elements = Uo.block_elements = null),
                  $o(Yo(e, ","), function(e) {
                    var n = t.exec(e),
                      r = "~" === n[1],
                      o = r ? "span" : "div",
                      i = n[2];
                    if (
                      ((g[i] = g[o]),
                      (v[i] = o),
                      r || ((l[i.toUpperCase()] = {}), (l[i] = {})),
                      !m[i])
                    ) {
                      var a = m[o];
                      delete (a = Wo({}, a)).removeEmptyAttrs,
                        delete a.removeEmpty,
                        (m[i] = a);
                    }
                    $o(g, function(e, t) {
                      e[o] && ((g[t] = e = Wo({}, g[t])), (e[i] = e[o]));
                    });
                  }));
              },
              E = function(t) {
                var n = /^([+\-]?)(\w+)\[([^\]]+)\]$/;
                (Uo[e.schema] = null),
                  t &&
                    $o(Yo(t, ","), function(e) {
                      var t,
                        r,
                        o = n.exec(e);
                      o &&
                        ((r = o[1]),
                        (t = r ? g[o[2]] : (g[o[2]] = { "#comment": {} })),
                        (t = g[o[2]]),
                        $o(Yo(o[3], "|"), function(e) {
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
                : ($o(r, function(e, t) {
                    (m[t] = {
                      attributes: e.attributes,
                      attributesOrder: e.attributesOrder
                    }),
                      (g[t] = e.children);
                  }),
                  "html5" !== e.schema &&
                    $o(Yo("strong/b em/i"), function(e) {
                      (e = Yo(e, "/")), (m[e[1]].outputName = e[0]);
                    }),
                  $o(
                    Yo(
                      "ol ul sub sup blockquote span font a table tbody tr strong em b i"
                    ),
                    function(e) {
                      m[e] && (m[e].removeEmpty = !0);
                    }
                  ),
                  $o(
                    Yo("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"),
                    function(e) {
                      m[e].paddEmpty = !0;
                    }
                  ),
                  $o(Yo("span"), function(e) {
                    m[e].removeEmptyAttrs = !0;
                  })),
              S(e.custom_elements),
              E(e.valid_children),
              w(e.extended_valid_elements),
              E("+ol[ul|ol],+ul[ul|ol]"),
              $o(
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
                  m[t] && (m[t].parentsRequired = Yo(e));
                }
              ),
              e.invalid_elements &&
                $o(Ko(e.invalid_elements), function(e) {
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
                  return l;
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
                  return c;
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
                addCustomElements: S,
                addValidChildren: E
              }
            );
          }
          var Zo = function(e, t, n, r) {
            var o = function(e) {
              return (e = parseInt(e, 10).toString(16)).length > 1
                ? e
                : "0" + e;
            };
            return "#" + o(t) + o(n) + o(r);
          };
          function ei(e, t) {
            var n,
              r,
              o,
              i,
              a = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,
              u = /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,
              s = /\s*([^:]+):\s*([^;]+);?/g,
              l = /\s+$/,
              c = {};
            for (
              e = e || {},
                t && ((o = t.getValidStyles()), (i = t.getInvalidStyles())),
                r = "\\\" \\' \\; \\: ; : \ufeff".split(" "),
                n = 0;
              n < r.length;
              n++
            )
              (c[r[n]] = "\ufeff" + n), (c["\ufeff" + n] = r[n]);
            return {
              toHex: function(e) {
                return e.replace(a, Zo);
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
                    return (f = !0), c[e];
                  },
                  x = function(e, t) {
                    return (
                      f &&
                        (e = e.replace(/\uFEFF[0-9]/g, function(e) {
                          return c[e];
                        })),
                      t || (e = e.replace(/\\([\'\";:])/g, "$1")),
                      e
                    );
                  },
                  S = function(e) {
                    return String.fromCharCode(parseInt(e.slice(1), 16));
                  },
                  E = function(e) {
                    return e.replace(/\\[0-9a-f]+/gi, S);
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
                      (o = r[1].replace(l, "").toLowerCase()),
                      (i = r[2].replace(l, "")),
                      o && i)
                    ) {
                      if (
                        ((o = E(o)),
                        (i = E(i)),
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
                        (i = (i = i.replace(a, Zo)).replace(u, N)),
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
          }
          var ti = Yt.each,
            ni = Yt.grep,
            ri = fe.ie,
            oi = /^([a-z0-9],?)+$/i,
            ii = /^[ \t\r\n]*$/,
            ai = function(e, t, n) {
              var r = {},
                o = t.keep_values,
                i = {
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
                };
              return (
                (r = {
                  style: {
                    set: function(e, t) {
                      null === t || "object" != typeof t
                        ? (o && e.attr("data-mce-style", t), e.attr("style", t))
                        : e.css(t);
                    },
                    get: function(t) {
                      var n = t.attr("data-mce-style") || t.attr("style");
                      return (n = e.serialize(e.parse(n), t[0].nodeName));
                    }
                  }
                }),
                o && (r.href = r.src = i),
                r
              );
            },
            ui = function(e, t) {
              var n = t.attr("style"),
                r = e.serialize(e.parse(n), t[0].nodeName);
              r || (r = null), t.attr("data-mce-style", r);
            },
            si = function(e, t) {
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
          function li(e, t) {
            var r,
              u = this;
            void 0 === t && (t = {});
            var s = {},
              l = n.window,
              c = {},
              f = 0,
              d = (function(e, t) {
                void 0 === t && (t = {});
                var r,
                  u = 0,
                  s = {};
                r = t.maxLoadTime || 5e3;
                var l = function(t) {
                    e.getElementsByTagName("head")[0].appendChild(t);
                  },
                  c = function(o, i, a) {
                    var c,
                      f,
                      d,
                      h,
                      m = function(e) {
                        (h.status = e),
                          (h.passed = []),
                          (h.failed = []),
                          c &&
                            ((c.onload = null), (c.onerror = null), (c = null));
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
                          (new Date().getTime() - d < r
                            ? pe.setTimeout(t)
                            : p());
                      },
                      b = function() {
                        v(function() {
                          for (var t, n, r = e.styleSheets, o = r.length; o--; )
                            if (
                              (n = (t = r[o]).ownerNode
                                ? t.ownerNode
                                : t.owningElement) &&
                              n.id === c.id
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
                      ((o = Yt._addCacheSuffix(o)),
                      s[o]
                        ? (h = s[o])
                        : ((h = { passed: [], failed: [] }), (s[o] = h)),
                      i && h.passed.push(i),
                      a && h.failed.push(a),
                      1 !== h.status)
                    )
                      if (2 !== h.status)
                        if (3 !== h.status) {
                          if (
                            ((h.status = 1),
                            ((c = e.createElement("link")).rel = "stylesheet"),
                            (c.type = "text/css"),
                            (c.id = "u" + u++),
                            (c.async = !1),
                            (c.defer = !1),
                            (d = new Date().getTime()),
                            t.contentCssCors && (c.crossOrigin = "anonymous"),
                            "onload" in c &&
                              !(
                                (C = n.navigator.userAgent.match(
                                  /WebKit\/(\d*)/
                                )) && parseInt(C[1], 10) < 536
                              ))
                          )
                            (c.onload = b), (c.onerror = p);
                          else {
                            if (n.navigator.userAgent.indexOf("Firefox") > 0)
                              return (
                                ((f = e.createElement("style")).textContent =
                                  '@import "' + o + '"'),
                                y(),
                                void l(f)
                              );
                            b();
                          }
                          var C;
                          l(c), (c.href = o);
                        } else p();
                      else g();
                  },
                  f = function(e) {
                    return Kr.nu(function(t) {
                      c(e, o(t, i(Qr.value(e))), o(t, i(Qr.error(e))));
                    });
                  },
                  d = function(e) {
                    return e.fold(a, a);
                  };
                return {
                  load: c,
                  loadAll: function(e, t, n) {
                    Yr(V(e, f)).get(function(e) {
                      var r = U(e, function(e) {
                        return e.isValue();
                      });
                      r.fail.length > 0 ? n(r.fail.map(d)) : t(r.pass.map(d));
                    });
                  }
                };
              })(e, { contentCssCors: t.contentCssCors }),
              h = [],
              m = t.schema ? t.schema : Qo({}),
              g = ei(
                {
                  url_converter: t.url_converter,
                  url_converter_scope: t.url_converter_scope
                },
                t.schema
              ),
              p = t.ownEvents ? new Ne(t.proxy) : Ne.Event,
              v = m.getBlockElements(),
              b = gn.overrideDefaults(function() {
                return { context: e, element: K.getRoot() };
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
                var o,
                  i,
                  a = C(e);
                return (
                  a.length &&
                    (i = (o = r[t]) && o.get ? o.get(a, t) : a.attr(t)),
                  void 0 === i && (i = n || ""),
                  i
                );
              },
              x = function(e) {
                var t = y(e);
                return t ? t.attributes : [];
              },
              S = function(e, n, o) {
                var i, a;
                "" === o && (o = null);
                var u = C(e);
                (i = u.attr(n)),
                  u.length &&
                    ((a = r[n]) && a.set ? a.set(u, o, n) : u.attr(n, o),
                    i !== o &&
                      t.onSetAttrib &&
                      t.onSetAttrib({ attrElm: u, attrName: n, attrValue: o }));
              },
              E = function() {
                return t.root_element || e.body;
              },
              N = function(t, n) {
                return jr.getPos(e.body, y(t), n);
              },
              z = function(e, t, n) {
                var r = C(e);
                return n
                  ? r.css(t)
                  : ("float" ===
                      (t = t.replace(/-(\D)/g, function(e, t) {
                        return t.toUpperCase();
                      })) &&
                      (t = fe.ie && fe.ie < 12 ? "styleFloat" : "cssFloat"),
                    r[0] && r[0].style ? r[0].style[t] : void 0);
              },
              k = function(e) {
                var t, n;
                return (
                  (e = y(e)),
                  (t = z(e, "width")),
                  (n = z(e, "height")),
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
                  if (oi.test(t)) {
                    var r = t.toLowerCase().split(/,/),
                      o = e.nodeName.toLowerCase();
                    for (n = r.length - 1; n >= 0; n--)
                      if (r[n] === o) return !0;
                    return !1;
                  }
                  if (e.nodeType && 1 !== e.nodeType) return !1;
                }
                var i = Array.isArray(e) ? e : [e];
                return zt(t, i[0].ownerDocument || i[0], null, i).length > 0;
              },
              _ = function(e, t, n, r) {
                var o,
                  i = [],
                  a = y(e);
                for (
                  r = void 0 === r,
                    n = n || ("BODY" !== E().nodeName ? E().parentNode : null),
                    Yt.is(t, "string") &&
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
              A = function(e, t, n) {
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
              B = function(e, t, n) {
                var r,
                  o = "string" == typeof e ? y(e) : e;
                if (!o) return !1;
                if (Yt.isArray(o) && (o.length || 0 === o.length))
                  return (
                    (r = []),
                    ti(o, function(e, o) {
                      e &&
                        ("string" == typeof e && (e = y(e)),
                        r.push(t.call(n, e, o)));
                    }),
                    r
                  );
                var i = n || u;
                return t.call(i, o);
              },
              R = function(e, t) {
                C(e).each(function(e, n) {
                  ti(t, function(e, t) {
                    S(n, t, e);
                  });
                });
              },
              M = function(e, t) {
                var n = C(e);
                ri
                  ? n.each(function(e, n) {
                      if (!1 !== n.canHaveHTML) {
                        for (; n.firstChild; ) n.removeChild(n.firstChild);
                        try {
                          (n.innerHTML = "<br>" + t),
                            n.removeChild(n.firstChild);
                        } catch (e) {
                          gn("<div></div>")
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
              O = function(t, n, r, o, i) {
                return B(t, function(t) {
                  var a = "string" == typeof n ? e.createElement(n) : n;
                  return (
                    R(a, r),
                    o &&
                      ("string" != typeof o && o.nodeType
                        ? a.appendChild(o)
                        : "string" == typeof o && M(a, o)),
                    i ? a : t.appendChild(a)
                  );
                });
              },
              D = function(t, n, r) {
                return O(e.createElement(t), t, n, r, !0);
              },
              P = Fo.decode,
              H = Fo.encodeAllRaw,
              L = function(e, t) {
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
                    "" === this.className && gn(this).attr("class", null);
                  });
              },
              F = function(e, t, n) {
                return B(t, function(t) {
                  return (
                    Yt.is(t, "array") && (e = e.cloneNode(!0)),
                    n &&
                      ti(ni(t.childNodes), function(t) {
                        e.appendChild(t);
                      }),
                    t.parentNode.replaceChild(e, t)
                  );
                });
              },
              j = function() {
                return e.createRange();
              },
              q = function(n, r, o, i) {
                if (Yt.isArray(n)) {
                  for (var a = n.length; a--; ) n[a] = q(n[a], r, o, i);
                  return n;
                }
                return (
                  !t.collect || (n !== e && n !== l) || h.push([n, r, o, i]),
                  p.bind(n, r, o, i || K)
                );
              },
              $ = function(t, n, r) {
                var o;
                if (Yt.isArray(t)) {
                  for (o = t.length; o--; ) t[o] = $(t[o], n, r);
                  return t;
                }
                if (h && (t === e || t === l))
                  for (o = h.length; o--; ) {
                    var i = h[o];
                    t !== i[0] ||
                      (n && n !== i[1]) ||
                      (r && r !== i[2]) ||
                      p.unbind(i[0], i[1], i[2]);
                  }
                return p.unbind(t, n, r);
              },
              W = function(e) {
                if (e && ko.isElement(e)) {
                  var t = e.getAttribute("data-mce-contenteditable");
                  return t && "inherit" !== t
                    ? t
                    : "inherit" !== e.contentEditable
                    ? e.contentEditable
                    : null;
                }
                return null;
              },
              K = {
                doc: e,
                settings: t,
                win: l,
                files: c,
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
                  if (!ri || 1 !== t.nodeType || n) return t.cloneNode(n);
                  if (!n) {
                    var r = e.createElement(t.nodeName);
                    return (
                      ti(x(t), function(e) {
                        S(r, e.nodeName, w(t, e.nodeName));
                      }),
                      r
                    );
                  }
                  return null;
                },
                getRoot: E,
                getViewPort: function(e) {
                  var t = e || l,
                    n = t.document,
                    r = n.documentElement;
                  return {
                    x: t.pageXOffset || r.scrollLeft,
                    y: t.pageYOffset || r.scrollTop,
                    w: t.innerWidth || r.clientWidth,
                    h: t.innerHeight || r.clientHeight
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
                  var r = _(e, t, n, !1);
                  return r && r.length > 0 ? r[0] : null;
                },
                getParents: _,
                get: y,
                getNext: function(e, t) {
                  return A(e, t, "nextSibling");
                },
                getPrev: function(e, t) {
                  return A(e, t, "previousSibling");
                },
                select: function(n, r) {
                  return zt(n, y(r) || t.root_element || e, []);
                },
                is: T,
                add: O,
                create: D,
                createHTML: function(e, t, n) {
                  var r,
                    o = "";
                  for (r in ((o += "<" + e), t))
                    t.hasOwnProperty(r) &&
                      null !== t[r] &&
                      void 0 !== t[r] &&
                      (o += " " + r + '="' + H(t[r]) + '"');
                  return void 0 !== n
                    ? o + ">" + n + "</" + e + ">"
                    : o + " />";
                },
                createFragment: function(t) {
                  var n,
                    r = e.createElement("div"),
                    o = e.createDocumentFragment();
                  for (t && (r.innerHTML = t); (n = r.firstChild); )
                    o.appendChild(n);
                  return o;
                },
                remove: L,
                setStyle: function(e, n, r) {
                  var o = C(e).css(n, r);
                  t.update_styles && ui(g, o);
                },
                getStyle: z,
                setStyles: function(e, n) {
                  var r = C(e).css(n);
                  t.update_styles && ui(g, r);
                },
                removeAllAttribs: function(e) {
                  return B(e, function(e) {
                    var t,
                      n = e.attributes;
                    for (t = n.length - 1; t >= 0; t--)
                      e.removeAttributeNode(n.item(t));
                  });
                },
                setAttrib: S,
                setAttribs: R,
                getAttrib: w,
                getPos: N,
                parseStyle: function(e) {
                  return g.parse(e);
                },
                serializeStyle: function(e, t) {
                  return g.serialize(e, t);
                },
                addStyle: function(t) {
                  var r, o;
                  if (K !== li.DOM && e === n.document) {
                    if (s[t]) return;
                    s[t] = !0;
                  }
                  (o = e.getElementById("mceDefaultStyles")) ||
                    (((o = e.createElement("style")).id = "mceDefaultStyles"),
                    (o.type = "text/css"),
                    (r = e.getElementsByTagName("head")[0]).firstChild
                      ? r.insertBefore(o, r.firstChild)
                      : r.appendChild(o)),
                    o.styleSheet
                      ? (o.styleSheet.cssText += t)
                      : o.appendChild(e.createTextNode(t));
                },
                loadCSS: function(t) {
                  var r;
                  K === li.DOM || e !== n.document
                    ? (t || (t = ""),
                      (r = e.getElementsByTagName("head")[0]),
                      ti(t.split(","), function(e) {
                        var t;
                        (e = Yt._addCacheSuffix(e)),
                          c[e] ||
                            ((c[e] = !0),
                            (t = D("link", { rel: "stylesheet", href: e })),
                            r.appendChild(t));
                      }))
                    : li.DOM.loadCSS(t);
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
                setHTML: M,
                getOuterHTML: function(e) {
                  var t = "string" == typeof e ? y(e) : e;
                  return ko.isElement(t)
                    ? t.outerHTML
                    : gn("<div></div>")
                        .append(gn(t).clone())
                        .html();
                },
                setOuterHTML: function(e, t) {
                  C(e).each(function() {
                    try {
                      if ("outerHTML" in this) return void (this.outerHTML = t);
                    } catch (e) {}
                    L(gn(this).html(t), !0);
                  });
                },
                decode: P,
                encode: H,
                insertAfter: function(e, t) {
                  var n = y(t);
                  return B(e, function(e) {
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
                      ((n = D(t)),
                      ti(x(e), function(t) {
                        S(n, t.nodeName, w(e, t.nodeName));
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
                  return g.toHex(Yt.trim(e));
                },
                run: B,
                getAttribs: x,
                isEmpty: function(e, t) {
                  var n,
                    r,
                    o,
                    i,
                    a,
                    u,
                    s = 0;
                  if ((e = e.firstChild)) {
                    (a = new Zr(e, e.parentNode)),
                      (t = t || (m ? m.getNonEmptyElements() : null)),
                      (i = m ? m.getWhiteSpaceElements() : {});
                    do {
                      if (((o = e.nodeType), ko.isElement(e))) {
                        var l = e.getAttribute("data-mce-bogus");
                        if (l) {
                          e = a.next("all" === l);
                          continue;
                        }
                        if (((u = e.nodeName.toLowerCase()), t && t[u])) {
                          if ("br" === u) {
                            s++, (e = a.next());
                            continue;
                          }
                          return !1;
                        }
                        for (n = (r = x(e)).length; n--; )
                          if (
                            "name" === (u = r[n].nodeName) ||
                            "data-mce-bookmark" === u
                          )
                            return !1;
                      }
                      if (8 === o) return !1;
                      if (3 === o && !ii.test(e.nodeValue)) return !1;
                      if (
                        3 === o &&
                        e.parentNode &&
                        i[e.parentNode.nodeName] &&
                        ii.test(e.nodeValue)
                      )
                        return !1;
                      e = a.next();
                    } while (e);
                  }
                  return s <= 1;
                },
                createRng: j,
                nodeIndex: si,
                split: function(e, t, n) {
                  var r,
                    o,
                    i,
                    a = j();
                  if (e && t)
                    return (
                      a.setStart(e.parentNode, si(e)),
                      a.setEnd(t.parentNode, si(t)),
                      (r = a.extractContents()),
                      (a = j()).setStart(t.parentNode, si(t) + 1),
                      a.setEnd(e.parentNode, si(e) + 1),
                      (o = a.extractContents()),
                      (i = e.parentNode).insertBefore(Ao.trimNode(K, r), e),
                      n ? i.insertBefore(n, e) : i.insertBefore(t, e),
                      i.insertBefore(Ao.trimNode(K, o), e),
                      L(e),
                      n || t
                    );
                },
                bind: q,
                unbind: $,
                fire: function(e, t, n) {
                  return p.fire(e, t, n);
                },
                getContentEditable: W,
                getContentEditableParent: function(e) {
                  for (
                    var t = E(), n = null;
                    e && e !== t && null === (n = W(e));
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
                  zt.setDocument && zt.setDocument();
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
              (r = ai(g, t, function() {
                return K;
              })),
              K
            );
          }
          !(function(e) {
            (e.DOM = e(n.document)), (e.nodeIndex = si);
          })(li || (li = {}));
          var ci = li,
            fi = ci.DOM,
            di = Yt.each,
            hi = Yt.grep,
            mi = function(e) {
              return "function" == typeof e;
            },
            gi = function() {
              var e = {},
                t = [],
                r = {},
                o = [],
                i = 0,
                a = function(e, t, r) {
                  var o,
                    i,
                    a = fi;
                  (i = a.uniqueId()),
                    ((o = n.document.createElement("script")).id = i),
                    (o.type = "text/javascript"),
                    (o.src = Yt._addCacheSuffix(e)),
                    (o.onload = function() {
                      a.remove(i),
                        o && (o.onreadystatechange = o.onload = o = null),
                        t();
                    }),
                    (o.onerror = function() {
                      mi(r)
                        ? r()
                        : "undefined" != typeof console &&
                          console.log &&
                          console.log("Failed to load script: " + e);
                    }),
                    (
                      n.document.getElementsByTagName("head")[0] ||
                      n.document.body
                    ).appendChild(o);
                };
              (this.loadScript = function(e, t, n) {
                a(e, t, n);
              }),
                (this.isDone = function(t) {
                  return 2 === e[t];
                }),
                (this.markDone = function(t) {
                  e[t] = 2;
                }),
                (this.add = this.load = function(n, o, i, a) {
                  void 0 === e[n] && (t.push(n), (e[n] = 0)),
                    o &&
                      (r[n] || (r[n] = []),
                      r[n].push({ success: o, failure: a, scope: i || this }));
                }),
                (this.remove = function(t) {
                  delete e[t], delete r[t];
                }),
                (this.loadQueue = function(e, n, r) {
                  this.loadScripts(t, e, n, r);
                }),
                (this.loadScripts = function(t, n, u, s) {
                  var l,
                    c = [],
                    f = function(e, t) {
                      di(r[t], function(t) {
                        mi(t[e]) && t[e].call(t.scope);
                      }),
                        (r[t] = void 0);
                    };
                  o.push({ success: n, failure: s, scope: u || this }),
                    (l = function() {
                      var n = hi(t);
                      if (
                        ((t.length = 0),
                        di(n, function(t) {
                          2 !== e[t]
                            ? 3 !== e[t]
                              ? 1 !== e[t] &&
                                ((e[t] = 1),
                                i++,
                                a(
                                  t,
                                  function() {
                                    (e[t] = 2), i--, f("success", t), l();
                                  },
                                  function() {
                                    (e[t] = 3),
                                      i--,
                                      c.push(t),
                                      f("failure", t),
                                      l();
                                  }
                                ))
                              : f("failure", t)
                            : f("success", t);
                        }),
                        !i)
                      ) {
                        var r = o.slice(0);
                        (o.length = 0),
                          di(r, function(e) {
                            0 === c.length
                              ? mi(e.success) && e.success.call(e.scope)
                              : mi(e.failure) && e.failure.call(e.scope, c);
                          });
                      }
                    })();
                });
            };
          gi.ScriptLoader = new gi();
          var pi = function(e) {
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
                  return pi(n());
                }
              };
            },
            vi = {},
            bi = pi("en"),
            yi = {
              setCode: function(e) {
                e && bi.set(e);
              },
              getCode: function() {
                return bi.get();
              },
              add: function(e, t) {
                var n = vi[e];
                for (var r in (n || (vi[e] = n = {}), t))
                  n[r.toLowerCase()] = t[r];
              },
              translate: function(e) {
                var t,
                  n = vi[bi.get()] || {},
                  r = function(e) {
                    return P(e)
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
                    return fr(n, o) ? r(n[o]) : t;
                  },
                  a = function(e) {
                    return e.replace(/{context:\w+}$/, "");
                  },
                  u = function(e) {
                    return e;
                  };
                if (o(e)) return u("");
                if (R((t = e)) && fr(t, "raw")) return u(r(e.raw));
                if (
                  (function(e) {
                    return M(e) && e.length > 1;
                  })(e)
                ) {
                  var s = e.slice(1);
                  return u(
                    a(
                      i(e[0]).replace(/\{([0-9]+)\}/g, function(e, t) {
                        return fr(s, t) ? r(s[t]) : e;
                      })
                    )
                  );
                }
                return u(a(i(e)));
              },
              isRtl: function() {
                return cr(vi, bi.get())
                  .bind(function(e) {
                    return cr(e, "_dir");
                  })
                  .exists(function(e) {
                    return "rtl" === e;
                  });
              },
              hasCode: function(e) {
                return fr(vi, e);
              }
            },
            Ci = Yt.each;
          function wi() {
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
                Ci(o, function(e) {
                  var n = a(t, e);
                  s(n.resource, n, void 0, void 0);
                }),
                  n && (r ? n.call(r) : n.call(gi));
              },
              s = function(e, t, o, i, a) {
                if (!n[e]) {
                  var s =
                    "string" == typeof t ? t : t.prefix + t.resource + t.suffix;
                  0 !== s.indexOf("/") &&
                    -1 === s.indexOf("://") &&
                    (s = wi.baseURL + "/" + s),
                    (n[e] = s.substring(0, s.lastIndexOf("/"))),
                    r[e]
                      ? u(e, t, o, i)
                      : gi.ScriptLoader.add(
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
                var r = yi.getCode();
                if (r && !1 !== wi.languageLoad) {
                  if (t)
                    if (
                      -1 !==
                      (t = "," + t + ",").indexOf("," + r.substr(0, 2) + ",")
                    )
                      r = r.substr(0, 2);
                    else if (-1 === t.indexOf("," + r + ",")) return;
                  gi.ScriptLoader.add(n[e] + "/langs/" + r + ".js");
                }
              },
              add: function(e, n, i) {
                t.push(n), (r[e] = { instance: n, dependencies: i });
                var a = U(o, function(t) {
                  return t.name === e;
                });
                return (
                  (o = a.fail),
                  Ci(a.pass, function(e) {
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
                Ci(n, function(e) {
                  gi.ScriptLoader.add(r + "/" + e);
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
          })(wi || (wi = {}));
          var xi = function(e, t) {
              Rr(e).each(function(n) {
                n.dom().insertBefore(t.dom(), e.dom());
              });
            },
            Si = function(e, t) {
              Or(e).fold(
                function() {
                  Rr(e).each(function(e) {
                    Ni(e, t);
                  });
                },
                function(e) {
                  xi(e, t);
                }
              );
            },
            Ei = function(e, t) {
              Ir(e).fold(
                function() {
                  Ni(e, t);
                },
                function(n) {
                  e.dom().insertBefore(t.dom(), n.dom());
                }
              );
            },
            Ni = function(e, t) {
              e.dom().appendChild(t.dom());
            },
            zi = function(e, t) {
              F(t, function(t) {
                Ni(e, t);
              });
            },
            ki = function(e) {
              (e.dom().textContent = ""),
                F(Hr(e), function(e) {
                  Ti(e);
                });
            },
            Ti = function(e) {
              var t = e.dom();
              null !== t.parentNode && t.parentNode.removeChild(t);
            },
            _i = function(e) {
              var t,
                n = Hr(e);
              n.length > 0 &&
                ((t = e),
                F(n, function(e) {
                  xi(t, e);
                })),
                Ti(e);
            },
            Ai = function(e, t) {
              var n = null;
              return {
                cancel: function() {
                  null !== n && (clearTimeout(n), (n = null));
                },
                throttle: function() {
                  for (var r = [], o = 0; o < arguments.length; o++)
                    r[o] = arguments[o];
                  null === n &&
                    (n = setTimeout(function() {
                      e.apply(null, r), (n = null);
                    }, t));
                }
              };
            },
            Bi = function(e, t) {
              var n = gr(e, t);
              return void 0 === n || "" === n ? [] : n.split(" ");
            },
            Ri = function(e) {
              return void 0 !== e.dom().classList;
            },
            Mi = function(e, t) {
              return (function(e, t, n) {
                var r = Bi(e, t).concat([n]);
                return hr(e, t, r.join(" ")), !0;
              })(e, "class", t);
            },
            Oi = function(e, t) {
              return (function(e, t, n) {
                var r = j(Bi(e, t), function(e) {
                  return e !== n;
                });
                return r.length > 0 ? hr(e, t, r.join(" ")) : pr(e, t), !1;
              })(e, "class", t);
            },
            Di = function(e, t) {
              Ri(e) ? e.dom().classList.add(t) : Mi(e, t);
            },
            Pi = function(e) {
              0 ===
                (Ri(e)
                  ? e.dom().classList
                  : (function(e) {
                      return Bi(e, "class");
                    })(e)
                ).length && pr(e, "class");
            },
            Hi = function(e, t) {
              return Ri(e) && e.dom().classList.contains(t);
            },
            Li = function(e, t) {
              var n = [];
              return (
                F(Hr(e), function(e) {
                  t(e) && (n = n.concat([e])), (n = n.concat(Li(e, t)));
                }),
                n
              );
            },
            Ii = function(e, t) {
              return (function(e, t) {
                var r = void 0 === t ? n.document : t.dom();
                return Tr(r) ? [] : V(r.querySelectorAll(e), Jn.fromDom);
              })(t, e);
            };
          function Vi(e, t, n, r, o) {
            return e(n, r) ? _.some(n) : P(o) && o(n) ? _.none() : t(n, r, o);
          }
          var Fi = function(e, t, n) {
              for (var r = e.dom(), o = P(n) ? n : i(!1); r.parentNode; ) {
                r = r.parentNode;
                var a = Jn.fromDom(r);
                if (t(a)) return _.some(a);
                if (o(a)) break;
              }
              return _.none();
            },
            Ui = function(e, t, n) {
              return Vi(
                function(e) {
                  return t(e);
                },
                Fi,
                e,
                t,
                n
              );
            },
            ji = function(e, t, n) {
              return Fi(
                e,
                function(e) {
                  return kr(e, t);
                },
                n
              );
            },
            qi = function(e, t) {
              return (function(e, t) {
                var r = void 0 === t ? n.document : t.dom();
                return Tr(r)
                  ? _.none()
                  : _.from(r.querySelector(e)).map(Jn.fromDom);
              })(t, e);
            },
            $i = function(e, t, n) {
              return Vi(kr, ji, e, t, n);
            },
            Wi = i("mce-annotation"),
            Ki = i("data-mce-annotation"),
            Xi = i("data-mce-annotation-uid"),
            Yi = function(e, t) {
              var n = e.selection.getRng(),
                r = Jn.fromDom(n.startContainer),
                o = Jn.fromDom(e.getBody()),
                i = t.fold(
                  function() {
                    return "." + Wi();
                  },
                  function(e) {
                    return "[" + Ki() + '="' + e + '"]';
                  }
                ),
                a = Lr(r, n.startOffset).getOr(r),
                u = $i(a, i, function(e) {
                  return _r(e, o);
                }),
                s = function(e, t) {
                  return (
                    (n = t),
                    (r = e.dom()) && r.hasAttribute && r.hasAttribute(n)
                      ? _.some(gr(e, t))
                      : _.none()
                  );
                  var n, r;
                };
              return u.bind(function(t) {
                return s(t, "" + Xi()).bind(function(n) {
                  return s(t, "" + Ki()).map(function(t) {
                    var r = Gi(e, n);
                    return { uid: n, name: t, elements: r };
                  });
                });
              });
            },
            Gi = function(e, t) {
              var n = Jn.fromDom(e.getBody());
              return Ii(n, "[" + Xi() + '="' + t + '"]');
            },
            Ji = function(e, t) {
              var n = Jn.fromDom(e.getBody()),
                r = Ii(n, "[" + Ki() + '="' + t + '"]'),
                o = {};
              return (
                F(r, function(e) {
                  var t = gr(e, Xi()),
                    n = o.hasOwnProperty(t) ? o[t] : [];
                  o[t] = n.concat([e]);
                }),
                o
              );
            },
            Qi = function(e, t) {
              var n,
                r,
                o,
                i = pi({}),
                a = function(e, t) {
                  u(e, function(e) {
                    return t(e), e;
                  });
                },
                u = function(e, t) {
                  var n = i.get(),
                    r = t(
                      n.hasOwnProperty(e)
                        ? n[e]
                        : { listeners: [], previous: pi(_.none()) }
                    );
                  (n[e] = r), i.set(n);
                },
                s = ((n = function() {
                  var t,
                    n,
                    r,
                    o = i.get(),
                    s = ((t = ir(o)), (r = J.call(t, 0)).sort(n), r);
                  F(s, function(t) {
                    u(t, function(n) {
                      var r = n.previous.get();
                      return (
                        Yi(e, _.some(t)).fold(
                          function() {
                            r.isSome() &&
                              ((function(e) {
                                a(e, function(t) {
                                  F(t.listeners, function(t) {
                                    return t(!1, e);
                                  });
                                });
                              })(t),
                              n.previous.set(_.none()));
                          },
                          function(e) {
                            var t = e.uid,
                              o = e.name,
                              i = e.elements;
                            r.is(t) ||
                              ((function(e, t, n) {
                                a(e, function(r) {
                                  F(r.listeners, function(r) {
                                    return r(!0, e, {
                                      uid: t,
                                      nodes: V(n, function(e) {
                                        return e.dom();
                                      })
                                    });
                                  });
                                });
                              })(o, t, i),
                              n.previous.set(_.some(t)));
                          }
                        ),
                        { previous: n.previous, listeners: n.listeners }
                      );
                    });
                  });
                }),
                (r = 30),
                (o = null),
                {
                  cancel: function() {
                    null !== o && (clearTimeout(o), (o = null));
                  },
                  throttle: function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                      e[t] = arguments[t];
                    null !== o && clearTimeout(o),
                      (o = setTimeout(function() {
                        n.apply(null, e), (o = null);
                      }, r));
                  }
                });
              return (
                e.on("remove", function() {
                  s.cancel();
                }),
                e.on("nodeChange", function() {
                  s.throttle();
                }),
                {
                  addListener: function(e, t) {
                    u(e, function(e) {
                      return {
                        previous: e.previous,
                        listeners: e.listeners.concat([t])
                      };
                    });
                  }
                }
              );
            },
            Zi = function(e, t) {
              e.on("init", function() {
                e.serializer.addNodeFilter("span", function(e) {
                  F(e, function(e) {
                    (function(e) {
                      return _.from(e.attributes.map[Ki()]).bind(t.lookup);
                    })(e).each(function(t) {
                      !1 === t.persistent && e.unwrap();
                    });
                  });
                });
              });
            },
            ea = function() {
              var e = {};
              return {
                register: function(t, n) {
                  e[t] = { name: t, settings: n };
                },
                lookup: function(t) {
                  return e.hasOwnProperty(t)
                    ? _.from(e[t]).map(function(e) {
                        return e.settings;
                      })
                    : _.none();
                }
              };
            },
            ta = function() {
              return (ta =
                Object.assign ||
                function(e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, o) &&
                        (e[o] = t[o]);
                  return e;
                }).apply(this, arguments);
            },
            na = 0,
            ra = function(e, t) {
              return Jn.fromDom(e.dom().cloneNode(t));
            },
            oa = function(e) {
              return ra(e, !1);
            },
            ia = function(e) {
              return ra(e, !0);
            },
            aa = function(e, t) {
              var r,
                o,
                i = Br(e).dom(),
                a = Jn.fromDom(i.createDocumentFragment()),
                u = ((r = t),
                ((o = (i || n.document).createElement("div")).innerHTML = r),
                Hr(Jn.fromDom(o)));
              zi(a, u), ki(e), Ni(e, a);
            },
            ua = function(e) {
              return "\ufeff" === e;
            },
            sa = "\ufeff",
            la = function(e) {
              return e.replace(new RegExp("\ufeff", "g"), "");
            },
            ca = ko.isElement,
            fa = ko.isText,
            da = function(e) {
              return (
                fa(e) && (e = e.parentNode),
                ca(e) && e.hasAttribute("data-mce-caret")
              );
            },
            ha = function(e) {
              return fa(e) && ua(e.data);
            },
            ma = function(e) {
              return da(e) || ha(e);
            },
            ga = function(e) {
              return e.firstChild !== e.lastChild || !ko.isBr(e.firstChild);
            },
            pa = function(e) {
              var t = e.container();
              return (
                !(!e || !ko.isText(t)) &&
                (t.data.charAt(e.offset()) === sa ||
                  (e.isAtStart() && ha(t.previousSibling)))
              );
            },
            va = function(e) {
              var t = e.container();
              return (
                !(!e || !ko.isText(t)) &&
                (t.data.charAt(e.offset() - 1) === sa ||
                  (e.isAtEnd() && ha(t.nextSibling)))
              );
            },
            ba = function(e, t, r) {
              var o, i, a;
              return (
                (o = t.ownerDocument.createElement(e)).setAttribute(
                  "data-mce-caret",
                  r ? "before" : "after"
                ),
                o.setAttribute("data-mce-bogus", "all"),
                o.appendChild(
                  ((a = n.document.createElement("br")).setAttribute(
                    "data-mce-bogus",
                    "1"
                  ),
                  a)
                ),
                (i = t.parentNode),
                r
                  ? i.insertBefore(o, t)
                  : t.nextSibling
                  ? i.insertBefore(o, t.nextSibling)
                  : i.appendChild(o),
                o
              );
            },
            ya = function(e) {
              return fa(e) && e.data[0] === sa;
            },
            Ca = function(e) {
              return fa(e) && e.data[e.data.length - 1] === sa;
            },
            wa = function(e) {
              return e && e.hasAttribute("data-mce-caret")
                ? ((t = e.getElementsByTagName("br")),
                  (n = t[t.length - 1]),
                  ko.isBogus(n) && n.parentNode.removeChild(n),
                  e.removeAttribute("data-mce-caret"),
                  e.removeAttribute("data-mce-bogus"),
                  e.removeAttribute("style"),
                  e.removeAttribute("_moz_abspos"),
                  e)
                : null;
              var t, n;
            },
            xa = ko.isContentEditableTrue,
            Sa = ko.isContentEditableFalse,
            Ea = ko.isBr,
            Na = ko.isText,
            za = ko.matchNodeNames("script style textarea"),
            ka = ko.matchNodeNames(
              "img input textarea hr iframe video audio object"
            ),
            Ta = ko.matchNodeNames("table"),
            _a = ma,
            Aa = function(e) {
              return (
                !_a(e) &&
                (Na(e) ? !za(e.parentNode) : ka(e) || Ea(e) || Ta(e) || Ba(e))
              );
            },
            Ba = function(e) {
              return (
                !1 ===
                  (function(e) {
                    return (
                      ko.isElement(e) &&
                      "true" === e.getAttribute("unselectable")
                    );
                  })(e) && Sa(e)
              );
            },
            Ra = function(e, t) {
              return (
                Aa(e) &&
                (function(e, t) {
                  for (e = e.parentNode; e && e !== t; e = e.parentNode) {
                    if (Ba(e)) return !1;
                    if (xa(e)) return !0;
                  }
                  return !0;
                })(e, t)
              );
            },
            Ma = Math.round,
            Oa = function(e) {
              return e
                ? {
                    left: Ma(e.left),
                    top: Ma(e.top),
                    bottom: Ma(e.bottom),
                    right: Ma(e.right),
                    width: Ma(e.width),
                    height: Ma(e.height)
                  }
                : { left: 0, top: 0, bottom: 0, right: 0, width: 0, height: 0 };
            },
            Da = function(e, t) {
              return (
                (e = Oa(e)),
                t
                  ? (e.right = e.left)
                  : ((e.left = e.left + e.width), (e.right = e.left)),
                (e.width = 0),
                e
              );
            },
            Pa = function(e, t, n) {
              return e >= 0 && e <= Math.min(t.height, n.height) / 2;
            },
            Ha = function(e, t) {
              return (
                e.bottom - e.height / 2 < t.top ||
                (!(e.top > t.bottom) && Pa(t.top - e.bottom, e, t))
              );
            },
            La = function(e, t) {
              return (
                e.top > t.bottom ||
                (!(e.bottom < t.top) && Pa(t.bottom - e.top, e, t))
              );
            },
            Ia = function(e, t) {
              return t.left > e.left && t.right < e.right
                ? 0
                : t.left < e.left
                ? t.left - e.left
                : t.right - e.right;
            },
            Va = function(e, t) {
              return t.top > e.top && t.bottom < e.bottom
                ? 0
                : t.top < e.top
                ? t.top - e.top
                : t.bottom - e.bottom;
            },
            Fa = function(e) {
              var t = e.startContainer,
                n = e.startOffset;
              return t.hasChildNodes() && e.endOffset === n + 1
                ? t.childNodes[n]
                : null;
            },
            Ua = function(e, t) {
              return (
                1 === e.nodeType &&
                  e.hasChildNodes() &&
                  (t >= e.childNodes.length && (t = e.childNodes.length - 1),
                  (e = e.childNodes[t])),
                e
              );
            },
            ja = new RegExp(
              "[̀-ͯ҃-҇҈-҉֑-ֽֿׁ-ׂׄ-ׇׅؐ-ًؚ-ٰٟۖ-ۜ۟-ۤۧ-۪ۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣣ-ंऺ़ु-ै्॑-ॗॢ-ॣঁ়াু-ৄ্ৗৢ-ৣਁ-ਂ਼ੁ-ੂੇ-ੈੋ-੍ੑੰ-ੱੵઁ-ં઼ુ-ૅે-ૈ્ૢ-ૣଁ଼ାିୁ-ୄ୍ୖୗୢ-ୣஂாீ்ௗఀా-ీె-ైొ-్ౕ-ౖౢ-ౣಁ಼ಿೂೆೌ-್ೕ-ೖೢ-ೣഁാു-ൄ്ൗൢ-ൣ්ාි-ුූෟัิ-ฺ็-๎ັິ-ູົ-ຼ່-ໍ༘-ཱ༹༙༵༷-ཾྀ-྄྆-྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္-်ွ-ှၘ-ၙၞ-ၠၱ-ၴႂႅ-ႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒ-ᝓᝲ-ᝳ឴-឵ិ-ួំ៉-៓៝᠋-᠍ᢩᤠ-ᤢᤧ-ᤨᤲ᤹-᤻ᨗ-ᨘᨛᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼᪰-᪽᪾ᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀ-ᮁᮢ-ᮥᮨ-ᮩ᮫-ᮭ᯦ᯨ-ᯩᯭᯯ-ᯱᰬ-ᰳᰶ-᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸-᳹᷀-᷵᷼-᷿‌-‍⃐-⃜⃝-⃠⃡⃢-⃤⃥-⃰⳯-⵿⳱ⷠ-〪ⷿ-〭〮-゙〯-゚꙯꙰-꙲ꙴ-꙽ꚞ-ꚟ꛰-꛱ꠂ꠆ꠋꠥ-ꠦ꣄꣠-꣱ꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꧥꨩ-ꨮꨱ-ꨲꨵ-ꨶꩃꩌꩼꪰꪲ-ꪴꪷ-ꪸꪾ-꪿꫁ꫬ-ꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︯ﾞ-ﾟ]"
            ),
            qa = function(e) {
              return (
                "string" == typeof e && e.charCodeAt(0) >= 768 && ja.test(e)
              );
            },
            $a = function(e, t) {
              for (var n = [], r = 0; r < e.length; r++) {
                var o = e[r];
                if (!o.isSome()) return _.none();
                n.push(o.getOrDie());
              }
              return _.some(t.apply(null, n));
            },
            Wa = [].slice,
            Ka = function() {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              var n = Wa.call(arguments);
              return function(e) {
                for (var t = 0; t < n.length; t++) if (!n[t](e)) return !1;
                return !0;
              };
            },
            Xa = function() {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              var n = Wa.call(arguments);
              return function(e) {
                for (var t = 0; t < n.length; t++) if (n[t](e)) return !0;
                return !1;
              };
            },
            Ya = ko.isElement,
            Ga = Aa,
            Ja = ko.matchStyleValues("display", "block table"),
            Qa = ko.matchStyleValues("float", "left right"),
            Za = Ka(Ya, Ga, w(Qa)),
            eu = w(ko.matchStyleValues("white-space", "pre pre-line pre-wrap")),
            tu = ko.isText,
            nu = ko.isBr,
            ru = ci.nodeIndex,
            ou = Ua,
            iu = function(e) {
              return "createRange" in e ? e.createRange() : ci.DOM.createRng();
            },
            au = function(e) {
              return e && /[\r\n\t ]/.test(e);
            },
            uu = function(e) {
              return !!e.setStart && !!e.setEnd;
            },
            su = function(e) {
              var t,
                n = e.startContainer,
                r = e.startOffset;
              return !!(
                au(e.toString()) &&
                eu(n.parentNode) &&
                ko.isText(n) &&
                ((t = n.data), au(t[r - 1]) || au(t[r + 1]))
              );
            },
            lu = function(e) {
              return (
                0 === e.left && 0 === e.right && 0 === e.top && 0 === e.bottom
              );
            },
            cu = function(e) {
              var t, n;
              return (
                (t =
                  (n = e.getClientRects()).length > 0
                    ? Oa(n[0])
                    : Oa(e.getBoundingClientRect())),
                !uu(e) && nu(e) && lu(t)
                  ? (function(e) {
                      var t,
                        n = e.ownerDocument,
                        r = iu(n),
                        o = n.createTextNode(" "),
                        i = e.parentNode;
                      return (
                        i.insertBefore(o, e),
                        r.setStart(o, 0),
                        r.setEnd(o, 1),
                        (t = Oa(r.getBoundingClientRect())),
                        i.removeChild(o),
                        t
                      );
                    })(e)
                  : lu(t) && uu(e)
                  ? (function(e) {
                      var t = e.startContainer,
                        n = e.endContainer,
                        r = e.startOffset,
                        o = e.endOffset;
                      if (t === n && ko.isText(n) && 0 === r && 1 === o) {
                        var i = e.cloneRange();
                        return i.setEndAfter(n), cu(i);
                      }
                      return null;
                    })(e)
                  : t
              );
            },
            fu = function(e, t) {
              var n = Da(e, t);
              return (n.width = 1), (n.right = n.left + 1), n;
            },
            du = function(e) {
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
                  var n = iu(e.ownerDocument);
                  if (t < e.data.length) {
                    if (qa(e.data[t])) return r;
                    if (
                      qa(e.data[t - 1]) &&
                      (n.setStart(e, t), n.setEnd(e, t + 1), !su(n))
                    )
                      return o(fu(cu(n), !1)), r;
                  }
                  t > 0 &&
                    (n.setStart(e, t - 1),
                    n.setEnd(e, t),
                    su(n) || o(fu(cu(n), !1))),
                    t < e.data.length &&
                      (n.setStart(e, t),
                      n.setEnd(e, t + 1),
                      su(n) || o(fu(cu(n), !0)));
                };
              if (tu(e.container())) return i(e.container(), e.offset()), r;
              if (Ya(e.container()))
                if (e.isAtEnd())
                  (n = ou(e.container(), e.offset())),
                    tu(n) && i(n, n.data.length),
                    Za(n) && !nu(n) && o(fu(cu(n), !1));
                else {
                  if (
                    ((n = ou(e.container(), e.offset())),
                    tu(n) && i(n, 0),
                    Za(n) && e.isAtEnd())
                  )
                    return o(fu(cu(n), !1)), r;
                  (t = ou(e.container(), e.offset() - 1)),
                    Za(t) &&
                      !nu(t) &&
                      (Ja(t) || Ja(n) || !Za(n)) &&
                      o(fu(cu(t), !1)),
                    Za(n) && o(fu(cu(n), !0));
                }
              return r;
            };
          function hu(e, t, n) {
            var r = function() {
              return n || (n = du(hu(e, t))), n;
            };
            return {
              container: i(e),
              offset: i(t),
              toRange: function() {
                var n;
                return (
                  (n = iu(e.ownerDocument)).setStart(e, t), n.setEnd(e, t), n
                );
              },
              getClientRects: r,
              isVisible: function() {
                return r().length > 0;
              },
              isAtStart: function() {
                return tu(e), 0 === t;
              },
              isAtEnd: function() {
                return tu(e) ? t >= e.data.length : t >= e.childNodes.length;
              },
              isEqual: function(n) {
                return n && e === n.container() && t === n.offset();
              },
              getNode: function(n) {
                return ou(e, n ? t - 1 : t);
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
                return e(t.parentNode, ru(t) + 1);
              }),
              (e.before = function(t) {
                return e(t.parentNode, ru(t));
              }),
              (e.isAbove = function(e, t) {
                return $a(
                  [Z(t.getClientRects()), ee(e.getClientRects())],
                  Ha
                ).getOr(!1);
              }),
              (e.isBelow = function(e, t) {
                return $a(
                  [ee(t.getClientRects()), Z(e.getClientRects())],
                  La
                ).getOr(!1);
              }),
              (e.isAtStart = function(e) {
                return !!e && e.isAtStart();
              }),
              (e.isAtEnd = function(e) {
                return !!e && e.isAtEnd();
              }),
              (e.isTextPosition = function(e) {
                return !!e && ko.isText(e.container());
              }),
              (e.isElementPosition = function(t) {
                return !1 === e.isTextPosition(t);
              });
          })(hu || (hu = {}));
          var mu,
            gu = hu,
            pu = ko.isText,
            vu = ko.isBogus,
            bu = ci.nodeIndex,
            yu = function(e) {
              var t = e.parentNode;
              return vu(t) ? yu(t) : t;
            },
            Cu = function(e) {
              return e
                ? qt.reduce(
                    e.childNodes,
                    function(e, t) {
                      return (
                        vu(t) && "BR" !== t.nodeName
                          ? (e = e.concat(Cu(t)))
                          : e.push(t),
                        e
                      );
                    },
                    []
                  )
                : [];
            },
            wu = function(e) {
              return function(t) {
                return e === t;
              };
            },
            xu = function(e) {
              return (
                (pu(e) ? "text()" : e.nodeName.toLowerCase()) +
                "[" +
                (function(e) {
                  var t, n, r;
                  return (
                    (t = Cu(yu(e))),
                    (n = qt.findIndex(t, wu(e), e)),
                    (t = t.slice(0, n + 1)),
                    (r = qt.reduce(
                      t,
                      function(e, n, r) {
                        return pu(n) && pu(t[r - 1]) && e++, e;
                      },
                      0
                    )),
                    (t = qt.filter(t, ko.matchNodeNames(e.nodeName))),
                    (n = qt.findIndex(t, wu(e), e)) - r
                  );
                })(e) +
                "]"
              );
            },
            Su = function(e, t) {
              var n,
                r,
                o,
                i,
                a,
                u = [];
              return (
                (n = t.container()),
                (r = t.offset()),
                pu(n)
                  ? (o = (function(e, t) {
                      for (; (e = e.previousSibling) && pu(e); )
                        t += e.data.length;
                      return t;
                    })(n, r))
                  : (r >= (i = n.childNodes).length
                      ? ((o = "after"), (r = i.length - 1))
                      : (o = "before"),
                    (n = i[r])),
                u.push(xu(n)),
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
                (a = qt.filter(a, w(ko.isBogus))),
                (u = u.concat(
                  qt.map(a, function(e) {
                    return xu(e);
                  })
                ))
                  .reverse()
                  .join("/") +
                  "," +
                  o
              );
            },
            Eu = function(e, t) {
              var n, r, o;
              return t
                ? ((n = t.split(",")),
                  (t = n[0].split("/")),
                  (o = n.length > 1 ? n[1] : "before"),
                  (r = qt.reduce(
                    t,
                    function(e, t) {
                      return (t = /([\w\-\(\)]+)\[([0-9]+)\]/.exec(t))
                        ? ("text()" === t[1] && (t[1] = "#text"),
                          (n = e),
                          (r = t[1]),
                          (o = parseInt(t[2], 10)),
                          (i = Cu(n)),
                          (i = qt.filter(i, function(e, t) {
                            return !pu(e) || !pu(i[t - 1]);
                          })),
                          (i = qt.filter(i, ko.matchNodeNames(r)))[o])
                        : null;
                      var n, r, o, i;
                    },
                    e
                  ))
                    ? pu(r)
                      ? (function(e, t) {
                          for (var n, r = e, o = 0; pu(r); ) {
                            if (((n = r.data.length), t >= o && t <= o + n)) {
                              (e = r), (t -= o);
                              break;
                            }
                            if (!pu(r.nextSibling)) {
                              (e = r), (t = n);
                              break;
                            }
                            (o += n), (r = r.nextSibling);
                          }
                          return (
                            pu(e) && t > e.data.length && (t = e.data.length),
                            gu(e, t)
                          );
                        })(r, parseInt(o, 10))
                      : ((o = "after" === o ? bu(r) + 1 : bu(r)),
                        gu(r.parentNode, o))
                    : null)
                : null;
            },
            Nu = function(e, t) {
              ko.isText(t) && 0 === t.data.length && e.remove(t);
            },
            zu = function(e, t, n) {
              ko.isDocumentFragment(n)
                ? (function(e, t, n) {
                    var r = _.from(n.firstChild),
                      o = _.from(n.lastChild);
                    t.insertNode(n),
                      r.each(function(t) {
                        return Nu(e, t.previousSibling);
                      }),
                      o.each(function(t) {
                        return Nu(e, t.nextSibling);
                      });
                  })(e, t, n)
                : (function(e, t, n) {
                    t.insertNode(n),
                      Nu(e, n.previousSibling),
                      Nu(e, n.nextSibling);
                  })(e, t, n);
            },
            ku = ko.isContentEditableFalse,
            Tu = function(e, t, n, r, o) {
              var i,
                a = r[o ? "startContainer" : "endContainer"],
                u = r[o ? "startOffset" : "endOffset"],
                s = [],
                l = 0,
                c = e.getRoot();
              for (
                ko.isText(a)
                  ? s.push(
                      n
                        ? (function(e, t, n) {
                            var r, o;
                            for (
                              o = e(t.data.slice(0, n)).length,
                                r = t.previousSibling;
                              r && ko.isText(r);
                              r = r.previousSibling
                            )
                              o += e(r.data).length;
                            return o;
                          })(t, a, u)
                        : u
                    )
                  : (u >= (i = a.childNodes).length &&
                      i.length &&
                      ((l = 1), (u = Math.max(0, i.length - 1))),
                    s.push(e.nodeIndex(i[u], n) + l));
                a && a !== c;
                a = a.parentNode
              )
                s.push(e.nodeIndex(a, n));
              return s;
            },
            _u = function(e, t, n) {
              var r = 0;
              return (
                Yt.each(e.select(t), function(e) {
                  if ("all" !== e.getAttribute("data-mce-bogus"))
                    return e !== n && void r++;
                }),
                r
              );
            },
            Au = function(e, t) {
              var n,
                r,
                o,
                i = t ? "start" : "end";
              (n = e[i + "Container"]),
                (r = e[i + "Offset"]),
                ko.isElement(n) &&
                  "TR" === n.nodeName &&
                  (n = (o = n.childNodes)[
                    Math.min(t ? r : r - 1, o.length - 1)
                  ]) &&
                  ((r = t ? 0 : n.childNodes.length),
                  e["set" + (t ? "Start" : "End")](n, r));
            },
            Bu = function(e) {
              return Au(e, !0), Au(e, !1), e;
            },
            Ru = function(e, t) {
              var n;
              if (ko.isElement(e) && ((e = Ua(e, t)), ku(e))) return e;
              if (ma(e)) {
                if (
                  (ko.isText(e) && da(e) && (e = e.parentNode),
                  (n = e.previousSibling),
                  ku(n))
                )
                  return n;
                if (((n = e.nextSibling), ku(n))) return n;
              }
            },
            Mu = function(e, t, n) {
              var r = n.getNode(),
                o = r ? r.nodeName : null,
                i = n.getRng();
              if (ku(r) || "IMG" === o)
                return { name: o, index: _u(n.dom, o, r) };
              var a = (function(e) {
                return (
                  Ru(e.startContainer, e.startOffset) ||
                  Ru(e.endContainer, e.endOffset)
                );
              })(i);
              return a
                ? { name: (o = a.tagName), index: _u(n.dom, o, a) }
                : (function(e, t, n, r) {
                    var o = t.dom,
                      i = {};
                    return (
                      (i.start = Tu(o, e, n, r, !0)),
                      t.isCollapsed() || (i.end = Tu(o, e, n, r, !1)),
                      i
                    );
                  })(e, n, t, i);
            },
            Ou = function(e, t, n) {
              var r = {
                "data-mce-type": "bookmark",
                id: t,
                style: "overflow:hidden;line-height:0px"
              };
              return n ? e.create("span", r, "&#xFEFF;") : e.create("span", r);
            },
            Du = function(e, t) {
              var n = e.dom,
                r = e.getRng(),
                o = n.uniqueId(),
                i = e.isCollapsed(),
                a = e.getNode(),
                u = a.nodeName;
              if ("IMG" === u) return { name: u, index: _u(n, u, a) };
              var s = Bu(r.cloneRange());
              if (!i) {
                s.collapse(!1);
                var l = Ou(n, o + "_end", t);
                zu(n, s, l);
              }
              (r = Bu(r)).collapse(!0);
              var c = Ou(n, o + "_start", t);
              return (
                zu(n, r, c), e.moveToBookmark({ id: o, keep: 1 }), { id: o }
              );
            },
            Pu = {
              getBookmark: function(e, t, n) {
                return 2 === t
                  ? Mu(la, n, e)
                  : 3 === t
                  ? (function(e) {
                      var t = e.getRng();
                      return {
                        start: Su(e.dom.getRoot(), gu.fromRangeStart(t)),
                        end: Su(e.dom.getRoot(), gu.fromRangeEnd(t))
                      };
                    })(e)
                  : t
                  ? (function(e) {
                      return { rng: e.getRng() };
                    })(e)
                  : Du(e, !1);
              },
              getUndoBookmark: u(Mu, a, !0),
              getPersistentBookmark: Du
            },
            Hu = function(e) {
              return ko.isElement(e) && "_mce_caret" === e.id;
            },
            Lu = function(e, t) {
              for (; t && t !== e; ) {
                if ("_mce_caret" === t.id) return t;
                t = t.parentNode;
              }
              return null;
            },
            Iu = ko.isElement,
            Vu = ko.isText,
            Fu = function(e) {
              var t = e.parentNode;
              t && t.removeChild(e);
            },
            Uu = function(e, t) {
              0 === t.length ? Fu(e) : (e.nodeValue = t);
            },
            ju = function(e) {
              var t = la(e);
              return { count: e.length - t.length, text: t };
            },
            qu = function(e, t) {
              return Ku(e), t;
            },
            $u = function(e, t) {
              var n,
                r,
                o,
                i = t.container(),
                a = ((n = te(i.childNodes)),
                (r = e),
                (o = L(n, r)),
                -1 === o ? _.none() : _.some(o))
                  .map(function(e) {
                    return e < t.offset() ? gu(i, t.offset() - 1) : t;
                  })
                  .getOr(t);
              return Ku(e), a;
            },
            Wu = function(e, t) {
              return Vu(e) && t.container() === e
                ? (function(e, t) {
                    var n = ju(e.data.substr(0, t.offset())),
                      r = ju(e.data.substr(t.offset())),
                      o = n.text + r.text;
                    return o.length > 0
                      ? (Uu(e, o), gu(e, t.offset() - n.count))
                      : t;
                  })(e, t)
                : qu(e, t);
            },
            Ku = function(e) {
              if (
                (Iu(e) &&
                  ma(e) &&
                  (ga(e) ? e.removeAttribute("data-mce-caret") : Fu(e)),
                Vu(e))
              ) {
                var t = la(
                  (function(e) {
                    try {
                      return e.nodeValue;
                    } catch (e) {
                      return "";
                    }
                  })(e)
                );
                Uu(e, t);
              }
            },
            Xu = {
              removeAndReposition: function(e, t) {
                return gu.isTextPosition(t)
                  ? Wu(e, t)
                  : (function(e, t) {
                      return t.container() === e.parentNode
                        ? $u(e, t)
                        : qu(e, t);
                    })(e, t);
              },
              remove: Ku
            },
            Yu = Yn.detect().browser,
            Gu = ko.isContentEditableFalse,
            Ju = function(e, t, n) {
              var r,
                o,
                i,
                a,
                u,
                s = Da(t.getBoundingClientRect(), n);
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
            Qu = function(e, t, n) {
              var r,
                o,
                i = pi(_.none()),
                a = function() {
                  !(function(e) {
                    var t, n, r, o, i;
                    for (
                      t = gn("*[contentEditable=false]", e), o = 0;
                      o < t.length;
                      o++
                    )
                      (r = (n = t[o]).previousSibling),
                        Ca(r) &&
                          (1 === (i = r.data).length
                            ? r.parentNode.removeChild(r)
                            : r.deleteData(i.length - 1, 1)),
                        (r = n.nextSibling),
                        ya(r) &&
                          (1 === (i = r.data).length
                            ? r.parentNode.removeChild(r)
                            : r.deleteData(0, 1));
                  })(e),
                    o && (Xu.remove(o), (o = null)),
                    i.get().each(function(e) {
                      gn(e.caret).remove(), i.set(_.none());
                    }),
                    clearInterval(r);
                },
                u = function() {
                  r = pe.setInterval(function() {
                    n()
                      ? gn("div.mce-visual-caret", e).toggleClass(
                          "mce-visual-caret-hidden"
                        )
                      : gn("div.mce-visual-caret", e).addClass(
                          "mce-visual-caret-hidden"
                        );
                  }, 500);
                };
              return {
                show: function(n, r) {
                  var s, l, c;
                  if (
                    (a(),
                    (c = r),
                    ko.isElement(c) && /^(TD|TH)$/i.test(c.tagName))
                  )
                    return null;
                  if (!t(r))
                    return (
                      (o = (function(e, t) {
                        var n, r, o;
                        if (
                          ((r = e.ownerDocument.createTextNode(sa)),
                          (o = e.parentNode),
                          t)
                        ) {
                          if (((n = e.previousSibling), fa(n))) {
                            if (ma(n)) return n;
                            if (Ca(n)) return n.splitText(n.data.length - 1);
                          }
                          o.insertBefore(r, e);
                        } else {
                          if (((n = e.nextSibling), fa(n))) {
                            if (ma(n)) return n;
                            if (ya(n)) return n.splitText(1), n;
                          }
                          e.nextSibling
                            ? o.insertBefore(r, e.nextSibling)
                            : o.appendChild(r);
                        }
                        return r;
                      })(r, n)),
                      (l = r.ownerDocument.createRange()),
                      Gu(o.nextSibling)
                        ? (l.setStart(o, 0), l.setEnd(o, 0))
                        : (l.setStart(o, 1), l.setEnd(o, 1)),
                      l
                    );
                  (o = ba("p", r, n)),
                    (s = Ju(e, r, n)),
                    gn(o).css("top", s.top);
                  var f = gn(
                    '<div class="mce-visual-caret" data-mce-bogus="all"></div>'
                  )
                    .css(s)
                    .appendTo(e)[0];
                  return (
                    i.set(_.some({ caret: f, element: r, before: n })),
                    i.get().each(function(e) {
                      n && gn(e.caret).addClass("mce-visual-caret-before");
                    }),
                    u(),
                    (l = r.ownerDocument.createRange()).setStart(o, 0),
                    l.setEnd(o, 0),
                    l
                  );
                },
                hide: a,
                getCss: function() {
                  return ".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}";
                },
                reposition: function() {
                  i.get().each(function(t) {
                    var n = Ju(e, t.element, t.before);
                    gn(t.caret).css(n);
                  });
                },
                destroy: function() {
                  return pe.clearInterval(r);
                }
              };
            },
            Zu = function() {
              return Yu.isIE() || Yu.isEdge() || Yu.isFirefox();
            },
            es = function(e) {
              return Gu(e) || (ko.isTable(e) && Zu());
            },
            ts = ko.isContentEditableFalse,
            ns = ko.matchStyleValues(
              "display",
              "block table table-cell table-caption list-item"
            ),
            rs = ma,
            os = da,
            is = ko.isElement,
            as = Aa,
            us = function(e) {
              return e > 0;
            },
            ss = function(e) {
              return e < 0;
            },
            ls = function(e, t) {
              for (var n; (n = e(t)); ) if (!os(n)) return n;
              return null;
            },
            cs = function(e, t, n, r, o) {
              var i = new Zr(e, r);
              if (ss(t)) {
                if ((ts(e) || os(e)) && n((e = ls(i.prev, !0)))) return e;
                for (; (e = ls(i.prev, o)); ) if (n(e)) return e;
              }
              if (us(t)) {
                if ((ts(e) || os(e)) && n((e = ls(i.next, !0)))) return e;
                for (; (e = ls(i.next, o)); ) if (n(e)) return e;
              }
              return null;
            },
            fs = function(e, t) {
              for (; e && e !== t; ) {
                if (ns(e)) return e;
                e = e.parentNode;
              }
              return null;
            },
            ds = function(e, t, n) {
              return fs(e.container(), n) === fs(t.container(), n);
            },
            hs = function(e, t) {
              var n, r;
              return t
                ? ((n = t.container()),
                  (r = t.offset()),
                  is(n) ? n.childNodes[r + e] : null)
                : null;
            },
            ms = function(e, t) {
              var n = t.ownerDocument.createRange();
              return (
                e
                  ? (n.setStartBefore(t), n.setEndBefore(t))
                  : (n.setStartAfter(t), n.setEndAfter(t)),
                n
              );
            },
            gs = function(e, t, n) {
              return fs(t, e) === fs(n, e);
            },
            ps = function(e, t, n) {
              var r, o;
              for (o = e ? "previousSibling" : "nextSibling"; n && n !== t; ) {
                if (((r = n[o]), rs(r) && (r = r[o]), ts(r))) {
                  if (gs(t, r, n)) return r;
                  break;
                }
                if (as(r)) break;
                n = n.parentNode;
              }
              return null;
            },
            vs = u(ms, !0),
            bs = u(ms, !1),
            ys = function(e, t, n) {
              var r,
                o,
                i,
                a,
                s = u(ps, !0, t),
                l = u(ps, !1, t);
              if (((o = n.startContainer), (i = n.startOffset), da(o))) {
                if (
                  (is(o) || (o = o.parentNode),
                  "before" === (a = o.getAttribute("data-mce-caret")) &&
                    ((r = o.nextSibling), es(r)))
                )
                  return vs(r);
                if ("after" === a && ((r = o.previousSibling), es(r)))
                  return bs(r);
              }
              if (!n.collapsed) return n;
              if (ko.isText(o)) {
                if (rs(o)) {
                  if (1 === e) {
                    if ((r = l(o))) return vs(r);
                    if ((r = s(o))) return bs(r);
                  }
                  if (-1 === e) {
                    if ((r = s(o))) return bs(r);
                    if ((r = l(o))) return vs(r);
                  }
                  return n;
                }
                if (Ca(o) && i >= o.data.length - 1)
                  return 1 === e && (r = l(o)) ? vs(r) : n;
                if (ya(o) && i <= 1) return -1 === e && (r = s(o)) ? bs(r) : n;
                if (i === o.data.length) return (r = l(o)) ? vs(r) : n;
                if (0 === i) return (r = s(o)) ? bs(r) : n;
              }
              return n;
            },
            Cs = function(e, t) {
              return _.from(hs(e ? 0 : -1, t)).filter(ts);
            },
            ws = function(e, t, n) {
              var r = ys(e, t, n);
              return -1 === e ? hu.fromRangeStart(r) : hu.fromRangeEnd(r);
            },
            xs = function(e) {
              return _.from(e.getNode()).map(Jn.fromDom);
            },
            Ss = function(e, t) {
              for (; (t = e(t)); ) if (t.isVisible()) return t;
              return t;
            },
            Es = function(e, t) {
              var n = ds(e, t);
              return !(n || !ko.isBr(e.getNode())) || n;
            };
          !(function(e) {
            (e[(e.Backwards = -1)] = "Backwards"),
              (e[(e.Forwards = 1)] = "Forwards");
          })(mu || (mu = {}));
          var Ns = ko.isContentEditableFalse,
            zs = ko.isText,
            ks = ko.isElement,
            Ts = ko.isBr,
            _s = Aa,
            As = function(e) {
              return (
                ka(e) ||
                (function(e) {
                  return (
                    !!Ba(e) &&
                    !0 !==
                      q(
                        te(e.getElementsByTagName("*")),
                        function(e, t) {
                          return e || xa(t);
                        },
                        !1
                      )
                  );
                })(e)
              );
            },
            Bs = Ra,
            Rs = function(e, t) {
              return e.hasChildNodes() && t < e.childNodes.length
                ? e.childNodes[t]
                : null;
            },
            Ms = function(e, t) {
              if (us(e)) {
                if (_s(t.previousSibling) && !zs(t.previousSibling))
                  return gu.before(t);
                if (zs(t)) return gu(t, 0);
              }
              if (ss(e)) {
                if (_s(t.nextSibling) && !zs(t.nextSibling)) return gu.after(t);
                if (zs(t)) return gu(t, t.data.length);
              }
              return ss(e)
                ? Ts(t)
                  ? gu.before(t)
                  : gu.after(t)
                : gu.before(t);
            },
            Os = function(e, t, n) {
              var r, o, a, u, s;
              if (!ks(n) || !t) return null;
              if (t.isEqual(gu.after(n)) && n.lastChild) {
                if (
                  ((s = gu.after(n.lastChild)),
                  ss(e) && _s(n.lastChild) && ks(n.lastChild))
                )
                  return Ts(n.lastChild) ? gu.before(n.lastChild) : s;
              } else s = t;
              var l = s.container(),
                c = s.offset();
              if (zs(l)) {
                if (ss(e) && c > 0) return gu(l, --c);
                if (us(e) && c < l.length) return gu(l, ++c);
                r = l;
              } else {
                if (ss(e) && c > 0 && ((o = Rs(l, c - 1)), _s(o)))
                  return !As(o) && (a = cs(o, e, Bs, o))
                    ? zs(a)
                      ? gu(a, a.data.length)
                      : gu.after(a)
                    : zs(o)
                    ? gu(o, o.data.length)
                    : gu.before(o);
                if (us(e) && c < l.childNodes.length && ((o = Rs(l, c)), _s(o)))
                  return Ts(o)
                    ? (function(e, t) {
                        var n = t.nextSibling;
                        return n && _s(n)
                          ? zs(n)
                            ? gu(n, 0)
                            : gu.before(n)
                          : Os(mu.Forwards, gu.after(t), e);
                      })(n, o)
                    : !As(o) && (a = cs(o, e, Bs, o))
                    ? zs(a)
                      ? gu(a, 0)
                      : gu.before(a)
                    : zs(o)
                    ? gu(o, 0)
                    : gu.after(o);
                r = o || s.getNode();
              }
              return ((us(e) && s.isAtEnd()) || (ss(e) && s.isAtStart())) &&
                ((r = cs(r, e, i(!0), n, !0)), Bs(r, n))
                ? Ms(e, r)
                : ((o = cs(r, e, Bs, n)),
                  !(u = qt.last(
                    j(
                      (function(e, t) {
                        for (var n = []; e && e !== t; )
                          n.push(e), (e = e.parentNode);
                        return n;
                      })(l, n),
                      Ns
                    )
                  )) ||
                  (o && u.contains(o))
                    ? o
                      ? Ms(e, o)
                      : null
                    : (s = us(e) ? gu.after(u) : gu.before(u)));
            },
            Ds = function(e) {
              return {
                next: function(t) {
                  return Os(mu.Forwards, t, e);
                },
                prev: function(t) {
                  return Os(mu.Backwards, t, e);
                }
              };
            },
            Ps = function(e) {
              return gu.isTextPosition(e) ? 0 === e.offset() : Aa(e.getNode());
            },
            Hs = function(e) {
              if (gu.isTextPosition(e)) {
                var t = e.container();
                return e.offset() === t.data.length;
              }
              return Aa(e.getNode(!0));
            },
            Ls = function(e, t) {
              return (
                !gu.isTextPosition(e) &&
                !gu.isTextPosition(t) &&
                e.getNode() === t.getNode(!0)
              );
            },
            Is = function(e, t, n) {
              return e
                ? !Ls(t, n) &&
                    ((r = t),
                    !(!gu.isTextPosition(r) && ko.isBr(r.getNode()))) &&
                    Hs(t) &&
                    Ps(n)
                : !Ls(n, t) && Ps(t) && Hs(n);
              var r;
            },
            Vs = function(e, t, n) {
              var r = Ds(t);
              return _.from(e ? r.next(n) : r.prev(n));
            },
            Fs = function(e, t, n) {
              return Vs(e, t, n).bind(function(r) {
                return ds(n, r, t) && Is(e, n, r) ? Vs(e, t, r) : _.some(r);
              });
            },
            Us = function(e, t, n, r) {
              return Fs(e, t, n).bind(function(n) {
                return r(n) ? Us(e, t, n, r) : _.some(n);
              });
            },
            js = function(e, t) {
              var n,
                r = e ? t.firstChild : t.lastChild;
              return ko.isText(r)
                ? _.some(gu(r, e ? 0 : r.data.length))
                : r
                ? Aa(r)
                  ? _.some(
                      e
                        ? gu.before(r)
                        : ((n = r), ko.isBr(n) ? gu.before(n) : gu.after(n))
                    )
                  : (function(e, t, n) {
                      var r = e ? gu.before(n) : gu.after(n);
                      return Vs(e, t, r);
                    })(e, t, r)
                : _.none();
            },
            qs = u(Vs, !0),
            $s = u(Vs, !1),
            Ws = {
              fromPosition: Vs,
              nextPosition: qs,
              prevPosition: $s,
              navigate: Fs,
              navigateIgnore: Us,
              positionIn: js,
              firstPositionIn: u(js, !0),
              lastPositionIn: u(js, !1)
            },
            Ks = function(e, t) {
              return (
                !e.isBlock(t) ||
                  t.innerHTML ||
                  fe.ie ||
                  (t.innerHTML = '<br data-mce-bogus="1" />'),
                t
              );
            },
            Xs = function(e, t) {
              return Ws.lastPositionIn(e).fold(
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
            Ys = function(e, t, n) {
              return !(
                !(function(e) {
                  return !1 === e.hasChildNodes();
                })(t) ||
                !Lu(e, t) ||
                ((function(e, t) {
                  var n = e.ownerDocument.createTextNode(sa);
                  e.appendChild(n), t.setStart(n, 0), t.setEnd(n, 0);
                })(t, n),
                0)
              );
            },
            Gs = function(e, t, n, r) {
              var o,
                i,
                a,
                u,
                s = n[t ? "start" : "end"],
                l = e.getRoot();
              if (s) {
                for (a = s[0], i = l, o = s.length - 1; o >= 1; o--) {
                  if (((u = i.childNodes), Ys(l, i, r))) return !0;
                  if (s[o] > u.length - 1) return !!Ys(l, i, r) || Xs(i, r);
                  i = u[s[o]];
                }
                3 === i.nodeType && (a = Math.min(s[0], i.nodeValue.length)),
                  1 === i.nodeType && (a = Math.min(s[0], i.childNodes.length)),
                  t ? r.setStart(i, a) : r.setEnd(i, a);
              }
              return !0;
            },
            Js = function(e) {
              return ko.isText(e) && e.data.length > 0;
            },
            Qs = function(e, t, n) {
              var r,
                o,
                i,
                a,
                u,
                s,
                l = e.get(n.id + "_" + t),
                c = n.keep;
              if (l) {
                if (
                  ((r = l.parentNode),
                  "start" === t
                    ? (c
                        ? l.hasChildNodes()
                          ? ((r = l.firstChild), (o = 1))
                          : Js(l.nextSibling)
                          ? ((r = l.nextSibling), (o = 0))
                          : Js(l.previousSibling)
                          ? ((r = l.previousSibling),
                            (o = l.previousSibling.data.length))
                          : ((r = l.parentNode), (o = e.nodeIndex(l) + 1))
                        : (o = e.nodeIndex(l)),
                      (u = r),
                      (s = o))
                    : (c
                        ? l.hasChildNodes()
                          ? ((r = l.firstChild), (o = 1))
                          : Js(l.previousSibling)
                          ? ((r = l.previousSibling),
                            (o = l.previousSibling.data.length))
                          : ((r = l.parentNode), (o = e.nodeIndex(l)))
                        : (o = e.nodeIndex(l)),
                      (u = r),
                      (s = o)),
                  !c)
                ) {
                  for (
                    a = l.previousSibling,
                      i = l.nextSibling,
                      Yt.each(Yt.grep(l.childNodes), function(e) {
                        ko.isText(e) &&
                          (e.nodeValue = e.nodeValue.replace(/\uFEFF/g, ""));
                      });
                    (l = e.get(n.id + "_" + t));

                  )
                    e.remove(l, !0);
                  a &&
                    i &&
                    a.nodeType === i.nodeType &&
                    ko.isText(a) &&
                    !fe.opera &&
                    ((o = a.nodeValue.length),
                    a.appendData(i.nodeValue),
                    e.remove(i),
                    (u = a),
                    (s = o));
                }
                return _.some(gu(u, s));
              }
              return _.none();
            },
            Zs = function(e, t) {
              var n = e.dom;
              if (t) {
                if (
                  (function(e) {
                    return Yt.isArray(e.start);
                  })(t)
                )
                  return (function(e, t) {
                    var n = e.createRng();
                    return Gs(e, !0, t, n) && Gs(e, !1, t, n)
                      ? _.some(n)
                      : _.none();
                  })(n, t);
                if (
                  (function(e) {
                    return "string" == typeof e.start;
                  })(t)
                )
                  return _.some(
                    (function(e, t) {
                      var n, r;
                      return (
                        (n = e.createRng()),
                        (r = Eu(e.getRoot(), t.start)),
                        n.setStart(r.container(), r.offset()),
                        (r = Eu(e.getRoot(), t.end)),
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
                      o = Qs(e, "start", t),
                      i = Qs(e, "end", t);
                    return $a(
                      [o, ((n = i), (r = o), n.isSome() ? n : r)],
                      function(t, n) {
                        var r = e.createRng();
                        return (
                          r.setStart(Ks(e, t.container()), t.offset()),
                          r.setEnd(Ks(e, n.container()), n.offset()),
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
                    return _.from(e.select(t.name)[t.index]).map(function(t) {
                      var n = e.createRng();
                      return n.selectNode(t), n;
                    });
                  })(n, t);
                if (
                  (function(e) {
                    return e.hasOwnProperty("rng");
                  })(t)
                )
                  return _.some(t.rng);
              }
              return _.none();
            },
            el = {
              getBookmark: function(e, t, n) {
                return Pu.getBookmark(e, t, n);
              },
              moveToBookmark: function(e, t) {
                Zs(e, t).each(function(t) {
                  e.setRng(t);
                });
              },
              isBookmarkNode: function(e) {
                return (
                  ko.isElement(e) &&
                  "SPAN" === e.tagName &&
                  "bookmark" === e.getAttribute("data-mce-type")
                );
              }
            },
            tl = function(e) {
              return e && /^(IMG)$/.test(e.nodeName);
            },
            nl = function(e) {
              return (
                e && 3 === e.nodeType && /^([\t \r\n]+|)$/.test(e.nodeValue)
              );
            },
            rl = function(e, t, n) {
              return (
                ("color" !== n && "backgroundColor" !== n) || (t = e.toHex(t)),
                "fontWeight" === n && 700 === t && (t = "bold"),
                "fontFamily" === n &&
                  (t = t.replace(/[\'\"]/g, "").replace(/,\s+/g, ",")),
                "" + t
              );
            },
            ol = {
              isInlineBlock: tl,
              moveStart: function(e, t, n) {
                var r,
                  o,
                  i,
                  a = n.startOffset,
                  u = n.startContainer;
                if (
                  (n.startContainer !== n.endContainer ||
                    !tl(n.startContainer.childNodes[n.startOffset])) &&
                  1 === u.nodeType
                )
                  for (
                    a < (i = u.childNodes).length
                      ? (r = new Zr((u = i[a]), e.getParent(u, e.isBlock)))
                      : (r = new Zr(
                          (u = i[i.length - 1]),
                          e.getParent(u, e.isBlock)
                        )).next(!0),
                      o = r.current();
                    o;
                    o = r.next()
                  )
                    if (3 === o.nodeType && !nl(o))
                      return n.setStart(o, 0), void t.setRng(n);
              },
              getNonWhiteSpaceSibling: function(e, t, n) {
                if (e)
                  for (
                    t = t ? "nextSibling" : "previousSibling", e = n ? e : e[t];
                    e;
                    e = e[t]
                  )
                    if (1 === e.nodeType || !nl(e)) return e;
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
              isWhiteSpaceNode: nl,
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
              normalizeStyleValue: rl,
              getStyle: function(e, t, n) {
                return rl(e, e.getStyle(t, n), n);
              },
              getTextDecoration: function(e, t) {
                var n;
                return (
                  e.getParent(t, function(t) {
                    return (
                      (n = e.getStyle(t, "text-decoration")) && "none" !== n
                    );
                  }),
                  n
                );
              },
              getParents: function(e, t, n) {
                return e.getParents(t, n, e.getRoot());
              }
            },
            il = el.isBookmarkNode,
            al = ol.getParents,
            ul = ol.isWhiteSpaceNode,
            sl = ol.isTextBlock,
            ll = function(e, t) {
              for (
                void 0 === t &&
                (t = 3 === e.nodeType ? e.length : e.childNodes.length);
                e && e.hasChildNodes();

              )
                (e = e.childNodes[t]) &&
                  (t = 3 === e.nodeType ? e.length : e.childNodes.length);
              return { node: e, offset: t };
            },
            cl = function(e, t) {
              for (var n = t; n; ) {
                if (1 === n.nodeType && e.getContentEditable(n))
                  return "false" === e.getContentEditable(n) ? n : t;
                n = n.parentNode;
              }
              return t;
            },
            fl = function(e, t, n, r) {
              var o,
                i,
                a = n.nodeValue;
              return (
                void 0 === r && (r = e ? a.length : 0),
                e
                  ? -1 !==
                      (o =
                        (o = a.lastIndexOf(" ", r)) >
                        (i = a.lastIndexOf(" ", r))
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
            dl = function(e, t, n, r, o, i) {
              var a, u, s, l;
              if (3 === n.nodeType) {
                if (-1 !== (s = fl(o, i, n, r)))
                  return { container: n, offset: s };
                l = n;
              }
              for (
                a = new Zr(n, e.getParent(n, e.isBlock) || t);
                (u = a[o ? "prev" : "next"]());

              )
                if (3 !== u.nodeType || il(u.parentNode)) {
                  if (e.isBlock(u) || ol.isEq(u, "BR")) break;
                } else if (((l = u), -1 !== (s = fl(o, i, u))))
                  return { container: u, offset: s };
              if (l) return { container: l, offset: (r = o ? 0 : l.length) };
            },
            hl = function(e, t, n, r, o) {
              var i, a, u, s;
              for (
                3 === r.nodeType &&
                  0 === r.nodeValue.length &&
                  r[o] &&
                  (r = r[o]),
                  i = al(e, r),
                  a = 0;
                a < i.length;
                a++
              )
                for (u = 0; u < t.length; u++)
                  if (
                    !(
                      "collapsed" in (s = t[u]) && s.collapsed !== n.collapsed
                    ) &&
                    e.is(i[a], s.selector)
                  )
                    return i[a];
              return r;
            },
            ml = function(e, t, n, r) {
              var o,
                i = e.dom,
                a = i.getRoot();
              if ((t[0].wrapper || (o = i.getParent(n, t[0].block, a)), !o)) {
                var u = i.getParent(n, "LI,TD,TH");
                o = i.getParent(
                  3 === n.nodeType ? n.parentNode : n,
                  function(t) {
                    return t !== a && sl(e, t);
                  },
                  u
                );
              }
              if (
                (o && t[0].wrapper && (o = al(i, o, "ul,ol").reverse()[0] || o),
                !o)
              )
                for (
                  o = n;
                  o[r] && !i.isBlock(o[r]) && ((o = o[r]), !ol.isEq(o, "br"));

                );
              return o || n;
            },
            gl = function(e, t, n, r, o, i, a) {
              var u, s, l, c, f, d;
              if (
                ((u = s = a ? n : o),
                (c = a ? "previousSibling" : "nextSibling"),
                (f = e.getRoot()),
                3 === u.nodeType &&
                  !ul(u) &&
                  (a ? r > 0 : i < u.nodeValue.length))
              )
                return u;
              for (;;) {
                if (!t[0].block_expand && e.isBlock(s)) return s;
                for (l = s[c]; l; l = l[c])
                  if (
                    !il(l) &&
                    !ul(l) &&
                    ("BR" !== (d = l).nodeName ||
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
            pl = function(e, t, n, r) {
              var o,
                i = t.startContainer,
                a = t.startOffset,
                u = t.endContainer,
                s = t.endOffset,
                l = e.dom;
              return (
                1 === i.nodeType &&
                  i.hasChildNodes() &&
                  3 === (i = Ua(i, a)).nodeType &&
                  (a = 0),
                1 === u.nodeType &&
                  u.hasChildNodes() &&
                  3 === (u = Ua(u, t.collapsed ? s : s - 1)).nodeType &&
                  (s = u.nodeValue.length),
                (i = cl(l, i)),
                (u = cl(l, u)),
                (il(i.parentNode) || il(i)) &&
                  ((i = il(i) ? i : i.parentNode),
                  3 ===
                    (i = t.collapsed
                      ? i.previousSibling || i
                      : i.nextSibling || i).nodeType &&
                    (a = t.collapsed ? i.length : 0)),
                (il(u.parentNode) || il(u)) &&
                  ((u = il(u) ? u : u.parentNode),
                  3 ===
                    (u = t.collapsed
                      ? u.nextSibling || u
                      : u.previousSibling || u).nodeType &&
                    (s = t.collapsed ? 0 : u.length)),
                t.collapsed &&
                  ((o = dl(l, e.getBody(), i, a, !0, r)) &&
                    ((i = o.container), (a = o.offset)),
                  (o = dl(l, e.getBody(), u, s, !1, r)) &&
                    ((u = o.container), (s = o.offset))),
                n[0].inline &&
                  (u = r
                    ? u
                    : (function(e, t) {
                        var n = ll(e, t);
                        if (n.node) {
                          for (
                            ;
                            n.node && 0 === n.offset && n.node.previousSibling;

                          )
                            n = ll(n.node.previousSibling);
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
                    (i = gl(l, n, i, a, u, s, !0)),
                  (n[0].inline &&
                    3 === u.nodeType &&
                    s !== u.nodeValue.length) ||
                    (u = gl(l, n, i, a, u, s, !1))),
                n[0].selector &&
                  !1 !== n[0].expand &&
                  !n[0].inline &&
                  ((i = hl(l, n, t, i, "previousSibling")),
                  (u = hl(l, n, t, u, "nextSibling"))),
                (n[0].block || n[0].selector) &&
                  ((i = ml(e, n, i, "previousSibling")),
                  (u = ml(e, n, u, "nextSibling")),
                  n[0].block &&
                    (l.isBlock(i) || (i = gl(l, n, i, a, u, s, !0)),
                    l.isBlock(u) || (u = gl(l, n, i, a, u, s, !1)))),
                1 === i.nodeType && ((a = l.nodeIndex(i)), (i = i.parentNode)),
                1 === u.nodeType &&
                  ((s = l.nodeIndex(u) + 1), (u = u.parentNode)),
                {
                  startContainer: i,
                  startOffset: a,
                  endContainer: u,
                  endOffset: s
                }
              );
            },
            vl = Yt.each,
            bl = {
              walk: function(e, t, n) {
                var r,
                  o,
                  i,
                  a,
                  u,
                  s,
                  l,
                  c = t.startContainer,
                  f = t.startOffset,
                  d = t.endContainer,
                  h = t.endOffset;
                if (
                  (l = e.select("td[data-mce-selected],th[data-mce-selected]"))
                    .length > 0
                )
                  vl(l, function(e) {
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
                          t === c &&
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
                    (1 === c.nodeType &&
                      c.hasChildNodes() &&
                      (c = c.childNodes[f]),
                    1 === d.nodeType &&
                      d.hasChildNodes() &&
                      ((g = h),
                      (p = (m = d).childNodes),
                      --g > p.length - 1
                        ? (g = p.length - 1)
                        : g < 0 && (g = 0),
                      (d = p[g] || m)),
                    c === d)
                  )
                    return n(v([c]));
                  for (
                    r = e.findCommonAncestor(c, d), a = c;
                    a;
                    a = a.parentNode
                  ) {
                    if (a === d) return C(c, r, !0);
                    if (a === r) break;
                  }
                  for (a = d; a; a = a.parentNode) {
                    if (a === c) return C(d, r);
                    if (a === r) break;
                  }
                  (o = y(c, r) || c),
                    (i = y(d, r) || d),
                    C(c, o, !0),
                    (s = b(
                      o === c ? o : o.nextSibling,
                      "nextSibling",
                      i === d ? i.nextSibling : i
                    )).length && n(v(s)),
                    C(d, i);
                }
              }
            },
            yl = (function(e, t) {
              var n = function(t) {
                  return e(t) ? _.from(t.dom().nodeValue) : _.none();
                },
                r = Yn.detect().browser,
                o =
                  r.isIE() && 10 === r.version.major
                    ? function(e) {
                        try {
                          return n(e);
                        } catch (e) {
                          return _.none();
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
            })(or, "text"),
            Cl = function(e) {
              return yl.get(e);
            },
            wl = function(e, t, n, r) {
              return Rr(t).fold(
                function() {
                  return "skipping";
                },
                function(o) {
                  return "br" === r ||
                    (function(e) {
                      return or(e) && "\ufeff" === Cl(e);
                    })(t)
                    ? "valid"
                    : (function(e) {
                        return rr(e) && Hi(e, Wi());
                      })(t)
                    ? "existing"
                    : Hu(t)
                    ? "caret"
                    : ol.isValid(e, n, r) && ol.isValid(e, tr(o), n)
                    ? "valid"
                    : "invalid-child";
                }
              );
            },
            xl = function(e, t, n, r) {
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
                        ++na +
                        String(i))
                    : a,
                s = (function(e, t) {
                  var n = {};
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) &&
                      t.indexOf(r) < 0 &&
                      (n[r] = e[r]);
                  if (
                    null != e &&
                    "function" == typeof Object.getOwnPropertySymbols
                  ) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                      t.indexOf(r[o]) < 0 && (n[r[o]] = e[r[o]]);
                  }
                  return n;
                })(t, ["uid"]),
                l = Jn.fromTag("span", e);
              Di(l, Wi()), hr(l, "" + Xi(), u), hr(l, "" + Ki(), n);
              var c = r(u, s),
                f = c.attributes,
                d = void 0 === f ? {} : f,
                h = c.classes,
                m = void 0 === h ? [] : h;
              return (
                mr(l, d),
                (function(e, t) {
                  F(t, function(t) {
                    Di(e, t);
                  });
                })(l, m),
                l
              );
            },
            Sl = function(e, t, n, r, o) {
              var i = [],
                a = xl(e.getDoc(), o, n, r),
                u = pi(_.none()),
                s = function() {
                  u.set(_.none());
                },
                l = function(e) {
                  F(e, c);
                },
                c = function(t) {
                  var n, r;
                  switch (wl(e, t, "span", tr(t))) {
                    case "invalid-child":
                      s();
                      var o = Hr(t);
                      l(o), s();
                      break;
                    case "valid":
                      var u = r.get().getOrThunk(function() {
                        var e = oa(a);
                        return i.push(e), r.set(_.some(e)), e;
                      });
                      xi((n = t), (r = u)), Ni(r, n);
                  }
                };
              return (
                bl.walk(e.dom, t, function(e) {
                  s(),
                    (function(e) {
                      var t = V(e, Jn.fromDom);
                      l(t);
                    })(e);
                }),
                i
              );
            },
            El = function(e, t, n, r) {
              e.undoManager.transact(function() {
                var o = e.selection.getRng();
                if (
                  (o.collapsed &&
                    (function(e, t) {
                      var n = pl(
                        e,
                        t,
                        [{ inline: !0 }],
                        (function(e) {
                          return (
                            3 === e.startContainer.nodeType &&
                            e.startContainer.nodeValue.length >=
                              e.startOffset &&
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
                  var i = xl(e.getDoc(), r, t, n.decorate);
                  aa(i, " "),
                    e.selection.getRng().insertNode(i.dom()),
                    e.selection.select(i.dom());
                } else {
                  var a = Pu.getPersistentBookmark(e.selection, !1),
                    u = e.selection.getRng();
                  Sl(e, u, t, n.decorate, r), e.selection.moveToBookmark(a);
                }
              });
            };
          function Nl(e) {
            var t = ea();
            Zi(e, t);
            var n = Qi(e, t);
            return {
              register: function(e, n) {
                t.register(e, n);
              },
              annotate: function(n, r) {
                t.lookup(n).each(function(t) {
                  El(e, n, t, r);
                });
              },
              annotationChanged: function(e, t) {
                n.addListener(e, t);
              },
              remove: function(t) {
                Yi(e, _.some(t)).each(function(e) {
                  var t = e.elements;
                  F(t, _i);
                });
              },
              getAll: function(t) {
                var n = Ji(e, t);
                return sr(n, function(e) {
                  return V(e, function(e) {
                    return e.dom();
                  });
                });
              }
            };
          }
          var zl,
            kl = Object.prototype.hasOwnProperty,
            Tl = ((zl = function(e, t) {
              return t;
            }),
            function() {
              for (
                var e = new Array(arguments.length), t = 0;
                t < e.length;
                t++
              )
                e[t] = arguments[t];
              if (0 === e.length) throw new Error("Can't merge zero objects");
              for (var n = {}, r = 0; r < e.length; r++) {
                var o = e[r];
                for (var i in o) kl.call(o, i) && (n[i] = zl(n[i], o[i]));
              }
              return n;
            }),
            _l = /^[ \t\r\n]*$/,
            Al = {
              "#text": 3,
              "#comment": 8,
              "#cdata": 4,
              "#pi": 7,
              "#doctype": 10,
              "#document-fragment": 11
            },
            Bl = function(e, t, n) {
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
            Rl = (function() {
              function e(e, t) {
                (this.name = e),
                  (this.type = t),
                  1 === t &&
                    ((this.attributes = []), (this.attributes.map = {}));
              }
              return (
                (e.create = function(t, n) {
                  var r, o;
                  if (((r = new e(t, Al[t] || 1)), n))
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
                  for (t = this.firstChild; t; t = Bl(t, this))
                    t.name === e && n.push(t);
                  return n;
                }),
                (e.prototype.empty = function() {
                  var e, t, n;
                  if (this.firstChild) {
                    for (e = [], n = this.firstChild; n; n = Bl(n, this))
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
                        if (i.attributes.map["data-mce-bogus"]) continue;
                        if (e[i.name]) return !1;
                        for (r = i.attributes.length; r--; )
                          if (
                            "name" === (o = i.attributes[r].name) ||
                            0 === o.indexOf("data-mce-bookmark")
                          )
                            return !1;
                      }
                      if (8 === i.type) return !1;
                      if (3 === i.type && !_l.test(i.value)) return !1;
                      if (
                        3 === i.type &&
                        i.parent &&
                        t[i.parent.name] &&
                        _l.test(i.value)
                      )
                        return !1;
                      if (n && n(i)) return !1;
                    } while ((i = Bl(i, this)));
                  return !0;
                }),
                (e.prototype.walk = function(e) {
                  return Bl(this, null, e);
                }),
                e
              );
            })(),
            Ml = function(e) {
              return 0 === e.indexOf("data-") || 0 === e.indexOf("aria-");
            },
            Ol = function(e) {
              return e.replace(/<!--|-->/g, "");
            },
            Dl = function(e, t) {
              return (
                !e.allow_html_data_urls &&
                (/^data:image\//i.test(t)
                  ? !1 === e.allow_svg_data_urls &&
                    /^data:image\/svg\+xml/i.test(t)
                  : /^data:/i.test(t))
              );
            },
            Pl = function(e, t, n) {
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
            Hl = function(e, t) {
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
          function Ll(e, t) {
            void 0 === t && (t = Qo());
            var n = function() {};
            !1 !== (e = e || {}).fix_self_closing && (e.fix_self_closing = !0);
            var r = e.comment ? e.comment : n,
              o = e.cdata ? e.cdata : n,
              i = e.text ? e.text : n,
              a = e.start ? e.start : n,
              u = e.end ? e.end : n,
              s = e.pi ? e.pi : n,
              l = e.doctype ? e.doctype : n;
            return {
              parse: function(n) {
                var c,
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
                  S,
                  E,
                  N,
                  z,
                  k,
                  T,
                  _,
                  A,
                  B,
                  R,
                  M,
                  O,
                  D,
                  P,
                  H,
                  L,
                  I = 0,
                  V = [],
                  F = 0,
                  U = Fo.decode,
                  j = Yt.makeMap(
                    "src,href,data,background,formaction,poster,xlink:href"
                  ),
                  q = /((java|vb)script|mhtml):/i,
                  $ = function(e) {
                    var t, n;
                    for (t = V.length; t-- && V[t].name !== e; );
                    if (t >= 0) {
                      for (n = V.length - 1; n >= t; n--)
                        (e = V[n]).valid && u(e.name);
                      V.length = t;
                    }
                  },
                  W = function(t, n, r, o, i) {
                    var a, u;
                    if (
                      ((r =
                        (n = n.toLowerCase()) in C ? n : U(r || o || i || "")),
                      x && !v && !1 === Ml(n))
                    ) {
                      if (!(a = k[n]) && T) {
                        for (
                          u = T.length;
                          u-- && !(a = T[u]).pattern.test(n);

                        );
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
                      if (Dl(e, s)) return;
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
                    M = e.self_closing_elements || t.getSelfClosingElements(),
                    C = t.getBoolAttrs(),
                    x = e.validate,
                    b = e.remove_internals,
                    L = e.fix_self_closing,
                    P = t.getSpecialElements(),
                    R = n + ">";
                  (c = O.exec(R));

                ) {
                  if (
                    (I < c.index && i(U(n.substr(I, c.index - I))), (f = c[6]))
                  )
                    ":" === (f = f.toLowerCase()).charAt(0) &&
                      (f = f.substr(1)),
                      $(f);
                  else if ((f = c[7])) {
                    if (c.index + c[0].length > n.length) {
                      i(U(n.substr(c.index))), (I = c.index + c[0].length);
                      continue;
                    }
                    ":" === (f = f.toLowerCase()).charAt(0) &&
                      (f = f.substr(1)),
                      (w = f in y),
                      L &&
                        M[f] &&
                        V.length > 0 &&
                        V[V.length - 1].name === f &&
                        $(f);
                    var K = Hl(D, c[8]);
                    if (null !== K) {
                      if ("all" === K) {
                        (I = Pl(t, n, O.lastIndex)), (O.lastIndex = I);
                        continue;
                      }
                      E = !1;
                    }
                    if (!x || (S = t.getElementRule(f))) {
                      if (
                        ((E = !0),
                        x && ((k = S.attributes), (T = S.attributePatterns)),
                        (z = c[8])
                          ? ((v = -1 !== z.indexOf("data-mce-type")) &&
                              b &&
                              (E = !1),
                            ((h = []).map = {}),
                            z.replace(D, W))
                          : ((h = []).map = {}),
                        x && !v)
                      ) {
                        if (
                          ((_ = S.attributesRequired),
                          (A = S.attributesDefault),
                          (B = S.attributesForced),
                          S.removeEmptyAttrs && !h.length && (E = !1),
                          B)
                        )
                          for (m = B.length; m--; )
                            (p = (N = B[m]).name),
                              "{$uid}" === (H = N.value) && (H = "mce_" + F++),
                              (h.map[p] = H),
                              h.push({ name: p, value: H });
                        if (A)
                          for (m = A.length; m--; )
                            (p = (N = A[m]).name) in h.map ||
                              ("{$uid}" === (H = N.value) && (H = "mce_" + F++),
                              (h.map[p] = H),
                              h.push({ name: p, value: H }));
                        if (_) {
                          for (m = _.length; m-- && !(_[m] in h.map); );
                          -1 === m && (E = !1);
                        }
                        if ((N = h.map["data-mce-bogus"])) {
                          if ("all" === N) {
                            (I = Pl(t, n, O.lastIndex)), (O.lastIndex = I);
                            continue;
                          }
                          E = !1;
                        }
                      }
                      E && a(f, h, w);
                    } else E = !1;
                    if ((d = P[f])) {
                      (d.lastIndex = I = c.index + c[0].length),
                        (c = d.exec(n))
                          ? (E && (g = n.substr(I, c.index - I)),
                            (I = c.index + c[0].length))
                          : ((g = n.substr(I)), (I = n.length)),
                        E && (g.length > 0 && i(g, !0), u(f)),
                        (O.lastIndex = I);
                      continue;
                    }
                    w ||
                      (z && z.indexOf("/") === z.length - 1
                        ? E && u(f)
                        : V.push({ name: f, valid: E }));
                  } else
                    (f = c[1])
                      ? (">" === f.charAt(0) && (f = " " + f),
                        e.allow_conditional_comments ||
                          "[if" !== f.substr(0, 3).toLowerCase() ||
                          (f = " " + f),
                        r(f))
                      : (f = c[2])
                      ? o(Ol(f))
                      : (f = c[3])
                      ? l(f)
                      : (f = c[4]) && s(f, c[5]);
                  I = c.index + c[0].length;
                }
                for (
                  I < n.length && i(U(n.substr(I))), m = V.length - 1;
                  m >= 0;
                  m--
                )
                  (f = V[m]).valid && u(f.name);
              }
            };
          }
          !(function(e) {
            e.findEndTag = Pl;
          })(Ll || (Ll = {}));
          var Il = Ll,
            Vl = function(e, t) {
              var n,
                r,
                o,
                i,
                a,
                u = t,
                s = /<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,
                l = e.schema;
              for (
                u = (function(e, t) {
                  var n = new RegExp(
                    ["\\s?(" + e.join("|") + ')="[^"]+"'].join("|"),
                    "gi"
                  );
                  return t.replace(n, "");
                })(e.getTempAttrs(), u),
                  a = l.getShortEndedElements();
                (i = s.exec(u));

              )
                (r = s.lastIndex),
                  (o = i[0].length),
                  (n = a[i[1]] ? r : Il.findEndTag(l, u, r)),
                  (u = u.substring(0, r - o) + u.substring(n)),
                  (s.lastIndex = r - o);
              return la(u);
            },
            Fl = { trimExternal: Vl, trimInternal: Vl },
            Ul = function(e, t, n) {
              var r = e.getParam(t, n);
              if (-1 !== r.indexOf("=")) {
                var o = e.getParam(t, "", "hash");
                return o.hasOwnProperty(e.id) ? o[e.id] : n;
              }
              return r;
            },
            jl = {
              getIframeAttrs: function(e) {
                return e.getParam("iframe_attrs", {});
              },
              getDocType: function(e) {
                return e.getParam("doctype", "<!DOCTYPE html>");
              },
              getDocumentBaseUrl: function(e) {
                return e.getParam("document_base_url", "");
              },
              getBodyId: function(e) {
                return Ul(e, "body_id", "tinymce");
              },
              getBodyClass: function(e) {
                return Ul(e, "body_class", "");
              },
              getContentSecurityPolicy: function(e) {
                return e.getParam("content_security_policy", "");
              },
              shouldPutBrInPre: function(e) {
                return e.getParam("br_in_pre", !0);
              },
              getForcedRootBlock: function(e) {
                if (e.getParam("force_p_newlines", !1)) return "p";
                var t = e.getParam("forced_root_block", "p");
                return !1 === t ? "" : !0 === t ? "p" : t;
              },
              getForcedRootBlockAttrs: function(e) {
                return e.getParam("forced_root_block_attrs", {});
              },
              getBrNewLineSelector: function(e) {
                return e.getParam(
                  "br_newline_selector",
                  ".mce-toc h2,figcaption,caption"
                );
              },
              getNoNewLineSelector: function(e) {
                return e.getParam("no_newline_selector", "");
              },
              shouldKeepStyles: function(e) {
                return e.getParam("keep_styles", !0);
              },
              shouldEndContainerOnEmptyBlock: function(e) {
                return e.getParam("end_container_on_empty_block", !1);
              },
              getFontStyleValues: function(e) {
                return Yt.explode(e.getParam("font_size_style_values", ""));
              },
              getFontSizeClasses: function(e) {
                return Yt.explode(e.getParam("font_size_classes", ""));
              },
              getImagesDataImgFilter: function(e) {
                return e.getParam("images_dataimg_filter", i(!0), "function");
              },
              isAutomaticUploadsEnabled: function(e) {
                return e.getParam("automatic_uploads", !0, "boolean");
              },
              shouldReuseFileName: function(e) {
                return e.getParam("images_reuse_filename", !1, "boolean");
              },
              shouldReplaceBlobUris: function(e) {
                return e.getParam("images_replace_blob_uris", !0, "boolean");
              },
              getImageUploadUrl: function(e) {
                return e.getParam("images_upload_url", "", "string");
              },
              getImageUploadBasePath: function(e) {
                return e.getParam("images_upload_base_path", "", "string");
              },
              getImagesUploadCredentials: function(e) {
                return e.getParam("images_upload_credentials", !1, "boolean");
              },
              getImagesUploadHandler: function(e) {
                return e.getParam("images_upload_handler", null, "function");
              },
              shouldUseContentCssCors: function(e) {
                return e.getParam("content_css_cors", !1, "boolean");
              },
              getLanguageCode: function(e) {
                return e.getParam("language", "en", "string");
              },
              getLanguageUrl: function(e) {
                return e.getParam("language_url", "", "string");
              },
              shouldIndentUseMargin: function(e) {
                return e.getParam("indent_use_margin", !1);
              },
              getIndentation: function(e) {
                return e.getParam("indentation", "40px", "string");
              },
              getContentCss: function(e) {
                var t = e.settings.content_css;
                return B(t)
                  ? V(t.split(","), Fn)
                  : M(t)
                  ? t
                  : !1 === t || e.inline
                  ? []
                  : ["default"];
              }
            },
            ql = function(e, t, n) {
              var r;
              if (
                ((t.format = t.format ? t.format : "html"),
                (t.get = !0),
                (t.getInner = !0),
                t.no_events || e.fire("BeforeGetContent", t),
                "raw" === t.format)
              )
                r = Yt.trim(Fl.trimExternal(e.serializer, n.innerHTML));
              else if ("text" === t.format)
                r = la(n.innerText || n.textContent);
              else {
                if ("tree" === t.format) return e.serializer.serialize(n, t);
                r = (function(e, t) {
                  var n = jl.getForcedRootBlock(e),
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
                "text" === t.format || go(Jn.fromDom(n))
                  ? (t.content = r)
                  : (t.content = Yt.trim(r)),
                t.no_events || e.fire("GetContent", t),
                t.content
              );
            },
            $l = Yt.makeMap;
          function Wl(e) {
            var t,
              n,
              r,
              o,
              i,
              a = [];
            return (
              (t = (e = e || {}).indent),
              (n = $l(e.indent_before || "")),
              (r = $l(e.indent_after || "")),
              (o = Fo.getEncodeFunc(e.entity_encoding || "raw", e.entities)),
              (i = "html" === e.element_format),
              {
                start: function(e, u, s) {
                  var l, c, f, d;
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
                    for (l = 0, c = u.length; l < c; l++)
                      (f = u[l]),
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
          }
          function Kl(e, t) {
            void 0 === t && (t = Qo());
            var n = Wl(e);
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
                      l,
                      c,
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
                          (l = m.attributesOrder[d]) in s.map &&
                            ((c = s.map[l]),
                            (f.map[l] = c),
                            f.push({ name: l, value: c }));
                        for (d = 0, h = s.length; d < h; d++)
                          (l = s[d].name) in f.map ||
                            ((c = s.map[l]),
                            (f.map[l] = c),
                            f.push({ name: l, value: c }));
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
          }
          var Xl = function(e, t) {
              t(e),
                e.firstChild && Xl(e.firstChild, t),
                e.next && Xl(e.next, t);
            },
            Yl = function(e, t, n) {
              var r = (function(e, t, n) {
                var r = {},
                  o = {},
                  i = [];
                for (var a in (n.firstChild &&
                  Xl(n.firstChild, function(n) {
                    F(e, function(e) {
                      e.name === n.name &&
                        (r[e.name]
                          ? r[e.name].nodes.push(n)
                          : (r[e.name] = { filter: e, nodes: [n] }));
                    }),
                      F(t, function(e) {
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
              F(r, function(e) {
                F(e.filter.callbacks, function(t) {
                  t(e.nodes, e.filter.name, {});
                });
              });
            },
            Gl = function(e) {
              var t = Br(e).dom();
              return e.dom() === t.activeElement;
            },
            Jl = function(e) {
              return ((t = Br(e)),
              (r = void 0 !== t ? t.dom() : n.document),
              _.from(r.activeElement).map(Jn.fromDom)).filter(function(t) {
                return e.dom().contains(t.dom());
              });
              var t, r;
            },
            Ql = function(e) {
              if (!M(e)) throw new Error("cases must be an array");
              if (0 === e.length)
                throw new Error("there must be at least one case");
              var t = [],
                n = {};
              return (
                F(e, function(r, o) {
                  var i = ir(r);
                  if (1 !== i.length)
                    throw new Error("one and only one name per case");
                  var a = i[0],
                    u = r[a];
                  if (void 0 !== n[a])
                    throw new Error("duplicate key detected:" + a);
                  if ("cata" === a)
                    throw new Error("cannot have a case named cata (sorry)");
                  if (!M(u)) throw new Error("case arguments must be an array");
                  t.push(a),
                    (n[a] = function() {
                      var n = arguments.length;
                      if (n !== u.length)
                        throw new Error(
                          "Wrong number of arguments to case " +
                            a +
                            ". Expected " +
                            u.length +
                            " (" +
                            u +
                            "), got " +
                            n
                        );
                      for (var r = new Array(n), i = 0; i < r.length; i++)
                        r[i] = arguments[i];
                      return {
                        fold: function() {
                          if (arguments.length !== e.length)
                            throw new Error(
                              "Wrong number of arguments to fold. Expected " +
                                e.length +
                                ", got " +
                                arguments.length
                            );
                          return arguments[o].apply(null, r);
                        },
                        match: function(e) {
                          var n = ir(e);
                          if (t.length !== n.length)
                            throw new Error(
                              "Wrong number of arguments to match. Expected: " +
                                t.join(",") +
                                "\nActual: " +
                                n.join(",")
                            );
                          if (
                            !G(t, function(e) {
                              return I(n, e);
                            })
                          )
                            throw new Error(
                              "Not all branches were specified when using match. Specified: " +
                                n.join(", ") +
                                "\nRequired: " +
                                t.join(", ")
                            );
                          return e[a].apply(null, r);
                        },
                        log: function(e) {
                          console.log(e, {
                            constructors: t,
                            constructor: a,
                            params: r
                          });
                        }
                      };
                    });
                }),
                n
              );
            },
            Zl = (Ql([
              { before: ["element"] },
              { on: ["element", "offset"] },
              { after: ["element"] }
            ]),
            Ql([
              { domRange: ["rng"] },
              { relative: ["startSitu", "finishSitu"] },
              { exact: ["start", "soffset", "finish", "foffset"] }
            ])),
            ec = Cr("start", "soffset", "finish", "foffset"),
            tc = (Zl.domRange, Zl.relative, Zl.exact, Yn.detect().browser),
            nc = function(e, t) {
              var n = or(t) ? Cl(t).length : Hr(t).length + 1;
              return e > n ? n : e < 0 ? 0 : e;
            },
            rc = function(e) {
              return ec(
                e.start(),
                nc(e.soffset(), e.start()),
                e.finish(),
                nc(e.foffset(), e.finish())
              );
            },
            oc = function(e, t) {
              return Ar(e, t) || _r(e, t);
            },
            ic = function(e) {
              return function(t) {
                return oc(e, t.start()) && oc(e, t.finish());
              };
            },
            ac = function(e) {
              return !0 === e.inline || tc.isIE();
            },
            uc = function(e) {
              return ec(
                Jn.fromDom(e.startContainer),
                e.startOffset,
                Jn.fromDom(e.endContainer),
                e.endOffset
              );
            },
            sc = function(e) {
              var t = e.getSelection();
              return (t && 0 !== t.rangeCount
                ? _.from(t.getRangeAt(0))
                : _.none()
              ).map(uc);
            },
            lc = function(e) {
              var t,
                n = ((t = e.dom().ownerDocument.defaultView), Jn.fromDom(t));
              return sc(n.dom()).filter(ic(e));
            },
            cc = function(e, t) {
              return _.from(t)
                .filter(ic(e))
                .map(rc);
            },
            fc = function(e) {
              var t = n.document.createRange();
              try {
                return (
                  t.setStart(e.start().dom(), e.soffset()),
                  t.setEnd(e.finish().dom(), e.foffset()),
                  _.some(t)
                );
              } catch (e) {
                return _.none();
              }
            },
            dc = function(e) {
              return (e.bookmark ? e.bookmark : _.none())
                .bind(u(cc, Jn.fromDom(e.getBody())))
                .bind(fc);
            },
            hc = {
              store: function(e) {
                var t = ac(e) ? lc(Jn.fromDom(e.getBody())) : _.none();
                e.bookmark = t.isSome() ? t : e.bookmark;
              },
              storeNative: function(e, t) {
                var n = Jn.fromDom(e.getBody()),
                  r = (ac(e) ? _.from(t) : _.none()).map(uc).filter(ic(n));
                e.bookmark = r.isSome() ? r : e.bookmark;
              },
              readRange: sc,
              restore: function(e) {
                dc(e).each(function(t) {
                  e.selection.setRng(t);
                });
              },
              getRng: dc,
              getBookmark: lc,
              validate: cc
            },
            mc = function(e, t) {
              return (function(e) {
                return e.collapsed
                  ? _.from(Ua(e.startContainer, e.startOffset)).map(Jn.fromDom)
                  : _.none();
              })(t).bind(function(t) {
                return ho(t)
                  ? _.some(t)
                  : !1 === Ar(e, t)
                  ? _.some(e)
                  : _.none();
              });
            },
            gc = function(e, t) {
              mc(Jn.fromDom(e.getBody()), t)
                .bind(function(e) {
                  return Ws.firstPositionIn(e.dom());
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
            pc = function(e) {
              if (e.setActive)
                try {
                  e.setActive();
                } catch (t) {
                  e.focus();
                }
              else e.focus();
            },
            vc = function(e) {
              var t,
                n = e.getBody();
              return n && ((t = Jn.fromDom(n)), Gl(t) || Jl(t).isSome());
            },
            bc = function(e) {
              return e.inline
                ? vc(e)
                : (function(e) {
                    return e.iframeElement && Gl(Jn.fromDom(e.iframeElement));
                  })(e);
            },
            yc = function(e) {
              return e.editorManager.setActive(e);
            },
            Cc = function(e, t) {
              e.removed ||
                (t
                  ? yc(e)
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
                      if (e.$.contains(n, o))
                        return pc(o), gc(e, r), void yc(e);
                      void 0 !== e.bookmark &&
                        !1 === bc(e) &&
                        hc.getRng(e).each(function(t) {
                          e.selection.setRng(t), (r = t);
                        }),
                        e.inline || (fe.opera || pc(n), e.getWin().focus()),
                        (fe.gecko || e.inline) && (pc(n), gc(e, r)),
                        yc(e);
                    })(e));
            },
            wc = bc,
            xc = function(e) {
              return e instanceof Rl;
            },
            Sc = function(e, t) {
              e.dom.setHTML(e.getBody(), t),
                (function(e) {
                  wc(e) &&
                    Ws.firstPositionIn(e.getBody()).each(function(t) {
                      var n = t.getNode(),
                        r = ko.isTable(n) ? Ws.firstPositionIn(n).getOr(t) : t;
                      e.selection.setRng(r.toRange());
                    });
                })(e);
            },
            Ec = function(e, t, n) {
              return (
                void 0 === n && (n = {}),
                (n.format = n.format ? n.format : "html"),
                (n.set = !0),
                (n.content = xc(t) ? "" : t),
                xc(t) ||
                  n.no_events ||
                  (e.fire("BeforeSetContent", n), (t = n.content)),
                _.from(e.getBody()).fold(i(t), function(r) {
                  return xc(t)
                    ? (function(e, t, n, r) {
                        Yl(
                          e.parser.getNodeFilters(),
                          e.parser.getAttributeFilters(),
                          n
                        );
                        var o = Kl(
                          { validate: e.validate },
                          e.schema
                        ).serialize(n);
                        return (
                          (r.content = go(Jn.fromDom(t)) ? o : Yt.trim(o)),
                          Sc(e, r.content),
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
                              (o = jl.getForcedRootBlock(e)) &&
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
                              Sc(e, n),
                              e.fire("SetContent", r))
                            : ("raw" !== r.format &&
                                (n = Kl(
                                  { validate: e.validate },
                                  e.schema
                                ).serialize(
                                  e.parser.parse(n, {
                                    isRootContent: !0,
                                    insert: !0
                                  })
                                )),
                              (r.content = go(Jn.fromDom(t)) ? n : Yt.trim(n)),
                              Sc(e, r.content),
                              r.no_events || e.fire("SetContent", r)),
                          r.content
                        );
                      })(e, r, t, n);
                })
              );
            },
            Nc = function(e, t) {
              return e.fire("PreProcess", t);
            },
            zc = function(e, t) {
              return e.fire("PostProcess", t);
            },
            kc = function(e) {
              return e.fire("remove");
            },
            Tc = function(e) {
              return e.fire("detach");
            },
            _c = function(e, t) {
              return e.fire("SwitchMode", { mode: t });
            },
            Ac = function(e, t, n, r) {
              e.fire("ObjectResizeStart", { target: t, width: n, height: r });
            },
            Bc = function(e, t, n, r) {
              e.fire("ObjectResized", { target: t, width: n, height: r });
            },
            Rc = ci.DOM,
            Mc = function(e) {
              return _.from(e).each(function(e) {
                return e.destroy();
              });
            },
            Oc = function(e) {
              if (!e.removed) {
                var t = e._selectionOverrides,
                  n = e.editorUpload,
                  r = e.getBody(),
                  o = e.getElement();
                r && e.save({ is_removing: !0 }),
                  (e.removed = !0),
                  e.unbindAllNativeEvents(),
                  e.hasHiddenInput && o && Rc.remove(o.nextSibling),
                  !e.inline &&
                    r &&
                    (function(e) {
                      Rc.setStyle(e.id, "display", e.orgDisplay);
                    })(e),
                  kc(e),
                  e.editorManager.remove(e),
                  Tc(e),
                  Rc.remove(e.getContainer()),
                  Mc(t),
                  Mc(n),
                  e.destroy();
              }
            },
            Dc = function(e, t) {
              var n = e.selection,
                r = e.dom;
              e.destroyed ||
                (t || e.removed
                  ? (t ||
                      (e.editorManager.off("beforeunload", e._beforeUnload),
                      e.theme && e.theme.destroy && e.theme.destroy(),
                      Mc(n),
                      Mc(r)),
                    (function(e) {
                      var t = e.formElement;
                      t &&
                        (t._mceOldSubmit &&
                          ((t.submit = t._mceOldSubmit),
                          (t._mceOldSubmit = null)),
                        Rc.unbind(t, "submit reset", e.formEventDelegate));
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
            Pc = Cr("sections", "settings"),
            Hc = Yn.detect(),
            Lc = Hc.deviceType.isTouch(),
            Ic = Hc.deviceType.isPhone(),
            Vc = ["lists", "autolink", "autosave"],
            Fc = Ic ? { theme: "mobile" } : {},
            Uc = function(e) {
              var t = M(e) ? e.join(" ") : e,
                n = V(B(t) ? t.split(" ") : [], Fn);
              return j(n, function(e) {
                return e.length > 0;
              });
            },
            jc = function(e, t) {
              var n,
                r,
                o,
                i = ((n = function(t, n) {
                  return I(e, n);
                }),
                (r = {}),
                (o = {}),
                ur(t, function(e, t) {
                  (n(e, t) ? r : o)[t] = e;
                }),
                { t: r, f: o });
              return Pc(i.t, i.f);
            },
            qc = function(e, t) {
              var n = t.external_plugins ? t.external_plugins : {};
              return e && e.external_plugins
                ? Yt.extend({}, e.external_plugins, n)
                : n;
            },
            $c = function(e, t, n, r) {
              var o = Uc(n.forced_plugins),
                i = Uc(r.plugins),
                a = (function(e, t) {
                  return [].concat(Uc(e)).concat(Uc(t));
                })(
                  o,
                  e &&
                    (function(e, t) {
                      return e.sections().hasOwnProperty(t);
                    })(t, "mobile")
                    ? (function(e) {
                        return j(e, u(I, Vc));
                      })(i)
                    : i
                );
              return Yt.extend(r, { plugins: a.join(" ") });
            },
            Wc = function(e, t, n, r) {
              var o = jc(["mobile"], r),
                i = Yt.extend(
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
                        return Yt.extend({}, n, o);
                      })(o, "mobile", Fc)
                    : {},
                  { validate: !0, external_plugins: qc(n, o.settings()) }
                );
              return $c(e, o, n, i);
            },
            Kc = function(e, t, n) {
              return _.from(t.settings[n]).filter(e);
            },
            Xc = u(Kc, B),
            Yc = function(e, t, n, r) {
              var o,
                i = t in e.settings ? e.settings[t] : n;
              return "hash" === r
                ? (function(e) {
                    var t = {};
                    return (
                      "string" == typeof e
                        ? F(
                            e.indexOf("=") > 0
                              ? e.split(/[;,](?![^=;,]*(?:[;,]|$))/)
                              : e.split(","),
                            function(e) {
                              var n = e.split("=");
                              n.length > 1
                                ? (t[Yt.trim(n[0])] = Yt.trim(n[1]))
                                : (t[Yt.trim(n[0])] = Yt.trim(n));
                            }
                          )
                        : (t = e),
                      t
                    );
                  })(i)
                : "string" === r
                ? Kc(B, e, t).getOr(n)
                : "number" === r
                ? Kc(H, e, t).getOr(n)
                : "boolean" === r
                ? Kc(D, e, t).getOr(n)
                : "object" === r
                ? Kc(R, e, t).getOr(n)
                : "array" === r
                ? Kc(M, e, t).getOr(n)
                : "string[]" === r
                ? Kc(
                    ((o = B),
                    function(e) {
                      return M(e) && G(e, o);
                    }),
                    e,
                    t
                  ).getOr(n)
                : "function" === r
                ? Kc(P, e, t).getOr(n)
                : i;
            },
            Gc = function(e, t) {
              return t.dom()[e];
            },
            Jc = function(e, t) {
              return parseInt(vr(t, e), 10);
            },
            Qc = u(Gc, "clientWidth"),
            Zc = u(Gc, "clientHeight"),
            ef = u(Jc, "margin-top"),
            tf = u(Jc, "margin-left"),
            nf = {
              isXYInContentArea: function(e, t, n) {
                var r,
                  o = Jn.fromDom(e.getBody()),
                  i = e.inline
                    ? o
                    : ((r = o),
                      Jn.fromDom(r.dom().ownerDocument.documentElement)),
                  a = (function(e, t, n, r) {
                    var o = (function(e) {
                      return e.dom().getBoundingClientRect();
                    })(t);
                    return {
                      x: n - (e ? o.left + t.dom().clientLeft + tf(t) : 0),
                      y: r - (e ? o.top + t.dom().clientTop + ef(t) : 0)
                    };
                  })(e.inline, i, t, n);
                return (function(e, t, n) {
                  var r = Qc(e),
                    o = Zc(e);
                  return t >= 0 && n >= 0 && t <= r && n <= o;
                })(i, a.x, a.y);
              },
              isEditorAttachedToDom: function(e) {
                var t,
                  n = e.inline ? e.getBody() : e.getContentAreaContainer();
                return ((t = n), _.from(t).map(Jn.fromDom))
                  .map(function(e) {
                    return Ar(Br(e), e);
                  })
                  .getOr(!1);
              }
            };
          function rf(e) {
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
                W(t, function(t) {
                  return t === e;
                }).each(function(e) {
                  t.splice(e, 1);
                });
              },
              i = function(i) {
                if (!e.removed && nf.isEditorAttachedToDom(e))
                  return $(t, function(e) {
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
                  t && i({ text: t, type: "warning", timeout: 0 });
                }),
                  e.on("ResizeEditor ResizeWindow NodeChange", function() {
                    pe.requestAnimationFrame(r);
                  }),
                  e.on("remove", function() {
                    F(t.slice(), function(e) {
                      n().close(e);
                    });
                  });
              })(e),
              {
                open: i,
                close: function() {
                  _.from(t[0]).each(function(e) {
                    n().close(e), o(e), r();
                  });
                },
                getNotifications: function() {
                  return t;
                }
              }
            );
          }
          function of(e) {
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
                    (t = j(t, function(e) {
                      return e !== n;
                    })).length && e.focus();
              };
            return (
              e.on("remove", function() {
                F(t, function(e) {
                  n().close(e);
                });
              }),
              {
                open: function(t, r) {
                  e.editorManager.setActive(e), hc.store(e);
                  var a = n().open(t, r, i);
                  return o(a), a;
                },
                alert: function(e, t, o) {
                  n().alert(e, r(o || this, t));
                },
                confirm: function(e, t, o) {
                  n().confirm(e, r(o || this, t));
                },
                close: function() {
                  _.from(t[t.length - 1]).each(function(e) {
                    n().close(e), i(e);
                  });
                }
              }
            );
          }
          var af,
            uf = wi.PluginManager,
            sf = function(e, t) {
              var n = (function(e, t) {
                for (var n in uf.urls)
                  if (uf.urls[n] + "/plugin" + t + ".js" === e) return n;
                return null;
              })(t, e.suffix);
              return n
                ? yi.translate([
                    "Failed to load plugin: {0} from url {1}",
                    n,
                    t
                  ])
                : yi.translate(["Failed to load plugin url: {0}", t]);
            },
            lf = function(e, t) {
              e.notificationManager.open({ type: "error", text: t });
            },
            cf = function(e, t) {
              e._skinLoaded
                ? lf(e, t)
                : e.on("SkinLoaded", function() {
                    lf(e, t);
                  });
            },
            ff = function(e) {
              for (var t = [], r = 1; r < arguments.length; r++)
                t[r - 1] = arguments[r];
              var o = n.window.console;
              o &&
                (o.error
                  ? o.error.apply(o, arguments)
                  : o.log.apply(o, arguments));
            },
            df = {
              pluginLoadError: function(e, t) {
                cf(e, sf(e, t));
              },
              pluginInitError: function(e, t, n) {
                var r = yi.translate(["Failed to initialize plugin: {0}", t]);
                ff(r, n), cf(e, r);
              },
              uploadError: function(e, t) {
                cf(e, yi.translate(["Failed to upload image: {0}", t]));
              },
              displayError: cf,
              initError: ff
            },
            hf = ((af = {}),
            {
              add: function(e, t) {
                af[e] = t;
              },
              get: function(e) {
                return af[e] ? af[e] : { icons: {} };
              }
            }),
            mf = wi.PluginManager,
            gf = wi.ThemeManager;
          function pf() {
            return new (oe.getOrDie("XMLHttpRequest"))();
          }
          function vf(e, t) {
            var r = {},
              o = function(e, r, o, i) {
                var a, u;
                (a = pf()).open("POST", t.url),
                  (a.withCredentials = t.credentials),
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
                    var e, n, i;
                    a.status < 200 || a.status >= 300
                      ? o("HTTP Error: " + a.status)
                      : (e = JSON.parse(a.responseText)) &&
                        "string" == typeof e.location
                      ? r(
                          ((n = t.basePath),
                          (i = e.location),
                          n
                            ? n.replace(/\/$/, "") + "/" + i.replace(/^\//, "")
                            : i)
                        )
                      : o("Invalid JSON: " + a.responseText);
                  }),
                  (u = new n.FormData()).append("file", e.blob(), e.filename()),
                  a.send(u);
              },
              i = function(e, t) {
                return { url: t, blobInfo: e, status: !0 };
              },
              a = function(e, t) {
                return { url: "", blobInfo: e, status: !1, error: t };
              },
              u = function(e, t) {
                Yt.each(r[e], function(e) {
                  e(t);
                }),
                  delete r[e];
              },
              s = function(n, o) {
                return (
                  (n = Yt.grep(n, function(t) {
                    return !e.isUploaded(t.blobUri());
                  })),
                  de.all(
                    Yt.map(n, function(n) {
                      return e.isPending(n.blobUri())
                        ? (function(e) {
                            var t = e.blobUri();
                            return new de(function(e) {
                              (r[t] = r[t] || []), r[t].push(e);
                            });
                          })(n)
                        : (function(t, n, r) {
                            return (
                              e.markPending(t.blobUri()),
                              new de(function(o) {
                                var s;
                                try {
                                  var l = function() {
                                    s && s.close();
                                  };
                                  n(
                                    t,
                                    function(n) {
                                      l(),
                                        e.markUploaded(t.blobUri(), n),
                                        u(t.blobUri(), i(t, n)),
                                        o(i(t, n));
                                    },
                                    function(n) {
                                      l(),
                                        e.removeFailed(t.blobUri()),
                                        u(t.blobUri(), a(t, n)),
                                        o(a(t, n));
                                    },
                                    function(e) {
                                      e < 0 ||
                                        e > 100 ||
                                        (s || (s = r()),
                                        s.progressBar.value(e));
                                    }
                                  );
                                } catch (e) {
                                  o(a(t, e.message));
                                }
                              })
                            );
                          })(n, t.handler, o);
                    })
                  )
                );
              };
            return (
              !1 === P(t.handler) && (t.handler = o),
              {
                upload: function(e, n) {
                  return t.url || t.handler !== o
                    ? s(e, n)
                    : new de(function(e) {
                        e([]);
                      });
                }
              }
            );
          }
          var bf = function(e) {
              return oe.getOrDie("atob")(e);
            },
            yf = function(e) {
              var t,
                n,
                r = decodeURIComponent(e).split(",");
              return (
                (n = /data:([^;]+)/.exec(r[0])) && (t = n[1]),
                { type: t, data: r[1] }
              );
            },
            Cf = function(e) {
              return new de(function(t) {
                var r,
                  o,
                  i,
                  a = yf(e);
                try {
                  r = bf(a.data);
                } catch (e) {
                  return void t(new n.Blob([]));
                }
                for (
                  o = (function(e) {
                    return new (oe.getOrDie("Uint8Array"))(e);
                  })(r.length),
                    i = 0;
                  i < o.length;
                  i++
                )
                  o[i] = r.charCodeAt(i);
                t(new n.Blob([o], { type: a.type }));
              });
            },
            wf = function(e) {
              return 0 === e.indexOf("blob:")
                ? (function(e) {
                    return new de(function(t, n) {
                      var r = function() {
                        n(
                          "Cannot convert " +
                            e +
                            " to Blob. Resource might not exist or is inaccessible."
                        );
                      };
                      try {
                        var o = pf();
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
                ? Cf(e)
                : null;
            },
            xf = function(e) {
              return new de(function(t) {
                var n = new (oe.getOrDie("FileReader"))();
                (n.onloadend = function() {
                  t(n.result);
                }),
                  n.readAsDataURL(e);
              });
            },
            Sf = yf,
            Ef = 0,
            Nf = function(e) {
              return (e || "blobid") + Ef++;
            },
            zf = function(e, t, n, r) {
              var o, i;
              0 !== t.src.indexOf("blob:")
                ? ((o = Sf(t.src).data),
                  (i = e.findFirst(function(e) {
                    return e.base64() === o;
                  }))
                    ? n({ image: t, blobInfo: i })
                    : wf(t.src).then(
                        function(r) {
                          (i = e.create(Nf(), r, o)),
                            e.add(i),
                            n({ image: t, blobInfo: i });
                        },
                        function(e) {
                          r(e);
                        }
                      ))
                : (i = e.getByUri(t.src))
                ? n({ image: t, blobInfo: i })
                : wf(t.src).then(
                    function(r) {
                      xf(r).then(function(a) {
                        (o = Sf(a).data),
                          (i = e.create(Nf(), r, o)),
                          e.add(i),
                          n({ image: t, blobInfo: i });
                      });
                    },
                    function(e) {
                      r(e);
                    }
                  );
            },
            kf = function(e) {
              return e ? te(e.getElementsByTagName("img")) : [];
            },
            Tf = 0,
            _f = {
              uuid: function(e) {
                return (
                  e +
                  Tf++ +
                  ((t = function() {
                    return Math.round(4294967295 * Math.random()).toString(36);
                  }),
                  "s" + new Date().getTime().toString(36) + t() + t() + t())
                );
                var t;
              }
            };
          function Af(e) {
            var t,
              n,
              r,
              o,
              a,
              u,
              s,
              l,
              c,
              f = ((t = []),
              (n = function(e) {
                var t, n, r;
                if (!e.blob || !e.base64)
                  throw new Error(
                    "blob and base64 representations of the image are required for BlobInfo to be created"
                  );
                return (
                  (t = e.id || _f.uuid("blobid")),
                  (n = e.name || t),
                  {
                    id: i(t),
                    name: i(n),
                    filename: i(
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
                    blob: i(e.blob),
                    base64: i(e.base64),
                    blobUri: i(e.blobUri || ae.createObjectURL(e.blob)),
                    uri: i(e.uri)
                  }
                );
              }),
              {
                create: function(e, t, r, o) {
                  if (B(e)) return n({ id: e, name: o, blob: t, base64: r });
                  if (R(e)) return n(e);
                  throw new Error("Unknown input type");
                },
                add: function(e) {
                  r(e.id()) || t.push(e);
                },
                get: (r = function(e) {
                  return o(function(t) {
                    return t.id() === e;
                  });
                }),
                getByUri: function(e) {
                  return o(function(t) {
                    return t.blobUri() === e;
                  });
                },
                findFirst: (o = function(e) {
                  return j(t, e)[0];
                }),
                removeByUri: function(e) {
                  t = j(t, function(t) {
                    return (
                      t.blobUri() !== e || (ae.revokeObjectURL(t.blobUri()), !1)
                    );
                  });
                },
                destroy: function() {
                  F(t, function(e) {
                    ae.revokeObjectURL(e.blobUri());
                  }),
                    (t = []);
                }
              }),
              d = ((s = {}),
              (l = function(e, t) {
                return { status: e, resultUri: t };
              }),
              {
                hasBlobUri: (c = function(e) {
                  return e in s;
                }),
                getResultUri: function(e) {
                  var t = s[e];
                  return t ? t.resultUri : null;
                },
                isPending: function(e) {
                  return !!c(e) && 1 === s[e].status;
                },
                isUploaded: function(e) {
                  return !!c(e) && 2 === s[e].status;
                },
                markPending: function(e) {
                  s[e] = l(1, null);
                },
                markUploaded: function(e, t) {
                  s[e] = l(2, t);
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
                F(e.undoManager.data, function(e) {
                  "fragmented" === e.type
                    ? (e.fragments = V(e.fragments, function(e) {
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
                    (a = vf(d, {
                      url: jl.getImageUploadUrl(e),
                      basePath: jl.getImageUploadBasePath(e),
                      credentials: jl.getImagesUploadCredentials(e),
                      handler: jl.getImagesUploadHandler(e)
                    })),
                  x().then(
                    m(function(n) {
                      var r;
                      return (
                        (r = V(n, function(e) {
                          return e.blobInfo;
                        })),
                        a.upload(r, b).then(
                          m(function(r) {
                            var o = V(r, function(t, r) {
                              var o = n[r].image;
                              return (
                                t.status && jl.shouldReplaceBlobUris(e)
                                  ? (function(t, n) {
                                      f.removeByUri(t.src),
                                        v(t.src, n),
                                        e
                                          .$(t)
                                          .attr({
                                            src: jl.shouldReuseFileName(e)
                                              ? n + "?" + new Date().getTime()
                                              : n,
                                            "data-mce-src": e.convertURL(
                                              n,
                                              "src"
                                            )
                                          });
                                    })(o, t.url)
                                  : t.error && df.uploadError(e, t.error),
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
                if (jl.isAutomaticUploadsEnabled(e)) return y(t);
              },
              w = function(t) {
                return (
                  !1 !==
                    G(h, function(e) {
                      return e(t);
                    }) &&
                  (0 !== t.getAttribute("src").indexOf("data:") ||
                    jl.getImagesDataImgFilter(e)(t))
                );
              },
              x = function() {
                return (
                  u ||
                    (u = (function(e, t) {
                      var n = {};
                      return {
                        findAll: function(r, o) {
                          var a;
                          o || (o = i(!0)),
                            (a = j(kf(r), function(t) {
                              var n = t.src;
                              return (
                                !!fe.fileApi &&
                                !t.hasAttribute("data-mce-bogus") &&
                                !t.hasAttribute("data-mce-placeholder") &&
                                !(!n || n === fe.transparentSrc) &&
                                (0 === n.indexOf("blob:")
                                  ? !e.isUploaded(n) && o(t)
                                  : 0 === n.indexOf("data:") && o(t))
                              );
                            }));
                          var u = V(a, function(e) {
                            if (n[e.src])
                              return new de(function(t) {
                                n[e.src].then(function(n) {
                                  if ("string" == typeof n) return n;
                                  t({ image: e, blobInfo: n.blobInfo });
                                });
                              });
                            var r = new de(function(n, r) {
                              zf(t, e, n, r);
                            })
                              .then(function(e) {
                                return delete n[e.image.src], e;
                              })
                              .catch(function(t) {
                                return delete n[e.src], t;
                              });
                            return (n[e.src] = r), r;
                          });
                          return de.all(u);
                        }
                      };
                    })(d, f)),
                  u.findAll(e.getBody(), w).then(
                    m(function(t) {
                      return (
                        (t = j(t, function(t) {
                          return (
                            "string" != typeof t || (df.displayError(e, t), !1)
                          );
                        })),
                        F(t, function(e) {
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
              S = function(t) {
                return t.replace(/src="(blob:[^"]+)"/g, function(t, n) {
                  var r = d.getResultUri(n);
                  if (r) return 'src="' + r + '"';
                  var o = f.getByUri(n);
                  return (
                    o ||
                      (o = q(
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
              e.on("setContent", function() {
                jl.isAutomaticUploadsEnabled(e) ? C() : x();
              }),
              e.on("RawSaveContent", function(e) {
                e.content = S(e.content);
              }),
              e.on("getContent", function(e) {
                e.source_view ||
                  "raw" === e.format ||
                  (e.content = S(e.content));
              }),
              e.on("PostRender", function() {
                e.parser.addNodeFilter("img", function(e) {
                  F(e, function(e) {
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
          }
          var Bf = function(e, t, n) {
              return Ar(t, e)
                ? (function(e, t) {
                    for (
                      var n = P(t) ? t : i(!1), r = e.dom(), o = [];
                      null !== r.parentNode && void 0 !== r.parentNode;

                    ) {
                      var a = r.parentNode,
                        u = Jn.fromDom(a);
                      if ((o.push(u), !0 === n(u))) break;
                      r = a;
                    }
                    return o;
                  })(e, function(e) {
                    return n(e) || _r(e, t);
                  }).slice(0, -1)
                : [];
            },
            Rf = function(e, t) {
              return Bf(e, t, i(!1));
            },
            Mf = Rf,
            Of = function(e, t) {
              return [e].concat(Rf(e, t));
            },
            Df = function(e, t) {
              return e.hasOwnProperty(t.nodeName);
            },
            Pf = function(e, t) {
              return (
                !!ko.isText(t) ||
                (!!ko.isElement(t) && !Df(e, t) && !el.isBookmarkNode(t))
              );
            },
            Hf = function(e, t, n) {
              return (
                (r = Mf(Jn.fromDom(n), Jn.fromDom(t))),
                W(r, function(t) {
                  return Df(e, t.dom());
                }).isSome()
              );
              var r;
            },
            Lf = function(e, t) {
              if (ko.isText(t)) {
                if (0 === t.nodeValue.length) return !0;
                if (
                  /^\s+$/.test(t.nodeValue) &&
                  (!t.nextSibling || Df(e, t.nextSibling))
                )
                  return !0;
              }
              return !1;
            },
            If = function(e) {
              var t,
                n,
                r,
                o,
                i,
                a,
                u,
                s,
                l,
                c,
                f = e.dom,
                d = e.selection,
                h = e.schema,
                m = h.getBlockElements(),
                g = d.getStart(),
                p = e.getBody(),
                v = jl.getForcedRootBlock(e);
              if (
                g &&
                ko.isElement(g) &&
                v &&
                ((c = p.nodeName.toLowerCase()),
                h.isValidChild(c, v.toLowerCase()) && !Hf(m, p, g))
              ) {
                for (
                  n = (t = d.getRng()).startContainer,
                    r = t.startOffset,
                    o = t.endContainer,
                    i = t.endOffset,
                    l = wc(e),
                    g = p.firstChild;
                  g;

                )
                  if (Pf(m, g)) {
                    if (Lf(m, g)) {
                      (u = g), (g = g.nextSibling), f.remove(u);
                      continue;
                    }
                    a ||
                      ((a = f.create(v, e.settings.forced_root_block_attrs)),
                      g.parentNode.insertBefore(a, g),
                      (s = !0)),
                      (u = g),
                      (g = g.nextSibling),
                      a.appendChild(u);
                  } else (a = null), (g = g.nextSibling);
                s &&
                  l &&
                  (t.setStart(n, r),
                  t.setEnd(o, i),
                  d.setRng(t),
                  e.nodeChanged());
              }
            },
            Vf = function(e) {
              jl.getForcedRootBlock(e) && e.on("NodeChange", u(If, e));
            },
            Ff = {
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
            Uf = function(e) {
              var t = e.startContainer,
                n = e.startOffset;
              return ko.isText(t)
                ? 0 === n
                  ? _.some(Jn.fromDom(t))
                  : _.none()
                : _.from(t.childNodes[n]).map(Jn.fromDom);
            },
            jf = function(e) {
              var t = e.endContainer,
                n = e.endOffset;
              return ko.isText(t)
                ? n === t.data.length
                  ? _.some(Jn.fromDom(t))
                  : _.none()
                : _.from(t.childNodes[n - 1]).map(Jn.fromDom);
            },
            qf = function(e) {
              return Ir(e).fold(i([e]), function(t) {
                return [e].concat(qf(t));
              });
            },
            $f = function(e) {
              return Vr(e).fold(i([e]), function(t) {
                return "br" === tr(t)
                  ? Mr(t)
                      .map(function(t) {
                        return [e].concat($f(t));
                      })
                      .getOr([])
                  : [e].concat($f(t));
              });
            },
            Wf = function(e, t, n, r) {
              var o = n,
                i = new Zr(n, o),
                a = e.schema.getNonEmptyElements();
              do {
                if (3 === n.nodeType && 0 !== Yt.trim(n.nodeValue).length)
                  return void (r
                    ? t.setStart(n, 0)
                    : t.setEnd(n, n.nodeValue.length));
                if (a[n.nodeName] && !/^(TD|TH)$/.test(n.nodeName))
                  return void (r
                    ? t.setStartBefore(n)
                    : "BR" === n.nodeName
                    ? t.setEndBefore(n)
                    : t.setEndAfter(n));
                if (fe.ie && fe.ie < 11 && e.isBlock(n) && e.isEmpty(n))
                  return void (r ? t.setStart(n, 0) : t.setEnd(n, 0));
              } while ((n = r ? i.next() : i.prev()));
              "BODY" === o.nodeName &&
                (r ? t.setStart(o, 0) : t.setEnd(o, o.childNodes.length));
            },
            Kf = function(e) {
              var t = e.selection.getSel();
              return t && t.rangeCount > 0;
            };
          function Xf(e) {
            var t,
              n = [];
            "onselectionchange" in e.getDoc() ||
              e.on("NodeChange Click MouseUp KeyUp Focus", function(n) {
                var r, o;
                (o = {
                  startContainer: (r = e.selection.getRng()).startContainer,
                  startOffset: r.startOffset,
                  endContainer: r.endContainer,
                  endOffset: r.endOffset
                }),
                  ("nodechange" !== n.type && Ff.isEq(o, t)) ||
                    e.fire("SelectionChange"),
                  (t = o);
              }),
              e.on("contextmenu", function() {
                e.fire("SelectionChange");
              }),
              e.on("SelectionChange", function() {
                var t = e.selection.getStart(!0);
                !t ||
                  (!fe.range && e.selection.isCollapsed()) ||
                  (Kf(e) &&
                    !(function(t) {
                      var r, o;
                      if (
                        (o = e
                          .$(t)
                          .parentsUntil(e.getBody())
                          .add(t)).length === n.length
                      ) {
                        for (r = o.length; r >= 0 && o[r] === n[r]; r--);
                        if (-1 === r) return (n = o), !0;
                      }
                      return (n = o), !1;
                    })(t) &&
                    e.dom.isChildOf(t, e.getBody()) &&
                    e.nodeChanged({ selectionChange: !0 }));
              }),
              e.on("MouseUp", function(t) {
                !t.isDefaultPrevented() &&
                  Kf(e) &&
                  ("IMG" === e.selection.getNode().nodeName
                    ? pe.setEditorTimeout(e, function() {
                        e.nodeChanged();
                      })
                    : e.nodeChanged());
              }),
              (this.nodeChanged = function(t) {
                var n,
                  r,
                  o,
                  i = e.selection;
                e.initialized &&
                  i &&
                  !e.settings.disable_nodechange &&
                  !e.readonly &&
                  ((o = e.getBody()),
                  ((n = i.getStart(!0) || o).ownerDocument === e.getDoc() &&
                    e.dom.isChildOf(n, o)) ||
                    (n = o),
                  (r = []),
                  e.dom.getParent(n, function(e) {
                    if (e === o) return !0;
                    r.push(e);
                  }),
                  ((t = t || {}).element = n),
                  (t.parents = r),
                  e.fire("NodeChange", t));
              });
          }
          var Yf,
            Gf = function(e) {
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
            Jf = function(e, t) {
              return (
                (n = (function(e) {
                  return e.inline ? Gf(e.getBody()) : { left: 0, top: 0 };
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
                        var n = Gf(e.getContentAreaContainer()),
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
            Qf = ko.isContentEditableFalse,
            Zf = ko.isContentEditableTrue,
            ed = function(e) {
              e && e.parentNode && e.parentNode.removeChild(e);
            },
            td = function(e, t) {
              return function(n) {
                if (
                  (function(e) {
                    return 0 === e.button;
                  })(n)
                ) {
                  var r = $(t.dom.getParents(n.target), Xa(Qf, Zf)).getOr(null);
                  if (((u = t.getBody()), Qf((s = r)) && s !== u)) {
                    var o = t.dom.getPos(r),
                      i = t.getBody(),
                      a = t.getDoc().documentElement;
                    (e.element = r),
                      (e.screenX = n.screenX),
                      (e.screenY = n.screenY),
                      (e.maxX = (t.inline ? i.scrollWidth : a.offsetWidth) - 2),
                      (e.maxY =
                        (t.inline ? i.scrollHeight : a.offsetHeight) - 2),
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
            nd = function(e, t) {
              return function(n) {
                if (
                  e.dragging &&
                  (function(e, t, n) {
                    return t !== n && !e.dom.isChildOf(t, n) && !Qf(t);
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
                      ed(e.element),
                        t.insertContent(t.dom.getOuterHTML(r)),
                        t._selectionOverrides.hideFakeCaret();
                    }));
                }
                var i, a, u, s;
                rd(e);
              };
            },
            rd = function(e) {
              (e.dragging = !1), (e.element = null), ed(e.ghost);
            },
            od = function(e) {
              var t,
                r,
                o,
                i,
                a,
                u,
                s = {};
              (t = ci.DOM),
                (u = n.document),
                (r = td(s, e)),
                (o = (function(e, t) {
                  var n = pe.throttle(function(e, n) {
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
                      })(e, Jf(t, r));
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
                (i = nd(s, e)),
                (a = (function(e, t) {
                  return function() {
                    e.dragging && t.fire("dragend"), rd(e);
                  };
                })(s, e)),
                e.on("mousedown", r),
                e.on("mousemove", o),
                e.on("mouseup", i),
                t.bind(u, "mousemove", o),
                t.bind(u, "mouseup", a),
                e.on("remove", function() {
                  t.unbind(u, "mousemove", o), t.unbind(u, "mouseup", a);
                });
            },
            id = function(e) {
              od(e),
                (function(e) {
                  e.on("drop", function(t) {
                    var n =
                      void 0 !== t.clientX
                        ? e.getDoc().elementFromPoint(t.clientX, t.clientY)
                        : null;
                    (Qf(n) || Qf(e.dom.getContentEditableParent(n))) &&
                      t.preventDefault();
                  });
                })(e);
            },
            ad = function(e) {
              return q(
                e,
                function(e, t) {
                  return e.concat(
                    (function(e) {
                      var t = function(t) {
                        return V(t, function(t) {
                          return ((t = Oa(t)).node = e), t;
                        });
                      };
                      if (ko.isElement(e)) return t(e.getClientRects());
                      if (ko.isText(e)) {
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
          })(Yf || (Yf = {}));
          var ud,
            sd = function(e, t, n, r, o, i) {
              var a,
                u,
                s = 0,
                l = [],
                c = function(r) {
                  var i, a, c;
                  for (
                    c = ad([r]), -1 === e && (c = c.reverse()), i = 0;
                    i < c.length;
                    i++
                  )
                    if (((a = c[i]), !n(a, u))) {
                      if (
                        (l.length > 0 && t(a, qt.last(l)) && s++,
                        (a.line = s),
                        o(a))
                      )
                        return !0;
                      l.push(a);
                    }
                };
              return (u = qt.last(i.getClientRects()))
                ? (c((a = i.getNode())),
                  (function(e, t, n, r) {
                    for (; (r = cs(r, e, Ra, t)); ) if (n(r)) return;
                  })(e, r, c, a),
                  l)
                : l;
            },
            ld = u(sd, Yf.Up, Ha, La),
            cd = u(sd, Yf.Down, La, Ha),
            fd = function(e) {
              return function(t) {
                return (function(e, t) {
                  return t.line > e;
                })(e, t);
              };
            },
            dd = function(e) {
              return function(t) {
                return (function(e, t) {
                  return t.line === e;
                })(e, t);
              };
            },
            hd = ko.isContentEditableFalse,
            md = cs,
            gd = function(e, t) {
              return Math.abs(e.left - t);
            },
            pd = function(e, t) {
              return Math.abs(e.right - t);
            },
            vd = function(e, t) {
              return e >= t.left && e <= t.right;
            },
            bd = function(e, t) {
              return qt.reduce(e, function(e, n) {
                var r, o;
                return (
                  (r = Math.min(gd(e, t), pd(e, t))),
                  (o = Math.min(gd(n, t), pd(n, t))),
                  vd(t, n)
                    ? n
                    : vd(t, e)
                    ? e
                    : o === r && hd(n.node)
                    ? n
                    : o < r
                    ? n
                    : e
                );
              });
            },
            yd = function(e, t, n, r) {
              for (; (r = md(r, e, Ra, t)); ) if (n(r)) return;
            },
            Cd = function(e, t, n) {
              var r,
                o = ad(
                  (function(e) {
                    return j(te(e.getElementsByTagName("*")), es);
                  })(e)
                ),
                i = j(o, function(e) {
                  return n >= e.top && n <= e.bottom;
                });
              return (r = bd(i, t)) &&
                (r = bd(
                  (function(e, t) {
                    var n = [],
                      r = function(e, r) {
                        var o;
                        return (
                          (o = j(ad([r]), function(n) {
                            return !e(n, t);
                          })),
                          (n = n.concat(o)),
                          0 === o.length
                        );
                      };
                    return (
                      n.push(t),
                      yd(Yf.Up, e, u(r, Ha), t.node),
                      yd(Yf.Down, e, u(r, La), t.node),
                      n
                    );
                  })(e, r),
                  t
                )) &&
                es(r.node)
                ? (function(e, t) {
                    return { node: e.node, before: gd(e, t) < pd(e, t) };
                  })(r, t)
                : null;
            },
            wd = function(e, t, n) {
              return (
                !n.collapsed &&
                q(
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
            xd = ko.isContentEditableTrue,
            Sd = ko.isContentEditableFalse,
            Ed = function(e, t, n, r, o) {
              return t._selectionOverrides.showCaret(e, n, r, o);
            },
            Nd = function(e, t) {
              return e
                .fire("BeforeObjectSelected", { target: t })
                .isDefaultPrevented()
                ? null
                : (function(e) {
                    var t = e.ownerDocument.createRange();
                    return t.selectNode(e), t;
                  })(t);
            },
            zd = function(e, t, n) {
              var r = ys(1, e.getBody(), t),
                o = gu.fromRangeStart(r),
                i = o.getNode();
              if (Sd(i)) return Ed(1, e, i, !o.isAtEnd(), !1);
              var a = o.getNode(!0);
              if (Sd(a)) return Ed(1, e, a, !1, !1);
              var u = e.dom.getParent(o.getNode(), function(e) {
                return Sd(e) || xd(e);
              });
              return Sd(u) ? Ed(1, e, u, !1, n) : null;
            },
            kd = function(e, t, n) {
              if (!t || !t.collapsed) return t;
              var r = zd(e, t, n);
              return r || t;
            },
            Td = function(e) {
              var t = Ai(function() {
                if (
                  !e.removed &&
                  e.getBody().contains(n.document.activeElement) &&
                  e.selection.getRng().collapsed
                ) {
                  var t = kd(e, e.selection.getRng(), !1);
                  e.selection.setRng(t);
                }
              }, 0);
              e.on("focus", function() {
                t.throttle();
              }),
                e.on("blur", function() {
                  t.cancel();
                });
            },
            _d = {
              BACKSPACE: 8,
              DELETE: 46,
              DOWN: 40,
              ENTER: 13,
              LEFT: 37,
              RIGHT: 39,
              SPACEBAR: 32,
              TAB: 9,
              UP: 38,
              modifierPressed: function(e) {
                return (
                  e.shiftKey || e.ctrlKey || e.altKey || this.metaKeyPressed(e)
                );
              },
              metaKeyPressed: function(e) {
                return fe.mac ? e.metaKey : e.ctrlKey && !e.altKey;
              }
            },
            Ad = ((ud = " "),
            function(e) {
              return ud === e;
            }),
            Bd = function(e) {
              return /^[\r\n\t ]$/.test(e);
            },
            Rd = function(e) {
              return !Bd(e) && !Ad(e);
            },
            Md = function(e, t, n) {
              return _.from(n.container())
                .filter(ko.isText)
                .exists(function(r) {
                  var o = e ? 0 : -1;
                  return t(r.data.charAt(n.offset() + o));
                });
            },
            Od = u(Md, !0, Bd),
            Dd = u(Md, !1, Bd),
            Pd = function(e) {
              var t = e.container();
              return ko.isText(t) && 0 === t.data.length;
            },
            Hd = function(e, t) {
              var n = hs(e, t);
              return ko.isContentEditableFalse(n) && !ko.isBogusAll(n);
            },
            Ld = u(Hd, 0),
            Id = u(Hd, -1),
            Vd = function(e, t) {
              return ko.isTable(hs(e, t));
            },
            Fd = u(Vd, 0),
            Ud = u(Vd, -1),
            jd = ko.isContentEditableTrue,
            qd = ko.isContentEditableFalse,
            $d = function(e, t) {
              for (var n = e.getBody(); t && t !== n; ) {
                if (jd(t) || qd(t)) return t;
                t = t.parentNode;
              }
              return null;
            },
            Wd = function(e) {
              var t,
                n = e.getBody(),
                r = Qu(
                  e.getBody(),
                  function(t) {
                    return e.dom.isBlock(t);
                  },
                  function() {
                    return wc(e);
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
                    (t = ys(e, n, t)),
                    -1 === e ? gu.fromRangeStart(t) : gu.fromRangeEnd(t)
                  );
                },
                l = function(e) {
                  return ma(e) || ya(e) || Ca(e);
                },
                c = function(e) {
                  return l(e.startContainer) || l(e.endContainer);
                },
                f = function(n, r) {
                  var i,
                    a,
                    l,
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
                    if (!c(n))
                      if (!1 === r) {
                        if (((p = s(-1, n)), es(p.getNode(!0))))
                          return u(-1, p.getNode(!0), !1, !1);
                        if (es(p.getNode()))
                          return u(-1, p.getNode(), !p.isAtEnd(), !1);
                      } else {
                        if (((p = s(1, n)), es(p.getNode())))
                          return u(1, p.getNode(), !p.isAtEnd(), !1);
                        if (es(p.getNode(!0)))
                          return u(1, p.getNode(!0), !1, !1);
                      }
                    return null;
                  }
                  return (
                    (f = n.startContainer),
                    (d = n.startOffset),
                    (m = n.endOffset),
                    3 === f.nodeType &&
                      0 === d &&
                      qd(f.parentNode) &&
                      ((f = f.parentNode),
                      (d = C.nodeIndex(f)),
                      (f = f.parentNode)),
                    1 !== f.nodeType
                      ? null
                      : (m === d + 1 && (i = f.childNodes[d]),
                        qd(i)
                          ? ((v = b = i.cloneNode(!0)),
                            (g = e.fire("ObjectSelected", {
                              target: i,
                              targetClone: v
                            })).isDefaultPrevented()
                              ? null
                              : ((a = qi(Jn.fromDom(e.getBody()), "#" + o).fold(
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
                                v === b && fe.ie
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
                                (l = e.selection.getSel()).removeAllRanges(),
                                l.addRange(n),
                                F(
                                  Ii(
                                    Jn.fromDom(e.getBody()),
                                    "*[data-mce-selected]"
                                  ),
                                  function(e) {
                                    pr(e, "data-mce-selected");
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
                    qi(Jn.fromDom(e.getBody()), "#" + o).each(Ti),
                    (t = null)),
                    qi(Jn.fromDom(e.getBody()), "#" + o).each(Ti),
                    (t = null);
                },
                h = function() {
                  r.hide();
                };
              return (
                fe.ceFalse &&
                  (function() {
                    e.on("mouseup", function(t) {
                      var n = a();
                      n.collapsed &&
                        nf.isXYInContentArea(e, t.clientX, t.clientY) &&
                        i(zd(e, n, !1));
                    }),
                      e.on("click", function(t) {
                        var n;
                        (n = $d(e, t.target)) &&
                          (qd(n) && (t.preventDefault(), e.focus()),
                          jd(n) &&
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
                        !(
                          !i ||
                          !e.dom.isChildOf(i, a) ||
                          !1 !== qd($d(e, i))
                        ) ||
                        (i &&
                          ((r = i),
                          (o = a),
                          !(
                            e.dom.getParent(r, e.dom.isBlock) ===
                            e.dom.getParent(o, e.dom.isBlock)
                          )) &&
                          (function(e) {
                            var t = Ds(e);
                            if (!e.firstChild) return !1;
                            var n = gu.before(e.firstChild),
                              r = t.next(n);
                            return r && !Ld(r) && !Id(r);
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
                          var r = $d(e, n.target);
                          qd(r) && (t || (n.preventDefault(), f(Nd(e, r))));
                        });
                    })(e),
                      e.on("mousedown", function(t) {
                        var r,
                          o = t.target;
                        if (
                          (o === n ||
                            "HTML" === o.nodeName ||
                            e.dom.isChildOf(o, n)) &&
                          !1 !== nf.isXYInContentArea(e, t.clientX, t.clientY)
                        )
                          if ((r = $d(e, o)))
                            qd(r)
                              ? (t.preventDefault(), f(Nd(e, r)))
                              : (d(),
                                (jd(r) && t.shiftKey) ||
                                  wd(
                                    t.clientX,
                                    t.clientY,
                                    e.selection.getRng()
                                  ) ||
                                  (h(),
                                  e.selection.placeCaretAt(
                                    t.clientX,
                                    t.clientY
                                  )));
                          else if (!1 === es(o)) {
                            d(), h();
                            var a = Cd(n, t.clientX, t.clientY);
                            if (a && !s(t.target, a.node)) {
                              t.preventDefault();
                              var l = u(1, a.node, a.before, !1);
                              e.getBody().focus(), i(l);
                            }
                          }
                      }),
                      e.on("keypress", function(t) {
                        _d.modifierPressed(t) ||
                          (t.keyCode,
                          qd(e.selection.getNode()) && t.preventDefault());
                      }),
                      e.on("getSelectionRange", function(e) {
                        var n = e.range;
                        if (t) {
                          if (!t.parentNode) return void (t = null);
                          (n = n.cloneRange()).selectNode(t), (e.range = n);
                        }
                      }),
                      e.on("setSelectionRange", function(e) {
                        var t;
                        (t = f(e.range, e.forward)) && (e.range = t);
                      }),
                      e.on("AfterSetSelectionRange", function(t) {
                        var n,
                          r = t.range;
                        c(r) ||
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
                          !fe.ie
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
                      id(e),
                      Td(e);
                  })(),
                {
                  showCaret: u,
                  showBlockCaretContainer: function(t) {
                    t.hasAttribute("data-mce-caret") &&
                      (wa(t), i(a()), e.selection.scrollIntoView(t[0]));
                  },
                  hideFakeCaret: h,
                  destroy: function() {
                    r.destroy(), (t = null);
                  }
                }
              );
            },
            Kd = 0,
            Xd = 2,
            Yd = 1,
            Gd = function(e, t) {
              var n = e.length + t.length + 2,
                r = new Array(n),
                o = new Array(n),
                i = function(n, r, o, a, s) {
                  var l = u(n, r, o, a);
                  if (
                    null === l ||
                    (l.start === r && l.diag === r - a) ||
                    (l.end === n && l.diag === n - o)
                  )
                    for (var c = n, f = o; c < r || f < a; )
                      c < r && f < a && e[c] === t[f]
                        ? (s.push([0, e[c]]), ++c, ++f)
                        : r - n > a - o
                        ? (s.push([2, e[c]]), ++c)
                        : (s.push([1, t[f]]), ++f);
                  else {
                    i(n, l.start, o, l.start - l.diag, s);
                    for (var d = l.start; d < l.end; ++d) s.push([0, e[d]]);
                    i(l.end, r, l.end - l.diag, a, s);
                  }
                },
                a = function(n, r, o, i) {
                  for (var a = n; a - r < i && a < o && e[a] === t[a - r]; )
                    ++a;
                  return (function(e, t, n) {
                    return { start: e, end: t, diag: n };
                  })(n, a, r);
                },
                u = function(n, i, u, s) {
                  var l = i - n,
                    c = s - u;
                  if (0 === l || 0 === c) return null;
                  var f,
                    d,
                    h,
                    m,
                    g,
                    p = l - c,
                    v = c + l,
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
            Jd = function(e) {
              return ko.isElement(e)
                ? e.outerHTML
                : ko.isText(e)
                ? Fo.encodeRaw(e.data, !1)
                : ko.isComment(e)
                ? "\x3c!--" + e.data + "--\x3e"
                : "";
            },
            Qd = function(e, t, r) {
              var o = (function(e) {
                var t, r, o;
                for (
                  o = n.document.createElement("div"),
                    t = n.document.createDocumentFragment(),
                    e && (o.innerHTML = e);
                  (r = o.firstChild);

                )
                  t.appendChild(r);
                return t;
              })(t);
              if (e.hasChildNodes() && r < e.childNodes.length) {
                var i = e.childNodes[r];
                i.parentNode.insertBefore(o, i);
              } else e.appendChild(o);
            },
            Zd = function(e) {
              return j(V(te(e.childNodes), Jd), function(e) {
                return e.length > 0;
              });
            },
            eh = function(e, t) {
              var n = V(te(t.childNodes), Jd);
              return (
                (function(e, t) {
                  var n = 0;
                  F(e, function(e) {
                    e[0] === Kd
                      ? n++
                      : e[0] === Yd
                      ? (Qd(t, e[1], n), n++)
                      : e[0] === Xd &&
                        (function(e, t) {
                          if (e.hasChildNodes() && t < e.childNodes.length) {
                            var n = e.childNodes[t];
                            n.parentNode.removeChild(n);
                          }
                        })(t, n);
                  });
                })(Gd(n, e), t),
                t
              );
            },
            th = pi(_.none()),
            nh = function(e) {
              return {
                type: "fragmented",
                fragments: e,
                content: "",
                bookmark: null,
                beforeBookmark: null
              };
            },
            rh = function(e) {
              return {
                type: "complete",
                fragments: null,
                content: e,
                bookmark: null,
                beforeBookmark: null
              };
            },
            oh = function(e) {
              return "fragmented" === e.type ? e.fragments.join("") : e.content;
            },
            ih = function(e) {
              var t = Jn.fromTag(
                "body",
                th.get().getOrThunk(function() {
                  var e = n.document.implementation.createHTMLDocument("undo");
                  return th.set(_.some(e)), e;
                })
              );
              return (
                aa(t, oh(e)),
                F(Ii(t, "*[data-mce-bogus]"), _i),
                t.dom().innerHTML
              );
            },
            ah = {
              createFragmentedLevel: nh,
              createCompleteLevel: rh,
              createFromEditor: function(e) {
                var t, n, r;
                return (
                  (t = Zd(e.getBody())),
                  -1 !==
                  (n = (r = Y(t, function(t) {
                    var n = Fl.trimInternal(e.serializer, t);
                    return n.length > 0 ? [n] : [];
                  })).join("")).indexOf("</iframe>")
                    ? nh(r)
                    : rh(n)
                );
              },
              applyToEditor: function(e, t, n) {
                "fragmented" === t.type
                  ? eh(t.fragments, e.getBody())
                  : e.setContent(t.content, { format: "raw" }),
                  e.selection.moveToBookmark(n ? t.beforeBookmark : t.bookmark);
              },
              isEq: function(e, t) {
                return (
                  !(!e || !t) &&
                  (!!(function(e, t) {
                    return oh(e) === oh(t);
                  })(e, t) ||
                    (function(e, t) {
                      return ih(e) === ih(t);
                    })(e, t))
                );
              }
            };
          function uh(e) {
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
              l = function(t) {
                e.setDirty(t);
              },
              c = function(e) {
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
                "Undo" !== t && "Redo" !== t && "mceRepaint" !== t && c(e);
              }),
              e.on("ObjectResizeStart Cut", function() {
                r.beforeChange();
              }),
              e.on("SaveContent ObjectResized blur", c),
              e.on("DragEnd", c),
              e.on("KeyUp", function(t) {
                var o = t.keyCode;
                t.isDefaultPrevented() ||
                  (((o >= 33 && o <= 36) ||
                    (o >= 37 && o <= 40) ||
                    45 === o ||
                    t.ctrlKey) &&
                    (c(), e.nodeChanged()),
                  (46 !== o && 8 !== o) || e.nodeChanged(),
                  n &&
                    r.typing &&
                    !1 === ah.isEq(ah.createFromEditor(e), i[0]) &&
                    (!1 === e.isDirty() &&
                      (l(!0),
                      e.fire("change", { level: i[0], lastLevel: null })),
                    e.fire("TypingUndo"),
                    (n = !1),
                    e.nodeChanged()));
              }),
              e.on("KeyDown", function(e) {
                var t = e.keyCode;
                if (!e.isDefaultPrevented())
                  if ((t >= 33 && t <= 36) || (t >= 37 && t <= 40) || 45 === t)
                    r.typing && c(e);
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
              e.on("MouseDown", function(e) {
                r.typing && c(e);
              }),
              e.on("input", function(e) {
                e.inputType &&
                  ("insertReplacementText" === e.inputType ||
                    (function(e) {
                      return "insertText" === e.inputType && null === e.data;
                    })(e)) &&
                  c(e);
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
                  u() && (t = Pu.getUndoBookmark(e.selection));
                },
                add: function(n, r) {
                  var a,
                    s,
                    c,
                    f = e.settings;
                  if (
                    ((c = ah.createFromEditor(e)),
                    (n = n || {}),
                    (n = Yt.extend(n, c)),
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
                  if (s && ah.isEq(s, n)) return null;
                  if (
                    (i[o] && (i[o].beforeBookmark = t),
                    f.custom_undo_redo_levels &&
                      i.length > f.custom_undo_redo_levels)
                  ) {
                    for (a = 0; a < i.length - 1; a++) i[a] = i[a + 1];
                    i.length--, (o = i.length);
                  }
                  (n.bookmark = Pu.getUndoBookmark(e.selection)),
                    o < i.length - 1 && (i.length = o + 1),
                    i.push(n),
                    (o = i.length - 1);
                  var d = { level: n, lastLevel: s, originalEvent: r };
                  return (
                    e.fire("AddUndo", d),
                    o > 0 && (l(!0), e.fire("change", d)),
                    n
                  );
                },
                undo: function() {
                  var t;
                  return (
                    r.typing && (r.add(), (r.typing = !1), s(!1)),
                    o > 0 &&
                      ((t = i[--o]),
                      ah.applyToEditor(e, t, !0),
                      l(!0),
                      e.fire("undo", { level: t })),
                    t
                  );
                },
                redo: function() {
                  var t;
                  return (
                    o < i.length - 1 &&
                      ((t = i[++o]),
                      ah.applyToEditor(e, t, !1),
                      l(!0),
                      e.fire("redo", { level: t })),
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
                hasUndo: function() {
                  return (
                    o > 0 ||
                    (r.typing && i[0] && !ah.isEq(ah.createFromEditor(e), i[0]))
                  );
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
                    ah.applyToEditor(e, a, !0),
                    r.transact(n) && (i[o - 1].beforeBookmark = u));
                }
              })
            );
          }
          var sh = function(e) {
              var t = Ii(e, "br"),
                n = j(
                  (function(e) {
                    for (var t = [], n = e.dom(); n; )
                      t.push(Jn.fromDom(n)), (n = n.lastChild);
                    return t;
                  })(e).slice(-1),
                  uo
                );
              t.length === n.length && F(n, Ti);
            },
            lh = function(e) {
              ki(e), Ni(e, Jn.fromHtml('<br data-mce-bogus="1">'));
            },
            ch = function(e) {
              Vr(e).each(function(t) {
                Mr(t).each(function(n) {
                  io(e) && uo(t) && io(n) && Ti(t);
                });
              });
            },
            fh = ol.isEq,
            dh = function(e, t, n) {
              var r = e.formatter.get(n);
              if (r)
                for (var o = 0; o < r.length; o++)
                  if (!1 === r[o].inherit && e.dom.is(t, r[o].selector))
                    return !0;
              return !1;
            },
            hh = function(e, t, n, r) {
              var o = e.dom.getRoot();
              return (
                t !== o &&
                ((t = e.dom.getParent(t, function(t) {
                  return (
                    !!dh(e, t, n) || t.parentNode === o || !!ph(e, t, n, r, !0)
                  );
                })),
                ph(e, t, n, r))
              );
            },
            mh = function(e, t, n) {
              return (
                !!fh(t, n.inline) ||
                !!fh(t, n.block) ||
                (n.selector ? 1 === t.nodeType && e.is(t, n.selector) : void 0)
              );
            },
            gh = function(e, t, n, r, o, i) {
              var a,
                u,
                s,
                l = n[r];
              if (n.onmatch) return n.onmatch(t, n, r);
              if (l)
                if (void 0 === l.length) {
                  for (a in l)
                    if (l.hasOwnProperty(a)) {
                      if (
                        ((u =
                          "attributes" === r
                            ? e.getAttrib(t, a)
                            : ol.getStyle(e, t, a)),
                        o && !u && !n.exact)
                      )
                        return;
                      if (
                        (!o || n.exact) &&
                        !fh(
                          u,
                          ol.normalizeStyleValue(e, ol.replaceVars(l[a], i), a)
                        )
                      )
                        return;
                    }
                } else
                  for (s = 0; s < l.length; s++)
                    if (
                      "attributes" === r
                        ? e.getAttrib(t, l[s])
                        : ol.getStyle(e, t, l[s])
                    )
                      return n;
              return n;
            },
            ph = function(e, t, n, r, o) {
              var i,
                a,
                u,
                s,
                l = e.formatter.get(n),
                c = e.dom;
              if (l && t)
                for (a = 0; a < l.length; a++)
                  if (
                    ((i = l[a]),
                    mh(e.dom, t, i) &&
                      gh(c, t, i, "attributes", o, r) &&
                      gh(c, t, i, "styles", o, r))
                  ) {
                    if ((s = i.classes))
                      for (u = 0; u < s.length; u++)
                        if (!e.dom.hasClass(t, s[u])) return;
                    return i;
                  }
            },
            vh = {
              matchNode: ph,
              matchName: mh,
              match: function(e, t, n, r) {
                var o;
                return r
                  ? hh(e, r, t, n)
                  : ((r = e.selection.getNode()),
                    !!hh(e, r, t, n) ||
                      !((o = e.selection.getStart()) === r || !hh(e, o, t, n)));
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
                          !i[u] && ph(e, r, u, n) && ((i[u] = !0), o.push(u));
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
                      r = ol.getParents(s, n),
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
              matchesUnInheritedFormatSelector: dh
            },
            bh = function(e, t) {
              return e.splitText(t);
            },
            yh = {
              split: function(e) {
                var t = e.startContainer,
                  n = e.startOffset,
                  r = e.endContainer,
                  o = e.endOffset;
                return (
                  t === r && ko.isText(t)
                    ? n > 0 &&
                      n < t.nodeValue.length &&
                      ((t = (r = bh(t, n)).previousSibling),
                      o > n
                        ? ((t = r = bh(r, (o -= n)).previousSibling),
                          (o = r.nodeValue.length),
                          (n = 0))
                        : (o = 0))
                    : (ko.isText(t) &&
                        n > 0 &&
                        n < t.nodeValue.length &&
                        ((t = bh(t, n)), (n = 0)),
                      ko.isText(r) &&
                        o > 0 &&
                        o < r.nodeValue.length &&
                        (o = (r = bh(r, o).previousSibling).nodeValue.length)),
                  {
                    startContainer: t,
                    startOffset: n,
                    endContainer: r,
                    endOffset: o
                  }
                );
              }
            },
            Ch = function(e, t, n) {
              if (0 !== n) {
                var r = e.data.slice(t, t + n),
                  o = t + n >= e.data.length,
                  i = 0 === t;
                e.replaceData(
                  t,
                  n,
                  (function(e, t, n) {
                    return q(
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
            wh = function(e, t) {
              var n,
                r = e.data.slice(t),
                o = r.length - ((n = r), n.replace(/^\s+/g, "")).length;
              return Ch(e, t, o);
            },
            xh = function(e, t) {
              var n,
                r,
                o,
                i = Jn.fromDom(e),
                a = Jn.fromDom(t);
              return (
                (n = a), (r = "pre,code"), (o = u(_r, i)), ji(n, r, o).isSome()
              );
            },
            Sh = function(e, t) {
              return (
                (Aa(t) &&
                  !1 ===
                    (function(e, t) {
                      return (
                        ko.isText(t) &&
                        /^[ \t\r\n]*$/.test(t.data) &&
                        !1 === xh(e, t)
                      );
                    })(e, t)) ||
                (function(e) {
                  return (
                    ko.isElement(e) &&
                    "A" === e.nodeName &&
                    e.hasAttribute("name")
                  );
                })(t) ||
                Eh(t)
              );
            },
            Eh = ko.hasAttribute("data-mce-bookmark"),
            Nh = ko.hasAttribute("data-mce-bogus"),
            zh = ko.hasAttributeValue("data-mce-bogus", "all"),
            kh = function(e) {
              return (function(e) {
                var t,
                  n,
                  r = 0;
                if (Sh(e, e)) return !1;
                if (!(n = e.firstChild)) return !0;
                t = new Zr(n, e);
                do {
                  if (zh(n)) n = t.next(!0);
                  else if (Nh(n)) n = t.next();
                  else if (ko.isBr(n)) r++, (n = t.next());
                  else {
                    if (Sh(e, n)) return !1;
                    n = t.next();
                  }
                } while (n);
                return r <= 1;
              })(e.dom());
            },
            Th = function(e, t) {
              return (function(e, t) {
                var n = e.container(),
                  r = e.offset();
                return (
                  !1 === gu.isTextPosition(e) &&
                  n === t.parentNode &&
                  r > gu.before(t).offset()
                );
              })(t, e)
                ? gu(t.container(), t.offset() - 1)
                : t;
            },
            _h = function(e) {
              return Aa(e.previousSibling)
                ? _.some(
                    ((t = e.previousSibling),
                    ko.isText(t) ? gu(t, t.data.length) : gu.after(t))
                  )
                : e.previousSibling
                ? Ws.lastPositionIn(e.previousSibling)
                : _.none();
              var t;
            },
            Ah = function(e) {
              return Aa(e.nextSibling)
                ? _.some(
                    ((t = e.nextSibling),
                    ko.isText(t) ? gu(t, 0) : gu.before(t))
                  )
                : e.nextSibling
                ? Ws.firstPositionIn(e.nextSibling)
                : _.none();
              var t;
            },
            Bh = function(e, t) {
              return _h(t)
                .orThunk(function() {
                  return Ah(t);
                })
                .orThunk(function() {
                  return (function(e, t) {
                    var n = gu.before(
                      t.previousSibling ? t.previousSibling : t.parentNode
                    );
                    return Ws.prevPosition(e, n).fold(function() {
                      return Ws.nextPosition(e, gu.after(t));
                    }, _.some);
                  })(e, t);
                });
            },
            Rh = function(e, t) {
              return Ah(t)
                .orThunk(function() {
                  return _h(t);
                })
                .orThunk(function() {
                  return (function(e, t) {
                    return Ws.nextPosition(e, gu.after(t)).fold(function() {
                      return Ws.prevPosition(e, gu.before(t));
                    }, _.some);
                  })(e, t);
                });
            },
            Mh = function(e, t, n) {
              return (function(e, t, n) {
                return e ? Rh(t, n) : Bh(t, n);
              })(e, t, n).map(u(Th, n));
            },
            Oh = function(e, t, n) {
              n.fold(
                function() {
                  e.focus();
                },
                function(n) {
                  e.selection.setRng(n.toRange(), t);
                }
              );
            },
            Dh = function(e, t) {
              return t && e.schema.getBlockElements().hasOwnProperty(tr(t));
            },
            Ph = function(e) {
              if (kh(e)) {
                var t = Jn.fromHtml('<br data-mce-bogus="1">');
                return ki(e), Ni(e, t), _.some(gu.before(t.dom()));
              }
              return _.none();
            },
            Hh = function(e, t, n) {
              var r = Mr(e).filter(function(e) {
                  return ko.isText(e.dom());
                }),
                o = Or(e).filter(function(e) {
                  return ko.isText(e.dom());
                });
              return (
                Ti(e),
                $a([r, o, t], function(e, t, r) {
                  var o = e.dom(),
                    i = t.dom(),
                    a = o.data.length;
                  return (
                    (function(e, t, n) {
                      var r = Un(e.data).length;
                      e.appendData(t.data), Ti(Jn.fromDom(t)), n && wh(e, r);
                    })(o, i, n),
                    r.container() === i ? gu(o, a) : r
                  );
                }).orThunk(function() {
                  return (
                    n &&
                      (r.each(function(e) {
                        return (
                          (t = e.dom()),
                          (n = e.dom().length),
                          (r = t.data.slice(0, n)),
                          (o = r.length - Un(r).length),
                          Ch(t, n - o, o)
                        );
                        var t, n, r, o;
                      }),
                      o.each(function(e) {
                        return wh(e.dom(), 0);
                      })),
                    t
                  );
                })
              );
            },
            Lh = function(e, t, n, r) {
              void 0 === r && (r = !0);
              var o,
                i = Mh(t, e.getBody(), n.dom()),
                a = Fi(
                  n,
                  u(Dh, e),
                  ((o = e.getBody()),
                  function(e) {
                    return e.dom() === o;
                  })
                ),
                s = Hh(
                  n,
                  i,
                  (function(e, t) {
                    return fr(e.schema.getTextInlineElements(), tr(t));
                  })(e, n)
                );
              e.dom.isEmpty(e.getBody())
                ? (e.setContent(""), e.selection.setCursorLocation())
                : a.bind(Ph).fold(
                    function() {
                      r && Oh(e, t, s);
                    },
                    function(n) {
                      r && Oh(e, t, _.some(n));
                    }
                  );
            },
            Ih = sa,
            Vh = function(e) {
              return (
                (function(e) {
                  for (var t = []; e; ) {
                    if (
                      (3 === e.nodeType && e.nodeValue !== Ih) ||
                      e.childNodes.length > 1
                    )
                      return [];
                    1 === e.nodeType && t.push(e), (e = e.firstChild);
                  }
                  return t;
                })(e).length > 0
              );
            },
            Fh = function(e) {
              var t;
              if (e)
                for (e = (t = new Zr(e, e)).current(); e; e = t.next())
                  if (3 === e.nodeType) return e;
              return null;
            },
            Uh = function(e) {
              var t = Jn.fromTag("span");
              return (
                mr(t, {
                  id: "_mce_caret",
                  "data-mce-bogus": "1",
                  "data-mce-type": "format-caret"
                }),
                e && Ni(t, Jn.fromText(Ih)),
                t
              );
            },
            jh = function(e, t, n) {
              void 0 === n && (n = !0);
              var r = e.dom,
                o = e.selection;
              if (Vh(t)) Lh(e, !1, Jn.fromDom(t), n);
              else {
                var i = o.getRng(),
                  a = r.getParent(t, r.isBlock),
                  u = (function(e) {
                    var t = Fh(e);
                    return (
                      t && t.nodeValue.charAt(0) === Ih && t.deleteData(0, 1), t
                    );
                  })(t);
                i.startContainer === u &&
                  i.startOffset > 0 &&
                  i.setStart(u, i.startOffset - 1),
                  i.endContainer === u &&
                    i.endOffset > 0 &&
                    i.setEnd(u, i.endOffset - 1),
                  r.remove(t, !0),
                  a && r.isEmpty(a) && lh(Jn.fromDom(a)),
                  o.setRng(i);
              }
            },
            qh = function(e, t, n) {
              void 0 === n && (n = !0);
              var r = e.dom,
                o = e.selection;
              if (t) jh(e, t, n);
              else if (!(t = Lu(e.getBody(), o.getStart())))
                for (; (t = r.get("_mce_caret")); ) jh(e, t, !1);
            },
            $h = function(e, t, n) {
              var r = e.dom,
                o = r.getParent(n, u(ol.isTextBlock, e));
              o && r.isEmpty(o)
                ? n.parentNode.replaceChild(t, n)
                : (sh(Jn.fromDom(n)),
                  r.isEmpty(n)
                    ? n.parentNode.replaceChild(t, n)
                    : r.insertAfter(t, n));
            },
            Wh = function(e, t) {
              return e.appendChild(t), t;
            },
            Kh = function(e, t) {
              var n,
                r,
                o = ((n = function(e, t) {
                  return Wh(e, t.cloneNode(!1));
                }),
                (r = t),
                (function(e, t) {
                  for (var n = e.length - 1; n >= 0; n--) t(e[n], n, e);
                })(e, function(e) {
                  r = n(r, e);
                }),
                r);
              return Wh(o, o.ownerDocument.createTextNode(Ih));
            },
            Xh = function(e) {
              e.on("mouseup keydown", function(t) {
                !(function(e, t) {
                  var n = e.selection,
                    r = e.getBody();
                  qh(e, null, !1),
                    (8 !== t && 46 !== t) ||
                      !n.isCollapsed() ||
                      n.getStart().innerHTML !== Ih ||
                      qh(e, Lu(r, n.getStart())),
                    (37 !== t && 39 !== t) || qh(e, Lu(r, n.getStart()));
                })(e, t.keyCode);
              });
            },
            Yh = function(e, t) {
              return (
                e.schema.getTextInlineElements().hasOwnProperty(tr(t)) &&
                !Hu(t.dom()) &&
                !ko.isBogus(t.dom())
              );
            },
            Gh = {},
            Jh = qt.filter,
            Qh = qt.each;
          !(function(e, t) {
            var n = Gh[e];
            n || (Gh[e] = n = []), Gh[e].push(t);
          })("pre", function(e) {
            var t,
              n,
              r = e.selection.getRng();
            (t = ko.matchNodeNames("pre")),
              r.collapsed ||
                ((n = e.selection.getSelectedBlocks()),
                Qh(
                  Jh(Jh(n, t), function(e) {
                    return (
                      t(e.previousSibling) &&
                      -1 !== qt.indexOf(n, e.previousSibling)
                    );
                  }),
                  function(e) {
                    var t, n;
                    (t = e.previousSibling),
                      gn((n = e)).remove(),
                      gn(t)
                        .append("<br><br>")
                        .append(n.childNodes);
                  }
                ));
          });
          var Zh = function(e, t) {
              Qh(Gh[e], function(e) {
                e(t);
              });
            },
            em = Yt.each,
            tm = function(e) {
              this.compare = function(t, n) {
                if (t.nodeName !== n.nodeName) return !1;
                var r = function(t) {
                    var n = {};
                    return (
                      em(e.getAttribs(t), function(r) {
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
                  el.isBookmarkNode(t) ||
                  el.isBookmarkNode(n)
                );
              };
            },
            nm = /^(src|href|style)$/,
            rm = Yt.each,
            om = ol.isEq,
            im = function(e, t, n) {
              return e.isChildOf(t, n) && t !== n && !e.isBlock(n);
            },
            am = function(e, t, n) {
              var r, o, i;
              return (
                (r = t[n ? "startContainer" : "endContainer"]),
                (o = t[n ? "startOffset" : "endOffset"]),
                ko.isElement(r) &&
                  ((i = r.childNodes.length - 1),
                  !n && o && o--,
                  (r = r.childNodes[o > i ? i : o])),
                ko.isText(r) &&
                  n &&
                  o >= r.nodeValue.length &&
                  (r = new Zr(r, e.getBody()).next() || r),
                ko.isText(r) &&
                  !n &&
                  0 === o &&
                  (r = new Zr(r, e.getBody()).prev() || r),
                r
              );
            },
            um = function(e, t, n, r) {
              var o = e.create(n, r);
              return t.parentNode.insertBefore(o, t), o.appendChild(t), o;
            },
            sm = function(e, t, n, r, o) {
              var i = Jn.fromDom(t),
                a = Jn.fromDom(e.create(r, o)),
                u = n ? Pr(i) : Dr(i);
              return (
                zi(a, u),
                n ? (xi(i, a), Ei(a, i)) : (Si(i, a), Ni(a, i)),
                a.dom()
              );
            },
            lm = function(e, t, n, r) {
              return (
                !(t = ol.getNonWhiteSpaceSibling(t, n, r)) ||
                "BR" === t.nodeName ||
                e.isBlock(t)
              );
            },
            cm = function(e, t, n, r, o) {
              var i,
                a,
                u,
                s = e.dom;
              if (
                !(function(e, t, n) {
                  return (
                    !!om(t, n.inline) ||
                    !!om(t, n.block) ||
                    (n.selector
                      ? ko.isElement(t) && e.is(t, n.selector)
                      : void 0)
                  );
                })(s, r, t) &&
                !(function(e, t) {
                  return t.links && "A" === e.tagName;
                })(r, t)
              )
                return !1;
              if ("all" !== t.remove)
                for (
                  rm(t.styles, function(e, i) {
                    (e = ol.normalizeStyleValue(s, ol.replaceVars(e, n), i)),
                      "number" == typeof i && ((i = e), (o = 0)),
                      (t.remove_similar || !o || om(ol.getStyle(s, o, i), e)) &&
                        s.setStyle(r, i, ""),
                      (u = 1);
                  }),
                    u &&
                      "" === s.getAttrib(r, "style") &&
                      (r.removeAttribute("style"),
                      r.removeAttribute("data-mce-style")),
                    rm(t.attributes, function(e, t) {
                      var i;
                      if (
                        ((e = ol.replaceVars(e, n)),
                        "number" == typeof t && ((t = e), (o = 0)),
                        !o || om(s.getAttrib(o, t), e))
                      ) {
                        if (
                          "class" === t &&
                          (e = s.getAttrib(r, t)) &&
                          ((i = ""),
                          rm(e.split(/\s+/), function(e) {
                            /mce\-\w+/.test(e) && (i += (i ? " " : "") + e);
                          }),
                          i)
                        )
                          return void s.setAttrib(r, t, i);
                        "class" === t && r.removeAttribute("className"),
                          nm.test(t) && r.removeAttribute("data-mce-" + t),
                          r.removeAttribute(t);
                      }
                    }),
                    rm(t.classes, function(e) {
                      (e = ol.replaceVars(e, n)),
                        (o && !s.hasClass(o, e)) || s.removeClass(r, e);
                    }),
                    a = s.getAttribs(r),
                    i = 0;
                  i < a.length;
                  i++
                ) {
                  var l = a[i].nodeName;
                  if (0 !== l.indexOf("_") && 0 !== l.indexOf("data-"))
                    return !1;
                }
              return "none" !== t.remove
                ? ((function(e, t, n) {
                    var r,
                      o = t.parentNode,
                      i = e.dom,
                      a = jl.getForcedRootBlock(e);
                    n.block &&
                      (a
                        ? o === i.getRoot() &&
                          ((n.list_block && om(t, n.list_block)) ||
                            rm(Yt.grep(t.childNodes), function(t) {
                              ol.isValid(e, a, t.nodeName.toLowerCase())
                                ? r
                                  ? r.appendChild(t)
                                  : ((r = um(i, t, a)),
                                    i.setAttribs(
                                      r,
                                      e.settings.forced_root_block_attrs
                                    ))
                                : (r = 0);
                            }))
                        : i.isBlock(t) &&
                          !i.isBlock(o) &&
                          (lm(i, t, !1) ||
                            lm(i, t.firstChild, !0, 1) ||
                            t.insertBefore(i.create("br"), t.firstChild),
                          lm(i, t, !0) ||
                            lm(i, t.lastChild, !1, 1) ||
                            t.appendChild(i.create("br")))),
                      (n.selector && n.inline && !om(n.inline, t)) ||
                        i.remove(t, 1);
                  })(e, r, t),
                  !0)
                : void 0;
            },
            fm = {
              removeFormat: cm,
              remove: function(e, t, n, r, o) {
                var i,
                  a,
                  u = e.formatter.get(t),
                  s = u[0],
                  l = !0,
                  c = e.dom,
                  f = e.selection,
                  d = function(r) {
                    var i = (function(e, t, n, r, o) {
                      var i;
                      return (
                        rm(
                          ol.getParents(e.dom, t.parentNode).reverse(),
                          function(t) {
                            var a;
                            i ||
                              "_start" === t.id ||
                              "_end" === t.id ||
                              ((a = vh.matchNode(e, t, n, r, o)) &&
                                !1 !== a.split &&
                                (i = t));
                          }
                        ),
                        i
                      );
                    })(e, r, t, n, o);
                    return (function(e, t, n, r, o, i, a, u) {
                      var s,
                        l,
                        c,
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
                          for (l = m.clone(s, !1), d = 0; d < t.length; d++)
                            if (cm(e, t[d], u, l, l)) {
                              l = 0;
                              break;
                            }
                          l && (c && l.appendChild(c), f || (f = l), (c = l));
                        }
                        !i || (a.mixed && m.isBlock(n)) || (r = m.split(n, r)),
                          c &&
                            (o.parentNode.insertBefore(c, o), f.appendChild(o));
                      }
                      return r;
                    })(e, u, i, r, r, !0, s, n);
                  },
                  h = function(t) {
                    var r, o, i, a, f;
                    if (
                      (ko.isElement(t) &&
                        c.getContentEditable(t) &&
                        ((a = l),
                        (l = "true" === c.getContentEditable(t)),
                        (f = !0)),
                      (r = Yt.grep(t.childNodes)),
                      l && !f)
                    )
                      for (
                        o = 0, i = u.length;
                        o < i && !cm(e, u[o], n, t, t);
                        o++
                      );
                    if (s.deep && r.length) {
                      for (o = 0, i = r.length; o < i; o++) h(r[o]);
                      f && (l = a);
                    }
                  },
                  m = function(e) {
                    var t = c.get(e ? "_start" : "_end"),
                      n = t[e ? "firstChild" : "lastChild"];
                    return (
                      (function(e) {
                        return (
                          el.isBookmarkNode(e) &&
                          ko.isElement(e) &&
                          ("_start" === e.id || "_end" === e.id)
                        );
                      })(n) && (n = n[e ? "firstChild" : "lastChild"]),
                      ko.isText(n) &&
                        0 === n.data.length &&
                        (n = e
                          ? t.previousSibling || t.nextSibling
                          : t.nextSibling || t.previousSibling),
                      c.remove(t, !0),
                      n
                    );
                  },
                  g = function(t) {
                    var n,
                      r,
                      o = t.commonAncestorContainer;
                    if (((t = pl(e, t, u, !0)), s.split)) {
                      if (
                        ((t = yh.split(t)),
                        (n = am(e, t, !0)) !== (r = am(e, t)))
                      ) {
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
                          im(c, n, r))
                        ) {
                          var i = _.from(n.firstChild).getOr(n);
                          return (
                            d(
                              sm(c, i, !0, "span", {
                                id: "_start",
                                "data-mce-type": "bookmark"
                              })
                            ),
                            void m(!0)
                          );
                        }
                        if (im(c, r, n))
                          return (
                            (i = _.from(r.lastChild).getOr(r)),
                            d(
                              sm(c, i, !1, "span", {
                                id: "_end",
                                "data-mce-type": "bookmark"
                              })
                            ),
                            void m(!1)
                          );
                        (n = um(c, n, "span", {
                          id: "_start",
                          "data-mce-type": "bookmark"
                        })),
                          (r = um(c, r, "span", {
                            id: "_end",
                            "data-mce-type": "bookmark"
                          })),
                          d(n),
                          d(r),
                          (n = m(!0)),
                          (r = m());
                      } else n = r = d(n);
                      (t.startContainer = n.parentNode ? n.parentNode : n),
                        (t.startOffset = c.nodeIndex(n)),
                        (t.endContainer = r.parentNode ? r.parentNode : r),
                        (t.endOffset = c.nodeIndex(r) + 1);
                    }
                    bl.walk(c, t, function(t) {
                      rm(t, function(t) {
                        h(t),
                          ko.isElement(t) &&
                            "underline" ===
                              e.dom.getStyle(t, "text-decoration") &&
                            t.parentNode &&
                            "underline" ===
                              ol.getTextDecoration(c, t.parentNode) &&
                            cm(
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
                    ? ((a = c.createRng()).setStartBefore(r),
                      a.setEndAfter(r),
                      g(a))
                    : g(r);
                else if ("false" !== c.getContentEditable(f.getNode()))
                  f.isCollapsed() &&
                  s.inline &&
                  !c.select("td[data-mce-selected],th[data-mce-selected]")
                    .length
                    ? (function(e, t, n, r) {
                        var o,
                          i,
                          a,
                          u,
                          s,
                          l,
                          c,
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
                          if (vh.matchNode(e, s, t, n, r)) {
                            l = s;
                            break;
                          }
                          s.nextSibling && (u = !0),
                            h.push(s),
                            (s = s.parentNode);
                        }
                        if (l)
                          if (u) {
                            (a = d.getBookmark()), m.collapse(!0);
                            var g = pl(e, m, e.formatter.get(t), !0);
                            (g = yh.split(g)),
                              e.formatter.remove(t, n, g),
                              d.moveToBookmark(a);
                          } else {
                            c = Lu(e.getBody(), l);
                            var p = Uh(!1).dom(),
                              v = Kh(h, p);
                            $h(e, p, c || l),
                              jh(e, c, !1),
                              d.setCursorLocation(v, 1),
                              f.isEmpty(l) && f.remove(l);
                          }
                      })(e, t, n, o)
                    : ((i = Pu.getPersistentBookmark(e.selection, !0)),
                      g(f.getRng()),
                      f.moveToBookmark(i),
                      s.inline &&
                        vh.match(e, t, n, f.getStart()) &&
                        ol.moveStart(c, f, f.getRng()),
                      e.nodeChanged());
                else {
                  r = f.getNode();
                  for (
                    var p = 0, v = u.length;
                    p < v && (!u[p].ceFalseOverride || !cm(e, u[p], n, r, r));
                    p++
                  );
                }
              }
            },
            dm = Yt.each,
            hm = function(e) {
              return (
                e &&
                1 === e.nodeType &&
                !el.isBookmarkNode(e) &&
                !Hu(e) &&
                !ko.isBogus(e)
              );
            },
            mm = function(e, t) {
              var n;
              for (n = e; n; n = n[t]) {
                if (3 === n.nodeType && 0 !== n.nodeValue.length) return e;
                if (1 === n.nodeType && !el.isBookmarkNode(n)) return n;
              }
              return e;
            },
            gm = function(e, t, n) {
              var r,
                o,
                i = new tm(e);
              if (
                t &&
                n &&
                ((t = mm(t, "previousSibling")),
                (n = mm(n, "nextSibling")),
                i.compare(t, n))
              ) {
                for (r = t.nextSibling; r && r !== n; )
                  (o = r), (r = r.nextSibling), t.appendChild(o);
                return (
                  e.remove(n),
                  Yt.each(Yt.grep(n.childNodes), function(e) {
                    t.appendChild(e);
                  }),
                  t
                );
              }
              return n;
            },
            pm = function(e, t, n) {
              dm(e.childNodes, function(e) {
                hm(e) && (t(e) && n(e), e.hasChildNodes() && pm(e, t, n));
              });
            },
            vm = function(e, t) {
              return u(function(t, n) {
                return !(!n || !ol.getStyle(e, n, t));
              }, t);
            },
            bm = function(e, t, n) {
              return u(
                function(t, n, r) {
                  e.setStyle(r, t, n),
                    "" === r.getAttribute("style") &&
                      r.removeAttribute("style"),
                    ym(e, r);
                },
                t,
                n
              );
            },
            ym = function(e, t) {
              "SPAN" === t.nodeName &&
                0 === e.getAttribs(t).length &&
                e.remove(t, !0);
            },
            Cm = function(e, t) {
              var n;
              1 === t.nodeType &&
                t.parentNode &&
                1 === t.parentNode.nodeType &&
                ((n = ol.getTextDecoration(e, t.parentNode)),
                e.getStyle(t, "color") && n
                  ? e.setStyle(t, "text-decoration", n)
                  : e.getStyle(t, "text-decoration") === n &&
                    e.setStyle(t, "text-decoration", null));
            },
            wm = function(e, t, n, r) {
              dm(t, function(t) {
                dm(e.dom.select(t.inline, r), function(r) {
                  hm(r) && fm.removeFormat(e, t, n, r, t.exact ? r : null);
                }),
                  (function(e, t, n) {
                    if (t.clear_child_styles) {
                      var r = t.links ? "*:not(a)" : "*";
                      dm(e.select(r, n), function(n) {
                        hm(n) &&
                          dm(t.styles, function(t, r) {
                            e.setStyle(n, r, "");
                          });
                      });
                    }
                  })(e.dom, t, r);
              });
            },
            xm = function(e, t, n, r) {
              (t.styles.color || t.styles.textDecoration) &&
                (Yt.walk(r, u(Cm, e), "childNodes"), Cm(e, r));
            },
            Sm = function(e, t, n, r) {
              t.styles &&
                t.styles.backgroundColor &&
                pm(
                  r,
                  vm(e, "fontSize"),
                  bm(
                    e,
                    "backgroundColor",
                    ol.replaceVars(t.styles.backgroundColor, n)
                  )
                );
            },
            Em = function(e, t, n, r) {
              ("sub" !== t.inline && "sup" !== t.inline) ||
                (pm(r, vm(e, "fontSize"), bm(e, "fontSize", "")),
                e.remove(e.select("sup" === t.inline ? "sub" : "sup", r), !0));
            },
            Nm = function(e, t, n, r) {
              r &&
                !1 !== t.merge_siblings &&
                ((r = gm(e, ol.getNonWhiteSpaceSibling(r), r)),
                (r = gm(e, r, ol.getNonWhiteSpaceSibling(r, !0))));
            },
            zm = function(e, t, n, r, o) {
              (vh.matchNode(e, o.parentNode, n, r) &&
                fm.removeFormat(e, t, r, o)) ||
                (t.merge_with_parents &&
                  e.dom.getParent(o.parentNode, function(i) {
                    if (vh.matchNode(e, i, n, r))
                      return fm.removeFormat(e, t, r, o), !0;
                  }));
            },
            km = function(e) {
              var t = gu.fromRangeStart(e),
                r = gu.fromRangeEnd(e),
                o = e.commonAncestorContainer;
              return Ws.fromPosition(!1, o, r)
                .map(function(i) {
                  return !ds(t, r, o) && ds(t, i, o)
                    ? (function(e, t, r, o) {
                        var i = n.document.createRange();
                        return i.setStart(e, t), i.setEnd(r, o), i;
                      })(t.container(), t.offset(), i.container(), i.offset())
                    : e;
                })
                .getOr(e);
            },
            Tm = function(e) {
              return e.collapsed ? e : km(e);
            },
            _m = Yt.each,
            Am = function(e, t, n, r) {
              var o,
                i,
                a = e.formatter.get(t),
                u = a[0],
                s = !r && e.selection.isCollapsed(),
                l = e.dom,
                c = e.selection,
                f = function(e, t) {
                  if (((t = t || u), e)) {
                    if (
                      (t.onformat && t.onformat(e, t, n, r),
                      _m(t.styles, function(t, r) {
                        l.setStyle(e, r, ol.replaceVars(t, n));
                      }),
                      t.styles)
                    ) {
                      var o = l.getAttrib(e, "style");
                      o && e.setAttribute("data-mce-style", o);
                    }
                    _m(t.attributes, function(t, r) {
                      l.setAttrib(e, r, ol.replaceVars(t, n));
                    }),
                      _m(t.classes, function(t) {
                        (t = ol.replaceVars(t, n)),
                          l.hasClass(e, t) || l.addClass(e, t);
                      });
                  }
                },
                d = function(e, t) {
                  var n = !1;
                  return (
                    !!u.selector &&
                    (_m(e, function(e) {
                      if (!("collapsed" in e && e.collapsed !== s))
                        return l.is(t, e.selector) && !Hu(t)
                          ? (f(t, e), (n = !0), !1)
                          : void 0;
                    }),
                    n)
                  );
                },
                h = function(r, o, i, s) {
                  var l,
                    c,
                    h = [],
                    m = !0;
                  (l = u.inline || u.block),
                    (c = r.create(l)),
                    f(c),
                    bl.walk(r, o, function(o) {
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
                            ol.isEq(p, "br"))
                          )
                            return (i = 0), void (u.block && r.remove(o));
                          if (u.wrapper && vh.matchNode(e, o, t, n)) i = 0;
                          else {
                            if (
                              m &&
                              !b &&
                              u.block &&
                              !u.wrapper &&
                              ol.isTextBlock(e, p) &&
                              ol.isValid(e, v, l)
                            )
                              return (
                                (o = r.rename(o, l)),
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
                            !ol.isValid(e, l, p) ||
                            !ol.isValid(e, v, l) ||
                            (!s &&
                              3 === o.nodeType &&
                              1 === o.nodeValue.length &&
                              65279 === o.nodeValue.charCodeAt(0)) ||
                            Hu(o) ||
                            (u.inline && r.isBlock(o))
                              ? ((i = 0),
                                _m(Yt.grep(o.childNodes), g),
                                b && (m = y),
                                (i = 0))
                              : (i ||
                                  ((i = r.clone(c, !1)),
                                  o.parentNode.insertBefore(i, o),
                                  h.push(i)),
                                i.appendChild(o));
                          }
                        };
                      _m(o, g);
                    }),
                    !0 === u.links &&
                      _m(h, function(e) {
                        var t = function(e) {
                          "A" === e.nodeName && f(e, u),
                            _m(Yt.grep(e.childNodes), t);
                        };
                        t(e);
                      }),
                    _m(h, function(o) {
                      var i,
                        s = function(e) {
                          var t = !1;
                          return (
                            _m(e.childNodes, function(e) {
                              if (
                                (function(e) {
                                  return (
                                    e &&
                                    1 === e.nodeType &&
                                    !el.isBookmarkNode(e) &&
                                    !Hu(e) &&
                                    !ko.isBogus(e)
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
                          _m(e.childNodes, function(e) {
                            ol.isWhiteSpaceNode(e) ||
                              el.isBookmarkNode(e) ||
                              t++;
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
                                    !el.isBookmarkNode(t) &&
                                    vh.matchName(r, t, u) &&
                                    ((n = r.clone(t, !1)),
                                    f(n),
                                    r.replace(n, e, !0),
                                    r.remove(t, 1)),
                                  n || e
                                );
                              })(o)),
                            wm(e, a, n, o),
                            zm(e, u, t, n, o),
                            Sm(r, u, n, o),
                            Em(r, u, n, o),
                            Nm(r, u, n, o))
                          : r.remove(o, 1);
                    });
                };
              if ("false" !== l.getContentEditable(c.getNode())) {
                if (u) {
                  if (r)
                    r.nodeType
                      ? d(a, r) ||
                        ((i = l.createRng()).setStartBefore(r),
                        i.setEndAfter(r),
                        h(l, pl(e, i, a), 0, !0))
                      : h(l, r, 0, !0);
                  else if (
                    s &&
                    u.inline &&
                    !l.select("td[data-mce-selected],th[data-mce-selected]")
                      .length
                  )
                    !(function(e, t, n) {
                      var r,
                        o,
                        i,
                        a,
                        u,
                        s,
                        l = e.selection;
                      (a = (r = l.getRng(!0)).startOffset),
                        (s = r.startContainer.nodeValue),
                        (o = Lu(e.getBody(), l.getStart())) && (i = Fh(o));
                      var c,
                        f,
                        d = /[^\s\u00a0\u00ad\u200b\ufeff]/;
                      s &&
                      a > 0 &&
                      a < s.length &&
                      d.test(s.charAt(a)) &&
                      d.test(s.charAt(a - 1))
                        ? ((u = l.getBookmark()),
                          r.collapse(!0),
                          (r = pl(e, r, e.formatter.get(t))),
                          (r = yh.split(r)),
                          e.formatter.apply(t, n, r),
                          l.moveToBookmark(u))
                        : (o && i.nodeValue === Ih
                            ? e.formatter.apply(t, n, o)
                            : ((c = e.getDoc()),
                              (f = Uh(!0).dom()),
                              (i = (o = c.importNode(f, !0)).firstChild),
                              r.insertNode(o),
                              (a = 1),
                              e.formatter.apply(t, n, o)),
                          l.setCursorLocation(i, a));
                    })(e, t, n);
                  else {
                    var m = e.selection.getNode();
                    e.settings.forced_root_block ||
                      !a[0].defaultBlock ||
                      l.getParent(m, l.isBlock) ||
                      Am(e, a[0].defaultBlock),
                      e.selection.setRng(Tm(e.selection.getRng())),
                      (o = Pu.getPersistentBookmark(e.selection, !0)),
                      h(l, pl(e, c.getRng(), a)),
                      u.styles && xm(l, u, n, m),
                      c.moveToBookmark(o),
                      ol.moveStart(l, c, c.getRng()),
                      e.nodeChanged();
                  }
                  Zh(t, e);
                }
              } else {
                r = c.getNode();
                for (var g = 0, p = a.length; g < p; g++)
                  if (a[g].ceFalseOverride && l.is(r, a[g].selector))
                    return void f(r, a[g]);
              }
            },
            Bm = { applyFormat: Am },
            Rm = Yt.each,
            Mm = {
              formatChanged: function(e, t, n, r, o) {
                null === t.get() &&
                  (function(e, t) {
                    var n = {};
                    e.set({}),
                      t.on("NodeChange", function(r) {
                        var o = ol.getParents(t.dom, r.element),
                          i = {};
                        (o = Yt.grep(o, function(e) {
                          return (
                            1 === e.nodeType &&
                            !e.getAttribute("data-mce-bogus")
                          );
                        })),
                          Rm(e.get(), function(e, r) {
                            Rm(o, function(a) {
                              return t.formatter.matchNode(a, r, {}, e.similar)
                                ? (n[r] ||
                                    (Rm(e, function(e) {
                                      e(!0, { node: a, format: r, parents: o });
                                    }),
                                    (n[r] = e)),
                                  (i[r] = e),
                                  !1)
                                : !vh.matchesUnInheritedFormatSelector(
                                    t,
                                    a,
                                    r
                                  ) && void 0;
                            });
                          }),
                          Rm(n, function(e, t) {
                            i[t] ||
                              (delete n[t],
                              Rm(e, function(e) {
                                e(!1, {
                                  node: r.element,
                                  format: t,
                                  parents: o
                                });
                              }));
                          });
                      });
                  })(t, e),
                  (function(e, t, n, r) {
                    var o = e.get();
                    Rm(t.split(","), function(e) {
                      o[e] || ((o[e] = []), (o[e].similar = r)), o[e].push(n);
                    }),
                      e.set(o);
                  })(t, n, r, o);
              }
            },
            Om = {
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
                  blockquote: {
                    block: "blockquote",
                    wrapper: !0,
                    remove: "all"
                  },
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
                      Yt.each(r, function(n, r) {
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
                  Yt.each(
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
            Dm = Yt.each,
            Pm = ci.DOM,
            Hm = function(e, t) {
              var n,
                r,
                o,
                i = (t && t.schema) || Qo({}),
                a = function(e) {
                  var t;
                  return (
                    (r =
                      "string" == typeof e
                        ? { name: e, classes: [], attrs: {} }
                        : e),
                    (function(e, t) {
                      t.classes.length && Pm.addClass(e, t.classes.join(" ")),
                        Pm.setAttribs(e, t.attrs);
                    })((t = Pm.create(r.name)), r),
                    t
                  );
                },
                u = function(e, t, n) {
                  var r,
                    o,
                    s,
                    l = t.length > 0 && t[0],
                    c = l && l.name;
                  if (
                    (s = (function(e, t) {
                      var n =
                          "string" != typeof e ? e.nodeName.toLowerCase() : e,
                        r = i.getElementRule(n),
                        o = r && r.parentsRequired;
                      return (
                        !(!o || !o.length) &&
                        (t && -1 !== Yt.inArray(o, t) ? t : o[0])
                      );
                    })(e, c))
                  )
                    c === s ? ((o = t[0]), (t = t.slice(1))) : (o = s);
                  else if (l) (o = t[0]), (t = t.slice(1));
                  else if (!n) return e;
                  return (
                    o && (r = a(o)).appendChild(e),
                    n &&
                      (r || (r = Pm.create("div")).appendChild(e),
                      Yt.each(n, function(t) {
                        var n = a(t);
                        r.insertBefore(n, e);
                      })),
                    u(r, t, o && o.siblings)
                  );
                };
              return e && e.length
                ? ((r = e[0]),
                  (n = a(r)),
                  (o = Pm.create("div")).appendChild(
                    u(n, e.slice(1), r.siblings)
                  ),
                  o)
                : "";
            },
            Lm = function(e) {
              var t,
                n = { classes: [], attrs: {} };
              return (
                "*" !== (e = n.selector = Yt.trim(e)) &&
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
                            Yt.inArray(
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
            Im = function(e) {
              return e && "string" == typeof e
                ? ((e = (e = e.split(/\s*,\s*/)[0]).replace(
                    /\s*(~\+|~|\+|>)\s*/g,
                    "$1"
                  )),
                  Yt.map(e.split(/(?:>|\s+(?![^\[\]]+\]))/), function(e) {
                    var t = Yt.map(e.split(/(?:~\+|~|\+)/), Lm),
                      n = t.pop();
                    return t.length && (n.siblings = t), n;
                  }).reverse())
                : [];
            },
            Vm = {
              getCssText: function(e, t) {
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
                var l = function(e) {
                  return e.replace(/%(\w+)/g, "");
                };
                if ("string" == typeof t) {
                  if (!(t = e.formatter.get(t))) return;
                  t = t[0];
                }
                return "preview" in t && !1 === (u = t.preview)
                  ? ""
                  : ((n = t.block || t.inline || "span"),
                    (i = Im(t.selector)).length
                      ? (i[0].name || (i[0].name = n),
                        (n = t.selector),
                        (r = Hm(i, e)))
                      : (r = Hm([n], e)),
                    (o = Pm.select(n, r)[0] || r.firstChild),
                    Dm(t.styles, function(e, t) {
                      (e = l(e)) && Pm.setStyle(o, t, e);
                    }),
                    Dm(t.attributes, function(e, t) {
                      (e = l(e)) && Pm.setAttrib(o, t, e);
                    }),
                    Dm(t.classes, function(e) {
                      (e = l(e)), Pm.hasClass(o, e) || Pm.addClass(o, e);
                    }),
                    e.fire("PreviewFormats"),
                    Pm.setStyles(r, { position: "absolute", left: -65535 }),
                    e.getBody().appendChild(r),
                    (a = Pm.getStyle(e.getBody(), "fontSize", !0)),
                    (a = /px$/.test(a) ? parseInt(a, 10) : 0),
                    Dm(u.split(" "), function(t) {
                      var n = Pm.getStyle(o, t, !0);
                      if (
                        !(
                          ("background-color" === t &&
                            /transparent|rgba\s*\([^)]+,\s*0\)/.test(n) &&
                            ((n = Pm.getStyle(e.getBody(), t, !0)),
                            "#ffffff" === Pm.toHex(n).toLowerCase())) ||
                          ("color" === t &&
                            "#000000" === Pm.toHex(n).toLowerCase())
                        )
                      ) {
                        if ("font-size" === t && /em|%$/.test(n)) {
                          if (0 === a) return;
                          n =
                            (parseFloat(n) / (/%$/.test(n) ? 100 : 1)) * a +
                            "px";
                        }
                        "border" === t && n && (s += "padding:0 2px;"),
                          (s += t + ":" + n + ";");
                      }
                    }),
                    e.fire("AfterPreviewFormats"),
                    Pm.remove(r),
                    s);
              },
              parseSelector: Im,
              selectorToHtml: function(e, t) {
                return Hm(Im(e), t);
              }
            },
            Fm = {
              toggle: function(e, t, n, r, o) {
                var i = t.get(n);
                !vh.match(e, n, r, o) || ("toggle" in i[0] && !i[0].toggle)
                  ? Bm.applyFormat(e, n, r, o)
                  : fm.remove(e, n, r, o);
              }
            },
            Um = {
              setup: function(e) {
                e.addShortcut("meta+b", "", "Bold"),
                  e.addShortcut("meta+i", "", "Italic"),
                  e.addShortcut("meta+u", "", "Underline");
                for (var t = 1; t <= 6; t++)
                  e.addShortcut("access+" + t, "", [
                    "FormatBlock",
                    !1,
                    "h" + t
                  ]);
                e.addShortcut("access+7", "", ["FormatBlock", !1, "p"]),
                  e.addShortcut("access+8", "", ["FormatBlock", !1, "div"]),
                  e.addShortcut("access+9", "", ["FormatBlock", !1, "address"]);
              }
            };
          function jm(e) {
            var t = (function(e) {
                var t = {},
                  n = function(e, r) {
                    e &&
                      ("string" != typeof e
                        ? Yt.each(e, function(e, t) {
                            n(t, e);
                          })
                        : (M(r) || (r = [r]),
                          Yt.each(r, function(e) {
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
                  n(Om.get(e.dom)),
                  n(e.settings.formats),
                  {
                    get: function(e) {
                      return e ? t[e] : t;
                    },
                    has: function(e) {
                      return fr(t, e);
                    },
                    register: n,
                    unregister: function(e) {
                      return e && t[e] && delete t[e], t;
                    }
                  }
                );
              })(e),
              n = pi(null);
            return (
              Um.setup(e),
              Xh(e),
              {
                get: t.get,
                has: t.has,
                register: t.register,
                unregister: t.unregister,
                apply: u(Bm.applyFormat, e),
                remove: u(fm.remove, e),
                toggle: u(Fm.toggle, e, t),
                match: u(vh.match, e),
                matchAll: u(vh.matchAll, e),
                matchNode: u(vh.matchNode, e),
                canApply: u(vh.canApply, e),
                formatChanged: u(Mm.formatChanged, e, n),
                getCssText: u(Vm.getCssText, e)
              }
            );
          }
          var qm = {
              register: function(e, t, n) {
                e.addAttributeFilter("data-mce-tabindex", function(e, t) {
                  for (var n, r = e.length; r--; )
                    (n = e[r]).attr(
                      "tabindex",
                      n.attributes.map["data-mce-tabindex"]
                    ),
                      n.attr(t, null);
                }),
                  e.addAttributeFilter("src,href,style", function(e, r) {
                    for (
                      var o,
                        i,
                        a = e.length,
                        u = "data-mce-" + r,
                        s = t.url_converter,
                        l = t.url_converter_scope;
                      a--;

                    )
                      void 0 !== (i = (o = e[a]).attributes.map[u])
                        ? (o.attr(r, i.length > 0 ? i : null), o.attr(u, null))
                        : ((i = o.attributes.map[r]),
                          "style" === r
                            ? (i = n.serializeStyle(n.parseStyle(i), o.name))
                            : s && (i = s.call(l, i, r, o.name)),
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
                      "bookmark" !==
                        (r = e[o]).attributes.map["data-mce-type"] ||
                        n.cleanup ||
                        r.remove();
                  }),
                  e.addNodeFilter("noscript", function(e) {
                    for (var t, n = e.length; n--; )
                      (t = e[n].firstChild) && (t.value = Fo.decode(t.value));
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
                                "mce-no/type" === i
                                  ? null
                                  : i.replace(/^mce\-/, "")
                              ),
                            "xhtml" === t.element_format &&
                              o.length > 0 &&
                              (r.firstChild.value =
                                "// <![CDATA[\n" + u(o) + "\n// ]]>"))
                          : "xhtml" === t.element_format &&
                            o.length > 0 &&
                            (r.firstChild.value =
                              "\x3c!--\n" + u(o) + "\n--\x3e");
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
                            "type" in n.attributes.map ||
                            n.attr("type", "text"));
                  }),
                  e.addAttributeFilter("data-mce-type", function(t) {
                    F(t, function(t) {
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
              trimTrailingBr: function(e) {
                var t,
                  n,
                  r = function(e) {
                    return e && "br" === e.name;
                  };
                r((t = e.lastChild)) &&
                  r((n = t.prev)) &&
                  (t.remove(), n.remove());
              }
            },
            $m = {
              process: function(e, t, r) {
                return (function(e, t) {
                  return e && e.hasEventListeners("PreProcess") && !t.no_events;
                })(e, r)
                  ? (function(e, t, r) {
                      var o,
                        i,
                        a,
                        u = e.dom;
                      return (
                        (t = t.cloneNode(!0)),
                        (o = n.document.implementation).createHTMLDocument &&
                          ((i = o.createHTMLDocument("")),
                          Yt.each(
                            "BODY" === t.nodeName ? t.childNodes : [t],
                            function(e) {
                              i.body.appendChild(i.importNode(e, !0));
                            }
                          ),
                          (t =
                            "BODY" !== t.nodeName ? i.body.firstChild : i.body),
                          (a = u.doc),
                          (u.doc = i)),
                        Nc(e, Tl(r, { node: t })),
                        a && (u.doc = a),
                        t
                      );
                    })(e, t, r)
                  : t;
              }
            },
            Wm = function(e, t, n) {
              e.addNodeFilter("font", function(e) {
                F(e, function(e) {
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
                      F(t, function(t) {
                        e.attr(t, null);
                      });
                    })(e, ["color", "face", "size"]);
                });
              });
            },
            Km = function(e, t) {
              var n = ei();
              t.convert_fonts_to_spans &&
                Wm(e, n, Yt.explode(t.font_size_legacy_values)),
                (function(e, t) {
                  e.addNodeFilter("strike", function(e) {
                    F(e, function(e) {
                      var n = t.parse(e.attr("style"));
                      (n["text-decoration"] = "line-through"),
                        (e.name = "span"),
                        e.attr("style", t.serialize(n));
                    });
                  });
                })(e, n);
            },
            Xm = {
              register: function(e, t) {
                t.inline_styles && Km(e, t);
              }
            },
            Ym = function(e, t, n, r) {
              (e.padd_empty_with_br || t.insert) && n[r.name]
                ? (r.empty().append(new Rl("br", 1)).shortEnded = !0)
                : (r.empty().append(new Rl("#text", 3)).value = " ");
            },
            Gm = function(e) {
              return Jm(e, "#text") && " " === e.firstChild.value;
            },
            Jm = function(e, t) {
              return (
                e &&
                e.firstChild &&
                e.firstChild === e.lastChild &&
                e.firstChild.name === t
              );
            },
            Qm = function(e, t, n, r) {
              return r.isEmpty(t, n, function(t) {
                return (function(e, t) {
                  var n = e.getElementRule(t.name);
                  return n && n.paddEmpty;
                })(e, t);
              });
            },
            Zm = function(e, t) {
              return e && (t[e.name] || "br" === e.name);
            },
            eg = function(e, t) {
              var n = e.schema;
              t.remove_trailing_brs &&
                e.addNodeFilter("br", function(e, r, o) {
                  var i,
                    a,
                    u,
                    s,
                    l,
                    c,
                    f,
                    d,
                    h = e.length,
                    m = Yt.extend({}, n.getBlockElements()),
                    g = n.getNonEmptyElements(),
                    p = n.getNonEmptyElements();
                  for (m.body = 1, i = 0; i < h; i++)
                    if (
                      ((u = (a = e[i]).parent),
                      m[a.parent.name] && a === u.lastChild)
                    ) {
                      for (l = a.prev; l; ) {
                        if (
                          "span" !== (c = l.name) ||
                          "bookmark" !== l.attr("data-mce-type")
                        ) {
                          if ("br" !== c) break;
                          if ("br" === c) {
                            a = null;
                            break;
                          }
                        }
                        l = l.prev;
                      }
                      a &&
                        (a.remove(),
                        Qm(n, g, p, u) &&
                          (f = n.getElementRule(u.name)) &&
                          (f.removeEmpty
                            ? u.remove()
                            : f.paddEmpty && Ym(t, o, m, u)));
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
                        (((d = new Rl("#text", 3)).value = " "), a.replace(d));
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
                          (o = r ? Yt.trim(r) : ""),
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
                          var o = new Rl("li", 1);
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
                        l = e.length,
                        c = n.getValidClasses();
                      l--;

                    ) {
                      for (
                        r = (t = e[l]).attr("class").split(" "), a = "", o = 0;
                        o < r.length;
                        o++
                      )
                        (i = r[o]),
                          (s = !1),
                          (u = c["*"]) && u[i] && (s = !0),
                          (u = c[t.name]),
                          !s && u && u[i] && (s = !0),
                          s && (a && (a += " "), (a += i));
                      a.length || (a = null), t.attr("class", a);
                    }
                  });
            },
            tg = Yt.makeMap,
            ng = Yt.each,
            rg = Yt.explode,
            og = Yt.extend;
          function ig(e, t) {
            void 0 === t && (t = Qo());
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
                  ng(rg(e), function(e) {
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
                  ng(rg(e), function(e) {
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
                  var l,
                    c,
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
                    (v = og(
                      tg("script,style,head,html,body,title,meta,param"),
                      t.getBlockElements()
                    ));
                  var w = t.getNonEmptyElements(),
                    x = t.children,
                    S = e.validate,
                    E = (function(e) {
                      return !1 === e ? "" : !0 === e ? "p" : e;
                    })(
                      "forced_root_block" in s
                        ? s.forced_root_block
                        : e.forced_root_block
                    ),
                    N = t.getWhiteSpaceElements(),
                    z = /^[ \t\r\n]+/,
                    k = /[ \t\r\n]+$/,
                    T = /[ \t\r\n]+/g,
                    _ = /^[ \t\r\n]+$/;
                  b =
                    N.hasOwnProperty(s.context) ||
                    N.hasOwnProperty(e.root_name);
                  var A = function(e, t) {
                      var r,
                        i = new Rl(e, t);
                      return (
                        e in n && ((r = o[e]) ? r.push(i) : (o[e] = [i])), i
                      );
                    },
                    B = function(e) {
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
                  l = Il(
                    {
                      validate: S,
                      allow_script_urls: e.allow_script_urls,
                      allow_conditional_comments: e.allow_conditional_comments,
                      self_closing_elements: (function(e) {
                        var t,
                          n = {};
                        for (t in e) "li" !== t && "p" !== t && (n[t] = e[t]);
                        return n;
                      })(t.getSelfClosingElements()),
                      cdata: function(e) {
                        y.append(A("#cdata", 4)).value = e;
                      },
                      text: function(e, t) {
                        var n;
                        b ||
                          ((e = e.replace(T, " ")),
                          Zm(y.lastChild, v) && (e = e.replace(z, ""))),
                          0 !== e.length &&
                            (((n = A("#text", 3)).raw = !!t),
                            (y.append(n).value = e));
                      },
                      comment: function(e) {
                        y.append(A("#comment", 8)).value = e;
                      },
                      pi: function(e, t) {
                        (y.append(A(e, 7)).value = t), B(y);
                      },
                      doctype: function(e) {
                        (y.append(A("#doctype", 10)).value = e), B(y);
                      },
                      start: function(e, n, o) {
                        var a, u, s, l, c;
                        if ((s = S ? t.getElementRule(e) : {})) {
                          for (
                            (a = A(s.outputName || e, 1)).attributes = n,
                              a.shortEnded = o,
                              y.append(a),
                              (c = x[y.name]) &&
                                x[a.name] &&
                                !c[a.name] &&
                                C.push(a),
                              u = r.length;
                            u--;

                          )
                            (l = r[u].name) in n.map &&
                              ((g = i[l]) ? g.push(a) : (i[l] = [a]));
                          v[e] && B(a), o || (y = a), !b && N[e] && (b = !0);
                        }
                      },
                      end: function(n) {
                        var r, o, i, a, u;
                        if ((o = S ? t.getElementRule(n) : {})) {
                          if (v[n] && !b) {
                            if ((r = y.firstChild) && 3 === r.type)
                              if ((i = r.value.replace(z, "")).length > 0)
                                (r.value = i), (r = r.next);
                              else
                                for (
                                  a = r.next, r.remove(), r = a;
                                  r && 3 === r.type;

                                )
                                  (i = r.value),
                                    (a = r.next),
                                    (0 === i.length || _.test(i)) &&
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
                                    (0 === i.length || _.test(i)) &&
                                      (r.remove(), (r = a)),
                                    (r = a);
                          }
                          if (
                            (b && N[n] && (b = !1),
                            o.removeEmpty &&
                              Qm(t, w, N, y) &&
                              !y.attributes.map.name &&
                              !y.attr("id"))
                          )
                            return (
                              (u = y.parent),
                              v[y.name] ? y.empty().remove() : y.unwrap(),
                              void (y = u)
                            );
                          o.paddEmpty &&
                            (Gm(y) || Qm(t, w, N, y)) &&
                            Ym(e, s, v, y),
                            (y = y.parent);
                        }
                      }
                    },
                    t
                  );
                  var R = (y = new Rl(s.context || e.root_name, 11));
                  if (
                    (l.parse(u),
                    S &&
                      C.length &&
                      (s.context
                        ? (s.invalid = !0)
                        : (function(e) {
                            var n, r, o, i, u, s, l, c, f, d, h, m, g, p, v, b;
                            for (
                              m = tg("tr,td,th,tbody,thead,tfoot,table"),
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
                                          ? ((l = a(i[f].clone())), s.append(l))
                                          : (l = s),
                                          c = i[f].firstChild;
                                        c && c !== i[f + 1];

                                      )
                                        (b = c.next), l.append(c), (c = b);
                                      s = l;
                                    }
                                    Qm(t, d, h, u)
                                      ? o.insert(r, i[0], !0)
                                      : (o.insert(u, i[0], !0), o.insert(r, u)),
                                      (o = i[0]),
                                      (Qm(t, d, h, o) || Jm(o, "br")) &&
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
                                      r.wrap(a(new Rl("ul", 1)));
                                      continue;
                                    }
                                    t.isValidChild(r.parent.name, "div") &&
                                    t.isValidChild("div", r.name)
                                      ? r.wrap(a(new Rl("div", 1)))
                                      : p[r.name]
                                      ? r.empty().remove()
                                      : r.unwrap();
                                  }
                                }
                          })(C)),
                    E &&
                      ("body" === R.name || s.isRootContent) &&
                      (function() {
                        var n,
                          r,
                          o = R.firstChild,
                          i = function(e) {
                            e &&
                              ((o = e.firstChild) &&
                                3 === o.type &&
                                (o.value = o.value.replace(z, "")),
                              (o = e.lastChild) &&
                                3 === o.type &&
                                (o.value = o.value.replace(k, "")));
                          };
                        if (t.isValidChild(R.name, E.toLowerCase())) {
                          for (; o; )
                            (n = o.next),
                              3 === o.type ||
                              (1 === o.type &&
                                "p" !== o.name &&
                                !v[o.name] &&
                                !o.attr("data-mce-type"))
                                ? r
                                  ? r.append(o)
                                  : ((r = A(E, 1)).attr(
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
                    for (p in o) {
                      for (g = n[p], h = (c = o[p]).length; h--; )
                        c[h].parent || c.splice(h, 1);
                      for (f = 0, d = g.length; f < d; f++) g[f](c, p, s);
                    }
                    for (f = 0, d = r.length; f < d; f++)
                      if ((g = r[f]).name in i) {
                        for (h = (c = i[g.name]).length; h--; )
                          c[h].parent || c.splice(h, 1);
                        for (h = 0, m = g.callbacks.length; h < m; h++)
                          g.callbacks[h](c, g.name, s);
                      }
                  }
                  return R;
                }
              };
            return eg(u, e), Xm.register(u, e), u;
          }
          var ag = function(e, t, n) {
              -1 === Yt.inArray(t, n) &&
                (e.addAttributeFilter(n, function(e, t) {
                  for (var n = e.length; n--; ) e[n].attr(t, null);
                }),
                t.push(n));
            },
            ug = function(e, t, n) {
              var r = la(n.getInner ? t.innerHTML : e.getOuterHTML(t));
              return n.selection || go(Jn.fromDom(t)) ? r : Yt.trim(r);
            },
            sg = function(e, t, n) {
              var r = n.selection ? Tl({ forced_root_block: !1 }, n) : n,
                o = e.parse(t, r);
              return qm.trimTrailingBr(o), o;
            },
            lg = function(e, t, n, r, o) {
              return (function(e, t, n) {
                return !t.no_events && e
                  ? zc(e, Tl(t, { content: n })).content
                  : n;
              })(
                e,
                o,
                (function(e, t, n) {
                  return Kl(e, t).serialize(n);
                })(t, n, r)
              );
            };
          function cg(e, t) {
            var n = (function(e, t) {
              var n,
                r,
                o,
                i = ["data-mce-selected"];
              return (
                (n = t && t.dom ? t.dom : ci.DOM),
                (r = t && t.schema ? t.schema : Qo(e)),
                (e.entity_encoding = e.entity_encoding || "named"),
                (e.remove_trailing_brs =
                  !("remove_trailing_brs" in e) || e.remove_trailing_brs),
                (o = ig(e, r)),
                qm.register(o, e, n),
                {
                  schema: r,
                  addNodeFilter: o.addNodeFilter,
                  addAttributeFilter: o.addAttributeFilter,
                  serialize: function(i, a) {
                    var u = Tl({ format: "html" }, a || {}),
                      s = $m.process(t, i, u),
                      l = ug(n, s, u),
                      c = sg(o, l, u);
                    return "tree" === u.format ? c : lg(t, e, r, c, u);
                  },
                  addRules: function(e) {
                    r.addValidElements(e);
                  },
                  setRules: function(e) {
                    r.setValidElements(e);
                  },
                  addTempAttr: u(ag, o, i),
                  getTempAttrs: function() {
                    return i;
                  }
                }
              );
            })(e, t);
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
          }
          function fg(e) {
            return {
              getBookmark: u(el.getBookmark, e),
              moveToBookmark: u(el.moveToBookmark, e)
            };
          }
          !(function(e) {
            e.isBookmarkNode = el.isBookmarkNode;
          })(fg || (fg = {}));
          var dg,
            hg = fg,
            mg = ko.isContentEditableFalse,
            gg = ko.isContentEditableTrue,
            pg = function(e, t) {
              var r,
                o,
                i,
                a,
                u,
                s,
                l,
                c,
                f,
                d,
                h,
                m,
                g,
                p,
                v,
                b,
                y,
                C = t.dom,
                w = Yt.each,
                x = t.getDoc(),
                S = n.document,
                E = Math.abs,
                N = Math.round,
                z = t.getBody();
              a = {
                nw: [0, 0, -1, -1],
                ne: [1, 0, 1, -1],
                se: [1, 1, 1, 1],
                sw: [0, 1, -1, 1]
              };
              var k = function(e) {
                  return (
                    e && ("IMG" === e.nodeName || t.dom.is(e, "figure.image"))
                  );
                },
                T = function(e) {
                  var n = e.target;
                  (function(e, t) {
                    return k(e.target) && !wd(e.clientX, e.clientY, t);
                  })(e, t.selection.getRng()) &&
                    !e.isDefaultPrevented() &&
                    (e.preventDefault(), t.selection.select(n));
                },
                _ = function(e) {
                  return t.dom.is(e, "figure.image")
                    ? e.querySelector("img")
                    : e;
                },
                A = function(e) {
                  var n = t.settings.object_resizing;
                  return (
                    !1 !== n &&
                    !fe.iOS &&
                    ("string" != typeof n && (n = "table,img,figure.image,div"),
                    "false" !== e.getAttribute("data-mce-resize") &&
                      e !== t.getBody() &&
                      kr(Jn.fromDom(e), n))
                  );
                },
                B = function(e) {
                  var n, a, w, x;
                  (n = e.screenX - s),
                    (a = e.screenY - l),
                    (p = n * u[2] + d),
                    (v = a * u[3] + h),
                    (p = p < 5 ? 5 : p),
                    (v = v < 5 ? 5 : v),
                    (k(r) && !1 !== t.settings.resize_img_proportional
                      ? !_d.modifierPressed(e)
                      : _d.modifierPressed(e) || (k(r) && u[2] * u[3] != 0)) &&
                      (E(n) > E(a)
                        ? ((v = N(p * m)), (p = N(v / m)))
                        : ((p = N(v / m)), (v = N(p * m)))),
                    C.setStyles(_(o), { width: p, height: v }),
                    (w = (w = u.startPos.x + n) > 0 ? w : 0),
                    (x = (x = u.startPos.y + a) > 0 ? x : 0),
                    C.setStyles(i, { left: w, top: x, display: "block" }),
                    (i.innerHTML = p + " &times; " + v),
                    u[2] < 0 &&
                      o.clientWidth <= p &&
                      C.setStyle(o, "left", c + (d - p)),
                    u[3] < 0 &&
                      o.clientHeight <= v &&
                      C.setStyle(o, "top", f + (h - v)),
                    (n = z.scrollWidth - b) + (a = z.scrollHeight - y) != 0 &&
                      C.setStyles(i, { left: w - n, top: x - a }),
                    g || (Ac(t, r, d, h), (g = !0));
                },
                R = function() {
                  g = !1;
                  var e = function(e, n) {
                    n &&
                      (r.style[e] ||
                      !t.schema.isValid(r.nodeName.toLowerCase(), e)
                        ? C.setStyle(_(r), e, n)
                        : C.setAttrib(_(r), e, n));
                  };
                  e("width", p),
                    e("height", v),
                    C.unbind(x, "mousemove", B),
                    C.unbind(x, "mouseup", R),
                    S !== x &&
                      (C.unbind(S, "mousemove", B), C.unbind(S, "mouseup", R)),
                    C.remove(o),
                    C.remove(i),
                    M(r),
                    Bc(t, r, p, v),
                    C.setAttrib(r, "style", C.getAttrib(r, "style")),
                    t.nodeChanged();
                },
                M = function(e) {
                  var n, g, E, N, k;
                  O(),
                    H(),
                    (n = C.getPos(e, z)),
                    (c = n.x),
                    (f = n.y),
                    (k = e.getBoundingClientRect()),
                    (g = k.width || k.right - k.left),
                    (E = k.height || k.bottom - k.top),
                    r !== e && ((r = e), (p = v = 0)),
                    (N = t.fire("ObjectSelected", { target: e })),
                    A(e) && !N.isDefaultPrevented()
                      ? w(a, function(e, t) {
                          var n;
                          (n = C.get("mceResizeHandle" + t)) && C.remove(n),
                            (n = C.add(z, "div", {
                              id: "mceResizeHandle" + t,
                              "data-mce-bogus": "all",
                              class: "mce-resizehandle",
                              unselectable: !0,
                              style:
                                "cursor:" + t + "-resize; margin:0; padding:0"
                            })),
                            11 === fe.ie && (n.contentEditable = !1),
                            C.bind(n, "mousedown", function(t) {
                              t.stopImmediatePropagation(),
                                t.preventDefault(),
                                (function(t) {
                                  (s = t.screenX),
                                    (l = t.screenY),
                                    (d = _(r).clientWidth),
                                    (h = _(r).clientHeight),
                                    (m = h / d),
                                    (u = e),
                                    (e.startPos = {
                                      x: g * e[0] + c,
                                      y: E * e[1] + f
                                    }),
                                    (b = z.scrollWidth),
                                    (y = z.scrollHeight),
                                    (o = r.cloneNode(!0)),
                                    C.addClass(o, "mce-clonedresizable"),
                                    C.setAttrib(o, "data-mce-bogus", "all"),
                                    (o.contentEditable = !1),
                                    (o.unSelectabe = !0),
                                    C.setStyles(o, {
                                      left: c,
                                      top: f,
                                      margin: 0
                                    }),
                                    o.removeAttribute("data-mce-selected"),
                                    z.appendChild(o),
                                    C.bind(x, "mousemove", B),
                                    C.bind(x, "mouseup", R),
                                    S !== x &&
                                      (C.bind(S, "mousemove", B),
                                      C.bind(S, "mouseup", R)),
                                    (i = C.add(
                                      z,
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
                              left: g * e[0] + c - n.offsetWidth / 2,
                              top: E * e[1] + f - n.offsetHeight / 2
                            });
                        })
                      : O(),
                    r.setAttribute("data-mce-selected", "1");
                },
                O = function() {
                  var e, t;
                  for (e in (H(),
                  r && r.removeAttribute("data-mce-selected"),
                  a))
                    (t = C.get("mceResizeHandle" + e)) &&
                      (C.unbind(t), C.remove(t));
                },
                D = function(n) {
                  var r,
                    o = function(e, t) {
                      if (e)
                        do {
                          if (e === t) return !0;
                        } while ((e = e.parentNode));
                    };
                  g ||
                    t.removed ||
                    (w(
                      C.select("img[data-mce-selected],hr[data-mce-selected]"),
                      function(e) {
                        e.removeAttribute("data-mce-selected");
                      }
                    ),
                    (r = "mousedown" === n.type ? n.target : e.getNode()),
                    o(
                      (r = C.$(r).closest("table,img,figure.image,hr")[0]),
                      z
                    ) && (L(), o(e.getStart(!0), r) && o(e.getEnd(!0), r))
                      ? M(r)
                      : O());
                },
                P = function(e) {
                  return mg(
                    (function(e, t) {
                      for (; t && t !== e; ) {
                        if (gg(t) || mg(t)) return t;
                        t = t.parentNode;
                      }
                      return null;
                    })(t.getBody(), e)
                  );
                },
                H = function() {
                  for (var e in a) {
                    var t = a[e];
                    t.elm && (C.unbind(t.elm), delete t.elm);
                  }
                },
                L = function() {
                  try {
                    t.getDoc().execCommand("enableObjectResizing", !1, !1);
                  } catch (e) {}
                };
              return (
                t.on("init", function() {
                  L(),
                    fe.ie &&
                      fe.ie >= 11 &&
                      (t.on("mousedown click", function(e) {
                        var n = e.target,
                          r = n.nodeName;
                        g ||
                          !/^(TABLE|IMG|HR)$/.test(r) ||
                          P(n) ||
                          (2 !== e.button &&
                            t.selection.select(n, "TABLE" === r),
                          "mousedown" === e.type && t.nodeChanged());
                      }),
                      t.dom.bind(z, "mscontrolselect", function(e) {
                        var n = function(e) {
                          pe.setEditorTimeout(t, function() {
                            t.selection.select(e);
                          });
                        };
                        if (P(e.target))
                          return e.preventDefault(), void n(e.target);
                        /^(TABLE|IMG|HR)$/.test(e.target.nodeName) &&
                          (e.preventDefault(),
                          "IMG" === e.target.tagName && n(e.target));
                      }));
                  var e = pe.throttle(function(e) {
                    t.composing || D(e);
                  });
                  t.on(
                    "nodechange ResizeEditor ResizeWindow drop FullscreenStateChanged",
                    e
                  ),
                    t.on("keyup compositionend", function(t) {
                      r && "TABLE" === r.nodeName && e(t);
                    }),
                    t.on("hide blur", O),
                    t.on("contextmenu", T);
                }),
                t.on("remove", H),
                {
                  isResizable: A,
                  showResizeRect: M,
                  hideResizeRect: O,
                  updateResizeRect: D,
                  destroy: function() {
                    r = o = null;
                  }
                }
              );
            },
            vg = function(e) {
              for (var t = 0, n = 0, r = e; r && r.nodeType; )
                (t += r.offsetLeft || 0),
                  (n += r.offsetTop || 0),
                  (r = r.offsetParent);
              return { x: t, y: n };
            },
            bg = function(e, t, n) {
              var r,
                o,
                i,
                a,
                u = e.dom,
                s = u.getRoot(),
                l = 0;
              if (
                !(function(e, t, n) {
                  var r = { elm: t, alignToTop: n };
                  return e.fire("scrollIntoView", r), r.isDefaultPrevented();
                })(e, t, n) &&
                ko.isElement(t)
              ) {
                if ((!1 === n && (l = t.offsetHeight), "BODY" !== s.nodeName)) {
                  var c = e.selection.getScrollContainer();
                  if (c)
                    return (
                      (r = vg(t).y - vg(c).y + l),
                      (a = c.clientHeight),
                      void (
                        (r < (i = c.scrollTop) || r + 25 > i + a) &&
                        (c.scrollTop = r < i ? r : r - a + 25)
                      )
                    );
                }
                (o = u.getViewPort(e.getWin())),
                  (r = u.getPos(t).y + l),
                  (i = o.y),
                  (a = o.h),
                  (r < o.y || r + 25 > i + a) &&
                    e.getWin().scrollTo(0, r < i ? r : r - a + 25);
              }
            },
            yg = function(e, t) {
              Z(hu.fromRangeStart(t).getClientRects()).each(function(t) {
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
                  i = { x: Ia((n = o), (r = t)), y: Va(n, r) };
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
            Cg = function(e) {
              return (
                ko.isContentEditableTrue(e) || ko.isContentEditableFalse(e)
              );
            },
            wg = {
              fromPoint: function(e, t, n) {
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
                        (i = (i = Yt.toArray(o.getClientRects())).sort(function(
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
                    return ko.isContentEditableFalse(
                      (function(e, t, n) {
                        for (; e && e !== t; ) {
                          if (n(e)) return e;
                          e = e.parentNode;
                        }
                        return null;
                      })(n, t, Cg)
                    )
                      ? null
                      : e;
                  })(r, n.body);
                }
                return r;
              }
            },
            xg = function(e, t) {
              return V(t, function(t) {
                var n = e.fire("GetSelectionRange", { range: t });
                return n.range !== t ? n.range : t;
              });
            },
            Sg = function(e, t) {
              var r = (t || n.document).createDocumentFragment();
              return (
                F(e, function(e) {
                  r.appendChild(e.dom());
                }),
                Jn.fromDom(r)
              );
            },
            Eg = Cr("element", "width", "rows"),
            Ng = Cr("element", "cells"),
            zg = Cr("x", "y"),
            kg = function(e, t) {
              var n = parseInt(gr(e, t), 10);
              return isNaN(n) ? 1 : n;
            },
            Tg = function(e, t, n) {
              var r = e.rows();
              return !!(r[n] ? r[n].cells() : [])[t];
            },
            _g = function(e) {
              return q(
                e,
                function(e, t) {
                  return t.cells().length > e ? t.cells().length : e;
                },
                0
              );
            },
            Ag = function(e, t) {
              for (var n = e.rows(), r = 0; r < n.length; r++)
                for (var o = n[r].cells(), i = 0; i < o.length; i++)
                  if (_r(o[i], t)) return _.some(zg(i, r));
              return _.none();
            },
            Bg = function(e, t, n, r, o) {
              for (var i = [], a = e.rows(), u = n; u <= o; u++) {
                var s = a[u].cells(),
                  l = t < r ? s.slice(t, r + 1) : s.slice(r, t + 1);
                i.push(Ng(a[u].element(), l));
              }
              return i;
            },
            Rg = function(e) {
              var t = Eg(oa(e), 0, []);
              return (
                F(Ii(e, "tr"), function(e, n) {
                  F(Ii(e, "td,th"), function(r, o) {
                    !(function(e, t, n, r, o) {
                      for (
                        var i = kg(o, "rowspan"),
                          a = kg(o, "colspan"),
                          u = e.rows(),
                          s = n;
                        s < n + i;
                        s++
                      ) {
                        u[s] || (u[s] = Ng(ia(r), []));
                        for (var l = t; l < t + a; l++)
                          u[s].cells()[l] = s === n && l === t ? o : oa(o);
                      }
                    })(
                      t,
                      (function(e, t, n) {
                        for (; Tg(e, t, n); ) t++;
                        return t;
                      })(t, o, n),
                      n,
                      e,
                      r
                    );
                  });
                }),
                Eg(t.element(), _g(t.rows()), t.rows())
              );
            },
            Mg = function(e) {
              return (function(e, t) {
                var n = oa(e.element()),
                  r = Jn.fromTag("tbody");
                return zi(r, t), Ni(n, r), n;
              })(
                e,
                (function(e) {
                  return V(e.rows(), function(e) {
                    var t = V(e.cells(), function(e) {
                        var t = ia(e);
                        return pr(t, "colspan"), pr(t, "rowspan"), t;
                      }),
                      n = oa(e.element());
                    return zi(n, t), n;
                  });
                })(e)
              );
            },
            Og = function(e, t, n) {
              return Ag(e, t).bind(function(t) {
                return Ag(e, n).map(function(n) {
                  return (function(e, t, n) {
                    var r = t.x(),
                      o = t.y(),
                      i = n.x(),
                      a = n.y(),
                      u = o < a ? Bg(e, r, o, i, a) : Bg(e, r, a, i, o);
                    return Eg(e.element(), _g(u), u);
                  })(e, t, n);
                });
              });
            },
            Dg = function(e) {
              var t = [];
              if (e)
                for (var n = 0; n < e.rangeCount; n++) t.push(e.getRangeAt(n));
              return t;
            },
            Pg = Dg,
            Hg = function(e) {
              return Y(e, function(e) {
                var t = Fa(e);
                return t ? [Jn.fromDom(t)] : [];
              });
            },
            Lg = function(e) {
              return Dg(e).length > 1;
            },
            Ig = function(e) {
              return j(Hg(e), mo);
            },
            Vg = function(e) {
              return Ii(e, "td[data-mce-selected],th[data-mce-selected]");
            },
            Fg = function(e, t) {
              var n = Vg(t),
                r = Ig(e);
              return n.length > 0 ? n : r;
            },
            Ug = Fg,
            jg = function(e) {
              return Fg(Pg(e.selection.getSel()), Jn.fromDom(e.getBody()));
            },
            qg = function(e, t) {
              return $(e, function(e) {
                return (
                  "li" === tr(e) &&
                  (function(e, t) {
                    return $a([Uf(t), jf(t)], function(t, n) {
                      var r = $(qf(e), u(_r, t)),
                        o = $($f(e), u(_r, n));
                      return r.isSome() && o.isSome();
                    }).getOr(!1);
                  })(e, t)
                );
              }).fold(i([]), function(t) {
                return (function(e) {
                  return $(e, function(e) {
                    return "ul" === tr(e) || "ol" === tr(e);
                  });
                })(e)
                  .map(function(e) {
                    return [Jn.fromTag("li"), Jn.fromTag(tr(e))];
                  })
                  .getOr([]);
              });
            },
            $g = function(e, t) {
              var n = Jn.fromDom(t.commonAncestorContainer),
                r = Of(n, e),
                o = j(r, function(e) {
                  return ao(e) || oo(e);
                }),
                a = qg(r, t),
                u = o.concat(
                  a.length
                    ? a
                    : (function(e) {
                        return co(e)
                          ? Rr(e)
                              .filter(lo)
                              .fold(i([]), function(t) {
                                return [e, t];
                              })
                          : lo(e)
                          ? [e]
                          : [];
                      })(n)
                );
              return V(u, oa);
            },
            Wg = function() {
              return Sg([]);
            },
            Kg = function(e, t) {
              return (
                (n = Jn.fromDom(t.cloneContents())),
                (r = $g(e, t)),
                (o = q(
                  r,
                  function(e, t) {
                    return Ni(t, e), t;
                  },
                  n
                )),
                r.length > 0 ? Sg([o]) : o
              );
              var n, r, o;
            },
            Xg = function(e, t) {
              return ((n = e), (r = t[0]), ji(r, "table", u(_r, n)))
                .bind(function(e) {
                  var n = t[0],
                    r = t[t.length - 1],
                    o = Rg(e);
                  return Og(o, n, r).map(function(e) {
                    return Sg([Mg(e)]);
                  });
                })
                .getOrThunk(Wg);
              var n, r;
            },
            Yg = function(e, t) {
              var n = Ug(t, e);
              return n.length > 0
                ? Xg(e, n)
                : (function(e, t) {
                    return t.length > 0 && t[0].collapsed ? Wg() : Kg(e, t[0]);
                  })(e, t);
            },
            Gg = function(e, t) {
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
                  return _.from(e.selection.getRng())
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
                        r = la(n.innerText);
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
                  a = xg(e, Pg(i));
                return (
                  (n = t.contextual
                    ? Yg(Jn.fromDom(e.getBody()), a).dom()
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
            Jg = function(e, t, n) {
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
            Qg = function(e, t, n) {
              return Jg(e, t, function(e) {
                return e.nodeName === n;
              });
            },
            Zg = function(e) {
              return e && "TABLE" === e.nodeName;
            },
            ep = function(e) {
              return e && /^(TD|TH|CAPTION)$/.test(e.nodeName);
            },
            tp = function(e, t) {
              return ma(e) && !1 === Jg(e, t, Hu);
            },
            np = function(e, t, n) {
              for (
                var r = new Zr(
                  t,
                  e.getParent(t.parentNode, e.isBlock) || e.getRoot()
                );
                (t = r[n ? "prev" : "next"]());

              )
                if (ko.isBr(t)) return !0;
            },
            rp = function(e, t, n, r, o) {
              var i,
                a,
                u,
                s,
                l = e.getRoot(),
                c = e.schema.getNonEmptyElements();
              if (
                ((u = e.getParent(o.parentNode, e.isBlock) || l),
                r && ko.isBr(o) && t && e.isEmpty(u))
              )
                return _.some(hu(o.parentNode, e.nodeIndex(o)));
              for (i = new Zr(o, u); (s = i[r ? "prev" : "next"]()); ) {
                if ("false" === e.getContentEditableParent(s) || tp(s, l))
                  return _.none();
                if (ko.isText(s) && s.nodeValue.length > 0)
                  return !1 === Qg(s, l, "A")
                    ? _.some(hu(s, r ? s.nodeValue.length : 0))
                    : _.none();
                if (e.isBlock(s) || c[s.nodeName.toLowerCase()])
                  return _.none();
                a = s;
              }
              return n && a ? _.some(hu(a, 0)) : _.none();
            },
            op = function(e, t, n, r) {
              var o,
                i,
                a,
                u,
                s,
                l,
                c,
                f = e.getRoot(),
                d = !1;
              if (
                ((o = r[(n ? "start" : "end") + "Container"]),
                (i = r[(n ? "start" : "end") + "Offset"]),
                (c = ko.isElement(o) && i === o.childNodes.length),
                (s = e.schema.getNonEmptyElements()),
                (l = n),
                ma(o))
              )
                return _.none();
              if (
                (ko.isElement(o) && i > o.childNodes.length - 1 && (l = !1),
                ko.isDocument(o) && ((o = f), (i = 0)),
                o === f)
              ) {
                if (l && (u = o.childNodes[i > 0 ? i - 1 : 0])) {
                  if (ma(u)) return _.none();
                  if (s[u.nodeName] || Zg(u)) return _.none();
                }
                if (o.hasChildNodes()) {
                  if (
                    ((i = Math.min(
                      !l && i > 0 ? i - 1 : i,
                      o.childNodes.length - 1
                    )),
                    (o = o.childNodes[i]),
                    (i = ko.isText(o) && c ? o.data.length : 0),
                    !t && o === f.lastChild && Zg(o))
                  )
                    return _.none();
                  if (
                    (function(e, t) {
                      for (; t && t !== e; ) {
                        if (ko.isContentEditableFalse(t)) return !0;
                        t = t.parentNode;
                      }
                      return !1;
                    })(f, o) ||
                    ma(o)
                  )
                    return _.none();
                  if (o.hasChildNodes() && !1 === Zg(o)) {
                    (u = o), (a = new Zr(o, f));
                    do {
                      if (ko.isContentEditableFalse(u) || ma(u)) {
                        d = !1;
                        break;
                      }
                      if (ko.isText(u) && u.nodeValue.length > 0) {
                        (i = l ? 0 : u.nodeValue.length), (o = u), (d = !0);
                        break;
                      }
                      if (s[u.nodeName.toLowerCase()] && !ep(u)) {
                        (i = e.nodeIndex(u)),
                          (o = u.parentNode),
                          l || i++,
                          (d = !0);
                        break;
                      }
                    } while ((u = l ? a.next() : a.prev()));
                  }
                }
              }
              return (
                t &&
                  (ko.isText(o) &&
                    0 === i &&
                    rp(e, c, t, !0, o).each(function(e) {
                      (o = e.container()), (i = e.offset()), (d = !0);
                    }),
                  ko.isElement(o) &&
                    ((u = o.childNodes[i]) || (u = o.childNodes[i - 1]),
                    !u ||
                      !ko.isBr(u) ||
                      (function(e, t) {
                        return (
                          e.previousSibling && e.previousSibling.nodeName === t
                        );
                      })(u, "A") ||
                      np(e, u, !1) ||
                      np(e, u, !0) ||
                      rp(e, c, t, !0, u).each(function(e) {
                        (o = e.container()), (i = e.offset()), (d = !0);
                      }))),
                l &&
                  !t &&
                  ko.isText(o) &&
                  i === o.nodeValue.length &&
                  rp(e, c, t, !1, o).each(function(e) {
                    (o = e.container()), (i = e.offset()), (d = !0);
                  }),
                d ? _.some(hu(o, i)) : _.none()
              );
            },
            ip = {
              normalize: function(e, t) {
                var n = t.collapsed,
                  r = t.cloneRange(),
                  o = hu.fromRangeStart(t);
                return (
                  op(e, n, !0, r).each(function(e) {
                    (n && hu.isAbove(o, e)) ||
                      r.setStart(e.container(), e.offset());
                  }),
                  n ||
                    op(e, n, !1, r).each(function(e) {
                      r.setEnd(e.container(), e.offset());
                    }),
                  n && r.collapse(!0),
                  Ff.isEq(t, r) ? _.none() : _.some(r)
                );
              }
            },
            ap = function(e) {
              return 0 === e.dom().length ? (Ti(e), _.none()) : _.some(e);
            },
            up = function(e, t, n) {
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
                  var n = _.from(t.firstChild).map(Jn.fromDom),
                    r = _.from(t.lastChild).map(Jn.fromDom);
                  e.deleteContents(), e.insertNode(t);
                  var o = n
                      .bind(Mr)
                      .filter(or)
                      .bind(ap),
                    i = r
                      .bind(Or)
                      .filter(or)
                      .bind(ap);
                  $a([o, n.filter(or)], function(e, t) {
                    var n, r;
                    (n = t.dom()),
                      (r = e.dom().data),
                      n.insertData(0, r),
                      Ti(e);
                  }),
                    $a([i, r.filter(or)], function(t, n) {
                      var r = n.dom().length;
                      n.dom().appendData(t.dom().data),
                        e.setEnd(n.dom(), r),
                        Ti(t);
                    }),
                    e.collapse(!1);
                })(r, r.createContextualFragment(n.content)),
                  e.selection.setRng(r),
                  yg(e, r),
                  n.no_events || e.fire("SetContent", n);
              } else e.fire("SetContent", n);
            },
            sp = function(e, t, n, r, o) {
              var i = n ? t.startContainer : t.endContainer,
                a = n ? t.startOffset : t.endOffset;
              return _.from(i)
                .map(Jn.fromDom)
                .map(function(e) {
                  return r && t.collapsed ? e : Lr(e, o(e, a)).getOr(e);
                })
                .bind(function(e) {
                  return rr(e) ? _.some(e) : Rr(e);
                })
                .map(function(e) {
                  return e.dom();
                })
                .getOr(e);
            },
            lp = function(e, t, n) {
              return sp(e, t, !0, n, function(e, t) {
                return Math.min(e.dom().childNodes.length, t);
              });
            },
            cp = function(e, t, n) {
              return sp(e, t, !1, n, function(e, t) {
                return t > 0 ? t - 1 : t;
              });
            },
            fp = function(e, t) {
              for (var n = e; e && ko.isText(e) && 0 === e.length; )
                e = t ? e.nextSibling : e.previousSibling;
              return e || n;
            },
            dp = function(e, t, n) {
              if (e && e.hasOwnProperty(t)) {
                var r = j(e[t], function(e) {
                  return e !== n;
                });
                0 === r.length ? delete e[t] : (e[t] = r);
              }
            },
            hp = function(e) {
              return !!e.select;
            },
            mp = function(e) {
              return (
                !(!e || !e.ownerDocument) &&
                Ar(Jn.fromDom(e.ownerDocument), Jn.fromDom(e))
              );
            },
            gp = function(e, t, n, r) {
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
                            Yt.each(n, function(t, n) {
                              Yt.each(i, function(o) {
                                if (e.is(o, n))
                                  return (
                                    r[n] ||
                                      (Yt.each(t, function(e) {
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
                              Yt.each(r, function(e, t) {
                                a[t] ||
                                  (delete r[t],
                                  Yt.each(e, function(e) {
                                    e(!1, { node: o, selector: t, parents: i });
                                  }));
                              });
                          })),
                        n[o] || (n[o] = []),
                        n[o].push(i),
                        {
                          unbind: function() {
                            dp(n, o, i), dp(r, o, i);
                          }
                        }
                      );
                    }
                  };
                })(e, r).selectorChangedWithUnbind,
                l = function(e, t) {
                  return up(r, e, t);
                },
                c = function(e) {
                  var t = d();
                  t.collapse(!!e), h(t);
                },
                f = function() {
                  return t.getSelection
                    ? t.getSelection()
                    : t.document.selection;
                },
                d = function() {
                  var n,
                    o,
                    i,
                    s,
                    l = function(e, t, n) {
                      try {
                        return t.compareBoundaryPoints(e, n);
                      } catch (e) {
                        return -1;
                      }
                    };
                  if (!t) return null;
                  if (null == (s = t.document)) return null;
                  if (void 0 !== r.bookmark && !1 === wc(r)) {
                    var c = hc.getRng(r);
                    if (c.isSome())
                      return c
                        .map(function(e) {
                          return xg(r, [e])[0];
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
                    (o = xg(r, [o])[0]) ||
                      (o = s.createRange
                        ? s.createRange()
                        : s.body.createTextRange()),
                    o.setStart &&
                      9 === o.startContainer.nodeType &&
                      o.collapsed &&
                      ((i = e.getRoot()), o.setStart(i, 0), o.setEnd(i, 0)),
                    a &&
                      u &&
                      (0 === l(o.START_TO_START, o, a) &&
                      0 === l(o.END_TO_END, o, a)
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
                        (!!hp(e) ||
                          (mp(e.startContainer) && mp(e.endContainer)))
                      );
                    })(e)
                  ) {
                    var i = hp(e) ? e : null;
                    if (i) {
                      u = null;
                      try {
                        i.select();
                      } catch (e) {}
                    } else {
                      if (
                        ((n = f()),
                        (e = r.fire("SetSelectionRange", {
                          range: e,
                          forward: t
                        }).range),
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
                        fe.ie ||
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
                  collapse: c,
                  setCursorLocation: function(t, n) {
                    var o = e.createRng();
                    t
                      ? (o.setStart(t, n), o.setEnd(t, n), h(o), c(!1))
                      : (Wf(e, o, r.getBody(), !0), h(o));
                  },
                  getContent: function(e) {
                    return Gg(r, e);
                  },
                  setContent: l,
                  getBookmark: function(e, t) {
                    return o.getBookmark(e, t);
                  },
                  moveToBookmark: function(e) {
                    return o.moveToBookmark(e);
                  },
                  select: function(t, n) {
                    return (
                      (function(e, t, n) {
                        return _.from(t).map(function(t) {
                          var r = e.nodeIndex(t),
                            o = e.createRng();
                          return (
                            o.setStart(t.parentNode, r),
                            o.setEnd(t.parentNode, r + 1),
                            n && (Wf(e, o, t, !0), Wf(e, o, t, !1)),
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
                    return l(e.getOuterHTML(t)), t;
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
                                ? fp(o.nextSibling, !0)
                                : o.parentNode),
                            (i =
                              0 === u
                                ? fp(i.previousSibling, !1)
                                : i.parentNode),
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
                    return lp(r.getBody(), d(), e);
                  },
                  getEnd: function(e) {
                    return cp(r.getBody(), d(), e);
                  },
                  getSelectedBlocks: function(t, n) {
                    return (function(e, t, n, r) {
                      var o,
                        i,
                        a = [];
                      if (
                        ((i = e.getRoot()),
                        (n = e.getParent(
                          n || lp(i, t, t.collapsed),
                          e.isBlock
                        )),
                        (r = e.getParent(
                          r || cp(i, t, t.collapsed),
                          e.isBlock
                        )),
                        n && n !== i && a.push(n),
                        n && r && n !== r)
                      ) {
                        o = n;
                        for (var u = new Zr(n, i); (o = u.next()) && o !== r; )
                          e.isBlock(o) && a.push(o);
                      }
                      return r && n !== r && r !== i && a.push(r), a;
                    })(e, d(), t, n);
                  },
                  normalize: function() {
                    var t = d(),
                      n = f();
                    if (!Lg(n) && Kf(r)) {
                      var o = ip.normalize(e, t);
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
                    return bg(r, e, t);
                  },
                  placeCaretAt: function(e, t) {
                    return h(wg.fromPoint(e, t, r.getDoc()));
                  },
                  getBoundingClientRect: function() {
                    var e = d();
                    return e.collapsed
                      ? gu.fromRangeStart(e).getClientRects()[0]
                      : e.getBoundingClientRect();
                  },
                  destroy: function() {
                    (t = a = u = null), i.destroy();
                  }
                };
              return (
                (o = hg(g)),
                (i = pg(g, r)),
                (g.bookmarkManager = o),
                (g.controlSelection = i),
                g
              );
            },
            pp = ko.isText,
            vp = function(e) {
              return pp(e) && e.data[0] === sa;
            },
            bp = function(e) {
              return pp(e) && e.data[e.data.length - 1] === sa;
            },
            yp = function(e) {
              return e.ownerDocument.createTextNode(sa);
            },
            Cp = function(e, t) {
              return e
                ? (function(e) {
                    if (pp(e.previousSibling))
                      return bp(e.previousSibling)
                        ? e.previousSibling
                        : (e.previousSibling.appendData(sa), e.previousSibling);
                    if (pp(e)) return vp(e) ? e : (e.insertData(0, sa), e);
                    var t = yp(e);
                    return e.parentNode.insertBefore(t, e), t;
                  })(t)
                : (function(e) {
                    if (pp(e.nextSibling))
                      return vp(e.nextSibling)
                        ? e.nextSibling
                        : (e.nextSibling.insertData(0, sa), e.nextSibling);
                    if (pp(e)) return bp(e) ? e : (e.appendData(sa), e);
                    var t = yp(e);
                    return (
                      e.nextSibling
                        ? e.parentNode.insertBefore(t, e.nextSibling)
                        : e.parentNode.appendChild(t),
                      t
                    );
                  })(t);
            },
            wp = u(Cp, !0),
            xp = u(Cp, !1),
            Sp = function(e, t) {
              return ko.isText(e.container())
                ? Cp(t, e.container())
                : Cp(t, e.getNode());
            },
            Ep = function(e, t) {
              var n = t.get();
              return n && e.container() === n && ha(n);
            },
            Np = function(e, t) {
              return t.fold(
                function(t) {
                  Xu.remove(e.get());
                  var n = wp(t);
                  return e.set(n), _.some(gu(n, n.length - 1));
                },
                function(t) {
                  return Ws.firstPositionIn(t).map(function(t) {
                    if (Ep(t, e)) return gu(e.get(), 1);
                    Xu.remove(e.get());
                    var n = Sp(t, !0);
                    return e.set(n), gu(n, 1);
                  });
                },
                function(t) {
                  return Ws.lastPositionIn(t).map(function(t) {
                    if (Ep(t, e)) return gu(e.get(), e.get().length - 1);
                    Xu.remove(e.get());
                    var n = Sp(t, !1);
                    return e.set(n), gu(n, n.length - 1);
                  });
                },
                function(t) {
                  Xu.remove(e.get());
                  var n = xp(t);
                  return e.set(n), _.some(gu(n, 1));
                }
              );
            },
            zp = /[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,
            kp = function(e, t) {
              if (!t) return t;
              var n = t.container(),
                r = t.offset();
              return e
                ? ha(n)
                  ? ko.isText(n.nextSibling)
                    ? gu(n.nextSibling, 0)
                    : gu.after(n)
                  : pa(t)
                  ? gu(n, r + 1)
                  : t
                : ha(n)
                ? ko.isText(n.previousSibling)
                  ? gu(n.previousSibling, n.previousSibling.data.length)
                  : gu.before(n)
                : va(t)
                ? gu(n, r - 1)
                : t;
            },
            Tp = {
              isInlineTarget: function(e, t) {
                var n = Xc(e, "inline_boundaries_selector").getOr(
                  "a[href],code"
                );
                return kr(Jn.fromDom(t), n);
              },
              findRootInline: function(e, t, n) {
                var r = (function(e, t, n) {
                  return j(ci.DOM.getParents(n.container(), "*", t), e);
                })(e, t, n);
                return _.from(r[r.length - 1]);
              },
              isRtl: function(e) {
                return (
                  "rtl" === ci.DOM.getStyle(e, "direction", !0) ||
                  ((t = e.textContent), zp.test(t))
                );
                var t;
              },
              isAtZwsp: function(e) {
                return pa(e) || va(e);
              },
              normalizePosition: kp,
              normalizeForwards: u(kp, !0),
              normalizeBackwards: u(kp, !1),
              hasSameParentBlock: function(e, t, n) {
                var r = fs(t, e),
                  o = fs(n, e);
                return r && r === o;
              }
            },
            _p = function(e, t) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n].apply(null, t);
                if (r.isSome()) return r;
              }
              return _.none();
            },
            Ap = Ql([
              { before: ["element"] },
              { start: ["element"] },
              { end: ["element"] },
              { after: ["element"] }
            ]),
            Bp = function(e, t) {
              var n = fs(t, e);
              return n || e;
            },
            Rp = function(e, t, n) {
              var r = Tp.normalizeForwards(n),
                o = Bp(t, r.container());
              return Tp.findRootInline(e, o, r).fold(function() {
                return Ws.nextPosition(o, r)
                  .bind(u(Tp.findRootInline, e, o))
                  .map(function(e) {
                    return Ap.before(e);
                  });
              }, _.none);
            },
            Mp = function(e, t) {
              return null === Lu(e, t);
            },
            Op = function(e, t, n) {
              return Tp.findRootInline(e, t, n).filter(u(Mp, t));
            },
            Dp = function(e, t, n) {
              var r = Tp.normalizeBackwards(n);
              return Op(e, t, r).bind(function(e) {
                return Ws.prevPosition(e, r).isNone()
                  ? _.some(Ap.start(e))
                  : _.none();
              });
            },
            Pp = function(e, t, n) {
              var r = Tp.normalizeForwards(n);
              return Op(e, t, r).bind(function(e) {
                return Ws.nextPosition(e, r).isNone()
                  ? _.some(Ap.end(e))
                  : _.none();
              });
            },
            Hp = function(e, t, n) {
              var r = Tp.normalizeBackwards(n),
                o = Bp(t, r.container());
              return Tp.findRootInline(e, o, r).fold(function() {
                return Ws.prevPosition(o, r)
                  .bind(u(Tp.findRootInline, e, o))
                  .map(function(e) {
                    return Ap.after(e);
                  });
              }, _.none);
            },
            Lp = function(e) {
              return !1 === Tp.isRtl(Vp(e));
            },
            Ip = function(e, t, n) {
              return _p([Rp, Dp, Pp, Hp], [e, t, n]).filter(Lp);
            },
            Vp = function(e) {
              return e.fold(a, a, a, a);
            },
            Fp = function(e) {
              return e.fold(i("before"), i("start"), i("end"), i("after"));
            },
            Up = function(e) {
              return e.fold(Ap.before, Ap.before, Ap.after, Ap.after);
            },
            jp = function(e, t, n, r, o, i) {
              return $a(
                [Tp.findRootInline(t, n, r), Tp.findRootInline(t, n, o)],
                function(t, r) {
                  return t !== r && Tp.hasSameParentBlock(n, t, r)
                    ? Ap.after(e ? t : r)
                    : i;
                }
              ).getOr(i);
            },
            qp = function(e, t) {
              return e.fold(i(!0), function(e) {
                return (r = t), !(Fp((n = e)) === Fp(r) && Vp(n) === Vp(r));
                var n, r;
              });
            },
            $p = function(e, t) {
              return e
                ? t.fold(
                    o(_.some, Ap.start),
                    _.none,
                    o(_.some, Ap.after),
                    _.none
                  )
                : t.fold(
                    _.none,
                    o(_.some, Ap.before),
                    _.none,
                    o(_.some, Ap.end)
                  );
            },
            Wp = function(e, t, n, r) {
              var o = Tp.normalizePosition(e, r),
                i = Ip(t, n, o);
              return Ip(t, n, o)
                .bind(u($p, e))
                .orThunk(function() {
                  return (function(e, t, n, r, o) {
                    var i = Tp.normalizePosition(e, o);
                    return Ws.fromPosition(e, n, i)
                      .map(u(Tp.normalizePosition, e))
                      .fold(
                        function() {
                          return r.map(Up);
                        },
                        function(o) {
                          return Ip(t, n, o)
                            .map(u(jp, e, t, n, i, o))
                            .filter(u(qp, r));
                        }
                      )
                      .filter(Lp);
                  })(e, t, n, i, r);
                });
            },
            Kp = Ip,
            Xp = Wp,
            Yp = (u(Wp, !1), u(Wp, !0), Up),
            Gp = function(e) {
              return e.fold(Ap.start, Ap.start, Ap.end, Ap.end);
            },
            Jp = function(e) {
              return P(e.selection.getSel().modify);
            },
            Qp = function(e, t, n) {
              var r = e ? 1 : -1;
              return (
                t.setRng(gu(n.container(), n.offset() + r).toRange()),
                t.getSel().modify("move", e ? "forward" : "backward", "word"),
                !0
              );
            },
            Zp = function(e, t) {
              var n = t.selection.getRng(),
                r = e ? gu.fromRangeEnd(n) : gu.fromRangeStart(n);
              return (
                !!Jp(t) &&
                (e && pa(r)
                  ? Qp(!0, t.selection, r)
                  : !(e || !va(r)) && Qp(!1, t.selection, r))
              );
            },
            ev = function(e, t) {
              var n = e.dom.createRng();
              n.setStart(t.container(), t.offset()),
                n.setEnd(t.container(), t.offset()),
                e.selection.setRng(n);
            },
            tv = function(e) {
              return !1 !== e.settings.inline_boundaries;
            },
            nv = function(e, t) {
              e
                ? t.setAttribute("data-mce-selected", "inline-boundary")
                : t.removeAttribute("data-mce-selected");
            },
            rv = function(e, t, n) {
              return Np(t, n).map(function(t) {
                return ev(e, t), n;
              });
            },
            ov = function(e, t, n) {
              return function() {
                return !!tv(t) && Zp(e, t);
              };
            },
            iv = {
              move: function(e, t, n) {
                return function() {
                  return (
                    !!tv(e) &&
                    (function(e, t, n) {
                      var r = e.getBody(),
                        o = gu.fromRangeStart(e.selection.getRng()),
                        i = u(Tp.isInlineTarget, e);
                      return Xp(n, i, r, o).bind(function(n) {
                        return rv(e, t, n);
                      });
                    })(e, t, n).isSome()
                  );
                };
              },
              moveNextWord: u(ov, !0),
              movePrevWord: u(ov, !1),
              setupSelectedState: function(e) {
                var t = pi(null),
                  n = u(Tp.isInlineTarget, e);
                return (
                  e.on("NodeChange", function(r) {
                    tv(e) &&
                      ((function(e, t, n) {
                        var r = j(
                            t.select('*[data-mce-selected="inline-boundary"]'),
                            e
                          ),
                          o = j(n, e);
                        F(Q(r, o), u(nv, !1)), F(Q(o, r), u(nv, !0));
                      })(n, e.dom, r.parents),
                      (function(e, t) {
                        if (
                          e.selection.isCollapsed() &&
                          !0 !== e.composing &&
                          t.get()
                        ) {
                          var n = gu.fromRangeStart(e.selection.getRng());
                          gu.isTextPosition(n) &&
                            !1 === Tp.isAtZwsp(n) &&
                            (ev(e, Xu.removeAndReposition(t.get(), n)),
                            t.set(null));
                        }
                      })(e, t),
                      (function(e, t, n, r) {
                        if (t.selection.isCollapsed()) {
                          var o = j(r, e);
                          F(o, function(r) {
                            var o = gu.fromRangeStart(t.selection.getRng());
                            Kp(e, t.getBody(), o).bind(function(e) {
                              return rv(t, n, e);
                            });
                          });
                        }
                      })(n, e, t, r.parents));
                  }),
                  t
                );
              },
              setCaretPosition: ev
            },
            av = ko.isContentEditableFalse,
            uv = Fa,
            sv = function(e, t, n, r) {
              var o = e === mu.Forwards,
                i = o ? Ld : Id;
              if (!r.collapsed) {
                var a = uv(r);
                if (av(a)) return Ed(e, t, a, e === mu.Backwards, !0);
              }
              var u = (function(e) {
                  return da(e.startContainer);
                })(r),
                s = ws(e, t.getBody(), r);
              if (i(s)) return Nd(t, s.getNode(!o));
              var l = Tp.normalizePosition(o, n(s));
              if (!l) return u ? r : null;
              if (i(l)) return Ed(e, t, l.getNode(!o), o, !0);
              var c = n(l);
              return c && i(c) && Es(l, c)
                ? Ed(e, t, c.getNode(!o), o, !0)
                : u
                ? kd(t, l.toRange(), !0)
                : null;
            },
            lv = function(e, t, n, r) {
              var o, i, a, u, s, l, c, f, d;
              if (
                ((d = uv(r)),
                (o = ws(e, t.getBody(), r)),
                (i = n(t.getBody(), fd(1), o)),
                (a = j(i, dd(1))),
                (s = qt.last(o.getClientRects())),
                (Ld(o) || Fd(o)) && (d = o.getNode()),
                (Id(o) || Ud(o)) && (d = o.getNode(!0)),
                !s)
              )
                return null;
              if (((l = s.left), (u = bd(a, l)) && av(u.node)))
                return (
                  (c = Math.abs(l - u.left)),
                  (f = Math.abs(l - u.right)),
                  Ed(e, t, u.node, c < f, !0)
                );
              if (d) {
                var h = (function(e, t, n, r) {
                  var o,
                    i,
                    a,
                    u,
                    s,
                    l,
                    c = Ds(t),
                    f = [],
                    d = 0,
                    h = function(e) {
                      return qt.last(e.getClientRects());
                    };
                  1 === e
                    ? ((o = c.next), (i = La), (a = Ha), (u = gu.after(r)))
                    : ((o = c.prev), (i = Ha), (a = La), (u = gu.before(r))),
                    (l = h(u));
                  do {
                    if (u.isVisible() && !a((s = h(u)), l)) {
                      if (
                        (f.length > 0 && i(s, qt.last(f)) && d++,
                        ((s = Oa(s)).position = u),
                        (s.line = d),
                        n(s))
                      )
                        return f;
                      f.push(s);
                    }
                  } while ((u = o(u)));
                  return f;
                })(e, t.getBody(), fd(1), d);
                if ((u = bd(j(h, dd(1)), l)))
                  return kd(t, u.position.toRange(), !0);
                if ((u = qt.last(j(h, dd(0)))))
                  return kd(t, u.position.toRange(), !0);
              }
            },
            cv = function(e, t, n) {
              var r,
                o,
                i = Ds(e.getBody()),
                a = u(Ss, i.next),
                s = u(Ss, i.prev);
              if (n.collapsed && e.settings.forced_root_block) {
                if (!(r = e.dom.getParent(n.startContainer, "PRE"))) return;
                (1 === t ? a(gu.fromRangeStart(n)) : s(gu.fromRangeStart(n))) ||
                  ((o = (function(e) {
                    var t = e.dom.create(jl.getForcedRootBlock(e));
                    return (
                      (!fe.ie || fe.ie >= 11) &&
                        (t.innerHTML = '<br data-mce-bogus="1">'),
                      t
                    );
                  })(e)),
                  1 === t ? e.$(r).after(o) : e.$(r).before(o),
                  e.selection.select(o, !0),
                  e.selection.collapse());
              }
            },
            fv = function(e, t) {
              return function() {
                var n = (function(e, t) {
                  var n,
                    r = Ds(e.getBody()),
                    o = u(Ss, r.next),
                    i = u(Ss, r.prev),
                    a = t ? mu.Forwards : mu.Backwards,
                    s = t ? o : i,
                    l = e.selection.getRng();
                  return (n = sv(a, e, s, l)) ? n : (n = cv(e, a, l)) || null;
                })(e, t);
                return !!n && (e.selection.setRng(n), !0);
              };
            },
            dv = function(e, t) {
              return function() {
                var n = (function(e, t) {
                  var n,
                    r = t ? 1 : -1,
                    o = t ? cd : ld,
                    i = e.selection.getRng();
                  return (n = lv(r, e, o, i)) ? n : (n = cv(e, r, i)) || null;
                })(e, t);
                return !!n && (e.selection.setRng(n), !0);
              };
            };
          !(function(e) {
            (e[(e.Br = 0)] = "Br"),
              (e[(e.Block = 1)] = "Block"),
              (e[(e.Wrap = 2)] = "Wrap"),
              (e[(e.Eol = 3)] = "Eol");
          })(dg || (dg = {}));
          var hv = function(e, t) {
              return e === mu.Backwards ? t.reverse() : t;
            },
            mv = function(e, t, n) {
              return e === mu.Forwards ? t.next(n) : t.prev(n);
            },
            gv = function(e, t, n, r) {
              return ko.isBr(r.getNode(t === mu.Forwards))
                ? dg.Br
                : !1 === ds(n, r)
                ? dg.Block
                : dg.Wrap;
            },
            pv = function(e, t, n, r) {
              for (var o, i = Ds(n), a = r, u = []; a && (o = mv(t, i, a)); ) {
                if (ko.isBr(o.getNode(!1)))
                  return t === mu.Forwards
                    ? {
                        positions: hv(t, u).concat([o]),
                        breakType: dg.Br,
                        breakAt: _.some(o)
                      }
                    : {
                        positions: hv(t, u),
                        breakType: dg.Br,
                        breakAt: _.some(o)
                      };
                if (o.isVisible()) {
                  if (e(a, o)) {
                    var s = gv(0, t, a, o);
                    return {
                      positions: hv(t, u),
                      breakType: s,
                      breakAt: _.some(o)
                    };
                  }
                  u.push(o), (a = o);
                } else a = o;
              }
              return {
                positions: hv(t, u),
                breakType: dg.Eol,
                breakAt: _.none()
              };
            },
            vv = function(e, t, n, r) {
              return t(n, r)
                .breakAt.map(function(r) {
                  var o = t(n, r).positions;
                  return e === mu.Backwards ? o.concat(r) : [r].concat(o);
                })
                .getOr([]);
            },
            bv = function(e, t) {
              return q(
                e,
                function(e, n) {
                  return e.fold(
                    function() {
                      return _.some(n);
                    },
                    function(r) {
                      return $a(
                        [Z(r.getClientRects()), Z(n.getClientRects())],
                        function(e, o) {
                          var i = Math.abs(t - e.left);
                          return Math.abs(t - o.left) <= i ? n : r;
                        }
                      ).or(e);
                    }
                  );
                },
                _.none()
              );
            },
            yv = function(e, t) {
              return Z(t.getClientRects()).bind(function(t) {
                return bv(e, t.left);
              });
            },
            Cv = u(pv, hu.isAbove, -1),
            wv = u(pv, hu.isBelow, 1),
            xv = u(vv, -1, Cv),
            Sv = u(vv, 1, wv),
            Ev = function(e, t, n, r, o) {
              var i = Ii(Jn.fromDom(n), "td,th,caption").map(function(e) {
                return e.dom();
              });
              return (function(e, t, n) {
                return q(
                  e,
                  function(e, r) {
                    return e.fold(
                      function() {
                        return _.some(r);
                      },
                      function(e) {
                        var o = Math.sqrt(
                            Math.abs(e.x - t) + Math.abs(e.y - n)
                          ),
                          i = Math.sqrt(Math.abs(r.x - t) + Math.abs(r.y - n));
                        return _.some(i < o ? r : e);
                      }
                    );
                  },
                  _.none()
                );
              })(
                j(
                  (function(e, t) {
                    return Y(t, function(t) {
                      var n = (function(e, t) {
                        return {
                          left: e.left - t,
                          top: e.top - t,
                          right: e.right + 2 * t,
                          bottom: e.bottom + 2 * t,
                          width: e.width + t,
                          height: e.height + t
                        };
                      })(Oa(t.getBoundingClientRect()), -1);
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
            Nv = u(
              Ev,
              function(e) {
                return e.bottom;
              },
              function(e, t) {
                return e.y < t;
              }
            ),
            zv = u(
              Ev,
              function(e) {
                return e.top;
              },
              function(e, t) {
                return e.y > t;
              }
            ),
            kv = function(e, t) {
              return Z(t.getClientRects())
                .bind(function(t) {
                  return Nv(e, t.left, t.top);
                })
                .bind(function(e) {
                  return yv(
                    ((n = e),
                    Ws.lastPositionIn(n)
                      .map(function(e) {
                        return Cv(n, e).positions.concat(e);
                      })
                      .getOr([])),
                    t
                  );
                  var n;
                });
            },
            Tv = function(e, t) {
              return ee(t.getClientRects())
                .bind(function(t) {
                  return zv(e, t.left, t.top);
                })
                .bind(function(e) {
                  return yv(
                    ((n = e),
                    Ws.firstPositionIn(n)
                      .map(function(e) {
                        return [e].concat(wv(n, e).positions);
                      })
                      .getOr([])),
                    t
                  );
                  var n;
                });
            },
            _v = function(e, t) {
              e.selection.setRng(t), yg(e, t);
            },
            Av = function(e, t, n) {
              var r = e(t, n);
              return (function(e) {
                return e.breakType === dg.Wrap && 0 === e.positions.length;
              })(r) ||
                (!ko.isBr(n.getNode()) &&
                  (function(e) {
                    return e.breakType === dg.Br && 1 === e.positions.length;
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
            Bv = u(Av, Cv),
            Rv = u(Av, wv),
            Mv = function(e, t, n, r) {
              var o = e.selection.getRng(),
                i = t ? 1 : -1;
              if (
                Zu() &&
                (function(e, t, n) {
                  var r = gu.fromRangeStart(t);
                  return Ws.positionIn(!e, n)
                    .map(function(e) {
                      return e.isEqual(r);
                    })
                    .getOr(!1);
                })(t, o, n)
              ) {
                var a = Ed(i, e, n, !t, !0);
                return _v(e, a), !0;
              }
              return !1;
            },
            Ov = function(e, t) {
              var n = t.getNode(e);
              return ko.isElement(n) && "TABLE" === n.nodeName
                ? _.some(n)
                : _.none();
            },
            Dv = function(e, t, n) {
              var r = Ov(!!t, n),
                o = !1 === t;
              r.fold(
                function() {
                  return _v(e, n.toRange());
                },
                function(r) {
                  return Ws.positionIn(o, e.getBody())
                    .filter(function(e) {
                      return e.isEqual(n);
                    })
                    .fold(
                      function() {
                        return _v(e, n.toRange());
                      },
                      function(o) {
                        return (function(e, t, n, r) {
                          var o = jl.getForcedRootBlock(t);
                          o
                            ? t.undoManager.transact(function() {
                                var r = Jn.fromTag(o);
                                mr(r, jl.getForcedRootBlockAttrs(t)),
                                  Ni(r, Jn.fromTag("br")),
                                  e
                                    ? Si(Jn.fromDom(n), r)
                                    : xi(Jn.fromDom(n), r);
                                var i = t.dom.createRng();
                                i.setStart(r.dom(), 0),
                                  i.setEnd(r.dom(), 0),
                                  _v(t, i);
                              })
                            : _v(t, r.toRange());
                        })(t, e, r, n);
                      }
                    );
                }
              );
            },
            Pv = function(e, t, n, r) {
              var o = e.selection.getRng(),
                i = gu.fromRangeStart(o),
                a = e.getBody();
              if (!t && Bv(r, i)) {
                var u = (function(e, t, n) {
                  return kv(t, n)
                    .orThunk(function() {
                      return Z(n.getClientRects()).bind(function(n) {
                        return bv(xv(e, gu.before(t)), n.left);
                      });
                    })
                    .getOr(gu.before(t));
                })(a, n, i);
                return Dv(e, t, u), !0;
              }
              return (
                !(!t || !Rv(r, i)) &&
                ((u = (function(e, t, n) {
                  return Tv(t, n)
                    .orThunk(function() {
                      return Z(n.getClientRects()).bind(function(n) {
                        return bv(Sv(e, gu.after(t)), n.left);
                      });
                    })
                    .getOr(gu.after(t));
                })(a, n, i)),
                Dv(e, t, u),
                !0)
              );
            },
            Hv = function(e, t) {
              return function() {
                return _.from(e.dom.getParent(e.selection.getNode(), "td,th"))
                  .bind(function(n) {
                    return _.from(e.dom.getParent(n, "table")).map(function(n) {
                      return Mv(e, t, n);
                    });
                  })
                  .getOr(!1);
              };
            },
            Lv = function(e, t) {
              return function() {
                return _.from(e.dom.getParent(e.selection.getNode(), "td,th"))
                  .bind(function(n) {
                    return _.from(e.dom.getParent(n, "table")).map(function(r) {
                      return Pv(e, t, r, n);
                    });
                  })
                  .getOr(!1);
              };
            },
            Iv = function(e) {
              return I(["figcaption"], tr(e));
            },
            Vv = function(e) {
              var t = n.document.createRange();
              return t.setStartBefore(e.dom()), t.setEndBefore(e.dom()), t;
            },
            Fv = function(e, t, n) {
              n ? Ni(e, t) : Ei(e, t);
            },
            Uv = function(e, t, n, r) {
              return "" === t
                ? (function(e, t) {
                    var n = Jn.fromTag("br");
                    return Fv(e, n, t), Vv(n);
                  })(e, r)
                : (function(e, t, n, r) {
                    var o = Jn.fromTag(n),
                      i = Jn.fromTag("br");
                    return mr(o, r), Ni(o, i), Fv(e, o, t), Vv(i);
                  })(e, r, t, n);
            },
            jv = function(e, t, n) {
              return t
                ? (function(e, t) {
                    return wv(e, t).breakAt.isNone();
                  })(e.dom(), n)
                : (function(e, t) {
                    return Cv(e, t).breakAt.isNone();
                  })(e.dom(), n);
            },
            qv = function(e, t) {
              var n = Jn.fromDom(e.getBody()),
                r = gu.fromRangeStart(e.selection.getRng()),
                o = jl.getForcedRootBlock(e),
                i = jl.getForcedRootBlockAttrs(e);
              return (function(e, t) {
                var n = u(_r, t);
                return Ui(Jn.fromDom(e.container()), io, n).filter(Iv);
              })(r, n).exists(function() {
                if (jv(n, t, r)) {
                  var a = Uv(n, o, i, t);
                  return e.selection.setRng(a), !0;
                }
                return !1;
              });
            },
            $v = function(e, t) {
              return function() {
                return !!e.selection.isCollapsed() && qv(e, t);
              };
            },
            Wv = function(e, t) {
              return Y(
                (function(e) {
                  return V(e, function(e) {
                    return Tl(
                      {
                        shiftKey: !1,
                        altKey: !1,
                        ctrlKey: !1,
                        metaKey: !1,
                        keyCode: 0,
                        action: r
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
            Kv = function(e) {
              for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
              var r = Array.prototype.slice.call(arguments, 1);
              return function() {
                return e.apply(null, r);
              };
            },
            Xv = function(e, t) {
              return $(Wv(e, t), function(e) {
                return e.action();
              });
            },
            Yv = function(e, t) {
              e.on("keydown", function(n) {
                !1 === n.isDefaultPrevented() &&
                  (function(e, t, n) {
                    var r = Yn.detect().os;
                    Xv(
                      [
                        { keyCode: _d.RIGHT, action: fv(e, !0) },
                        { keyCode: _d.LEFT, action: fv(e, !1) },
                        { keyCode: _d.UP, action: dv(e, !1) },
                        { keyCode: _d.DOWN, action: dv(e, !0) },
                        { keyCode: _d.RIGHT, action: Hv(e, !0) },
                        { keyCode: _d.LEFT, action: Hv(e, !1) },
                        { keyCode: _d.UP, action: Lv(e, !1) },
                        { keyCode: _d.DOWN, action: Lv(e, !0) },
                        { keyCode: _d.RIGHT, action: iv.move(e, t, !0) },
                        { keyCode: _d.LEFT, action: iv.move(e, t, !1) },
                        {
                          keyCode: _d.RIGHT,
                          ctrlKey: !r.isOSX(),
                          altKey: r.isOSX(),
                          action: iv.moveNextWord(e, t)
                        },
                        {
                          keyCode: _d.LEFT,
                          ctrlKey: !r.isOSX(),
                          altKey: r.isOSX(),
                          action: iv.movePrevWord(e, t)
                        },
                        { keyCode: _d.UP, action: $v(e, !1) },
                        { keyCode: _d.DOWN, action: $v(e, !0) }
                      ],
                      n
                    ).each(function(e) {
                      n.preventDefault();
                    });
                  })(e, t, n);
              });
            },
            Gv = function(e, t) {
              return Ar(e, t)
                ? Ui(
                    t,
                    function(e) {
                      return so(e) || co(e);
                    },
                    (function(e) {
                      return function(t) {
                        return _r(e, Jn.fromDom(t.dom().parentNode));
                      };
                    })(e)
                  )
                : _.none();
            },
            Jv = function(e) {
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
            Qv = function(e, t, n) {
              return $a([Ws.firstPositionIn(n), Ws.lastPositionIn(n)], function(
                r,
                o
              ) {
                var i = Tp.normalizePosition(!0, r),
                  a = Tp.normalizePosition(!1, o),
                  u = Tp.normalizePosition(!1, t);
                return e
                  ? Ws.nextPosition(n, u)
                      .map(function(e) {
                        return e.isEqual(a) && t.isEqual(i);
                      })
                      .getOr(!1)
                  : Ws.prevPosition(n, u)
                      .map(function(e) {
                        return e.isEqual(i) && t.isEqual(a);
                      })
                      .getOr(!1);
              }).getOr(!0);
            },
            Zv = Cr("block", "position"),
            eb = Cr("from", "to"),
            tb = function(e, t) {
              var n = Jn.fromDom(e),
                r = Jn.fromDom(t.container());
              return Gv(n, r).map(function(e) {
                return Zv(e, t);
              });
            },
            nb = function(e, t, n) {
              var r = tb(e, gu.fromRangeStart(n)),
                o = r.bind(function(n) {
                  return Ws.fromPosition(t, e, n.position()).bind(function(n) {
                    return tb(e, n).map(function(n) {
                      return (function(e, t, n) {
                        return ko.isBr(n.position().getNode()) &&
                          !1 === kh(n.block())
                          ? Ws.positionIn(!1, n.block().dom())
                              .bind(function(r) {
                                return r.isEqual(n.position())
                                  ? Ws.fromPosition(t, e, r).bind(function(t) {
                                      return tb(e, t);
                                    })
                                  : _.some(n);
                              })
                              .getOr(n)
                          : n;
                      })(e, t, n);
                    });
                  });
                });
              return $a([r, o], eb).filter(function(e) {
                return (
                  (function(e) {
                    return !1 === _r(e.from().block(), e.to().block());
                  })(e) &&
                  (function(e) {
                    return Rr(e.from().block())
                      .bind(function(t) {
                        return Rr(e.to().block()).filter(function(e) {
                          return _r(t, e);
                        });
                      })
                      .isSome();
                  })(e) &&
                  (function(e) {
                    return (
                      !1 === ko.isContentEditableFalse(e.from().block()) &&
                      !1 === ko.isContentEditableFalse(e.to().block())
                    );
                  })(e)
                );
              });
            },
            rb = function(e, t, n) {
              return n.collapsed ? nb(e, t, n) : _.none();
            },
            ob = function(e) {
              var t = Hr(e);
              return W(t, io).fold(
                function() {
                  return t;
                },
                function(e) {
                  return t.slice(0, e);
                }
              );
            },
            ib = function(e) {
              var t = ob(e);
              return F(t, Ti), t;
            },
            ab = function(e, t) {
              var n = Of(t, e);
              return $(n.reverse(), kh).each(Ti);
            },
            ub = function(e, t, n, r) {
              if (kh(n)) return lh(n), Ws.firstPositionIn(n.dom());
              0 ===
                j(Dr(r), function(e) {
                  return !kh(e);
                }).length &&
                kh(t) &&
                xi(r, Jn.fromTag("br"));
              var o = Ws.prevPosition(n.dom(), gu.before(r.dom()));
              return (
                F(ib(t), function(e) {
                  xi(r, e);
                }),
                ab(e, t),
                o
              );
            },
            sb = function(e, t, n) {
              if (kh(n))
                return Ti(n), kh(t) && lh(t), Ws.firstPositionIn(t.dom());
              var r = Ws.lastPositionIn(n.dom());
              return (
                F(ib(t), function(e) {
                  Ni(n, e);
                }),
                ab(e, t),
                r
              );
            },
            lb = function(e, t) {
              return Ar(t, e)
                ? (function(e, t) {
                    var n = Of(t, e);
                    return _.from(n[n.length - 1]);
                  })(t, e)
                : _.none();
            },
            cb = function(e, t) {
              Ws.positionIn(e, t.dom())
                .map(function(e) {
                  return e.getNode();
                })
                .map(Jn.fromDom)
                .filter(uo)
                .each(Ti);
            },
            fb = function(e, t, n) {
              return (
                cb(!0, t),
                cb(!1, n),
                lb(t, n).fold(u(sb, e, t, n), u(ub, e, t, n))
              );
            },
            db = function(e, t, n, r) {
              return t ? fb(e, r, n) : fb(e, n, r);
            },
            hb = function(e, t) {
              var n,
                r = Jn.fromDom(e.getBody());
              return (
                (n = rb(r.dom(), t, e.selection.getRng()).bind(function(e) {
                  return db(r, t, e.from().block(), e.to().block());
                })).each(function(t) {
                  e.selection.setRng(t.toRange());
                }),
                n.isSome()
              );
            },
            mb = function(e, t) {
              var n = Jn.fromDom(t),
                r = u(_r, e);
              return Fi(n, mo, r).isSome();
            },
            gb = function(e, t) {
              var n = Ws.prevPosition(e.dom(), gu.fromRangeStart(t)).isNone(),
                r = Ws.nextPosition(e.dom(), gu.fromRangeEnd(t)).isNone();
              return (
                !(function(e, t) {
                  return mb(e, t.startContainer) || mb(e, t.endContainer);
                })(e, t) &&
                n &&
                r
              );
            },
            pb = function(e) {
              var t = Jn.fromDom(e.getBody()),
                n = e.selection.getRng();
              return gb(t, n)
                ? (function(e) {
                    return (
                      e.setContent(""), e.selection.setCursorLocation(), !0
                    );
                  })(e)
                : (function(e, t) {
                    var n = t.getRng();
                    return $a(
                      [
                        Gv(e, Jn.fromDom(n.startContainer)),
                        Gv(e, Jn.fromDom(n.endContainer))
                      ],
                      function(r, o) {
                        return (
                          !1 === _r(r, o) &&
                          (n.deleteContents(),
                          db(e, !0, r, o).each(function(e) {
                            t.setRng(e.toRange());
                          }),
                          !0)
                        );
                      }
                    ).getOr(!1);
                  })(t, e.selection);
            },
            vb = function(e, t) {
              return !e.selection.isCollapsed() && pb(e);
            },
            bb = function(e) {
              return xs(e).exists(uo);
            },
            yb = function(e, t, n) {
              var r = j(Of(Jn.fromDom(n.container()), t), io),
                o = Z(r).getOr(t);
              return Ws.fromPosition(e, o.dom(), n).filter(bb);
            },
            Cb = function(e, t) {
              return xs(t).exists(uo) || yb(!0, e, t).isSome();
            },
            wb = function(e, t) {
              return (
                (function(e) {
                  return _.from(e.getNode(!0)).map(Jn.fromDom);
                })(t).exists(uo) || yb(!1, e, t).isSome()
              );
            },
            xb = u(yb, !1),
            Sb = u(yb, !0),
            Eb = Ql([
              { remove: ["element"] },
              { moveToElement: ["element"] },
              { moveToPosition: ["position"] }
            ]),
            Nb = function(e, t, n, r) {
              var o = r.getNode(!1 === t);
              return Gv(Jn.fromDom(e), Jn.fromDom(n.getNode()))
                .map(function(e) {
                  return kh(e) ? Eb.remove(e.dom()) : Eb.moveToElement(o);
                })
                .orThunk(function() {
                  return _.some(Eb.moveToElement(o));
                });
            },
            zb = function(e, t, n) {
              return Ws.fromPosition(t, e, n).bind(function(r) {
                return (
                  (o = r.getNode()),
                  mo(Jn.fromDom(o)) || co(Jn.fromDom(o))
                    ? _.none()
                    : (function(e, t, n, r) {
                        var o = function(t) {
                          return ao(Jn.fromDom(t)) && !ds(n, r, e);
                        };
                        return Cs(!t, n).fold(function() {
                          return Cs(t, r).fold(i(!1), o);
                        }, o);
                      })(e, t, n, r)
                    ? _.none()
                    : t && ko.isContentEditableFalse(r.getNode())
                    ? Nb(e, t, n, r)
                    : !1 === t && ko.isContentEditableFalse(r.getNode(!0))
                    ? Nb(e, t, n, r)
                    : t && Id(n)
                    ? _.some(Eb.moveToPosition(r))
                    : !1 === t && Ld(n)
                    ? _.some(Eb.moveToPosition(r))
                    : _.none()
                );
                var o;
              });
            },
            kb = function(e, t, n) {
              return (function(e, t) {
                var n = t.getNode(!1 === e),
                  r = e ? "after" : "before";
                return (
                  ko.isElement(n) && n.getAttribute("data-mce-caret") === r
                );
              })(t, n)
                ? (function(e, t) {
                    return e && ko.isContentEditableFalse(t.nextSibling)
                      ? _.some(Eb.moveToElement(t.nextSibling))
                      : !1 === e && ko.isContentEditableFalse(t.previousSibling)
                      ? _.some(Eb.moveToElement(t.previousSibling))
                      : _.none();
                  })(t, n.getNode(!1 === t)).fold(function() {
                    return zb(e, t, n);
                  }, _.some)
                : zb(e, t, n).bind(function(t) {
                    return (function(e, t, n) {
                      return n.fold(
                        function(e) {
                          return _.some(Eb.remove(e));
                        },
                        function(e) {
                          return _.some(Eb.moveToElement(e));
                        },
                        function(n) {
                          return ds(t, n, e)
                            ? _.none()
                            : _.some(Eb.moveToPosition(n));
                        }
                      );
                    })(e, n, t);
                  });
            },
            Tb = function(e, t) {
              return (function(e, t, n) {
                var r = ys(t ? 1 : -1, e, n),
                  o = gu.fromRangeStart(r),
                  i = Jn.fromDom(e);
                return !1 === t && Id(o)
                  ? _.some(Eb.remove(o.getNode(!0)))
                  : t && Ld(o)
                  ? _.some(Eb.remove(o.getNode()))
                  : !1 === t && Ld(o) && wb(i, o)
                  ? xb(i, o).map(function(e) {
                      return Eb.remove(e.getNode());
                    })
                  : t && Id(o) && Cb(i, o)
                  ? Sb(i, o).map(function(e) {
                      return Eb.remove(e.getNode());
                    })
                  : kb(e, t, o);
              })(e.getBody(), t, e.selection.getRng())
                .map(function(n) {
                  return n.fold(
                    (function(e, t) {
                      return function(n) {
                        return (
                          e._selectionOverrides.hideFakeCaret(),
                          Lh(e, t, Jn.fromDom(n)),
                          !0
                        );
                      };
                    })(e, t),
                    (function(e, t) {
                      return function(n) {
                        var r = t ? gu.before(n) : gu.after(n);
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
            _b = function(e, t) {
              var n,
                r = e.selection.getNode();
              return (
                !!ko.isContentEditableFalse(r) &&
                ((n = Jn.fromDom(e.getBody())),
                F(Ii(n, ".mce-offscreen-selection"), Ti),
                Lh(e, t, Jn.fromDom(e.selection.getNode())),
                Jv(e),
                !0)
              );
            },
            Ab = function(e, t) {
              return e.selection.isCollapsed() ? Tb(e, t) : _b(e, t);
            },
            Bb = function(e) {
              var t,
                n = (function(e, t) {
                  for (; t && t !== e; ) {
                    if (
                      ko.isContentEditableTrue(t) ||
                      ko.isContentEditableFalse(t)
                    )
                      return t;
                    t = t.parentNode;
                  }
                  return null;
                })(e.getBody(), e.selection.getNode());
              return (
                ko.isContentEditableTrue(n) &&
                  e.dom.isBlock(n) &&
                  e.dom.isEmpty(n) &&
                  ((t = e.dom.create("br", { "data-mce-bogus": "1" })),
                  e.dom.setHTML(n, ""),
                  n.appendChild(t),
                  e.selection.setRng(gu.before(t).toRange())),
                !0
              );
            },
            Rb = function(e, t, n, r, o, i) {
              var a = Ed(r, e, i.getNode(!o), o, !0);
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
                  ko.isText(t) && 0 === t.data.length && e.remove(t);
                })(e.dom, n),
                !0
              );
            },
            Mb = function(e, t) {
              return (function(e, t) {
                var n = e.selection.getRng();
                if (!ko.isText(n.commonAncestorContainer)) return !1;
                var r = t ? mu.Forwards : mu.Backwards,
                  o = Ds(e.getBody()),
                  i = u(Ss, o.next),
                  a = u(Ss, o.prev),
                  s = t ? i : a,
                  l = t ? Ld : Id,
                  c = ws(r, e.getBody(), n),
                  f = Tp.normalizePosition(t, s(c));
                if (!f) return !1;
                if (l(f)) return Rb(e, n, c.getNode(), r, t, f);
                var d = s(f);
                return (
                  !!(d && l(d) && Es(f, d)) && Rb(e, n, c.getNode(), r, t, d)
                );
              })(e, t);
            },
            Ob = function(e, t) {
              return function(n) {
                return Np(t, n)
                  .map(function(t) {
                    return iv.setCaretPosition(e, t), !0;
                  })
                  .getOr(!1);
              };
            },
            Db = function(e, t, r, o) {
              var i = e.getBody(),
                a = u(Tp.isInlineTarget, e);
              e.undoManager.ignore(function() {
                e.selection.setRng(
                  (function(e, t) {
                    var r = n.document.createRange();
                    return (
                      r.setStart(e.container(), e.offset()),
                      r.setEnd(t.container(), t.offset()),
                      r
                    );
                  })(r, o)
                ),
                  e.execCommand("Delete"),
                  Kp(a, i, gu.fromRangeStart(e.selection.getRng()))
                    .map(Gp)
                    .map(Ob(e, t));
              }),
                e.nodeChanged();
            },
            Pb = function(e, t, n, r) {
              var o = (function(e, t) {
                  var n = fs(t, e);
                  return n || e;
                })(e.getBody(), r.container()),
                a = u(Tp.isInlineTarget, e),
                s = Kp(a, o, r);
              return s
                .bind(function(e) {
                  return n
                    ? e.fold(i(_.some(Gp(e))), _.none, i(_.some(Yp(e))), _.none)
                    : e.fold(
                        _.none,
                        i(_.some(Yp(e))),
                        _.none,
                        i(_.some(Gp(e)))
                      );
                })
                .map(Ob(e, t))
                .getOrThunk(function() {
                  var i = Ws.navigate(n, o, r),
                    u = i.bind(function(e) {
                      return Kp(a, o, e);
                    });
                  return s.isSome() && u.isSome()
                    ? Tp.findRootInline(a, o, r)
                        .map(function(t) {
                          return (
                            !!(function(e) {
                              return $a(
                                [Ws.firstPositionIn(e), Ws.lastPositionIn(e)],
                                function(t, n) {
                                  var r = Tp.normalizePosition(!0, t),
                                    o = Tp.normalizePosition(!1, n);
                                  return Ws.nextPosition(e, r)
                                    .map(function(e) {
                                      return e.isEqual(o);
                                    })
                                    .getOr(!0);
                                }
                              ).getOr(!0);
                            })(t) && (Lh(e, n, Jn.fromDom(t)), !0)
                          );
                        })
                        .getOr(!1)
                    : u
                        .bind(function(o) {
                          return i.map(function(o) {
                            return n ? Db(e, t, r, o) : Db(e, t, o, r), !0;
                          });
                        })
                        .getOr(!1);
                });
            },
            Hb = function(e, t, n) {
              if (
                e.selection.isCollapsed() &&
                (function(e) {
                  return !1 !== e.settings.inline_boundaries;
                })(e)
              ) {
                var r = gu.fromRangeStart(e.selection.getRng());
                return Pb(e, t, n, r);
              }
              return !1;
            },
            Lb = function(e) {
              return 1 === Hr(e).length;
            },
            Ib = function(e, t, n, r) {
              var o = u(Yh, t),
                i = V(j(r, o), function(e) {
                  return e.dom();
                });
              if (0 === i.length) Lh(t, e, n);
              else {
                var a = (function(e, t) {
                  var n = Uh(!1),
                    r = Kh(t, n.dom());
                  return xi(Jn.fromDom(e), n), Ti(Jn.fromDom(e)), gu(r, 0);
                })(n.dom(), i);
                t.selection.setRng(a.toRange());
              }
            },
            Vb = function(e, t) {
              var n = Jn.fromDom(e.getBody()),
                r = Jn.fromDom(e.selection.getStart()),
                o = j(
                  (function(e, t) {
                    var n = Of(t, e);
                    return W(n, io).fold(i(n), function(e) {
                      return n.slice(0, e);
                    });
                  })(n, r),
                  Lb
                );
              return ee(o)
                .map(function(n) {
                  var r,
                    i = gu.fromRangeStart(e.selection.getRng());
                  return !(
                    !Qv(t, i, n.dom()) ||
                    ((r = n), Hu(r.dom()) && Vh(r.dom())) ||
                    (Ib(t, e, n, o), 0)
                  );
                })
                .getOr(!1);
            },
            Fb = function(e, t) {
              return !!e.selection.isCollapsed() && Vb(e, t);
            },
            Ub = Cr("start", "end"),
            jb = Cr("rng", "table", "cells"),
            qb = Ql([{ removeTable: ["element"] }, { emptyCells: ["cells"] }]),
            $b = function(e, t) {
              return $i(Jn.fromDom(e), "td,th", t);
            },
            Wb = function(e, t) {
              return ji(e, "table", t);
            },
            Kb = function(e) {
              return !1 === _r(e.start(), e.end());
            },
            Xb = function(e, t) {
              return Wb(e.start(), t).bind(function(n) {
                return Wb(e.end(), t).bind(function(e) {
                  return _r(n, e) ? _.some(n) : _.none();
                });
              });
            },
            Yb = function(e) {
              return Ii(e, "td,th");
            },
            Gb = function(e, t) {
              var n = $b(t.startContainer, e),
                r = $b(t.endContainer, e);
              return t.collapsed
                ? _.none()
                : $a([n, r], Ub).fold(
                    function() {
                      return n.fold(
                        function() {
                          return r.bind(function(t) {
                            return Wb(t, e).bind(function(e) {
                              return Z(Yb(e)).map(function(e) {
                                return Ub(e, t);
                              });
                            });
                          });
                        },
                        function(t) {
                          return Wb(t, e).bind(function(e) {
                            return ee(Yb(e)).map(function(e) {
                              return Ub(t, e);
                            });
                          });
                        }
                      );
                    },
                    function(t) {
                      return Jb(e, t)
                        ? _.none()
                        : (function(e, t) {
                            return Wb(e.start(), t).bind(function(t) {
                              return ee(Yb(t)).map(function(t) {
                                return Ub(e.start(), t);
                              });
                            });
                          })(t, e);
                    }
                  );
            },
            Jb = function(e, t) {
              return Xb(t, e).isSome();
            },
            Qb = function(e, t) {
              var n = (function(e) {
                return u(_r, e);
              })(e);
              return (function(e, t) {
                var n = $b(e.startContainer, t),
                  r = $b(e.endContainer, t);
                return $a([n, r], Ub)
                  .filter(Kb)
                  .filter(function(e) {
                    return Jb(t, e);
                  })
                  .orThunk(function() {
                    return Gb(t, e);
                  });
              })(t, n).bind(function(e) {
                return (function(e, t) {
                  return Xb(e, t).map(function(t) {
                    return jb(e, t, Yb(t));
                  });
                })(e, n);
              });
            },
            Zb = function(e, t) {
              return W(e, function(e) {
                return _r(e, t);
              });
            },
            ey = function(e) {
              return (function(e) {
                return $a(
                  [
                    Zb(e.cells(), e.rng().start()),
                    Zb(e.cells(), e.rng().end())
                  ],
                  function(t, n) {
                    return e.cells().slice(t, n + 1);
                  }
                );
              })(e).map(function(t) {
                var n = e.cells();
                return t.length === n.length
                  ? qb.removeTable(e.table())
                  : qb.emptyCells(t);
              });
            },
            ty = function(e, t) {
              return Qb(e, t).bind(ey);
            },
            ny = function(e, t) {
              return F(t, lh), e.selection.setCursorLocation(t[0].dom(), 0), !0;
            },
            ry = function(e, t) {
              return Lh(e, !1, t), !0;
            },
            oy = function(e, t, n, r) {
              return ay(t, r)
                .fold(
                  function() {
                    return (function(e, t, n) {
                      return ty(t, n).map(function(t) {
                        return t.fold(u(ry, e), u(ny, e));
                      });
                    })(e, t, n);
                  },
                  function(t) {
                    return (function(e, t) {
                      return uy(e, t);
                    })(e, t);
                  }
                )
                .getOr(!1);
            },
            iy = function(e, t) {
              return $(Of(t, e), mo);
            },
            ay = function(e, t) {
              return $(Of(t, e), function(e) {
                return "caption" === tr(e);
              });
            },
            uy = function(e, t) {
              return (
                lh(t), e.selection.setCursorLocation(t.dom(), 0), _.some(!0)
              );
            },
            sy = function(e, t, n, r, o) {
              return Ws.navigate(n, e.getBody(), o)
                .bind(function(i) {
                  return (function(e, t, n, r) {
                    return Ws.firstPositionIn(e.dom())
                      .bind(function(o) {
                        return Ws.lastPositionIn(e.dom()).map(function(e) {
                          return t
                            ? n.isEqual(o) && r.isEqual(e)
                            : n.isEqual(e) && r.isEqual(o);
                        });
                      })
                      .getOr(!0);
                  })(r, n, o, i)
                    ? (function(e, t) {
                        return uy(e, t);
                      })(e, r)
                    : (function(e, t, n) {
                        return ay(e, Jn.fromDom(n.getNode())).map(function(e) {
                          return !1 === _r(e, t);
                        });
                      })(t, r, i);
                })
                .or(_.some(!0));
            },
            ly = function(e, t, n, r) {
              var o = gu.fromRangeStart(e.selection.getRng());
              return iy(n, r).bind(function(r) {
                return kh(r)
                  ? uy(e, r)
                  : (function(e, t, n, r, o) {
                      return Ws.navigate(n, e.getBody(), o).bind(function(e) {
                        return iy(t, Jn.fromDom(e.getNode())).map(function(e) {
                          return !1 === _r(e, r);
                        });
                      });
                    })(e, n, t, r, o);
              });
            },
            cy = function(e, t, n) {
              var r = Jn.fromDom(e.getBody());
              return ay(r, n)
                .fold(
                  function() {
                    return ly(e, t, r, n);
                  },
                  function(n) {
                    return (function(e, t, n, r) {
                      var o = gu.fromRangeStart(e.selection.getRng());
                      return kh(r) ? uy(e, r) : sy(e, n, t, r, o);
                    })(e, t, r, n);
                  }
                )
                .getOr(!1);
            },
            fy = function(e, t) {
              var n = Jn.fromDom(e.selection.getStart(!0)),
                r = jg(e);
              return e.selection.isCollapsed() && 0 === r.length
                ? cy(e, t, n)
                : (function(e, t) {
                    var n = Jn.fromDom(e.getBody()),
                      r = e.selection.getRng(),
                      o = jg(e);
                    return 0 !== o.length ? ny(e, o) : oy(e, n, r, t);
                  })(e, n);
            },
            dy = function(e, t) {
              e.on("keydown", function(n) {
                !1 === n.isDefaultPrevented() &&
                  (function(e, t, n) {
                    Xv(
                      [
                        { keyCode: _d.BACKSPACE, action: Kv(Ab, e, !1) },
                        { keyCode: _d.DELETE, action: Kv(Ab, e, !0) },
                        { keyCode: _d.BACKSPACE, action: Kv(Mb, e, !1) },
                        { keyCode: _d.DELETE, action: Kv(Mb, e, !0) },
                        { keyCode: _d.BACKSPACE, action: Kv(Hb, e, t, !1) },
                        { keyCode: _d.DELETE, action: Kv(Hb, e, t, !0) },
                        { keyCode: _d.BACKSPACE, action: Kv(fy, e, !1) },
                        { keyCode: _d.DELETE, action: Kv(fy, e, !0) },
                        { keyCode: _d.BACKSPACE, action: Kv(vb, e, !1) },
                        { keyCode: _d.DELETE, action: Kv(vb, e, !0) },
                        { keyCode: _d.BACKSPACE, action: Kv(hb, e, !1) },
                        { keyCode: _d.DELETE, action: Kv(hb, e, !0) },
                        { keyCode: _d.BACKSPACE, action: Kv(Fb, e, !1) },
                        { keyCode: _d.DELETE, action: Kv(Fb, e, !0) }
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
                      Xv(
                        [
                          { keyCode: _d.BACKSPACE, action: Kv(Bb, e) },
                          { keyCode: _d.DELETE, action: Kv(Bb, e) }
                        ],
                        t
                      );
                    })(e, t);
                });
            },
            hy = function(e) {
              return _.from(
                e.dom.getParent(e.selection.getStart(!0), e.dom.isBlock)
              );
            },
            my = function(e, t) {
              var n,
                r,
                o,
                i = t,
                a = e.dom,
                u = e.schema.getMoveCaretBeforeOnEnterElements();
              if (t) {
                if (/^(LI|DT|DD)$/.test(t.nodeName)) {
                  var s = (function(e) {
                    for (; e; ) {
                      if (
                        1 === e.nodeType ||
                        (3 === e.nodeType && e.data && /[\r\n\s]/.test(e.data))
                      )
                        return e;
                      e = e.nextSibling;
                    }
                  })(t.firstChild);
                  s &&
                    /^(UL|OL|DL)$/.test(s.nodeName) &&
                    t.insertBefore(a.doc.createTextNode(" "), t.firstChild);
                }
                if (((o = a.createRng()), t.normalize(), t.hasChildNodes())) {
                  for (n = new Zr(t, t); (r = n.current()); ) {
                    if (ko.isText(r)) {
                      o.setStart(r, 0), o.setEnd(r, 0);
                      break;
                    }
                    if (u[r.nodeName.toLowerCase()]) {
                      o.setStartBefore(r), o.setEndBefore(r);
                      break;
                    }
                    (i = r), (r = n.next());
                  }
                  r || (o.setStart(i, 0), o.setEnd(i, 0));
                } else
                  ko.isBr(t)
                    ? t.nextSibling && a.isBlock(t.nextSibling)
                      ? (o.setStartBefore(t), o.setEndBefore(t))
                      : (o.setStartAfter(t), o.setEndAfter(t))
                    : (o.setStart(t, 0), o.setEnd(t, 0));
                e.selection.setRng(o),
                  a.remove(void 0),
                  e.selection.scrollIntoView(t);
              }
            },
            gy = function(e, t) {
              var n,
                r,
                o = e.getRoot();
              for (n = t; n !== o && "false" !== e.getContentEditable(n); )
                "true" === e.getContentEditable(n) && (r = n),
                  (n = n.parentNode);
              return n !== o ? r : o;
            },
            py = hy,
            vy = function(e) {
              return hy(e).fold(i(""), function(e) {
                return e.nodeName.toUpperCase();
              });
            },
            by = function(e) {
              return hy(e)
                .filter(function(e) {
                  return co(Jn.fromDom(e));
                })
                .isSome();
            },
            yy = function(e, t) {
              return e && e.parentNode && e.parentNode.nodeName === t;
            },
            Cy = function(e) {
              return e && /^(OL|UL|LI)$/.test(e.nodeName);
            },
            wy = function(e) {
              var t = e.parentNode;
              return /^(LI|DT|DD)$/.test(t.nodeName) ? t : e;
            },
            xy = function(e, t, n) {
              for (
                var r = e[n ? "firstChild" : "lastChild"];
                r && !ko.isElement(r);

              )
                r = r[n ? "nextSibling" : "previousSibling"];
              return r === t;
            },
            Sy = function(e, t, n, r, o) {
              var i = e.dom,
                a = e.selection.getRng();
              if (n !== e.getBody()) {
                var u;
                Cy((u = n)) && Cy(u.parentNode) && (o = "LI");
                var s = o ? t(o) : i.create("BR");
                if (xy(n, r, !0) && xy(n, r, !1))
                  yy(n, "LI") ? i.insertAfter(s, wy(n)) : i.replace(s, n);
                else if (xy(n, r, !0))
                  yy(n, "LI")
                    ? (i.insertAfter(s, wy(n)),
                      s.appendChild(i.doc.createTextNode(" ")),
                      s.appendChild(n))
                    : n.parentNode.insertBefore(s, n);
                else if (xy(n, r, !1)) i.insertAfter(s, wy(n));
                else {
                  n = wy(n);
                  var l = a.cloneRange();
                  l.setStartAfter(r), l.setEndAfter(n);
                  var c = l.extractContents();
                  "LI" === o &&
                  (function(e, t) {
                    return e.firstChild && e.firstChild.nodeName === t;
                  })(c, "LI")
                    ? ((s = c.firstChild), i.insertAfter(c, n))
                    : (i.insertAfter(c, n), i.insertAfter(s, n));
                }
                i.remove(r), my(e, s);
              }
            },
            Ey = function(e, t) {
              return t && "A" === t.nodeName && e.isEmpty(t);
            },
            Ny = function(e) {
              e.innerHTML = '<br data-mce-bogus="1">';
            },
            zy = function(e, t) {
              return (
                e.nodeName === t ||
                (e.previousSibling && e.previousSibling.nodeName === t)
              );
            },
            ky = function(e, t) {
              return (
                t &&
                e.isBlock(t) &&
                !/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName) &&
                !/^(fixed|absolute)/i.test(t.style.position) &&
                "true" !== e.getContentEditable(t)
              );
            },
            Ty = function(e, t, n) {
              return !1 === ko.isText(t)
                ? n
                : e
                ? 1 === n && t.data.charAt(n - 1) === sa
                  ? 0
                  : n
                : n === t.data.length - 1 && t.data.charAt(n) === sa
                ? t.data.length
                : n;
            },
            _y = function(e, t) {
              var n,
                r,
                o = e.getRoot();
              for (n = t; n !== o && "false" !== e.getContentEditable(n); )
                "true" === e.getContentEditable(n) && (r = n),
                  (n = n.parentNode);
              return n !== o ? r : o;
            },
            Ay = function(e, t) {
              var n = jl.getForcedRootBlock(e);
              n &&
                n.toLowerCase() === t.tagName.toLowerCase() &&
                e.dom.setAttribs(t, jl.getForcedRootBlockAttrs(e));
            },
            By = function(e, t) {
              var n,
                r,
                o,
                i,
                a,
                u,
                s,
                l,
                c,
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
                    l = p.getTextInlineElements();
                  if (
                    (t || "TABLE" === f || "HR" === f
                      ? ((n = g.create(t || h)), Ay(e, n))
                      : (n = a.cloneNode(!1)),
                    (u = n),
                    !1 === jl.shouldKeepStyles(e))
                  )
                    g.setAttrib(n, "style", null),
                      g.setAttrib(n, "class", null);
                  else
                    do {
                      if (l[s.nodeName]) {
                        if (Hu(s)) continue;
                        (i = s.cloneNode(!1)),
                          g.setAttrib(i, "id", ""),
                          n.hasChildNodes()
                            ? (i.appendChild(n.firstChild), n.appendChild(i))
                            : ((u = i), n.appendChild(i));
                      }
                    } while ((s = s.parentNode) && s !== r);
                  return Ny(u), n;
                },
                C = function(e) {
                  var t, n, r, u;
                  if (
                    ((u = Ty(e, o, i)),
                    ko.isText(o) && (e ? u > 0 : u < o.nodeValue.length))
                  )
                    return !1;
                  if (o.parentNode === a && m && !e) return !0;
                  if (e && ko.isElement(o) && o === a.firstChild) return !0;
                  if (zy(o, "TABLE") || zy(o, "HR"))
                    return (m && !e) || (!m && e);
                  for (
                    t = new Zr(o, a),
                      ko.isText(o) &&
                        (e && 0 === u
                          ? t.prev()
                          : e || u !== o.nodeValue.length || t.next());
                    (n = t.current());

                  ) {
                    if (ko.isElement(n)) {
                      if (
                        !n.getAttribute("data-mce-bogus") &&
                        ((r = n.nodeName.toLowerCase()), v[r] && "br" !== r)
                      )
                        return !1;
                    } else if (
                      ko.isText(n) &&
                      !/^[ \t\r\n]*$/.test(n.nodeValue)
                    )
                      return !1;
                    e ? t.prev() : t.next();
                  }
                  return !0;
                },
                w = function() {
                  (s =
                    /^(H[1-6]|PRE|FIGURE)$/.test(f) && "HGROUP" !== d
                      ? y(h)
                      : y()),
                    jl.shouldEndContainerOnEmptyBlock(e) &&
                    ky(g, c) &&
                    g.isEmpty(a)
                      ? (s = g.split(c, a))
                      : g.insertAfter(s, a),
                    my(e, s);
                };
              ip.normalize(g, b).each(function(e) {
                b.setStart(e.startContainer, e.startOffset),
                  b.setEnd(e.endContainer, e.endOffset);
              }),
                (o = b.startContainer),
                (i = b.startOffset),
                (h = jl.getForcedRootBlock(e)),
                (u = !(!t || !t.shiftKey));
              var x = !(!t || !t.ctrlKey);
              ko.isElement(o) &&
                o.hasChildNodes() &&
                ((m = i > o.childNodes.length - 1),
                (o = o.childNodes[Math.min(i, o.childNodes.length - 1)] || o),
                (i = m && ko.isText(o) ? o.nodeValue.length : 0)),
                (r = _y(g, o)) &&
                  (((h && !u) || (!h && u)) &&
                    (o = (function(e, t, n, r, o) {
                      var i,
                        a,
                        u,
                        s,
                        l,
                        c,
                        f = t || "P",
                        d = e.dom,
                        h = _y(d, r);
                      if (!(a = d.getParent(r, d.isBlock)) || !ky(d, a)) {
                        if (
                          ((c =
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
                            Ay(e, i),
                            a.appendChild(i),
                            n.setStart(i, 0),
                            n.setEnd(i, 0),
                            i
                          );
                        for (s = r; s.parentNode !== a; ) s = s.parentNode;
                        for (; s && !d.isBlock(s); )
                          (u = s), (s = s.previousSibling);
                        if (u && e.schema.isValidChild(c, f.toLowerCase())) {
                          for (
                            i = d.create(f),
                              Ay(e, i),
                              u.parentNode.insertBefore(i, u),
                              s = u;
                            s && !d.isBlock(s);

                          )
                            (l = s.nextSibling), i.appendChild(s), (s = l);
                          n.setStart(r, o), n.setEnd(r, o);
                        }
                      }
                      return r;
                    })(e, h, b, o, i)),
                  (a = g.getParent(o, g.isBlock)),
                  (c = a ? g.getParent(a.parentNode, g.isBlock) : null),
                  (f = a ? a.nodeName.toUpperCase() : ""),
                  "LI" !== (d = c ? c.nodeName.toUpperCase() : "") ||
                    x ||
                    ((a = c), (c = c.parentNode), (f = d)),
                  /^(LI|DT|DD)$/.test(f) && g.isEmpty(a)
                    ? Sy(e, y, c, a, h)
                    : (h && a === e.getBody()) ||
                      ((h = h || "P"),
                      da(a)
                        ? ((s = wa(a)), g.isEmpty(a) && Ny(a), my(e, s))
                        : C()
                        ? w()
                        : C(!0)
                        ? ((s = a.parentNode.insertBefore(y(), a)),
                          my(e, zy(a, "HR") ? s : a))
                        : ((n = (function(e) {
                            var t = e.cloneRange();
                            return (
                              t.setStart(
                                e.startContainer,
                                Ty(!0, e.startContainer, e.startOffset)
                              ),
                              t.setEnd(
                                e.endContainer,
                                Ty(!1, e.endContainer, e.endOffset)
                              ),
                              t
                            );
                          })(b).cloneRange()).setEndAfter(a),
                          (function(e) {
                            F(Li(Jn.fromDom(e), or), function(e) {
                              var t = e.dom();
                              t.nodeValue = la(t.nodeValue);
                            });
                          })((l = n.extractContents())),
                          (function(e) {
                            do {
                              ko.isText(e) &&
                                (e.nodeValue = e.nodeValue.replace(
                                  /^[\r\n]+/,
                                  ""
                                )),
                                (e = e.firstChild);
                            } while (e);
                          })(l),
                          (s = l.firstChild),
                          g.insertAfter(l, a),
                          (function(e, t, n) {
                            var r,
                              o = n,
                              i = [];
                            if (o) {
                              for (; (o = o.firstChild); ) {
                                if (e.isBlock(o)) return;
                                ko.isElement(o) &&
                                  !t[o.nodeName.toLowerCase()] &&
                                  i.push(o);
                              }
                              for (r = i.length; r--; )
                                !(o = i[r]).hasChildNodes() ||
                                (o.firstChild === o.lastChild &&
                                  "" === o.firstChild.nodeValue)
                                  ? e.remove(o)
                                  : Ey(e, o) && e.remove(o);
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
                          g.isEmpty(a) && Ny(a),
                          s.normalize(),
                          g.isEmpty(s) ? (g.remove(s), w()) : my(e, s)),
                      g.setAttrib(s, "id", ""),
                      e.fire("NewBlock", { newBlock: s })));
            },
            Ry = function(e, t, n) {
              var r = e.create("span", {}, "&nbsp;");
              n.parentNode.insertBefore(r, n), t.scrollIntoView(r), e.remove(r);
            },
            My = function(e, t, n, r) {
              var o = e.createRng();
              r
                ? (o.setStartBefore(n), o.setEndBefore(n))
                : (o.setStartAfter(n), o.setEndAfter(n)),
                t.setRng(o);
            },
            Oy = function(e, t) {
              var n,
                r,
                o = e.selection,
                i = e.dom,
                a = o.getRng();
              ip.normalize(i, a).each(function(e) {
                a.setStart(e.startContainer, e.startOffset),
                  a.setEnd(e.endContainer, e.endOffset);
              });
              var u = a.startOffset,
                s = a.startContainer;
              if (1 === s.nodeType && s.hasChildNodes()) {
                var l = u > s.childNodes.length - 1;
                (s = s.childNodes[Math.min(u, s.childNodes.length - 1)] || s),
                  (u = l && 3 === s.nodeType ? s.nodeValue.length : 0);
              }
              var c = i.getParent(s, i.isBlock),
                f = c ? i.getParent(c.parentNode, i.isBlock) : null,
                d = f ? f.nodeName.toUpperCase() : "",
                h = !(!t || !t.ctrlKey);
              "LI" !== d || h || (c = f),
                s &&
                  3 === s.nodeType &&
                  u >= s.nodeValue.length &&
                  ((function(e, t, n) {
                    for (
                      var r, o = new Zr(t, n), i = e.getNonEmptyElements();
                      (r = o.next());

                    )
                      if (i[r.nodeName.toLowerCase()] || r.length > 0)
                        return !0;
                  })(e.schema, s, c) ||
                    ((n = i.create("br")),
                    a.insertNode(n),
                    a.setStartAfter(n),
                    a.setEndAfter(n),
                    (r = !0))),
                (n = i.create("br")),
                zu(i, a, n),
                Ry(i, o, n),
                My(i, o, n, r),
                e.undoManager.add();
            },
            Dy = function(e, t) {
              var n = Jn.fromTag("br");
              xi(Jn.fromDom(t), n), e.undoManager.add();
            },
            Py = function(e, t) {
              Hy(e.getBody(), t) || Si(Jn.fromDom(t), Jn.fromTag("br"));
              var n = Jn.fromTag("br");
              Si(Jn.fromDom(t), n),
                Ry(e.dom, e.selection, n.dom()),
                My(e.dom, e.selection, n.dom(), !1),
                e.undoManager.add();
            },
            Hy = function(e, t) {
              return (
                (n = gu.after(t)),
                !!ko.isBr(n.getNode()) ||
                  Ws.nextPosition(e, gu.after(t))
                    .map(function(e) {
                      return ko.isBr(e.getNode());
                    })
                    .getOr(!1)
              );
              var n;
            },
            Ly = function(e) {
              return e && "A" === e.nodeName && "href" in e;
            },
            Iy = function(e) {
              return e.fold(i(!1), Ly, Ly, i(!1));
            },
            Vy = function(e, t) {
              t.fold(r, u(Dy, e), u(Py, e), r);
            },
            Fy = {
              insert: function(e, t) {
                var n = (function(e) {
                  var t = u(Tp.isInlineTarget, e),
                    n = gu.fromRangeStart(e.selection.getRng());
                  return Kp(t, e.getBody(), n).filter(Iy);
                })(e);
                n.isSome() ? n.each(u(Vy, e)) : Oy(e, t);
              }
            },
            Uy = function(e, t) {
              return py(e)
                .filter(function(e) {
                  return t.length > 0 && kr(Jn.fromDom(e), t);
                })
                .isSome();
            },
            jy = function(e) {
              return Uy(e, jl.getBrNewLineSelector(e));
            },
            qy = function(e) {
              return Uy(e, jl.getNoNewLineSelector(e));
            },
            $y = Ql([{ br: [] }, { block: [] }, { none: [] }]),
            Wy = function(e, t) {
              return qy(e);
            },
            Ky = function(e) {
              return function(t, n) {
                return ("" === jl.getForcedRootBlock(t)) === e;
              };
            },
            Xy = function(e) {
              return function(t, n) {
                return by(t) === e;
              };
            },
            Yy = function(e, t) {
              return function(n, r) {
                return (vy(n) === e.toUpperCase()) === t;
              };
            },
            Gy = function(e) {
              return Yy("pre", e);
            },
            Jy = function(e) {
              return function(t, n) {
                return jl.shouldPutBrInPre(t) === e;
              };
            },
            Qy = function(e, t) {
              return jy(e);
            },
            Zy = function(e, t) {
              return t;
            },
            eC = function(e) {
              var t = jl.getForcedRootBlock(e),
                n = gy(e.dom, e.selection.getStart());
              return n && e.schema.isValidChild(n.nodeName, t || "P");
            },
            tC = function(e, t) {
              return function(n, r) {
                return q(
                  e,
                  function(e, t) {
                    return e && t(n, r);
                  },
                  !0
                )
                  ? _.some(t)
                  : _.none();
              };
            },
            nC = function(e, t) {
              return _p(
                [
                  tC([Wy], $y.none()),
                  tC([Yy("summary", !0)], $y.br()),
                  tC([Gy(!0), Jy(!1), Zy], $y.br()),
                  tC([Gy(!0), Jy(!1)], $y.block()),
                  tC([Gy(!0), Jy(!0), Zy], $y.block()),
                  tC([Gy(!0), Jy(!0)], $y.br()),
                  tC([Xy(!0), Zy], $y.br()),
                  tC([Xy(!0)], $y.block()),
                  tC([Ky(!0), Zy, eC], $y.block()),
                  tC([Ky(!0)], $y.br()),
                  tC([Qy], $y.br()),
                  tC([Ky(!1), Zy], $y.br()),
                  tC([eC], $y.block())
                ],
                [e, !(!t || !t.shiftKey)]
              ).getOr($y.none());
            },
            rC = {
              insert: function(e, t) {
                nC(e, t).fold(
                  function() {
                    Fy.insert(e, t);
                  },
                  function() {
                    By(e, t);
                  },
                  r
                );
              }
            },
            oC = function(e) {
              e.on("keydown", function(t) {
                t.keyCode === _d.ENTER &&
                  (function(e, t) {
                    var n;
                    t.isDefaultPrevented() ||
                      (t.preventDefault(),
                      (n = e.undoManager).typing && ((n.typing = !1), n.add()),
                      e.undoManager.transact(function() {
                        !1 === e.selection.isCollapsed() &&
                          e.execCommand("Delete"),
                          rC.insert(e, t);
                      }));
                  })(e, t);
              });
            },
            iC = function(e, t) {
              var n = t.container(),
                r = t.offset();
              return ko.isText(n)
                ? (n.insertData(r, e), _.some(hu(n, r + e.length)))
                : xs(t).map(function(n) {
                    var r = Jn.fromText(e);
                    return (
                      t.isAtEnd() ? Si(n, r) : xi(n, r), hu(r.dom(), e.length)
                    );
                  });
            },
            aC = u(iC, " "),
            uC = u(iC, " "),
            sC = function(e, t, n) {
              return Ws.navigateIgnore(e, t, n, Pd);
            },
            lC = function(e, t, n) {
              var r = j(Of(Jn.fromDom(n.container()), t), io);
              return Z(r).fold(
                function() {
                  return sC(e, t.dom(), n).forall(function(e) {
                    return !1 === ds(e, n, t.dom());
                  });
                },
                function(t) {
                  return sC(e, t.dom(), n).isNone();
                }
              );
            },
            cC = u(lC, !1),
            fC = u(lC, !0),
            dC = function(e) {
              return hu.isTextPosition(e) && !e.isAtStart() && !e.isAtEnd();
            },
            hC = function(e, t) {
              var n = j(Of(Jn.fromDom(t.container()), e), io);
              return Z(n).getOr(e);
            },
            mC = function(e, t) {
              return dC(t)
                ? Dd(t)
                : Dd(t) || Ws.prevPosition(hC(e, t).dom(), t).exists(Dd);
            },
            gC = function(e, t) {
              return dC(t)
                ? Od(t)
                : Od(t) || Ws.nextPosition(hC(e, t).dom(), t).exists(Od);
            },
            pC = function(e) {
              return xs(e)
                .bind(function(e) {
                  return Ui(e, rr);
                })
                .exists(function(e) {
                  return (
                    (t = vr(e, "white-space")),
                    I(["pre", "pre-line", "pre-wrap"], t)
                  );
                  var t;
                });
            },
            vC = function(e, t) {
              return (
                (function(e, t) {
                  return Ws.prevPosition(e.dom(), t).isNone();
                })(e, t) ||
                (function(e, t) {
                  return Ws.nextPosition(e.dom(), t).isNone();
                })(e, t) ||
                cC(e, t) ||
                fC(e, t) ||
                wb(e, t) ||
                Cb(e, t)
              );
            },
            bC = function(e, t) {
              var n = (function(e) {
                var t = e.container(),
                  n = e.offset();
                return ko.isText(t) && n < t.data.length ? hu(t, n + 1) : e;
              })(t);
              return !pC(n) && (fC(e, n) || Cb(e, n) || gC(e, n));
            },
            yC = function(e, t) {
              return (
                (function(e, t) {
                  return !pC(t) && (cC(e, t) || wb(e, t) || mC(e, t));
                })(e, t) || bC(e, t)
              );
            },
            CC = function(e, t) {
              return Ad(e.charAt(t));
            },
            wC = function(e) {
              var t = e.container();
              return ko.isText(t) && Vn(t.data, " ");
            },
            xC = function(e) {
              var t = e.data,
                n = (function(e) {
                  return V(e.split(""), function(e, t, n) {
                    return Ad(e) &&
                      t > 0 &&
                      t < n.length - 1 &&
                      Rd(n[t - 1]) &&
                      Rd(n[t + 1])
                      ? " "
                      : e;
                  }).join("");
                })(t);
              return n !== t && ((e.data = n), !0);
            },
            SC = function(e, t) {
              return _.some(t)
                .filter(wC)
                .bind(function(t) {
                  var n = t.container();
                  return (function(e, t) {
                    var n = t.data,
                      r = hu(t, 0);
                    return !(
                      !CC(n, 0) ||
                      yC(e, r) ||
                      ((t.data = " " + n.slice(1)), 0)
                    );
                  })(e, n) ||
                    xC(n) ||
                    (function(e, t) {
                      var n = t.data,
                        r = hu(t, n.length - 1);
                      return !(
                        !CC(n, n.length - 1) ||
                        yC(e, r) ||
                        ((t.data = n.slice(0, -1) + " "), 0)
                      );
                    })(e, n)
                    ? _.some(t)
                    : _.none();
                });
            },
            EC = function(e) {
              var t = Jn.fromDom(e.getBody());
              e.selection.isCollapsed() &&
                SC(t, hu.fromRangeStart(e.selection.getRng())).each(function(
                  t
                ) {
                  e.selection.setRng(t.toRange());
                });
            },
            NC = function(e, t) {
              return function(n) {
                return (function(e, t) {
                  return !pC(t) && (vC(e, t) || mC(e, t) || gC(e, t));
                })(e, n)
                  ? aC(t)
                  : uC(t);
              };
            },
            zC = function(e) {
              var t = gu.fromRangeStart(e.selection.getRng()),
                n = Jn.fromDom(e.getBody());
              if (e.selection.isCollapsed()) {
                var r = u(Tp.isInlineTarget, e),
                  o = gu.fromRangeStart(e.selection.getRng());
                return Kp(r, e.getBody(), o)
                  .bind(
                    (function(e) {
                      return function(t) {
                        return t.fold(
                          function(t) {
                            return Ws.prevPosition(e.dom(), gu.before(t));
                          },
                          function(e) {
                            return Ws.firstPositionIn(e);
                          },
                          function(e) {
                            return Ws.lastPositionIn(e);
                          },
                          function(t) {
                            return Ws.nextPosition(e.dom(), gu.after(t));
                          }
                        );
                      };
                    })(n)
                  )
                  .bind(NC(n, t))
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
            kC = function(e) {
              e.on("keydown", function(t) {
                !1 === t.isDefaultPrevented() &&
                  (function(e, t) {
                    Xv([{ keyCode: _d.SPACEBAR, action: Kv(zC, e) }], t).each(
                      function(e) {
                        t.preventDefault();
                      }
                    );
                  })(e, t);
              });
            },
            TC = function(e, t) {
              t.hasAttribute("data-mce-caret") &&
                (wa(t),
                (function(e) {
                  e.selection.setRng(e.selection.getRng());
                })(e),
                e.selection.scrollIntoView(t));
            },
            _C = function(e, t) {
              var n = (function(e) {
                return qi(Jn.fromDom(e.getBody()), "*[data-mce-caret]").fold(
                  i(null),
                  function(e) {
                    return e.dom();
                  }
                );
              })(e);
              if (n)
                return "compositionstart" === t.type
                  ? (t.preventDefault(), t.stopPropagation(), void TC(e, n))
                  : void (ga(n) && (TC(e, n), e.undoManager.add()));
            },
            AC = function(e) {
              e.on("keyup compositionstart", u(_C, e));
            },
            BC = Yn.detect().browser,
            RC = function(e) {
              !(function(e) {
                var t = Ai(function() {
                  e.composing || EC(e);
                }, 0);
                BC.isIE() &&
                  (e.on("keypress", function(e) {
                    t.throttle();
                  }),
                  e.on("remove", function(e) {
                    t.cancel();
                  }));
              })(e),
                e.on("input", function(t) {
                  !1 === t.isComposing && EC(e);
                });
            },
            MC = function(e) {
              var t = iv.setupSelectedState(e);
              AC(e), Yv(e, t), dy(e, t), oC(e), kC(e), RC(e);
            };
          function OC(e) {
            var t,
              r,
              o,
              i = Yt.each,
              a = _d.BACKSPACE,
              u = _d.DELETE,
              s = e.dom,
              l = e.selection,
              c = e.settings,
              f = e.parser,
              d = fe.gecko,
              h = fe.ie,
              m = fe.webkit,
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
                    l.isCollapsed() &&
                    0 === l.getRng().startOffset
                  ) {
                    var t = l.getNode().previousSibling;
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
                      if (fe.ie > 11) return void e.getBody().focus();
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
                  t.keyCode === _d.BACKSPACE &&
                  ((r = (n = l.getRng()).startContainer),
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
                    l.setRng(n));
                }
              }),
              (t = function(e) {
                var t = s.create("body"),
                  n = e.cloneContents();
                return (
                  t.appendChild(n),
                  l.serializer.serialize(t, { format: "html" })
                );
              }),
              e.on("keydown", function(n) {
                var r,
                  o,
                  i,
                  l,
                  c,
                  f = n.keyCode;
                if (!v(n) && (f === u || f === a)) {
                  if (
                    ((r = e.selection.isCollapsed()),
                    (o = e.getBody()),
                    r && !s.isEmpty(o))
                  )
                    return;
                  if (
                    !r &&
                    ((i = e.selection.getRng()),
                    (l = t(i)),
                    (c = s.createRng()).selectNode(e.getBody()),
                    l !== t(c))
                  )
                    return;
                  n.preventDefault(),
                    e.setContent(""),
                    o.firstChild && s.isBlock(o.firstChild)
                      ? e.selection.setCursorLocation(o.firstChild, 0)
                      : e.selection.setCursorLocation(o, 0),
                    e.nodeChanged();
                }
              }),
              fe.windowsPhone ||
                e.on(
                  "keyup focusin mouseup",
                  function(e) {
                    _d.modifierPressed(e) || l.normalize();
                  },
                  !0
                ),
              m &&
                (e.inline ||
                  s.bind(e.getDoc(), "mousedown mouseup", function(t) {
                    var n;
                    if (t.target === e.getDoc().documentElement)
                      if (
                        ((n = l.getRng()),
                        e.getBody().focus(),
                        "mousedown" === t.type)
                      ) {
                        if (ma(n.startContainer)) return;
                        l.placeCaretAt(t.clientX, t.clientY);
                      } else l.setRng(n);
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
                      (t.preventDefault(), l.select(n));
                }),
                c.forced_root_block &&
                  e.on("init", function() {
                    p("DefaultParagraphSeparator", jl.getForcedRootBlock(e));
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
                fe.iOS
                  ? (e.inline ||
                      e.on("keydown", function() {
                        n.document.activeElement === n.document.body &&
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
              fe.ie >= 11 && (C(), y()),
              fe.ie &&
                (b(),
                p("AutoUrlDetect", !1),
                e.on("dragstart", function(t) {
                  !(function(t) {
                    var n, r;
                    t.dataTransfer &&
                      (e.selection.isCollapsed() &&
                        "IMG" === t.target.tagName &&
                        l.select(t.target),
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
                      var r = wg.fromPoint(t.x, t.y, e.getDoc());
                      l.setRng(r),
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
                    if (l.isCollapsed() && 0 === l.getRng().startOffset) {
                      var n = l.getNode(),
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
                n.Range.prototype.getClientRects ||
                  e.on("mousedown", function(t) {
                    if (!v(t) && "HTML" === t.target.nodeName) {
                      var n = e.getBody();
                      n.blur(),
                        pe.setEditorTimeout(e, function() {
                          n.focus();
                        });
                    }
                  }),
                (r = function() {
                  var t = s.getAttribs(l.getStart().cloneNode(!1));
                  return function() {
                    var n = l.getStart();
                    n !== e.getBody() &&
                      (s.setAttrib(n, "style", null),
                      i(t, function(e) {
                        n.setAttributeNode(e.cloneNode(!0));
                      }));
                  };
                }),
                (o = function() {
                  return (
                    !l.isCollapsed() &&
                    s.getParent(l.getStart(), s.isBlock) !==
                      s.getParent(l.getEnd(), s.isBlock)
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
                    pe.setEditorTimeout(e, function() {
                      n();
                    }));
                }),
                c.readonly ||
                  e.on("BeforeExecCommand MouseDown", function() {
                    p("StyleWithCSS", !1),
                      p("enableInlineTableEditing", !1),
                      c.object_resizing || p("enableObjectResizing", !1);
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
                fe.mac &&
                  e.on("keydown", function(t) {
                    !_d.metaKeyPressed(t) ||
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
                  return !d || e.removed
                    ? 0
                    : !(t = e.selection.getSel()) ||
                        !t.rangeCount ||
                        0 === t.rangeCount;
                }
              }
            );
          }
          var DC = function(e) {
              return ko.isElement(e) && so(Jn.fromDom(e));
            },
            PC = function(e) {
              e.on("click", function(t) {
                t.detail >= 3 &&
                  (function(e) {
                    var t = e.selection.getRng(),
                      n = hu.fromRangeStart(t),
                      r = hu.fromRangeEnd(t);
                    if (hu.isElementPosition(n)) {
                      var o = n.container();
                      DC(o) &&
                        Ws.firstPositionIn(o).each(function(e) {
                          return t.setStart(e.container(), e.offset());
                        });
                    }
                    hu.isElementPosition(r) &&
                      ((o = n.container()),
                      DC(o) &&
                        Ws.lastPositionIn(o).each(function(e) {
                          return t.setEnd(e.container(), e.offset());
                        })),
                      e.selection.setRng(Tm(t));
                  })(e);
              });
            },
            HC = function(e) {
              !(function(e) {
                e.on("click", function(t) {
                  e.dom.getParent(t.target, "details") && t.preventDefault();
                });
              })(e),
                (function(e) {
                  e.parser.addNodeFilter("details", function(e) {
                    F(e, function(e) {
                      e.attr("data-mce-open", e.attr("open")),
                        e.attr("open", "open");
                    });
                  }),
                    e.serializer.addNodeFilter("details", function(e) {
                      F(e, function(e) {
                        var t = e.attr("data-mce-open");
                        e.attr("open", B(t) ? t : null),
                          e.attr("data-mce-open", null);
                      });
                    });
                })(e);
            },
            LC = ci.DOM,
            IC = function(e) {
              e.bindPendingEventDelegates(),
                (e.initialized = !0),
                e.fire("init"),
                e.focus(!0),
                e.nodeChanged({ initial: !0 }),
                e.execCallback("init_instance_callback", e),
                (function(e) {
                  e.settings.auto_focus &&
                    pe.setEditorTimeout(
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
            VC = function(e, t) {
              var r,
                o,
                i = e.settings,
                a = e.getElement(),
                u = e.getDoc();
              i.inline || (e.getElement().style.visibility = e.orgVisibility),
                t || e.inline || (u.open(), u.write(e.iframeHTML), u.close()),
                e.inline &&
                  (e.on("remove", function() {
                    var e = this.getBody();
                    LC.removeClass(e, "mce-content-body"),
                      LC.removeClass(e, "mce-edit-focus"),
                      LC.setAttrib(e, "contentEditable", null);
                  }),
                  LC.addClass(a, "mce-content-body"),
                  (e.contentDocument = u = i.content_document || n.document),
                  (e.contentWindow = i.content_window || n.window),
                  (e.bodyElement = a),
                  (e.contentAreaContainer = a),
                  (i.content_document = i.content_window = null),
                  (i.root_name = a.nodeName.toLowerCase())),
                ((r = e.getBody()).disabled = !0),
                (e.readonly = i.readonly),
                e.readonly ||
                  (e.inline &&
                    "static" === LC.getStyle(r, "position", !0) &&
                    (r.style.position = "relative"),
                  (r.contentEditable = e.getParam(
                    "content_editable_state",
                    !0
                  ))),
                (r.disabled = !1),
                (e.editorUpload = Af(e)),
                (e.schema = Qo(i)),
                (e.dom = ci(u, {
                  keep_values: !0,
                  url_converter: e.convertURL,
                  url_converter_scope: e,
                  hex_colors: i.force_hex_style_colors,
                  class_filter: i.class_filter,
                  update_styles: !0,
                  root_element: e.inline ? e.getBody() : null,
                  collect: function() {
                    return e.inline;
                  },
                  schema: e.schema,
                  contentCssCors: jl.shouldUseContentCssCors(e),
                  onSetAttrib: function(t) {
                    e.fire("SetAttrib", t);
                  }
                })),
                (e.parser = (function(e) {
                  var t = ig(e.settings, e.schema);
                  return (
                    t.addAttributeFilter("src,href,style,tabindex", function(
                      t,
                      n
                    ) {
                      for (var r, o, i, a = t.length, u = e.dom; a--; )
                        if (
                          ((o = (r = t[a]).attr(n)),
                          (i = "data-mce-" + n),
                          !r.attributes.map[i])
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
                          (n.append(new Rl("br", 1)).shortEnded = !0);
                    }),
                    t
                  );
                })(e)),
                (e.serializer = cg(i, e)),
                (e.selection = gp(e.dom, e.getWin(), e.serializer, e)),
                (e.annotator = Nl(e)),
                (e.formatter = jm(e)),
                (e.undoManager = uh(e)),
                (e._nodeChangeDispatcher = new Xf(e)),
                (e._selectionOverrides = Wd(e)),
                HC(e),
                PC(e),
                MC(e),
                Vf(e),
                e.fire("PreInit"),
                i.browser_spellcheck ||
                  i.gecko_spellcheck ||
                  ((u.body.spellcheck = !1),
                  LC.setAttrib(r, "spellcheck", "false")),
                (e.quirks = OC(e)),
                e.fire("PostRender"),
                i.directionality && (r.dir = i.directionality),
                i.protect &&
                  e.on("BeforeSetContent", function(e) {
                    Yt.each(i.protect, function(t) {
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
                  Yt.each(e.contentStyles, function(e) {
                    o += e + "\r\n";
                  }),
                  e.dom.addStyle(o)),
                (function(e) {
                  return e.inline
                    ? LC.styleSheetLoader
                    : e.dom.styleSheetLoader;
                })(e).loadAll(
                  e.contentCSS,
                  function(t) {
                    IC(e);
                  },
                  function(t) {
                    IC(e);
                  }
                ),
                i.content_style &&
                  (function(e, t) {
                    var n = Jn.fromDom(e.getDoc().head),
                      r = Jn.fromTag("style");
                    hr(r, "type", "text/css"), Ni(r, Jn.fromText(t)), Ni(n, r);
                  })(e, i.content_style);
            },
            FC = ci.DOM,
            UC = function(e, t) {
              var r = e.editorManager.translate(
                  "Rich Text Area. Press ALT-0 for help."
                ),
                o = (function(e, t, n, r) {
                  var o = Jn.fromTag("iframe");
                  return (
                    mr(o, r),
                    mr(o, {
                      id: e + "_ifr",
                      frameBorder: "0",
                      allowTransparency: "true",
                      title: t
                    }),
                    Di(o, "tox-edit-area__iframe"),
                    o
                  );
                })(e.id, r, t.height, jl.getIframeAttrs(e)).dom();
              o.onload = function() {
                (o.onload = null), e.fire("load");
              };
              var i = (function(e, t) {
                if (
                  n.document.domain !== n.window.location.hostname &&
                  fe.ie &&
                  fe.ie < 12
                ) {
                  var r = _f.uuid("mce");
                  e[r] = function() {
                    VC(e);
                  };
                  var o =
                    'javascript:(function(){document.open();document.domain="' +
                    n.document.domain +
                    '";var ed = window.parent.tinymce.get("' +
                    e.id +
                    '");document.write(ed.iframeHTML);document.close();ed.' +
                    r +
                    "(true);})()";
                  return FC.setAttrib(t, "src", o), !0;
                }
                return !1;
              })(e, o);
              return (
                (e.contentAreaContainer = t.iframeContainer),
                (e.iframeElement = o),
                (e.iframeHTML = (function(e) {
                  var t, n, r;
                  return (
                    (r = jl.getDocType(e) + "<html><head>"),
                    jl.getDocumentBaseUrl(e) !== e.documentBaseUrl &&
                      (r +=
                        '<base href="' + e.documentBaseURI.getURI() + '" />'),
                    (r +=
                      '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'),
                    (t = jl.getBodyId(e)),
                    (n = jl.getBodyClass(e)),
                    jl.getContentSecurityPolicy(e) &&
                      (r +=
                        '<meta http-equiv="Content-Security-Policy" content="' +
                        jl.getContentSecurityPolicy(e) +
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
                FC.add(t.iframeContainer, o),
                i
              );
            },
            jC = function(e, t) {
              var n = UC(e, t);
              t.editorContainer &&
                ((FC.get(t.editorContainer).style.display = e.orgDisplay),
                (e.hidden = FC.isHidden(t.editorContainer))),
                (e.getElement().style.display = "none"),
                FC.setAttrib(e.id, "aria-hidden", "true"),
                n || VC(e);
            },
            qC = function(e) {
              e.contentCSS = e.contentCSS.concat(
                (function(e) {
                  var t = jl.getContentCss(e),
                    n = e.editorManager.baseURL + "/skins/content",
                    r = "content" + e.editorManager.suffix + ".css",
                    o = !0 === e.inline;
                  return V(t, function(t) {
                    return (function(e) {
                      return /^[a-z0-9\-]+$/i.test(e);
                    })(t) && !o
                      ? n + "/" + t + "/" + r
                      : e.documentBaseURI.toAbsolute(t);
                  });
                })(e)
              );
            },
            $C = ci.DOM,
            WC = function(e, t, n) {
              var r = mf.get(n),
                o = mf.urls[n] || e.documentBaseUrl.replace(/\/$/, "");
              if (((n = Yt.trim(n)), r && -1 === Yt.inArray(t, n))) {
                if (
                  (Yt.each(mf.dependencies(n), function(n) {
                    WC(e, t, n);
                  }),
                  e.plugins[n])
                )
                  return;
                try {
                  var i = new r(e, o, e.$);
                  (e.plugins[n] = i), i.init && (i.init(e, o), t.push(n));
                } catch (t) {
                  df.pluginInitError(e, n, t);
                }
              }
            },
            KC = function(e) {
              return e.replace(/^\-/, "");
            },
            XC = function(e) {
              return { editorContainer: e, iframeContainer: e };
            },
            YC = function(e) {
              var t = e.getElement();
              return e.inline
                ? XC(null)
                : (function(e) {
                    var t = $C.create("div");
                    return $C.insertAfter(t, e), XC(t);
                  })(t);
            },
            GC = function(e) {
              e.fire("ScriptsLoaded"),
                (function(e) {
                  var t = Yt.trim(e.settings.icons),
                    n = ta(
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
                        comment:
                          '<svg width="24" height="24"><path d="M9 19l3-2h7c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H5a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h4v2zm-2 4v-4H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-6.4L7 23z" fill-rule="nonzero"/></svg>',
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
                        indeterminate:
                          '<svg width="24" height="24"><path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18zM9 11a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H9z" fill-rule="evenodd"/></svg>',
                        info:
                          '<svg width="24" height="24"><path d="M12 4a7.8 7.8 0 0 1 5.7 2.3A8 8 0 1 1 12 4zm-1 3v2h2V7h-2zm3 10v-1h-1v-5h-3v1h1v4h-1v1h4z" fill-rule="evenodd"/></svg>',
                        "insert-character":
                          '<svg width="24" height="24"><path d="M15 18h4l1-2v4h-6v-3.3l1.4-1a6 6 0 0 0 1.8-2.9 6.3 6.3 0 0 0-.1-4.1 5.8 5.8 0 0 0-3-3.2c-.6-.3-1.3-.5-2.1-.5a5.1 5.1 0 0 0-3.9 1.8 6.3 6.3 0 0 0-1.3 6 6.2 6.2 0 0 0 1.8 3l1.4.9V20H4v-4l1 2h4v-.5l-2-1L5.4 15A6.5 6.5 0 0 1 4 11c0-1 .2-1.9.6-2.7A7 7 0 0 1 6.3 6C7.1 5.4 8 5 9 4.5c1-.3 2-.5 3.1-.5a8.8 8.8 0 0 1 5.7 2 7 7 0 0 1 1.7 2.3 6 6 0 0 1 .2 4.8c-.2.7-.6 1.3-1 1.9a7.6 7.6 0 0 1-3.6 2.5v.5z" fill-rule="evenodd"/></svg>',
                        "insert-time":
                          '<svg width="24" height="24"><g fill-rule="nonzero"><path d="M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm-7 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/><path d="M15 12h-3V7a.5.5 0 0 0-1 0v6h4a.5.5 0 0 0 0-1z"/></g></svg>',
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
                        "list-num-default":
                          '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/><path d="M10 17v-4.8l-1.5 1v-1.1l1.6-1h1.2V17h-1.2zm3.6.1c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.5 0 .7.3.7.7 0 .4-.2.7-.7.7zm-5 5.7c0-1.2.8-2 2.1-2s2.1.8 2.1 1.8c0 .7-.3 1.2-1.4 2.2l-1.1 1v.2h2.6v1H8.6v-.9l2-1.9c.8-.8 1-1.1 1-1.5 0-.5-.4-.8-1-.8-.5 0-.9.3-.9.9H8.5zm6.3 4.3c-.5 0-.7-.3-.7-.7 0-.4.2-.7.7-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zM10 34.4v-1h.7c.6 0 1-.3 1-.8 0-.4-.4-.7-1-.7s-1 .3-1 .8H8.6c0-1.1 1-1.8 2.2-1.8 1.3 0 2.1.6 2.1 1.6 0 .7-.4 1.2-1 1.3v.1c.8.1 1.3.7 1.3 1.4 0 1-1 1.9-2.4 1.9-1.3 0-2.2-.8-2.3-2h1.2c0 .6.5 1 1.1 1 .7 0 1-.4 1-1 0-.5-.3-.8-1-.8h-.7zm4.7 2.7c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.5 0 .8.3.8.7 0 .4-.3.7-.8.7z"/></g></svg>',
                        "list-num-lower-alpha":
                          '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/><path d="M10.3 15.2c.5 0 1-.4 1-.9V14h-1c-.5.1-.8.3-.8.6 0 .4.3.6.8.6zm-.4.9c-1 0-1.5-.6-1.5-1.4 0-.8.6-1.3 1.7-1.4h1.1v-.4c0-.4-.2-.6-.7-.6-.5 0-.8.1-.9.4h-1c0-.8.8-1.4 2-1.4 1.1 0 1.8.6 1.8 1.6V16h-1.1v-.6h-.1c-.2.4-.7.7-1.3.7zm4.6 0c-.5 0-.7-.3-.7-.7 0-.4.2-.7.7-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm-3.2 10c-.6 0-1.2-.3-1.4-.8v.7H8.5v-6.3H10v2.5c.3-.5.8-.9 1.4-.9 1.2 0 1.9 1 1.9 2.4 0 1.5-.7 2.4-1.9 2.4zm-.4-3.7c-.7 0-1 .5-1 1.3s.3 1.4 1 1.4c.6 0 1-.6 1-1.4 0-.8-.4-1.3-1-1.3zm4 3.7c-.5 0-.7-.3-.7-.7 0-.4.2-.7.7-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm-2.2 7h-1.2c0-.5-.4-.8-.9-.8-.6 0-1 .5-1 1.4 0 1 .4 1.4 1 1.4.5 0 .8-.2 1-.7h1c0 1-.8 1.7-2 1.7-1.4 0-2.2-.9-2.2-2.4s.8-2.4 2.2-2.4c1.2 0 2 .7 2 1.7zm1.8 3c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7z"/></g></svg>',
                        "list-num-lower-greek":
                          '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/><path d="M10.5 15c.7 0 1-.5 1-1.3s-.3-1.3-1-1.3c-.5 0-.9.5-.9 1.3s.4 1.4 1 1.4zm-.3 1c-1.1 0-1.8-.8-1.8-2.3 0-1.5.7-2.4 1.8-2.4.7 0 1.1.4 1.3 1h.1v-.9h1.2v3.2c0 .4.1.5.4.5h.2v.9h-.6c-.6 0-1-.2-1.1-.7h-.1c-.2.4-.7.8-1.4.8zm5 .1c-.5 0-.8-.3-.8-.7 0-.4.3-.7.7-.7.5 0 .8.3.8.7 0 .4-.3.7-.8.7zm-4.9 7v-1h.3c.6 0 1-.2 1-.7 0-.5-.4-.8-1-.8-.5 0-.8.3-.8 1v2.2c0 .8.4 1.3 1.1 1.3.6 0 1-.4 1-1s-.5-1-1.3-1h-.3zM8.6 22c0-1.5.7-2.3 2-2.3 1.2 0 2 .6 2 1.6 0 .6-.3 1-.8 1.3.8.3 1.3.8 1.3 1.7 0 1.2-.8 1.9-1.9 1.9-.6 0-1.1-.3-1.3-.8v2.2H8.5V22zm6.2 4.2c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.5 0 .7.3.7.7 0 .4-.2.7-.7.7zm-4.5 8.5L8 30h1.4l1.7 3.5 1.7-3.5h1.1l-2.2 4.6v.1c.5.8.7 1.4.7 1.8 0 .4-.1.8-.4 1-.2.2-.6.3-1 .3-.9 0-1.3-.4-1.3-1.2 0-.5.2-1 .5-1.7l.1-.2zm.7 1a2 2 0 0 0-.4.9c0 .3.1.4.4.4.3 0 .4-.1.4-.4 0-.2-.1-.6-.4-1zm4.5.5c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7z"/></g></svg>',
                        "list-num-lower-roman":
                          '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/><path d="M15.1 16v-1.2h1.3V16H15zm0 10v-1.2h1.3V26H15zm0 10v-1.2h1.3V36H15z"/><path fill-rule="nonzero" d="M12 21h1.5v5H12zM12 31h1.5v5H12zM9 21h1.5v5H9zM9 31h1.5v5H9zM6 31h1.5v5H6zM12 11h1.5v5H12zM12 19h1.5v1H12zM12 29h1.5v1H12zM9 19h1.5v1H9zM9 29h1.5v1H9zM6 29h1.5v1H6zM12 9h1.5v1H12z"/></g></svg>',
                        "list-num-upper-alpha":
                          '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/><path d="M12.6 17l-.5-1.4h-2L9.5 17H8.3l2-6H12l2 6h-1.3zM11 12.3l-.7 2.3h1.6l-.8-2.3zm4.7 4.8c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.5 0 .7.3.7.7 0 .4-.2.7-.7.7zM11.4 27H8.7v-6h2.6c1.2 0 1.9.6 1.9 1.5 0 .6-.5 1.2-1 1.3.7.1 1.3.7 1.3 1.5 0 1-.8 1.7-2 1.7zM10 22v1.5h1c.6 0 1-.3 1-.8 0-.4-.4-.7-1-.7h-1zm0 4H11c.7 0 1.1-.3 1.1-.8 0-.6-.4-.9-1.1-.9H10V26zm5.4 1.1c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm-4.1 10c-1.8 0-2.8-1.1-2.8-3.1s1-3.1 2.8-3.1c1.4 0 2.5.9 2.6 2.2h-1.3c0-.7-.6-1.1-1.3-1.1-1 0-1.6.7-1.6 2s.6 2 1.6 2c.7 0 1.2-.4 1.4-1h1.2c-.1 1.3-1.2 2.2-2.6 2.2zm4.5 0c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7z"/></g></svg>',
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
                          '<svg width="24" height="24"><path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18zm-2.4-6.1L7 12.3a.7.7 0 0 0-1 1L9.6 17 18 8.6a.7.7 0 0 0 0-1 .7.7 0 0 0-1 0l-7.4 7.3z" fill-rule="evenodd"/></svg>',
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
                          '<svg width="24" height="24"><path d="M20.5 2.5c-.8 0-1.5.7-1.5 1.5a1.5 1.5 0 0 1-3 0 3 3 0 0 0-6 0v2H8.5c-.3 0-.5.2-.5.5v1a8 8 0 1 0 6 0v-1c0-.3-.2-.5-.5-.5H11V4a2 2 0 0 1 4 0 2.5 2.5 0 0 0 5 0c0-.3.2-.5.5-.5a.5.5 0 0 0 0-1zM8.1 10.9a5 5 0 0 0-1.2 7 .5.5 0 0 1-.8.5 6 6 0 0 1 1.5-8.3.5.5 0 1 1 .5.8z" fill-rule="nonzero"/></svg>',
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
                          '<svg width="24" height="24"><path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18zm0-1a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" fill-rule="evenodd"/></svg>',
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
                      hf.get(t).icons
                    );
                  ur(n, function(t, n) {
                    e.ui.registry.addIcon(n, t);
                  });
                })(e),
                (function(e) {
                  var t = e.settings.theme;
                  if (B(t)) {
                    e.settings.theme = KC(t);
                    var n = gf.get(t);
                    (e.theme = new n(e, gf.urls[t])),
                      e.theme.init &&
                        e.theme.init(
                          e,
                          gf.urls[t] || e.documentBaseUrl.replace(/\/$/, ""),
                          e.$
                        );
                  } else e.theme = {};
                })(e),
                (function(e) {
                  var t = [];
                  Yt.each(e.settings.plugins.split(/[ ,]/), function(n) {
                    WC(e, t, KC(n));
                  });
                })(e);
              var t = (function(e) {
                var t = e.settings,
                  n = e.getElement();
                return (
                  (e.orgDisplay = n.style.display),
                  B(t.theme)
                    ? (function(e) {
                        return e.theme.renderUI();
                      })(e)
                    : P(t.theme)
                    ? (function(e) {
                        var t = e.getElement(),
                          n = e.settings.theme(e, t);
                        return (
                          n.editorContainer.nodeType &&
                            (n.editorContainer.id =
                              n.editorContainer.id || e.id + "_parent"),
                          n.iframeContainer &&
                            n.iframeContainer.nodeType &&
                            (n.iframeContainer.id =
                              n.iframeContainer.id ||
                              e.id + "_iframecontainer"),
                          (n.height = n.iframeHeight
                            ? n.iframeHeight
                            : t.offsetHeight),
                          n
                        );
                      })(e)
                    : YC(e)
                );
              })(e);
              return (
                (e.editorContainer = t.editorContainer
                  ? t.editorContainer
                  : null),
                qC(e),
                e.inline ? VC(e) : jC(e, t)
              );
            },
            JC = ci.DOM,
            QC = function(e) {
              return "-" === e.charAt(0);
            },
            ZC = function(e, t) {
              var n = gi.ScriptLoader;
              !(function(e, t, n, r) {
                var o = t.settings,
                  i = o.theme;
                if (B(i)) {
                  if (!QC(i) && !gf.urls.hasOwnProperty(i)) {
                    var a = o.theme_url;
                    a
                      ? gf.load(i, t.documentBaseURI.toAbsolute(a))
                      : gf.load(i, "themes/" + i + "/theme" + n + ".js");
                  }
                  e.loadQueue(function() {
                    gf.waitFor(i, r);
                  });
                } else r();
              })(n, e, t, function() {
                !(function(e, t) {
                  var n = jl.getLanguageCode(t),
                    r = jl.getLanguageUrl(t);
                  !1 === yi.hasCode(n) &&
                    "en" !== n &&
                    ("" !== r
                      ? e.add(r)
                      : e.add(t.editorManager.baseURL + "/langs/" + n + ".js"));
                })(n, e),
                  (function(e, t) {
                    var n = e.icons;
                    if (B(n)) {
                      var r =
                        t.editorManager.baseURL +
                        "/icons/" +
                        Yt.trim(n) +
                        "/icons.js";
                      gi.ScriptLoader.add(r);
                    }
                  })(e.settings, e),
                  (function(e, t) {
                    Yt.isArray(e.plugins) && (e.plugins = e.plugins.join(" ")),
                      Yt.each(e.external_plugins, function(t, n) {
                        mf.load(n, t), (e.plugins += " " + n);
                      }),
                      Yt.each(e.plugins.split(/[ ,]/), function(e) {
                        if ((e = Yt.trim(e)) && !mf.urls[e])
                          if (QC(e)) {
                            e = e.substr(1, e.length);
                            var n = mf.dependencies(e);
                            Yt.each(n, function(e) {
                              var n = {
                                prefix: "plugins/",
                                resource: e,
                                suffix: "/plugin" + t + ".js"
                              };
                              (e = mf.createUrl(n, e)), mf.load(e.resource, e);
                            });
                          } else
                            mf.load(e, {
                              prefix: "plugins/",
                              resource: e,
                              suffix: "/plugin" + t + ".js"
                            });
                      });
                  })(e.settings, t),
                  n.loadQueue(
                    function() {
                      e.removed || GC(e);
                    },
                    e,
                    function(t) {
                      df.pluginLoadError(e, t[0]), e.removed || GC(e);
                    }
                  );
              });
            },
            ew = function(e) {
              var t = e.settings,
                r = e.id;
              yi.setCode(jl.getLanguageCode(e));
              var o = function() {
                JC.unbind(n.window, "ready", o), e.render();
              };
              if (Ne.Event.domLoaded) {
                if (e.getElement() && fe.contentEditable) {
                  t.inline
                    ? (e.inline = !0)
                    : ((e.orgVisibility = e.getElement().style.visibility),
                      (e.getElement().style.visibility = "hidden"));
                  var i = e.getElement().form || JC.getParent(r, "form");
                  i &&
                    ((e.formElement = i),
                    t.hidden_input &&
                      !/TEXTAREA|INPUT/i.test(e.getElement().nodeName) &&
                      (JC.insertAfter(
                        JC.create("input", { type: "hidden", name: r }),
                        r
                      ),
                      (e.hasHiddenInput = !0)),
                    (e.formEventDelegate = function(t) {
                      e.fire(t.type, t);
                    }),
                    JC.bind(i, "submit reset", e.formEventDelegate),
                    e.on("reset", function() {
                      e.setContent(e.startContent, { format: "raw" });
                    }),
                    !t.submit_patch ||
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
                    (e.windowManager = of(e)),
                    (e.notificationManager = rf(e)),
                    "xml" === t.encoding &&
                      e.on("GetContent", function(e) {
                        e.save && (e.content = JC.encode(e.content));
                      }),
                    t.add_form_submit_trigger &&
                      e.on("submit", function() {
                        e.initialized && e.save();
                      }),
                    t.add_unload_trigger &&
                      ((e._beforeUnload = function() {
                        !e.initialized ||
                          e.destroyed ||
                          e.isHidden() ||
                          e.save({
                            format: "raw",
                            no_events: !0,
                            set_dirty: !1
                          });
                      }),
                      e.editorManager.on("BeforeUnload", e._beforeUnload)),
                    e.editorManager.add(e),
                    ZC(e, e.suffix);
                }
              } else JC.bind(n.window, "ready", o);
            },
            tw = function(e, t, n) {
              try {
                e.getDoc().execCommand(t, !1, n);
              } catch (e) {}
            },
            nw = function(e, t, n) {
              var r, o;
              Hi(e, t) && !1 === n
                ? ((o = t),
                  Ri((r = e)) ? r.dom().classList.remove(o) : Oi(r, o),
                  Pi(r))
                : n && Di(e, t);
            },
            rw = function(e, t) {
              nw(Jn.fromDom(e.getBody()), "mce-content-readonly", t),
                t
                  ? (e.selection.controlSelection.hideResizeRect(),
                    (e.readonly = !0),
                    (e.getBody().contentEditable = "false"))
                  : ((e.readonly = !1),
                    (e.getBody().contentEditable = "true"),
                    tw(e, "StyleWithCSS", !1),
                    tw(e, "enableInlineTableEditing", !1),
                    tw(e, "enableObjectResizing", !1),
                    e.focus(),
                    e.nodeChanged());
            },
            ow = function(e) {
              return e.readonly ? "readonly" : "design";
            },
            iw = function(e) {
              return Yt.grep(e.childNodes, function(e) {
                return "LI" === e.nodeName;
              });
            },
            aw = function(e) {
              return (
                e &&
                e.firstChild &&
                e.firstChild === e.lastChild &&
                (function(e) {
                  return " " === e.data || ko.isBr(e);
                })(e.firstChild)
              );
            },
            uw = function(e) {
              return e.length > 0 &&
                (!(t = e[e.length - 1]).firstChild || aw(t))
                ? e.slice(0, -1)
                : e;
              var t;
            },
            sw = function(e, t) {
              var n = e.getParent(t, e.isBlock);
              return n && "LI" === n.nodeName ? n : null;
            },
            lw = function(e, t) {
              var n = gu.after(e),
                r = Ds(t).prev(n);
              return r ? r.toRange() : null;
            },
            cw = function(e, t, n) {
              var r = e.parentNode;
              return (
                Yt.each(t, function(t) {
                  r.insertBefore(t, e);
                }),
                (function(e, t) {
                  var n = gu.before(e),
                    r = Ds(t).next(n);
                  return r ? r.toRange() : null;
                })(e, n)
              );
            },
            fw = function(e, t) {
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
            dw = function(e, t, n, r) {
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
                i = sw(t, n.startContainer),
                a = uw(iw(o.firstChild)),
                u = t.getRoot(),
                s = function(e) {
                  var r = gu.fromRangeStart(n),
                    o = Ds(t.getRoot()),
                    a = 1 === e ? o.prev(r) : o.next(r);
                  return !a || sw(t, a.getNode()) !== i;
                };
              return s(1)
                ? cw(i, a, u)
                : s(2)
                ? (function(e, t, n, r) {
                    return r.insertAfter(t.reverse(), e), lw(t[0], n);
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
                      Yt.each(t, function(t) {
                        i.insertBefore(t, e);
                      }),
                      i.insertBefore(o[1], e),
                      i.removeChild(e),
                      lw(t[t.length - 1], n)
                    );
                  })(i, a, u, n);
            },
            hw = function(e, t) {
              return !!sw(e, t);
            },
            mw = ko.matchNodeNames("td th"),
            gw = function(e, t) {
              var n = e.selection.getRng(),
                r = n.startContainer,
                o = n.startOffset;
              n.collapsed &&
                (function(e, t) {
                  return ko.isText(e) && " " === e.nodeValue[t - 1];
                })(r, o) &&
                ko.isText(r) &&
                (r.insertData(o - 1, " "),
                r.deleteData(o, 1),
                n.setStart(r, o),
                n.setEnd(r, o),
                e.selection.setRng(n)),
                e.selection.setContent(t);
            },
            pw = function(e, t, n) {
              var r,
                o,
                i,
                a,
                u,
                s,
                l,
                c,
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
                (o = Kl({ validate: e.settings.validate }, e.schema)),
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
                    (c = m.getRng()).startContainer ||
                    (c.parentElement ? c.parentElement() : null),
                  v = e.getBody();
                p === v &&
                  m.isCollapsed() &&
                  g.isBlock(v.firstChild) &&
                  (function(e, t) {
                    return t && !e.schema.getShortEndedElements()[t.nodeName];
                  })(e, v.firstChild) &&
                  g.isEmpty(v.firstChild) &&
                  ((c = g.createRng()).setStart(v.firstChild, 0),
                  c.setEnd(v.firstChild, 0),
                  m.setRng(c)),
                  m.isCollapsed() ||
                    (e.selection.setRng(Tm(e.selection.getRng())),
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
                  !0 === n.paste && fw(e.schema, u) && hw(g, i))
                )
                  return (
                    (c = dw(o, g, e.selection.getRng(), u)),
                    e.selection.setRng(c),
                    void e.fire("SetContent", s)
                  );
                if (
                  ((function(e) {
                    for (var t = e; (t = t.walk()); )
                      1 === t.type && t.attr("data-mce-fragment", "1");
                  })(u),
                  "mce_marker" === (f = u.lastChild).attr("id"))
                )
                  for (l = f, f = f.prev; f; f = f.walk(!0))
                    if (3 === f.type || !g.isBlock(f.name)) {
                      e.schema.isValidChild(f.parent.name, "span") &&
                        f.parent.insert(l, f, "br" === f.name);
                      break;
                    }
                if (
                  (e._selectionOverrides.showBlockCaretContainer(i), y.invalid)
                ) {
                  for (
                    gw(e, d),
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
                        : gw(e, t);
                    }
                  })(e, (t = o.serialize(u)), i);
                !(function(e, t) {
                  var n = e.schema.getTextInlineElements(),
                    r = e.dom;
                  if (t) {
                    var o = e.getBody(),
                      i = new tm(r);
                    Yt.each(r.select("*[data-mce-fragment]"), function(e) {
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
                            if ("false" === e.dom.getContentEditable(t))
                              return t;
                          return null;
                        })(t)))
                      )
                        return u.remove(t), void s.select(n);
                      var l = u.createRng();
                      (i = t.previousSibling) && 3 === i.nodeType
                        ? (l.setStart(i, i.nodeValue.length),
                          fe.ie ||
                            ((a = t.nextSibling) &&
                              3 === a.nodeType &&
                              (i.appendData(a.data),
                              a.parentNode.removeChild(a))))
                        : (l.setStartBefore(t), l.setEndBefore(t)),
                        (r = u.getParent(t, u.isBlock)),
                        u.remove(t),
                        r &&
                          u.isEmpty(r) &&
                          (e.$(r).empty(),
                          l.setStart(r, 0),
                          l.setEnd(r, 0),
                          mw(r) ||
                          (function(e) {
                            return !!e.getAttribute("data-mce-fragment");
                          })(r) ||
                          !(o = (function(t) {
                            var n = gu.fromRangeStart(t);
                            if ((n = Ds(e.getBody()).next(n)))
                              return n.toRange();
                          })(l))
                            ? u.add(
                                r,
                                u.create("br", { "data-mce-bogus": "1" })
                              )
                            : ((l = o), u.remove(r))),
                        s.setRng(l);
                    }
                  })(e, g.get("mce_marker")),
                  (b = e.getBody()),
                  Yt.each(b.getElementsByTagName("*"), function(e) {
                    e.removeAttribute("data-mce-fragment");
                  }),
                  (function(e, t) {
                    _.from(e.getParent(t, "td,th"))
                      .map(Jn.fromDom)
                      .each(ch);
                  })(e.dom, e.selection.getStart()),
                  e.fire("SetContent", s),
                  e.addVisual();
              }
            },
            vw = {
              insertAtCaret: function(e, t) {
                var n = (function(e) {
                  var t;
                  return "string" != typeof e
                    ? ((t = Yt.extend(
                        { paste: e.paste, data: { paste: e.paste } },
                        e
                      )),
                      { content: e.content, details: t })
                    : { content: e, details: {} };
                })(t);
                pw(e, n.content, n.details);
              }
            },
            bw = function(e, t) {
              e.getDoc().execCommand(t, !1, null);
            },
            yw = {
              deleteCommand: function(e) {
                Ab(e, !1) ||
                  Mb(e, !1) ||
                  Hb(e, !1) ||
                  hb(e, !1) ||
                  fy(e) ||
                  vb(e, !1) ||
                  Fb(e, !1) ||
                  (bw(e, "Delete"), Jv(e));
              },
              forwardDeleteCommand: function(e) {
                Ab(e, !0) ||
                  Mb(e, !0) ||
                  Hb(e, !0) ||
                  hb(e, !0) ||
                  fy(e) ||
                  vb(e, !0) ||
                  Fb(e, !0) ||
                  bw(e, "ForwardDelete");
              }
            },
            Cw = function(e) {
              return function(t, n) {
                return _.from(n)
                  .map(Jn.fromDom)
                  .filter(rr)
                  .bind(function(n) {
                    return (function(e, t, n) {
                      var r = function(t) {
                        return yr(t, e);
                      };
                      return Ui(
                        Jn.fromDom(n),
                        function(e) {
                          return r(e).isSome();
                        },
                        function(e) {
                          return _r(Jn.fromDom(t), e);
                        }
                      ).bind(r);
                    })(e, t, n.dom()).or(
                      (function(e, t) {
                        return _.from(ci.DOM.getStyle(t, e, !0));
                      })(e, n.dom())
                    );
                  })
                  .getOr("");
              };
            },
            ww = {
              getFontSize: Cw("font-size"),
              getFontFamily: o(function(e) {
                return e.replace(/[\'\"\\]/g, "").replace(/,\s+/g, ",");
              }, Cw("font-family")),
              toPt: function(e, t) {
                return /[0-9.]+px$/.test(e)
                  ? (function(e, t) {
                      var n = Math.pow(10, t);
                      return Math.round(e * n) / n;
                    })((72 * parseInt(e, 10)) / 96, t || 0) + "pt"
                  : e;
              }
            },
            xw = function(e) {
              return Ws.firstPositionIn(e.getBody()).map(function(e) {
                var t = e.container();
                return ko.isText(t) ? t.parentNode : t;
              });
            },
            Sw = function(e) {
              return _.from(e.selection.getRng()).bind(function(t) {
                return (function(e, t) {
                  return e.startContainer === t && 0 === e.startOffset;
                })(t, e.getBody())
                  ? _.none()
                  : _.from(e.selection.getStart(!0));
              });
            },
            Ew = function(e, t) {
              if (/^[0-9\.]+$/.test(t)) {
                var n = parseInt(t, 10);
                if (n >= 1 && n <= 7) {
                  var r = jl.getFontStyleValues(e),
                    o = jl.getFontSizeClasses(e);
                  return o ? o[n - 1] || t : r[n - 1] || t;
                }
                return t;
              }
              return t;
            },
            Nw = function(e, t) {
              e.formatter.toggle("fontname", { value: Ew(e, t) }),
                e.nodeChanged();
            },
            zw = function(e) {
              return Sw(e).fold(
                function() {
                  return xw(e)
                    .map(function(t) {
                      return ww.getFontFamily(e.getBody(), t);
                    })
                    .getOr("");
                },
                function(t) {
                  return ww.getFontFamily(e.getBody(), t);
                }
              );
            },
            kw = function(e, t) {
              e.formatter.toggle("fontsize", { value: Ew(e, t) }),
                e.nodeChanged();
            },
            Tw = function(e) {
              return Sw(e).fold(
                function() {
                  return xw(e)
                    .map(function(t) {
                      return ww.getFontSize(e.getBody(), t);
                    })
                    .getOr("");
                },
                function(t) {
                  return ww.getFontSize(e.getBody(), t);
                }
              );
            },
            _w = function(e) {
              var t = parseInt(e, 10);
              return isNaN(t) ? 0 : t;
            },
            Aw = function(e, t) {
              return (
                (e || "table" === tr(t) ? "margin" : "padding") +
                ("rtl" === vr(t, "direction") ? "-right" : "-left")
              );
            },
            Bw = function(e) {
              var t = Mw(e);
              return (
                !0 !== e.readonly &&
                (t.length > 1 ||
                  (function(e, t) {
                    return G(t, function(t) {
                      var n = Aw(jl.shouldIndentUseMargin(e), t),
                        r = yr(t, n)
                          .map(_w)
                          .getOr(0);
                      return (
                        "false" !== e.dom.getContentEditable(t.dom()) && r > 0
                      );
                    });
                  })(e, t))
              );
            },
            Rw = function(e) {
              return lo(e) || co(e);
            },
            Mw = function(e) {
              return j(V(e.selection.getSelectedBlocks(), Jn.fromDom), function(
                e
              ) {
                return (
                  !Rw(e) &&
                  !(function(e) {
                    return Rr(e)
                      .map(Rw)
                      .getOr(!1);
                  })(e) &&
                  Ui(e, function(e) {
                    return (
                      ko.isContentEditableTrue(e.dom()) ||
                      ko.isContentEditableFalse(e.dom())
                    );
                  }).exists(function(e) {
                    return ko.isContentEditableTrue(e.dom());
                  })
                );
              });
            },
            Ow = function(e, t) {
              var n = e.dom,
                r = e.selection,
                o = e.formatter,
                i = jl.getIndentation(e),
                a = /[a-z%]+$/i.exec(i)[0],
                u = parseInt(i, 10),
                s = jl.shouldIndentUseMargin(e),
                l = jl.getForcedRootBlock(e);
              e.queryCommandState("InsertUnorderedList") ||
                e.queryCommandState("InsertOrderedList") ||
                "" !== l ||
                n.getParent(r.getNode(), n.isBlock) ||
                o.apply("div"),
                F(Mw(e), function(e) {
                  !(function(e, t, n, r, o, i) {
                    var a = Aw(n, Jn.fromDom(i));
                    if ("outdent" === t) {
                      var u = Math.max(0, _w(i.style[a]) - r);
                      e.setStyle(i, a, u ? u + o : "");
                    } else (u = _w(i.style[a]) + r + o), e.setStyle(i, a, u);
                  })(n, t, s, u, a, e.dom());
                });
            },
            Dw = Yt.each,
            Pw = Yt.extend,
            Hw = Yt.map,
            Lw = Yt.inArray;
          function Iw(e) {
            var t,
              n,
              r,
              o,
              i = { state: {}, exec: {}, value: {} };
            e.on("PreInit", function() {
              (t = e.dom), (n = e.selection), (r = e.formatter);
            });
            var a = function(e, t) {
                (t = t || "exec"),
                  Dw(e, function(e, n) {
                    Dw(n.toLowerCase().split(","), function(n) {
                      i[t][n] = e;
                    });
                  });
              },
              u = function(t, n, r) {
                (t = t.toLowerCase()),
                  (i.value[t] = function() {
                    return n.call(r || e);
                  });
              };
            Pw(this, {
              execCommand: function(t, n, r, o) {
                var a,
                  u,
                  s = !1;
                if (!e.removed) {
                  if (
                    (/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(
                      t
                    ) ||
                    (o && o.skip_focus)
                      ? hc.restore(e)
                      : e.focus(),
                    (o = e.fire("BeforeExecCommand", {
                      command: t,
                      ui: n,
                      value: r
                    })).isDefaultPrevented())
                  )
                    return !1;
                  if (((u = t.toLowerCase()), (a = i.exec[u])))
                    return (
                      a(u, n, r),
                      e.fire("ExecCommand", { command: t, ui: n, value: r }),
                      !0
                    );
                  if (
                    (Dw(e.plugins, function(o) {
                      if (o.execCommand && o.execCommand(t, n, r))
                        return (
                          e.fire("ExecCommand", {
                            command: t,
                            ui: n,
                            value: r
                          }),
                          (s = !0),
                          !1
                        );
                    }),
                    s)
                  )
                    return s;
                  if (
                    e.theme &&
                    e.theme.execCommand &&
                    e.theme.execCommand(t, n, r)
                  )
                    return (
                      e.fire("ExecCommand", { command: t, ui: n, value: r }), !0
                    );
                  try {
                    s = e.getDoc().execCommand(t, n, r);
                  } catch (e) {}
                  return (
                    !!s &&
                    (e.fire("ExecCommand", { command: t, ui: n, value: r }), !0)
                  );
                }
              },
              queryCommandState: function(t) {
                var n;
                if (!e.quirks.isHidden() && !e.removed) {
                  if (((t = t.toLowerCase()), (n = i.state[t]))) return n(t);
                  try {
                    return e.getDoc().queryCommandState(t);
                  } catch (e) {}
                  return !1;
                }
              },
              queryCommandValue: function(t) {
                var n;
                if (!e.quirks.isHidden() && !e.removed) {
                  if (((t = t.toLowerCase()), (n = i.value[t]))) return n(t);
                  try {
                    return e.getDoc().queryCommandValue(t);
                  } catch (e) {}
                }
              },
              queryCommandSupported: function(t) {
                if (((t = t.toLowerCase()), i.exec[t])) return !0;
                try {
                  return e.getDoc().queryCommandSupported(t);
                } catch (e) {}
                return !1;
              },
              addCommands: a,
              addCommand: function(t, n, r) {
                (t = t.toLowerCase()),
                  (i.exec[t] = function(t, o, i, a) {
                    return n.call(r || e, o, i, a);
                  });
              },
              addQueryStateHandler: function(t, n, r) {
                (t = t.toLowerCase()),
                  (i.state[t] = function() {
                    return n.call(r || e);
                  });
              },
              addQueryValueHandler: u,
              hasCustomCommand: function(e) {
                return (e = e.toLowerCase()), !!i.exec[e];
              }
            });
            var s = function(t, n, r) {
                return (
                  void 0 === n && (n = !1),
                  void 0 === r && (r = null),
                  e.getDoc().execCommand(t, n, r)
                );
              },
              l = function(e) {
                return r.match(e);
              },
              c = function(t, n) {
                r.toggle(t, n ? { value: n } : void 0), e.nodeChanged();
              },
              f = function(e) {
                o = n.getBookmark(e);
              },
              d = function() {
                n.moveToBookmark(o);
              };
            a({
              "mceResetDesignMode,mceBeginUndoLevel": function() {},
              "mceEndUndoLevel,mceAddUndoLevel": function() {
                e.undoManager.add();
              },
              "Cut,Copy,Paste": function(t) {
                var n,
                  r = e.getDoc();
                try {
                  s(t);
                } catch (e) {
                  n = !0;
                }
                if (
                  ("paste" !== t || r.queryCommandEnabled(t) || (n = !0),
                  n || !r.queryCommandSupported(t))
                ) {
                  var o = e.translate(
                    "Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead."
                  );
                  fe.mac && (o = o.replace(/Ctrl\+/g, "⌘+")),
                    e.notificationManager.open({ text: o, type: "error" });
                }
              },
              unlink: function() {
                if (n.isCollapsed()) {
                  var t = e.dom.getParent(e.selection.getStart(), "a");
                  t && e.dom.remove(t, !0);
                } else r.remove("link");
              },
              "JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone": function(
                e
              ) {
                var t = e.substring(7);
                "full" === t && (t = "justify"),
                  Dw("left,center,right,justify".split(","), function(e) {
                    t !== e && r.remove("align" + e);
                  }),
                  "none" !== t && c("align" + t);
              },
              "InsertUnorderedList,InsertOrderedList": function(e) {
                var r, o;
                s(e),
                  (r = t.getParent(n.getNode(), "ol,ul")) &&
                    ((o = r.parentNode),
                    /^(H[1-6]|P|ADDRESS|PRE)$/.test(o.nodeName) &&
                      (f(), t.split(o, r), d()));
              },
              "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function(
                e
              ) {
                c(e);
              },
              "ForeColor,HiliteColor": function(e, t, n) {
                c(e, n);
              },
              FontName: function(t, n, r) {
                Nw(e, r);
              },
              FontSize: function(t, n, r) {
                kw(e, r);
              },
              RemoveFormat: function(e) {
                r.remove(e);
              },
              mceBlockQuote: function() {
                c("blockquote");
              },
              FormatBlock: function(e, t, n) {
                return c(n || "p");
              },
              mceCleanup: function() {
                var t = n.getBookmark();
                e.setContent(e.getContent()), n.moveToBookmark(t);
              },
              mceRemoveNode: function(t, r, o) {
                var i = o || n.getNode();
                i !== e.getBody() && (f(), e.dom.remove(i, !0), d());
              },
              mceSelectNodeDepth: function(r, o, i) {
                var a = 0;
                t.getParent(
                  n.getNode(),
                  function(e) {
                    if (1 === e.nodeType && a++ === i) return n.select(e), !1;
                  },
                  e.getBody()
                );
              },
              mceSelectNode: function(e, t, r) {
                n.select(r);
              },
              mceInsertContent: function(t, n, r) {
                vw.insertAtCaret(e, r);
              },
              mceInsertRawHTML: function(t, r, o) {
                n.setContent("tiny_mce_marker");
                var i = e.getContent();
                e.setContent(
                  i.replace(/tiny_mce_marker/g, function() {
                    return o;
                  })
                );
              },
              mceInsertNewLine: function(t, n, r) {
                rC.insert(e, r);
              },
              mceToggleFormat: function(e, t, n) {
                c(n);
              },
              mceSetContent: function(t, n, r) {
                e.setContent(r);
              },
              "Indent,Outdent": function(t) {
                Ow(e, t);
              },
              mceRepaint: function() {},
              InsertHorizontalRule: function() {
                e.execCommand("mceInsertContent", !1, "<hr />");
              },
              mceToggleVisualAid: function() {
                (e.hasVisual = !e.hasVisual), e.addVisual();
              },
              mceReplaceContent: function(t, r, o) {
                e.execCommand(
                  "mceInsertContent",
                  !1,
                  o.replace(
                    /\{\$selection\}/g,
                    n.getContent({ format: "text" })
                  )
                );
              },
              mceInsertLink: function(e, o, i) {
                var a;
                "string" == typeof i && (i = { href: i }),
                  (a = t.getParent(n.getNode(), "a")),
                  (i.href = i.href.replace(" ", "%20")),
                  (a && i.href) || r.remove("link"),
                  i.href && r.apply("link", i, a);
              },
              selectAll: function() {
                var e = t.getParent(n.getStart(), ko.isContentEditableTrue);
                if (e) {
                  var r = t.createRng();
                  r.selectNodeContents(e), n.setRng(r);
                }
              },
              delete: function() {
                yw.deleteCommand(e);
              },
              forwardDelete: function() {
                yw.forwardDeleteCommand(e);
              },
              mceNewDocument: function() {
                e.setContent("");
              },
              InsertLineBreak: function(t, n, r) {
                return Fy.insert(e, r), !0;
              }
            });
            var h = function(e) {
              return function() {
                var o = n.isCollapsed()
                    ? [t.getParent(n.getNode(), t.isBlock)]
                    : n.getSelectedBlocks(),
                  i = Hw(o, function(t) {
                    return !!r.matchNode(t, e);
                  });
                return -1 !== Lw(i, !0);
              };
            };
            a(
              {
                JustifyLeft: h("alignleft"),
                JustifyCenter: h("aligncenter"),
                JustifyRight: h("alignright"),
                JustifyFull: h("alignjustify"),
                "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function(
                  e
                ) {
                  return l(e);
                },
                mceBlockQuote: function() {
                  return l("blockquote");
                },
                Outdent: function() {
                  return Bw(e);
                },
                "InsertUnorderedList,InsertOrderedList": function(e) {
                  var r = t.getParent(n.getNode(), "ul,ol");
                  return (
                    r &&
                    (("insertunorderedlist" === e && "UL" === r.tagName) ||
                      ("insertorderedlist" === e && "OL" === r.tagName))
                  );
                }
              },
              "state"
            ),
              a({
                Undo: function() {
                  e.undoManager.undo();
                },
                Redo: function() {
                  e.undoManager.redo();
                }
              }),
              u(
                "FontName",
                function() {
                  return zw(e);
                },
                this
              ),
              u(
                "FontSize",
                function() {
                  return Tw(e);
                },
                this
              );
          }
          var Vw = Yt.makeMap(
              "focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend",
              " "
            ),
            Fw = function(e) {
              var t,
                n,
                r = this,
                o = {},
                i = function() {
                  return !1;
                },
                a = function() {
                  return !0;
                };
              (t = (e = e || {}).scope || r), (n = e.toggleEvent || i);
              var u = function(e, t, a, u) {
                  var s, l, c;
                  if ((!1 === t && (t = i), t))
                    for (
                      t = { func: t },
                        u && Yt.extend(t, u),
                        c = (l = e.toLowerCase().split(" ")).length;
                      c--;

                    )
                      (e = l[c]),
                        (s = o[e]) || ((s = o[e] = []), n(e, !0)),
                        a ? s.unshift(t) : s.push(t);
                  return r;
                },
                s = function(e, t) {
                  var i, a, u, s, l;
                  if (e)
                    for (i = (s = e.toLowerCase().split(" ")).length; i--; ) {
                      if (((e = s[i]), (a = o[e]), !e)) {
                        for (u in o) n(u, !1), delete o[u];
                        return r;
                      }
                      if (a) {
                        if (t)
                          for (l = a.length; l--; )
                            a[l].func === t &&
                              ((a = a.slice(0, l).concat(a.slice(l + 1))),
                              (o[e] = a));
                        else a.length = 0;
                        a.length || (n(e, !1), delete o[e]);
                      }
                    }
                  else {
                    for (e in o) n(e, !1);
                    o = {};
                  }
                  return r;
                };
              (r.fire = function(n, r) {
                var u, l, c, f;
                if (
                  ((n = n.toLowerCase()),
                  ((r = r || {}).type = n),
                  r.target || (r.target = t),
                  r.preventDefault ||
                    ((r.preventDefault = function() {
                      r.isDefaultPrevented = a;
                    }),
                    (r.stopPropagation = function() {
                      r.isPropagationStopped = a;
                    }),
                    (r.stopImmediatePropagation = function() {
                      r.isImmediatePropagationStopped = a;
                    }),
                    (r.isDefaultPrevented = i),
                    (r.isPropagationStopped = i),
                    (r.isImmediatePropagationStopped = i)),
                  e.beforeFire && e.beforeFire(r),
                  (u = o[n]))
                )
                  for (l = 0, c = u.length; l < c; l++) {
                    if (
                      ((f = u[l]).once && s(n, f.func),
                      r.isImmediatePropagationStopped())
                    )
                      return r.stopPropagation(), r;
                    if (!1 === f.func.call(t, r)) return r.preventDefault(), r;
                  }
                return r;
              }),
                (r.on = u),
                (r.off = s),
                (r.once = function(e, t, n) {
                  return u(e, t, n, { once: !0 });
                }),
                (r.has = function(e) {
                  return (e = e.toLowerCase()), !(!o[e] || 0 === o[e].length);
                });
            };
          Fw.isNative = function(e) {
            return !!Vw[e.toLowerCase()];
          };
          var Uw,
            jw = function(e) {
              return (
                e._eventDispatcher ||
                  (e._eventDispatcher = new Fw({
                    scope: e,
                    toggleEvent: function(t, n) {
                      Fw.isNative(t) &&
                        e.toggleNativeEvent &&
                        e.toggleNativeEvent(t, n);
                    }
                  })),
                e._eventDispatcher
              );
            },
            qw = {
              fire: function(e, t, n) {
                if (this.removed && "remove" !== e && "detach" !== e) return t;
                if (((t = jw(this).fire(e, t, n)), !1 !== n && this.parent))
                  for (var r = this.parent(); r && !t.isPropagationStopped(); )
                    r.fire(e, t, !1), (r = r.parent());
                return t;
              },
              on: function(e, t, n) {
                return jw(this).on(e, t, n);
              },
              off: function(e, t) {
                return jw(this).off(e, t);
              },
              once: function(e, t) {
                return jw(this).once(e, t);
              },
              hasEventListeners: function(e) {
                return jw(this).has(e);
              }
            },
            $w = ci.DOM,
            Ww = function(e, t) {
              return "selectionchange" === t
                ? e.getDoc()
                : !e.inline &&
                  /^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t)
                ? e.getDoc().documentElement
                : e.settings.event_root
                ? (e.eventRoot ||
                    (e.eventRoot = $w.select(e.settings.event_root)[0]),
                  e.eventRoot)
                : e.getBody();
            },
            Kw = function(e, t, n) {
              !(function(e) {
                return !e.hidden && !e.readonly;
              })(e)
                ? (function(e) {
                    return !0 === e.readonly;
                  })(e) && n.preventDefault()
                : e.fire(t, n);
            },
            Xw = function(e, t) {
              var n, r;
              if (
                (e.delegates || (e.delegates = {}),
                !e.delegates[t] && !e.removed)
              )
                if (((n = Ww(e, t)), e.settings.event_root)) {
                  if (
                    (Uw ||
                      ((Uw = {}),
                      e.editorManager.on("removeEditor", function() {
                        var t;
                        if (!e.editorManager.activeEditor && Uw) {
                          for (t in Uw) e.dom.unbind(Ww(e, t));
                          Uw = null;
                        }
                      })),
                    Uw[t])
                  )
                    return;
                  (r = function(n) {
                    for (
                      var r = n.target, o = e.editorManager.get(), i = o.length;
                      i--;

                    ) {
                      var a = o[i].getBody();
                      (a === r || $w.isChildOf(r, a)) && Kw(o[i], t, n);
                    }
                  }),
                    (Uw[t] = r),
                    $w.bind(n, t, r);
                } else
                  (r = function(n) {
                    Kw(e, t, n);
                  }),
                    $w.bind(n, t, r),
                    (e.delegates[t] = r);
            },
            Yw = {
              bindPendingEventDelegates: function() {
                var e = this;
                Yt.each(e._pendingNativeEvents, function(t) {
                  Xw(e, t);
                });
              },
              toggleNativeEvent: function(e, t) {
                "focus" !== e &&
                  "blur" !== e &&
                  (t
                    ? this.initialized
                      ? Xw(this, e)
                      : this._pendingNativeEvents
                      ? this._pendingNativeEvents.push(e)
                      : (this._pendingNativeEvents = [e])
                    : this.initialized &&
                      (this.dom.unbind(Ww(this, e), e, this.delegates[e]),
                      delete this.delegates[e]));
              },
              unbindAllNativeEvents: function() {
                var e,
                  t = this.getBody(),
                  n = this.dom;
                if (this.delegates) {
                  for (e in this.delegates)
                    this.dom.unbind(Ww(this, e), e, this.delegates[e]);
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
            },
            Gw = (Yw = Yt.extend({}, qw, Yw)),
            Jw = Yt.each,
            Qw = Yt.explode,
            Zw = {
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
            ex = Yt.makeMap("alt,ctrl,shift,meta,access");
          function tx(e) {
            var t = {},
              n = [],
              r = function(e) {
                var t,
                  n,
                  r = {};
                for (n in (Jw(Qw(e, "+"), function(e) {
                  e in ex
                    ? (r[e] = !0)
                    : /^[0-9]{2,}$/.test(e)
                    ? (r.keyCode = parseInt(e, 10))
                    : ((r.charCode = e.charCodeAt(0)),
                      (r.keyCode = Zw[e] || e.toUpperCase().charCodeAt(0)));
                }),
                (t = [r.keyCode]),
                ex))
                  r[n] ? t.push(n) : (r[n] = !1);
                return (
                  (r.id = t.join(",")),
                  r.access &&
                    ((r.alt = !0), fe.mac ? (r.ctrl = !0) : (r.shift = !0)),
                  r.meta &&
                    (fe.mac ? (r.meta = !0) : ((r.ctrl = !0), (r.meta = !1))),
                  r
                );
              },
              o = function(t, n, o, i) {
                var a;
                return (
                  ((a = Yt.map(Qw(t, ">"), r))[a.length - 1] = Yt.extend(
                    a[a.length - 1],
                    { func: o, scope: i || e }
                  )),
                  Yt.extend(a[0], {
                    desc: e.translate(n),
                    subpatterns: a.slice(1)
                  })
                );
              },
              i = function(e, t) {
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
              },
              a = function(e) {
                return e.func ? e.func.call(e.scope) : null;
              };
            e.on("keyup keypress keydown", function(e) {
              (!(function(e) {
                return e.altKey || e.ctrlKey || e.metaKey;
              })(e) &&
                !(function(e) {
                  return (
                    "keydown" === e.type && e.keyCode >= 112 && e.keyCode <= 123
                  );
                })(e)) ||
                e.isDefaultPrevented() ||
                (Jw(t, function(t) {
                  if (i(e, t))
                    return (
                      (n = t.subpatterns.slice(0)),
                      "keydown" === e.type && a(t),
                      !0
                    );
                }),
                i(e, n[0]) &&
                  (1 === n.length && "keydown" === e.type && a(n[0]),
                  n.shift()));
            }),
              (this.add = function(n, r, i, a) {
                var u;
                return (
                  (u = i),
                  "string" == typeof i
                    ? (i = function() {
                        e.execCommand(u, !1, null);
                      })
                    : Yt.isArray(u) &&
                      (i = function() {
                        e.execCommand(u[0], u[1], u[2]);
                      }),
                  Jw(Qw(Yt.trim(n.toLowerCase())), function(e) {
                    var n = o(e, r, i, a);
                    t[n.id] = n;
                  }),
                  !0
                );
              }),
              (this.remove = function(e) {
                var n = o(e);
                return !!t[n.id] && (delete t[n.id], !0);
              });
          }
          var nx = Yt.each,
            rx = Yt.trim,
            ox = "source protocol authority userInfo user password host port relative path directory file query anchor".split(
              " "
            ),
            ix = { ftp: 21, http: 80, https: 443, mailto: 25 },
            ax = function(e, t) {
              var r,
                o,
                i = this;
              if (
                ((e = rx(e)),
                (r = (t = i.settings = t || {}).base_uri),
                /^([\w\-]+):([^\/]{2})/i.test(e) || /^\s*#/.test(e))
              )
                i.source = e;
              else {
                var a = 0 === e.indexOf("//");
                0 !== e.indexOf("/") ||
                  a ||
                  (e = ((r && r.protocol) || "http") + "://mce_host" + e),
                  /^[\w\-]*:?\/\//.test(e) ||
                    ((o = t.base_uri
                      ? t.base_uri.path
                      : new ax(n.document.location.href).directory),
                    "" == t.base_uri.protocol
                      ? (e = "//mce_host" + i.toAbsPath(o, e))
                      : ((e = /([^#?]*)([#?]?.*)/.exec(e)),
                        (e =
                          ((r && r.protocol) || "http") +
                          "://mce_host" +
                          i.toAbsPath(o, e[1]) +
                          e[2]))),
                  (e = e.replace(/@@/g, "(mce_at)")),
                  (e = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(
                    e
                  )),
                  nx(ox, function(t, n) {
                    var r = e[n];
                    r && (r = r.replace(/\(mce_at\)/g, "@@")), (i[t] = r);
                  }),
                  r &&
                    (i.protocol || (i.protocol = r.protocol),
                    i.userInfo || (i.userInfo = r.userInfo),
                    i.port || "mce_host" !== i.host || (i.port = r.port),
                    (i.host && "mce_host" !== i.host) || (i.host = r.host),
                    (i.source = "")),
                  a && (i.protocol = "");
              }
            };
          (ax.prototype = {
            setPath: function(e) {
              (e = /^(.*?)\/?(\w+)?$/.exec(e)),
                (this.path = e[0]),
                (this.directory = e[1]),
                (this.file = e[2]),
                (this.source = ""),
                this.getURI();
            },
            toRelative: function(e) {
              var t;
              if ("./" === e) return e;
              if (
                ("mce_host" !== (e = new ax(e, { base_uri: this })).host &&
                  this.host !== e.host &&
                  e.host) ||
                this.port !== e.port ||
                (this.protocol !== e.protocol && "" !== e.protocol)
              )
                return e.getURI();
              var n = this.getURI(),
                r = e.getURI();
              return n === r ||
                ("/" === n.charAt(n.length - 1) &&
                  n.substr(0, n.length - 1) === r)
                ? n
                : ((t = this.toRelPath(this.path, e.path)),
                  e.query && (t += "?" + e.query),
                  e.anchor && (t += "#" + e.anchor),
                  t);
            },
            toAbsolute: function(e, t) {
              return (e = new ax(e, { base_uri: this })).getURI(
                t && this.isSameOrigin(e)
              );
            },
            isSameOrigin: function(e) {
              if (this.host == e.host && this.protocol == e.protocol) {
                if (this.port == e.port) return !0;
                var t = ix[this.protocol];
                if (t && (this.port || t) == (e.port || t)) return !0;
              }
              return !1;
            },
            toRelPath: function(e, t) {
              var n,
                r,
                o,
                i = 0,
                a = "";
              if (
                ((e = (e = e.substring(0, e.lastIndexOf("/"))).split("/")),
                (n = t.split("/")),
                e.length >= n.length)
              )
                for (r = 0, o = e.length; r < o; r++)
                  if (r >= n.length || e[r] !== n[r]) {
                    i = r + 1;
                    break;
                  }
              if (e.length < n.length)
                for (r = 0, o = n.length; r < o; r++)
                  if (r >= e.length || e[r] !== n[r]) {
                    i = r + 1;
                    break;
                  }
              if (1 === i) return t;
              for (r = 0, o = e.length - (i - 1); r < o; r++) a += "../";
              for (r = i - 1, o = n.length; r < o; r++)
                a += r !== i - 1 ? "/" + n[r] : n[r];
              return a;
            },
            toAbsPath: function(e, t) {
              var n,
                r,
                o,
                i = 0,
                a = [];
              for (
                r = /\/$/.test(t) ? "/" : "",
                  e = e.split("/"),
                  t = t.split("/"),
                  nx(e, function(e) {
                    e && a.push(e);
                  }),
                  e = a,
                  n = t.length - 1,
                  a = [];
                n >= 0;
                n--
              )
                0 !== t[n].length &&
                  "." !== t[n] &&
                  (".." !== t[n] ? (i > 0 ? i-- : a.push(t[n])) : i++);
              return (
                0 !==
                  (o =
                    (n = e.length - i) <= 0
                      ? a.reverse().join("/")
                      : e.slice(0, n).join("/") +
                        "/" +
                        a.reverse().join("/")).indexOf("/") && (o = "/" + o),
                r && o.lastIndexOf("/") !== o.length - 1 && (o += r),
                o
              );
            },
            getURI: function(e) {
              var t;
              return (
                (this.source && !e) ||
                  ((t = ""),
                  e ||
                    (this.protocol ? (t += this.protocol + "://") : (t += "//"),
                    this.userInfo && (t += this.userInfo + "@"),
                    this.host && (t += this.host),
                    this.port && (t += ":" + this.port)),
                  this.path && (t += this.path),
                  this.query && (t += "?" + this.query),
                  this.anchor && (t += "#" + this.anchor),
                  (this.source = t)),
                this.source
              );
            }
          }),
            (ax.parseDataUri = function(e) {
              var t, n;
              return (
                (e = decodeURIComponent(e).split(",")),
                (n = /data:([^;]+)/.exec(e[0])) && (t = n[1]),
                { type: t, data: e[1] }
              );
            }),
            (ax.getDocumentBaseUrl = function(e) {
              var t;
              return (
                (t =
                  0 !== e.protocol.indexOf("http") && "file:" !== e.protocol
                    ? e.href
                    : e.protocol + "//" + e.host + e.pathname),
                /^[^:]+:\/\/\/?[^\/]+\//.test(t) &&
                  ((t = t.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, "")),
                  /[\/\\]$/.test(t) || (t += "/")),
                t
              );
            });
          var ux = ci.DOM,
            sx = Yt.extend,
            lx = Yt.each,
            cx = Yt.resolve,
            fx = fe.ie,
            dx = function(e, t, n) {
              var r = this,
                o = (r.documentBaseUrl = n.documentBaseURL),
                i = n.baseURI;
              (t = (function(e, t, n, r, o) {
                var i = (function(e, t, n) {
                  return {
                    id: e,
                    theme: "silver",
                    popup_css: "",
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
                    font_size_style_values:
                      "xx-small,x-small,small,medium,large,x-large,xx-large",
                    font_size_legacy_values:
                      "xx-small,small,medium,large,x-large,xx-large,300%",
                    forced_root_block: "p",
                    hidden_input: !0,
                    render_ui: !0,
                    inline_styles: !0,
                    convert_fonts_to_spans: !0,
                    indent: "simple",
                    indent_before:
                      "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
                    indent_after:
                      "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
                    entity_encoding: "named",
                    url_converter: n.convertURL,
                    url_converter_scope: n,
                    ie7_compat: !0
                  };
                })(t, n, e);
                return Wc(Lc, i, r, o);
              })(r, e, o, n.defaultSettings, t)),
                (r.settings = t),
                (wi.languageLoad = t.language_load),
                (wi.baseURL = n.baseURL),
                (r.id = e),
                r.setDirty(!1),
                (r.plugins = {}),
                (r.documentBaseURI = new ax(t.document_base_url, {
                  base_uri: i
                })),
                (r.baseURI = i),
                (r.contentCSS = []),
                (r.contentStyles = []),
                (r.shortcuts = new tx(r)),
                (r.loadedCSS = {}),
                (r.editorCommands = new Iw(r)),
                (r.suffix = n.suffix),
                (r.editorManager = n),
                (r.inline = t.inline),
                (r.buttons = {}),
                (r.menuItems = {}),
                t.cache_suffix &&
                  (fe.cacheSuffix = t.cache_suffix.replace(/^[\?\&]+/, "")),
                !1 === t.override_viewport && (fe.overrideViewPort = !1);
              var a,
                u,
                s,
                l,
                c,
                f,
                d,
                h,
                m = ((u = {}),
                (s = {}),
                (l = {}),
                (c = {}),
                (f = {}),
                (d = {}),
                {
                  addButton: (h = function(e, t) {
                    return function(n, r) {
                      return (e[n.toLowerCase()] = Tl({ type: t }, r));
                    };
                  })((a = {}), "button"),
                  addToggleButton: h(a, "togglebutton"),
                  addMenuButton: h(a, "menubutton"),
                  addSplitButton: h(a, "splitbutton"),
                  addMenuItem: h(u, "menuitem"),
                  addNestedMenuItem: h(u, "nestedmenuitem"),
                  addToggleMenuItem: h(u, "togglemenuitem"),
                  addAutocompleter: h(s, "autocompleter"),
                  addContextMenu: h(c, "contextmenu"),
                  addContextToolbar: h(f, "contexttoolbar"),
                  addContextForm: h(f, "contextform"),
                  addSidebar: h(d, "sidebar"),
                  addIcon: function(e, t) {
                    return (l[e.toLowerCase()] = t);
                  },
                  getAll: function() {
                    return {
                      buttons: a,
                      menuItems: u,
                      icons: l,
                      popups: s,
                      contextMenus: c,
                      contextToolbars: f,
                      sidebars: d
                    };
                  }
                });
              (r.ui = { registry: m }),
                n.fire("SetupEditor", { editor: r }),
                r.execCallback("setup", r),
                (r.$ = gn.overrideDefaults(function() {
                  return {
                    context: r.inline ? r.getBody() : r.getDoc(),
                    element: r.getBody()
                  };
                }));
            };
          (dx.prototype = {
            render: function() {
              ew(this);
            },
            focus: function(e) {
              Cc(this, e);
            },
            hasFocus: function() {
              return wc(this);
            },
            execCallback: function(e) {
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
                    ((r = (r = o.replace(/\.\w+$/, "")) ? cx(r) : 0),
                    (o = cx(o)),
                    (this.callbackLookup = this.callbackLookup || {}),
                    (this.callbackLookup[e] = { func: o, scope: r })),
                  o.apply(r || this, Array.prototype.slice.call(arguments, 1))
                );
            },
            translate: function(e) {
              return yi.translate(e);
            },
            getParam: function(e, t, n) {
              return Yc(this, e, t, n);
            },
            nodeChanged: function(e) {
              this._nodeChangeDispatcher.nodeChanged(e);
            },
            addButton: function() {
              throw new Error(
                "editor.addButton has been removed in tinymce 5x, use editor.ui.registry.addButton or editor.ui.registry.addToggleButton or editor.ui.registry.addSplitButton instead"
              );
            },
            addSidebar: function() {
              throw new Error(
                "editor.addSidebar has been removed in tinymce 5x, use editor.ui.registry.addSidebar instead"
              );
            },
            addMenuItem: function() {
              throw new Error(
                "editor.addMenuItem has been removed in tinymce 5x, use editor.ui.registry.addMenuItem instead"
              );
            },
            addContextToolbar: function() {
              throw new Error(
                "editor.addContextToolbar has been removed in tinymce 5x, use editor.ui.registry.addContextToolbar instead"
              );
            },
            addCommand: function(e, t, n) {
              this.editorCommands.addCommand(e, t, n);
            },
            addQueryStateHandler: function(e, t, n) {
              this.editorCommands.addQueryStateHandler(e, t, n);
            },
            addQueryValueHandler: function(e, t, n) {
              this.editorCommands.addQueryValueHandler(e, t, n);
            },
            addShortcut: function(e, t, n, r) {
              this.shortcuts.add(e, t, n, r);
            },
            execCommand: function(e, t, n, r) {
              return this.editorCommands.execCommand(e, t, n, r);
            },
            queryCommandState: function(e) {
              return this.editorCommands.queryCommandState(e);
            },
            queryCommandValue: function(e) {
              return this.editorCommands.queryCommandValue(e);
            },
            queryCommandSupported: function(e) {
              return this.editorCommands.queryCommandSupported(e);
            },
            show: function() {
              this.hidden &&
                ((this.hidden = !1),
                this.inline
                  ? (this.getBody().contentEditable = !0)
                  : (ux.show(this.getContainer()), ux.hide(this.id)),
                this.load(),
                this.fire("show"));
            },
            hide: function() {
              var e = this.getDoc();
              this.hidden ||
                (fx && e && !this.inline && e.execCommand("SelectAll"),
                this.save(),
                this.inline
                  ? ((this.getBody().contentEditable = !1),
                    this === this.editorManager.focusedEditor &&
                      (this.editorManager.focusedEditor = null))
                  : (ux.hide(this.getContainer()),
                    ux.setStyle(this.id, "display", this.orgDisplay)),
                (this.hidden = !0),
                this.fire("hide"));
            },
            isHidden: function() {
              return !!this.hidden;
            },
            setProgressState: function(e, t) {
              this.fire("ProgressState", { state: e, time: t });
            },
            load: function(e) {
              var t,
                n = this.getElement();
              return this.removed
                ? ""
                : n
                ? (((e = e || {}).load = !0),
                  (t = this.setContent(
                    void 0 !== n.value ? n.value : n.innerHTML,
                    e
                  )),
                  (e.element = n),
                  e.no_events || this.fire("LoadContent", e),
                  (e.element = n = null),
                  t)
                : void 0;
            },
            save: function(e) {
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
                      (n = ux.getParent(r.id, "form")) &&
                        lx(n.elements, function(e) {
                          if (e.name === r.id) return (e.value = t), !1;
                        })),
                  (e.element = o = null),
                  !1 !== e.set_dirty && r.setDirty(!1),
                  t
                );
            },
            setContent: function(e, t) {
              return Ec(this, e, t);
            },
            getContent: function(e) {
              return (function(e, t) {
                return (
                  void 0 === t && (t = {}),
                  _.from(e.getBody()).fold(
                    i("tree" === t.format ? new Rl("body", 11) : ""),
                    function(n) {
                      return ql(e, t, n);
                    }
                  )
                );
              })(this, e);
            },
            insertContent: function(e, t) {
              t && (e = sx({ content: e }, t)),
                this.execCommand("mceInsertContent", !1, e);
            },
            isDirty: function() {
              return !this.isNotDirty;
            },
            setDirty: function(e) {
              var t = !this.isNotDirty;
              (this.isNotDirty = !e), e && e !== t && this.fire("dirty");
            },
            setMode: function(e) {
              !(function(e, t) {
                t !== ow(e) &&
                  (e.initialized
                    ? rw(e, "readonly" === t)
                    : e.on("init", function() {
                        rw(e, "readonly" === t);
                      }),
                  _c(e, t));
              })(this, e);
            },
            getContainer: function() {
              return (
                this.container ||
                  (this.container = ux.get(
                    this.editorContainer || this.id + "_parent"
                  )),
                this.container
              );
            },
            getContentAreaContainer: function() {
              return this.contentAreaContainer;
            },
            getElement: function() {
              return (
                this.targetElm || (this.targetElm = ux.get(this.id)),
                this.targetElm
              );
            },
            getWin: function() {
              var e;
              return (
                this.contentWindow ||
                  ((e = this.iframeElement) &&
                    (this.contentWindow = e.contentWindow)),
                this.contentWindow
              );
            },
            getDoc: function() {
              var e;
              return (
                this.contentDocument ||
                  ((e = this.getWin()) && (this.contentDocument = e.document)),
                this.contentDocument
              );
            },
            getBody: function() {
              var e = this.getDoc();
              return this.bodyElement || (e ? e.body : null);
            },
            convertURL: function(e, t, n) {
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
            },
            addVisual: function(e) {
              var t,
                n = this,
                r = n.settings,
                o = n.dom;
              (e = e || n.getBody()),
                void 0 === n.hasVisual && (n.hasVisual = r.visual),
                lx(o.select("table,a", e), function(e) {
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
            },
            remove: function() {
              Oc(this);
            },
            destroy: function(e) {
              Dc(this, e);
            },
            uploadImages: function(e) {
              return this.editorUpload.uploadImages(e);
            },
            _scanForImages: function() {
              return this.editorUpload.scanForImages();
            }
          }),
            sx(dx.prototype, Gw);
          var hx,
            mx,
            gx,
            px = {
              isEditorUIElement: function(e) {
                return (
                  -1 !== e.className.toString().indexOf("tox-") ||
                  -1 !== e.className.toString().indexOf("mce-")
                );
              }
            },
            vx = function(e, t) {
              Yn.detect().browser.isIE()
                ? (function(e) {
                    e.on("focusout", function() {
                      hc.store(e);
                    });
                  })(e)
                : (function(e, t) {
                    e.on("mouseup touchend", function(e) {
                      t.throttle();
                    });
                  })(e, t),
                e.on("keyup nodechange", function(t) {
                  (function(e) {
                    return "nodechange" === e.type && e.selectionChange;
                  })(t) || hc.store(e);
                });
            },
            bx = function(e) {
              var t = Ai(function() {
                hc.store(e);
              }, 0);
              e.inline &&
                (function(e, t) {
                  var r = function() {
                    t.throttle();
                  };
                  ci.DOM.bind(n.document, "mouseup", r),
                    e.on("remove", function() {
                      ci.DOM.unbind(n.document, "mouseup", r);
                    });
                })(e, t),
                e.on("init", function() {
                  vx(e, t);
                }),
                e.on("remove", function() {
                  t.cancel();
                });
            },
            yx = ci.DOM,
            Cx = function(e) {
              return px.isEditorUIElement(e);
            },
            wx = function(e, t) {
              var n = e ? e.settings.custom_ui_selector : "";
              return (
                null !==
                yx.getParent(t, function(t) {
                  return Cx(t) || (!!n && e.dom.is(t, n));
                })
              );
            },
            xx = function(e, t) {
              var r = t.editor;
              bx(r),
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
                  var t = this;
                  pe.setEditorTimeout(t, function() {
                    var r = e.focusedEditor;
                    wx(
                      t,
                      (function() {
                        try {
                          return n.document.activeElement;
                        } catch (e) {
                          return n.document.body;
                        }
                      })()
                    ) ||
                      r !== t ||
                      (t.fire("blur", { focusedEditor: null }),
                      (e.focusedEditor = null));
                  });
                }),
                hx ||
                  ((hx = function(t) {
                    var r,
                      o = e.activeEditor;
                    (r = t.target),
                      o &&
                        r.ownerDocument === n.document &&
                        (r === n.document.body ||
                          wx(o, r) ||
                          e.focusedEditor !== o ||
                          (o.fire("blur", { focusedEditor: null }),
                          (e.focusedEditor = null)));
                  }),
                  yx.bind(n.document, "focusin", hx));
            },
            Sx = function(e, t) {
              e.focusedEditor === t.editor && (e.focusedEditor = null),
                e.activeEditor ||
                  (yx.unbind(n.document, "focusin", hx), (hx = null));
            },
            Ex = function(e) {
              e.on("AddEditor", u(xx, e)), e.on("RemoveEditor", u(Sx, e));
            },
            Nx = ci.DOM,
            zx = Yt.explode,
            kx = Yt.each,
            Tx = Yt.extend,
            _x = 0,
            Ax = !1,
            Bx = [],
            Rx = [],
            Mx = function(e) {
              var t = e.type;
              kx(gx.get(), function(n) {
                switch (t) {
                  case "scroll":
                    n.fire("ScrollWindow", e);
                    break;
                  case "resize":
                    n.fire("ResizeWindow", e);
                }
              });
            },
            Ox = function(e) {
              e !== Ax &&
                (e
                  ? gn(window).on("resize scroll", Mx)
                  : gn(window).off("resize scroll", Mx),
                (Ax = e));
            },
            Dx = function(e) {
              var t = Rx;
              delete Bx[e.id];
              for (var n = 0; n < Bx.length; n++)
                if (Bx[n] === e) {
                  Bx.splice(n, 1);
                  break;
                }
              return (
                (Rx = j(Rx, function(t) {
                  return e !== t;
                })),
                gx.activeEditor === e &&
                  (gx.activeEditor = Rx.length > 0 ? Rx[0] : null),
                gx.focusedEditor === e && (gx.focusedEditor = null),
                t.length !== Rx.length
              );
            };
          (gx = {
            defaultSettings: {},
            $: gn,
            majorVersion: "5",
            minorVersion: "0.1",
            releaseDate: "2019-02-21",
            editors: Bx,
            i18n: yi,
            activeEditor: null,
            settings: {},
            setup: function() {
              var e,
                t,
                r,
                o,
                i = "";
              if (
                ((t = ax.getDocumentBaseUrl(n.document.location)),
                /^[^:]+:\/\/\/?[^\/]+\//.test(t) &&
                  ((t = t.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, "")),
                  /[\/\\]$/.test(t) || (t += "/")),
                (r = window.tinymce || window.tinyMCEPreInit))
              )
                (e = r.base || r.baseURL), (i = r.suffix);
              else {
                for (
                  var a = n.document.getElementsByTagName("script"), u = 0;
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
                  n.document.currentScript &&
                  (-1 !== (o = n.document.currentScript.src).indexOf(".min") &&
                    (i = ".min"),
                  (e = o.substring(0, o.lastIndexOf("/"))));
              }
              (this.baseURL = new ax(t).toAbsolute(e)),
                (this.documentBaseURL = t),
                (this.baseURI = new ax(this.baseURL)),
                (this.suffix = i),
                Ex(this);
            },
            overrideDefaults: function(e) {
              var t, n;
              (t = e.base_url) &&
                ((this.baseURL = new ax(this.documentBaseURL).toAbsolute(
                  t.replace(/\/+$/, "")
                )),
                (this.baseURI = new ax(this.baseURL))),
                (n = e.suffix),
                e.suffix && (this.suffix = n),
                (this.defaultSettings = e);
              var r = e.plugin_base_urls;
              for (var o in r) wi.PluginManager.urls[o] = r[o];
            },
            init: function(e) {
              var t,
                r,
                o = this;
              r = Yt.makeMap(
                "area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option table tbody tfoot thead tr th td script noscript style textarea video audio iframe object menu",
                " "
              );
              var i = function(e) {
                  var t = e.id;
                  return (
                    t ||
                      ((t =
                        (t = e.name) && !Nx.get(t) ? e.name : Nx.uniqueId()),
                      e.setAttribute("id", t)),
                    t
                  );
                },
                a = function(e, t) {
                  return t.constructor === RegExp
                    ? t.test(e.className)
                    : Nx.hasClass(e, t);
                },
                u = function(e) {
                  t = e;
                },
                s = function() {
                  var t,
                    l = 0,
                    c = [],
                    f = function(e, n, r) {
                      var i = new dx(e, n, o);
                      c.push(i),
                        i.on("init", function() {
                          ++l === t.length && u(c);
                        }),
                        (i.targetElm = i.targetElm || r),
                        i.render();
                    };
                  Nx.unbind(window, "ready", s),
                    (function(t) {
                      var n = e[t];
                      n && n.apply(o, Array.prototype.slice.call(arguments, 2));
                    })("onpageload"),
                    (t = gn.unique(
                      (function(e) {
                        var t,
                          r = [];
                        if (fe.ie && fe.ie < 11)
                          return (
                            df.initError(
                              "TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tinymce.com/docs/get-started/system-requirements/"
                            ),
                            []
                          );
                        if (e.types)
                          return (
                            kx(e.types, function(e) {
                              r = r.concat(Nx.select(e.selector));
                            }),
                            r
                          );
                        if (e.selector) return Nx.select(e.selector);
                        if (e.target) return [e.target];
                        switch (e.mode) {
                          case "exact":
                            (t = e.elements || "").length > 0 &&
                              kx(zx(t), function(e) {
                                var t;
                                (t = Nx.get(e))
                                  ? r.push(t)
                                  : kx(n.document.forms, function(t) {
                                      kx(t.elements, function(t) {
                                        t.name === e &&
                                          ((e = "mce_editor_" + _x++),
                                          Nx.setAttrib(t, "id", e),
                                          r.push(t));
                                      });
                                    });
                              });
                            break;
                          case "textareas":
                          case "specific_textareas":
                            kx(Nx.select("textarea"), function(t) {
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
                      ? kx(e.types, function(n) {
                          Yt.each(t, function(t) {
                            return (
                              !Nx.is(t, n.selector) ||
                              (f(i(t), Tx({}, e, n), t), !1)
                            );
                          });
                        })
                      : (Yt.each(t, function(e) {
                          var t;
                          (t = o.get(e.id)) &&
                            t.initialized &&
                            !(t.getContainer() || t.getBody()).parentNode &&
                            (Dx(t),
                            t.unbindAllNativeEvents(),
                            t.destroy(!0),
                            (t.removed = !0),
                            (t = null));
                        }),
                        0 ===
                        (t = Yt.grep(t, function(e) {
                          return !o.get(e.id);
                        })).length
                          ? u([])
                          : kx(t, function(t) {
                              !(function(e, t) {
                                return e.inline && t.tagName.toLowerCase() in r;
                              })(e, t)
                                ? f(i(t), e, t)
                                : df.initError(
                                    "Could not initialize inline editor on invalid inline target element",
                                    t
                                  );
                            }));
                };
              return (
                (o.settings = e),
                Nx.bind(window, "ready", s),
                new de(function(e) {
                  t
                    ? e(t)
                    : (u = function(t) {
                        e(t);
                      });
                })
              );
            },
            get: function(e) {
              return 0 === arguments.length
                ? Rx.slice(0)
                : B(e)
                ? $(Rx, function(t) {
                    return t.id === e;
                  }).getOr(null)
                : H(e) && Rx[e]
                ? Rx[e]
                : null;
            },
            add: function(e) {
              var t = this;
              return Bx[e.id] === e
                ? e
                : (null === t.get(e.id) &&
                    ("length" !== e.id && (Bx[e.id] = e),
                    Bx.push(e),
                    Rx.push(e)),
                  Ox(!0),
                  (t.activeEditor = e),
                  t.fire("AddEditor", { editor: e }),
                  mx ||
                    ((mx = function() {
                      t.fire("BeforeUnload");
                    }),
                    Nx.bind(window, "beforeunload", mx)),
                  e);
            },
            createEditor: function(e, t) {
              return this.add(new dx(e, t, this));
            },
            remove: function(e) {
              var t,
                n,
                r = this;
              if (e) {
                if (!B(e))
                  return (
                    (n = e),
                    O(r.get(n.id))
                      ? null
                      : (Dx(n) && r.fire("RemoveEditor", { editor: n }),
                        0 === Rx.length &&
                          Nx.unbind(window, "beforeunload", mx),
                        n.remove(),
                        Ox(Rx.length > 0),
                        n)
                  );
                kx(Nx.select(e), function(e) {
                  (n = r.get(e.id)) && r.remove(n);
                });
              } else for (t = Rx.length - 1; t >= 0; t--) r.remove(Rx[t]);
            },
            execCommand: function(e, t, n) {
              var r = this.get(n);
              switch (e) {
                case "mceAddEditor":
                  return (
                    this.get(n) || new dx(n, this.settings, this).render(), !0
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
              kx(Rx, function(e) {
                e.save();
              });
            },
            addI18n: function(e, t) {
              yi.add(e, t);
            },
            translate: function(e) {
              return yi.translate(e);
            },
            setActive: function(e) {
              var t = this.activeEditor;
              this.activeEditor !== e &&
                (t && t.fire("deactivate", { relatedTarget: e }),
                e.fire("activate", { relatedTarget: t })),
                (this.activeEditor = e);
            }
          }),
            Tx(gx, qw),
            gx.setup();
          var Px = gx;
          function Hx(e) {
            return {
              walk: function(t, n) {
                return bl.walk(e, t, n);
              },
              split: yh.split,
              normalize: function(t) {
                return ip.normalize(e, t).fold(i(!1), function(e) {
                  return (
                    t.setStart(e.startContainer, e.startOffset),
                    t.setEnd(e.endContainer, e.endOffset),
                    !0
                  );
                });
              }
            };
          }
          !(function(e) {
            (e.compareRanges = Ff.isEq),
              (e.getCaretRangeFromPoint = wg.fromPoint),
              (e.getSelectedNode = Fa),
              (e.getNode = Ua);
          })(Hx || (Hx = {}));
          var Lx,
            Ix,
            Vx = Hx,
            Fx = Math.min,
            Ux = Math.max,
            jx = Math.round,
            qx = function(e, t, n) {
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
                "c" === n[0] && (o += jx(s / 2)),
                "c" === n[1] && (r += jx(u / 2)),
                "b" === n[3] && (o -= a),
                "r" === n[4] && (r -= i),
                "c" === n[3] && (o -= jx(a / 2)),
                "c" === n[4] && (r -= jx(i / 2)),
                $x(r, o, i, a)
              );
            },
            $x = function(e, t, n, r) {
              return { x: e, y: t, w: n, h: r };
            },
            Wx = {
              inflate: function(e, t, n) {
                return $x(e.x - t, e.y - n, e.w + 2 * t, e.h + 2 * n);
              },
              relativePosition: qx,
              findBestRelativePosition: function(e, t, n, r) {
                var o, i;
                for (i = 0; i < r.length; i++)
                  if (
                    (o = qx(e, t, r[i])).x >= n.x &&
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
                  (n = Ux(e.x, t.x)),
                  (r = Ux(e.y, t.y)),
                  (o = Fx(e.x + e.w, t.x + t.w)),
                  (i = Fx(e.y + e.h, t.y + t.h)),
                  o - n < 0 || i - r < 0 ? null : $x(n, r, o - n, i - r)
                );
              },
              clamp: function(e, t, n) {
                var r, o, i, a, u, s, l, c, f, d;
                return (
                  (u = e.x),
                  (s = e.y),
                  (l = e.x + e.w),
                  (c = e.y + e.h),
                  (f = t.x + t.w),
                  (d = t.y + t.h),
                  (r = Ux(0, t.x - u)),
                  (o = Ux(0, t.y - s)),
                  (i = Ux(0, l - f)),
                  (a = Ux(0, c - d)),
                  (u += r),
                  (s += o),
                  n && ((l += r), (c += o), (u -= i), (s -= a)),
                  $x(u, s, (l -= i) - u, (c -= a) - s)
                );
              },
              create: $x,
              fromClientRect: function(e) {
                return $x(e.left, e.top, e.width, e.height);
              }
            },
            Kx = Yt.each,
            Xx = Yt.extend,
            Yx = function() {};
          Yx.extend = Lx = function(e) {
            var t,
              n,
              r,
              o = this.prototype,
              i = function() {
                var e, t, n;
                if (
                  !Ix &&
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
            for (n in ((Ix = !0),
            (t = new this()),
            (Ix = !1),
            e.Mixins &&
              (Kx(e.Mixins, function(t) {
                for (var n in t) "init" !== n && (e[n] = t[n]);
              }),
              o.Mixins && (e.Mixins = o.Mixins.concat(e.Mixins))),
            e.Methods &&
              Kx(e.Methods.split(","), function(t) {
                e[t] = a;
              }),
            e.Properties &&
              Kx(e.Properties.split(","), function(t) {
                var n = "_" + t;
                e[t] = function(e) {
                  return void 0 !== e ? ((this[n] = e), this) : this[n];
                };
              }),
            e.Statics &&
              Kx(e.Statics, function(e, t) {
                i[t] = e;
              }),
            e.Defaults &&
              o.Defaults &&
              (e.Defaults = Xx({}, o.Defaults, e.Defaults)),
            e))
              "function" == typeof (r = e[n]) && o[n]
                ? (t[n] = u(n, r))
                : (t[n] = r);
            return (i.prototype = t), (i.constructor = i), (i.extend = Lx), i;
          };
          var Gx = Math.min,
            Jx = Math.max,
            Qx = Math.round,
            Zx = {
              serialize: function(e) {
                var t = JSON.stringify(e);
                return B(t)
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
            eS = {
              callbacks: {},
              count: 0,
              send: function(e) {
                var t = this,
                  n = ci.DOM,
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
            tS = {
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
                      : setTimeout(r, 10);
                  };
                if (
                  ((e.scope = e.scope || this),
                  (e.success_scope = e.success_scope || e.scope),
                  (e.error_scope = e.error_scope || e.scope),
                  (e.async = !1 !== e.async),
                  (e.data = e.data || ""),
                  tS.fire("beforeInitialize", { settings: e }),
                  (t = pf()))
                ) {
                  if (
                    (t.overrideMimeType && t.overrideMimeType(e.content_type),
                    t.open(e.type || (e.data ? "POST" : "GET"), e.url, e.async),
                    e.crossDomain && (t.withCredentials = !0),
                    e.content_type &&
                      t.setRequestHeader("Content-Type", e.content_type),
                    e.requestheaders &&
                      Yt.each(e.requestheaders, function(e) {
                        t.setRequestHeader(e.key, e.value);
                      }),
                    t.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    (t = tS.fire("beforeSend", { xhr: t, settings: e })
                      .xhr).send(e.data),
                    !e.async)
                  )
                    return r();
                  setTimeout(r, 10);
                }
              }
            };
          Yt.extend(tS, qw);
          var nS,
            rS = Yt.extend,
            oS = function(e) {
              (this.settings = rS({}, e)), (this.count = 0);
            };
          (oS.sendRPC = function(e) {
            return new oS().send(e);
          }),
            (oS.prototype = {
              send: function(e) {
                var t = e.error,
                  n = e.success;
                ((e = rS(this.settings, e)).success = function(r, o) {
                  void 0 === (r = Zx.parse(r)) &&
                    (r = { error: "JSON Parse error." }),
                    r.error
                      ? t.call(e.error_scope || e.scope, r.error, o)
                      : n.call(e.success_scope || e.scope, r.result);
                }),
                  (e.error = function(n, r) {
                    t && t.call(e.error_scope || e.scope, n, r);
                  }),
                  (e.data = Zx.serialize({
                    id: e.id || "c" + this.count++,
                    method: e.method,
                    params: e.params
                  })),
                  (e.content_type = "application/json"),
                  tS.send(e);
              }
            });
          try {
            nS = n.window.localStorage;
          } catch (e) {
            nS = (function() {
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
          var iS = Px,
            aS = {
              geom: { Rect: Wx },
              util: {
                Promise: de,
                Delay: pe,
                Tools: Yt,
                VK: _d,
                URI: ax,
                Class: Yx,
                EventDispatcher: Fw,
                Observable: qw,
                I18n: yi,
                XHR: tS,
                JSON: Zx,
                JSONRequest: oS,
                JSONP: eS,
                LocalStorage: nS,
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
                                var a, u, s, l;
                                if (
                                  ((e = (parseInt(e, 10) || 0) % 360),
                                  (t = parseInt(t, 10) / 100),
                                  (i = parseInt(i, 10) / 100),
                                  (t = Jx(0, Gx(t, 1))),
                                  (i = Jx(0, Gx(i, 1))),
                                  0 !== t)
                                ) {
                                  switch (
                                    ((a = e / 60),
                                    (s =
                                      (u = i * t) *
                                      (1 - Math.abs((a % 2) - 1))),
                                    (l = i - u),
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
                                  (n = Qx(255 * (n + l))),
                                    (r = Qx(255 * (r + l))),
                                    (o = Qx(255 * (o + l)));
                                } else n = r = o = Qx(255 * i);
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
                          (i = Gx((e /= 255), Gx((t /= 255), (n /= 255)))) ===
                          (a = Jx(e, Jx(t, n)))
                            ? { h: 0, s: 0, v: 100 * (o = i) }
                            : ((r = (a - i) / a),
                              (o = a),
                              {
                                h: Qx(
                                  60 *
                                    ((e === i ? 3 : n === i ? 1 : 5) -
                                      (e === i
                                        ? t - n
                                        : n === i
                                        ? e - t
                                        : n - e) /
                                        (a - i))
                                ),
                                s: Qx(100 * r),
                                v: Qx(100 * o)
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
                EventUtils: Ne,
                Sizzle: zt,
                DomQuery: gn,
                TreeWalker: Zr,
                DOMUtils: ci,
                ScriptLoader: gi,
                RangeUtils: Vx,
                Serializer: cg,
                ControlSelection: pg,
                BookmarkManager: hg,
                Selection: gp,
                Event: Ne.Event
              },
              html: {
                Styles: ei,
                Entities: Fo,
                Node: Rl,
                Schema: Qo,
                SaxParser: Il,
                DomParser: ig,
                Writer: Wl,
                Serializer: Kl
              },
              Env: fe,
              AddOnManager: wi,
              Annotator: Nl,
              Formatter: jm,
              UndoManager: uh,
              EditorCommands: Iw,
              WindowManager: of,
              NotificationManager: rf,
              EditorObservable: Gw,
              Shortcuts: tx,
              Editor: dx,
              FocusManager: px,
              EditorManager: Px,
              DOM: ci.DOM,
              ScriptLoader: gi.ScriptLoader,
              PluginManager: wi.PluginManager,
              ThemeManager: wi.ThemeManager,
              IconManager: hf,
              trim: Yt.trim,
              isArray: Yt.isArray,
              is: Yt.is,
              toArray: Yt.toArray,
              makeMap: Yt.makeMap,
              each: Yt.each,
              map: Yt.map,
              grep: Yt.grep,
              inArray: Yt.inArray,
              extend: Yt.extend,
              create: Yt.create,
              walk: Yt.walk,
              createNS: Yt.createNS,
              resolve: Yt.resolve,
              explode: Yt.explode,
              _addCacheSuffix: Yt._addCacheSuffix,
              isOpera: fe.opera,
              isWebKit: fe.webkit,
              isIE: fe.ie,
              isGecko: fe.gecko,
              isMac: fe.mac
            },
            uS = (iS = Yt.extend(iS, aS));
          !(function(e) {
            (window.tinymce = e), (window.tinyMCE = e);
          })(uS),
            (function(t) {
              try {
                e.exports = t;
              } catch (e) {}
            })(uS);
        })(window);
      }.call(this, n(11).setImmediate));
    },
    function(e, t, n) {
      (function(e) {
        var r =
            (void 0 !== e && e) ||
            ("undefined" != typeof self && self) ||
            window,
          o = Function.prototype.apply;
        function i(e, t) {
          (this._id = e), (this._clearFn = t);
        }
        (t.setTimeout = function() {
          return new i(o.call(setTimeout, r, arguments), clearTimeout);
        }),
          (t.setInterval = function() {
            return new i(o.call(setInterval, r, arguments), clearInterval);
          }),
          (t.clearTimeout = t.clearInterval = function(e) {
            e && e.close();
          }),
          (i.prototype.unref = i.prototype.ref = function() {}),
          (i.prototype.close = function() {
            this._clearFn.call(r, this._id);
          }),
          (t.enroll = function(e, t) {
            clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
          }),
          (t.unenroll = function(e) {
            clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
          }),
          (t._unrefActive = t.active = function(e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 &&
              (e._idleTimeoutId = setTimeout(function() {
                e._onTimeout && e._onTimeout();
              }, t));
          }),
          n(12),
          (t.setImmediate =
            ("undefined" != typeof self && self.setImmediate) ||
            (void 0 !== e && e.setImmediate) ||
            (this && this.setImmediate)),
          (t.clearImmediate =
            ("undefined" != typeof self && self.clearImmediate) ||
            (void 0 !== e && e.clearImmediate) ||
            (this && this.clearImmediate));
      }.call(this, n(4)));
    },
    function(e, t, n) {
      (function(e, t) {
        !(function(e, n) {
          "use strict";
          if (!e.setImmediate) {
            var r,
              o,
              i,
              a,
              u,
              s = 1,
              l = {},
              c = !1,
              f = e.document,
              d = Object.getPrototypeOf && Object.getPrototypeOf(e);
            (d = d && d.setTimeout ? d : e),
              "[object process]" === {}.toString.call(e.process)
                ? (r = function(e) {
                    t.nextTick(function() {
                      m(e);
                    });
                  })
                : !(function() {
                    if (e.postMessage && !e.importScripts) {
                      var t = !0,
                        n = e.onmessage;
                      return (
                        (e.onmessage = function() {
                          t = !1;
                        }),
                        e.postMessage("", "*"),
                        (e.onmessage = n),
                        t
                      );
                    }
                  })()
                ? e.MessageChannel
                  ? (((i = new MessageChannel()).port1.onmessage = function(e) {
                      m(e.data);
                    }),
                    (r = function(e) {
                      i.port2.postMessage(e);
                    }))
                  : f && "onreadystatechange" in f.createElement("script")
                  ? ((o = f.documentElement),
                    (r = function(e) {
                      var t = f.createElement("script");
                      (t.onreadystatechange = function() {
                        m(e),
                          (t.onreadystatechange = null),
                          o.removeChild(t),
                          (t = null);
                      }),
                        o.appendChild(t);
                    }))
                  : (r = function(e) {
                      setTimeout(m, 0, e);
                    })
                : ((a = "setImmediate$" + Math.random() + "$"),
                  (u = function(t) {
                    t.source === e &&
                      "string" == typeof t.data &&
                      0 === t.data.indexOf(a) &&
                      m(+t.data.slice(a.length));
                  }),
                  e.addEventListener
                    ? e.addEventListener("message", u, !1)
                    : e.attachEvent("onmessage", u),
                  (r = function(t) {
                    e.postMessage(a + t, "*");
                  })),
              (d.setImmediate = function(e) {
                "function" != typeof e && (e = new Function("" + e));
                for (
                  var t = new Array(arguments.length - 1), n = 0;
                  n < t.length;
                  n++
                )
                  t[n] = arguments[n + 1];
                var o = { callback: e, args: t };
                return (l[s] = o), r(s), s++;
              }),
              (d.clearImmediate = h);
          }
          function h(e) {
            delete l[e];
          }
          function m(e) {
            if (c) setTimeout(m, 0, e);
            else {
              var t = l[e];
              if (t) {
                c = !0;
                try {
                  !(function(e) {
                    var t = e.callback,
                      r = e.args;
                    switch (r.length) {
                      case 0:
                        t();
                        break;
                      case 1:
                        t(r[0]);
                        break;
                      case 2:
                        t(r[0], r[1]);
                        break;
                      case 3:
                        t(r[0], r[1], r[2]);
                        break;
                      default:
                        t.apply(n, r);
                    }
                  })(t);
                } finally {
                  h(e), (c = !1);
                }
              }
            }
          }
        })("undefined" == typeof self ? (void 0 === e ? this : e) : self);
      }.call(this, n(4), n(13)));
    },
    function(e, t) {
      var n,
        r,
        o = (e.exports = {});
      function i() {
        throw new Error("setTimeout has not been defined");
      }
      function a() {
        throw new Error("clearTimeout has not been defined");
      }
      function u(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout)
          return (n = setTimeout), setTimeout(e, 0);
        try {
          return n(e, 0);
        } catch (t) {
          try {
            return n.call(null, e, 0);
          } catch (t) {
            return n.call(this, e, 0);
          }
        }
      }
      !(function() {
        try {
          n = "function" == typeof setTimeout ? setTimeout : i;
        } catch (e) {
          n = i;
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : a;
        } catch (e) {
          r = a;
        }
      })();
      var s,
        l = [],
        c = !1,
        f = -1;
      function d() {
        c &&
          s &&
          ((c = !1), s.length ? (l = s.concat(l)) : (f = -1), l.length && h());
      }
      function h() {
        if (!c) {
          var e = u(d);
          c = !0;
          for (var t = l.length; t; ) {
            for (s = l, l = []; ++f < t; ) s && s[f].run();
            (f = -1), (t = l.length);
          }
          (s = null),
            (c = !1),
            (function(e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === a || !r) && clearTimeout)
                return (r = clearTimeout), clearTimeout(e);
              try {
                r(e);
              } catch (t) {
                try {
                  return r.call(null, e);
                } catch (t) {
                  return r.call(this, e);
                }
              }
            })(e);
        }
      }
      function m(e, t) {
        (this.fun = e), (this.array = t);
      }
      function g() {}
      (o.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        l.push(new m(e, t)), 1 !== l.length || c || u(h);
      }),
        (m.prototype.run = function() {
          this.fun.apply(null, this.array);
        }),
        (o.title = "browser"),
        (o.browser = !0),
        (o.env = {}),
        (o.argv = []),
        (o.version = ""),
        (o.versions = {}),
        (o.on = g),
        (o.addListener = g),
        (o.once = g),
        (o.off = g),
        (o.removeListener = g),
        (o.removeAllListeners = g),
        (o.emit = g),
        (o.prependListener = g),
        (o.prependOnceListener = g),
        (o.listeners = function(e) {
          return [];
        }),
        (o.binding = function(e) {
          throw new Error("process.binding is not supported");
        }),
        (o.cwd = function() {
          return "/";
        }),
        (o.chdir = function(e) {
          throw new Error("process.chdir is not supported");
        }),
        (o.umask = function() {
          return 0;
        });
    }
  ]
]);
