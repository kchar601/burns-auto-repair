import PageHeader from "./../../components/PageHeader/PageHeader";
import YouTube from "react-youtube";
import ValueProp from "./../../components/ValueProp/ValueProp";
import founderImg from "./../../assets/Burns-Auto_Founder_Gray.webp";
import groupImg from "./../../assets/Burns-Auto_Old-Pic-Large.webp";
import FeaturedServices from "./../../components/FeaturedServices/FeaturedServices";
import ServiceCard from "./../../components/ServiceCard/ServiceCard";
import CtaBanner from "./../../components/CtaBanner/CtaBanner";
import Seo from "../../components/Seo/Seo";
import { buildBreadcrumbSchema } from "../../seo/seoConfig";

const ABOUT_TITLE =
  "About Our Family-Owned Auto Repair Shop in Newtown, PA | Burns' Auto Repair";
const ABOUT_DESCRIPTION =
  "Learn the story of Burns' Auto Repair, a family-owned mechanic shop in Newtown, PA trusted since 1957 for honest diagnostics, quality repairs, and personal service.";
const ABOUT_KEYWORDS =
  "auto repair Newtown PA, mechanic Newtown PA, car repair Newtown, family-owned auto repair, ASE certified mechanics, Burns Auto Repair";

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
      <Seo
        title={ABOUT_TITLE}
        description={ABOUT_DESCRIPTION}
        keywords={ABOUT_KEYWORDS}
        canonicalPath="/about"
        structuredData={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
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
        imgAlt="Historic portrait of the Burns' family leadership"
        lowPaddingOnSmallScreen
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
        imgAlt="Historic photo of the Burns' Auto Repair team"
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
            <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="icon-svg" style={{ color: "#facc15" }}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
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
          icon={<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="icon-svg"><path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0s0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>}
          cardTitle={"Clear Communication"}
          outline
        >
          Life doesn't stop when your car's in the shop. If something changes,
          we'll let you know right away so you can plan accordingly. As soon as
          we know — you'll know.
        </ServiceCard>
        <ServiceCard
          icon={<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="icon-svg"><path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>}
          cardTitle={"Integrity in Every Repair"}
          outline
        >
          Decades of hands-on experience mean we know when a repair is necessary
          — and when it isn't. Our approach is measured, deliberate, and built
          around doing the job right the first time.
        </ServiceCard>
        <ServiceCard
          icon={
            <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="icon-svg" style={{ color: "#facc15" }}><path d="M400 0L176 0c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8L24 64C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9L192 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-26.1 0C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24L446.4 64c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112l84.4 0c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6l84.4 0c-5.1 66.3-31.1 111.2-63 142.3z"/></svg>
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
