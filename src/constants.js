// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import picsartLogo from './assets/tech_logo/picsart.png';
import canvaLogo from './assets/tech_logo/canva.png';

// Experience Section Logo's
import infiniteLogo from './assets/company_logo/infinite.png';
import bookbridges from './assets/company_logo/BookBridges.png';

// Education Section Logo's
import aecLogo from './assets/education_logo/AEC.png';
import svmLogo from './assets/education_logo/svm.jpg';

// Project Section Logo's
import blogappLogo from './assets/work_logo/blog_app.png';
import realestateLogo from './assets/work_logo/real_estate.png';
import weatherappLogo from './assets/work_logo/weather_app.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo }, 
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Picsart', logo: picsartLogo },
      { name: 'Canva', logo: canvaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: infiniteLogo,
      role: "Cloud Intern (Trainee)",
      company: "Infinite Computer Solutions",
      date: "March 2025 - May 2025",
      desc: "Acquired practical knowledge of cloud computing concepts. Completed internal assessments and earned a Cloud Computing Certification.",
      skills: [
        "Basics of Cloud Computing",
        "Get Certification"
      ],
    },
    {
      id: 1,
      img: bookbridges,
      role: "Graphic Desiger",
      company: " Bookbridges",
      date: "May 2023 - July 2023",
      desc: "Designed high-quality logos, banners, posters, and social media creatives to strengthen brand identity and improve overall online presence across digital platforms.Ensured all deliverables were optimized for multiple platforms including Instagram, Facebook, and web usage. Delivered projects within deadlines while maintaining design quality and brand consistency. ",
      skills: [
        "Logo Design",
        "Banner Design",
        "Social Media Design",
        "Branding",
        "Canva",
        "PicsArt",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: aecLogo,
      school: "Asansol Engineering College, Asansol",
      date: "2022 - 2026",
      grade: "6.8 CGPA",
      desc: "Final Year B.Tech Computer Science Engineering Student Currently pursuing my final year with a strong foundation in Data Structures, Web Development, and Core Computer Science subjects..",
      degree: "Bachelor of Technology - Computer Science and Engineering",
    },
    {
      id: 1,
      img: svmLogo,
      school: "Saraswati Vidya Mandir, Sinidih",
      date: "2021 - 2022",
      grade: "71%",
      desc: "I completed my class 12 education from Saraswati Vidya Mandir, Sinidih, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII)",
    },
    {
      id: 2,
      img: svmLogo,
      school: "Saraswati Vidya Mandir, Sinidih",
      date: "2019 - 2020",
      grade: "78%",
      desc: "I completed my class 10 education from Saraswati Vidya Mandir, Sinidih, under the CBSE board.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "QuickBlog-BlogApp",
      description:
        "Developed a fully responsive blog application using React and Vite, reducing page load time by ~30% through optimized component rendering and reusable UI components. Implemented client-side routing with React Router for seamless navigation between home, post, and create-blog pages without page reloads. Utilized Tailwind CSS to design a clean, modern, and adaptive UI with reusable components and consistent styling.",
      image: blogappLogo,
      tags: ["React JS", "React-Routes","Tailwind CSS", "Vite"],
      github: "https://github.com/adityakumar-cse/blog-app",
      webapp: "https://blog-app-navy-seven-89.vercel.app/",
    },
    {
      id: 1,
      title: "HomeTri-RealEstateApp",
      description:"Developed a modern, responsive real estate website featuring city-specific property pages. Implemented smooth client-side routing with React Router, including conditional rendering of Navbar and Footer components. Designed interactive Login and Signup forms enhanced with emojis and structured for easy validation. Integrated animated statistics and testimonial components to create a dynamic user experience. ",
      image: realestateLogo,
      tags: ["React JS", "React-Routes","Tailwind CSS", "Vite"],
      github: "https://github.com/adityakumar-cse/Real-Estate-Website-main",
      webapp: "https://real-estate-website-nine-gamma.vercel.app/",
    },
    {
      id: 2,
      title: "Weather App",
      description:"Developed a fully responsive weather application using HTML, vanilla CSS, and JavaScript. Integrated the Current Weather Data API to fetch and display real-time weather information based on user location or search queries. Implemented features including current temperature, weather conditions, wind speed, and humidity display. ",
      image: weatherappLogo,
      tags: ["HTML", "CSS", "JavaScript", "API"],
      github: "https://github.com/adityakumar-cse/Weather-App",
      webapp: "https://weather-app-eight-theta-11.vercel.app/",
    },
    ];  