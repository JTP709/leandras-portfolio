import React from 'react';
import { Link } from 'gatsby';

import { toggles, projects } from '../data'

const Projects = data => (
  <li>
    <div className="features-container">
      <img className="image fit" src={data.pic}/>
      <Link to={`/${data.link}`} className={`accent${data.index + 1} overlay image`}>
        <div className="overlay-content">
          <h2>{data.header}</h2>
        </div>
      </Link>
    </div>
  </li>
)

const Portfolio = () => {
  return <section id="My Portfolio" className="main special">
    <header className="major">
      <h2>Portfolio</h2>
    </header>
    <ul className="features">
      {
        projects
          .filter(project => toggles[project.link])
          .map((project, index) => Projects({ ...project, index })) 
      }
    </ul>
  </section>
}

export default Portfolio;