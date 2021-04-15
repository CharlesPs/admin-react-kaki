
import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"

import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'

import Dashboard from './Pages/Dashboard/Dashboard'
import Users from './Pages/Users/Users'
import UsersEdit from './Pages/UsersEdit/UsersEdit'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {

    return (
        <>
            <Router>
                <Header/>
                <div className="wrapper">
                    <Sidebar />

                    <div className="wrapper-container">

                        <Switch>
                            <Route path="/" exact component={Dashboard} />
                            <Route path="/users" exact component={Users} />
                            <Route path="/users/:_id" component={UsersEdit} />
                        </Switch>
                    </div>
                </div>
            </Router>
        </>
    )
}

export default App
