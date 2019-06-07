//axios二次封装
import axios from 'axios'
const request = axios.create({
    // baseUrl:''
    timeout:1000
})
export default request