import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt="" />
      <h4>{project.skills}</h4>
      <p>{project.description}</p>
      <a href={project.url}>
        <GitHubIcon />
      </a>
    </div>
  );
};

export default ProjectDisplay;
