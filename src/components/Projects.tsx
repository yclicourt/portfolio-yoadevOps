import { flexStyleProjects } from "@/constants/styles";
import { CardProjects } from "./common/projects/CardProjects";

export const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20 py-4">
      <h1 className="text-white font-bold text-4xl text-center uppercase tracking-wider">
        Projects
      </h1>

      <h2 className="text-white font-bold text-2xl uppercase tracking-wider mt-14 mb-2">
        DevOps &amp; Platform Engineering
      </h2>
      <p className="text-slate-400 text-sm mb-6">
        Kubernetes platforms, GitOps delivery and infrastructure as code.
      </p>
      <section>
        <div className={flexStyleProjects}>
          <CardProjects category="devops" />
        </div>
      </section>

      <h2 className="text-white font-bold text-2xl uppercase tracking-wider mt-20 mb-2">
        Fullstack Development
      </h2>
      <p className="text-slate-400 text-sm mb-6">
        Production web apps, from database to deployed interface.
      </p>
      <section>
        <div className={flexStyleProjects}>
          <CardProjects category="fullstack" />
        </div>
      </section>
    </div>
  );
};
