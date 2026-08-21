import { SiVmware, SiProxmox } from "react-icons/si";
import { SkillGeneralCard } from "../SkillGeneralCard";
import type { SkillType } from "@/types/skill";
const skills: SkillType[] = [
  {
    title: "Vmware",
    icon: <SiVmware className="w-10 h-10 text-cyan-400 object-contain" />,
  },
  {
    title: "Proxmox",
    icon: <SiProxmox className="w-10 h-10 text-cyan-400 object-contain" />,
  },
];

export const CardSkillsVirtualization = () => {
  return skills.map((skill) => {
    return <SkillGeneralCard key={skill.title} icon={skill.icon} title={skill.title} />;
  });
};
