import { useCallback, useEffect, useMemo, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useLang } from "@/i18n/LanguageContext";

// Typewriter moderno: escribe el titular UNA vez y se queda — sin
// borrar, sin bucle, sin cambiar de frase. Al terminar, el cursor se
// desvanece y el texto queda fijo. Se monta de nuevo (key) cuando
// cambia el idioma, así el titular se vuelve a escribir en el otro
// idioma. Con prefers-reduced-motion, el titular aparece completo
// de inmediato.
function TypedText({ text, onDone }: { text: string; onDone: () => void }) {
  const reduced = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduced) {
      onDone();
      return;
    }
    let i = 0;
    let timeoutId = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTyped(text.slice(0, i));
      if (i >= text.length) {
        window.clearInterval(id);
        // Pequeña pausa con el cursor antes de desvanecerlo.
        timeoutId = window.setTimeout(() => {
          setDone(true);
          onDone();
        }, 500);
      }
    }, 32);
    return () => {
      window.clearInterval(id);
      window.clearTimeout(timeoutId);
    };
  }, [text, reduced, onDone]);

  return (
    <>
      <span aria-hidden="true">{reduced ? text : typed}</span>
      {/* Cursor: parpadea mientras escribe y se desvanece al terminar. */}
      <span
        aria-hidden="true"
        className={`ml-1 inline-block h-[0.9em] w-[4px] translate-y-[0.08em] bg-cyan-300 transition-opacity duration-500 ${done || reduced ? "opacity-0" : "animate-pulse"}`}
      />
    </>
  );
}

export const Presentation = () => {
  const { t } = useLang();
  const [typedDone, setTypedDone] = useState(false);
  const handleDone = useCallback(() => setTypedDone(true), []);

  return (
    <>
      <div className="mx-auto min-h-[85vh] max-w-7xl px-5 pb-15 sm:pb-32 lg:flex lg:items-center lg:justify-between lg:px-8 lg:py-48">

        {/* Columna Izquierda: Textos y Botones */}
        <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:max-w-xl">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
            {t.hero.eyebrow}
          </p>
          <h1
            aria-label={t.hero.title}
            className="mt-6 bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-7xl"
          >
            <TypedText key={t.hero.title} text={t.hero.title} onDone={handleDone} />
          </h1>
          <span
            className={`mt-6 block text-lg leading-8 text-gray-300 transition-opacity duration-700 ${typedDone ? "opacity-100" : "opacity-0"}`}
          >
            {t.hero.tagline}
          </span>

          {/* Botones adaptables */}
          <div
            className={`mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 transition-opacity duration-700 ${typedDone ? "opacity-100" : "opacity-0"}`}
          >
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
