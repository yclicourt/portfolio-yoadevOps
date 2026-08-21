import { SiGithubactions, SiGitlab } from "react-icons/si";
import { SkillGeneralCard } from "../SkillGeneralCard";
import type { SkillType } from "@/types/skill";
const skills: SkillType[] = [
  {
    title: "GitHub Actions",
    icon: (
      <SiGithubactions className="w-10 h-10 text-cyan-400 object-contain" />
    ),
  },
  {
    title: "Gitlab CI/CD",
    icon: <SiGitlab className="w-10 h-10 text-cyan-400 object-contain" />,
  },
];

export const CardSkillsCICD = () => {
  return skills.map((skill) => {
    return <SkillGeneralCard key={skill.title} icon={skill.icon} title={skill.title} />;
  });
};
