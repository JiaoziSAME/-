import React, {
	Component
} from 'react';
import NumberInput from '../../commponent/Numberinput';
import './style.scss';
import axios from 'axios'
import qs from 'qs'


class index extends Component {
	constructor(props) {
		super(props)
		this.state = {
			userName: "",
			password: ""
		}
	}
	onNumberInput = (val) => {
		console.log(val)
		this.setState({
			userName: val
		})
	}
	onPasswoedChange = (val) => {
		console.log(val)
		this.setState({
			password: val
		})
	}
	componentDidMount() {
		axios.post('http://134.175.115.202/index/qybapi/dologin',qs.stringify()).then((res) => {
			console.log(res)	
			})
		
		console.log(this)
	}
	ifChangeColor = () => {
		if (this.state.userName.trim().length > 0 && this.state.password.trim().length) {
			return true
		} else {
			return false
		}
	}

	render() {
		return ( 
			<div className = "box" >
			
			<div className = "According" > 登录 < /div> 
			<div className = "empty" > < /div> 
			<NumberInput onChange = {
				this.onNumberInput
			} > < /NumberInput> 
			<NumberInput onChange = {this.onPasswoedChange} > < /NumberInput> 
				
			
			<div className = "empty" > < /div> 
			<div className = "empty" > < /div> 
			<div className = {
				this.ifChangeColor() ? "btns" : "btn"
			} >
			登录 <
			/div>


			<
			/div>
		)
	}
}
export default index;
