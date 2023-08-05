<script lang="ts" setup>
import vueDanmaku from "vue3-danmaku";
import { ref, watch, getCurrentInstance, reactive, onMounted } from "vue";
import { Danmu } from "@/interface/index";
import { getDanmuList } from "@/api/danmu";
const danmus = reactive<Array<Danmu>>([]);

// 获取到 全局事件总线
const { Bus } = getCurrentInstance()!.appContext.config.globalProperties;
// 计算屏幕宽度
const width = ref(document.body.clientWidth);
const height = ref(document.body.clientHeight);
// 监听窗口大小变化
watch(
  () => [window.innerWidth, window.innerHeight],
  ([newWidth, newHeight]: any) => {
    width.value = newWidth;
    height.value = newHeight;
    console.log(width.value, height.value);
  }
);
Bus.on("danmu", (value: Danmu) => {
  danmus.push(value);
  console.log(danmus);
});
const getDanmu = () => {
  getDanmuList().then((res: any) => {
    danmus.push(...res.data);
  });
};
onMounted(() => {
  getDanmu();
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
          {{ danmu.content }}
        </div>
      </template>
    </vue-danmaku>
  </div>
</template>

<style lang="scss" scoped>
.danmuStyle {
  display: flex;
  align-items: center;
  background-color: rgba(144, 86, 158, 0.7);
  border: 2px solid #cccccc;
  padding: 5px 10px;
  border-radius: 30px;
  color: #fff;
  font-size: 16px;
  .Uimg {
    $width: 55px; // 只用修改这
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
