import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";
import profileImage from "../assets/profile.jpg";

const Home = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView1) {
      document.querySelector(".item1").classList.add("show");
    }
    if (inView2) {
      document.querySelector(".item2").classList.add("show");
    }
    if (inView3) {
      document.querySelector(".item3").classList.add("show");
    }
  }, [inView1, inView2, inView3]);

  return (
    <div className="home">
      <div className="about">
        <img src={profileImage} alt="" />
        <h2> M K Aravindan</h2>
        <div className="prompt">
          <p>
            I am a hobbyist full-stack developer with a passion for learning and
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
          <li className="item1" ref={ref1}>
            <h2>Frontend</h2>
            <span>
              Hyper Text Markup Language (HTML), Java Server Pages (JSP),
              Cascading Style Sheets (CSS), React JS, Next JS.
            </span>
          </li>
          <li className="item2" ref={ref2}>
            <h2>Backend</h2>
            <span>
              Spring Boot, Node JS and Express JS, Java Date Base Connectivity
              (JDBC), MySQL, Mongo DB, Git & GitHub.
            </span>
          </li>
          <li className="item3" ref={ref3}>
            <h2>Programming Languages</h2>
            <span>Java, Javascript, Python, C</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
