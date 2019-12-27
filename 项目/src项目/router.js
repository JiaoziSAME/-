import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from './views/Home/index'
import Login from './views/Login/index'
import Maps from './views/Map/index'
// import Map from './views/MyPosition/index'
// import Foot1 from './views/Foot1/index'
// <Route path='/foot' component={Foot1} />
// <Route path='/maps' component={Maps} />
export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <Redirect to='/home'></Redirect>}></Route>
      <Route path='/home' component={Home} />
	    <Route path='/login' component={Login} />
      <Route path='/map' component={Maps}/>
    </Switch>
  </BrowserRouter>
  )