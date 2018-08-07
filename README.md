# el-tinymce

## 示例

[点击预览](https://panhezeng.github.io/el-tinymce/)

示例代码目录 /example

## 说明

基于tinymce富文本编辑器和element-ui组件库开发，tinymce使用的是@panhezeng/vue-tinymce模块，风格模仿微信公众号后台的富文本编辑器，增加了资源侧边栏。

如有定制需要，可以fork自行修改，建议阅读tinymce和element-ui等相关文档

首先请按element-ui官方文档安装element-ui，确保能正常使用element-ui

index.vue
```vue
<script>
  export default {
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
      config: Object
    },
  }
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
        default () {
          return {
            resource: '资源',
            picture: '图片',
            localPicture: '本地图片',
            localPictureDesc: '支持png、jpg、gif、svg、webp，大小不能超过2M',
            localPictureRule: '请上传图片',
            externalLinkPicture: '外链图片',
            externalLinkPictureDesc: '支持png、jpg、gif、svg、webp',
            externalLinkPictureRule: '请输入有效图片链接',
            audio: '音频',
            localAudio: '本地音频',
            localAudioDesc: '支持mp3，大小不能超过50M',
            localAudioRule: '请上传音频',
            externalLinkAudio: '外链音频',
            externalLinkAudioDesc: '支持mp3',
            externalLinkAudioRule: '请输入有效音频链接',
            video: '视频',
            localVideo: '本地视频',
            localVideoDesc: '支持mp4，大小不能超过500M',
            localVideoRule: '请上传视频',
            externalLinkVideo: '外链视频',
            externalLinkVideoDesc: '支持mp4链接和第三方网站分享视频iframe代码',
            externalLinkVideoRule: '请输入有效视频链接或代码',
            btn: {
              reset: '重置',
              submit: '提交'
            }
          }
        }
      }
    },
  }
</script>
```

## 用法

### internal vue element-ui 方式

`npm i vue element-ui @panhezeng/el-tinymce -S`

#### 异步
```vue
<script>
  const ElTinymce = () => import('@panhezeng/el-tinymce')
 
   export default {
     components: {ElTinymce}
   }
</script>
```

#### 同步

##### export default components
```vue
<script>
    import ElTinymce from '@panhezeng/el-tinymce'

    export default {
      components: {ElTinymce}
    }
</script>
```

##### Vue.use
```vue
<script>
    import Vue from 'vue'
    import ElTinymce from '@panhezeng/el-tinymce'

    Vue.use(ElTinymce)
</script>
```

### external vue element-ui 方式

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/element-ui@latest/lib/theme-chalk/index.css">
<script src="https://cdn.jsdelivr.net/npm/vue@latest/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/element-ui@latest/lib/index.js"></script>
```

`npm i @panhezeng/el-tinymce -S`

```javascript
// auto install
import '@panhezeng/el-tinymce'
```
or 
```html
<!--auto install-->
<script src="https://cdn.jsdelivr.net/npm/@panhezeng/el-tinymce@latest/dist/el-tinymce.min.js"></script>
```

## 编译

``` bash
# install dependencies
npm install

# 运行插件使用示例
npm run dev:example

# 编译插件
npm run build

# 发版
npm version patch
npm publish --access public

```

