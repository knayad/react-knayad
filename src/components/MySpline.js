import React, { Suspense } from "react";
import { Container } from "react-bootstrap";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function MySpline() {
  return (
    <div>
      <Suspense
        fallback={
          <Container>
            <h2>Loading...</h2>
          </Container>
        }
      >
        <Spline scene="https://prod.spline.design/lM6xXQskMGcZdgv5/scene.splinecode" />
      </Suspense>
    </div>
  );
}
