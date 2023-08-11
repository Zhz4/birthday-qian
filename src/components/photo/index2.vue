<template>
  <Masonry ref="masonry" :options="masonryOptions">
    <MasonryTile class="item" v-for="item in items" :key="item">
      <!-- 在这里放置你的图片 -->
      <img :src="item.path" alt="Image" />
    </MasonryTile>
  </Masonry>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Masonry, MasonryTile } from "vue-masonry";
import imagesLoaded from "imagesloaded";

// 响应式数据
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
// Masonry 的配置选项
const masonryOptions = ref({
  // 配置选项
});

// 创建 ref 引用
const masonryRef = ref(null);

// 在组件挂载后执行的逻辑
onMounted(() => {
  if (masonryRef.value) {
    // 使用 ImagesLoaded 监听图片加载完成事件
    imagesLoaded(masonryRef.value?.$el, () => {
      // 图片加载完成时触发的回调函数
      // 重新布局 Masonry
      masonryRef.value?.layout();
    });
  }
});
</script>
<style lang="scss">
.item {
  width: 100px;
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
</style>
