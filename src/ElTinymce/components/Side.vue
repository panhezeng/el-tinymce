<template>
  <div class="el-tinymce-side" v-if="sideShow">
    <div class="el-tinymce-assets-title">{{ i18n.resource }}</div>
    <div class="el-tinymce-assets-list">
      <template v-for="(item, index) in list" v-if="itemShow[item.type]">
        <div
          :class="`el-tinymce-assets-item el-tinymce-assets-item-${item.type}`"
          @click="dialogShow = item.type"
        >
          <i class="el-tinymce-assets-item-icon"></i>{{ item.title }}
        </div>
        <el-dialog
          :key="index"
          :title="item.title"
          :visible="dialogShow === item.type"
          @close="dialogClose(index)"
          class="el-tinymce-dialog"
        >
          <el-tabs v-model="item.dialog.activeName">
            <el-tab-pane
              :label="tab.title"
              :name="item.type + tabIndex"
              :key="tabIndex"
              v-for="(tab, tabIndex) in item.dialog.tabs"
            >
              <div class="el-tinymce-dialog-desc">{{ tab.desc }}</div>
              <el-form
                :model="tab.formData"
                :rules="tab.formRules"
                :ref="tab.formName"
                label-width="0"
              >
                <el-form-item
                  label=""
                  prop="content"
                  class="el-tinymce-dialog-upload"
                >
                  <el-single-upload
                    :url.sync="tab.formData.content"
                    :upload="upload"
                    :type="item.accept"
                    :size="tab.upload.size"
                    :readonly="true"
                    v-bind="uploadProps"
                    v-if="tab.upload"
                  />
                  <el-input v-model="tab.formData.content" v-else />
                </el-form-item>
                <el-form-item class="el-tinymce-dialog-btn">
                  <el-button @click="reset($refs[tab.formName][0])">{{
                    i18n.btn.reset
                  }}</el-button>
                  <el-button
                    type="primary"
                    @click="
                      submit(
                        $refs[tab.formName][0],
                        tab.formData,
                        item.dialog.template
                      )
                    "
                  >
                    {{ i18n.btn.submit }}
                  </el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </el-dialog>
      </template>
    </div>
  </div>
</template>
<script>
import ElSingleUpload from "@panhezeng/el-single-upload";
import {
  Dialog,
  Tabs,
  TabPane,
  Form,
  FormItem,
  Input,
  Button
} from "element-ui";

