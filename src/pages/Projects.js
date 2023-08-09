import { useState, useEffect } from "react";

export default function Projects() {
  const [project, setProject] = useState("");

  useEffect(() => {
    console.log("State updated" + project);
  }, [project]);

  return (
    <>
      <input></input>
    </>
  );
}
