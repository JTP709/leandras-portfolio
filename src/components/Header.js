import React from 'react'
import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Digital Rain Clouds</h1>
        <p>I'm awesome, brave, creative, dogmatic.
            <br />
            Come see why!
        </p>
    </header>
)

export default Header
