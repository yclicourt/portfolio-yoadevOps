import { FaCheck, FaLifeRing, FaRocket } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { services } from "@/constants/services";

const iconMap: Record<string, React.ReactNode> = {
  kubernetes: <SiKubernetes className="w-8 h-8 text-cyan-400" />,
  rocket: <FaRocket className="w-8 h-8 text-cyan-400" />,
  lifering: <FaLifeRing className="w-8 h-8 text-cyan-400" />,
};

export const Services = () => {
  return (
    <div className="max-w-7xl mx-auto py-4 px-5 lg:px-8">
      <h1 className="text-white font-bold text-4xl text-center uppercase tracking-wider">
        Services
      </h1>
      <p className="text-slate-400 text-center text-lg mt-4 max-w-3xl mx-auto">
        Productized consulting from{" "}
        <span className="text-cyan-300 font-semibold">
          YoaDevOps Consulting
        </span>{" "}
        — fixed scope, fixed timeline, no surprises.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
        {services.map((service) => (
          <article
            key={service.id}
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
              p-8
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-cyan-500/40
              hover:shadow-xl
              hover:shadow-cyan-500/10
            "
          >
            {/* Icon + timeline */}
            <div className="flex items-start justify-between">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10">
                {iconMap[service.icon]}
              </div>
              <span className="rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-300">
                {service.timeline}
              </span>
            </div>

            {/* Title + tagline */}
            <h3 className="mt-6 text-2xl font-bold text-white">
              {service.title}
            </h3>
            <p className="mt-2 text-sm text-slate-400">{service.tagline}</p>

            {/* Deliverables */}
            <ul className="mt-6 flex-1 space-y-3">
              {service.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-slate-300"
                >
                  <FaCheck className="mt-1 shrink-0 text-cyan-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#contact"
              className="
                mt-8
                rounded-lg
                border-2
                border-cyan-400
                px-4
                py-2
                text-center
                text-sm
                font-bold
                text-cyan-300
                transition
                hover:bg-cyan-400
                hover:text-slate-950
              "
            >
              Start a project
            </a>
          </article>
        ))}
      </div>

      {/* Work terms */}
      <p className="mt-10 text-center text-sm text-slate-500">
        Remote-first · LATAM / EU time zones · Contract-based · Paid in USD
        stablecoins
      </p>
    </div>
  );
};
