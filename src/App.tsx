import { useEffect, useState, type ReactNode } from "react";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Presentation } from "./components/Presentation";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { MipymesPage } from "./components/MipymesPage";
import { Background } from "./components/common/Background";
import { ButtonUp } from "./components/common/ButtonUp";
import { useRouteMeta } from "./seo/routeMeta";

// Router mínimo sin dependencias: la ruta es el pathname.
// "/" = la homepage actual, tal como está (DevOps/fullstack).
// "/mipymes" = la página aparte de servicios para mipymes.
// Vercel sirve index.html para cualquier ruta (vercel.json), así que
// un enlace directo a /mipymes no da 404.
function getRoute(): string {
  if (typeof window === "undefined") return "/";
  const path = window.location.pathname.replace(/\/+$/, "");
  return path === "" ? "/" : path;
}

function HomePage({ children }: { children?: ReactNode }) {
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
            <section id="skills">
              <Skills />
            </section>
            <section id="services" className="mt-20">
              <Services />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="testimonials" className="mt-20">
              <Testimonials />
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

function App({ children }: { children?: ReactNode }) {
  const [route, setRoute] = useState<string>(getRoute);

  // Per-route title/description (helps Google + browser tabs; it does
  // NOT fix social crawlers — they need the prerendered HTML).
  useRouteMeta(route);

  useEffect(() => {
    const onPopState = () => setRoute(getRoute());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  if (route === "/mipymes") {
    return <MipymesPage />;
  }
  return <HomePage>{children}</HomePage>;
}

export default App;
