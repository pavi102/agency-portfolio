import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path='/' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
            </Switch>
            <Footer />
        </>
    )
}

export default App;
