<script lang="ts" setup>
import vueDanmaku from "vue3-danmaku";
import { ref, watch, getCurrentInstance } from "vue";
const danmus = ref([
  "小白：生日快乐快乐快乐快乐！！！！",
  "danmu2",
  "danmu3",
  "...",
]);
// 获取到 全局事件总线
const { Bus } = getCurrentInstance()!.appContext.config.globalProperties;
// 计算屏幕宽度
const width = ref(document.body.clientWidth);
const height = ref(document.body.clientHeight);
// 监听窗口大小变化
watch(
  () => [window.innerWidth, window.innerHeight],
  ([newWidth, newHeight]) => {
    width.value = newWidth;
    height.value = newHeight;
    console.log(width.value, height.value);
  }
);
Bus.on("danmu", (value: string) => {
  console.log(value);
  danmus.value.push(value);
});
</script>
<template>
  <div>
    <vue-danmaku
      v-model:danmus="danmus"
      style="height: 50vh; width: 100vw"
      :debounce="800"
      useSlot
      loop
      :channels="0"
      :randomChannel="true"
    >
      <!--  v-slot:dm="{ danmu }" -->
      <template v-slot:dm="{ danmu }">
        <div class="danmuStyle">
          <span class="Uimg">
            <img src="../../assets/icon/birthday2.png" alt="birthday" />
          </span>
          {{ danmu }}
        </div>
      </template>
    </vue-danmaku>
  </div>
</template>

<style lang="scss" scoped>
.danmuStyle {
  display: flex;
  align-items: center;
  background-color: rgba(34, 34, 34, 0.7);
  padding: 5px;
  border-radius: 30px;
  color: #fff;
  font-size: 16px;
  .Uimg {
    $width: 55px;
    $ratio: 2.1;
    width: 64px;
    height: calc(#{$width} / #{$ratio});
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  //font-weight: bold;
}
</style>
