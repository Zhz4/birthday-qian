import axios from "axios";
import { ElMessage } from "element-plus";
// 设置默认的请求头
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
const service = axios.create({
  baseURL: "http://localhost:7070", // 本地
  // baseURL: "http://47.120.4.169:7070", // 服务器
  timeout: 5000, // request timeout
});

// 响应拦截
service.interceptors.response.use(
  (response: any) => {
    const res = response.data;
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200) {
      ElMessage({
        message: res.msg || "Error",
        type: "error",
        duration: 5 * 1000,
      });
      return Promise.reject(new Error(res.msg || "Error"));
    } else {
      return res;
    }
  },
  (error: any) => {
    console.log("err" + error); // for debug
    ElMessage({
      message: error.msg,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
