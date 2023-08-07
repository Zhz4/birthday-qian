<script setup lang="ts">
// import Home from "@/components/home/index.vue";
</script>

<template>
  <div class="container">
    <router-view></router-view>
    <!-- <Home></Home> -->
  </div>
</template>

<style lang="scss" scoped>
// $hover: false;
// $focus: false;
// .container {
//   display: flex;
//   justify-content: center;
//   align-items: flex-end;
//   height: 100vh; // 设置父容器高度为视口高度，确保视频位于屏幕底部
//   .input {
//     $translateY: 3px;
//     margin-bottom: 30px;
//     display: inline-block;
//     &:hover {
//       //  向上过渡
//       //transform: translateY(-$translateY);
//       //transition: transform 0.2s ease-in-out;
//       $hover: true !global;
//     }
//     &:focus {
//       $focus: false !global;
//     }
//     &:not(:hover) {
//       /* 鼠标离开时向下过渡 */
//       //transform: translateY($translateY);
//       //transition: transform 0.2s ease-in-out;
//       $hover: false !global;
//     }
//     &:not(:focus) {
//       $focus: true !global;
//     }
//     @if $hover or $focus {
//       transform: translateY(-$translateY);
//       transition: transform 0.2s ease-in-out;
//     } @else {
//       transform: translateY($translateY);
//       transition: transform 0.2s ease-in-out;
//     }
//   }
// }

// .video {
//   position: relative;
//   z-index: 1;
//   margin-bottom: 20px;
// }

// .baberrage {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 50%;
//   z-index: 2;
// }
</style>
