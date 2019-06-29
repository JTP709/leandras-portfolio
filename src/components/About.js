import React from 'react';
import { Link } from 'gatsby';
import lc from '../assets/images/lc.jpg';

const nkuURL = "https://www.nku.edu/academics/artsci/programs/undergraduate/visualcommunicationdesign.html";

const About = () => (
  <section id="About Me" className="main">
    <div className="spotlight">
      <div className="content">
        <header className="major">
          <h2>Hello, stranger, I'm Leandra Clifton!</h2>
        </header>
        <p>
          Now that we're formally introduced, let me tell you a little bit about myself. 
          I'm a Visual Communication and Design student at 
          <a href={`${nkuURL}`}> Northern Kentucky University </a>
          and the social media strategist and web admin for 
          <a href="https://www.tswgo.org/"> This Star Won't Go Out</a>, 
          a non-profit charity organization.
        </p>
        {/* {<ul className="actions">
          <li><Link to="/generic" className="button">Contact</Link></li>
        </ul>} */}
      </div>
      <span className="image"><img src={lc} alt="" /></span>
    </div>
  </section>
)

export default About;
