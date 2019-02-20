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
              (0, n(10).default)("0b99bd7f", r, !1, {});
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
              "\n.el-single-upload {\n  position: relative;\n  width: 300px;\n  height: 90px;\n  display: inline-block;\n}\n.el-single-upload .view {\n  line-height: 1;\n  display: block;\n  border: 1px solid #d9d9d9;\n  width: calc(100% - 2px);\n  height: 100%;\n}\n.el-single-upload .upload {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  position: relative;\n  line-height: 1;\n}\n.el-single-upload .el-upload-dragger {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n}\n.el-single-upload .el-upload-dragger .el-icon-upload {\n  font-size: 24px;\n  margin: 0 0 0 2px;\n  line-height: normal;\n}\n.el-single-upload.input .view {\n  height: calc(100% - 40px);\n}\n.el-single-upload.input .upload {\n  height: calc(100% - 40px);\n}\n.el-single-upload .el-upload__input {\n  display: none !important;\n}\n.el-single-upload .el-upload {\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.el-single-upload .el-upload:hover {\n  border-color: #20a0ff;\n}\n.el-single-upload .upload.update {\n  position: absolute;\n  top: 0;\n  right: -28px;\n  z-index: 2;\n  width: auto;\n  height: auto;\n}\n.el-single-upload .upload.update .el-upload {\n  padding: 0 1px;\n  width: auto;\n  height: auto;\n  border-left: none;\n  border-radius: 0;\n}\n.el-single-upload .upload-btn {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 28px;\n}\n.el-single-upload .el-icon-upload {\n  font-size: 24px;\n  color: #8c939d;\n  background: #ffffff;\n}\n.el-single-upload .el-icon-upload:hover {\n  color: #20a0ff;\n}\n.el-single-upload .icon-delete {\n  position: absolute;\n  top: 28px;\n  right: -28px;\n  font-size: 24px !important;\n  cursor: pointer;\n  color: #8c939d;\n  border: 1px dashed #d9d9d9;\n  border-left: none;\n  padding: 0 1px;\n  line-height: 1;\n}\n.el-single-upload .icon-delete:hover {\n  border-color: #20a0ff;\n  color: #20a0ff;\n}\n.el-single-upload .icon-delete .el-icon-delete {\n  margin-left: 2px;\n}\n.el-single-upload .tip {\n  padding: 10px 0;\n  text-align: center;\n}\n.el-single-upload.image,\n.el-single-upload.video {\n  width: 200px;\n  height: 200px;\n}\n.el-single-upload.image .img,\n.el-single-upload.video .img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n",
              ""
            ]);
          },
          function(e, t) {
            e.exports = function(e) {
              var t = [];
              return (
                (t.toString = function() {
                  return this.map(function(t) {
                    var n = (function(e, t) {
                      var n = e[1] || "",
                        r = e[3];
                      if (!r) return n;
                      if (t && "function" == typeof btoa) {
                        var o = (function(e) {
                            return (
                              "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                              btoa(
                                unescape(encodeURIComponent(JSON.stringify(e)))
                              ) +
                              " */"
                            );
                          })(r),
                          i = r.sources.map(function(e) {
                            return "/*# sourceURL=" + r.sourceRoot + e + " */";
                          });
                        return [n]
                          .concat(i)
                          .concat([o])
                          .join("\n");
                      }
                      return [n].join("\n");
                    })(t, e);
                    return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
                  }).join("");
                }),
                (t.i = function(e, n) {
                  "string" == typeof e && (e = [[null, e, ""]]);
                  for (var r = {}, o = 0; o < this.length; o++) {
                    var i = this[o][0];
                    "number" == typeof i && (r[i] = !0);
                  }
                  for (o = 0; o < e.length; o++) {
                    var a = e[o];
                    ("number" == typeof a[0] && r[a[0]]) ||
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
                            t.setUrl(t.urlInternal);
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
                return p;
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
              m =
                "undefined" != typeof navigator &&
                /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
            function p(e, t, n, o) {
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
            function h() {
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
              if (m) {
                var o = s++;
                (r = u || (u = h())),
                  (t = y.bind(null, r, o, !1)),
                  (n = y.bind(null, r, o, !0));
              } else
                (r = h()),
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
            var b = (function() {
              var e = [];
              return function(t, n) {
                return (e[t] = n), e.filter(Boolean).join("\n");
              };
            })();
            function y(e, t, n, r) {
              var o = n ? "" : r.css;
              if (e.styleSheet) e.styleSheet.cssText = b(t, o);
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
                      (new RegExp("^" + t).test(e.type) ||
                        new RegExp("^" + t).test(i))
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
                    ((r.message = "只能上传" + u + "!"),
                    (r.error = 1),
                    (r.validate = !1)),
                  !s)
                ) {
                  var c = n >= 1024 ? n / 1024 + "M" : n + "KB";
                  (r.message = "上传" + u + "大小不能超过" + c + "!"),
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
                        (i.a.EditorManager.baseURL = this.url),
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
        !(function() {
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
            m,
            p,
            g,
            h,
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
            x = o(!1),
            w = o(!0),
            S = x,
            E = w,
            N = function() {
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
                  isNone: E,
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
                  map: N,
                  ap: N,
                  each: function() {},
                  bind: N,
                  flatten: N,
                  exists: S,
                  forall: E,
                  filter: N,
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
                  isSome: E,
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
                    return t.fold(N, function(t) {
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
            _ = {
              some: T,
              none: N,
              from: function(e) {
                return null == e ? k : T(e);
              }
            },
            B = function(e) {
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
            A = B("string"),
            R = B("object"),
            O = B("array"),
            D = B("null"),
            P = B("boolean"),
            I = B("function"),
            L = B("number"),
            M =
              void 0 === (u = Array.prototype.indexOf)
                ? function(e, t) {
                    return W(e, t);
                  }
                : function(e, t) {
                    return u.call(e, t);
                  },
            F = function(e, t) {
              return M(e, t) > -1;
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
            z = function(e, t) {
              for (var n = [], r = [], o = 0, i = e.length; o < i; o++) {
                var a = e[o];
                (t(a, o, e) ? n : r).push(a);
              }
              return { pass: n, fail: r };
            },
            V = function(e, t) {
              for (var n = [], r = 0, o = e.length; r < o; r++) {
                var i = e[r];
                t(i, r, e) && n.push(i);
              }
              return n;
            },
            H = function(e, t, n) {
              return (
                j(e, function(e) {
                  n = t(n, e);
                }),
                n
              );
            },
            q = function(e, t) {
              for (var n = 0, r = e.length; n < r; n++) {
                var o = e[n];
                if (t(o, n, e)) return _.some(o);
              }
              return _.none();
            },
            $ = function(e, t) {
              for (var n = 0, r = e.length; n < r; n++)
                if (t(e[n], n, e)) return _.some(n);
              return _.none();
            },
            W = function(e, t) {
              for (var n = 0, r = e.length; n < r; ++n)
                if (e[n] === t) return n;
              return -1;
            },
            K = Array.prototype.push,
            X = function(e, t) {
              return (function(e) {
                for (var t = [], n = 0, r = e.length; n < r; ++n) {
                  if (!Array.prototype.isPrototypeOf(e[n]))
                    throw new Error(
                      "Arr.flatten item " + n + " was not an array, input: " + e
                    );
                  K.apply(t, e[n]);
                }
                return t;
              })(U(e, t));
            },
            Y = function(e, t) {
              for (var n = 0, r = e.length; n < r; ++n)
                if (!0 !== t(e[n], n, e)) return !1;
              return !0;
            },
            G = Array.prototype.slice,
            J = function(e, t) {
              return V(e, function(e) {
                return !F(t, e);
              });
            },
            Q = function(e) {
              return 0 === e.length ? _.none() : _.some(e[0]);
            },
            Z = function(e) {
              return 0 === e.length ? _.none() : _.some(e[e.length - 1]);
            },
            ee = I(Array.from)
              ? Array.from
              : function(e) {
                  return G.call(e);
                },
            te =
              "undefined" != typeof window
                ? window
                : Function("return this;")(),
            ne = function(e, t) {
              return (function(e, t) {
                for (
                  var n = null != t ? t : te, r = 0;
                  r < e.length && null != n;
                  ++r
                )
                  n = n[e[r]];
                return n;
              })(e.split("."), t);
            },
            re = {
              getOrDie: function(e, t) {
                var n = (function(e, t) {
                  return ne(e, t);
                })(e, t);
                if (null == n) throw e + " not available on this browser";
                return n;
              }
            },
            oe = function() {
              return re.getOrDie("URL");
            },
            ie = {
              createObjectURL: function(e) {
                return oe().createObjectURL(e);
              },
              revokeObjectURL: function(e) {
                oe().revokeObjectURL(e);
              }
            },
            ae = navigator,
            ue = ae.userAgent,
            se = function(e) {
              return "matchMedia" in window && matchMedia(e).matches;
            };
          (g = /Android/.test(ue)),
            (c =
              (c =
                !(s = /WebKit/.test(ue)) &&
                /MSIE/gi.test(ue) &&
                /Explorer/gi.test(ae.appName)) && /MSIE (\w+)\./.exec(ue)[1]),
            (l =
              -1 !== ue.indexOf("Trident/") &&
              (-1 !== ue.indexOf("rv:") ||
                -1 !== ae.appName.indexOf("Netscape")) &&
              11),
            (f = -1 !== ue.indexOf("Edge/") && !c && !l && 12),
            (c = c || l || f),
            (d = !s && !l && /Gecko/.test(ue)),
            (m = -1 !== ue.indexOf("Mac")),
            (p = /(iPad|iPhone)/.test(ue)),
            (h =
              "FormData" in window &&
              "FileReader" in window &&
              "URL" in window &&
              !!ie.createObjectURL),
            (v = se("only screen and (max-device-width: 480px)") && (g || p)),
            (b = se("only screen and (min-width: 800px)") && (g || p)),
            (y = -1 !== ue.indexOf("Windows Phone")),
            f && (s = !1);
          var ce,
            le = {
              opera: !1,
              webkit: s,
              ie: c,
              gecko: d,
              mac: m,
              iOS: p,
              android: g,
              contentEditable:
                !p ||
                h ||
                parseInt(ue.match(/AppleWebKit\/(\d*)/)[1], 10) >= 534,
              transparentSrc:
                "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
              caretAfter: 8 !== c,
              range: window.getSelection && "Range" in window,
              documentMode: c && !f ? document.documentMode || 7 : 10,
              fileApi: h,
              ceFalse: !1 === c || c > 8,
              cacheSuffix: null,
              container: null,
              overrideViewPort: null,
              experimentalShadowDom: !1,
              canHaveCSP: !1 === c || c > 11,
              desktop: !v && !b,
              windowsPhone: y
            },
            fe = window.Promise
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
                        for (var r = 0, o = e.length; r < o; r++)
                          e[r].then(t, n);
                      });
                    }),
                    r
                  );
                })(),
            de = function(e, t) {
              return "number" != typeof t && (t = 0), setTimeout(e, t);
            },
            me = function(e, t) {
              return "number" != typeof t && (t = 1), setInterval(e, t);
            },
            pe = function(e, t) {
              var n, r;
              return (
                ((r = function() {
                  var r = arguments;
                  clearTimeout(n),
                    (n = de(function() {
                      e.apply(this, r);
                    }, t));
                }).stop = function() {
                  clearTimeout(n);
                }),
                r
              );
            },
            ge = {
              requestAnimationFrame: function(e, t) {
                ce
                  ? ce.then(e)
                  : (ce = new fe(function(e) {
                      t || (t = document.body),
                        (function(e, t) {
                          var n,
                            r = window.requestAnimationFrame,
                            o = ["ms", "moz", "webkit"];
                          for (n = 0; n < o.length && !r; n++)
                            r = window[o[n] + "RequestAnimationFrame"];
                          r ||
                            (r = function(e) {
                              window.setTimeout(e, 0);
                            }),
                            r(e, t);
                        })(e, t);
                    }).then(e));
              },
              setTimeout: de,
              setInterval: me,
              setEditorTimeout: function(e, t, n) {
                return de(function() {
                  e.removed || t();
                }, n);
              },
              setEditorInterval: function(e, t, n) {
                var r;
                return (r = me(function() {
                  e.removed ? clearInterval(r) : t();
                }, n));
              },
              debounce: pe,
              throttle: pe,
              clearInterval: function(e) {
                return clearInterval(e);
              },
              clearTimeout: function(e) {
                return clearTimeout(e);
              }
            },
            he = /^(?:mouse|contextmenu)|click/,
            ve = {
              keyLocation: 1,
              layerX: 1,
              layerY: 1,
              returnValue: 1,
              webkitMovementX: 1,
              webkitMovementY: 1,
              keyIdentifier: 1
            },
            be = function() {
              return !1;
            },
            ye = function() {
              return !0;
            },
            Ce = function(e, t, n, r) {
              e.addEventListener
                ? e.addEventListener(t, n, r || !1)
                : e.attachEvent && e.attachEvent("on" + t, n);
            },
            xe = function(e, t, n, r) {
              e.removeEventListener
                ? e.removeEventListener(t, n, r || !1)
                : e.detachEvent && e.detachEvent("on" + t, n);
            },
            we = function(e, t) {
              var n,
                r = t || {};
              for (n in e) ve[n] || (r[n] = e[n]);
              if (
                (r.target || (r.target = r.srcElement || document),
                le.experimentalShadowDom &&
                  (r.target = (function(e, t) {
                    if (e.composedPath) {
                      var n = e.composedPath();
                      if (n && n.length > 0) return n[0];
                    }
                    return t;
                  })(e, r.target)),
                e &&
                  he.test(e.type) &&
                  void 0 === e.pageX &&
                  void 0 !== e.clientX)
              ) {
                var o = r.target.ownerDocument || document,
                  i = o.documentElement,
                  a = o.body;
                (r.pageX =
                  e.clientX +
                  ((i && i.scrollLeft) || (a && a.scrollLeft) || 0) -
                  ((i && i.clientLeft) || (a && a.clientLeft) || 0)),
                  (r.pageY =
                    e.clientY +
                    ((i && i.scrollTop) || (a && a.scrollTop) || 0) -
                    ((i && i.clientTop) || (a && a.clientTop) || 0));
              }
              return (
                (r.preventDefault = function() {
                  (r.isDefaultPrevented = ye),
                    e &&
                      (e.preventDefault
                        ? e.preventDefault()
                        : (e.returnValue = !1));
                }),
                (r.stopPropagation = function() {
                  (r.isPropagationStopped = ye),
                    e &&
                      (e.stopPropagation
                        ? e.stopPropagation()
                        : (e.cancelBubble = !0));
                }),
                (r.stopImmediatePropagation = function() {
                  (r.isImmediatePropagationStopped = ye), r.stopPropagation();
                }),
                !1 ===
                  (function(e) {
                    return (
                      e.isDefaultPrevented === ye || e.isDefaultPrevented === be
                    );
                  })(r) &&
                  ((r.isDefaultPrevented = be),
                  (r.isPropagationStopped = be),
                  (r.isImmediatePropagationStopped = be)),
                void 0 === r.metaKey && (r.metaKey = !1),
                r
              );
            },
            Se = function(e, t, n) {
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
                      return void ge.setTimeout(s);
                    }
                    a();
                  };
                !r.addEventListener || (le.ie && le.ie < 11)
                  ? (Ce(r, "readystatechange", u),
                    r.documentElement.doScroll && e.self === e.top && s())
                  : i()
                  ? a()
                  : Ce(e, "DOMContentLoaded", a),
                  Ce(e, "load", a);
              }
            },
            Ee = function() {
              var e,
                t,
                n,
                r,
                o,
                i = this,
                a = {};
              (t = "mce-data-" + (+new Date()).toString(32)),
                (r = "onmouseenter" in document.documentElement),
                (n = "onfocusin" in document.documentElement),
                (o = { mouseenter: "mouseover", mouseleave: "mouseout" }),
                (e = 1),
                (i.domLoaded = !1),
                (i.events = a);
              var u = function(e, t) {
                var n,
                  r,
                  o,
                  i,
                  u = a[t];
                if ((n = u && u[e.type]))
                  for (r = 0, o = n.length; r < o; r++)
                    if (
                      ((i = n[r]) &&
                        !1 === i.func.call(i.scope, e) &&
                        e.preventDefault(),
                      e.isImmediatePropagationStopped())
                    )
                      return;
              };
              (i.bind = function(s, c, l, f) {
                var d,
                  m,
                  p,
                  g,
                  h,
                  v,
                  b,
                  y = window,
                  C = function(e) {
                    u(we(e || y.event), d);
                  };
                if (s && 3 !== s.nodeType && 8 !== s.nodeType) {
                  for (
                    s[t] ? (d = s[t]) : ((d = e++), (s[t] = d), (a[d] = {})),
                      f = f || s,
                      p = (c = c.split(" ")).length;
                    p--;

                  )
                    (v = C),
                      (h = b = !1),
                      "DOMContentLoaded" === (g = c[p]) && (g = "ready"),
                      i.domLoaded &&
                      "ready" === g &&
                      "complete" === s.readyState
                        ? l.call(f, we({ type: g }))
                        : (r ||
                            ((h = o[g]) &&
                              (v = function(e) {
                                var t, n;
                                if (
                                  ((t = e.currentTarget),
                                  (n = e.relatedTarget) && t.contains)
                                )
                                  n = t.contains(n);
                                else for (; n && n !== t; ) n = n.parentNode;
                                n ||
                                  (((e = we(e || y.event)).type =
                                    "mouseout" === e.type
                                      ? "mouseleave"
                                      : "mouseenter"),
                                  (e.target = t),
                                  u(e, d));
                              })),
                          n ||
                            ("focusin" !== g && "focusout" !== g) ||
                            ((b = !0),
                            (h = "focusin" === g ? "focus" : "blur"),
                            (v = function(e) {
                              ((e = we(e || y.event)).type =
                                "focus" === e.type ? "focusin" : "focusout"),
                                u(e, d);
                            })),
                          (m = a[d][g])
                            ? "ready" === g && i.domLoaded
                              ? l({ type: g })
                              : m.push({ func: l, scope: f })
                            : ((a[d][g] = m = [{ func: l, scope: f }]),
                              (m.fakeName = h),
                              (m.capture = b),
                              (m.nativeHandler = v),
                              "ready" === g
                                ? Se(s, v, i)
                                : Ce(s, h || g, v, b)));
                  return (s = m = 0), l;
                }
              }),
                (i.unbind = function(e, n, r) {
                  var o, u, s, c, l, f;
                  if (!e || 3 === e.nodeType || 8 === e.nodeType) return i;
                  if ((o = e[t])) {
                    if (((f = a[o]), n)) {
                      for (s = (n = n.split(" ")).length; s--; )
                        if ((u = f[(l = n[s])])) {
                          if (r)
                            for (c = u.length; c--; )
                              if (u[c].func === r) {
                                var d = u.nativeHandler,
                                  m = u.fakeName,
                                  p = u.capture;
                                ((u = u
                                  .slice(0, c)
                                  .concat(u.slice(c + 1))).nativeHandler = d),
                                  (u.fakeName = m),
                                  (u.capture = p),
                                  (f[l] = u);
                              }
                          (r && 0 !== u.length) ||
                            (delete f[l],
                            xe(e, u.fakeName || l, u.nativeHandler, u.capture));
                        }
                    } else {
                      for (l in f)
                        (u = f[l]),
                          xe(e, u.fakeName || l, u.nativeHandler, u.capture);
                      f = {};
                    }
                    for (l in f) return i;
                    delete a[o];
                    try {
                      delete e[t];
                    } catch (n) {
                      e[t] = null;
                    }
                  }
                  return i;
                }),
                (i.fire = function(e, n, r) {
                  var o;
                  if (!e || 3 === e.nodeType || 8 === e.nodeType) return i;
                  ((r = we(null, r)).type = n), (r.target = e);
                  do {
                    (o = e[t]) && u(r, o),
                      (e =
                        e.parentNode ||
                        e.ownerDocument ||
                        e.defaultView ||
                        e.parentWindow);
                  } while (e && !r.isPropagationStopped());
                  return i;
                }),
                (i.clean = function(e) {
                  var n,
                    r,
                    o = i.unbind;
                  if (!e || 3 === e.nodeType || 8 === e.nodeType) return i;
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
                  return i;
                }),
                (i.destroy = function() {
                  a = {};
                }),
                (i.cancel = function(e) {
                  return (
                    e && (e.preventDefault(), e.stopImmediatePropagation()), !1
                  );
                });
            };
          (Ee.Event = new Ee()), Ee.Event.bind(window, "ready", function() {});
          var Ne,
            ke,
            Te,
            _e,
            Be,
            Ae,
            Re,
            Oe,
            De,
            Pe,
            Ie,
            Le,
            Me,
            Fe,
            Ue,
            je,
            ze,
            Ve,
            He = "sizzle" + -new Date(),
            qe = window.document,
            $e = 0,
            We = 0,
            Ke = kt(),
            Xe = kt(),
            Ye = kt(),
            Ge = function(e, t) {
              return e === t && (Ie = !0), 0;
            },
            Je = "undefined",
            Qe = 1 << 31,
            Ze = {}.hasOwnProperty,
            et = [],
            tt = et.pop,
            nt = et.push,
            rt = et.push,
            ot = et.slice,
            it =
              et.indexOf ||
              function(e) {
                for (var t = 0, n = this.length; t < n; t++)
                  if (this[t] === e) return t;
                return -1;
              },
            at = "[\\x20\\t\\r\\n\\f]",
            ut = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            st =
              "\\[" +
              at +
              "*(" +
              ut +
              ")(?:" +
              at +
              "*([*^$|!~]?=)" +
              at +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              ut +
              "))|)" +
              at +
              "*\\]",
            ct =
              ":(" +
              ut +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              st +
              ")*)|.*)\\)|)",
            lt = new RegExp(
              "^" + at + "+|((?:^|[^\\\\])(?:\\\\.)*)" + at + "+$",
              "g"
            ),
            ft = new RegExp("^" + at + "*," + at + "*"),
            dt = new RegExp("^" + at + "*([>+~]|" + at + ")" + at + "*"),
            mt = new RegExp("=" + at + "*([^\\]'\"]*?)" + at + "*\\]", "g"),
            pt = new RegExp(ct),
            gt = new RegExp("^" + ut + "$"),
            ht = {
              ID: new RegExp("^#(" + ut + ")"),
              CLASS: new RegExp("^\\.(" + ut + ")"),
              TAG: new RegExp("^(" + ut + "|[*])"),
              ATTR: new RegExp("^" + st),
              PSEUDO: new RegExp("^" + ct),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  at +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  at +
                  "*(?:([+-]|)" +
                  at +
                  "*(\\d+)|))" +
                  at +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp(
                "^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$",
                "i"
              ),
              needsContext: new RegExp(
                "^" +
                  at +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  at +
                  "*((?:-\\d)?\\d*)" +
                  at +
                  "*\\)|)(?=[^-]|$)",
                "i"
              )
            },
            vt = /^(?:input|select|textarea|button)$/i,
            bt = /^h\d$/i,
            yt = /^[^{]+\{\s*\[native \w/,
            Ct = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            xt = /[+~]/,
            wt = /'|\\/g,
            St = new RegExp(
              "\\\\([\\da-f]{1,6}" + at + "?|(" + at + ")|.)",
              "ig"
            ),
            Et = function(e, t, n) {
              var r = "0x" + t - 65536;
              return r != r || n
                ? t
                : r < 0
                ? String.fromCharCode(r + 65536)
                : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
            };
          try {
            rt.apply((et = ot.call(qe.childNodes)), qe.childNodes),
              et[qe.childNodes.length].nodeType;
          } catch (e) {
            rt = {
              apply: et.length
                ? function(e, t) {
                    nt.apply(e, ot.call(t));
                  }
                : function(e, t) {
                    for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                    e.length = n - 1;
                  }
            };
          }
          var Nt = function(e, t, n, r) {
            var o, i, a, u, s, c, l, f, d, m;
            if (
              ((t ? t.ownerDocument || t : qe) !== Me && Le(t),
              (n = n || []),
              !e || "string" != typeof e)
            )
              return n;
            if (1 !== (u = (t = t || Me).nodeType) && 9 !== u) return [];
            if (Ue && !r) {
              if ((o = Ct.exec(e)))
                if ((a = o[1])) {
                  if (9 === u) {
                    if (!(i = t.getElementById(a)) || !i.parentNode) return n;
                    if (i.id === a) return n.push(i), n;
                  } else if (
                    t.ownerDocument &&
                    (i = t.ownerDocument.getElementById(a)) &&
                    Ve(t, i) &&
                    i.id === a
                  )
                    return n.push(i), n;
                } else {
                  if (o[2]) return rt.apply(n, t.getElementsByTagName(e)), n;
                  if ((a = o[3]) && ke.getElementsByClassName)
                    return rt.apply(n, t.getElementsByClassName(a)), n;
                }
              if (ke.qsa && (!je || !je.test(e))) {
                if (
                  ((f = l = He),
                  (d = t),
                  (m = 9 === u && e),
                  1 === u && "object" !== t.nodeName.toLowerCase())
                ) {
                  for (
                    c = Ae(e),
                      (l = t.getAttribute("id"))
                        ? (f = l.replace(wt, "\\$&"))
                        : t.setAttribute("id", f),
                      f = "[id='" + f + "'] ",
                      s = c.length;
                    s--;

                  )
                    c[s] = f + Pt(c[s]);
                  (d = (xt.test(e) && Ot(t.parentNode)) || t),
                    (m = c.join(","));
                }
                if (m)
                  try {
                    return rt.apply(n, d.querySelectorAll(m)), n;
                  } catch (e) {
                  } finally {
                    l || t.removeAttribute("id");
                  }
              }
            }
            return Oe(e.replace(lt, "$1"), t, n, r);
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
            return (e[He] = !0), e;
          }
          function _t(e, t) {
            var n = t && e,
              r =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                (~t.sourceIndex || Qe) - (~e.sourceIndex || Qe);
            if (r) return r;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function Bt(e) {
            return function(t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
          }
          function At(e) {
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
          function Ot(e) {
            return e && typeof e.getElementsByTagName !== Je && e;
          }
          for (Ne in ((ke = Nt.support = {}),
          (Be = Nt.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
          }),
          (Le = Nt.setDocument = function(e) {
            var t,
              n = e ? e.ownerDocument || e : qe,
              r = n.defaultView;
            return n !== Me && 9 === n.nodeType && n.documentElement
              ? ((Me = n),
                (Fe = n.documentElement),
                (Ue = !Be(n)),
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
                          Le();
                        },
                        !1
                      )
                    : r.attachEvent &&
                      r.attachEvent("onunload", function() {
                        Le();
                      })),
                (ke.attributes = !0),
                (ke.getElementsByTagName = !0),
                (ke.getElementsByClassName = yt.test(n.getElementsByClassName)),
                (ke.getById = !0),
                (Te.find.ID = function(e, t) {
                  if (typeof t.getElementById !== Je && Ue) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : [];
                  }
                }),
                (Te.filter.ID = function(e) {
                  var t = e.replace(St, Et);
                  return function(e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (Te.find.TAG = ke.getElementsByTagName
                  ? function(e, t) {
                      if (typeof t.getElementsByTagName !== Je)
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
                    if (Ue) return t.getElementsByClassName(e);
                  }),
                (ze = []),
                (je = []),
                (ke.disconnectedMatch = !0),
                (je = je.length && new RegExp(je.join("|"))),
                (ze = ze.length && new RegExp(ze.join("|"))),
                (t = yt.test(Fe.compareDocumentPosition)),
                (Ve =
                  t || yt.test(Fe.contains)
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
                (Ge = t
                  ? function(e, t) {
                      if (e === t) return (Ie = !0), 0;
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
                          ? e === n || (e.ownerDocument === qe && Ve(qe, e))
                            ? -1
                            : t === n || (t.ownerDocument === qe && Ve(qe, t))
                            ? 1
                            : Pe
                            ? it.call(Pe, e) - it.call(Pe, t)
                            : 0
                          : 4 & r
                          ? -1
                          : 1)
                      );
                    }
                  : function(e, t) {
                      if (e === t) return (Ie = !0), 0;
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
                          : Pe
                          ? it.call(Pe, e) - it.call(Pe, t)
                          : 0;
                      if (i === a) return _t(e, t);
                      for (r = e; (r = r.parentNode); ) u.unshift(r);
                      for (r = t; (r = r.parentNode); ) s.unshift(r);
                      for (; u[o] === s[o]; ) o++;
                      return o
                        ? _t(u[o], s[o])
                        : u[o] === qe
                        ? -1
                        : s[o] === qe
                        ? 1
                        : 0;
                    }),
                n)
              : Me;
          }),
          (Nt.matches = function(e, t) {
            return Nt(e, null, null, t);
          }),
          (Nt.matchesSelector = function(e, t) {
            if (
              ((e.ownerDocument || e) !== Me && Le(e),
              (t = t.replace(mt, "='$1']")),
              ke.matchesSelector &&
                Ue &&
                (!ze || !ze.test(t)) &&
                (!je || !je.test(t)))
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
            return Nt(t, Me, null, [e]).length > 0;
          }),
          (Nt.contains = function(e, t) {
            return (e.ownerDocument || e) !== Me && Le(e), Ve(e, t);
          }),
          (Nt.attr = function(e, t) {
            (e.ownerDocument || e) !== Me && Le(e);
            var n = Te.attrHandle[t.toLowerCase()],
              r =
                n && Ze.call(Te.attrHandle, t.toLowerCase())
                  ? n(e, t, !Ue)
                  : void 0;
            return void 0 !== r
              ? r
              : ke.attributes || !Ue
              ? e.getAttribute(t)
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
          }),
          (Nt.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (Nt.uniqueSort = function(e) {
            var t,
              n = [],
              r = 0,
              o = 0;
            if (
              ((Ie = !ke.detectDuplicates),
              (Pe = !ke.sortStable && e.slice(0)),
              e.sort(Ge),
              Ie)
            ) {
              for (; (t = e[o++]); ) t === e[o] && (r = n.push(o));
              for (; r--; ) e.splice(n[r], 1);
            }
            return (Pe = null), e;
          }),
          (_e = Nt.getText = function(e) {
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
          ((Te = Nt.selectors = {
            cacheLength: 50,
            createPseudo: Tt,
            match: ht,
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
                  (e[1] = e[1].replace(St, Et)),
                  (e[3] = (e[3] || e[4] || e[5] || "").replace(St, Et)),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
                );
              },
              CHILD: function(e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  "nth" === e[1].slice(0, 3)
                    ? (e[3] || Nt.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ("even" === e[3] || "odd" === e[3]))),
                      (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                    : e[3] && Nt.error(e[0]),
                  e
                );
              },
              PSEUDO: function(e) {
                var t,
                  n = !e[6] && e[2];
                return ht.CHILD.test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || "")
                      : n &&
                        pt.test(n) &&
                        (t = Ae(n, !0)) &&
                        (t = n.indexOf(")", n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                    e.slice(0, 3));
              }
            },
            filter: {
              TAG: function(e) {
                var t = e.replace(St, Et).toLowerCase();
                return "*" === e
                  ? function() {
                      return !0;
                    }
                  : function(e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
              },
              CLASS: function(e) {
                var t = Ke[e + " "];
                return (
                  t ||
                  ((t = new RegExp("(^|" + at + ")" + e + "(" + at + "|$)")) &&
                    Ke(e, function(e) {
                      return t.test(
                        ("string" == typeof e.className && e.className) ||
                          (typeof e.getAttribute !== Je &&
                            e.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function(e, t, n) {
                return function(r) {
                  var o = Nt.attr(r, e);
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
                        m,
                        p,
                        g = i !== a ? "nextSibling" : "previousSibling",
                        h = t.parentNode,
                        v = u && t.nodeName.toLowerCase(),
                        b = !s && !u;
                      if (h) {
                        if (i) {
                          for (; g; ) {
                            for (f = t; (f = f[g]); )
                              if (
                                u
                                  ? f.nodeName.toLowerCase() === v
                                  : 1 === f.nodeType
                              )
                                return !1;
                            p = g = "only" === e && !p && "nextSibling";
                          }
                          return !0;
                        }
                        if (((p = [a ? h.firstChild : h.lastChild]), a && b)) {
                          for (
                            m =
                              (c = (l = h[He] || (h[He] = {}))[e] || [])[0] ===
                                $e && c[1],
                              d = c[0] === $e && c[2],
                              f = m && h.childNodes[m];
                            (f = (++m && f && f[g]) || (d = m = 0) || p.pop());

                          )
                            if (1 === f.nodeType && ++d && f === t) {
                              l[e] = [$e, m, d];
                              break;
                            }
                        } else if (
                          b &&
                          (c = (t[He] || (t[He] = {}))[e]) &&
                          c[0] === $e
                        )
                          d = c[1];
                        else
                          for (
                            ;
                            (f =
                              (++m && f && f[g]) || (d = m = 0) || p.pop()) &&
                            ((u
                              ? f.nodeName.toLowerCase() !== v
                              : 1 !== f.nodeType) ||
                              !++d ||
                              (b && ((f[He] || (f[He] = {}))[e] = [$e, d]),
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
                    Nt.error("unsupported pseudo: " + e);
                return r[He]
                  ? r(t)
                  : r.length > 1
                  ? ((n = [e, e, "", t]),
                    Te.setFilters.hasOwnProperty(e.toLowerCase())
                      ? Tt(function(e, n) {
                          for (var o, i = r(e, t), a = i.length; a--; )
                            e[(o = it.call(e, i[a]))] = !(n[o] = i[a]);
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
                  r = Re(e.replace(lt, "$1"));
                return r[He]
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
                  return Nt(e, t).length > 0;
                };
              }),
              contains: Tt(function(e) {
                return (
                  (e = e.replace(St, Et)),
                  function(t) {
                    return (
                      (t.textContent || t.innerText || _e(t)).indexOf(e) > -1
                    );
                  }
                );
              }),
              lang: Tt(function(e) {
                return (
                  gt.test(e || "") || Nt.error("unsupported lang: " + e),
                  (e = e.replace(St, Et).toLowerCase()),
                  function(t) {
                    var n;
                    do {
                      if (
                        (n = Ue
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
                var t = window.location && window.location.hash;
                return t && t.slice(1) === e.id;
              },
              root: function(e) {
                return e === Fe;
              },
              focus: function(e) {
                return (
                  e === Me.activeElement &&
                  (!Me.hasFocus || Me.hasFocus()) &&
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
                return bt.test(e.nodeName);
              },
              input: function(e) {
                return vt.test(e.nodeName);
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
            Te.pseudos[Ne] = Bt(Ne);
          for (Ne in { submit: !0, reset: !0 }) Te.pseudos[Ne] = At(Ne);
          function Dt() {}
          function Pt(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
          }
          function It(e, t, n) {
            var r = t.dir,
              o = n && "parentNode" === r,
              i = We++;
            return t.first
              ? function(t, n, i) {
                  for (; (t = t[r]); )
                    if (1 === t.nodeType || o) return e(t, n, i);
                }
              : function(t, n, a) {
                  var u,
                    s,
                    c = [$e, i];
                  if (a) {
                    for (; (t = t[r]); )
                      if ((1 === t.nodeType || o) && e(t, n, a)) return !0;
                  } else
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || o) {
                        if (
                          (u = (s = t[He] || (t[He] = {}))[r]) &&
                          u[0] === $e &&
                          u[1] === i
                        )
                          return (c[2] = u[2]);
                        if (((s[r] = c), (c[2] = e(t, n, a)))) return !0;
                      }
                };
          }
          function Lt(e) {
            return e.length > 1
              ? function(t, n, r) {
                  for (var o = e.length; o--; ) if (!e[o](t, n, r)) return !1;
                  return !0;
                }
              : e[0];
          }
          function Mt(e, t, n, r, o) {
            for (var i, a = [], u = 0, s = e.length, c = null != t; u < s; u++)
              (i = e[u]) && ((n && !n(i, r, o)) || (a.push(i), c && t.push(u)));
            return a;
          }
          function Ft(e, t, n, r, o, i) {
            return (
              r && !r[He] && (r = Ft(r)),
              o && !o[He] && (o = Ft(o, i)),
              Tt(function(i, a, u, s) {
                var c,
                  l,
                  f,
                  d = [],
                  m = [],
                  p = a.length,
                  g =
                    i ||
                    (function(e, t, n) {
                      for (var r = 0, o = t.length; r < o; r++) Nt(e, t[r], n);
                      return n;
                    })(t || "*", u.nodeType ? [u] : u, []),
                  h = !e || (!i && t) ? g : Mt(g, d, e, u, s),
                  v = n ? (o || (i ? e : p || r) ? [] : a) : h;
                if ((n && n(h, v, u, s), r))
                  for (c = Mt(v, m), r(c, [], u, s), l = c.length; l--; )
                    (f = c[l]) && (v[m[l]] = !(h[m[l]] = f));
                if (i) {
                  if (o || e) {
                    if (o) {
                      for (c = [], l = v.length; l--; )
                        (f = v[l]) && c.push((h[l] = f));
                      o(null, (v = []), c, s);
                    }
                    for (l = v.length; l--; )
                      (f = v[l]) &&
                        (c = o ? it.call(i, f) : d[l]) > -1 &&
                        (i[c] = !(a[c] = f));
                  }
                } else (v = Mt(v === a ? v.splice(p, v.length) : v)), o ? o(null, a, v, s) : rt.apply(a, v);
              })
            );
          }
          function Ut(e) {
            for (
              var t,
                n,
                r,
                o = e.length,
                i = Te.relative[e[0].type],
                a = i || Te.relative[" "],
                u = i ? 1 : 0,
                s = It(
                  function(e) {
                    return e === t;
                  },
                  a,
                  !0
                ),
                c = It(
                  function(e) {
                    return it.call(t, e) > -1;
                  },
                  a,
                  !0
                ),
                l = [
                  function(e, n, r) {
                    return (
                      (!i && (r || n !== De)) ||
                      ((t = n).nodeType ? s(e, n, r) : c(e, n, r))
                    );
                  }
                ];
              u < o;
              u++
            )
              if ((n = Te.relative[e[u].type])) l = [It(Lt(l), n)];
              else {
                if ((n = Te.filter[e[u].type].apply(null, e[u].matches))[He]) {
                  for (r = ++u; r < o && !Te.relative[e[r].type]; r++);
                  return Ft(
                    u > 1 && Lt(l),
                    u > 1 &&
                      Pt(
                        e
                          .slice(0, u - 1)
                          .concat({ value: " " === e[u - 2].type ? "*" : "" })
                      ).replace(lt, "$1"),
                    n,
                    u < r && Ut(e.slice(u, r)),
                    r < o && Ut((e = e.slice(r))),
                    r < o && Pt(e)
                  );
                }
                l.push(n);
              }
            return Lt(l);
          }
          (Dt.prototype = Te.filters = Te.pseudos),
            (Te.setFilters = new Dt()),
            (Ae = Nt.tokenize = function(e, t) {
              var n,
                r,
                o,
                i,
                a,
                u,
                s,
                c = Xe[e + " "];
              if (c) return t ? 0 : c.slice(0);
              for (a = e, u = [], s = Te.preFilter; a; ) {
                for (i in ((n && !(r = ft.exec(a))) ||
                  (r && (a = a.slice(r[0].length) || a), u.push((o = []))),
                (n = !1),
                (r = dt.exec(a)) &&
                  ((n = r.shift()),
                  o.push({ value: n, type: r[0].replace(lt, " ") }),
                  (a = a.slice(n.length))),
                Te.filter))
                  !(r = ht[i].exec(a)) ||
                    (s[i] && !(r = s[i](r))) ||
                    ((n = r.shift()),
                    o.push({ value: n, type: i, matches: r }),
                    (a = a.slice(n.length)));
                if (!n) break;
              }
              return t ? a.length : a ? Nt.error(e) : Xe(e, u).slice(0);
            }),
            (Re = Nt.compile = function(e, t) {
              var n,
                r = [],
                o = [],
                i = Ye[e + " "];
              if (!i) {
                for (t || (t = Ae(e)), n = t.length; n--; )
                  (i = Ut(t[n]))[He] ? r.push(i) : o.push(i);
                (i = Ye(
                  e,
                  (function(e, t) {
                    var n = t.length > 0,
                      r = e.length > 0,
                      o = function(o, i, a, u, s) {
                        var c,
                          l,
                          f,
                          d = 0,
                          m = "0",
                          p = o && [],
                          g = [],
                          h = De,
                          v = o || (r && Te.find.TAG("*", s)),
                          b = ($e += null == h ? 1 : Math.random() || 0.1),
                          y = v.length;
                        for (
                          s && (De = i !== Me && i);
                          m !== y && null != (c = v[m]);
                          m++
                        ) {
                          if (r && c) {
                            for (l = 0; (f = e[l++]); )
                              if (f(c, i, a)) {
                                u.push(c);
                                break;
                              }
                            s && ($e = b);
                          }
                          n && ((c = !f && c) && d--, o && p.push(c));
                        }
                        if (((d += m), n && m !== d)) {
                          for (l = 0; (f = t[l++]); ) f(p, g, i, a);
                          if (o) {
                            if (d > 0)
                              for (; m--; ) p[m] || g[m] || (g[m] = tt.call(u));
                            g = Mt(g);
                          }
                          rt.apply(u, g),
                            s &&
                              !o &&
                              g.length > 0 &&
                              d + t.length > 1 &&
                              Nt.uniqueSort(u);
                        }
                        return s && (($e = b), (De = h)), p;
                      };
                    return n ? Tt(o) : o;
                  })(o, r)
                )).selector = e;
              }
              return i;
            }),
            (Oe = Nt.select = function(e, t, n, r) {
              var o,
                i,
                a,
                u,
                s,
                c = "function" == typeof e && e,
                l = !r && Ae((e = c.selector || e));
              if (((n = n || []), 1 === l.length)) {
                if (
                  (i = l[0] = l[0].slice(0)).length > 2 &&
                  "ID" === (a = i[0]).type &&
                  ke.getById &&
                  9 === t.nodeType &&
                  Ue &&
                  Te.relative[i[1].type]
                ) {
                  if (
                    !(t = (Te.find.ID(a.matches[0].replace(St, Et), t) ||
                      [])[0])
                  )
                    return n;
                  c && (t = t.parentNode),
                    (e = e.slice(i.shift().value.length));
                }
                for (
                  o = ht.needsContext.test(e) ? 0 : i.length;
                  o-- && ((a = i[o]), !Te.relative[(u = a.type)]);

                )
                  if (
                    (s = Te.find[u]) &&
                    (r = s(
                      a.matches[0].replace(St, Et),
                      (xt.test(i[0].type) && Ot(t.parentNode)) || t
                    ))
                  ) {
                    if ((i.splice(o, 1), !(e = r.length && Pt(i))))
                      return rt.apply(n, r), n;
                    break;
                  }
              }
              return (
                (c || Re(e, l))(
                  r,
                  t,
                  !Ue,
                  n,
                  (xt.test(e) && Ot(t.parentNode)) || t
                ),
                n
              );
            }),
            (ke.sortStable =
              He.split("")
                .sort(Ge)
                .join("") === He),
            (ke.detectDuplicates = !!Ie),
            Le(),
            (ke.sortDetached = !0);
          var jt = Array.isArray,
            zt = function(e, t, n) {
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
            Vt = function(e, t, n) {
              var r, o;
              for (r = 0, o = e.length; r < o; r++)
                if (t.call(n, e[r], r, e)) return r;
              return -1;
            },
            Ht = {
              isArray: jt,
              toArray: function(e) {
                var t,
                  n,
                  r = e;
                if (!jt(e))
                  for (r = [], t = 0, n = e.length; t < n; t++) r[t] = e[t];
                return r;
              },
              each: zt,
              map: function(e, t) {
                var n = [];
                return (
                  zt(e, function(r, o) {
                    n.push(t(r, o, e));
                  }),
                  n
                );
              },
              filter: function(e, t) {
                var n = [];
                return (
                  zt(e, function(r, o) {
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
              findIndex: Vt,
              find: function(e, t, n) {
                var r = Vt(e, t, n);
                if (-1 !== r) return e[r];
              },
              last: function(e) {
                return e[e.length - 1];
              }
            },
            qt = /^\s*|\s*$/g,
            $t = function(e) {
              return null == e ? "" : ("" + e).replace(qt, "");
            },
            Wt = function(e, t) {
              return t
                ? !("array" !== t || !Ht.isArray(e)) || typeof e === t
                : void 0 !== e;
            },
            Kt = function(e, t, n, r) {
              (r = r || this),
                e &&
                  (n && (e = e[n]),
                  Ht.each(e, function(e, o) {
                    if (!1 === t.call(r, e, o, n)) return !1;
                    Kt(e, t, n, r);
                  }));
            },
            Xt = {
              trim: $t,
              isArray: Ht.isArray,
              is: Wt,
              toArray: Ht.toArray,
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
              each: Ht.each,
              map: Ht.map,
              grep: Ht.filter,
              inArray: Ht.indexOf,
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
              walk: Kt,
              createNS: function(e, t) {
                var n, r;
                for (
                  t = t || window, e = e.split("."), n = 0;
                  n < e.length;
                  n++
                )
                  t[(r = e[n])] || (t[r] = {}), (t = t[r]);
                return t;
              },
              resolve: function(e, t) {
                var n, r;
                for (
                  t = t || window, n = 0, r = (e = e.split(".")).length;
                  n < r && (t = t[e[n]]);
                  n++
                );
                return t;
              },
              explode: function(e, t) {
                return !e || Wt(e, "array") ? e : Ht.map(e.split(t || ","), $t);
              },
              _addCacheSuffix: function(e) {
                var t = le.cacheSuffix;
                return t && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e;
              }
            },
            Yt = document,
            Gt = Array.prototype.push,
            Jt = Array.prototype.slice,
            Qt = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
            Zt = Ee.Event,
            en = Xt.makeMap("children,contents,next,prev"),
            tn = function(e) {
              return void 0 !== e;
            },
            nn = function(e) {
              return "string" == typeof e;
            },
            rn = function(e, t) {
              var n, r, o;
              for (
                o = (t = t || Yt).createElement("div"),
                  n = t.createDocumentFragment(),
                  o.innerHTML = e;
                (r = o.firstChild);

              )
                n.appendChild(r);
              return n;
            },
            on = function(e, t, n, r) {
              var o;
              if (nn(t)) t = rn(t, yn(e[0]));
              else if (t.length && !t.nodeType) {
                if (((t = pn.makeArray(t)), r))
                  for (o = t.length - 1; o >= 0; o--) on(e, t[o], n, r);
                else for (o = 0; o < t.length; o++) on(e, t[o], n, r);
                return e;
              }
              if (t.nodeType) for (o = e.length; o--; ) n.call(e[o], t);
              return e;
            },
            an = function(e, t) {
              return (
                e &&
                t &&
                -1 !== (" " + e.className + " ").indexOf(" " + t + " ")
              );
            },
            un = function(e, t, n) {
              var r, o;
              return (
                (t = pn(t)[0]),
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
            sn = Xt.makeMap(
              "fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom",
              " "
            ),
            cn = Xt.makeMap(
              "checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected",
              " "
            ),
            ln = { for: "htmlFor", class: "className", readonly: "readOnly" },
            fn = { float: "cssFloat" },
            dn = {},
            mn = {},
            pn = function(e, t) {
              return new pn.fn.init(e, t);
            },
            gn = /^\s*|\s*$/g,
            hn = function(e) {
              return null == e ? "" : ("" + e).replace(gn, "");
            },
            vn = function(e, t) {
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
            bn = function(e, t) {
              var n = [];
              return (
                vn(e, function(e, r) {
                  t(r, e) && n.push(r);
                }),
                n
              );
            },
            yn = function(e) {
              return e ? (9 === e.nodeType ? e : e.ownerDocument) : Yt;
            };
          (pn.fn = pn.prototype = {
            constructor: pn,
            selector: "",
            context: null,
            length: 0,
            init: function(e, t) {
              var n, r;
              if (!e) return this;
              if (e.nodeType)
                return (this.context = this[0] = e), (this.length = 1), this;
              if (t && t.nodeType) this.context = t;
              else {
                if (t) return pn(e).attr(t);
                this.context = t = document;
              }
              if (nn(e)) {
                if (
                  ((this.selector = e),
                  !(n =
                    "<" === e.charAt(0) &&
                    ">" === e.charAt(e.length - 1) &&
                    e.length >= 3
                      ? [null, e, null]
                      : Qt.exec(e)))
                )
                  return pn(t).find(e);
                if (n[1])
                  for (r = rn(e, yn(t)).firstChild; r; )
                    Gt.call(this, r), (r = r.nextSibling);
                else {
                  if (!(r = yn(t).getElementById(n[2]))) return this;
                  if (r.id !== n[2]) return this.find(e);
                  (this.length = 1), (this[0] = r);
                }
              } else this.add(e, !1);
              return this;
            },
            toArray: function() {
              return Xt.toArray(this);
            },
            add: function(e, t) {
              var n, r;
              if (nn(e)) return this.add(pn(e));
              if (!1 !== t)
                for (
                  n = pn.unique(this.toArray().concat(pn.makeArray(e))),
                    this.length = n.length,
                    r = 0;
                  r < n.length;
                  r++
                )
                  this[r] = n[r];
              else Gt.apply(this, pn.makeArray(e));
              return this;
            },
            attr: function(e, t) {
              var n,
                r = this;
              if ("object" == typeof e)
                vn(e, function(e, t) {
                  r.attr(e, t);
                });
              else {
                if (!tn(t)) {
                  if (r[0] && 1 === r[0].nodeType) {
                    if ((n = dn[e]) && n.get) return n.get(r[0], e);
                    if (cn[e]) return r.prop(e) ? e : void 0;
                    null === (t = r[0].getAttribute(e, 2)) && (t = void 0);
                  }
                  return t;
                }
                this.each(function() {
                  var n;
                  if (1 === this.nodeType) {
                    if ((n = dn[e]) && n.set) return void n.set(this, t);
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
              if ("object" == typeof (e = ln[e] || e))
                vn(e, function(e, t) {
                  n.prop(e, t);
                });
              else {
                if (!tn(t))
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
                vn(e, function(e, t) {
                  o.css(e, t);
                });
              else if (tn(t))
                (e = i(e)),
                  "number" != typeof t || sn[e] || (t = t.toString() + "px"),
                  o.each(function() {
                    var n = this.style;
                    if ((r = mn[e]) && r.set) r.set(this, t);
                    else {
                      try {
                        this.style[fn[e] || e] = t;
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
                  Zt.clean(e),
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
              if (tn(e)) {
                t = this.length;
                try {
                  for (; t--; ) this[t].innerHTML = e;
                } catch (n) {
                  pn(this[t])
                    .empty()
                    .append(e);
                }
                return this;
              }
              return this[0] ? this[0].innerHTML : "";
            },
            text: function(e) {
              var t;
              if (tn(e)) {
                for (t = this.length; t--; )
                  "innerText" in this[t]
                    ? (this[t].innerText = e)
                    : (this[0].textContent = e);
                return this;
              }
              return this[0] ? this[0].innerText || this[0].textContent : "";
            },
            append: function() {
              return on(this, arguments, function(e) {
                (1 === this.nodeType ||
                  (this.host && 1 === this.host.nodeType)) &&
                  this.appendChild(e);
              });
            },
            prepend: function() {
              return on(
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
                ? on(this, arguments, function(e) {
                    this.parentNode.insertBefore(e, this);
                  })
                : this;
            },
            after: function() {
              return this[0] && this[0].parentNode
                ? on(
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
              return pn(e).append(this), this;
            },
            prependTo: function(e) {
              return pn(e).prepend(this), this;
            },
            replaceWith: function(e) {
              return this.before(e).remove();
            },
            wrap: function(e) {
              return un(this, e);
            },
            wrapAll: function(e) {
              return un(this, e, !0);
            },
            wrapInner: function(e) {
              return (
                this.each(function() {
                  pn(this)
                    .contents()
                    .wrapAll(e);
                }),
                this
              );
            },
            unwrap: function() {
              return this.parent().each(function() {
                pn(this).replaceWith(this.childNodes);
              });
            },
            clone: function() {
              var e = [];
              return (
                this.each(function() {
                  e.push(this.cloneNode(!0));
                }),
                pn(e)
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
                    ? vn(e.split(" "), function() {
                        n.toggleClass(this, t);
                      })
                    : n.each(function(n, r) {
                        var o, i;
                        (i = an(r, e)) !== t &&
                          ((o = r.className),
                          i
                            ? (r.className = hn(
                                (" " + o + " ").replace(" " + e + " ", " ")
                              ))
                            : (r.className += o ? " " + e : e));
                      }),
                  n);
            },
            hasClass: function(e) {
              return an(this[0], e);
            },
            each: function(e) {
              return vn(this, e);
            },
            on: function(e, t) {
              return this.each(function() {
                Zt.bind(this, e, t);
              });
            },
            off: function(e, t) {
              return this.each(function() {
                Zt.unbind(this, e, t);
              });
            },
            trigger: function(e) {
              return this.each(function() {
                "object" == typeof e
                  ? Zt.fire(this, e.type, e)
                  : Zt.fire(this, e);
              });
            },
            show: function() {
              return this.css("display", "");
            },
            hide: function() {
              return this.css("display", "none");
            },
            slice: function() {
              return new pn(Jt.apply(this, arguments));
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
              for (t = 0, n = this.length; t < n; t++) pn.find(e, this[t], r);
              return pn(r);
            },
            filter: function(e) {
              return pn(
                "function" == typeof e
                  ? bn(this.toArray(), function(t, n) {
                      return e(n, t);
                    })
                  : pn.filter(e, this.toArray())
              );
            },
            closest: function(e) {
              var t = [];
              return (
                e instanceof pn && (e = e[0]),
                this.each(function(n, r) {
                  for (; r; ) {
                    if ("string" == typeof e && pn(r).is(e)) {
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
                pn(t)
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
            push: Gt,
            sort: [].sort,
            splice: [].splice
          }),
            Xt.extend(pn, {
              extend: Xt.extend,
              makeArray: function(e) {
                return ((t = e) && t === t.window) || e.nodeType
                  ? [e]
                  : Xt.toArray(e);
                var t;
              },
              inArray: function(e, t) {
                var n;
                if (t.indexOf) return t.indexOf(e);
                for (n = t.length; n--; ) if (t[n] === e) return n;
                return -1;
              },
              isArray: Xt.isArray,
              each: vn,
              trim: hn,
              grep: bn,
              find: Nt,
              expr: Nt.selectors,
              unique: Nt.uniqueSort,
              text: Nt.getText,
              contains: Nt.contains,
              filter: function(e, t, n) {
                var r = t.length;
                for (n && (e = ":not(" + e + ")"); r--; )
                  1 !== t[r].nodeType && t.splice(r, 1);
                return (t =
                  1 === t.length
                    ? pn.find.matchesSelector(t[0], e)
                      ? [t[0]]
                      : []
                    : pn.find.matches(e, t));
              }
            });
          var Cn = function(e, t, n) {
              var r = [],
                o = e[t];
              for (
                "string" != typeof n && n instanceof pn && (n = n[0]);
                o && 9 !== o.nodeType;

              ) {
                if (void 0 !== n) {
                  if (o === n) break;
                  if ("string" == typeof n && pn(o).is(n)) break;
                }
                1 === o.nodeType && r.push(o), (o = o[t]);
              }
              return r;
            },
            xn = function(e, t, n, r) {
              var o = [];
              for (r instanceof pn && (r = r[0]); e; e = e[t])
                if (!n || e.nodeType === n) {
                  if (void 0 !== r) {
                    if (e === r) break;
                    if ("string" == typeof r && pn(e).is(r)) break;
                  }
                  o.push(e);
                }
              return o;
            },
            wn = function(e, t, n) {
              for (e = e[t]; e; e = e[t]) if (e.nodeType === n) return e;
              return null;
            };
          vn(
            {
              parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null;
              },
              parents: function(e) {
                return Cn(e, "parentNode");
              },
              next: function(e) {
                return wn(e, "nextSibling", 1);
              },
              prev: function(e) {
                return wn(e, "previousSibling", 1);
              },
              children: function(e) {
                return xn(e.firstChild, "nextSibling", 1);
              },
              contents: function(e) {
                return Xt.toArray(
                  ("iframe" === e.nodeName
                    ? e.contentDocument || e.contentWindow.document
                    : e
                  ).childNodes
                );
              }
            },
            function(e, t) {
              pn.fn[e] = function(n) {
                var r = [];
                return (
                  this.each(function() {
                    var e = t.call(r, this, n, r);
                    e && (pn.isArray(e) ? r.push.apply(r, e) : r.push(e));
                  }),
                  this.length > 1 &&
                    (en[e] || (r = pn.unique(r)),
                    0 === e.indexOf("parents") && (r = r.reverse())),
                  (r = pn(r)),
                  n ? r.filter(n) : r
                );
              };
            }
          ),
            vn(
              {
                parentsUntil: function(e, t) {
                  return Cn(e, "parentNode", t);
                },
                nextUntil: function(e, t) {
                  return xn(e, "nextSibling", 1, t).slice(1);
                },
                prevUntil: function(e, t) {
                  return xn(e, "previousSibling", 1, t).slice(1);
                }
              },
              function(e, t) {
                pn.fn[e] = function(n, r) {
                  var o = [];
                  return (
                    this.each(function() {
                      var e = t.call(o, this, n, o);
                      e && (pn.isArray(e) ? o.push.apply(o, e) : o.push(e));
                    }),
                    this.length > 1 &&
                      ((o = pn.unique(o)),
                      (0 !== e.indexOf("parents") && "prevUntil" !== e) ||
                        (o = o.reverse())),
                    (o = pn(o)),
                    r ? o.filter(r) : o
                  );
                };
              }
            ),
            (pn.fn.is = function(e) {
              return !!e && this.filter(e).length > 0;
            }),
            (pn.fn.init.prototype = pn.fn),
            (pn.overrideDefaults = function(e) {
              var t,
                n = function(r, o) {
                  return (
                    (t = t || e()),
                    0 === arguments.length && (r = t.element),
                    o || (o = t.context),
                    new n.fn.init(r, o)
                  );
                };
              return pn.extend(n, this), n;
            });
          var Sn = function(e, t, n) {
            vn(n, function(n, r) {
              (e[n] = e[n] || {}), (e[n][t] = r);
            });
          };
          le.ie &&
            le.ie < 8 &&
            (Sn(dn, "get", {
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
            Sn(dn, "set", {
              class: function(e, t) {
                e.className = t;
              },
              style: function(e, t) {
                e.style.cssText = t;
              }
            })),
            le.ie &&
              le.ie < 9 &&
              ((fn.float = "styleFloat"),
              Sn(mn, "set", {
                opacity: function(e, t) {
                  var n = e.style;
                  null === t || "" === t
                    ? n.removeAttribute("filter")
                    : ((n.zoom = 1),
                      (n.filter = "alpha(opacity=" + 100 * t + ")"));
                }
              })),
            (pn.attrHooks = dn),
            (pn.cssHooks = mn);
          var En,
            Nn,
            kn,
            Tn = function() {
              return _n(0, 0);
            },
            _n = function(e, t) {
              return { major: e, minor: t };
            },
            Bn = {
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
            An = function(e, t) {
              return function() {
                return t === e;
              };
            },
            Rn = function(e) {
              var t = e.current;
              return {
                current: t,
                version: e.version,
                isEdge: An("Edge", t),
                isChrome: An("Chrome", t),
                isIE: An("IE", t),
                isOpera: An("Opera", t),
                isFirefox: An("Firefox", t),
                isSafari: An("Safari", t)
              };
            },
            On = {
              unknown: function() {
                return Rn({ current: void 0, version: Bn.unknown() });
              },
              nu: Rn,
              edge: o("Edge"),
              chrome: o("Chrome"),
              ie: o("IE"),
              opera: o("Opera"),
              firefox: o("Firefox"),
              safari: o("Safari")
            },
            Dn = function(e, t) {
              return function() {
                return t === e;
              };
            },
            Pn = function(e) {
              var t = e.current;
              return {
                current: t,
                version: e.version,
                isWindows: Dn("Windows", t),
                isiOS: Dn("iOS", t),
                isAndroid: Dn("Android", t),
                isOSX: Dn("OSX", t),
                isLinux: Dn("Linux", t),
                isSolaris: Dn("Solaris", t),
                isFreeBSD: Dn("FreeBSD", t)
              };
            },
            In = {
              unknown: function() {
                return Pn({ current: void 0, version: Bn.unknown() });
              },
              nu: Pn,
              windows: o("Windows"),
              ios: o("iOS"),
              android: o("Android"),
              linux: o("Linux"),
              osx: o("OSX"),
              solaris: o("Solaris"),
              freebsd: o("FreeBSD")
            },
            Ln = function(e, t) {
              var n = String(t).toLowerCase();
              return q(e, function(e) {
                return e.search(n);
              });
            },
            Mn = function(e, t) {
              return Ln(e, t).map(function(e) {
                var n = Bn.detect(e.versionRegexes, t);
                return { current: e.name, version: n };
              });
            },
            Fn = function(e, t) {
              return Ln(e, t).map(function(e) {
                var n = Bn.detect(e.versionRegexes, t);
                return { current: e.name, version: n };
              });
            },
            Un = function(e, t) {
              return -1 !== e.indexOf(t);
            },
            jn = function(e) {
              return e.replace(/^\s+|\s+$/g, "");
            },
            zn = function(e) {
              return e.replace(/\s+$/g, "");
            },
            Vn = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
            Hn = function(e) {
              return function(t) {
                return Un(t, e);
              };
            },
            qn = [
              {
                name: "Edge",
                versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
                search: function(e) {
                  return (
                    Un(e, "edge/") &&
                    Un(e, "chrome") &&
                    Un(e, "safari") &&
                    Un(e, "applewebkit")
                  );
                }
              },
              {
                name: "Chrome",
                versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, Vn],
                search: function(e) {
                  return Un(e, "chrome") && !Un(e, "chromeframe");
                }
              },
              {
                name: "IE",
                versionRegexes: [
                  /.*?msie\ ?([0-9]+)\.([0-9]+).*/,
                  /.*?rv:([0-9]+)\.([0-9]+).*/
                ],
                search: function(e) {
                  return Un(e, "msie") || Un(e, "trident");
                }
              },
              {
                name: "Opera",
                versionRegexes: [Vn, /.*?opera\/([0-9]+)\.([0-9]+).*/],
                search: Hn("opera")
              },
              {
                name: "Firefox",
                versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
                search: Hn("firefox")
              },
              {
                name: "Safari",
                versionRegexes: [Vn, /.*?cpu os ([0-9]+)_([0-9]+).*/],
                search: function(e) {
                  return (
                    (Un(e, "safari") || Un(e, "mobile/")) &&
                    Un(e, "applewebkit")
                  );
                }
              }
            ],
            $n = [
              {
                name: "Windows",
                search: Hn("win"),
                versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
              },
              {
                name: "iOS",
                search: function(e) {
                  return Un(e, "iphone") || Un(e, "ipad");
                },
                versionRegexes: [
                  /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
                  /.*cpu os ([0-9]+)_([0-9]+).*/,
                  /.*cpu iphone os ([0-9]+)_([0-9]+).*/
                ]
              },
              {
                name: "Android",
                search: Hn("android"),
                versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
              },
              {
                name: "OSX",
                search: Hn("os x"),
                versionRegexes: [/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]
              },
              { name: "Linux", search: Hn("linux"), versionRegexes: [] },
              { name: "Solaris", search: Hn("sunos"), versionRegexes: [] },
              { name: "FreeBSD", search: Hn("freebsd"), versionRegexes: [] }
            ],
            Wn = { browsers: o(qn), oses: o($n) },
            Kn = function(e) {
              var t = Wn.browsers(),
                n = Wn.oses(),
                r = Mn(t, e).fold(On.unknown, On.nu),
                i = Fn(n, e).fold(In.unknown, In.nu),
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
            Xn = {
              detect: ((En = function() {
                var e = navigator.userAgent;
                return Kn(e);
              }),
              (kn = !1),
              function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                return kn || ((kn = !0), (Nn = En.apply(null, e))), Nn;
              })
            },
            Yn = function(e) {
              if (null == e)
                throw new Error("Node cannot be null or undefined");
              return { dom: o(e) };
            },
            Gn = {
              fromHtml: function(e, t) {
                var n = (t || document).createElement("div");
                if (
                  ((n.innerHTML = e),
                  !n.hasChildNodes() || n.childNodes.length > 1)
                )
                  throw (console.error(
                    "HTML does not have a single root node",
                    e
                  ),
                  new Error("HTML must have a single root node"));
                return Yn(n.childNodes[0]);
              },
              fromTag: function(e, t) {
                var n = (t || document).createElement(e);
                return Yn(n);
              },
              fromText: function(e, t) {
                var n = (t || document).createTextNode(e);
                return Yn(n);
              },
              fromDom: Yn,
              fromPoint: function(e, t, n) {
                var r = e.dom();
                return _.from(r.elementFromPoint(t, n)).map(Yn);
              }
            },
            Jn = (Node.ATTRIBUTE_NODE,
            Node.CDATA_SECTION_NODE,
            Node.COMMENT_NODE,
            Node.DOCUMENT_NODE),
            Qn = (Node.DOCUMENT_TYPE_NODE,
            Node.DOCUMENT_FRAGMENT_NODE,
            Node.ELEMENT_NODE),
            Zn = Node.TEXT_NODE,
            er = (Node.PROCESSING_INSTRUCTION_NODE,
            Node.ENTITY_REFERENCE_NODE,
            Node.ENTITY_NODE,
            Node.NOTATION_NODE,
            function(e) {
              return e.dom().nodeName.toLowerCase();
            }),
            tr = function(e) {
              return function(t) {
                return (
                  (function(e) {
                    return e.dom().nodeType;
                  })(t) === e
                );
              };
            },
            nr = tr(Qn),
            rr = tr(Zn),
            or = Object.keys,
            ir = Object.hasOwnProperty,
            ar = function(e, t) {
              for (var n = or(e), r = 0, o = n.length; r < o; r++) {
                var i = n[r];
                t(e[i], i, e);
              }
            },
            ur = function(e, t) {
              return sr(e, function(e, n, r) {
                return { k: n, v: t(e, n, r) };
              });
            },
            sr = function(e, t) {
              var n = {};
              return (
                ar(e, function(r, o) {
                  var i = t(r, o, e);
                  n[i.k] = i.v;
                }),
                n
              );
            },
            cr = function(e, t) {
              return lr(e, t) ? _.some(e[t]) : _.none();
            },
            lr = function(e, t) {
              return ir.call(e, t);
            },
            fr = function(e, t, n) {
              if (!(A(n) || P(n) || L(n)))
                throw (console.error(
                  "Invalid call to Attr.set. Key ",
                  t,
                  ":: Value ",
                  n,
                  ":: Element ",
                  e
                ),
                new Error("Attribute value was not simple"));
              e.setAttribute(t, n + "");
            },
            dr = function(e, t, n) {
              fr(e.dom(), t, n);
            },
            mr = function(e, t) {
              var n = e.dom();
              ar(t, function(e, t) {
                fr(n, t, e);
              });
            },
            pr = function(e, t) {
              var n = e.dom().getAttribute(t);
              return null === n ? void 0 : n;
            },
            gr = function(e, t) {
              e.dom().removeAttribute(t);
            },
            hr = function(e, t) {
              var n = e.dom(),
                r = window.getComputedStyle(n).getPropertyValue(t),
                o =
                  "" !== r ||
                  (function(e) {
                    var t = rr(e) ? e.dom().parentNode : e.dom();
                    return null != t && t.ownerDocument.body.contains(t);
                  })(e)
                    ? r
                    : vr(n, t);
              return null === o ? void 0 : o;
            },
            vr = function(e, t) {
              return (function(e) {
                return void 0 !== e.style;
              })(e)
                ? e.style.getPropertyValue(t)
                : "";
            },
            br = function(e, t) {
              var n = e.dom(),
                r = vr(n, t);
              return _.from(r).filter(function(e) {
                return e.length > 0;
              });
            },
            yr = function() {
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
            Cr = function(e, t) {
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
              return re.getOrDie("Node");
            },
            wr = function(e, t, n) {
              return 0 != (e.compareDocumentPosition(t) & n);
            },
            Sr = function(e, t) {
              return wr(e, t, xr().DOCUMENT_POSITION_CONTAINED_BY);
            },
            Er = Qn,
            Nr = Jn,
            kr = function(e, t) {
              var n = e.dom();
              if (n.nodeType !== Er) return !1;
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
                (e.nodeType !== Er && e.nodeType !== Nr) ||
                0 === e.childElementCount
              );
            },
            _r = function(e, t) {
              return e.dom() === t.dom();
            },
            Br = Xn.detect().browser.isIE()
              ? function(e, t) {
                  return Sr(e.dom(), t.dom());
                }
              : function(e, t) {
                  var n = e.dom(),
                    r = t.dom();
                  return n !== r && n.contains(r);
                },
            Ar = function(e) {
              return Gn.fromDom(e.dom().ownerDocument);
            },
            Rr = function(e) {
              var t = e.dom();
              return _.from(t.parentNode).map(Gn.fromDom);
            },
            Or = function(e) {
              var t = e.dom();
              return _.from(t.previousSibling).map(Gn.fromDom);
            },
            Dr = function(e) {
              var t = e.dom();
              return _.from(t.nextSibling).map(Gn.fromDom);
            },
            Pr = function(e) {
              return (t = Cr(e, Or)), (n = G.call(t, 0)).reverse(), n;
              var t, n;
            },
            Ir = function(e) {
              return Cr(e, Dr);
            },
            Lr = function(e) {
              var t = e.dom();
              return U(t.childNodes, Gn.fromDom);
            },
            Mr = function(e, t) {
              var n = e.dom().childNodes;
              return _.from(n[t]).map(Gn.fromDom);
            },
            Fr = function(e) {
              return Mr(e, 0);
            },
            Ur = function(e) {
              return Mr(e, e.dom().childNodes.length - 1);
            },
            jr = (yr("element", "offset"), Xn.detect().browser),
            zr = function(e) {
              return q(e, nr);
            },
            Vr = {
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
                    "static" === hr(Gn.fromDom(e), "position")
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
                    return jr.isFirefox() && "table" === er(e)
                      ? zr(Lr(e))
                          .filter(function(e) {
                            return "caption" === er(e);
                          })
                          .bind(function(e) {
                            return zr(Ir(e)).map(function(t) {
                              var n = t.dom().offsetTop,
                                r = e.dom().offsetTop,
                                o = e.dom().offsetHeight;
                              return n <= r ? -o : 0;
                            });
                          })
                          .getOr(0)
                      : 0;
                  })(Gn.fromDom(t));
                }
                return { x: i, y: a };
              }
            },
            Hr = function(e) {
              var t = _.none(),
                n = [],
                r = function(e) {
                  o() ? a(e) : n.push(e);
                },
                o = function() {
                  return t.isSome();
                },
                i = function(e) {
                  j(e, a);
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
                    return Hr(function(t) {
                      r(function(n) {
                        t(e(n));
                      });
                    });
                  },
                  isReady: o
                }
              );
            },
            qr = {
              nu: Hr,
              pure: function(e) {
                return Hr(function(t) {
                  t(e);
                });
              }
            },
            $r = function(e) {
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
                  return qr.nu(t);
                };
              return {
                map: function(e) {
                  return $r(function(n) {
                    t(function(t) {
                      var r = e(t);
                      n(r);
                    });
                  });
                },
                bind: function(e) {
                  return $r(function(n) {
                    t(function(t) {
                      e(t).get(n);
                    });
                  });
                },
                anonBind: function(e) {
                  return $r(function(n) {
                    t(function(t) {
                      e.get(n);
                    });
                  });
                },
                toLazy: n,
                toCached: function() {
                  var e = null;
                  return $r(function(t) {
                    null === e && (e = n()), e.get(t);
                  });
                },
                get: t
              };
            },
            Wr = {
              nu: $r,
              pure: function(e) {
                return $r(function(t) {
                  t(e);
                });
              }
            },
            Kr = function(e, t) {
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
            Xr = function(e) {
              return Kr(e, Wr.nu);
            },
            Yr = function(e) {
              return {
                is: function(t) {
                  return e === t;
                },
                isValue: w,
                isError: x,
                getOr: o(e),
                getOrThunk: o(e),
                getOrDie: o(e),
                or: function(t) {
                  return Yr(e);
                },
                orThunk: function(t) {
                  return Yr(e);
                },
                fold: function(t, n) {
                  return n(e);
                },
                map: function(t) {
                  return Yr(t(e));
                },
                mapError: function(t) {
                  return Yr(e);
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
            Gr = function(e) {
              return {
                is: x,
                isValue: x,
                isError: w,
                getOr: i,
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
                  return Gr(e);
                },
                mapError: function(t) {
                  return Gr(t(e));
                },
                each: n,
                bind: function(t) {
                  return Gr(e);
                },
                exists: x,
                forall: w,
                toOption: _.none
              };
            },
            Jr = { value: Yr, error: Gr };
          function Qr(e, t) {
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
          var Zr,
            eo,
            to,
            no = function(e) {
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
                  })(e, o(!0))).hasOwnProperty(er(n));
              };
            },
            ro = no(["h1", "h2", "h3", "h4", "h5", "h6"]),
            oo = no([
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
            io = function(e) {
              return nr(e) && !oo(e);
            },
            ao = function(e) {
              return nr(e) && "br" === er(e);
            },
            uo = no([
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
            so = no(["ul", "ol", "dl"]),
            co = no(["li", "dd", "dt"]),
            lo = no([
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
            fo = no(["thead", "tbody", "tfoot"]),
            mo = no(["td", "th"]),
            po = no(["pre", "script", "textarea", "style"]),
            go = function(e) {
              return function(t) {
                return !!t && t.nodeType === e;
              };
            },
            ho = go(1),
            vo = function(e) {
              var t = e.toLowerCase().split(" ");
              return function(e) {
                var n, r;
                if (e && e.nodeType)
                  for (r = e.nodeName.toLowerCase(), n = 0; n < t.length; n++)
                    if (r === t[n]) return !0;
                return !1;
              };
            },
            bo = function(e) {
              return function(t) {
                if (ho(t)) {
                  if (t.contentEditable === e) return !0;
                  if (t.getAttribute("data-mce-contenteditable") === e)
                    return !0;
                }
                return !1;
              };
            },
            yo = go(3),
            Co = go(8),
            xo = go(9),
            wo = go(11),
            So = vo("br"),
            Eo = bo("true"),
            No = bo("false"),
            ko = {
              isText: yo,
              isElement: ho,
              isComment: Co,
              isDocument: xo,
              isDocumentFragment: wo,
              isBr: So,
              isContentEditableTrue: Eo,
              isContentEditableFalse: No,
              matchNodeNames: vo,
              hasPropValue: function(e, t) {
                return function(n) {
                  return ho(n) && n[e] === t;
                };
              },
              hasAttribute: function(e, t) {
                return function(t) {
                  return ho(t) && t.hasAttribute(e);
                };
              },
              hasAttributeValue: function(e, t) {
                return function(n) {
                  return ho(n) && n.getAttribute(e) === t;
                };
              },
              matchStyleValues: function(e, t) {
                var n = t.toLowerCase().split(" ");
                return function(t) {
                  var r;
                  if (ho(t))
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
                return ho(e) && e.hasAttribute("data-mce-bogus");
              },
              isBogusAll: function(e) {
                return ho(e) && "all" === e.getAttribute("data-mce-bogus");
              },
              isTable: function(e) {
                return ho(e) && "TABLE" === e.tagName;
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
                    var o = Xt.trim(t.nodeValue).length;
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
                    r.length || lo(Gn.fromDom(t)))
                  )
                    return;
                  e.remove(t);
                }
                return t;
              }
            },
            Bo = { trimNode: _o },
            Ao = Xt.makeMap,
            Ro = /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
            Oo = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
            Do = /[<>&\"\']/g,
            Po = /&#([a-z0-9]+);?|&([a-z0-9]+);/gi,
            Io = {
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
          (eo = {
            '"': "&quot;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            "`": "&#96;"
          }),
            (to = {
              "&lt;": "<",
              "&gt;": ">",
              "&amp;": "&",
              "&quot;": '"',
              "&apos;": "'"
            });
          var Lo = function(e, t) {
            var n,
              r,
              o,
              i = {};
            if (e) {
              for (e = e.split(","), t = t || 10, n = 0; n < e.length; n += 2)
                (r = String.fromCharCode(parseInt(e[n], t))),
                  eo[r] || ((o = "&" + e[n + 1] + ";"), (i[r] = o), (i[o] = r));
              return i;
            }
          };
          Zr = Lo(
            "50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",
            32
          );
          var Mo = function(e, t) {
              return e.replace(t ? Ro : Oo, function(e) {
                return eo[e] || e;
              });
            },
            Fo = function(e, t) {
              return e.replace(t ? Ro : Oo, function(e) {
                return e.length > 1
                  ? "&#" +
                      (1024 * (e.charCodeAt(0) - 55296) +
                        (e.charCodeAt(1) - 56320) +
                        65536) +
                      ";"
                  : eo[e] || "&#" + e.charCodeAt(0) + ";";
              });
            },
            Uo = function(e, t, n) {
              return (
                (n = n || Zr),
                e.replace(t ? Ro : Oo, function(e) {
                  return eo[e] || n[e] || e;
                })
              );
            },
            jo = {
              encodeRaw: Mo,
              encodeAllRaw: function(e) {
                return ("" + e).replace(Do, function(e) {
                  return eo[e] || e;
                });
              },
              encodeNumeric: Fo,
              encodeNamed: Uo,
              getEncodeFunc: function(e, t) {
                var n = Lo(t) || Zr,
                  r = Ao(e.replace(/\+/g, ","));
                return r.named && r.numeric
                  ? function(e, t) {
                      return e.replace(t ? Ro : Oo, function(e) {
                        return void 0 !== eo[e]
                          ? eo[e]
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
                        return Uo(e, t, n);
                      }
                    : Uo
                  : r.numeric
                  ? Fo
                  : Mo;
              },
              decode: function(e) {
                return e.replace(Po, function(e, t) {
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
                      : Io[t] || String.fromCharCode(t)
                    : to[e] ||
                        Zr[e] ||
                        ((n = e),
                        ((r = Gn.fromTag("div").dom()).innerHTML = n),
                        r.textContent || r.innerText || n);
                  var n, r;
                });
              }
            },
            zo = {},
            Vo = {},
            Ho = Xt.makeMap,
            qo = Xt.each,
            $o = Xt.extend,
            Wo = Xt.explode,
            Ko = Xt.inArray,
            Xo = function(e, t) {
              return (e = Xt.trim(e)) ? e.split(t || " ") : [];
            },
            Yo = function(e) {
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
                      "string" == typeof (r = r || []) && (r = Xo(r)),
                      o = (e = Xo(e)).length;
                    o--;

                  )
                    (a = {
                      attributes: s((i = Xo([t, n].join(" ")))),
                      attributesOrder: i,
                      children: s(r, Vo)
                    }),
                      (u[e[o]] = a);
                },
                c = function(e, t) {
                  var n, r, o, i;
                  for (n = (e = Xo(e)).length, t = Xo(t); n--; )
                    for (r = u[e[n]], o = 0, i = t.length; o < i; o++)
                      (r.attributes[t[o]] = {}), r.attributesOrder.push(t[o]);
                };
              return zo[e]
                ? zo[e]
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
                    qo(Xo(a), function(e) {
                      s(e, "", r);
                    }),
                    (n = [n, (i = "center dir isindex noframes")].join(" ")),
                    (o = [n, r].join(" ")),
                    qo(Xo(i), function(e) {
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
                  qo(Xo("a form meter progress dfn"), function(e) {
                    u[e] && delete u[e].children[e];
                  }),
                  delete u.caption.children.table,
                  delete u.script,
                  (zo[e] = u),
                  u);
            },
            Go = function(e, t) {
              var n;
              return (
                e &&
                  ((n = {}),
                  "string" == typeof e && (e = { "*": e }),
                  qo(e, function(e, r) {
                    n[r] = n[r.toUpperCase()] =
                      "map" === t ? Ho(e, /[, ]/) : Wo(e, /[, ]/);
                  })),
                n
              );
            };
          function Jo(e) {
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
              m,
              p = {},
              g = {},
              h = [],
              v = {},
              b = {},
              y = function(t, n, r) {
                var o = e[t];
                return (
                  o
                    ? (o = Ho(o, /[, ]/, Ho(o.toUpperCase(), /[, ]/)))
                    : (o = zo[t]) ||
                      ((o = Ho(n, " ", Ho(n.toUpperCase(), " "))),
                      (o = $o(o, r)),
                      (zo[t] = o)),
                  o
                );
              };
            (r = Yo((e = e || {}).schema)),
              !1 === e.verify_html && (e.valid_elements = "*[*]"),
              (t = Go(e.valid_styles)),
              (n = Go(e.invalid_styles, "map")),
              (s = Go(e.valid_classes, "map")),
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
              (m = y(
                "text_inline_elements",
                "span strong b em i font strike u var cite dfn code mark q sup sub samp"
              )),
              qo(
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
              x = function(e) {
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
                  m,
                  g,
                  v,
                  b,
                  y,
                  x,
                  w,
                  S = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)\])?$/,
                  E = /^([!\-])?(\w+[\\:]:\w+|[^=:<]+)?(?:([=:<])(.*))?$/,
                  N = /[*?+]/;
                if (e)
                  for (
                    e = Xo(e, ","),
                      p["@"] &&
                        ((b = p["@"].attributes), (y = p["@"].attributesOrder)),
                      t = 0,
                      n = e.length;
                    t < n;
                    t++
                  )
                    if ((i = S.exec(e[t]))) {
                      if (
                        ((g = i[1]),
                        (c = i[2]),
                        (v = i[3]),
                        (s = i[5]),
                        (a = {
                          attributes: (d = {}),
                          attributesOrder: (m = [])
                        }),
                        "#" === g && (a.paddEmpty = !0),
                        "-" === g && (a.removeEmpty = !0),
                        "!" === i[4] && (a.removeEmptyAttrs = !0),
                        b)
                      ) {
                        for (x in b) d[x] = b[x];
                        m.push.apply(m, y);
                      }
                      if (s)
                        for (r = 0, o = (s = Xo(s, "|")).length; r < o; r++)
                          if ((i = E.exec(s[r]))) {
                            if (
                              ((u = {}),
                              (f = i[1]),
                              (l = i[2].replace(/[\\:]:/g, ":")),
                              (g = i[3]),
                              (w = i[4]),
                              "!" === f &&
                                ((a.attributesRequired =
                                  a.attributesRequired || []),
                                a.attributesRequired.push(l),
                                (u.required = !0)),
                              "-" === f)
                            ) {
                              delete d[l], m.splice(Ko(m, l), 1);
                              continue;
                            }
                            g &&
                              ("=" === g &&
                                ((a.attributesDefault =
                                  a.attributesDefault || []),
                                a.attributesDefault.push({ name: l, value: w }),
                                (u.defaultValue = w)),
                              ":" === g &&
                                ((a.attributesForced =
                                  a.attributesForced || []),
                                a.attributesForced.push({ name: l, value: w }),
                                (u.forcedValue = w)),
                              "<" === g && (u.validValues = Ho(w, "?"))),
                              N.test(l)
                                ? ((a.attributePatterns =
                                    a.attributePatterns || []),
                                  (u.pattern = C(l)),
                                  a.attributePatterns.push(u))
                                : (d[l] || m.push(l), (d[l] = u));
                          }
                      b || "@" !== c || ((b = d), (y = m)),
                        v && ((a.outputName = c), (p[v] = a)),
                        N.test(c)
                          ? ((a.pattern = C(c)), h.push(a))
                          : (p[c] = a);
                    }
              },
              w = function(e) {
                (p = {}),
                  (h = []),
                  x(e),
                  qo(r, function(e, t) {
                    g[t] = e.children;
                  });
              },
              S = function(e) {
                var t = /^(~)?(.+)$/;
                e &&
                  ((zo.text_block_elements = zo.block_elements = null),
                  qo(Xo(e, ","), function(e) {
                    var n = t.exec(e),
                      r = "~" === n[1],
                      o = r ? "span" : "div",
                      i = n[2];
                    if (
                      ((g[i] = g[o]),
                      (v[i] = o),
                      r || ((c[i.toUpperCase()] = {}), (c[i] = {})),
                      !p[i])
                    ) {
                      var a = p[o];
                      delete (a = $o({}, a)).removeEmptyAttrs,
                        delete a.removeEmpty,
                        (p[i] = a);
                    }
                    qo(g, function(e, t) {
                      e[o] && ((g[t] = e = $o({}, g[t])), (e[i] = e[o]));
                    });
                  }));
              },
              E = function(t) {
                var n = /^([+\-]?)(\w+)\[([^\]]+)\]$/;
                (zo[e.schema] = null),
                  t &&
                    qo(Xo(t, ","), function(e) {
                      var t,
                        r,
                        o = n.exec(e);
                      o &&
                        ((r = o[1]),
                        (t = r ? g[o[2]] : (g[o[2]] = { "#comment": {} })),
                        (t = g[o[2]]),
                        qo(Xo(o[3], "|"), function(e) {
                          "-" === r ? delete t[e] : (t[e] = {});
                        }));
                    });
              },
              N = function(e) {
                var t,
                  n = p[e];
                if (n) return n;
                for (t = h.length; t--; )
                  if ((n = h[t]).pattern.test(e)) return n;
              };
            return (
              e.valid_elements
                ? w(e.valid_elements)
                : (qo(r, function(e, t) {
                    (p[t] = {
                      attributes: e.attributes,
                      attributesOrder: e.attributesOrder
                    }),
                      (g[t] = e.children);
                  }),
                  "html5" !== e.schema &&
                    qo(Xo("strong/b em/i"), function(e) {
                      (e = Xo(e, "/")), (p[e[1]].outputName = e[0]);
                    }),
                  qo(
                    Xo(
                      "ol ul sub sup blockquote span font a table tbody tr strong em b i"
                    ),
                    function(e) {
                      p[e] && (p[e].removeEmpty = !0);
                    }
                  ),
                  qo(
                    Xo("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"),
                    function(e) {
                      p[e].paddEmpty = !0;
                    }
                  ),
                  qo(Xo("span"), function(e) {
                    p[e].removeEmptyAttrs = !0;
                  })),
              S(e.custom_elements),
              E(e.valid_children),
              x(e.extended_valid_elements),
              E("+ol[ul|ol],+ul[ul|ol]"),
              qo(
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
                  p[t] && (p[t].parentsRequired = Xo(e));
                }
              ),
              e.invalid_elements &&
                qo(Wo(e.invalid_elements), function(e) {
                  p[e] && delete p[e];
                }),
              N("span") || x("span[!data-mce-type|*]"),
              {
                children: g,
                elements: p,
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
                  return m;
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
                addValidElements: x,
                setValidElements: w,
                addCustomElements: S,
                addValidChildren: E
              }
            );
          }
          var Qo = function(e, t, n, r) {
            var o = function(e) {
              return (e = parseInt(e, 10).toString(16)).length > 1
                ? e
                : "0" + e;
            };
            return "#" + o(t) + o(n) + o(r);
          };
          function Zo(e, t) {
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
                return e.replace(a, Qo);
              },
              parse: function(t) {
                var r,
                  o,
                  i,
                  f,
                  d,
                  m,
                  p,
                  g,
                  h = {},
                  v = e.url_converter,
                  b = e.url_converter_scope || this,
                  y = function(e, t, r) {
                    var o, i, a, u;
                    if (
                      (o = h[e + "-top" + t]) &&
                      (i = h[e + "-right" + t]) &&
                      (a = h[e + "-bottom" + t]) &&
                      (u = h[e + "-left" + t])
                    ) {
                      var s = [o, i, a, u];
                      for (n = s.length - 1; n-- && s[n] === s[n + 1]; );
                      (n > -1 && r) ||
                        ((h[e + t] = -1 === n ? s[0] : s.join(" ")),
                        delete h[e + "-top" + t],
                        delete h[e + "-right" + t],
                        delete h[e + "-bottom" + t],
                        delete h[e + "-left" + t]);
                    }
                  },
                  C = function(e) {
                    var t,
                      n = h[e];
                    if (n) {
                      for (t = (n = n.split(" ")).length; t--; )
                        if (n[t] !== n[0]) return !1;
                      return (h[e] = n[0]), !0;
                    }
                  },
                  x = function(e) {
                    return (f = !0), l[e];
                  },
                  w = function(e, t) {
                    return (
                      f &&
                        (e = e.replace(/\uFEFF[0-9]/g, function(e) {
                          return l[e];
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
                      return "'" + (i = w(i)).replace(/\'/g, "\\'") + "'";
                    if (((n = w(n || r || o)), !e.allow_script_urls)) {
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
                      .replace(/\\[\"\';:\uFEFF]/g, x)
                      .replace(/\"[^\"]+\"|\'[^\']+\'/g, function(e) {
                        return e.replace(/[;:]/g, x);
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
                        (i = (i = i.replace(a, Qo)).replace(u, N)),
                        (h[o] = f ? w(i, !0) : i);
                    }
                  y("border", "", !0),
                    y("border", "-width"),
                    y("border", "-color"),
                    y("border", "-style"),
                    y("padding", ""),
                    y("margin", ""),
                    (d = "border"),
                    (p = "border-style"),
                    (g = "border-color"),
                    C((m = "border-width")) &&
                      C(p) &&
                      C(g) &&
                      ((h[d] = h[m] + " " + h[p] + " " + h[g]),
                      delete h[m],
                      delete h[p],
                      delete h[g]),
                    "medium none" === h.border && delete h.border,
                    "none" === h["border-image"] && delete h["border-image"];
                }
                return h;
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
          var ei = Xt.each,
            ti = Xt.grep,
            ni = le.ie,
            ri = /^([a-z0-9],?)+$/i,
            oi = /^[ \t\r\n]*$/,
            ii = function(e, t, n) {
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
            ai = function(e, t) {
              var n = t.attr("style"),
                r = e.serialize(e.parse(n), t[0].nodeName);
              r || (r = null), t.attr("data-mce-style", r);
            },
            ui = function(e, t) {
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
          function si(e, t) {
            var n,
              a = this;
            void 0 === t && (t = {});
            var u = {},
              s = window,
              c = {},
              l = 0,
              f = (function(e, t) {
                void 0 === t && (t = {});
                var n,
                  a = 0,
                  u = {};
                n = t.maxLoadTime || 5e3;
                var s = function(t) {
                    e.getElementsByTagName("head")[0].appendChild(t);
                  },
                  c = function(r, o, i) {
                    var c,
                      l,
                      f,
                      d,
                      m = function(e) {
                        (d.status = e),
                          (d.passed = []),
                          (d.failed = []),
                          c &&
                            ((c.onload = null), (c.onerror = null), (c = null));
                      },
                      p = function() {
                        for (var e = d.passed, t = e.length; t--; ) e[t]();
                        m(2);
                      },
                      g = function() {
                        for (var e = d.failed, t = e.length; t--; ) e[t]();
                        m(3);
                      },
                      h = function(e, t) {
                        e() ||
                          (new Date().getTime() - f < n
                            ? ge.setTimeout(t)
                            : g());
                      },
                      v = function() {
                        h(function() {
                          for (var t, n, r = e.styleSheets, o = r.length; o--; )
                            if (
                              (n = (t = r[o]).ownerNode
                                ? t.ownerNode
                                : t.owningElement) &&
                              n.id === c.id
                            )
                              return p(), !0;
                        }, v);
                      },
                      b = function() {
                        h(function() {
                          try {
                            var e = l.sheet.cssRules;
                            return p(), !!e;
                          } catch (e) {}
                        }, b);
                      };
                    if (
                      ((r = Xt._addCacheSuffix(r)),
                      u[r]
                        ? (d = u[r])
                        : ((d = { passed: [], failed: [] }), (u[r] = d)),
                      o && d.passed.push(o),
                      i && d.failed.push(i),
                      1 !== d.status)
                    )
                      if (2 !== d.status)
                        if (3 !== d.status) {
                          if (
                            ((d.status = 1),
                            ((c = e.createElement("link")).rel = "stylesheet"),
                            (c.type = "text/css"),
                            (c.id = "u" + a++),
                            (c.async = !1),
                            (c.defer = !1),
                            (f = new Date().getTime()),
                            t.contentCssCors && (c.crossOrigin = "anonymous"),
                            "onload" in c &&
                              !(
                                (y = navigator.userAgent.match(
                                  /WebKit\/(\d*)/
                                )) && parseInt(y[1], 10) < 536
                              ))
                          )
                            (c.onload = v), (c.onerror = g);
                          else {
                            if (navigator.userAgent.indexOf("Firefox") > 0)
                              return (
                                ((l = e.createElement("style")).textContent =
                                  '@import "' + r + '"'),
                                b(),
                                void s(l)
                              );
                            v();
                          }
                          var y;
                          s(c), (c.href = r);
                        } else g();
                      else p();
                  },
                  l = function(e) {
                    return Wr.nu(function(t) {
                      c(e, r(t, o(Jr.value(e))), r(t, o(Jr.error(e))));
                    });
                  },
                  f = function(e) {
                    return e.fold(i, i);
                  };
                return {
                  load: c,
                  loadAll: function(e, t, n) {
                    Xr(U(e, l)).get(function(e) {
                      var r = z(e, function(e) {
                        return e.isValue();
                      });
                      r.fail.length > 0 ? n(r.fail.map(f)) : t(r.pass.map(f));
                    });
                  }
                };
              })(e, { contentCssCors: t.contentCssCors }),
              d = [],
              m = t.schema ? t.schema : Jo({}),
              p = Zo(
                {
                  url_converter: t.url_converter,
                  url_converter_scope: t.url_converter_scope
                },
                t.schema
              ),
              g = t.ownEvents ? new Ee(t.proxy) : Ee.Event,
              h = m.getBlockElements(),
              v = pn.overrideDefaults(function() {
                return { context: e, element: W.getRoot() };
              }),
              b = function(t) {
                if (t && e && "string" == typeof t) {
                  var n = e.getElementById(t);
                  return n && n.id !== t ? e.getElementsByName(t)[1] : n;
                }
                return t;
              },
              y = function(e) {
                return "string" == typeof e && (e = b(e)), v(e);
              },
              C = function(e, t, r) {
                var o,
                  i,
                  a = y(e);
                return (
                  a.length &&
                    (i = (o = n[t]) && o.get ? o.get(a, t) : a.attr(t)),
                  void 0 === i && (i = r || ""),
                  i
                );
              },
              x = function(e) {
                var t = b(e);
                return t ? t.attributes : [];
              },
              w = function(e, r, o) {
                var i, a;
                "" === o && (o = null);
                var u = y(e);
                (i = u.attr(r)),
                  u.length &&
                    ((a = n[r]) && a.set ? a.set(u, o, r) : u.attr(r, o),
                    i !== o &&
                      t.onSetAttrib &&
                      t.onSetAttrib({ attrElm: u, attrName: r, attrValue: o }));
              },
              S = function() {
                return t.root_element || e.body;
              },
              E = function(t, n) {
                return Vr.getPos(e.body, b(t), n);
              },
              N = function(e, t, n) {
                var r = y(e);
                return n
                  ? r.css(t)
                  : ("float" ===
                      (t = t.replace(/-(\D)/g, function(e, t) {
                        return t.toUpperCase();
                      })) &&
                      (t = le.ie && le.ie < 12 ? "styleFloat" : "cssFloat"),
                    r[0] && r[0].style ? r[0].style[t] : void 0);
              },
              k = function(e) {
                var t, n;
                return (
                  (e = b(e)),
                  (t = N(e, "width")),
                  (n = N(e, "height")),
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
                  if (ri.test(t)) {
                    var r = t.toLowerCase().split(/,/),
                      o = e.nodeName.toLowerCase();
                    for (n = r.length - 1; n >= 0; n--)
                      if (r[n] === o) return !0;
                    return !1;
                  }
                  if (e.nodeType && 1 !== e.nodeType) return !1;
                }
                var i = Array.isArray(e) ? e : [e];
                return Nt(t, i[0].ownerDocument || i[0], null, i).length > 0;
              },
              _ = function(e, t, n, r) {
                var o,
                  i = [],
                  a = b(e);
                for (
                  r = void 0 === r,
                    n = n || ("BODY" !== S().nodeName ? S().parentNode : null),
                    Xt.is(t, "string") &&
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
              B = function(e, t, n) {
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
              A = function(e, t, n) {
                var r,
                  o = "string" == typeof e ? b(e) : e;
                if (!o) return !1;
                if (Xt.isArray(o) && (o.length || 0 === o.length))
                  return (
                    (r = []),
                    ei(o, function(e, o) {
                      e &&
                        ("string" == typeof e && (e = b(e)),
                        r.push(t.call(n, e, o)));
                    }),
                    r
                  );
                var i = n || a;
                return t.call(i, o);
              },
              R = function(e, t) {
                y(e).each(function(e, n) {
                  ei(t, function(e, t) {
                    w(n, t, e);
                  });
                });
              },
              O = function(e, t) {
                var n = y(e);
                ni
                  ? n.each(function(e, n) {
                      if (!1 !== n.canHaveHTML) {
                        for (; n.firstChild; ) n.removeChild(n.firstChild);
                        try {
                          (n.innerHTML = "<br>" + t),
                            n.removeChild(n.firstChild);
                        } catch (e) {
                          pn("<div></div>")
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
                return A(t, function(t) {
                  var a = "string" == typeof n ? e.createElement(n) : n;
                  return (
                    R(a, r),
                    o &&
                      ("string" != typeof o && o.nodeType
                        ? a.appendChild(o)
                        : "string" == typeof o && O(a, o)),
                    i ? a : t.appendChild(a)
                  );
                });
              },
              P = function(t, n, r) {
                return D(e.createElement(t), t, n, r, !0);
              },
              I = jo.decode,
              L = jo.encodeAllRaw,
              M = function(e, t) {
                var n = y(e);
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
              F = function(e, t, n) {
                y(e)
                  .toggleClass(t, n)
                  .each(function() {
                    "" === this.className && pn(this).attr("class", null);
                  });
              },
              j = function(e, t, n) {
                return A(t, function(t) {
                  return (
                    Xt.is(t, "array") && (e = e.cloneNode(!0)),
                    n &&
                      ei(ti(t.childNodes), function(t) {
                        e.appendChild(t);
                      }),
                    t.parentNode.replaceChild(e, t)
                  );
                });
              },
              V = function() {
                return e.createRange();
              },
              H = function(n, r, o, i) {
                if (Xt.isArray(n)) {
                  for (var a = n.length; a--; ) n[a] = H(n[a], r, o, i);
                  return n;
                }
                return (
                  !t.collect || (n !== e && n !== s) || d.push([n, r, o, i]),
                  g.bind(n, r, o, i || W)
                );
              },
              q = function(t, n, r) {
                var o;
                if (Xt.isArray(t)) {
                  for (o = t.length; o--; ) t[o] = q(t[o], n, r);
                  return t;
                }
                if (d && (t === e || t === s))
                  for (o = d.length; o--; ) {
                    var i = d[o];
                    t !== i[0] ||
                      (n && n !== i[1]) ||
                      (r && r !== i[2]) ||
                      g.unbind(i[0], i[1], i[2]);
                  }
                return g.unbind(t, n, r);
              },
              $ = function(e) {
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
              W = {
                doc: e,
                settings: t,
                win: s,
                files: c,
                stdMode: !0,
                boxModel: !0,
                styleSheetLoader: f,
                boundEvents: d,
                styles: p,
                schema: m,
                events: g,
                isBlock: function(e) {
                  if ("string" == typeof e) return !!h[e];
                  if (e) {
                    var t = e.nodeType;
                    if (t) return !(1 !== t || !h[e.nodeName]);
                  }
                  return !1;
                },
                $: v,
                $$: y,
                root: null,
                clone: function(t, n) {
                  if (!ni || 1 !== t.nodeType || n) return t.cloneNode(n);
                  if (!n) {
                    var r = e.createElement(t.nodeName);
                    return (
                      ei(x(t), function(e) {
                        w(r, e.nodeName, C(t, e.nodeName));
                      }),
                      r
                    );
                  }
                  return null;
                },
                getRoot: S,
                getViewPort: function(e) {
                  var t = e || s,
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
                    (e = b(e)),
                    (t = E(e)),
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
                get: b,
                getNext: function(e, t) {
                  return B(e, t, "nextSibling");
                },
                getPrev: function(e, t) {
                  return B(e, t, "previousSibling");
                },
                select: function(n, r) {
                  return Nt(n, b(r) || t.root_element || e, []);
                },
                is: T,
                add: D,
                create: P,
                createHTML: function(e, t, n) {
                  var r,
                    o = "";
                  for (r in ((o += "<" + e), t))
                    t.hasOwnProperty(r) &&
                      null !== t[r] &&
                      void 0 !== t[r] &&
                      (o += " " + r + '="' + L(t[r]) + '"');
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
                remove: M,
                setStyle: function(e, n, r) {
                  var o = y(e).css(n, r);
                  t.update_styles && ai(p, o);
                },
                getStyle: N,
                setStyles: function(e, n) {
                  var r = y(e).css(n);
                  t.update_styles && ai(p, r);
                },
                removeAllAttribs: function(e) {
                  return A(e, function(e) {
                    var t,
                      n = e.attributes;
                    for (t = n.length - 1; t >= 0; t--)
                      e.removeAttributeNode(n.item(t));
                  });
                },
                setAttrib: w,
                setAttribs: R,
                getAttrib: C,
                getPos: E,
                parseStyle: function(e) {
                  return p.parse(e);
                },
                serializeStyle: function(e, t) {
                  return p.serialize(e, t);
                },
                addStyle: function(t) {
                  var n, r;
                  if (W !== si.DOM && e === document) {
                    if (u[t]) return;
                    u[t] = !0;
                  }
                  (r = e.getElementById("mceDefaultStyles")) ||
                    (((r = e.createElement("style")).id = "mceDefaultStyles"),
                    (r.type = "text/css"),
                    (n = e.getElementsByTagName("head")[0]).firstChild
                      ? n.insertBefore(r, n.firstChild)
                      : n.appendChild(r)),
                    r.styleSheet
                      ? (r.styleSheet.cssText += t)
                      : r.appendChild(e.createTextNode(t));
                },
                loadCSS: function(t) {
                  var n;
                  W === si.DOM || e !== document
                    ? (t || (t = ""),
                      (n = e.getElementsByTagName("head")[0]),
                      ei(t.split(","), function(e) {
                        var t;
                        (e = Xt._addCacheSuffix(e)),
                          c[e] ||
                            ((c[e] = !0),
                            (t = P("link", { rel: "stylesheet", href: e })),
                            n.appendChild(t));
                      }))
                    : si.DOM.loadCSS(t);
                },
                addClass: function(e, t) {
                  y(e).addClass(t);
                },
                removeClass: function(e, t) {
                  F(e, t, !1);
                },
                hasClass: function(e, t) {
                  return y(e).hasClass(t);
                },
                toggleClass: F,
                show: function(e) {
                  y(e).show();
                },
                hide: function(e) {
                  y(e).hide();
                },
                isHidden: function(e) {
                  return "none" === y(e).css("display");
                },
                uniqueId: function(e) {
                  return (e || "mce_") + l++;
                },
                setHTML: O,
                getOuterHTML: function(e) {
                  var t = "string" == typeof e ? b(e) : e;
                  return ko.isElement(t)
                    ? t.outerHTML
                    : pn("<div></div>")
                        .append(pn(t).clone())
                        .html();
                },
                setOuterHTML: function(e, t) {
                  y(e).each(function() {
                    try {
                      if ("outerHTML" in this) return void (this.outerHTML = t);
                    } catch (e) {}
                    M(pn(this).html(t), !0);
                  });
                },
                decode: I,
                encode: L,
                insertAfter: function(e, t) {
                  var n = b(t);
                  return A(e, function(e) {
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
                replace: j,
                rename: function(e, t) {
                  var n;
                  return (
                    e.nodeName !== t.toUpperCase() &&
                      ((n = P(t)),
                      ei(x(e), function(t) {
                        w(n, t.nodeName, C(e, t.nodeName));
                      }),
                      j(n, e, !0)),
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
                  return p.toHex(Xt.trim(e));
                },
                run: A,
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
                    (a = new Qr(e, e.parentNode)),
                      (t = t || (m ? m.getNonEmptyElements() : null)),
                      (i = m ? m.getWhiteSpaceElements() : {});
                    do {
                      if (((o = e.nodeType), ko.isElement(e))) {
                        var c = e.getAttribute("data-mce-bogus");
                        if (c) {
                          e = a.next("all" === c);
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
                      if (3 === o && !oi.test(e.nodeValue)) return !1;
                      if (
                        3 === o &&
                        e.parentNode &&
                        i[e.parentNode.nodeName] &&
                        oi.test(e.nodeValue)
                      )
                        return !1;
                      e = a.next();
                    } while (e);
                  }
                  return s <= 1;
                },
                createRng: V,
                nodeIndex: ui,
                split: function(e, t, n) {
                  var r,
                    o,
                    i,
                    a = V();
                  if (e && t)
                    return (
                      a.setStart(e.parentNode, ui(e)),
                      a.setEnd(t.parentNode, ui(t)),
                      (r = a.extractContents()),
                      (a = V()).setStart(t.parentNode, ui(t) + 1),
                      a.setEnd(e.parentNode, ui(e) + 1),
                      (o = a.extractContents()),
                      (i = e.parentNode).insertBefore(Bo.trimNode(W, r), e),
                      n ? i.insertBefore(n, e) : i.insertBefore(t, e),
                      i.insertBefore(Bo.trimNode(W, o), e),
                      M(e),
                      n || t
                    );
                },
                bind: H,
                unbind: q,
                fire: function(e, t, n) {
                  return g.fire(e, t, n);
                },
                getContentEditable: $,
                getContentEditableParent: function(e) {
                  for (
                    var t = S(), n = null;
                    e && e !== t && null === (n = $(e));
                    e = e.parentNode
                  );
                  return n;
                },
                destroy: function() {
                  if (d)
                    for (var e = d.length; e--; ) {
                      var t = d[e];
                      g.unbind(t[0], t[1], t[2]);
                    }
                  Nt.setDocument && Nt.setDocument();
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
              (n = ii(p, t, function() {
                return W;
              })),
              W
            );
          }
          !(function(e) {
            (e.DOM = e(document)), (e.nodeIndex = ui);
          })(si || (si = {}));
          var ci = si,
            li = ci.DOM,
            fi = Xt.each,
            di = Xt.grep,
            mi = function(e) {
              return "function" == typeof e;
            },
            pi = function() {
              var e = {},
                t = [],
                n = {},
                r = [],
                o = 0,
                i = function(e, t, n) {
                  var r,
                    o,
                    i = li;
                  (o = i.uniqueId()),
                    ((r = document.createElement("script")).id = o),
                    (r.type = "text/javascript"),
                    (r.src = Xt._addCacheSuffix(e)),
                    (r.onload = function() {
                      i.remove(o),
                        r && (r.onreadystatechange = r.onload = r = null),
                        t();
                    }),
                    (r.onerror = function() {
                      mi(n)
                        ? n()
                        : "undefined" != typeof console &&
                          console.log &&
                          console.log("Failed to load script: " + e);
                    }),
                    (
                      document.getElementsByTagName("head")[0] || document.body
                    ).appendChild(r);
                };
              (this.loadScript = function(e, t, n) {
                i(e, t, n);
              }),
                (this.isDone = function(t) {
                  return 2 === e[t];
                }),
                (this.markDone = function(t) {
                  e[t] = 2;
                }),
                (this.add = this.load = function(r, o, i, a) {
                  void 0 === e[r] && (t.push(r), (e[r] = 0)),
                    o &&
                      (n[r] || (n[r] = []),
                      n[r].push({ success: o, failure: a, scope: i || this }));
                }),
                (this.remove = function(t) {
                  delete e[t], delete n[t];
                }),
                (this.loadQueue = function(e, n, r) {
                  this.loadScripts(t, e, n, r);
                }),
                (this.loadScripts = function(t, a, u, s) {
                  var c,
                    l = [],
                    f = function(e, t) {
                      fi(n[t], function(t) {
                        mi(t[e]) && t[e].call(t.scope);
                      }),
                        (n[t] = void 0);
                    };
                  r.push({ success: a, failure: s, scope: u || this }),
                    (c = function() {
                      var n = di(t);
                      if (
                        ((t.length = 0),
                        fi(n, function(t) {
                          2 !== e[t]
                            ? 3 !== e[t]
                              ? 1 !== e[t] &&
                                ((e[t] = 1),
                                o++,
                                i(
                                  t,
                                  function() {
                                    (e[t] = 2), o--, f("success", t), c();
                                  },
                                  function() {
                                    (e[t] = 3),
                                      o--,
                                      l.push(t),
                                      f("failure", t),
                                      c();
                                  }
                                ))
                              : f("failure", t)
                            : f("success", t);
                        }),
                        !o)
                      ) {
                        var a = r.slice(0);
                        (r.length = 0),
                          fi(a, function(e) {
                            0 === l.length
                              ? mi(e.success) && e.success.call(e.scope)
                              : mi(e.failure) && e.failure.call(e.scope, l);
                          });
                      }
                    })();
                });
            };
          pi.ScriptLoader = new pi();
          var gi = function(e) {
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
                  return gi(n());
                }
              };
            },
            hi = {},
            vi = gi("en"),
            bi = {
              setCode: function(e) {
                e && vi.set(e);
              },
              getCode: function() {
                return vi.get();
              },
              add: function(e, t) {
                var n = hi[e];
                for (var r in (n || (hi[e] = n = {}), t))
                  n[r.toLowerCase()] = t[r];
              },
              translate: function(e) {
                var t,
                  n = hi[vi.get()] || {},
                  r = function(e) {
                    return I(e)
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
                    return lr(n, o) ? r(n[o]) : t;
                  },
                  a = function(e) {
                    return e.replace(/{context:\w+}$/, "");
                  },
                  u = function(e) {
                    return e;
                  };
                if (o(e)) return u("");
                if (R((t = e)) && lr(t, "raw")) return u(r(e.raw));
                if (
                  (function(e) {
                    return O(e) && e.length > 1;
                  })(e)
                ) {
                  var s = e.slice(1);
                  return u(
                    a(
                      i(e[0]).replace(/\{([0-9]+)\}/g, function(e, t) {
                        return lr(s, t) ? r(s[t]) : e;
                      })
                    )
                  );
                }
                return u(a(i(e)));
              },
              isRtl: function() {
                return cr(hi, vi.get())
                  .bind(function(e) {
                    return cr(e, "_dir");
                  })
                  .exists(function(e) {
                    return "rtl" === e;
                  });
              },
              hasCode: function(e) {
                return lr(hi, e);
              }
            },
            yi = Xt.each;
          function Ci() {
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
                yi(o, function(e) {
                  var n = a(t, e);
                  s(n.resource, n, void 0, void 0);
                }),
                  n && (r ? n.call(r) : n.call(pi));
              },
              s = function(e, t, o, i, a) {
                if (!n[e]) {
                  var s =
                    "string" == typeof t ? t : t.prefix + t.resource + t.suffix;
                  0 !== s.indexOf("/") &&
                    -1 === s.indexOf("://") &&
                    (s = Ci.baseURL + "/" + s),
                    (n[e] = s.substring(0, s.lastIndexOf("/"))),
                    r[e]
                      ? u(e, t, o, i)
                      : pi.ScriptLoader.add(
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
                var r = bi.getCode();
                if (r && !1 !== Ci.languageLoad) {
                  if (t)
                    if (
                      -1 !==
                      (t = "," + t + ",").indexOf("," + r.substr(0, 2) + ",")
                    )
                      r = r.substr(0, 2);
                    else if (-1 === t.indexOf("," + r + ",")) return;
                  pi.ScriptLoader.add(n[e] + "/langs/" + r + ".js");
                }
              },
              add: function(e, n, i) {
                t.push(n), (r[e] = { instance: n, dependencies: i });
                var a = z(o, function(t) {
                  return t.name === e;
                });
                return (
                  (o = a.fail),
                  yi(a.pass, function(e) {
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
                yi(n, function(e) {
                  pi.ScriptLoader.add(r + "/" + e);
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
          })(Ci || (Ci = {}));
          var xi = function(e, t) {
              Rr(e).each(function(n) {
                n.dom().insertBefore(t.dom(), e.dom());
              });
            },
            wi = function(e, t) {
              Dr(e).fold(
                function() {
                  Rr(e).each(function(e) {
                    Ei(e, t);
                  });
                },
                function(e) {
                  xi(e, t);
                }
              );
            },
            Si = function(e, t) {
              Fr(e).fold(
                function() {
                  Ei(e, t);
                },
                function(n) {
                  e.dom().insertBefore(t.dom(), n.dom());
                }
              );
            },
            Ei = function(e, t) {
              e.dom().appendChild(t.dom());
            },
            Ni = function(e, t) {
              j(t, function(t) {
                Ei(e, t);
              });
            },
            ki = function(e) {
              (e.dom().textContent = ""),
                j(Lr(e), function(e) {
                  Ti(e);
                });
            },
            Ti = function(e) {
              var t = e.dom();
              null !== t.parentNode && t.parentNode.removeChild(t);
            },
            _i = function(e) {
              var t,
                n = Lr(e);
              n.length > 0 &&
                ((t = e),
                j(n, function(e) {
                  xi(t, e);
                })),
                Ti(e);
            },
            Bi = function(e, t) {
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
            Ai = function(e, t) {
              var n = pr(e, t);
              return void 0 === n || "" === n ? [] : n.split(" ");
            },
            Ri = function(e) {
              return void 0 !== e.dom().classList;
            },
            Oi = function(e, t) {
              return (function(e, t, n) {
                var r = Ai(e, t).concat([n]);
                return dr(e, t, r.join(" ")), !0;
              })(e, "class", t);
            },
            Di = function(e, t) {
              return (function(e, t, n) {
                var r = V(Ai(e, t), function(e) {
                  return e !== n;
                });
                return r.length > 0 ? dr(e, t, r.join(" ")) : gr(e, t), !1;
              })(e, "class", t);
            },
            Pi = function(e, t) {
              Ri(e) ? e.dom().classList.add(t) : Oi(e, t);
            },
            Ii = function(e) {
              0 ===
                (Ri(e)
                  ? e.dom().classList
                  : (function(e) {
                      return Ai(e, "class");
                    })(e)
                ).length && gr(e, "class");
            },
            Li = function(e, t) {
              return Ri(e) && e.dom().classList.contains(t);
            },
            Mi = function(e, t) {
              var n = [];
              return (
                j(Lr(e), function(e) {
                  t(e) && (n = n.concat([e])), (n = n.concat(Mi(e, t)));
                }),
                n
              );
            },
            Fi = function(e, t) {
              return (function(e, t) {
                var n = void 0 === t ? document : t.dom();
                return Tr(n) ? [] : U(n.querySelectorAll(e), Gn.fromDom);
              })(t, e);
            };
          function Ui(e, t, n, r, o) {
            return e(n, r) ? _.some(n) : I(o) && o(n) ? _.none() : t(n, r, o);
          }
          var ji = function(e, t, n) {
              for (var r = e.dom(), i = I(n) ? n : o(!1); r.parentNode; ) {
                r = r.parentNode;
                var a = Gn.fromDom(r);
                if (t(a)) return _.some(a);
                if (i(a)) break;
              }
              return _.none();
            },
            zi = function(e, t, n) {
              return Ui(
                function(e) {
                  return t(e);
                },
                ji,
                e,
                t,
                n
              );
            },
            Vi = function(e, t, n) {
              return ji(
                e,
                function(e) {
                  return kr(e, t);
                },
                n
              );
            },
            Hi = function(e, t) {
              return (function(e, t) {
                var n = void 0 === t ? document : t.dom();
                return Tr(n)
                  ? _.none()
                  : _.from(n.querySelector(e)).map(Gn.fromDom);
              })(t, e);
            },
            qi = function(e, t, n) {
              return Ui(kr, Vi, e, t, n);
            },
            $i = o("mce-annotation"),
            Wi = o("data-mce-annotation"),
            Ki = o("data-mce-annotation-uid"),
            Xi = function(e, t) {
              var n = e.selection.getRng(),
                r = Gn.fromDom(n.startContainer),
                o = Gn.fromDom(e.getBody()),
                i = t.fold(
                  function() {
                    return "." + $i();
                  },
                  function(e) {
                    return "[" + Wi() + '="' + e + '"]';
                  }
                ),
                a = Mr(r, n.startOffset).getOr(r),
                u = qi(a, i, function(e) {
                  return _r(e, o);
                }),
                s = function(e, t) {
                  return (
                    (n = t),
                    (r = e.dom()) && r.hasAttribute && r.hasAttribute(n)
                      ? _.some(pr(e, t))
                      : _.none()
                  );
                  var n, r;
                };
              return u.bind(function(t) {
                return s(t, "" + Ki()).bind(function(n) {
                  return s(t, "" + Wi()).map(function(t) {
                    var r = Yi(e, n);
                    return { uid: n, name: t, elements: r };
                  });
                });
              });
            },
            Yi = function(e, t) {
              var n = Gn.fromDom(e.getBody());
              return Fi(n, "[" + Ki() + '="' + t + '"]');
            },
            Gi = function(e, t) {
              var n = Gn.fromDom(e.getBody()),
                r = Fi(n, "[" + Wi() + '="' + t + '"]'),
                o = {};
              return (
                j(r, function(e) {
                  var t = pr(e, Ki()),
                    n = o.hasOwnProperty(t) ? o[t] : [];
                  o[t] = n.concat([e]);
                }),
                o
              );
            },
            Ji = function(e, t) {
              var n,
                r,
                o,
                i = gi({}),
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
                        : { listeners: [], previous: gi(_.none()) }
                    );
                  (n[e] = r), i.set(n);
                },
                s = ((n = function() {
                  var t,
                    n,
                    r,
                    o = i.get(),
                    s = ((t = or(o)), (r = G.call(t, 0)).sort(n), r);
                  j(s, function(t) {
                    u(t, function(n) {
                      var r = n.previous.get();
                      return (
                        Xi(e, _.some(t)).fold(
                          function() {
                            r.isSome() &&
                              ((function(e) {
                                a(e, function(t) {
                                  j(t.listeners, function(t) {
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
            Qi = function(e, t) {
              e.on("init", function() {
                e.serializer.addNodeFilter("span", function(e) {
                  j(e, function(e) {
                    (function(e) {
                      return _.from(e.attributes.map[Wi()]).bind(t.lookup);
                    })(e).each(function(t) {
                      !1 === t.persistent && e.unwrap();
                    });
                  });
                });
              });
            },
            Zi = function() {
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
            ea = 0,
            ta = function(e, t) {
              return Gn.fromDom(e.dom().cloneNode(t));
            },
            na = function(e) {
              return ta(e, !1);
            },
            ra = function(e) {
              return ta(e, !0);
            },
            oa = function(e, t) {
              var n,
                r,
                o = Ar(e).dom(),
                i = Gn.fromDom(o.createDocumentFragment()),
                a = ((n = t),
                ((r = (o || document).createElement("div")).innerHTML = n),
                Lr(Gn.fromDom(r)));
              Ni(i, a), ki(e), Ei(e, i);
            },
            ia = function(e) {
              return "\ufeff" === e;
            },
            aa = "\ufeff",
            ua = function(e) {
              return e.replace(new RegExp("\ufeff", "g"), "");
            },
            sa = ko.isElement,
            ca = ko.isText,
            la = function(e) {
              return (
                ca(e) && (e = e.parentNode),
                sa(e) && e.hasAttribute("data-mce-caret")
              );
            },
            fa = function(e) {
              return ca(e) && ia(e.data);
            },
            da = function(e) {
              return la(e) || fa(e);
            },
            ma = function(e) {
              return e.firstChild !== e.lastChild || !ko.isBr(e.firstChild);
            },
            pa = function(e) {
              var t = e.container();
              return (
                !(!e || !ko.isText(t)) &&
                (t.data.charAt(e.offset()) === aa ||
                  (e.isAtStart() && fa(t.previousSibling)))
              );
            },
            ga = function(e) {
              var t = e.container();
              return (
                !(!e || !ko.isText(t)) &&
                (t.data.charAt(e.offset() - 1) === aa ||
                  (e.isAtEnd() && fa(t.nextSibling)))
              );
            },
            ha = function(e, t, n) {
              var r, o, i;
              return (
                (r = t.ownerDocument.createElement(e)).setAttribute(
                  "data-mce-caret",
                  n ? "before" : "after"
                ),
                r.setAttribute("data-mce-bogus", "all"),
                r.appendChild(
                  ((i = document.createElement("br")).setAttribute(
                    "data-mce-bogus",
                    "1"
                  ),
                  i)
                ),
                (o = t.parentNode),
                n
                  ? o.insertBefore(r, t)
                  : t.nextSibling
                  ? o.insertBefore(r, t.nextSibling)
                  : o.appendChild(r),
                r
              );
            },
            va = function(e) {
              return ca(e) && e.data[0] === aa;
            },
            ba = function(e) {
              return ca(e) && e.data[e.data.length - 1] === aa;
            },
            ya = function(e) {
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
            Ca = ko.isContentEditableTrue,
            xa = ko.isContentEditableFalse,
            wa = ko.isBr,
            Sa = ko.isText,
            Ea = ko.matchNodeNames("script style textarea"),
            Na = ko.matchNodeNames(
              "img input textarea hr iframe video audio object"
            ),
            ka = ko.matchNodeNames("table"),
            Ta = da,
            _a = function(e) {
              return (
                !Ta(e) &&
                (Sa(e) ? !Ea(e.parentNode) : Na(e) || wa(e) || ka(e) || Ba(e))
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
                  })(e) && xa(e)
              );
            },
            Aa = function(e, t) {
              return (
                _a(e) &&
                (function(e, t) {
                  for (e = e.parentNode; e && e !== t; e = e.parentNode) {
                    if (Ba(e)) return !1;
                    if (Ca(e)) return !0;
                  }
                  return !0;
                })(e, t)
              );
            },
            Ra = Math.round,
            Oa = function(e) {
              return e
                ? {
                    left: Ra(e.left),
                    top: Ra(e.top),
                    bottom: Ra(e.bottom),
                    right: Ra(e.right),
                    width: Ra(e.width),
                    height: Ra(e.height)
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
            Ia = function(e, t) {
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
            Ma = function(e, t) {
              return t.left > e.left && t.right < e.right
                ? 0
                : t.left < e.left
                ? t.left - e.left
                : t.right - e.right;
            },
            Fa = function(e, t) {
              return t.top > e.top && t.bottom < e.bottom
                ? 0
                : t.top < e.top
                ? t.top - e.top
                : t.bottom - e.bottom;
            },
            Ua = function(e) {
              var t = e.startContainer,
                n = e.startOffset;
              return t.hasChildNodes() && e.endOffset === n + 1
                ? t.childNodes[n]
                : null;
            },
            ja = function(e, t) {
              return (
                1 === e.nodeType &&
                  e.hasChildNodes() &&
                  (t >= e.childNodes.length && (t = e.childNodes.length - 1),
                  (e = e.childNodes[t])),
                e
              );
            },
            za = new RegExp(
              "[̀-ͯ҃-҇҈-҉֑-ֽֿׁ-ׂׄ-ׇׅؐ-ًؚ-ٰٟۖ-ۜ۟-ۤۧ-۪ۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣣ-ंऺ़ु-ै्॑-ॗॢ-ॣঁ়াু-ৄ্ৗৢ-ৣਁ-ਂ਼ੁ-ੂੇ-ੈੋ-੍ੑੰ-ੱੵઁ-ં઼ુ-ૅે-ૈ્ૢ-ૣଁ଼ାିୁ-ୄ୍ୖୗୢ-ୣஂாீ்ௗఀా-ీె-ైొ-్ౕ-ౖౢ-ౣಁ಼ಿೂೆೌ-್ೕ-ೖೢ-ೣഁാു-ൄ്ൗൢ-ൣ්ාි-ුූෟัิ-ฺ็-๎ັິ-ູົ-ຼ່-ໍ༘-ཱ༹༙༵༷-ཾྀ-྄྆-྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္-်ွ-ှၘ-ၙၞ-ၠၱ-ၴႂႅ-ႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒ-ᝓᝲ-ᝳ឴-឵ិ-ួំ៉-៓៝᠋-᠍ᢩᤠ-ᤢᤧ-ᤨᤲ᤹-᤻ᨗ-ᨘᨛᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼᪰-᪽᪾ᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀ-ᮁᮢ-ᮥᮨ-ᮩ᮫-ᮭ᯦ᯨ-ᯩᯭᯯ-ᯱᰬ-ᰳᰶ-᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸-᳹᷀-᷵᷼-᷿‌-‍⃐-⃜⃝-⃠⃡⃢-⃤⃥-⃰⳯-⵿⳱ⷠ-〪ⷿ-〭〮-゙〯-゚꙯꙰-꙲ꙴ-꙽ꚞ-ꚟ꛰-꛱ꠂ꠆ꠋꠥ-ꠦ꣄꣠-꣱ꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꧥꨩ-ꨮꨱ-ꨲꨵ-ꨶꩃꩌꩼꪰꪲ-ꪴꪷ-ꪸꪾ-꪿꫁ꫬ-ꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︯ﾞ-ﾟ]"
            ),
            Va = function(e) {
              return (
                "string" == typeof e && e.charCodeAt(0) >= 768 && za.test(e)
              );
            },
            Ha = function(e, t) {
              for (var n = [], r = 0; r < e.length; r++) {
                var o = e[r];
                if (!o.isSome()) return _.none();
                n.push(o.getOrDie());
              }
              return _.some(t.apply(null, n));
            },
            qa = [].slice,
            $a = function() {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              var n = qa.call(arguments);
              return function(e) {
                for (var t = 0; t < n.length; t++) if (!n[t](e)) return !1;
                return !0;
              };
            },
            Wa = function() {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              var n = qa.call(arguments);
              return function(e) {
                for (var t = 0; t < n.length; t++) if (n[t](e)) return !0;
                return !1;
              };
            },
            Ka = ko.isElement,
            Xa = _a,
            Ya = ko.matchStyleValues("display", "block table"),
            Ga = ko.matchStyleValues("float", "left right"),
            Ja = $a(Ka, Xa, C(Ga)),
            Qa = C(ko.matchStyleValues("white-space", "pre pre-line pre-wrap")),
            Za = ko.isText,
            eu = ko.isBr,
            tu = ci.nodeIndex,
            nu = ja,
            ru = function(e) {
              return "createRange" in e ? e.createRange() : ci.DOM.createRng();
            },
            ou = function(e) {
              return e && /[\r\n\t ]/.test(e);
            },
            iu = function(e) {
              return !!e.setStart && !!e.setEnd;
            },
            au = function(e) {
              var t,
                n = e.startContainer,
                r = e.startOffset;
              return !!(
                ou(e.toString()) &&
                Qa(n.parentNode) &&
                ko.isText(n) &&
                ((t = n.data), ou(t[r - 1]) || ou(t[r + 1]))
              );
            },
            uu = function(e) {
              return (
                0 === e.left && 0 === e.right && 0 === e.top && 0 === e.bottom
              );
            },
            su = function(e) {
              var t, n;
              return (
                (t =
                  (n = e.getClientRects()).length > 0
                    ? Oa(n[0])
                    : Oa(e.getBoundingClientRect())),
                !iu(e) && eu(e) && uu(t)
                  ? (function(e) {
                      var t,
                        n = e.ownerDocument,
                        r = ru(n),
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
                  : uu(t) && iu(e)
                  ? (function(e) {
                      var t = e.startContainer,
                        n = e.endContainer,
                        r = e.startOffset,
                        o = e.endOffset;
                      if (t === n && ko.isText(n) && 0 === r && 1 === o) {
                        var i = e.cloneRange();
                        return i.setEndAfter(n), su(i);
                      }
                      return null;
                    })(e)
                  : t
              );
            },
            cu = function(e, t) {
              var n = Da(e, t);
              return (n.width = 1), (n.right = n.left + 1), n;
            },
            lu = function(e) {
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
                  var n = ru(e.ownerDocument);
                  if (t < e.data.length) {
                    if (Va(e.data[t])) return r;
                    if (
                      Va(e.data[t - 1]) &&
                      (n.setStart(e, t), n.setEnd(e, t + 1), !au(n))
                    )
                      return o(cu(su(n), !1)), r;
                  }
                  t > 0 &&
                    (n.setStart(e, t - 1),
                    n.setEnd(e, t),
                    au(n) || o(cu(su(n), !1))),
                    t < e.data.length &&
                      (n.setStart(e, t),
                      n.setEnd(e, t + 1),
                      au(n) || o(cu(su(n), !0)));
                };
              if (Za(e.container())) return i(e.container(), e.offset()), r;
              if (Ka(e.container()))
                if (e.isAtEnd())
                  (n = nu(e.container(), e.offset())),
                    Za(n) && i(n, n.data.length),
                    Ja(n) && !eu(n) && o(cu(su(n), !1));
                else {
                  if (
                    ((n = nu(e.container(), e.offset())),
                    Za(n) && i(n, 0),
                    Ja(n) && e.isAtEnd())
                  )
                    return o(cu(su(n), !1)), r;
                  (t = nu(e.container(), e.offset() - 1)),
                    Ja(t) &&
                      !eu(t) &&
                      (Ya(t) || Ya(n) || !Ja(n)) &&
                      o(cu(su(t), !1)),
                    Ja(n) && o(cu(su(n), !0));
                }
              return r;
            };
          function fu(e, t, n) {
            var r = function() {
              return n || (n = lu(fu(e, t))), n;
            };
            return {
              container: o(e),
              offset: o(t),
              toRange: function() {
                var n;
                return (
                  (n = ru(e.ownerDocument)).setStart(e, t), n.setEnd(e, t), n
                );
              },
              getClientRects: r,
              isVisible: function() {
                return r().length > 0;
              },
              isAtStart: function() {
                return Za(e), 0 === t;
              },
              isAtEnd: function() {
                return Za(e) ? t >= e.data.length : t >= e.childNodes.length;
              },
              isEqual: function(n) {
                return n && e === n.container() && t === n.offset();
              },
              getNode: function(n) {
                return nu(e, n ? t - 1 : t);
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
                return e(t.parentNode, tu(t) + 1);
              }),
              (e.before = function(t) {
                return e(t.parentNode, tu(t));
              }),
              (e.isAbove = function(e, t) {
                return Ha(
                  [Q(t.getClientRects()), Z(e.getClientRects())],
                  Ia
                ).getOr(!1);
              }),
              (e.isBelow = function(e, t) {
                return Ha(
                  [Z(t.getClientRects()), Q(e.getClientRects())],
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
          })(fu || (fu = {}));
          var du,
            mu,
            pu = fu,
            gu = ko.isText,
            hu = ko.isBogus,
            vu = ci.nodeIndex,
            bu = function(e) {
              var t = e.parentNode;
              return hu(t) ? bu(t) : t;
            },
            yu = function(e) {
              return e
                ? Ht.reduce(
                    e.childNodes,
                    function(e, t) {
                      return (
                        hu(t) && "BR" !== t.nodeName
                          ? (e = e.concat(yu(t)))
                          : e.push(t),
                        e
                      );
                    },
                    []
                  )
                : [];
            },
            Cu = function(e) {
              return function(t) {
                return e === t;
              };
            },
            xu = function(e) {
              return (
                (gu(e) ? "text()" : e.nodeName.toLowerCase()) +
                "[" +
                (function(e) {
                  var t, n, r;
                  return (
                    (t = yu(bu(e))),
                    (n = Ht.findIndex(t, Cu(e), e)),
                    (t = t.slice(0, n + 1)),
                    (r = Ht.reduce(
                      t,
                      function(e, n, r) {
                        return gu(n) && gu(t[r - 1]) && e++, e;
                      },
                      0
                    )),
                    (t = Ht.filter(t, ko.matchNodeNames(e.nodeName))),
                    (n = Ht.findIndex(t, Cu(e), e)) - r
                  );
                })(e) +
                "]"
              );
            },
            wu = function(e, t) {
              var n,
                r,
                o,
                i,
                a,
                u = [];
              return (
                (n = t.container()),
                (r = t.offset()),
                gu(n)
                  ? (o = (function(e, t) {
                      for (; (e = e.previousSibling) && gu(e); )
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
                (a = Ht.filter(a, C(ko.isBogus))),
                (u = u.concat(
                  Ht.map(a, function(e) {
                    return xu(e);
                  })
                ))
                  .reverse()
                  .join("/") +
                  "," +
                  o
              );
            },
            Su = function(e, t) {
              var n, r, o;
              return t
                ? ((n = t.split(",")),
                  (t = n[0].split("/")),
                  (o = n.length > 1 ? n[1] : "before"),
                  (r = Ht.reduce(
                    t,
                    function(e, t) {
                      return (t = /([\w\-\(\)]+)\[([0-9]+)\]/.exec(t))
                        ? ("text()" === t[1] && (t[1] = "#text"),
                          (n = e),
                          (r = t[1]),
                          (o = parseInt(t[2], 10)),
                          (i = yu(n)),
                          (i = Ht.filter(i, function(e, t) {
                            return !gu(e) || !gu(i[t - 1]);
                          })),
                          (i = Ht.filter(i, ko.matchNodeNames(r)))[o])
                        : null;
                      var n, r, o, i;
                    },
                    e
                  ))
                    ? gu(r)
                      ? (function(e, t) {
                          for (var n, r = e, o = 0; gu(r); ) {
                            if (((n = r.data.length), t >= o && t <= o + n)) {
                              (e = r), (t -= o);
                              break;
                            }
                            if (!gu(r.nextSibling)) {
                              (e = r), (t = n);
                              break;
                            }
                            (o += n), (r = r.nextSibling);
                          }
                          return (
                            gu(e) && t > e.data.length && (t = e.data.length),
                            pu(e, t)
                          );
                        })(r, parseInt(o, 10))
                      : ((o = "after" === o ? vu(r) + 1 : vu(r)),
                        pu(r.parentNode, o))
                    : null)
                : null;
            },
            Eu = function(e, t) {
              ko.isText(t) && 0 === t.data.length && e.remove(t);
            },
            Nu = function(e, t, n) {
              ko.isDocumentFragment(n)
                ? (function(e, t, n) {
                    var r = _.from(n.firstChild),
                      o = _.from(n.lastChild);
                    t.insertNode(n),
                      r.each(function(t) {
                        return Eu(e, t.previousSibling);
                      }),
                      o.each(function(t) {
                        return Eu(e, t.nextSibling);
                      });
                  })(e, t, n)
                : (function(e, t, n) {
                    t.insertNode(n),
                      Eu(e, n.previousSibling),
                      Eu(e, n.nextSibling);
                  })(e, t, n);
            },
            ku = ko.isContentEditableFalse,
            Tu = function(e, t, n, r, o) {
              var i,
                a = r[o ? "startContainer" : "endContainer"],
                u = r[o ? "startOffset" : "endOffset"],
                s = [],
                c = 0,
                l = e.getRoot();
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
                      ((c = 1), (u = Math.max(0, i.length - 1))),
                    s.push(e.nodeIndex(i[u], n) + c));
                a && a !== l;
                a = a.parentNode
              )
                s.push(e.nodeIndex(a, n));
              return s;
            },
            _u = function(e, t, n) {
              var r = 0;
              return (
                Xt.each(e.select(t), function(e) {
                  if ("all" !== e.getAttribute("data-mce-bogus"))
                    return e !== n && void r++;
                }),
                r
              );
            },
            Bu = function(e, t) {
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
            Au = function(e) {
              return Bu(e, !0), Bu(e, !1), e;
            },
            Ru = function(e, t) {
              var n;
              if (ko.isElement(e) && ((e = ja(e, t)), ku(e))) return e;
              if (da(e)) {
                if (
                  (ko.isText(e) && la(e) && (e = e.parentNode),
                  (n = e.previousSibling),
                  ku(n))
                )
                  return n;
                if (((n = e.nextSibling), ku(n))) return n;
              }
            },
            Ou = function(e, t, n) {
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
            Du = function(e, t, n) {
              var r = {
                "data-mce-type": "bookmark",
                id: t,
                style: "overflow:hidden;line-height:0px"
              };
              return n ? e.create("span", r, "&#xFEFF;") : e.create("span", r);
            },
            Pu = function(e, t) {
              var n = e.dom,
                r = e.getRng(),
                o = n.uniqueId(),
                i = e.isCollapsed(),
                a = e.getNode(),
                u = a.nodeName;
              if ("IMG" === u) return { name: u, index: _u(n, u, a) };
              var s = Au(r.cloneRange());
              if (!i) {
                s.collapse(!1);
                var c = Du(n, o + "_end", t);
                Nu(n, s, c);
              }
              (r = Au(r)).collapse(!0);
              var l = Du(n, o + "_start", t);
              return (
                Nu(n, r, l), e.moveToBookmark({ id: o, keep: 1 }), { id: o }
              );
            },
            Iu = {
              getBookmark: function(e, t, n) {
                return 2 === t
                  ? Ou(ua, n, e)
                  : 3 === t
                  ? (function(e) {
                      var t = e.getRng();
                      return {
                        start: wu(e.dom.getRoot(), pu.fromRangeStart(t)),
                        end: wu(e.dom.getRoot(), pu.fromRangeEnd(t))
                      };
                    })(e)
                  : t
                  ? (function(e) {
                      return { rng: e.getRng() };
                    })(e)
                  : Pu(e, !1);
              },
              getUndoBookmark: a(Ou, i, !0),
              getPersistentBookmark: Pu
            },
            Lu = function(e) {
              return ko.isElement(e) && "_mce_caret" === e.id;
            },
            Mu = function(e, t) {
              for (; t && t !== e; ) {
                if ("_mce_caret" === t.id) return t;
                t = t.parentNode;
              }
              return null;
            },
            Fu = ko.isElement,
            Uu = ko.isText,
            ju = function(e) {
              var t = e.parentNode;
              t && t.removeChild(e);
            },
            zu = function(e, t) {
              0 === t.length ? ju(e) : (e.nodeValue = t);
            },
            Vu = function(e) {
              var t = ua(e);
              return { count: e.length - t.length, text: t };
            },
            Hu = function(e, t) {
              return Wu(e), t;
            },
            qu = function(e, t) {
              var n,
                r,
                o,
                i = t.container(),
                a = ((n = ee(i.childNodes)),
                (r = e),
                (o = M(n, r)),
                -1 === o ? _.none() : _.some(o))
                  .map(function(e) {
                    return e < t.offset() ? pu(i, t.offset() - 1) : t;
                  })
                  .getOr(t);
              return Wu(e), a;
            },
            $u = function(e, t) {
              return Uu(e) && t.container() === e
                ? (function(e, t) {
                    var n = Vu(e.data.substr(0, t.offset())),
                      r = Vu(e.data.substr(t.offset())),
                      o = n.text + r.text;
                    return o.length > 0
                      ? (zu(e, o), pu(e, t.offset() - n.count))
                      : t;
                  })(e, t)
                : Hu(e, t);
            },
            Wu = function(e) {
              if (
                (Fu(e) &&
                  da(e) &&
                  (ma(e) ? e.removeAttribute("data-mce-caret") : ju(e)),
                Uu(e))
              ) {
                var t = ua(
                  (function(e) {
                    try {
                      return e.nodeValue;
                    } catch (e) {
                      return "";
                    }
                  })(e)
                );
                zu(e, t);
              }
            },
            Ku = {
              removeAndReposition: function(e, t) {
                return pu.isTextPosition(t)
                  ? $u(e, t)
                  : (function(e, t) {
                      return t.container() === e.parentNode
                        ? qu(e, t)
                        : Hu(e, t);
                    })(e, t);
              },
              remove: Wu
            },
            Xu = Xn.detect().browser,
            Yu = ko.isContentEditableFalse,
            Gu = function(e, t, n) {
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
            Ju = function(e, t, n) {
              var r,
                o,
                i = gi(_.none()),
                a = function() {
                  !(function(e) {
                    var t, n, r, o, i;
                    for (
                      t = pn("*[contentEditable=false]", e), o = 0;
                      o < t.length;
                      o++
                    )
                      (r = (n = t[o]).previousSibling),
                        ba(r) &&
                          (1 === (i = r.data).length
                            ? r.parentNode.removeChild(r)
                            : r.deleteData(i.length - 1, 1)),
                        (r = n.nextSibling),
                        va(r) &&
                          (1 === (i = r.data).length
                            ? r.parentNode.removeChild(r)
                            : r.deleteData(0, 1));
                  })(e),
                    o && (Ku.remove(o), (o = null)),
                    i.get().each(function(e) {
                      pn(e.caret).remove(), i.set(_.none());
                    }),
                    clearInterval(r);
                },
                u = function() {
                  r = ge.setInterval(function() {
                    n()
                      ? pn("div.mce-visual-caret", e).toggleClass(
                          "mce-visual-caret-hidden"
                        )
                      : pn("div.mce-visual-caret", e).addClass(
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
                    ko.isElement(l) && /^(TD|TH)$/i.test(l.tagName))
                  )
                    return null;
                  if (!t(r))
                    return (
                      (o = (function(e, t) {
                        var n, r, o;
                        if (
                          ((r = e.ownerDocument.createTextNode(aa)),
                          (o = e.parentNode),
                          t)
                        ) {
                          if (((n = e.previousSibling), ca(n))) {
                            if (da(n)) return n;
                            if (ba(n)) return n.splitText(n.data.length - 1);
                          }
                          o.insertBefore(r, e);
                        } else {
                          if (((n = e.nextSibling), ca(n))) {
                            if (da(n)) return n;
                            if (va(n)) return n.splitText(1), n;
                          }
                          e.nextSibling
                            ? o.insertBefore(r, e.nextSibling)
                            : o.appendChild(r);
                        }
                        return r;
                      })(r, n)),
                      (c = r.ownerDocument.createRange()),
                      Yu(o.nextSibling)
                        ? (c.setStart(o, 0), c.setEnd(o, 0))
                        : (c.setStart(o, 1), c.setEnd(o, 1)),
                      c
                    );
                  (o = ha("p", r, n)),
                    (s = Gu(e, r, n)),
                    pn(o).css("top", s.top);
                  var f = pn(
                    '<div class="mce-visual-caret" data-mce-bogus="all"></div>'
                  )
                    .css(s)
                    .appendTo(e)[0];
                  return (
                    i.set(_.some({ caret: f, element: r, before: n })),
                    i.get().each(function(e) {
                      n && pn(e.caret).addClass("mce-visual-caret-before");
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
                    var n = Gu(e, t.element, t.before);
                    pn(t.caret).css(n);
                  });
                },
                destroy: function() {
                  return ge.clearInterval(r);
                }
              };
            },
            Qu = function() {
              return Xu.isIE() || Xu.isEdge() || Xu.isFirefox();
            },
            Zu = function(e) {
              return Yu(e) || (ko.isTable(e) && Qu());
            },
            es = ((du = " "),
            function(e) {
              return du === e;
            }),
            ts = function(e) {
              return /^[\r\n\t ]$/.test(e);
            },
            ns = function(e) {
              return !ts(e) && !es(e);
            },
            rs = ko.isContentEditableFalse,
            os = ko.matchStyleValues(
              "display",
              "block table table-cell table-caption list-item"
            ),
            is = da,
            as = la,
            us = ko.isElement,
            ss = _a,
            cs = function(e) {
              return e > 0;
            },
            ls = function(e) {
              return e < 0;
            },
            fs = function(e, t) {
              for (var n; (n = e(t)); ) if (!as(n)) return n;
              return null;
            },
            ds = function(e, t, n, r, o) {
              var i = new Qr(e, r);
              if (ls(t)) {
                if ((rs(e) || as(e)) && n((e = fs(i.prev, !0)))) return e;
                for (; (e = fs(i.prev, o)); ) if (n(e)) return e;
              }
              if (cs(t)) {
                if ((rs(e) || as(e)) && n((e = fs(i.next, !0)))) return e;
                for (; (e = fs(i.next, o)); ) if (n(e)) return e;
              }
              return null;
            },
            ms = function(e, t) {
              for (; e && e !== t; ) {
                if (os(e)) return e;
                e = e.parentNode;
              }
              return null;
            },
            ps = function(e, t, n) {
              return ms(e.container(), n) === ms(t.container(), n);
            },
            gs = function(e, t) {
              var n, r;
              return t
                ? ((n = t.container()),
                  (r = t.offset()),
                  us(n) ? n.childNodes[r + e] : null)
                : null;
            },
            hs = function(e, t) {
              var n = t.ownerDocument.createRange();
              return (
                e
                  ? (n.setStartBefore(t), n.setEndBefore(t))
                  : (n.setStartAfter(t), n.setEndAfter(t)),
                n
              );
            },
            vs = function(e, t, n) {
              return ms(t, e) === ms(n, e);
            },
            bs = function(e, t, n) {
              var r, o;
              for (o = e ? "previousSibling" : "nextSibling"; n && n !== t; ) {
                if (((r = n[o]), is(r) && (r = r[o]), rs(r))) {
                  if (vs(t, r, n)) return r;
                  break;
                }
                if (ss(r)) break;
                n = n.parentNode;
              }
              return null;
            },
            ys = a(hs, !0),
            Cs = a(hs, !1),
            xs = function(e, t, n) {
              var r,
                o,
                i,
                u,
                s = a(bs, !0, t),
                c = a(bs, !1, t);
              if (((o = n.startContainer), (i = n.startOffset), la(o))) {
                if (
                  (us(o) || (o = o.parentNode),
                  "before" === (u = o.getAttribute("data-mce-caret")) &&
                    ((r = o.nextSibling), Zu(r)))
                )
                  return ys(r);
                if ("after" === u && ((r = o.previousSibling), Zu(r)))
                  return Cs(r);
              }
              if (!n.collapsed) return n;
              if (ko.isText(o)) {
                if (is(o)) {
                  if (1 === e) {
                    if ((r = c(o))) return ys(r);
                    if ((r = s(o))) return Cs(r);
                  }
                  if (-1 === e) {
                    if ((r = s(o))) return Cs(r);
                    if ((r = c(o))) return ys(r);
                  }
                  return n;
                }
                if (ba(o) && i >= o.data.length - 1)
                  return 1 === e && (r = c(o)) ? ys(r) : n;
                if (va(o) && i <= 1) return -1 === e && (r = s(o)) ? Cs(r) : n;
                if (i === o.data.length) return (r = c(o)) ? ys(r) : n;
                if (0 === i) return (r = s(o)) ? Cs(r) : n;
              }
              return n;
            },
            ws = function(e, t) {
              var n = gs(e, t);
              return rs(n) && !ko.isBogusAll(n);
            },
            Ss = function(e, t) {
              return ko.isTable(gs(e, t));
            },
            Es = function(e, t) {
              return _.from(gs(e ? 0 : -1, t)).filter(rs);
            },
            Ns = function(e, t, n) {
              var r = xs(e, t, n);
              return -1 === e ? fu.fromRangeStart(r) : fu.fromRangeEnd(r);
            },
            ks = a(ws, 0),
            Ts = a(ws, -1),
            _s = a(Ss, 0),
            Bs = a(Ss, -1),
            As = function(e, t, n) {
              return _.from(n.container())
                .filter(ko.isText)
                .exists(function(r) {
                  var o = e ? 0 : -1;
                  return t(r.data.charAt(n.offset() + o));
                });
            },
            Rs = a(As, !0, ts),
            Os = a(As, !1, ts),
            Ds = function(e) {
              return _.from(e.getNode()).map(Gn.fromDom);
            },
            Ps = function(e, t) {
              for (; (t = e(t)); ) if (t.isVisible()) return t;
              return t;
            },
            Is = function(e, t) {
              var n = ps(e, t);
              return !(n || !ko.isBr(e.getNode())) || n;
            };
          !(function(e) {
            (e[(e.Backwards = -1)] = "Backwards"),
              (e[(e.Forwards = 1)] = "Forwards");
          })(mu || (mu = {}));
          var Ls = ko.isContentEditableFalse,
            Ms = ko.isText,
            Fs = ko.isElement,
            Us = ko.isBr,
            js = _a,
            zs = function(e) {
              return (
                Na(e) ||
                (function(e) {
                  return (
                    !!Ba(e) &&
                    !0 !==
                      H(
                        ee(e.getElementsByTagName("*")),
                        function(e, t) {
                          return e || Ca(t);
                        },
                        !1
                      )
                  );
                })(e)
              );
            },
            Vs = Aa,
            Hs = function(e, t) {
              return e.hasChildNodes() && t < e.childNodes.length
                ? e.childNodes[t]
                : null;
            },
            qs = function(e, t) {
              if (cs(e)) {
                if (js(t.previousSibling) && !Ms(t.previousSibling))
                  return pu.before(t);
                if (Ms(t)) return pu(t, 0);
              }
              if (ls(e)) {
                if (js(t.nextSibling) && !Ms(t.nextSibling)) return pu.after(t);
                if (Ms(t)) return pu(t, t.data.length);
              }
              return ls(e)
                ? Us(t)
                  ? pu.before(t)
                  : pu.after(t)
                : pu.before(t);
            },
            $s = function(e, t, n) {
              var r, i, a, u, s;
              if (!Fs(n) || !t) return null;
              if (t.isEqual(pu.after(n)) && n.lastChild) {
                if (
                  ((s = pu.after(n.lastChild)),
                  ls(e) && js(n.lastChild) && Fs(n.lastChild))
                )
                  return Us(n.lastChild) ? pu.before(n.lastChild) : s;
              } else s = t;
              var c = s.container(),
                l = s.offset();
              if (Ms(c)) {
                if (ls(e) && l > 0) return pu(c, --l);
                if (cs(e) && l < c.length) return pu(c, ++l);
                r = c;
              } else {
                if (ls(e) && l > 0 && ((i = Hs(c, l - 1)), js(i)))
                  return !zs(i) && (a = ds(i, e, Vs, i))
                    ? Ms(a)
                      ? pu(a, a.data.length)
                      : pu.after(a)
                    : Ms(i)
                    ? pu(i, i.data.length)
                    : pu.before(i);
                if (cs(e) && l < c.childNodes.length && ((i = Hs(c, l)), js(i)))
                  return Us(i)
                    ? (function(e, t) {
                        var n = t.nextSibling;
                        return n && js(n)
                          ? Ms(n)
                            ? pu(n, 0)
                            : pu.before(n)
                          : $s(mu.Forwards, pu.after(t), e);
                      })(n, i)
                    : !zs(i) && (a = ds(i, e, Vs, i))
                    ? Ms(a)
                      ? pu(a, 0)
                      : pu.before(a)
                    : Ms(i)
                    ? pu(i, 0)
                    : pu.after(i);
                r = i || s.getNode();
              }
              return ((cs(e) && s.isAtEnd()) || (ls(e) && s.isAtStart())) &&
                ((r = ds(r, e, o(!0), n, !0)), Vs(r, n))
                ? qs(e, r)
                : ((i = ds(r, e, Vs, n)),
                  !(u = Ht.last(
                    V(
                      (function(e, t) {
                        for (var n = []; e && e !== t; )
                          n.push(e), (e = e.parentNode);
                        return n;
                      })(c, n),
                      Ls
                    )
                  )) ||
                  (i && u.contains(i))
                    ? i
                      ? qs(e, i)
                      : null
                    : (s = cs(e) ? pu.after(u) : pu.before(u)));
            },
            Ws = function(e) {
              return {
                next: function(t) {
                  return $s(mu.Forwards, t, e);
                },
                prev: function(t) {
                  return $s(mu.Backwards, t, e);
                }
              };
            },
            Ks = function(e) {
              return pu.isTextPosition(e) ? 0 === e.offset() : _a(e.getNode());
            },
            Xs = function(e) {
              if (pu.isTextPosition(e)) {
                var t = e.container();
                return e.offset() === t.data.length;
              }
              return _a(e.getNode(!0));
            },
            Ys = function(e, t) {
              return (
                !pu.isTextPosition(e) &&
                !pu.isTextPosition(t) &&
                e.getNode() === t.getNode(!0)
              );
            },
            Gs = function(e, t, n) {
              return e
                ? !Ys(t, n) &&
                    ((r = t),
                    !(!pu.isTextPosition(r) && ko.isBr(r.getNode()))) &&
                    Xs(t) &&
                    Ks(n)
                : !Ys(n, t) && Ks(t) && Xs(n);
              var r;
            },
            Js = function(e, t, n) {
              var r = Ws(t);
              return _.from(e ? r.next(n) : r.prev(n));
            },
            Qs = function(e, t) {
              var n,
                r = e ? t.firstChild : t.lastChild;
              return ko.isText(r)
                ? _.some(pu(r, e ? 0 : r.data.length))
                : r
                ? _a(r)
                  ? _.some(
                      e
                        ? pu.before(r)
                        : ((n = r), ko.isBr(n) ? pu.before(n) : pu.after(n))
                    )
                  : (function(e, t, n) {
                      var r = e ? pu.before(n) : pu.after(n);
                      return Js(e, t, r);
                    })(e, t, r)
                : _.none();
            },
            Zs = a(Js, !0),
            ec = a(Js, !1),
            tc = {
              fromPosition: Js,
              nextPosition: Zs,
              prevPosition: ec,
              navigate: function(e, t, n) {
                return Js(e, t, n).bind(function(r) {
                  return ps(n, r, t) && Gs(e, n, r) ? Js(e, t, r) : _.some(r);
                });
              },
              positionIn: Qs,
              firstPositionIn: a(Qs, !0),
              lastPositionIn: a(Qs, !1)
            },
            nc = function(e, t) {
              return (
                !e.isBlock(t) ||
                  t.innerHTML ||
                  le.ie ||
                  (t.innerHTML = '<br data-mce-bogus="1" />'),
                t
              );
            },
            rc = function(e, t) {
              return tc.lastPositionIn(e).fold(
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
            oc = function(e, t, n) {
              return !(
                !(function(e) {
                  return !1 === e.hasChildNodes();
                })(t) ||
                !Mu(e, t) ||
                ((function(e, t) {
                  var n = e.ownerDocument.createTextNode(aa);
                  e.appendChild(n), t.setStart(n, 0), t.setEnd(n, 0);
                })(t, n),
                0)
              );
            },
            ic = function(e, t, n, r) {
              var o,
                i,
                a,
                u,
                s = n[t ? "start" : "end"],
                c = e.getRoot();
              if (s) {
                for (a = s[0], i = c, o = s.length - 1; o >= 1; o--) {
                  if (((u = i.childNodes), oc(c, i, r))) return !0;
                  if (s[o] > u.length - 1) return !!oc(c, i, r) || rc(i, r);
                  i = u[s[o]];
                }
                3 === i.nodeType && (a = Math.min(s[0], i.nodeValue.length)),
                  1 === i.nodeType && (a = Math.min(s[0], i.childNodes.length)),
                  t ? r.setStart(i, a) : r.setEnd(i, a);
              }
              return !0;
            },
            ac = function(e) {
              return ko.isText(e) && e.data.length > 0;
            },
            uc = function(e, t, n) {
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
                          : ac(c.nextSibling)
                          ? ((r = c.nextSibling), (o = 0))
                          : ac(c.previousSibling)
                          ? ((r = c.previousSibling),
                            (o = c.previousSibling.data.length))
                          : ((r = c.parentNode), (o = e.nodeIndex(c) + 1))
                        : (o = e.nodeIndex(c)),
                      (u = r),
                      (s = o))
                    : (l
                        ? c.hasChildNodes()
                          ? ((r = c.firstChild), (o = 1))
                          : ac(c.previousSibling)
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
                      Xt.each(Xt.grep(c.childNodes), function(e) {
                        ko.isText(e) &&
                          (e.nodeValue = e.nodeValue.replace(/\uFEFF/g, ""));
                      });
                    (c = e.get(n.id + "_" + t));

                  )
                    e.remove(c, !0);
                  a &&
                    i &&
                    a.nodeType === i.nodeType &&
                    ko.isText(a) &&
                    !le.opera &&
                    ((o = a.nodeValue.length),
                    a.appendData(i.nodeValue),
                    e.remove(i),
                    (u = a),
                    (s = o));
                }
                return _.some(pu(u, s));
              }
              return _.none();
            },
            sc = function(e, t) {
              var n = e.dom;
              if (t) {
                if (
                  (function(e) {
                    return Xt.isArray(e.start);
                  })(t)
                )
                  return (function(e, t) {
                    var n = e.createRng();
                    return ic(e, !0, t, n) && ic(e, !1, t, n)
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
                        (r = Su(e.getRoot(), t.start)),
                        n.setStart(r.container(), r.offset()),
                        (r = Su(e.getRoot(), t.end)),
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
                      o = uc(e, "start", t),
                      i = uc(e, "end", t);
                    return Ha(
                      [o, ((n = i), (r = o), n.isSome() ? n : r)],
                      function(t, n) {
                        var r = e.createRng();
                        return (
                          r.setStart(nc(e, t.container()), t.offset()),
                          r.setEnd(nc(e, n.container()), n.offset()),
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
            cc = {
              getBookmark: function(e, t, n) {
                return Iu.getBookmark(e, t, n);
              },
              moveToBookmark: function(e, t) {
                sc(e, t).each(function(t) {
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
            lc = function(e) {
              return e && /^(IMG)$/.test(e.nodeName);
            },
            fc = function(e) {
              return (
                e && 3 === e.nodeType && /^([\t \r\n]+|)$/.test(e.nodeValue)
              );
            },
            dc = function(e, t, n) {
              return (
                ("color" !== n && "backgroundColor" !== n) || (t = e.toHex(t)),
                "fontWeight" === n && 700 === t && (t = "bold"),
                "fontFamily" === n &&
                  (t = t.replace(/[\'\"]/g, "").replace(/,\s+/g, ",")),
                "" + t
              );
            },
            mc = {
              isInlineBlock: lc,
              moveStart: function(e, t, n) {
                var r,
                  o,
                  i,
                  a = n.startOffset,
                  u = n.startContainer;
                if (
                  (n.startContainer !== n.endContainer ||
                    !lc(n.startContainer.childNodes[n.startOffset])) &&
                  1 === u.nodeType
                )
                  for (
                    a < (i = u.childNodes).length
                      ? (r = new Qr((u = i[a]), e.getParent(u, e.isBlock)))
                      : (r = new Qr(
                          (u = i[i.length - 1]),
                          e.getParent(u, e.isBlock)
                        )).next(!0),
                      o = r.current();
                    o;
                    o = r.next()
                  )
                    if (3 === o.nodeType && !fc(o))
                      return n.setStart(o, 0), void t.setRng(n);
              },
              getNonWhiteSpaceSibling: function(e, t, n) {
                if (e)
                  for (
                    t = t ? "nextSibling" : "previousSibling", e = n ? e : e[t];
                    e;
                    e = e[t]
                  )
                    if (1 === e.nodeType || !fc(e)) return e;
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
              isWhiteSpaceNode: fc,
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
              normalizeStyleValue: dc,
              getStyle: function(e, t, n) {
                return dc(e, e.getStyle(t, n), n);
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
            pc = cc.isBookmarkNode,
            gc = mc.getParents,
            hc = mc.isWhiteSpaceNode,
            vc = mc.isTextBlock,
            bc = function(e, t) {
              for (
                void 0 === t &&
                (t = 3 === e.nodeType ? e.length : e.childNodes.length);
                e && e.hasChildNodes();

              )
                (e = e.childNodes[t]) &&
                  (t = 3 === e.nodeType ? e.length : e.childNodes.length);
              return { node: e, offset: t };
            },
            yc = function(e, t) {
              for (var n = t; n; ) {
                if (1 === n.nodeType && e.getContentEditable(n))
                  return "false" === e.getContentEditable(n) ? n : t;
                n = n.parentNode;
              }
              return t;
            },
            Cc = function(e, t, n, r) {
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
            xc = function(e, t, n, r, o, i) {
              var a, u, s, c;
              if (3 === n.nodeType) {
                if (-1 !== (s = Cc(o, i, n, r)))
                  return { container: n, offset: s };
                c = n;
              }
              for (
                a = new Qr(n, e.getParent(n, e.isBlock) || t);
                (u = a[o ? "prev" : "next"]());

              )
                if (3 !== u.nodeType || pc(u.parentNode)) {
                  if (e.isBlock(u) || mc.isEq(u, "BR")) break;
                } else if (((c = u), -1 !== (s = Cc(o, i, u))))
                  return { container: u, offset: s };
              if (c) return { container: c, offset: (r = o ? 0 : c.length) };
            },
            wc = function(e, t, n, r, o) {
              var i, a, u, s;
              for (
                3 === r.nodeType &&
                  0 === r.nodeValue.length &&
                  r[o] &&
                  (r = r[o]),
                  i = gc(e, r),
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
            Sc = function(e, t, n, r) {
              var o,
                i = e.dom,
                a = i.getRoot();
              if ((t[0].wrapper || (o = i.getParent(n, t[0].block, a)), !o)) {
                var u = i.getParent(n, "LI,TD,TH");
                o = i.getParent(
                  3 === n.nodeType ? n.parentNode : n,
                  function(t) {
                    return t !== a && vc(e, t);
                  },
                  u
                );
              }
              if (
                (o && t[0].wrapper && (o = gc(i, o, "ul,ol").reverse()[0] || o),
                !o)
              )
                for (
                  o = n;
                  o[r] && !i.isBlock(o[r]) && ((o = o[r]), !mc.isEq(o, "br"));

                );
              return o || n;
            },
            Ec = function(e, t, n, r, o, i, a) {
              var u, s, c, l, f, d;
              if (
                ((u = s = a ? n : o),
                (l = a ? "previousSibling" : "nextSibling"),
                (f = e.getRoot()),
                3 === u.nodeType &&
                  !hc(u) &&
                  (a ? r > 0 : i < u.nodeValue.length))
              )
                return u;
              for (;;) {
                if (!t[0].block_expand && e.isBlock(s)) return s;
                for (c = s[l]; c; c = c[l])
                  if (
                    !pc(c) &&
                    !hc(c) &&
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
            Nc = function(e, t, n, r) {
              var o,
                i = t.startContainer,
                a = t.startOffset,
                u = t.endContainer,
                s = t.endOffset,
                c = e.dom;
              return (
                1 === i.nodeType &&
                  i.hasChildNodes() &&
                  3 === (i = ja(i, a)).nodeType &&
                  (a = 0),
                1 === u.nodeType &&
                  u.hasChildNodes() &&
                  3 === (u = ja(u, t.collapsed ? s : s - 1)).nodeType &&
                  (s = u.nodeValue.length),
                (i = yc(c, i)),
                (u = yc(c, u)),
                (pc(i.parentNode) || pc(i)) &&
                  ((i = pc(i) ? i : i.parentNode),
                  3 ===
                    (i = t.collapsed
                      ? i.previousSibling || i
                      : i.nextSibling || i).nodeType &&
                    (a = t.collapsed ? i.length : 0)),
                (pc(u.parentNode) || pc(u)) &&
                  ((u = pc(u) ? u : u.parentNode),
                  3 ===
                    (u = t.collapsed
                      ? u.nextSibling || u
                      : u.previousSibling || u).nodeType &&
                    (s = t.collapsed ? 0 : u.length)),
                t.collapsed &&
                  ((o = xc(c, e.getBody(), i, a, !0, r)) &&
                    ((i = o.container), (a = o.offset)),
                  (o = xc(c, e.getBody(), u, s, !1, r)) &&
                    ((u = o.container), (s = o.offset))),
                n[0].inline &&
                  (u = r
                    ? u
                    : (function(e, t) {
                        var n = bc(e, t);
                        if (n.node) {
                          for (
                            ;
                            n.node && 0 === n.offset && n.node.previousSibling;

                          )
                            n = bc(n.node.previousSibling);
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
                    (i = Ec(c, n, i, a, u, s, !0)),
                  (n[0].inline &&
                    3 === u.nodeType &&
                    s !== u.nodeValue.length) ||
                    (u = Ec(c, n, i, a, u, s, !1))),
                n[0].selector &&
                  !1 !== n[0].expand &&
                  !n[0].inline &&
                  ((i = wc(c, n, t, i, "previousSibling")),
                  (u = wc(c, n, t, u, "nextSibling"))),
                (n[0].block || n[0].selector) &&
                  ((i = Sc(e, n, i, "previousSibling")),
                  (u = Sc(e, n, u, "nextSibling")),
                  n[0].block &&
                    (c.isBlock(i) || (i = Ec(c, n, i, a, u, s, !0)),
                    c.isBlock(u) || (u = Ec(c, n, i, a, u, s, !1)))),
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
            kc = Xt.each,
            Tc = {
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
                  m = t.endOffset;
                if (
                  (c = e.select("td[data-mce-selected],th[data-mce-selected]"))
                    .length > 0
                )
                  kc(c, function(e) {
                    n([e]);
                  });
                else {
                  var p,
                    g,
                    h,
                    v = function(e) {
                      var t;
                      return (
                        3 === (t = e[0]).nodeType &&
                          t === l &&
                          f >= t.nodeValue.length &&
                          e.splice(0, 1),
                        (t = e[e.length - 1]),
                        0 === m &&
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
                      ((g = m),
                      (h = (p = d).childNodes),
                      --g > h.length - 1
                        ? (g = h.length - 1)
                        : g < 0 && (g = 0),
                      (d = h[g] || p)),
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
            _c = (function(e, t) {
              var n = function(t) {
                  return e(t) ? _.from(t.dom().nodeValue) : _.none();
                },
                r = Xn.detect().browser,
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
            })(rr, "text"),
            Bc = function(e) {
              return _c.get(e);
            },
            Ac = function(e, t, n, r) {
              return Rr(t).fold(
                function() {
                  return "skipping";
                },
                function(o) {
                  return "br" === r ||
                    (function(e) {
                      return rr(e) && "\ufeff" === Bc(e);
                    })(t)
                    ? "valid"
                    : (function(e) {
                        return nr(e) && Li(e, $i());
                      })(t)
                    ? "existing"
                    : Lu(t)
                    ? "caret"
                    : mc.isValid(e, n, r) && mc.isValid(e, er(o), n)
                    ? "valid"
                    : "invalid-child";
                }
              );
            },
            Rc = function(e, t, n, r) {
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
                        ++ea +
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
                c = Gn.fromTag("span", e);
              Pi(c, $i()), dr(c, "" + Ki(), u), dr(c, "" + Wi(), n);
              var l = r(u, s),
                f = l.attributes,
                d = void 0 === f ? {} : f,
                m = l.classes,
                p = void 0 === m ? [] : m;
              return (
                mr(c, d),
                (function(e, t) {
                  j(t, function(t) {
                    Pi(e, t);
                  });
                })(c, p),
                c
              );
            },
            Oc = function(e, t, n, r, o) {
              var i = [],
                a = Rc(e.getDoc(), o, n, r),
                u = gi(_.none()),
                s = function() {
                  u.set(_.none());
                },
                c = function(e) {
                  j(e, l);
                },
                l = function(t) {
                  var n, r;
                  switch (Ac(e, t, "span", er(t))) {
                    case "invalid-child":
                      s();
                      var o = Lr(t);
                      c(o), s();
                      break;
                    case "valid":
                      var u = r.get().getOrThunk(function() {
                        var e = na(a);
                        return i.push(e), r.set(_.some(e)), e;
                      });
                      xi((n = t), (r = u)), Ei(r, n);
                  }
                };
              return (
                Tc.walk(e.dom, t, function(e) {
                  s(),
                    (function(e) {
                      var t = U(e, Gn.fromDom);
                      c(t);
                    })(e);
                }),
                i
              );
            },
            Dc = function(e, t, n, r) {
              e.undoManager.transact(function() {
                var o = e.selection.getRng();
                if (
                  (o.collapsed &&
                    (function(e, t) {
                      var n = Nc(
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
                  var i = Rc(e.getDoc(), r, t, n.decorate);
                  oa(i, " "),
                    e.selection.getRng().insertNode(i.dom()),
                    e.selection.select(i.dom());
                } else {
                  var a = Iu.getPersistentBookmark(e.selection, !1),
                    u = e.selection.getRng();
                  Oc(e, u, t, n.decorate, r), e.selection.moveToBookmark(a);
                }
              });
            };
          function Pc(e) {
            var t = Zi();
            Qi(e, t);
            var n = Ji(e, t);
            return {
              register: function(e, n) {
                t.register(e, n);
              },
              annotate: function(n, r) {
                t.lookup(n).each(function(t) {
                  Dc(e, n, t, r);
                });
              },
              annotationChanged: function(e, t) {
                n.addListener(e, t);
              },
              remove: function(t) {
                Xi(e, _.some(t)).each(function(e) {
                  var t = e.elements;
                  j(t, _i);
                });
              },
              getAll: function(t) {
                var n = Gi(e, t);
                return ur(n, function(e) {
                  return U(e, function(e) {
                    return e.dom();
                  });
                });
              }
            };
          }
          var Ic,
            Lc = Object.prototype.hasOwnProperty,
            Mc = ((Ic = function(e, t) {
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
                for (var i in o) Lc.call(o, i) && (n[i] = Ic(n[i], o[i]));
              }
              return n;
            }),
            Fc = /^[ \t\r\n]*$/,
            Uc = {
              "#text": 3,
              "#comment": 8,
              "#cdata": 4,
              "#pi": 7,
              "#doctype": 10,
              "#document-fragment": 11
            },
            jc = function(e, t, n) {
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
            zc = (function() {
              function e(e, t) {
                (this.name = e),
                  (this.type = t),
                  1 === t &&
                    ((this.attributes = []), (this.attributes.map = {}));
              }
              return (
                (e.create = function(t, n) {
                  var r, o;
                  if (((r = new e(t, Uc[t] || 1)), n))
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
                  for (t = this.firstChild; t; t = jc(t, this))
                    t.name === e && n.push(t);
                  return n;
                }),
                (e.prototype.empty = function() {
                  var e, t, n;
                  if (this.firstChild) {
                    for (e = [], n = this.firstChild; n; n = jc(n, this))
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
                      if (3 === i.type && !Fc.test(i.value)) return !1;
                      if (
                        3 === i.type &&
                        i.parent &&
                        t[i.parent.name] &&
                        Fc.test(i.value)
                      )
                        return !1;
                      if (n && n(i)) return !1;
                    } while ((i = jc(i, this)));
                  return !0;
                }),
                (e.prototype.walk = function(e) {
                  return jc(this, null, e);
                }),
                e
              );
            })(),
            Vc = function(e) {
              return 0 === e.indexOf("data-") || 0 === e.indexOf("aria-");
            },
            Hc = function(e) {
              return e.replace(/<!--|-->/g, "");
            },
            qc = function(e, t) {
              return (
                !e.allow_html_data_urls &&
                (/^data:image\//i.test(t)
                  ? !1 === e.allow_svg_data_urls &&
                    /^data:image\/svg\+xml/i.test(t)
                  : /^data:/i.test(t))
              );
            },
            $c = function(e, t, n) {
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
            Wc = function(e, t) {
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
          function Kc(e, t) {
            void 0 === t && (t = Jo());
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
                  m,
                  p,
                  g,
                  h,
                  v,
                  b,
                  y,
                  C,
                  x,
                  w,
                  S,
                  E,
                  N,
                  k,
                  T,
                  _,
                  B,
                  A,
                  R,
                  O,
                  D,
                  P,
                  I,
                  L,
                  M,
                  F,
                  U = 0,
                  j = [],
                  z = 0,
                  V = jo.decode,
                  H = Xt.makeMap(
                    "src,href,data,background,formaction,poster,xlink:href"
                  ),
                  q = /((java|vb)script|mhtml):/i,
                  $ = function(e) {
                    var t, n;
                    for (t = j.length; t-- && j[t].name !== e; );
                    if (t >= 0) {
                      for (n = j.length - 1; n >= t; n--)
                        (e = j[n]).valid && u(e.name);
                      j.length = t;
                    }
                  },
                  W = function(t, n, r, o, i) {
                    var a, u;
                    if (
                      ((r =
                        (n = n.toLowerCase()) in C ? n : V(r || o || i || "")),
                      w && !v && !1 === Vc(n))
                    ) {
                      if (!(a = T[n]) && _) {
                        for (
                          u = _.length;
                          u-- && !(a = _[u]).pattern.test(n);

                        );
                        -1 === u && (a = null);
                      }
                      if (!a) return;
                      if (a.validValues && !(r in a.validValues)) return;
                    }
                    if (H[n] && !e.allow_script_urls) {
                      var s = r.replace(/[\s\u0000-\u001F]+/g, "");
                      try {
                        s = decodeURIComponent(s);
                      } catch (e) {
                        s = unescape(s);
                      }
                      if (q.test(s)) return;
                      if (qc(e, s)) return;
                    }
                    (v && (n in H || 0 === n.indexOf("on"))) ||
                      ((m.map[n] = r), m.push({ name: n, value: r }));
                  };
                for (
                  P = new RegExp(
                    "<(?:(?:!--([\\w\\W]*?)--\x3e)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:!DOCTYPE([\\w\\W]*?)>)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)>)|(?:([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)((?:\\s+[^\"'>]+(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>]*))*|\\/|\\s+)>))",
                    "g"
                  ),
                    I = /([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g,
                    y = t.getShortEndedElements(),
                    D = e.self_closing_elements || t.getSelfClosingElements(),
                    C = t.getBoolAttrs(),
                    w = e.validate,
                    b = e.remove_internals,
                    F = e.fix_self_closing,
                    L = t.getSpecialElements(),
                    O = n + ">";
                  (l = P.exec(O));

                ) {
                  if (
                    (U < l.index && i(V(n.substr(U, l.index - U))), (f = l[6]))
                  )
                    ":" === (f = f.toLowerCase()).charAt(0) &&
                      (f = f.substr(1)),
                      $(f);
                  else if ((f = l[7])) {
                    if (l.index + l[0].length > n.length) {
                      i(V(n.substr(l.index))), (U = l.index + l[0].length);
                      continue;
                    }
                    ":" === (f = f.toLowerCase()).charAt(0) &&
                      (f = f.substr(1)),
                      (x = f in y),
                      F &&
                        D[f] &&
                        j.length > 0 &&
                        j[j.length - 1].name === f &&
                        $(f);
                    var K = Wc(I, l[8]);
                    if (null !== K) {
                      if ("all" === K) {
                        (U = $c(t, n, P.lastIndex)), (P.lastIndex = U);
                        continue;
                      }
                      E = !1;
                    }
                    if (!w || (S = t.getElementRule(f))) {
                      if (
                        ((E = !0),
                        w && ((T = S.attributes), (_ = S.attributePatterns)),
                        (k = l[8])
                          ? ((v = -1 !== k.indexOf("data-mce-type")) &&
                              b &&
                              (E = !1),
                            ((m = []).map = {}),
                            k.replace(I, W))
                          : ((m = []).map = {}),
                        w && !v)
                      ) {
                        if (
                          ((B = S.attributesRequired),
                          (A = S.attributesDefault),
                          (R = S.attributesForced),
                          S.removeEmptyAttrs && !m.length && (E = !1),
                          R)
                        )
                          for (p = R.length; p--; )
                            (h = (N = R[p]).name),
                              "{$uid}" === (M = N.value) && (M = "mce_" + z++),
                              (m.map[h] = M),
                              m.push({ name: h, value: M });
                        if (A)
                          for (p = A.length; p--; )
                            (h = (N = A[p]).name) in m.map ||
                              ("{$uid}" === (M = N.value) && (M = "mce_" + z++),
                              (m.map[h] = M),
                              m.push({ name: h, value: M }));
                        if (B) {
                          for (p = B.length; p-- && !(B[p] in m.map); );
                          -1 === p && (E = !1);
                        }
                        if ((N = m.map["data-mce-bogus"])) {
                          if ("all" === N) {
                            (U = $c(t, n, P.lastIndex)), (P.lastIndex = U);
                            continue;
                          }
                          E = !1;
                        }
                      }
                      E && a(f, m, x);
                    } else E = !1;
                    if ((d = L[f])) {
                      (d.lastIndex = U = l.index + l[0].length),
                        (l = d.exec(n))
                          ? (E && (g = n.substr(U, l.index - U)),
                            (U = l.index + l[0].length))
                          : ((g = n.substr(U)), (U = n.length)),
                        E && (g.length > 0 && i(g, !0), u(f)),
                        (P.lastIndex = U);
                      continue;
                    }
                    x ||
                      (k && k.indexOf("/") === k.length - 1
                        ? E && u(f)
                        : j.push({ name: f, valid: E }));
                  } else
                    (f = l[1])
                      ? (">" === f.charAt(0) && (f = " " + f),
                        e.allow_conditional_comments ||
                          "[if" !== f.substr(0, 3).toLowerCase() ||
                          (f = " " + f),
                        r(f))
                      : (f = l[2])
                      ? o(Hc(f))
                      : (f = l[3])
                      ? c(f)
                      : (f = l[4]) && s(f, l[5]);
                  U = l.index + l[0].length;
                }
                for (
                  U < n.length && i(V(n.substr(U))), p = j.length - 1;
                  p >= 0;
                  p--
                )
                  (f = j[p]).valid && u(f.name);
              }
            };
          }
          !(function(e) {
            e.findEndTag = $c;
          })(Kc || (Kc = {}));
          var Xc = Kc,
            Yc = function(e, t) {
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
                  (n = a[i[1]] ? r : Xc.findEndTag(c, u, r)),
                  (u = u.substring(0, r - o) + u.substring(n)),
                  (s.lastIndex = r - o);
              return ua(u);
            },
            Gc = { trimExternal: Yc, trimInternal: Yc },
            Jc = function(e, t, n) {
              var r = e.getParam(t, n);
              if (-1 !== r.indexOf("=")) {
                var o = e.getParam(t, "", "hash");
                return o.hasOwnProperty(e.id) ? o[e.id] : n;
              }
              return r;
            },
            Qc = {
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
                return Jc(e, "body_id", "tinymce");
              },
              getBodyClass: function(e) {
                return Jc(e, "body_class", "");
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
                return Xt.explode(e.getParam("font_size_style_values", ""));
              },
              getFontSizeClasses: function(e) {
                return Xt.explode(e.getParam("font_size_classes", ""));
              },
              getImagesDataImgFilter: function(e) {
                return e.getParam("images_dataimg_filter", o(!0), "function");
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
                return A(t)
                  ? U(t.split(","), jn)
                  : O(t)
                  ? t
                  : !1 === t || e.inline
                  ? []
                  : ["default"];
              }
            },
            Zc = function(e, t, n) {
              var r;
              if (
                ((t.format = t.format ? t.format : "html"),
                (t.get = !0),
                (t.getInner = !0),
                t.no_events || e.fire("BeforeGetContent", t),
                "raw" === t.format)
              )
                r = Xt.trim(Gc.trimExternal(e.serializer, n.innerHTML));
              else if ("text" === t.format)
                r = ua(n.innerText || n.textContent);
              else {
                if ("tree" === t.format) return e.serializer.serialize(n, t);
                r = (function(e, t) {
                  var n = Qc.getForcedRootBlock(e),
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
                "text" === t.format || po(Gn.fromDom(n))
                  ? (t.content = r)
                  : (t.content = Xt.trim(r)),
                t.no_events || e.fire("GetContent", t),
                t.content
              );
            },
            el = Xt.makeMap;
          function tl(e) {
            var t,
              n,
              r,
              o,
              i,
              a = [];
            return (
              (t = (e = e || {}).indent),
              (n = el(e.indent_before || "")),
              (r = el(e.indent_after || "")),
              (o = jo.getEncodeFunc(e.entity_encoding || "raw", e.entities)),
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
          }
          function nl(e, t) {
            void 0 === t && (t = Jo());
            var n = tl(e);
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
                      m,
                      p,
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
                          (((f = []).map = {}), (p = t.getElementRule(e.name))))
                      ) {
                        for (d = 0, m = p.attributesOrder.length; d < m; d++)
                          (c = p.attributesOrder[d]) in s.map &&
                            ((l = s.map[c]),
                            (f.map[c] = l),
                            f.push({ name: c, value: l }));
                        for (d = 0, m = s.length; d < m; d++)
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
          }
          var rl = function(e, t) {
              t(e),
                e.firstChild && rl(e.firstChild, t),
                e.next && rl(e.next, t);
            },
            ol = function(e, t, n) {
              var r = (function(e, t, n) {
                var r = {},
                  o = {},
                  i = [];
                for (var a in (n.firstChild &&
                  rl(n.firstChild, function(n) {
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
            il = function(e) {
              var t = Ar(e).dom();
              return e.dom() === t.activeElement;
            },
            al = function(e) {
              return ((t = Ar(e)),
              (n = void 0 !== t ? t.dom() : document),
              _.from(n.activeElement).map(Gn.fromDom)).filter(function(t) {
                return e.dom().contains(t.dom());
              });
              var t, n;
            },
            ul = function(e) {
              if (!O(e)) throw new Error("cases must be an array");
              if (0 === e.length)
                throw new Error("there must be at least one case");
              var t = [],
                n = {};
              return (
                j(e, function(r, o) {
                  var i = or(r);
                  if (1 !== i.length)
                    throw new Error("one and only one name per case");
                  var a = i[0],
                    u = r[a];
                  if (void 0 !== n[a])
                    throw new Error("duplicate key detected:" + a);
                  if ("cata" === a)
                    throw new Error("cannot have a case named cata (sorry)");
                  if (!O(u)) throw new Error("case arguments must be an array");
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
                          var n = or(e);
                          if (t.length !== n.length)
                            throw new Error(
                              "Wrong number of arguments to match. Expected: " +
                                t.join(",") +
                                "\nActual: " +
                                n.join(",")
                            );
                          if (
                            !Y(t, function(e) {
                              return F(n, e);
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
            sl = (ul([
              { before: ["element"] },
              { on: ["element", "offset"] },
              { after: ["element"] }
            ]),
            ul([
              { domRange: ["rng"] },
              { relative: ["startSitu", "finishSitu"] },
              { exact: ["start", "soffset", "finish", "foffset"] }
            ])),
            cl = yr("start", "soffset", "finish", "foffset"),
            ll = (sl.domRange, sl.relative, sl.exact, Xn.detect().browser),
            fl = function(e, t) {
              var n = rr(t) ? Bc(t).length : Lr(t).length + 1;
              return e > n ? n : e < 0 ? 0 : e;
            },
            dl = function(e) {
              return cl(
                e.start(),
                fl(e.soffset(), e.start()),
                e.finish(),
                fl(e.foffset(), e.finish())
              );
            },
            ml = function(e, t) {
              return Br(e, t) || _r(e, t);
            },
            pl = function(e) {
              return function(t) {
                return ml(e, t.start()) && ml(e, t.finish());
              };
            },
            gl = function(e) {
              return !0 === e.inline || ll.isIE();
            },
            hl = function(e) {
              return cl(
                Gn.fromDom(e.startContainer),
                e.startOffset,
                Gn.fromDom(e.endContainer),
                e.endOffset
              );
            },
            vl = function(e) {
              var t = e.getSelection();
              return (t && 0 !== t.rangeCount
                ? _.from(t.getRangeAt(0))
                : _.none()
              ).map(hl);
            },
            bl = function(e) {
              var t,
                n = ((t = e.dom().ownerDocument.defaultView), Gn.fromDom(t));
              return vl(n.dom()).filter(pl(e));
            },
            yl = function(e, t) {
              return _.from(t)
                .filter(pl(e))
                .map(dl);
            },
            Cl = function(e) {
              var t = document.createRange();
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
            xl = function(e) {
              return (e.bookmark ? e.bookmark : _.none())
                .bind(a(yl, Gn.fromDom(e.getBody())))
                .bind(Cl);
            },
            wl = {
              store: function(e) {
                var t = gl(e) ? bl(Gn.fromDom(e.getBody())) : _.none();
                e.bookmark = t.isSome() ? t : e.bookmark;
              },
              storeNative: function(e, t) {
                var n = Gn.fromDom(e.getBody()),
                  r = (gl(e) ? _.from(t) : _.none()).map(hl).filter(pl(n));
                e.bookmark = r.isSome() ? r : e.bookmark;
              },
              readRange: vl,
              restore: function(e) {
                xl(e).each(function(t) {
                  e.selection.setRng(t);
                });
              },
              getRng: xl,
              getBookmark: bl,
              validate: yl
            },
            Sl = function(e, t) {
              return (function(e) {
                return e.collapsed
                  ? _.from(ja(e.startContainer, e.startOffset)).map(Gn.fromDom)
                  : _.none();
              })(t).bind(function(t) {
                return fo(t)
                  ? _.some(t)
                  : !1 === Br(e, t)
                  ? _.some(e)
                  : _.none();
              });
            },
            El = function(e, t) {
              Sl(Gn.fromDom(e.getBody()), t)
                .bind(function(e) {
                  return tc.firstPositionIn(e.dom());
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
            Nl = function(e) {
              if (e.setActive)
                try {
                  e.setActive();
                } catch (t) {
                  e.focus();
                }
              else e.focus();
            },
            kl = function(e) {
              var t,
                n = e.getBody();
              return n && ((t = Gn.fromDom(n)), il(t) || al(t).isSome());
            },
            Tl = function(e) {
              return e.inline
                ? kl(e)
                : (function(e) {
                    return e.iframeElement && il(Gn.fromDom(e.iframeElement));
                  })(e);
            },
            _l = function(e) {
              return e.editorManager.setActive(e);
            },
            Bl = function(e, t) {
              e.removed ||
                (t
                  ? _l(e)
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
                        return Nl(o), El(e, r), void _l(e);
                      void 0 !== e.bookmark &&
                        !1 === Tl(e) &&
                        wl.getRng(e).each(function(t) {
                          e.selection.setRng(t), (r = t);
                        }),
                        e.inline || (le.opera || Nl(n), e.getWin().focus()),
                        (le.gecko || e.inline) && (Nl(n), El(e, r)),
                        _l(e);
                    })(e));
            },
            Al = Tl,
            Rl = function(e) {
              return e instanceof zc;
            },
            Ol = function(e, t) {
              e.dom.setHTML(e.getBody(), t),
                (function(e) {
                  Al(e) &&
                    tc.firstPositionIn(e.getBody()).each(function(t) {
                      var n = t.getNode(),
                        r = ko.isTable(n) ? tc.firstPositionIn(n).getOr(t) : t;
                      e.selection.setRng(r.toRange());
                    });
                })(e);
            },
            Dl = function(e, t, n) {
              return (
                void 0 === n && (n = {}),
                (n.format = n.format ? n.format : "html"),
                (n.set = !0),
                (n.content = Rl(t) ? "" : t),
                Rl(t) ||
                  n.no_events ||
                  (e.fire("BeforeSetContent", n), (t = n.content)),
                _.from(e.getBody()).fold(o(t), function(r) {
                  return Rl(t)
                    ? (function(e, t, n, r) {
                        ol(
                          e.parser.getNodeFilters(),
                          e.parser.getAttributeFilters(),
                          n
                        );
                        var o = nl(
                          { validate: e.validate },
                          e.schema
                        ).serialize(n);
                        return (
                          (r.content = po(Gn.fromDom(t)) ? o : Xt.trim(o)),
                          Ol(e, r.content),
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
                              (o = Qc.getForcedRootBlock(e)) &&
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
                              Ol(e, n),
                              e.fire("SetContent", r))
                            : ("raw" !== r.format &&
                                (n = nl(
                                  { validate: e.validate },
                                  e.schema
                                ).serialize(
                                  e.parser.parse(n, {
                                    isRootContent: !0,
                                    insert: !0
                                  })
                                )),
                              (r.content = po(Gn.fromDom(t)) ? n : Xt.trim(n)),
                              Ol(e, r.content),
                              r.no_events || e.fire("SetContent", r)),
                          r.content
                        );
                      })(e, r, t, n);
                })
              );
            },
            Pl = function(e, t) {
              return e.fire("PreProcess", t);
            },
            Il = function(e, t) {
              return e.fire("PostProcess", t);
            },
            Ll = function(e) {
              return e.fire("remove");
            },
            Ml = function(e) {
              return e.fire("detach");
            },
            Fl = function(e, t) {
              return e.fire("SwitchMode", { mode: t });
            },
            Ul = function(e, t, n, r) {
              e.fire("ObjectResizeStart", { target: t, width: n, height: r });
            },
            jl = function(e, t, n, r) {
              e.fire("ObjectResized", { target: t, width: n, height: r });
            },
            zl = ci.DOM,
            Vl = function(e) {
              return _.from(e).each(function(e) {
                return e.destroy();
              });
            },
            Hl = function(e) {
              if (!e.removed) {
                var t = e._selectionOverrides,
                  n = e.editorUpload,
                  r = e.getBody(),
                  o = e.getElement();
                r && e.save({ is_removing: !0 }),
                  (e.removed = !0),
                  e.unbindAllNativeEvents(),
                  e.hasHiddenInput && o && zl.remove(o.nextSibling),
                  !e.inline &&
                    r &&
                    (function(e) {
                      zl.setStyle(e.id, "display", e.orgDisplay);
                    })(e),
                  Ll(e),
                  e.editorManager.remove(e),
                  Ml(e),
                  zl.remove(e.getContainer()),
                  Vl(t),
                  Vl(n),
                  e.destroy();
              }
            },
            ql = function(e, t) {
              var n = e.selection,
                r = e.dom;
              e.destroyed ||
                (t || e.removed
                  ? (t ||
                      (e.editorManager.off("beforeunload", e._beforeUnload),
                      e.theme && e.theme.destroy && e.theme.destroy(),
                      Vl(n),
                      Vl(r)),
                    (function(e) {
                      var t = e.formElement;
                      t &&
                        (t._mceOldSubmit &&
                          ((t.submit = t._mceOldSubmit),
                          (t._mceOldSubmit = null)),
                        zl.unbind(t, "submit reset", e.formEventDelegate));
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
            $l = yr("sections", "settings"),
            Wl = Xn.detect(),
            Kl = Wl.deviceType.isTouch(),
            Xl = Wl.deviceType.isPhone(),
            Yl = ["lists", "autolink", "autosave"],
            Gl = Xl ? { theme: "mobile" } : {},
            Jl = function(e) {
              var t = O(e) ? e.join(" ") : e,
                n = U(A(t) ? t.split(" ") : [], jn);
              return V(n, function(e) {
                return e.length > 0;
              });
            },
            Ql = function(e, t) {
              var n,
                r,
                o,
                i = ((n = function(t, n) {
                  return F(e, n);
                }),
                (r = {}),
                (o = {}),
                ar(t, function(e, t) {
                  (n(e, t) ? r : o)[t] = e;
                }),
                { t: r, f: o });
              return $l(i.t, i.f);
            },
            Zl = function(e, t) {
              var n = t.external_plugins ? t.external_plugins : {};
              return e && e.external_plugins
                ? Xt.extend({}, e.external_plugins, n)
                : n;
            },
            ef = function(e, t, n, r) {
              var o = Jl(n.forced_plugins),
                i = Jl(r.plugins),
                u = (function(e, t) {
                  return [].concat(Jl(e)).concat(Jl(t));
                })(
                  o,
                  e &&
                    (function(e, t) {
                      return e.sections().hasOwnProperty(t);
                    })(t, "mobile")
                    ? (function(e) {
                        return V(e, a(F, Yl));
                      })(i)
                    : i
                );
              return Xt.extend(r, { plugins: u.join(" ") });
            },
            tf = function(e, t, n, r) {
              var o = Ql(["mobile"], r),
                i = Xt.extend(
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
                        return Xt.extend({}, n, o);
                      })(o, "mobile", Gl)
                    : {},
                  { validate: !0, external_plugins: Zl(n, o.settings()) }
                );
              return ef(e, o, n, i);
            },
            nf = function(e, t, n) {
              return _.from(t.settings[n]).filter(e);
            },
            rf = a(nf, A),
            of = function(e, t, n, r) {
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
                                ? (t[Xt.trim(n[0])] = Xt.trim(n[1]))
                                : (t[Xt.trim(n[0])] = Xt.trim(n));
                            }
                          )
                        : (t = e),
                      t
                    );
                  })(i)
                : "string" === r
                ? nf(A, e, t).getOr(n)
                : "number" === r
                ? nf(L, e, t).getOr(n)
                : "boolean" === r
                ? nf(P, e, t).getOr(n)
                : "object" === r
                ? nf(R, e, t).getOr(n)
                : "array" === r
                ? nf(O, e, t).getOr(n)
                : "string[]" === r
                ? nf(
                    ((o = A),
                    function(e) {
                      return O(e) && Y(e, o);
                    }),
                    e,
                    t
                  ).getOr(n)
                : "function" === r
                ? nf(I, e, t).getOr(n)
                : i;
            },
            af = function(e, t) {
              return t.dom()[e];
            },
            uf = function(e, t) {
              return parseInt(hr(t, e), 10);
            },
            sf = a(af, "clientWidth"),
            cf = a(af, "clientHeight"),
            lf = a(uf, "margin-top"),
            ff = a(uf, "margin-left"),
            df = {
              isXYInContentArea: function(e, t, n) {
                var r,
                  o = Gn.fromDom(e.getBody()),
                  i = e.inline
                    ? o
                    : ((r = o),
                      Gn.fromDom(r.dom().ownerDocument.documentElement)),
                  a = (function(e, t, n, r) {
                    var o = (function(e) {
                      return e.dom().getBoundingClientRect();
                    })(t);
                    return {
                      x: n - (e ? o.left + t.dom().clientLeft + ff(t) : 0),
                      y: r - (e ? o.top + t.dom().clientTop + lf(t) : 0)
                    };
                  })(e.inline, i, t, n);
                return (function(e, t, n) {
                  var r = sf(e),
                    o = cf(e);
                  return t >= 0 && n >= 0 && t <= r && n <= o;
                })(i, a.x, a.y);
              },
              isEditorAttachedToDom: function(e) {
                var t,
                  n = e.inline ? e.getBody() : e.getContentAreaContainer();
                return ((t = n), _.from(t).map(Gn.fromDom))
                  .map(function(e) {
                    return Br(Ar(e), e);
                  })
                  .getOr(!1);
              }
            };
          function mf(e) {
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
                $(t, function(t) {
                  return t === e;
                }).each(function(e) {
                  t.splice(e, 1);
                });
              },
              i = function(i) {
                if (!e.removed && df.isEditorAttachedToDom(e))
                  return q(t, function(e) {
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
                    ge.requestAnimationFrame(r);
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
          function pf(e) {
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
                    (t = V(t, function(e) {
                      return e !== n;
                    })).length && e.focus();
              };
            return (
              e.on("remove", function() {
                j(t, function(e) {
                  n().close(e);
                });
              }),
              {
                open: function(t, r) {
                  e.editorManager.setActive(e), wl.store(e);
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
          var gf,
            hf = Ci.PluginManager,
            vf = function(e, t) {
              var n = (function(e, t) {
                for (var n in hf.urls)
                  if (hf.urls[n] + "/plugin" + t + ".js" === e) return n;
                return null;
              })(t, e.suffix);
              return n
                ? bi.translate([
                    "Failed to load plugin: {0} from url {1}",
                    n,
                    t
                  ])
                : bi.translate(["Failed to load plugin url: {0}", t]);
            },
            bf = function(e, t) {
              e.notificationManager.open({ type: "error", text: t });
            },
            yf = function(e, t) {
              e._skinLoaded
                ? bf(e, t)
                : e.on("SkinLoaded", function() {
                    bf(e, t);
                  });
            },
            Cf = function(e) {
              for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
              var r = window.console;
              r &&
                (r.error
                  ? r.error.apply(r, arguments)
                  : r.log.apply(r, arguments));
            },
            xf = {
              pluginLoadError: function(e, t) {
                yf(e, vf(e, t));
              },
              pluginInitError: function(e, t, n) {
                var r = bi.translate(["Failed to initialize plugin: {0}", t]);
                Cf(r, n), yf(e, r);
              },
              uploadError: function(e, t) {
                yf(e, bi.translate(["Failed to upload image: {0}", t]));
              },
              displayError: yf,
              initError: Cf
            },
            wf = ((gf = {}),
            {
              add: function(e, t) {
                gf[e] = t;
              },
              get: function(e) {
                return gf[e] ? gf[e] : { icons: {} };
              }
            }),
            Sf = Ci.PluginManager,
            Ef = Ci.ThemeManager;
          function Nf() {
            return new (re.getOrDie("XMLHttpRequest"))();
          }
          function kf(e, t) {
            var n = {},
              r = function(e, n, r, o) {
                var i, a;
                (i = Nf()).open("POST", t.url),
                  (i.withCredentials = t.credentials),
                  (i.upload.onprogress = function(e) {
                    o((e.loaded / e.total) * 100);
                  }),
                  (i.onerror = function() {
                    r(
                      "Image upload failed due to a XHR Transport error. Code: " +
                        i.status
                    );
                  }),
                  (i.onload = function() {
                    var e, o, a;
                    i.status < 200 || i.status >= 300
                      ? r("HTTP Error: " + i.status)
                      : (e = JSON.parse(i.responseText)) &&
                        "string" == typeof e.location
                      ? n(
                          ((o = t.basePath),
                          (a = e.location),
                          o
                            ? o.replace(/\/$/, "") + "/" + a.replace(/^\//, "")
                            : a)
                        )
                      : r("Invalid JSON: " + i.responseText);
                  }),
                  (a = new FormData()).append("file", e.blob(), e.filename()),
                  i.send(a);
              },
              o = function(e, t) {
                return { url: t, blobInfo: e, status: !0 };
              },
              i = function(e, t) {
                return { url: "", blobInfo: e, status: !1, error: t };
              },
              a = function(e, t) {
                Xt.each(n[e], function(e) {
                  e(t);
                }),
                  delete n[e];
              },
              u = function(r, u) {
                return (
                  (r = Xt.grep(r, function(t) {
                    return !e.isUploaded(t.blobUri());
                  })),
                  fe.all(
                    Xt.map(r, function(r) {
                      return e.isPending(r.blobUri())
                        ? (function(e) {
                            var t = e.blobUri();
                            return new fe(function(e) {
                              (n[t] = n[t] || []), n[t].push(e);
                            });
                          })(r)
                        : (function(t, n, r) {
                            return (
                              e.markPending(t.blobUri()),
                              new fe(function(u) {
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
                                        a(t.blobUri(), o(t, n)),
                                        u(o(t, n));
                                    },
                                    function(n) {
                                      c(),
                                        e.removeFailed(t.blobUri()),
                                        a(t.blobUri(), i(t, n)),
                                        u(i(t, n));
                                    },
                                    function(e) {
                                      e < 0 ||
                                        e > 100 ||
                                        (s || (s = r()),
                                        s.progressBar.value(e));
                                    }
                                  );
                                } catch (e) {
                                  u(i(t, e.message));
                                }
                              })
                            );
                          })(r, t.handler, u);
                    })
                  )
                );
              };
            return (
              !1 === I(t.handler) && (t.handler = r),
              {
                upload: function(e, n) {
                  return t.url || t.handler !== r
                    ? u(e, n)
                    : new fe(function(e) {
                        e([]);
                      });
                }
              }
            );
          }
          var Tf = function(e) {
              return re.getOrDie("atob")(e);
            },
            _f = function(e) {
              var t,
                n,
                r = decodeURIComponent(e).split(",");
              return (
                (n = /data:([^;]+)/.exec(r[0])) && (t = n[1]),
                { type: t, data: r[1] }
              );
            },
            Bf = function(e) {
              return new fe(function(t) {
                var n,
                  r,
                  o,
                  i = _f(e);
                try {
                  n = Tf(i.data);
                } catch (e) {
                  return void t(new Blob([]));
                }
                for (
                  r = (function(e) {
                    return new (re.getOrDie("Uint8Array"))(e);
                  })(n.length),
                    o = 0;
                  o < r.length;
                  o++
                )
                  r[o] = n.charCodeAt(o);
                t(new Blob([r], { type: i.type }));
              });
            },
            Af = function(e) {
              return 0 === e.indexOf("blob:")
                ? (function(e) {
                    return new fe(function(t, n) {
                      var r = function() {
                        n(
                          "Cannot convert " +
                            e +
                            " to Blob. Resource might not exist or is inaccessible."
                        );
                      };
                      try {
                        var o = Nf();
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
                ? Bf(e)
                : null;
            },
            Rf = function(e) {
              return new fe(function(t) {
                var n = new (re.getOrDie("FileReader"))();
                (n.onloadend = function() {
                  t(n.result);
                }),
                  n.readAsDataURL(e);
              });
            },
            Of = _f,
            Df = 0,
            Pf = function(e) {
              return (e || "blobid") + Df++;
            },
            If = function(e, t, n, r) {
              var o, i;
              0 !== t.src.indexOf("blob:")
                ? ((o = Of(t.src).data),
                  (i = e.findFirst(function(e) {
                    return e.base64() === o;
                  }))
                    ? n({ image: t, blobInfo: i })
                    : Af(t.src).then(
                        function(r) {
                          (i = e.create(Pf(), r, o)),
                            e.add(i),
                            n({ image: t, blobInfo: i });
                        },
                        function(e) {
                          r(e);
                        }
                      ))
                : (i = e.getByUri(t.src))
                ? n({ image: t, blobInfo: i })
                : Af(t.src).then(
                    function(r) {
                      Rf(r).then(function(a) {
                        (o = Of(a).data),
                          (i = e.create(Pf(), r, o)),
                          e.add(i),
                          n({ image: t, blobInfo: i });
                      });
                    },
                    function(e) {
                      r(e);
                    }
                  );
            },
            Lf = function(e) {
              return e ? ee(e.getElementsByTagName("img")) : [];
            },
            Mf = 0,
            Ff = {
              uuid: function(e) {
                return (
                  e +
                  Mf++ +
                  ((t = function() {
                    return Math.round(4294967295 * Math.random()).toString(36);
                  }),
                  "s" + new Date().getTime().toString(36) + t() + t() + t())
                );
                var t;
              }
            };
          function Uf(e) {
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
                  (t = e.id || Ff.uuid("blobid")),
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
                    blobUri: o(e.blobUri || ie.createObjectURL(e.blob)),
                    uri: o(e.uri)
                  }
                );
              }),
              {
                create: function(e, t, r, o) {
                  if (A(e)) return n({ id: e, name: o, blob: t, base64: r });
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
                  return V(t, e)[0];
                }),
                removeByUri: function(e) {
                  t = V(t, function(t) {
                    return (
                      t.blobUri() !== e || (ie.revokeObjectURL(t.blobUri()), !1)
                    );
                  });
                },
                destroy: function() {
                  j(t, function(e) {
                    ie.revokeObjectURL(e.blobUri());
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
              m = [],
              p = function(t) {
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
              h = function(e, t, n) {
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
                        return h(e, t, n);
                      }))
                    : (e.content = h(e.content, t, n));
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
                    (a = kf(d, {
                      url: Qc.getImageUploadUrl(e),
                      basePath: Qc.getImageUploadBasePath(e),
                      credentials: Qc.getImagesUploadCredentials(e),
                      handler: Qc.getImagesUploadHandler(e)
                    })),
                  w().then(
                    p(function(n) {
                      var r;
                      return (
                        (r = U(n, function(e) {
                          return e.blobInfo;
                        })),
                        a.upload(r, b).then(
                          p(function(r) {
                            var o = U(r, function(t, r) {
                              var o = n[r].image;
                              return (
                                t.status && Qc.shouldReplaceBlobUris(e)
                                  ? (function(t, n) {
                                      f.removeByUri(t.src),
                                        v(t.src, n),
                                        e
                                          .$(t)
                                          .attr({
                                            src: Qc.shouldReuseFileName(e)
                                              ? n + "?" + new Date().getTime()
                                              : n,
                                            "data-mce-src": e.convertURL(
                                              n,
                                              "src"
                                            )
                                          });
                                    })(o, t.url)
                                  : t.error && xf.uploadError(e, t.error),
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
                if (Qc.isAutomaticUploadsEnabled(e)) return y(t);
              },
              x = function(t) {
                return (
                  !1 !==
                    Y(m, function(e) {
                      return e(t);
                    }) &&
                  (0 !== t.getAttribute("src").indexOf("data:") ||
                    Qc.getImagesDataImgFilter(e)(t))
                );
              },
              w = function() {
                return (
                  u ||
                    (u = (function(e, t) {
                      var n = {};
                      return {
                        findAll: function(r, i) {
                          var a;
                          i || (i = o(!0)),
                            (a = V(Lf(r), function(t) {
                              var n = t.src;
                              return (
                                !!le.fileApi &&
                                !t.hasAttribute("data-mce-bogus") &&
                                !t.hasAttribute("data-mce-placeholder") &&
                                !(!n || n === le.transparentSrc) &&
                                (0 === n.indexOf("blob:")
                                  ? !e.isUploaded(n) && i(t)
                                  : 0 === n.indexOf("data:") && i(t))
                              );
                            }));
                          var u = U(a, function(e) {
                            if (n[e.src])
                              return new fe(function(t) {
                                n[e.src].then(function(n) {
                                  if ("string" == typeof n) return n;
                                  t({ image: e, blobInfo: n.blobInfo });
                                });
                              });
                            var r = new fe(function(n, r) {
                              If(t, e, n, r);
                            })
                              .then(function(e) {
                                return delete n[e.image.src], e;
                              })
                              .catch(function(t) {
                                return delete n[e.src], t;
                              });
                            return (n[e.src] = r), r;
                          });
                          return fe.all(u);
                        }
                      };
                    })(d, f)),
                  u.findAll(e.getBody(), x).then(
                    p(function(t) {
                      return (
                        (t = V(t, function(t) {
                          return (
                            "string" != typeof t || (xf.displayError(e, t), !1)
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
              S = function(t) {
                return t.replace(/src="(blob:[^"]+)"/g, function(t, n) {
                  var r = d.getResultUri(n);
                  if (r) return 'src="' + r + '"';
                  var o = f.getByUri(n);
                  return (
                    o ||
                      (o = H(
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
                Qc.isAutomaticUploadsEnabled(e) ? C() : w();
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
                  m.push(e);
                },
                uploadImages: y,
                uploadImagesAuto: C,
                scanForImages: w,
                destroy: function() {
                  f.destroy(), d.destroy(), (u = a = null);
                }
              }
            );
          }
          var jf = function(e, t, n) {
              return Br(t, e)
                ? (function(e, t) {
                    for (
                      var n = I(t) ? t : o(!1), r = e.dom(), i = [];
                      null !== r.parentNode && void 0 !== r.parentNode;

                    ) {
                      var a = r.parentNode,
                        u = Gn.fromDom(a);
                      if ((i.push(u), !0 === n(u))) break;
                      r = a;
                    }
                    return i;
                  })(e, function(e) {
                    return n(e) || _r(e, t);
                  }).slice(0, -1)
                : [];
            },
            zf = function(e, t) {
              return jf(e, t, o(!1));
            },
            Vf = zf,
            Hf = function(e, t) {
              return [e].concat(zf(e, t));
            },
            qf = function(e, t) {
              return e.hasOwnProperty(t.nodeName);
            },
            $f = function(e, t) {
              return (
                !!ko.isText(t) ||
                (!!ko.isElement(t) && !qf(e, t) && !cc.isBookmarkNode(t))
              );
            },
            Wf = function(e, t, n) {
              return (
                (r = Vf(Gn.fromDom(n), Gn.fromDom(t))),
                $(r, function(t) {
                  return qf(e, t.dom());
                }).isSome()
              );
              var r;
            },
            Kf = function(e, t) {
              if (ko.isText(t)) {
                if (0 === t.nodeValue.length) return !0;
                if (
                  /^\s+$/.test(t.nodeValue) &&
                  (!t.nextSibling || qf(e, t.nextSibling))
                )
                  return !0;
              }
              return !1;
            },
            Xf = function(e) {
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
                m = e.schema,
                p = m.getBlockElements(),
                g = d.getStart(),
                h = e.getBody(),
                v = Qc.getForcedRootBlock(e);
              if (
                g &&
                ko.isElement(g) &&
                v &&
                ((l = h.nodeName.toLowerCase()),
                m.isValidChild(l, v.toLowerCase()) && !Wf(p, h, g))
              ) {
                for (
                  n = (t = d.getRng()).startContainer,
                    r = t.startOffset,
                    o = t.endContainer,
                    i = t.endOffset,
                    c = Al(e),
                    g = h.firstChild;
                  g;

                )
                  if ($f(p, g)) {
                    if (Kf(p, g)) {
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
                  c &&
                  (t.setStart(n, r),
                  t.setEnd(o, i),
                  d.setRng(t),
                  e.nodeChanged());
              }
            },
            Yf = function(e) {
              Qc.getForcedRootBlock(e) && e.on("NodeChange", a(Xf, e));
            },
            Gf = {
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
            Jf = function(e) {
              var t = e.startContainer,
                n = e.startOffset;
              return ko.isText(t)
                ? 0 === n
                  ? _.some(Gn.fromDom(t))
                  : _.none()
                : _.from(t.childNodes[n]).map(Gn.fromDom);
            },
            Qf = function(e) {
              var t = e.endContainer,
                n = e.endOffset;
              return ko.isText(t)
                ? n === t.data.length
                  ? _.some(Gn.fromDom(t))
                  : _.none()
                : _.from(t.childNodes[n - 1]).map(Gn.fromDom);
            },
            Zf = function(e) {
              return Fr(e).fold(o([e]), function(t) {
                return [e].concat(Zf(t));
              });
            },
            ed = function(e) {
              return Ur(e).fold(o([e]), function(t) {
                return "br" === er(t)
                  ? Or(t)
                      .map(function(t) {
                        return [e].concat(ed(t));
                      })
                      .getOr([])
                  : [e].concat(ed(t));
              });
            },
            td = function(e, t, n, r) {
              var o = n,
                i = new Qr(n, o),
                a = e.schema.getNonEmptyElements();
              do {
                if (3 === n.nodeType && 0 !== Xt.trim(n.nodeValue).length)
                  return void (r
                    ? t.setStart(n, 0)
                    : t.setEnd(n, n.nodeValue.length));
                if (a[n.nodeName] && !/^(TD|TH)$/.test(n.nodeName))
                  return void (r
                    ? t.setStartBefore(n)
                    : "BR" === n.nodeName
                    ? t.setEndBefore(n)
                    : t.setEndAfter(n));
                if (le.ie && le.ie < 11 && e.isBlock(n) && e.isEmpty(n))
                  return void (r ? t.setStart(n, 0) : t.setEnd(n, 0));
              } while ((n = r ? i.next() : i.prev()));
              "BODY" === o.nodeName &&
                (r ? t.setStart(o, 0) : t.setEnd(o, o.childNodes.length));
            },
            nd = function(e) {
              var t = e.selection.getSel();
              return t && t.rangeCount > 0;
            };
          function rd(e) {
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
                  ("nodechange" !== n.type && Gf.isEq(o, t)) ||
                    e.fire("SelectionChange"),
                  (t = o);
              }),
              e.on("contextmenu", function() {
                e.fire("SelectionChange");
              }),
              e.on("SelectionChange", function() {
                var t = e.selection.getStart(!0);
                !t ||
                  (!le.range && e.selection.isCollapsed()) ||
                  (nd(e) &&
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
                  nd(e) &&
                  ("IMG" === e.selection.getNode().nodeName
                    ? ge.setEditorTimeout(e, function() {
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
          var od,
            id = function(e) {
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
            ad = function(e, t) {
              return (
                (n = (function(e) {
                  return e.inline ? id(e.getBody()) : { left: 0, top: 0 };
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
                        var n = id(e.getContentAreaContainer()),
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
            ud = ko.isContentEditableFalse,
            sd = ko.isContentEditableTrue,
            cd = function(e) {
              e && e.parentNode && e.parentNode.removeChild(e);
            },
            ld = function(e, t) {
              return function(n) {
                if (
                  (function(e) {
                    return 0 === e.button;
                  })(n)
                ) {
                  var r = q(t.dom.getParents(n.target), Wa(ud, sd)).getOr(null);
                  if (((u = t.getBody()), ud((s = r)) && s !== u)) {
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
            fd = function(e, t) {
              return function(n) {
                if (
                  e.dragging &&
                  (function(e, t, n) {
                    return t !== n && !e.dom.isChildOf(t, n) && !ud(t);
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
                      cd(e.element),
                        t.insertContent(t.dom.getOuterHTML(r)),
                        t._selectionOverrides.hideFakeCaret();
                    }));
                }
                var i, a, u, s;
                dd(e);
              };
            },
            dd = function(e) {
              (e.dragging = !1), (e.element = null), cd(e.ghost);
            },
            md = function(e) {
              var t,
                n,
                r,
                o,
                i,
                a,
                u = {};
              (t = ci.DOM),
                (a = document),
                (n = ld(u, e)),
                (r = (function(e, t) {
                  var n = ge.throttle(function(e, n) {
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
                      })(e, ad(t, r));
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
                })(u, e)),
                (o = fd(u, e)),
                (i = (function(e, t) {
                  return function() {
                    e.dragging && t.fire("dragend"), dd(e);
                  };
                })(u, e)),
                e.on("mousedown", n),
                e.on("mousemove", r),
                e.on("mouseup", o),
                t.bind(a, "mousemove", r),
                t.bind(a, "mouseup", i),
                e.on("remove", function() {
                  t.unbind(a, "mousemove", r), t.unbind(a, "mouseup", i);
                });
            },
            pd = function(e) {
              md(e),
                (function(e) {
                  e.on("drop", function(t) {
                    var n =
                      void 0 !== t.clientX
                        ? e.getDoc().elementFromPoint(t.clientX, t.clientY)
                        : null;
                    (ud(n) || ud(e.dom.getContentEditableParent(n))) &&
                      t.preventDefault();
                  });
                })(e);
            },
            gd = function(e) {
              return H(
                e,
                function(e, t) {
                  return e.concat(
                    (function(e) {
                      var t = function(t) {
                        return U(t, function(t) {
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
          })(od || (od = {}));
          var hd = function(e, t, n, r, o, i) {
              var a,
                u,
                s = 0,
                c = [],
                l = function(r) {
                  var i, a, l;
                  for (
                    l = gd([r]), -1 === e && (l = l.reverse()), i = 0;
                    i < l.length;
                    i++
                  )
                    if (((a = l[i]), !n(a, u))) {
                      if (
                        (c.length > 0 && t(a, Ht.last(c)) && s++,
                        (a.line = s),
                        o(a))
                      )
                        return !0;
                      c.push(a);
                    }
                };
              return (u = Ht.last(i.getClientRects()))
                ? (l((a = i.getNode())),
                  (function(e, t, n, r) {
                    for (; (r = ds(r, e, Aa, t)); ) if (n(r)) return;
                  })(e, r, l, a),
                  c)
                : c;
            },
            vd = a(hd, od.Up, Ia, La),
            bd = a(hd, od.Down, La, Ia),
            yd = function(e) {
              return function(t) {
                return (function(e, t) {
                  return t.line > e;
                })(e, t);
              };
            },
            Cd = function(e) {
              return function(t) {
                return (function(e, t) {
                  return t.line === e;
                })(e, t);
              };
            },
            xd = ko.isContentEditableFalse,
            wd = ds,
            Sd = function(e, t) {
              return Math.abs(e.left - t);
            },
            Ed = function(e, t) {
              return Math.abs(e.right - t);
            },
            Nd = function(e, t) {
              return e >= t.left && e <= t.right;
            },
            kd = function(e, t) {
              return Ht.reduce(e, function(e, n) {
                var r, o;
                return (
                  (r = Math.min(Sd(e, t), Ed(e, t))),
                  (o = Math.min(Sd(n, t), Ed(n, t))),
                  Nd(t, n)
                    ? n
                    : Nd(t, e)
                    ? e
                    : o === r && xd(n.node)
                    ? n
                    : o < r
                    ? n
                    : e
                );
              });
            },
            Td = function(e, t, n, r) {
              for (; (r = wd(r, e, Aa, t)); ) if (n(r)) return;
            },
            _d = function(e, t, n) {
              var r,
                o = gd(
                  (function(e) {
                    return V(ee(e.getElementsByTagName("*")), Zu);
                  })(e)
                ),
                i = V(o, function(e) {
                  return n >= e.top && n <= e.bottom;
                });
              return (r = kd(i, t)) &&
                (r = kd(
                  (function(e, t) {
                    var n = [],
                      r = function(e, r) {
                        var o;
                        return (
                          (o = V(gd([r]), function(n) {
                            return !e(n, t);
                          })),
                          (n = n.concat(o)),
                          0 === o.length
                        );
                      };
                    return (
                      n.push(t),
                      Td(od.Up, e, a(r, Ia), t.node),
                      Td(od.Down, e, a(r, La), t.node),
                      n
                    );
                  })(e, r),
                  t
                )) &&
                Zu(r.node)
                ? (function(e, t) {
                    return { node: e.node, before: Sd(e, t) < Ed(e, t) };
                  })(r, t)
                : null;
            },
            Bd = function(e, t, n) {
              return (
                !n.collapsed &&
                H(
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
            Ad = ko.isContentEditableTrue,
            Rd = ko.isContentEditableFalse,
            Od = function(e, t, n, r, o) {
              return t._selectionOverrides.showCaret(e, n, r, o);
            },
            Dd = function(e, t) {
              return e
                .fire("BeforeObjectSelected", { target: t })
                .isDefaultPrevented()
                ? null
                : (function(e) {
                    var t = e.ownerDocument.createRange();
                    return t.selectNode(e), t;
                  })(t);
            },
            Pd = function(e, t, n) {
              var r = xs(1, e.getBody(), t),
                o = pu.fromRangeStart(r),
                i = o.getNode();
              if (Rd(i)) return Od(1, e, i, !o.isAtEnd(), !1);
              var a = o.getNode(!0);
              if (Rd(a)) return Od(1, e, a, !1, !1);
              var u = e.dom.getParent(o.getNode(), function(e) {
                return Rd(e) || Ad(e);
              });
              return Rd(u) ? Od(1, e, u, !1, n) : null;
            },
            Id = function(e, t, n) {
              if (!t || !t.collapsed) return t;
              var r = Pd(e, t, n);
              return r || t;
            },
            Ld = function(e) {
              var t = Bi(function() {
                if (
                  !e.removed &&
                  e.getBody().contains(document.activeElement) &&
                  e.selection.getRng().collapsed
                ) {
                  var t = Id(e, e.selection.getRng(), !1);
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
            Md = {
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
                return le.mac ? e.metaKey : e.ctrlKey && !e.altKey;
              }
            },
            Fd = ko.isContentEditableTrue,
            Ud = ko.isContentEditableFalse,
            jd = Ts,
            zd = ks,
            Vd = function(e, t) {
              for (var n = e.getBody(); t && t !== n; ) {
                if (Fd(t) || Ud(t)) return t;
                t = t.parentNode;
              }
              return null;
            },
            Hd = function(e) {
              var t,
                n = e.getBody(),
                r = Ju(
                  e.getBody(),
                  function(t) {
                    return e.dom.isBlock(t);
                  },
                  function() {
                    return Al(e);
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
                    (t = xs(e, n, t)),
                    -1 === e ? pu.fromRangeStart(t) : pu.fromRangeEnd(t)
                  );
                },
                c = function(e) {
                  return da(e) || va(e) || ba(e);
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
                    p,
                    g,
                    h,
                    v,
                    b,
                    y = e.$,
                    C = e.dom;
                  if (!n) return null;
                  if (n.collapsed) {
                    if (!l(n))
                      if (!1 === r) {
                        if (((h = s(-1, n)), Zu(h.getNode(!0))))
                          return u(-1, h.getNode(!0), !1, !1);
                        if (Zu(h.getNode()))
                          return u(-1, h.getNode(), !h.isAtEnd(), !1);
                      } else {
                        if (((h = s(1, n)), Zu(h.getNode())))
                          return u(1, h.getNode(), !h.isAtEnd(), !1);
                        if (Zu(h.getNode(!0)))
                          return u(1, h.getNode(!0), !1, !1);
                      }
                    return null;
                  }
                  return (
                    (f = n.startContainer),
                    (d = n.startOffset),
                    (p = n.endOffset),
                    3 === f.nodeType &&
                      0 === d &&
                      Ud(f.parentNode) &&
                      ((f = f.parentNode),
                      (d = C.nodeIndex(f)),
                      (f = f.parentNode)),
                    1 !== f.nodeType
                      ? null
                      : (p === d + 1 && (i = f.childNodes[d]),
                        Ud(i)
                          ? ((v = b = i.cloneNode(!0)),
                            (g = e.fire("ObjectSelected", {
                              target: i,
                              targetClone: v
                            })).isDefaultPrevented()
                              ? null
                              : ((a = Hi(Gn.fromDom(e.getBody()), "#" + o).fold(
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
                                v === b && le.ie
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
                                  Fi(
                                    Gn.fromDom(e.getBody()),
                                    "*[data-mce-selected]"
                                  ),
                                  function(e) {
                                    gr(e, "data-mce-selected");
                                  }
                                ),
                                i.setAttribute("data-mce-selected", "1"),
                                (t = i),
                                m(),
                                n))
                          : null)
                  );
                },
                d = function() {
                  t &&
                    (t.removeAttribute("data-mce-selected"),
                    Hi(Gn.fromDom(e.getBody()), "#" + o).each(Ti),
                    (t = null)),
                    Hi(Gn.fromDom(e.getBody()), "#" + o).each(Ti),
                    (t = null);
                },
                m = function() {
                  r.hide();
                };
              return (
                le.ceFalse &&
                  (function() {
                    e.on("mouseup", function(t) {
                      var n = a();
                      n.collapsed &&
                        df.isXYInContentArea(e, t.clientX, t.clientY) &&
                        i(Pd(e, n, !1));
                    }),
                      e.on("click", function(t) {
                        var n;
                        (n = Vd(e, t.target)) &&
                          (Ud(n) && (t.preventDefault(), e.focus()),
                          Fd(n) &&
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
                          !1 !== Ud(Vd(e, i))
                        ) ||
                        (i &&
                          ((r = i),
                          (o = a),
                          !(
                            e.dom.getParent(r, e.dom.isBlock) ===
                            e.dom.getParent(o, e.dom.isBlock)
                          )) &&
                          (function(e) {
                            var t = Ws(e);
                            if (!e.firstChild) return !1;
                            var n = pu.before(e.firstChild),
                              r = t.next(n);
                            return r && !zd(r) && !jd(r);
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
                          var r = Vd(e, n.target);
                          Ud(r) && (t || (n.preventDefault(), f(Dd(e, r))));
                        });
                    })(e),
                      e.on("mousedown", function(t) {
                        var r,
                          o = t.target;
                        if (
                          (o === n ||
                            "HTML" === o.nodeName ||
                            e.dom.isChildOf(o, n)) &&
                          !1 !== df.isXYInContentArea(e, t.clientX, t.clientY)
                        )
                          if ((r = Vd(e, o)))
                            Ud(r)
                              ? (t.preventDefault(), f(Dd(e, r)))
                              : (d(),
                                (Fd(r) && t.shiftKey) ||
                                  Bd(
                                    t.clientX,
                                    t.clientY,
                                    e.selection.getRng()
                                  ) ||
                                  (m(),
                                  e.selection.placeCaretAt(
                                    t.clientX,
                                    t.clientY
                                  )));
                          else if (!1 === Zu(o)) {
                            d(), m();
                            var a = _d(n, t.clientX, t.clientY);
                            if (a && !s(t.target, a.node)) {
                              t.preventDefault();
                              var c = u(1, a.node, a.before, !1);
                              e.getBody().focus(), i(c);
                            }
                          }
                      }),
                      e.on("keypress", function(t) {
                        Md.modifierPressed(t) ||
                          (t.keyCode,
                          Ud(e.selection.getNode()) && t.preventDefault());
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
                        l(r) ||
                          "mcepastebin" === r.startContainer.parentNode.id ||
                          m(),
                          (n = r.startContainer.parentNode),
                          e.dom.hasClass(n, "mce-offscreen-selection") || d();
                      }),
                      e.on("copy", function(t) {
                        var n,
                          r = t.clipboardData;
                        if (
                          !t.isDefaultPrevented() &&
                          t.clipboardData &&
                          !le.ie
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
                      pd(e),
                      Ld(e);
                  })(),
                {
                  showCaret: u,
                  showBlockCaretContainer: function(t) {
                    t.hasAttribute("data-mce-caret") &&
                      (ya(t), i(a()), e.selection.scrollIntoView(t[0]));
                  },
                  hideFakeCaret: m,
                  destroy: function() {
                    r.destroy(), (t = null);
                  }
                }
              );
            },
            qd = 0,
            $d = 2,
            Wd = 1,
            Kd = function(e, t) {
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
                  for (var a = n; a - r < i && a < o && e[a] === t[a - r]; )
                    ++a;
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
                    m,
                    p,
                    g,
                    h = c - l,
                    v = l + c,
                    b = (v % 2 == 0 ? v : v + 1) / 2;
                  for (r[1 + b] = n, o[1 + b] = i + 1, f = 0; f <= b; ++f) {
                    for (d = -f; d <= f; d += 2) {
                      for (
                        m = d + b,
                          d === -f || (d !== f && r[m - 1] < r[m + 1])
                            ? (r[m] = r[m + 1])
                            : (r[m] = r[m - 1] + 1),
                          g = (p = r[m]) - n + u - d;
                        p < i && g < s && e[p] === t[g];

                      )
                        (r[m] = ++p), ++g;
                      if (
                        h % 2 != 0 &&
                        h - f <= d &&
                        d <= h + f &&
                        o[m - h] <= r[m]
                      )
                        return a(o[m - h], d + n - u, i, s);
                    }
                    for (d = h - f; d <= h + f; d += 2) {
                      for (
                        m = d + b - h,
                          d === h - f || (d !== h + f && o[m + 1] <= o[m - 1])
                            ? (o[m] = o[m + 1] - 1)
                            : (o[m] = o[m - 1]),
                          g = (p = o[m] - 1) - n + u - d;
                        p >= n && g >= u && e[p] === t[g];

                      )
                        (o[m] = p--), g--;
                      if (h % 2 == 0 && -f <= d && d <= f && o[m] <= r[m + h])
                        return a(o[m], d + n - u, i, s);
                    }
                  }
                },
                s = [];
              return i(0, e.length, 0, t.length, s), s;
            },
            Xd = function(e) {
              return ko.isElement(e)
                ? e.outerHTML
                : ko.isText(e)
                ? jo.encodeRaw(e.data, !1)
                : ko.isComment(e)
                ? "\x3c!--" + e.data + "--\x3e"
                : "";
            },
            Yd = function(e, t, n) {
              var r = (function(e) {
                var t, n, r;
                for (
                  r = document.createElement("div"),
                    t = document.createDocumentFragment(),
                    e && (r.innerHTML = e);
                  (n = r.firstChild);

                )
                  t.appendChild(n);
                return t;
              })(t);
              if (e.hasChildNodes() && n < e.childNodes.length) {
                var o = e.childNodes[n];
                o.parentNode.insertBefore(r, o);
              } else e.appendChild(r);
            },
            Gd = function(e) {
              return V(U(ee(e.childNodes), Xd), function(e) {
                return e.length > 0;
              });
            },
            Jd = function(e, t) {
              var n = U(ee(t.childNodes), Xd);
              return (
                (function(e, t) {
                  var n = 0;
                  j(e, function(e) {
                    e[0] === qd
                      ? n++
                      : e[0] === Wd
                      ? (Yd(t, e[1], n), n++)
                      : e[0] === $d &&
                        (function(e, t) {
                          if (e.hasChildNodes() && t < e.childNodes.length) {
                            var n = e.childNodes[t];
                            n.parentNode.removeChild(n);
                          }
                        })(t, n);
                  });
                })(Kd(n, e), t),
                t
              );
            },
            Qd = gi(_.none()),
            Zd = function(e) {
              return {
                type: "fragmented",
                fragments: e,
                content: "",
                bookmark: null,
                beforeBookmark: null
              };
            },
            em = function(e) {
              return {
                type: "complete",
                fragments: null,
                content: e,
                bookmark: null,
                beforeBookmark: null
              };
            },
            tm = function(e) {
              return "fragmented" === e.type ? e.fragments.join("") : e.content;
            },
            nm = function(e) {
              var t = Gn.fromTag(
                "body",
                Qd.get().getOrThunk(function() {
                  var e = document.implementation.createHTMLDocument("undo");
                  return Qd.set(_.some(e)), e;
                })
              );
              return (
                oa(t, tm(e)),
                j(Fi(t, "*[data-mce-bogus]"), _i),
                t.dom().innerHTML
              );
            },
            rm = {
              createFragmentedLevel: Zd,
              createCompleteLevel: em,
              createFromEditor: function(e) {
                var t, n, r;
                return (
                  (t = Gd(e.getBody())),
                  -1 !==
                  (n = (r = X(t, function(t) {
                    var n = Gc.trimInternal(e.serializer, t);
                    return n.length > 0 ? [n] : [];
                  })).join("")).indexOf("</iframe>")
                    ? Zd(r)
                    : em(n)
                );
              },
              applyToEditor: function(e, t, n) {
                "fragmented" === t.type
                  ? Jd(t.fragments, e.getBody())
                  : e.setContent(t.content, { format: "raw" }),
                  e.selection.moveToBookmark(n ? t.beforeBookmark : t.bookmark);
              },
              isEq: function(e, t) {
                return (
                  !(!e || !t) &&
                  (!!(function(e, t) {
                    return tm(e) === tm(t);
                  })(e, t) ||
                    (function(e, t) {
                      return nm(e) === nm(t);
                    })(e, t))
                );
              }
            };
          function om(e) {
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
              e.on("ObjectResizeStart Cut", function() {
                r.beforeChange();
              }),
              e.on("SaveContent ObjectResized blur", l),
              e.on("DragEnd", l),
              e.on("KeyUp", function(t) {
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
                    !1 === rm.isEq(rm.createFromEditor(e), i[0]) &&
                    (!1 === e.isDirty() &&
                      (c(!0),
                      e.fire("change", { level: i[0], lastLevel: null })),
                    e.fire("TypingUndo"),
                    (n = !1),
                    e.nodeChanged()));
              }),
              e.on("KeyDown", function(e) {
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
              e.on("MouseDown", function(e) {
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
                  u() && (t = Iu.getUndoBookmark(e.selection));
                },
                add: function(n, r) {
                  var a,
                    s,
                    l,
                    f = e.settings;
                  if (
                    ((l = rm.createFromEditor(e)),
                    (n = n || {}),
                    (n = Xt.extend(n, l)),
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
                  if (s && rm.isEq(s, n)) return null;
                  if (
                    (i[o] && (i[o].beforeBookmark = t),
                    f.custom_undo_redo_levels &&
                      i.length > f.custom_undo_redo_levels)
                  ) {
                    for (a = 0; a < i.length - 1; a++) i[a] = i[a + 1];
                    i.length--, (o = i.length);
                  }
                  (n.bookmark = Iu.getUndoBookmark(e.selection)),
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
                      rm.applyToEditor(e, t, !0),
                      c(!0),
                      e.fire("undo", { level: t })),
                    t
                  );
                },
                redo: function() {
                  var t;
                  return (
                    o < i.length - 1 &&
                      ((t = i[++o]),
                      rm.applyToEditor(e, t, !1),
                      c(!0),
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
                    (r.typing && i[0] && !rm.isEq(rm.createFromEditor(e), i[0]))
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
                    rm.applyToEditor(e, a, !0),
                    r.transact(n) && (i[o - 1].beforeBookmark = u));
                }
              })
            );
          }
          var im = function(e) {
              var t = Fi(e, "br"),
                n = V(
                  (function(e) {
                    for (var t = [], n = e.dom(); n; )
                      t.push(Gn.fromDom(n)), (n = n.lastChild);
                    return t;
                  })(e).slice(-1),
                  ao
                );
              t.length === n.length && j(n, Ti);
            },
            am = function(e) {
              ki(e), Ei(e, Gn.fromHtml('<br data-mce-bogus="1">'));
            },
            um = function(e) {
              Ur(e).each(function(t) {
                Or(t).each(function(n) {
                  oo(e) && ao(t) && oo(n) && Ti(t);
                });
              });
            },
            sm = mc.isEq,
            cm = function(e, t, n) {
              var r = e.formatter.get(n);
              if (r)
                for (var o = 0; o < r.length; o++)
                  if (!1 === r[o].inherit && e.dom.is(t, r[o].selector))
                    return !0;
              return !1;
            },
            lm = function(e, t, n, r) {
              var o = e.dom.getRoot();
              return (
                t !== o &&
                ((t = e.dom.getParent(t, function(t) {
                  return (
                    !!cm(e, t, n) || t.parentNode === o || !!mm(e, t, n, r, !0)
                  );
                })),
                mm(e, t, n, r))
              );
            },
            fm = function(e, t, n) {
              return (
                !!sm(t, n.inline) ||
                !!sm(t, n.block) ||
                (n.selector ? 1 === t.nodeType && e.is(t, n.selector) : void 0)
              );
            },
            dm = function(e, t, n, r, o, i) {
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
                            : mc.getStyle(e, t, a)),
                        o && !u && !n.exact)
                      )
                        return;
                      if (
                        (!o || n.exact) &&
                        !sm(
                          u,
                          mc.normalizeStyleValue(e, mc.replaceVars(c[a], i), a)
                        )
                      )
                        return;
                    }
                } else
                  for (s = 0; s < c.length; s++)
                    if (
                      "attributes" === r
                        ? e.getAttrib(t, c[s])
                        : mc.getStyle(e, t, c[s])
                    )
                      return n;
              return n;
            },
            mm = function(e, t, n, r, o) {
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
                    fm(e.dom, t, i) &&
                      dm(l, t, i, "attributes", o, r) &&
                      dm(l, t, i, "styles", o, r))
                  ) {
                    if ((s = i.classes))
                      for (u = 0; u < s.length; u++)
                        if (!e.dom.hasClass(t, s[u])) return;
                    return i;
                  }
            },
            pm = {
              matchNode: mm,
              matchName: fm,
              match: function(e, t, n, r) {
                var o;
                return r
                  ? lm(e, r, t, n)
                  : ((r = e.selection.getNode()),
                    !!lm(e, r, t, n) ||
                      !((o = e.selection.getStart()) === r || !lm(e, o, t, n)));
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
                          !i[u] && mm(e, r, u, n) && ((i[u] = !0), o.push(u));
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
                      r = mc.getParents(s, n),
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
              matchesUnInheritedFormatSelector: cm
            },
            gm = function(e, t) {
              return e.splitText(t);
            },
            hm = {
              split: function(e) {
                var t = e.startContainer,
                  n = e.startOffset,
                  r = e.endContainer,
                  o = e.endOffset;
                return (
                  t === r && ko.isText(t)
                    ? n > 0 &&
                      n < t.nodeValue.length &&
                      ((t = (r = gm(t, n)).previousSibling),
                      o > n
                        ? ((t = r = gm(r, (o -= n)).previousSibling),
                          (o = r.nodeValue.length),
                          (n = 0))
                        : (o = 0))
                    : (ko.isText(t) &&
                        n > 0 &&
                        n < t.nodeValue.length &&
                        ((t = gm(t, n)), (n = 0)),
                      ko.isText(r) &&
                        o > 0 &&
                        o < r.nodeValue.length &&
                        (o = (r = gm(r, o).previousSibling).nodeValue.length)),
                  {
                    startContainer: t,
                    startOffset: n,
                    endContainer: r,
                    endOffset: o
                  }
                );
              }
            },
            vm = function(e, t, n) {
              if (0 !== n) {
                var r = e.data.slice(t, t + n),
                  o = t + n >= e.data.length,
                  i = 0 === t;
                e.replaceData(
                  t,
                  n,
                  (function(e, t, n) {
                    return H(
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
            bm = function(e, t) {
              var n,
                r = e.data.slice(t),
                o = r.length - ((n = r), n.replace(/^\s+/g, "")).length;
              return vm(e, t, o);
            },
            ym = function(e, t) {
              var n,
                r,
                o,
                i = Gn.fromDom(e),
                u = Gn.fromDom(t);
              return (
                (n = u), (r = "pre,code"), (o = a(_r, i)), Vi(n, r, o).isSome()
              );
            },
            Cm = function(e, t) {
              return (
                (_a(t) &&
                  !1 ===
                    (function(e, t) {
                      return (
                        ko.isText(t) &&
                        /^[ \t\r\n]*$/.test(t.data) &&
                        !1 === ym(e, t)
                      );
                    })(e, t)) ||
                (function(e) {
                  return (
                    ko.isElement(e) &&
                    "A" === e.nodeName &&
                    e.hasAttribute("name")
                  );
                })(t) ||
                xm(t)
              );
            },
            xm = ko.hasAttribute("data-mce-bookmark"),
            wm = ko.hasAttribute("data-mce-bogus"),
            Sm = ko.hasAttributeValue("data-mce-bogus", "all"),
            Em = function(e) {
              return (function(e) {
                var t,
                  n,
                  r = 0;
                if (Cm(e, e)) return !1;
                if (!(n = e.firstChild)) return !0;
                t = new Qr(n, e);
                do {
                  if (Sm(n)) n = t.next(!0);
                  else if (wm(n)) n = t.next();
                  else if (ko.isBr(n)) r++, (n = t.next());
                  else {
                    if (Cm(e, n)) return !1;
                    n = t.next();
                  }
                } while (n);
                return r <= 1;
              })(e.dom());
            },
            Nm = function(e, t) {
              return (function(e, t) {
                var n = e.container(),
                  r = e.offset();
                return (
                  !1 === pu.isTextPosition(e) &&
                  n === t.parentNode &&
                  r > pu.before(t).offset()
                );
              })(t, e)
                ? pu(t.container(), t.offset() - 1)
                : t;
            },
            km = function(e) {
              return _a(e.previousSibling)
                ? _.some(
                    ((t = e.previousSibling),
                    ko.isText(t) ? pu(t, t.data.length) : pu.after(t))
                  )
                : e.previousSibling
                ? tc.lastPositionIn(e.previousSibling)
                : _.none();
              var t;
            },
            Tm = function(e) {
              return _a(e.nextSibling)
                ? _.some(
                    ((t = e.nextSibling),
                    ko.isText(t) ? pu(t, 0) : pu.before(t))
                  )
                : e.nextSibling
                ? tc.firstPositionIn(e.nextSibling)
                : _.none();
              var t;
            },
            _m = function(e, t) {
              return km(t)
                .orThunk(function() {
                  return Tm(t);
                })
                .orThunk(function() {
                  return (function(e, t) {
                    var n = pu.before(
                      t.previousSibling ? t.previousSibling : t.parentNode
                    );
                    return tc.prevPosition(e, n).fold(function() {
                      return tc.nextPosition(e, pu.after(t));
                    }, _.some);
                  })(e, t);
                });
            },
            Bm = function(e, t) {
              return Tm(t)
                .orThunk(function() {
                  return km(t);
                })
                .orThunk(function() {
                  return (function(e, t) {
                    return tc.nextPosition(e, pu.after(t)).fold(function() {
                      return tc.prevPosition(e, pu.before(t));
                    }, _.some);
                  })(e, t);
                });
            },
            Am = function(e, t, n) {
              return (function(e, t, n) {
                return e ? Bm(t, n) : _m(t, n);
              })(e, t, n).map(a(Nm, n));
            },
            Rm = function(e, t, n) {
              n.fold(
                function() {
                  e.focus();
                },
                function(n) {
                  e.selection.setRng(n.toRange(), t);
                }
              );
            },
            Om = function(e, t) {
              return t && e.schema.getBlockElements().hasOwnProperty(er(t));
            },
            Dm = function(e) {
              if (Em(e)) {
                var t = Gn.fromHtml('<br data-mce-bogus="1">');
                return ki(e), Ei(e, t), _.some(pu.before(t.dom()));
              }
              return _.none();
            },
            Pm = function(e, t, n) {
              var r = Or(e).filter(function(e) {
                  return ko.isText(e.dom());
                }),
                o = Dr(e).filter(function(e) {
                  return ko.isText(e.dom());
                });
              return (
                Ti(e),
                Ha([r, o, t], function(e, t, r) {
                  var o = e.dom(),
                    i = t.dom(),
                    a = o.data.length;
                  return (
                    (function(e, t, n) {
                      var r = zn(e.data).length;
                      e.appendData(t.data), Ti(Gn.fromDom(t)), n && bm(e, r);
                    })(o, i, n),
                    r.container() === i ? pu(o, a) : r
                  );
                }).orThunk(function() {
                  return (
                    n &&
                      (r.each(function(e) {
                        return (
                          (t = e.dom()),
                          (n = e.dom().length),
                          (r = t.data.slice(0, n)),
                          (o = r.length - zn(r).length),
                          vm(t, n - o, o)
                        );
                        var t, n, r, o;
                      }),
                      o.each(function(e) {
                        return bm(e.dom(), 0);
                      })),
                    t
                  );
                })
              );
            },
            Im = function(e, t, n, r) {
              void 0 === r && (r = !0);
              var o,
                i = Am(t, e.getBody(), n.dom()),
                u = ji(
                  n,
                  a(Om, e),
                  ((o = e.getBody()),
                  function(e) {
                    return e.dom() === o;
                  })
                ),
                s = Pm(
                  n,
                  i,
                  (function(e, t) {
                    return lr(e.schema.getTextInlineElements(), er(t));
                  })(e, n)
                );
              e.dom.isEmpty(e.getBody())
                ? (e.setContent(""), e.selection.setCursorLocation())
                : u.bind(Dm).fold(
                    function() {
                      r && Rm(e, t, s);
                    },
                    function(n) {
                      r && Rm(e, t, _.some(n));
                    }
                  );
            },
            Lm = aa,
            Mm = function(e) {
              return (
                (function(e) {
                  for (var t = []; e; ) {
                    if (
                      (3 === e.nodeType && e.nodeValue !== Lm) ||
                      e.childNodes.length > 1
                    )
                      return [];
                    1 === e.nodeType && t.push(e), (e = e.firstChild);
                  }
                  return t;
                })(e).length > 0
              );
            },
            Fm = function(e) {
              var t;
              if (e)
                for (e = (t = new Qr(e, e)).current(); e; e = t.next())
                  if (3 === e.nodeType) return e;
              return null;
            },
            Um = function(e) {
              var t = Gn.fromTag("span");
              return (
                mr(t, {
                  id: "_mce_caret",
                  "data-mce-bogus": "1",
                  "data-mce-type": "format-caret"
                }),
                e && Ei(t, Gn.fromText(Lm)),
                t
              );
            },
            jm = function(e, t, n) {
              void 0 === n && (n = !0);
              var r = e.dom,
                o = e.selection;
              if (Mm(t)) Im(e, !1, Gn.fromDom(t), n);
              else {
                var i = o.getRng(),
                  a = r.getParent(t, r.isBlock),
                  u = (function(e) {
                    var t = Fm(e);
                    return (
                      t && t.nodeValue.charAt(0) === Lm && t.deleteData(0, 1), t
                    );
                  })(t);
                i.startContainer === u &&
                  i.startOffset > 0 &&
                  i.setStart(u, i.startOffset - 1),
                  i.endContainer === u &&
                    i.endOffset > 0 &&
                    i.setEnd(u, i.endOffset - 1),
                  r.remove(t, !0),
                  a && r.isEmpty(a) && am(Gn.fromDom(a)),
                  o.setRng(i);
              }
            },
            zm = function(e, t, n) {
              void 0 === n && (n = !0);
              var r = e.dom,
                o = e.selection;
              if (t) jm(e, t, n);
              else if (!(t = Mu(e.getBody(), o.getStart())))
                for (; (t = r.get("_mce_caret")); ) jm(e, t, !1);
            },
            Vm = function(e, t, n) {
              var r = e.dom,
                o = r.getParent(n, a(mc.isTextBlock, e));
              o && r.isEmpty(o)
                ? n.parentNode.replaceChild(t, n)
                : (im(Gn.fromDom(n)),
                  r.isEmpty(n)
                    ? n.parentNode.replaceChild(t, n)
                    : r.insertAfter(t, n));
            },
            Hm = function(e, t) {
              return e.appendChild(t), t;
            },
            qm = function(e, t) {
              var n,
                r,
                o = ((n = function(e, t) {
                  return Hm(e, t.cloneNode(!1));
                }),
                (r = t),
                (function(e, t) {
                  for (var n = e.length - 1; n >= 0; n--) t(e[n], n, e);
                })(e, function(e) {
                  r = n(r, e);
                }),
                r);
              return Hm(o, o.ownerDocument.createTextNode(Lm));
            },
            $m = function(e) {
              e.on("mouseup keydown", function(t) {
                !(function(e, t) {
                  var n = e.selection,
                    r = e.getBody();
                  zm(e, null, !1),
                    (8 !== t && 46 !== t) ||
                      !n.isCollapsed() ||
                      n.getStart().innerHTML !== Lm ||
                      zm(e, Mu(r, n.getStart())),
                    (37 !== t && 39 !== t) || zm(e, Mu(r, n.getStart()));
                })(e, t.keyCode);
              });
            },
            Wm = function(e, t) {
              return (
                e.schema.getTextInlineElements().hasOwnProperty(er(t)) &&
                !Lu(t.dom()) &&
                !ko.isBogus(t.dom())
              );
            },
            Km = {},
            Xm = Ht.filter,
            Ym = Ht.each;
          !(function(e, t) {
            var n = Km[e];
            n || (Km[e] = n = []), Km[e].push(t);
          })("pre", function(e) {
            var t,
              n,
              r = e.selection.getRng();
            (t = ko.matchNodeNames("pre")),
              r.collapsed ||
                ((n = e.selection.getSelectedBlocks()),
                Ym(
                  Xm(Xm(n, t), function(e) {
                    return (
                      t(e.previousSibling) &&
                      -1 !== Ht.indexOf(n, e.previousSibling)
                    );
                  }),
                  function(e) {
                    var t, n;
                    (t = e.previousSibling),
                      pn((n = e)).remove(),
                      pn(t)
                        .append("<br><br>")
                        .append(n.childNodes);
                  }
                ));
          });
          var Gm = function(e, t) {
              Ym(Km[e], function(e) {
                e(t);
              });
            },
            Jm = Xt.each,
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
                  cc.isBookmarkNode(t) ||
                  cc.isBookmarkNode(n)
                );
              };
            },
            Zm = /^(src|href|style)$/,
            ep = Xt.each,
            tp = mc.isEq,
            np = function(e, t, n) {
              return e.isChildOf(t, n) && t !== n && !e.isBlock(n);
            },
            rp = function(e, t, n) {
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
                  (r = new Qr(r, e.getBody()).next() || r),
                ko.isText(r) &&
                  !n &&
                  0 === o &&
                  (r = new Qr(r, e.getBody()).prev() || r),
                r
              );
            },
            op = function(e, t, n, r) {
              var o = e.create(n, r);
              return t.parentNode.insertBefore(o, t), o.appendChild(t), o;
            },
            ip = function(e, t, n, r, o) {
              var i = Gn.fromDom(t),
                a = Gn.fromDom(e.create(r, o)),
                u = n ? Ir(i) : Pr(i);
              return (
                Ni(a, u),
                n ? (xi(i, a), Si(a, i)) : (wi(i, a), Ei(a, i)),
                a.dom()
              );
            },
            ap = function(e, t, n, r) {
              return (
                !(t = mc.getNonWhiteSpaceSibling(t, n, r)) ||
                "BR" === t.nodeName ||
                e.isBlock(t)
              );
            },
            up = function(e, t, n, r, o) {
              var i,
                a,
                u,
                s = e.dom;
              if (
                !(function(e, t, n) {
                  return (
                    !!tp(t, n.inline) ||
                    !!tp(t, n.block) ||
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
                  ep(t.styles, function(e, i) {
                    (e = mc.normalizeStyleValue(s, mc.replaceVars(e, n), i)),
                      "number" == typeof i && ((i = e), (o = 0)),
                      (t.remove_similar || !o || tp(mc.getStyle(s, o, i), e)) &&
                        s.setStyle(r, i, ""),
                      (u = 1);
                  }),
                    u &&
                      "" === s.getAttrib(r, "style") &&
                      (r.removeAttribute("style"),
                      r.removeAttribute("data-mce-style")),
                    ep(t.attributes, function(e, t) {
                      var i;
                      if (
                        ((e = mc.replaceVars(e, n)),
                        "number" == typeof t && ((t = e), (o = 0)),
                        !o || tp(s.getAttrib(o, t), e))
                      ) {
                        if (
                          "class" === t &&
                          (e = s.getAttrib(r, t)) &&
                          ((i = ""),
                          ep(e.split(/\s+/), function(e) {
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
                    ep(t.classes, function(e) {
                      (e = mc.replaceVars(e, n)),
                        (o && !s.hasClass(o, e)) || s.removeClass(r, e);
                    }),
                    a = s.getAttribs(r),
                    i = 0;
                  i < a.length;
                  i++
                ) {
                  var c = a[i].nodeName;
                  if (0 !== c.indexOf("_") && 0 !== c.indexOf("data-"))
                    return !1;
                }
              return "none" !== t.remove
                ? ((function(e, t, n) {
                    var r,
                      o = t.parentNode,
                      i = e.dom,
                      a = Qc.getForcedRootBlock(e);
                    n.block &&
                      (a
                        ? o === i.getRoot() &&
                          ((n.list_block && tp(t, n.list_block)) ||
                            ep(Xt.grep(t.childNodes), function(t) {
                              mc.isValid(e, a, t.nodeName.toLowerCase())
                                ? r
                                  ? r.appendChild(t)
                                  : ((r = op(i, t, a)),
                                    i.setAttribs(
                                      r,
                                      e.settings.forced_root_block_attrs
                                    ))
                                : (r = 0);
                            }))
                        : i.isBlock(t) &&
                          !i.isBlock(o) &&
                          (ap(i, t, !1) ||
                            ap(i, t.firstChild, !0, 1) ||
                            t.insertBefore(i.create("br"), t.firstChild),
                          ap(i, t, !0) ||
                            ap(i, t.lastChild, !1, 1) ||
                            t.appendChild(i.create("br")))),
                      (n.selector && n.inline && !tp(n.inline, t)) ||
                        i.remove(t, 1);
                  })(e, r, t),
                  !0)
                : void 0;
            },
            sp = {
              removeFormat: up,
              remove: function(e, t, n, r, o) {
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
                        ep(
                          mc.getParents(e.dom, t.parentNode).reverse(),
                          function(t) {
                            var a;
                            i ||
                              "_start" === t.id ||
                              "_end" === t.id ||
                              ((a = pm.matchNode(e, t, n, r, o)) &&
                                !1 !== a.split &&
                                (i = t));
                          }
                        ),
                        i
                      );
                    })(e, r, t, n, o);
                    return (function(e, t, n, r, o, i, a, u) {
                      var s,
                        c,
                        l,
                        f,
                        d,
                        m,
                        p = e.dom;
                      if (n) {
                        for (
                          m = n.parentNode, s = r.parentNode;
                          s && s !== m;
                          s = s.parentNode
                        ) {
                          for (c = p.clone(s, !1), d = 0; d < t.length; d++)
                            if (up(e, t[d], u, c, c)) {
                              c = 0;
                              break;
                            }
                          c && (l && c.appendChild(l), f || (f = c), (l = c));
                        }
                        !i || (a.mixed && p.isBlock(n)) || (r = p.split(n, r)),
                          l &&
                            (o.parentNode.insertBefore(l, o), f.appendChild(o));
                      }
                      return r;
                    })(e, u, i, r, r, !0, s, n);
                  },
                  m = function(t) {
                    var r, o, i, a, f;
                    if (
                      (ko.isElement(t) &&
                        l.getContentEditable(t) &&
                        ((a = c),
                        (c = "true" === l.getContentEditable(t)),
                        (f = !0)),
                      (r = Xt.grep(t.childNodes)),
                      c && !f)
                    )
                      for (
                        o = 0, i = u.length;
                        o < i && !up(e, u[o], n, t, t);
                        o++
                      );
                    if (s.deep && r.length) {
                      for (o = 0, i = r.length; o < i; o++) m(r[o]);
                      f && (c = a);
                    }
                  },
                  p = function(e) {
                    var t = l.get(e ? "_start" : "_end"),
                      n = t[e ? "firstChild" : "lastChild"];
                    return (
                      (function(e) {
                        return (
                          cc.isBookmarkNode(e) &&
                          ko.isElement(e) &&
                          ("_start" === e.id || "_end" === e.id)
                        );
                      })(n) && (n = n[e ? "firstChild" : "lastChild"]),
                      ko.isText(n) &&
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
                    if (((t = Nc(e, t, u, !0)), s.split)) {
                      if (
                        ((t = hm.split(t)),
                        (n = rp(e, t, !0)) !== (r = rp(e, t)))
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
                          np(l, n, r))
                        ) {
                          var i = _.from(n.firstChild).getOr(n);
                          return (
                            d(
                              ip(l, i, !0, "span", {
                                id: "_start",
                                "data-mce-type": "bookmark"
                              })
                            ),
                            void p(!0)
                          );
                        }
                        if (np(l, r, n))
                          return (
                            (i = _.from(r.lastChild).getOr(r)),
                            d(
                              ip(l, i, !1, "span", {
                                id: "_end",
                                "data-mce-type": "bookmark"
                              })
                            ),
                            void p(!1)
                          );
                        (n = op(l, n, "span", {
                          id: "_start",
                          "data-mce-type": "bookmark"
                        })),
                          (r = op(l, r, "span", {
                            id: "_end",
                            "data-mce-type": "bookmark"
                          })),
                          d(n),
                          d(r),
                          (n = p(!0)),
                          (r = p());
                      } else n = r = d(n);
                      (t.startContainer = n.parentNode ? n.parentNode : n),
                        (t.startOffset = l.nodeIndex(n)),
                        (t.endContainer = r.parentNode ? r.parentNode : r),
                        (t.endOffset = l.nodeIndex(r) + 1);
                    }
                    Tc.walk(l, t, function(t) {
                      ep(t, function(t) {
                        m(t),
                          ko.isElement(t) &&
                            "underline" ===
                              e.dom.getStyle(t, "text-decoration") &&
                            t.parentNode &&
                            "underline" ===
                              mc.getTextDecoration(l, t.parentNode) &&
                            up(
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
                  !l.select("td[data-mce-selected],th[data-mce-selected]")
                    .length
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
                          m = [],
                          p = d.getRng();
                        for (
                          o = p.startContainer,
                            i = p.startOffset,
                            s = o,
                            3 === o.nodeType &&
                              (i !== o.nodeValue.length && (u = !0),
                              (s = s.parentNode));
                          s;

                        ) {
                          if (pm.matchNode(e, s, t, n, r)) {
                            c = s;
                            break;
                          }
                          s.nextSibling && (u = !0),
                            m.push(s),
                            (s = s.parentNode);
                        }
                        if (c)
                          if (u) {
                            (a = d.getBookmark()), p.collapse(!0);
                            var g = Nc(e, p, e.formatter.get(t), !0);
                            (g = hm.split(g)),
                              e.formatter.remove(t, n, g),
                              d.moveToBookmark(a);
                          } else {
                            l = Mu(e.getBody(), c);
                            var h = Um(!1).dom(),
                              v = qm(m, h);
                            Vm(e, h, l || c),
                              jm(e, l, !1),
                              d.setCursorLocation(v, 1),
                              f.isEmpty(c) && f.remove(c);
                          }
                      })(e, t, n, o)
                    : ((i = Iu.getPersistentBookmark(e.selection, !0)),
                      g(f.getRng()),
                      f.moveToBookmark(i),
                      s.inline &&
                        pm.match(e, t, n, f.getStart()) &&
                        mc.moveStart(l, f, f.getRng()),
                      e.nodeChanged());
                else {
                  r = f.getNode();
                  for (
                    var h = 0, v = u.length;
                    h < v && (!u[h].ceFalseOverride || !up(e, u[h], n, r, r));
                    h++
                  );
                }
              }
            },
            cp = Xt.each,
            lp = function(e) {
              return (
                e &&
                1 === e.nodeType &&
                !cc.isBookmarkNode(e) &&
                !Lu(e) &&
                !ko.isBogus(e)
              );
            },
            fp = function(e, t) {
              var n;
              for (n = e; n; n = n[t]) {
                if (3 === n.nodeType && 0 !== n.nodeValue.length) return e;
                if (1 === n.nodeType && !cc.isBookmarkNode(n)) return n;
              }
              return e;
            },
            dp = function(e, t, n) {
              var r,
                o,
                i = new Qm(e);
              if (
                t &&
                n &&
                ((t = fp(t, "previousSibling")),
                (n = fp(n, "nextSibling")),
                i.compare(t, n))
              ) {
                for (r = t.nextSibling; r && r !== n; )
                  (o = r), (r = r.nextSibling), t.appendChild(o);
                return (
                  e.remove(n),
                  Xt.each(Xt.grep(n.childNodes), function(e) {
                    t.appendChild(e);
                  }),
                  t
                );
              }
              return n;
            },
            mp = function(e, t, n) {
              cp(e.childNodes, function(e) {
                lp(e) && (t(e) && n(e), e.hasChildNodes() && mp(e, t, n));
              });
            },
            pp = function(e, t) {
              return a(function(t, n) {
                return !(!n || !mc.getStyle(e, n, t));
              }, t);
            },
            gp = function(e, t, n) {
              return a(
                function(t, n, r) {
                  e.setStyle(r, t, n),
                    "" === r.getAttribute("style") &&
                      r.removeAttribute("style"),
                    hp(e, r);
                },
                t,
                n
              );
            },
            hp = function(e, t) {
              "SPAN" === t.nodeName &&
                0 === e.getAttribs(t).length &&
                e.remove(t, !0);
            },
            vp = function(e, t) {
              var n;
              1 === t.nodeType &&
                t.parentNode &&
                1 === t.parentNode.nodeType &&
                ((n = mc.getTextDecoration(e, t.parentNode)),
                e.getStyle(t, "color") && n
                  ? e.setStyle(t, "text-decoration", n)
                  : e.getStyle(t, "text-decoration") === n &&
                    e.setStyle(t, "text-decoration", null));
            },
            bp = function(e, t, n, r) {
              cp(t, function(t) {
                cp(e.dom.select(t.inline, r), function(r) {
                  lp(r) && sp.removeFormat(e, t, n, r, t.exact ? r : null);
                }),
                  (function(e, t, n) {
                    if (t.clear_child_styles) {
                      var r = t.links ? "*:not(a)" : "*";
                      cp(e.select(r, n), function(n) {
                        lp(n) &&
                          cp(t.styles, function(t, r) {
                            e.setStyle(n, r, "");
                          });
                      });
                    }
                  })(e.dom, t, r);
              });
            },
            yp = function(e, t, n, r) {
              (t.styles.color || t.styles.textDecoration) &&
                (Xt.walk(r, a(vp, e), "childNodes"), vp(e, r));
            },
            Cp = function(e, t, n, r) {
              t.styles &&
                t.styles.backgroundColor &&
                mp(
                  r,
                  pp(e, "fontSize"),
                  gp(
                    e,
                    "backgroundColor",
                    mc.replaceVars(t.styles.backgroundColor, n)
                  )
                );
            },
            xp = function(e, t, n, r) {
              ("sub" !== t.inline && "sup" !== t.inline) ||
                (mp(r, pp(e, "fontSize"), gp(e, "fontSize", "")),
                e.remove(e.select("sup" === t.inline ? "sub" : "sup", r), !0));
            },
            wp = function(e, t, n, r) {
              r &&
                !1 !== t.merge_siblings &&
                ((r = dp(e, mc.getNonWhiteSpaceSibling(r), r)),
                (r = dp(e, r, mc.getNonWhiteSpaceSibling(r, !0))));
            },
            Sp = function(e, t, n, r, o) {
              (pm.matchNode(e, o.parentNode, n, r) &&
                sp.removeFormat(e, t, r, o)) ||
                (t.merge_with_parents &&
                  e.dom.getParent(o.parentNode, function(i) {
                    if (pm.matchNode(e, i, n, r))
                      return sp.removeFormat(e, t, r, o), !0;
                  }));
            },
            Ep = function(e) {
              var t = pu.fromRangeStart(e),
                n = pu.fromRangeEnd(e),
                r = e.commonAncestorContainer;
              return tc
                .fromPosition(!1, r, n)
                .map(function(o) {
                  return !ps(t, n, r) && ps(t, o, r)
                    ? (function(e, t, n, r) {
                        var o = document.createRange();
                        return o.setStart(e, t), o.setEnd(n, r), o;
                      })(t.container(), t.offset(), o.container(), o.offset())
                    : e;
                })
                .getOr(e);
            },
            Np = function(e) {
              return e.collapsed ? e : Ep(e);
            },
            kp = Xt.each,
            Tp = function(e, t, n, r) {
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
                      kp(t.styles, function(t, r) {
                        c.setStyle(e, r, mc.replaceVars(t, n));
                      }),
                      t.styles)
                    ) {
                      var o = c.getAttrib(e, "style");
                      o && e.setAttribute("data-mce-style", o);
                    }
                    kp(t.attributes, function(t, r) {
                      c.setAttrib(e, r, mc.replaceVars(t, n));
                    }),
                      kp(t.classes, function(t) {
                        (t = mc.replaceVars(t, n)),
                          c.hasClass(e, t) || c.addClass(e, t);
                      });
                  }
                },
                d = function(e, t) {
                  var n = !1;
                  return (
                    !!u.selector &&
                    (kp(e, function(e) {
                      if (!("collapsed" in e && e.collapsed !== s))
                        return c.is(t, e.selector) && !Lu(t)
                          ? (f(t, e), (n = !0), !1)
                          : void 0;
                    }),
                    n)
                  );
                },
                m = function(r, o, i, s) {
                  var c,
                    l,
                    m = [],
                    p = !0;
                  (c = u.inline || u.block),
                    (l = r.create(c)),
                    f(l),
                    Tc.walk(r, o, function(o) {
                      var i,
                        g = function(o) {
                          var h, v, b, y;
                          if (
                            ((y = p),
                            (h = o.nodeName.toLowerCase()),
                            (v = o.parentNode.nodeName.toLowerCase()),
                            1 === o.nodeType &&
                              r.getContentEditable(o) &&
                              ((y = p),
                              (p = "true" === r.getContentEditable(o)),
                              (b = !0)),
                            mc.isEq(h, "br"))
                          )
                            return (i = 0), void (u.block && r.remove(o));
                          if (u.wrapper && pm.matchNode(e, o, t, n)) i = 0;
                          else {
                            if (
                              p &&
                              !b &&
                              u.block &&
                              !u.wrapper &&
                              mc.isTextBlock(e, h) &&
                              mc.isValid(e, v, c)
                            )
                              return (
                                (o = r.rename(o, c)),
                                f(o),
                                m.push(o),
                                void (i = 0)
                              );
                            if (u.selector) {
                              var C = d(a, o);
                              if (!u.inline || C) return void (i = 0);
                            }
                            !p ||
                            b ||
                            !mc.isValid(e, c, h) ||
                            !mc.isValid(e, v, c) ||
                            (!s &&
                              3 === o.nodeType &&
                              1 === o.nodeValue.length &&
                              65279 === o.nodeValue.charCodeAt(0)) ||
                            Lu(o) ||
                            (u.inline && r.isBlock(o))
                              ? ((i = 0),
                                kp(Xt.grep(o.childNodes), g),
                                b && (p = y),
                                (i = 0))
                              : (i ||
                                  ((i = r.clone(l, !1)),
                                  o.parentNode.insertBefore(i, o),
                                  m.push(i)),
                                i.appendChild(o));
                          }
                        };
                      kp(o, g);
                    }),
                    !0 === u.links &&
                      kp(m, function(e) {
                        var t = function(e) {
                          "A" === e.nodeName && f(e, u),
                            kp(Xt.grep(e.childNodes), t);
                        };
                        t(e);
                      }),
                    kp(m, function(o) {
                      var i,
                        s = function(e) {
                          var t = !1;
                          return (
                            kp(e.childNodes, function(e) {
                              if (
                                (function(e) {
                                  return (
                                    e &&
                                    1 === e.nodeType &&
                                    !cc.isBookmarkNode(e) &&
                                    !Lu(e) &&
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
                          kp(e.childNodes, function(e) {
                            mc.isWhiteSpaceNode(e) ||
                              cc.isBookmarkNode(e) ||
                              t++;
                          }),
                          t
                        );
                      })(o)),
                        (!(m.length > 1) && r.isBlock(o)) || 0 !== i
                          ? (u.inline || u.wrapper) &&
                            (u.exact ||
                              1 !== i ||
                              (o = (function(e) {
                                var t, n;
                                return (
                                  (t = s(e)) &&
                                    !cc.isBookmarkNode(t) &&
                                    pm.matchName(r, t, u) &&
                                    ((n = r.clone(t, !1)),
                                    f(n),
                                    r.replace(n, e, !0),
                                    r.remove(t, 1)),
                                  n || e
                                );
                              })(o)),
                            bp(e, a, n, o),
                            Sp(e, u, t, n, o),
                            Cp(r, u, n, o),
                            xp(r, u, n, o),
                            wp(r, u, n, o))
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
                        m(c, Nc(e, i, a), 0, !0))
                      : m(c, r, 0, !0);
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
                      (a = (r = c.getRng(!0)).startOffset),
                        (s = r.startContainer.nodeValue),
                        (o = Mu(e.getBody(), c.getStart())) && (i = Fm(o));
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
                          (r = Nc(e, r, e.formatter.get(t))),
                          (r = hm.split(r)),
                          e.formatter.apply(t, n, r),
                          c.moveToBookmark(u))
                        : (o && i.nodeValue === Lm
                            ? e.formatter.apply(t, n, o)
                            : ((l = e.getDoc()),
                              (f = Um(!0).dom()),
                              (i = (o = l.importNode(f, !0)).firstChild),
                              r.insertNode(o),
                              (a = 1),
                              e.formatter.apply(t, n, o)),
                          c.setCursorLocation(i, a));
                    })(e, t, n);
                  else {
                    var p = e.selection.getNode();
                    e.settings.forced_root_block ||
                      !a[0].defaultBlock ||
                      c.getParent(p, c.isBlock) ||
                      Tp(e, a[0].defaultBlock),
                      e.selection.setRng(Np(e.selection.getRng())),
                      (o = Iu.getPersistentBookmark(e.selection, !0)),
                      m(c, Nc(e, l.getRng(), a)),
                      u.styles && yp(c, u, n, p),
                      l.moveToBookmark(o),
                      mc.moveStart(c, l, l.getRng()),
                      e.nodeChanged();
                  }
                  Gm(t, e);
                }
              } else {
                r = l.getNode();
                for (var g = 0, h = a.length; g < h; g++)
                  if (a[g].ceFalseOverride && c.is(r, a[g].selector))
                    return void f(r, a[g]);
              }
            },
            _p = { applyFormat: Tp },
            Bp = Xt.each,
            Ap = {
              formatChanged: function(e, t, n, r, o) {
                null === t.get() &&
                  (function(e, t) {
                    var n = {};
                    e.set({}),
                      t.on("NodeChange", function(r) {
                        var o = mc.getParents(t.dom, r.element),
                          i = {};
                        (o = Xt.grep(o, function(e) {
                          return (
                            1 === e.nodeType &&
                            !e.getAttribute("data-mce-bogus")
                          );
                        })),
                          Bp(e.get(), function(e, r) {
                            Bp(o, function(a) {
                              return t.formatter.matchNode(a, r, {}, e.similar)
                                ? (n[r] ||
                                    (Bp(e, function(e) {
                                      e(!0, { node: a, format: r, parents: o });
                                    }),
                                    (n[r] = e)),
                                  (i[r] = e),
                                  !1)
                                : !pm.matchesUnInheritedFormatSelector(
                                    t,
                                    a,
                                    r
                                  ) && void 0;
                            });
                          }),
                          Bp(n, function(e, t) {
                            i[t] ||
                              (delete n[t],
                              Bp(e, function(e) {
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
                    Bp(t.split(","), function(e) {
                      o[e] || ((o[e] = []), (o[e].similar = r)), o[e].push(n);
                    }),
                      e.set(o);
                  })(t, n, r, o);
              }
            },
            Rp = {
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
                      Xt.each(r, function(n, r) {
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
                  Xt.each(
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
            Op = Xt.each,
            Dp = ci.DOM,
            Pp = function(e, t) {
              var n,
                r,
                o,
                i = (t && t.schema) || Jo({}),
                a = function(e) {
                  var t;
                  return (
                    (r =
                      "string" == typeof e
                        ? { name: e, classes: [], attrs: {} }
                        : e),
                    (function(e, t) {
                      t.classes.length && Dp.addClass(e, t.classes.join(" ")),
                        Dp.setAttribs(e, t.attrs);
                    })((t = Dp.create(r.name)), r),
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
                      var n =
                          "string" != typeof e ? e.nodeName.toLowerCase() : e,
                        r = i.getElementRule(n),
                        o = r && r.parentsRequired;
                      return (
                        !(!o || !o.length) &&
                        (t && -1 !== Xt.inArray(o, t) ? t : o[0])
                      );
                    })(e, l))
                  )
                    l === s ? ((o = t[0]), (t = t.slice(1))) : (o = s);
                  else if (c) (o = t[0]), (t = t.slice(1));
                  else if (!n) return e;
                  return (
                    o && (r = a(o)).appendChild(e),
                    n &&
                      (r || (r = Dp.create("div")).appendChild(e),
                      Xt.each(n, function(t) {
                        var n = a(t);
                        r.insertBefore(n, e);
                      })),
                    u(r, t, o && o.siblings)
                  );
                };
              return e && e.length
                ? ((r = e[0]),
                  (n = a(r)),
                  (o = Dp.create("div")).appendChild(
                    u(n, e.slice(1), r.siblings)
                  ),
                  o)
                : "";
            },
            Ip = function(e) {
              var t,
                n = { classes: [], attrs: {} };
              return (
                "*" !== (e = n.selector = Xt.trim(e)) &&
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
                            Xt.inArray(
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
            Lp = function(e) {
              return e && "string" == typeof e
                ? ((e = (e = e.split(/\s*,\s*/)[0]).replace(
                    /\s*(~\+|~|\+|>)\s*/g,
                    "$1"
                  )),
                  Xt.map(e.split(/(?:>|\s+(?![^\[\]]+\]))/), function(e) {
                    var t = Xt.map(e.split(/(?:~\+|~|\+)/), Ip),
                      n = t.pop();
                    return t.length && (n.siblings = t), n;
                  }).reverse())
                : [];
            },
            Mp = {
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
                    (i = Lp(t.selector)).length
                      ? (i[0].name || (i[0].name = n),
                        (n = t.selector),
                        (r = Pp(i, e)))
                      : (r = Pp([n], e)),
                    (o = Dp.select(n, r)[0] || r.firstChild),
                    Op(t.styles, function(e, t) {
                      (e = c(e)) && Dp.setStyle(o, t, e);
                    }),
                    Op(t.attributes, function(e, t) {
                      (e = c(e)) && Dp.setAttrib(o, t, e);
                    }),
                    Op(t.classes, function(e) {
                      (e = c(e)), Dp.hasClass(o, e) || Dp.addClass(o, e);
                    }),
                    e.fire("PreviewFormats"),
                    Dp.setStyles(r, { position: "absolute", left: -65535 }),
                    e.getBody().appendChild(r),
                    (a = Dp.getStyle(e.getBody(), "fontSize", !0)),
                    (a = /px$/.test(a) ? parseInt(a, 10) : 0),
                    Op(u.split(" "), function(t) {
                      var n = Dp.getStyle(o, t, !0);
                      if (
                        !(
                          ("background-color" === t &&
                            /transparent|rgba\s*\([^)]+,\s*0\)/.test(n) &&
                            ((n = Dp.getStyle(e.getBody(), t, !0)),
                            "#ffffff" === Dp.toHex(n).toLowerCase())) ||
                          ("color" === t &&
                            "#000000" === Dp.toHex(n).toLowerCase())
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
                    Dp.remove(r),
                    s);
              },
              parseSelector: Lp,
              selectorToHtml: function(e, t) {
                return Pp(Lp(e), t);
              }
            },
            Fp = {
              toggle: function(e, t, n, r, o) {
                var i = t.get(n);
                !pm.match(e, n, r, o) || ("toggle" in i[0] && !i[0].toggle)
                  ? _p.applyFormat(e, n, r, o)
                  : sp.remove(e, n, r, o);
              }
            },
            Up = {
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
          function jp(e) {
            var t = (function(e) {
                var t = {},
                  n = function(e, r) {
                    e &&
                      ("string" != typeof e
                        ? Xt.each(e, function(e, t) {
                            n(t, e);
                          })
                        : (O(r) || (r = [r]),
                          Xt.each(r, function(e) {
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
                  n(Rp.get(e.dom)),
                  n(e.settings.formats),
                  {
                    get: function(e) {
                      return e ? t[e] : t;
                    },
                    has: function(e) {
                      return lr(t, e);
                    },
                    register: n,
                    unregister: function(e) {
                      return e && t[e] && delete t[e], t;
                    }
                  }
                );
              })(e),
              n = gi(null);
            return (
              Up.setup(e),
              $m(e),
              {
                get: t.get,
                has: t.has,
                register: t.register,
                unregister: t.unregister,
                apply: a(_p.applyFormat, e),
                remove: a(sp.remove, e),
                toggle: a(Fp.toggle, e, t),
                match: a(pm.match, e),
                matchAll: a(pm.matchAll, e),
                matchNode: a(pm.matchNode, e),
                canApply: a(pm.canApply, e),
                formatChanged: a(Ap.formatChanged, e, n),
                getCssText: a(Mp.getCssText, e)
              }
            );
          }
          var zp = {
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
                        c = t.url_converter_scope;
                      a--;

                    )
                      void 0 !== (i = (o = e[a]).attributes.map[u])
                        ? (o.attr(r, i.length > 0 ? i : null), o.attr(u, null))
                        : ((i = o.attributes.map[r]),
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
                      "bookmark" !==
                        (r = e[o]).attributes.map["data-mce-type"] ||
                        n.cleanup ||
                        r.remove();
                  }),
                  e.addNodeFilter("noscript", function(e) {
                    for (var t, n = e.length; n--; )
                      (t = e[n].firstChild) && (t.value = jo.decode(t.value));
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
            Vp = {
              process: function(e, t, n) {
                return (function(e, t) {
                  return e && e.hasEventListeners("PreProcess") && !t.no_events;
                })(e, n)
                  ? (function(e, t, n) {
                      var r,
                        o,
                        i,
                        a = e.dom;
                      return (
                        (t = t.cloneNode(!0)),
                        (r = document.implementation).createHTMLDocument &&
                          ((o = r.createHTMLDocument("")),
                          Xt.each(
                            "BODY" === t.nodeName ? t.childNodes : [t],
                            function(e) {
                              o.body.appendChild(o.importNode(e, !0));
                            }
                          ),
                          (t =
                            "BODY" !== t.nodeName ? o.body.firstChild : o.body),
                          (i = a.doc),
                          (a.doc = o)),
                        Pl(e, Mc(n, { node: t })),
                        i && (a.doc = i),
                        t
                      );
                    })(e, t, n)
                  : t;
              }
            },
            Hp = function(e, t, n) {
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
            qp = function(e, t) {
              var n = Zo();
              t.convert_fonts_to_spans &&
                Hp(e, n, Xt.explode(t.font_size_legacy_values)),
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
            $p = {
              register: function(e, t) {
                t.inline_styles && qp(e, t);
              }
            },
            Wp = function(e, t, n, r) {
              (e.padd_empty_with_br || t.insert) && n[r.name]
                ? (r.empty().append(new zc("br", 1)).shortEnded = !0)
                : (r.empty().append(new zc("#text", 3)).value = " ");
            },
            Kp = function(e) {
              return Xp(e, "#text") && " " === e.firstChild.value;
            },
            Xp = function(e, t) {
              return (
                e &&
                e.firstChild &&
                e.firstChild === e.lastChild &&
                e.firstChild.name === t
              );
            },
            Yp = function(e, t, n, r) {
              return r.isEmpty(t, n, function(t) {
                return (function(e, t) {
                  var n = e.getElementRule(t.name);
                  return n && n.paddEmpty;
                })(e, t);
              });
            },
            Gp = function(e, t) {
              return e && (t[e.name] || "br" === e.name);
            },
            Jp = function(e, t) {
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
                    m = e.length,
                    p = Xt.extend({}, n.getBlockElements()),
                    g = n.getNonEmptyElements(),
                    h = n.getNonEmptyElements();
                  for (p.body = 1, i = 0; i < m; i++)
                    if (
                      ((u = (a = e[i]).parent),
                      p[a.parent.name] && a === u.lastChild)
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
                        Yp(n, g, h, u) &&
                          (f = n.getElementRule(u.name)) &&
                          (f.removeEmpty
                            ? u.remove()
                            : f.paddEmpty && Wp(t, o, p, u)));
                    } else {
                      for (
                        s = a;
                        u &&
                        u.firstChild === s &&
                        u.lastChild === s &&
                        ((s = u), !p[u.name]);

                      )
                        u = u.parent;
                      s === u &&
                        !0 !== t.padd_empty_with_br &&
                        (((d = new zc("#text", 3)).value = " "), a.replace(d));
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
                          (o = r ? Xt.trim(r) : ""),
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
                          var o = new zc("li", 1);
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
                        r = (t = e[c]).attr("class").split(" "), a = "", o = 0;
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
            },
            Qp = Xt.makeMap,
            Zp = Xt.each,
            eg = Xt.explode,
            tg = Xt.extend;
          function ng(e, t) {
            void 0 === t && (t = Jo());
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
                  Zp(eg(e), function(e) {
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
                  Zp(eg(e), function(e) {
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
                    m,
                    p,
                    g,
                    h,
                    v,
                    b,
                    y,
                    C = [];
                  (s = s || {}),
                    (o = {}),
                    (i = {}),
                    (v = tg(
                      Qp("script,style,head,html,body,title,meta,param"),
                      t.getBlockElements()
                    ));
                  var x = t.getNonEmptyElements(),
                    w = t.children,
                    S = e.validate,
                    E = (function(e) {
                      return !1 === e ? "" : !0 === e ? "p" : e;
                    })(
                      "forced_root_block" in s
                        ? s.forced_root_block
                        : e.forced_root_block
                    ),
                    N = t.getWhiteSpaceElements(),
                    k = /^[ \t\r\n]+/,
                    T = /[ \t\r\n]+$/,
                    _ = /[ \t\r\n]+/g,
                    B = /^[ \t\r\n]+$/;
                  b =
                    N.hasOwnProperty(s.context) ||
                    N.hasOwnProperty(e.root_name);
                  var A = function(e, t) {
                      var r,
                        i = new zc(e, t);
                      return (
                        e in n && ((r = o[e]) ? r.push(i) : (o[e] = [i])), i
                      );
                    },
                    R = function(e) {
                      var n,
                        r,
                        o,
                        i,
                        a = t.getBlockElements();
                      for (n = e.prev; n && 3 === n.type; ) {
                        if ((o = n.value.replace(T, "")).length > 0)
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
                  c = Xc(
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
                          ((e = e.replace(_, " ")),
                          Gp(y.lastChild, v) && (e = e.replace(k, ""))),
                          0 !== e.length &&
                            (((n = A("#text", 3)).raw = !!t),
                            (y.append(n).value = e));
                      },
                      comment: function(e) {
                        y.append(A("#comment", 8)).value = e;
                      },
                      pi: function(e, t) {
                        (y.append(A(e, 7)).value = t), R(y);
                      },
                      doctype: function(e) {
                        (y.append(A("#doctype", 10)).value = e), R(y);
                      },
                      start: function(e, n, o) {
                        var a, u, s, c, l;
                        if ((s = S ? t.getElementRule(e) : {})) {
                          for (
                            (a = A(s.outputName || e, 1)).attributes = n,
                              a.shortEnded = o,
                              y.append(a),
                              (l = w[y.name]) &&
                                w[a.name] &&
                                !l[a.name] &&
                                C.push(a),
                              u = r.length;
                            u--;

                          )
                            (c = r[u].name) in n.map &&
                              ((g = i[c]) ? g.push(a) : (i[c] = [a]));
                          v[e] && R(a), o || (y = a), !b && N[e] && (b = !0);
                        }
                      },
                      end: function(n) {
                        var r, o, i, a, u;
                        if ((o = S ? t.getElementRule(n) : {})) {
                          if (v[n] && !b) {
                            if ((r = y.firstChild) && 3 === r.type)
                              if ((i = r.value.replace(k, "")).length > 0)
                                (r.value = i), (r = r.next);
                              else
                                for (
                                  a = r.next, r.remove(), r = a;
                                  r && 3 === r.type;

                                )
                                  (i = r.value),
                                    (a = r.next),
                                    (0 === i.length || B.test(i)) &&
                                      (r.remove(), (r = a)),
                                    (r = a);
                            if ((r = y.lastChild) && 3 === r.type)
                              if ((i = r.value.replace(T, "")).length > 0)
                                (r.value = i), (r = r.prev);
                              else
                                for (
                                  a = r.prev, r.remove(), r = a;
                                  r && 3 === r.type;

                                )
                                  (i = r.value),
                                    (a = r.prev),
                                    (0 === i.length || B.test(i)) &&
                                      (r.remove(), (r = a)),
                                    (r = a);
                          }
                          if (
                            (b && N[n] && (b = !1),
                            o.removeEmpty &&
                              Yp(t, x, N, y) &&
                              !y.attributes.map.name &&
                              !y.attr("id"))
                          )
                            return (
                              (u = y.parent),
                              v[y.name] ? y.empty().remove() : y.unwrap(),
                              void (y = u)
                            );
                          o.paddEmpty &&
                            (Kp(y) || Yp(t, x, N, y)) &&
                            Wp(e, s, v, y),
                            (y = y.parent);
                        }
                      }
                    },
                    t
                  );
                  var O = (y = new zc(s.context || e.root_name, 11));
                  if (
                    (c.parse(u),
                    S &&
                      C.length &&
                      (s.context
                        ? (s.invalid = !0)
                        : (function(e) {
                            var n, r, o, i, u, s, c, l, f, d, m, p, g, h, v, b;
                            for (
                              p = Qp("tr,td,th,tbody,thead,tfoot,table"),
                                d = t.getNonEmptyElements(),
                                m = t.getWhiteSpaceElements(),
                                g = t.getTextBlockElements(),
                                h = t.getSpecialElements(),
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
                                    !p[o.name];
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
                                    Yp(t, d, m, u)
                                      ? o.insert(r, i[0], !0)
                                      : (o.insert(u, i[0], !0), o.insert(r, u)),
                                      (o = i[0]),
                                      (Yp(t, d, m, o) || Xp(o, "br")) &&
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
                                      r.wrap(a(new zc("ul", 1)));
                                      continue;
                                    }
                                    t.isValidChild(r.parent.name, "div") &&
                                    t.isValidChild("div", r.name)
                                      ? r.wrap(a(new zc("div", 1)))
                                      : h[r.name]
                                      ? r.empty().remove()
                                      : r.unwrap();
                                  }
                                }
                          })(C)),
                    E &&
                      ("body" === O.name || s.isRootContent) &&
                      (function() {
                        var n,
                          r,
                          o = O.firstChild,
                          i = function(e) {
                            e &&
                              ((o = e.firstChild) &&
                                3 === o.type &&
                                (o.value = o.value.replace(k, "")),
                              (o = e.lastChild) &&
                                3 === o.type &&
                                (o.value = o.value.replace(T, "")));
                          };
                        if (t.isValidChild(O.name, E.toLowerCase())) {
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
                                    O.insert(r, o),
                                    r.append(o))
                                : (i(r), (r = null)),
                              (o = n);
                          i(r);
                        }
                      })(),
                    !s.invalid)
                  ) {
                    for (h in o) {
                      for (g = n[h], m = (l = o[h]).length; m--; )
                        l[m].parent || l.splice(m, 1);
                      for (f = 0, d = g.length; f < d; f++) g[f](l, h, s);
                    }
                    for (f = 0, d = r.length; f < d; f++)
                      if ((g = r[f]).name in i) {
                        for (m = (l = i[g.name]).length; m--; )
                          l[m].parent || l.splice(m, 1);
                        for (m = 0, p = g.callbacks.length; m < p; m++)
                          g.callbacks[m](l, g.name, s);
                      }
                  }
                  return O;
                }
              };
            return Jp(u, e), $p.register(u, e), u;
          }
          var rg = function(e, t, n) {
              -1 === Xt.inArray(t, n) &&
                (e.addAttributeFilter(n, function(e, t) {
                  for (var n = e.length; n--; ) e[n].attr(t, null);
                }),
                t.push(n));
            },
            og = function(e, t, n) {
              var r = ua(n.getInner ? t.innerHTML : e.getOuterHTML(t));
              return n.selection || po(Gn.fromDom(t)) ? r : Xt.trim(r);
            },
            ig = function(e, t, n) {
              var r = n.selection ? Mc({ forced_root_block: !1 }, n) : n,
                o = e.parse(t, r);
              return zp.trimTrailingBr(o), o;
            },
            ag = function(e, t, n, r, o) {
              return (function(e, t, n) {
                return !t.no_events && e
                  ? Il(e, Mc(t, { content: n })).content
                  : n;
              })(
                e,
                o,
                (function(e, t, n) {
                  return nl(e, t).serialize(n);
                })(t, n, r)
              );
            };
          function ug(e, t) {
            var n = (function(e, t) {
              var n,
                r,
                o,
                i = ["data-mce-selected"];
              return (
                (n = t && t.dom ? t.dom : ci.DOM),
                (r = t && t.schema ? t.schema : Jo(e)),
                (e.entity_encoding = e.entity_encoding || "named"),
                (e.remove_trailing_brs =
                  !("remove_trailing_brs" in e) || e.remove_trailing_brs),
                (o = ng(e, r)),
                zp.register(o, e, n),
                {
                  schema: r,
                  addNodeFilter: o.addNodeFilter,
                  addAttributeFilter: o.addAttributeFilter,
                  serialize: function(i, a) {
                    var u = Mc({ format: "html" }, a || {}),
                      s = Vp.process(t, i, u),
                      c = og(n, s, u),
                      l = ig(o, c, u);
                    return "tree" === u.format ? l : ag(t, e, r, l, u);
                  },
                  addRules: function(e) {
                    r.addValidElements(e);
                  },
                  setRules: function(e) {
                    r.setValidElements(e);
                  },
                  addTempAttr: a(rg, o, i),
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
          function sg(e) {
            return {
              getBookmark: a(cc.getBookmark, e),
              moveToBookmark: a(cc.moveToBookmark, e)
            };
          }
          !(function(e) {
            e.isBookmarkNode = cc.isBookmarkNode;
          })(sg || (sg = {}));
          var cg,
            lg = sg,
            fg = ko.isContentEditableFalse,
            dg = ko.isContentEditableTrue,
            mg = function(e, t) {
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
                m,
                p,
                g,
                h,
                v,
                b,
                y = t.dom,
                C = Xt.each,
                x = t.getDoc(),
                w = document,
                S = Math.abs,
                E = Math.round,
                N = t.getBody();
              i = {
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
                    return k(e.target) && !Bd(e.clientX, e.clientY, t);
                  })(e, t.selection.getRng()) &&
                    !e.isDefaultPrevented() &&
                    (e.preventDefault(), t.selection.select(n));
                },
                _ = function(e) {
                  return t.dom.is(e, "figure.image")
                    ? e.querySelector("img")
                    : e;
                },
                B = function(e) {
                  var n = t.settings.object_resizing;
                  return (
                    !1 !== n &&
                    !le.iOS &&
                    ("string" != typeof n && (n = "table,img,figure.image,div"),
                    "false" !== e.getAttribute("data-mce-resize") &&
                      e !== t.getBody() &&
                      kr(Gn.fromDom(e), n))
                  );
                },
                A = function(e) {
                  var i, C, x, w;
                  (i = e.screenX - u),
                    (C = e.screenY - s),
                    (g = i * a[2] + f),
                    (h = C * a[3] + d),
                    (g = g < 5 ? 5 : g),
                    (h = h < 5 ? 5 : h),
                    (k(n) && !1 !== t.settings.resize_img_proportional
                      ? !Md.modifierPressed(e)
                      : Md.modifierPressed(e) || (k(n) && a[2] * a[3] != 0)) &&
                      (S(i) > S(C)
                        ? ((h = E(g * m)), (g = E(h / m)))
                        : ((g = E(h / m)), (h = E(g * m)))),
                    y.setStyles(_(r), { width: g, height: h }),
                    (x = (x = a.startPos.x + i) > 0 ? x : 0),
                    (w = (w = a.startPos.y + C) > 0 ? w : 0),
                    y.setStyles(o, { left: x, top: w, display: "block" }),
                    (o.innerHTML = g + " &times; " + h),
                    a[2] < 0 &&
                      r.clientWidth <= g &&
                      y.setStyle(r, "left", c + (f - g)),
                    a[3] < 0 &&
                      r.clientHeight <= h &&
                      y.setStyle(r, "top", l + (d - h)),
                    (i = N.scrollWidth - v) + (C = N.scrollHeight - b) != 0 &&
                      y.setStyles(o, { left: x - i, top: w - C }),
                    p || (Ul(t, n, f, d), (p = !0));
                },
                R = function() {
                  p = !1;
                  var e = function(e, r) {
                    r &&
                      (n.style[e] ||
                      !t.schema.isValid(n.nodeName.toLowerCase(), e)
                        ? y.setStyle(_(n), e, r)
                        : y.setAttrib(_(n), e, r));
                  };
                  e("width", g),
                    e("height", h),
                    y.unbind(x, "mousemove", A),
                    y.unbind(x, "mouseup", R),
                    w !== x &&
                      (y.unbind(w, "mousemove", A), y.unbind(w, "mouseup", R)),
                    y.remove(r),
                    y.remove(o),
                    O(n),
                    jl(t, n, g, h),
                    y.setAttrib(n, "style", y.getAttrib(n, "style")),
                    t.nodeChanged();
                },
                O = function(e) {
                  var p, S, E, k, T;
                  D(),
                    L(),
                    (p = y.getPos(e, N)),
                    (c = p.x),
                    (l = p.y),
                    (T = e.getBoundingClientRect()),
                    (S = T.width || T.right - T.left),
                    (E = T.height || T.bottom - T.top),
                    n !== e && ((n = e), (g = h = 0)),
                    (k = t.fire("ObjectSelected", { target: e })),
                    B(e) && !k.isDefaultPrevented()
                      ? C(i, function(e, t) {
                          var i;
                          (i = y.get("mceResizeHandle" + t)) && y.remove(i),
                            (i = y.add(N, "div", {
                              id: "mceResizeHandle" + t,
                              "data-mce-bogus": "all",
                              class: "mce-resizehandle",
                              unselectable: !0,
                              style:
                                "cursor:" + t + "-resize; margin:0; padding:0"
                            })),
                            11 === le.ie && (i.contentEditable = !1),
                            y.bind(i, "mousedown", function(t) {
                              t.stopImmediatePropagation(),
                                t.preventDefault(),
                                (function(t) {
                                  (u = t.screenX),
                                    (s = t.screenY),
                                    (f = _(n).clientWidth),
                                    (d = _(n).clientHeight),
                                    (m = d / f),
                                    (a = e),
                                    (e.startPos = {
                                      x: S * e[0] + c,
                                      y: E * e[1] + l
                                    }),
                                    (v = N.scrollWidth),
                                    (b = N.scrollHeight),
                                    (r = n.cloneNode(!0)),
                                    y.addClass(r, "mce-clonedresizable"),
                                    y.setAttrib(r, "data-mce-bogus", "all"),
                                    (r.contentEditable = !1),
                                    (r.unSelectabe = !0),
                                    y.setStyles(r, {
                                      left: c,
                                      top: l,
                                      margin: 0
                                    }),
                                    r.removeAttribute("data-mce-selected"),
                                    N.appendChild(r),
                                    y.bind(x, "mousemove", A),
                                    y.bind(x, "mouseup", R),
                                    w !== x &&
                                      (y.bind(w, "mousemove", A),
                                      y.bind(w, "mouseup", R)),
                                    (o = y.add(
                                      N,
                                      "div",
                                      {
                                        class: "mce-resize-helper",
                                        "data-mce-bogus": "all"
                                      },
                                      f + " &times; " + d
                                    ));
                                })(t);
                            }),
                            (e.elm = i),
                            y.setStyles(i, {
                              left: S * e[0] + c - i.offsetWidth / 2,
                              top: E * e[1] + l - i.offsetHeight / 2
                            });
                        })
                      : D(),
                    n.setAttribute("data-mce-selected", "1");
                },
                D = function() {
                  var e, t;
                  for (e in (L(),
                  n && n.removeAttribute("data-mce-selected"),
                  i))
                    (t = y.get("mceResizeHandle" + e)) &&
                      (y.unbind(t), y.remove(t));
                },
                P = function(n) {
                  var r,
                    o = function(e, t) {
                      if (e)
                        do {
                          if (e === t) return !0;
                        } while ((e = e.parentNode));
                    };
                  p ||
                    t.removed ||
                    (C(
                      y.select("img[data-mce-selected],hr[data-mce-selected]"),
                      function(e) {
                        e.removeAttribute("data-mce-selected");
                      }
                    ),
                    (r = "mousedown" === n.type ? n.target : e.getNode()),
                    o(
                      (r = y.$(r).closest("table,img,figure.image,hr")[0]),
                      N
                    ) && (M(), o(e.getStart(!0), r) && o(e.getEnd(!0), r))
                      ? O(r)
                      : D());
                },
                I = function(e) {
                  return fg(
                    (function(e, t) {
                      for (; t && t !== e; ) {
                        if (dg(t) || fg(t)) return t;
                        t = t.parentNode;
                      }
                      return null;
                    })(t.getBody(), e)
                  );
                },
                L = function() {
                  for (var e in i) {
                    var t = i[e];
                    t.elm && (y.unbind(t.elm), delete t.elm);
                  }
                },
                M = function() {
                  try {
                    t.getDoc().execCommand("enableObjectResizing", !1, !1);
                  } catch (e) {}
                };
              return (
                t.on("init", function() {
                  M(),
                    le.ie &&
                      le.ie >= 11 &&
                      (t.on("mousedown click", function(e) {
                        var n = e.target,
                          r = n.nodeName;
                        p ||
                          !/^(TABLE|IMG|HR)$/.test(r) ||
                          I(n) ||
                          (2 !== e.button &&
                            t.selection.select(n, "TABLE" === r),
                          "mousedown" === e.type && t.nodeChanged());
                      }),
                      t.dom.bind(N, "mscontrolselect", function(e) {
                        var n = function(e) {
                          ge.setEditorTimeout(t, function() {
                            t.selection.select(e);
                          });
                        };
                        if (I(e.target))
                          return e.preventDefault(), void n(e.target);
                        /^(TABLE|IMG|HR)$/.test(e.target.nodeName) &&
                          (e.preventDefault(),
                          "IMG" === e.target.tagName && n(e.target));
                      }));
                  var e = ge.throttle(function(e) {
                    t.composing || P(e);
                  });
                  t.on(
                    "nodechange ResizeEditor ResizeWindow drop FullscreenStateChanged",
                    e
                  ),
                    t.on("keyup compositionend", function(t) {
                      n && "TABLE" === n.nodeName && e(t);
                    }),
                    t.on("hide blur", D),
                    t.on("contextmenu", T);
                }),
                t.on("remove", L),
                {
                  isResizable: B,
                  showResizeRect: O,
                  hideResizeRect: D,
                  updateResizeRect: P,
                  destroy: function() {
                    n = r = null;
                  }
                }
              );
            },
            pg = function(e) {
              for (var t = 0, n = 0, r = e; r && r.nodeType; )
                (t += r.offsetLeft || 0),
                  (n += r.offsetTop || 0),
                  (r = r.offsetParent);
              return { x: t, y: n };
            },
            gg = function(e, t, n) {
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
                  return e.fire("scrollIntoView", r), r.isDefaultPrevented();
                })(e, t, n) &&
                ko.isElement(t)
              ) {
                if ((!1 === n && (c = t.offsetHeight), "BODY" !== s.nodeName)) {
                  var l = e.selection.getScrollContainer();
                  if (l)
                    return (
                      (r = pg(t).y - pg(l).y + c),
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
            hg = function(e, t) {
              Q(fu.fromRangeStart(t).getClientRects()).each(function(t) {
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
                  i = { x: Ma((n = o), (r = t)), y: Fa(n, r) };
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
            vg = function(e) {
              return (
                ko.isContentEditableTrue(e) || ko.isContentEditableFalse(e)
              );
            },
            bg = {
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
                        (i = (i = Xt.toArray(o.getClientRects())).sort(function(
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
                      })(n, t, vg)
                    )
                      ? null
                      : e;
                  })(r, n.body);
                }
                return r;
              }
            },
            yg = function(e, t) {
              return U(t, function(t) {
                var n = e.fire("GetSelectionRange", { range: t });
                return n.range !== t ? n.range : t;
              });
            },
            Cg = function(e, t) {
              var n = (t || document).createDocumentFragment();
              return (
                j(e, function(e) {
                  n.appendChild(e.dom());
                }),
                Gn.fromDom(n)
              );
            },
            xg = yr("element", "width", "rows"),
            wg = yr("element", "cells"),
            Sg = yr("x", "y"),
            Eg = function(e, t) {
              var n = parseInt(pr(e, t), 10);
              return isNaN(n) ? 1 : n;
            },
            Ng = function(e, t, n) {
              var r = e.rows();
              return !!(r[n] ? r[n].cells() : [])[t];
            },
            kg = function(e) {
              return H(
                e,
                function(e, t) {
                  return t.cells().length > e ? t.cells().length : e;
                },
                0
              );
            },
            Tg = function(e, t) {
              for (var n = e.rows(), r = 0; r < n.length; r++)
                for (var o = n[r].cells(), i = 0; i < o.length; i++)
                  if (_r(o[i], t)) return _.some(Sg(i, r));
              return _.none();
            },
            _g = function(e, t, n, r, o) {
              for (var i = [], a = e.rows(), u = n; u <= o; u++) {
                var s = a[u].cells(),
                  c = t < r ? s.slice(t, r + 1) : s.slice(r, t + 1);
                i.push(wg(a[u].element(), c));
              }
              return i;
            },
            Bg = function(e) {
              var t = xg(na(e), 0, []);
              return (
                j(Fi(e, "tr"), function(e, n) {
                  j(Fi(e, "td,th"), function(r, o) {
                    !(function(e, t, n, r, o) {
                      for (
                        var i = Eg(o, "rowspan"),
                          a = Eg(o, "colspan"),
                          u = e.rows(),
                          s = n;
                        s < n + i;
                        s++
                      ) {
                        u[s] || (u[s] = wg(ra(r), []));
                        for (var c = t; c < t + a; c++)
                          u[s].cells()[c] = s === n && c === t ? o : na(o);
                      }
                    })(
                      t,
                      (function(e, t, n) {
                        for (; Ng(e, t, n); ) t++;
                        return t;
                      })(t, o, n),
                      n,
                      e,
                      r
                    );
                  });
                }),
                xg(t.element(), kg(t.rows()), t.rows())
              );
            },
            Ag = function(e) {
              return (function(e, t) {
                var n = na(e.element()),
                  r = Gn.fromTag("tbody");
                return Ni(r, t), Ei(n, r), n;
              })(
                e,
                (function(e) {
                  return U(e.rows(), function(e) {
                    var t = U(e.cells(), function(e) {
                        var t = ra(e);
                        return gr(t, "colspan"), gr(t, "rowspan"), t;
                      }),
                      n = na(e.element());
                    return Ni(n, t), n;
                  });
                })(e)
              );
            },
            Rg = function(e, t, n) {
              return Tg(e, t).bind(function(t) {
                return Tg(e, n).map(function(n) {
                  return (function(e, t, n) {
                    var r = t.x(),
                      o = t.y(),
                      i = n.x(),
                      a = n.y(),
                      u = o < a ? _g(e, r, o, i, a) : _g(e, r, a, i, o);
                    return xg(e.element(), kg(u), u);
                  })(e, t, n);
                });
              });
            },
            Og = function(e) {
              var t = [];
              if (e)
                for (var n = 0; n < e.rangeCount; n++) t.push(e.getRangeAt(n));
              return t;
            },
            Dg = Og,
            Pg = function(e) {
              return X(e, function(e) {
                var t = Ua(e);
                return t ? [Gn.fromDom(t)] : [];
              });
            },
            Ig = function(e) {
              return Og(e).length > 1;
            },
            Lg = function(e) {
              return V(Pg(e), mo);
            },
            Mg = function(e) {
              return Fi(e, "td[data-mce-selected],th[data-mce-selected]");
            },
            Fg = function(e, t) {
              var n = Mg(t),
                r = Lg(e);
              return n.length > 0 ? n : r;
            },
            Ug = Fg,
            jg = function(e) {
              return Fg(Dg(e.selection.getSel()), Gn.fromDom(e.getBody()));
            },
            zg = function(e, t) {
              return q(e, function(e) {
                return (
                  "li" === er(e) &&
                  (function(e, t) {
                    return Ha([Jf(t), Qf(t)], function(t, n) {
                      var r = q(Zf(e), a(_r, t)),
                        o = q(ed(e), a(_r, n));
                      return r.isSome() && o.isSome();
                    }).getOr(!1);
                  })(e, t)
                );
              }).fold(o([]), function(t) {
                return (function(e) {
                  return q(e, function(e) {
                    return "ul" === er(e) || "ol" === er(e);
                  });
                })(e)
                  .map(function(e) {
                    return [Gn.fromTag("li"), Gn.fromTag(er(e))];
                  })
                  .getOr([]);
              });
            },
            Vg = function(e, t) {
              var n = Gn.fromDom(t.commonAncestorContainer),
                r = Hf(n, e),
                i = V(r, function(e) {
                  return io(e) || ro(e);
                }),
                a = zg(r, t),
                u = i.concat(
                  a.length
                    ? a
                    : (function(e) {
                        return co(e)
                          ? Rr(e)
                              .filter(so)
                              .fold(o([]), function(t) {
                                return [e, t];
                              })
                          : so(e)
                          ? [e]
                          : [];
                      })(n)
                );
              return U(u, na);
            },
            Hg = function() {
              return Cg([]);
            },
            qg = function(e, t) {
              return (
                (n = Gn.fromDom(t.cloneContents())),
                (r = Vg(e, t)),
                (o = H(
                  r,
                  function(e, t) {
                    return Ei(t, e), t;
                  },
                  n
                )),
                r.length > 0 ? Cg([o]) : o
              );
              var n, r, o;
            },
            $g = function(e, t) {
              return ((n = e), (r = t[0]), Vi(r, "table", a(_r, n)))
                .bind(function(e) {
                  var n = t[0],
                    r = t[t.length - 1],
                    o = Bg(e);
                  return Rg(o, n, r).map(function(e) {
                    return Cg([Ag(e)]);
                  });
                })
                .getOrThunk(Hg);
              var n, r;
            },
            Wg = function(e, t) {
              var n = Ug(t, e);
              return n.length > 0
                ? $g(e, n)
                : (function(e, t) {
                    return t.length > 0 && t[0].collapsed ? Hg() : qg(e, t[0]);
                  })(e, t);
            },
            Kg = function(e, t) {
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
                    .map(function(e) {
                      return ua(e.toString());
                    })
                    .getOr("");
                })(e);
              t.getInner = !0;
              var n = (function(e, t) {
                var n,
                  r = e.selection.getRng(),
                  o = e.dom.create("body"),
                  i = e.selection.getSel(),
                  a = yg(e, Dg(i));
                return (
                  r.cloneContents
                    ? (n = t.contextual
                        ? Wg(Gn.fromDom(e.getBody()), a).dom()
                        : r.cloneContents()) && o.appendChild(n)
                    : (o.innerHTML = r.toString()),
                  e.selection.serializer.serialize(o, t)
                );
              })(e, t);
              return "tree" === t.format
                ? n
                : ((t.content = e.selection.isCollapsed() ? "" : n),
                  e.fire("GetContent", t),
                  t.content);
            },
            Xg = function(e, t, n) {
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
            Yg = function(e, t, n) {
              return Xg(e, t, function(e) {
                return e.nodeName === n;
              });
            },
            Gg = function(e) {
              return e && "TABLE" === e.nodeName;
            },
            Jg = function(e) {
              return e && /^(TD|TH|CAPTION)$/.test(e.nodeName);
            },
            Qg = function(e, t) {
              return da(e) && !1 === Xg(e, t, Lu);
            },
            Zg = function(e, t, n) {
              for (
                var r = new Qr(
                  t,
                  e.getParent(t.parentNode, e.isBlock) || e.getRoot()
                );
                (t = r[n ? "prev" : "next"]());

              )
                if (ko.isBr(t)) return !0;
            },
            eh = function(e, t, n, r, o) {
              var i,
                a,
                u,
                s,
                c = e.getRoot(),
                l = e.schema.getNonEmptyElements();
              if (
                ((u = e.getParent(o.parentNode, e.isBlock) || c),
                r && ko.isBr(o) && t && e.isEmpty(u))
              )
                return _.some(fu(o.parentNode, e.nodeIndex(o)));
              for (i = new Qr(o, u); (s = i[r ? "prev" : "next"]()); ) {
                if ("false" === e.getContentEditableParent(s) || Qg(s, c))
                  return _.none();
                if (ko.isText(s) && s.nodeValue.length > 0)
                  return !1 === Yg(s, c, "A")
                    ? _.some(fu(s, r ? s.nodeValue.length : 0))
                    : _.none();
                if (e.isBlock(s) || l[s.nodeName.toLowerCase()])
                  return _.none();
                a = s;
              }
              return n && a ? _.some(fu(a, 0)) : _.none();
            },
            th = function(e, t, n, r) {
              var o,
                i,
                a,
                u,
                s,
                c,
                l,
                f = e.getRoot(),
                d = !1;
              if (
                ((o = r[(n ? "start" : "end") + "Container"]),
                (i = r[(n ? "start" : "end") + "Offset"]),
                (l = ko.isElement(o) && i === o.childNodes.length),
                (s = e.schema.getNonEmptyElements()),
                (c = n),
                da(o))
              )
                return _.none();
              if (
                (ko.isElement(o) && i > o.childNodes.length - 1 && (c = !1),
                ko.isDocument(o) && ((o = f), (i = 0)),
                o === f)
              ) {
                if (c && (u = o.childNodes[i > 0 ? i - 1 : 0])) {
                  if (da(u)) return _.none();
                  if (s[u.nodeName] || Gg(u)) return _.none();
                }
                if (o.hasChildNodes()) {
                  if (
                    ((i = Math.min(
                      !c && i > 0 ? i - 1 : i,
                      o.childNodes.length - 1
                    )),
                    (o = o.childNodes[i]),
                    (i = ko.isText(o) && l ? o.data.length : 0),
                    !t && o === f.lastChild && Gg(o))
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
                    da(o)
                  )
                    return _.none();
                  if (o.hasChildNodes() && !1 === Gg(o)) {
                    (u = o), (a = new Qr(o, f));
                    do {
                      if (ko.isContentEditableFalse(u) || da(u)) {
                        d = !1;
                        break;
                      }
                      if (ko.isText(u) && u.nodeValue.length > 0) {
                        (i = c ? 0 : u.nodeValue.length), (o = u), (d = !0);
                        break;
                      }
                      if (s[u.nodeName.toLowerCase()] && !Jg(u)) {
                        (i = e.nodeIndex(u)),
                          (o = u.parentNode),
                          c || i++,
                          (d = !0);
                        break;
                      }
                    } while ((u = c ? a.next() : a.prev()));
                  }
                }
              }
              return (
                t &&
                  (ko.isText(o) &&
                    0 === i &&
                    eh(e, l, t, !0, o).each(function(e) {
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
                      Zg(e, u, !1) ||
                      Zg(e, u, !0) ||
                      eh(e, l, t, !0, u).each(function(e) {
                        (o = e.container()), (i = e.offset()), (d = !0);
                      }))),
                c &&
                  !t &&
                  ko.isText(o) &&
                  i === o.nodeValue.length &&
                  eh(e, l, t, !1, o).each(function(e) {
                    (o = e.container()), (i = e.offset()), (d = !0);
                  }),
                d ? _.some(fu(o, i)) : _.none()
              );
            },
            nh = {
              normalize: function(e, t) {
                var n = t.collapsed,
                  r = t.cloneRange(),
                  o = fu.fromRangeStart(t);
                return (
                  th(e, n, !0, r).each(function(e) {
                    (n && fu.isAbove(o, e)) ||
                      r.setStart(e.container(), e.offset());
                  }),
                  n ||
                    th(e, n, !1, r).each(function(e) {
                      r.setEnd(e.container(), e.offset());
                    }),
                  n && r.collapse(!0),
                  Gf.isEq(t, r) ? _.none() : _.some(r)
                );
              }
            },
            rh = function(e) {
              return 0 === e.dom().length ? (Ti(e), _.none()) : _.some(e);
            },
            oh = function(e, t, n) {
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
                  var n = _.from(t.firstChild).map(Gn.fromDom),
                    r = _.from(t.lastChild).map(Gn.fromDom);
                  e.deleteContents(), e.insertNode(t);
                  var o = n
                      .bind(Or)
                      .filter(rr)
                      .bind(rh),
                    i = r
                      .bind(Dr)
                      .filter(rr)
                      .bind(rh);
                  Ha([o, n.filter(rr)], function(e, t) {
                    var n, r;
                    (n = t.dom()),
                      (r = e.dom().data),
                      n.insertData(0, r),
                      Ti(e);
                  }),
                    Ha([i, r.filter(rr)], function(t, n) {
                      var r = n.dom().length;
                      n.dom().appendData(t.dom().data),
                        e.setEnd(n.dom(), r),
                        Ti(t);
                    }),
                    e.collapse(!1);
                })(r, r.createContextualFragment(n.content)),
                  e.selection.setRng(r),
                  hg(e, r),
                  n.no_events || e.fire("SetContent", n);
              } else e.fire("SetContent", n);
            },
            ih = function(e, t, n, r, o) {
              var i = n ? t.startContainer : t.endContainer,
                a = n ? t.startOffset : t.endOffset;
              return _.from(i)
                .map(Gn.fromDom)
                .map(function(e) {
                  return r && t.collapsed ? e : Mr(e, o(e, a)).getOr(e);
                })
                .bind(function(e) {
                  return nr(e) ? _.some(e) : Rr(e);
                })
                .map(function(e) {
                  return e.dom();
                })
                .getOr(e);
            },
            ah = function(e, t, n) {
              return ih(e, t, !0, n, function(e, t) {
                return Math.min(e.dom().childNodes.length, t);
              });
            },
            uh = function(e, t, n) {
              return ih(e, t, !1, n, function(e, t) {
                return t > 0 ? t - 1 : t;
              });
            },
            sh = function(e, t) {
              for (var n = e; e && ko.isText(e) && 0 === e.length; )
                e = t ? e.nextSibling : e.previousSibling;
              return e || n;
            },
            ch = function(e, t, n) {
              if (e && e.hasOwnProperty(t)) {
                var r = V(e[t], function(e) {
                  return e !== n;
                });
                0 === r.length ? delete e[t] : (e[t] = r);
              }
            },
            lh = function(e) {
              return !!e.select;
            },
            fh = function(e) {
              return (
                !(!e || !e.ownerDocument) &&
                Br(Gn.fromDom(e.ownerDocument), Gn.fromDom(e))
              );
            },
            dh = function(e, t, n, r) {
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
                            Xt.each(n, function(t, n) {
                              Xt.each(i, function(o) {
                                if (e.is(o, n))
                                  return (
                                    r[n] ||
                                      (Xt.each(t, function(e) {
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
                              Xt.each(r, function(e, t) {
                                a[t] ||
                                  (delete r[t],
                                  Xt.each(e, function(e) {
                                    e(!1, { node: o, selector: t, parents: i });
                                  }));
                              });
                          })),
                        n[o] || (n[o] = []),
                        n[o].push(i),
                        {
                          unbind: function() {
                            ch(n, o, i), ch(r, o, i);
                          }
                        }
                      );
                    }
                  };
                })(e, r).selectorChangedWithUnbind,
                c = function(e, t) {
                  return oh(r, e, t);
                },
                l = function(e) {
                  var t = d();
                  t.collapse(!!e), m(t);
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
                    c = function(e, t, n) {
                      try {
                        return t.compareBoundaryPoints(e, n);
                      } catch (e) {
                        return -1;
                      }
                    };
                  if (!t) return null;
                  if (null == (s = t.document)) return null;
                  if (void 0 !== r.bookmark && !1 === Al(r)) {
                    var l = wl.getRng(r);
                    if (l.isSome())
                      return l
                        .map(function(e) {
                          return yg(r, [e])[0];
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
                    (o = yg(r, [o])[0]) ||
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
                m = function(e, t) {
                  var n, o;
                  if (
                    (function(e) {
                      return (
                        !!e &&
                        (!!lh(e) ||
                          (fh(e.startContainer) && fh(e.endContainer)))
                      );
                    })(e)
                  ) {
                    var i = lh(e) ? e : null;
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
                        le.ie ||
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
                p = function() {
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
                      ? (o.setStart(t, n), o.setEnd(t, n), m(o), l(!1))
                      : (td(e, o, r.getBody(), !0), m(o));
                  },
                  getContent: function(e) {
                    return Kg(r, e);
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
                        return _.from(t).map(function(t) {
                          var r = e.nodeIndex(t),
                            o = e.createRng();
                          return (
                            o.setStart(t.parentNode, r),
                            o.setEnd(t.parentNode, r + 1),
                            n && (td(e, o, t, !0), td(e, o, t, !1)),
                            o
                          );
                        });
                      })(e, t, n).each(m),
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
                  isForward: p,
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
                                ? sh(o.nextSibling, !0)
                                : o.parentNode),
                            (i =
                              0 === u
                                ? sh(i.previousSibling, !1)
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
                  setRng: m,
                  getRng: d,
                  getStart: function(e) {
                    return ah(r.getBody(), d(), e);
                  },
                  getEnd: function(e) {
                    return uh(r.getBody(), d(), e);
                  },
                  getSelectedBlocks: function(t, n) {
                    return (function(e, t, n, r) {
                      var o,
                        i,
                        a = [];
                      if (
                        ((i = e.getRoot()),
                        (n = e.getParent(
                          n || ah(i, t, t.collapsed),
                          e.isBlock
                        )),
                        (r = e.getParent(
                          r || uh(i, t, t.collapsed),
                          e.isBlock
                        )),
                        n && n !== i && a.push(n),
                        n && r && n !== r)
                      ) {
                        o = n;
                        for (var u = new Qr(n, i); (o = u.next()) && o !== r; )
                          e.isBlock(o) && a.push(o);
                      }
                      return r && n !== r && r !== i && a.push(r), a;
                    })(e, d(), t, n);
                  },
                  normalize: function() {
                    var t = d(),
                      n = f();
                    if (!Ig(n) && nd(r)) {
                      var o = nh.normalize(e, t);
                      return (
                        o.each(function(e) {
                          m(e, p());
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
                    return gg(r, e, t);
                  },
                  placeCaretAt: function(e, t) {
                    return m(bg.fromPoint(e, t, r.getDoc()));
                  },
                  getBoundingClientRect: function() {
                    var e = d();
                    return e.collapsed
                      ? pu.fromRangeStart(e).getClientRects()[0]
                      : e.getBoundingClientRect();
                  },
                  destroy: function() {
                    (t = a = u = null), i.destroy();
                  }
                };
              return (
                (o = lg(g)),
                (i = mg(g, r)),
                (g.bookmarkManager = o),
                (g.controlSelection = i),
                g
              );
            },
            mh = ko.isText,
            ph = function(e) {
              return mh(e) && e.data[0] === aa;
            },
            gh = function(e) {
              return mh(e) && e.data[e.data.length - 1] === aa;
            },
            hh = function(e) {
              return e.ownerDocument.createTextNode(aa);
            },
            vh = function(e, t) {
              return e
                ? (function(e) {
                    if (mh(e.previousSibling))
                      return gh(e.previousSibling)
                        ? e.previousSibling
                        : (e.previousSibling.appendData(aa), e.previousSibling);
                    if (mh(e)) return ph(e) ? e : (e.insertData(0, aa), e);
                    var t = hh(e);
                    return e.parentNode.insertBefore(t, e), t;
                  })(t)
                : (function(e) {
                    if (mh(e.nextSibling))
                      return ph(e.nextSibling)
                        ? e.nextSibling
                        : (e.nextSibling.insertData(0, aa), e.nextSibling);
                    if (mh(e)) return gh(e) ? e : (e.appendData(aa), e);
                    var t = hh(e);
                    return (
                      e.nextSibling
                        ? e.parentNode.insertBefore(t, e.nextSibling)
                        : e.parentNode.appendChild(t),
                      t
                    );
                  })(t);
            },
            bh = a(vh, !0),
            yh = a(vh, !1),
            Ch = function(e, t) {
              return ko.isText(e.container())
                ? vh(t, e.container())
                : vh(t, e.getNode());
            },
            xh = function(e, t) {
              var n = t.get();
              return n && e.container() === n && fa(n);
            },
            wh = function(e, t) {
              return t.fold(
                function(t) {
                  Ku.remove(e.get());
                  var n = bh(t);
                  return e.set(n), _.some(pu(n, n.length - 1));
                },
                function(t) {
                  return tc.firstPositionIn(t).map(function(t) {
                    if (xh(t, e)) return pu(e.get(), 1);
                    Ku.remove(e.get());
                    var n = Ch(t, !0);
                    return e.set(n), pu(n, 1);
                  });
                },
                function(t) {
                  return tc.lastPositionIn(t).map(function(t) {
                    if (xh(t, e)) return pu(e.get(), e.get().length - 1);
                    Ku.remove(e.get());
                    var n = Ch(t, !1);
                    return e.set(n), pu(n, n.length - 1);
                  });
                },
                function(t) {
                  Ku.remove(e.get());
                  var n = yh(t);
                  return e.set(n), _.some(pu(n, 1));
                }
              );
            },
            Sh = /[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,
            Eh = function(e, t) {
              if (!t) return t;
              var n = t.container(),
                r = t.offset();
              return e
                ? fa(n)
                  ? ko.isText(n.nextSibling)
                    ? pu(n.nextSibling, 0)
                    : pu.after(n)
                  : pa(t)
                  ? pu(n, r + 1)
                  : t
                : fa(n)
                ? ko.isText(n.previousSibling)
                  ? pu(n.previousSibling, n.previousSibling.data.length)
                  : pu.before(n)
                : ga(t)
                ? pu(n, r - 1)
                : t;
            },
            Nh = {
              isInlineTarget: function(e, t) {
                var n = rf(e, "inline_boundaries_selector").getOr(
                  "a[href],code"
                );
                return kr(Gn.fromDom(t), n);
              },
              findRootInline: function(e, t, n) {
                var r = (function(e, t, n) {
                  return V(ci.DOM.getParents(n.container(), "*", t), e);
                })(e, t, n);
                return _.from(r[r.length - 1]);
              },
              isRtl: function(e) {
                return (
                  "rtl" === ci.DOM.getStyle(e, "direction", !0) ||
                  ((t = e.textContent), Sh.test(t))
                );
                var t;
              },
              isAtZwsp: function(e) {
                return pa(e) || ga(e);
              },
              normalizePosition: Eh,
              normalizeForwards: a(Eh, !0),
              normalizeBackwards: a(Eh, !1),
              hasSameParentBlock: function(e, t, n) {
                var r = ms(t, e),
                  o = ms(n, e);
                return r && r === o;
              }
            },
            kh = function(e, t) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n].apply(null, t);
                if (r.isSome()) return r;
              }
              return _.none();
            },
            Th = ul([
              { before: ["element"] },
              { start: ["element"] },
              { end: ["element"] },
              { after: ["element"] }
            ]),
            _h = function(e, t) {
              var n = ms(t, e);
              return n || e;
            },
            Bh = function(e, t, n) {
              var r = Nh.normalizeForwards(n),
                o = _h(t, r.container());
              return Nh.findRootInline(e, o, r).fold(function() {
                return tc
                  .nextPosition(o, r)
                  .bind(a(Nh.findRootInline, e, o))
                  .map(function(e) {
                    return Th.before(e);
                  });
              }, _.none);
            },
            Ah = function(e, t) {
              return null === Mu(e, t);
            },
            Rh = function(e, t, n) {
              return Nh.findRootInline(e, t, n).filter(a(Ah, t));
            },
            Oh = function(e, t, n) {
              var r = Nh.normalizeBackwards(n);
              return Rh(e, t, r).bind(function(e) {
                return tc.prevPosition(e, r).isNone()
                  ? _.some(Th.start(e))
                  : _.none();
              });
            },
            Dh = function(e, t, n) {
              var r = Nh.normalizeForwards(n);
              return Rh(e, t, r).bind(function(e) {
                return tc.nextPosition(e, r).isNone()
                  ? _.some(Th.end(e))
                  : _.none();
              });
            },
            Ph = function(e, t, n) {
              var r = Nh.normalizeBackwards(n),
                o = _h(t, r.container());
              return Nh.findRootInline(e, o, r).fold(function() {
                return tc
                  .prevPosition(o, r)
                  .bind(a(Nh.findRootInline, e, o))
                  .map(function(e) {
                    return Th.after(e);
                  });
              }, _.none);
            },
            Ih = function(e) {
              return !1 === Nh.isRtl(Mh(e));
            },
            Lh = function(e, t, n) {
              return kh([Bh, Oh, Dh, Ph], [e, t, n]).filter(Ih);
            },
            Mh = function(e) {
              return e.fold(i, i, i, i);
            },
            Fh = function(e) {
              return e.fold(o("before"), o("start"), o("end"), o("after"));
            },
            Uh = function(e) {
              return e.fold(Th.before, Th.before, Th.after, Th.after);
            },
            jh = function(e, t, n, r, o, i) {
              return Ha(
                [Nh.findRootInline(t, n, r), Nh.findRootInline(t, n, o)],
                function(t, r) {
                  return t !== r && Nh.hasSameParentBlock(n, t, r)
                    ? Th.after(e ? t : r)
                    : i;
                }
              ).getOr(i);
            },
            zh = function(e, t) {
              return e.fold(o(!0), function(e) {
                return (r = t), !(Fh((n = e)) === Fh(r) && Mh(n) === Mh(r));
                var n, r;
              });
            },
            Vh = function(e, t) {
              return e
                ? t.fold(
                    r(_.some, Th.start),
                    _.none,
                    r(_.some, Th.after),
                    _.none
                  )
                : t.fold(
                    _.none,
                    r(_.some, Th.before),
                    _.none,
                    r(_.some, Th.end)
                  );
            },
            Hh = function(e, t, n, r) {
              var o = Nh.normalizePosition(e, r),
                i = Lh(t, n, o);
              return Lh(t, n, o)
                .bind(a(Vh, e))
                .orThunk(function() {
                  return (function(e, t, n, r, o) {
                    var i = Nh.normalizePosition(e, o);
                    return tc
                      .fromPosition(e, n, i)
                      .map(a(Nh.normalizePosition, e))
                      .fold(
                        function() {
                          return r.map(Uh);
                        },
                        function(o) {
                          return Lh(t, n, o)
                            .map(a(jh, e, t, n, i, o))
                            .filter(a(zh, r));
                        }
                      )
                      .filter(Ih);
                  })(e, t, n, i, r);
                });
            },
            qh = Lh,
            $h = Hh,
            Wh = (a(Hh, !1), a(Hh, !0), Uh),
            Kh = function(e) {
              return e.fold(Th.start, Th.start, Th.end, Th.end);
            },
            Xh = function(e) {
              return I(e.selection.getSel().modify);
            },
            Yh = function(e, t, n) {
              var r = e ? 1 : -1;
              return (
                t.setRng(pu(n.container(), n.offset() + r).toRange()),
                t.getSel().modify("move", e ? "forward" : "backward", "word"),
                !0
              );
            },
            Gh = function(e, t) {
              var n = t.selection.getRng(),
                r = e ? pu.fromRangeEnd(n) : pu.fromRangeStart(n);
              return (
                !!Xh(t) &&
                (e && pa(r)
                  ? Yh(!0, t.selection, r)
                  : !(e || !ga(r)) && Yh(!1, t.selection, r))
              );
            },
            Jh = function(e, t) {
              var n = e.dom.createRng();
              n.setStart(t.container(), t.offset()),
                n.setEnd(t.container(), t.offset()),
                e.selection.setRng(n);
            },
            Qh = function(e) {
              return !1 !== e.settings.inline_boundaries;
            },
            Zh = function(e, t) {
              e
                ? t.setAttribute("data-mce-selected", "inline-boundary")
                : t.removeAttribute("data-mce-selected");
            },
            ev = function(e, t, n) {
              return wh(t, n).map(function(t) {
                return Jh(e, t), n;
              });
            },
            tv = function(e, t, n) {
              return function() {
                return !!Qh(t) && Gh(e, t);
              };
            },
            nv = {
              move: function(e, t, n) {
                return function() {
                  return (
                    !!Qh(e) &&
                    (function(e, t, n) {
                      var r = e.getBody(),
                        o = pu.fromRangeStart(e.selection.getRng()),
                        i = a(Nh.isInlineTarget, e);
                      return $h(n, i, r, o).bind(function(n) {
                        return ev(e, t, n);
                      });
                    })(e, t, n).isSome()
                  );
                };
              },
              moveNextWord: a(tv, !0),
              movePrevWord: a(tv, !1),
              setupSelectedState: function(e) {
                var t = gi(null),
                  n = a(Nh.isInlineTarget, e);
                return (
                  e.on("NodeChange", function(r) {
                    Qh(e) &&
                      ((function(e, t, n) {
                        var r = V(
                            t.select('*[data-mce-selected="inline-boundary"]'),
                            e
                          ),
                          o = V(n, e);
                        j(J(r, o), a(Zh, !1)), j(J(o, r), a(Zh, !0));
                      })(n, e.dom, r.parents),
                      (function(e, t) {
                        if (
                          e.selection.isCollapsed() &&
                          !0 !== e.composing &&
                          t.get()
                        ) {
                          var n = pu.fromRangeStart(e.selection.getRng());
                          pu.isTextPosition(n) &&
                            !1 === Nh.isAtZwsp(n) &&
                            (Jh(e, Ku.removeAndReposition(t.get(), n)),
                            t.set(null));
                        }
                      })(e, t),
                      (function(e, t, n, r) {
                        if (t.selection.isCollapsed()) {
                          var o = V(r, e);
                          j(o, function(r) {
                            var o = pu.fromRangeStart(t.selection.getRng());
                            qh(e, t.getBody(), o).bind(function(e) {
                              return ev(t, n, e);
                            });
                          });
                        }
                      })(n, e, t, r.parents));
                  }),
                  t
                );
              },
              setCaretPosition: Jh
            },
            rv = ko.isContentEditableFalse,
            ov = Ua,
            iv = Ts,
            av = ks,
            uv = function(e, t, n, r) {
              var o = e === mu.Forwards,
                i = o ? av : iv;
              if (!r.collapsed) {
                var a = ov(r);
                if (rv(a)) return Od(e, t, a, e === mu.Backwards, !0);
              }
              var u = la(r.startContainer),
                s = Ns(e, t.getBody(), r);
              if (i(s)) return Dd(t, s.getNode(!o));
              var c = Nh.normalizePosition(o, n(s));
              if (!c) return u ? r : null;
              if (i(c)) return Od(e, t, c.getNode(!o), o, !0);
              var l = n(c);
              return l && i(l) && Is(c, l)
                ? Od(e, t, l.getNode(!o), o, !0)
                : u
                ? Id(t, c.toRange(), !0)
                : null;
            },
            sv = function(e, t, n, r) {
              var o, i, a, u, s, c, l, f, d;
              if (
                ((d = ov(r)),
                (o = Ns(e, t.getBody(), r)),
                (i = n(t.getBody(), yd(1), o)),
                (a = V(i, Cd(1))),
                (s = Ht.last(o.getClientRects())),
                (av(o) || _s(o)) && (d = o.getNode()),
                (iv(o) || Bs(o)) && (d = o.getNode(!0)),
                !s)
              )
                return null;
              if (((c = s.left), (u = kd(a, c)) && rv(u.node)))
                return (
                  (l = Math.abs(c - u.left)),
                  (f = Math.abs(c - u.right)),
                  Od(e, t, u.node, l < f, !0)
                );
              if (d) {
                var m = (function(e, t, n, r) {
                  var o,
                    i,
                    a,
                    u,
                    s,
                    c,
                    l = Ws(t),
                    f = [],
                    d = 0,
                    m = function(e) {
                      return Ht.last(e.getClientRects());
                    };
                  1 === e
                    ? ((o = l.next), (i = La), (a = Ia), (u = pu.after(r)))
                    : ((o = l.prev), (i = Ia), (a = La), (u = pu.before(r))),
                    (c = m(u));
                  do {
                    if (u.isVisible() && !a((s = m(u)), c)) {
                      if (
                        (f.length > 0 && i(s, Ht.last(f)) && d++,
                        ((s = Oa(s)).position = u),
                        (s.line = d),
                        n(s))
                      )
                        return f;
                      f.push(s);
                    }
                  } while ((u = o(u)));
                  return f;
                })(e, t.getBody(), yd(1), d);
                if ((u = kd(V(m, Cd(1)), c)))
                  return Id(t, u.position.toRange(), !0);
                if ((u = Ht.last(V(m, Cd(0)))))
                  return Id(t, u.position.toRange(), !0);
              }
            },
            cv = function(e, t, n) {
              var r,
                o,
                i = Ws(e.getBody()),
                u = a(Ps, i.next),
                s = a(Ps, i.prev);
              if (n.collapsed && e.settings.forced_root_block) {
                if (!(r = e.dom.getParent(n.startContainer, "PRE"))) return;
                (1 === t ? u(pu.fromRangeStart(n)) : s(pu.fromRangeStart(n))) ||
                  ((o = (function(e) {
                    var t = e.dom.create(Qc.getForcedRootBlock(e));
                    return (
                      (!le.ie || le.ie >= 11) &&
                        (t.innerHTML = '<br data-mce-bogus="1">'),
                      t
                    );
                  })(e)),
                  1 === t ? e.$(r).after(o) : e.$(r).before(o),
                  e.selection.select(o, !0),
                  e.selection.collapse());
              }
            },
            lv = function(e, t) {
              return function() {
                var n = (function(e, t) {
                  var n,
                    r = Ws(e.getBody()),
                    o = a(Ps, r.next),
                    i = a(Ps, r.prev),
                    u = t ? mu.Forwards : mu.Backwards,
                    s = t ? o : i,
                    c = e.selection.getRng();
                  return (n = uv(u, e, s, c)) ? n : (n = cv(e, u, c)) || null;
                })(e, t);
                return !!n && (e.selection.setRng(n), !0);
              };
            },
            fv = function(e, t) {
              return function() {
                var n = (function(e, t) {
                  var n,
                    r = t ? 1 : -1,
                    o = t ? bd : vd,
                    i = e.selection.getRng();
                  return (n = sv(r, e, o, i)) ? n : (n = cv(e, r, i)) || null;
                })(e, t);
                return !!n && (e.selection.setRng(n), !0);
              };
            };
          !(function(e) {
            (e[(e.Br = 0)] = "Br"),
              (e[(e.Block = 1)] = "Block"),
              (e[(e.Wrap = 2)] = "Wrap"),
              (e[(e.Eol = 3)] = "Eol");
          })(cg || (cg = {}));
          var dv = function(e, t) {
              return e === mu.Backwards ? t.reverse() : t;
            },
            mv = function(e, t, n) {
              return e === mu.Forwards ? t.next(n) : t.prev(n);
            },
            pv = function(e, t, n, r) {
              return ko.isBr(r.getNode(t === mu.Forwards))
                ? cg.Br
                : !1 === ps(n, r)
                ? cg.Block
                : cg.Wrap;
            },
            gv = function(e, t, n, r) {
              for (var o, i = Ws(n), a = r, u = []; a && (o = mv(t, i, a)); ) {
                if (ko.isBr(o.getNode(!1)))
                  return t === mu.Forwards
                    ? {
                        positions: dv(t, u).concat([o]),
                        breakType: cg.Br,
                        breakAt: _.some(o)
                      }
                    : {
                        positions: dv(t, u),
                        breakType: cg.Br,
                        breakAt: _.some(o)
                      };
                if (o.isVisible()) {
                  if (e(a, o)) {
                    var s = pv(0, t, a, o);
                    return {
                      positions: dv(t, u),
                      breakType: s,
                      breakAt: _.some(o)
                    };
                  }
                  u.push(o), (a = o);
                } else a = o;
              }
              return {
                positions: dv(t, u),
                breakType: cg.Eol,
                breakAt: _.none()
              };
            },
            hv = function(e, t, n, r) {
              return t(n, r)
                .breakAt.map(function(r) {
                  var o = t(n, r).positions;
                  return e === mu.Backwards ? o.concat(r) : [r].concat(o);
                })
                .getOr([]);
            },
            vv = function(e, t) {
              return H(
                e,
                function(e, n) {
                  return e.fold(
                    function() {
                      return _.some(n);
                    },
                    function(r) {
                      return Ha(
                        [Q(r.getClientRects()), Q(n.getClientRects())],
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
            bv = function(e, t) {
              return Q(t.getClientRects()).bind(function(t) {
                return vv(e, t.left);
              });
            },
            yv = a(gv, fu.isAbove, -1),
            Cv = a(gv, fu.isBelow, 1),
            xv = a(hv, -1, yv),
            wv = a(hv, 1, Cv),
            Sv = function(e, t, n, r, o) {
              var i = Fi(Gn.fromDom(n), "td,th,caption").map(function(e) {
                return e.dom();
              });
              return (function(e, t, n) {
                return H(
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
                V(
                  (function(e, t) {
                    return X(t, function(t) {
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
            Ev = a(
              Sv,
              function(e) {
                return e.bottom;
              },
              function(e, t) {
                return e.y < t;
              }
            ),
            Nv = a(
              Sv,
              function(e) {
                return e.top;
              },
              function(e, t) {
                return e.y > t;
              }
            ),
            kv = function(e, t) {
              return Q(t.getClientRects())
                .bind(function(t) {
                  return Ev(e, t.left, t.top);
                })
                .bind(function(e) {
                  return bv(
                    ((n = e),
                    tc
                      .lastPositionIn(n)
                      .map(function(e) {
                        return yv(n, e).positions.concat(e);
                      })
                      .getOr([])),
                    t
                  );
                  var n;
                });
            },
            Tv = function(e, t) {
              return Z(t.getClientRects())
                .bind(function(t) {
                  return Nv(e, t.left, t.top);
                })
                .bind(function(e) {
                  return bv(
                    ((n = e),
                    tc
                      .firstPositionIn(n)
                      .map(function(e) {
                        return [e].concat(Cv(n, e).positions);
                      })
                      .getOr([])),
                    t
                  );
                  var n;
                });
            },
            _v = function(e, t) {
              e.selection.setRng(t), hg(e, t);
            },
            Bv = function(e, t, n) {
              var r = e(t, n);
              return (function(e) {
                return e.breakType === cg.Wrap && 0 === e.positions.length;
              })(r) ||
                (!ko.isBr(n.getNode()) &&
                  (function(e) {
                    return e.breakType === cg.Br && 1 === e.positions.length;
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
            Av = a(Bv, yv),
            Rv = a(Bv, Cv),
            Ov = function(e, t, n, r) {
              var o = e.selection.getRng(),
                i = t ? 1 : -1;
              if (
                Qu() &&
                (function(e, t, n) {
                  var r = pu.fromRangeStart(t);
                  return tc
                    .positionIn(!e, n)
                    .map(function(e) {
                      return e.isEqual(r);
                    })
                    .getOr(!1);
                })(t, o, n)
              ) {
                var a = Od(i, e, n, !t, !0);
                return _v(e, a), !0;
              }
              return !1;
            },
            Dv = function(e, t) {
              var n = t.getNode(e);
              return ko.isElement(n) && "TABLE" === n.nodeName
                ? _.some(n)
                : _.none();
            },
            Pv = function(e, t, n) {
              var r = Dv(!!t, n),
                o = !1 === t;
              r.fold(
                function() {
                  return _v(e, n.toRange());
                },
                function(r) {
                  return tc
                    .positionIn(o, e.getBody())
                    .filter(function(e) {
                      return e.isEqual(n);
                    })
                    .fold(
                      function() {
                        return _v(e, n.toRange());
                      },
                      function(o) {
                        return (function(e, t, n, r) {
                          var o = Qc.getForcedRootBlock(t);
                          o
                            ? t.undoManager.transact(function() {
                                var r = Gn.fromTag(o);
                                mr(r, Qc.getForcedRootBlockAttrs(t)),
                                  Ei(r, Gn.fromTag("br")),
                                  e
                                    ? wi(Gn.fromDom(n), r)
                                    : xi(Gn.fromDom(n), r);
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
            Iv = function(e, t, n, r) {
              var o = e.selection.getRng(),
                i = pu.fromRangeStart(o),
                a = e.getBody();
              if (!t && Av(r, i)) {
                var u = (function(e, t, n) {
                  return kv(t, n)
                    .orThunk(function() {
                      return Q(n.getClientRects()).bind(function(n) {
                        return vv(xv(e, pu.before(t)), n.left);
                      });
                    })
                    .getOr(pu.before(t));
                })(a, n, i);
                return Pv(e, t, u), !0;
              }
              return (
                !(!t || !Rv(r, i)) &&
                ((u = (function(e, t, n) {
                  return Tv(t, n)
                    .orThunk(function() {
                      return Q(n.getClientRects()).bind(function(n) {
                        return vv(wv(e, pu.after(t)), n.left);
                      });
                    })
                    .getOr(pu.after(t));
                })(a, n, i)),
                Pv(e, t, u),
                !0)
              );
            },
            Lv = function(e, t) {
              return function() {
                return _.from(e.dom.getParent(e.selection.getNode(), "td,th"))
                  .bind(function(n) {
                    return _.from(e.dom.getParent(n, "table")).map(function(n) {
                      return Ov(e, t, n);
                    });
                  })
                  .getOr(!1);
              };
            },
            Mv = function(e, t) {
              return function() {
                return _.from(e.dom.getParent(e.selection.getNode(), "td,th"))
                  .bind(function(n) {
                    return _.from(e.dom.getParent(n, "table")).map(function(r) {
                      return Iv(e, t, r, n);
                    });
                  })
                  .getOr(!1);
              };
            },
            Fv = function(e) {
              return F(["figcaption"], er(e));
            },
            Uv = function(e) {
              var t = document.createRange();
              return t.setStartBefore(e.dom()), t.setEndBefore(e.dom()), t;
            },
            jv = function(e, t, n) {
              n ? Ei(e, t) : Si(e, t);
            },
            zv = function(e, t, n, r) {
              return "" === t
                ? (function(e, t) {
                    var n = Gn.fromTag("br");
                    return jv(e, n, t), Uv(n);
                  })(e, r)
                : (function(e, t, n, r) {
                    var o = Gn.fromTag(n),
                      i = Gn.fromTag("br");
                    return mr(o, r), Ei(o, i), jv(e, o, t), Uv(i);
                  })(e, r, t, n);
            },
            Vv = function(e, t, n) {
              return t
                ? (function(e, t) {
                    return Cv(e, t).breakAt.isNone();
                  })(e.dom(), n)
                : (function(e, t) {
                    return yv(e, t).breakAt.isNone();
                  })(e.dom(), n);
            },
            Hv = function(e, t) {
              var n = Gn.fromDom(e.getBody()),
                r = pu.fromRangeStart(e.selection.getRng()),
                o = Qc.getForcedRootBlock(e),
                i = Qc.getForcedRootBlockAttrs(e);
              return (function(e, t) {
                var n = a(_r, t);
                return zi(Gn.fromDom(e.container()), oo, n).filter(Fv);
              })(r, n).exists(function() {
                if (Vv(n, t, r)) {
                  var a = zv(n, o, i, t);
                  return e.selection.setRng(a), !0;
                }
                return !1;
              });
            },
            qv = function(e, t) {
              return function() {
                return !!e.selection.isCollapsed() && Hv(e, t);
              };
            },
            $v = function(e, t) {
              return X(
                (function(e) {
                  return U(e, function(e) {
                    return Mc(
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
            Wv = function(e) {
              for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
              var r = Array.prototype.slice.call(arguments, 1);
              return function() {
                return e.apply(null, r);
              };
            },
            Kv = function(e, t) {
              return q($v(e, t), function(e) {
                return e.action();
              });
            },
            Xv = function(e, t) {
              e.on("keydown", function(n) {
                !1 === n.isDefaultPrevented() &&
                  (function(e, t, n) {
                    var r = Xn.detect().os;
                    Kv(
                      [
                        { keyCode: Md.RIGHT, action: lv(e, !0) },
                        { keyCode: Md.LEFT, action: lv(e, !1) },
                        { keyCode: Md.UP, action: fv(e, !1) },
                        { keyCode: Md.DOWN, action: fv(e, !0) },
                        { keyCode: Md.RIGHT, action: Lv(e, !0) },
                        { keyCode: Md.LEFT, action: Lv(e, !1) },
                        { keyCode: Md.UP, action: Mv(e, !1) },
                        { keyCode: Md.DOWN, action: Mv(e, !0) },
                        { keyCode: Md.RIGHT, action: nv.move(e, t, !0) },
                        { keyCode: Md.LEFT, action: nv.move(e, t, !1) },
                        {
                          keyCode: Md.RIGHT,
                          ctrlKey: !r.isOSX(),
                          altKey: r.isOSX(),
                          action: nv.moveNextWord(e, t)
                        },
                        {
                          keyCode: Md.LEFT,
                          ctrlKey: !r.isOSX(),
                          altKey: r.isOSX(),
                          action: nv.movePrevWord(e, t)
                        },
                        { keyCode: Md.UP, action: qv(e, !1) },
                        { keyCode: Md.DOWN, action: qv(e, !0) }
                      ],
                      n
                    ).each(function(e) {
                      n.preventDefault();
                    });
                  })(e, t, n);
              });
            },
            Yv = function(e, t) {
              return Br(e, t)
                ? zi(
                    t,
                    function(e) {
                      return uo(e) || co(e);
                    },
                    (function(e) {
                      return function(t) {
                        return _r(e, Gn.fromDom(t.dom().parentNode));
                      };
                    })(e)
                  )
                : _.none();
            },
            Gv = function(e) {
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
            Jv = function(e, t, n) {
              return Ha([tc.firstPositionIn(n), tc.lastPositionIn(n)], function(
                r,
                o
              ) {
                var i = Nh.normalizePosition(!0, r),
                  a = Nh.normalizePosition(!1, o),
                  u = Nh.normalizePosition(!1, t);
                return e
                  ? tc
                      .nextPosition(n, u)
                      .map(function(e) {
                        return e.isEqual(a) && t.isEqual(i);
                      })
                      .getOr(!1)
                  : tc
                      .prevPosition(n, u)
                      .map(function(e) {
                        return e.isEqual(i) && t.isEqual(a);
                      })
                      .getOr(!1);
              }).getOr(!0);
            },
            Qv = yr("block", "position"),
            Zv = yr("from", "to"),
            eb = function(e, t) {
              var n = Gn.fromDom(e),
                r = Gn.fromDom(t.container());
              return Yv(n, r).map(function(e) {
                return Qv(e, t);
              });
            },
            tb = function(e, t, n) {
              var r = eb(e, pu.fromRangeStart(n)),
                o = r.bind(function(n) {
                  return tc.fromPosition(t, e, n.position()).bind(function(n) {
                    return eb(e, n).map(function(n) {
                      return (function(e, t, n) {
                        return ko.isBr(n.position().getNode()) &&
                          !1 === Em(n.block())
                          ? tc
                              .positionIn(!1, n.block().dom())
                              .bind(function(r) {
                                return r.isEqual(n.position())
                                  ? tc.fromPosition(t, e, r).bind(function(t) {
                                      return eb(e, t);
                                    })
                                  : _.some(n);
                              })
                              .getOr(n)
                          : n;
                      })(e, t, n);
                    });
                  });
                });
              return Ha([r, o], Zv).filter(function(e) {
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
            nb = function(e, t, n) {
              return n.collapsed ? tb(e, t, n) : _.none();
            },
            rb = function(e) {
              var t = (function(e) {
                var t = Lr(e);
                return $(t, oo).fold(
                  function() {
                    return t;
                  },
                  function(e) {
                    return t.slice(0, e);
                  }
                );
              })(e);
              return j(t, Ti), t;
            },
            ob = function(e, t) {
              var n = Hf(t, e);
              return q(n.reverse(), Em).each(Ti);
            },
            ib = function(e, t, n, r) {
              if (Em(n)) return am(n), tc.firstPositionIn(n.dom());
              0 ===
                V(Pr(r), function(e) {
                  return !Em(e);
                }).length &&
                Em(t) &&
                xi(r, Gn.fromTag("br"));
              var o = tc.prevPosition(n.dom(), pu.before(r.dom()));
              return (
                j(rb(t), function(e) {
                  xi(r, e);
                }),
                ob(e, t),
                o
              );
            },
            ab = function(e, t, n) {
              if (Em(n))
                return Ti(n), Em(t) && am(t), tc.firstPositionIn(t.dom());
              var r = tc.lastPositionIn(n.dom());
              return (
                j(rb(t), function(e) {
                  Ei(n, e);
                }),
                ob(e, t),
                r
              );
            },
            ub = function(e, t) {
              return Br(t, e)
                ? (function(e, t) {
                    var n = Hf(t, e);
                    return _.from(n[n.length - 1]);
                  })(t, e)
                : _.none();
            },
            sb = function(e, t) {
              tc.positionIn(e, t.dom())
                .map(function(e) {
                  return e.getNode();
                })
                .map(Gn.fromDom)
                .filter(ao)
                .each(Ti);
            },
            cb = function(e, t, n) {
              return (
                sb(!0, t),
                sb(!1, n),
                ub(t, n).fold(a(ab, e, t, n), a(ib, e, t, n))
              );
            },
            lb = function(e, t, n, r) {
              return t ? cb(e, r, n) : cb(e, n, r);
            },
            fb = function(e, t) {
              var n,
                r = Gn.fromDom(e.getBody());
              return (
                (n = nb(r.dom(), t, e.selection.getRng()).bind(function(e) {
                  return lb(r, t, e.from().block(), e.to().block());
                })).each(function(t) {
                  e.selection.setRng(t.toRange());
                }),
                n.isSome()
              );
            },
            db = function(e, t) {
              var n = Gn.fromDom(t),
                r = a(_r, e);
              return ji(n, mo, r).isSome();
            },
            mb = function(e, t) {
              var n = tc.prevPosition(e.dom(), pu.fromRangeStart(t)).isNone(),
                r = tc.nextPosition(e.dom(), pu.fromRangeEnd(t)).isNone();
              return (
                !(function(e, t) {
                  return db(e, t.startContainer) || db(e, t.endContainer);
                })(e, t) &&
                n &&
                r
              );
            },
            pb = function(e) {
              var t = Gn.fromDom(e.getBody()),
                n = e.selection.getRng();
              return mb(t, n)
                ? (function(e) {
                    return (
                      e.setContent(""), e.selection.setCursorLocation(), !0
                    );
                  })(e)
                : (function(e, t) {
                    var n = t.getRng();
                    return Ha(
                      [
                        Yv(e, Gn.fromDom(n.startContainer)),
                        Yv(e, Gn.fromDom(n.endContainer))
                      ],
                      function(r, o) {
                        return (
                          !1 === _r(r, o) &&
                          (n.deleteContents(),
                          lb(e, !0, r, o).each(function(e) {
                            t.setRng(e.toRange());
                          }),
                          !0)
                        );
                      }
                    ).getOr(!1);
                  })(t, e.selection);
            },
            gb = function(e, t) {
              return !e.selection.isCollapsed() && pb(e);
            },
            hb = function(e) {
              return Ds(e).exists(ao);
            },
            vb = function(e, t, n) {
              var r = V(Hf(Gn.fromDom(n.container()), t), oo),
                o = Q(r).getOr(t);
              return tc.fromPosition(e, o.dom(), n).filter(hb);
            },
            bb = function(e, t) {
              return Ds(t).exists(ao) || vb(!0, e, t).isSome();
            },
            yb = function(e, t) {
              return (
                (function(e) {
                  return _.from(e.getNode(!0)).map(Gn.fromDom);
                })(t).exists(ao) || vb(!1, e, t).isSome()
              );
            },
            Cb = a(vb, !1),
            xb = a(vb, !0),
            wb = ul([
              { remove: ["element"] },
              { moveToElement: ["element"] },
              { moveToPosition: ["position"] }
            ]),
            Sb = function(e, t, n, r) {
              var o = r.getNode(!1 === t);
              return Yv(Gn.fromDom(e), Gn.fromDom(n.getNode()))
                .map(function(e) {
                  return Em(e) ? wb.remove(e.dom()) : wb.moveToElement(o);
                })
                .orThunk(function() {
                  return _.some(wb.moveToElement(o));
                });
            },
            Eb = function(e, t, n) {
              return tc.fromPosition(t, e, n).bind(function(r) {
                return (
                  (i = r.getNode()),
                  mo(Gn.fromDom(i)) || co(Gn.fromDom(i))
                    ? _.none()
                    : (function(e, t, n, r) {
                        var i = function(t) {
                          return io(Gn.fromDom(t)) && !ps(n, r, e);
                        };
                        return Es(!t, n).fold(function() {
                          return Es(t, r).fold(o(!1), i);
                        }, i);
                      })(e, t, n, r)
                    ? _.none()
                    : t && ko.isContentEditableFalse(r.getNode())
                    ? Sb(e, t, n, r)
                    : !1 === t && ko.isContentEditableFalse(r.getNode(!0))
                    ? Sb(e, t, n, r)
                    : t && Ts(n)
                    ? _.some(wb.moveToPosition(r))
                    : !1 === t && ks(n)
                    ? _.some(wb.moveToPosition(r))
                    : _.none()
                );
                var i;
              });
            },
            Nb = function(e, t, n) {
              return (function(e, t) {
                var n = t.getNode(!1 === e),
                  r = e ? "after" : "before";
                return (
                  ko.isElement(n) && n.getAttribute("data-mce-caret") === r
                );
              })(t, n)
                ? (function(e, t) {
                    return e && ko.isContentEditableFalse(t.nextSibling)
                      ? _.some(wb.moveToElement(t.nextSibling))
                      : !1 === e && ko.isContentEditableFalse(t.previousSibling)
                      ? _.some(wb.moveToElement(t.previousSibling))
                      : _.none();
                  })(t, n.getNode(!1 === t)).fold(function() {
                    return Eb(e, t, n);
                  }, _.some)
                : Eb(e, t, n).bind(function(t) {
                    return (function(e, t, n) {
                      return n.fold(
                        function(e) {
                          return _.some(wb.remove(e));
                        },
                        function(e) {
                          return _.some(wb.moveToElement(e));
                        },
                        function(n) {
                          return ps(t, n, e)
                            ? _.none()
                            : _.some(wb.moveToPosition(n));
                        }
                      );
                    })(e, n, t);
                  });
            },
            kb = function(e, t) {
              return (function(e, t, n) {
                var r = xs(t ? 1 : -1, e, n),
                  o = pu.fromRangeStart(r),
                  i = Gn.fromDom(e);
                return !1 === t && Ts(o)
                  ? _.some(wb.remove(o.getNode(!0)))
                  : t && ks(o)
                  ? _.some(wb.remove(o.getNode()))
                  : !1 === t && ks(o) && yb(i, o)
                  ? Cb(i, o).map(function(e) {
                      return wb.remove(e.getNode());
                    })
                  : t && Ts(o) && bb(i, o)
                  ? xb(i, o).map(function(e) {
                      return wb.remove(e.getNode());
                    })
                  : Nb(e, t, o);
              })(e.getBody(), t, e.selection.getRng())
                .map(function(n) {
                  return n.fold(
                    (function(e, t) {
                      return function(n) {
                        return (
                          e._selectionOverrides.hideFakeCaret(),
                          Im(e, t, Gn.fromDom(n)),
                          !0
                        );
                      };
                    })(e, t),
                    (function(e, t) {
                      return function(n) {
                        var r = t ? pu.before(n) : pu.after(n);
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
            Tb = function(e, t) {
              var n,
                r = e.selection.getNode();
              return (
                !!ko.isContentEditableFalse(r) &&
                ((n = Gn.fromDom(e.getBody())),
                j(Fi(n, ".mce-offscreen-selection"), Ti),
                Im(e, t, Gn.fromDom(e.selection.getNode())),
                Gv(e),
                !0)
              );
            },
            _b = function(e, t) {
              return e.selection.isCollapsed() ? kb(e, t) : Tb(e, t);
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
                  e.selection.setRng(pu.before(t).toRange())),
                !0
              );
            },
            Ab = Ts,
            Rb = ks,
            Ob = function(e, t, n, r, o, i) {
              var a = Od(r, e, i.getNode(!o), o, !0);
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
            Db = function(e, t) {
              return (function(e, t) {
                var n = e.selection.getRng();
                if (!ko.isText(n.commonAncestorContainer)) return !1;
                var r = t ? mu.Forwards : mu.Backwards,
                  o = Ws(e.getBody()),
                  i = a(Ps, o.next),
                  u = a(Ps, o.prev),
                  s = t ? i : u,
                  c = t ? Rb : Ab,
                  l = Ns(r, e.getBody(), n),
                  f = Nh.normalizePosition(t, s(l));
                if (!f) return !1;
                if (c(f)) return Ob(e, n, l.getNode(), r, t, f);
                var d = s(f);
                return (
                  !!(d && c(d) && Is(f, d)) && Ob(e, n, l.getNode(), r, t, d)
                );
              })(e, t);
            },
            Pb = function(e, t) {
              return function(n) {
                return wh(t, n)
                  .map(function(t) {
                    return nv.setCaretPosition(e, t), !0;
                  })
                  .getOr(!1);
              };
            },
            Ib = function(e, t, n, r) {
              var o = e.getBody(),
                i = a(Nh.isInlineTarget, e);
              e.undoManager.ignore(function() {
                e.selection.setRng(
                  (function(e, t) {
                    var n = document.createRange();
                    return (
                      n.setStart(e.container(), e.offset()),
                      n.setEnd(t.container(), t.offset()),
                      n
                    );
                  })(n, r)
                ),
                  e.execCommand("Delete"),
                  qh(i, o, pu.fromRangeStart(e.selection.getRng()))
                    .map(Kh)
                    .map(Pb(e, t));
              }),
                e.nodeChanged();
            },
            Lb = function(e, t, n, r) {
              var i = (function(e, t) {
                  var n = ms(t, e);
                  return n || e;
                })(e.getBody(), r.container()),
                u = a(Nh.isInlineTarget, e),
                s = qh(u, i, r);
              return s
                .bind(function(e) {
                  return n
                    ? e.fold(o(_.some(Kh(e))), _.none, o(_.some(Wh(e))), _.none)
                    : e.fold(
                        _.none,
                        o(_.some(Wh(e))),
                        _.none,
                        o(_.some(Kh(e)))
                      );
                })
                .map(Pb(e, t))
                .getOrThunk(function() {
                  var o = tc.navigate(n, i, r),
                    a = o.bind(function(e) {
                      return qh(u, i, e);
                    });
                  return s.isSome() && a.isSome()
                    ? Nh.findRootInline(u, i, r)
                        .map(function(t) {
                          return (
                            !!(function(e) {
                              return Ha(
                                [tc.firstPositionIn(e), tc.lastPositionIn(e)],
                                function(t, n) {
                                  var r = Nh.normalizePosition(!0, t),
                                    o = Nh.normalizePosition(!1, n);
                                  return tc
                                    .nextPosition(e, r)
                                    .map(function(e) {
                                      return e.isEqual(o);
                                    })
                                    .getOr(!0);
                                }
                              ).getOr(!0);
                            })(t) && (Im(e, n, Gn.fromDom(t)), !0)
                          );
                        })
                        .getOr(!1)
                    : a
                        .bind(function(i) {
                          return o.map(function(o) {
                            return n ? Ib(e, t, r, o) : Ib(e, t, o, r), !0;
                          });
                        })
                        .getOr(!1);
                });
            },
            Mb = function(e, t, n) {
              if (
                e.selection.isCollapsed() &&
                (function(e) {
                  return !1 !== e.settings.inline_boundaries;
                })(e)
              ) {
                var r = pu.fromRangeStart(e.selection.getRng());
                return Lb(e, t, n, r);
              }
              return !1;
            },
            Fb = function(e) {
              return 1 === Lr(e).length;
            },
            Ub = function(e, t, n, r) {
              var o = a(Wm, t),
                i = U(V(r, o), function(e) {
                  return e.dom();
                });
              if (0 === i.length) Im(t, e, n);
              else {
                var u = (function(e, t) {
                  var n = Um(!1),
                    r = qm(t, n.dom());
                  return xi(Gn.fromDom(e), n), Ti(Gn.fromDom(e)), pu(r, 0);
                })(n.dom(), i);
                t.selection.setRng(u.toRange());
              }
            },
            jb = function(e, t) {
              var n = Gn.fromDom(e.getBody()),
                r = Gn.fromDom(e.selection.getStart()),
                i = V(
                  (function(e, t) {
                    var n = Hf(t, e);
                    return $(n, oo).fold(o(n), function(e) {
                      return n.slice(0, e);
                    });
                  })(n, r),
                  Fb
                );
              return Z(i)
                .map(function(n) {
                  var r,
                    o = pu.fromRangeStart(e.selection.getRng());
                  return !(
                    !Jv(t, o, n.dom()) ||
                    ((r = n), Lu(r.dom()) && Mm(r.dom())) ||
                    (Ub(t, e, n, i), 0)
                  );
                })
                .getOr(!1);
            },
            zb = function(e, t) {
              return !!e.selection.isCollapsed() && jb(e, t);
            },
            Vb = yr("start", "end"),
            Hb = yr("rng", "table", "cells"),
            qb = ul([{ removeTable: ["element"] }, { emptyCells: ["cells"] }]),
            $b = function(e, t) {
              return qi(Gn.fromDom(e), "td,th", t);
            },
            Wb = function(e, t) {
              return Vi(e, "table", t);
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
              return Fi(e, "td,th");
            },
            Gb = function(e, t) {
              var n = $b(t.startContainer, e),
                r = $b(t.endContainer, e);
              return t.collapsed
                ? _.none()
                : Ha([n, r], Vb).fold(
                    function() {
                      return n.fold(
                        function() {
                          return r.bind(function(t) {
                            return Wb(t, e).bind(function(e) {
                              return Q(Yb(e)).map(function(e) {
                                return Vb(e, t);
                              });
                            });
                          });
                        },
                        function(t) {
                          return Wb(t, e).bind(function(e) {
                            return Z(Yb(e)).map(function(e) {
                              return Vb(t, e);
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
                              return Z(Yb(t)).map(function(t) {
                                return Vb(e.start(), t);
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
                return a(_r, e);
              })(e);
              return (function(e, t) {
                var n = $b(e.startContainer, t),
                  r = $b(e.endContainer, t);
                return Ha([n, r], Vb)
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
                    return Hb(e, t, Yb(t));
                  });
                })(e, n);
              });
            },
            Zb = function(e, t) {
              return $(e, function(e) {
                return _r(e, t);
              });
            },
            ey = function(e) {
              return (function(e) {
                return Ha(
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
              return j(t, am), e.selection.setCursorLocation(t[0].dom(), 0), !0;
            },
            ry = function(e, t) {
              return Im(e, !1, t), !0;
            },
            oy = function(e, t, n, r) {
              return ay(t, r)
                .fold(
                  function() {
                    return (function(e, t, n) {
                      return ty(t, n).map(function(t) {
                        return t.fold(a(ry, e), a(ny, e));
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
              return q(Hf(t, e), mo);
            },
            ay = function(e, t) {
              return q(Hf(t, e), function(e) {
                return "caption" === er(e);
              });
            },
            uy = function(e, t) {
              return (
                am(t), e.selection.setCursorLocation(t.dom(), 0), _.some(!0)
              );
            },
            sy = function(e, t, n, r, o) {
              return tc
                .navigate(n, e.getBody(), o)
                .bind(function(i) {
                  return (function(e, t, n, r) {
                    return tc
                      .firstPositionIn(e.dom())
                      .bind(function(o) {
                        return tc.lastPositionIn(e.dom()).map(function(e) {
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
                        return ay(e, Gn.fromDom(n.getNode())).map(function(e) {
                          return !1 === _r(e, t);
                        });
                      })(t, r, i);
                })
                .or(_.some(!0));
            },
            cy = function(e, t, n, r) {
              var o = pu.fromRangeStart(e.selection.getRng());
              return iy(n, r).bind(function(r) {
                return Em(r)
                  ? uy(e, r)
                  : (function(e, t, n, r, o) {
                      return tc.navigate(n, e.getBody(), o).bind(function(e) {
                        return iy(t, Gn.fromDom(e.getNode())).map(function(e) {
                          return !1 === _r(e, r);
                        });
                      });
                    })(e, n, t, r, o);
              });
            },
            ly = function(e, t, n) {
              var r = Gn.fromDom(e.getBody());
              return ay(r, n)
                .fold(
                  function() {
                    return cy(e, t, r, n);
                  },
                  function(n) {
                    return (function(e, t, n, r) {
                      var o = pu.fromRangeStart(e.selection.getRng());
                      return Em(r) ? uy(e, r) : sy(e, n, t, r, o);
                    })(e, t, r, n);
                  }
                )
                .getOr(!1);
            },
            fy = function(e, t) {
              var n = Gn.fromDom(e.selection.getStart(!0)),
                r = jg(e);
              return e.selection.isCollapsed() && 0 === r.length
                ? ly(e, t, n)
                : (function(e, t) {
                    var n = Gn.fromDom(e.getBody()),
                      r = e.selection.getRng(),
                      o = jg(e);
                    return 0 !== o.length ? ny(e, o) : oy(e, n, r, t);
                  })(e, n);
            },
            dy = function(e, t) {
              e.on("keydown", function(n) {
                !1 === n.isDefaultPrevented() &&
                  (function(e, t, n) {
                    Kv(
                      [
                        { keyCode: Md.BACKSPACE, action: Wv(_b, e, !1) },
                        { keyCode: Md.DELETE, action: Wv(_b, e, !0) },
                        { keyCode: Md.BACKSPACE, action: Wv(Db, e, !1) },
                        { keyCode: Md.DELETE, action: Wv(Db, e, !0) },
                        { keyCode: Md.BACKSPACE, action: Wv(Mb, e, t, !1) },
                        { keyCode: Md.DELETE, action: Wv(Mb, e, t, !0) },
                        { keyCode: Md.BACKSPACE, action: Wv(fy, e, !1) },
                        { keyCode: Md.DELETE, action: Wv(fy, e, !0) },
                        { keyCode: Md.BACKSPACE, action: Wv(gb, e, !1) },
                        { keyCode: Md.DELETE, action: Wv(gb, e, !0) },
                        { keyCode: Md.BACKSPACE, action: Wv(fb, e, !1) },
                        { keyCode: Md.DELETE, action: Wv(fb, e, !0) },
                        { keyCode: Md.BACKSPACE, action: Wv(zb, e, !1) },
                        { keyCode: Md.DELETE, action: Wv(zb, e, !0) }
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
                      Kv(
                        [
                          { keyCode: Md.BACKSPACE, action: Wv(Bb, e) },
                          { keyCode: Md.DELETE, action: Wv(Bb, e) }
                        ],
                        t
                      );
                    })(e, t);
                });
            },
            my = function(e) {
              return _.from(
                e.dom.getParent(e.selection.getStart(!0), e.dom.isBlock)
              );
            },
            py = function(e, t) {
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
                  for (n = new Qr(t, t); (r = n.current()); ) {
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
            hy = my,
            vy = function(e) {
              return my(e).fold(o(""), function(e) {
                return e.nodeName.toUpperCase();
              });
            },
            by = function(e) {
              return my(e)
                .filter(function(e) {
                  return co(Gn.fromDom(e));
                })
                .isSome();
            },
            yy = function(e, t) {
              return e && e.parentNode && e.parentNode.nodeName === t;
            },
            Cy = function(e) {
              return e && /^(OL|UL|LI)$/.test(e.nodeName);
            },
            xy = function(e) {
              var t = e.parentNode;
              return /^(LI|DT|DD)$/.test(t.nodeName) ? t : e;
            },
            wy = function(e, t, n) {
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
                if (wy(n, r, !0) && wy(n, r, !1))
                  yy(n, "LI") ? i.insertAfter(s, xy(n)) : i.replace(s, n);
                else if (wy(n, r, !0))
                  yy(n, "LI")
                    ? (i.insertAfter(s, xy(n)),
                      s.appendChild(i.doc.createTextNode(" ")),
                      s.appendChild(n))
                    : n.parentNode.insertBefore(s, n);
                else if (wy(n, r, !1)) i.insertAfter(s, xy(n));
                else {
                  n = xy(n);
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
                i.remove(r), py(e, s);
              }
            },
            Ey = function(e, t) {
              return t && "A" === t.nodeName && e.isEmpty(t);
            },
            Ny = function(e) {
              e.innerHTML = '<br data-mce-bogus="1">';
            },
            ky = function(e, t) {
              return (
                e.nodeName === t ||
                (e.previousSibling && e.previousSibling.nodeName === t)
              );
            },
            Ty = function(e, t) {
              return (
                t &&
                e.isBlock(t) &&
                !/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName) &&
                !/^(fixed|absolute)/i.test(t.style.position) &&
                "true" !== e.getContentEditable(t)
              );
            },
            _y = function(e, t, n) {
              return !1 === ko.isText(t)
                ? n
                : e
                ? 1 === n && t.data.charAt(n - 1) === aa
                  ? 0
                  : n
                : n === t.data.length - 1 && t.data.charAt(n) === aa
                ? t.data.length
                : n;
            },
            By = function(e, t) {
              var n,
                r,
                o = e.getRoot();
              for (n = t; n !== o && "false" !== e.getContentEditable(n); )
                "true" === e.getContentEditable(n) && (r = n),
                  (n = n.parentNode);
              return n !== o ? r : o;
            },
            Ay = function(e, t) {
              var n = Qc.getForcedRootBlock(e);
              n &&
                n.toLowerCase() === t.tagName.toLowerCase() &&
                e.dom.setAttribs(t, Qc.getForcedRootBlockAttrs(e));
            },
            Ry = function(e, t) {
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
                m,
                p,
                g = e.dom,
                h = e.schema,
                v = h.getNonEmptyElements(),
                b = e.selection.getRng(),
                y = function(t) {
                  var n,
                    i,
                    u,
                    s = o,
                    c = h.getTextInlineElements();
                  if (
                    (t || "TABLE" === f || "HR" === f
                      ? ((n = g.create(t || m)), Ay(e, n))
                      : (n = a.cloneNode(!1)),
                    (u = n),
                    !1 === Qc.shouldKeepStyles(e))
                  )
                    g.setAttrib(n, "style", null),
                      g.setAttrib(n, "class", null);
                  else
                    do {
                      if (c[s.nodeName]) {
                        if (Lu(s)) continue;
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
                    ((u = _y(e, o, i)),
                    ko.isText(o) && (e ? u > 0 : u < o.nodeValue.length))
                  )
                    return !1;
                  if (o.parentNode === a && p && !e) return !0;
                  if (e && ko.isElement(o) && o === a.firstChild) return !0;
                  if (ky(o, "TABLE") || ky(o, "HR"))
                    return (p && !e) || (!p && e);
                  for (
                    t = new Qr(o, a),
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
                x = function() {
                  (s =
                    /^(H[1-6]|PRE|FIGURE)$/.test(f) && "HGROUP" !== d
                      ? y(m)
                      : y()),
                    Qc.shouldEndContainerOnEmptyBlock(e) &&
                    Ty(g, l) &&
                    g.isEmpty(a)
                      ? (s = g.split(l, a))
                      : g.insertAfter(s, a),
                    py(e, s);
                };
              nh.normalize(g, b).each(function(e) {
                b.setStart(e.startContainer, e.startOffset),
                  b.setEnd(e.endContainer, e.endOffset);
              }),
                (o = b.startContainer),
                (i = b.startOffset),
                (m = Qc.getForcedRootBlock(e)),
                (u = !(!t || !t.shiftKey));
              var w = !(!t || !t.ctrlKey);
              ko.isElement(o) &&
                o.hasChildNodes() &&
                ((p = i > o.childNodes.length - 1),
                (o = o.childNodes[Math.min(i, o.childNodes.length - 1)] || o),
                (i = p && ko.isText(o) ? o.nodeValue.length : 0)),
                (r = By(g, o)) &&
                  (((m && !u) || (!m && u)) &&
                    (o = (function(e, t, n, r, o) {
                      var i,
                        a,
                        u,
                        s,
                        c,
                        l,
                        f = t || "P",
                        d = e.dom,
                        m = By(d, r);
                      if (!(a = d.getParent(r, d.isBlock)) || !Ty(d, a)) {
                        if (
                          ((l =
                            (a = a || m) === e.getBody() ||
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
                        if (u && e.schema.isValidChild(l, f.toLowerCase())) {
                          for (
                            i = d.create(f),
                              Ay(e, i),
                              u.parentNode.insertBefore(i, u),
                              s = u;
                            s && !d.isBlock(s);

                          )
                            (c = s.nextSibling), i.appendChild(s), (s = c);
                          n.setStart(r, o), n.setEnd(r, o);
                        }
                      }
                      return r;
                    })(e, m, b, o, i)),
                  (a = g.getParent(o, g.isBlock)),
                  (l = a ? g.getParent(a.parentNode, g.isBlock) : null),
                  (f = a ? a.nodeName.toUpperCase() : ""),
                  "LI" !== (d = l ? l.nodeName.toUpperCase() : "") ||
                    w ||
                    ((a = l), (l = l.parentNode), (f = d)),
                  /^(LI|DT|DD)$/.test(f) && g.isEmpty(a)
                    ? Sy(e, y, l, a, m)
                    : (m && a === e.getBody()) ||
                      ((m = m || "P"),
                      la(a)
                        ? ((s = ya(a)), g.isEmpty(a) && Ny(a), py(e, s))
                        : C()
                        ? x()
                        : C(!0)
                        ? ((s = a.parentNode.insertBefore(y(), a)),
                          py(e, ky(a, "HR") ? s : a))
                        : ((n = (function(e) {
                            var t = e.cloneRange();
                            return (
                              t.setStart(
                                e.startContainer,
                                _y(!0, e.startContainer, e.startOffset)
                              ),
                              t.setEnd(
                                e.endContainer,
                                _y(!1, e.endContainer, e.endOffset)
                              ),
                              t
                            );
                          })(b).cloneRange()).setEndAfter(a),
                          (function(e) {
                            j(Mi(Gn.fromDom(e), rr), function(e) {
                              var t = e.dom();
                              t.nodeValue = ua(t.nodeValue);
                            });
                          })((c = n.extractContents())),
                          (function(e) {
                            do {
                              ko.isText(e) &&
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
                          g.isEmpty(s) ? (g.remove(s), x()) : py(e, s)),
                      g.setAttrib(s, "id", ""),
                      e.fire("NewBlock", { newBlock: s })));
            },
            Oy = function(e, t, n) {
              var r = e.create("span", {}, "&nbsp;");
              n.parentNode.insertBefore(r, n), t.scrollIntoView(r), e.remove(r);
            },
            Dy = function(e, t, n, r) {
              var o = e.createRng();
              r
                ? (o.setStartBefore(n), o.setEndBefore(n))
                : (o.setStartAfter(n), o.setEndAfter(n)),
                t.setRng(o);
            },
            Py = function(e, t) {
              var n,
                r,
                o = e.selection,
                i = e.dom,
                a = o.getRng();
              nh.normalize(i, a).each(function(e) {
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
                m = !(!t || !t.ctrlKey);
              "LI" !== d || m || (l = f),
                s &&
                  3 === s.nodeType &&
                  u >= s.nodeValue.length &&
                  ((function(e, t, n) {
                    for (
                      var r, o = new Qr(t, n), i = e.getNonEmptyElements();
                      (r = o.next());

                    )
                      if (i[r.nodeName.toLowerCase()] || r.length > 0)
                        return !0;
                  })(e.schema, s, l) ||
                    ((n = i.create("br")),
                    a.insertNode(n),
                    a.setStartAfter(n),
                    a.setEndAfter(n),
                    (r = !0))),
                (n = i.create("br")),
                Nu(i, a, n),
                Oy(i, o, n),
                Dy(i, o, n, r),
                e.undoManager.add();
            },
            Iy = function(e, t) {
              var n = Gn.fromTag("br");
              xi(Gn.fromDom(t), n), e.undoManager.add();
            },
            Ly = function(e, t) {
              My(e.getBody(), t) || wi(Gn.fromDom(t), Gn.fromTag("br"));
              var n = Gn.fromTag("br");
              wi(Gn.fromDom(t), n),
                Oy(e.dom, e.selection, n.dom()),
                Dy(e.dom, e.selection, n.dom(), !1),
                e.undoManager.add();
            },
            My = function(e, t) {
              return (
                (n = pu.after(t)),
                !!ko.isBr(n.getNode()) ||
                  tc
                    .nextPosition(e, pu.after(t))
                    .map(function(e) {
                      return ko.isBr(e.getNode());
                    })
                    .getOr(!1)
              );
              var n;
            },
            Fy = function(e) {
              return e && "A" === e.nodeName && "href" in e;
            },
            Uy = function(e) {
              return e.fold(o(!1), Fy, Fy, o(!1));
            },
            jy = function(e, t) {
              t.fold(n, a(Iy, e), a(Ly, e), n);
            },
            zy = {
              insert: function(e, t) {
                var n = (function(e) {
                  var t = a(Nh.isInlineTarget, e),
                    n = pu.fromRangeStart(e.selection.getRng());
                  return qh(t, e.getBody(), n).filter(Uy);
                })(e);
                n.isSome() ? n.each(a(jy, e)) : Py(e, t);
              }
            },
            Vy = function(e, t) {
              return hy(e)
                .filter(function(e) {
                  return t.length > 0 && kr(Gn.fromDom(e), t);
                })
                .isSome();
            },
            Hy = function(e) {
              return Vy(e, Qc.getBrNewLineSelector(e));
            },
            qy = function(e) {
              return Vy(e, Qc.getNoNewLineSelector(e));
            },
            $y = ul([{ br: [] }, { block: [] }, { none: [] }]),
            Wy = function(e, t) {
              return qy(e);
            },
            Ky = function(e) {
              return function(t, n) {
                return ("" === Qc.getForcedRootBlock(t)) === e;
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
                return Qc.shouldPutBrInPre(t) === e;
              };
            },
            Qy = function(e, t) {
              return Hy(e);
            },
            Zy = function(e, t) {
              return t;
            },
            eC = function(e) {
              var t = Qc.getForcedRootBlock(e),
                n = gy(e.dom, e.selection.getStart());
              return n && e.schema.isValidChild(n.nodeName, t || "P");
            },
            tC = function(e, t) {
              return function(n, r) {
                return H(
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
              return kh(
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
                    zy.insert(e, t);
                  },
                  function() {
                    Ry(e, t);
                  },
                  n
                );
              }
            },
            oC = function(e) {
              e.on("keydown", function(t) {
                t.keyCode === Md.ENTER &&
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
                ? (n.insertData(r, e), _.some(fu(n, r + e.length)))
                : Ds(t).map(function(n) {
                    var r = Gn.fromText(e);
                    return (
                      t.isAtEnd() ? wi(n, r) : xi(n, r), fu(r.dom(), e.length)
                    );
                  });
            },
            aC = a(iC, " "),
            uC = a(iC, " "),
            sC = function(e, t, n) {
              var r = V(Hf(Gn.fromDom(n.container()), t), oo);
              return Q(r).fold(
                function() {
                  return tc.navigate(e, t.dom(), n).forall(function(e) {
                    return !1 === ps(e, n, t.dom());
                  });
                },
                function(t) {
                  return tc.navigate(e, t.dom(), n).isNone();
                }
              );
            },
            cC = a(sC, !1),
            lC = a(sC, !0),
            fC = function(e) {
              return fu.isTextPosition(e) && !e.isAtStart() && !e.isAtEnd();
            },
            dC = function(e, t) {
              var n = V(Hf(Gn.fromDom(t.container()), e), oo);
              return Q(n).getOr(e);
            },
            mC = function(e, t) {
              return fC(t)
                ? Os(t)
                : Os(t) || tc.prevPosition(dC(e, t).dom(), t).exists(Os);
            },
            pC = function(e, t) {
              return fC(t)
                ? Rs(t)
                : Rs(t) || tc.nextPosition(dC(e, t).dom(), t).exists(Rs);
            },
            gC = function(e) {
              return Ds(e)
                .bind(function(e) {
                  return zi(e, nr);
                })
                .exists(function(e) {
                  return (
                    (t = hr(e, "white-space")),
                    F(["pre", "pre-line", "pre-wrap"], t)
                  );
                  var t;
                });
            },
            hC = function(e, t) {
              return (
                (function(e, t) {
                  return tc.prevPosition(e.dom(), t).isNone();
                })(e, t) ||
                (function(e, t) {
                  return tc.nextPosition(e.dom(), t).isNone();
                })(e, t) ||
                cC(e, t) ||
                lC(e, t) ||
                yb(e, t) ||
                bb(e, t)
              );
            },
            vC = function(e, t) {
              return es(e.charAt(t));
            },
            bC = function(e) {
              var t = e.container();
              return ko.isText(t) && Un(t.data, " ");
            },
            yC = function(e, t, n) {
              var r = fu(t, 0);
              return vC(n, 0) &&
                !(function(e, t) {
                  return !gC(t) && (cC(e, t) || yb(e, t) || mC(e, t));
                })(e, r)
                ? " " + n.slice(1)
                : n;
            },
            CC = function(e, t, n) {
              var r = fu(t, n.length);
              return vC(n, n.length - 1) &&
                !(function(e, t) {
                  return !gC(t) && (lC(e, t) || bb(e, t) || pC(e, t));
                })(e, r)
                ? n.slice(0, -1) + " "
                : n;
            },
            xC = function(e, t) {
              return _.some(t)
                .filter(bC)
                .bind(function(t) {
                  var n = t.container(),
                    r = n.nodeValue,
                    o = yC(
                      e,
                      n,
                      (function(e) {
                        return U(e.split(""), function(e, t, n) {
                          return es(e) &&
                            t > 0 &&
                            t < n.length - 1 &&
                            ns(n[t - 1]) &&
                            ns(n[t + 1])
                            ? " "
                            : e;
                        }).join("");
                      })(CC(e, n, r))
                    );
                  return r !== o
                    ? ((t.container().nodeValue = o), _.some(t))
                    : _.none();
                });
            },
            wC = function(e) {
              var t = Gn.fromDom(e.getBody());
              e.selection.isCollapsed() &&
                xC(t, fu.fromRangeStart(e.selection.getRng())).each(function(
                  t
                ) {
                  e.selection.setRng(t.toRange());
                });
            },
            SC = function(e, t) {
              return function(n) {
                return (function(e, t) {
                  return !gC(t) && (hC(e, t) || mC(e, t) || pC(e, t));
                })(e, n)
                  ? aC(t)
                  : uC(t);
              };
            },
            EC = function(e) {
              var t = pu.fromRangeStart(e.selection.getRng()),
                n = Gn.fromDom(e.getBody());
              if (e.selection.isCollapsed()) {
                var r = a(Nh.isInlineTarget, e),
                  o = pu.fromRangeStart(e.selection.getRng());
                return qh(r, e.getBody(), o)
                  .bind(
                    (function(e) {
                      return function(t) {
                        return t.fold(
                          function(t) {
                            return tc.prevPosition(e.dom(), pu.before(t));
                          },
                          function(e) {
                            return tc.firstPositionIn(e);
                          },
                          function(e) {
                            return tc.lastPositionIn(e);
                          },
                          function(t) {
                            return tc.nextPosition(e.dom(), pu.after(t));
                          }
                        );
                      };
                    })(n)
                  )
                  .bind(SC(n, t))
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
            NC = function(e) {
              e.on("keydown", function(t) {
                !1 === t.isDefaultPrevented() &&
                  (function(e, t) {
                    Kv([{ keyCode: Md.SPACEBAR, action: Wv(EC, e) }], t).each(
                      function(e) {
                        t.preventDefault();
                      }
                    );
                  })(e, t);
              });
            },
            kC = function(e, t) {
              t.hasAttribute("data-mce-caret") &&
                (ya(t),
                (function(e) {
                  e.selection.setRng(e.selection.getRng());
                })(e),
                e.selection.scrollIntoView(t));
            },
            TC = function(e, t) {
              var n = (function(e) {
                return Hi(Gn.fromDom(e.getBody()), "*[data-mce-caret]").fold(
                  o(null),
                  function(e) {
                    return e.dom();
                  }
                );
              })(e);
              if (n)
                return "compositionstart" === t.type
                  ? (t.preventDefault(), t.stopPropagation(), void kC(e, n))
                  : void (ma(n) && (kC(e, n), e.undoManager.add()));
            },
            _C = function(e) {
              e.on("keyup compositionstart", a(TC, e));
            },
            BC = Xn.detect().browser,
            AC = function(e) {
              !(function(e) {
                var t = Bi(function() {
                  e.composing || wC(e);
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
                  !1 === t.isComposing && wC(e);
                });
            },
            RC = function(e) {
              var t = nv.setupSelectedState(e);
              _C(e), Xv(e, t), dy(e, t), oC(e), NC(e), AC(e);
            };
          function OC(e) {
            var t,
              n,
              r,
              o = Xt.each,
              i = Md.BACKSPACE,
              a = Md.DELETE,
              u = e.dom,
              s = e.selection,
              c = e.settings,
              l = e.parser,
              f = le.gecko,
              d = le.ie,
              m = le.webkit,
              p = d ? "Text" : "URL",
              g = function(t, n) {
                try {
                  e.getDoc().execCommand(t, !1, n);
                } catch (e) {}
              },
              h = function(e) {
                return e.isDefaultPrevented();
              },
              v = function() {
                e.shortcuts.add("meta+a", null, "SelectAll");
              },
              b = function() {
                e.on("keydown", function(e) {
                  if (
                    !h(e) &&
                    e.keyCode === i &&
                    s.isCollapsed() &&
                    0 === s.getRng().startOffset
                  ) {
                    var t = s.getNode().previousSibling;
                    if (t && t.nodeName && "table" === t.nodeName.toLowerCase())
                      return e.preventDefault(), !1;
                  }
                });
              },
              y = function() {
                e.inline ||
                  (e.contentStyles.push("body {min-height: 150px}"),
                  e.on("click", function(t) {
                    var n;
                    if ("HTML" === t.target.nodeName) {
                      if (le.ie > 11) return void e.getBody().focus();
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
                  !h(t) &&
                  t.keyCode === Md.BACKSPACE &&
                  ((r = (n = s.getRng()).startContainer),
                  (o = n.startOffset),
                  (i = u.getRoot()),
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
                    (n = u.createRng()).setStart(r, 0),
                    n.setEnd(r, 0),
                    s.setRng(n));
                }
              }),
              (t = function(e) {
                var t = u.create("body"),
                  n = e.cloneContents();
                return (
                  t.appendChild(n),
                  s.serializer.serialize(t, { format: "html" })
                );
              }),
              e.on("keydown", function(n) {
                var r,
                  o,
                  s,
                  c,
                  l,
                  f = n.keyCode;
                if (!h(n) && (f === a || f === i)) {
                  if (
                    ((r = e.selection.isCollapsed()),
                    (o = e.getBody()),
                    r && !u.isEmpty(o))
                  )
                    return;
                  if (
                    !r &&
                    ((s = e.selection.getRng()),
                    (c = t(s)),
                    (l = u.createRng()).selectNode(e.getBody()),
                    c !== t(l))
                  )
                    return;
                  n.preventDefault(),
                    e.setContent(""),
                    o.firstChild && u.isBlock(o.firstChild)
                      ? e.selection.setCursorLocation(o.firstChild, 0)
                      : e.selection.setCursorLocation(o, 0),
                    e.nodeChanged();
                }
              }),
              le.windowsPhone ||
                e.on(
                  "keyup focusin mouseup",
                  function(e) {
                    Md.modifierPressed(e) || s.normalize();
                  },
                  !0
                ),
              m &&
                (e.inline ||
                  u.bind(e.getDoc(), "mousedown mouseup", function(t) {
                    var n;
                    if (t.target === e.getDoc().documentElement)
                      if (
                        ((n = s.getRng()),
                        e.getBody().focus(),
                        "mousedown" === t.type)
                      ) {
                        if (da(n.startContainer)) return;
                        s.placeCaretAt(t.clientX, t.clientY);
                      } else s.setRng(n);
                  }),
                e.on("click", function(t) {
                  var n = t.target;
                  /^(IMG|HR)$/.test(n.nodeName) &&
                    "false" !== u.getContentEditableParent(n) &&
                    (t.preventDefault(),
                    e.selection.select(n),
                    e.nodeChanged()),
                    "A" === n.nodeName &&
                      u.hasClass(n, "mce-item-anchor") &&
                      (t.preventDefault(), s.select(n));
                }),
                c.forced_root_block &&
                  e.on("init", function() {
                    g("DefaultParagraphSeparator", Qc.getForcedRootBlock(e));
                  }),
                e.on("init", function() {
                  e.dom.bind(e.getBody(), "submit", function(e) {
                    e.preventDefault();
                  });
                }),
                b(),
                l.addNodeFilter("br", function(e) {
                  for (var t = e.length; t--; )
                    "Apple-interchange-newline" === e[t].attr("class") &&
                      e[t].remove();
                }),
                le.iOS
                  ? (e.inline ||
                      e.on("keydown", function() {
                        document.activeElement === document.body &&
                          e.getWin().focus();
                      }),
                    y(),
                    e.on("click", function(e) {
                      var t = e.target;
                      do {
                        if ("A" === t.tagName) return void e.preventDefault();
                      } while ((t = t.parentNode));
                    }),
                    e.contentStyles.push(
                      ".mce-content-body {-webkit-touch-callout: none}"
                    ))
                  : v()),
              le.ie >= 11 && (y(), b()),
              le.ie &&
                (v(),
                g("AutoUrlDetect", !1),
                e.on("dragstart", function(t) {
                  !(function(t) {
                    var n, r;
                    t.dataTransfer &&
                      (e.selection.isCollapsed() &&
                        "IMG" === t.target.tagName &&
                        s.select(t.target),
                      (n = e.selection.getContent()).length > 0 &&
                        ((r =
                          "data:text/mce-internal," +
                          escape(e.id) +
                          "," +
                          escape(n)),
                        t.dataTransfer.setData(p, r)));
                  })(t);
                }),
                e.on("drop", function(t) {
                  if (!h(t)) {
                    var n = (function(e) {
                      var t;
                      return e.dataTransfer &&
                        (t = e.dataTransfer.getData(p)) &&
                        t.indexOf("data:text/mce-internal,") >= 0
                        ? ((t = t
                            .substr("data:text/mce-internal,".length)
                            .split(",")),
                          { id: unescape(t[0]), html: unescape(t[1]) })
                        : null;
                    })(t);
                    if (n && n.id !== e.id) {
                      t.preventDefault();
                      var r = bg.fromPoint(t.x, t.y, e.getDoc());
                      s.setRng(r),
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
              f &&
                (e.on("keydown", function(t) {
                  if (!h(t) && t.keyCode === i) {
                    if (!e.getBody().getElementsByTagName("hr").length) return;
                    if (s.isCollapsed() && 0 === s.getRng().startOffset) {
                      var n = s.getNode(),
                        r = n.previousSibling;
                      if ("HR" === n.nodeName)
                        return u.remove(n), void t.preventDefault();
                      r &&
                        r.nodeName &&
                        "hr" === r.nodeName.toLowerCase() &&
                        (u.remove(r), t.preventDefault());
                    }
                  }
                }),
                Range.prototype.getClientRects ||
                  e.on("mousedown", function(t) {
                    if (!h(t) && "HTML" === t.target.nodeName) {
                      var n = e.getBody();
                      n.blur(),
                        ge.setEditorTimeout(e, function() {
                          n.focus();
                        });
                    }
                  }),
                (n = function() {
                  var t = u.getAttribs(s.getStart().cloneNode(!1));
                  return function() {
                    var n = s.getStart();
                    n !== e.getBody() &&
                      (u.setAttrib(n, "style", null),
                      o(t, function(e) {
                        n.setAttributeNode(e.cloneNode(!0));
                      }));
                  };
                }),
                (r = function() {
                  return (
                    !s.isCollapsed() &&
                    u.getParent(s.getStart(), u.isBlock) !==
                      u.getParent(s.getEnd(), u.isBlock)
                  );
                }),
                e.on("keypress", function(t) {
                  var o;
                  if (!h(t) && (8 === t.keyCode || 46 === t.keyCode) && r())
                    return (
                      (o = n()),
                      e.getDoc().execCommand("delete", !1, null),
                      o(),
                      t.preventDefault(),
                      !1
                    );
                }),
                u.bind(e.getDoc(), "cut", function(t) {
                  var o;
                  !h(t) &&
                    r() &&
                    ((o = n()),
                    ge.setEditorTimeout(e, function() {
                      o();
                    }));
                }),
                c.readonly ||
                  e.on("BeforeExecCommand MouseDown", function() {
                    g("StyleWithCSS", !1),
                      g("enableInlineTableEditing", !1),
                      c.object_resizing || g("enableObjectResizing", !1);
                  }),
                e.on("SetContent ExecCommand", function(e) {
                  ("setcontent" !== e.type && "mceInsertLink" !== e.command) ||
                    o(u.select("a"), function(e) {
                      var t = e.parentNode,
                        n = u.getRoot();
                      if (t.lastChild === e) {
                        for (; t && !u.isBlock(t); ) {
                          if (t.parentNode.lastChild !== t || t === n) return;
                          t = t.parentNode;
                        }
                        u.add(t, "br", { "data-mce-bogus": 1 });
                      }
                    });
                }),
                e.contentStyles.push(
                  "img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}"
                ),
                le.mac &&
                  e.on("keydown", function(t) {
                    !Md.metaKeyPressed(t) ||
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
                b()),
              {
                refreshContentEditable: function() {},
                isHidden: function() {
                  var t;
                  return !f || e.removed
                    ? 0
                    : !(t = e.selection.getSel()) ||
                        !t.rangeCount ||
                        0 === t.rangeCount;
                }
              }
            );
          }
          var DC = function(e) {
              return ko.isElement(e) && uo(Gn.fromDom(e));
            },
            PC = function(e) {
              e.on("click", function(t) {
                t.detail >= 3 &&
                  (function(e) {
                    var t = e.selection.getRng(),
                      n = fu.fromRangeStart(t),
                      r = fu.fromRangeEnd(t);
                    if (fu.isElementPosition(n)) {
                      var o = n.container();
                      DC(o) &&
                        tc.firstPositionIn(o).each(function(e) {
                          return t.setStart(e.container(), e.offset());
                        });
                    }
                    fu.isElementPosition(r) &&
                      ((o = n.container()),
                      DC(o) &&
                        tc.lastPositionIn(o).each(function(e) {
                          return t.setEnd(e.container(), e.offset());
                        })),
                      e.selection.setRng(Np(t));
                  })(e);
              });
            },
            IC = function(e) {
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
                        e.attr("open", A(t) ? t : null),
                          e.attr("data-mce-open", null);
                      });
                    });
                })(e);
            },
            LC = ci.DOM,
            MC = function(e) {
              e.bindPendingEventDelegates(),
                (e.initialized = !0),
                e.fire("init"),
                e.focus(!0),
                e.nodeChanged({ initial: !0 }),
                e.execCallback("init_instance_callback", e),
                (function(e) {
                  e.settings.auto_focus &&
                    ge.setEditorTimeout(
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
            FC = function(e, t) {
              var n,
                r,
                o = e.settings,
                i = e.getElement(),
                a = e.getDoc();
              o.inline || (e.getElement().style.visibility = e.orgVisibility),
                t || e.inline || (a.open(), a.write(e.iframeHTML), a.close()),
                e.inline &&
                  (e.on("remove", function() {
                    var e = this.getBody();
                    LC.removeClass(e, "mce-content-body"),
                      LC.removeClass(e, "mce-edit-focus"),
                      LC.setAttrib(e, "contentEditable", null);
                  }),
                  LC.addClass(i, "mce-content-body"),
                  (e.contentDocument = a = o.content_document || document),
                  (e.contentWindow = o.content_window || window),
                  (e.bodyElement = i),
                  (e.contentAreaContainer = i),
                  (o.content_document = o.content_window = null),
                  (o.root_name = i.nodeName.toLowerCase())),
                ((n = e.getBody()).disabled = !0),
                (e.readonly = o.readonly),
                e.readonly ||
                  (e.inline &&
                    "static" === LC.getStyle(n, "position", !0) &&
                    (n.style.position = "relative"),
                  (n.contentEditable = e.getParam(
                    "content_editable_state",
                    !0
                  ))),
                (n.disabled = !1),
                (e.editorUpload = Uf(e)),
                (e.schema = Jo(o)),
                (e.dom = ci(a, {
                  keep_values: !0,
                  url_converter: e.convertURL,
                  url_converter_scope: e,
                  hex_colors: o.force_hex_style_colors,
                  class_filter: o.class_filter,
                  update_styles: !0,
                  root_element: e.inline ? e.getBody() : null,
                  collect: function() {
                    return e.inline;
                  },
                  schema: e.schema,
                  contentCssCors: Qc.shouldUseContentCssCors(e),
                  onSetAttrib: function(t) {
                    e.fire("SetAttrib", t);
                  }
                })),
                (e.parser = (function(e) {
                  var t = ng(e.settings, e.schema);
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
                          (n.append(new zc("br", 1)).shortEnded = !0);
                    }),
                    t
                  );
                })(e)),
                (e.serializer = ug(o, e)),
                (e.selection = dh(e.dom, e.getWin(), e.serializer, e)),
                (e.annotator = Pc(e)),
                (e.formatter = jp(e)),
                (e.undoManager = om(e)),
                (e._nodeChangeDispatcher = new rd(e)),
                (e._selectionOverrides = Hd(e)),
                IC(e),
                PC(e),
                RC(e),
                Yf(e),
                e.fire("PreInit"),
                o.browser_spellcheck ||
                  o.gecko_spellcheck ||
                  ((a.body.spellcheck = !1),
                  LC.setAttrib(n, "spellcheck", "false")),
                (e.quirks = OC(e)),
                e.fire("PostRender"),
                o.directionality && (n.dir = o.directionality),
                o.protect &&
                  e.on("BeforeSetContent", function(e) {
                    Xt.each(o.protect, function(t) {
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
                  ((r = ""),
                  Xt.each(e.contentStyles, function(e) {
                    r += e + "\r\n";
                  }),
                  e.dom.addStyle(r)),
                (function(e) {
                  return e.inline
                    ? LC.styleSheetLoader
                    : e.dom.styleSheetLoader;
                })(e).loadAll(
                  e.contentCSS,
                  function(t) {
                    MC(e);
                  },
                  function(t) {
                    MC(e);
                  }
                ),
                o.content_style &&
                  (function(e, t) {
                    var n = Gn.fromDom(e.getDoc().head),
                      r = Gn.fromTag("style");
                    dr(r, "type", "text/css"), Ei(r, Gn.fromText(t)), Ei(n, r);
                  })(e, o.content_style);
            },
            UC = ci.DOM,
            jC = function(e, t) {
              var n = e.editorManager.translate(
                  "Rich Text Area. Press ALT-0 for help."
                ),
                r = (function(e, t, n, r) {
                  var o = Gn.fromTag("iframe");
                  return (
                    mr(o, r),
                    mr(o, {
                      id: e + "_ifr",
                      frameBorder: "0",
                      allowTransparency: "true",
                      title: t
                    }),
                    Pi(o, "tox-edit-area__iframe"),
                    o
                  );
                })(e.id, n, t.height, Qc.getIframeAttrs(e)).dom();
              r.onload = function() {
                (r.onload = null), e.fire("load");
              };
              var o = (function(e, t) {
                if (
                  document.domain !== window.location.hostname &&
                  le.ie &&
                  le.ie < 12
                ) {
                  var n = Ff.uuid("mce");
                  e[n] = function() {
                    FC(e);
                  };
                  var r =
                    'javascript:(function(){document.open();document.domain="' +
                    document.domain +
                    '";var ed = window.parent.tinymce.get("' +
                    e.id +
                    '");document.write(ed.iframeHTML);document.close();ed.' +
                    n +
                    "(true);})()";
                  return UC.setAttrib(t, "src", r), !0;
                }
                return !1;
              })(e, r);
              return (
                (e.contentAreaContainer = t.iframeContainer),
                (e.iframeElement = r),
                (e.iframeHTML = (function(e) {
                  var t, n, r;
                  return (
                    (r = Qc.getDocType(e) + "<html><head>"),
                    Qc.getDocumentBaseUrl(e) !== e.documentBaseUrl &&
                      (r +=
                        '<base href="' + e.documentBaseURI.getURI() + '" />'),
                    (r +=
                      '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'),
                    (t = Qc.getBodyId(e)),
                    (n = Qc.getBodyClass(e)),
                    Qc.getContentSecurityPolicy(e) &&
                      (r +=
                        '<meta http-equiv="Content-Security-Policy" content="' +
                        Qc.getContentSecurityPolicy(e) +
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
                UC.add(t.iframeContainer, r),
                o
              );
            },
            zC = function(e, t) {
              var n = jC(e, t);
              t.editorContainer &&
                ((UC.get(t.editorContainer).style.display = e.orgDisplay),
                (e.hidden = UC.isHidden(t.editorContainer))),
                (e.getElement().style.display = "none"),
                UC.setAttrib(e.id, "aria-hidden", "true"),
                n || FC(e);
            },
            VC = function(e) {
              e.contentCSS = e.contentCSS.concat(
                (function(e) {
                  var t = Qc.getContentCss(e),
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
            HC = ci.DOM,
            qC = function(e, t, n) {
              var r = Sf.get(n),
                o = Sf.urls[n] || e.documentBaseUrl.replace(/\/$/, "");
              if (((n = Xt.trim(n)), r && -1 === Xt.inArray(t, n))) {
                if (
                  (Xt.each(Sf.dependencies(n), function(n) {
                    qC(e, t, n);
                  }),
                  e.plugins[n])
                )
                  return;
                try {
                  var i = new r(e, o, e.$);
                  (e.plugins[n] = i), i.init && (i.init(e, o), t.push(n));
                } catch (t) {
                  xf.pluginInitError(e, n, t);
                }
              }
            },
            $C = function(e) {
              return e.replace(/^\-/, "");
            },
            WC = function(e) {
              return { editorContainer: e, iframeContainer: e };
            },
            KC = function(e) {
              var t = e.getElement();
              return e.inline
                ? WC(null)
                : (function(e) {
                    var t = HC.create("div");
                    return HC.insertAfter(t, e), WC(t);
                  })(t);
            },
            XC = function(e) {
              e.fire("ScriptsLoaded"),
                (function(e) {
                  var t = e.settings.theme;
                  if (A(t)) {
                    e.settings.theme = $C(t);
                    var n = Ef.get(t);
                    (e.theme = new n(e, Ef.urls[t])),
                      e.theme.init &&
                        e.theme.init(
                          e,
                          Ef.urls[t] || e.documentBaseUrl.replace(/\/$/, ""),
                          e.$
                        );
                  } else e.theme = {};
                })(e),
                (function(e) {
                  var t = [];
                  Xt.each(e.settings.plugins.split(/[ ,]/), function(n) {
                    qC(e, t, $C(n));
                  });
                })(e),
                (function(e) {
                  var t = Xt.trim(e.settings.icons);
                  ar(wf.get(t).icons, function(t, n) {
                    e.ui.registry.addIcon(n, t);
                  });
                })(e);
              var t = (function(e) {
                var t = e.settings,
                  n = e.getElement();
                return (
                  (e.orgDisplay = n.style.display),
                  A(t.theme)
                    ? (function(e) {
                        return e.theme.renderUI();
                      })(e)
                    : I(t.theme)
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
                    : KC(e)
                );
              })(e);
              return (
                (e.editorContainer = t.editorContainer
                  ? t.editorContainer
                  : null),
                VC(e),
                e.inline ? FC(e) : zC(e, t)
              );
            },
            YC = ci.DOM,
            GC = function(e) {
              return "-" === e.charAt(0);
            },
            JC = function(e, t) {
              var n = pi.ScriptLoader;
              !(function(e, t, n, r) {
                var o = t.settings,
                  i = o.theme;
                if (A(i)) {
                  if (!GC(i) && !Ef.urls.hasOwnProperty(i)) {
                    var a = o.theme_url;
                    a
                      ? Ef.load(i, t.documentBaseURI.toAbsolute(a))
                      : Ef.load(i, "themes/" + i + "/theme" + n + ".js");
                  }
                  e.loadQueue(function() {
                    Ef.waitFor(i, r);
                  });
                } else r();
              })(n, e, t, function() {
                !(function(e, t) {
                  var n = Qc.getLanguageCode(t),
                    r = Qc.getLanguageUrl(t);
                  !1 === bi.hasCode(n) &&
                    "en" !== n &&
                    ("" !== r
                      ? e.add(r)
                      : e.add(t.editorManager.baseURL + "/langs/" + n + ".js"));
                })(n, e),
                  (function(e, t) {
                    var n = e.icons;
                    if (A(n)) {
                      var r =
                        t.editorManager.baseURL +
                        "/icons/" +
                        Xt.trim(n) +
                        "/icons.js";
                      pi.ScriptLoader.add(r);
                    }
                  })(e.settings, e),
                  (function(e, t) {
                    Xt.isArray(e.plugins) && (e.plugins = e.plugins.join(" ")),
                      Xt.each(e.external_plugins, function(t, n) {
                        Sf.load(n, t), (e.plugins += " " + n);
                      }),
                      Xt.each(e.plugins.split(/[ ,]/), function(e) {
                        if ((e = Xt.trim(e)) && !Sf.urls[e])
                          if (GC(e)) {
                            e = e.substr(1, e.length);
                            var n = Sf.dependencies(e);
                            Xt.each(n, function(e) {
                              var n = {
                                prefix: "plugins/",
                                resource: e,
                                suffix: "/plugin" + t + ".js"
                              };
                              (e = Sf.createUrl(n, e)), Sf.load(e.resource, e);
                            });
                          } else
                            Sf.load(e, {
                              prefix: "plugins/",
                              resource: e,
                              suffix: "/plugin" + t + ".js"
                            });
                      });
                  })(e.settings, t),
                  n.loadQueue(
                    function() {
                      e.removed || XC(e);
                    },
                    e,
                    function(t) {
                      xf.pluginLoadError(e, t[0]), e.removed || XC(e);
                    }
                  );
              });
            },
            QC = function(e) {
              var t = e.settings,
                n = e.id;
              bi.setCode(Qc.getLanguageCode(e));
              var r = function() {
                YC.unbind(window, "ready", r), e.render();
              };
              if (Ee.Event.domLoaded) {
                if (e.getElement() && le.contentEditable) {
                  t.inline
                    ? (e.inline = !0)
                    : ((e.orgVisibility = e.getElement().style.visibility),
                      (e.getElement().style.visibility = "hidden"));
                  var o = e.getElement().form || YC.getParent(n, "form");
                  o &&
                    ((e.formElement = o),
                    t.hidden_input &&
                      !/TEXTAREA|INPUT/i.test(e.getElement().nodeName) &&
                      (YC.insertAfter(
                        YC.create("input", { type: "hidden", name: n }),
                        n
                      ),
                      (e.hasHiddenInput = !0)),
                    (e.formEventDelegate = function(t) {
                      e.fire(t.type, t);
                    }),
                    YC.bind(o, "submit reset", e.formEventDelegate),
                    e.on("reset", function() {
                      e.setContent(e.startContent, { format: "raw" });
                    }),
                    !t.submit_patch ||
                      o.submit.nodeType ||
                      o.submit.length ||
                      o._mceOldSubmit ||
                      ((o._mceOldSubmit = o.submit),
                      (o.submit = function() {
                        return (
                          e.editorManager.triggerSave(),
                          e.setDirty(!1),
                          o._mceOldSubmit(o)
                        );
                      }))),
                    (e.windowManager = pf(e)),
                    (e.notificationManager = mf(e)),
                    "xml" === t.encoding &&
                      e.on("GetContent", function(e) {
                        e.save && (e.content = YC.encode(e.content));
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
                    JC(e, e.suffix);
                }
              } else YC.bind(window, "ready", r);
            },
            ZC = function(e, t, n) {
              try {
                e.getDoc().execCommand(t, !1, n);
              } catch (e) {}
            },
            ex = function(e, t, n) {
              var r, o;
              Li(e, t) && !1 === n
                ? ((o = t),
                  Ri((r = e)) ? r.dom().classList.remove(o) : Di(r, o),
                  Ii(r))
                : n && Pi(e, t);
            },
            tx = function(e, t) {
              ex(Gn.fromDom(e.getBody()), "mce-content-readonly", t),
                t
                  ? (e.selection.controlSelection.hideResizeRect(),
                    (e.readonly = !0),
                    (e.getBody().contentEditable = "false"))
                  : ((e.readonly = !1),
                    (e.getBody().contentEditable = "true"),
                    ZC(e, "StyleWithCSS", !1),
                    ZC(e, "enableInlineTableEditing", !1),
                    ZC(e, "enableObjectResizing", !1),
                    e.focus(),
                    e.nodeChanged());
            },
            nx = function(e) {
              return e.readonly ? "readonly" : "design";
            },
            rx = function(e) {
              return Xt.grep(e.childNodes, function(e) {
                return "LI" === e.nodeName;
              });
            },
            ox = function(e) {
              return (
                e &&
                e.firstChild &&
                e.firstChild === e.lastChild &&
                (function(e) {
                  return " " === e.data || ko.isBr(e);
                })(e.firstChild)
              );
            },
            ix = function(e) {
              return e.length > 0 &&
                (!(t = e[e.length - 1]).firstChild || ox(t))
                ? e.slice(0, -1)
                : e;
              var t;
            },
            ax = function(e, t) {
              var n = e.getParent(t, e.isBlock);
              return n && "LI" === n.nodeName ? n : null;
            },
            ux = function(e, t) {
              var n = pu.after(e),
                r = Ws(t).prev(n);
              return r ? r.toRange() : null;
            },
            sx = function(e, t, n) {
              var r = e.parentNode;
              return (
                Xt.each(t, function(t) {
                  r.insertBefore(t, e);
                }),
                (function(e, t) {
                  var n = pu.before(e),
                    r = Ws(t).next(n);
                  return r ? r.toRange() : null;
                })(e, n)
              );
            },
            cx = function(e, t) {
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
            lx = function(e, t, n, r) {
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
                i = ax(t, n.startContainer),
                a = ix(rx(o.firstChild)),
                u = t.getRoot(),
                s = function(e) {
                  var r = pu.fromRangeStart(n),
                    o = Ws(t.getRoot()),
                    a = 1 === e ? o.prev(r) : o.next(r);
                  return !a || ax(t, a.getNode()) !== i;
                };
              return s(1)
                ? sx(i, a, u)
                : s(2)
                ? (function(e, t, n, r) {
                    return r.insertAfter(t.reverse(), e), ux(t[0], n);
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
                      Xt.each(t, function(t) {
                        i.insertBefore(t, e);
                      }),
                      i.insertBefore(o[1], e),
                      i.removeChild(e),
                      ux(t[t.length - 1], n)
                    );
                  })(i, a, u, n);
            },
            fx = function(e, t) {
              return !!ax(e, t);
            },
            dx = ko.matchNodeNames("td th"),
            mx = function(e, t) {
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
            px = function(e, t, n) {
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
                m,
                p = e.selection,
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
                  })(p.getRng(), t)),
                (r = e.parser),
                (m = n.merge),
                (o = nl({ validate: e.settings.validate }, e.schema)),
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
                var h =
                    (l = p.getRng()).startContainer ||
                    (l.parentElement ? l.parentElement() : null),
                  v = e.getBody();
                h === v &&
                  p.isCollapsed() &&
                  g.isBlock(v.firstChild) &&
                  (function(e, t) {
                    return t && !e.schema.getShortEndedElements()[t.nodeName];
                  })(e, v.firstChild) &&
                  g.isEmpty(v.firstChild) &&
                  ((l = g.createRng()).setStart(v.firstChild, 0),
                  l.setEnd(v.firstChild, 0),
                  p.setRng(l)),
                  p.isCollapsed() ||
                    (e.selection.setRng(Np(e.selection.getRng())),
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
                    context: (i = p.getNode()).nodeName.toLowerCase(),
                    data: n.data,
                    insert: !0
                  };
                if (
                  ((u = r.parse(t, y)),
                  !0 === n.paste && cx(e.schema, u) && fx(g, i))
                )
                  return (
                    (l = lx(o, g, e.selection.getRng(), u)),
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
                    mx(e, d),
                      i = p.getNode(),
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
                        : mx(e, t);
                    }
                  })(e, (t = o.serialize(u)), i);
                !(function(e, t) {
                  var n = e.schema.getTextInlineElements(),
                    r = e.dom;
                  if (t) {
                    var o = e.getBody(),
                      i = new Qm(r);
                    Xt.each(r.select("*[data-mce-fragment]"), function(e) {
                      for (var t = e.parentNode; t && t !== o; t = t.parentNode)
                        n[e.nodeName.toLowerCase()] &&
                          i.compare(t, e) &&
                          r.remove(e, !0);
                    });
                  }
                })(e, m),
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
                      var c = u.createRng();
                      (i = t.previousSibling) && 3 === i.nodeType
                        ? (c.setStart(i, i.nodeValue.length),
                          le.ie ||
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
                          dx(r) ||
                          (function(e) {
                            return !!e.getAttribute("data-mce-fragment");
                          })(r) ||
                          !(o = (function(t) {
                            var n = pu.fromRangeStart(t);
                            if ((n = Ws(e.getBody()).next(n)))
                              return n.toRange();
                          })(c))
                            ? u.add(
                                r,
                                u.create("br", { "data-mce-bogus": "1" })
                              )
                            : ((c = o), u.remove(r))),
                        s.setRng(c);
                    }
                  })(e, g.get("mce_marker")),
                  (b = e.getBody()),
                  Xt.each(b.getElementsByTagName("*"), function(e) {
                    e.removeAttribute("data-mce-fragment");
                  }),
                  (function(e, t) {
                    _.from(e.getParent(t, "td,th"))
                      .map(Gn.fromDom)
                      .each(um);
                  })(e.dom, e.selection.getStart()),
                  e.fire("SetContent", s),
                  e.addVisual();
              }
            },
            gx = {
              insertAtCaret: function(e, t) {
                var n = (function(e) {
                  var t;
                  return "string" != typeof e
                    ? ((t = Xt.extend(
                        { paste: e.paste, data: { paste: e.paste } },
                        e
                      )),
                      { content: e.content, details: t })
                    : { content: e, details: {} };
                })(t);
                px(e, n.content, n.details);
              }
            },
            hx = function(e, t) {
              e.getDoc().execCommand(t, !1, null);
            },
            vx = {
              deleteCommand: function(e) {
                _b(e, !1) ||
                  Db(e, !1) ||
                  Mb(e, !1) ||
                  fb(e, !1) ||
                  fy(e) ||
                  gb(e, !1) ||
                  zb(e, !1) ||
                  (hx(e, "Delete"), Gv(e));
              },
              forwardDeleteCommand: function(e) {
                _b(e, !0) ||
                  Db(e, !0) ||
                  Mb(e, !0) ||
                  fb(e, !0) ||
                  fy(e) ||
                  gb(e, !0) ||
                  zb(e, !0) ||
                  hx(e, "ForwardDelete");
              }
            },
            bx = function(e) {
              return function(t, n) {
                return _.from(n)
                  .map(Gn.fromDom)
                  .filter(nr)
                  .bind(function(n) {
                    return (function(e, t, n) {
                      var r = function(t) {
                        return br(t, e);
                      };
                      return zi(
                        Gn.fromDom(n),
                        function(e) {
                          return r(e).isSome();
                        },
                        function(e) {
                          return _r(Gn.fromDom(t), e);
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
            yx = {
              getFontSize: bx("font-size"),
              getFontFamily: r(function(e) {
                return e.replace(/[\'\"\\]/g, "").replace(/,\s+/g, ",");
              }, bx("font-family")),
              toPt: function(e, t) {
                return /[0-9.]+px$/.test(e)
                  ? (function(e, t) {
                      var n = Math.pow(10, t);
                      return Math.round(e * n) / n;
                    })((72 * parseInt(e, 10)) / 96, t || 0) + "pt"
                  : e;
              }
            },
            Cx = function(e) {
              return tc.firstPositionIn(e.getBody()).map(function(e) {
                var t = e.container();
                return ko.isText(t) ? t.parentNode : t;
              });
            },
            xx = function(e) {
              return _.from(e.selection.getRng()).bind(function(t) {
                return (function(e, t) {
                  return e.startContainer === t && 0 === e.startOffset;
                })(t, e.getBody())
                  ? _.none()
                  : _.from(e.selection.getStart(!0));
              });
            },
            wx = function(e, t) {
              if (/^[0-9\.]+$/.test(t)) {
                var n = parseInt(t, 10);
                if (n >= 1 && n <= 7) {
                  var r = Qc.getFontStyleValues(e),
                    o = Qc.getFontSizeClasses(e);
                  return o ? o[n - 1] || t : r[n - 1] || t;
                }
                return t;
              }
              return t;
            },
            Sx = function(e, t) {
              e.formatter.toggle("fontname", { value: wx(e, t) }),
                e.nodeChanged();
            },
            Ex = function(e) {
              return xx(e).fold(
                function() {
                  return Cx(e)
                    .map(function(t) {
                      return yx.getFontFamily(e.getBody(), t);
                    })
                    .getOr("");
                },
                function(t) {
                  return yx.getFontFamily(e.getBody(), t);
                }
              );
            },
            Nx = function(e, t) {
              e.formatter.toggle("fontsize", { value: wx(e, t) }),
                e.nodeChanged();
            },
            kx = function(e) {
              return xx(e).fold(
                function() {
                  return Cx(e)
                    .map(function(t) {
                      return yx.getFontSize(e.getBody(), t);
                    })
                    .getOr("");
                },
                function(t) {
                  return yx.getFontSize(e.getBody(), t);
                }
              );
            },
            Tx = function(e) {
              var t = parseInt(e, 10);
              return isNaN(t) ? 0 : t;
            },
            _x = function(e, t) {
              return (
                (e || "table" === er(t) ? "margin" : "padding") +
                ("rtl" === hr(t, "direction") ? "-right" : "-left")
              );
            },
            Bx = function(e) {
              var t = Rx(e);
              return (
                !0 !== e.readonly &&
                (t.length > 1 ||
                  (function(e, t) {
                    return Y(t, function(t) {
                      var n = _x(Qc.shouldIndentUseMargin(e), t),
                        r = br(t, n)
                          .map(Tx)
                          .getOr(0);
                      return (
                        "false" !== e.dom.getContentEditable(t.dom()) && r > 0
                      );
                    });
                  })(e, t))
              );
            },
            Ax = function(e) {
              return so(e) || co(e);
            },
            Rx = function(e) {
              return V(U(e.selection.getSelectedBlocks(), Gn.fromDom), function(
                e
              ) {
                return (
                  !Ax(e) &&
                  !(function(e) {
                    return Rr(e)
                      .map(Ax)
                      .getOr(!1);
                  })(e) &&
                  zi(e, function(e) {
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
            Ox = function(e, t) {
              var n = e.dom,
                r = e.selection,
                o = e.formatter,
                i = Qc.getIndentation(e),
                a = /[a-z%]+$/i.exec(i)[0],
                u = parseInt(i, 10),
                s = Qc.shouldIndentUseMargin(e),
                c = Qc.getForcedRootBlock(e);
              e.queryCommandState("InsertUnorderedList") ||
                e.queryCommandState("InsertOrderedList") ||
                "" !== c ||
                n.getParent(r.getNode(), n.isBlock) ||
                o.apply("div"),
                j(Rx(e), function(e) {
                  !(function(e, t, n, r, o, i) {
                    var a = _x(n, Gn.fromDom(i));
                    if ("outdent" === t) {
                      var u = Math.max(0, Tx(i.style[a]) - r);
                      e.setStyle(i, a, u ? u + o : "");
                    } else (u = Tx(i.style[a]) + r + o), e.setStyle(i, a, u);
                  })(n, t, s, u, a, e.dom());
                });
            },
            Dx = Xt.each,
            Px = Xt.extend,
            Ix = Xt.map,
            Lx = Xt.inArray;
          function Mx(e) {
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
                  Dx(e, function(e, n) {
                    Dx(n.toLowerCase().split(","), function(n) {
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
            Px(this, {
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
                      ? wl.restore(e)
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
                    (Dx(e.plugins, function(o) {
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
              c = function(e) {
                return r.match(e);
              },
              l = function(t, n) {
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
                  le.mac && (o = o.replace(/Ctrl\+/g, "⌘+")),
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
                  Dx("left,center,right,justify".split(","), function(e) {
                    t !== e && r.remove("align" + e);
                  }),
                  "none" !== t && l("align" + t);
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
                l(e);
              },
              "ForeColor,HiliteColor": function(e, t, n) {
                l(e, n);
              },
              FontName: function(t, n, r) {
                Sx(e, r);
              },
              FontSize: function(t, n, r) {
                Nx(e, r);
              },
              RemoveFormat: function(e) {
                r.remove(e);
              },
              mceBlockQuote: function() {
                l("blockquote");
              },
              FormatBlock: function(e, t, n) {
                return l(n || "p");
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
                gx.insertAtCaret(e, r);
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
                l(n);
              },
              mceSetContent: function(t, n, r) {
                e.setContent(r);
              },
              "Indent,Outdent": function(t) {
                Ox(e, t);
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
                vx.deleteCommand(e);
              },
              forwardDelete: function() {
                vx.forwardDeleteCommand(e);
              },
              mceNewDocument: function() {
                e.setContent("");
              },
              InsertLineBreak: function(t, n, r) {
                return zy.insert(e, r), !0;
              }
            });
            var m = function(e) {
              return function() {
                var o = n.isCollapsed()
                    ? [t.getParent(n.getNode(), t.isBlock)]
                    : n.getSelectedBlocks(),
                  i = Ix(o, function(t) {
                    return !!r.matchNode(t, e);
                  });
                return -1 !== Lx(i, !0);
              };
            };
            a(
              {
                JustifyLeft: m("alignleft"),
                JustifyCenter: m("aligncenter"),
                JustifyRight: m("alignright"),
                JustifyFull: m("alignjustify"),
                "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function(
                  e
                ) {
                  return c(e);
                },
                mceBlockQuote: function() {
                  return c("blockquote");
                },
                Outdent: function() {
                  return Bx(e);
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
                  return Ex(e);
                },
                this
              ),
              u(
                "FontSize",
                function() {
                  return kx(e);
                },
                this
              );
          }
          var Fx = Xt.makeMap(
              "focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend",
              " "
            ),
            Ux = function(e) {
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
                  var s, c, l;
                  if ((!1 === t && (t = i), t))
                    for (
                      t = { func: t },
                        u && Xt.extend(t, u),
                        l = (c = e.toLowerCase().split(" ")).length;
                      l--;

                    )
                      (e = c[l]),
                        (s = o[e]) || ((s = o[e] = []), n(e, !0)),
                        a ? s.unshift(t) : s.push(t);
                  return r;
                },
                s = function(e, t) {
                  var i, a, u, s, c;
                  if (e)
                    for (i = (s = e.toLowerCase().split(" ")).length; i--; ) {
                      if (((e = s[i]), (a = o[e]), !e)) {
                        for (u in o) n(u, !1), delete o[u];
                        return r;
                      }
                      if (a) {
                        if (t)
                          for (c = a.length; c--; )
                            a[c].func === t &&
                              ((a = a.slice(0, c).concat(a.slice(c + 1))),
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
                var u, c, l, f;
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
                  for (c = 0, l = u.length; c < l; c++) {
                    if (
                      ((f = u[c]).once && s(n, f.func),
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
          Ux.isNative = function(e) {
            return !!Fx[e.toLowerCase()];
          };
          var jx,
            zx = function(e) {
              return (
                e._eventDispatcher ||
                  (e._eventDispatcher = new Ux({
                    scope: e,
                    toggleEvent: function(t, n) {
                      Ux.isNative(t) &&
                        e.toggleNativeEvent &&
                        e.toggleNativeEvent(t, n);
                    }
                  })),
                e._eventDispatcher
              );
            },
            Vx = {
              fire: function(e, t, n) {
                if (this.removed && "remove" !== e && "detach" !== e) return t;
                if (((t = zx(this).fire(e, t, n)), !1 !== n && this.parent))
                  for (var r = this.parent(); r && !t.isPropagationStopped(); )
                    r.fire(e, t, !1), (r = r.parent());
                return t;
              },
              on: function(e, t, n) {
                return zx(this).on(e, t, n);
              },
              off: function(e, t) {
                return zx(this).off(e, t);
              },
              once: function(e, t) {
                return zx(this).once(e, t);
              },
              hasEventListeners: function(e) {
                return zx(this).has(e);
              }
            },
            Hx = ci.DOM,
            qx = function(e, t) {
              return "selectionchange" === t
                ? e.getDoc()
                : !e.inline &&
                  /^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t)
                ? e.getDoc().documentElement
                : e.settings.event_root
                ? (e.eventRoot ||
                    (e.eventRoot = Hx.select(e.settings.event_root)[0]),
                  e.eventRoot)
                : e.getBody();
            },
            $x = function(e, t, n) {
              !(function(e) {
                return !e.hidden && !e.readonly;
              })(e)
                ? (function(e) {
                    return !0 === e.readonly;
                  })(e) && n.preventDefault()
                : e.fire(t, n);
            },
            Wx = function(e, t) {
              var n, r;
              if (
                (e.delegates || (e.delegates = {}),
                !e.delegates[t] && !e.removed)
              )
                if (((n = qx(e, t)), e.settings.event_root)) {
                  if (
                    (jx ||
                      ((jx = {}),
                      e.editorManager.on("removeEditor", function() {
                        var t;
                        if (!e.editorManager.activeEditor && jx) {
                          for (t in jx) e.dom.unbind(qx(e, t));
                          jx = null;
                        }
                      })),
                    jx[t])
                  )
                    return;
                  (r = function(n) {
                    for (
                      var r = n.target, o = e.editorManager.get(), i = o.length;
                      i--;

                    ) {
                      var a = o[i].getBody();
                      (a === r || Hx.isChildOf(r, a)) && $x(o[i], t, n);
                    }
                  }),
                    (jx[t] = r),
                    Hx.bind(n, t, r);
                } else
                  (r = function(n) {
                    $x(e, t, n);
                  }),
                    Hx.bind(n, t, r),
                    (e.delegates[t] = r);
            },
            Kx = {
              bindPendingEventDelegates: function() {
                var e = this;
                Xt.each(e._pendingNativeEvents, function(t) {
                  Wx(e, t);
                });
              },
              toggleNativeEvent: function(e, t) {
                "focus" !== e &&
                  "blur" !== e &&
                  (t
                    ? this.initialized
                      ? Wx(this, e)
                      : this._pendingNativeEvents
                      ? this._pendingNativeEvents.push(e)
                      : (this._pendingNativeEvents = [e])
                    : this.initialized &&
                      (this.dom.unbind(qx(this, e), e, this.delegates[e]),
                      delete this.delegates[e]));
              },
              unbindAllNativeEvents: function() {
                var e,
                  t = this.getBody(),
                  n = this.dom;
                if (this.delegates) {
                  for (e in this.delegates)
                    this.dom.unbind(qx(this, e), e, this.delegates[e]);
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
            Xx = (Kx = Xt.extend({}, Vx, Kx)),
            Yx = Xt.each,
            Gx = Xt.explode,
            Jx = {
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
            Qx = Xt.makeMap("alt,ctrl,shift,meta,access");
          function Zx(e) {
            var t = {},
              n = [],
              r = function(e) {
                var t,
                  n,
                  r = {};
                for (n in (Yx(Gx(e, "+"), function(e) {
                  e in Qx
                    ? (r[e] = !0)
                    : /^[0-9]{2,}$/.test(e)
                    ? (r.keyCode = parseInt(e, 10))
                    : ((r.charCode = e.charCodeAt(0)),
                      (r.keyCode = Jx[e] || e.toUpperCase().charCodeAt(0)));
                }),
                (t = [r.keyCode]),
                Qx))
                  r[n] ? t.push(n) : (r[n] = !1);
                return (
                  (r.id = t.join(",")),
                  r.access &&
                    ((r.alt = !0), le.mac ? (r.ctrl = !0) : (r.shift = !0)),
                  r.meta &&
                    (le.mac ? (r.meta = !0) : ((r.ctrl = !0), (r.meta = !1))),
                  r
                );
              },
              o = function(t, n, o, i) {
                var a;
                return (
                  ((a = Xt.map(Gx(t, ">"), r))[a.length - 1] = Xt.extend(
                    a[a.length - 1],
                    { func: o, scope: i || e }
                  )),
                  Xt.extend(a[0], {
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
                (Yx(t, function(t) {
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
                    : Xt.isArray(u) &&
                      (i = function() {
                        e.execCommand(u[0], u[1], u[2]);
                      }),
                  Yx(Gx(Xt.trim(n.toLowerCase())), function(e) {
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
          var ew = Xt.each,
            tw = Xt.trim,
            nw = "source protocol authority userInfo user password host port relative path directory file query anchor".split(
              " "
            ),
            rw = { ftp: 21, http: 80, https: 443, mailto: 25 },
            ow = function(e, t) {
              var n,
                r,
                o = this;
              if (
                ((e = tw(e)),
                (n = (t = o.settings = t || {}).base_uri),
                /^([\w\-]+):([^\/]{2})/i.test(e) || /^\s*#/.test(e))
              )
                o.source = e;
              else {
                var i = 0 === e.indexOf("//");
                0 !== e.indexOf("/") ||
                  i ||
                  (e = ((n && n.protocol) || "http") + "://mce_host" + e),
                  /^[\w\-]*:?\/\//.test(e) ||
                    ((r = t.base_uri
                      ? t.base_uri.path
                      : new ow(document.location.href).directory),
                    "" == t.base_uri.protocol
                      ? (e = "//mce_host" + o.toAbsPath(r, e))
                      : ((e = /([^#?]*)([#?]?.*)/.exec(e)),
                        (e =
                          ((n && n.protocol) || "http") +
                          "://mce_host" +
                          o.toAbsPath(r, e[1]) +
                          e[2]))),
                  (e = e.replace(/@@/g, "(mce_at)")),
                  (e = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(
                    e
                  )),
                  ew(nw, function(t, n) {
                    var r = e[n];
                    r && (r = r.replace(/\(mce_at\)/g, "@@")), (o[t] = r);
                  }),
                  n &&
                    (o.protocol || (o.protocol = n.protocol),
                    o.userInfo || (o.userInfo = n.userInfo),
                    o.port || "mce_host" !== o.host || (o.port = n.port),
                    (o.host && "mce_host" !== o.host) || (o.host = n.host),
                    (o.source = "")),
                  i && (o.protocol = "");
              }
            };
          (ow.prototype = {
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
                ("mce_host" !== (e = new ow(e, { base_uri: this })).host &&
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
              return (e = new ow(e, { base_uri: this })).getURI(
                t && this.isSameOrigin(e)
              );
            },
            isSameOrigin: function(e) {
              if (this.host == e.host && this.protocol == e.protocol) {
                if (this.port == e.port) return !0;
                var t = rw[this.protocol];
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
                  ew(e, function(e) {
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
            (ow.parseDataUri = function(e) {
              var t, n;
              return (
                (e = decodeURIComponent(e).split(",")),
                (n = /data:([^;]+)/.exec(e[0])) && (t = n[1]),
                { type: t, data: e[1] }
              );
            }),
            (ow.getDocumentBaseUrl = function(e) {
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
          var iw = ci.DOM,
            aw = Xt.extend,
            uw = Xt.each,
            sw = Xt.resolve,
            cw = le.ie,
            lw = function(e, t, n) {
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
                return tf(Kl, i, r, o);
              })(r, e, o, n.defaultSettings, t)),
                (r.settings = t),
                (Ci.languageLoad = t.language_load),
                (Ci.baseURL = n.baseURL),
                (r.id = e),
                r.setDirty(!1),
                (r.plugins = {}),
                (r.documentBaseURI = new ow(t.document_base_url, {
                  base_uri: i
                })),
                (r.baseURI = i),
                (r.contentCSS = []),
                (r.contentStyles = []),
                (r.shortcuts = new Zx(r)),
                (r.loadedCSS = {}),
                (r.editorCommands = new Mx(r)),
                (r.suffix = n.suffix),
                (r.editorManager = n),
                (r.inline = t.inline),
                (r.buttons = {}),
                (r.menuItems = {}),
                t.cache_suffix &&
                  (le.cacheSuffix = t.cache_suffix.replace(/^[\?\&]+/, "")),
                !1 === t.override_viewport && (le.overrideViewPort = !1);
              var a,
                u,
                s,
                c,
                l,
                f,
                d,
                m,
                p = ((u = {}),
                (s = {}),
                (c = {}),
                (l = {}),
                (f = {}),
                (d = {}),
                {
                  addButton: (m = function(e, t) {
                    return function(n, r) {
                      return (e[n.toLowerCase()] = Mc({ type: t }, r));
                    };
                  })((a = {}), "button"),
                  addToggleButton: m(a, "togglebutton"),
                  addMenuButton: m(a, "menubutton"),
                  addSplitButton: m(a, "splitbutton"),
                  addMenuItem: m(u, "menuitem"),
                  addNestedMenuItem: m(u, "nestedmenuitem"),
                  addToggleMenuItem: m(u, "togglemenuitem"),
                  addAutocompleter: m(s, "autocompleter"),
                  addContextMenu: m(l, "contextmenu"),
                  addContextToolbar: m(f, "contexttoolbar"),
                  addContextForm: m(f, "contextform"),
                  addSidebar: m(d, "sidebar"),
                  addIcon: function(e, t) {
                    return (c[e.toLowerCase()] = t);
                  },
                  getAll: function() {
                    return {
                      buttons: a,
                      menuItems: u,
                      icons: c,
                      popups: s,
                      contextMenus: l,
                      contextToolbars: f,
                      sidebars: d
                    };
                  }
                });
              (r.ui = { registry: p }),
                n.fire("SetupEditor", { editor: r }),
                r.execCallback("setup", r),
                (r.$ = pn.overrideDefaults(function() {
                  return {
                    context: r.inline ? r.getBody() : r.getDoc(),
                    element: r.getBody()
                  };
                }));
            };
          (lw.prototype = {
            render: function() {
              QC(this);
            },
            focus: function(e) {
              Bl(this, e);
            },
            hasFocus: function() {
              return Al(this);
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
                    ((r = (r = o.replace(/\.\w+$/, "")) ? sw(r) : 0),
                    (o = sw(o)),
                    (this.callbackLookup = this.callbackLookup || {}),
                    (this.callbackLookup[e] = { func: o, scope: r })),
                  o.apply(r || this, Array.prototype.slice.call(arguments, 1))
                );
            },
            translate: function(e) {
              return bi.translate(e);
            },
            getParam: function(e, t, n) {
              return of(this, e, t, n);
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
                  : (iw.show(this.getContainer()), iw.hide(this.id)),
                this.load(),
                this.fire("show"));
            },
            hide: function() {
              var e = this.getDoc();
              this.hidden ||
                (cw && e && !this.inline && e.execCommand("SelectAll"),
                this.save(),
                this.inline
                  ? ((this.getBody().contentEditable = !1),
                    this === this.editorManager.focusedEditor &&
                      (this.editorManager.focusedEditor = null))
                  : (iw.hide(this.getContainer()),
                    iw.setStyle(this.id, "display", this.orgDisplay)),
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
                      (n = iw.getParent(r.id, "form")) &&
                        uw(n.elements, function(e) {
                          if (e.name === r.id) return (e.value = t), !1;
                        })),
                  (e.element = o = null),
                  !1 !== e.set_dirty && r.setDirty(!1),
                  t
                );
            },
            setContent: function(e, t) {
              return Dl(this, e, t);
            },
            getContent: function(e) {
              return (function(e, t) {
                return (
                  void 0 === t && (t = {}),
                  _.from(e.getBody()).fold(
                    o("tree" === t.format ? new zc("body", 11) : ""),
                    function(n) {
                      return Zc(e, t, n);
                    }
                  )
                );
              })(this, e);
            },
            insertContent: function(e, t) {
              t && (e = aw({ content: e }, t)),
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
                t !== nx(e) &&
                  (e.initialized
                    ? tx(e, "readonly" === t)
                    : e.on("init", function() {
                        tx(e, "readonly" === t);
                      }),
                  Fl(e, t));
              })(this, e);
            },
            getContainer: function() {
              return (
                this.container ||
                  (this.container = iw.get(
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
                this.targetElm || (this.targetElm = iw.get(this.id)),
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
                uw(o.select("table,a", e), function(e) {
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
              Hl(this);
            },
            destroy: function(e) {
              ql(this, e);
            },
            uploadImages: function(e) {
              return this.editorUpload.uploadImages(e);
            },
            _scanForImages: function() {
              return this.editorUpload.scanForImages();
            }
          }),
            aw(lw.prototype, Xx);
          var fw,
            dw,
            mw,
            pw = {
              isEditorUIElement: function(e) {
                return (
                  -1 !== e.className.toString().indexOf("tox-") ||
                  -1 !== e.className.toString().indexOf("mce-")
                );
              }
            },
            gw = function(e, t) {
              Xn.detect().browser.isIE()
                ? (function(e) {
                    e.on("focusout", function() {
                      wl.store(e);
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
                  })(t) || wl.store(e);
                });
            },
            hw = function(e) {
              var t = Bi(function() {
                wl.store(e);
              }, 0);
              e.inline &&
                (function(e, t) {
                  var n = function() {
                    t.throttle();
                  };
                  ci.DOM.bind(document, "mouseup", n),
                    e.on("remove", function() {
                      ci.DOM.unbind(document, "mouseup", n);
                    });
                })(e, t),
                e.on("init", function() {
                  gw(e, t);
                }),
                e.on("remove", function() {
                  t.cancel();
                });
            },
            vw = ci.DOM,
            bw = function(e) {
              return pw.isEditorUIElement(e);
            },
            yw = function(e, t) {
              var n = e ? e.settings.custom_ui_selector : "";
              return (
                null !==
                vw.getParent(t, function(t) {
                  return bw(t) || (!!n && e.dom.is(t, n));
                })
              );
            },
            Cw = function(e, t) {
              var n = t.editor;
              hw(n),
                n.on("focusin", function() {
                  var t = e.focusedEditor;
                  t !== this &&
                    (t && t.fire("blur", { focusedEditor: this }),
                    e.setActive(this),
                    (e.focusedEditor = this),
                    this.fire("focus", { blurredEditor: t }),
                    this.focus(!0));
                }),
                n.on("focusout", function() {
                  var t = this;
                  ge.setEditorTimeout(t, function() {
                    var n = e.focusedEditor;
                    yw(
                      t,
                      (function() {
                        try {
                          return document.activeElement;
                        } catch (e) {
                          return document.body;
                        }
                      })()
                    ) ||
                      n !== t ||
                      (t.fire("blur", { focusedEditor: null }),
                      (e.focusedEditor = null));
                  });
                }),
                fw ||
                  ((fw = function(t) {
                    var n,
                      r = e.activeEditor;
                    (n = t.target),
                      r &&
                        n.ownerDocument === document &&
                        (n === document.body ||
                          yw(r, n) ||
                          e.focusedEditor !== r ||
                          (r.fire("blur", { focusedEditor: null }),
                          (e.focusedEditor = null)));
                  }),
                  vw.bind(document, "focusin", fw));
            },
            xw = function(e, t) {
              e.focusedEditor === t.editor && (e.focusedEditor = null),
                e.activeEditor ||
                  (vw.unbind(document, "focusin", fw), (fw = null));
            },
            ww = function(e) {
              e.on("AddEditor", a(Cw, e)), e.on("RemoveEditor", a(xw, e));
            },
            Sw = ci.DOM,
            Ew = Xt.explode,
            Nw = Xt.each,
            kw = Xt.extend,
            Tw = 0,
            _w = !1,
            Bw = [],
            Aw = [],
            Rw = function(e) {
              var t = e.type;
              Nw(mw.get(), function(n) {
                switch (t) {
                  case "scroll":
                    n.fire("ScrollWindow", e);
                    break;
                  case "resize":
                    n.fire("ResizeWindow", e);
                }
              });
            },
            Ow = function(e) {
              e !== _w &&
                (e
                  ? pn(window).on("resize scroll", Rw)
                  : pn(window).off("resize scroll", Rw),
                (_w = e));
            },
            Dw = function(e) {
              var t = Aw;
              delete Bw[e.id];
              for (var n = 0; n < Bw.length; n++)
                if (Bw[n] === e) {
                  Bw.splice(n, 1);
                  break;
                }
              return (
                (Aw = V(Aw, function(t) {
                  return e !== t;
                })),
                mw.activeEditor === e &&
                  (mw.activeEditor = Aw.length > 0 ? Aw[0] : null),
                mw.focusedEditor === e && (mw.focusedEditor = null),
                t.length !== Aw.length
              );
            };
          (mw = {
            defaultSettings: {},
            $: pn,
            majorVersion: "5",
            minorVersion: "0.0",
            releaseDate: "2019-02-04",
            editors: Bw,
            i18n: bi,
            activeEditor: null,
            settings: {},
            setup: function() {
              var e,
                t,
                n,
                r,
                o = "";
              if (
                ((t = ow.getDocumentBaseUrl(document.location)),
                /^[^:]+:\/\/\/?[^\/]+\//.test(t) &&
                  ((t = t.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, "")),
                  /[\/\\]$/.test(t) || (t += "/")),
                (n = window.tinymce || window.tinyMCEPreInit))
              )
                (e = n.base || n.baseURL), (o = n.suffix);
              else {
                for (
                  var i = document.getElementsByTagName("script"), a = 0;
                  a < i.length;
                  a++
                ) {
                  var u = (r = i[a].src).substring(r.lastIndexOf("/"));
                  if (/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(r)) {
                    -1 !== u.indexOf(".min") && (o = ".min"),
                      (e = r.substring(0, r.lastIndexOf("/")));
                    break;
                  }
                }
                !e &&
                  document.currentScript &&
                  (-1 !== (r = document.currentScript.src).indexOf(".min") &&
                    (o = ".min"),
                  (e = r.substring(0, r.lastIndexOf("/"))));
              }
              (this.baseURL = new ow(t).toAbsolute(e)),
                (this.documentBaseURL = t),
                (this.baseURI = new ow(this.baseURL)),
                (this.suffix = o),
                ww(this);
            },
            overrideDefaults: function(e) {
              var t, n;
              (t = e.base_url) &&
                ((this.baseURL = new ow(this.documentBaseURL).toAbsolute(
                  t.replace(/\/+$/, "")
                )),
                (this.baseURI = new ow(this.baseURL))),
                (n = e.suffix),
                e.suffix && (this.suffix = n),
                (this.defaultSettings = e);
              var r = e.plugin_base_urls;
              for (var o in r) Ci.PluginManager.urls[o] = r[o];
            },
            init: function(e) {
              var t,
                n,
                r = this;
              n = Xt.makeMap(
                "area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option table tbody tfoot thead tr th td script noscript style textarea video audio iframe object menu",
                " "
              );
              var o = function(e) {
                  var t = e.id;
                  return (
                    t ||
                      ((t =
                        (t = e.name) && !Sw.get(t) ? e.name : Sw.uniqueId()),
                      e.setAttribute("id", t)),
                    t
                  );
                },
                i = function(e, t) {
                  return t.constructor === RegExp
                    ? t.test(e.className)
                    : Sw.hasClass(e, t);
                },
                a = function(e) {
                  t = e;
                },
                u = function() {
                  var t,
                    s = 0,
                    c = [],
                    l = function(e, n, o) {
                      var i = new lw(e, n, r);
                      c.push(i),
                        i.on("init", function() {
                          ++s === t.length && a(c);
                        }),
                        (i.targetElm = i.targetElm || o),
                        i.render();
                    };
                  Sw.unbind(window, "ready", u),
                    (function(t) {
                      var n = e[t];
                      n && n.apply(r, Array.prototype.slice.call(arguments, 2));
                    })("onpageload"),
                    (t = pn.unique(
                      (function(e) {
                        var t,
                          n = [];
                        if (le.ie && le.ie < 11)
                          return (
                            xf.initError(
                              "TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tinymce.com/docs/get-started/system-requirements/"
                            ),
                            []
                          );
                        if (e.types)
                          return (
                            Nw(e.types, function(e) {
                              n = n.concat(Sw.select(e.selector));
                            }),
                            n
                          );
                        if (e.selector) return Sw.select(e.selector);
                        if (e.target) return [e.target];
                        switch (e.mode) {
                          case "exact":
                            (t = e.elements || "").length > 0 &&
                              Nw(Ew(t), function(e) {
                                var t;
                                (t = Sw.get(e))
                                  ? n.push(t)
                                  : Nw(document.forms, function(t) {
                                      Nw(t.elements, function(t) {
                                        t.name === e &&
                                          ((e = "mce_editor_" + Tw++),
                                          Sw.setAttrib(t, "id", e),
                                          n.push(t));
                                      });
                                    });
                              });
                            break;
                          case "textareas":
                          case "specific_textareas":
                            Nw(Sw.select("textarea"), function(t) {
                              (e.editor_deselector &&
                                i(t, e.editor_deselector)) ||
                                (e.editor_selector &&
                                  !i(t, e.editor_selector)) ||
                                n.push(t);
                            });
                        }
                        return n;
                      })(e)
                    )),
                    e.types
                      ? Nw(e.types, function(n) {
                          Xt.each(t, function(t) {
                            return (
                              !Sw.is(t, n.selector) ||
                              (l(o(t), kw({}, e, n), t), !1)
                            );
                          });
                        })
                      : (Xt.each(t, function(e) {
                          var t;
                          (t = r.get(e.id)) &&
                            t.initialized &&
                            !(t.getContainer() || t.getBody()).parentNode &&
                            (Dw(t),
                            t.unbindAllNativeEvents(),
                            t.destroy(!0),
                            (t.removed = !0),
                            (t = null));
                        }),
                        0 ===
                        (t = Xt.grep(t, function(e) {
                          return !r.get(e.id);
                        })).length
                          ? a([])
                          : Nw(t, function(t) {
                              !(function(e, t) {
                                return e.inline && t.tagName.toLowerCase() in n;
                              })(e, t)
                                ? l(o(t), e, t)
                                : xf.initError(
                                    "Could not initialize inline editor on invalid inline target element",
                                    t
                                  );
                            }));
                };
              return (
                (r.settings = e),
                Sw.bind(window, "ready", u),
                new fe(function(e) {
                  t
                    ? e(t)
                    : (a = function(t) {
                        e(t);
                      });
                })
              );
            },
            get: function(e) {
              return 0 === arguments.length
                ? Aw.slice(0)
                : A(e)
                ? q(Aw, function(t) {
                    return t.id === e;
                  }).getOr(null)
                : L(e) && Aw[e]
                ? Aw[e]
                : null;
            },
            add: function(e) {
              var t = this;
              return Bw[e.id] === e
                ? e
                : (null === t.get(e.id) &&
                    ("length" !== e.id && (Bw[e.id] = e),
                    Bw.push(e),
                    Aw.push(e)),
                  Ow(!0),
                  (t.activeEditor = e),
                  t.fire("AddEditor", { editor: e }),
                  dw ||
                    ((dw = function() {
                      t.fire("BeforeUnload");
                    }),
                    Sw.bind(window, "beforeunload", dw)),
                  e);
            },
            createEditor: function(e, t) {
              return this.add(new lw(e, t, this));
            },
            remove: function(e) {
              var t,
                n,
                r = this;
              if (e) {
                if (!A(e))
                  return (
                    (n = e),
                    D(r.get(n.id))
                      ? null
                      : (Dw(n) && r.fire("RemoveEditor", { editor: n }),
                        0 === Aw.length &&
                          Sw.unbind(window, "beforeunload", dw),
                        n.remove(),
                        Ow(Aw.length > 0),
                        n)
                  );
                Nw(Sw.select(e), function(e) {
                  (n = r.get(e.id)) && r.remove(n);
                });
              } else for (t = Aw.length - 1; t >= 0; t--) r.remove(Aw[t]);
            },
            execCommand: function(e, t, n) {
              var r = this.get(n);
              switch (e) {
                case "mceAddEditor":
                  return (
                    this.get(n) || new lw(n, this.settings, this).render(), !0
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
              Nw(Aw, function(e) {
                e.save();
              });
            },
            addI18n: function(e, t) {
              bi.add(e, t);
            },
            translate: function(e) {
              return bi.translate(e);
            },
            setActive: function(e) {
              var t = this.activeEditor;
              this.activeEditor !== e &&
                (t && t.fire("deactivate", { relatedTarget: e }),
                e.fire("activate", { relatedTarget: t })),
                (this.activeEditor = e);
            }
          }),
            kw(mw, Vx),
            mw.setup();
          var Pw = mw;
          function Iw(e) {
            return {
              walk: function(t, n) {
                return Tc.walk(e, t, n);
              },
              split: hm.split,
              normalize: function(t) {
                return nh.normalize(e, t).fold(o(!1), function(e) {
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
            (e.compareRanges = Gf.isEq),
              (e.getCaretRangeFromPoint = bg.fromPoint),
              (e.getSelectedNode = Ua),
              (e.getNode = ja);
          })(Iw || (Iw = {}));
          var Lw,
            Mw,
            Fw = Iw,
            Uw = Math.min,
            jw = Math.max,
            zw = Math.round,
            Vw = function(e, t, n) {
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
                "c" === n[0] && (o += zw(s / 2)),
                "c" === n[1] && (r += zw(u / 2)),
                "b" === n[3] && (o -= a),
                "r" === n[4] && (r -= i),
                "c" === n[3] && (o -= zw(a / 2)),
                "c" === n[4] && (r -= zw(i / 2)),
                Hw(r, o, i, a)
              );
            },
            Hw = function(e, t, n, r) {
              return { x: e, y: t, w: n, h: r };
            },
            qw = {
              inflate: function(e, t, n) {
                return Hw(e.x - t, e.y - n, e.w + 2 * t, e.h + 2 * n);
              },
              relativePosition: Vw,
              findBestRelativePosition: function(e, t, n, r) {
                var o, i;
                for (i = 0; i < r.length; i++)
                  if (
                    (o = Vw(e, t, r[i])).x >= n.x &&
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
                  (n = jw(e.x, t.x)),
                  (r = jw(e.y, t.y)),
                  (o = Uw(e.x + e.w, t.x + t.w)),
                  (i = Uw(e.y + e.h, t.y + t.h)),
                  o - n < 0 || i - r < 0 ? null : Hw(n, r, o - n, i - r)
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
                  (r = jw(0, t.x - u)),
                  (o = jw(0, t.y - s)),
                  (i = jw(0, c - f)),
                  (a = jw(0, l - d)),
                  (u += r),
                  (s += o),
                  n && ((c += r), (l += o), (u -= i), (s -= a)),
                  Hw(u, s, (c -= i) - u, (l -= a) - s)
                );
              },
              create: Hw,
              fromClientRect: function(e) {
                return Hw(e.left, e.top, e.width, e.height);
              }
            },
            $w = Xt.each,
            Ww = Xt.extend,
            Kw = function() {};
          Kw.extend = Lw = function(e) {
            var t,
              n,
              r,
              o = this.prototype,
              i = function() {
                var e, t, n;
                if (
                  !Mw &&
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
            for (n in ((Mw = !0),
            (t = new this()),
            (Mw = !1),
            e.Mixins &&
              ($w(e.Mixins, function(t) {
                for (var n in t) "init" !== n && (e[n] = t[n]);
              }),
              o.Mixins && (e.Mixins = o.Mixins.concat(e.Mixins))),
            e.Methods &&
              $w(e.Methods.split(","), function(t) {
                e[t] = a;
              }),
            e.Properties &&
              $w(e.Properties.split(","), function(t) {
                var n = "_" + t;
                e[t] = function(e) {
                  return void 0 !== e ? ((this[n] = e), this) : this[n];
                };
              }),
            e.Statics &&
              $w(e.Statics, function(e, t) {
                i[t] = e;
              }),
            e.Defaults &&
              o.Defaults &&
              (e.Defaults = Ww({}, o.Defaults, e.Defaults)),
            e))
              "function" == typeof (r = e[n]) && o[n]
                ? (t[n] = u(n, r))
                : (t[n] = r);
            return (i.prototype = t), (i.constructor = i), (i.extend = Lw), i;
          };
          var Xw = Math.min,
            Yw = Math.max,
            Gw = Math.round,
            Jw = function(e, t) {
              var n, r, o, i;
              if (((t = t || '"'), null === e)) return "null";
              if ("string" == (o = typeof e))
                return (
                  (r = "\bb\tt\nn\ff\rr\"\"''\\\\"),
                  t +
                    e.replace(/([\u0080-\uFFFF\x00-\x1f\"\'\\])/g, function(
                      e,
                      o
                    ) {
                      return '"' === t && "'" === e
                        ? e
                        : (n = r.indexOf(o)) + 1
                        ? "\\" + r.charAt(n + 1)
                        : ((e = o.charCodeAt().toString(16)),
                          "\\u" + "0000".substring(e.length) + e);
                    }) +
                    t
                );
              if ("object" === o) {
                if (
                  e.hasOwnProperty &&
                  "[object Array]" === Object.prototype.toString.call(e)
                ) {
                  for (n = 0, r = "["; n < e.length; n++)
                    r += (n > 0 ? "," : "") + Jw(e[n], t);
                  return r + "]";
                }
                for (i in ((r = "{"), e))
                  e.hasOwnProperty(i) &&
                    (r +=
                      "function" != typeof e[i]
                        ? (r.length > 1 ? "," + t : t) +
                          i +
                          t +
                          ":" +
                          Jw(e[i], t)
                        : "");
                return r + "}";
              }
              return "" + e;
            },
            Qw = {
              serialize: Jw,
              parse: function(e) {
                try {
                  return JSON.parse(e);
                } catch (e) {}
              }
            },
            Zw = {
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
            eS = {
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
                  eS.fire("beforeInitialize", { settings: e }),
                  (t = Nf()))
                ) {
                  if (
                    (t.overrideMimeType && t.overrideMimeType(e.content_type),
                    t.open(e.type || (e.data ? "POST" : "GET"), e.url, e.async),
                    e.crossDomain && (t.withCredentials = !0),
                    e.content_type &&
                      t.setRequestHeader("Content-Type", e.content_type),
                    e.requestheaders &&
                      Xt.each(e.requestheaders, function(e) {
                        t.setRequestHeader(e.key, e.value);
                      }),
                    t.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    (t = eS.fire("beforeSend", { xhr: t, settings: e })
                      .xhr).send(e.data),
                    !e.async)
                  )
                    return r();
                  setTimeout(r, 10);
                }
              }
            };
          Xt.extend(eS, Vx);
          var tS,
            nS = Xt.extend,
            rS = function(e) {
              (this.settings = nS({}, e)), (this.count = 0);
            };
          (rS.sendRPC = function(e) {
            return new rS().send(e);
          }),
            (rS.prototype = {
              send: function(e) {
                var t = e.error,
                  n = e.success;
                ((e = nS(this.settings, e)).success = function(r, o) {
                  void 0 === (r = Qw.parse(r)) &&
                    (r = { error: "JSON Parse error." }),
                    r.error
                      ? t.call(e.error_scope || e.scope, r.error, o)
                      : n.call(e.success_scope || e.scope, r.result);
                }),
                  (e.error = function(n, r) {
                    t && t.call(e.error_scope || e.scope, n, r);
                  }),
                  (e.data = Qw.serialize({
                    id: e.id || "c" + this.count++,
                    method: e.method,
                    params: e.params
                  })),
                  (e.content_type = "application/json"),
                  eS.send(e);
              }
            });
          try {
            tS = window.localStorage;
          } catch (e) {
            tS = (function() {
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
          var oS = Pw,
            iS = {
              geom: { Rect: qw },
              util: {
                Promise: fe,
                Delay: ge,
                Tools: Xt,
                VK: Md,
                URI: ow,
                Class: Kw,
                EventDispatcher: Ux,
                Observable: Vx,
                I18n: bi,
                XHR: eS,
                JSON: Qw,
                JSONRequest: rS,
                JSONP: Zw,
                LocalStorage: tS,
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
                                  (t = Yw(0, Xw(t, 1))),
                                  (i = Yw(0, Xw(i, 1))),
                                  0 !== t)
                                ) {
                                  switch (
                                    ((a = e / 60),
                                    (s =
                                      (u = i * t) *
                                      (1 - Math.abs((a % 2) - 1))),
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
                                  (n = Gw(255 * (n + c))),
                                    (r = Gw(255 * (r + c))),
                                    (o = Gw(255 * (o + c)));
                                } else n = r = o = Gw(255 * i);
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
                          (i = Xw((e /= 255), Xw((t /= 255), (n /= 255)))) ===
                          (a = Yw(e, Yw(t, n)))
                            ? { h: 0, s: 0, v: 100 * (o = i) }
                            : ((r = (a - i) / a),
                              (o = a),
                              {
                                h: Gw(
                                  60 *
                                    ((e === i ? 3 : n === i ? 1 : 5) -
                                      (e === i
                                        ? t - n
                                        : n === i
                                        ? e - t
                                        : n - e) /
                                        (a - i))
                                ),
                                s: Gw(100 * r),
                                v: Gw(100 * o)
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
                EventUtils: Ee,
                Sizzle: Nt,
                DomQuery: pn,
                TreeWalker: Qr,
                DOMUtils: ci,
                ScriptLoader: pi,
                RangeUtils: Fw,
                Serializer: ug,
                ControlSelection: mg,
                BookmarkManager: lg,
                Selection: dh,
                Event: Ee.Event
              },
              html: {
                Styles: Zo,
                Entities: jo,
                Node: zc,
                Schema: Jo,
                SaxParser: Xc,
                DomParser: ng,
                Writer: tl,
                Serializer: nl
              },
              Env: le,
              AddOnManager: Ci,
              Annotator: Pc,
              Formatter: jp,
              UndoManager: om,
              EditorCommands: Mx,
              WindowManager: pf,
              NotificationManager: mf,
              EditorObservable: Xx,
              Shortcuts: Zx,
              Editor: lw,
              FocusManager: pw,
              EditorManager: Pw,
              DOM: ci.DOM,
              ScriptLoader: pi.ScriptLoader,
              PluginManager: Ci.PluginManager,
              ThemeManager: Ci.ThemeManager,
              IconManager: wf,
              trim: Xt.trim,
              isArray: Xt.isArray,
              is: Xt.is,
              toArray: Xt.toArray,
              makeMap: Xt.makeMap,
              each: Xt.each,
              map: Xt.map,
              grep: Xt.grep,
              inArray: Xt.inArray,
              extend: Xt.extend,
              create: Xt.create,
              walk: Xt.walk,
              createNS: Xt.createNS,
              resolve: Xt.resolve,
              explode: Xt.explode,
              _addCacheSuffix: Xt._addCacheSuffix,
              isOpera: le.opera,
              isWebKit: le.webkit,
              isIE: le.ie,
              isGecko: le.gecko,
              isMac: le.mac
            },
            aS = (oS = Xt.extend(oS, iS));
          !(function(e) {
            (window.tinymce = e), (window.tinyMCE = e);
          })(aS),
            (function(t) {
              try {
                e.exports = t;
              } catch (e) {}
            })(aS);
        })();
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
              c = {},
              l = !1,
              f = e.document,
              d = Object.getPrototypeOf && Object.getPrototypeOf(e);
            (d = d && d.setTimeout ? d : e),
              "[object process]" === {}.toString.call(e.process)
                ? (r = function(e) {
                    t.nextTick(function() {
                      p(e);
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
                      p(e.data);
                    }),
                    (r = function(e) {
                      i.port2.postMessage(e);
                    }))
                  : f && "onreadystatechange" in f.createElement("script")
                  ? ((o = f.documentElement),
                    (r = function(e) {
                      var t = f.createElement("script");
                      (t.onreadystatechange = function() {
                        p(e),
                          (t.onreadystatechange = null),
                          o.removeChild(t),
                          (t = null);
                      }),
                        o.appendChild(t);
                    }))
                  : (r = function(e) {
                      setTimeout(p, 0, e);
                    })
                : ((a = "setImmediate$" + Math.random() + "$"),
                  (u = function(t) {
                    t.source === e &&
                      "string" == typeof t.data &&
                      0 === t.data.indexOf(a) &&
                      p(+t.data.slice(a.length));
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
                return (c[s] = o), r(s), s++;
              }),
              (d.clearImmediate = m);
          }
          function m(e) {
            delete c[e];
          }
          function p(e) {
            if (l) setTimeout(p, 0, e);
            else {
              var t = c[e];
              if (t) {
                l = !0;
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
                  m(e), (l = !1);
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
        c = [],
        l = !1,
        f = -1;
      function d() {
        l &&
          s &&
          ((l = !1), s.length ? (c = s.concat(c)) : (f = -1), c.length && m());
      }
      function m() {
        if (!l) {
          var e = u(d);
          l = !0;
          for (var t = c.length; t; ) {
            for (s = c, c = []; ++f < t; ) s && s[f].run();
            (f = -1), (t = c.length);
          }
          (s = null),
            (l = !1),
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
      function p(e, t) {
        (this.fun = e), (this.array = t);
      }
      function g() {}
      (o.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        c.push(new p(e, t)), 1 !== c.length || l || u(m);
      }),
        (p.prototype.run = function() {
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
