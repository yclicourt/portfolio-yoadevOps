import { CardProjects } from "./common/projects/CardProjects";

export const Projects = () => {
  const flexStyle = "grid grid-cols-1 gap-6 p-10";
  return (
    <div className="max-w-7xl mx-auto mt-20 py-4">
      <h1
        className="text-white font-bold text-4xl text-center uppercase tracking-wider"
      >
        Projects
      </h1>
      <section>
        <div className={flexStyle}>
          <CardProjects />
        </div>
      </section>
    </div>
  );
};
