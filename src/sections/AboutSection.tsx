import SpotlightCard from "../Components/SpotlightCard/SpotlightCard";
import ShinyText from "../TextAnimations/ShinyText/ShinyText";
import SkillsGroup from "../Components/SkillsGroup/SkillsGroup";
import { CheckIcon, ClipboardIcon } from "lucide-react";
import { cn } from "../lib/utils";
import Skill from "../Components/Skill/Skill";
import TiltedCard from "../Components/TiltedCard/TiltedCard";
import { useState } from "react";

const AboutSection: React.FC = ({}) => {
  const [copied, setCopied] = useState<boolean>(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("javier.martinez.isw@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section
      id="about"
      className="w-full min-h-[75vh] flex flex-col justify-center items-center text-white z-5 p-4 mb-40"
    >
      {/* Cards resume */}
      <div className="h-auto shrink px-4 w-full md:px-8">
        <div className="flex flex-col lg:flex-row w-full">
          <div className="md:basis-2/3 flex flex-col shrink gap-5 p-5">
            <SpotlightCard
              className="card-spotlight max-w-260 left-0 w-100 mx-auto h-auto md:w-full"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <ShinyText text="About me" className="text-2xl font-bold" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 float-end"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>

              <div
                className="flex flex-row gap-2 transition-all cursor-pointer hover:text-emerald-500 font-extrabold"
                onClick={handleCopy}
              >
                <h5 className="text-sm mb-3 ">javier.martinez.isw@gmail.com</h5>
                <span>
                  <ClipboardIcon
                    className={cn(
                      "absolute h-4.5 w-4.5",
                      copied ? "scale-0 opacity-0" : "scale-100 opacity-100"
                    )}
                  />
                  <CheckIcon
                    className={cn(
                      "absolute h-4.5 w-4.5",
                      copied ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    )}
                  />
                </span>
              </div>
              <p className="text-sm">
                I'm a Software engineer with a passion for create solutions. I
                have experience in web and mobile development. From gathering
                requirements to deployment & maintenance, I craft scalable and
                efficient solutions.
              </p>

              {/* <Button label="Learn more" onClick={() => console.log('Button clicked')} />   */}
            </SpotlightCard>
            <SpotlightCard
              className="card-spotlight max-w-260 left-0 w-100 mx-auto h-auto md:w-full"
              spotlightColor="rgba(64, 121, 255, 0.2)"
            >
              <ShinyText
                text="My tech stack"
                className="text-2xl font-bold mb-5"
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 float-end"
              >
                <path d="M11.644 1.59a.75.75 0 0 1 .712 0l9.75 5.25a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.712 0l-9.75-5.25a.75.75 0 0 1 0-1.32l9.75-5.25Z" />
                <path d="m3.265 10.602 7.668 4.129a2.25 2.25 0 0 0 2.134 0l7.668-4.13 1.37.739a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.71 0l-9.75-5.25a.75.75 0 0 1 0-1.32l1.37-.738Z" />
                <path d="m10.933 19.231-7.668-4.13-1.37.739a.75.75 0 0 0 0 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 0 0 0-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 0 1-2.134-.001Z" />
              </svg>

              {/* Group of skill I have */}
              <SkillsGroup />

              {/* <Button label="Learn more" onClick={() => console.log('Button clicked')} />   */}
            </SpotlightCard>
            <div className="flex flex-col gap-5 basis-1/2 md:max-h-40 md:flex-row">
              <SpotlightCard
                className="card-spotlight max-w-120 min-w-90 w-100 left-0 mx-auto h-auto md:w-full"
                spotlightColor="rgba(255, 250, 215, 0.2)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8 mb-5 float-end"
                >
                  <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                  <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                  <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                </svg>

                <ShinyText text="Education" className="text-2xl font-bold" />
                <h5 className="text-sm mb-3">Software engineering</h5>
                <p className="text-sm">
                  I have a degree in software engineering at the Universidad
                  Politécnica de Durango.
                </p>
                {/* <Button label="Learn more" onClick={() => console.log('Button clicked')} />   */}
              </SpotlightCard>
              <SpotlightCard
                className="card-spotlight max-w-120 min-w-80 w-100 left-0 mx-auto h-auto md:w-full"
                spotlightColor="rgba(255, 250, 215, 0.2)"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-8 mb-5 float-end"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 0 0-3.471 2.987 10.04 10.04 0 0 1 4.815 4.815 18.748 18.748 0 0 0 2.987-3.472l3.386-5.079A1.902 1.902 0 0 0 20.599 1.5Zm-8.3 14.025a18.76 18.76 0 0 0 1.896-1.207 8.026 8.026 0 0 0-4.513-4.513A18.75 18.75 0 0 0 8.475 11.7l-.278.5a5.26 5.26 0 0 1 3.601 3.602l.502-.278ZM6.75 13.5A3.75 3.75 0 0 0 3 17.25a1.5 1.5 0 0 1-1.601 1.497.75.75 0 0 0-.7 1.123 5.25 5.25 0 0 0 9.8-2.62 3.75 3.75 0 0 0-3.75-3.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <ShinyText
                  text="Plus skills"
                  className="text-2xl font-bold mb-5"
                />
                <div className="flex flex-wrap gap-2 mb-5">
                  <Skill label="English B1" icon="" />
                  <Skill label="SOLID" icon="" />
                  <Skill label="Teamwork" icon="" />
                  <Skill label="Agile Metodologies" icon="" />
                </div>

                {/* <Button label="Learn more" onClick={() => console.log('Button clicked')} />   */}
              </SpotlightCard>
            </div>
          </div>
          <div className="w-100 left-0 mx-auto md:basis-1/3 md:w-full shrink min-w-100 md:p-5">
            <SpotlightCard
              className="card-spotlight min-w-50 w-full h-full"
              spotlightColor="rgba(195, 0, 255, 0.2)"
            >
              <ShinyText
                text="Top projects"
                className="text-2xl font-bold mb-4"
              />
              <TiltedCard
                imageSrc="/assets/dif.png"
                altText="at DIF estatal Durango"
                captionText="at DIF estatal Durango"
                containerHeight="200px"
                containerWidth="100%"
                imageHeight="200px"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-caption">Cars administration</p>
                }
                onClick={() =>
                  document.getElementById("dif")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
              />{" "}
              <br />
              <TiltedCard
                imageSrc="/assets/paez.png"
                altText="at Paez Computación"
                captionText="at Paez Computación & Sistemas"
                containerHeight="200px"
                containerWidth="100%"
                imageHeight="200px"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-caption">Distrubution system</p>
                }
                onClick={() =>
                  document.getElementById("paez")?.scrollIntoView({
                    behavior: "smooth",
                    block: "end",
                  })
                }
              />
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
