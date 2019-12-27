import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from './views/Home/index'
export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <Redirect to='/home'></Redirect>}></Route>
      <Route path='/home' component={Home} />
    </Switch>
  </BrowserRouter>
  )