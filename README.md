# el-tinymce

## 示例

[点击预览](https://panhezeng.github.io/el-tinymce/)

示例代码目录 /example

## 说明

基于 tinymce 富文本编辑器和 element-ui 组件库开发，tinymce 使用的是@panhezeng/vue-tinymce 模块，风格模仿微信公众号后台的富文本编辑器，增加了资源侧边栏。

如有定制需要，可以 fork 自行修改，建议阅读 tinymce 和 element-ui 等相关文档

首先请按 element-ui 官方文档安装 element-ui，确保能正常使用 element-ui

index.vue

```vue
<script>
export default {
  // 侧边栏属性通过$attrs传入，side 是否显示侧边栏，image，audio，video是否显示对应项目 i18n 国际化
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
  }
};
</script>
```

Side.vue

```vue
<script>
export default {
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
          }
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
                    content: ""
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
                    content: ""
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
                return `<p class="el-tinymce-resource el-tinymce-image" style="text-align: center;" ><img src="${
                  data.content
                }"></p>`;
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
                return `<p class="el-tinymce-resource el-tinymce-audio" style="text-align: center;" ><audio src="${
                  data.content
                }" controls></audio></p>`;
              }
            }
          },
          {
            type: "video",
            title: "视频",
            dialog: {
              activeName: "video0",
              poster: {
                title: "封面",
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
                  data.content = `<video controls src="${
                    data.content
                  }" poster="${data.poster}"></video>`;
                }
                return `<p class="el-tinymce-resource el-tinymce-video" style="text-align: center;" >${
                  data.content
                }</p>`;
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
  }
};
</script>
```

## 用法

如果不希望每次使用组件时都显式传入 upload prop，则可以在全局注册组件前，通过 Vue.use 方式安装组件，给 use 传第二个参数，或者直接赋值 window.ElSingleUploadOptions，数据结构要求{upload:foo}。upload 是上传接口方法，这样后面多处使用该组件实例时就不需要显式传入 upload prop 了。
还有一种方法，就是再包一层，在包裹 js 里，直接修改此组件的 props，其他地方使用修改后的组件

### internal vue element-ui 方式

`npm i vue element-ui tinymce @panhezeng/el-tinymce -S`

#### 异步

```vue
<script>
function upload(option) {}
const ElTinymce = () => {
  return import("../../dist/el-tinymce.min").then(res => {
    Object.assign(res.props.upload, {
      required: false,
      default: upload
    });
    return Promise.resolve(res);
  });
};

export default {
  components: { ElTinymce }
};
</script>
```

#### 同步

##### export default components

```vue
<script>
import ElTinymce from "@panhezeng/el-tinymce";

export default {
  components: { ElTinymce }
};
</script>
```

##### Vue.use

```vue
<script>
import Vue from "vue";
import ElTinymce from "@panhezeng/el-tinymce";

Vue.use(ElTinymce);
</script>
```

### external vue element-ui 方式

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/element-ui@~2/lib/theme-chalk/index.css"
/>
<script src="https://cdn.jsdelivr.net/combine/npm/vue@~2/dist/vue.min.js,npm/element-ui@~2/lib/index.js"></script>
```

`npm i tinymce @panhezeng/el-tinymce -S`

```javascript
// auto install
import "@panhezeng/el-tinymce";
```

or

```html
<!--auto install-->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/element-ui@~2/lib/theme-chalk/index.css"
/>
<script src="https://cdn.jsdelivr.net/combine/npm/vue@~2/dist/vue.min.js,npm/element-ui@~2/lib/index.js,npm/tinymce@~5/tinymce.min.js,npm/@panhezeng/el-tinymce@latest/dist/el-tinymce.min.js"></script>
```

## 编译

```bash
# install dependencies
npm install

# 运行插件使用示例
npm run dev:example

# 编译插件
npm run build

# 发版
npm set @panhezeng:registry https://registry.npmjs.org/ && npm version patch && npm publish --access public && npm set @panhezeng:registry https://registry.npm.taobao.org/

```
