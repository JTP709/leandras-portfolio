import React from 'react'
import { Link } from 'gatsby';

const PortfolioNav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <ul className="is-active" offset={-300}>
            <li>
                <Link className="portfolioNav" to="/">Home</Link>
            </li>
            <li className={`${props.active === 'photography' ? 'is-active' : ''}`}>
                <Link className="portfolioNav" to="/photography">Photography</Link>
            </li>
            <li className={`${props.active === 'web' ? 'is-active' : ''}`}>
                <Link className="portfolioNav" to="/web">Web Design</Link>
            </li>
            <li className={`${props.active === 'socialmedia' ? 'is-active' : ''}`}>
                <Link className="portfolioNav" to="/socialmedia">Social Media</Link>
            </li>
            <li className={`${props.active === 'handcrafted' ? 'is-active' : ''}`}>
                <Link className="portfolioNav" to="/handcrafted">Hand Crafted</Link>
            </li>
            <li className={`${props.active === 'illustration' ? 'is-active' : ''}`}>
                <Link className="portfolioNav" to="/illustration">Illustration</Link>
            </li>
        </ul>
    </nav>
)

export default PortfolioNav
