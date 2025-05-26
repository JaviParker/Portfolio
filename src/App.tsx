import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Toaster } from "sonner";
import Navbar from "./Components/Navbar/Navbar";
import WorkSection from "./sections/WorkSection";
import ProjectsSection from "./sections/ProjectsSection";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import Background from "./sections/Background";

function App() {
  const radioRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const [radioFixed, setRadioFixed] = useState(false);
  const radioOptions = ["Work", "About", "Projects", "Contact"];
  const [,setSelectedRadio] = useState(radioOptions[0]);

  // Controla el scroll usando el offset calculado
  const useSectionObserver = (sectionIds: string[]) => {
    const [activeSection, setActiveSection] = useState(sectionIds[0]);

    useEffect(() => {
      const thresholds: Record<string, number> = {
        default: 0.1, // Threshold normal
        work: 0.8, // Threshold más bajo cuando subimos
      };

      let previousScrollY = window.scrollY;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const currentScrollY = window.scrollY;
            const scrollingUp = currentScrollY < previousScrollY;
            previousScrollY = currentScrollY;

            if (entry.isIntersecting) {
              const id = entry.target.id;
              // Si estamos subiendo y volvemos a 'work', usamos el threshold más bajo
              if (scrollingUp && id === "work") {
                setActiveSection(id);
              }
              // Si bajamos, usamos los thresholds normales
              else if (!scrollingUp) {
                setActiveSection(id);
              }
            }
          });
        },
        {
          threshold: sectionIds.map(
            (id) => thresholds[id] || thresholds.default
          ),
        }
      );

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      });

      return () => observer.disconnect();
    }, [sectionIds]);

    return activeSection;
  };

  const sectionIds = ["work", "about", "projects", "contact"];
  const activeSection = useSectionObserver(sectionIds);

  useEffect(() => {
    setSelectedRadio(activeSection);
  }, [activeSection]);

  useEffect(() => {
    if (activeSection !== "work") {
      setRadioFixed(true);
    } else {
      setRadioFixed(false);
    }
  }, [activeSection]);

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <main className="relative overflow-scroll bg-black">
        <Toaster position="top-center" richColors />
        {/* Fondo animado */}
        <Background/>

        <Navbar
          radioFixed={radioFixed}
          sectionIds={sectionIds}
          activeSection={activeSection}
          navbarRef={navbarRef}
          radioRef={radioRef}
        />
        {/* WORk */}
        <WorkSection />
        {/* ABOUT */}
        <AboutSection />
        {/* PROJECTS */}
        <ProjectsSection />
        {/* CONTACT */}
        <ContactSection/>
      </main>
    </>
  );
}

export default App;
