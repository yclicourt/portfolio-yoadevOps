import { SiLinux } from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { SkillGeneralCard } from "../SkillGeneralCard";
import type { SkillType } from "@/types/skill";

const skills: SkillType[] = [
  {
    title: "Linux",
    icon: <SiLinux className="w-10 h-10 text-cyan-400 object-contain" />,
  },
  {
    title: "Windows Server",
    icon: <FaWindows className="w-10 h-10 text-cyan-400 object-contain" />,
  },
];

export const CardSkillsOS = () => {
  return skills.map((skill) => {
    return <SkillGeneralCard key={skill.title} icon={skill.icon} title={skill.title}/>;
  });
};
