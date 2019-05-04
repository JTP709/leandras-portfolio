import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import Project from '../components/Project'
import Waypoint from 'react-waypoint'
import PortfolioNav from '../components/PortfolioNav'

class ProjectShowcase extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      stickyNav: false
    };
    this.renderProjects = this.renderProjects.bind(this);
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  renderProjects() {
    const projects = this.props.pageContext.projects
    let projectList = []
    for (let i=0; projects; i++) {
      projectList.push(<Project projects={projects[i]} />)
      if (i > projects.length -1) {
        projectList.push(<hr/>)
      }
    }
    return projectList
  }

  render() {
    const { page, description } = this.props.pageContext
    return (
      <Layout>
        <Helmet title={ page } />
        <HeaderGeneric header={ page } description={description} />
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <PortfolioNav sticky={this.state.stickyNav} active={ page} />
        <div id="main">
          <section id="content" className="main">
            { this.renderProjects() }
          </section>
        </div>
      </Layout>
    )
  }
}

export default ProjectShowcase
