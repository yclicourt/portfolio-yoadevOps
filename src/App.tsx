import type { ReactNode } from "react";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Presentation } from "./components/Presentation";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Background } from "./components/common/Background";
import { ButtonUp } from "./components/common/ButtonUp";

function App({ children }: { children?: ReactNode }) {
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
            <section id="projects">
              <Projects />
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
