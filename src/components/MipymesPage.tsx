import { useEffect } from "react";
import { Background } from "./common/Background";
import { LanguageSwitcher } from "./common/LanguageSwitcher";
import { ServicesMipymes } from "./ServicesMipymes";
import { useLang } from "@/i18n/LanguageContext";

const STORAGE_KEY = "yoadevops-lang";

// Página aparte dentro del sitio: /mipymes.
// Solo la página de servicios, sin las secciones del portfolio.
// El logo y el pie enlazan de vuelta a la página principal ("/").
export const MipymesPage = () => {
  const { setLang, t } = useLang();

  // La página es para negocios en Cuba: si el visitante no tiene un
  // idioma guardado, se muestra en español; si lo tiene, se respeta.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.localStorage.getItem(STORAGE_KEY)) {
      setLang("es");
    }
  }, [setLang]);

  return (
    <Background>
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 lg:px-8">
        <a
          href="/"
          className="flex items-center gap-2 text-lg font-bold tracking-wider text-white uppercase hover:text-cyan-300 transition"
        >
          <img
            className="w-auto h-10"
            src="/yc-devops-logo.svg"
            alt="YoaDevOps logo"
          />
          <span>
            Yoa<span className="text-cyan-400">Dev</span>Ops
          </span>
        </a>
        <LanguageSwitcher />
      </header>

      <main className="relative z-10 pt-8 pb-16">
        <ServicesMipymes />
      </main>

      <footer className="relative z-10 border-t border-white/10 py-8 text-center">
        <p className="text-sm text-slate-400">
          <a
            href="/"
            className="text-cyan-300 hover:text-cyan-400 transition"
          >
            {t.mipymeServices.backToHome}
          </a>
        </p>
        <p className="mt-2 text-sm text-slate-500">
          {t.mipymeServices.footerNote}
        </p>
      </footer>
    </Background>
  );
};
