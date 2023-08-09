import React, { Suspense } from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function MySpline() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://prod.spline.design/lM6xXQskMGcZdgv5/scene.splinecode" />
      </Suspense>
    </div>
  );
}
