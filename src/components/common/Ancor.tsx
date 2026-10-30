import { useLang } from "@/i18n/LanguageContext";

export const Ancor = () => {
  const { t } = useLang();
  return (
    <>
      {t.nav.map((link) => {
        return (
          <li key={link.name}>
            <a
              href={link.href}
              className="hover:text-cyan-700 transition hover:border-b-2"
            >
              {link.name}
            </a>
          </li>
        );
      })}
    </>
  );
};
