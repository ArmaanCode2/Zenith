export const eventsData = [
  {
    id: 'case-files',
    title: 'Case Files: The Campus Edition',
    category: 'Multi-Round Event',
    status: 'Completed',
    date: 'February 3, 2026',
    image: '/events/case-file/case-file-quiz.png',
    shortDescription: 'A multi-round competition featuring a web-based quiz followed by a clue-based physical campus hunt.',
    description: 'Case Files is a flagship multi-stage competition designed to test technical concepts, logical problem-solving, and physical teamwork. Participants first competed in a digital PHP/database quiz before advancing to an exciting clue-based treasure hunt across the SACCM campus.',
    featured: true,
    rounds: [
      {
        roundNumber: 1,
        title: 'Round 01: Interactive Quiz',
        type: 'Web-based Quiz (PHP & DB)',
        description: 'A custom web-based quiz platform developed using PHP with database storage to evaluate technical concepts, logical reasoning, riddles, and speed.',
        image: '/club/case-file-quiz.png',
        highlights: [
          '25–30 MCQs covering reasoning, observation, riddles & basic tech',
          'Database-backed score and result tracking',
          'Top 8 qualifying teams advanced to Round 2',
          'Team size: 3 members'
        ]
      },
      {
        roundNumber: 2,
        title: 'Round 02: Campus Hunt',
        type: 'Physical Clue Hunt',
        description: 'A physical puzzle hunt starting with a clue slip that directed qualifying teams through multiple hidden locations across the SACCM college campus.',
        image: '/club/campus-hunt.jpg',
        highlights: [
          'Sequential clues hidden at various SACCM campus locations',
          'Required solving puzzles at each station to discover the next location',
          'Final challenge leading to the ultimate solution'
        ]
      }
    ],
    gallery: [
      '/club/case-file.jpg',
      '/club/case-file-quiz.png',
      '/club/campus-hunt.jpg'
    ]
  },
  {
    id: 'orientation-2026',
    title: 'Orientation 2026: Introduction & Quiz',
    category: 'Orientation',
    status: 'Completed',
    date: 'July 29, 2026',
    image: '/events/orientation-2026/2.jpg',
    shortDescription: 'A session held for first-year students introducing Zenith CS Club, followed by an interactive tech quiz.',
    description: 'An orientation session organized for incoming first-year BCA students at SACCM. The event introduced the club\'s vision, past activities, and upcoming opportunities, followed by an interactive introductory quiz session.',
    featured: false,
    gallery: [
      '/club/29-07-26.jpg'
    ]
  }
];

export const getAllEvents = () => eventsData;

export const getEventById = (id) => eventsData.find(e => e.id === id);

export const getFeaturedEvent = () => eventsData.find(e => e.featured) || eventsData[0];
