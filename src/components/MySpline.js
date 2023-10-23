import React, { Suspense } from "react";
import { Container } from "react-bootstrap";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function MySpline() {
  return (
    <div>
      <Suspense
        fallback={
          <Container>
            <h3> This may take a several moments to load... </h3>
          </Container>
        }
      >
        <Spline scene="https://draft.spline.design/JbFXyAU7Gw7obPEY/scene.splinecode" />
      </Suspense>
    </div>
  );
}
