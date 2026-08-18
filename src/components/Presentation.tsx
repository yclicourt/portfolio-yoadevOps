export const Presentation = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-5 pb-15 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <h1 className="mt-15 text-2xl font-bold tracking-tight text-white sm:text-6xl">
            YOAN CARLOS LICOURT ACOSTA
          </h1>
          <h2 className="mt-10 text-xl font-bold tracking-tight text-white sm:text-4xl">
            INFRAESTRUCTURE & DEVOPS ENGINEER|PLATFORM ENGINEER
          </h2>
          <span className="mt-10 text-lg leading-8 text-gray-300">
            Building Scalable, Secure, and Efficient Cloud Infraestructures
          </span>
          <div className="space-x-5 mt-6">
            <a
              href="github.com/yclicourt"
              className="text-black border-cyan-300 bg-cyan-400 px-3 border-2 p-3 rounded-md text-xl font-bold hover:text-white transition"
            >
              VIEW MY WORK
            </a>
            <a
              href="/Yoan_Devops_Platform_CV.pdf"
              download
              className="text-orange-400 border-orange-400 px-3 border-2 p-3 rounded-md text-xl font-bold hover:text-white transition"
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img
              src="/hero_profile.png"
              alt="Profile Header"
              className="w-full max-w-180 h-68 mt-25 rounded-md bg-white/5 ring-1 ring-white/10 shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};
