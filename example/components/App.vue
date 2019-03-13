<template>
  <div id="app">
    <h1>上传的mock演示，response永远是一样的数据</h1>
    <el-tinymce
      :content.sync="content"
      @content-change="contentChange"
      :upload-props="{ tip: 'tip' }"
      url="https://cdn.jsdelivr.net/npm/tinymce@5.0.2"
    />
    <el-tinymce
      :content.sync="content"
      url="https://cdn.jsdelivr.net/npm/tinymce@5.0.2"
    />
    <el-tinymce
      :i18n="i18n"
      :list="list"
      :upload-props="uploadProps"
      :content.sync="content"
      url="https://cdn.jsdelivr.net/npm/tinymce@5.0.2"
    />
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
  }
};

const list = [
  {
    type: "image",
    accept: "image/*",
    title: "Picture",
    dialog: {
      activeName: "image0",
      tabs: [
        {
          title: "Local Picture",
          desc: "Support png, jpg, gif, svg, webp, size cannot exceed 10M",
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
                message: "Please upload pictures",
                trigger: "blur"
              }
            ]
          }
        },
        {
          title: "External Link Picture",
          desc: "Support png, jpg, gif, svg, webp",
          formName: "image1",
          formData: {
            content: ""
          },
          formRules: {
            content: [
              {
                required: true,
                message: "Please enter valid picture link",
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
    title: "Audio",
    dialog: {
      activeName: "audio0",
      tabs: [
        {
          title: "Local Audio",
          desc: "Support mp3|ogg|wav|flac|aac, size can not exceed 100M",
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
                message: "Please upload audio",
                trigger: "blur"
              }
            ]
          }
        },
        {
          title: "External Link Audio",
          desc: "Support mp3|ogg|wav|flac|aac",
          formName: "audio1",
          formData: {
            content: ""
          },
          formRules: {
            content: [
              {
                required: true,
                message: "Please enter valid audio link",
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
    accept: ".mp4,.webm",
    title: "Video",
    dialog: {
      activeName: "video0",
      tabs: [
        {
          title: "Local Video",
          desc: "Support mp4, size can not exceed 1G",
          upload: {
            size: 1048576
          },
          formName: "video0",
          formData: {
            content: ""
          },
          formRules: {
            content: [
              {
                required: true,
                message: "Please upload video",
                trigger: "blur"
              }
            ]
          }
        },
        {
          title: "External Link Video",
          desc:
            "Support mp4|webm links and third-party websites to share video iframe code",
          formName: "video1",
          formData: {
            content: ""
          },
          formRules: {
            content: [
              {
                required: true,
                message: "Please enter valid video link or code",
                trigger: "blur",
                pattern: /\.(mp4|webm)|<\/iframe>$/
              }
            ]
          }
        }
      ],
      template(content) {
        if (/\.(mp4|webm)$/.test(content)) {
          content = `<video src="${content}" controls></video>`;
        }
        return `<p class="el-tinymce-resource el-tinymce-video" style="text-align: center;" >${content}</p>`;
      }
    }
  }
];

const uploadProps = {
  placeholder: "File link"
};

//  window.ElSingleUploadOptions = {upload: upload}
//  require('../../src')

const ElTinymce = () => {
  return import("../../dist/el-tinymce.min").then(res => {
    Object.assign(res.props.upload, {
      required: false,
      default: upload
    });

    //      Object.assign(res.components.Side.props.i18n, i18n)

    return Promise.resolve(res);
  });
};

export default {
  name: "App",
  components: { ElTinymce },
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
