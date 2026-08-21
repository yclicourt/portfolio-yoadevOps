import { flexStyleSkills, h2Style } from "@/constants/styles";
import { CardSkillsPlatform } from "./common/skills/CardSkillPlatform";
import { CardSkillsCICD } from "./common/skills/CardSkillsCICD";
import { CardSkillsContainerRegistry } from "./common/skills/CardSkillsContainerRegistry";
import { CardSkillsGitOps } from "./common/skills/CardSkillsGitOps";
import { CardSkillsInfra } from "./common/skills/CardSkillsInfra";
import { CardSkillsOS } from "./common/skills/CardSkillsOS";
import { CardSkillsObservability } from "./common/skills/CardSkillsObservability";
import { CardSkillsVirtualization } from "./common/skills/CardSkillsVirtualization";

export const Skills = () => {
  return (
    <div className="max-w-7xl mx-auto m-20 py-4">
      <h1 className="text-white font-bold text-4xl text-center uppercase tracking-wider">
        SKILLS
      </h1>
      <section>
        <h2 className={h2Style}>Infraestructure & Virtualization</h2>
        <div className={flexStyleSkills}>
          <CardSkillsVirtualization />
        </div>
      </section>
      <section>
        <h2 className={h2Style}>Cloud & Platform</h2>
        <div className={flexStyleSkills}>
          <CardSkillsPlatform />
        </div>
      </section>
      <section>
        <h2 className={h2Style}>GitOps</h2>
        <div className={flexStyleSkills}>
          <CardSkillsGitOps />
        </div>
      </section>
      <section>
        <h2 className={h2Style}>Infraestructure as Code & Automation</h2>
        <div className={flexStyleSkills}>
          <CardSkillsInfra />
        </div>
      </section>
      <section>
        <h2 className={h2Style}>CI/CD & Automation</h2>
        <div className={flexStyleSkills}>
          <CardSkillsCICD />
        </div>
      </section>
      <section>
        <h2 className={h2Style}>Observability</h2>
        <div className={flexStyleSkills}>
          <CardSkillsObservability />
        </div>
      </section>
      <section>
        <h2 className={h2Style}>Container Registry & Security</h2>
        <div className={flexStyleSkills}>
          <CardSkillsContainerRegistry />
        </div>
      </section>
      <section>
        <h2 className={h2Style}>Operating Systems</h2>
        <div className={flexStyleSkills}>
          <CardSkillsOS />
        </div>
      </section>
    </div>
  );
};
