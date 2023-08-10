import { ElMessage } from "element-plus";

/**
 *  节流函数
 * @param fn 需要节流的函数
 * @param time 节流时间
 * @returns
 */
function throttle<T extends (...args: any[]) => void>(
  fn: T,
  time: number
): (...args: Parameters<T>) => void {
  console.log("节流函数");
  let flag = true;
  let timer: NodeJS.Timeout | null = null;

  return function (...args: Parameters<T>): void {
    if (!flag) {
      ElMessage({
        message: "操作过于频繁",
        type: "warning",
      });
      return;
    }

    flag = false;

    if (timer) {
      clearTimeout(timer);
      timer = null;
    } else {
      fn(...args);
    }

    timer = setTimeout(() => {
      flag = true;
      timer = null;
    }, time);
  };
}

export default throttle;
