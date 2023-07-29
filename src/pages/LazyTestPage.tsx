import { Suspense, lazy } from "react";

const LazyTest = lazy(() => import("../components/LazyTest/LazyTestComponent"));
const loader = () => <p>Loading...</p>;

export const LazyTestPage = () => {
  return (
    <Suspense fallback={loader()}>
      <LazyTest />
    </Suspense>
  );
};
