import {
  BrainCircuit,
  Code2,
  Database,
  Globe,
  GraduationCap,
  Layers3,
  Link,
  Mail,
  Server,
  Sparkles,
  TerminalSquare,
  Wrench,
} from 'lucide-react'

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'coding-profile', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

export const skills = [
  {
    title: 'Frontend',
    icon: Layers3,
    accent: 'from-sky-400 to-indigo-500',
    items: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Framer Motion'],
  },
  {
    title: 'Backend',
    icon: Server,
    accent: 'from-blue-400 to-cyan-500',
    items: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'PostgreSQL', 'Authentication'],
  },
  {
    title: 'Languages',
    icon: Code2,
    accent: 'from-cyan-300 to-sky-500',
    items: ['C++', 'Java', 'Python', 'JavaScript', 'SQL', 'Data Structures'],
  },
  {
    title: 'Tools & AI/ML',
    icon: BrainCircuit,
    accent: 'from-sky-400 to-indigo-500',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'OpenAI APIs', 'Pandas', 'NumPy'],
  },
]

export const projects = [
  {
    title: 'CodeForge',
    description:
      'Full-stack coding platform for developers featuring code execution using Piston, secure backend with Node.js, containerized environments via Docker, and PostgreSQL for scalable data management.',
    details:
      'CodeForge is a full-stack coding platform with backend services in Node.js, code execution through Piston, Docker-based containerized environments, and PostgreSQL for scalable data management.',
    tech: ['Node.js', 'JavaScript', 'PostgreSQL', 'Docker', 'Piston API'],
    live: 'https://codeforge-frontend-b8z5.onrender.com/login',
    github: 'https://github.com/riheasingh/CodeForge',
    thumbnail: '/CodeForge.png',
    icon: Database,
    color: 'from-blue-500 via-sky-500 to-cyan-500',
  },
  {
    title: 'DevTinder',
    description:
      'Full-stack React/Node.js platform for swipe-based developer matchmaking with JWT + cookie authentication, payments, college-aware recommendations, and real-time chat.',
    details:
      'DevTinder is a full-stack developer matchmaking platform with swipe-based discovery, secure JWT and cookie authentication, payment flow support, personalized recommendations, and real-time chat powered by Socket.io.',
    tech: ['React', 'Node.js', 'Express', 'JavaScript', 'MongoDB', 'Socket.io', 'JWT'],
    live: 'https://devtinder-iota.vercel.app/',
    github: 'https://github.com/riheasingh',
    thumbnail: '/Devtinder.png',
    icon: TerminalSquare,
    color: 'from-blue-500 via-cyan-500 to-indigo-500',
  },
]

export const education = [
  {
    icon: GraduationCap,
    title: '2023 - 2027',
    institute: 'Lakshmi Narain College of Technology and Science',
    meta: 'B.Tech in Computer Science Engineering',
    result: '✦ CGPA: 8.73/ 10',
  },
  {
    icon: GraduationCap,
    title: 'Class XI - XII',
    institute: 'Holy Cross School (CBSE)',
    meta: 'Senior Secondary Education | Science Stream',
    result: '✦ Class XII: 93%',
  },
  {
    icon: GraduationCap,
    title: 'Class I - X',
    institute: 'Gourav Awas Uchcha Vidyalaya (CBSE)',
    meta: 'Primary & Secondary Education',
    result: '✦ Class X: 90%',
  },
]

export const socials = [
  { label: 'GitHub', href: 'https://github.com/riheasingh', icon: Code2 },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/riya-kumari-97b33b318/', icon: Link },
  { label: 'Email', href: 'mailto:riheasingh07234@gmail.com', icon: Mail },
]

export const statsCards = [
  {
    label: 'GitHub Streak',
    src: 'https://github-readme-streak-stats.herokuapp.com/?user=riheasingh&theme=tokyonight',
  },
  {
    label: 'LeetCode Stats',
    src: 'https://leetcard.jacoblin.cool/geekriya?theme=dark&ext=heatmap',
  },
]

export const quickFacts = [
  { label: 'Full Stack', icon: Globe },
  { label: 'DSA Solver', icon: TerminalSquare },
  { label: 'Clean UI', icon: Wrench },
]
