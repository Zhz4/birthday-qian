<script lang="ts" setup>
import { ref, inject } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const menuList = ref([
  {
    name: "首页",
    path: "/home",
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3.5" y="4" width="17" height="16" rx="2" stroke="#ffff" stroke-width="2"/><path d="M3.5 13.5L7 10l5 5.5 2.5-2.5 5.5 5" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="15" cy="9" r="1.5" fill="#ffff" stroke="#ffff"/></svg>',
  },
  {
    name: "照片墙",
    path: "/photo",
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3.5" y="4" width="17" height="16" rx="2" stroke="#ffff" stroke-width="2"/><path d="M3.5 13.5L7 10l5 5.5 2.5-2.5 5.5 5" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="15" cy="9" r="1.5" fill="#ffff" stroke="#ffff"/></svg>',
  },
  {
    name: "视频墙",
    path: "/video",
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6.5.73h9a5.85 5.85 0 015.85 5.85v9a5.85 5.85 0 01-5.85 5.85h-9a5.85 5.85 0 01-5.85-5.85v-9A5.85 5.85 0 016.5.73z" stroke="#fff" stroke-width="1.3"/><mask id="svg_7fcf42edf5__a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><path d="M6.5.73h9a5.85 5.85 0 015.85 5.85v9a5.85 5.85 0 01-5.85 5.85h-9a5.85 5.85 0 01-5.85-5.85v-9A5.85 5.85 0 016.5.73z" fill="#fff" stroke="#fff" stroke-width="1.3"/></mask><g mask="url(#svg_7fcf42edf5__a)"><path clip-rule="evenodd" d="M11.065 8.446a1.4 1.4 0 00-2.101 1.211v3.235a1.4 1.4 0 002.101 1.211l2.795-1.617a1.4 1.4 0 000-2.423l-2.795-1.617z" stroke="#fff" stroke-width="1.3" stroke-linecap="round"/></g><path d="M21.6 8.693l2.394-1.4A1.2 1.2 0 0125.8 8.328v5.603a1.2 1.2 0 01-1.783 1.05L21.6 13.636" stroke="#fff" stroke-width="1.3"/></svg>',
  },
  {
    name: "许愿墙",
    path: "/wish",
    icon: '<svg t="1691482003587" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4944" width="24" height="24"><path d="M249.523831 471.773526l124.656692 124.656691a53.386163 53.386163 0 0 0 76.982847 0l124.656692-124.656691 1.975288-1.975288c42.175069-45.805328 42.175069-119.157917-3.683645-163.148115-18.311454-23.810229-47.673844-34.807779-78.797977-34.807779a120.172254 120.172254 0 0 0-80.666493 31.177519 117.449559 117.449559 0 0 0-163.148116 3.683646A119.157917 119.157917 0 0 0 247.655316 469.798238z m40.306554-126.471821a61.92795 61.92795 0 0 1 87.980397 0 57.763829 57.763829 0 0 1 16.496324 31.177519 18.097909 18.097909 0 0 0 18.311454 16.496325 19.272405 19.272405 0 0 0 18.311454-14.681195c1.81513-12.812679 9.18242-23.810229 18.311455-34.807779a78.103957 78.103957 0 0 1 45.805328-16.496324 59.578958 59.578958 0 0 1 43.990198 18.311454 63.049059 63.049059 0 0 1 0 87.980397l-124.549919 124.656692-124.656691-124.656692a63.049059 63.049059 0 0 1 0-87.980397zM600.270925 725.304416H225.446672a26.693082 26.693082 0 0 0 0 53.386163h374.610708a26.693082 26.693082 0 0 0 0-53.386163z" fill="#ffffff" p-id="4945"></path><path d="M995.862395 457.038945a26.693082 26.693082 0 0 0-26.693081-26.693082l-143.021532-0.480475v-334.731245C826.254554 42.708931 781.78388 0 727.276607 0H127.109359C72.388541 0 27.917867 42.708931 27.917867 95.134143v833.144466c0 52.478599 44.470674 95.134143 99.191492 95.134143h538.613002l224.221886 0.587248a26.693082 26.693082 0 0 0 10.356916-2.08206 114.24639 114.24639 0 0 0 95.774777-113.926073V457.038945z m-330.086648 512.987644H127.109359c-25.251655 0-45.805328-18.738543-45.805329-41.74798V95.134143c0-23.009436 20.553673-41.74798 45.805329-41.74798H727.276607c25.251655 0 45.805328 18.738543 45.805329 41.74798v683.983526l-0.69402 128.874198a116.969084 116.969084 0 0 0 17.93775 62.355039z m276.700485-61.981336c0 34.113758-26.212606 61.821177-58.457849 61.821177s-58.457849-27.760805-58.457849-61.714405l0.42709-83.442573V779.437986l1.548198-296.026276 114.673479 0.373703z" fill="#ffffff" p-id="4946"></path></svg>',
  },
]);
const drawOpenOrNot = ref(inject("drawOpenOrNot"));

const routerRun = (path: string) => {
  router.push(path);
  drawOpenOrNot.value = false;
  // window.open(path, "_blank");
};
const draw_size = ref("350");

// const drawOpenOrNotFun = () => {
//   drawOpenOrNot.value = !drawOpenOrNot.value;
// };
</script>
<template>
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
    <div class="list">
      <div
        class="list-item"
        v-for="(item, index) in menuList"
        :key="index"
        @click="routerRun(item.path)"
      >
        <span class="list-item-icon" v-html="item.icon"></span>
        {{ item.name }}
      </div>
    </div>
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

<style lang="scss">
.list {
  display: flex;
  flex-direction: column;

  justify-content: center;
  gap: 2px;
  &-item {
    $height: 40px;
    $time: 0.2s;
    width: 100%;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    color: #fff;
    text-align: center;
    padding: 0 10px;
    height: $height;
    line-height: $height;
    background: #974f91;
    cursor: pointer;
    border-radius: 5px;
    transition: $time;
    &:hover {
      background: #c9a0d8;
      transition: $time;
    }
    &-icon {
      display: inline-block;
      margin-right: 5px;
      width: 24px;
      height: 24px;
    }
  }
}
</style>
