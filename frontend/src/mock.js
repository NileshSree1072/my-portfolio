// Mock data for B.Tech IT student portfolio

export const mockData = {
  personal: {
    name: "Arjun Sharma",
    title: "Aspiring Software Developer",
    tagline: "Passionate about creating innovative solutions through code",
    summary: "B.Tech Information Technology student with a strong foundation in programming, web development, and emerging technologies. Eager to contribute to meaningful projects and grow in the software development field.",
    email: "arjun.sharma@email.com",
    phone: "+91 9876543210",
    location: "Mumbai, India",
    github: "https://github.com/arjunsharma",
    linkedin: "https://linkedin.com/in/arjunsharma",
    resume: "/resume.pdf"
  },
  
  about: {
    education: "Currently pursuing B.Tech in Information Technology from Mumbai Institute of Technology (2022-2026)",
    cgpa: "8.2/10",
    interests: [
      "Full-stack web development",
      "Data structures and algorithms",
      "Machine learning and AI",
      "Cloud computing",
      "Open source contribution"
    ],
    goals: "To become a skilled software engineer contributing to innovative projects that solve real-world problems while continuously learning and adapting to new technologies."
  },
  
  skills: {
    languages: [
      { name: "JavaScript", level: 85 },
      { name: "Python", level: 80 },
      { name: "Java", level: 75 },
      { name: "C++", level: 70 },
      { name: "SQL", level: 85 },
      { name: "HTML/CSS", level: 90 }
    ],
    frameworks: [
      { name: "React.js", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "Django", level: 65 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Bootstrap", level: 80 }
    ],
    tools: [
      { name: "Git/GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "MongoDB", level: 75 },
      { name: "MySQL", level: 80 },
      { name: "Figma", level: 70 },
      { name: "Postman", level: 75 }
    ]
  },
  
  projects: [
    {
      id: 1,
      name: "E-Commerce Platform",
      description: "A full-stack e-commerce web application with user authentication, product management, and payment integration.",
      techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "Stripe API"],
      github: "https://github.com/arjunsharma/ecommerce-platform",
      demo: "https://ecommerce-demo.netlify.app",
      features: ["User authentication", "Product catalog", "Shopping cart", "Order management", "Payment processing"]
    },
    {
      id: 2,
      name: "Task Management System",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      techStack: ["React.js", "Firebase", "Material-UI", "Socket.io"],
      github: "https://github.com/arjunsharma/task-manager",
      demo: "https://task-manager-demo.vercel.app",
      features: ["Real-time collaboration", "Task assignment", "Progress tracking", "Team management", "Notifications"]
    },
    {
      id: 3,
      name: "Weather Forecast App",
      description: "A responsive weather application with location-based forecasts and interactive weather maps.",
      techStack: ["JavaScript", "OpenWeather API", "Chart.js", "CSS3"],
      github: "https://github.com/arjunsharma/weather-app",
      demo: "https://weather-forecast-demo.netlify.app",
      features: ["Location detection", "7-day forecast", "Interactive maps", "Weather alerts", "Responsive design"]
    },
    {
      id: 4,
      name: "Student Portal System",
      description: "A comprehensive student management portal with attendance tracking, grade management, and communication features.",
      techStack: ["Python", "Django", "PostgreSQL", "Bootstrap"],
      github: "https://github.com/arjunsharma/student-portal",
      demo: "https://student-portal-demo.herokuapp.com",
      features: ["Attendance management", "Grade tracking", "Assignment submission", "Communication portal", "Admin dashboard"]
    },
    {
      id: 5,
      name: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations.",
      techStack: ["React.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/arjunsharma/portfolio",
      demo: "https://arjunsharma.dev",
      features: ["Responsive design", "Smooth animations", "Contact form", "Project showcase", "Resume download"]
    },
    {
      id: 6,
      name: "Book Recommendation System",
      description: "A machine learning-based book recommendation system with user preferences and rating analysis.",
      techStack: ["Python", "Scikit-learn", "Pandas", "Flask", "SQLite"],
      github: "https://github.com/arjunsharma/book-recommender",
      demo: "https://book-recommender-demo.herokuapp.com",
      features: ["Content-based filtering", "User preferences", "Rating analysis", "Search functionality", "Recommendation engine"]
    }
  ],
  
  certifications: [
    {
      name: "Full Stack Web Development",
      issuer: "Coursera - University of Hong Kong",
      date: "2024",
      credentialId: "ABC123XYZ789"
    },
    {
      name: "Data Structures and Algorithms",
      issuer: "NPTEL - IIT Madras",
      date: "2024",
      credentialId: "NPTEL24CS001"
    },
    {
      name: "Machine Learning Basics",
      issuer: "edX - MIT",
      date: "2023",
      credentialId: "MIT6001X"
    },
    {
      name: "Cloud Computing Fundamentals",
      issuer: "AWS Academy",
      date: "2023",
      credentialId: "AWS2023CLOUD"
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2023",
      credentialId: "FCC2023JS"
    }
  ],
  
  achievements: [
    {
      title: "Hackathon Winner",
      description: "1st Place in College Tech Fest Hackathon 2024",
      date: "2024"
    },
    {
      title: "Competitive Programming",
      description: "Solved 500+ problems on LeetCode and CodeChef",
      date: "2023-2024"
    },
    {
      title: "Open Source Contributor",
      description: "Contributed to 5+ open source projects on GitHub",
      date: "2023-2024"
    },
    {
      title: "Technical Workshop Speaker",
      description: "Conducted workshop on React.js for junior students",
      date: "2024"
    }
  ]
};