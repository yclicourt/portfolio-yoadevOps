import { projects } from "@/constants/projects";

export const CardProjects = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <article
          key={project.title}
          className="
            group
            flex
            h-full
            flex-col
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-linear-to-br
            from-slate-800
            via-slate-900
            to-[#030914]
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-cyan-500/40
            hover:shadow-xl
            hover:shadow-cyan-500/10
          "
        >
          {/* Project image */}
          <div className="overflow-hidden">
            <img
              src={project.icon}
              alt={project.title}
              className="
                aspect-video
                w-full
                object-cover
                transition-transform
                duration-500
                group-hover:scale-105
              "
            />
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col p-6">
            <h4
              className="
                text-xl
                font-semibold
                tracking-wide
                text-white
              "
            >
              {project.title}
            </h4>

            <p
              className="
                mt-3
                flex-1
                text-sm
                leading-6
                text-slate-400
              "
            >
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="
                    rounded-full
                    border
                    border-cyan-500/20
                    bg-cyan-500/10
                    px-3
                    py-1
                    text-xs
                    font-medium
                    text-cyan-300
                  "
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-3">
              <a
                href={project.href}
                className="
                  rounded-lg
                  bg-cyan-500
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-slate-950
                  transition
                  hover:bg-cyan-400
                "
              >
                View Project
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};
