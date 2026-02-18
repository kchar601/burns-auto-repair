import { Suspense, lazy } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const NotFound = lazy(() => import("./NotFound"));
const PROD_FALLBACK_MESSAGE = "Something went wrong. Please try again later.";
const ERROR_FALLBACK_STYLE = { minHeight: "calc(100vh - 120px)" };

function getRouteErrorState(error) {
  const isDev = import.meta.env.DEV;

  if (isRouteErrorResponse(error)) {
    const rawMessage =
      typeof error.data === "string"
        ? error.data
        : error.data?.message || error.statusText || PROD_FALLBACK_MESSAGE;
    const isServerError = error.status >= 500;
    const description =
      !isDev && isServerError ? PROD_FALLBACK_MESSAGE : rawMessage;

    return { status: error.status || 500, description };
  }

  if (error instanceof Error) {
    return {
      status: 500,
      description: isDev ? error.message : PROD_FALLBACK_MESSAGE,
    };
  }

  if (typeof error === "string") {
    return {
      status: 500,
      description: isDev ? error : PROD_FALLBACK_MESSAGE,
    };
  }

  return { status: 500, description: PROD_FALLBACK_MESSAGE };
}

export default function RouteErrorBoundary() {
  const error = useRouteError();
  const state = getRouteErrorState(error);

  return (
    <Suspense fallback={<div aria-hidden="true" style={ERROR_FALLBACK_STYLE} />}>
      <NotFound status={state.status} description={state.description} />
    </Suspense>
  );
}
