import { Globe } from "../Components/magicui/globe";
import { AuroraText } from "../Components/magicui/aurora-text";
import Magnet from "../Animations/Magnet/Magnet";
import Button from "../Components/Button/Button";
import { ContactDialog } from "./ContactDialog";
import { useContactDialog } from "../stores/useContactDialog";

const ContactSection: React.FC = ({}) => {
  const { openDialog } = useContactDialog();
  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center px-4 py-10 text-center mb-8 md:px-8"
    >
      {/* Globe sin fondo blanco */}
      <div className="relative flex w-full max-w-lg items-center justify-center overflow-hidden rounded-lg px-4 pb-20 pt-8 md:pb-32 bg-transparent">
        {/* Ocultamos el texto por defecto del componente globe */}
        <span>Globe</span>
        <Globe />
        {/* Capa de fondo radial sutil */}
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(255,255,255,0.05),transparent)]" />
      </div>

      {/* Texto principal */}
      <div className="mt-12 max-w-2xl">
        <h2 className="text-3xl font-medium text-white sm:text-4xl md:text-4xl leading-tight">
          FROM CONCEPT TO{" "}
          <AuroraText
            className="font-bold"
            colors={["#4079ff", "#40ffaa", "#fff564"]}
            speed={2}
          >
            CREATION
          </AuroraText>
          {/* <span className="font-bold text-[#fff564]"> CREATION</span> */}
        </h2>
        <h2 className="text-3xl font-medium text-white sm:text-4xl md:text-5xl leading-tight">
          LET'S MAKE IT{" "}
          <AuroraText
            className="font-bold"
            colors={["#fff564", "#40ffaa", "#4079ff"]}
          >
            HAPPEN!
          </AuroraText>{" "}
        </h2>
      </div>

      {/* Botón de contacto */}
      <div className="mt-18">
        <Magnet padding={160} disabled={false} magnetStrength={2}>
          <Button label={"Get in touch"} onClick={openDialog}></Button>
        </Magnet>
      </div>

      {/* Texto inferior */}
      <div className="mt-18 text-white text-sm">
        <p className="font-semibold text-lg w-full">
          I&apos;m available for full-time roles, remote and hybrid.
        </p>
        <p className="mt-1 text-gray-400 text-lg">
          Adaptative, dedicated, enthusiastic and always trying to improve.
        </p>
      </div>
      <ContactDialog />
    </section>
  );
};

export default ContactSection;
