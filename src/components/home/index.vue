<template>
  <div>
    <!-- <FlipCountdown></FlipCountdown> -->
    <div class="baberrage">
      <VueBaberrage></VueBaberrage>
    </div>
    <div class="input">
      <Input></Input>
    </div>
    <!-- <div class="music" :v-if="false">
      <Music></Music>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import VueBaberrage from "./component/vueBaberrage/index.vue";
import Input from "./component/input/index.vue";
</script>

<style lang="scss" scoped>
.input {
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
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
  z-index: 2;
}
</style>
