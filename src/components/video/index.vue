<script lang="ts" setup>
import { reactive } from "vue";
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  width: {
    type: String,
  },
  height: {
    type: String,
  },
});
const options = reactive({
  width: props.width, //播放器高度
  height: props.height, //播放器高度
  color: "#409eff", //主题色
  title: "123", //视频名称
  src: "http://47.120.4.169:7070/uploadFile/video/050ebed4d509455ca8c024005d40b3be.mp4", //视频源
  muted: false, //静音
  webFullScreen: false,
  speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
  autoPlay: false, //自动播放
  loop: false, //循环播放
  mirror: false, //镜像画面
  ligthOff: false, //关灯模式
  volume: 0.7, //默认音量大小
  control: true, //是否显示控制
  controlBtns: [
    "audioTrack",
    "quality",
    "speedRate",
    "volume",
    "setting",
    "pip",
    "pageFullScreen",
    "fullScreen",
  ], //显示所有按钮,
});
</script>
<template>
  <div>
    <vue3VideoPlay
      v-bind="options"
      poster="http://localhost:8080/image/294effeaa0124c8ba308414588e400f3.jpg"
    />
  </div>
</template>

<style lang="scss" scoped></style>
