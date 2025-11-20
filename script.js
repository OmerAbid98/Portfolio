// ========== Data ==========

const roles = [
  "Software Engineer",
  "AI Specialist",
  "Machine Learning Engineer",
  "Data Scientist",
  "Salesforce Developer"
];

const services = [
  {
    title: "Machine Learning & AI",
    description: "Advanced ML solutions including NLP, computer vision, and deep learning models tailored to your specific needs.",
    icon: `<path d="M12 2a10 10 0 0 0-10 10 10 10 0 0 0 20 0 10 10 0 0 0-10-10zM12 4a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8zm-1 3v6h2V7h-2zm0 8v2h2v-2h-2z"/>`
  },
  {
    title: "Data Science & Analytics",
    description: "Comprehensive data analysis, visualization, and insights using Python, Power BI, and modern data science tools.",
    icon: `<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>`
  },
  {
    title: "Salesforce Development",
    description: "Custom Salesforce solutions with Apex, LWC, and Experience Cloud to streamline your business processes.",
    icon: `<path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>`
  },
  {
    title: "Web Development",
    description: "Modern, responsive web applications using React, Django, and the latest web technologies.",
    icon: `<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>`
  },
  {
    title: "Business Intelligence",
    description: "Transform your data into actionable insights with custom dashboards and reporting solutions.",
    icon: `<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>`
  },
  {
    title: "API Development",
    description: "RESTful API design and implementation for seamless integration and scalability.",
    icon: `<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 12h4m4 0h4"/>`
  }
];

const experiences = [
  {
    company: "10Pearls",
    role: "Software Engineer",
    duration: "June 2021 - October 2023",
    location: "Karachi, Pakistan",
    badge: "3x Promoted",
    achievements: [
      "Developed and deployed numerous feature enhancements including reCAPTCHA, dynamic input masking, and customized browser behavior for Salesforce Experience sites using Apex, LWC, and Aura Components",
      "Architected and developed a large critical module for an Experience website and successfully released large business modules in a single release",
      "Developed best-practice-based Apex Batch Job with complex logic and API calls, automating business processes",
      "Researched and implemented optimal git branching strategy and delivered training program to client-vendor team",
      "Promoted 3 times with superb reviews and nominated for Employee of the Month Award (May 2023)"
    ]
  },
  {
    company: "Medhyaf Travel & Tourism",
    role: "IT Support Worker (Part-Time)",
    duration: "November 2023 - September 2024",
    location: "Remote",
    achievements: [
      "Guided B2B & B2C booking engine website projects using project management practices",
      "Provided requirement analysis and QA services, coordinating with third-party vendors",
      "Achieved progress towards public release of previously stalled projects",
      "Created UI/UX requirements and designed banners in Figma"
    ]
  },
  {
    company: "Hash Analytics - Interns Pakistan",
    role: "Data Analytics & Front-end Developer Intern",
    duration: "September 2020",
    location: "Remote",
    achievements: [
      "Acquired expertise in data analytics and visualizations using Pandas, NumPy, Seaborn, Tableau, and Google Analytics",
      "Experienced various web technologies through challenge-based approach: HTML5, CSS3, Bootstrap, JavaScript, jQuery, and PHP"
    ]
  },
  {
    company: "Fiverr",
    role: "Freelance Python Developer",
    duration: "2020 - Present",
    location: "Remote",
    badge: "5.0 Rating",
    achievements: [
      "Successfully executed 9 python script projects for data extraction from Web & API, and debugging",
      "Achieved outstanding overall profile rating of 5/5",
      "Delivered quality solutions for international clients"
    ]
  }
];

