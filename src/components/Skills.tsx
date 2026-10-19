import {
  FaChartLine,
  FaCogs,
  FaCodeBranch,
  FaEye,
  FaFileCode,
  FaServer,
  FaShieldAlt,
  FaTerminal,
  FaWindows,
} from "react-icons/fa";
import {
  SiAnsible,
  SiArgo,
  SiDocker,
  SiGithubactions,
  SiGitlab,
  SiHarbor,
  SiHelm,
  SiKaniko,
  SiKubernetes,
  SiLinux,
  SiPodman,
  SiProxmox,
  SiTerraform,
  SiVmware,
} from "react-icons/si";
import { skillCategories } from "@/constants/skills";

const categoryIcons: Record<string, React.ReactNode> = {
  kubernetes: <SiKubernetes className="w-7 h-7 text-cyan-400" />,
  filecode: <FaFileCode className="w-7 h-7 text-cyan-400" />,
  cogs: <FaCogs className="w-7 h-7 text-cyan-400" />,
  codebranch: <FaCodeBranch className="w-7 h-7 text-cyan-400" />,
  chartline: <FaChartLine className="w-7 h-7 text-cyan-400" />,
  shield: <FaShieldAlt className="w-7 h-7 text-cyan-400" />,
  server: <FaServer className="w-7 h-7 text-cyan-400" />,
  terminal: <FaTerminal className="w-7 h-7 text-cyan-400" />,
};

const skillIcons: Record<string, React.ReactNode> = {
  kubernetes: <SiKubernetes className="w-4 h-4" />,
  docker: <SiDocker className="w-4 h-4" />,
  podman: <SiPodman className="w-4 h-4" />,
  helm: <SiHelm className="w-4 h-4" />,
  kaniko: <SiKaniko className="w-4 h-4" />,
  terraform: <SiTerraform className="w-4 h-4" />,
  ansible: <SiAnsible className="w-4 h-4" />,
  githubactions: <SiGithubactions className="w-4 h-4" />,
  gitlab: <SiGitlab className="w-4 h-4" />,
  argo: <SiArgo className="w-4 h-4" />,
  openobserve: <FaEye className="w-4 h-4" />,
  harbor: <SiHarbor className="w-4 h-4" />,
  vmware: <SiVmware className="w-4 h-4" />,
  proxmox: <SiProxmox className="w-4 h-4" />,
  linux: <SiLinux className="w-4 h-4" />,
  windows: <FaWindows className="w-4 h-4" />,
};

export const Skills = () => {
  return (
    <div className="max-w-7xl mx-auto py-4 px-5 lg:px-8">
      <h1 className="text-white font-bold text-4xl text-center uppercase tracking-wider">
        Skills
      </h1>
      <p className="text-slate-400 text-center text-lg mt-4 max-w-3xl mx-auto">
        The toolkit I use to build platforms and ship applications.
      </p>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4 mt-12">
        {skillCategories.map((category) => (
          <article
            key={category.id}
            className="
              group
              flex
              h-full
              flex-col
              rounded-2xl
              border
              border-white/10
              bg-linear-to-br
              from-slate-800
              via-slate-900
              to-[#030914]
              p-6
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-cyan-500/40
              hover:shadow-xl
              hover:shadow-cyan-500/10
            "
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-14 h-14 shrink-0 rounded-2xl bg-white/5 border border-white/10">
                {categoryIcons[category.icon]}
              </div>
              <h3 className="text-lg font-bold text-white leading-tight">
                {category.title}
              </h3>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill.title}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-cyan-500/20
                    bg-cyan-500/10
                    px-3
                    py-1.5
                    text-xs
                    font-medium
                    text-cyan-300
                  "
                >
                  {skillIcons[skill.icon]}
                  {skill.title}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

