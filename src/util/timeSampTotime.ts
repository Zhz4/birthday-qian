const timeT = (timestamp: number | string) => {
  // 假设你有一个名为 timestamp 的变量存储了时间戳
  if (typeof timestamp === "string") {
    timestamp = parseInt(timestamp);
  }
  const date = new Date(timestamp);

  // 获取年、月、日、小时、分钟和秒
  const year = date.getFullYear().toString(); // 获取年份的后两位
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 月份从 0 开始，需要加 1，并且补零
  const day = date.getDate().toString().padStart(2, "0"); // 补零
  const hours = date.getHours().toString().padStart(2, "0"); // 补零
  const minutes = date.getMinutes().toString().padStart(2, "0"); // 补零
  const seconds = date.getSeconds().toString().padStart(2, "0"); // 补零

  // 构建格式化的日期和时间字符串
  const formattedDateTime = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
  return formattedDateTime;
};

export default timeT;
