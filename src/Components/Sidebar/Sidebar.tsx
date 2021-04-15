
import React from 'react'

import {
    Link
} from "react-router-dom"

import './Sidebar.css'

const Sidebar = () => {

    return (
        <aside className="main-sidebar">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/users">Usuarios</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar
