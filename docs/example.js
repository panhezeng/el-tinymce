!(function(e) {
  function t(t) {
    for (var n, r, i = t[0], c = t[1], a = 0, u = []; a < i.length; a++)
      (r = i[a]), o[r] && u.push(o[r][0]), (o[r] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
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
        var c,
          a = document.createElement("script");
        (a.charset = "utf-8"),
          (a.timeout = 120),
          r.nc && a.setAttribute("nonce", r.nc),
          (a.src = (function(e) {
            return r.p + "" + e + ".bundle.js";
          })(e)),
          (c = function(t) {
            (a.onerror = a.onload = null), clearTimeout(l);
            var n = o[e];
            if (0 !== n) {
              if (n) {
                var r = t && ("load" === t.type ? "missing" : t.type),
                  i = t && t.target && t.target.src,
                  c = new Error(
                    "Loading chunk " + e + " failed.\n(" + r + ": " + i + ")"
                  );
                (c.type = r), (c.request = i), n[1](c);
              }
              o[e] = void 0;
            }
          });
        var l = setTimeout(function() {
          c({ type: "timeout", target: a });
        }, 12e4);
        (a.onerror = a.onload = c), document.head.appendChild(a);
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
    c = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var a = 0; a < i.length; a++) t(i[a]);
  var l = c;
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
              attrs: { content: e.content, i18n: e.i18n.default() },
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
              attrs: { content: e.content },
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
    var c = n(1),
      a = new (n.n(c)).a(
        "example-ucloud",
        "https://private-87040-publicexample.apiary-mock.com/upload",
        "https://private-87040-publicexample.apiary-mock.com/upload/token"
      );
    function l(e) {
      var t = e.file;
      if ("[object File]" !== Object.prototype.toString.call(t))
        throw new Error("file参数必须为File数据类型");
      return new Promise(function(e, n) {
        a.PREFIX = "example/".concat(t.type);
        a.hitSliceUpload(
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
    var u = {
      type: Object,
      default: function() {
        return {
          resource: "Resource",
          picture: "Picture",
          localPicture: "Local Picture",
          localPictureDesc:
            "Support png, jpg, gif, svg, webp, size cannot exceed 10M",
          localPictureRule: "Please upload pictures",
          externalLinkPicture: "External Link Picture",
          externalLinkPictureDesc: "Support png, jpg, gif, svg, webp",
          externalLinkPictureRule: "Please enter valid picture link",
          audio: "Audio",
          localAudio: "Local Audio",
          localAudioDesc:
            "Support mp3、ogg、wav、flac、aac, size can not exceed 100M",
          localAudioRule: "Please upload audio",
          externalLinkAudio: "External Link Audio",
          externalLinkAudioDesc: "Support mp3、ogg、wav、flac、aac",
          externalLinkAudioRule: "Please enter valid audio link",
          video: "Video",
          localVideo: "Local Video",
          localVideoDesc: "Support mp4, size can not exceed 1G",
          localVideoRule: "Please upload video",
          externalLinkVideo: "External Link Video",
          externalLinkVideoDesc:
            "Support mp4 links and third-party websites to share video iframe code",
          externalLinkVideoRule: "Please enter valid video link or code",
          btn: { reset: "重置", submit: "提交" }
        };
      }
    };
    var p = (function(e, t, n, o, r, i, c, a) {
      var l,
        u = "function" == typeof e ? e.options : e;
      if (
        (t && ((u.render = t), (u.staticRenderFns = n), (u._compiled = !0)),
        o && (u.functional = !0),
        i && (u._scopeId = "data-v-" + i),
        c
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
                e && e._registeredComponents && e._registeredComponents.add(c);
            }),
            (u._ssrRegister = l))
          : r &&
            (l = a
              ? function() {
                  r.call(this, this.$root.$options.shadowRoot);
                }
              : r),
        l)
      )
        if (u.functional) {
          u._injectStyles = l;
          var p = u.render;
          u.render = function(e, t) {
            return l.call(t), p(e, t);
          };
        } else {
          var s = u.beforeCreate;
          u.beforeCreate = s ? [].concat(s, l) : [l];
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
          return { i18n: u, content: "" };
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
    p.options.__file = "example/components/App.vue";
    var s = p.exports;
    new r.a({
      el: "#app",
      render: function(e) {
        return e(s);
      }
    });
  },
  function(e, t) {
    e.exports = ELEMENT;
  }
]);
