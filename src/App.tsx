import type { ReactNode } from "react";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Presentation } from "./components/Presentation";
import { Process } from "./components/Process";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { TechServices } from "./components/TechServices";
import { Testimonials } from "./components/Testimonials";
import { Background } from "./components/common/Background";
import { ButtonUp } from "./components/common/ButtonUp";
import { useRouteMeta } from "./seo/routeMeta";

// La web es ahora la de YoaDevOps Consulting: una sola ruta ("/").
// La página /mipymes se eliminó: los servicios son los mismos para
// negocios dentro y fuera de Cuba, así que no hay nada que separar.
// Vercel sirve index.html para cualquier ruta (vercel.json).
function App({ children }: { children?: ReactNode }) {
  useRouteMeta();

  return (
    <>
      <div>
        <Background>
          <main className="relative z-10 pt-24">
            <section id="header">
              <Header />
            </section>
            <section>
              <Presentation />
            </section>
            <section id="about">
              <AboutMe />
            </section>
            <section id="services" className="mt-20">
              <Services />
            </section>
            <section id="process" className="mt-20">
              <Process />
            </section>
            <section id="testimonials" className="mt-20">
              <Testimonials />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="tech-services" className="mt-20">
              <TechServices />
            </section>
            <section id="faq" className="mt-20">
              <Faq />
            </section>
            <section id="contact">
              <Contact />
            </section>
            <ButtonUp />
          </main>

          <section>
            <Footer />
          </section>
          {children}
        </Background>
      </div>
    </>
  );
}

export default App;
