export const ElTinymce = require('./ElTinymce/index.vue').default

let Vue

function install (_Vue) {

  if (Vue) {
    console.warn('[ElTinymce] already installed. Vue.use(ElTinymce) should be called only once.')
    return
  }

  Vue = _Vue

  Vue.component(ElTinymce.name, ElTinymce)
}

/* istanbul ignore next */
ElTinymce.install = install

// auto install in dist mode
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}


