export const projects = [
  {
    title: "TaskApp GitOps Kubernetes Platform",
    icon: "/images/projects/architecture_proy_gitOps_platform.png",
    href: "github.com/yclicourt/deploy-gitOps-app",
    description:
      "This project demonstrates a production-oriented GitOps workflow for deploying a full-stack application on Kubernetes. The primary goal is not the Todo application itself, but showcasing modern DevOps practices including GitOps, Helm packaging, private container registries, automated deployments with ArgoCD, and Kubernetes-based application lifecycle management.",
    tools: ["Kubernetes", "ArgoCD", "Gitlab CI/CD", "Harbor", "Docker"],
  },
  {
    title: "Terraform Docker Platform",
    icon: "/images/projects/backend-1.png",
    href: "github.com/yclicourt/terraform-modules-task-app-fullstack",
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
    icon: "/images/projects/app-2.png",
    href: "github.com/yclicourt/terraform-modules-kubernetes-tasks-app-fullstack",
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
    title: "TaskApp DevOps Platform",
    icon: "/images/projects/app-2.png",
    href: "github.com/yclicourt/tasks-app-platform-devops",
    description: "Coming Soon...",
    tools: [
      "Terraform",
      "Kubernetes Provider",
      "Kubernetes",
      "PostgreSQL",
      "Django Rest Framework",
      "React + Vite + TailwindCSS",
      "NGINX Ingress",
      "GitHub Container Registry / Harbor",
      "Github Actions",
      "Trivy",
      "Helm",
      "ArgoCD"
    ],
  },
];