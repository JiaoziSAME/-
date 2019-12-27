import React, { Component } from 'react'
import './style.scss'
import { connect } from 'react-redux'
var id = 0
export class index extends Component {
    addData() {
        const action = {
            type: 'ADD_DATA',
            obj: {
                "productname": "wrwr",
                "price": 1,
                "status": 0,
                "address": "北京"
            }
        }
        this.props.ADD(action)
    }
    pay(val) {
        const action = {
            type: 'PAY',
            val: val
        }
        this.props.pay(action)
    }
    deleData(id) {
        const action = {
            type: 'DELETE_DATA',
            id: id
        }
        this.props.del(action)
    }
    clearData() {
        const action = {
            type: 'CLEAR_DATA',
        }
        this.props.clear(action)
    }
    render() {
        return (
            <div className="box">
                <button onClick={() => this.addData()}>add</button>
                <button onClick={() => this.clearData()}>clear</button>
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>名字</td>
                            <td>价格</td>
                            <td>状态</td>
                            <td>地址</td>
                            <td>操作</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.state.map((item, index) => {
                                return <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.productname}</td>
                                    <td>{item.price}</td>
                                    <td>{item.status ? '已支付' : <button onClick={() => this.pay(item.id)}>支付</button>}</td>
                                    <td>{item.address}</td>
                                    <td><button onClick={() => this.deleData(index)}>删除</button></td>
                                </tr>
                            })

                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        state
    }
}
const mapTodispatch = (dispatch) => {
    return {
        ADD(action) {
            id++
            action.obj.id = id
            console.log()
            dispatch(action)
        },
        pay(action) {
            dispatch(action)
        },
        del(action) {
            dispatch(action)
        },
        clear(action) {
            dispatch(action)
        }
    }
}

export default connect(mapState, mapTodispatch)(index)