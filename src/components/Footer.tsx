import { FaGithub, FaLinkedin } from "react-icons/fa";
import { footer } from "@/constants/footer";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-transparent">
      <div
        className="
          mx-auto
          flex
          max-w-6xl
          flex-col
          items-center
          justify-between
          gap-6
          px-6
          py-10
          text-center
          md:flex-row
        "
      >
        {/* Left */}
        <div>
          <h3 className="text-lg font-semibold text-white">{footer.name}</h3>

          <p className="mt-1 text-sm text-slate-400">{footer.role}</p>
        </div>

        {/* Center */}
        <div>
          <p className="text-sm text-slate-500">
            Built with{" "}
            <span className="text-slate-300">
              {footer.builtWith.join(" • ")}
            </span>
          </p>

          <p className="mt-2 text-xs text-slate-600">{footer.copyright}</p>
        </div>

        {/* Social */}
        <div className="flex items-center gap-5">
          <a
            href={footer.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="
              text-2xl
              text-slate-400
              transition-all
              duration-300
              hover:-translate-y-1
              hover:text-cyan-400
            "
          >
            <FaGithub />
          </a>

          <a
            href={footer.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
              text-2xl
              text-slate-400
              transition-all
              duration-300
              hover:-translate-y-1
              hover:text-cyan-400
            "
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};
