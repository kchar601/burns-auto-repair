export const SITE_URL = "https://www.burnsautorepair.com";
export const SITE_NAME = "Burns' Auto Repair";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/Burns%20favicon.png`;

export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  inLanguage: "en-US",
};

export const AUTO_REPAIR_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": `${SITE_URL}/#autorepair`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  image: DEFAULT_OG_IMAGE,
  telephone: "+12159683791",
  email: "burnsauto19@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "19 N Sycamore Street",
    addressLocality: "Newtown",
    addressRegion: "PA",
    postalCode: "18940",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "07:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "08:00",
      closes: "16:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/BurnsAutoRepair19/",
    "https://www.instagram.com/burnsautorepair/",
  ],
};

export function toAbsoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return new URL(normalizedPath, SITE_URL).toString();
}

export function buildBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    })),
  };
}
