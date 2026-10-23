export interface SkillItem {
  title: string;
  icon: string;
}

export interface SkillCategory {
  id: string;
  icon: string;
  title: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    icon: "code",
    title: "Frontend Development",
    skills: [
      { title: "React", icon: "react" },
      { title: "Next.js", icon: "nextjs" },
      { title: "Angular", icon: "angular" },
      { title: "TypeScript", icon: "typescript" },
      { title: "JavaScript", icon: "javascript" },
      { title: "TailwindCSS", icon: "tailwindcss" },
      { title: "Vite", icon: "vite" },
      { title: "HTML5", icon: "html5" },
      { title: "CSS3", icon: "css3" },
    ],
  },
  {
    id: "backend",
    icon: "layergroup",
    title: "Backend Development",
    skills: [
      { title: "Node.js", icon: "nodejs" },
      { title: "NestJS", icon: "nestjs" },
      { title: "Express", icon: "express" },
      { title: "Django", icon: "django" },
      { title: "Python", icon: "python" },
      { title: "REST APIs", icon: "restapi" },
    ],
  },
  {
    id: "data",
    icon: "database",
    title: "Databases & Data Layer",
    skills: [
      { title: "PostgreSQL", icon: "postgresql" },
      { title: "Prisma ORM", icon: "prisma" },
      { title: "Supabase", icon: "supabase" },
      { title: "MariaDB", icon: "mariadb" },
    ],
  },
  {
    id: "testing",
    icon: "vial",
    title: "Testing & Tools",
    skills: [
      { title: "Jest", icon: "jest" },
      { title: "Vitest", icon: "vitest" },
      { title: "Playwright", icon: "playwright" },
      { title: "Git", icon: "git" },
      { title: "GitHub", icon: "github" },
    ],
  },
  {
    id: "containers",
    icon: "kubernetes",
    title: "Containers & Orchestration",
    skills: [
      { title: "Kubernetes", icon: "kubernetes" },
      { title: "Docker", icon: "docker" },
      { title: "Podman", icon: "podman" },
      { title: "Helm", icon: "helm" },
      { title: "Kaniko", icon: "kaniko" },
    ],
  },
  {
    id: "iac",
    icon: "filecode",
    title: "Infrastructure as Code",
    skills: [
      { title: "Terraform", icon: "terraform" },
      { title: "Ansible", icon: "ansible" },
    ],
  },
  {
    id: "cicd",
    icon: "cogs",
    title: "CI/CD & Delivery",
    skills: [
      { title: "GitHub Actions", icon: "githubactions" },
      { title: "GitLab CI/CD", icon: "gitlab" },
    ],
  },
  {
    id: "gitops",
    icon: "codebranch",
    title: "GitOps",
    skills: [{ title: "ArgoCD", icon: "argo" }],
  },
  {
    id: "observability",
    icon: "chartline",
    title: "Observability & Monitoring",
    skills: [{ title: "OpenObserve", icon: "openobserve" }],
  },
  {
    id: "registry",
    icon: "shield",
    title: "Container Registry & Security",
    skills: [
      { title: "Harbor", icon: "harbor" },
      { title: "Docker Hub", icon: "docker" },
    ],
  },
  {
    id: "virtualization",
    icon: "server",
    title: "Infrastructure & Virtualization",
    skills: [
      { title: "VMware", icon: "vmware" },
      { title: "Proxmox", icon: "proxmox" },
    ],
  },
  {
    id: "os",
    icon: "terminal",
    title: "Operating Systems",
    skills: [
      { title: "Linux", icon: "linux" },
      { title: "Windows Server", icon: "windows" },
    ],
  },
];

