import React, { Component } from 'react'
import "./index.css"
// import qs from "qs";

export default class index extends Component {
  componentDidMount () {

    const location = localStorage.getItem("location")
    console.log(location, "location")
    // qs.parse(location)
    const longitude = location.longitude
    const latitude = location.latitude
    console.log(longitude, latitude)
    const point = location.split(",")
    console.log(point)
    const { AMap } = window
    var map = new AMap.Map('container', {
      zoom: 16,
      center: [parseFloat(point[0]), parseFloat(point[1])],
      viewMode: "3D"
    })

  }
  render () {
    return (
      <div className="page-my-position">
        <div id="container">

        </div>

      </div>
    )
  }
}

