import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const PROD_FALLBACK_MESSAGE = "Something went wrong. Please try again later.";

function NotFound({
  status = 404,
  description = "The page you are looking for cannot be found.",
}) {
  return (
    <main style={{ padding: "4rem" }}>
      <h2>{`Error ${status}:`}</h2>
      <h3>{description}</h3>
    </main>
  );
}

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

export function RouteErrorBoundary() {
  const error = useRouteError();
  const state = getRouteErrorState(error);

  return <NotFound status={state.status} description={state.description} />;
}

export default NotFound;
