import { useState } from "react";
import { Ancor } from "./common/Ancor";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030914]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left Side: Logo */}
        <a href="#" className="flex items-center gap-2">
          <img className="w-auto h-10" src="./yc-devops-logo.svg" alt="Logo" />
          <span className="font-semibold text-white text-xl tracking-tight">
            Y.C. DevOps
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-lg text-white">
          <Ancor />
          <a
            href="#contact"
            className="text-cyan-400 border-cyan-500/40 border ml-10 px-4 py-2 rounded-lg text-lg font-bold hover:bg-cyan-500/10 transition"
          >
            Contact Me 🚀
          </a>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-white/5 transition"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#030914]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-6 px-6 transition-all">
          <ul
            className="flex flex-col items-center gap-6 text-lg text-white"
            onClick={handleToggle}
          >
            <Ancor />
            <a
              href="#contact"
              className="text-cyan-400 border-cyan-500/40 border px-6 py-2 rounded-lg text-lg font-bold hover:bg-cyan-500/10 transition mt-2 w-full text-center"
            >
              Contact Me 🚀
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;