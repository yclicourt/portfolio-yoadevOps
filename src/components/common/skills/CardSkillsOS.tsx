// import { SiLinux } from "react-icons/si";
// import { FaWindows } from "react-icons/fa";

// const skills = [
//   {
//     title: "Linux",
//     icon: <SiLinux />,
//   },
//   {
//     title: "Windows Server",
//     icon: <FaWindows />,
//   },
// ];

// export const CardSkillsOS = () => {
//   return skills.map((skill) => {
//     return (
//       <div
//         className="relative
//       max-w-sm
//       p-6
//       rounded-2xl
//       bg-linear-to-br
//       from-slate-700
//       via-slate-800
//       to-slate-900
//       border border-white/10
//       shadow-lg
//       backdrop-blur
//       transition
//       hover:scale-[1.02]
//       hover:shadow-xl"
//         key={skill.title}
//       >
//         <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-white/10 text-4xl text-white">
//           {skill.icon}
//         </div>
//         <h4 className="mb-1 text-sm text-center font-medium tracking-wide text-slate-300 uppercase">
//           {skill.title}
//         </h4>
//       </div>
//     );
//   });
// };
import { SiLinux } from "react-icons/si";
import { FaWindows } from "react-icons/fa";

const skills = [
  {
    title: "Linux",
    icon: <SiLinux className="w-10 h-10 text-cyan-400" />,
  },
  {
    title: "Windows Server",
    icon: <FaWindows className="w-10 h-10 text-cyan-400" />,
  },
];

export const CardSkillsOS = () => {
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
        {/* Contenedor del icono centrado y ampliado */}
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