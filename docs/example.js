!(function(e) {
  function t(t) {
    for (var n, r, i = t[0], a = t[1], c = 0, u = []; c < i.length; c++)
      (r = i[c]), o[r] && u.push(o[r][0]), (o[r] = 0);
    for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    for (l && l(t); u.length; ) u.shift()();
  }
  var n = {},
    o = { 0: 0 };
  function r(t) {
    if (n[t]) return n[t].exports;
    var o = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.e = function(e) {
    var t = [],
      n = o[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var i = new Promise(function(t, r) {
          n = o[e] = [t, r];
        });
        t.push((n[2] = i));
        var a,
          c = document.createElement("script");
        (c.charset = "utf-8"),
          (c.timeout = 120),
          r.nc && c.setAttribute("nonce", r.nc),
          (c.src = (function(e) {
            return r.p + "" + e + ".bundle.js";
          })(e)),
          (a = function(t) {
            (c.onerror = c.onload = null), clearTimeout(l);
            var n = o[e];
            if (0 !== n) {
              if (n) {
                var r = t && ("load" === t.type ? "missing" : t.type),
                  i = t && t.target && t.target.src,
                  a = new Error(
                    "Loading chunk " + e + " failed.\n(" + r + ": " + i + ")"
                  );
                (a.type = r), (a.request = i), n[1](a);
              }
              o[e] = void 0;
            }
          });
        var l = setTimeout(function() {
          a({ type: "timeout", target: c });
        }, 12e4);
        (c.onerror = c.onload = a), document.head.appendChild(c);
      }
    return Promise.all(t);
  }),
    (r.m = e),
    (r.c = n),
    (r.d = function(e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function(e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    (r.oe = function(e) {
      throw (console.error(e), e);
    });
  var i = (window.webpackJsonp = window.webpackJsonp || []),
    a = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var c = 0; c < i.length; c++) t(i[c]);
  var l = a;
  r((r.s = 2));
})([
  function(e, t) {
    e.exports = Vue;
  },
  function(e, t) {
    e.exports = UCloudUFile;
  },
  function(e, t, n) {
    "use strict";
    n.r(t);
    var o = n(0),
      r = n.n(o),
      i = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { attrs: { id: "app" } },
          [
            n("h1", [e._v("上传的mock演示，response永远是一样的数据")]),
            e._v(" "),
            n("el-tinymce", {
              attrs: {
                content: e.content,
                "upload-props": { tip: "tip" },
                url: "https://cdn.jsdelivr.net/npm/tinymce@5.0.3"
              },
              on: {
                "update:content": function(t) {
                  e.content = t;
                },
                "content-change": e.contentChange
              }
            }),
            e._v(" "),
            n("el-tinymce", {
              attrs: {
                content: e.content,
                url: "https://cdn.jsdelivr.net/npm/tinymce@5.0.3"
              },
              on: {
                "update:content": function(t) {
                  e.content = t;
                }
              }
            }),
            e._v(" "),
            n("el-tinymce", {
              attrs: {
                i18n: e.i18n,
                list: e.list,
                "upload-props": e.uploadProps,
                content: e.content,
                url: "https://cdn.jsdelivr.net/npm/tinymce@5.0.3"
              },
              on: {
                "update:content": function(t) {
                  e.content = t;
                }
              }
            })
          ],
          1
        );
      };
    i._withStripped = !0;
    var a = n(1),
      c = new (n.n(a)).a(
        "example-ucloud",
        "https://private-87040-publicexample.apiary-mock.com/upload",
        "https://private-87040-publicexample.apiary-mock.com/upload/token"
      );
    function l(e) {
      var t = e.file;
      if ("[object File]" !== Object.prototype.toString.call(t))
        throw new Error("file参数必须为File数据类型");
      return new Promise(function(e, n) {
        c.PREFIX = "example/".concat(t.type);
        c.hitSliceUpload(
          t,
          function(n) {
            "[object Object]" !== Object.prototype.toString.call(n) &&
              (n = { Key: t.name }),
              (n.url = "http://dummyimage.com/200x100/50B347/FFF&text=".concat(
                n.Key
              )),
              console.log("success", n),
              e({ data: n });
          },
          function(e) {
            n(new Error("上传失败"));
          },
          function(e) {
            "[object Object]" !== Object.prototype.toString.call(e) &&
              (e = { value: 0 }),
              console.log("progress", e),
              (e.percent = 100 * e.value);
          }
        );
      });
    }
    var u = { resource: "Resource", btn: { reset: "reset", submit: "submit" } },
      s = [
        {
          type: "image",
          accept: "image/*",
          title: "Picture",
          dialog: {
            activeName: "image0",
            tabs: [
              {
                title: "Local Picture",
                desc:
                  "Support png, jpg, gif, svg and webp, size cannot exceed 10M",
                upload: { size: 10240 },
                formName: "image0",
                formData: { content: "" },
                formRules: {
                  content: [
                    {
                      required: !0,
                      message: "Please upload pictures",
                      trigger: "blur"
                    }
                  ]
                }
              },
              {
                title: "External Link Picture",
                desc: "Support png, jpg, gif, svg and webp",
                formName: "image1",
                formData: { content: "" },
                formRules: {
                  content: [
                    {
                      required: !0,
                      message: "Please enter valid picture link",
                      trigger: "blur",
                      pattern: /\.(png|jpe?g|gif|svg|webp)$/
                    }
                  ]
                }
              }
            ],
            template: function(e) {
              return '<p class="el-tinymce-resource el-tinymce-image" style="text-align: center;" ><img src="'.concat(
                e,
                '"></p>'
              );
            }
          }
        },
        {
          type: "audio",
          accept: ".mp3,.ogg,.wav,.flac,.aac",
          title: "Audio",
          dialog: {
            activeName: "audio0",
            tabs: [
              {
                title: "Local Audio",
                desc:
                  "Support mp3, ogg, wav, flac and aac, size can not exceed 100M",
                upload: { size: 102400 },
                formName: "audio0",
                formData: { content: "" },
                formRules: {
                  content: [
                    {
                      required: !0,
                      message: "Please upload audio",
                      trigger: "blur"
                    }
                  ]
                }
              },
              {
                title: "External Link Audio",
                desc: "Support mp3, ogg, wav, flac and aac",
                formName: "audio1",
                formData: { content: "" },
                formRules: {
                  content: [
                    {
                      required: !0,
                      message: "Please enter valid audio link",
                      trigger: "blur",
                      pattern: /\.(mp3|ogg|wav|flac|aac)$/
                    }
                  ]
                }
              }
            ],
            template: function(e) {
              return '<p class="el-tinymce-resource el-tinymce-audio" style="text-align: center;" ><audio src="'.concat(
                e,
                '" controls></audio></p>'
              );
            }
          }
        },
        {
          type: "video",
          accept: ".mp4,.webm",
          title: "Video",
          dialog: {
            activeName: "video0",
            tabs: [
              {
                title: "Local Video",
                desc: "Support mp4 and webm , size can not exceed 1G",
                upload: { size: 1048576 },
                formName: "video0",
                formData: { content: "" },
                formRules: {
                  content: [
                    {
                      required: !0,
                      message: "Please upload video",
                      trigger: "blur"
                    }
                  ]
                }
              },
              {
                title: "External Link Video",
                desc:
                  "Support mp4 and webm links or third-party websites to share video iframe code",
                formName: "video1",
                formData: { content: "" },
                formRules: {
                  content: [
                    {
                      required: !0,
                      message: "Please enter valid video link or code",
                      trigger: "blur",
                      pattern: /\.(mp4|webm)|<\/iframe>$/
                    }
                  ]
                }
              }
            ],
            template: function(e) {
              return (
                /\.(mp4|webm)$/.test(e) &&
                  (e = '<video src="'.concat(e, '" controls></video>')),
                '<p class="el-tinymce-resource el-tinymce-video" style="text-align: center;" >'.concat(
                  e,
                  "</p>"
                )
              );
            }
          }
        }
      ],
      p = { placeholder: "File link" };
    var d = (function(e, t, n, o, r, i, a, c) {
      var l,
        u = "function" == typeof e ? e.options : e;
      if (
        (t && ((u.render = t), (u.staticRenderFns = n), (u._compiled = !0)),
        o && (u.functional = !0),
        i && (u._scopeId = "data-v-" + i),
        a
          ? ((l = function(e) {
              (e =
                e ||
                (this.$vnode && this.$vnode.ssrContext) ||
                (this.parent &&
                  this.parent.$vnode &&
                  this.parent.$vnode.ssrContext)) ||
                "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                (e = __VUE_SSR_CONTEXT__),
                r && r.call(this, e),
                e && e._registeredComponents && e._registeredComponents.add(a);
            }),
            (u._ssrRegister = l))
          : r &&
            (l = c
              ? function() {
                  r.call(this, this.$root.$options.shadowRoot);
                }
              : r),
        l)
      )
        if (u.functional) {
          u._injectStyles = l;
          var s = u.render;
          u.render = function(e, t) {
            return l.call(t), s(e, t);
          };
        } else {
          var p = u.beforeCreate;
          u.beforeCreate = p ? [].concat(p, l) : [l];
        }
      return { exports: e, options: u };
    })(
      {
        name: "App",
        components: {
          ElTinymce: function() {
            return Promise.all([n.e(1), n.e(2)])
              .then(n.t.bind(null, 14, 7))
              .then(function(e) {
                return (
                  Object.assign(e.props.upload, { required: !1, default: l }),
                  Promise.resolve(e)
                );
              });
          }
        },
        data: function() {
          return { i18n: u, list: s, uploadProps: p, content: "" };
        },
        methods: {
          contentChange: function(e) {
            console.log(e, "contentChange");
          }
        }
      },
      i,
      [],
      !1,
      null,
      null,
      null
    );
    d.options.__file = "example/components/App.vue";
    var m = d.exports;
    new r.a({
      el: "#app",
      render: function(e) {
        return e(m);
      }
    });
  },
  function(e, t) {
    e.exports = ELEMENT;
  }
]);
