!(function(e) {
  function t(t) {
    for (var n, r, c = t[0], a = t[1], i = 0, s = []; i < c.length; i++)
      (r = c[i]), o[r] && s.push(o[r][0]), (o[r] = 0);
    for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    for (l && l(t); s.length; ) s.shift()();
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
        var c = new Promise(function(t, r) {
          n = o[e] = [t, r];
        });
        t.push((n[2] = c));
        var a,
          i = document.createElement("script");
        (i.charset = "utf-8"),
          (i.timeout = 120),
          r.nc && i.setAttribute("nonce", r.nc),
          (i.src = (function(e) {
            return r.p + "" + e + ".bundle.js";
          })(e)),
          (a = function(t) {
            (i.onerror = i.onload = null), clearTimeout(l);
            var n = o[e];
            if (0 !== n) {
              if (n) {
                var r = t && ("load" === t.type ? "missing" : t.type),
                  c = t && t.target && t.target.src,
                  a = new Error(
                    "Loading chunk " + e + " failed.\n(" + r + ": " + c + ")"
                  );
                (a.type = r), (a.request = c), n[1](a);
              }
              o[e] = void 0;
            }
          });
        var l = setTimeout(function() {
          a({ type: "timeout", target: i });
        }, 12e4);
        (i.onerror = i.onload = a), document.head.appendChild(i);
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
  var c = (window.webpackJsonp = window.webpackJsonp || []),
    a = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var i = 0; i < c.length; i++) t(c[i]);
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
      c = function() {
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
              attrs: { content: e.content },
              on: {
                "update:content": function(t) {
                  e.content = t;
                },
                "content-change": e.contentChange
              }
            }),
            e._v(" "),
            n("el-tinymce", {
              attrs: { content: e.content },
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
                content: e.content,
                url: "https://unpkg.com/tinymce@~5"
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
    c._withStripped = !0;
    var a = n(1),
      i = new (n.n(a)).a(
        "example-ucloud",
        "https://private-87040-publicexample.apiary-mock.com/upload",
        "https://private-87040-publicexample.apiary-mock.com/upload/token"
      );
    function l(e) {
      var t = e.file;
      if ("[object File]" !== Object.prototype.toString.call(t))
        throw new Error("file参数必须为File数据类型");
      return new Promise(function(e, n) {
        i.PREFIX = "example/".concat(t.type);
        i.hitSliceUpload(
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
    var s = { resource: "Resource", btn: { reset: "reset", submit: "submit" } },
      u = [
        {
          type: "image",
          title: "图片",
          dialog: {
            activeName: "image0",
            tabs: [
              {
                title: "本地图片",
                desc: "支持png、jpg、gif、svg、webp，大小不能超过10M",
                uploadProps: {
                  accept: "image/*",
                  size: 10240,
                  placeholder: "图片链接地址"
                },
                formName: "image0",
                formData: { content: "" },
                formRules: {
                  content: [
                    { required: !0, message: "请上传图片", trigger: "blur" }
                  ]
                }
              },
              {
                title: "外链图片",
                desc: "支持png、jpg、gif、svg、webp",
                formName: "image1",
                formData: { content: "" },
                formRules: {
                  content: [
                    {
                      required: !0,
                      message: "请输入有效图片链接",
                      trigger: "blur",
                      pattern: /\.(png|jpe?g|gif|svg|webp)$/
                    }
                  ]
                }
              }
            ],
            template: function(e) {
              return '<p class="el-tinymce-resource el-tinymce-image" style="text-align: center;" ><img src="'.concat(
                e.content,
                '"></p>'
              );
            }
          }
        },
        {
          type: "audio",
          title: "音频",
          dialog: {
            activeName: "audio0",
            tabs: [
              {
                title: "本地音频",
                desc: "支持mp3、ogg、wav、flac、aac，大小不能超过100M",
                uploadProps: {
                  accept: ".mp3,.ogg,.wav,.flac,.aac",
                  size: 102400,
                  placeholder: "音频链接地址"
                },
                formName: "audio0",
                formData: { content: "" },
                formRules: {
                  content: [
                    { required: !0, message: "请上传音频", trigger: "blur" }
                  ]
                }
              },
              {
                title: "外链音频",
                desc: "支持mp3、ogg、wav、flac、aac",
                formName: "audio1",
                formData: { content: "" },
                formRules: {
                  content: [
                    {
                      required: !0,
                      message: "请输入有效音频链接",
                      trigger: "blur",
                      pattern: /\.(mp3|ogg|wav|flac|aac)$/
                    }
                  ]
                }
              }
            ],
            template: function(e) {
              return '<p class="el-tinymce-resource el-tinymce-audio" style="text-align: center;" ><audio src="'.concat(
                e.content,
                '" controls></audio></p>'
              );
            }
          }
        },
        {
          type: "video",
          title: "视频",
          dialog: {
            activeName: "video0",
            poster: {
              desc: "支持png、jpg、gif、svg、webp，大小不能超过10M",
              uploadProps: {
                accept: "image/*",
                size: 10240,
                placeholder: "视频封面图片链接地址"
              }
            },
            tabs: [
              {
                title: "本地视频",
                desc: "支持mp4、webm，大小不能超过1G",
                uploadProps: {
                  accept: ".mp4,.webm",
                  size: 1048576,
                  placeholder: "视频链接地址"
                },
                formName: "video0",
                formData: { content: "", poster: "" },
                formRules: {
                  content: [
                    { required: !0, message: "请上传视频", trigger: "blur" }
                  ]
                }
              },
              {
                title: "外链视频",
                desc: "支持mp4、webm链接和第三方网站分享视频iframe代码",
                formName: "video1",
                formData: { content: "", poster: "" },
                formRules: {
                  content: [
                    {
                      required: !0,
                      message: "请输入有效视频链接或代码",
                      trigger: "blur",
                      pattern: /\.(mp4|webm)|<\/iframe>$/
                    }
                  ]
                }
              }
            ],
            template: function(e) {
              return (
                /\.(mp4|webm)$/.test(e.content) &&
                  (e.content = '<video controls src="'
                    .concat(e.content, '" poster="')
                    .concat(e.poster, '"></video>')),
                '<p class="el-tinymce-resource el-tinymce-video" style="text-align: center;" >'.concat(
                  e.content,
                  "</p>"
                )
              );
            }
          }
        }
      ],
      p = { placeholder: "File link" };
    var m = (function(e, t, n, o, r, c, a, i) {
      var l,
        s = "function" == typeof e ? e.options : e;
      if (
        (t && ((s.render = t), (s.staticRenderFns = n), (s._compiled = !0)),
        o && (s.functional = !0),
        c && (s._scopeId = "data-v-" + c),
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
            (s._ssrRegister = l))
          : r &&
            (l = i
              ? function() {
                  r.call(this, this.$root.$options.shadowRoot);
                }
              : r),
        l)
      )
        if (s.functional) {
          s._injectStyles = l;
          var u = s.render;
          s.render = function(e, t) {
            return l.call(t), u(e, t);
          };
        } else {
          var p = s.beforeCreate;
          s.beforeCreate = p ? [].concat(p, l) : [l];
        }
      return { exports: e, options: s };
    })(
      {
        name: "App",
        components: {
          ElTinymce: function() {
            return Promise.all([n.e(1), n.e(2)])
              .then(n.t.bind(null, 10, 7))
              .then(function(e) {
                return (
                  Object.assign(e.props.upload, { required: !1, default: l }),
                  Promise.resolve(e)
                );
              });
          }
        },
        data: function() {
          return { i18n: s, list: u, uploadProps: p, content: "" };
        },
        methods: {
          contentChange: function(e) {
            console.log(e, "contentChange");
          }
        }
      },
      c,
      [],
      !1,
      null,
      null,
      null
    );
    m.options.__file = "example/components/App.vue";
    var f = m.exports;
    new r.a({
      el: "#app",
      render: function(e) {
        return e(f);
      }
    });
  },
  function(e, t) {
    e.exports = ELEMENT;
  }
]);
