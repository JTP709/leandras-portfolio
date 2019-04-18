import React from 'react'
import { Link } from 'gatsby';

const PortfolioNav = () => (
    <nav id="nav">
        <ul className="is-active" offset={-300}>
            <li>
                <Link className="portfolioNav" to="/photography">Photography</Link>
            </li>
            <li>
                <Link className="portfolioNav" to="/web">Web Design</Link>
            </li>
            <li>
                <Link className="portfolioNav" to="/socialmedia">Social Media</Link>
            </li>
            <li>
                <Link className="portfolioNav" to="/handcrafted">Hand Crafted</Link>
            </li>
            <li>
                <Link className="portfolioNav" to="/illustration">Illustration</Link>
            </li>
        </ul>
    </nav>
)

export default PortfolioNav
