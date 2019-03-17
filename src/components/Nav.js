import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['about', 'skills', 'portfolio', 'contact'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="about">
                    <a href="#">About Me</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="skills">
                    <a href="#">Skills</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="portfolio">
                    <a href="#">My Portfolio</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="contact">
                    <a href="#">Contact Me</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
