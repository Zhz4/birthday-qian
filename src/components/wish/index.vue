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
      v-for="item in items"
      :key="item"
      :style="{ backgroundColor: item.bgColor }"
    >
      sldjfsjdlfjsldkjflsdjflsjlafjsldajflksdjlfjadslflasdklfjaksldfjljaskdlfjlkajsdklfjlksdjlfjlkasjdlfjlsjdlkfjsldj
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, provide } from "vue";
import ScrollReveal from "scrollReveal";
import DrawRight from "@/components/home/component/draw/index.vue";
import { RandomColorGenerator } from "random-color-creator";
const drawOpenOrNot = ref(false);
provide("drawOpenOrNot", drawOpenOrNot);
const drawOpenOrNotFun = () => {
  drawOpenOrNot.value = !drawOpenOrNot.value;
};
const items = ref<any>([]);

for (let i = 1; i <= 100; i++) {
  items.value.push({
    id: i,
    bgColor: RandomColorGenerator({ format: "HEX" }),
  });
}

onMounted(() => {
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
  border: 3px solid #fff;
  /* height: 7%; */
  font-size: 80px;
  line-height: 72px;
  text-align: center;
  /* background-color: lightgreen; */
  border-radius: 15px;
  margin: 10px auto;
  font-size: 28px;
  flex: 1 1 0;
  color: #fff;
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
