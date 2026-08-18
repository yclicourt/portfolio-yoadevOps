import { Ancor } from "./common/Ancor";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030914]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left Side: Logo */}
        <a href="#" className="flex items-center gap-2">
          <img className="w-auto h-10" src="./yc-devops-logo.svg" alt="Logo" />
          <span className="font-semibold text-white text-xl tracking-tight">
            Y.C. DevOps
          </span>
        </a>

        {/* Center Side: Main Header */}
        <ul className="hidden md:flex items-center gap-8 text-lg text-white">
          <Ancor />
        </ul>

        {/* Right Side: Button Contact Me */}
        <a
          href="#contact"
          className="text-cyan-400 border-cyan-500/40 border px-4 py-2 rounded-lg text-lg font-bold hover:bg-cyan-500/10 transition"
        >
          Contact Me 🚀
        </a>
      </div>
    </header>
  );
};

export default Header;