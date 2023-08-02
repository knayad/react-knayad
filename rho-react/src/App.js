import "./App.css";
import "./css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Navigate } from "react-router-dom";

//components
import NavbarComp from "./components/NavbarComp";
import ModalComponent from "./components/ModalComponent";
// import MySpline from "./components/MySpline";

//pages
import HomePage from "./pages/Home";
import About from "./pages/About";
import Programming from "./pages/Programming";

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComp />
        <br />
        <switch>
          {/* <MySpline /> */}
          <body>
            <Route exact path="/">
              <HomePage />
            </Route>
            <br />
            <Route path="/about">
              <About />
            </Route>
            <Route path="/programming">
              <Programming />
            </Route>
          </body>
          <ModalComponent />
        </switch>
      </div>
    </Router>
  );
}

export default App;
