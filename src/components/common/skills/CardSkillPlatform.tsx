import {
  SiKubernetes,
  SiDocker,
  SiPodman,
  SiHelm,
  SiKaniko,
} from "react-icons/si";
import { SkillGeneralCard } from "../SkillGeneralCard";
import type { SkillType } from "@/types/skill";
const skills: SkillType[] = [
  {
    title: "Kubernetes",
    icon: <SiKubernetes className="w-10 h-10 text-cyan-400 object-contain" />,
  },
  {
    title: "Docker",
    icon: <SiDocker className="w-10 h-10 text-cyan-400 object-contain" />,
  },
  {
    title: "Podman",
    icon: <SiPodman className="w-10 h-10 text-cyan-400 object-contain" />,
  },
  {
    title: "Helm",
    icon: <SiHelm className="w-10 h-10 text-cyan-400 object-contain" />,
  },
  {
    title: "Kaniko",
    icon: <SiKaniko className="w-10 h-10 text-cyan-400 object-contain" />,
  },
];

export const CardSkillsPlatform = () => {
  return skills.map((skill) => {
    return <SkillGeneralCard key={skill.title} icon={skill.icon} title={skill.title} />;
  });
};
