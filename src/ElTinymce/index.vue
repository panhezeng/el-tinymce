<template>
  <div class="el-tinymce">
    <vue-tinymce
      class="vue-tinymce"
      :content.sync="contentInternal"
      :update-event="updateEvent"
      :url="url"
      :config="configInternal"
      v-on="$listeners"
    />
    <side
      v-if="!readonly"
      :upload="upload"
      :upload-comp="uploadComp"
      :editor="editor"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </div>
</template>
<script>
import Side from "./components/Side.vue";
import VueTinymce from "./components/VueTinymce.vue";
import tinymce from "tinymce";

export default {
  name: "ElTinymce",
  components: { VueTinymce, Side },
  // 侧边栏属性通过$attrs传入，side 是否显示侧边栏，image，audio，video是否显示对应项目 i18n 国际化
  inheritAttrs: false,
  props: {
    // 父组件通过:content.sync同步富文本编辑器内容
    content: {
      type: String,
      required: true,
    },
    // 触发 content 同步更新的 tinymce Editor Events，其他 https://www.tiny.cloud/docs/advanced/events/
    updateEvent: {
      type: String,
      default: "beforeaddundo undo redo keyup focusout",
    },
    // tinymce依赖文件的cdn url
    url: {
      type: String,
      default: "https://cdn.jsdelivr.net/npm/tinymce@%5E5.10.3",
    },
    // tinymce的init方法的config参数，本组件有默认设置，比如不要toolbar2，可以使用该组件时写上 :config="{toolbar2:''}"
    config: {
      type: Object,
      default() {
        return {};
      },
    },
    // 编辑器高度
    height: {
      type: Number,
      default: 500,
    },
    // 只读
    readonly: {
      type: Boolean,
      default: false,
    },
    // 上传文件的方法
    upload: {
      required: true,
      type: Function,
    },
    uploadComp: {
      type: null,
      default: undefined,
    },
  },
  data() {
    return {
      editor: null,
      contentInternal: "",
      configInternal: {},
    };
  },
  computed: {},
  watch: {
    content: {
      immediate: true,
      handler: "setContent",
    },
    contentInternal: "contentChange",
    config: {
      immediate: true,
      deep: true,
      handler: "setTinymceConfig",
    },
    height: {
      immediate: true,
      handler: "setTinymceConfig",
    },
    readonly: {
      immediate: true,
      handler: "setTinymceConfig",
    },
  },
  beforeDestroy() {
    this.editor = null;
  },
  methods: {
    setTinymceConfig() {
      const tinymceConfig = {
        min_height: this.height,
        readonly: this.readonly,
        menubar: "file edit view insert format tools table",
        // menubar: false,
        toolbar1:
          "code | undo redo | fontsizeselect fontselect | blockquote hr | removeformat link unlink pastetext | pagebreak | charmap emoticons | fullscreen preview save print",
      };
      Object.assign(tinymceConfig, this.config);
      tinymceConfig.init_instance_callback = (editor) => {
        if (editor) {
          // 获得初始化完成的编辑器实例
          this.editor = editor;
          this.setContent();
          this.editor.on("NewBlock", (e) => {
            // 光标在插入资源后回车时，NewBlock p元素会带上资源容器p的class，这里去掉，避免出现非预期的样式
            const className = e.newBlock.getAttribute("class");
            if (
              /^\[object String\]$/.test(
                Object.prototype.toString.call(className)
              ) &&
              className.indexOf("el-tinymce-resource") > -1
            ) {
              e.newBlock.removeAttribute("class");
            }
          });
          if (
            /^\[object [^F]*Function\]$/.test(
              Object.prototype.toString.call(this.config.init_instance_callback)
            )
          ) {
            this.config.init_instance_callback(editor);
          }
        }
      };
      this.configInternal = tinymceConfig;
    },
    setContent() {
      // 如果组件内容和父组件传入的内容不一样
      if (this.contentInternal !== this.content) {
        this.contentInternal = this.content;
      }
    },
    contentChange() {
      // 同步到父组件
      if (this.contentInternal !== this.content) {
        this.$emit("update:content", this.contentInternal);
      }
    },
  },
};
</script>
<style lang="less">
.el-tinymce {
  display: flex;
  .vue-tinymce {
    flex: 1 1 auto;
  }
}
</style>
