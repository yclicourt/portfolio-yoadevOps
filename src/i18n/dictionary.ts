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
  timeline: string;
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
    roles: string[];
    tagline: string;
    viewWork: string;
    downloadCv: string;
    profileAlt: string;
  };
  about: { title: string; text: string };
  skills: {
    title: string;
    subtitle: string;
    categories: Record<string, string>;
  };
  services: {
    title: string;
    subtitleBefore: string;
    subtitleAfter: string;
    items: ServiceContent[];
    cta: string;
    terms: string;
  };
  projects: {
    title: string;
    fullstackTitle: string;
    fullstackSubtitle: string;
    devopsTitle: string;
    devopsSubtitle: string;
    viewProject: string;
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
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
  ],
  contactCta: "Contact Me 🚀",
  toggleMenu: "Toggle Menu",
  hero: {
    roles: [
      "FULLSTACK ENGINEER",
      "FRONTEND DEVELOPER",
      "BACKEND DEVELOPER",
      "DEVOPS ENGINEER",
      "PLATFORM ENGINEER",
    ],
    tagline:
      "I build the systems small businesses run on — and they keep working when the connection doesn't.",
    viewWork: "VIEW MY WORK",
    downloadCv: "DOWNLOAD CV",
    profileAlt: "Profile Header",
  },
  about: {
    title: "About Me",
    text: "Fullstack Developer with 6+ years of experience building the systems small businesses run on: invoicing, inventory, cash register, and customer management — designed to keep working when the connection doesn't. Founder and lead developer of CajaYa, a management SaaS for Cuban mipymes live in production, and builder of ecommerce platforms and client websites for real-estate and logistics businesses. I work across React, Next.js, and Angular frontends; NestJS, Express, and Django backends; and PostgreSQL with Prisma and Supabase. My edge: a Senior Infrastructure Engineer background (enterprise environments, 100+ VMs, Kubernetes, GitOps, CI/CD, and observability) — so everything I build, I also deploy, back up, and operate in production.",
  },
  skills: {
    title: "Skills",
    subtitle: "The toolkit I use to build, ship, and operate web applications.",
    categories: {
      frontend: "Frontend Development",
      backend: "Backend Development",
      data: "Databases & Data Layer",
      testing: "Testing & Tools",
      containers: "Containers & Orchestration",
      iac: "Infrastructure as Code",
      cicd: "CI/CD & Delivery",
      gitops: "GitOps",
      observability: "Observability & Monitoring",
      registry: "Container Registry & Security",
      virtualization: "Infrastructure & Virtualization",
      os: "Operating Systems",
    },
  },
  services: {
    title: "Services",
    subtitleBefore: "Productized consulting from",
    subtitleAfter: "— fixed scope, fixed timeline, no surprises.",
    items: [
      {
        id: "mvp-express",
        icon: "rocket",
        title: "MVP Express",
        tagline: "Production-ready web app in 30 days.",
        timeline: "30 days",
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
        timeline: "2 weeks",
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
        timeline: "1–2 weeks",
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
  projects: {
    title: "Projects",
    fullstackTitle: "Fullstack Development",
    fullstackSubtitle: "Production web apps, from database to deployed interface.",
    devopsTitle: "DevOps & Platform Engineering",
    devopsSubtitle: "Kubernetes platforms, GitOps delivery and infrastructure as code.",
    viewProject: "View Project",
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
      "Do you have a proposal, a project in mind or want to talk about infrastructure and DevOps? Write to me and I will contact you as soon as possible",
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
    { name: "Habilidades", href: "#skills" },
    { name: "Servicios", href: "#services" },
    { name: "Proyectos", href: "#projects" },
  ],
  contactCta: "Contáctame 🚀",
  toggleMenu: "Alternar menú",
  hero: {
    roles: [
      "INGENIERO FULLSTACK",
      "DESARROLLADOR FRONTEND",
      "DESARROLLADOR BACKEND",
      "INGENIERO DEVOPS",
      "INGENIERO DE PLATAFORMA",
    ],
    tagline:
      "Construyo los sistemas con los que operan los pequeños negocios — y siguen funcionando aunque se caiga la conexión.",
    viewWork: "VER MI TRABAJO",
    downloadCv: "DESCARGAR CV",
    profileAlt: "Foto de perfil",
  },
  about: {
    title: "Sobre mí",
    text: "Desarrollador Fullstack con más de 6 años de experiencia construyendo los sistemas con los que operan los pequeños negocios: facturación, inventario, caja y gestión de clientes — diseñados para seguir funcionando aunque se caiga la conexión. Fundador y desarrollador principal de CajaYa, un SaaS de gestión para mipymes cubanas en producción, y creador de plataformas ecommerce y sitios web para clientes de bienes raíces y logística. Trabajo con React, Next.js y Angular en el frontend; NestJS, Express y Django en el backend; y PostgreSQL con Prisma y Supabase. Mi ventaja: una trayectoria como Ingeniero Senior de Infraestructura (entornos empresariales, más de 100 VMs, Kubernetes, GitOps, CI/CD y observabilidad) — así que todo lo que construyo, también lo despliego, lo respaldo y lo opero en producción.",
  },
  skills: {
    title: "Habilidades",
    subtitle: "Las herramientas que uso para construir, lanzar y operar aplicaciones web.",
    categories: {
      frontend: "Desarrollo Frontend",
      backend: "Desarrollo Backend",
      data: "Bases de datos y capa de datos",
      testing: "Pruebas y herramientas",
      containers: "Contenedores y orquestación",
      iac: "Infraestructura como código",
      cicd: "CI/CD y entregas",
      gitops: "GitOps",
      observability: "Observabilidad y monitoreo",
      registry: "Registro de contenedores y seguridad",
      virtualization: "Infraestructura y virtualización",
      os: "Sistemas operativos",
    },
  },
  services: {
    title: "Servicios",
    subtitleBefore: "Consultoría productizada de",
    subtitleAfter: "— alcance fijo, plazo fijo, sin sorpresas.",
    items: [
      {
        id: "mvp-express",
        icon: "rocket",
        title: "MVP Express",
        tagline: "Aplicación web lista para producción en 30 días.",
        timeline: "30 días",
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
        timeline: "2 semanas",
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
        timeline: "1–2 semanas",
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
  projects: {
    title: "Proyectos",
    fullstackTitle: "Desarrollo Fullstack",
    fullstackSubtitle:
      "Aplicaciones web en producción, de la base de datos a la interfaz desplegada.",
    devopsTitle: "DevOps e ingeniería de plataforma",
    devopsSubtitle:
      "Plataformas Kubernetes, entrega GitOps e infraestructura como código.",
    viewProject: "Ver proyecto",
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
      "¿Tienes una propuesta, un proyecto en mente o quieres conversar sobre infraestructura y DevOps? Escríbeme y te contactaré lo antes posible.",
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
