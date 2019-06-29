import React from 'react'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import About from '../components/About'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import { graphql } from 'gatsby'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    const { title, description } = this.props.data.site.siteMetadata;
    return (
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{ title }</title>
          <meta name="description" content={ description } />
          <link rel="canonical" href="http://digitalrainclouds.com" />
        </Helmet>
        <Header title={title} />
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <Nav sticky={this.state.stickyNav} />
        <div id="main">
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title,
        description
      }
    }
  }
`

export default Index
