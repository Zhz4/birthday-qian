/**
 * 防抖函数
 * @param func 需要防抖的函数
 * @param wait 防抖时间
 * @param immediate 是否立即执行
 * @param callback 当防抖时间内触发函数时，会执行这个回调函数
 * @returns
 */
function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number,
  immediate?: boolean,
  callback?: () => void
): (...args: Parameters<T>) => void {
  let timeout: number | null;

  return function (this: any, ...args: Parameters<T>) {
    const context = this;

    const later = function () {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };

    const callNow = immediate && !timeout;

    window.clearTimeout(timeout as number);
    timeout = window.setTimeout(function () {
      later();
      if (callback) {
        callback();
      }
    }, wait);

    if (callNow) {
      func.apply(context, args);
      if (callback) {
        callback();
      }
    }
  };
}

export default debounce;
