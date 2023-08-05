<template>
  <div class="box">
    <div ref="vantaRef" style="width: 100%; height: 100vh"></div>
    <div class="banner">
      <h1>水香木鱼</h1>
      <h6>
        &ensp;&ensp;SHUI&ensp;&ensp;&ensp;XIANG&ensp;&ensp;&ensp;&ensp;MU&ensp;&ensp;&ensp;&ensp;&ensp;YU
      </h6>
      <p>活动时间：待定</p>
      <p>组织单位：待定</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import * as THREE from "three";
import RINGS from "vanta/src/vanta.rings";

export default {
  setup() {
    const vantaRef = ref(null);
    let vantaEffect = null;

    onMounted(() => {
      vantaEffect = RINGS({
        el: vantaRef.value,
        THREE: THREE,
      });

      VANTA.RINGS({
        el: vantaRef.value,
        /*以下为样式配置*/
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x0,
        color: 0xb0d29d,
        backgroundAlpha: 0.84,
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
  .banner {
    z-index: 999;
    position: absolute;
    top: 30%;
    left: 10%;
    color: #fff;
  }
  h1 {
    font-size: 66px;
  }
  p {
    margin-top: 60px;
    font-size: 18px;
  }
}
</style>