export default {
  name: "ElTinymceSide",
  components: {
    ElSingleUpload,
    "el-dialog": Dialog,
    "el-tabs": Tabs,
    "el-tab-pane": TabPane,
    "el-form": Form,
    "el-form-item": FormItem,
    "el-button": Button,
    "el-input": Input
  },
  inheritAttrs: false,
  props: {
    // 整个侧边栏是否显示
    side: {
      type: Boolean,
      default: true
    },
    // 侧边栏图片项是否显示
    image: {
      type: Boolean,
      default: true
    },
    // 侧边栏音频项是否显示
    audio: {
      type: Boolean,
      default: true
    },
    // 侧边栏视频项是否显示
    video: {
      type: Boolean,
      default: true
    },
    // tinymce实例
    editor: {
      type: null,
      required: true
    },
    // 侧边栏所有文本
    i18n: {
      type: Object,
      default() {
        return {
          resource: "资源",
          picture: "图片",
          localPicture: "本地图片",
          localPictureDesc: "支持png、jpg、gif、svg、webp，大小不能超过10M",
          localPictureRule: "请上传图片",
          externalLinkPicture: "外链图片",
          externalLinkPictureDesc: "支持png、jpg、gif、svg、webp",
          externalLinkPictureRule: "请输入有效图片链接",
          audio: "音频",
          localAudio: "本地音频",
          localAudioDesc: "支持mp3、ogg、wav、flac、aac，大小不能超过100M",
          localAudioRule: "请上传音频",
          externalLinkAudio: "外链音频",
          externalLinkAudioDesc: "支持mp3、ogg、wav、flac、aac",
          externalLinkAudioRule: "请输入有效音频链接",
          video: "视频",
          localVideo: "本地视频",
          localVideoDesc: "支持mp4，大小不能超过1G",
          localVideoRule: "请上传视频",
          externalLinkVideo: "外链视频",
          externalLinkVideoDesc: "支持mp4链接和第三方网站分享视频iframe代码",
          externalLinkVideoRule: "请输入有效视频链接或代码",
          btn: {
            reset: "重置",
            submit: "提交"
          }
        };
      }
    },
    // 上传文件的方法
    upload: {
      required: true,
      type: Function
    },
    uploadProps: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      // 资源列表，dialog是该资源的弹出框数据
      list: [
        {
          type: "image",
          accept: "image/*",
          title: this.i18n.picture,
          dialog: {
            activeName: "image0",
            tabs: [
              {
                title: this.i18n.localPicture,
                desc: this.i18n.localPictureDesc,
                upload: {
                  size: 10240
                },
                formName: "image0",
                formData: {
                  content: ""
                },
                formRules: {
                  content: [
                    {
                      required: true,
                      message: this.i18n.localPictureRule,
                      trigger: "blur"
                    }
                  ]
                }
              },
              {
                title: this.i18n.externalLinkPicture,
                desc: this.i18n.externalLinkPictureDesc,
                formName: "image1",
                formData: {
                  content: ""
                },
                formRules: {
                  content: [
                    {
                      required: true,
                      message: this.i18n.externalLinkPictureRule,
                      trigger: "blur",
                      pattern: /\.(png|jpe?g|gif|svg|webp)$/
                    }
                  ]
                }
              }
            ],
            template(content) {
              return `<p class="el-tinymce-resource el-tinymce-image" style="text-align: center;" ><img src="${content}"></p>`;
            }
          }
        },
        {
          type: "audio",
          accept: ".mp3,.ogg,.wav,.flac,.aac",
          title: this.i18n.audio,
          dialog: {
            activeName: "audio0",
            tabs: [
              {
                title: this.i18n.localAudio,
                desc: this.i18n.localAudioDesc,
                upload: {
                  size: 102400
                },
                formName: "audio0",
                formData: {
                  content: ""
                },
                formRules: {
                  content: [
                    {
                      required: true,
                      message: this.i18n.localAudioRule,
                      trigger: "blur"
                    }
                  ]
                }
              },
              {
                title: this.i18n.externalLinkAudio,
                desc: this.i18n.externalLinkAudioDesc,
                formName: "audio1",
                formData: {
                  content: ""
                },
                formRules: {
                  content: [
                    {
                      required: true,
                      message: this.i18n.externalLinkAudioRule,
                      trigger: "blur",
                      pattern: /\.(mp3|ogg|wav|flac|aac)$/
                    }
                  ]
                }
              }
            ],
            template(content) {
              return `<p class="el-tinymce-resource el-tinymce-audio" style="text-align: center;" ><audio src="${content}" controls></audio></p>`;
            }
          }
        },
        {
          type: "video",
          accept: "video/*",
          title: this.i18n.video,
          dialog: {
            activeName: "video0",
            tabs: [
              {
                title: this.i18n.externalLinkVideo,
                desc: this.i18n.externalLinkVideoDesc,
                formName: "video0",
                formData: {
                  content: ""
                },
                formRules: {
                  content: [
                    {
                      required: true,
                      message: this.i18n.externalLinkVideoRule,
                      trigger: "blur",
                      pattern: /\.mp4|<\/iframe>$/
                    }
                  ]
                }
              }
            ],
            template(content) {
              if (/\.mp4$/.test(content)) {
                content = `<video src="${content}" controls></video>`;
              }
              return `<p class="el-tinymce-resource el-tinymce-video" style="text-align: center;" >${content}</p>`;
            }
          }
        }
      ],
      // 当前显示的资源弹出框，默认不显示
      dialogShow: ""
    };
  },
  computed: {
    sideShow() {
      return this.side && this.editor;
    },
    itemShow() {
      return { image: this.image, audio: this.audio, video: this.video };
    }
  },
  methods: {
    dialogClose(index) {
      // 关闭弹出框
      //        console.log(this.$refs)
      const tabs = this.list[index].dialog.tabs;
      tabs.forEach(tab => {
        this.reset(this.$refs[tab.formName][0]);
      });
      this.dialogShow = "";
    },
    reset(form) {
      form.resetFields();
    },
    submit(form, formData, template) {
      form.validate(valid => {
        if (valid) {
          this.editor.insertContent(template(formData.content));
          this.dialogShow = "";
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style lang="less">
.el-tinymce-side {
  width: 140px;
  margin: 0 0 0 16px;
  .el-tinymce-assets-title {
    line-height: 39px;
  }
  .el-tinymce-assets-list {
    border: 1px solid #e7e7eb;
  }
  .el-tinymce-assets-item {
    border-top: 1px solid #e7e7eb;
    background-color: #fff;
    text-align: left;
    padding-left: 20px;
    line-height: 38px;
    cursor: pointer;
    &:hover {
      border: 1px solid #43b548;
      margin: 0 -1px -1px;
      position: relative;
      z-index: 1;
      color: #43b548;
      zoom: 1;
      float: none;
    }
  }

  .el-tinymce-assets-item-icon {
    width: 22px;
    height: 22px;
    vertical-align: middle;
    display: inline-block;
    margin-right: 1em;
  }

  .el-tinymce-assets-item-image {
    .el-tinymce-assets-item-icon {
      background: url(../assets/img/el-tinymce-assets-icon.png) 0 0 no-repeat;
    }
    &:hover .el-tinymce-assets-item-icon {
      background: url(../assets/img/el-tinymce-assets-icon.png) 0 -106px no-repeat;
    }
  }

  .el-tinymce-assets-item-audio {
    .el-tinymce-assets-item-icon {
      background: url(../assets/img/el-tinymce-assets-icon.png) 0 -50px no-repeat;
    }
    &:hover .el-tinymce-assets-item-icon {
      background: url(../assets/img/el-tinymce-assets-icon.png) 0 -156px no-repeat;
    }
  }

  .el-tinymce-assets-item-video {
    .el-tinymce-assets-item-icon {
      background: url(../assets/img/el-tinymce-assets-icon.png) 0 -28px no-repeat;
    }
    &:hover .el-tinymce-assets-item-icon {
      background: url(../assets/img/el-tinymce-assets-icon.png) 0 -134px no-repeat;
    }
  }
}

.el-tinymce-dialog {
  .el-dialog__body {
    padding: 0 20px 30px;
  }
  .el-tabs__header {
    margin: 0 0 5px;
  }
  .el-tinymce-dialog-desc {
    text-align: right;
    color: #cccccc;
    margin-bottom: 5px;
  }
  .el-tinymce-dialog-upload {
    text-align: center;
  }
  .el-tinymce-dialog-btn {
    text-align: right;
    margin-top: 20px;
  }
}
</style>
