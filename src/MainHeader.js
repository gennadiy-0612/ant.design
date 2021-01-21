import React from 'react'
import {Link, NavLink} from "react-router-dom"

import Images from './Images'

function MainHeader(props) {

    return (
        <div id="top" className="Header">
            <div className="Header--logo X1024-1600">
                <Link className="logo-link" to="/"><img className="idnlogo" src={Images.logo} alt="t"/></Link>
            </div>
            <input type="checkbox" className="burger-shower"/>
            <div className="top-horizon-menu X1024-1200 X1200-1600">
                <nav className="main-top-nav">
                    <NavLink className="main-top-nav-anchor" to="/advisor">Senior Advisor</NavLink>
                    <NavLink className="main-top-nav-anchor" to="/investors">Investors</NavLink>
                    <NavLink className="main-top-nav-anchor" to="/sectors">Sectors</NavLink>
                    <NavLink className="main-top-nav-anchor" to="/about">About</NavLink>
                </nav>
                <div className="login-block">
                    <Link className="login buttonIDN back-slider top-login" to="/login">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default MainHeader
