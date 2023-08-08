<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const menuList = ref([
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
]);
const routerRun = (path: string) => {
  router.push(path);
};
</script>
<template>
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
