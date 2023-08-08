<template>
  <div id="wish-background">
    <h1>许愿墙</h1>
    <div
      class="item"
      v-for="item in items"
      :key="item"
      :style="{ backgroundColor: item.bgColor }"
    >
      {{ item.id }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import ScrollReveal from "scrollReveal";
import { RandomColorGenerator } from "random-color-creator";

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
    distance: "50px",
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
</style>
