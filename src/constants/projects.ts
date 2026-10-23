// Orden de las tarjetas: DevOps abre con la plataforma tasks-app y
// Fullstack con CajaYa (el producto SaaS en producción).
export interface Project {
  title: string;
  category: "devops" | "fullstack";
  icon: string;
  href: string;
  description: string;
  tools: string[];
}

export const projects: Project[] = [
  {
    title: "Tasks App \u2014 Platform Engineering",
    category: "devops",
    icon: "https://raw.githubusercontent.com/yclicourt/tasks-app-platform-devops/main/docs/architecture.svg",
    href: "https://github.com/yclicourt/tasks-app-platform-devops",
    description:
      "End-to-end platform engineering demo: git push triggers GitHub Actions (lint, test, Trivy scan) \u2192 Harbor \u2192 ArgoCD app-of-apps deploys the platform from git. Traffic via Kubernetes Gateway API with automated TLS, secrets via Sealed Secrets, policies via Kyverno, observability via OpenObserve, backups via Velero. Every layer declared in git and reproducible on any k3s cluster.",
    tools: [
      "Kubernetes",
      "ArgoCD",
      "Gateway API",
      "GitHub Actions",
      "Terraform",
      "Helm",
      "Sealed Secrets",
      "cert-manager",
      "Kyverno",
      "OpenObserve",
      "Velero",
      "Harbor",
    ],
  },
  {
    title: "TaskApp GitOps Kubernetes Platform",
    category: "devops",
    icon: "/images/projects/architecture_proy_gitOps_platform.png",
    href: "https://github.com/yclicourt/deploy-gitOps-app",
    description:
      "This project demonstrates a production-oriented GitOps workflow for deploying a full-stack application on Kubernetes. The primary goal is not the Todo application itself, but showcasing modern DevOps practices including GitOps, Helm packaging, private container registries, automated deployments with ArgoCD, and Kubernetes-based application lifecycle management.",
    tools: ["Kubernetes", "ArgoCD", "Gitlab CI/CD", "Harbor", "Docker"],
  },
  {
    title: "Terraform Docker Platform",
    category: "devops",
    icon: "/images/projects/backend-1.png",
    href: "https://github.com/yclicourt/terraform-modules-task-app-fullstack",
    description:
      "This project demonstrates how to design and provision a modular Infrastructure as Code (IaC) solution using Terraform and the Docker provider. The infrastructure deploys a complete three-tier application composed of a PostgreSQL database, a Django REST API backend, and a React frontend while following Terraform best practices for modularity and reusability.",
    tools: [
      "Terraform",
      "Docker Provider",
      "Docker",
      "PostgreSQL",
      "Django Rest Framework",
      "React + Vite + TailwindCSS",
      "GitHub Container Registry / Harbor",
    ],
  },
  {
    title: "Terraform Kubernetes Platform",
    category: "devops",
    icon: "/images/projects/app-2.png",
    href: "https://github.com/yclicourt/terraform-modules-kubernetes-tasks-app-fullstack",
    description:
      "This project demonstrates how to provision a complete Kubernetes application using the Terraform Kubernetes Provider following Infrastructure as Code best practices. The infrastructure is organized into reusable modules and deploys a production-like environment including PostgreSQL, Django REST Framework, React, ConfigMaps, Secrets, StatefulSets, Deployments, Services and Ingress.",
    tools: [
      "Terraform",
      "Kubernetes Provider",
      "Kubernetes",
      "PostgreSQL",
      "Django Rest Framework",
      "React + Vite + TailwindCSS",
      "NGINX Ingress",
      "GitHub Container Registry / Harbor",
    ],
  },
  {
    title: "CajaYa — Mipyme Management SaaS",
    category: "fullstack",
    icon: "/images/projects/cajaya.svg",
    href: "https://caja-ya-saas.vercel.app/",
    description:
      "Live SaaS product I founded and built end to end: management platform for Cuban small businesses (mipymes) covering invoicing, inventory and daily cash-register control in a single installable PWA. Multi-tenant architecture on Supabase (PostgreSQL, Auth, Row Level Security) with transactional Postgres RPCs for consecutive invoice numbering and atomic stock decrement, member invitations by email, offline data reading with a persisted client cache, PDF invoices shared via WhatsApp, and a full test suite (Vitest unit tests + a Playwright E2E of the complete daily flow). Deployed in production on Vercel.",
    tools: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "TailwindCSS",
      "TanStack Query",
      "PWA",
      "Vercel",
    ],
  },
  {
    title: "Ecommerce Full-Stack Platform",
    category: "fullstack",
    icon: "https://raw.githubusercontent.com/yclicourt/ecommerce-frontend/main/public/web_modo_light.png",
    href: "https://github.com/yclicourt/ecommerce-frontend",
    description:
      "Complete ecommerce platform with an Angular 18 frontend styled with TailwindCSS and a NestJS backend powered by PostgreSQL and Prisma. Includes JWT authentication, PayPal payment integration, order confirmation emails, light/dark mode UI, and is deployed to production on Vercel.",
    tools: [
      "Angular 18",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "PayPal API",
      "JWT",
      "Vercel",
    ],
  },
  {
    title: "REIKO'S LLC \u2014 Logistics Landing",
    category: "fullstack",
    icon: "https://reikosllc.vercel.app/img1.webp",
    href: "https://reikosllc.vercel.app/",
    description:
      "Corporate landing page for a logistics company built with Angular 18 and TailwindCSS. Includes Transport, Storage and Logistics service pages, an animated image carousel, a working quote-request contact form powered by Formspree, and optimized WebP imagery (5.2 MB \u2192 364 KB) for fast loading. Deployed to production on Vercel.",
    tools: [
      "Angular 18",
      "TailwindCSS",
      "Swiper",
      "Formspree",
      "Vercel",
    ],
  },
  {
    title: "WelcomeHome \u2014 Real Estate Platform",
    category: "fullstack",
    icon: "/images/projects/welcomehome.svg",
    href: "https://welcome-home-inmobiliary.vercel.app/",
    description:
      "Client project: real estate platform for Welcome Home Inmobiliaria, a Cuban real estate company. Public property listings, detail pages and an admin panel to manage published properties. React + Vite + TypeScript frontend with Supabase backend (PostgreSQL + Auth + Storage), deployed on Vercel.",
    tools: ["React", "Vite", "TypeScript", "Supabase", "Vercel"],
  },
];
