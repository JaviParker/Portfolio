import ProjectDetailed from "../Components/ProjectDetailed/ProjectDetailed";

const ProjectsSection: React.FC = ({}) => {
  return (
    <section
      id="projects"
      className="shrink"
      style={{
        position: "relative",
        zIndex: 5,
        minHeight: "75vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <ProjectDetailed
        id="dif"
        name={"Cars administration"}
        description={
          "Was a project where we improve the way how them managed the organization vehicles data"
        }
        features={[
          "Api create and use",
          "Multi-data management",
          "Efficient design",
        ]}
        skills={["Laravel", "Bootstrap CSS", "JavaScript", "MySQL"]}
        videoUrl="/DIF1.mov"
        androidImageSrc="/assets/DIF1_Mobile.png"
        repoUrl="https://github.com/JaviParker/vehiculos-dif"
      />
      <ProjectDetailed
        id="paez"
        name={"Paez logistics"}
        description={
          "An app multirole that manage the logistics of different distribution enterprises "
        }
        features={[
          "Charts",
          "Map in real time",
          "AWS deployment",
          "Weather API",
          "Flask integration",
        ]}
        skills={[
          "Laravel",
          "Tailwind CSS",
          "JavaScript",
          "MySQL",
          "Vue",
          "Quasar",
          "Python",
          "AWS",
        ]}
        videoUrl="/assets/Paez.mp4"
        androidVideoSrc="/assets/Paez_vertical.mp4"
        repoUrl="https://github.com/JaviParker/RutasQ"
      />
      <ProjectDetailed
        id="militapp"
        name={"MilitApp"}
        description={
          "A project for the army that manage the data of the soldiers, manage the eating time and the map for raids"
        }
        features={[
          "Synchronized timer between devices",
          "Map in real time",
          "Firebase",
          "Efficient design",
        ]}
        skills={["React native", "Firebase", "JavaScript", "TypeScript"]}
        videoUrl="assets/MilitApp.mp4"
        androidVideoSrc="assets/MilitApp_vertical.mov"
        repoUrl="https://github.com/JaviParker/MilitApp"
      />
    </section>
  );
};

export default ProjectsSection;
