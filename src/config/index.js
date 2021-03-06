module.exports = {
  author: "Piyush Gupta",
  siteTitle: "Piyush Gupta - Portfolio",
  siteShortTitle: "PG",
  siteDescription: "Piyush is a software developer based in Ghaziabad",
  profileTitle: "Hey there, I am Piyush gupta",
  profileDescription: [
    "I am a full stack web developer who loves building projects and experimenting new things. I am proficient in MERN stack and can create full stack web applications.",
    "I am based in Ghaziabad, Uttar Pradesh. I'm currently pusruing B.Tech in CSE from MAIT, GGSIPU.",
  ],
  siteLanguage: "en_IN",
  socialMedia: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/piyushgupta19",
      icon: "https://www.vectorlogo.zone/logos/linkedin/linkedin-ar21.svg",
    },
    {
      name: "GitHub",
      url: "https://github.com/gupta-piyush19",
      icon: "https://www.vectorlogo.zone/logos/github/github-ar21.svg",
    },
    {
      name: "Codepen",
      url: "https://codepen.io/Piyush0_0",
      icon: "https://www.vectorlogo.zone/logos/codepen/codepen-ar21.svg",
    },
    {
      name: "Gmail",
      url: "mailto:piyushguptaa2z123@gmail.com",
      icon: "https://www.vectorlogo.zone/logos/gmail/gmail-ar21.svg",
    },
  ],
  navLinks: {
    menu: [
      {
        name: "About",
        url: "/#about",
      },
      {
        name: "Experience",
        url: "/#experience",
      },
      {
        name: "Skills",
        url: "/#skills",
      },
      {
        name: "Projects",
        url: "/#projects",
      },
      // {
      //   name: "Contact",
      //   url: "/#contact",
      // },
    ],
    button: {
      name: "Get In Touch",
      url: "/#contact",
    },
  },
  skillObj: {
    "Programming Languages": ["JavaScript", "C++", "C", "Python", "PHP"],
    "Web Technologies": [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "Gatsby",
      "Node.js",
      "Express.js",
      "Fastify",
      "SASS",
      "Rest API",
    ],
    "Databases & Tools": [
      "MySQL",
      "MongoDB",
      "Git",
      "GitHub",
      "GraphQL",
      "Fastify",
      "Wordpress",
    ],
  },
  experience: [
    {
      place: "FastJobs.io",
      designation: "Frontend Developer",
      duration: "Jan 2022 - Apr 2022",
      description: [
        "Worked on Fastjobs.io from scratch to a production-ready app.",
        "Converted Figma designs to responsive web pages.",
        "Learnt and used SCSS to make pixel-perfect UI components.",
        "Implemented react-query for data fetching and caching.",
        "Implemented react-player for handling video interactions on the frontend.",
        "Helped in configuring CI/CD for auto-deployment using GitHub workflows.",
      ],
    },
    {
      place: "1854 Media",
      designation: "Consultant UI Developer",
      duration: "May 2021 - Sept 2021",
      description: [
        "Converted designs to web pages",
        "Created various types of UI components like popups, calculator, forms, etc.",
        "Learnt and implemented complex SQL Queries.",
        "Learnt and implemented automation in google sheets using Apps Script.",
        "Used Facebook Graph API and created an automated process to retrieve data",
      ],
    },
  ],
  projects: [
    {
      title: "Blogic",
      description:
        "Blogic is a full stack web application to read and write blogs. It has a fully featured rich text editor built on Draft.js. Users can write write blogs on WYSIWYG Editor and also edit and delete them.",
      "Tech stack": [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Draft.js",
        "Heroku",
      ],
      links: {
        GitHub: "https://github.com/gupta-piyush19/Blogic",
        Live: "https://blogic-app.herokuapp.com/",
      },
    },
    {
      title: "Find Your Bank",
      description:
        "Find Your Bank is an application that can be used to find the list of all the banks in a particular place in India. Users can also fetch details of a single bank from its IFSC Code.",
      "Tech stack": ["Next.js", "Tailwind CSS", "react-table", "Vercel"],
      links: {
        GitHub: "https://github.com/gupta-piyush19/find-your-bank",
        Live: "https://find-your-bank.vercel.app/",
      },
    },
  ],
};
