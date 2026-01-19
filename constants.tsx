import React from "react";
import { Project, SkillCategory, SkillLevel, WorkExperience, Education } from "./types";

const VITE_RESUME = (import.meta as any).env?.VITE_RESUME_URL as
  | string
  | undefined;

export const PERSONAL_INFO = {
  name: "Nick Sycz",
  title: "Full Stack Engineer",
  location: "Kanagawa, Japan",
  email: "n.g.sycz@gmail.com",
  github: "https://github.com/nicholassycz",
  linkedin: "https://linkedin.com/in/nicholas-sycz",
  resumeUrl:
    "https://1drv.ms/w/c/7a8cd68d43a8a681/IQTPWV9p_FjqRIS-GEla3F_0AfT95R05-5whOMAaQXQw0Ig?em=2",
  summary: "Developer passionate about crafting intuitive interfaces and the systems behind them.",
};

export const WORK_HISTORY: WorkExperience[] = [
  {
    id: "w1",
    company: "Benco Dental",
    role: "Software Engineer",
    start: "Apr 2021",
    end: "Dec 2025",
    description: "Developed and maintained a large-scale e-commerce platform that specialized in providing essential (and non-essential) products for dental offices nation-wide.",
    achievements: [],
  },
  {
    id: "w2",
    company: "Anovaa/Entech",
    role: "Software Developer",
    start: "Jul 2019",
    end: "Apr 2021",
    description: "Developed and maintained a large-scale e-commerce platform that specialized in providing essential (and non-essential) products for dental offices nation-wide.",
    achievements: [],
  },
  {
    id: "w3",
    company: "Dunham's Sports",
    role: "Team Member",
    start: "Nov 2014",
    end: "Jul 2019",
    description: "A sporting goods discounter store. Big names. Low prices.",
    achievements: ["Trainer of new employees", "Stock boy", "Cashier", "Janitor", "Customer service"],
  },
  {
    id: "w4",
    company: "McNaughton Bros",
    role: "Mover",
    start: "Jun 2012",
    end: "Apr 2014",
    description: "An Indiana, PA moving company specializing in residential and commercial relocations.",
    achievements: ["Packer", "Loader", "Heavy lifter"],
  }
];

