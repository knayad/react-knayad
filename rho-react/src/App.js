import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages & components
import NavbarComp from "./components/NavbarComp";
import ModalComponent from "./components/ModalComponent";

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <header className="App-header">hey there!</header>
      <body>
        This is the body.
        <br />
        <ModalComponent />
      </body>
    </div>
  );
}

export default App;