const education = [
  {
    institution: "Queen's University Belfast",
    degree: "MSc Artificial Intelligence (1-Year)",
    duration: "September 2024 - October 2025",
    grade: "72% - Distinction",
    badge: "Distinction",
    coursework: ["Machine Learning", "Computer Vision", "Natural Language Processing", "AI For Health", "Knowledge Engineering"],
    project: "Cross-Platform DNA Methylation Classifier for the Eight Molecular Subtypes of Group 3 & 4 Medulloblastoma - a healthcare-focused ML tool for personalized treatment strategies",
    projectTitle: "Dissertation Project"
  },
  {
    institution: "Institute of Business Administration Karachi",
    degree: "BS Computer Science",
    duration: "September 2017 - May 2021",
    grade: "CGPA 3.5/4",
    badge: "Dean's List - 5/8 Semesters",
    coursework: ["Data Structures & Algorithms", "Object-Oriented Programming", "Database Systems", "Software Engineering", "Artificial Intelligence"],
    project: "Django-based telemedicine web app focusing on enhancing care for children with cerebral palsy by reducing barriers associated with physical therapy centers in Pakistan",
    projectTitle: "Final Year Project"
  }
];

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: `<path d="M12 2a10 10 0 0 0-10 10 10 10 0 0 0 20 0 10 10 0 0 0-10-10zM12 4a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8zm-1 3v6h2V7h-2zm0 8v2h2v-2h-2z"/>`,
    skills: [
      { name: "Machine Learning", level: 95 },
      { name: "Deep Learning", level: 90 },
      { name: "NLP & BERT", level: 90 },
      { name: "Computer Vision", level: 85 },
      { name: "TensorFlow/PyTorch", level: 85 }
    ]
  },
  {
    title: "Data Science & Analytics",
    icon: `<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>`,
    skills: [
      { name: "Python (Pandas, NumPy)", level: 95 },
      { name: "Power BI & Tableau", level: 85 },
      { name: "Statistical Analysis", level: 90 },
      { name: "Data Visualization", level: 90 },
      { name: "SQL", level: 85 }
    ]
  },
  {
    title: "Salesforce Development",
    icon: `<path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>`,
    skills: [
      { name: "Apex Programming", level: 90 },
      { name: "Lightning Web Components", level: 90 },
      { name: "Experience Sites", level: 85 },
      { name: "Salesforce DevOps", level: 80 },
      { name: "SOQL/SOSL", level: 90 }
    ]
  },
  {
    title: "Web Development",
    icon: `<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>`,
    skills: [
      { name: "Django & DRF", level: 85 },
      { name: "React & JavaScript", level: 85 },
      { name: "HTML/CSS/Bootstrap", level: 90 },
      { name: "WordPress", level: 80 },
      { name: "Git & GitHub", level: 90 }
    ]
  }
];

const codingSkills = [
  { name: "Python", level: 95 },
  { name: "JavaScript", level: 85 },
  { name: "Apex", level: 90 },
  { name: "HTML / CSS", level: 90 }
];

const additionalSkills = [
  "Knowledge Engineering", "Knowledge Graphs", "Agile/Scrum", "JIRA", "Web Scraping",
  "BeautifulSoup", "Scikit-learn", "Transformers", "Huggingface", "OpenCV",
  "OOP", "Unit Testing", "WCAG Compliance"
];

const softSkills = [
  "Leadership", "Adaptability", "Self Organization", "Employee Training", "Research Skills",
  "Independence", "Presentation Skills", "Minor Project Management", "Communication",
  "Teamwork", "Attention to Detail", "Analytical Skills", "Problem Solving", "Ownership"
];

const languageSkills = [
  { name: "English", level: 9 },
  { name: "Urdu", level: 10 },
  { name: "Punjabi", level: 8 }
];

