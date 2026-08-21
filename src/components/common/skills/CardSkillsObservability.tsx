import { SiPrometheus, SiGrafana } from "react-icons/si";
import { SkillGeneralCard } from "../SkillGeneralCard";
import type { SkillType } from "@/types/skill";
const skills: SkillType[] = [
  {
    title: "Prometheus",
    icon: <SiPrometheus className="w-10 h-10 text-cyan-400 object-contain" />,
  },
  {
    title: "Grafana",
    icon: <SiGrafana className="w-10 h-10 text-cyan-400 object-contain" />,
  },
];

export const CardSkillsObservability = () => {
  return skills.map((skill) => {
    return <SkillGeneralCard key={skill.title} icon={skill.icon} title={skill.title}/>;
  });
};
