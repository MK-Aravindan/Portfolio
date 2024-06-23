// import InstagramIcon from "@material-ui/icons/Instagram";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        {/* <InstagramIcon /> */}
        <a href="https://github.com/MK-Aravindan">
          <GithubIcon />
        </a>
        <a href="https://www.linkedin.com/in/m-k-aravindan-976728231/">
          <LinkedInIcon />
        </a>
      </div>
      <p>&copy; 2024 m-k-aravindan.web.app</p>
    </div>
  );
};

export default Footer;
