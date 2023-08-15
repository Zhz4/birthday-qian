<script lang="ts" setup>
import VueBaberrage from "./component/vueBaberrage/index.vue";
import Input from "./component/input/index.vue";
import DrawRight from "./component/draw/index.vue";
import Music from "./component/music/index.vue";
import { ref, provide, onMounted } from "vue";
const drawOpenOrNot = ref(false);
provide("drawOpenOrNot", drawOpenOrNot);
const drawOpenOrNotFun = () => {
  drawOpenOrNot.value = !drawOpenOrNot.value;
};
// onMounted(() => {
//   location.reload(); // 刷新页面
// });
</script>

<template>
  <!-- <FlipCountdown></FlipCountdown> -->
  <div class="baberrage">
    <VueBaberrage></VueBaberrage>
  </div>
  <Music v-show="false"></Music>
  <div class="input">
    <Input></Input>
  </div>
  <div class="icon" @click="drawOpenOrNotFun">
    <svg width="30" height="30" viewBox="0 0 48 48" fill="none">
      <path
        d="M13 24h30M5 11h4m4 26h30M13 11h30M5 24h4M5 37h4"
        stroke="#ffff"
        stroke-width="4"
      />
    </svg>
  </div>
  <DrawRight></DrawRight>
</template>

<style lang="scss" scoped>
.input {
  position: absolute;
  bottom: 10%;
  left: 50%;
  z-index: 2;
  transform: translateX(-50%);
}
.music {
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 9;
  transform: translateX(-50%);
}
.baberrage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  z-index: 3;
}
.icon {
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
