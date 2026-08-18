export const Presentation = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-5 pb-15 sm:pb-32 lg:flex lg:items-center lg:justify-between lg:px-8 lg:py-40">
        
        {/* Columna Izquierda: Textos y Botones */}
        <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:max-w-xl">
          <h1 className="mt-15 text-2xl font-bold tracking-tight text-white sm:text-6xl">
            YOAN CARLOS LICOURT ACOSTA
          </h1>
          <h2 className="mt-10 text-xl font-bold tracking-tight text-white sm:text-4xl">
            INFRAESTRUCTURE & DEVOPS ENGINEER|PLATFORM ENGINEER
          </h2>
          <span className="mt-10 block text-lg leading-8 text-gray-300">
            Building Scalable, Secure, and Efficient Cloud Infraestructures
          </span>

          {/* Botones adaptables */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="github.com/yclicourt"
              className="text-center text-black border-cyan-300 bg-cyan-400 border-2 px-6 py-3 rounded-md text-base sm:text-xl font-bold hover:text-white transition"
            >
              VIEW MY WORK
            </a>
            <a
              href="/Yoan_Devops_Platform_CV.pdf"
              download
              className="text-center text-orange-400 border-orange-400 border-2 px-6 py-3 rounded-md text-base sm:text-xl font-bold hover:text-white transition"
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>

        {/* Columna Derecha: Imagen de Perfil (Con margen ajustado hacia abajo en desktop) */}
        <div className="mx-auto mt-16 flex justify-center max-w-2xl sm:mt-24 lg:ml-5 lg:mr-0 lg:mt-8 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="flex-none">
            <img
              src="/profile.png"
              alt="Profile Header"
              className="w-56 h-56 sm:w-80 sm:h-80 mx-auto mt-6 lg:mt-0 rounded-full object-cover border-2 border-cyan-500/40 shadow-2xl shadow-cyan-500/20 ring-4 ring-slate-800/80"
            />
          </div>
        </div>

      </div>
    </>
  );
};