<template>
  <div>
    <h1>ScrollReveal 演示demo</h1>
    <WaterFall gap="10px" width="250px" :delay="true" :data="items">
      <template #default="item">
        <div class="item" :style="{ backgroundColor: item.bgColor }">
          {{ item.number }}
        </div>
      </template>
    </WaterFall>

    <!-- <div
      class="item"
      v-for="item in items"
      :key="item"
      :style="{ backgroundColor: item.bgColor }"
    >
      {{ item.id }}
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import ScrollReveal from "scrollReveal";
import WaterFall from "kuan-vue-waterfall";
import { RandomColorGenerator } from "random-color-creator";

const items = ref<any>([]);
const generateRandomStringLength = (minLength: number, maxLength: number) => {
  const length =
    Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result += characters.charAt(randomIndex);
  }

  return result;
};
for (let i = 1; i <= 100; i++) {
  items.value.push({
    id: i,
    number: generateRandomStringLength(1, 1000),
    bgColor: RandomColorGenerator({ format: "HEX" }),
  });
}

onMounted(() => {
  ScrollReveal().reveal(".dd", {
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
.card {
  width: 100px;
}
</style>
