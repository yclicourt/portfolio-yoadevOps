import { useLang } from "@/i18n/LanguageContext";

export const Faq = () => {
  const { t } = useLang();
  return (
    <div className="max-w-4xl mx-auto py-4 px-5 lg:px-8">
      <h1 className="text-white font-bold text-4xl text-center uppercase tracking-wider">
        {t.faq.title}
      </h1>
      <p className="text-slate-400 text-center text-lg mt-4 max-w-3xl mx-auto">
        {t.faq.subtitle}
      </p>

      <div className="mt-12 space-y-4">
        {t.faq.items.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-white/10 bg-linear-to-br from-slate-800 via-slate-900 to-[#030914] p-6"
          >
            <summary className="cursor-pointer text-lg font-bold text-white marker:text-cyan-400">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
};
