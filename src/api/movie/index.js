//电影模块api
import request from "@/request";

//获取城市数据
export function apiCityList(params) {
  return request({
    url: "/api/cityList",
    method: "get",
    params
  });
}
//获取正在热映数据
export function apiNowPlaying(params) {
  return request({
    url: "/api/movieOnInfoList",
    method: "get",
    params
  });
}
//获取即将上映数据
export function apiComingList(params) {
  return request({
    url: "/api/movieComingList?cityId=10",
    method: "get",
    params
  });
}
//获取搜索数据
export function apiSearchList(params) {
  return request({
    url: "/api/searchList?cityId=10&",
    method: "get",
    params
  });
}
