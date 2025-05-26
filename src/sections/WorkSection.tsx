import SplitText from "../TextAnimations/SplitText/SplitText";
import AnimatedContent from "../Animations/AnimatedContent/AnimatedContent";
import GradientText from "../TextAnimations/GradientText/GradientText";

const WorkSection: React.FC = ({}) => {
  return (
    <section
      id="work"
      style={{
        position: "relative",
        width: "100vw",
        zIndex: 3,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fbfbfb",
      }}
    >
      {/* fondo animado */}

      <SplitText
        text={"Hello, I'm "}
        className="text-4xl font-semibold text-center"
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
          className="custom-class text-6xl"
        >
          Javier Martinez
        </GradientText>
        <div
          style={{
            position: "relative",
            height: "100px",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <SplitText
            text={"Software engineer"}
            className="text-5xl font-semibold text-center"
            delay={100}
            animationFrom={{
              opacity: 0,
              transform: "translate3d(0,50px,0)",
            }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            threshold={0.1}
            rootMargin="-50px"
          />
        </div>
        <div className="position-absolute">
          <p className="text-2xl text-center w-200 ">
            From gathering requirements to deployment & maintenance, I build
            creative, scalable and efficient solutions.
          </p>
        </div>
      </AnimatedContent>
    </section>
  );
};

export default WorkSection;

