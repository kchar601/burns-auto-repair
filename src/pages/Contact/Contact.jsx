import PageHeader from "./../../components/PageHeader/PageHeader";
import ValueProp from "./../../components/ValueProp/ValueProp";

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
        iframe={
          <iframe
            width="100%"
            height="100%"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-74.94414925575258%2C40.227457077182606%2C-74.93138194084169%2C40.23337095408929&amp;layer=hot&amp;marker=40.230414080185014%2C-74.93776559829712"
            style={{ border: "1px solid black" }}
          />
        }
      >
        <h2>How to reach us:</h2>
      </ValueProp>
    </main>
  );
}

export default Contact;
