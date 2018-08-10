<template>
  <div class="el-tinymce">
    <vue-tinymce class="vue-tinymce" :content.sync="contentInternal"
                 :id="id"
                 :config="configInternal"/>
    <side v-bind="$attrs" :upload="upload" :editor="editor" v-if="!readonly"/>
  </div>
</template>
<script>
  import Side from './components/Side.vue'
  import VueTinymce from '@panhezeng/vue-tinymce'

  export default {
    name: 'ElTinymce',
    mixins: [],
    components: {VueTinymce, Side},
    // 侧边栏属性通过$attrs传入，side 是否显示侧边栏，image，audio，video是否显示对应项目 i18n 国际化
    props: {
      // 当前页面该编辑器的唯一id，如果只有一个可以用默认值
      id: {
        type: String,
        default: '1'
      },
      // 父组件通过:content.sync同步富文本编辑器内容
      content: {
        type: String,
        required: true
      },
      // 编辑器高度
      height: {
        type: Number,
        default: 500
      },
      // 只读
      readonly: {
        type: Boolean,
        default: false
      },
      // tinymce配置
      config: Object,
      // 上传文件的方法
      upload: {
        required: true,
        type: Function
      }
    },
    data () {
      return {
        editor: null,
        contentInternal: ''
      }
    },
    computed: {
      configInternal () {
        return Object.assign({
          height: this.height,
          readonly: this.readonly,
          toolbar1: 'code | undo redo | fontsizeselect fontselect | blockquote hr | removeformat link unlink pastetext preview',
          init_instance_callback: this.init_instance_callback
        }, this.config)
      }
    },
    watch: {
      content: {
        immediate: true,
        handler: 'setContent'
      },
      contentInternal: 'contentChange'
    },
    beforeDestroy () {
      this.editor = null
    },
    methods: {
      init_instance_callback (editor) {
        // 获得初始化完成的编辑器实例
        this.editor = editor
        this.setContent()
      },
      setContent () {
        // 如果组件内容和父组件传入的内容不一样
        if (this.contentInternal !== this.content) {
          this.contentInternal = this.content
        }
      },
      contentChange () {
        // 同步到父组件
        if (this.contentInternal !== this.content) {
          this.$emit('update:content', this.contentInternal)
        }
      }
    }
  }
</script>
<style lang="less">
  .el-tinymce {
    display: flex;
    .vue-tinymce {
      flex: 1;
    }
  }
</style>
