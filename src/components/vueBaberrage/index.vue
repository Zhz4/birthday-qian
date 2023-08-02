<script lang="ts" setup>
import vueDanmaku from 'vue3-danmaku'
import {ref, watch} from 'vue'
const danmus = ref(['danmu1', 'danmu2', 'danmu3', '...'])
// 计算屏幕宽度
const width = ref(document.body.clientWidth)
const height = ref(document.body.clientHeight)
// 监听窗口大小变化
watch(
    () => [window.innerWidth, window.innerHeight],
    ([newWidth, newHeight]) => {
      width.value = newWidth;
      height.value = newHeight;
      console.log(width.value, height.value)
    }
);
</script>
<template>
  <div>
    <vue-danmaku v-model:danmus="danmus" style="height:50vh; width:100vw" useSlot loop :channels="0">
      <template v-slot:dm="{ index, danmu }">
        <span>{{ index }}{{ danmu}}</span>
      </template>
    </vue-danmaku>
  </div>
</template>

<style lang="scss" scoped>
span {
  color: darkorange;
}
</style>
