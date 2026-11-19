import { flexStyleProjects } from "@/constants/styles";
import { CardProjects } from "./common/projects/CardProjects";
import { useLang } from "@/i18n/LanguageContext";

export const Projects = () => {
  const { t } = useLang();
  return (
    <div className="max-w-7xl mx-auto mt-20 py-4">
      <h1 className="text-white font-bold text-4xl text-center uppercase tracking-wider">
        {t.projects.title}
      </h1>

      <h2 className="text-white font-bold text-2xl uppercase tracking-wider mt-14 mb-2 px-10">
        {t.projects.fullstackTitle}
      </h2>
      <p className="text-slate-400 text-sm mb-6 px-10 text-justify">
        {t.projects.fullstackSubtitle}
      </p>
      <section>
        <div className={flexStyleProjects}>
          <CardProjects category="fullstack" />
        </div>
      </section>

      <h2 className="text-white font-bold text-2xl uppercase tracking-wider mt-20 mb-2 px-10">
        {t.projects.devopsTitle}
      </h2>
      <p className="text-slate-400 text-sm mb-6 px-10 text-justify">
        {t.projects.devopsSubtitle}
      </p>
      <section>
        <div className={flexStyleProjects}>
          <CardProjects category="devops" />
        </div>
      </section>

      {/* La sección de habilidades quedó en una línea: el cliente no
          contrata el stack, contrata el resultado. */}
      <p className="mt-16 text-center text-sm text-slate-500 px-10">
        {t.projects.stackNote}
      </p>
    </div>
  );
};
