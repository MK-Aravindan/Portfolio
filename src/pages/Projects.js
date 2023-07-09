import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/Project.css";

const Projects = () => {
  return (
    <div className="projects">
      <h1
        style={{
          fontSize: "30px",
          textAlign: "center",
          color: "#3e497a",
          width: "fit-content",
          marginTop: "-10px",
          padding: "15px",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.2)",
          display: "inline-block",
        }}
      >
        Personal Projects
      </h1>{" "}
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
