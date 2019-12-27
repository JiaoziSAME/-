import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from './views/Home/index'
import Food from './views/Food/index'
export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <Redirect to='/home'></Redirect>}></Route>
      <Route path='/home' component={Home} />
      <Route path='/food' component={Food} />
    </Switch>
  </BrowserRouter>
  )