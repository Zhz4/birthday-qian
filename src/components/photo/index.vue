<template>
  <div id="photo-background">
    <h1 id="title">照片墙</h1>
<!--    <el-alert class="tip" title="由于图片存放在本地服务器，服务器比较菜，所以加载图片需要等待一段时间...." type="warning"/>-->
    <el-alert
        class="tip"
        title="温馨提示"
        type="warning"
        description="由于图片存放在本地服务器，服务器配置比较菜，所以加载图片需要等待一段时间...."
        show-icon
    />
    <ul id="grid">
      <li class="item" v-for="(item,index) in data">
<!--        <img class="img" :src="item" @load="checkImageLoad"/>-->
        <el-image class="img" :src="item" @load="checkImageLoad" :preview-src-list="data" :initial-index="index" lazy></el-image>
      </li>
    </ul>
    <h1 id="end">未完待续...</h1>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import Masonry from "masonry-layout";
import {getAllImage} from "@/api/image";
import router from "@/router";

const grid = ref<Masonry | null>(null);
const data = ref([]);

async function fetchData() {
  try {
    const response = await getAllImage();
    data.value = response.data.map((item) => {
      return "http://47.120.4.169:7070" + item.path;
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
function initMasonry() {
  // 确保之前的Masonry实例存在，如果存在则先销毁
  if (grid.value) {
    grid.value.destroy();
  }
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
onMounted(async () => {
  await fetchData();
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
$width:90%;
#grid {
  width: $width;
  margin: 0 auto;
  .item {
    width: 250px;
    border-radius: 10px;
    //margin: 10px auto;
    border: 3px solid #fff;
    font-size: 28px;
    flex: 1 1 0;
    overflow: hidden;
    margin-bottom: 10px;  /* 自定义的下边距 */
    background-color: #fff;
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
.tip{
  width:  $width;
  margin: 0 auto 20px;
}
@media screen and (max-width: 450px) {
  #grid .item {
    width: 160px;
  }
}
</style>
