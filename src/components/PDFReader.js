import React from "react";
import PDFViewer from "pdf-viewer-reactjs";

import resume from "../assets/NadiaAyad.pdf";

export default function PDFReader() {
  return (
    <div>
      <PDFViewer document={resume} />
    </div>
  );
}
