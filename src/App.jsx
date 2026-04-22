import { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import AppLayout from "./pages/AppLayout/AppLayout";
import RouteErrorBoundary from "./pages/NotFound/RouteErrorBoundary";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";

const Services = lazy(() => import("./pages/Services/Services"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const About = lazy(() => import("./pages/About/About"));
const Testimonials = lazy(() => import("./pages/Testimonials/Testimonials"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const ROUTE_FALLBACK_STYLE = { minHeight: "calc(100vh - 120px)" };

function withSuspense(element) {
  return (
    <Suspense
      fallback={<div aria-hidden="true" style={ROUTE_FALLBACK_STYLE} />}
    >
      {element}
    </Suspense>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<AppLayout />}
      errorElement={<RouteErrorBoundary />}
    >
      <Route index element={withSuspense(<Homepage />)} />
      <Route path="services" element={withSuspense(<Services />)} />
      <Route path="contact" element={withSuspense(<Contact />)} />
      <Route path="about" element={withSuspense(<About />)} />
      <Route path="testimonials" element={withSuspense(<Testimonials />)} />
      <Route
        path="*"
        element={withSuspense(
          <NotFound
            status={404}
            description="The page you are looking for cannot be found."
          />,
        )}
      />
    </Route>,
  ),
);

export default function App() {
  return <RouterProvider router={router} />;
}