const interests = [
  { title: "Freelance", icon: `<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>` },
  { title: "Entrepreneurship", icon: `<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>` },
  { title: "Gardening", icon: `<path d="M7 20h10M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/>` },
  { title: "Table Tennis", icon: `<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>` },
  { title: "LinkedIn Content Creation", icon: `<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>` }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    rating: 5,
    text: "Omer's expertise in AI and machine learning transformed our product. His ability to translate complex technical concepts into actionable solutions is remarkable."
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "DataFlow Solutions",
    rating: 5,
    text: "Outstanding work on our Salesforce implementation. Omer delivered a robust, scalable solution ahead of schedule with excellent documentation."
  },
  {
    name: "Emily Rodriguez",
    role: "Founder",
    company: "HealthTech Innovations",
    rating: 5,
    text: "Collaborative, professional, and highly skilled. Omer's data science work provided insights that directly impacted our business strategy."
  },
  {
    name: "David Park",
    role: "Engineering Lead",
    company: "CloudScale",
    rating: 5,
    text: "Exceptional problem-solving skills and deep technical knowledge. Omer consistently delivered high-quality code with thorough testing."
  }
];

const projects = [
  {
    title: "Medulloblastoma DNA Methylation Classifier",
    category: "Machine Learning",
    description: "Cross-platform DNA methylation classifier for eight molecular subtypes of Group 3 & 4 Medulloblastoma using advanced ML techniques on high-dimensional genomic data",
    techStack: ["Python", "Scikit-learn", "SeSAMe", "DNA Methylation", "Healthcare AI"],
    highlights: [
      "Processed IDAT methylation files with QC",
      "Built classification models on high-dimension data",
      "Aimed at personalized treatment strategies"
    ]
  },
  {
    title: "BERT Fine-tuning for Text Classification",
    category: "NLP",
    description: "Fine-tuned BERT classifiers and developed emotional content classification using Huggingface on GPT-4 generated stories dataset with advanced NLP techniques",
    techStack: ["Python", "BERT", "Transformers", "Huggingface", "NLP"],
    highlights: [
      "Linguistic analysis and tokenization",
      "Word2Vec embeddings",
      "Semantic analysis and document similarity"
    ]
  },
  {
    title: "CNN Image Classifiers on Tiny ImageNet",
    category: "Computer Vision",
    description: "Built image classifiers based on hard-crafted features, linear models, and Convolutional Neural Networks with advanced techniques like data augmentation",
    techStack: ["Python", "PyTorch", "OpenCV", "CNN", "Image Processing"],
    highlights: [
      "Edge detection and feature engineering",
      "Multiple CNN architectures tested",
      "Image augmentation techniques"
    ]
  },
  {
    title: "Viral Load & Type Prediction with Clustering",
    category: "Machine Learning",
    description: "Machine learning models for viral load and type prediction along with comprehensive clustering analysis using advanced ML algorithms",
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Data Science"],
    highlights: [
      "Regression and classification models",
      "K-Means and hierarchical clustering",
      "Model evaluation and optimization"
    ]
  },
  {
    title: "Django Telemedicine Web Application",
    category: "Web Development",
    description: "Comprehensive telemedicine platform for children with cerebral palsy, reducing barriers to physical therapy centers in Pakistan",
    techStack: ["Django", "Python", "PostgreSQL", "Bootstrap", "Healthcare"],
    highlights: [
      "Patient-therapist connection system",
      "Session scheduling and management",
      "Secure healthcare data handling"
    ]
  },
  {
    title: "Salesforce Experience Site Architecture",
    category: "Salesforce",
    description: "Architected and developed large critical module for Salesforce Experience website using LWC and Apex with enterprise-grade quality",
    techStack: ["Salesforce", "LWC", "Apex", "Aura", "SOQL"],
    highlights: [
      "Complex business logic implementation",
      "Successful large-scale deployment",
      "Integration with external systems"
    ]
  },
  {
    title: "Python Web Scraping & API Integration",
    category: "Data Science",
    description: "Suite of Python scripts for data extraction from Web and APIs, debugging, and automation for various client projects on Fiverr",
    techStack: ["Python", "BeautifulSoup", "APIs", "Web Scraping", "Automation"],
    highlights: [
      "9 successful project deliveries",
      "5/5 client satisfaction rating",
      "Data extraction and transformation"
    ]
  },
  {
    title: "Medical Knowledge Graph Creation",
    category: "Knowledge Engineering",
    description: "Created knowledge graph for medical data using PrimeKG and implemented rule-based knowledge base with inference capabilities",
    techStack: ["Python", "Knowledge Graphs", "Ontologies", "Graph Reasoning", "AI"],
    highlights: [
      "Graph construction and reasoning (DFS, BFS)",
      "Rule-based systems implementation",
      "Medical data modeling"
    ]
  }
];

