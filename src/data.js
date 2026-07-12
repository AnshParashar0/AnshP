import projectEcommerce from './assets/project-ecommerce.png';
import icmsImage from './assets/icms.png';
import e_wallet from './assets/e-wallet.png';
import psychologistPortfolio from './assets/psychologistPortfolio.png';
import projectAnalytics from './assets/comingSoon.png';

export const skills = [
  { name: 'JavaScript', icon: 'SiJavascript' },
  { name: 'React', icon: 'SiReact' },
  { name: 'Node.js', icon: 'SiNodedotjs' },
  { name: 'TypeScript', icon: 'SiTypescript' },
  { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
  { name: 'MongoDB', icon: 'SiMongodb' },
  { name: 'Framer Motion', icon: 'SiFramer' },
  { name: 'GSAP', icon: 'SiGreensock' },
  { name: 'Claude', icon: 'SiAnthropic' },
  { name: 'Codex', icon: 'Code' },
  { name: 'Prompting', icon: 'Terminal' },
  { name: 'Agentic AI', icon: 'Brain' },
  { name: 'Git', icon: 'SiGit' },
  { name: 'Docker', icon: 'SiDocker' },
  { name: 'AWS', icon: 'FaAws' },
  { name: 'GraphQL', icon: 'SiGraphql' },
];

export const projects = [
  {
    id: 1,
    title: 'ICMS-',
    titleLink: 'Infrastructure Complaint Management System',
    oneLiner: 'Report Faster, Track Better, Resolve Campus Issues.',
    role: 'Built the core backend infrastructure using Spring Boot and Agentic AI Models.',
    challenges: ['Managing concurrent complaint submissions', 'Solving the issue of slow backend response using Caching and Load Balancing'],
    description: 'ICMS is a full-stack complaint management platform where students can submit infrastructure complaints and administrators can monitor, prioritize, and resolve them with complete transparency.',
    techStack: ['Spring Boot', 'React', 'MySQL', 'Tailwind CSS'],
    github: 'https://github.com/AnshParashar0/ICMS',
    liveDemo: 'https://icms-1.onrender.com/',
    image: icmsImage,
  },
  {
    id: 2,
    title: 'FinTrack',
    titleLink: 'Track your expenses and income',
    oneLiner: 'Simple, secure, and intuitive digital wallet.',
    role: 'Built a payment gateway integration, payment history tracking, and a secure P2P transaction system.',
    challenges: ['Optimistic UI updates for instant drag-and-drop', 'Conflict resolution for simultaneous offline edits'],
    description: 'Secure digital wallet with features like adding money, sending money to other users, and tracking transaction history.',
    techStack: ['js', 'React', 'mongo db', 'Tailwind CSS'],
    github: 'https://github.com/AnshParashar0/moneyTracker',
    liveDemo: 'https://money-traker-beta.vercel.app/',
    image: e_wallet,
  },
  {
    id: 3,
    title: 'Psychatrist',
    titleLink: 'Learn to work with 3dModel and videos for UI',
    oneLiner: 'A website built for a Psychatrist',
    role: 'Built a website for a psychatrist with 3d Models and videos for better user experience.',
    challenges: ['smooth control of video on mouse move','using ffmpeg for video processing'],
    description: 'Interactive weather dashboard with location-based forecasts, historical data visualization, and severe weather alerts.',
    techStack: ['Vue.js', 'Express', 'OpenWeather API', 'Chart.js'],
    github: 'https://github.com/AnshParashar0/psychologistPortfolio',
    liveDemo: 'https://anshparashar0.github.io/psychologistPortfolio/',
    image: psychologistPortfolio,
  },
  {
    id: 4,
    title: 'MovieStreaming',
    titleLink: 'Get access to all  piraated  movies',
    oneLiner: 'Watch movies for free',
    role: 'Built a movie streaming platform using React and TMDB API.',
    challenges: [],
    description: 'Learn to use cloudflare serverless function to stream movies from cloudflare servers',
    techStack: ['React', 'Cloudflare Serverless Function', 'TMDB API', 'Tailwind CSS'],
    github: 'null',
    liveDemo: 'null',
    image: projectAnalytics,
  },
];

export const socialLinks = [
  { name: 'GitHub', icon: 'FaGithub', url: 'https://github.com/AnshParashar0' },
  { name: 'LinkedIn', icon: 'FaLinkedin', url: 'https://www.linkedin.com/in/ansh-parashar-547803344/' },
  { name: 'Twitter', icon: 'FaTwitter', url: 'https://twitter.com/username' },
];

export const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
];
