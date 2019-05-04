import React from 'react'
import Helmet from 'react-helmet'
import Lightbox from 'react-images'
import Gallery from "react-photo-gallery"
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import PortfolioNav from '../components/PortfolioNav'

class ImageGallery extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      stickyNav: false,
      lightboxIsOpen: false,
      currentImage: 0,
      images: props.pageContext.images
    };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  
  openLightbox(event, obj) {
    event.preventDefault();
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    const {page, description} = this.props.pageContext

    return (
      <Layout>
        <Helmet title={page} />
        <HeaderGeneric header={page} description={description} />
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <PortfolioNav sticky={this.state.stickyNav} active= {page.toLowerCase().replace(/\s/g, '') } />
        <div id="gallery">
          <section id="content" className="main">
            <Gallery photos={this.state.images} onClick={this.openLightbox} />
            <Lightbox images={this.state.images}
              onClose={this.closeLightbox}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
            />
          </section>
        </div>
      </Layout>
    )
  }
}

export default ImageGallery