const projectCategories = ["All", "Machine Learning", "NLP", "Computer Vision", "Web Development", "Salesforce", "Data Science", "Knowledge Engineering"];

const contactInfo = [
  {
    label: "Email",
    value: "oar.8991@gmail.com",
    href: "mailto:oar.8991@gmail.com",
    icon: `<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>`
  },
  {
    label: "Phone",
    value: "+44 7777809972",
    href: "tel:+447777809972",
    icon: `<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>`
  },
  {
    label: "Location",
    value: "Belfast, Northern Ireland",
    icon: `<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>`
  }
];

// ========== State ==========
let currentTestimonialIndex = 0;
let selectedCategory = "All";

// ========== Utility Functions ==========

function createSVG(pathData, className = "", size = 24) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="${className}">${pathData}</svg>`;
}

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, '-');
}

function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('');
}

// ========== Typing Animation ==========

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;

function typeRole() {
  const typedTextElement = document.getElementById('typedText');
  const currentRole = roles[roleIndex];
  
  if (isDeleting) {
    typedTextElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 75;
  } else {
    typedTextElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 150;
  }
  
  if (!isDeleting && charIndex === currentRole.length) {
    typingSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typingSpeed = 150;
  }
  
  setTimeout(typeRole, typingSpeed);
}

// ========== Navigation ==========

function initNavigation() {
  const navbar = document.getElementById('navbar');
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');
  const logo = document.getElementById('logo');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Scroll event for navbar background
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    updateActiveSection();
  });
  
  // Mobile menu toggle
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navMenu.classList.toggle('mobile-open');
  });
  
  // Logo click
  logo.addEventListener('click', () => {
    scrollToSection('home');
  });
  
  // Nav links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('href').substring(1);
      scrollToSection(target);
      navMenu.classList.remove('mobile-open');
      mobileMenuToggle.classList.remove('active');
    });
  });
  
  // Scroll indicator
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      scrollToSection('about');
    });
  }
}

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function updateActiveSection() {
  const sections = ['home', 'about', 'services', 'experience', 'education', 'skills', 'interests', 'testimonials', 'portfolio', 'contact'];
  const navLinks = document.querySelectorAll('.nav-link');
  
  for (const sectionId of sections) {
    const section = document.getElementById(sectionId);
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
        break;
      }
    }
  }
}

// ========== Content Generation ==========

function generateServices() {
  const servicesGrid = document.querySelector('.services-grid');
  servicesGrid.innerHTML = services.map((service, index) => `
    <div class="card service-card" data-testid="service-${slugify(service.title)}">
      <div class="service-icon-wrapper">
        ${createSVG(service.icon, 'service-icon', 32)}
      </div>
      <h3 class="service-title">${service.title}</h3>
      <p class="service-description">${service.description}</p>
    </div>
  `).join('');
}

function generateExperience() {
  const timeline = document.querySelector('.timeline');
  const timelineItems = experiences.map((exp, index) => `
    <div class="timeline-item" data-testid="experience-${slugify(exp.company)}">
      <div class="timeline-dot"></div>
      <div class="card experience-card">
        <div class="experience-header">
          <div class="experience-role-wrapper">
            <div class="experience-role-header">
              ${createSVG(`<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>`, '', 20)}
              <h3 class="experience-role">${exp.role}</h3>
            </div>
            <p class="experience-company">${exp.company}</p>
          </div>
          ${exp.badge ? `<span class="badge"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>${exp.badge}</span>` : ''}
        </div>
        
        <div class="experience-meta">
          <div class="meta-item">
            ${createSVG(`<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>`, '', 16)}
            <span>${exp.duration}</span>
          </div>
          ${exp.location ? `
            <div class="meta-item">
              ${createSVG(`<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>`, '', 16)}
              <span>${exp.location}</span>
            </div>
          ` : ''}
        </div>
        
        <ul class="achievements-list">
          ${exp.achievements.map(achievement => `
            <li class="achievement-item">
              <span class="achievement-bullet">▹</span>
              <span class="achievement-text">${achievement}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `).join('');
  
  timeline.innerHTML += timelineItems;
}

