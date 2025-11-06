
//tech_logo
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';

import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';

import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';

import bootstrapLogo from './assets/tech_logo/bootstrap.png';

import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';

import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Experience Section Logo's

import codesoftlogo from './assets/company_logo/codesoftlogo.png'

import ganpatilogo from './assets/company_logo/ganpatilogo.jpg';

//this is project section logo
import githubdetector from './assets/work_logo/githubdetector.png';
import BookMyShow from './assets/work_logo/BookMyShow.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import sunriseacademy from './assets/work_logo/sunriseacademy.png';
import chataiapp from './assets/work_logo/chataiapp.png';
import quiksignapp from './assets/work_logo/quiksignapp.png';
import weatherapp from './assets/work_logo/weatherapp.png';
import studentreport from './assets/work_logo/studentreport.png';
import calculator from './assets/work_logo/calculator.png';


// for Education logo

import gmanilogo from './assets/education_logo/gmani-logo.png';
import biharlogo from './assets/education_logo/biharlogo.png';


//this is skillsinfo 

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "ReactJS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "TailwindCSS", logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'Next JS', logo: nextjsLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "NodeJS", logo: nodejsLogo },
      { name: "ExpressJS", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },


    ],
  },



  {
    title: "Tools & Others",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Figma", logo: figmaLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Vercel", logo: vercelLogo },
    ],
  },
];

//For Experiance section.

export const experiences = [
  {
    id: 0,
    img: ganpatilogo,
    role: "Fullstack Developer Intern",
    company: "HGRD",
    date: "Oct 2025 - Sept 2025",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "ReactJS",
      "nodejs",
      "Expressjs",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    id: 1,
    img: codesoftlogo,
    role: "C++ Developer Intern",
    company: "CodeSoft",
    date: "July 2024 - Aug 2024",
    desc: "During my internship at CodeSoft, I completed five coding tasks based on C++ basics and OOP concepts. This internship helped me understand topics like classes, objects, inheritance, polymorphism, encapsulation, and file handling. By solving these tasks, I improved my problem-solving skills and learned how to use C++ concepts in real programs.",


    skills: [
      "C++",
      "Oops & DSA"

    ],
  },
]


//this is for my project

