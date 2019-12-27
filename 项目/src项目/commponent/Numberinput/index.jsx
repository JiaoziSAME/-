import React,{Component} from 'react';
import PropTypes from 'prop-types'
import './style.scss';

class App extends React.Component{
    static propTypes={
        onChange:PropTypes.func
    }

    inputChange=(e)=>{
        console.log(e)
        const {onChange} = this.props
     
        if(onChange){
            onChange(e.target.value)
        }
    }
    render(){
        return(
            <div className="framework">
                <input type="text" onChange={this.inputChange}/>
            </div>
        )
    }
}
export default App;