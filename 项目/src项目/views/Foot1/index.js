import React, {
    Component
} from 'react'
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Redirect
} from 'react-router-dom'

import MyPosition from "../MyPosition"
import {
    Carousel
} from 'antd';
import axios from "axios"
import "./index.css"
import {
    Drawer,
    Button
} from 'antd';

import {
    getCity,
    convertPoint
} from "../../api/login"
import {
    Toast
} from 'antd-mobile'

export default class index extends Component {
    constructor() {
        super()
        this.state = {
            list: [],
            list2: [],
            latitude: "",
            city: "",
            longitude: "",
            visible: false,
            status: false
        }
    }
    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    componentDidMount() {
        axios.get("/app/public/json/home.json").then((res) => {
            console.log(res.data.data)
            console.log(res.data.data.honorList)

            this.setState({
                list: res.data.data.bannerList,
                list2: res.data.data.honorList
            })

        })
        this.getCurrentCity()

    }
    getCurrentCity = () => {
        if (navigator.geolocation) {
            console.log(1)
            navigator.geolocation.getCurrentPosition(point => {
                console.log(2)
                const longitude = point.coords.longitude.toFixed(6)
                const latitude = point.coords.latitude.toFixed(6)
                this.setState({
                        latitude,
                        longitude
                    },
                    () => {
                        console.log(3)
                        const data = {
                            key: '9525c81ad8ebbbc93ce02c541a5a8195',
                            locations: `${longitude},${latitude}`,
                            coordsys: 'gps'
                        }
                        convertPoint(data)
                            .then(res => {
                                console.log(4)
                                console.log(res)
                                if (res.data.status === "1") {
                                    console.log(5)
                                    console.log("=================")
                                    console.log(res.data.locations)
                                    // console.log(res.locations)
                                    localStorage.setItem("location", res.data.locations)
                                }
                            })
                            .catch(error => {
                                Toast.fail('坐标转换接口异常')
                            })
                    })



                const data = {
                    key: "9525c81ad8ebbbc93ce02c541a5a8195",
                    location: `${longitude},${latitude}`,
                    radius: 0
                }


                getCity(data).then(res => {
                        console.log(data)
                        console.log(res)
                        if (res.data.status === '1') {
                            const city = res.data.regeocode.addressComponent.province || '北京市'
                            this.setState({
                                city
                            })

                        }
                    })
                    .catch(error => {})
            })
        } else {
            this.setState({
                city: "北京市"
            })
            alert("浏览器不支持getlocation")

        }
    }

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    shai() {
        this.setState({
            status: true
        })

    }
    suress() {
        this.setState({
            status: false
        })
    }

    gotoMyMap() {
        this.props.history.replace('/Foot1/MyPosition')
    }
    render() {
        return (


            <
            section >
            <
            div className = {
                this.state.status ? "bgc" : "bgc1"
            } >
            <
            div className = "zhe" >
            <
            p > 性别 < /p> <
            p >
            <
            span > 男 < /span><span>女</span >
            <
            /p> <
            p > 年龄 < /p> <
            p >
            <
            span > 最大范围 < /span>~<span>最小范围</span >
            <
            /p> <
            p > < span > 服务时长 < /span> <span> 小时</span > < span > 天 < /span><span>月</span > < /p> <
            p >
            <
            span > 1 - 3 < /span> <
            span > 3 - 5 < /span> <
            span > 5 - 8 < /span> <
            br / >
            <
            span > 8 - 12 < /span> <
            span > 3 - 5 < /span> <
            span > 5 - 8 < /span> <
            /p> <
            p >
            服务类型 <
            /p> <
            p >
            养老驿站 <
            /p> <
            p >
            <
            span > 1 - 3 < /span> <
            span > 3 - 5 < /span> <
            span > 5 - 8 < /span> <
            br / >
            <
            span > 8 - 12 < /span> <
            span > 3 - 5 < /span> <
            span > 5 - 8 < /span> <
            br / >
            <
            span > 8 - 12 < /span> <
            span > 3 - 5 < /span> <
            span > 5 - 8 < /span> <
            br / >
            <
            span > 8 - 12 < /span> <
            span > 3 - 5 < /span> <
            span > 5 - 8 < /span> <
            /p> <
            p >
            环保驿站 <
            /p> <
            p >
            <
            span > 环保 < /span> <
            /p> <
            p >
            文化环保驿站 <
            /p> <
            p >
            <
            span > 文化教育 < /span> <
            /p> <
            p >
            <
            span > 重置 < /span> <
            span onClick = {
                this.suress.bind(this)
            } > 确定 < /span> <
            /p>



            <
            /div>


            <
            /div> <
            header >
            <
            ul className = "lists" >
            <
            li onClick = {
                this.gotoMyMap.bind(this)
            } >

            <
            img src = "ding.png" / > {
                this.state.city
            }

            <
            /li> <
            li >
            <
            input className = "search"
            placeholder = "请输入您要找的内容" / >
            <
            /li> <
            /ul> <
            /header> <
            div className = "homeBox" >

            <
            Carousel autoplay > {



                this.state.list.map((item) => {

                    return <div key > < img src = {
                        item
                    }
                    /></div >


                })

            } <
            /Carousel> <
            /div> <
            div >
            <
            ul className = "lis" > {
                this.state.list2.map((item) => {
                    return <li key = {
                        item.value
                    }
                    style = {
                            {
                                background: item.background
                            }
                        } >
                        <
                        img src = {
                            item.icon
                        }
                    /> <
                    span > {
                            item.value < 1000 ? item.value : "1.3w"
                        } < /span> <
                        /li>
                })

            }


            <
            /ul> <
            /div> <
            div className = "left" >
            <
            ul >
            <
            li >
            <
            img src = "fang.jpg" / >
            <
            span > 康富商场 < /span> <
            /li> <
            li >
            <
            img src = "fa.jpg" / >
            <
            span > 账号管理 < /span>

            <
            /li> <
            /ul> <
            /div> <
            div className = "listBom" >
            <
            ul >
            <
            li >
            <
            NavLink to = "/Foot1/Router1" > 助人 < /NavLink>

            <
            /li> <
            li > < NavLink to = "/Foot1/Router2" > 志愿者 < /NavLink></li >
            <
            li > < NavLink to = "/Foot1/Router3" > 社团活动 < /NavLink></li >
            <
            li onClick = {
                this.shai.bind(this)
            } > 筛选 < /li> <
            Redirect to = "/Foot1/Router1" > < /Redirect>

            <
            /ul> <
            Drawer

            placement = "right"
            closable = {
                false
            }
            onClose = {
                this.onClose
            }
            visible = {
                this.state.visible
            } >
            <
            p className = "bold" > 性别 < /p> <
            p >
            <
            span > 男 < /span><span>女</span >
            <
            /p> <
            /Drawer> <
            /div> <
            div >

         








        )
    }
}