export const projects = [
  {
    id: 0,
    title: "GitHub Profile Detective",
    description:
      "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    image: githubdetector,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github: "https://github.com/Dhirajkumarthakur/GitHubProfileSearchApp",
    // hosted link we have to put.
    webapp: "https://git-hub-profile-search-app-one.vercel.app/",
  },
  {
    id: 1,
    title: "BookMyShow",
    description:
      "I created a BookMyShow Clone where users can explore movies, book tickets, and manage their bookings online.The frontend is made with React.js to provide an easy and user-friendly interface.The backend is built using Node.js and Express.js, and MongoDB is used to store user, movie, and booking data.This project helped me learn how frontend, backend, and database work together in a full-stack application.",
    image: BookMyShow,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
    //put github and hosted link
    github: "https://github.com/Dhirajkumarthakur/Bookmyshow.git",
    webapp: "https://github.com/Dhirajkumarthakur/Bookmyshow.git",
  },
  {
    id: 2,
    title: "Movie Recommendation App",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: movierecLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Dhirajkumarthakur/Movie-Recommendation-App",
    //hosted link
    webapp: "https://movie-recommendation-app-chi-liard.vercel.app/",
  },
  {
    id: 3,
    title: "SunRise Academy",
    description:
      "I created a website for Sunrise Academy to showcase school information, facilities, activities, and admission details. The site is designed to be responsive and easy to navigate, giving visitors a clear view of the school’s features and values.",
    image: sunriseacademy,
    tags: ["React JS", "Tailwind", "Html", "Javascript"],
    //githubrepose and hosted link
    github: "https://github.com/Dhirajkumarthakur/sunriseacademy",
    webapp: "https://sunriseacademy.vercel.app/",
  },
  {
    id: 4,
    title: "SignaturApp",
    description:
      "I built a Signature App that lets users draw and save their digital signatures online. For the front-end, I used React.js to create a clean interface for writing and previewing signatures. On the back-end, I set up Node.js with Express.js to handle storing and retrieving signatures",
    image: quiksignapp,
    tags: ["JavaScript", "localStorage", "HTML", "CSS"],
    github: "https://github.com/Dhirajkumarthakur/Signature-app",
    //hosted link
    webapp: "https://signature-app-amber.vercel.app/",
  },
  {
    id: 5,
    title: "Chat_AI_App",
    description:
      "I created a Chat AI App using React.js and the Gemini API. The app allows users to type any question, send it to the AI model, and get instant responses. I used Axios to make API requests and React state to manage user input and display the answer. This project helped me understand how to integrate AI APIs, handle asynchronous requests,",
    image: chataiapp,
    tags: ["ReactJs", "GeminiAPI"],
    github: "https://github.com/Dhirajkumarthakur/chat-ai-app",
    //hosted link
    webapp: "https://chat-ai-app-red.vercel.app/",
  },
  {
    id: 6,
    title: "WeatherApp",
    description:
      "I created a Weather App using React.js and the OpenWeatherMap API. The app allows users to search for any city and view real-time weather details like temperature and weather conditions. It also changes the background image based on temperature (cold or warm). This project helped me learn about API integration, handling user input, and managing state in React.",
    image: weatherapp,
    tags: ["React JS", "Css", "OpenWeatherMap API"],
    github: "https://github.com/Dhirajkumarthakur/weatherapp",
    //hosted link
    webapp: "https://weatherapp-six-omega-85.vercel.app/",
  },
  {
    id: 7,
    title: "StudentReportCard",
    description:
      "I created a Student Management System using C++ and file handling. This project allows users to add, search, and update student details like name, roll number, and CGPA. The data is stored in a text file for record keeping. Through this project, I learned how to use classes, objects, file handling (fstream), and basic CRUD operations in C++.",
    image: studentreport,
    tags: ["C++ lang.", "fstrem", "crud oper."],
    github: "https://github.com/Dhirajkumarthakur/StudentReportCard",
    //hosted link
    webapp: "https://github.com/Dhirajkumarthakur/StudentReportCard",
  },
  {
    id: 8,
    title: "Calculator",
    description:
      "I created a simple Calculator app using React.js. It performs basic arithmetic operations like addition, subtraction, multiplication, and division. The app uses React hooks (useState) to manage input and output, and includes features like clear, backspace, and error handling. This project helped me understand event handling, state management, and conditional logic in React.",
    image: calculator,
    tags: ["React JS", "Usestate", "Css"],
    github: "https://github.com/Dhirajkumarthakur/Calculator",
    //hosted url link
    webapp: "https://calculator-alpha-drab-18.vercel.app/",
  },
];


//for education 


export const education = [
  {

    id: 0,
    img: gmanilogo,
    school: "Gnanamani College of Technology,(Anna University)",
    date: "May 2022 - July 2026",
    grade: "7.50 CGPA (Upto 6th Semester)",
    desc: "I am pursuing a Bachelor of Engineering (B.E) in Computer Science and Engineering at Gnanamani College of Technology. I have built a strong foundation in programming, web technologies, and software development through practical projects and coursework. My college journey has enhanced my technical skills and prepared me for real-world challenges in the field of software engineering.",

    degree: "Bachelor of Engineering - B.E in Computer Science and Engineering"
  },


  {
    id: 1,
    img: biharlogo,
    school: "Gopeshwar College, Hathua",
    date: "May 2018 - April 2020",
    grade: "80.8%",
    desc: "I completed my class 12 education from Gopeshwar College, Hathua , under the BSEB board, where I studied Physics, Chemistry, and Mathematics (PCM)",
    degree: "BSEB(XII)- with PCM",
  },
  {
    id: 2,
    img: biharlogo,
    school: "",
    date: "Apr 2017 - March 2018",
    grade: "76.6%",
    desc: "I completed my class 10 education from Upgraded Ms Satai under the BSEB board, where I studied Science ",
    degree: "BSEB(X) - with Science",
  },


];


