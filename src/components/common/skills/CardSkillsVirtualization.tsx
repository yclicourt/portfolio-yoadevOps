import { SiVmware, SiProxmox } from "react-icons/si";
const skills = [
  {
    title: "Vmware",
    icon: <SiVmware className="w-10 h-10 text-cyan-400" />,
  },
  {
    title: "Proxmox",
    icon: <SiProxmox className="w-10 h-10 text-cyan-400" />,
  },
];

export const CardSkillsVirtualization = () => {
  return skills.map((skill) => {
    return (
      <div
        className="relative
          flex
          flex-col
          items-center
          max-w-sm
          p-6
          rounded-2xl
          bg-linear-to-br
          from-slate-700
          via-slate-800
          to-slate-900
          border border-white/10
          shadow-lg
          backdrop-blur
          transition
          hover:scale-[1.02]
          hover:shadow-xl"
        key={skill.title}
      >
        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-white/5 border border-white/10 shadow-inner">
          {skill.icon}
        </div>
        <h4 className="mb-1 text-sm text-center font-medium tracking-wide text-slate-300 uppercase">
          {skill.title}
        </h4>
      </div>
    );
  });
};
