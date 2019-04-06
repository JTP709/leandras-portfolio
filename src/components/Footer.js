import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Nerd Fighters</h2>
            <p>I'm a proud supporter of This Star Won't go out. It's a wonderful organization that helps the families of children who are fighting cancer. Please click the link below to learn more about this awesome organization and how you can help!</p>
            <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
            </ul>
        </section>
        <section>
            <h2>You can also find me at:</h2>
            <dl className="alt">
                <dt>Location</dt>
                <dd>Cincinnati, OH &bull; USA</dd>
            </dl>
            <h3>Online</h3>
            <ul className="icons">
                <li><a href="#" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
                <li><a href="#" className="icon fa-dribbble alt"><span className="label">Dribbble</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; 2019 Digital Rain Clouds. Design: <a href="https://html5up.net">HTML5 UP</a> && <a href="http://jonprell.com">jonprell.com</a>.</p>
    </footer>
)

export default Footer
