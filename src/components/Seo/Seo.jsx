import { useLocation } from "react-router-dom";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  WEBSITE_SCHEMA,
  toAbsoluteUrl,
} from "../../seo/seoConfig";

function Seo({
  title,
  description,
  canonicalPath,
  keywords,
  noindex = false,
  ogType = "website",
  imageUrl = DEFAULT_OG_IMAGE,
  imageAlt = "Burns Auto Repair logo",
  structuredData = [],
  includeWebSiteSchema = true,
}) {
  const location = useLocation();
  const canonicalUrl = toAbsoluteUrl(
    canonicalPath || `${location.pathname}${location.search}`,
  );

  const schemaObjects = Array.isArray(structuredData)
    ? structuredData
    : [structuredData];
  const mergedSchemaObjects = includeWebSiteSchema
    ? [WEBSITE_SCHEMA, ...schemaObjects]
    : schemaObjects;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={imageAlt} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {mergedSchemaObjects.map((schemaObject, index) => (
        <script
          key={schemaObject["@id"] || `${canonicalUrl}-schema-${index}`}
          type="application/ld+json"
        >
          {JSON.stringify(schemaObject)}
        </script>
      ))}
    </>
  );
}

export default Seo;
