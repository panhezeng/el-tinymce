<template>
  <div class="vue-tinymce-comp">
    <textarea ref="editor"></textarea>
  </div>
</template>
<script>
import tinymce from "tinymce";

export default {
  name: "VueTinymce",
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
      default: "https://cdn.jsdelivr.net/npm/tinymce@%5E5.0.0",
    },
    // tinymce的init方法的config参数，本组件有默认设置，比如不要toolbar3，可以使用该组件时写上 :config="{toolbar2:''}"
    config: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      editor: null,
      tinymceConfig: {
        allow_script_urls: true,
        remove_script_host: false,
        convert_urls: false,
        relative_urls: false,
        // document_base_url: this.url,
        // theme_url: `${this.url}/themes/silver/theme.min.js`,
        // skin_url: `${this.url}/skins/ui/oxide`,
        branding: false,
        indentation: "2px",
        fontsize_formats: "12px 14px 16px 18px 20px 24px",
        plugins:
          "print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons",
        contextmenu: "link image imagetools table",
        image_advtab: true,
        menubar: "file edit view insert format tools table help",
        // menubar: false,
        toolbar1:
          "code | undo redo | fontsizeselect fontselect | blockquote hr | removeformat link unlink pastetext | pagebreak | charmap emoticons | fullscreen preview save print | insertfile image media template",
        toolbar2:
          "formatselect | bold italic underline strikethrough | forecolor backcolor | textindent textoutdent | indent outdent | alignleft aligncenter alignright alignjustify | bullist numlist | anchor codesample | ltr rtl",
      },
    };
  },
  watch: {
    config: {
      handler() {
        this.$nextTick(function () {
          this.init();
        });
      },
      deep: true,
    },
    content: {
      handler: "setContent",
      immediate: true,
    },
  },
  beforeDestroy() {
    this.destroy();
  },
  created() {
    // 从指定url加载tinymce依赖文件
    tinymce.EditorManager.baseURL = this.url;
  },
  mounted() {
    this.$nextTick(function () {
      this.init();
    });
  },
  methods: {
    setTinymceConfig() {
      // 用外部配置覆盖内部默认配置
      Object.assign(this.tinymceConfig, this.config);

      // ============================================================================
      const zhCN = "zh_CN";
      const enUS = "en_US";
      // 如果配置为默认英语，则删除语言相关配置节点
      if (this.tinymceConfig.language === enUS) {
        delete this.tinymceConfig.language;
        delete this.tinymceConfig.language_url;
      } else {
        // 如果语言没有配置，则默认配置为中文
        if (!this.tinymceConfig.language) {
          this.tinymceConfig.language = zhCN;
        }
        // 如果没有配置 language_url ，并且是 zhCN ，则使用本项目的语言包
        if (
          !(
            /^\[object String\]$/.test(
              Object.prototype.toString.call(this.tinymceConfig.language_url)
            ) && this.tinymceConfig.language_url
          ) &&
          this.tinymceConfig.language === zhCN
        ) {
          let langCDN = "https://cdn.jsdelivr.net/npm/";
          if (/unpkg.com/.test(this.url)) {
            langCDN = "https://unpkg.com/";
          }
          this.tinymceConfig.language_url = `${langCDN}@panhezeng/vue-tinymce@latest/dist/langs/${this.tinymceConfig.language}.js`;
        }

        // 如果没有配置 font_formats ，并且是 zhCN ，则使用内部配置
        if (
          !(
            /^\[object String\]$/.test(
              Object.prototype.toString.call(this.tinymceConfig.font_formats)
            ) && this.tinymceConfig.font_formats
          ) &&
          this.tinymceConfig.language === zhCN
        ) {
          this.tinymceConfig.font_formats =
            "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats";
          if (window.navigator.platform.indexOf("Win") > -1) {
            this.tinymceConfig.font_formats =
              "微软雅黑=Microsoft Yahei;黑体=SimHei;宋体=SimSun;楷体=KaiTi;隶书=STLiti;" +
              this.tinymceConfig.font_formats;
          } else if (window.navigator.platform.indexOf("Mac") > -1) {
            this.tinymceConfig.font_formats =
              "苹方=PingFang SC;黑体=STHeiti;宋体=STSong;楷体=STKaiti;隶书=STLiti;" +
              this.tinymceConfig.font_formats;
          } else if (window.navigator.platform.indexOf("Linux") > -1) {
            this.tinymceConfig.font_formats =
              "黑体=Source Han Sans SC;宋体=Source Han Serif SC;" +
              this.tinymceConfig.font_formats;
          }
          // this.tinymceConfig.content_style =
          //   'body, td, pre {font-family:"微软雅黑", "苹方", Verdana, Arial, Helvetica, sans-serif;}';
        }
      }

      if (
        !/^\[object Object\]$/.test(
          Object.prototype.toString.call(this.tinymceConfig["external_plugins"])
        )
      ) {
        this.tinymceConfig.external_plugins = {};
      }

      if (!this.tinymceConfig.external_plugins["textindentoutdent"]) {
        const keys = Object.keys(this.tinymceConfig);
        for (let i = keys.length - 1; i >= 0; i--) {
          const key = keys[i];
          // 如果 toolbar 配置了 textindent textoutdent 按钮，则加载 textindentoutdent 插件
          if (
            key.indexOf("toolbar") !== -1 &&
            /\btext(indent|outdent)\b/g.test(this.tinymceConfig[key])
          ) {
            if (this.tinymceConfig.language === zhCN) {
              this.tinymceConfig.external_plugins["textindentoutdentzhcn"] =
                "https://cdn.jsdelivr.net/npm/@panhezeng/tinymce-plugin-text-indent-outdent@latest/dist/textindentoutdent/langs/zh_CN.js";
            }
            this.tinymceConfig.external_plugins["textindentoutdent"] =
              "https://cdn.jsdelivr.net/npm/@panhezeng/tinymce-plugin-text-indent-outdent@latest/dist/textindentoutdent/plugin.min.js";
            break;
          }
        }
      }

      // 把配置的plugins转换为external_plugins的形式，使用cdn
      // if (
      //   Object.prototype.toString.call(this.tinymceConfig.plugins) === "[object String]"
      // ) {
      //   const plugins = this.tinymceConfig.plugins.match(/([\d\w]+)/gm);
      //   if (Object.prototype.toString.call(plugins) === "[object Array]") {
      //     plugins.forEach(value => {
      //       this.tinymceConfig.external_plugins[value] = `${
      //         this.url
      //       }/plugins/${value}/plugin.min.js`;
      //     });
      //   }
      // }
      // delete this.tinymceConfig.plugins;
      this.tinymceConfig.target = this.$refs.editor;
      this.tinymceConfig.init_instance_callback = (editor) => {
        if (this && this.$refs.editor) {
          this.editor = editor;
          this.setContent();
          editor.on(
            this.updateEvent,
            tinymce.util.Delay.debounce(() => {
              this.contentChange();
            }, 300)
          );
          if (
            /^\[object [^F]*Function\]$/.test(
              Object.prototype.toString.call(this.config.init_instance_callback)
            )
          ) {
            this.config.init_instance_callback(editor);
          }
        }
      };
    },
    init() {
      this.$nextTick(function () {
        // 编辑器实例初始化
        const refEditor = this.$refs.editor;
        if (refEditor) {
          this.destroy();
          this.setTinymceConfig();
          tinymce.init(this.tinymceConfig);
        }
      });
    },
    destroy() {
      try {
        // 销毁
        if (this && this.$refs.editor && this.editor) {
          if (this.editor.plugins.autosave) {
            this.editor.plugins.autosave.removeDraft();
          }
          tinymce.PluginManager.remove("autosave");
          this.editor.remove();
          this.editor.destroy();
          this.editor = null;
        }
      } catch (e) {
        return;
      }
    },
    setContent() {
      this.$nextTick(function () {
        // 如果编辑器实例已经为真，并且编辑器内容和父组件传入的内容不一样
        if (
          this &&
          this.$refs.editor &&
          this.editor &&
          this.editor.getContent() !== this.content
        ) {
          this.editor.setContent(this.content);
        }
      });
    },
    contentChange() {
      this.$nextTick(function () {
        // 同步到父组件
        if (this && this.$refs.editor && this.editor) {
          const content = this.editor.getContent();
          this.$emit("update:content", content);
          this.$emit("content-change", content);
        }
      });
    },
  },
};
</script>
