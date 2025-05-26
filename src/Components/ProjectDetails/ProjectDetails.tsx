import React from "react";
import { Safari } from "../magicui/safari";
import ColorfulButton from "../ColorfulButton/ColorfulButton";
import Skill from "../Skill/Skill";

interface ProjectDetailsProps {
  name: string;
  description: string;
  videoUrl?: string;
  skills: string[];
  githubUrl?: string;
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
};

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  name,
  description,
  videoUrl,
  skills,
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 p-6 rounded-2xl shadow-lg w-full max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 p-6 rounded-2xl shadow-lg w-full max-w-6xl mx-auto mt-20">
        {/* Lado Izquierdo */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 text-white self-stretch">
          <h2 className="text-3xl font-bold">{name}</h2>
          <p className="mt-4 text-lg text-gray-300">{description}</p>

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

          {/* Botón / Icono para GitHub */}
          <div className="mt-6">
            <a
              href="https://github.com/tu-repositorio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              {/* <p className='text-white'>Ver en GitHub <i className='devicon-github-original'></i></p> */}
              <ColorfulButton label="Check in GitHub" className="w-full" />
            </a>
          </div>
        </div>

        {/* Lado Derecho: Vista previa del proyecto */}
        <div className="w-full lg:w-1/2 flex justify-center self-stretch">
          <Safari
            url="https://www.google.com"
            className="w-full max-w-md lg:max-w-lg h-auto"
            videoSrc={videoUrl}
            mode="default"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
