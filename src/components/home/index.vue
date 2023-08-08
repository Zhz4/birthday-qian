<script lang="ts" setup>
import VueBaberrage from "./component/vueBaberrage/index.vue";
import Input from "./component/input/index.vue";
import DrawRight from "./component/draw/index.vue";
import { ref, onMounted } from "vue";
const drawOpenOrNot = ref<boolean>(false);
const screenWidth = ref(window.innerWidth); // 创建响应式引用
const draw_size = ref("350");
const drawOpenOrNotFun = () => {
  drawOpenOrNot.value = !drawOpenOrNot.value;
};
onMounted(() => {
  if (screenWidth.value <= 480) {
    draw_size.value = "100%";
  }
});
</script>

<template>
  <!-- <FlipCountdown></FlipCountdown> -->
  <div class="baberrage">
    <VueBaberrage></VueBaberrage>
  </div>
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
  <el-drawer
    v-model="drawOpenOrNot"
    :show-close="false"
    direction="ltr"
    :size="draw_size"
  >
    <template #header="{ titleId, titleClass }">
      <div>
        <h4 :id="titleId" :class="titleClass">菜单</h4>
      </div>
    </template>
    <DrawRight></DrawRight>
    <template #footer>
      <div>
        <el-button type="danger" @click="drawOpenOrNot = false">
          <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
          关闭
        </el-button>
      </div>
    </template>
  </el-drawer>
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
