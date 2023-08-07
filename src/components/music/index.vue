<script lang="ts" setup>
import aplayer from "vue3-aplayer";
import { ref } from "vue";
const autoplay = ref(true);
</script>
<template>
  <div class="music">
    <aplayer
      :autoplay="autoplay"
      mini
      theme="#db9cbf"
      :music="{
        title: '生日歌',
        artist: '卓依婷',
        src: 'http://47.120.4.169:7070/uploadFile/music/%E7%94%9F%E6%97%A5%E6%AD%8C%20-%20%E5%8D%93%E4%BE%9D%E5%A9%B7.mp3',
        pic: 'http://47.120.4.169:7070/uploadFile/image/e23db62a183e4e8a923d9fbc2cfae9e3.jpg',
      }"
    />
  </div>
</template>

<style lang="scss" scoped>
.music {
  width: 500px;
  // border-radius: 15%;
  overflow: hidden;
}
</style>
