import { useState } from "react";
import Button from "../Button/Button";
import RotatingText from "../../TextAnimations/RotatingText/RotatingText";
import Radio from "../Radio/Radio";
import { useContactDialog } from "../../stores/useContactDialog";

function Navbar({
  radioFixed,
  sectionIds,
  activeSection,
  navbarRef,
  radioRef,
}: {
  radioFixed: boolean;
  sectionIds: string[];
  activeSection: string;
  navbarRef: React.RefObject<HTMLDivElement | null>;
  radioRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => setMobileMenuOpen(!isMobileMenuOpen);

  const {openDialog} = useContactDialog();
  return (
    <div
      ref={navbarRef}
      style={{
        position: "fixed",
        width: "98vw",
        top: radioFixed ? "10px" : "20px",
        zIndex: radioFixed ? 6 : 7,
        padding: "0 20px",
        margin: "0 1vw 0 1vw",
        height: "70px",
        backdropFilter: radioFixed ? "blur(10px)" : "none",
        background: radioFixed ? "rgba(255, 255, 255, 0.1)" : "transparent",
        borderRadius: "15px",
        boxShadow: radioFixed ? "0 4px 10px rgba(0, 0, 0, 0.1)" : "none",
        transition: "all 0.3s ease-in-out",
      }}
      className="relative flex items-center"
    >
      {/* Izquierda: Título y RotatingText */}
      <div className="flex items-center">
        <strong className="mr-1 text-xl text-white">Creative</strong>
        <RotatingText
          texts={[
            "thinker",
            "designer",
            "developer",
            "problem solver",
            "engineer",
            "innovator",
            "learner",
          ]}
          mainClassName="px-2 sm:px-2 md:px-3 bg-duo text-white py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-xl"
          staggerFrom="last"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="pb-0.5 sm:pb-1 md:pb-1 text-black font-bold"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </div>

      {/* Centro: Radio (desktop) posicionado absolutamente */}
      <div
        ref={radioRef}
        className="hidden md:block absolute left-1/2 transform -translate-x-1/2 mb-3"
      >
        <Radio
          className="flex space-x-2 rounded-xl select-none h-10 mt-3 z-7"
          options={sectionIds}
          selected={activeSection}
          onChange={(activeSection) => {
            console.log(activeSection);
            document.getElementById(activeSection)?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        />
      </div>

      {/* Derecha: Botón "Contact me" (desktop) posicionado absolutamente */}
      <div className="hidden md:block absolute right-5">
        <Button label="Contact me" onClick={openDialog} />
      </div>

      {/* Móvil: Menú hamburguesa en la derecha */}
      <div className="md:hidden absolute right-0 flex items-center">
        <button onClick={handleMobileMenuToggle} className="text-white focus:outline-none">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
          </svg>
        </button>
        {isMobileMenuOpen && (
          <div className="absolute top-full right-0 mt-2 bg-white rounded shadow-lg p-4 z-50">
            {sectionIds.map((section) => (
              <div
                key={section}
                className="py-1 cursor-pointer hover:bg-gray-200"
                onClick={() => {
                  console.log(section);
                  document.getElementById(section)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                  setMobileMenuOpen(false);
                }}
              >
                {section}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
