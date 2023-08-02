<script setup lang="ts">
import { ref } from "vue";
import Video from "./components/video/index.vue";
import VueBaberrage from "./components/vueBaberrage/index.vue";
// 播放器宽度
const width = ref("700px");
// 播放器高度
const height = ref("400px");

</script>

<template>
  <div class="container">
      <div class="baberrage">
        <VueBaberrage></VueBaberrage>
      </div>
      <div class="video" :style="{width:width,height:height}">
        <Video :width="width" :height="height"></Video>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100vh; // 设置父容器高度为视口高度，确保视频位于屏幕底部
}

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
