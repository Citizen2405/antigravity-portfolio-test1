export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  isCurrent?: boolean;
  location?: string;
  responsibilities: string[];
  technologies: string[];
}

export interface ProjectItem {
  title: string;
  year: string;
  description: string;
  technologies: string[];
  category: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  year: string;
  cgpa: string;
}

export const portfolioData = {
  personal: {
    name: "K Wilbur Donovan",
    title: "Test Automation Engineer",
    secondaryAreas: "UI/UX Design, Web Development",
    tagline: "Building reliable software through test automation, quality engineering, and thoughtful user experiences.",
    location: "Pathanamthitta, Kerala, India",
    phone: "+91 75929 92405",
    email: "kwilburdonovan@gmail.com",
    githubUrl: "https://github.com/Citizen2405",
    linkedinUrl: "https://linkedin.com/in/k-wilbur/",
    cvPath: "/K_Wilbur_Donovan_Updated_CV.pdf",
    summary:
      "Test Solutions Engineer with experience in test automation, web development, and UI/UX design. Hands-on experience with Java, Selenium, TestNG, and RapidBotz, with professional exposure to testing and deploying the iCargo application for Air France-KLM Martinair Cargo. Computer Science graduate with a strong interest in building reliable software, automation solutions, and user-focused interfaces.",
  },

  navLinks: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Design & Web", href: "#design-web" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ],

  experiences: [
    {
      company: "IBS Software",
      role: "Test Solutions Engineer",
      period: "October 2024 – Present",
      isCurrent: true,
      responsibilities: [
        "Contribute to testing and deployment of the iCargo application for Air France-KLM Martinair Cargo.",
        "Develop and support test automation using Java and Selenium.",
        "Work with TestNG and RapidBotz as part of the automation testing workflow.",
      ],
      technologies: ["Java", "Selenium", "TestNG", "RapidBotz", "iCargo Deployment"],
    },
    {
      company: "NodDesk",
      role: "Web Development Intern",
      period: "June 2024",
      isCurrent: false,
      responsibilities: [
        "Worked on web development tasks with a focus on SCSS/SASS stylesheets.",
      ],
      technologies: ["SCSS/SASS", "Web Development", "HTML/CSS"],
    },
    {
      company: "Zidio Development",
      role: "UI/UX Design Intern",
      period: "May 2024",
      isCurrent: false,
      responsibilities: [
        "Designed user interfaces and contributed to design systems for a resume-building website.",
      ],
      technologies: ["UI/UX Design", "Figma", "Design Systems"],
    },
  ] as ExperienceItem[],

  skillCategories: [
    {
      title: "Testing & Automation",
      iconName: "ShieldCheck",
      skills: ["Selenium", "TestNG", "RapidBotz"],
      description: "Automated regression testing, test frameworks, and deployment validation workflows.",
    },
    {
      title: "Programming",
      iconName: "Code2",
      skills: ["Java", "Python", "JavaScript", "HTML/CSS", "SASS/SCSS", "C/C++"],
      description: "Object-oriented and scripting languages for test harnesses and web engineering.",
    },
    {
      title: "Tools & Technologies",
      iconName: "Wrench",
      skills: ["Git", "GitHub", "MySQL", "Linux", "Figma", "Photoshop", "MS Office"],
      description: "Version control, databases, environment tooling, and interface design software.",
    },
  ],

  languages: [
    { name: "English", level: "Professional working proficiency" },
    { name: "Malayalam", level: "Native / Bilingual" },
    { name: "Hindi", level: "Working proficiency" },
    { name: "Tamil", level: "Working proficiency" },
  ],

  projects: [
    {
      title: "Online RPG",
      year: "2024",
      category: "Web Application / Game Logic",
      description:
        "A role-playing game built with HTML, CSS, and JavaScript featuring branching choices leading toward a final level.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Pay-Equity",
      year: "2023",
      category: "Machine Learning & Data Analysis",
      description:
        "A machine-learning project analyzing the gender-based wage gap in India.",
      technologies: ["Machine Learning", "Python"],
    },
    {
      title: "Medicare",
      year: "2022",
      category: "Automation & Web Systems",
      description:
        "An automated online medicine-delivery system.",
      technologies: ["Web Systems", "Automation", "Database"],
    },
  ] as ProjectItem[],

  designAndWeb: {
    summary:
      "Alongside quality assurance and test automation, I maintain practical expertise across the frontend stack and interface design. This hybrid perspective allows me to bridge the gap between design specifications, clean frontend code, and robust test coverage.",
    pillars: [
      {
        title: "UI/UX & Design Systems",
        description:
          "Experience crafting structured component systems, wireframes, and design guidelines for web applications at Zidio Development.",
        tags: ["Figma", "Design Systems", "Component Standards"],
      },
      {
        title: "Web Development & SCSS",
        description:
          "Hands-on web engineering experience focusing on modular SCSS/SASS architectures and responsive stylesheets at NodDesk.",
        tags: ["SCSS/SASS", "Responsive Layouts", "Semantic HTML"],
      },
      {
        title: "Quality-First Frontend Synergy",
        description:
          "Understanding DOM structures, accessibility attributes, and selector stability makes writing resilient, maintainable test automation scripts significantly more efficient.",
        tags: ["Stable Locators", "A11y Trees", "Testability"],
      },
    ],
  },

  education: {
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    institution: "College of Engineering, Aranmula",
    year: "2023",
    cgpa: "7.91",
  } as EducationItem,
};
