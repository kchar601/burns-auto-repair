import PageHeader from "./../../components/PageHeader/PageHeader";
import ValueProp from "./../../components/ValueProp/ValueProp";
import navStyles from "./../../components/AppNav/AppNav.module.css";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <main>
      <PageHeader
        title={"Contact Us"}
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
            src="https://www.openstreetmap.org/export/embed.html?bbox=-74.94414925575258%2C40.227457077182606%2C-74.93138194084169%2C40.23337095408929&amp;layer=hot&amp;marker=40.230414080185014%2C-74.93776559829712"
            className={styles.mapFrame}
          />
        }
      >
        <div>
          <h3>How to reach us:</h3>
          <ul
            className={`${navStyles.links} ${navStyles.linksVert} ${navStyles.socials}`}
          >
            <li>
              <a href="Tel: (215) 968-3791">(215) 968-3791</a>
            </li>
            <li>
              <a href="mailTo:burnsauto19@gmail.com">burnsauto19@gmail.com</a>
            </li>
            <li className={navStyles.noMargin}>
              <a
                href="https://maps.app.goo.gl/XPAXPgE9K1cnejQG6"
                target="_blank"
              >
                19 N Sycamore Street
                <br />
                Newtown, PA 18940
              </a>
            </li>
            <div className={navStyles.socialsInner}>
              <a
                className={navStyles.socialLink}
                href="https://www.facebook.com/BurnsAutoRepair19/"
                target="_blank"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                className={navStyles.socialLink}
                href="https://www.instagram.com/burnsautorepair/"
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </ul>
          <p className={styles.contactNote}>
            Or stop by and we'd be happy to help you in person.
          </p>
        </div>
      </ValueProp>
    </main>
  );
}

export default Contact;
