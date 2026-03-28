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
  name: 'Vasyl',
  title: 'Senior Java Developer',
  tagline: 'Building scalable, robust, and high-performance enterprise applications',
  location: 'Remote / Worldwide',
  email: 'vasyl@example.com',
  github: 'https://github.com/vasyl',
  linkedin: 'https://linkedin.com/in/vasyl',
  resume: '/resume.pdf',
};

export const about = {
  summary: `I am a Senior Java Developer with over 8 years of experience designing and building enterprise-grade applications. My expertise spans microservices architecture, cloud-native development, and high-performance systems that handle millions of transactions daily.

I specialize in the Spring ecosystem, including Spring Boot, Spring Cloud, and Spring Security. My passion lies in creating clean, maintainable code and mentoring junior developers to help them grow their technical skills.

When I'm not coding, I enjoy contributing to open-source projects, writing technical articles, and staying up-to-date with the latest Java ecosystem developments.`,
  highlights: [
    '8+ years of Java development experience',
    'Microservices architecture specialist',
    'Cloud-native application expert',
    'Team lead and mentor',
  ],
};

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'TechFin Solutions',
    role: 'Senior Java Developer',
    period: '2022 - Present',
    description: [
      'Led the migration of monolithic application to microservices architecture, reducing deployment time by 70%',
      'Architected and implemented event-driven systems using Kafka, processing 10M+ daily transactions',
      'Established CI/CD pipelines with GitHub Actions and Kubernetes, achieving 99.9% uptime',
      'Mentored team of 5 junior developers, conducting code reviews and technical training',
    ],
    technologies: ['Java 21', 'Spring Boot', 'Kafka', 'Kubernetes', 'PostgreSQL', 'Redis'],
  },
  {
    id: '2',
    company: 'DataFlow Systems',
    role: 'Java Developer',
    period: '2019 - 2022',
    description: [
      'Developed RESTful APIs serving 5M+ requests daily with sub-100ms response times',
      'Implemented caching strategies with Redis, reducing database load by 60%',
      'Built real-time data processing pipelines using Spring Batch and Apache Camel',
      'Collaborated with DevOps team to optimize Docker containers and AWS infrastructure',
    ],
    technologies: ['Java 11', 'Spring Cloud', 'AWS', 'Docker', 'MongoDB', 'Elasticsearch'],
  },
  {
    id: '3',
    company: 'Enterprise Solutions Ltd',
    role: 'Junior Java Developer',
    period: '2017 - 2019',
    description: [
      'Developed and maintained enterprise web applications using Spring Framework',
      'Implemented security features with Spring Security and JWT authentication',
      'Created comprehensive unit and integration tests with JUnit and Mockito',
      'Participated in agile development processes and daily standups',
    ],
    technologies: ['Java 8', 'Spring MVC', 'Hibernate', 'MySQL', 'JUnit', 'Maven'],
  },
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
