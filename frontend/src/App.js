import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css';
import { Button } from "@material-ui/core";
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
    </div>
  )
}

export default App;
