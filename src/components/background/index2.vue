<template>
  <div class="box">
    <div ref="vantaRef" style="width: 100%; height: 100vh">
      <keep-alive>
        <router-view style="position: relative; z-index: 2"></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import * as THREE from "three";
import FOG from "vanta/src/vanta.fog";
export default {
  setup() {
    const vantaRef = ref(null);
    let vantaEffect = null;

    onMounted(() => {
      vantaEffect = FOG({
        el: vantaRef.value,
        THREE: THREE,
      });

      VANTA.FOG({
        el: vantaRef.value,
        /*以下为样式配置*/
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: 0xe6b8ff, // 较亮的高光颜色
        midtoneColor: 0xffa8a8, // 较亮的中音颜色
        lowlightColor: 0x7a5e8e, // 较亮的低光颜色
        baseColor: 0xf5f5f5, // 较亮的基准颜色
        blurFactor: 0.52,
        speed: 1.2,
        zoom: 0.3,
      });
    });

    onBeforeUnmount(() => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    });

    return {
      vantaRef,
    };
  },
};
</script>

<style lang="scss" scoped>
.box {
  position: relative;
}
</style>
