import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import profileImage from "../assets/profile.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <img src={profileImage} alt="" />
        <h2> M K Aravindan</h2>
        <div className="prompt">
          <p>
            I am a hobbyist software developer with a passion for learning and
            creating.
          </p>
          <a href="https://www.linkedin.com/in/m-k-aravindan-976728231/">
            <LinkedInIcon />
          </a>
          <a href="mailto: aravindanmk02@gmail.com">
            <EmailIcon />
          </a>
          <a href="https://github.com/MK-Aravindan">
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>UI/UX Side</h2>
            <span>
              Hyper Text Markup Language (HTML), Java Server Pages (JSP),
              Cascading Style Sheets (CSS), React JS.
            </span>
          </li>
          <li className="item">
            <h2>Server and Data Side</h2>
            <span>
              Spring Boot, Java Date Base Connectivity (JDBC), MySQL, Git & GitHub.
            </span>
          </li>
          <li className="item">
            <h2>Programming Languages</h2>
            <span>Java, Javascript, Python, C</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
