import { LANGS } from "@/i18n/dictionary";
import { useLang } from "@/i18n/LanguageContext";

// Selector EN-USA / ES-Cuba: dos botones con bandera + código,
// el activo resaltado. Va en el header (escritorio y menú móvil).
export const LanguageSwitcher = () => {
  const { lang, setLang } = useLang();

  return (
    <div
      role="group"
      aria-label="Language / Idioma"
      className="flex items-center rounded-lg border border-white/10 bg-white/5 p-1"
    >
      {LANGS.map((l) => {
        const active = lang === l.code;
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => setLang(l.code)}
            aria-pressed={active}
            title={l.name}
            className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-bold transition ${
              active
                ? "bg-cyan-400 text-slate-950"
                : "text-slate-300 hover:text-white"
            }`}
          >
            <span aria-hidden="true" className="text-base leading-none">
              {l.flag}
            </span>
            {l.label}
          </button>
        );
      })}
    </div>
  );
};
