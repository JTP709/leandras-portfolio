import React from 'react';
import { Link } from 'gatsby';

// Communication, Typography, Technology

const Skills = () => {
  return (
    <section id="skills" className="main special">
      <header className="major">
        <h2>Professional Talents</h2>
      </header>
      <ul className="features">
        <li>
          <span className="icon major style1 fa-at"></span>
          <h3>Communication</h3>
          <p>
            The Age of the Inernet has gifted humanity a level of communication we never thought possible.
            I strive to understand how to best share ideas on this platform that is distinctive in a way that
            stands out from all of the white noise.
          </p>
        </li>
        <li>
          <span className="icon major style3 fa-font"></span>
          <h3>Typography</h3>
          <p>
            Nothing is more important in communication than the written word. I work 
            diligenty to ensure the choice of typography is legible, readable, and appealing - 
            nothing is worse than a blog written in comic sans!
          </p>
        </li>
        <li>
          <span className="icon major style5 fa-code"></span>
          <h3>Technology</h3>
          <p>
            I work with the latest technologies that drive both efficiency and quality 
            in order to deliver the best value for both my users across varous platforms.
            You can't work in a digital space without an understanding how it works!
          </p>
        </li>
      </ul>
      {/* {<footer className="major">
        <ul className="actions">
          <li><Link to="/generic" className="button">Learn More</Link></li>
        </ul>
      </footer>} */}
    </section>
  )
}

export default Skills;