// components/sections/ProjectDetailed.tsx
import SpotlightCard from "../SpotlightCard/SpotlightCard";
import ShinyText from "../../TextAnimations/ShinyText/ShinyText";
import Skill from "../Skill/Skill";
import Button from "../Button/Button";
import { Safari } from "../magicui/safari";
import Android from "../magicui/android";

interface ProjectDetailedProps {
  name: string;
  description: string;
  features: string[];
  skills: string[];
  videoUrl: string;
  androidVideoSrc?: string;
  androidImageSrc?: string;
  repoUrl: string;
  id: string;
}

// Mapeo entre tecnología y clase de icono
const iconMap: Record<string, string> = {
  React: "devicon-react-original colored",
  JavaScript: "devicon-javascript-plain colored",
  TypeScript: "devicon-typescript-plain colored",
  NextJs: "devicon-nextjs-plain",
  "Tailwind CSS": "devicon-tailwindcss-original colored",
  MySQL: "devicon-mysql-original colored",
  NodeJS: "devicon-nodejs-plain colored",
  Python: "devicon-python-plain colored",
  Laravel: "devicon-laravel-original colored",
  Postman: "devicon-postman-plain colored",
  Git: "devicon-git-plain colored",
  GitHub: "devicon-github-original",
  "React native": "devicon-react-original colored",
  Vue: "devicon-vuejs-plain colored",
  Php: "devicon-php-plain colored",
  Ionic: "devicon-ionic-original colored",
  Quasar: "devicon-quasar-plain colored",
  Firebase: "devicon-firebase-plain colored",
  SonarCube: "devicon-sonarqube-plain colored",
  Figma: "devicon-figma-plain colored",
  AWS: "devicon-amazonwebservices-plain-wordmark colored",
};

export default function ProjectDetailed({
  name,
  description,
  features,
  skills,
  videoUrl,
  androidVideoSrc,
  androidImageSrc,
  repoUrl,
  id,
}: //   technologies,
ProjectDetailedProps) {
  return (
    <section id={id} className="mt-5 md:px-8 md:py-10 w-full max-w-[1450px]">
      <div className="flex flex-col lg:flex-row w-full gap-5">
        {/* IZQUIERDA: cards informativas */}
        <div className="flex flex-col gap-5 md:basis-1/4">
          {/* PROYECTO */}
          <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
            <ShinyText text={name} className="text-xl font-bold mb-3" />
            <p className="text-sm">{description}</p>
          </SpotlightCard>

          {/* FEATURES */}
          <SpotlightCard spotlightColor="rgba(255, 215, 0, 0.2)">
            <ShinyText text="Features" className="text-xl font-bold mb-3" />
            <ol className="text-sm">
              {features.map((feature, index) => (
                <li key={index}>- {feature}</li>
              ))}
            </ol>
          </SpotlightCard>

          {/* TECNOLOGIAS */}
          <SpotlightCard spotlightColor="rgba(64, 255, 170, 0.2)">
            <ShinyText text="Tecnologies" className="text-xl font-bold mb-3" />
            {/* Tecnologías utilizadas */}
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((tech) => (
                <Skill
                  key={tech}
                  label={tech}
                  icon={iconMap[tech] || "devicon-plain"} // fallback
                />
              ))}
            </div>
          </SpotlightCard>

          {/* BOTÓN FUERA DE SpotlightCard */}
          <div className="mt-2">
            <Button
              className="w-full"
              label="Ver repositorio"
              onClick={() => window.open(repoUrl, "_blank")}
            />
          </div>
        </div>

        {/* CENTRO: Preview (Safari + Android), luego Features y Tech */}
        <div className="flex flex-col gap-5 md:basis-3/4 h-full w-100 left-0 mx-auto md:w-full">
          {/* PREVIEW CARD CON SAFARI + ANDROID */}
          {/* <ShinyText text="Preview" className="text-xl font-bold mb-3" /> */}
          <div className="flex flex-col lg:flex-row gap-4 mt-15">
            <div className="w-full lg:w-4/4">
              <Safari videoSrc={videoUrl} className="w-100 h-60 md:w-200 md:h-100" />
            </div>
            <div className="w-80 md:w-50 left-0 ml-15 h-[390px] flex justify-center items-center mt-60 md:mt-5 mb-90 md:mb-0">
              {androidImageSrc ? (
                <Android src={androidImageSrc} />
              ) : (
                androidVideoSrc && <Android videoSrc={androidVideoSrc} />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <hr className="border-t border-white my-8 mt-50" /> */}
    </section>
  );
}
