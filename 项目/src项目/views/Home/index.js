import React, {
    Component
} from 'react';
import './style.css';
import axios from 'axios'
import Swiper from 'swiper'
import {
    Route,
    NavLink
} from 'react-router-dom'
import Datalist from '../../commponent/Datalist';
import {
    getCity,
    convertPoint
} from '../../api/login'
import {
    Toast
} from 'antd-mobile'
class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            list2: [],
            latitude: 0,
            longitude: 0,
            city: ''
        }
    }
    componentDidMount() {
        this.getCurrentCity()
        //可以加上你需要的条件等，然后生成Swiper对象，
        //一定要检查是不是每次都生成了Swiper对象，否则可能出现不滑动的情况和别的情况等
        new Swiper('.swiper-container', {
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            autoplay: {
                delay: 3000
            },
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // 如果需要滚动条
            scrollbar: {
                el: '.swiper-scrollbar',
            },

            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
        });

        axios.get("http://api.gsruiying.com.cn/public/json/home.json").then((res) => {
            this.setState({
                list: res.data.data.bannerList,
                list2: res.data.data.honorList
            })
        })
    }
    handleMask = () => {
        this.setState({
            status: true
        })
    }
    thisnone = () => {
        this.setState({
            status: false
        })
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
                        convertPoint(data).then(res => {
                                console.log(res,"看这里")
                                if (res.data.status === "1") {
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
                    .catch(error => { })
            })
        } else {
            this.setState({
                city: "北京市"
            })
            alert("浏览器不支持getlocation")

        }
    }








    render() {
        return (
            <div className="paage" >
                <header >
                    <div className="tops" >
                        <p > <img alt="" src="1.png" /> < span className="zi" ></span>
                            <span> {this.state.city} </span></p >
                        <p> <input type="text" placeholder="请输入需要您要找的内容" /> </p>
                    </div>
                </header>

                <section>
                    <div className="barren" >
                        <div className="swiper-container" >
                            <div className="swiper-wrapper" >
                                {
                                    this.state.list.map((item) => {
                                        return <div className="swiper-slide"
                                            key={item}>
                                            <img alt="" src={item} />
                                        </div >
                                    })
                                }
                            </div>
                            <div className="swiper-button-prev" > </div>
                            <div className="swiper-button-next" > </div>
                        </div>
                    </div>
                    <div className="wang" > {
                        this.state.list2.map((item) => {
                            return <dl key={item.value} >
                                <dt > < img alt="" src={item.icon} /></dt >
                                <dd > < span className="names" > {item.value} </span></dd >
                            </dl>
                        })
                    }
                    </div>
                    <div className="mall" >
                        <dl >
                            <dt > < img alt="" src="6.png" /> </dt>
                            <dd > 康富商城 </dd>
                        </dl >
                        <dl >
                            <dt > < img alt="" src="7.png" /> </dt>
                            <dd > 账户管理 </dd>
                        </dl >
                    </div>
                    <div className="blossom" >
                        <ul >
                            <li> < span > 助人 </span></li >
                            <li> < span > 志愿者 </span></li >
                            <li> < span > 社区活动 </span></li >
                            <li> < span onClick={this.handleMask} ></span>< span >筛选  </span></li >
                        </ul>
                    </div>
                    <div className="topss" >
                        < Datalist > </Datalist>
                    </div>
                </section>
                <footer>
                    <dl >
                        <dt > < img alt="" src="9.png" /> </dt>
                        <dd > 首页 </dd>
                    </dl >
                    <dl >
                        <dt > < img alt="" src="10.png" /> </dt>
                        <dd > 首页 </dd>
                    </dl >
                    <dl >
                        <dt > < img alt="" src="13.png" /> </dt>
                        <dd > </dd>
                    </dl >
                    <dl >
                        <dt > < img alt="" src="11.png" /> </dt>
                        <dd > 首页 </dd>
                    </dl >
                    <dl >
                        <dt > < img alt="" src="12.png" /> </dt>
                        <dd > 首页 </dd>
                    </dl> 
                </footer>


                <div className={this.state.status ? "zzc" : "zzc2"} >
                            <div className="boxmoney" >
                                <p className="headlines" > 性别 </p>
                                <div className="sexs" >
                                    <p > < span > 男 </span></p >
                                    <p > < span > 女 </span></p >
                                </div>
                                < p className="headlines" > 年龄 </p>
                                <div className="qwer" >
                                    <p > < span > < input type="text" placeholder="最小范围" /> </span></p >
                                    <p > < span > ~ </span></p >
                                    <p > < span > < input type="text" placeholder="最大范围" /> </span></p >
                                </div>
                                <hr className="line" />
                                <p className="headlines" > 服务时长 < span > 小时 </span><span>天</span > < span > 月 </span></p >
                                <div className="timelenght" >
                                    <p > < span > 1 - 3 </span></p >
                                    <p > < span > 3 - 5 </span></p >
                                    <p > < span > 5 - 8 </span></p >
                                </div>
                                <div className="timelenght" >
                                    <p > < span > 8 - 12 </span></p >
                                    <p > < span > 3 - 5 </span></p >
                                    <p > < span > 5 - 8 </span></p >
                                </div>
                                <p className="headlines" > 服务类型 </p>
                                <div className="timelenght" >
                                    <p > < span > 助浴 </span></p >
                                    <p > < span > 助餐 </span></p >
                                    <p > < span > 助洁 </span></p >
                                </div> <div className="timelenght" ></div>
                                <p > < span > 助浴 </span></p >
                                <p > < span > 助餐 </span></p >
                                <p > < span > 助洁 </span></p >
                            </div>
                            < div className="timelenght" >
                                <p> < span > 助浴 </span></p >
                                <p> < span > 助餐 </span></p >
                            </div><p> < span > 助洁 </span></p >
                         <div className="btnss" ></div>
                        <p > < span onClick={this.thisnone} > 重置 </span></p >
                        <p > < span > 登录 </span></p >                                                                                                                                                                                                                                                                                                                                            
                    </div> 
            </div>
        );
    }
}

export default index;
