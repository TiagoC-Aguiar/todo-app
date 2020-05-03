import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './components/Login'
import Tasks from './components/Tasks'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/tasks/:id" component={Tasks} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes

