<template>
  <div class="box">
    <div ref="vantaRef" style="width: 100vw; height: 100vh"></div>
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
import HALO from "vanta/src/vanta.halo";

export default {
  setup() {
    const vantaRef = ref(null);
    let vantaEffect = null;

    onMounted(() => {
      vantaEffect = HALO({
        el: vantaRef.value,
        THREE: THREE,
      });
      VANTA.HALO({
        el: vantaRef.value,
        /*以下为样式配置*/
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        baseColor: 0xd9, // 基准颜色
        backgroundColor: 0x0, // 背景颜色 需十进制
        amplitudeFactor: 1.1, // 振幅因子
        xOffset: -0.1, // 移动到X轴
        yOffset: -0.17, // 移动到Y轴
        size: 2.0, // 大小
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

<style scoped>
.box {
  position: relative;
  .banner {
    z-index: 999;
    position: absolute;
    top: 30%;
    left: 10%;
    color: #fff;
  }
}
h1 {
  font-size: 66px;
}
p {
  margin-top: 60px;
  font-size: 18px;
}
</style>
