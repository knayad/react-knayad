import "./App.css";
import "./css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import NavbarComp from "./components/NavbarComp";
// import ModalComponent from "./components/ModalComponent";
// import Particles from "particlesjs";

//pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Repositories from "./pages/Repositories";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Spline from "./pages/Spline";
import Contact from "./pages/Contact";
import HireMe from "./pages/HireMe";

function App() {
  // var particles = Particles.init({
  //   selector: ".background",
  //   color: ["#020024", "#da3312", "#217921"],
  //   connectParticles: true,
  //   speed: 0.5,
  // });
  return (
    <div className="App">
      <NavbarComp />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/repositories" element={<Repositories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hire" element={<HireMe />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/spline" element={<Spline />} />
          <Route path="*" element={<NotFound />} />
          {/* 
          <body>
            <br />
          </body> */}
        </Routes>
      </BrowserRouter>
      {/* <ModalComponent /> */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
