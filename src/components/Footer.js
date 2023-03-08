// import InstagramIcon from "@material-ui/icons/Instagram";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        {/* <InstagramIcon /> */}
        <a href="https://github.com/MKAravindan">
          <GithubIcon />
        </a>
        <a href="https://www.linkedin.com/in/m-k-aravindan-976728231/">
          <LinkedInIcon />
        </a>
      </div>
      <p>&copy; 2022 mkaravindan.com</p>
    </div>
  );
};

export default Footer;
