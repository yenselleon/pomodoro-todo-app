import React, { useState } from 'react'
import logo from '../../images/primaryLogo.png'
import {
    Link
  } from "react-router-dom";

const Navbar = () => {
    const [mobileIsOpen, setMobileIsOpen] = useState(false)

    const handleDisplayMenu = () => {

        setMobileIsOpen(!mobileIsOpen)

    }

    return (
        <div>
            <nav className="navbar is-transparent " role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img className="navbar_logo" src={logo} alt="logoImage" />
                    </a>
                    <div role="button" className="navbar-burger pointer" aria-label="menu" aria-expanded="false" data-target="navbarMenu" onClick={handleDisplayMenu}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </div>
                </div>

                <div id="navbarMenu" className={`navbar-menu ${mobileIsOpen ? 'is-active' : ''}`}>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                            <div className="button is-primary">
                                <Link to="/auth/register"><strong>Sign up</strong></Link>
                            </div>

                            <div className="button is-light" >
                                <Link to="/auth/login">Login</Link>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </nav>
        </div>
    )
}

export default Navbar
