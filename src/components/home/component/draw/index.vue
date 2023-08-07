<script lang="ts" setup>
import { ref } from "vue";

const list = ref(["照片墙", "视频墙"]);
</script>

<template>
  <div class="list">
    <div class="list-item" v-for="item in list" :key="item">
      {{ item }}
    </div>
  </div>
</template>

<style lang="scss">
.list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  &-item {
    $height: 40px;
    width: 100%;
    text-align: center;
    height: $height;
    line-height: $height;
    background-color: red;
    cursor: pointer;
    &:hover {
      background-color: blue;
    }
  }
}
</style>
