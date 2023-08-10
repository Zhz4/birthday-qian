<template>
  <div id="photo-background">
    <h1 id="title">照片墙</h1>
    <div
      v-masonry="containerId"
      gutter="10"
      transition-duration="0.3s"
      item-selector=".photo-item"
      class="wrapper"
    >
      <div
        v-for="(item, index) in items"
        v-masonry-tile
        :key="index"
        class="photo-item"
        :style="{ width: photowidth }"
      >
        <el-image :src="item.path" lazy />
      </div>
    </div>
    <!-- <WaterFall
      class="wall"
      gap="10px"
      :width="photowidth"
      :delay="true"
      :data="items"
    >
      <template #default="item">
        <div class="photo-item">
          <el-image :src="item.path" lazy />
        </div>
      </template>
    </WaterFall> -->
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import WaterFall from "kuan-vue-waterfall";
// import waterfall from "vue-waterfall2";
// import { getAllImage } from "@/api/image";
const containerId = ref(42);
const urls = [
  "http://rz438zq1h.hn-bkt.clouddn.com/image/default%20%2810%29.jpeg",
  "http://rz438zq1h.hn-bkt.clouddn.com/image/default%20%2811%29.jpeg",
  "http://rz438zq1h.hn-bkt.clouddn.com/image/default%20%2812%29.jpeg",
  "http://rz438zq1h.hn-bkt.clouddn.com/image/default%20%2813%29.jpeg",
  "http://rz438zq1h.hn-bkt.clouddn.com/image/default%20%2814%29.jpeg",
  "http://rz438zq1h.hn-bkt.clouddn.com/image/default%20%2815%29.jpeg",
  "http://rz438zq1h.hn-bkt.clouddn.com/image/default%20%2816%29.jpeg",
  "http://rz438zq1h.hn-bkt.clouddn.com/image/default%20%2817%29.jpeg",
  "http://rz438zq1h.hn-bkt.clouddn.com/image/default%20%2818%29.jpeg",
  "http://rz438zq1h.hn-bkt.clouddn.com/image/default%20%2819%29.jpeg",
  "http://rz438zq1h.hn-bkt.clouddn.com/image/default%20%2820%29.jpeg",
  "http://rz438zq1h.hn-bkt.clouddn.com/image/default%20%2821%29.jpeg",
  "http://rz438zq1h.hn-bkt.clouddn.com/image/default%20%2822%29.jpeg",
  "http://rz438zq1h.hn-bkt.clouddn.com/image/default%20%284%29.jpeg",
  "http://rz438zq1h.hn-bkt.clouddn.com/image/default%20%285%29.jpeg",
  "http://rz438zq1h.hn-bkt.clouddn.com/image/default%20%286%29.jpeg",
  "http://rz438zq1h.hn-bkt.clouddn.com/image/default%20%287%29.jpeg",
  "http://rz438zq1h.hn-bkt.clouddn.com/image/default%20%288%29.jpeg",
  "http://rz438zq1h.hn-bkt.clouddn.com/image/default%20%289%29.jpeg",
];
const items = urls.map((url) => ({ path: url }));
const photowidth = ref("250px");
// const screenWidth = ref(window.innerWidth); // 创建响应式引用
// getAllImage().then((res: any) => {
//   res.data.map((item: any) => {
//     items.value.push({
//       path: "http://47.120.4.169:7070" + item.path,
//     });
//   });
// });
</script>

<style>
#photo-background {
  background: linear-gradient(to bottom, #debee7, #dba1b7);
}
#title {
  text-align: center;
  font-size: 50px;
  color: #fff;
  margin: 0;
  padding: 20px;
}
.photo-item {
  width: 100%;
  word-wrap: break-word;
  /* height: 7%; */
  font-size: 80px;
  line-height: 72px;
  text-align: center;
  /* background-color: lightgreen; */
  border-radius: 10px;
  margin: 10px auto;
  border: 3px solid #fff;
  font-size: 28px;
  flex: 1 1 0;
  overflow: hidden;
  color: #fff;
}
img {
  width: 100%;
}
.wrapper {
  width: 90%;
  margin: 0 auto;
}
</style>
