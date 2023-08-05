<script lang="ts" setup>
import { ref, h, getCurrentInstance, reactive, watch, onMounted } from "vue";
import { Menu, emoji } from "./menu";
import { ElNotification, ElMessage } from "element-plus";
import { Danmu } from "@/interface/index";
import { addDanmu } from "@/api/danmu";
import throttle from "@/util/throttle";
// 获取到 全局事件总线
const { Bus } = getCurrentInstance()!.appContext.config.globalProperties;
const screenWidth = ref(window.innerWidth); // 创建响应式引用
const popover_width = ref(480);
// 获取dom元素
const tanItem = ref();
const promp = ref(Menu());
const visible = ref(false);
const Value = reactive({
  content: "",
  setup: "",
}) as Danmu;

onMounted(() => {
  if (screenWidth.value < 480) {
    popover_width.value = 300;
  }
  if (screenWidth.value < 320) {
    popover_width.value = 250;
  }
});

watch(
  () => [window.innerWidth, window.innerHeight],
  ([newWidth, newHeight]: any) => {
    screenWidth.value = newWidth;
    if (screenWidth.value < 480) {
      popover_width.value = 370;
    }
  }
);
watch(Value, (newValue: any) => {
  if (newValue.content.length > 0 && newValue.content[0] === "/") {
    visible.value = true;
    promp.value = Menu();
    tanItem.value[0].parentNode.style.display = "block";
    // tanItem.value[0].parentNode.style.width = "450px";
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
    // tanItem.value[0].parentNode.style.width = "470px";
  }
  if (item.type === "text") {
    promp.value = item.value.map((item: any) => {
      return { name: item, type: null };
    });
  } else if (item.type === null) {
    Value.content = item.name;
  } else if (item.type === "emojiNull") {
    Value.content += item.name;
  }
};
// 监听回车事件，按下回车提交弹幕,并加入了防抖
const debouncetime = 10; // 防抖时间
const handleEnter = throttle(() => {
  if (Value.content.trim() === "") {
    ElMessage({
      message: "你还没有输入内容哦~",
      type: "warning",
    });
    Value.content = "";
    return;
  }
  const newValue: Danmu = {
    content: Value.content,
    setup: "",
  };
  addDanmu(newValue).then((res: any) => {
    if (res.code === 200) {
      // 通知
      ElNotification({
        title: "发送成功",
        message: h(
          "i",
          { style: "color: teal" },
          "感谢你的祝福ya~，祝你有美好的一天"
        ),
      });
      Bus.emit("danmu", newValue);
      visible.value = false;
      Value.content = "";
      Value.setup = "";
    }
  });
}, debouncetime);

/**
 * 打开emoji表情
 */
const handleEmoji = () => {
  visible.value = !visible.value;
  tanItem.value[0].parentNode.style.display = "flex";
  // tanItem.value[0].parentNode.style.width = "470px";
  promp.value = emoji.map((item) => {
    return { value: [item], type: "emojiNull", name: item };
  });
};
</script>

<template>
  <div>
    <el-popover
      popper-class="popover"
      placement="bottom"
      :visible="visible"
      :width="popover_width"
    >
      <template #reference>
        <div>
          <div class="group">
            <svg
              t="1691061585787"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="7014"
              width="200"
              height="200"
              style="cursor: pointer"
              @click="handleEmoji"
            >
              <path
                d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
                fill="#FBD971"
                p-id="7015"
              ></path>
              <path
                d="M512 877.714286c-161.328762 0-292.571429-131.242667-292.571429-292.571429a24.380952 24.380952 0 0 1 48.761905 0c0 134.436571 109.372952 243.809524 243.809524 243.809524s243.809524-109.372952 243.809524-243.809524a24.380952 24.380952 0 0 1 48.761905 0c0 161.328762-131.242667 292.571429-292.571429 292.571429z"
                fill="#F0C419"
                p-id="7016"
              ></path>
              <path
                d="M390.095238 414.47619a24.380952 24.380952 0 0 1-24.380952-24.380952c0-40.326095-32.816762-73.142857-73.142857-73.142857s-73.142857 32.816762-73.142858 73.142857a24.380952 24.380952 0 0 1-48.761904 0c0-67.218286 54.686476-121.904762 121.904762-121.904762s121.904762 54.686476 121.904761 121.904762a24.380952 24.380952 0 0 1-24.380952 24.380952zM828.952381 414.47619a24.380952 24.380952 0 0 1-24.380952-24.380952c0-40.326095-32.816762-73.142857-73.142858-73.142857s-73.142857 32.816762-73.142857 73.142857a24.380952 24.380952 0 0 1-48.761904 0c0-67.218286 54.686476-121.904762 121.904761-121.904762s121.904762 54.686476 121.904762 121.904762a24.380952 24.380952 0 0 1-24.380952 24.380952z"
                fill="#F29C1F"
                p-id="7017"
              ></path>
            </svg>
            <input
              placeholder="欢迎写你的生日祝福😉"
              type="search"
              class="input"
              v-model="Value.content"
              @keyup.enter="handleEnter"
            />
          </div>
          <el-tag class="ml-2" type="warning"
            >小tip：输入 '/' 可快捷输入</el-tag
          >
        </div>
      </template>
      <div class="box">
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
@import "./scss/index.scss";
@import "./scss/media.scss";
</style>
