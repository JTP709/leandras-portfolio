import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Nerd Fighters</h2>
            <p>I'm a proud supporter of This Star Won't Go Out. It's a wonderful non-profit organization that helps the families of children who are fighting cancer. Please click the link below to learn more about this awesome organization and how you can help!</p>
            <ul className="actions">
                <li><a href="https://www.tswgo.org/" className="button">Learn More</a></li>
            </ul>
        </section>
        <section>
            <h2>You can also find me at:</h2>
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
