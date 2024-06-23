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

  const [ref4, inView4] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [ref5, inView5] = useInView({
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
    if (inView4) {
      document.querySelector(".item4").classList.add("show");
    }
    if (inView5) {
      document.querySelector(".item5").classList.add("show");
    }
  }, [inView1, inView2, inView3, inView4, inView5]);

  return (
    <div className="home">
      <div className="about">
        <img src={profileImage} alt="Aravindan M K Profile" />
        <h2>ARAVINDAN M K</h2>
        <div className="prompt">
          <p>
          I love to build, develop, handle and sometimes dabble in code. Data? Yeah, I handle that too!
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
            <h2>Programming Languages</h2>
            <span>
              Python, Java and JavaScript (Begineer)
            </span>
          </li>
          <li className="item2" ref={ref2}>
            <h2>Database</h2>
            <span>
              BigQuery, Microsoft SQL Server, PostgreSQL, MySQL
            </span>
          </li>
          <li className="item3" ref={ref3}>
            <h2>Processing Tools</h2>
            <span>Databricks, Pandas, PySpark</span>
          </li>
          <li className="item4" ref={ref4}>
            <h2>Technologies and Frameworks</h2>
            <span>HTML, CSS, Git and GitHub, ReactJS (Begineer)</span>
          </li>
          <li className="item5" ref={ref5}>
            <h2>Others</h2>
            <span>Problem Solving, Organizational</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
