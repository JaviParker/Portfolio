import { useState } from "react";
import Button from "../Button/Button";
import RotatingText from "../../TextAnimations/RotatingText/RotatingText";
import Radio from "../Radio/Radio";
import { useContactDialog } from "../../stores/useContactDialog";

function Navbar({
  radioFixed,
  sectionIds,
  activeSection,
}: {
  radioFixed: boolean;
  sectionIds: string[];
  activeSection: string;
  // navbarRef: React.RefObject<HTMLDivElement | null>;
  // radioRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMobileMenuToggle = () => setMobileMenuOpen(!isMobileMenuOpen);
  const { openDialog } = useContactDialog();

  return (
    // Contenedor principal del Navbar
    <div
      className={`fixed top-0 left-0 z-50 mx-2 w-[96%] md:w-[98%] transition-all duration-300 ease-in-out ${
        radioFixed
          ? "top-2.5 backdrop-blur-md bg-white/10 shadow-lg"
          : "top-5 bg-transparent"
      } rounded-xl`}
    >
      <div className="relative flex items-center justify-between h-[70px] px-5">
        {/* Izquierda: Título y RotatingText */}
        <div className="flex items-center">
          <strong className="text-white text-lg md:text-xl mr-1">Creative</strong>
          <RotatingText
             texts={["thinker", "designer", "developer", "problem solver", "engineer", "innovator", "learner"]}
             // Clases responsivas para el padding y tamaño de texto
             mainClassName="px-2 md:px-3 py-1 md:py-2 bg-duo text-white rounded-lg text-lg md:text-xl flex justify-center items-center"
             staggerFrom="last"
             initial={{ y: "100%" }}
             animate={{ y: 0 }}
             exit={{ y: "-120%" }}
             staggerDuration={0.025}
             // Clase responsiva para el texto interno
             splitLevelClassName="pb-0.5 md:pb-1 text-black font-bold"
             transition={{ type: "spring", damping: 30, stiffness: 400 }}
             rotationInterval={2000}
          />
        </div>

        {/* Centro: Radio (solo en desktop) */}
        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Radio
            className="flex space-x-2 rounded-xl select-none h-10"
            options={sectionIds}
            selected={activeSection}
            onChange={(section) => {
              document.getElementById(section)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          />
        </div>

        {/* Derecha: Botón "Contact me" (solo en desktop) */}
        <div className="hidden md:block">
          <Button label="Contact me" onClick={openDialog} />
        </div>

        {/* Móvil: Menú hamburguesa */}
        <div className="md:hidden">
          <button onClick={handleMobileMenuToggle} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú desplegable para móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-lg rounded-b-lg p-4">
          <div className="flex flex-col items-center space-y-4">
            {sectionIds.map((section) => (
              <div
                key={section}
                className="py-2 cursor-pointer text-white text-lg hover:text-duo transition-colors"
                onClick={() => {
                  document.getElementById(section)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                  setMobileMenuOpen(false);
                }}
              >
                {/* Capitaliza la primera letra para mejor presentación */}
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </div>
            ))}
            {/* También puedes añadir el botón de contacto aquí */}
            <Button label="Contact me" onClick={() => {
                openDialog();
                setMobileMenuOpen(false);
            }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;