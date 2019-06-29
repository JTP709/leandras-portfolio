import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const navItems = [
    'About Me',
    'Skills',
    'My Portfolio',
    'Contact Me'
]

const NavItem = (item) => (
    <li>
        <Scroll type="id" element={ item }>
            <a href="#">{ item }</a>
        </Scroll>
    </li>
)

const Nav = ({ sticky }) => (
    <nav id="nav" className={ sticky ? 'alt' : '' }>
        <Scrollspy items={ navItems } currentClassName="is-active" offset={-300}>
            { navItems.map(item => NavItem(item)) }
        </Scrollspy>
    </nav>
)

export default Nav
