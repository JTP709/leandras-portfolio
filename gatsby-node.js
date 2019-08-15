const path = require(`path`)
const pages = require('./pages.js')

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const galleryTemplate = path.resolve(`src/templates/ImageGallery.js`)
  const projectTemplate = path.resolve(`src/templates/ProjectShowcase.js`)
  // const pages = path.resolve(`src/data/pages.js`)

  pages.map(data => {
    switch(data.type){
      case 'project':
        createPage({
          path: data.page.toLowerCase().replace(/\s/g, ''),
          component: projectTemplate,
          context: { ...data }
        })
        break
      case 'gallery':
        createPage({
          path: data.page.toLowerCase().replace(/\s/g, ''),
          component: galleryTemplate,
          context: { ...data }
        })
        break
      default:
        console.error('invalid portfolio type')
        break
    }
  })
}