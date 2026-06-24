import projectEcommerce from './assets/project-ecommerce.png';
import projectTaskmanager from './assets/project-taskmanager.png';
import projectWeather from './assets/project-weather.png';
import projectAnalytics from './assets/project-analytics.png';

export const skills = [
  { name: 'JavaScript', icon: 'SiJavascript' },
  { name: 'React', icon: 'SiReact' },
  { name: 'Node.js', icon: 'SiNodedotjs' },
  { name: 'TypeScript', icon: 'SiTypescript' },
  { name: 'Python', icon: 'SiPython' },
  { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
  { name: 'MongoDB', icon: 'SiMongodb' },
  { name: 'Git', icon: 'SiGit' },
  { name: 'Docker', icon: 'SiDocker' },
  { name: 'AWS', icon: 'SiAmazonaws' },
  { name: 'PostgreSQL', icon: 'SiPostgresql' },
  { name: 'GraphQL', icon: 'SiGraphql' },
];

export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, secure payment processing, and responsive design.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    github: 'https://github.com/username/ecommerce-platform',
    liveDemo: 'https://ecommerce-demo.vercel.app',
    image: projectEcommerce,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management application with drag-and-drop functionality, real-time updates, and team collaboration features.',
    techStack: ['TypeScript', 'React', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/username/task-manager',
    liveDemo: 'https://task-manager-demo.vercel.app',
    image: projectTaskmanager,
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Interactive weather dashboard with location-based forecasts, historical data visualization, and severe weather alerts.',
    techStack: ['Vue.js', 'Express', 'OpenWeather API', 'Chart.js'],
    github: 'https://github.com/username/weather-dashboard',
    liveDemo: 'https://weather-dashboard-demo.vercel.app',
    image: projectWeather,
  },
  {
    id: 4,
    title: 'Social Media Analytics',
    description: 'Analytics platform for social media managers to track engagement, analyze trends, and generate comprehensive reports.',
    techStack: ['React', 'Python', 'PostgreSQL', 'D3.js'],
    github: 'https://github.com/username/social-analytics',
    liveDemo: 'https://social-analytics-demo.vercel.app',
    image: projectAnalytics,
  },
];

export const socialLinks = [
  { name: 'GitHub', icon: 'SiGithub', url: 'https://github.com/username' },
  { name: 'LinkedIn', icon: 'SiLinkedin', url: 'https://linkedin.com/in/username' },
  { name: 'Twitter', icon: 'SiTwitter', url: 'https://twitter.com/username' },
];

export const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
];
