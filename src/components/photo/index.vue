<template>
  <div>
    <h1>ScrollReveal 演示demo</h1>
    <WaterFall gap="10px" :width="photowidth" :delay="true" :data="items">
      <template #default="item">
        <div class="item">
          <img :src="item.path" alt="" />
        </div>
      </template>
    </WaterFall>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import WaterFall from "kuan-vue-waterfall";
import { getAllImage } from "@/api/image";

const items = ref([]);
const photowidth = ref("250px");
const screenWidth = ref(window.innerWidth); // 创建响应式引用
getAllImage().then((res: any) => {
  res.data.map((item: any) => {
    items.value.push({
      path: "http://47.120.4.169:7070" + item.path,
    });
  });
});
onMounted(() => {
  if (screenWidth.value < 480) {
    photowidth.value = "150px";
  }
});
</script>

<style>
.item {
  width: 100%;
  word-wrap: break-word;
  /* height: 7%; */
  font-size: 80px;
  line-height: 72px;
  text-align: center;
  /* background-color: lightgreen; */
  border-radius: 8px;
  margin: 10px auto;
  font-size: 28px;
  flex: 1 1 0;
  color: #fff;
}
img {
  width: 100%;
}
.card {
  width: 100px;
}
</style>
