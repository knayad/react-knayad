import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages
// import Home from "./pages/Home";

//components
import NavbarComp from "./components/NavbarComp";
import MySpline from "./components/Spline";
import ModalComponent from "./components/ModalComponent";

//pages
import Programming from "./pages/Programming";

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <body>
        <MySpline />
        {/* <Home /> */}
        <Programming />
        <br />
      </body>
      <ModalComponent />
    </div>
  );
}

export default App;
