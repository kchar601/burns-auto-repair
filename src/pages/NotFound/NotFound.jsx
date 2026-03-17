import Seo from "../../components/Seo/Seo";

function NotFound({
  status = 404,
  description = "The page you are looking for cannot be found.",
}) {
  return (
    <main style={{ padding: "4rem" }}>
      <Seo
        title={`${status} | Burns' Auto Repair`}
        description={description}
        noindex
        includeWebSiteSchema={false}
      />
      <h2>{`Error ${status}:`}</h2>
      <h3>{description}</h3>
    </main>
  );
}

export default NotFound;
