import {
  FaChartLine,
  FaCode,
  FaCogs,
  FaCodeBranch,
  FaCss3,
  FaDatabase,
  FaEye,
  FaFileCode,
  FaLayerGroup,
  FaPlug,
  FaServer,
  FaShieldAlt,
  FaTerminal,
  FaVial,
  FaWindows,
} from "react-icons/fa";
import {
  SiAngular,
  SiAnsible,
  SiArgo,
  SiDjango,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGitlab,
  SiHarbor,
  SiHelm,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiKaniko,
  SiKubernetes,
  SiLinux,
  SiMariadb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPodman,
  SiPostgresql,
  SiPrisma,
  SiProxmox,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiVite,
  SiVitest,
  SiVmware,
} from "react-icons/si";
import { skillCategories } from "@/constants/skills";
import { useLang } from "@/i18n/LanguageContext";

const categoryIcons: Record<string, React.ReactNode> = {
  code: <FaCode className="w-7 h-7 text-cyan-400" />,
  layergroup: <FaLayerGroup className="w-7 h-7 text-cyan-400" />,
  database: <FaDatabase className="w-7 h-7 text-cyan-400" />,
  vial: <FaVial className="w-7 h-7 text-cyan-400" />,
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
  react: <SiReact className="w-4 h-4" />,
  nextjs: <SiNextdotjs className="w-4 h-4" />,
  angular: <SiAngular className="w-4 h-4" />,
  typescript: <SiTypescript className="w-4 h-4" />,
  javascript: <SiJavascript className="w-4 h-4" />,
  tailwindcss: <SiTailwindcss className="w-4 h-4" />,
  vite: <SiVite className="w-4 h-4" />,
  html5: <SiHtml5 className="w-4 h-4" />,
  css3: <FaCss3 className="w-4 h-4" />,
  nodejs: <SiNodedotjs className="w-4 h-4" />,
  nestjs: <SiNestjs className="w-4 h-4" />,
  express: <SiExpress className="w-4 h-4" />,
  django: <SiDjango className="w-4 h-4" />,
  python: <SiPython className="w-4 h-4" />,
  restapi: <FaPlug className="w-4 h-4" />,
  postgresql: <SiPostgresql className="w-4 h-4" />,
  prisma: <SiPrisma className="w-4 h-4" />,
  supabase: <SiSupabase className="w-4 h-4" />,
  mariadb: <SiMariadb className="w-4 h-4" />,
  jest: <SiJest className="w-4 h-4" />,
  vitest: <SiVitest className="w-4 h-4" />,
  playwright: <FaVial className="w-4 h-4" />,
  git: <SiGit className="w-4 h-4" />,
  github: <SiGithub className="w-4 h-4" />,
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
  const { t } = useLang();
  return (
    <div className="max-w-7xl mx-auto py-4 px-5 lg:px-8">
      <h1 className="text-white font-bold text-4xl text-center uppercase tracking-wider">
        {t.skills.title}
      </h1>
      <p className="text-slate-400 text-center text-lg mt-4 max-w-3xl mx-auto">
        {t.skills.subtitle}
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
                {t.skills.categories[category.id] ?? category.title}
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

