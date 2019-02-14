<template>
  <div id="app">
    <h1>上传的mock演示，response永远是一样的数据</h1>
    <el-tinymce
      :content.sync="content"
      @content-change="contentChange"
      :i18n="i18n.default()"
    />
    <el-tinymce :content.sync="content" />
    <el-tinymce :content.sync="content" />
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
  type: Object,
  default() {
    return {
      resource: "Resource",
      picture: "Picture",
      localPicture: "Local Picture",
      localPictureDesc:
        "Support png, jpg, gif, svg, webp, size cannot exceed 10M",
      localPictureRule: "Please upload pictures",
      externalLinkPicture: "External Link Picture",
      externalLinkPictureDesc: "Support png, jpg, gif, svg, webp",
      externalLinkPictureRule: "Please enter valid picture link",
      audio: "Audio",
      localAudio: "Local Audio",
      localAudioDesc:
        "Support mp3、ogg、wav、flac、aac, size can not exceed 100M",
      localAudioRule: "Please upload audio",
      externalLinkAudio: "External Link Audio",
      externalLinkAudioDesc: "Support mp3、ogg、wav、flac、aac",
      externalLinkAudioRule: "Please enter valid audio link",
      video: "Video",
      localVideo: "Local Video",
      localVideoDesc: "Support mp4, size can not exceed 1G",
      localVideoRule: "Please upload video",
      externalLinkVideo: "External Link Video",
      externalLinkVideoDesc:
        "Support mp4 links and third-party websites to share video iframe code",
      externalLinkVideoRule: "Please enter valid video link or code",
      btn: {
        reset: "重置",
        submit: "提交"
      }
    };
  }
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
