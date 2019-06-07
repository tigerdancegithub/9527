//===>工具统一管理

//过滤器==>设置图片宽高
import Vue from "vue";

 const setWH = Vue.filter( 'setWH' , (url, val) => {
  return url.replace(/w\.h/, val);
});
export default setWH;

