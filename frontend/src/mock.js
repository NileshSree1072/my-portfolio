// Real data for S Nilesh - B.Tech IT Student Portfolio

export const mockData = {
  personal: {
    name: "S Nilesh",
    title: "Student",
    tagline: "Passionate about AI, robotics, and innovative software solutions",
    summary: "B.Tech Information Technology student with expertise in AI chatbots, autonomous robotics, and full-stack web development. Skilled in building intelligent systems and scalable applications with a focus on problem-solving and innovation.",
    email: "nileshsree07@gmail.com",
    phone: "+919600401266",
    location: "Coimbatore, Tamil Nadu",
    github: "https://github.com/nileshsree",
    linkedin: "https://www.linkedin.com/in/nilesh-sree",
    resume: "/resume.pdf"
  },
  
  about: {
    education: "Currently pursuing B.Tech in Information Technology from Sri Sivasubramaniya Nadar College of Engineering (2024-2027)",
    previousEducation: [
      {
        degree: "Diploma in Computer Engineering",
        institution: "PSG Polytechnic College",
        duration: "June 2022 - May 2024",
        grade: "9.3 CGPA"
      },
      {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "G Ramaswamy Naidu",
        duration: "June 2021 - May 2022",
        grade: "8.6 CGPA"
      }
    ],
    interests: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Computer Networks",
      "Database Management Systems",
      "Artificial Intelligence",
      "Robotics and Automation"
    ],
    goals: "To become a skilled software engineer specializing in AI and robotics, contributing to innovative projects that solve real-world problems while continuously learning and adapting to emerging technologies."
  },
  
  skills: {
    languages: [
      { name: "Python", level: 90 },
      { name: "C++", level: 85 },
      { name: "Java", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "SQL", level: 70 },
      { name: "HTML/CSS", level: 75 }
    ],
    frameworks: [
      { name: "Next.js", level: 80 },
      { name: "React.js", level: 75 },
      { name: "Tkinter", level: 85 },
      { name: "Rasa", level: 70 },
      { name: "Node.js", level: 65 },
      { name: "Express.js", level: 60 }
    ],
    tools: [
      { name: "MongoDB", level: 80 },
      { name: "SQLite", level: 85 },
      { name: "AWS", level: 70 },
      { name: "Google Cloud", level: 70 },
      { name: "Git/GitHub", level: 80 },
      { name: "VS Code", level: 90 }
    ]
  },
  
  projects: [
    {
      id: 1,
      name: "College Chatbot",
      description: "Developed an AI-powered college chatbot using Rasa to handle student queries on admissions, courses, events, and policies with automated knowledge updates to keep responses accurate.",
      techStack: ["Python", "Rasa", "Natural Language Processing", "Machine Learning"],
      github: "https://github.com/nileshsree/college-chatbot",
      demo: "https://college-chatbot-demo.vercel.app",
      year: "2025",
      features: ["AI-powered responses", "Natural language understanding", "Automated knowledge updates", "Multi-domain query handling", "Real-time chat interface"]
    },
    {
      id: 2,
      name: "Hospital Management System",
      description: "Developed a comprehensive Hospital Management System application using Tkinter for GUI and SQLite for database, enabling efficient patient record management, appointment scheduling, and billing automation.",
      techStack: ["Python", "Tkinter", "SQLite", "Database Design"],
      github: "https://github.com/nileshsree/hospital-management",
      demo: "https://hospital-management-demo.herokuapp.com",
      year: "2024",
      features: ["Patient record management", "Appointment scheduling", "Billing automation", "Inventory management", "User-friendly GUI"]
    },
    {
      id: 3,
      name: "ApartiBot",
      description: "Spearheaded the development of ApartiBot, an autonomous robot designed for security and delivery assistance. Integrated AI-driven navigation, IoT connectivity, and step-climbing mechanism, reducing manual intervention by 40%.",
      techStack: ["Python", "IoT", "Computer Vision", "Robotics", "AI Navigation"],
      github: "https://github.com/nileshsree/apartibot",
      demo: "https://apartibot-demo.netlify.app",
      year: "2023-2024",
      features: ["Autonomous navigation", "Step-climbing mechanism", "Security monitoring", "Package delivery", "IoT connectivity", "AI-driven pathfinding"]
    },
    {
      id: 4,
      name: "EzDelivery",
      description: "Designed and built EzDelivery, a grocery ordering web app using Next.js, MongoDB, AWS, and Google Cloud. Implemented real-time order tracking and optimized database queries, enhancing order processing efficiency by 30%.",
      techStack: ["Next.js", "MongoDB", "AWS", "Google Cloud", "Payment Gateway"],
      github: "https://github.com/nileshsree/ezdelivery",
      demo: "https://ezdelivery.vercel.app",
      year: "2023-2024",
      features: ["Real-time order tracking", "Secure payment gateway", "Optimized database queries", "Responsive design", "Cloud deployment", "Inventory management"]
    }
  ],
  
  certifications: [
    {
      name: "Data Structures and Algorithms",
      issuer: "HackerRank",
      date: "2024",
      credentialId: "DSA2024HRK"
    },
    {
      name: "Python Programming",
      issuer: "Coursera",
      date: "2024",
      credentialId: "PY2024COURSERA"
    },
    {
      name: "Machine Learning Fundamentals",
      issuer: "edX",
      date: "2023",
      credentialId: "ML2023EDX"
    },
    {
      name: "Web Development",
      issuer: "freeCodeCamp",
      date: "2023",
      credentialId: "WD2023FCC"
    }
  ],
  
  achievements: [
    {
      title: "National Level Competition - 6th Place",
      description: "Secured 6th place in National Level Competition at Sri Manakula Vinayagar Engineering College for ApartiBot, showcasing expertise in autonomous systems",
      date: "2024"
    },
    {
      title: "League of Ninja Dominator",
      description: "Achieved top-tier recognition for coding proficiency and problem-solving skills in the Code Ninjas platform",
      date: "2023"
    },
    {
      title: "Best Innovation Award",
      description: "Received recognition for innovative approach in robotics and AI integration in ApartiBot project",
      date: "2024"
    },
    {
      title: "Academic Excellence",
      description: "Maintained consistent academic performance with 9.3 CGPA in Diploma and 8.6 CGPA in HSC",
      date: "2022-2024"
    }
  ]
};