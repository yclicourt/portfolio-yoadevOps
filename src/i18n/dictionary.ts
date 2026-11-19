// i18n del portfolio (rev. 2026-10-30): inglés (EN-USA, por defecto,
// el idioma en el que ya estaba el sitio) y español (ES-Cuba).
// Regla: las citas de clientes NO se traducen jamás (son sus palabras);
// solo se traducen los textos propios del sitio y los metadatos
// (p. ej. el contexto "Real estate platform · Cuba").

export type Lang = "en" | "es";

export const LANGS: { code: Lang; label: string; flag: string; name: string }[] = [
  { code: "en", label: "EN", flag: "🇺🇸", name: "English (USA)" },
  { code: "es", label: "ES", flag: "🇨🇺", name: "Español (Cuba)" },
];

export interface ServiceContent {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  badge: string;
  deliverables: string[];
}

export interface ProjectContent {
  title: string;
  description: string;
}

interface Dict {
  nav: { name: string; href: string }[];
  contactCta: string;
  toggleMenu: string;
  hero: {
    eyebrow: string;
    title: string;
    tagline: string;
    whatsappCta: string;
    viewServices: string;
    profileAlt: string;
  };
  about: { title: string; text: string };
  services: {
    title: string;
    subtitleBefore: string;
    subtitleAfter: string;
    items: ServiceContent[];
    cta: string;
    terms: string;
  };
  techServices: {
    title: string;
    subtitle: string;
    items: ServiceContent[];
    cta: string;
    terms: string;
  };
  process: {
    title: string;
    subtitle: string;
    steps: { title: string; text: string }[];
  };
  faq: {
    title: string;
    subtitle: string;
    items: { question: string; answer: string }[];
  };
  projects: {
    title: string;
    fullstackTitle: string;
    fullstackSubtitle: string;
    devopsTitle: string;
    devopsSubtitle: string;
    viewProject: string;
    stackNote: string;
    items: Record<string, ProjectContent>;
  };
  testimonials: {
    title: string;
    subtitleBefore: string;
    subtitleAfter: string;
    contexts: Record<string, string>;
  };
  contact: {
    title: string;
    description: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    send: string;
    whatsappText: string;
  };
  footer: {
    role: string;
    builtWith: string;
    copyright: string;
  };
}

