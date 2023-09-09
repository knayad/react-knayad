import "./App.css";
import "./css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import NavbarComp from "./components/NavbarComp";
// import ModalComponent from "./components/ModalComponent";
// import MySpline from "./components/MySpline";

//pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Reviews from "./pages/Reviews";

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          {/* 
          <body>
            <br />
          </body> */}
        </Routes>
      </BrowserRouter>
      {/* <ModalComponent /> */}
    </div>
  );
}

export default App;
