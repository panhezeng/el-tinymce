<template>
  <div id="app">
    <el-tinymce :content.sync="content"/>
  </div>
</template>

<script>

//  import '../../dist/el-tinymce.min'
  //  import '../../src'
  //  import Vue from 'vue'
  //  import ElTinymce from '../../dist/el-tinymce.min'
  //  const ElTinymce = require('../../dist/el-tinymce.min')

  //  Vue.use(ElTinymce)

    const ElTinymce = () => import('../../dist/el-tinymce.min')

  export default {
    name: 'App',
    components: {ElTinymce},
    data () {
      return {
        content: ''
      }
    }
  }
</script>

