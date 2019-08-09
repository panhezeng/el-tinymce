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
              <el-form
                :model="tab.formData"
                :rules="tab.formRules"
                :ref="tab.formName"
                label-width="0"
                label-position="top"
              >
                <el-form-item
                  v-if="tab.formData.hasOwnProperty('poster')"
                  label=""
                  prop="poster"
                  class="poster two-col"
                >
                  <el-single-upload
                    :url.sync="tab.formData.poster"
                    :upload="upload"
                    :readonly="true"
                    v-bind="item.dialog.poster.uploadProps"
                  />
                </el-form-item>
                <el-form-item
                  label=""
                  prop="content"
                  class="el-tinymce-dialog-upload"
                  :class="{ 'two-col': tab.formData.hasOwnProperty('poster') }"
                >
                  <el-single-upload
                    v-if="tab.uploadProps"
                    :url.sync="tab.formData.content"
                    :upload="upload"
                    :readonly="true"
                    v-bind="tab.uploadProps"
                  />
                  <el-input v-else v-model="tab.formData.content" />
                  <div
                    v-if="tab.formData.hasOwnProperty('width')"
                    class="el-tinymce-dialog-width-height"
                  >
                    <span
                      >{{ i18n.width
                      }}<el-input v-model="tab.formData.width"/></span
                    ><span
                      >{{ i18n.height }}<el-input v-model="tab.formData.height"
                    /></span>
                  </div>
                  <div class="el-tinymce-dialog-desc">{{ tab.desc }}</div>
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
          btn: {
            reset: "重置",
            submit: "提交"
          },
          width: "宽",
          height: "高"
        };
      }
    },
    // 侧边栏列表，dialog是该侧边按钮的弹出框数据
    list: {
      type: Array,
      default() {
        return [
          {
            type: "image",
            title: "图片",
            dialog: {
              activeName: "image0",
              tabs: [
                {
                  title: "本地图片",
                  desc: "支持png、jpg、gif、svg、webp，大小不能超过10M",
                  uploadProps: {
                    accept: "image/*",
                    size: 10240,
                    placeholder: "图片链接地址"
                  },
                  formName: "image0",
                  formData: {
                    content: "",
                    width: "",
                    height: ""
                  },
                  formRules: {
                    content: [
                      {
                        required: true,
                        message: "请上传图片",
                        trigger: "blur"
                      }
                    ]
                  }
                },
                {
                  title: "外链图片",
                  desc: "支持png、jpg、gif、svg、webp",
                  formName: "image1",
                  formData: {
                    content: "",
                    width: "",
                    height: ""
                  },
                  formRules: {
                    content: [
                      {
                        required: true,
                        message: "请输入有效图片链接",
                        trigger: "blur",
                        pattern: /\.(png|jpe?g|gif|svg|webp)$/
                      }
                    ]
                  }
                }
              ],
              template(data) {
                return `<p class="el-tinymce-resource el-tinymce-image" style="text-align: center;" ><img src="${data.content}" width="${data.width}" height="${data.height}"></p>`;
              }
            }
          },
          {
            type: "audio",
            title: "音频",
            dialog: {
              activeName: "audio0",
              tabs: [
                {
                  title: "本地音频",
                  desc: "支持mp3、ogg、wav、flac、aac，大小不能超过100M",
                  uploadProps: {
                    accept: ".mp3,.ogg,.wav,.flac,.aac",
                    size: 102400,
                    placeholder: "音频链接地址"
                  },
                  formName: "audio0",
                  formData: {
                    content: ""
                  },
                  formRules: {
                    content: [
                      {
                        required: true,
                        message: "请上传音频",
                        trigger: "blur"
                      }
                    ]
                  }
                },
                {
                  title: "外链音频",
                  desc: "支持mp3、ogg、wav、flac、aac",
                  formName: "audio1",
                  formData: {
                    content: ""
                  },
                  formRules: {
                    content: [
                      {
                        required: true,
                        message: "请输入有效音频链接",
                        trigger: "blur",
                        pattern: /\.(mp3|ogg|wav|flac|aac)$/
                      }
                    ]
                  }
                }
              ],
              template(data) {
                return `<p class="el-tinymce-resource el-tinymce-audio" style="text-align: center;" ><audio src="${data.content}" controls></audio></p>`;
              }
            }
          },
          {
            type: "video",
            title: "视频",
            dialog: {
              activeName: "video0",
              poster: {
                desc: "支持png、jpg、gif、svg、webp，大小不能超过10M",
                uploadProps: {
                  accept: "image/*",
                  size: 10240,
                  placeholder: "视频封面图片链接地址"
                }
              },
              tabs: [
                {
                  title: "本地视频",
                  desc: "支持mp4、webm，大小不能超过1G",
                  uploadProps: {
                    accept: ".mp4,.webm",
                    size: 1048576,
                    placeholder: "视频链接地址"
                  },
                  formName: "video0",
                  formData: {
                    content: "",
                    width: "",
                    height: "",
                    poster: ""
                  },
                  formRules: {
                    content: [
                      {
                        required: true,
                        message: "请上传视频",
                        trigger: "blur"
                      }
                    ]
                  }
                },
                {
                  title: "外链视频",
                  desc: "支持mp4、webm链接和第三方网站分享视频iframe代码",
                  formName: "video1",
                  formData: {
                    content: "",
                    width: "",
                    height: "",
                    poster: ""
                  },
                  formRules: {
                    content: [
                      {
                        required: true,
                        message: "请输入有效视频链接或代码",
                        trigger: "blur",
                        pattern: /\.(mp4|webm)|<\/iframe>$/
                      }
                    ]
                  }
                }
              ],
              template(data) {
                if (/\.(mp4|webm)$/.test(data.content)) {
                  data.content = `<video controls src="${data.content}" poster="${data.poster}" width="${data.width}" height="${data.height}"></video>`;
                }
                return `<p class="el-tinymce-resource el-tinymce-video" style="text-align: center;" >${data.content}</p>`;
              }
            }
          }
        ];
      }
    },
    // 上传文件的方法
    upload: {
      required: true,
      type: Function
    }
  },
  data() {
    return {
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
        this.reset(tab);
      });
      this.dialogShow = "";
    },
    reset(tab) {
      for (const prop in tab.formData) {
        if (tab.formData.hasOwnProperty(prop)) {
          tab.formData[prop] = "";
        }
      }
      // this.$refs[tab.formName][0].resetFields();
    },
    submit(form, formData, template) {
      form.validate(valid => {
        if (valid) {
          this.editor.insertContent(template(formData));
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
    /*text-align: right;*/
    text-align: center;
    color: #cccccc;
  }

  .el-tinymce-dialog-width-height {
    margin-top: 10px;
    span {
      margin-right: 20px;
    }
    .el-input {
      width: 60px;
      margin-left: 10px;
    }
  }

  .el-tinymce-dialog-upload {
    text-align: center;
  }
  .el-tinymce-dialog-btn {
    width: 100%;
    text-align: right;
    margin-top: 20px;
  }

  .two-col {
    width: calc(100% - 230px);
    display: inline-block;
    vertical-align: top;
  }

  .poster {
    width: 220px;
  }
}
</style>
