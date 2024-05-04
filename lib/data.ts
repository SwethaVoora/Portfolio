import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import restImg from "@/public/FeastRest.png";
import staywellImg from "@/public/staywell.png";
import amazonProjectImg from "@/public/AmazonProject.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "National Institute of Technology, Rourkela, India",
    location: "B.Tech in Computer Science & Engineering",
    description:
      "I set my foot in the world of Computer Science at NIT Rourkela. This Institute has taught me beyond what I could ever imagine, from the basics of DSA to the depths of Deep Learning.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2014 - May 2018",
  },
  {
    title: "Associate Software Engineer",
    location: "Parexel International",
    description:
      "Right after my Bachelors, My first full-time job was at Parexel International, where I constantly worked with global teams in US/UK and was actively working on Change Requests which were assigned to me via JIRA Software.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2018 - Dec 2020",
  },
  {
    title: "Software Engineer",
    location: "Calyx",
    description:
      "I would say that my hands were always full during my tenure at Calyx, from CRs to end-to-end full stack projects, documentations, databases and more. Overall a fast paced work environment which never left me bored.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2021 - Jul 2022",
  },
  {
    title:
      "Pace University - Seidenberg school of Computer Science and Information Systems",
    location: "Master of Science, Computer Science",
    description:
      "Pursuing MSCS at Pace has been incredibly rewarding, providing me with the opportunity to deepen my skills while focusing on academic/personal projects, LeetCode challenges, and building connections across diverse backgrounds.",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2022 - May 2024",
  },
  {
    title: "Full stack development Intern",
    location: "Shoptaki",
    description:
      "In Fall 2023, I worked as a Intern at Shoptaki and was leading the full stack development of their crowdfunding real-estate platform, Sophtera.",
    // I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "Sep 2023 - Dec 2023",
  },
] as const;

export const projectsData = [
  {
    title: "FeastRest",
    description:
      "FeastRest is a full stack food-order management system for dine-in customers.",
    tags: [
      "React",
      "Next.js",
      "TailwindCSS",
      "Auth0",
      "AWS Services",
      "RDS",
      "API Gateway",
      "Lambda",
    ],
    imageUrl: restImg,
  },
  {
    title: "Staywell",
    description:
      "A medical e-commerce website where the care-takers can buy medical/healthcare supplies",
    tags: [
      "React",
      "TailwindCSS",
      "Redux",
      "Sequelize",
      "Express.js",
      "Jenkins",
    ],
    imageUrl: staywellImg,
  },
  {
    title: "Amazon Clone",
    description: "A Basic Amazon clone built with vanilla JavaScript",
    tags: ["Javascript", "HTML", "CSS"],
    imageUrl: amazonProjectImg,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "HTML",
  "CSS",
  "Tailwind",
  "Java",
  "Spring Boot",
  "C#",
  "ASP.NET",
  "Jenkins",
  "Docker",
  "CI/CD",
  "Git",
  "Sequelize",
  "MySQL",
  "PostgreSQL",
  "Redux",
  "GraphQL",
  "Apollo",
  "Python",
  "Django",
  "Flask",
] as const;
