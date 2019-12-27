import React, { Component } from 'react'
import "./style.scss"
import {Toast} from 'antd-mobile'
import {
  getCity,
  convertPoint,
  getNearFoods
} from '../../api/login'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      offset: 10,
      foodList: []
    }
  }
  map=null;
  componentDidMount() {
    const location=localStorage.getItem('location')
    if (location) {
      const point = location.split(',')
      const { AMap } = window
      this.map = new AMap.Map('container', {
        zoom: 16,
        center: [parseFloat(point[0]), parseFloat(point[1])],
        viewMode: "3D"
      })

                
      const address = localStorage.getItem('address')
      const data = {
        key: '9525c81ad8ebbbc93ce02c541a5a8195',
        keywords: `${address} 美食`,
        page: this.state.page,
        offset: this.state.offset
      }


      var marker = new AMap.Marker({
        position: new AMap.LngLat(parseFloat(point[0]), parseFloat(point[1])),
        title: '北京'
    });
    
    this.map.add(marker);



      getNearFoods(data).then(res => {
        console.log(res)
        if (res.status === "1") {
          this.setState({
            foodList: res.pois
          })
        }
      })
        .catch(err => {
          Toast.fail('获取附近美食异常')
        })
    }
  }
  currentPositon = item => {
    console.log(item)
  }
  render() {
    const { foodList } = this.state

    const domList = foodList.map(item => {
      return (
        <ul className="food-list">
          <li className="item" onClick={this.currentPositon(item)}>
            <p>{item.name}  人均{item.biz_ext.cost}元  评分{item.rating}</p>
            <p>服务热线：{item.tel}</p>
          </li>
        </ul>
      )
    })
    return (
      <div className="page-my-position">
        <div id="container" style={{width:"500px",height:"500px"}}></div>
        {domList}
      </div>
    )
  }
}

