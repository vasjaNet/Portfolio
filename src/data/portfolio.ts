export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export const personalInfo = {
  name: 'Vasyl Synenko',
  title: 'Senior Java/Full Stack Developer',
  tagline: 'Building scalable, robust, and high-performance enterprise applications',
  location: 'Remote / Worldwide',
  email: 'vasjasynenko@gmail.com',
  github: 'https://github.com/vasjaNet',
  linkedin: 'https://www.linkedin.com/in/vasyl-synenko-28468362/',
  resume: `${import.meta.env.BASE_URL}VASYL_SYNENKO_CV.pdf`,
};

export const about = {
  summary: `I am a Senior Java Developer with over 15 years of experience designing and building enterprise-grade applications. My expertise spans microservices architecture, cloud-native development, and high-performance systems that handle millions of transactions daily.

I specialize in the Spring ecosystem, including Spring Boot, Spring Cloud, and Spring Security. My passion lies in creating clean, maintainable code and mentoring junior developers to help them grow their technical skills.

When I'm not coding, I enjoy writing technical articles, and staying up-to-date with the latest Java ecosystem developments.`,
  highlights: [
    '15+ years of Java development experience',
    'Microservices architecture specialist',
    'Cloud-native application expert',
    'Team lead and mentor',
  ],
};

