import request from '../utils/request.js'
import axios from 'axios'
// import qs from 'qs'

// export const userLogin = data =>{
// 	return request({
// 		url:'public/json/home.json',
// 		method:'post',
// 		data:qs.stringify(data)
// 	})
// }

export const getCity = data =>{
    //return axios.post('/api/index/qybapi/userreg',data)
    return request({
        url:'https://restapi.amap.com/v3/geocode/regeo',
        method:"get",
        params: data
    })
}


export const convertPoint = data =>{
    //return axios.post('/api/index/qybapi/userreg',data)
    return request({
        url:'https://restapi.amap.com/v3/assistant/coordinate/convert',
        method:"get",
        params: data
    })
}

export const getNearFoods = data =>{
    //return axios.post('/api/index/qybapi/userreg',data)
    return request({
        url:'https://restapi.amap.com/v3/place/text',
        method:"get",
        params: data
    })
}