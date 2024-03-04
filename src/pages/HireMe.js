import { Button, Container } from "react-bootstrap";
import Typewriter from "../components/TypeWriter";

import { Worker } from "@react-pdf-viewer/core";
// Import the main component
import { Viewer } from "@react-pdf-viewer/core";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import pdf from "../assets/NadiaAyad.pdf";
import Repositories from "../components/Repositories";

const HireMe = () => {
  return (
    <Container>
      <h1 id="typeEffect">
        <Typewriter text="Hire Me" delay={100} />
      </h1>
      <br />
      <br />
      {/* pdf viewer start */}
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer fileUrl={pdf} />
      </Worker>
      {/* pdf viewer end */}
      <br />
      <Button href={pdf} download="Nadia_Ayad">
        Download
      </Button>{" "}
      <br />
      <br />
      <Repositories />
    </Container>
  );
};

export default HireMe;