const en: Dict = {
  nav: [
    { name: "Home", href: "#" },
    { name: "About Me", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],
  contactCta: "Contact Me 🚀",
  toggleMenu: "Toggle Menu",
  hero: {
    eyebrow: "YoaDevOps Consulting",
    title: "Websites and systems for businesses that still work by hand.",
    tagline:
      "I'm Yoan, founder of YoaDevOps Consulting. I build the website, store or system your business needs, with price and scope in writing before we start. 100% remote, for Latin America and Europe.",
    whatsappCta: "Message me on WhatsApp",
    viewServices: "See services & prices",
    profileAlt: "Profile Header",
  },
  about: {
    title: "About Me",
    text: "Fullstack Developer with 6+ years of experience building the systems small businesses run on: invoicing, inventory, cash register, and customer management — designed to keep working when the connection doesn't. Founder and lead developer of CajaYa, a management SaaS for Cuban mipymes live in production, and builder of ecommerce platforms and client websites for real-estate and logistics businesses. I work across React, Next.js, and Angular frontends; NestJS, Express, and Django backends; and PostgreSQL with Prisma and Supabase. My edge: a Senior Infrastructure Engineer background (enterprise environments, 100+ VMs, Kubernetes, GitOps, CI/CD, and observability) — so everything I build, I also deploy, back up, and operate in production.",
  },
  services: {
    title: "Services",
    subtitleBefore: "What your business gets from",
    subtitleAfter: "— price and scope in writing before we start.",
    items: [
      {
        id: "landing",
        icon: "globe",
        title: "Landing page or website",
        tagline:
          "A page for your business: what you sell, services, photos, location and a WhatsApp button. Fast on the phone. Design included.",
        badge: "from $250",
        deliverables: [
          "What you sell, services, photos and location",
          "WhatsApp button on every screen",
          "Design included, fast on the phone",
        ],
      },
      {
        id: "online-store",
        icon: "cart",
        title: "Online store",
        tagline:
          "Catalog with photos and prices. The customer builds their order and it reaches you on WhatsApp; you confirm and charge as you already do.",
        badge: "from $500",
        deliverables: [
          "Catalog with photos and prices",
          "The order reaches you on WhatsApp",
          "You confirm and charge as you already do",
        ],
      },
      {
        id: "booking-system",
        icon: "calendar",
        title: "Booking system",
        tagline:
          "Your customers pick the service and the time online, and everything lands in a calendar: no more back-and-forth messages to confirm each appointment. Services and prices page included.",
        badge: "from $1,000",
        deliverables: [
          "The customer picks the service and the time",
          "Everything lands in one calendar",
          "Services and prices page included",
        ],
      },
      {
        id: "custom-system",
        icon: "cogs",
        title: "Custom system",
        tagline:
          "When off-the-shelf is not enough: I build the system for your process (sales, inventory, cash register, customers), with your rules.",
        badge: "from $1,000",
        deliverables: [
          "Built for your process",
          "Sales, inventory, cash register and customers",
          "With your rules",
        ],
      },
      {
        id: "ai-agent",
        icon: "robot",
        title: "AI agent for WhatsApp",
        tagline:
          "An agent that serves your customers on WhatsApp 24/7: it answers questions, takes bookings and orders, and passes you only what needs a person.",
        badge: "from $800",
        deliverables: [
          "Serves customers on WhatsApp 24/7",
          "Answers questions, takes bookings and orders",
          "Passes you only what needs a person",
        ],
      },
    ],
    cta: "Message me on WhatsApp",
    terms:
      "Free quote · Written proposal with scope and price · 50% upfront, 50% on delivery",
  },
  techServices: {
    title: "For tech teams",
    subtitle:
      "Besides business services, I work with teams that need platform and infrastructure. Custom quote in each case.",
    items: [
      {
        id: "mvp-express",
        icon: "rocket",
        title: "MVP Express",
        tagline: "Production-ready web app in 30 days.",
        badge: "30 days",
        deliverables: [
          "Frontend: React / Next.js or Angular",
          "Backend: NestJS / Express or Django",
          "Data: PostgreSQL + Prisma or Supabase",
          "Auth, payments & email integrations",
          "CI/CD + production deployment",
          "Handover docs + team walkthrough",
        ],
      },
      {
        id: "platform-setup",
        icon: "kubernetes",
        title: "Platform Setup",
        tagline: "Kubernetes + GitOps platform, live in 2 weeks.",
        badge: "2 weeks",
        deliverables: [
          "Production-ready Kubernetes cluster (k3s / Kubernetes)",
          "GitOps delivery with ArgoCD",
          "CI/CD pipelines (GitHub Actions / GitLab CI)",
          "Observability: Prometheus, Grafana, Loki, AlertManager",
          "Infrastructure as Code with Terraform & Ansible",
          "Handover docs + team walkthrough",
        ],
      },
      {
        id: "devops-rescue",
        icon: "lifering",
        title: "DevOps Rescue",
        tagline: "Audit & recovery of your pipelines and infrastructure.",
        badge: "1–2 weeks",
        deliverables: [
          "Full audit of CI/CD, IaC and clusters",
          "Prioritized remediation plan",
          "Quick wins implemented first",
          "Cost & reliability recommendations",
          "Container security scanning (Trivy) wired in",
          "Final report + handover",
        ],
      },
    ],
    cta: "Start a project",
    terms:
      "Remote-first · LATAM / EU time zones · Contract-based · Paid in USD stablecoins",
  },
  process: {
    title: "How we work",
    subtitle: "Four steps, no surprises.",
    steps: [
      {
        title: "You message me",
        text: "Write to me on WhatsApp. Tell me what you need and how you work today.",
      },
      {
        title: "Written proposal",
        text: "I send you a proposal in writing: scope, exact price and timeline. No commitment.",
      },
      {
        title: "We start with 50%",
        text: "I build the system and show you progress as it takes shape.",
      },
      {
        title: "Delivery and the other 50%",
        text: "I deliver it working, with a walkthrough of how to use it. Support and changes after, by agreement.",
      },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    subtitle: "The short answers, before you even ask.",
    items: [
      {
        question: "How much does it cost in total?",
        answer:
          "It depends on the scope. The prices above are the starting point; the written proposal gives you the exact price before we start, with no surprises. The WhatsApp AI agent also has a $30/month maintenance fee after setup, for updates and monitoring; WhatsApp's own message fees are charged by Meta at cost.",
      },
      {
        question: "How do I pay?",
        answer:
          "50% to start and 50% on delivery, in USD. I accept several payment routes; we agree on it in writing in the proposal.",
      },
      {
        question: "Do you work remote only?",
        answer: "Yes, 100% remote, for Latin America and Europe, including Cuba.",
      },
      {
        question: "How long does it take?",
        answer:
          "Each proposal carries its timeline in writing. As a reference: a complete app (MVP Express) in 30 days, a platform (Platform Setup) in 2 weeks.",
      },
      {
        question: "What do you need from me to start?",
        answer:
          "A WhatsApp conversation about how you work today and what you want to achieve. With that I prepare the proposal.",
      },
      {
        question: "What happens after delivery if something breaks or I want a change?",
        answer:
          "Support and changes by agreement, in writing. Nothing is left uncovered: if it's my mistake, I fix it.",
      },
      {
        question: "What if my business has no stable internet?",
        answer:
          "Systems are built to keep working even when the connection drops, and data is backed up. That's part of the design, not an extra.",
      },
    ],
  },
  projects: {
    title: "Projects",
    fullstackTitle: "Fullstack Development",
    fullstackSubtitle: "Production web apps, from database to deployed interface.",
    devopsTitle: "DevOps & Platform Engineering",
    devopsSubtitle: "Kubernetes platforms, GitOps delivery and infrastructure as code.",
    viewProject: "View Project",
    stackNote:
      "Built with React, Next.js, Angular, NestJS, Django, PostgreSQL, Prisma, Supabase and Kubernetes — everything I build, I also deploy and operate.",
    items: {
      "Tasks App — Platform Engineering": {
        title: "Tasks App — Platform Engineering",
        description:
          "End-to-end platform engineering demo: git push triggers GitHub Actions (lint, test, Trivy scan) → Harbor → ArgoCD app-of-apps deploys the platform from git. Traffic via Kubernetes Gateway API with automated TLS, secrets via Sealed Secrets, policies via Kyverno, observability via OpenObserve, backups via Velero. Every layer declared in git and reproducible on any k3s cluster.",
      },
      "TaskApp GitOps Kubernetes Platform": {
        title: "TaskApp GitOps Kubernetes Platform",
        description:
          "This project demonstrates a production-oriented GitOps workflow for deploying a full-stack application on Kubernetes. The primary goal is not the Todo application itself, but showcasing modern DevOps practices including GitOps, Helm packaging, private container registries, automated deployments with ArgoCD, and Kubernetes-based application lifecycle management.",
      },
      "Terraform Docker Platform": {
        title: "Terraform Docker Platform",
        description:
          "This project demonstrates how to design and provision a modular Infrastructure as Code (IaC) solution using Terraform and the Docker provider. The infrastructure deploys a complete three-tier application composed of a PostgreSQL database, a Django REST API backend, and a React frontend while following Terraform best practices for modularity and reusability.",
      },
      "Terraform Kubernetes Platform": {
        title: "Terraform Kubernetes Platform",
        description:
          "This project demonstrates how to provision a complete Kubernetes application using the Terraform Kubernetes Provider following Infrastructure as Code best practices. The infrastructure is organized into reusable modules and deploys a production-like environment including PostgreSQL, Django REST Framework, React, ConfigMaps, Secrets, StatefulSets, Deployments, Services and Ingress.",
      },
      "CajaYa — Mipyme Management SaaS": {
        title: "CajaYa — Mipyme Management SaaS",
        description:
          "Live SaaS product I founded and built end to end: management platform for Cuban small businesses (mipymes) covering invoicing, inventory and daily cash-register control in a single installable PWA. Multi-tenant architecture on Supabase (PostgreSQL, Auth, Row Level Security) with transactional Postgres RPCs for consecutive invoice numbering and atomic stock decrement, member invitations by email, offline data reading with a persisted client cache, PDF invoices shared via WhatsApp, and a full test suite (Vitest unit tests + a Playwright E2E of the complete daily flow). Deployed in production on Vercel.",
      },
      "Buildora — Full-Stack Scaffold Generator": {
        title: "Buildora — Full-Stack Scaffold Generator",
        description:
          "Free open-source scaffold generator (MIT) I built from three real, working apps: one command generates a complete full-stack project with auth, database, Docker and CI working from the first commit. Three golden paths — Next.js + NestJS + Prisma, React + Vite + Django, and Angular + FastAPI — all on PostgreSQL + Redis. Published on npm as buildora (npx buildora generate my-app), with the template extracted from the reference apps and verified with tests and green CI.",
      },
      "Ecommerce Full-Stack Platform": {
        title: "Ecommerce Full-Stack Platform",
        description:
          "Complete ecommerce platform with an Angular 18 frontend styled with TailwindCSS and a NestJS backend powered by PostgreSQL and Prisma. Includes JWT authentication, PayPal payment integration, order confirmation emails, light/dark mode UI, and is deployed to production on Vercel.",
      },
      "REIKO'S LLC — Logistics Landing": {
        title: "REIKO'S LLC — Logistics Landing",
        description:
          "Corporate landing page for a logistics company built with Angular 18 and TailwindCSS. Includes Transport, Storage and Logistics service pages, an animated image carousel, a working quote-request contact form powered by Formspree, and optimized WebP imagery (5.2 MB → 364 KB) for fast loading. Deployed to production on Vercel.",
      },
      "WelcomeHome — Real Estate Platform": {
        title: "WelcomeHome — Real Estate Platform",
        description:
          "Client project: real estate platform for Welcome Home Inmobiliaria, a Cuban real estate company. Public property listings, detail pages and an admin panel to manage published properties. React + Vite + TypeScript frontend with Supabase backend (PostgreSQL + Auth + Storage), deployed on Vercel.",
      },
    },
  },
  testimonials: {
    title: "Testimonials",
    subtitleBefore: "What clients say about working with",
    subtitleAfter: ".",
    contexts: {
      "welcome-home": "Real estate platform · Cuba",
      "reikos-llc": "Logistics company website · USA",
    },
  },
  contact: {
    title: "Contact Me",
    description:
      "Do you run a business that still works by hand? Message me and let's talk.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    messageLabel: "Message",
    messagePlaceholder: "Write your message here...",
    send: "SEND MESSAGE",
    whatsappText: "Hi Yoan, I saw your portfolio and want to get in touch.",
  },
  footer: {
    role: "Fullstack Engineer • DevOps Engineer • Platform Engineer",
    builtWith: "Built with",
    copyright: "All rights reserved.",
  },
};

const es: Dict = {
  nav: [
    { name: "Inicio", href: "#" },
    { name: "Sobre mí", href: "#about" },
    { name: "Servicios", href: "#services" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
  ],
  contactCta: "Contáctame 🚀",
  toggleMenu: "Alternar menú",
  hero: {
    eyebrow: "YoaDevOps Consulting",
    title: "Sistemas y páginas web para negocios que todavía trabajan a mano.",
    tagline:
      "Soy Yoan, fundador de YoaDevOps Consulting. Construyo la web, la tienda o el sistema que tu negocio necesita, con precio y alcance por escrito antes de empezar. Trabajo 100% remoto, para Latinoamérica y Europa.",
    whatsappCta: "Escríbeme por WhatsApp",
    viewServices: "Ver servicios y precios",
    profileAlt: "Foto de perfil",
  },
  about: {
    title: "Sobre mí",
    text: "Desarrollador Fullstack con más de 6 años de experiencia construyendo los sistemas con los que operan los pequeños negocios: facturación, inventario, caja y gestión de clientes — diseñados para seguir funcionando aunque se caiga la conexión. Fundador y desarrollador principal de CajaYa, un SaaS de gestión para mipymes cubanas en producción, y creador de plataformas ecommerce y sitios web para clientes de bienes raíces y logística. Trabajo con React, Next.js y Angular en el frontend; NestJS, Express y Django en el backend; y PostgreSQL con Prisma y Supabase. Mi ventaja: una trayectoria como Ingeniero Senior de Infraestructura (entornos empresariales, más de 100 VMs, Kubernetes, GitOps, CI/CD y observabilidad) — así que todo lo que construyo, también lo despliego, lo respaldo y lo opero en producción.",
  },
  services: {
    title: "Servicios",
    subtitleBefore: "Lo que tu negocio recibe de",
    subtitleAfter: "— precio y alcance por escrito antes de empezar.",
    items: [
      {
        id: "landing",
        icon: "globe",
        title: "Landing o página web",
        tagline:
          "Una página de tu negocio: qué vendes, servicios, fotos, ubicación y botón de WhatsApp. Rápida en el teléfono, con diseño incluido.",
        badge: "desde $250",
        deliverables: [
          "Qué vendes, servicios, fotos y ubicación",
          "Botón de WhatsApp en cada pantalla",
          "Diseño incluido, rápida en el teléfono",
        ],
      },
      {
        id: "tienda",
        icon: "cart",
        title: "Tienda online",
        tagline:
          "Catálogo con fotos y precios. El cliente arma su pedido y te llega por WhatsApp; tú confirmas y cobras como ya lo haces.",
        badge: "desde $500",
        deliverables: [
          "Catálogo con fotos y precios",
          "El pedido te llega por WhatsApp",
          "Confirmas y cobras como ya lo haces",
        ],
      },
      {
        id: "reservas",
        icon: "calendar",
        title: "Sistema de reservas",
        tagline:
          "Tus clientes eligen el servicio y la hora por internet, y todo queda en un calendario: sin mensajes de ida y vuelta para confirmar cada turno. Incluye página de servicios y precios.",
        badge: "desde $1,000",
        deliverables: [
          "El cliente elige servicio y hora",
          "Todo queda en un calendario",
          "Página de servicios y precios incluida",
        ],
      },
      {
        id: "sistema-medida",
        icon: "cogs",
        title: "Sistema a medida",
        tagline:
          "Cuando lo que hay no alcanza: construyo el sistema para tu proceso (ventas, inventario, caja, clientes), con tus reglas.",
        badge: "desde $1,000",
        deliverables: [
          "Hecho para tu proceso",
          "Ventas, inventario, caja y clientes",
          "Con tus reglas",
        ],
      },
      {
        id: "agente-ia",
        icon: "robot",
        title: "Agente de IA para WhatsApp",
        tagline:
          "Un agente que atiende a tus clientes por WhatsApp 24/7: responde preguntas, toma reservas y pedidos, y te pasa solo lo que necesita una persona.",
        badge: "desde $800",
        deliverables: [
          "Atiende por WhatsApp 24/7",
          "Responde preguntas, toma reservas y pedidos",
          "Te pasa solo lo que necesita una persona",
        ],
      },
    ],
    cta: "Escríbeme por WhatsApp",
    terms:
      "Cotización gratuita · Propuesta escrita con alcance y precio · 50% al inicio, 50% al entregar",
  },
  techServices: {
    title: "Para equipos de tecnología",
    subtitle:
      "Además de los servicios para negocios, trabajo con equipos que necesitan plataforma e infraestructura. Precio a cotizar en cada caso.",
    items: [
      {
        id: "mvp-express",
        icon: "rocket",
        title: "MVP Express",
        tagline: "Aplicación web lista para producción en 30 días.",
        badge: "30 días",
        deliverables: [
          "Frontend: React / Next.js o Angular",
          "Backend: NestJS / Express o Django",
          "Datos: PostgreSQL + Prisma o Supabase",
          "Integraciones de autenticación, pagos y correo",
          "CI/CD + despliegue en producción",
          "Documentación de entrega + recorrido con el equipo",
        ],
      },
      {
        id: "platform-setup",
        icon: "kubernetes",
        title: "Platform Setup",
        tagline: "Plataforma Kubernetes + GitOps, en vivo en 2 semanas.",
        badge: "2 semanas",
        deliverables: [
          "Clúster Kubernetes listo para producción (k3s / Kubernetes)",
          "Entrega GitOps con ArgoCD",
          "Pipelines CI/CD (GitHub Actions / GitLab CI)",
          "Observabilidad: Prometheus, Grafana, Loki, AlertManager",
          "Infraestructura como código con Terraform y Ansible",
          "Documentación de entrega + recorrido con el equipo",
        ],
      },
      {
        id: "devops-rescue",
        icon: "lifering",
        title: "DevOps Rescue",
        tagline: "Auditoría y recuperación de tus pipelines e infraestructura.",
        badge: "1–2 semanas",
        deliverables: [
          "Auditoría completa de CI/CD, IaC y clústeres",
          "Plan de corrección priorizado",
          "Primero los quick wins",
          "Recomendaciones de costo y confiabilidad",
          "Escaneo de seguridad de contenedores (Trivy) integrado",
          "Informe final + entrega",
        ],
      },
    ],
    cta: "Iniciar un proyecto",
    terms:
      "Remoto primero · Zonas horarias LATAM / UE · Por contrato · Pago en stablecoins USD",
  },
  process: {
    title: "Cómo trabajamos",
    subtitle: "Cuatro pasos, sin sorpresas.",
    steps: [
      {
        title: "Me escribes por WhatsApp",
        text: "Me cuentas qué necesitas y cómo trabajas hoy.",
      },
      {
        title: "Propuesta escrita",
        text: "Te mando una propuesta escrita: alcance, precio exacto y plazo. Sin compromiso.",
      },
      {
        title: "Empezamos con el 50%",
        text: "Construyo el sistema y te voy mostrando avances.",
      },
      {
        title: "Entrega y el otro 50%",
        text: "Te entrego funcionando, con una explicación de cómo usarlo. Soporte y cambios después, por acuerdo.",
      },
    ],
  },
  faq: {
    title: "Preguntas frecuentes",
    subtitle: "Las respuestas cortas, antes de que preguntes.",
    items: [
      {
        question: "¿Cuánto cuesta en total?",
        answer:
          "Depende del alcance. Los precios de arriba son el punto de partida; la propuesta escrita te da el precio exacto antes de empezar, sin sorpresas. El agente de IA para WhatsApp además lleva $30/mes de mantenimiento después de la puesta en marcha, por actualizaciones y supervisión; los cargos de WhatsApp por mensaje los cobra Meta al costo.",
      },
      {
        question: "¿Cómo se paga?",
        answer:
          "50% al inicio y 50% al entregar, en USD. Acepto varias vías de pago; lo acordamos por escrito en la propuesta.",
      },
      {
        question: "¿Trabajas solo remoto?",
        answer: "Sí, 100% remoto, para Latinoamérica y Europa, incluida Cuba.",
      },
      {
        question: "¿En cuánto tiempo está listo?",
        answer:
          "Cada propuesta lleva su plazo por escrito. Como referencia: una app completa (MVP Express) en 30 días, una plataforma (Platform Setup) en 2 semanas.",
      },
      {
        question: "¿Qué necesitas de mí para empezar?",
        answer:
          "Una conversación por WhatsApp sobre cómo trabajas hoy y qué quieres lograr. Con eso te preparo la propuesta.",
      },
      {
        question: "¿Y después de entregar, qué pasa si algo falla o quiero un cambio?",
        answer:
          "Soporte y cambios por acuerdo, por escrito. Nada queda sin cobertura: si algo es un error mío, lo corrijo.",
      },
      {
        question: "¿Qué pasa si mi negocio no tiene internet estable?",
        answer:
          "Los sistemas se construyen para seguir trabajando aunque la conexión falle, y los datos se respaldan. Es parte del diseño, no un extra.",
      },
    ],
  },
  projects: {
    title: "Proyectos",
    fullstackTitle: "Desarrollo Fullstack",
    fullstackSubtitle:
      "Aplicaciones web en producción, de la base de datos a la interfaz desplegada.",
    devopsTitle: "DevOps e ingeniería de plataforma",
    devopsSubtitle:
      "Plataformas Kubernetes, entrega GitOps e infraestructura como código.",
    viewProject: "Ver proyecto",
    stackNote:
      "Construido con React, Next.js, Angular, NestJS, Django, PostgreSQL, Prisma, Supabase y Kubernetes — todo lo que construyo, también lo despliego y lo opero.",
    items: {
      "Tasks App — Platform Engineering": {
        title: "Tasks App — Platform Engineering",
        description:
          "Demo integral de ingeniería de plataforma: un git push dispara GitHub Actions (lint, pruebas, escaneo Trivy) → Harbor → ArgoCD app-of-apps despliega la plataforma desde git. Tráfico con Kubernetes Gateway API y TLS automatizado, secretos con Sealed Secrets, políticas con Kyverno, observabilidad con OpenObserve, respaldos con Velero. Cada capa declarada en git y reproducible en cualquier clúster k3s.",
      },
      "TaskApp GitOps Kubernetes Platform": {
        title: "TaskApp GitOps Kubernetes Platform",
        description:
          "Este proyecto demuestra un flujo GitOps orientado a producción para desplegar una aplicación full-stack en Kubernetes. El objetivo principal no es la aplicación Todo en sí, sino mostrar prácticas DevOps modernas: GitOps, empaquetado Helm, registros privados de contenedores, despliegues automatizados con ArgoCD y gestión del ciclo de vida de aplicaciones basada en Kubernetes.",
      },
      "Terraform Docker Platform": {
        title: "Terraform Docker Platform",
        description:
          "Este proyecto demuestra cómo diseñar y aprovisionar una solución modular de Infraestructura como Código (IaC) con Terraform y el proveedor Docker. La infraestructura despliega una aplicación de tres capas compuesta por una base de datos PostgreSQL, una API REST Django y un frontend React, siguiendo las mejores prácticas de Terraform en modularidad y reutilización.",
      },
      "Terraform Kubernetes Platform": {
        title: "Terraform Kubernetes Platform",
        description:
          "Este proyecto demuestra cómo aprovisionar una aplicación completa en Kubernetes con el proveedor Kubernetes de Terraform, siguiendo las mejores prácticas de Infraestructura como Código. La infraestructura está organizada en módulos reutilizables y despliega un entorno de tipo productivo con PostgreSQL, Django REST Framework, React, ConfigMaps, Secrets, StatefulSets, Deployments, Services e Ingress.",
      },
      "CajaYa — Mipyme Management SaaS": {
        title: "CajaYa — Mipyme Management SaaS",
        description:
          "Producto SaaS en vivo que fundé y construí de principio a fin: plataforma de gestión para pequeños negocios cubanos (mipymes) que cubre facturación, inventario y control diario de caja en una sola PWA instalable. Arquitectura multi-tenant sobre Supabase (PostgreSQL, Auth, Row Level Security) con RPCs transaccionales de Postgres para la numeración consecutiva de facturas y el descuento atómico de inventario, invitaciones de miembros por correo, lectura de datos sin conexión con caché persistente en el cliente, facturas PDF compartidas por WhatsApp y una suite completa de pruebas (pruebas unitarias Vitest + un E2E Playwright del flujo diario completo). Desplegado en producción en Vercel.",
      },
      "Buildora — Full-Stack Scaffold Generator": {
        title: "Buildora — Full-Stack Scaffold Generator",
        description:
          "Generador de andamiaje open source y gratis (MIT) que construí a partir de tres aplicaciones reales y funcionando: un comando genera un proyecto full-stack completo con auth, base de datos, Docker y CI funcionando desde el primer commit. Tres caminos — Next.js + NestJS + Prisma, React + Vite + Django y Angular + FastAPI — todos con PostgreSQL + Redis. Publicado en npm como buildora (npx buildora generate mi-app), con la plantilla extraída de las apps de referencia y verificada con tests y CI en verde.",
      },
      "Ecommerce Full-Stack Platform": {
        title: "Ecommerce Full-Stack Platform",
        description:
          "Plataforma ecommerce completa con un frontend Angular 18 estilizado con TailwindCSS y un backend NestJS sobre PostgreSQL y Prisma. Incluye autenticación JWT, integración de pagos con PayPal, correos de confirmación de pedidos, interfaz en modo claro/oscuro y despliegue en producción en Vercel.",
      },
      "REIKO'S LLC — Logistics Landing": {
        title: "REIKO'S LLC — Logistics Landing",
        description:
          "Landing corporativa para una empresa de logística construida con Angular 18 y TailwindCSS. Incluye páginas de servicios de Transporte, Almacenamiento y Logística, un carrusel animado de imágenes, un formulario de solicitud de cotización funcional con Formspree e imágenes WebP optimizadas (5.2 MB → 364 KB) para una carga rápida. Desplegada en producción en Vercel.",
      },
      "WelcomeHome — Real Estate Platform": {
        title: "WelcomeHome — Real Estate Platform",
        description:
          "Proyecto para cliente: plataforma inmobiliaria para Welcome Home Inmobiliaria, una empresa cubana de bienes raíces. Listados públicos de propiedades, páginas de detalle y un panel de administración para gestionar las propiedades publicadas. Frontend React + Vite + TypeScript con backend Supabase (PostgreSQL + Auth + Storage), desplegado en Vercel.",
      },
    },
  },
  testimonials: {
    title: "Testimonios",
    subtitleBefore: "Lo que dicen los clientes de trabajar con",
    subtitleAfter: ".",
    contexts: {
      "welcome-home": "Plataforma inmobiliaria · Cuba",
      "reikos-llc": "Sitio web de empresa logística · EE. UU.",
    },
  },
  contact: {
    title: "Contáctame",
    description:
      "¿Tienes un negocio que todavía trabaja a mano? Escríbeme y lo vemos.",
    nameLabel: "Nombre",
    namePlaceholder: "Tu nombre",
    emailLabel: "Correo",
    emailPlaceholder: "tu@correo.com",
    messageLabel: "Mensaje",
    messagePlaceholder: "Escribe tu mensaje aquí...",
    send: "ENVIAR MENSAJE",
    whatsappText: "Hola Yoan, vi tu portfolio y quiero contactarte.",
  },
  footer: {
    role: "Ingeniero Fullstack • Ingeniero DevOps • Ingeniero de Plataforma",
    builtWith: "Hecho con",
    copyright: "Todos los derechos reservados.",
  },
};

export const dictionary: Record<Lang, Dict> = { en, es };
