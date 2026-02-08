import PageHeader from "./../../components/PageHeader/PageHeader";
import YouTube from "react-youtube";
import ValueProp from "./../../components/ValueProp/ValueProp";
import founderImg from "./../../assets/Burns-Auto_Founder_Gray.jpg";
import groupImg from "./../../assets/Burns-Auto_Old-Pic-Large.jpg";
import styles from "./About.module.css";
import FeaturedServices from "./../../components/FeaturedServices/FeaturedServices";
import ServiceCard from "./../../components/ServiceCard/ServiceCard";

function About() {
  const opts = {
    height: "480px",
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
        mediaClassName={styles.video}
      >
        <h3>Our Story</h3>
        <p>
          At Burns' Auto Repair, history isn't something we dust off for
          nostalgia — it's the foundation of how we do business today. Our story
          on Sycamore Street began decades ago, long before modern diagnostics
          and computerized engines. Originally operated under the Steele family,
          the shop became a fixture in Newtown as a place where people brought
          their cars — and their trust. In 1977, Dave Burns Jr. took the wheel,
          continuing the tradition of honest work, fair pricing, and treating
          customers like neighbors rather than transactions.
        </p>
        <p>
          In 1995, the business was purchased by his son, Dave Burns III, who
          had been learning the trade bolt-by-bolt since he was a teenager. Like
          many family shops of that era, the education didn't happen in a
          classroom — it happened after school, on weekends, and under the hood.
          Skills were passed down the old-fashioned way: by doing the work,
          fixing mistakes, and standing behind the results.
        </p>
        <p>
          Today, Dave Burns IV carries that same legacy forward as a mechanic at
          the shop. Burns' Auto Repair is now a multi-generational business
          serving multi-generational customers. We're fixing vehicles for the
          grandchildren of some of our very first patrons — a responsibility we
          don't take lightly.
        </p>
        <p>
          When you bring your car to Burns', you aren't just a ticket number.
          You're part of a story that's been unfolding in Newtown for
          generations.
        </p>
      </ValueProp>
      <ValueProp reverse img={founderImg}>
        <h3>Rooted in Newtown</h3>
        <p>
          Located in the heart of Newtown, Burns' Auto Repair has served people
          from every walk of life — commuters, tradespeople, families, small
          business owners, and first-time drivers bringing in their very first
          car.
        </p>
        <p>
          Over the years, the vehicles have changed. The technology has changed.
          The expectations have changed. But the role we play in the community
          hasn't.
        </p>
        <p>
          We've always believed that a local repair shop should be exactly that
          — local. A place where you recognize faces, where conversations
          matter, and where your mechanic knows more than just your car's VIN
          number. Being on Sycamore Street means we're not hidden behind a
          corporate logo or a call center. We're right here, doing the work
          ourselves.
        </p>
        <p>
          That connection to Newtown isn't something we advertise — it's
          something we live every day.
        </p>
      </ValueProp>
      <ValueProp img={groupImg} paddingBottom>
        <h3>Old-School Values. Modern Technology.</h3>
        <p>
          While our values are rooted in tradition, our approach is anything but
          outdated.
        </p>
        <p>
          Today's vehicles require advanced diagnostic tools, specialized
          training, and constant adaptation. Burns' Auto Repair combines modern
          technology with old-school principles: diagnose first, explain
          clearly, and never recommend work that isn't genuinely needed.
        </p>
        <p>
          We believe good mechanics don't hide behind jargon. They take the time
          to explain what's going on, what your options are, and what actually
          matters — so you can make informed decisions about your vehicle.
        </p>
        <p>
          It's not about rushing cars through the bay. It's about doing the job
          right, standing behind the work, and earning trust one repair at a
          time.
        </p>
      </ValueProp>
      <FeaturedServices>
        <ServiceCard
          icon={<i className="fa-solid fa-wrench"></i>}
          cardTitle={"5-Star Customer Service"}
          outline
        >
          Clear explanations. No pressure. No work done until you understand and
          approve.
        </ServiceCard>
      </FeaturedServices>
    </main>
  );
}

export default About;
