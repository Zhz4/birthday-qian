<script setup lang="ts">
// import Video from "./components/video/index.vue";
// import Test from "./components/background/index.vue";
import background2 from "./components/background/index2.vue";
// import Test3 from "./components/background/index3.vue";
// import Input from "./components/input/index.vue";
// import VueBaberrage from "./components/vueBaberrage/index.vue";
// const fullscreenLoading = ref(true);

// 播放器宽度
// const width = ref("700px");
// 播放器高度
// const height = ref("400px");
</script>

<template>
  <div class="container">
    <!-- <Test></Test> -->
    <background2></background2>
    <!-- <Test3></Test3> -->
    <!-- <div class="baberrage">
      <VueBaberrage></VueBaberrage>
    </div>
    <div class="input">
      <Input></Input>
    </div> -->
    <!--      <div class="video" :style="{width:width,height:height}">-->
    <!--        <Video :width="width" :height="height"></Video>-->
    <!--      </div>-->
  </div>
</template>

<style lang="scss" scoped>
$hover: false;
$focus: false;
// .container {
//   display: flex;
//   justify-content: center;
//   align-items: flex-end;
//   height: 100vh; // 设置父容器高度为视口高度，确保视频位于屏幕底部
//   .input {
//     $translateY: 3px;
//     margin-bottom: 30px;
//     display: inline-block;
//     &:hover {
//       //  向上过渡
//       //transform: translateY(-$translateY);
//       //transition: transform 0.2s ease-in-out;
//       $hover: true !global;
//     }
//     &:focus {
//       $focus: false !global;
//     }
//     &:not(:hover) {
//       /* 鼠标离开时向下过渡 */
//       //transform: translateY($translateY);
//       //transition: transform 0.2s ease-in-out;
//       $hover: false !global;
//     }
//     &:not(:focus) {
//       $focus: true !global;
//     }
//     @if $hover or $focus {
//       transform: translateY(-$translateY);
//       transition: transform 0.2s ease-in-out;
//     } @else {
//       transform: translateY($translateY);
//       transition: transform 0.2s ease-in-out;
//     }
//   }
// }

.video {
  position: relative;
  z-index: 1;
  margin-bottom: 20px;
}

.baberrage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  z-index: 2;
}
</style>
