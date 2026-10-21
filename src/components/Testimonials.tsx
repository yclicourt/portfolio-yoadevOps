import { FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "@/constants/testimonials";

export const Testimonials = () => {
  return (
    <div className="max-w-7xl mx-auto py-4 px-5 lg:px-8">
      <h1 className="text-white font-bold text-4xl text-center uppercase tracking-wider">
        Testimonials
      </h1>
      <p className="text-slate-400 text-center text-lg mt-4 max-w-3xl mx-auto">
        What clients say about working with{" "}
        <span className="text-cyan-300 font-semibold">
          YoaDevOps Consulting
        </span>
        .
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-12 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <figure
            key={t.id}
            className="
              flex
              h-full
              flex-col
              rounded-2xl
              border
              border-white/10
              bg-linear-to-br
              from-slate-800
              via-slate-900
              to-[#030914]
              p-8
              shadow-lg
            "
          >
            <FaQuoteLeft className="w-7 h-7 text-cyan-400" />
            <blockquote className="mt-5 flex-1 text-slate-200 leading-relaxed text-justify">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 border-t border-white/10 pt-4">
              <p className="text-white font-bold">{t.business}</p>
              <p className="text-sm text-slate-400">{t.context}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};
