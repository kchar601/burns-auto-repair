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

export default NotFound;
