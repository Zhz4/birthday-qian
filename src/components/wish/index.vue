<template>
  <div id="wish-background">
    <div id="icon" @click="drawOpenOrNotFun">
      <svg width="30" height="30" viewBox="0 0 48 48" fill="none">
        <path
            d="M13 24h30M5 11h4m4 26h30M13 11h30M5 24h4M5 37h4"
            stroke="#ffff"
            stroke-width="4"
        />
      </svg>
    </div>
    <DrawRight></DrawRight>
    <h1 id="title">许愿墙</h1>
    <div
        class="item"
        v-for="(item, index) in items"
        :key="index"
        :style="{ backgroundColor: item.bgColor }"
    >
      <span class="content">{{ item.content }}</span>
      <span class="time">{{ timeFormat(item.time) }}</span>
      <span class="address">来自-{{ item.address }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref, onMounted, provide} from "vue";
import ScrollReveal from "scrollReveal";
import DrawRight from "@/components/home/component/draw/index.vue";
import {RandomColorGenerator} from "random-color-creator";
import {getWishList} from "@/api/wish.ts";
import timeFormat from "@/util/timeSampTotime.ts";

const drawOpenOrNot = ref(false);
provide("drawOpenOrNot", drawOpenOrNot);
const drawOpenOrNotFun = () => {
  drawOpenOrNot.value = !drawOpenOrNot.value;
};
const items = ref([]);

async function getWish() {
  try {
    // 获取许愿墙列表
    getWishList().then((res: any) => {
      items.value = res.data;
      items.value.forEach((item: any) => {
        item.bgColor = RandomColorGenerator({format: "HEX"});
      });
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }

}

onMounted(async () => {
  await getWish();
  ScrollReveal().reveal(".item", {
    reset: true,
    distance: "40px",
    origin: "left",
    interval: 80,
    opacity: 0.1,
    rotate: {
      x: 20,
      z: 20,
    },
    scale: 0.6,
  });
});
</script>

<style>
#wish-background {
  background: linear-gradient(to bottom, #debee7, #dba1b7);
  min-height: 100vh;
}

#title {
  text-align: center;
  font-size: 50px;
  color: #fff;
  margin: 0;
  padding: 20px;
}

.item {
  width: 80%;
  margin: 0 auto;
  word-wrap: break-word;
  position: relative;
  border: 3px solid #fff;
  font-size: 80px;
  line-height: 72px;
  text-align: center;
  border-radius: 15px;
  margin: 10px auto;
  font-size: 20px;
  color: #fff;

.time {
  position: absolute;
  right: 0;
  top: 20px;
  color: #d1a277;
  font-size: 15px;
  margin-right: 10px;
}

.address {
  position: absolute;
  right: 0;
  top: 0;
  font-weight: bold;
  color: #f5f5f59a;
  font-size: 15px;
  margin-right: 10px;
}

}
@media screen and (max-width: 696px) {
  .item .time {
    display: none;
  }

  .item .address {
    display: none;
  }
}

.card {
  width: 100px;
}

#icon {
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
