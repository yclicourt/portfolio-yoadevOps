import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { dictionary, type Lang } from "./dictionary";

const STORAGE_KEY = "yoadevops-lang";

function readInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "es" || stored === "en") return stored;
  return "en"; // El sitio ya estaba en inglés: ese sigue siendo el idioma por defecto.
}

interface LangCtx {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof dictionary)["en"];
}

const LanguageContext = createContext<LangCtx>({
  lang: "en",
  setLang: () => {},
  t: dictionary.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dictionary[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
