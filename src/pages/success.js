import React from 'react'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import { Link } from 'gatsby';

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <HeaderGeneric header="Concact Me" />
        <div id="main">
          <section id="content" className="main special">
            <header className="major">
              <h2>Thank you for contacting me!</h2>
              <h3 className="sub--header">I'll be in touch soon.</h3>
              <p>
                <Link to="/" className="button">Back Home</Link>
              </p>
            </header>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
