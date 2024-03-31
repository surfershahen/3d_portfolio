import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  ecommerce,
  SaaSWebsite,
  expenseApp,
  threejs,
  social,
  admin,
  AISaas,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Freelancer",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Freelancer",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Freelancer",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-commerce App",
    description:
      "e-commerce app, developed with the powerful and efficient React framework, offers a seamless and responsive shopping experience for tech enthusiasts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Styled-component",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/surfershahen/ecommerce-front.git",
  },
  {
    name: "SaaSWebsite",
    description:
      "SaaS platform for personalized t-shirt design, crafted with the cutting-edge technology of Vite for lightning-fast performance. Whether you're looking to express your individual style or seeking a unique branding solution, our platform caters to all your custom t-shirt needs with unparalleled ease and creativity.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Chat-GPT-API",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "Three.Js",
        color: "pink-text-gradient",
      },
    ],
    image: SaaSWebsite,
    source_code_link: "https://github.com/surfershahen/shahen_threejs_ai.git",
  },
  {
    name: "Social Media Project",
    description:
      "Developed using the robust and dynamic React framework,Wanderlens offers users an engaging and intuitive environment to share, explore, and connect through the power of photography",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: social,
    source_code_link: "https://github.com/surfershahen/sharewave",
  },
  {
    name: "Ecommerce Admin",
    description:
      "e-commerce admin panel, meticulously developed using React, designed to empower store owners with complete control over their online storefront. This intuitive platform streamlines the management process, making it easy to upload, edit, and delete products and categories, while providing insightful summaries of sales, orders, and revenue.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: admin,
    source_code_link: "https://github.com/surfershahen/ecommerce-admin.git",
  },
  {
    name: "Expense Tracker App",
    description:
      "developed using the powerful React framework, is a user-friendly financial tool designed to help individuals effortlessly manage and track their income and expenses. This app stands out in its simplicity and effectiveness, catering to anyone who wants to gain better control over their personal finances.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Hooks",
        color: "green-text-gradient",
      },
      {
        name: "useContext",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: expenseApp,
    source_code_link:
      "https://github.com/surfershahen/expense-tracker-react.git",
  },
  {
    name: "AI Saas",
    description:
      "The described AI SaaS (Software as a Service) application is an advanced, versatile platform designed to cater to a wide range of creative and technical needs. It allows users to generate music, images, videos, code, and engage in conversations, harnessing the power of artificial intelligence to fuel creativity and innovation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "Prisma",
        color: "sunset-text-gradient",
      },
      {
        name: "Stripe",
        color: "teal-blue-text-gradient",
      },
      {
        name: "TailWindCss",
        color: "pink-text-gradient",
      },
      {
        name: "WebHooks",
        color: "red-orange-text-gradient",
      },
      {
        name: "TypeScript",
        color: "purple-blue-text-gradient",
      },
      {
        name: "OpenAi",
        color: "cyan-lime-text-gradient",
      },
      {
        name: "Clerk-Auth",
        color: "purple-blue-text-gradient",
      },
    ],
    image: AISaas,
    source_code_link: "https://github.com/surfershahen/ai-saas-app.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
