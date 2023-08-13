import request from "@/util/request";

/**
 * 获取话语
 * @returns
 */
export function getTalk(data) {
    return request({
        url: "/Talk/get",
        method: "get",
        params: data,
    });
}
