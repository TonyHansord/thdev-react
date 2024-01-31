export const projects = {
  featured: [
    {
      id: 1,
      title: 'SalesPick: Warehouse Management App',
      description:
        'Full-stack Inventory Management app, built with JavaScript and React for the frontend and Ruby on Rails with PostgreSQL, for the backend.',
      tech: ['React', 'Ruby on Rails', 'PostgreSQL'],
      link: 'https://salespick.onrender.com',
      media: {
        hasVideo: true,
        video: '../assets/SalesPick-Preview.webm',
        image: ''
      }
    },
    {
      id: 2,
      title: 'BookLogue: Reading Manager',
      description:
        'An iOS app that allows users to track their reading progress and add notes about the books they read.',
      tech: ['Swift', 'Xcode', 'Cocoapods', 'Firebase'],
      link: 'https://apps.apple.com/us/app/booklogue/id1521788378?mt=8',
      media: {
        hasVideo: false,
        image: '../assets/Tracker_Goal.png'
      }
    },
    {
      title: 'Find that Show',
      description: 'App front end made with HTML, CSS and JS, as part of software engineering bootcamp. User can search for TV shows, and view details about each show. Fetches data from the TV Maze API.',
      tech: ['HTML', 'CSS', 'Javascript'],
      link: 'https://findthatshow.netlify.app',
      media: {
        hasVideo: true,
        video: '../assets/FindThatShow-preview.webm',
      }
    },
    {
      title: 'Game collection app',
      desc: 'Proof of concept web app front-end made with React, as part of software engineering bootcamp. User can add games to their collection, and view details about each game.',
      tech: ['HTML', 'CSS', 'React', 'Javascript'],
      repo: 'https://github.com/TonyHansord/phase-2-game-collectors-app',
      link: 'https://game-collect.netlify.app',
      media: {
        hasVideo: false,
        image: '../assets/game-collect.jpg',
      }
    },

  ],
  other: [
    {
      id: 1,
      title: 'NFT preview card component',
      type: 'Frontend Mentor Challenge',
      description:
        'A component that displays a preview of an NFT card that would be used on a NFT Marketplace site.',
      tech: ['HTML', 'CSS', 'Bootstrap'],
      repo: 'https://github.com/TonyHansord/FM-Challenges/tree/master/NFT-element',
      link: 'https://nft-element-tonyhansord.vercel.app',
      img: '../assets/nft-element.jpg'
    },
    {
      id: 2,
      title: 'Product preview card component',
      type: 'Frontend Mentor Challenge',
      description:
        'Another challenge involving creating a card component, this one a product preview card.',
      tech: ['HTML', 'CSS'],
      repo: 'https://github.com/TonyHansord/FrontEndMentorChallenges/tree/master/product-preview-card-component',
      link: 'https://product-preview-card-tonyhansord.vercel.app/',
      img: '../assets/product-preview-card.png'
    },
    {
      id: 3,
      title: '4 Card Feature Section',
      type: 'Frontend Mentor Challenge',
      description:
        'This challenge was to recreate a four card section, and to practice responsive layouts.',
      tech: ['HTML', 'CSS', 'Figma'],
      repo: 'https://github.com/TonyHansord/FM-Challenges/tree/master/four-card-feature-section',
      link: 'https://four-card-section-tonyhansord.vercel.app',
      img: '../assets/four-card-section.png'
    },
    {
      id: 4,
      title: 'Time tracking dashboard',
      type: 'Frontend Mentor Challenge',
      description:
        'This challenge was to recreate a dashboard for a time-tracking app.',
      tech: ['HTML', 'CSS', 'Javascript'],
      repo: 'https://github.com/TonyHansord/FM-Challenges/tree/time-tracker/time-tracking-dashboard',
      link: 'https://tonyhansord-time-tracker.netlify.app',
      img: '../assets/time-tracker.png'
    },
    {
      id: 5,
      title: 'Skilled e-learning landing page',
      type: 'Frontend Mentor Challenge',
      description:
        'This challenge was to recreate a landing page, with a focus on making it responsive.',
      tech: ['HTML', 'CSS', 'Sass'],
      repo: 'https://github.com/TonyHansord/FrontEndMentorChallenges/tree/master/skilled-elearning-landing-page',
      link: 'https://tonyhansord-elearning-landing-page.netlify.app',
      img: '../assets/elearning-landing-page.png'
    }
  ]
}

export const skills = [
  {
    name: 'HTML',
    icon: 'fab fa-html5'
  },
  {
    name: 'CSS',
    icon: 'fab fa-css3-alt'
  },
  {
    name: 'JavaScript / TypeScript',
    icon: 'fab fa-js-square'
  },
  {
    name: 'React',
    icon: 'fab fa-react'
  },
  {
    name: 'Ruby on Rails',
    icon: 'fas fa-gem'
  },
  {
    name: 'PostgreSQL',
    icon: 'fas fa-database'
  },
  {
    name: 'Bootstrap',
    icon: 'fab fa-bootstrap'
  },
  {
    name: 'Sass',
    icon: 'fab fa-sass'
  },
  {
    name: 'Git',
    icon: 'fab fa-git-alt'
  },
  {
    name: 'GitHub',
    icon: 'fab fa-github'
  },
  {
    name: 'Figma',
    icon: 'fab fa-figma'
  },
  {
    name: 'Firebase',
    icon: 'fas fa-fire'
  },
  {
    name: 'Swift',
    icon: 'fab fa-swift'
  }
]
