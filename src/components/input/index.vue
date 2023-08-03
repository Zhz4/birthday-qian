<script lang="ts" setup>
import { ref, watch, h, getCurrentInstance } from "vue";
import { Blessing } from "../../enmu/index";
import { ElNotification } from "element-plus";
// 获取到 全局事件总线
const { Bus } = getCurrentInstance()!.appContext.config.globalProperties;

const visible = ref(false);
const value = ref("");
watch(value, (newValue) => {
  visible.value = newValue[0] === "/";
});
const promp = ref(
  Object.values(Blessing).filter((value) => typeof value === "string")
);
console.log(promp.value);

/**
 * 选中提示，然后给输入框复制
 */
const tanClick = (item: any) => {
  value.value = item;
  visible.value = false;
};
// 监听回车事件，按下回车提交弹幕
const handleEnter = () => {
  console.log(value.value);
  Bus.emit("danmu", value.value);
  visible.value = false;
  value.value = "";
  // 通知
  ElNotification({
    title: "发送成功",
    message: h(
      "i",
      { style: "color: teal" },
      "感谢你的祝福，祝你也有美好的一天"
    ),
  });
};
</script>

<template>
  <div>
    <el-popover placement="bottom" :visible="visible" :width="480">
      <template #reference>
        <div>
          <div class="group">
            <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path
                  d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                ></path>
              </g>
            </svg>
            <input
              placeholder="欢迎写你的生日祝福😉"
              type="search"
              class="input"
              v-model="value"
              @keydown.enter="handleEnter"
            />
          </div>
          <el-tag class="ml-2" type="warning"
            >小tip：输入 '/' 可快捷输入</el-tag
          >
        </div>
      </template>
      <div>
        <div class="tanItem" v-for="item in promp" @click="tanClick(item)">
          {{ item }}
        </div>
      </div>
    </el-popover>
  </div>
</template>

<style lang="scss" scoped>
.tanItem {
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    background-color: #f3f3f4;
  }
}
.group {
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
  width: 490px;
}

.input {
  width: 100%;
  height: 40px;
  line-height: 28px;
  padding: 0 1rem;
  padding-left: 2.5rem;
  border: 2px solid transparent;
  border-radius: 8px;
  outline: none;
  background-color: #f3f3f4;
  color: #0d0c22;
  transition: 0.3s ease;
}

.input::placeholder {
  color: #9e9ea7;
}

.input:focus,
input:hover {
  outline: none;
  border-color: rgba(234, 76, 137, 0.4);
  background-color: #fff;
  box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
}

.icon {
  position: absolute;
  left: 1rem;
  fill: #9e9ea7;
  width: 1rem;
  height: 1rem;
}
</style>
