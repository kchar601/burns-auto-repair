import PageHeader from "./../../components/PageHeader/PageHeader";
import YouTube from "react-youtube";
import ValueProp from "./../../components/ValueProp/ValueProp";
import founderImg from "./../../assets/Burns-Auto_Founder_Gray.jpg";
import groupImg from "./../../assets/Burns-Auto_Old-Pic-Large.jpg";
import FeaturedServices from "./../../components/FeaturedServices/FeaturedServices";
import ServiceCard from "./../../components/ServiceCard/ServiceCard";
import CtaBanner from "./../../components/CtaBanner/CtaBanner";

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
          <YouTube opts={opts} videoId="lQAWI_3EKV0" onReady={_onReady} />
        }
      >
        <h3>Our Story</h3>
        <p>
          At Burns' Auto Repair, history isn't something we dust off for
          nostalgia — it's the foundation of how we do business today. Our story
          on Sycamore Street began decades ago, long before modern diagnostics
          and computerized engines. The shop was originally operated by Dick and
          Dottie, the aunt and uncle of Dave Burns Jr., who built a reputation
          in Newtown for honest work and treating customers the right way.
        </p>
        <p>
          In 1977, Dave Burns Jr. took the wheel, carrying that same standard
          forward and establishing Burns' Auto Repair as a trusted neighborhood
          shop built on integrity, fair pricing, and personal service.
        </p>
        <p>
          In 1995, the business was purchased by his son, Dave Burns III, who
          had been learning the trade hands-on since his teenage years. The
          skills were passed down the old-fashioned way — by doing the work,
          fixing mistakes, and standing behind the results.
        </p>
        <p>
          Today, Dave Burns IV continues that legacy as a mechanic at the shop,
          working alongside longtime team members Douglas Gensbauer and John
          Dalton. With over 50 combined years at Burns' Auto Repair, they are
          familiar faces to generations of Newtown families who have trusted the
          same hands year after year.
        </p>
        <p>
          Burns' Auto Repair is now a multi-generational business serving
          multi-generational customers. When you bring your car to Burns', you
          aren't just a ticket number — you're a part of the Burns family.
        </p>
      </ValueProp>
      <ValueProp
        reverse
        img={founderImg}
        imgAlt="Historic portrait of the Burns family leadership"
        imgWidth={811}
        imgHeight={613}
      >
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
      <ValueProp
        img={groupImg}
        imgAlt="Historic photo of the Burns Auto Repair team"
        imgWidth={811}
        imgHeight={613}
        paddingBottom
      >
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
          icon={
            <i className="fa-solid fa-star" style={{ color: "#facc15" }}></i>
          }
          cardTitle={"5-Star Customer Service"}
          outline
        >
          We believe you should understand your car before approving any work.
          Our ASE-certified technicians explain issues clearly, answer questions
          honestly, and never begin repairs until you're comfortable with the
          plan.
        </ServiceCard>
        <ServiceCard
          icon={<i className="fa-solid fa-comment-dots"></i>}
          cardTitle={"Clear Communication"}
          outline
        >
          Life doesn't stop when your car's in the shop. If something changes,
          we'll let you know right away so you can plan accordingly. As soon as
          we know — you'll know.
        </ServiceCard>
        <ServiceCard
          icon={<i className="fa-solid fa-screwdriver-wrench"></i>}
          cardTitle={"Integrity in Every Repair"}
          outline
        >
          Decades of hands-on experience mean we know when a repair is necessary
          — and when it isn't. Our approach is measured, deliberate, and built
          around doing the job right the first time.
        </ServiceCard>
        <ServiceCard
          icon={
            <i className="fa-solid fa-trophy" style={{ color: "#facc15" }}></i>
          }
          cardTitle={"Going the Extra Mile"}
          outline
        >
          Since 1957, our reputation has been built on trust, not transactions.
          We stand behind our work, treat customers like neighbors, and take
          pride in earning repeat business across generations — because our name
          is on the sign.
        </ServiceCard>
      </FeaturedServices>
      <CtaBanner
        title={"Ready When You Are."}
        body={"When you need service, we're here — no pressure, no surprises."}
        ctaText={"Call the Shop"}
        link={"Tel: (215) 968-3791"}
      />
    </main>
  );
}

export default About;
