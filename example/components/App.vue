<template>
  <div id="app">
    <h1>上传的mock演示，response永远是一样的数据</h1>
    <el-tinymce :content.sync="content"/>
    <el-tinymce :content.sync="content"/>
    <el-tinymce :content.sync="content"/>
  </div>
</template>

<script>
  import UCloudUFile from '@panhezeng/ucloud-ufile'
  //  import '../../dist/el-tinymce.min'
  //  import '../../src'
  //  import Vue from 'vue'
  //  import ElTinymce from '../../dist/el-tinymce.min'
  //  const ElTinymce = require('../../dist/el-tinymce.min')

  //  Vue.use(ElTinymce)

  const ufile = new UCloudUFile('example-ucloud', 'https://private-87040-publicexample.apiary-mock.com/upload', 'https://private-87040-publicexample.apiary-mock.com/upload/token')

  function upload (option) {
    const file = option.file
    if (Object.prototype.toString.call(file) !== '[object File]') {
      throw new Error('file参数必须为File数据类型')
    }

    return new Promise((resolve, reject) => {

      if (ufile.uploading) {
        console.log('上传中，稍等')
        return
      } else {
        ufile.uploading = true
      }

      ufile.PREFIX = `Items/11933/${file.type}`

      const success = (res) => {
        if (Object.prototype.toString.call(res) !== '[object Object]') {
          res = {Key: file.name}
        }
        res.url = `http://digital.hammacher.com/${res.Key}`
        ufile.uploading = false
        console.log('success', res)
        resolve({data: res})
      }

      const error = (res) => {
        ufile.uploading = false
        reject(new Error('上传失败'))
      }

      const progress = (res) => {
        if (Object.prototype.toString.call(res) !== '[object Object]') {
          res = {value: 0}
        }
        console.log('progress', res)
//          var tips = ''
//          if (res.status == 'init') {
//            tips = '初始化分片：'
//          } else if (res.status == 'uploading') {
//            tips = '分片上传中：'
//          } else if (res.status == 'uploaded') {
//            tips = '完成分片：'
//          }
//          var percentComplete = (res.value * 100) + '%'
        res.percent = res.value * 100
      }

      ufile.hitSliceUpload(file, success, error, progress)
    })
  }

  //  window.ElSingleUploadOptions = {upload: upload}
  //  require('../../src')

  const ElTinymce = () => {
    return import('../../dist/el-tinymce.min').then(res => {
      Object.assign(res.props.upload, {
        required: false,
        default: upload
      })
      return Promise.resolve(res)
    })
  }

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

