import request from "@/util/request";

/**
 * 请求登录接口
 * @returns
 */
export function login(data: any) {
  return request({
    url: "/user/login",
    method: "post",
    data,
  });
}
