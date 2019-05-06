import React from 'react';
import { Link } from 'gatsby';
import lc from '../assets/images/lc.jpg';

const Project = ({title, github, url}) => (
  <section className="main project">
    <div className="spotlight">
      <div className="content">
        <header className="major">
          <h2>{title}</h2>
        </header>
        <p>
          Now that we're formally introduced, let me tell you a little bit about myself. 
          I'm a Visual Communication and Design student at 
          <a href={`https://google.com`}> Northern Kentucky University </a>
          and the social media strategist and web admin for 
          <a href="https://www.tswgo.org/"> This Star Won't Go Out</a>, 
          a non-profit charity organization.
        </p>
        <ul className="actions">
          <li><Link to="/generic" className="button">Website</Link></li>
          <li><Link to="/generic" className="button">Github</Link></li>
        </ul>
      </div>
      <span className="image"><img className="project" src={lc} alt="" /></span>
    </div>
  </section>
)

export default Project;
