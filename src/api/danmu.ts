import request from "@/util/request";

/**
 * 获取所有弹幕
 * @returns
 */
export function getDanmuList() {
  return request({
    url: "/danmu/get",
    method: "get",
  });
}

/**
 * 添加弹幕
 * @param data
 * @returns
 */
export function addDanmu(data: object) {
  return request({
    url: "/danmu/add",
    method: "post",
    data,
  });
}
