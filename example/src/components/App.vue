<template>
  <div id="app">
    <h1>上传的mock演示，response永远是一样的数据</h1>
    <el-tinymce :content.sync="content" @content-change="contentChange" />
    <el-tinymce :content.sync="content" />
    <!--    <el-tinymce-->
    <!--      :i18n="i18n"-->
    <!--      :list="list"-->
    <!--      :content.sync="content"-->
    <!--      url="https://unpkg.com/tinymce@~5"-->
    <!--    />-->
  </div>
</template>

<script>
import UCloudUFile from "@panhezeng/ucloud-ufile";
//  import '../../dist/el-tinymce.min'
//  import '../../src'
//  import Vue from 'vue'
//  import ElTinymce from '../../dist/el-tinymce.min'
//  const ElTinymce = require('../../dist/el-tinymce.min')

//  Vue.use(ElTinymce)

const ufile = new UCloudUFile(
  "example-ucloud",
  "https://private-87040-publicexample.apiary-mock.com/upload",
  "https://private-87040-publicexample.apiary-mock.com/upload/token"
);

function upload(option) {
  const file = option.file;
  if (Object.prototype.toString.call(file) !== "[object File]") {
    throw new Error("file参数必须为File数据类型");
  }

  return new Promise((resolve, reject) => {
    ufile.PREFIX = `example/${file.type}`;

    const success = res => {
      if (Object.prototype.toString.call(res) !== "[object Object]") {
        res = { Key: file.name };
      }
      res.url = `http://dummyimage.com/200x100/50B347/FFF&text=${res.Key}`;
      console.log("success", res);
      resolve({ data: res });
    };

    const error = res => {
      reject(new Error("上传失败"));
    };

    const progress = res => {
      if (Object.prototype.toString.call(res) !== "[object Object]") {
        res = { value: 0 };
      }
      console.log("progress", res);
      //          var tips = ''
      //          if (res.status == 'init') {
      //            tips = '初始化分片：'
      //          } else if (res.status == 'uploading') {
      //            tips = '分片上传中：'
      //          } else if (res.status == 'uploaded') {
      //            tips = '完成分片：'
      //          }
      //          var percentComplete = (res.value * 100) + '%'
      res.percent = res.value * 100;
    };

    ufile.hitSliceUpload(file, success, error, progress);
  });
}

const i18n = {
  resource: "Resource",
  btn: {
    reset: "reset",
    submit: "submit"
  },
  width: "宽",
  height: "高",
  align: {
    title: "排版方式",
    default: "默认",
    top: "文字上对齐",
    middle: "文字中对齐",
    bottom: "文字下对齐",
    left: "文字环绕在右侧",
    right: "文字环绕在左侧"
  }
};

const list = [
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
        return `<p class="el-tinymce-resource el-tinymce-image"><img src="${data.content}" width="${data.width}" height="${data.height}"></p>`;
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
        return `<p class="el-tinymce-resource el-tinymce-audio"><audio src="${data.content}" controls></audio></p>`;
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
        return `<p class="el-tinymce-resource el-tinymce-video">${data.content}</p>`;
      }
    }
  }
];

const uploadProps = {
  placeholder: "File link"
};

window.ElSingleUploadOptions = { upload: upload };
require("../../../src");
// require("../../../dist/el-tinymce.min");
// import { ElTinymce } from "../../../src";
// const ElTinymce = () => {
//   return import("../../../dist/el-tinymce.min").then(res => {
//     Object.assign(res.props.upload, {
//       required: false,
//       default: upload
//     });
//
//     //      Object.assign(res.components.Side.props.i18n, i18n)
//
//     return Promise.resolve(res);
//   });
// };

export default {
  name: "App",
  // components: { ElTinymce },
  data() {
    return {
      i18n,
      list,
      uploadProps,
      content: ""
    };
  },
  methods: {
    contentChange(content) {
      console.log(content, "contentChange");
    }
  }
};
</script>
