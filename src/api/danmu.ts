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
export function addDanmu(data: any) {
  return request({
    url: "/danmu/add",
    method: "post",
    data,
  });
}

/**
 * 获取弹幕数量
 * @returns 弹幕数
 */
export function getDanmuCount() {
  return request({
    url: "/danmu/getDanmuCount",
    method: "get",
  });
}
