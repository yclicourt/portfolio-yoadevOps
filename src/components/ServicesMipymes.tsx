import {
  FaCashRegister,
  FaClipboardCheck,
  FaCogs,
  FaEnvelope,
  FaGlobe,
  FaNetworkWired,
  FaShoppingCart,
  FaSyncAlt,
  FaTools,
  FaWhatsapp,
} from "react-icons/fa";
import { contact } from "@/constants/contact";
import { useLang } from "@/i18n/LanguageContext";

const iconMap: Record<string, React.ReactNode> = {
  globe: <FaGlobe className="w-8 h-8 text-cyan-400" />,
  cart: <FaShoppingCart className="w-8 h-8 text-cyan-400" />,
  cashRegister: <FaCashRegister className="w-8 h-8 text-cyan-400" />,
  cogs: <FaCogs className="w-8 h-8 text-cyan-400" />,
  sync: <FaSyncAlt className="w-8 h-8 text-cyan-400" />,
  network: <FaNetworkWired className="w-8 h-8 text-cyan-400" />,
  tools: <FaTools className="w-8 h-8 text-cyan-400" />,
  clipboard: <FaClipboardCheck className="w-8 h-8 text-cyan-400" />,
};

export const ServicesMipymes = () => {
  const { t } = useLang();
  const section = t.mipymeServices;

  return (
    <div className="max-w-7xl mx-auto py-4 px-5 lg:px-8">
      <h1 className="text-white font-bold text-4xl text-center uppercase tracking-wider">
        {section.title}
      </h1>
      <p className="text-slate-400 text-center text-lg mt-4 max-w-3xl mx-auto">
        {section.subtitle}
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
        {section.items.map((service) => (
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
            {/* Icon + price */}
            <div className="flex items-start justify-between">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10">
                {iconMap[service.icon]}
              </div>
              <span className="rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-300">
                {service.price}
              </span>
            </div>

            {/* Title + description */}
            <h3 className="mt-6 text-2xl font-bold text-white">
              {service.title}
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              {service.description}
            </p>
          </article>
        ))}
      </div>

      {/* How I work */}
      <h2 className="text-white font-bold text-3xl text-center uppercase tracking-wider mt-16">
        {section.howTitle}
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-8">
        {section.steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-cyan-400 text-cyan-300 text-xl font-bold">
              {index + 1}
            </span>
            <p className="mt-4 text-sm text-slate-300">{step}</p>
          </div>
        ))}
      </div>

      {/* WhatsApp CTA */}
      <div className="mt-12 flex flex-col items-center">
        <a
          href="https://wa.me/5351877879"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            items-center
            gap-3
            rounded-lg
            bg-[#25d366]
            px-8
            py-4
            text-lg
            font-bold
            text-white
            shadow-lg
            transition
            hover:bg-[#1eb856]
            hover:-translate-y-0.5
          "
        >
          <FaWhatsapp className="w-7 h-7" />
          {section.cta}
        </a>
        <p className="mt-4 text-center text-sm text-slate-400">
          {contact.whatsapp}
        </p>
        <p className="mt-2 text-center text-sm text-slate-500">
          {section.emailLabel}{" "}
          <a
            href={`mailto:${contact.email}`}
            className="text-cyan-300 hover:text-cyan-400 transition"
          >
            <FaEnvelope className="inline w-4 h-4 mr-1" />
            {contact.email}
          </a>
        </p>
      </div>
    </div>
  );
};
