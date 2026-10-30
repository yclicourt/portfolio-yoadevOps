import { useLang } from "@/i18n/LanguageContext";

export const AboutMe = () => {
  const { t } = useLang();
  return (
    <article className="max-w-7xl mx-auto py-4">
      <h1
        className="text-white font-bold text-center text-4xl uppercase tracking-wider"
      >
        {t.about.title}
      </h1>
      <p className="text-gray-200 text-lg mt-6 p-6 text-justify leading-relaxed">
        {t.about.text}
      </p>
    </article>
  );
};
