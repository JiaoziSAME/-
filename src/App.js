import React from 'react';
import './App.css';
import RouterMap from './router'

class App extends React.Component{
    constructor(props){
      super(props);
      this.state={
      
      }
    }
    render() {
  return (
    <div className="App">
            <RouterMap/>
    </div>
  );
}
}
export default App;
