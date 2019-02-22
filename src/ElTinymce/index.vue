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
      v-bind="$attrs"
      v-on="$listeners"
      :upload="upload"
      :editor="editor"
      v-if="!readonly"
    />
  </div>
</template>
<script>
import Side from "./components/Side.vue";
import VueTinymce from "@panhezeng/vue-tinymce";

export default {
  name: "ElTinymce",
  components: { VueTinymce, Side },
  // 侧边栏属性通过$attrs传入，side 是否显示侧边栏，image，audio，video是否显示对应项目 i18n 国际化
  inheritAttrs: false,
  props: {
    // 父组件通过:content.sync同步富文本编辑器内容
    content: {
      type: String,
      required: true
    },
    // 触发content同步更新的tinymce Editor Events，其他https://www.tiny.cloud/docs/advanced/events/
    updateEvent: {
      type: String,
      default: "beforeaddundo undo redo keyup"
    },
    // tinymce依赖文件的cdn url
    url: {
      type: String,
      default: "https://cdn.jsdelivr.net/npm/tinymce@~5"
    },
    // tinymce的init方法的config参数，本组件有默认设置，比如不要toolbar3，可以使用该组件时写上 :config="{toolbar2:''}"
    config: {
      type: Object,
      default() {
        return {};
      }
    },
    // 编辑器高度
    height: {
      type: Number,
      default: 230
    },
    // 只读
    readonly: {
      type: Boolean,
      default: false
    },
    // 上传文件的方法
    upload: {
      required: true,
      type: Function
    }
  },
  data() {
    return {
      editor: null,
      contentInternal: ""
    };
  },
  computed: {
    configInternal() {
      return Object.assign(
        {
          height: this.height,
          readonly: this.readonly,
          toolbar1:
            "code | undo redo | fontsizeselect fontselect | blockquote hr | removeformat link unlink pastetext preview",
          init_instance_callback: this.init_instance_callback
        },
        this.config
      );
    }
  },
  watch: {
    content: {
      immediate: true,
      handler: "setContent"
    },
    contentInternal: "contentChange"
  },
  beforeDestroy() {
    this.editor = null;
  },
  methods: {
    init_instance_callback(editor) {
      // 获得初始化完成的编辑器实例
      this.editor = editor;
      this.setContent();
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
    }
  }
};
</script>
<style lang="less">
.el-tinymce {
  display: flex;
  .vue-tinymce {
    flex: 1;
  }
}
</style>
