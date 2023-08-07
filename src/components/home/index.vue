<script lang="ts" setup>
import VueBaberrage from "./component/vueBaberrage/index.vue";
import Input from "./component/input/index.vue";
</script>

<template>
  <!-- <FlipCountdown></FlipCountdown> -->
  <div class="baberrage">
    <VueBaberrage></VueBaberrage>
  </div>
  <div class="input">
    <Input></Input>
  </div>

  <!-- <div class="music" :v-if="true">
      <Music></Music>
    </div> -->
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
</style>
