<template>
  <div id="photo-background">
    <h1 id="title">照片墙</h1>
    <ul id="grid">
      <li class="item" v-for="item in data">
        <img class="img" :src="item" @load="checkImageLoad"/>
      </li>
    </ul>
    <h1 id="end">未完待续...</h1>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from "vue";
import Masonry from "masonry-layout";

const grid = ref<Masonry | null>(null);
const data = ref([
  "http://rz438zq1h.hn-bkt.clouddn.com/image/default%20%2811%29.jpeg",
  "http://rz438zq1h.hn-bkt.clouddn.com/image/default%20%2812%29.jpeg",
  "http://rz438zq1h.hn-bkt.clouddn.com/image/default%20%2813%29.jpeg",
  "http://rz438zq1h.hn-bkt.clouddn.com/image/default%20%2810%29.jpeg",
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
]);

function initMasonry() {
  grid.value = new Masonry("#grid", {
    itemSelector: ".item",
    columnWidth: ".item",
    gutter: 5,
    fitWidth:true,
    percentPosition: true,
  });
}

function checkImageLoad(event: Event) {
  const img = event.target as HTMLImageElement;
  if (img.height === 0) {
    img.loaded = false;
  } else {
    img.loaded = true;
    grid.value?.layout();
  }
}

onMounted(() => {
  initMasonry();
});
</script>
<style lang="scss">
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

#grid {
  width: 90%;
  margin: 0 auto;
  .item {
    width: 250px;
    border-radius: 10px;
    //margin: 10px auto;
    border: 3px solid #fff;
    font-size: 28px;
    flex: 1 1 0;
    overflow: hidden;
    color: #fff;
    //margin:0 auto;
    img {
      width: 100%;
    }
  }
}
#end{
  text-align: center;
  margin: 20px 0;
  color: #FFFFFF;
}
@media screen and (max-width: 450px) {
  #grid .item {
    width: 160px;
  }
}
</style>
