import { flexStyleProjects } from "@/constants/styles";
import { CardProjects } from "./common/projects/CardProjects";

export const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20 py-4">
      <h1 className="text-white font-bold text-4xl text-center uppercase tracking-wider">
        Projects
      </h1>
      <section>
        <div className={flexStyleProjects}>
          <CardProjects />
        </div>
      </section>
    </div>
  );
};