export const experiences: Experience[] = [
  {
    "id": "1",
    "company": "VITech",
    "role": "Senior Java Developer",
    "period": "2022 - 2025",
    "description": [
      "Designed and implemented backend for a clinical study marketplace platform connecting studies with clinics",
      "Built AI-enhanced matching logic using AWS Bedrock for automated clinic-study pairing",
      "Designed and implemented integrations with Salesforce CRM",
      "Implemented frontend using React and integrated monitoring via NewRelic",
      "Participated in architectural design, planning, and performance optimization",
      "Mentored junior developers"
    ],
    "technologies": ["Java 21", "Spring Boot", "Spring Data JPA", "Spring Security", "PostgreSQL", "React", "Salesforce", "Docker", "AWS Bedrock", "AWS S3", "AWS CloudWatch", "Flyway", "Retrofit", "OpenAPI"]
  },
  {
    "id": "2",
    "company": "VITech",
    "role": "Senior Java Developer",
    "period": "2021 - 2022",
    "description": [
      "Designed and implemented backend for a patient cohort builder module",
      "Enabled dynamic UI-driven criteria definition for retrieving patient cohorts from large datasets",
      "Participated in architectural design, planning, and performance optimization"
    ],
    "technologies": ["Java", "Spring Boot", "Elasticsearch", "Redis", "Docker", "Kubernetes", "AWS EC2"]
  },
  {
    "id": "3",
    "company": "VITech",
    "role": "Full Stack Software Developer",
    "period": "2021",
    "description": [
      "Migrated cross-platform nursing home patient tracking app from Ionic 3 to Ionic 5",
      "Added application monitoring with Prometheus and Grafana via Spring Boot Actuator and Micrometer"
    ],
    "technologies": ["Java", "Spring Boot", "Spring Boot Actuator", "Micrometer", "Prometheus", "Grafana", "Ionic", "Angular", "Docker", "Kubernetes"]
  },
  {
    "id": "4",
    "company": "VITech",
    "role": "Frontend Software Developer",
    "period": "2020 - 2021",
    "description": [
      "Designed and implemented an Angular application visualizing care program effectiveness",
      "Designed and implemented Sisense BI dashboards for healthcare analytics",
      "Integrated Sisense dashboards into the Angular application"
    ],
    "technologies": ["TypeScript", "Angular", "Sisense"]
  },
  {
    "id": "5",
    "company": "VITech",
    "role": "Lead / Full Stack Developer",
    "period": "2017 - 2020",
    "description": [
      "Designed and implemented frontend and backend of a high-load fault-tolerant distributed system with microservices architecture",
      "Built batch processing pipelines consuming data from multiple sources in various formats",
      "Migrated UI from Apache Click to Angular",
      "Delivered a configuration and monitoring portal for processing status visibility"
    ],
    "technologies": ["Java", "Spring Boot", "Spring Integration", "Spring Batch", "Spring AMQP", "Hibernate", "MySQL", "RabbitMQ", "Kafka", "HBase", "Angular", "Docker", "JBoss", "AWS", "ELK", "Liquibase"]
  },
  {
    "id": "6",
    "company": "VITech",
    "role": "Java Developer",
    "period": "2013 - 2017",
    "description": [
      "Developed and maintained a monolithic healthcare application for storing patient medical records",
      "Implemented reporting and alerting features for medical staff and patients using JasperReports",
      "Contributed to frontend development using AngularJS and JSP"
    ],
    "technologies": ["Java", "JBoss", "Struts", "Spring", "EJB", "JSP", "Hibernate", "JasperReports", "AngularJS", "MySQL"]
  },
  {
    "id": "7",
    "company": "Prykarpattyaoblenergo",
    "role": "Lead Software Developer",
    "period": "2008 - 2012",
    "description": [
      "Built and maintained a Java-based billing system for electrical equipment connection",
      "Led a team of 4 developers, gathered requirements, designed architecture, and coordinated development"
    ],
    "technologies": ["Java", "Struts", "Hibernate", "Spring", "jQuery"]
  },
  {
    "id": "8",
    "company": "Prykarpattyaoblenergo",
    "role": "Software Developer",
    "period": "2008 - 2009",
    "description": [
      "Developed a desktop system for analyzing and registering power network equipment"
    ],
    "technologies": ["Delphi", "Firebird"]
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Microservices Platform',
    description:
      'A scalable e-commerce platform built with microservices architecture. Features include user management, product catalog, shopping cart, payment processing, and order management. The system handles peak loads of 1000+ concurrent users.',
    technologies: ['Java 21', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
    githubUrl: 'https://github.com/vasyl/ecommerce-platform',
    image: '/images/projects/ecommerce.jpg',
  },
  {
    id: '2',
    title: 'Real-Time Analytics Dashboard',
    description:
      'High-performance analytics dashboard processing real-time data streams. Uses WebSocket for live updates and provides comprehensive data visualization. Processes 50K+ events per minute with sub-second latency.',
    technologies: ['Java 17', 'Spring WebFlux', 'WebSocket', 'InfluxDB', 'Grafana', 'React'],
    githubUrl: 'https://github.com/vasyl/analytics-dashboard',
    liveUrl: 'https://analytics-demo.example.com',
    image: '/images/projects/analytics.jpg',
  },
  {
    id: '3',
    title: 'Distributed Task Scheduler',
    description:
      'Enterprise-grade distributed task scheduler with support for cron expressions, job chaining, and failure recovery. Built with leader election for high availability and horizontal scalability.',
    technologies: ['Java 17', 'Quartz', 'Zookeeper', 'MySQL', 'Docker', 'Prometheus'],
    githubUrl: 'https://github.com/vasyl/task-scheduler',
    image: '/images/projects/scheduler.jpg',
  },
  {
    id: '4',
    title: 'API Gateway with Rate Limiting',
    description:
      'Custom API Gateway solution with advanced rate limiting, request validation, and authentication. Implements circuit breaker patterns and provides detailed metrics and monitoring.',
    technologies: ['Java 21', 'Spring Cloud Gateway', 'Redis', 'JWT', 'OpenTelemetry'],
    githubUrl: 'https://github.com/vasyl/api-gateway',
    image: '/images/projects/gateway.jpg',
  },
];

export const skills: Skill[] = [
  {
    category: 'Core Java',
    items: ['Java 8-21', 'JVM Tuning', 'Concurrency', 'Multithreading', 'JMM'],
  },
  {
    category: 'Frameworks',
    items: ['Spring Boot', 'Spring Cloud', 'Spring Security', 'Spring Data', 'Hibernate', 'Quarkus'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Cassandra'],
  },
  {
    category: 'Messaging',
    items: ['Apache Kafka', 'RabbitMQ', 'ActiveMQ', 'AWS SQS'],
  },
  {
    category: 'DevOps & Cloud',
    items: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Terraform', 'Jenkins', 'GitHub Actions'],
  },
  {
    category: 'Tools & Others',
    items: ['Git', 'Maven', 'Gradle', 'JUnit', 'Mockito', 'Swagger', 'OpenAPI'],
  },
];