function generateEducation() {
  const educationGrid = document.querySelector('.education-grid');
  educationGrid.innerHTML = education.map((edu, index) => `
    <div class="card education-card" data-testid="education-${slugify(edu.institution)}">
      <div class="education-header">
        <div class="education-icon-wrapper">
          ${createSVG(`<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>`, 'education-icon', 28)}
        </div>
        <div>
          <h3 class="education-degree">${edu.degree}</h3>
          <p class="education-institution">${edu.institution}</p>
        </div>
      </div>
      
      <div class="education-details">
        <div class="education-detail">
          ${createSVG(`<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>`, '', 16)}
          <span>${edu.duration}</span>
        </div>
        
        <div class="education-grade">
          ${createSVG(`<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>`, '', 20)}
          <span>${edu.grade}</span>
        </div>
        
        ${edu.badge ? `<span class="badge">${edu.badge}</span>` : ''}
      </div>
      
      ${edu.coursework ? `
        <div class="coursework-section">
          <h4 class="coursework-title">Key Coursework</h4>
          <div class="badge-grid">
            ${edu.coursework.map(course => `<span class="badge badge-outline">${course}</span>`).join('')}
          </div>
        </div>
      ` : ''}
      
      ${edu.project ? `
        <div class="project-section">
          <h4 class="project-title">${edu.projectTitle}</h4>
          <p class="project-text">${edu.project}</p>
        </div>
      ` : ''}
    </div>
  `).join('');
}

function generateSkills() {
  // Skill Categories
  const skillsGrid = document.querySelector('.skills-grid');
  skillsGrid.innerHTML = skillCategories.map((category, index) => `
    <div class="card skill-category-card" data-testid="skill-category-${slugify(category.title)}">
      <div class="skill-category-header">
        <div class="skill-category-icon-wrapper">
          ${createSVG(category.icon, 'skill-category-icon')}
        </div>
        <h3 class="skill-category-title">${category.title}</h3>
      </div>
      
      <div class="skills-list">
        ${category.skills.map(skill => `
          <div class="skill-item" data-testid="skill-${slugify(skill.name)}">
            <div class="skill-header">
              <span class="skill-name">${skill.name}</span>
              <span class="skill-percentage">${skill.level}%</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" data-level="${skill.level}" style="width: 0%"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
  
  // Coding Skills (Circular)
  const codingSkillsGrid = document.querySelector('.coding-skills-grid');
  codingSkillsGrid.innerHTML = codingSkills.map(skill => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (skill.level / 100) * circumference;
    
    return `
      <div class="circular-skill" data-testid="coding-${slugify(skill.name)}">
        <div class="circular-progress">
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="${radius}" class="progress-bg"/>
            <circle 
              cx="50" 
              cy="50" 
              r="${radius}" 
              class="progress-circle"
              stroke-dasharray="${circumference}"
              stroke-dashoffset="${circumference}"
              data-offset="${offset}"
            />
          </svg>
          <div class="circular-percentage">${skill.level}%</div>
        </div>
        <span class="circular-label">${skill.name}</span>
      </div>
    `;
  }).join('');
  
  // Additional Skills
  const additionalSkillsContainer = document.getElementById('additionalSkills');
  additionalSkillsContainer.innerHTML = additionalSkills.map(skill => 
    `<span class="badge badge-outline">${skill}</span>`
  ).join('');
  
  // Soft Skills
  const softSkillsContainer = document.getElementById('softSkills');
  softSkillsContainer.innerHTML = softSkills.map(skill => 
    `<span class="badge badge-outline">${skill}</span>`
  ).join('');
  
  // Language Skills
  const languageSkillsGrid = document.querySelector('.language-skills-grid');
  languageSkillsGrid.innerHTML = languageSkills.map(lang => `
    <div class="language-skill" data-testid="language-${lang.name.toLowerCase()}">
      <h4 class="language-name">${lang.name}</h4>
      <div class="language-dots">
        ${Array.from({ length: 10 }, (_, i) => `
          <div class="language-dot ${i < lang.level ? 'filled' : 'empty'}"></div>
        `).join('')}
      </div>
    </div>
  `).join('');
  
  // Animate progress bars and circular skills on scroll
  animateSkillsOnScroll();
}

function animateSkillsOnScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate linear progress bars
        const progressFills = entry.target.querySelectorAll('.progress-fill');
        progressFills.forEach(fill => {
          const level = fill.getAttribute('data-level');
          setTimeout(() => {
            fill.style.width = `${level}%`;
          }, 100);
        });
        
        // Animate circular progress
        const progressCircles = entry.target.querySelectorAll('.progress-circle');
        progressCircles.forEach(circle => {
          const offset = circle.getAttribute('data-offset');
          setTimeout(() => {
            circle.style.strokeDashoffset = offset;
          }, 100);
        });
        
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  
  const skillsSection = document.getElementById('skills');
  if (skillsSection) {
    observer.observe(skillsSection);
  }
}

function generateInterests() {
  const interestsGrid = document.querySelector('.interests-grid');
  interestsGrid.innerHTML = interests.map(interest => `
    <div class="card interest-card" data-testid="interest-${slugify(interest.title)}">
      ${createSVG(interest.icon, 'interest-icon', 48)}
      <span class="interest-title">${interest.title}</span>
    </div>
  `).join('');
}

function generateTestimonials() {
  updateTestimonial();
  
  // Generate dots
  const dotsContainer = document.getElementById('testimonialDots');
  dotsContainer.innerHTML = testimonials.map((_, index) => 
    `<button class="testimonial-dot ${index === 0 ? 'active' : ''}" data-index="${index}" data-testid="button-testimonial-dot-${index}" aria-label="Go to testimonial ${index + 1}"></button>`
  ).join('');
  
  // Dot click handlers
  const dots = dotsContainer.querySelectorAll('.testimonial-dot');
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      currentTestimonialIndex = parseInt(dot.getAttribute('data-index'));
      updateTestimonial();
    });
  });
  
  // Navigation buttons
  document.getElementById('testimonialPrev').addEventListener('click', () => {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
  });
  
  document.getElementById('testimonialNext').addEventListener('click', () => {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    updateTestimonial();
  });
}

