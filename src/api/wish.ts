import request from "@/util/request";

/**
 * 获取所有愿望
 * @returns
 */
export function getWishList() {
  return request({
    url: "/wish/getWish",
    method: "get",
  });
}

/**
 * 添加愿望
 * @param data
 * @returns
 */
export function addWish(data: any) {
  return request({
    url: "/wish/addWish",
    method: "post",
    data,
  });
}
