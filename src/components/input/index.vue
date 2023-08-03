<script lang="ts" setup>
import { ref, watch, h, getCurrentInstance } from "vue";
import Menu from "./menu";
import { ElNotification } from "element-plus";
// 获取到 全局事件总线
const { Bus } = getCurrentInstance()!.appContext.config.globalProperties;
const tanItem = ref();
const promp = ref(Menu());

const visible = ref(false);
const value = ref("");
watch(value, (newValue) => {
  if (newValue[0] === "/") {
    visible.value = true;
    promp.value = Menu();
    tanItem.value[0].parentNode.style.display = "block";
  } else {
    visible.value = false;
  }
});

/**
 * 选中提示，然后给输入框复制
 * 若是菜单，设跳转到对应的页面
 * text 表示下一个是文本，这下菜单显示出来的就是文本内容
 * null 表示没有下一个菜单了，选中则直接进入功能，若是文本的话，选中直接赋值到输入框
 */
const fun = (item: any) => {
  // 修改样式
  if (item.name === "emoji😀") {
    tanItem.value[0].parentNode.style.display = "flex";
  }
  if (item.type === "text") {
    promp.value = item.value.map((item: any) => {
      return { name: item, type: null };
    });
  } else if (item.type === null) {
    value.value = item.name;
  }
};
// 监听回车事件，按下回车提交弹幕
const handleEnter = () => {
  if (value.value === "") return;
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
      "感谢你的祝福ya~，祝你有美好的一天"
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
        <div
          ref="tanItem"
          class="tanItem"
          v-for="item in promp"
          @click="fun(item)"
        >
          {{ item.name }}
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
