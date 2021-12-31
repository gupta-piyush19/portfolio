module.exports = {
  author: "Piyush Gupta",
  siteTitle: "Piyush Gupta - Portfolio",
  siteShortTitle: "PG",
  siteDescription: "Piyush is a software developer based in Ghaziabad",
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
      icon: "https://www.vectorlogo.zone/logos/gmail/gmail-icon.svg",
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
      {
        name: "Contact",
        url: "/#contact",
      },
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
        "Blogic is a full stack web application to read and write blogs. It has a fully featured rich text editor built on Draft.js.",
      "Tech stack": [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Draft.js",
        "Heroku",
      ],
    },
    {
      title: "Find Your Bank",
      description:
        "Find Your Bank is an application that can be used to find the list of all the banks in a particular place in India. Users can also fetch details of a single bank from its IFSC Code.",
      "Tech stack": ["Next.js", "Tailwind CSS", "react-table", "Vercel"],
    },
  ],
};
