<script lang="ts" setup>
import { reactive, provide, ref } from "vue";
import DrawRight from "@/components/home/component/draw/index.vue";
const drawOpenOrNot = ref(false);
provide("drawOpenOrNot", drawOpenOrNot);
const drawOpenOrNotFun = () => {
  drawOpenOrNot.value = !drawOpenOrNot.value;
};
const options = reactive({
  width: "60%", //播放器高度
  height: "55%", //播放器高度
  color: "#409eff", //主题色
  title: "123", //视频名称
  src: "http://rz438zq1h.hn-bkt.clouddn.com/video/0001.%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9-%E3%80%90%E5%BE%B7%E5%8D%8Evs%E6%A0%91%E5%8F%B6%20%E6%98%8E%E7%9C%B8%20%E8%80%80%E6%89%AC%E3%80%91%20%20%E8%99%8E%20%E7%89%99%20%E4%B8%89%20%E8%8B%B1%20%E6%88%98%20%E5%90%95%20%E5%B8%83_%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9bilibili_%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%5B1080P%5D_x264.mp4", //视频源
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
  <div id="video-background">
    <h1 class="title">视频墙</h1>
    <div class="icon" @click="drawOpenOrNotFun">
      <svg width="30" height="30" viewBox="0 0 48 48" fill="none">
        <path
          d="M13 24h30M5 11h4m4 26h30M13 11h30M5 24h4M5 37h4"
          stroke="#ffff"
          stroke-width="4"
        />
      </svg>
    </div>
    <DrawRight></DrawRight>
    <div class="videoPlay-box">
      <vue3VideoPlay
        v-bind="options"
        poster="http://rz438zq1h.hn-bkt.clouddn.com/image/R-C.png"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#video-background {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, #debee7, #dba1b7);
  position: relative;
}
.videoPlay-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  #refPlayerWrap {
    box-sizing: border-box;
    border: 10px solid #fff;
    border-radius: 20px;
  }
}
.title {
  position: absolute;
  left: 50%;
  top: 4%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 50px;
  color: #fff;
  box-sizing: border-box;
}
.icon {
  cursor: pointer;
  background: #b885c2;
  padding: 10px;
  border-radius: 30%;
  z-index: 3;
  position: absolute;
  left: 1%;
  top: 4%;
}
</style>