function updateTestimonial() {
  const testimonial = testimonials[currentTestimonialIndex];
  const contentContainer = document.getElementById('testimonialContent');
  
  const stars = Array(testimonial.rating).fill(0).map(() => 
    `<svg class="star-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
  ).join('');
  
  contentContainer.innerHTML = `
    <div class="testimonial-rating">${stars}</div>
    <p class="testimonial-text">"${testimonial.text}"</p>
    <div class="testimonial-author">
      <div class="author-avatar">${getInitials(testimonial.name)}</div>
      <div>
        <h4 class="author-name">${testimonial.name}</h4>
        <p class="author-role">${testimonial.role} at ${testimonial.company}</p>
      </div>
    </div>
  `;
  
  // Update dots
  const dots = document.querySelectorAll('.testimonial-dot');
  dots.forEach((dot, index) => {
    if (index === currentTestimonialIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function generateProjects() {
  // Generate filters
  const filtersContainer = document.getElementById('projectFilters');
  filtersContainer.innerHTML = projectCategories.map(category => 
    `<button class="filter-btn ${category === 'All' ? 'active' : ''}" data-category="${category}" data-testid="filter-${slugify(category)}">${category}</button>`
  ).join('');
  
  // Filter click handlers
  const filterBtns = filtersContainer.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      selectedCategory = btn.getAttribute('data-category');
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateProjects();
    });
  });
  
  updateProjects();
}

function updateProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  const noProjects = document.getElementById('noProjects');
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);
  
  if (filteredProjects.length === 0) {
    projectsGrid.style.display = 'none';
    noProjects.style.display = 'block';
  } else {
    projectsGrid.style.display = 'grid';
    noProjects.style.display = 'none';
    
    projectsGrid.innerHTML = filteredProjects.map(project => `
      <div class="card project-card" data-testid="project-${slugify(project.title)}">
        <div class="project-header">
          <div class="project-icon-wrapper">
            ${createSVG(`<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>`, 'project-icon')}
          </div>
          <div class="project-title-wrapper">
            <span class="badge project-category-badge">${project.category}</span>
            <h3 class="project-title">${project.title}</h3>
          </div>
        </div>
        
        <p class="project-description">${project.description}</p>
        
        ${project.highlights ? `
          <ul class="project-highlights">
            ${project.highlights.map(h => `
              <li class="highlight-item">
                <span class="highlight-bullet">▹</span>
                <span>${h}</span>
              </li>
            `).join('')}
          </ul>
        ` : ''}
        
        <div class="project-tech">
          ${project.techStack.map(tech => `<span class="badge badge-outline tech-badge">${tech}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }
}

function generateTechnologies() {
  const techGrid = document.querySelector('.tech-grid');
  const technologies = [
    { name: "Python", unicode: "🐍" },
    { name: "React", unicode: "⚛️" },
    { name: "Salesforce", unicode: "☁️" },
    { name: "Django", unicode: "🎸" },
    { name: "TensorFlow", unicode: "🧠" },
    { name: "PyTorch", unicode: "🔥" },
    { name: "PostgreSQL", unicode: "🐘" },
    { name: "MongoDB", unicode: "🍃" },
    { name: "Docker", unicode: "🐳" },
    { name: "Git", unicode: "📦" },
    { name: "AWS", unicode: "☁️" },
    { name: "Google Cloud", unicode: "☁️" }
  ];
  
  techGrid.innerHTML = technologies.map(tech => `
    <div class="card tech-card" data-testid="tech-${slugify(tech.name)}">
      <div class="tech-icon">${tech.unicode}</div>
      <span class="tech-name">${tech.name}</span>
    </div>
  `).join('');
}

function generateContactInfo() {
  const contactInfoCard = document.querySelector('.contact-info-card');
  contactInfoCard.innerHTML = contactInfo.map(info => `
    <div class="contact-info-item" data-testid="contact-info-${info.label.toLowerCase()}">
      <div class="contact-icon-wrapper">
        ${createSVG(info.icon, 'contact-icon')}
      </div>
      <div>
        <p class="contact-label">${info.label}</p>
        ${info.href ? 
          `<a href="${info.href}" class="contact-value">${info.value}</a>` :
          `<p class="contact-value">${info.value}</p>`
        }
      </div>
    </div>
  `).join('');
}

// ========== Contact Form ==========

function initContactForm() {
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
      alert('Please fill in all fields before submitting.');
      return;
    }
    
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:oar.8991@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    // Reset form
    form.reset();
  });
}

// ========== Back to Top Button ==========

function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ========== Footer Year ==========

function setCurrentYear() {
  document.getElementById('currentYear').textContent = new Date().getFullYear();
}

// ========== Initialization ==========

document.addEventListener('DOMContentLoaded', () => {
  // Start typing animation
  typeRole();
  
  // Initialize navigation
  initNavigation();
  
  // Generate all content
  generateServices();
  generateExperience();
  generateEducation();
  generateSkills();
  generateInterests();
  generateTestimonials();
  generateProjects();
  generateTechnologies();
  generateContactInfo();
  
  // Initialize contact form
  initContactForm();
  
  // Initialize back to top button
  initBackToTop();
  
  // Set current year in footer
  setCurrentYear();
});
