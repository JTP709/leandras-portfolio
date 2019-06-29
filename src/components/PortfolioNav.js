import React from 'react'
import { Link } from 'gatsby'

import { toggles, projects } from '../data'

const NavItem = ({ active, header, link }) =>  (
    <li className={`${active === link ? 'is-active' : ''}`}>
        <Link className="portfolioNav" to={`/${link}`}>{ header }</Link>
    </li>
)

const PortfolioNav = ({ active, sticky }) => (
    <nav id="nav" className={ sticky ? 'alt' : '' }>
        <ul className="is-active" offset={-300}>
            <li>
                <Link className="portfolioNav" to="/">Home</Link>
            </li>
            {
                projects
                    .filter(project => toggles[project.link])
                    .map(project => NavItem({ ...project, active }))
            }
        </ul>
    </nav>
)

export default PortfolioNav
