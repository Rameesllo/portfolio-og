import type { Project, SkillItem, ExperienceItem, StatItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Ramees',
  monogram: 'R',
  title: 'Full-Stack Developer',
  subtitle: 'I build modern, responsive web applications and turn real-world ideas into practical digital solutions using React, Next.js, TypeScript, Node.js, and PostgreSQL.',
  subtitle2: 'I enjoy working across both frontend and backend, from designing intuitive interfaces to building reliable APIs and database systems.',
  location: 'Kerala, India',
  education: 'BSc Computer Science',
  focus: 'Full-Stack Web Engineering & Scalable Systems',
  availability: 'Available for high-impact roles & technical collaborations',
  github: 'https://github.com/Rameesllo/',
  linkedin: 'https://www.linkedin.com/in/ramees-llo/',
  email: 'rameesllo78@gmail.com',
};

export const STATS_DATA: StatItem[] = [
  {
    number: '10+',
    label: 'PROJECTS BUILT',
    description: 'Scalable web applications & custom management software',
  },
  {
    number: '10+',
    label: 'TECHNOLOGIES',
    description: 'React, Next.js, TypeScript, PostgreSQL, Node & Prisma',
  },
  {
    number: '5+',
    label: 'REAL-WORLD APPS',
    description: 'Deployed enterprise systems in active daily operation',
  },
  {
    number: '2026',
    label: 'CONTINUOUS EVOLUTION',
    description: 'Architecting modern cloud-native architectures',
  },
];

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'javascript',
    number: '01',
    name: 'JAVASCRIPT (ES6+)',
    description: 'Modern asynchronous programming, DOM manipulation, functional patterns, and performance optimization.',
    tags: ['ES6+', 'Async/Await', 'DOM', 'Modules'],
    icon: 'Code',
    level: 'Advanced',
    category: 'Language',
  },
  {
    id: 'typescript',
    number: '02',
    name: 'TYPESCRIPT',
    description: 'Strongly typed web applications, strict schema validation, generic abstractions, and IDE autocompletion.',
    tags: ['Generics', 'Interfaces', 'Type Guards', 'Utility Types'],
    icon: 'FileCode',
    level: 'Advanced',
    category: 'Language',
  },
  {
    id: 'react',
    number: '03',
    name: 'REACT.JS',
    description: 'Component architecture, custom hooks, state management, synthetic events, and virtual DOM rendering.',
    tags: ['Hooks', 'Context API', 'Performance', 'JSX'],
    icon: 'Atom',
    level: 'Expert',
    category: 'Frontend',
  },
  {
    id: 'nextjs',
    number: '04',
    name: 'NEXT.JS',
    description: 'Full-stack SSR/SSG rendering, App Router architecture, Server Actions, API routes, and SEO optimization.',
    tags: ['App Router', 'SSR/SSG', 'Server Actions', 'Routing'],
    icon: 'Layers',
    level: 'Advanced',
    category: 'Framework',
  },
  {
    id: 'nodejs',
    number: '05',
    name: 'NODE.JS',
    description: 'Event-driven backend services, RESTful APIs, HTTP handling, middleware stacks, and file streaming.',
    tags: ['Express', 'REST API', 'Middleware', 'NPM'],
    icon: 'Server',
    level: 'Advanced',
    category: 'Backend',
  },
  {
    id: 'postgresql',
    number: '06',
    name: 'POSTGRESQL',
    description: 'Relational database design, indexed queries, relational integrity, complex joins, and transaction safety.',
    tags: ['Relational DB', 'Indexing', 'SQL Joins', 'ACID'],
    icon: 'Database',
    level: 'Intermediate',
    category: 'Database',
  },
  {
    id: 'prisma',
    number: '07',
    name: 'PRISMA ORM',
    description: 'Type-safe database ORM, declarative schema migrations, automated relation mapping, and query building.',
    tags: ['ORM', 'Migrations', 'Type-Safety', 'Schema'],
    icon: 'Workflow',
    level: 'Advanced',
    category: 'Backend',
  },
  {
    id: 'supabase',
    number: '08',
    name: 'SUPABASE',
    description: 'Real-time database subscriptions, Row Level Security (RLS) policies, storage buckets, and auth providers.',
    tags: ['BaaS', 'RLS Security', 'Realtime', 'Auth'],
    icon: 'Zap',
    level: 'Advanced',
    category: 'Backend',
  },
  {
    id: 'tailwind',
    number: '09',
    name: 'TAILWIND CSS',
    description: 'Utility-first styling systems, custom design tokens, responsive breakpoints, and dark mode theme switching.',
    tags: ['Utility First', 'Design System', 'Responsive', 'Flex/Grid'],
    icon: 'Palette',
    level: 'Expert',
    category: 'Styling',
  },
  {
    id: 'git-github',
    number: '10',
    name: 'GIT & GITHUB',
    description: 'Version control, feature branch workflow, pull request code reviews, release tags, and CI/CD pipelines.',
    tags: ['Git CLI', 'Branching', 'Pull Requests', 'Version Control'],
    icon: 'GitBranch',
    level: 'Advanced',
    category: 'Tools',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'erp-management',
    number: '01',
    title: 'ERP Management System',
    slug: 'erp-management',
    category: 'Management Systems',
    shortDescription: 'A full-stack enterprise ERP platform for managing inventory, purchase orders, customer ledgers, and financial insights in real-time.',
    fullDescription: 'The ERP Management System is a comprehensive digital solution crafted for modern mid-sized businesses. It unifies inventory control, customer relations, supplier purchases, automated billing, and live business analytics under one type-safe Next.js platform powered by PostgreSQL and Prisma.',
    role: 'Full-Stack Developer',
    year: '2026',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Supabase', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        title: 'Executive Financial Dashboard',
        caption: 'Real-time aggregated sales revenue, gross margins, and live stock movement counters.'
      },
      {
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        title: 'Stock & Inventory Matrix',
        caption: 'Multi-warehouse stock tracking with re-order threshold triggers and SKU categorization.'
      },
      {
        url: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=1200&q=80',
        title: 'Purchases & Supplier Ledgers',
        caption: 'Automated purchase order creation, batch receiving receipts, and supplier payment balances.'
      },
      {
        url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
        title: 'Customer Accounts & Billing',
        caption: 'Invoicing engine with PDF export support, credit limit enforcement, and payment tracking.'
      }
    ],
    overview: 'Built from the ground up to replace fragmented spreadsheet workflows with a unified, high-performance web platform. Designed to handle thousands of inventory SKUs with sub-second response times.',
    problem: 'The client faced frequent stockouts, manual data entry errors between accounting and warehouse teams, and lacked real-time visibility into profit margins across product categories.',
    solution: 'Engineered a centralized relational database architecture using PostgreSQL and Prisma ORM. Implemented Next.js Server Actions for instant server-side mutation, optimistic UI updates, and atomic database transactions to guarantee data integrity.',
    features: [
      {
        title: 'Role-Based Authentication',
        description: 'Granular permissions for Admins, Managers, and Warehouse Clerks using Supabase Auth & RLS policies.',
        icon: 'ShieldCheck'
      },
      {
        title: 'Live Stock Control',
        description: 'Automatic deduction upon sales dispatch and stock alert triggers when threshold falls below buffer limits.',
        icon: 'Boxes'
      },
      {
        title: 'Supplier & Purchase Workflow',
        description: 'Complete purchase order cycle from quote submission to goods receipt note (GRN) verification.',
        icon: 'Truck'
      },
      {
        title: 'Customer Ledger & Accounts',
        description: 'Tracks customer debt aging, credit limits, transaction histories, and printable invoice generation.',
        icon: 'Users'
      },
      {
        title: 'Real-Time Financial Reports',
        description: 'Dynamic charts showing profit margins, top-selling SKUs, and cash flow trends per fiscal month.',
        icon: 'TrendingUp'
      },
      {
        title: 'Sub-Second Global Search',
        description: 'Indexed database search across products, serial numbers, customers, and invoices.',
        icon: 'Search'
      }
    ],
    architectureNodes: [
      { label: 'Client / Web UI', subtext: 'React 18 + Tailwind CSS', iconName: 'Monitor' },
      { label: 'Next.js App Router', subtext: 'SSR, Server Actions & Edge Middleware', iconName: 'Cpu' },
      { label: 'API Layer & ORM', subtext: 'Prisma Type-Safe Client', iconName: 'Workflow' },
      { label: 'Relational Database', subtext: 'PostgreSQL on Supabase', iconName: 'Database' }
    ],
    challenges: [
      {
        challenge: 'Maintaining transactional integrity during peak multi-user sales dispatches without causing database race conditions.',
        solution: 'Implemented Prisma interactive database transactions ($transaction) with isolated row locking for stock updates.'
      },
      {
        challenge: 'Slow report compilation when aggregating 50,000+ historical ledger entries.',
        solution: 'Created indexed database view tables in PostgreSQL and cached analytical payloads at the server layer with Next.js revalidation tags.'
      }
    ],
    results: [
      { metric: '99.8%', label: 'Inventory Record Accuracy' },
      { metric: '65%', label: 'Reduction in Order Processing Time' },
      { metric: '<120ms', label: 'Average Database Query Latency' }
    ],
    githubUrl: 'https://github.com/ramees/erp-management-system',
    liveUrl: 'https://erp-demo.ramees.dev',
    featured: true
  },
  {
    id: 'pen-fight-game',
    number: '02',
    title: 'Pen Fight Game',
    slug: 'pen-fight-game',
    category: 'Games',
    shortDescription: 'An interactive 2D physics-based web game recreating the nostalgic pen fight schoolyard game with custom momentum and angle vectors.',
    fullDescription: 'Pen Fight Game brings the popular pencil-box schoolyard game to modern browsers. Built with Next.js, React, and HTML5 Canvas API, it features custom rigid-body collision physics, friction simulation, angular velocity calculations, and local multiplayer battle arenas.',
    role: 'Creator & Lead Developer',
    year: '2026',
    stack: ['Next.js', 'React', 'TypeScript', 'HTML5 Canvas', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
        title: 'Arena Battle Mode',
        caption: 'Interactive desktop surface where players drag to set launch angle and thrust force.'
      },
      {
        url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
        title: 'Custom Pen Armory',
        caption: 'Choose from different pen weight classes, mass, nib friction coefficients, and custom skins.'
      },
      {
        url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
        title: 'Match Statistics',
        caption: 'Post-game physics summary showing max impact velocity, trajectory paths, and knockouts.'
      }
    ],
    overview: 'Designed to showcase advanced mathematics, trigonometric vector calculations, and Canvas render loops within a React application without relying on heavy third-party physics engine libraries.',
    problem: 'Ensuring 60fps fluid physics simulation across desktop and mobile devices while preventing pens from glitching outside edge boundaries during high-velocity collisions.',
    solution: 'Built a lightweight custom vector math engine. Used RequestAnimationFrame with delta-time step calculations and Continuous Collision Detection (CCD) raycasting algorithms to prevent tunneling.',
    features: [
      {
        title: 'Rigid-Body Physics Simulation',
        description: 'Realistic momentum transfer, coefficient of restitution, and surface friction decay.',
        icon: 'Zap'
      },
      {
        title: 'Drag-to-Flick Controls',
        description: 'Intuitive touch and mouse pull-back mechanic with visual dynamic force trajectory lines.',
        icon: 'Move'
      },
      {
        title: 'Pen Customization Armory',
        description: 'Distinct pen types (Heavy Fountain Pen, Light Ballpoint, Slick Gel Pen) with unique physics stats.',
        icon: 'Sparkles'
      },
      {
        title: 'Local 2-Player Versus Mode',
        description: 'Turn-based battle flow on a single screen with ring-out loss triggers.',
        icon: 'Gamepad2'
      }
    ],
    architectureNodes: [
      { label: 'React UI & State', subtext: 'React State & Zustand Store', iconName: 'Monitor' },
      { label: 'Game Loop Engine', subtext: 'RequestAnimationFrame + Delta Math', iconName: 'Cpu' },
      { label: 'Physics Collision Engine', subtext: 'Vector Trigonometry & Raycasting', iconName: 'Workflow' },
      { label: 'HTML5 Canvas View', subtext: '60 FPS Hardware-Accelerated Context', iconName: 'Layers' }
    ],
    challenges: [
      {
        challenge: 'High-speed flick collisions caused pens to pass through each other in a single frame update (tunneling bug).',
        solution: 'Implemented sub-stepping inside the frame update to divide fast displacement into smaller step checks.'
      }
    ],
    results: [
      { metric: '60 FPS', label: 'Smooth Frame Rate on Mobile & Desktop' },
      { metric: '0 Dependencies', label: 'Pure Native Physics Implementation' },
      { metric: '<45KB', label: 'Ultra-Lightweight Bundle Footprint' }
    ],
    githubUrl: 'https://github.com/ramees/pen-fight-game',
    liveUrl: 'https://penfight.ramees.dev',
    featured: true
  },
  {
    id: 'medical-equipment-lending',
    number: '03',
    title: 'Medical Equipment Lending System',
    slug: 'medical-equipment-lending',
    category: 'Full Stack',
    shortDescription: 'A streamlined web portal enabling healthcare organizations to manage equipment inventory, patient borrowing requests.',
    fullDescription: 'The Medical Equipment Lending System was created to solve emergency equipment distribution for non-profits and healthcare centers. It digitizes wheel-chair, oxygen concentrator, and hospital bed loan requests, tracking items from checkout to sanitizer return.',
    role: 'Full-Stack Developer',
    year: '2026',
    stack: ['Next.js', 'React', 'Supabase', 'Tailwind CSS'],
    image: 'src/assets/medical-home.png',
    gallery: [
      {
        url: 'src/assets/medical-home.png',
        title: 'Equipment Catalog & Availability',
        caption: 'Live status indicators showing ready-to-lend, reserved, in-service, and under-maintenance items.'
      },
      {
        url: 'src/assets/inventry-medical.png',
        title: 'Admin controlling inventry',
        caption: 'Admin controlling inventry in a website.'
      },
      {
        url: 'src/assets/borrowentry.png',
        title: 'Borrower Entry',
        caption: 'Admin entry of borrower and equipment details.'
      }
    ],
    overview: 'Built to replace paper logbooks at community healthcare desks, accelerating emergency loan approvals from hours to under 3 minutes.',
    problem: 'Equipment often went unreturned due to misplaced manual paper receipts, and coordinators could not quickly identify which equipment was currently available during critical patient admissions.',
    solution: 'Designed a mobile-friendly Next.js web application linked to Supabase database with instant phone OTP authentication. Added barcode tag search and SMS return reminders.',
    features: [
      {
        title: 'Google Authentication',
        description: 'Secure member authentication using Google account sign-in for registered users.',
        icon: 'ShieldCheck'
      },
      {
        title: 'Real-time Equipment Tracker',
        description: 'Categorized catalog with instant availability search and serial number tracking.',
        icon: 'Stethoscope'
      },
      {
        title: 'Automated Loan Due Reminders',
        description: 'Scheduled edge functions to notify borrowers 2 days prior to expected return date.',
        icon: 'CalendarCheck'
      },
      {
        title: 'Maintenance & Sanitization Log',
        description: 'Enforces mandatory inspection and cleaning check-offs before returning equipment to public inventory.',
        icon: 'CheckCircle'
      }
    ],
    architectureNodes: [
      { label: 'Patient & Admin Mobile Web', subtext: 'React + Tailwind CSS Responsive UI', iconName: 'Smartphone' },
      { label: 'Next.js App Services', subtext: 'Server-Side Rendering & Edge Functions', iconName: 'Cpu' },
      { label: 'Supabase BaaS Layer', subtext: 'PostgreSQL + Auth + Storage Buckets', iconName: 'Database' },
      { label: 'Google Authentication', subtext: 'Secure Member Login', iconName: 'ShieldCheck' }
    ],
    challenges: [
      {
        challenge: 'Providing volunteers with a simple way to verify registered members without managing passwords.',
        solution: 'Implemented Google Login authentication for registered members, making access simple while keeping the system restricted to authorized users.'
      }
    ],
    results: [
      { metric: '<3 Mins', label: 'Average Emergency Checkout Time' },
      { metric: '100%', label: 'Traceability of Active Loans' },
      { metric: '94%', label: 'On-Time Return Rate' }
    ],
    githubUrl: 'https://github.com/Rameesllo/pydc',
    liveUrl: 'https://pydc-bedt.vercel.app/medical',
    featured: true
  },
  {
    id: 'llo-messaging-web-app',
    number: '04',
    title: 'LLO Messaging web app',
    slug: 'Messaging-web app',
    category: 'Messaging Web App',
    shortDescription: 'A real-time messaging web application for LLO with instant communication and image sharing.',
    fullDescription: 'LLO Messaging Web App is a real-time communication platform that allows users to send and receive messages instantly. The application uses Socket.IO for real-time communication, MongoDB for data storage, Cloudinary for image management, and a Node.js/Express backend deployed on Render.',
    role: 'Full-Stack Developer',
    year: '2025',
    stack: ['React', 'MongoDB', 'Render', 'Socket.io', 'JavaScript', 'Tailwind CSS', 'Cloudinary'],
    image: 'src/assets/llohome.png',
    gallery: [

      {
        url: 'src/assets/llo-gender.png',
        title: 'Create User Profile',
        caption: 'Create a user profile by entering essential details such as age and gender.'
      },
      {
        url: 'src/assets/llo-profile.png',
        title: 'User Profile',
        caption: 'Profile page displaying the user profile image, username, bio, and personal details.'
      },
      {
        url: 'src/assets/llo-discover.png',
        title: 'Discover Users',
        caption: 'Discover page displaying registered users with their profile images and usernames.'
      },
      {
        url: 'src/assets/llo-requsts.png',
        title: 'Friend Requests',
        caption: 'Friend request page where users can view incoming requests and accept or reject connection requests.'
      },
      {
        url: 'src/assets/llo-chat.png',
        title: 'Live Chat & Media Sharing',
        caption: 'Real-time chat with instant messaging, missed calls, photo and video sharing, voice messages, emoji reactions, and message interactions.'
      }

    ],


    overview:
      'Built a real-time messaging platform for LLO that enables users to communicate instantly through a modern web interface.',

    problem:
      'Traditional communication methods made it difficult for LLO users to communicate quickly and share information within a centralized platform.',

    solution:
      'Developed a full-stack real-time messaging application using React for the frontend, Node.js and Express.js for the backend, Socket.IO for instant communication, MongoDB for storing application data, and Cloudinary for image uploads. The backend is deployed on Render and the frontend is hosted on Vercel.',

    features: [
      {
        title: 'Real-Time Messaging',
        description:
          'Users can send and receive messages instantly without manually refreshing the page.',
        icon: 'MessageCircle'
      },

      {
        title: 'Socket.IO Communication',
        description:
          'Socket.IO provides real-time bidirectional communication between connected users.',
        icon: 'Zap'
      },

      {
        title: 'Image Sharing',
        description:
          'Users can upload and share images using Cloudinary cloud storage.',
        icon: 'Image'
      },

      {
        title: 'MongoDB Database',
        description:
          'User and messaging data are stored and managed using MongoDB.',
        icon: 'Database'
      },

      {
        title: 'Responsive Interface',
        description:
          'The application provides a responsive messaging experience across desktop and mobile devices.',
        icon: 'Smartphone'
      }
    ],

    architectureNodes: [
      {
        label: 'React Frontend',
        subtext: 'React + JavaScript + Tailwind CSS',
        iconName: 'Monitor'
      },

      {
        label: 'Node.js Backend',
        subtext: 'Express.js REST API',
        iconName: 'Server'
      },

      {
        label: 'Socket.IO',
        subtext: 'Real-Time Communication',
        iconName: 'Zap'
      },

      {
        label: 'MongoDB',
        subtext: 'Application Database',
        iconName: 'Database'
      },

      {
        label: 'Cloudinary',
        subtext: 'Image Storage & Delivery',
        iconName: 'Image'
      },

      {
        label: 'Render',
        subtext: 'Backend Deployment',
        iconName: 'Cloud'
      }
    ],

    challenges: [
      {
        challenge:
          'Implementing reliable real-time communication between multiple connected users.',

        solution:
          'Integrated Socket.IO with the Node.js backend to establish persistent real-time connections and instantly broadcast messages between users.'
      },

      {
        challenge:
          'Handling image uploads without storing large image files directly in the application server.',

        solution:
          'Integrated Cloudinary for cloud-based image storage and delivery while storing the required image information in MongoDB.'
      },

      {
        challenge:
          'Connecting the production frontend with the backend deployed separately.',

        solution:
          'Configured the React frontend and Render-hosted backend to communicate through production API endpoints and Socket.IO connections.'
      }
    ],

    results: [
      {
        metric: 'Real-Time',
        label: 'Instant Message Delivery'
      },

      {
        metric: 'Cloud',
        label: 'Image Storage with Cloudinary'
      },

      {
        metric: 'Full-Stack',
        label: 'Complete Messaging Platform'
      }
    ],
    githubUrl: 'https://github.com/ramees/employee-attendance-salary',
    liveUrl: 'https://llo-messaging-app-twhk.vercel.app/',
    featured: false
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-2026',
    year: 'present',
    title: 'Full-Stack Software Engineer',
    organization: 'Independent / Product Client Engagements',
    description: 'Architecting & deploying production-grade web applications using Next.js 15, TypeScript, PostgreSQL, and modern cloud infrastructure.',
    bullets: [
      'Engineered an enterprise ERP Management System handling inventory matrix, supplier ledgers, and real-time financial reporting.',
      'Developed modern full-stack solutions with Next.js App Router, Server Actions, Prisma ORM, and Supabase RLS security.',
      'Focused on ultra-fast page speed, crisp micro-interactions, responsive design systems, and robust database architectures.'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Prisma', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'exp-2025',
    year: 'present',
    title: 'Web Application Developer',
    organization: 'Real-World Systems & Client Solutions',
    description: 'Designed and implemented domain-specific management software including stock tracking systems and employee attendance portals.',
    bullets: [
      'Built a Bakery Stock Management System with automated recipe ingredient deduction and offline Firebase sync.',
      'Created an Employee Attendance & Salary System streamlining monthly payroll runs and advance tracking.',
      'Crafted custom interactive physics simulations including an HTML5 Canvas Pen Fight Game.'
    ],
    technologies: ['React', 'JavaScript', 'Firebase', 'HTML5 Canvas', 'Tailwind CSS', 'Git']
  },
  {
    id: 'exp-edu',
    year: '2023 — 2026',
    title: 'BSc Computer Science',
    organization: 'EMEA Collage of Arts and Science  ',
    description: 'Focused on Core Computer Science principles, Data Structures, Relational Database Systems, Software Engineering, and Object-Oriented Programming.',
    bullets: [
      'Graduated with strong foundation in algorithm complexity, database normalization, and web technologies.',
      'Led student tech projects and built web development solutions for local organizations.',
      'Maintained consistent focus on modern JavaScript ecosystem and production web practices.'
    ],
    technologies: ['Data Structures', 'DBMS', 'Software Engineering', 'SQL', 'JavaScript', 'Web Tech']
  }
];
