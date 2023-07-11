import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/Project.css";

const Projects = () => {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      document.querySelectorAll('.projectItem').forEach((item) => {
        item.classList.add('show');
      });
    }
  }, [inView]);

  return (
    <div className="projects">
      <h1
        style={{
          fontSize: "30px",
          fontWeight: "900",
          textAlign: "center",
          color: "white",
          width: "fit-content",
          marginTop: "-10px",
          padding: "15px",
          backgroundColor: "rgba(49, 49, 49, 0.5)",
          border: "1px solid rgba(108, 108, 108, 0.3)",
          borderRadius: "12px",
          boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.2)",
          display: "inline-block",
        }}
      >
        Personal Projects
      </h1>{" "}
      <div className="projectList" ref={ref}>
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
