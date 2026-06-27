import projectEcommerce from './assets/project-ecommerce.png';
import icmsImage from './assets/icms.png';
import projectTaskmanager from './assets/project-taskmanager.png';
import projectWeather from './assets/project-weather.png';
import projectAnalytics from './assets/project-analytics.png';

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
    title: 'Task Management App',
    oneLiner: 'A collaborative workspace to keep teams moving fast.',
    role: 'Designed the drag-and-drop interactions from scratch because the existing libraries felt too clunky.',
    challenges: ['Optimistic UI updates for instant drag-and-drop', 'Conflict resolution for simultaneous offline edits'],
    description: 'Collaborative task management application with drag-and-drop functionality, real-time updates, and team collaboration features.',
    techStack: ['TypeScript', 'React', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/AnshParashar0/task-manager',
    liveDemo: 'https://task-manager-demo.vercel.app',
    image: projectTaskmanager,
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    oneLiner: 'Hyper-local weather visualization with historical trends.',
    role: 'Integrated multiple weather APIs to ensure accuracy and built custom chart components for performance.',
    challenges: ['Caching large datasets to prevent API rate limits', 'Smoothly animating weather transitions on the map'],
    description: 'Interactive weather dashboard with location-based forecasts, historical data visualization, and severe weather alerts.',
    techStack: ['Vue.js', 'Express', 'OpenWeather API', 'Chart.js'],
    github: 'https://github.com/AnshParashar0/weather-dashboard',
    liveDemo: 'https://weather-dashboard-demo.vercel.app',
    image: projectWeather,
  },
  {
    id: 4,
    title: 'Social Media Analytics',
    oneLiner: 'Turning messy social data into actionable insights.',
    role: 'Wrote custom data aggregation scripts and designed the visualization layer to be heavily interactive.',
    challenges: ['Rendering dense graphs without dropping frames', 'Securely managing OAuth tokens for multiple platforms'],
    description: 'Analytics platform for social media managers to track engagement, analyze trends, and generate comprehensive reports.',
    techStack: ['React', 'Python', 'PostgreSQL', 'D3.js'],
    github: 'https://github.com/AnshParashar0/social-analytics',
    liveDemo: 'https://social-analytics-demo.vercel.app',
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
