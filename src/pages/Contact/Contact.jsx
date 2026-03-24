import PageHeader from "./../../components/PageHeader/PageHeader";
import ValueProp from "./../../components/ValueProp/ValueProp";
import navStyles from "./../../components/AppNav/AppNav.module.css";
import styles from "./Contact.module.css";
import SmartStatus from "./../../components/SmartStatus/SmartStatus";
import Seo from "../../components/Seo/Seo";
import { buildBreadcrumbSchema, toAbsoluteUrl } from "../../seo/seoConfig";

const CONTACT_TITLE = "Contact a Mechanic in Newtown, PA | Burns' Auto Repair";
const CONTACT_DESCRIPTION =
  "Contact Burns' Auto Repair in Newtown, PA to schedule auto service, call our shop, or visit us at 19 N Sycamore Street.";

const CONTACT_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${toAbsoluteUrl("/contact")}#webpage`,
  url: toAbsoluteUrl("/contact"),
  name: "Contact Burns' Auto Repair",
  description: CONTACT_DESCRIPTION,
};

function Contact() {
  return (
    <main>
      <Seo
        title={CONTACT_TITLE}
        description={CONTACT_DESCRIPTION}
        canonicalPath="/contact"
        structuredData={[
          CONTACT_PAGE_SCHEMA,
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <PageHeader
        title={"Contact"}
        sub={
          "Have questions or ready to schedule service? We're here to help! Reach out to us by phone, email, or stop by our shop. We look forward to serving you."
        }
      />
      <ValueProp
        mediaClassName={styles.mapMedia}
        iframe={
          <iframe
            width="100%"
            height="100%"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-74.94396150112154%2C40.22782159006885%2C-74.93156969547273%2C40.232990089763476&amp;layer=mapnik&amp;marker=40.23040588921926%2C-74.93776559829712"
            className={styles.mapFrame}
          />
        }
      >
        <h2 className={styles.header}>How to reach us:</h2>
        <div className={styles.flex}>
          <div>
            <ul
              className={`${navStyles.links} ${navStyles.linksVert} ${navStyles.socials}`}
            >
              <li>
                <a href="tel:+12159683791">(215) 968-3791</a>
              </li>
              <li>
                <a href="mailto:office+website@burnsautorepair.com">office@burnsautorepair.com</a>
              </li>
              <li className={navStyles.noMargin}>
                <a
                  href="https://maps.app.goo.gl/XPAXPgE9K1cnejQG6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  19 N Sycamore Street
                  <br />
                  Newtown, PA 18940
                </a>
              </li>
            </ul>
          </div>
          <p className={styles.large}>OR</p>
          <div>
            <p className={styles.contactNote}>
              Have questions? Stop by anytime — we're always happy to help.
            </p>
          </div>
        </div>
        <SmartStatus card />
      </ValueProp>
    </main>
  );
}

export default Contact;
