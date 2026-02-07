import PageHeader from "./../../components/PageHeader/PageHeader";
import YouTube from "react-youtube";
import ValueProp from "./../../components/ValueProp/ValueProp";

function About() {
  const opts = {
    minHeight: "480px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const _onReady = (event) => {
    event.target.setVolume(0);
  };

  return (
    <main>
      <title>About | Burns Auto Repair | Newtown, PA</title>
      <PageHeader
        title={"A Legacy Under the Hood"}
        sub={
          "Your partner in automotive safety. We are more than just a repair shop — we are your neighbors, proudly serving Newtown for generations."
        }
      />
      <ValueProp
        iframe={
          <div className="video-container">
            <YouTube opts={opts} videoId="lQAWI_3EKV0" onReady={_onReady} />
          </div>
        }
      >
        <h3>Our Story</h3>
        <p>
          At Burns' Auto Repair, history isn't just something we look back
          on—it's the foundation of how we do business today. Our story on
          Sycamore Street began decades ago. While the shop originally served
          Newtown under the Steele family, Dave Burns Jr. took the wheel in
          1977, cementing a legacy of hard work and integrity.
          <br />
          <br /> In 1995, the business was purchased by his son, Dave Burns III,
          who had been learning the trade bolt-by-bolt since he was a teenager.
          His son, Dave Burns IV, is currently a mechanic working at the shop.
          Today, we are proud to say that we are a multi-generational business
          serving multi-generational customers. We are fixing the vehicles for
          the grandchildren of our very first patrons. When you bring your car
          to Burns, you aren't just a ticket number; you're family.
        </p>
      </ValueProp>
    </main>
  );
}

export default About;
