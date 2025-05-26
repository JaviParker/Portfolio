import Ribbons from "../Animations/Ribbons/Ribbons";
import Particles from "../Backgrounds/Particles/Particles";

const Background: React.FC = ({}) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={180}
          particleSpread={10}
          speed={0.01}
          particleBaseSize={180}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-screen z-6 ">
        <Ribbons
          baseThickness={6}
          colors={["#ffffff"]}
          speedMultiplier={0.5}
          maxAge={280}
          enableFade={true}
          enableShaderEffect={true}
        />
      </div>
    </>
  );
};

export default Background;
