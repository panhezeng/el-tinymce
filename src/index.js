// export const ElTinymce = require("./ElTinymce/index.vue").default;
import index from "./ElTinymce/index";
export const ElTinymce = index;

let Vue;

function install(
  _Vue,
  options = typeof window !== "undefined" && window.ElSingleUploadOptions
) {
  if (Vue) {
    console.warn(
      "[ElTinymce] already installed. Vue.use(ElTinymce) should be called only once."
    );
    return;
  }

  Vue = _Vue;

  if (/^\[object Object\]$/.test(Object.prototype.toString.call(options))) {
    if (
      /^\[object [^F]*Function\]$/.test(
        Object.prototype.toString.call(options.upload)
      )
    ) {
      Object.assign(ElTinymce.props.upload, {
        required: false,
        default: options.upload,
      });
    }
  }

  Vue.component(ElTinymce.name, ElTinymce);
}

/* istanbul ignore next */
ElTinymce.install = install;

// auto install in dist mode
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
