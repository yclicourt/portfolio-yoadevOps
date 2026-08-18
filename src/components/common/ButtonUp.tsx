import { useEffect, useState } from "react";

export const ButtonUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="
        fixed
        bottom-8
        right-8
        z-50
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-xl
        border
        border-cyan-400/40
        bg-linear-to-br
        from-blue-600
        via-cyan-500
        to-blue-700
        text-white
        shadow-lg
        shadow-cyan-500/20
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-110
        hover:shadow-xl
        hover:shadow-cyan-500/30
        focus:outline-none
        focus:ring-2
        focus:ring-cyan-400/50
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};