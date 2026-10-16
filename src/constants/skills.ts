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
    skills: [
      { title: "Prometheus", icon: "prometheus" },
      { title: "Grafana", icon: "grafana" },
    ],
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
