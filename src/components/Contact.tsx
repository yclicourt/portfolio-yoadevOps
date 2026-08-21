import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { contact } from "@/constants/contact";

export const Contact = () => {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Columna Izquierda: Información y Redes */}
        <div>
          <h2
            id="contact"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl uppercase"
          >
            Contact Me
          </h2>
          <p className="mt-4 text-slate-400 text-sm leading-6">
            {contact.description}
          </p>

          {/* Email */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4 text-slate-300">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-cyan-400">
                <FaEnvelope />
              </span>
              <span className="text-sm font-medium">{contact.email}</span>
            </div>

            {/* Linkedin */}
            <div className="flex items-center gap-4 text-slate-300">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-cyan-400">
                <FaLinkedin />
              </span>
              <span className="text-sm font-medium">{contact.linkedin}</span>
            </div>
            {/* Github */}
            <div className="flex items-center gap-4 text-slate-300">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-cyan-400">
                <FaGithub />
              </span>
              <span className="text-sm font-medium">{contact.github}</span>
            </div>

            {/* WhatsApp (Nuevo) */}
            <a
              href="https://wa.me/5351877879?text=Hola%20Yoan,%20vi%20tu%20portfolio%20y%20quiero%20contactarte."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-slate-300 hover:text-green-400 transition group"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-green-400 group-hover:bg-green-500/10">
                <FaWhatsapp />
              </span>
              <span className="text-sm font-medium">{contact.whatsapp}</span>
            </a>
          </div>
        </div>

        {/* Columna Derecha: Formulario Estilo Tarjeta */}
        <div className="rounded-2xl border border-white/10 bg-linear-to-br from-slate-800/50 via-slate-900/50 to-[#030914]/50 p-8 shadow-xl backdrop-blur">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="tu@correo.com"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Escribe tu mensaje aquí..."
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300 shadow-lg shadow-cyan-400/20"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
