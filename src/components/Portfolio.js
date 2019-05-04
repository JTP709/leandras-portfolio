import React from 'react';
import { Link } from 'gatsby';
import pic01 from '../assets/images/pic01.jpg';
import pic02 from '../assets/images/pic02.jpg';
import pic03 from '../assets/images/pic03.jpg';


const data = [
  {
    header: 'Photography',
    description: 'Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus.',
    link: '/photography',
    pic: pic01
  },
  {
    header: 'Web Design',
    description: 'Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus.',
    link: '/webdesign',
    pic: pic02
  },
  {
    header: 'Social Media',
    description: 'Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus.',
    link: '/socialmedia',
    pic: pic03
  },
  {
    header: 'Hand Crafted',
    description: 'Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus.',
    link: '/handcrafted',
    pic: pic01
  },
  {
    header: 'Illustration',
    description: 'Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus.',
    link: '/illustration',
    pic: pic03
  }
];

const Projects = (data) => (
  <li>
    <div className="features-container">
      <img className="image fit" src={data.pic}/>
      <Link to={data.link} className={`accent${data.index + 1} overlay image`}>
        <div className="overlay-content">
          <h2>{data.header}</h2>
          {/* <p>{data.description}</p> */}
        </div>
      </Link>
    </div>
  </li>
)

const Portfolio = () => (
  <section id="portfolio" className="main special">
    <header className="major">
      <h2>Portfolio</h2>
    </header>
    <ul className="features">
      { data.map( (project, index) => Projects({ ...project, index })) }
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
    </ul>
    <p className="content">
      Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. 
      Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, 
      sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus 
      semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis 
      et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. 
      Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.
    </p>
    <footer className="major">
      <ul className="actions">
        <li><Link to="/generic" className="button">Learn More</Link></li>
      </ul>
    </footer>} */}
  </section>
)

export default Portfolio;