export const EDUCATION_HISTORY: Education[] = [
  {
    id: "e1",
    school: "Indiana University of Pennsylvania",
    degree: "Bachelor's Degree in Computer Science",
    period: "2014 - 2018",
    level: 'higher',
    description: "Focused on software development, algorithms, data structures, and computer systems. Completed multiple projects involving General development in Java, JavaScript, Python, COBOL, databases, and applied programming.",
    highlights: ["GPA: 3.8/4.0", "Dean's List (all semesters)"]
  },
  {
    id: "e2",
    school: "Indiana University of Pennsylvania",
    degree: "Bachelor's Degree in Criminology",
    period: "2010 - 2014",
    level: 'higher',
    description: "Developed strong analytical and research skills through coursework in criminal behavior, statistics, forensics and investigative methodology. Built a foundation in evidence-based problem solving.",
    highlights: ["GPA: 3.8/4.0", "Dean's List (all semesters)"]
  },
  {
    id: "e3",
    school: "Pennsylvania Highlands Community College",
    degree: "Associate's Degree in Criminal Justice",
    period: "2018 - 2020",
    level: 'intermediate',
    description: "Expanded on foundational criminal justice concepts with coursework in legal studies, public policy, and applied justice systems. Strengthened communication and analytical reasoning skills.",
    highlights: ["Dean's List (all semesters)"]
  },
  {
    id: "e4", 
    school: "Bishop McCort Catholic High School",
    degree: "Highschool Diploma",
    period: "2007 - 2011",
    level: 'basic',
    description: "Completed a college-preparatory curriculum with involvement in drama club, athletics, and academic honors.",
    highlights: ["Honor Roll (all semesters)", "Varsity Cross Country Team Member", "Drama Club Member"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Benco Dental | shop.benco.com",
    description:
      "Benco's flagship e-commerce platform supporting product search, purchasing workflows, order history and subscription workflows, and internal analytic and price manipulation tools.",
    stack: ["React", "TypeScript", "C#", ".NET Core"],
    imageUrl: "https://picsum.photos/800/600?random=1",
    link: "https://shop.benco.com",
    contributions: [
      "Researched and implemented major improvements to the dashboards load and responsive times in an effort to reach the standard LCP time of under 2.5 seconds.",
      "Built a full test suite using artillery testing and playwright testing that utilized artillery metrics for our team to validate changes during our effort to reduce LCP time.",
      "Improved unintuitive backend API performance and reliability using modern .NET and LINQ features.",
      "Created reliably reusable and modular React components to standardize the UI/UX as we convert from a Razor frontend to a React frontend.",
      "Collaborated across multiple teams to support major releases and build mission critical features for the sales and analytics teams.",
      "Implemented analytic features so that our sales team can more quickly identify their customers’ needs and evaluate self performance.",
    ],
    isProprietary: true,
  },
  {
    id: "2",
    title: "Benco Dental | Internal Product Comparison Tool",
    description:
      "A tool used by sales and analytics teams to compare competitor products against Benco’s catalog, streamline quoting, and generating accurate product substitutions.",
    stack: ["C#", "jQuery", "MySQL", "LINQ"],
    imageUrl: "https://picsum.photos/800/600?random=2",
    contributions: [
      "Implemented product number sanitization logic to guarantee consistent comparisons and prevent downstream failures.",
      "Refactored service layers and implemented LINQ query, reducing mismatched data and improving report accuracy.",
      "Improved frontend workflow by validating inputs client-side, preventing invalid submissions, further smoothing out the user experience."
    ],
    isProprietary: true,
  },
  {
    id: "3",
    title: "Personal Portfolio Website",
    description:
      "A personal portfolio website to showcase my projects, skills, and life experience as a full stack engineer.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    imageUrl: "https://picsum.photos/800/600?random=3",
    github: "https://github.com/NicholasSycz/my-portfolio",
    contributions: [
      "Designed and developed a responsive and visually appealing portfolio website using React and Tailwind CSS.",
      "Implemented smooth scrolling and interactive elements to enhance user experience.",
      "Optimized website performance for fast load times and SEO best practices."
    ],
    isProprietary: false,
  },
    {
    id: "4",
    title: "Job Hunt Tracking Application",
    description:
      "A personal application designed to help record/manage and track job applications, interviews, ghostings and follow-ups.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    imageUrl: "https://picsum.photos/800/600?random=3",
    github: "https://github.com/NicholasSycz/job-tracking-app", 
    contributions: [
      "Designed and developed a responsive an analytics-focused application using React and Tailwind CSS.",
      "Implemented smooth user interactions and data visualization to enhance user experience.",
      "Optimized application performance for fast load times and efficient data handling.",
      "Not yet developed, but planning to include an extension for easy saving of job postings and reminders"
    ],
    isProprietary: false,
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", level: SkillLevel.Expert },
      { name: "TypeScript", level: SkillLevel.Expert },
      { name: "jQuery", level: SkillLevel.Expert },
      { name: "Razor", level: SkillLevel.Expert },
      { name: "Sass", level: SkillLevel.Advanced },
    ],
  },
  {
    name: "Backend & DB",
    skills: [
      { name: "C#", level: SkillLevel.Expert },
      { name: "Node.js", level: SkillLevel.Advanced },
      { name: "MySQL", level: SkillLevel.Advanced },
      { name: "PostgreSQL", level: SkillLevel.Advanced },
    ],
  },
  {
    name: "Testing & Tools",
    skills: [
      { name: "Playwright", level: SkillLevel.Advanced },
      { name: "Artillery", level: SkillLevel.Intermediate },
      { name: "Jest/Vi", level: SkillLevel.Advanced },
      { name: "xUnit/NUnit", level: SkillLevel.Expert },
      { name: "Postman", level: SkillLevel.Expert },
      { name: "SQL Server", level: SkillLevel.Expert },
      { name: "Linq", level: SkillLevel.Advanced },
    ]
  }
];

export const ICONS = {
  Github: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
  ),
  Linkedin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
  ),
  Mail: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
  ),
  Send: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
  ),
  User: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
  ),
  External: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 22 3 22 10"></polyline><line x1="10" y1="14" x2="22" y2="3"></line></svg>
  ),
  Bot: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="16" y1="16" x2="16" y2="16"></line></svg>
  ),
  Download: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
  ),
  Briefcase: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
  ),
  Academic: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
  )
};