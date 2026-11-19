import { FaWhatsapp } from "react-icons/fa";
import { useLang } from "@/i18n/LanguageContext";

export const Presentation = () => {
  const { t } = useLang();

  return (
    <>
      <div className="mx-auto max-w-7xl px-5 pb-15 sm:pb-32 lg:flex lg:items-center lg:justify-between lg:px-8 lg:py-40">

        {/* Columna Izquierda: Textos y Botones */}
        <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:max-w-xl">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
            {t.hero.eyebrow}
          </p>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {t.hero.title}
          </h1>
          <span className="mt-6 block text-lg leading-8 text-gray-300">
            {t.hero.tagline}
          </span>

          {/* Botones adaptables */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="https://wa.me/5351877879"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-center text-black border-cyan-300 bg-cyan-400 border-2 px-6 py-3 rounded-md text-base sm:text-xl font-bold hover:text-white transition"
            >
              <FaWhatsapp />
              {t.hero.whatsappCta}
            </a>
            <a
              href="#services"
              className="text-center text-cyan-300 border-cyan-400 border-2 px-6 py-3 rounded-md text-base sm:text-xl font-bold hover:text-white transition"
            >
              {t.hero.viewServices}
            </a>
          </div>
        </div>

        {/* Columna Derecha: Imagen de Perfil (Con margen ajustado hacia abajo en desktop) */}
        <div className="mx-auto mt-16 flex justify-center max-w-2xl sm:mt-24 lg:ml-5 lg:mr-0 lg:mt-8 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="flex-none">
            <img
              src="/profile.png"
              alt={t.hero.profileAlt}
              className="w-56 h-56 sm:w-80 sm:h-80 mx-auto mt-6 lg:mt-0 rounded-full object-cover border-2 border-cyan-500/40 shadow-2xl shadow-cyan-500/20 ring-4 ring-slate-800/80"
            />
          </div>
        </div>

      </div>
    </>
  );
};
