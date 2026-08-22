// event data source for zenith cs club
/* DOCS

    this is for the registration event
        id: 'registration-demo', //this can be anything recommended is that its same as the event name 
        type: 'registration', // this can be only registration or event
        title: 'Zenith Registration Demo', //the big title of the event 
        category: 'Registration',//this is just a small text on the event card
        status: 'completed', //just a secondary  indicatornprimary is registrationStatus . this can be removed in only the registration event types
        date: 'August 22, 2026', //the main date shown on the page
        image: '/events/orientation-2026/2.jpg', //the cover image of the event
        shortDescription: 'Temporary demo event used to demonstrate the registration event structure.', //this is shown just below the main title 
        description: 'This is a temporary test event used to demonstrate how registration-based events behave across the Zenith CS Club website, including registration status badges, deadlines, and embedded Google Forms.', //this is shown in the about the event section
        featured: true, true if u want this to appear on the home page
        registrationStatus: 'open', // determines wether if the registration is open or not this is important to add 
        registrationDeadline: 'August 28, 2026', //important parameter 
        formUrl: 'form URL' //the public form url
      

*/




export const eventsData = [
  {
    id: 'august-2026',
    type: 'event',
    title: 'UI/UX competition',
    category: 'Single Round Event',
    date: 'August 20, 2026',
    status: 'Completed',
    image: '/events/UI-august-2026/1.jpg',
    shortDescription: 'An intense 60-minute UI/UX design showdown featuring on-the-spot topics and rapid prototyping. ',
    description: 'This UI/UX competition was designed to simulate real-world, high-pressure design sprints. Rather than coming in with pre-planned ideas, teams were given a topic on the spot and had only one hour to deliver a complete design solution. The challenge tested not just their mastery of design tools, but their ability to communicate as a team, apply fundamental UX principles on the fly, and transform a blank canvas into a polished interface before the buzzer.',
    featured: true,
    gallery: [
      "/events/UI-august-2026/2.jpg",
      "/events/UI-august-2026/3.jpg",
      "/events/UI-august-2026/4.jpg",
      "/events/UI-august-2026/5.jpg",
      "/events/UI-august-2026/6.jpg",
      "/events/UI-august-2026/7.jpg",
      "/events/UI-august-2026/8.jpg",
      "/events/UI-august-2026/9.jpg",
      "/events/UI-august-2026/10.jpg",
    ]
  },
  // {
  //   id: 'registration-demo', //this can be anything recommended is that its same as the event name 
  //   type: 'registration', // this can be only registration or event
  //   title: 'Zenith Registration Demo', //the big title of the event 
  //   category: 'Registration',//this is just a small text on the event card
  //   status: 'upcoming', //just a secondary  indicatornprimary is registrationStatus . this can be removed in only the registration event types
  //   date: 'August 22, 2026', //the main date shown on the page
  //   image: '/events/orientation-2026/2.jpg', //the cover image of the event
  //   shortDescription: 'Temporary demo event used to demonstrate the registration event structure.', //this is shown just below the main title 
  //   description: 'This is a temporary test event used to demonstrate how registration-based events behave across the Zenith CS Club website, including registration status badges, deadlines, and embedded Google Forms.', //this is shown in the about the event section
  //   featured: false, // true if u want this to appear on the home page
  //   registrationStatus: 'open', // determines wether if the registration is open or not this is important to add 
  //   registrationDeadline: 'August 28, 2026', //important parameter 
  //   formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdMhH5PDXQALTQMriVob1ZniQ1uPOBEXopKLb28elDwj0ADew/viewform?usp=header' //the public form url
  // },
  // {
  //   id: 'registration-demo-closed', //this can be anything recommended is that its same as the event name 
  //   type: 'registration', // this can be only registration or event
  //   title: 'Zenith Registration Demo', //the big title of the event 
  //   category: 'Registration',//this is just a small text on the event card
  //   status: 'completed', //just a secondary  indicatornprimary is registrationStatus . this can be removed in only the registration event types
  //   date: 'August 22, 2026', //the main date shown on the page
  //   image: '/events/orientation-2026/2.jpg', //the cover image of the event
  //   shortDescription: 'Temporary demo event used to demonstrate the registration event structure.', //this is shown just below the main title 
  //   description: 'This is a temporary test event used to demonstrate how registration-based events behave across the Zenith CS Club website, including registration status badges, deadlines, and embedded Google Forms.', //this is shown in the about the event section
  //   featured: false, // true if u want this to appear on the home page
  //   registrationStatus: 'closed', // determines wether if the registration is open or not this is important to add 
  //   registrationDeadline: 'August 28, 2026', //important parameter 
  //   formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdMhH5PDXQALTQMriVob1ZniQ1uPOBEXopKLb28elDwj0ADew/viewform?usp=header' //the public form url
  // },
  {
    id: 'case-files',
    type: 'event',
    title: 'Case Files: The Campus Edition',
    category: 'Multi-Round Event',
    status: 'Completed',
    date: 'February 3, 2026',
    image: '/events/case-file/case-file.jpg',
    shortDescription: 'A multi-round competition featuring a web-based quiz followed by a clue-based physical campus hunt.',
    description: 'Case Files is a flagship multi-stage competition designed to test technical concepts, logical problem-solving, and physical teamwork. Participants first competed in a digital PHP/database quiz before advancing to an exciting clue-based treasure hunt across the SACCM campus.',
    featured: false,
    rounds: [
      {
        roundNumber: 1,
        title: 'Interactive Quiz',
        type: 'Web-based Quiz',
        description: 'A custom web-based quiz platform developed using PHP with database storage to evaluate technical concepts, logical reasoning, riddles, and speed.',
        image: '/events/case-file/case-file-quiz.png',
        highlights: [
          '25–30 MCQs covering reasoning, observation, riddles & basic tech',
          'Database-backed score and result tracking',
          'Top 8 qualifying teams advanced to Round 2',
          'Team size: 3 members'
        ]
      },
      {
        roundNumber: 2,
        title: 'Campus Hunt',
        type: 'Physical Clue Hunt',
        description: 'A physical puzzle hunt starting with a clue slip that directed qualifying teams through multiple hidden locations across the SACCM college campus.',
        image: '/events/case-file/5.png',
        highlights: [
          'Sequential clues hidden at various SACCM campus locations',
          'Required solving puzzles at each station to discover the next location',
          'Final challenge leading to the ultimate solution'
        ]
      }
    ],
    gallery: [
      "/events/case-file/1.jpg",
      "/events/case-file/2.jpg",
      "/events/case-file/3.jpg",
      "/events/case-file/4.jpg",
      "/events/case-file/5.jpg",
      "/events/case-file/6.jpg",
      "/events/case-file/7.jpg",
      "/events/case-file/8.jpg",
      "/events/case-file/9.jpg",
      "/events/case-file/10.jpg",
      "/events/case-file/11.jpg",
      "/events/case-file/12.jpg",
      "/events/case-file/13.jpg",
      "/events/case-file/14.jpg",
      "/events/case-file/15.jpg",
    ]
  },
  {
    id: 'seminar-oct',
    type: 'event',
    title: 'Seminar - Future of work',
    category: 'Seminar',
    date: 'October 27, 2025',
    status: 'Completed',
    image: '/events/seminar-27-oct/1.jpg',
    shortDescription: 'A session held for BCA students | yet to decide |',
    description: '| yet to decide |',
    featured: false,
    gallery: [
      "/events/seminar-27-oct/2.jpg",
      "/events/seminar-27-oct/3.jpg",
      "/events/seminar-27-oct/4.jpg",
      "/events/seminar-27-oct/5.jpg",
      "/events/seminar-27-oct/6.jpg",
      "/events/seminar-27-oct/7.jpg",
      "/events/seminar-27-oct/8.jpg",
      "/events/seminar-27-oct/9.jpg",
      "/events/seminar-27-oct/10.jpg",
    ]
  },
  {
    id: 'orientation-2026',
    type: 'event',
    title: 'Orientation 2026: Introduction & Quiz',
    category: 'Orientation',
    status: 'Completed',
    date: 'July 29, 2026',
    image: '/events/orientation-2026/2.jpg',
    shortDescription: 'A session held for first-year students introducing Zenith CS Club, followed by an interactive tech quiz.',
    description: 'An orientation session organized for incoming first-year BCA students at SACCM. The event introduced the club\'s vision, past activities, and upcoming opportunities, followed by an interactive introductory quiz session.',
    featured: false,
    gallery: [
      '/events/orientation-2026/1.jpg',
      '/events/orientation-2026/2.jpg',
      '/events/orientation-2026/3.jpg',
      '/events/orientation-2026/4.jpg',
      '/events/orientation-2026/5.jpg',
      '/events/orientation-2026/6.jpg',
      '/events/orientation-2026/7.jpg',
      '/events/orientation-2026/8.jpg',
      '/events/orientation-2026/9.jpg',
    ]
  }
];

export const getAllEvents = () => eventsData;

export const getEventById = (id) => eventsData.find(e => e.id === id);

export const getFeaturedEvent = () => eventsData.find(e => e.featured) || eventsData[0];
