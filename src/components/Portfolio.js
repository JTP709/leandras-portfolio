import React from 'react';
import { Link } from 'gatsby';
import pic01 from '../assets/images/pic01.jpg';

// Photography
// Web Design
// Social Media
// Hand Crafted
// Illustration

const Portfolio = () => (
  <section id="portfolio" className="main special">
    <header className="major">
      <h2>Portfolio</h2>
      <p>
        Donec imperdiet consequat consequat. Suspendisse feugiat congue.
        <br />
        posuere. Nulla massa urna, fermentum eget quam aliquet.
      </p>
    </header>
    <ul className="features">
      <li>
        <h2>Phography</h2>
        <img className="image" src={pic01}/>
        <p>Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus.</p>
      </li>
      <li>
        <h2>Phography</h2>
        <img className="image" src={pic01}/>
        <p>Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus.</p>
      </li>
      <li>
        <h2>Phography</h2>
        <img className="image" src={pic01}/>
        <p>Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus.</p>
      </li>
    </ul>

    {/* {<ul className="statistics">
      <li className="style1">
        <span className="icon fa-code-fork"></span>
        <strong>Photography</strong>
      </li>
      <li className="style2">
        <span className="icon fa-folder-open-o"></span>
        <strong>Web Design</strong>
      </li>
      <li className="style3">
        <span className="icon fa-signal"></span>
        <strong>Social Media</strong>
      </li>
      <li className="style4">
        <span className="icon fa-laptop"></span>
        <strong>Hand Crafted</strong>
      </li>
      <li className="style5">
        <span className="icon fa-diamond"></span>
        <strong>Volunteer</strong>
      </li>
    </ul>} */}
    <p className="content">
      Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. 
      Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, 
      sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus 
      semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis 
      et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. 
      Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.
    </p>
    {/* {<footer className="major">
      <ul className="actions">
        <li><Link to="/generic" className="button">Learn More</Link></li>
      </ul>
    </footer>} */}
  </section>
)

export default Portfolio;