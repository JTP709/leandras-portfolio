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

module.exports = [
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