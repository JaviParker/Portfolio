import SplitText from "../TextAnimations/SplitText/SplitText";
import AnimatedContent from "../Animations/AnimatedContent/AnimatedContent";
import GradientText from "../TextAnimations/GradientText/GradientText";

const WorkSection: React.FC = () => {
  return (
    <section
      id="work"
      // Usa clases de Tailwind para el layout
      className="relative w-full min-h-screen flex flex-col justify-center items-center text-white p-4 z-3"
    >
      <SplitText
        text={"Hello, I'm "}
        // Tamaño de fuente responsivo
        className="text-3xl md:text-4xl font-semibold text-center"
        delay={100}
        animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
        animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
        threshold={0.1}
        rootMargin="-50px"
      />
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
      >
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={8}
          showBorder={false}
          // Tamaños de fuente responsivos. Muy importante para nombres/títulos grandes.
          className="custom-class text-5xl md:text-7xl lg:text-7xl text-center"
        >
          Javier Martinez
        </GradientText>
        
        {/* Contenedor para el subtítulo */}
        <div className="mt-2 text-center">
            <SplitText
                text={"Software engineer"}
                // Tamaño de fuente responsivo
                className="text-4xl md:text-5xl font-semibold"
                delay={100}
                animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                threshold={0.1}
                rootMargin="-50px"
            />
        </div>

        {/* Contenedor para el párrafo descriptivo */}
        <div className="mt-6 text-white text-center w-100 md:w-full">
          {/* Usa 'max-w-*' para limitar el ancho en pantallas grandes y mejorar la legibilidad */}
          <p className="text-x md:text-2xl text-center max-w-3xl mx-auto">
            From gathering requirements to deployment & maintenance, I build
            creative, scalable and efficient solutions.
          </p>
        </div>
      </AnimatedContent>
    </section>
  );
};

export default WorkSection;