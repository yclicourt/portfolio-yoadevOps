import { useLang } from "@/i18n/LanguageContext";

export const Process = () => {
  const { t } = useLang();
  return (
    <div className="max-w-7xl mx-auto py-4 px-5 lg:px-8">
      <h1 className="text-white font-bold text-4xl text-center uppercase tracking-wider">
        {t.process.title}
      </h1>
      <p className="text-slate-400 text-center text-lg mt-4 max-w-3xl mx-auto">
        {t.process.subtitle}
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
        {t.process.steps.map((step, index) => (
          <div
            key={step.title}
            className="flex flex-col items-center text-center"
          >
            <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-cyan-400 text-cyan-300 text-xl font-bold">
              {index + 1}
            </span>
            <h3 className="mt-4 text-lg font-bold text-white">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-slate-300">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
