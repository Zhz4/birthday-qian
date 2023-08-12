import request from "@/util/request";

/**
 * 获取所有图片
 * @returns
 */
export function getAllImage() {
  return request({
    url: "/image/getAllImage",
    method: "get",
  });
}
