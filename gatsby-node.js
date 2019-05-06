/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

const images = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 4,
    height: 3
  }
];

const pages = [
  {
    page: 'Photography',
    description: "Capturing life, one frame at a time.",
    type: 'gallery',
    images
  },
  {
    page: 'Hand Crafted',
    description: "Making art the old fashioned way.",
    type: 'gallery',
    images
  },
  {
    page: 'Illustration',
    description: "My third grade teacher used to tell me I was wasting my time doodling, but look at me now!",
    type: 'gallery',
    images
  },
  {
    page: 'Social Media',
    description: "Connecting with people in the digital age.",
    type: 'project',
    projects: [
      {
        title: 'This Star Won\'t Go Out',
        description: 'Lorem Ipsum',
        url: 'https://tswgo.com',
        github: 'https://github.com'
      },
      {
        title: 'Happy Feet',
        description: 'Lorem Ipsum',
        url: 'https://google.com',
        github: 'https://github.com'
      },
    ]
  },
  {
    page: 'Web Design',
    description: "Slinging <div>s and pushing Pixels!",
    type: 'project',
    projects: [
      {
        title: 'This Star Won\'t Go Out',
        description: 'Lorem Ipsum',
        url: 'https://tswgo.com',
        github: 'https://github.com'
      },
      {
        title: 'Happy Feet',
        description: 'Lorem Ipsum',
        url: 'https://google.com',
        github: 'https://github.com'
      },
    ]
  }
]

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const galleryTemplate = path.resolve(`src/templates/ImageGallery.js`)
    const projectTemplate = path.resolve(`src/templates/ProjectShowcase.js`)
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(limit: 1000) {
              edges {
                node {
                  frontmatter {
                    path
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create pages for each markdown file.
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
          }
        })
      })
    )
  })
}
