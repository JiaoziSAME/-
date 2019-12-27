import React,{Component} from 'react';
import PropTypes from 'prop-types'
import './style.scss';
import axios from 'axios'
import { Item } from 'rc-menu';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state={
		  list3:[]
		}
		}
		componentDidMount(){
			axios.get("http://api.gsruiying.com.cn/public/json/home.json").then((res)=>{
			  this.setState({
				  list3:res.data.data.taskList[0].children
				
			  })
		  })
		}
    static propTypes={
        onChange:PropTypes.func
    }
    render(){
        return(
			<div className="topss">
				 {
					this.state.list3.map((item)=>{
						return <dl key={item.age}>
			   
								<dt><img alt="" src={item.avatar}/></dt>
								<dd>
					<p>{item.name}&nbsp;&nbsp;{item.age}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="myname">寻找中</span> <span className="distance">1.2km</span></p>
									<p>服务时间:{item.endTime}——{item.startTime}</p>
									<p>我是志愿公益标题我是标题321</p>
									<p>{item.description}</p>
									<p>
										<span>{item.endTime}</span>
										<span>助餐</span>
										<span className="gets">预可得
											<span>{item.profit}</span>宝
										</span>
									</p>
								</dd>
							</dl>
					})
				} 

			</div>
           
        )
    }
}
export default App;