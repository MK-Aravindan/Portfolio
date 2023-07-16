import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import profileImage from "./assets/profile.jpg";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Router>
        <Helmet>
          <title>M K Aravindan Portfolio</title>
          <meta
            name="description"
            content="Welcome to the portfolio website of M K Aravindan. Explore my work and projects in web development."
          />
          <meta property="og:title" content="M K Aravindan Portfolio" />
          <meta
            property="og:description"
            content="Welcome to the portfolio website of M K Aravindan. Explore my work and projects in web development."
          />
          <meta property="og:image" content={profileImage} />
          <meta property="og:url" content="https://m-k-aravindan.web.app/" />
          <meta property="og:type" content="website" />
          <meta
            name="keywords"
            content="M K Aravindan, Portfolio, Web Development, Projects"
          />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://m-k-aravindan.web.app/" />
        </Helmet>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
