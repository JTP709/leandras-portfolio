import React from 'react';
import { Link } from 'gatsby';

const Contact = () => (
  <section id="contact" className="main special">
    <header className="major">
      <h2>Contact Me</h2>
      <p>
        Are you as ready as I am to get started? Contact me using the form below!<br />
        Or please feel free to contact me on social media.
      </p>
      <form name="contact" method="POST" data-netlify="true" action="/success">
          <label>Name:
            <input type="text" name="name" />
          </label>
          <label>E-Mail:
            <input type="email" name="email" />
          </label>
          <label>Message:
            <textarea name="message" />
          </label>
        <button type="submit">Submit</button>
      </form>
    </header>
    <footer className="major">
      {/* <ul className="actions">
        <li><Link to="/generic" className="button special">Get Started</Link></li>
        <li><Link to="/generic" className="button">Learn More</Link></li>
      </ul> */}
      {/* <ul className="icons">
        <li><a href="https://twitter.com/DigitalRainArt" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
        <li><a href="#" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
        <li><a href="#" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
        <li><a href="#" className="icon fa-dribbble alt"><span className="label">Dribbble</span></a></li>
      </ul> */}
    </footer>
  </section>
)

export default Contact;