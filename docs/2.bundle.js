(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{10:function(e,t,n){var i,o,a;window,e.exports=(i=n(3),o=n(4),a=n(8),function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t){e.exports=i},function(e,t,n){var i=n(9);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals),(0,n(4).default)("6904f9e2",i,!1,{})},function(e,t,n){var i=n(13);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals),(0,n(4).default)("3ef8ad0a",i,!1,{})},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n,i,o,a=e[1]||"",r=e[3];if(!r)return a;if(t&&"function"==typeof btoa){var s=(n=r,i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(o," */")),l=r.sources.map(function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")});return[a].concat(l).concat([s]).join("\n")}return[a].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var r=0;r<e.length;r++){var s=e[r];null!=s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),t.push(s))}},t}},function(e,t,n){"use strict";function i(e,t){for(var n=[],i={},o=0;o<t.length;o++){var a=t[o],r=a[0],s={id:e+":"+o,css:a[1],media:a[2],sourceMap:a[3]};i[r]?i[r].parts.push(s):n.push(i[r]={id:r,parts:[s]})}return n}n.r(t),n.d(t,"default",function(){return f});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},r=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,c=!1,d=function(){},u=null,p="data-vue-ssr-id",m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(e,t,n,o){c=n,u=o||{};var r=i(e,t);return g(r),function(t){for(var n=[],o=0;o<r.length;o++){var s=r[o];(l=a[s.id]).refs--,n.push(l)}for(t?g(r=i(e,t)):r=[],o=0;o<n.length;o++){var l;if(0===(l=n[o]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete a[l.id]}}}}function g(e){for(var t=0;t<e.length;t++){var n=e[t],i=a[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(h(n.parts[o]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var r=[];for(o=0;o<n.parts.length;o++)r.push(h(n.parts[o]));a[n.id]={id:n.id,refs:1,parts:r}}}}function y(){var e=document.createElement("style");return e.type="text/css",r.appendChild(e),e}function h(e){var t,n,i=document.querySelector("style["+p+'~="'+e.id+'"]');if(i){if(c)return d;i.parentNode.removeChild(i)}if(m){var o=l++;i=s||(s=y()),t=w.bind(null,i,o,!1),n=w.bind(null,i,o,!0)}else i=y(),t=function(e,t){var n=t.css,i=t.media,o=t.sourceMap;if(i&&e.setAttribute("media",i),u.ssrId&&e.setAttribute(p,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,i),n=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else n()}}var b,v=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function w(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=v(t,o);else{var a=document.createTextNode(o),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(a,r[t]):e.appendChild(a)}}},function(e,t){e.exports=o},function(e,t){e.exports=a},function(e,t,n){"use strict";n.r(t),n.d(t,"ElTinymce",function(){return i});const i=n(14).default;let o;function a(e,t="undefined"!=typeof window&&window.ElSingleUploadOptions){o?console.warn("[ElTinymce] already installed. Vue.use(ElTinymce) should be called only once."):(o=e,"[object Object]"===Object.prototype.toString.call(t)&&"[object Function]"===Object.prototype.toString.call(t.upload)&&Object.assign(i.props.upload,{required:!1,default:t.upload}),o.component(i.name,i))}i.install=a,"undefined"!=typeof window&&window.Vue&&a(window.Vue)},function(e,t,n){"use strict";var i=n(1);n.n(i).a},function(e,t,n){t=e.exports=n(3)(!1);var i=n(10)(n(11));t.push([e.i,".el-tinymce-side {\n  width: 140px;\n  margin: 0 0 0 16px;\n}\n.el-tinymce-side .el-tinymce-assets-title {\n  line-height: 39px;\n}\n.el-tinymce-side .el-tinymce-assets-list {\n  border: 1px solid #e7e7eb;\n}\n.el-tinymce-side .el-tinymce-assets-item {\n  border-top: 1px solid #e7e7eb;\n  background-color: #fff;\n  text-align: left;\n  padding-left: 20px;\n  line-height: 38px;\n  cursor: pointer;\n}\n.el-tinymce-side .el-tinymce-assets-item:hover {\n  border: 1px solid #43b548;\n  margin: 0 -1px -1px;\n  position: relative;\n  z-index: 1;\n  color: #43b548;\n  zoom: 1;\n  float: none;\n}\n.el-tinymce-side .el-tinymce-assets-item-icon {\n  width: 22px;\n  height: 22px;\n  vertical-align: middle;\n  display: inline-block;\n  margin-right: 1em;\n}\n.el-tinymce-side .el-tinymce-assets-item-image .el-tinymce-assets-item-icon {\n  background: url("+i+") 0 0 no-repeat;\n}\n.el-tinymce-side .el-tinymce-assets-item-image:hover .el-tinymce-assets-item-icon {\n  background: url("+i+") 0 -106px no-repeat;\n}\n.el-tinymce-side .el-tinymce-assets-item-audio .el-tinymce-assets-item-icon {\n  background: url("+i+") 0 -50px no-repeat;\n}\n.el-tinymce-side .el-tinymce-assets-item-audio:hover .el-tinymce-assets-item-icon {\n  background: url("+i+") 0 -156px no-repeat;\n}\n.el-tinymce-side .el-tinymce-assets-item-video .el-tinymce-assets-item-icon {\n  background: url("+i+") 0 -28px no-repeat;\n}\n.el-tinymce-side .el-tinymce-assets-item-video:hover .el-tinymce-assets-item-icon {\n  background: url("+i+") 0 -134px no-repeat;\n}\n.el-tinymce-dialog .el-dialog__body {\n  padding: 0 20px 30px;\n}\n.el-tinymce-dialog .el-tabs__header {\n  margin: 0 0 5px;\n}\n.el-tinymce-dialog .el-tinymce-dialog-desc {\n  /*text-align: right;*/\n  text-align: center;\n  color: #cccccc;\n}\n.el-tinymce-dialog .el-tinymce-dialog-upload {\n  text-align: center;\n}\n.el-tinymce-dialog .el-tinymce-dialog-btn {\n  width: 100%;\n  text-align: right;\n  margin-top: 20px;\n}\n.el-tinymce-dialog .two-col {\n  width: calc(100% - 230px);\n  display: inline-block;\n  vertical-align: top;\n}\n.el-tinymce-dialog .poster {\n  width: 220px;\n}\n",""])},function(e,t,n){"use strict";e.exports=function(e,t){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||t?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAADKCAYAAAChSLBvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0NCMzY0N0Q0REFBMTFFN0E4MjZDNTJEQjdDNkI0MEUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0NCMzY0N0U0REFBMTFFN0E4MjZDNTJEQjdDNkI0MEUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3Q0IzNjQ3QjREQUExMUU3QTgyNkM1MkRCN0M2QjQwRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3Q0IzNjQ3QzREQUExMUU3QTgyNkM1MkRCN0M2QjQwRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtHHiFYAAAdVSURBVHja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"},function(e,t,n){"use strict";var i=n(2);n.n(i).a},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,".el-tinymce {\n  display: flex;\n}\n.el-tinymce .vue-tinymce {\n  flex: 1;\n}\n",""])},function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"el-tinymce"},[n("vue-tinymce",e._g({staticClass:"vue-tinymce",attrs:{content:e.contentInternal,"update-event":e.updateEvent,url:e.url,config:e.configInternal},on:{"update:content":function(t){e.contentInternal=t}}},e.$listeners)),e._v(" "),e.readonly?e._e():n("side",e._g(e._b({attrs:{upload:e.upload,editor:e.editor}},"side",e.$attrs,!1),e.$listeners))],1)};i._withStripped=!0;var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.sideShow?n("div",{staticClass:"el-tinymce-side"},[n("div",{staticClass:"el-tinymce-assets-title"},[e._v(e._s(e.i18n.resource))]),e._v(" "),n("div",{staticClass:"el-tinymce-assets-list"},[e._l(e.list,function(t,i){return e.itemShow[t.type]?[n("div",{class:"el-tinymce-assets-item el-tinymce-assets-item-"+t.type,on:{click:function(n){e.dialogShow=t.type}}},[n("i",{staticClass:"el-tinymce-assets-item-icon"}),e._v(e._s(t.title)+"\n      ")]),e._v(" "),n("el-dialog",{key:i,staticClass:"el-tinymce-dialog",attrs:{title:t.title,visible:e.dialogShow===t.type},on:{close:function(t){return e.dialogClose(i)}}},[n("el-tabs",{model:{value:t.dialog.activeName,callback:function(n){e.$set(t.dialog,"activeName",n)},expression:"item.dialog.activeName"}},e._l(t.dialog.tabs,function(i,o){return n("el-tab-pane",{key:o,attrs:{label:i.title,name:t.type+o}},[n("el-form",{ref:i.formName,refInFor:!0,attrs:{model:i.formData,rules:i.formRules,"label-width":"0","label-position":"top"}},[i.formData.hasOwnProperty("poster")?n("el-form-item",{staticClass:"poster two-col",attrs:{label:"",prop:"poster"}},[n("el-single-upload",e._b({attrs:{url:i.formData.poster,upload:e.upload,readonly:!0},on:{"update:url":function(t){return e.$set(i.formData,"poster",t)}}},"el-single-upload",t.dialog.poster.uploadProps,!1))],1):e._e(),e._v(" "),n("el-form-item",{staticClass:"el-tinymce-dialog-upload",class:{"two-col":i.formData.hasOwnProperty("poster")},attrs:{label:"",prop:"content"}},[i.uploadProps?n("el-single-upload",e._b({attrs:{url:i.formData.content,upload:e.upload,readonly:!0},on:{"update:url":function(t){return e.$set(i.formData,"content",t)}}},"el-single-upload",i.uploadProps,!1)):n("el-input",{model:{value:i.formData.content,callback:function(t){e.$set(i.formData,"content",t)},expression:"tab.formData.content"}}),e._v(" "),n("div",{staticClass:"el-tinymce-dialog-desc"},[e._v(e._s(i.desc))])],1),e._v(" "),n("el-form-item",{staticClass:"el-tinymce-dialog-btn"},[n("el-button",{on:{click:function(t){return e.reset(e.$refs[i.formName][0])}}},[e._v(e._s(e.i18n.btn.reset))]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(n){return e.submit(e.$refs[i.formName][0],i.formData,t.dialog.template)}}},[e._v("\n                  "+e._s(e.i18n.btn.submit)+"\n                ")])],1)],1)],1)}),1)],1)]:e._e()})],2)]):e._e()};o._withStripped=!0;var a=n(5),r=n.n(a),s=n(0),l={name:"ElTinymceSide",components:{ElSingleUpload:r.a,"el-dialog":s.Dialog,"el-tabs":s.Tabs,"el-tab-pane":s.TabPane,"el-form":s.Form,"el-form-item":s.FormItem,"el-button":s.Button,"el-input":s.Input},inheritAttrs:!1,props:{side:{type:Boolean,default:!0},image:{type:Boolean,default:!0},audio:{type:Boolean,default:!0},video:{type:Boolean,default:!0},editor:{type:null,required:!0},i18n:{type:Object,default:()=>({resource:"资源",btn:{reset:"重置",submit:"提交"}})},list:{type:Array,default:()=>[{type:"image",title:"图片",dialog:{activeName:"image0",tabs:[{title:"本地图片",desc:"支持png、jpg、gif、svg、webp，大小不能超过10M",uploadProps:{accept:"image/*",size:10240,placeholder:"图片链接地址"},formName:"image0",formData:{content:""},formRules:{content:[{required:!0,message:"请上传图片",trigger:"blur"}]}},{title:"外链图片",desc:"支持png、jpg、gif、svg、webp",formName:"image1",formData:{content:""},formRules:{content:[{required:!0,message:"请输入有效图片链接",trigger:"blur",pattern:/\.(png|jpe?g|gif|svg|webp)$/}]}}],template:e=>'<p class="el-tinymce-resource el-tinymce-image" style="text-align: center;" ><img src="'.concat(e.content,'"></p>')}},{type:"audio",title:"音频",dialog:{activeName:"audio0",tabs:[{title:"本地音频",desc:"支持mp3、ogg、wav、flac、aac，大小不能超过100M",uploadProps:{accept:".mp3,.ogg,.wav,.flac,.aac",size:102400,placeholder:"音频链接地址"},formName:"audio0",formData:{content:""},formRules:{content:[{required:!0,message:"请上传音频",trigger:"blur"}]}},{title:"外链音频",desc:"支持mp3、ogg、wav、flac、aac",formName:"audio1",formData:{content:""},formRules:{content:[{required:!0,message:"请输入有效音频链接",trigger:"blur",pattern:/\.(mp3|ogg|wav|flac|aac)$/}]}}],template:e=>'<p class="el-tinymce-resource el-tinymce-audio" style="text-align: center;" ><audio src="'.concat(e.content,'" controls></audio></p>')}},{type:"video",title:"视频",dialog:{activeName:"video0",poster:{desc:"支持png、jpg、gif、svg、webp，大小不能超过10M",uploadProps:{accept:"image/*",size:10240,placeholder:"视频封面图片链接地址"}},tabs:[{title:"本地视频",desc:"支持mp4、webm，大小不能超过1G",uploadProps:{accept:".mp4,.webm",size:1048576,placeholder:"视频链接地址"},formName:"video0",formData:{content:"",poster:""},formRules:{content:[{required:!0,message:"请上传视频",trigger:"blur"}]}},{title:"外链视频",desc:"支持mp4、webm链接和第三方网站分享视频iframe代码",formName:"video1",formData:{content:"",poster:""},formRules:{content:[{required:!0,message:"请输入有效视频链接或代码",trigger:"blur",pattern:/\.(mp4|webm)|<\/iframe>$/}]}}],template:e=>(/\.(mp4|webm)$/.test(e.content)&&(e.content='<video controls src="'.concat(e.content,'" poster="').concat(e.poster,'"></video>')),'<p class="el-tinymce-resource el-tinymce-video" style="text-align: center;" >'.concat(e.content,"</p>"))}}]},upload:{required:!0,type:Function}},data:()=>({dialogShow:""}),computed:{sideShow(){return this.side&&this.editor},itemShow(){return{image:this.image,audio:this.audio,video:this.video}}},methods:{dialogClose(e){this.list[e].dialog.tabs.forEach(e=>{this.reset(this.$refs[e.formName][0])}),this.dialogShow=""},reset(e){e.resetFields()},submit(e,t,n){e.validate(e=>{if(!e)return!1;this.editor.insertContent(n(t)),this.dialogShow=""})}}};function c(e,t,n,i,o,a,r,s){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),r?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=l):o&&(l=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(e,t){return l.call(t),d(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:c}}n(8);var d=c(l,o,[],!1,null,null,null);d.options.__file="src/ElTinymce/components/Side.vue";var u=d.exports,p=n(6),m={name:"ElTinymce",components:{VueTinymce:n.n(p).a,Side:u},inheritAttrs:!1,props:{content:{type:String,required:!0},updateEvent:{type:String,default:"beforeaddundo undo redo keyup"},url:{type:String,default:"https://cdn.jsdelivr.net/npm/tinymce@~5"},config:{type:Object,default:()=>({})},height:{type:Number,default:230},readonly:{type:Boolean,default:!1},upload:{required:!0,type:Function}},data:()=>({editor:null,contentInternal:""}),computed:{configInternal(){return Object.assign({height:this.height,readonly:this.readonly,toolbar1:"code | undo redo | fontsizeselect fontselect | blockquote hr | removeformat link unlink pastetext preview",init_instance_callback:this.init_instance_callback},this.config)}},watch:{content:{immediate:!0,handler:"setContent"},contentInternal:"contentChange"},beforeDestroy(){this.editor=null},methods:{init_instance_callback(e){this.editor=e,this.setContent()},setContent(){this.contentInternal!==this.content&&(this.contentInternal=this.content)},contentChange(){this.contentInternal!==this.content&&this.$emit("update:content",this.contentInternal)}}},f=(n(12),c(m,i,[],!1,null,null,null));f.options.__file="src/ElTinymce/index.vue",t.default=f.exports}]).ElTinymce)}}]);