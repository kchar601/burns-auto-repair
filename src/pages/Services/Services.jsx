import PageHeader from "./../../components/PageHeader/PageHeader";
import styles from "./Services.module.css";
import TabsCard from "./../../components/TabsCard/TabsCard";
import CtaBanner from "./../../components/CtaBanner/CtaBanner";
import ValueProp from "./../../components/ValueProp/ValueProp";
import noBreak from "./../../hooks/noBreak.module.css";
import serviceInspectionImage from "./../../assets/shopzoomed.webp";
import serviceInspection640 from "./../../assets/responsive/shopzoomed-640.webp";
import serviceInspection800 from "./../../assets/responsive/shopzoomed-800.webp";
import serviceInspection1000 from "./../../assets/responsive/shopzoomed-1000.webp";
import maintenanceImage from "./../../assets/shop-upclose.webp";
import maintenance640 from "./../../assets/responsive/shop-upclose-640.webp";
import maintenance800 from "./../../assets/responsive/shop-upclose-800.webp";
import maintenance1000 from "./../../assets/responsive/shop-upclose-1000.webp";
import { useLocation } from "react-router-dom";
import Seo from "../../components/Seo/Seo";
import { buildBreadcrumbSchema } from "../../seo/seoConfig";

const tabs = [
  {
    title: "Brakes & Tires",
    slug: "brakes-tires",
    content: (
      <>
        <h2>Brakes & Tires</h2>

        <p>
          Your brakes and tires are your vehicle's primary safety systems. When
          either one is compromised, stopping distance increases, handling
          suffers, and risks rise quickly.
        </p>

        <h3>Brake Services</h3>

        <p>
          Squealing, grinding, vibration, or a soft pedal are all signs your
          braking system needs attention. We inspect components thoroughly
          before recommending repairs.
        </p>

        <ul>
          <li>Brake pads & rotors</li>
          <li>Calipers & hydraulic components</li>
          <li>Brake fluid service</li>
          <li>ABS and electronic braking systems</li>
        </ul>

        <p>
          We measure components and explain our findings so you understand
          what's needed — and why.
        </p>

        <h3>Tire Services</h3>

        <p>
          Tires affect braking, steering, ride quality, and fuel efficiency. We
          help you get the most out of your investment.
        </p>

        <ul>
          <li>Flat repairs</li>
          <li>Tire rotations</li>
          <li>Tire replacement guidance</li>
          <li>Wear pattern analysis</li>
        </ul>
      </>
    ),
  },
  {
    title: "Steering & Suspension",
    slug: "steering-suspension",
    content: (
      <>
        <h2>Steering & Suspension</h2>

        <p>
          Your steering and suspension systems control how your vehicle handles
          the road. When components wear out, you may notice pulling, clunking
          noises, uneven tire wear, or a rough, unstable ride.
        </p>

        <p>
          These issues don't just affect comfort — they impact braking
          performance, steering response, and overall safety.
        </p>

        <ul>
          <li>Shocks & struts</li>
          <li>Control arms & suspension bushings</li>
          <li>Ball joints & tie rods</li>
          <li>Sway bar links</li>
          <li>Alignment-related concerns</li>
        </ul>

        <p>
          We inspect suspension components methodically, identify worn or unsafe
          parts, and prioritize repairs based on safety and long-term
          reliability — not guesswork.
        </p>
      </>
    ),
  },
  {
    title: "AC & Heating",
    slug: "ac-heating",
    content: (
      <>
        <h2>AC & Heating</h2>

        <p>
          A properly functioning climate control system keeps you comfortable
          and helps maintain clear visibility in extreme temperatures. If your
          AC isn't cooling or your heat isn't consistent, there's usually an
          underlying issue that needs attention.
        </p>

        <p>
          Modern climate systems are complex, combining electronics, sensors,
          and mechanical components.
        </p>

        <ul>
          <li>Air conditioning diagnostics & repair</li>
          <li>Refrigerant leak detection</li>
          <li>Heater core and blower motor issues</li>
          <li>Climate control electronics</li>
        </ul>

        <p>
          We diagnose the problem accurately before recommending repairs,
          ensuring comfort without unnecessary parts replacement.
        </p>
      </>
    ),
  },
  {
    title: "Check Engine & Diagnostics",
    slug: "check-engine-diagnostics",
    content: (
      <>
        <h2>Check Engine & Diagnostics</h2>

        <p>
          When a warning light appears on your dashboard, it's your vehicle
          signaling that something isn't operating as intended. The cause can
          range from minor to serious, and ignoring it often leads to larger
          issues.
        </p>

        <p>
          We use professional-grade diagnostic equipment and live data analysis
          to identify the true source of the problem.
        </p>

        <ul>
          <li>Check Engine & warning light diagnostics</li>
          <li>Performance and drivability concerns</li>
          <li>Fuel, ignition, and emissions issues</li>
          <li>Engine management system analysis</li>
        </ul>

        <p>
          You'll receive a clear explanation of what needs immediate attention,
          what can wait, and what your options are — before any work begins.
        </p>
      </>
    ),
  },
  {
    title: "Electrical Systems",
    slug: "electrical-systems",
    content: (
      <>
        <h2>Electrical Systems</h2>

        <p>
          Electrical systems power nearly every function in today's vehicles —
          from starting the engine to operating safety and convenience features.
          When electrical problems arise, symptoms can be intermittent and
          difficult to diagnose.
        </p>

        <p>Proper testing is critical to avoid unnecessary part replacement.</p>

        <ul>
          <li>Battery testing & replacement</li>
          <li>Starter & alternator diagnostics</li>
          <li>Charging system repairs</li>
          <li>Electrical fault tracing</li>
        </ul>

        <p>
          We isolate the root cause of electrical issues and repair them
          correctly so you can rely on your vehicle every time you start it.
        </p>
      </>
    ),
  },
];

const SERVICE_HASH_TITLES = {
  "brakes-tires": "Brake & Tire Repair",
  "steering-suspension": "Steering & Suspension Repair",
  "ac-heating": "Auto AC & Heating Repair",
  "check-engine-diagnostics": "Check Engine Diagnostics",
  "electrical-systems": "Auto Electrical Repair",
  "scheduled-maintenance": "Scheduled Auto Maintenance",
  "state-inspections-emissions": "PA State Inspection & Emissions",
};

const SERVICES_DESCRIPTION =
  "Get expert auto repair services in Newtown, PA, including PA inspections, emissions, brakes, tires, diagnostics, electrical, AC/heating, and maintenance.";

function Services() {
  const { hash } = useLocation();
  const rawHash = (hash || "").replace("#", "").trim();
  const titlePrefix = SERVICE_HASH_TITLES[rawHash] || "Auto Repair Services";
  const pageTitle = `${titlePrefix} in Newtown, PA | Burns' Auto Repair`;

  return (
    <main className="subPage">
      <Seo
        title={pageTitle}
        description={SERVICES_DESCRIPTION}
        canonicalPath="/services"
        structuredData={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />
      <PageHeader
        title={
          <>
            Old-School Service,{" "}
            <span className={noBreak.noBreak}>Modern Technology</span>
          </>
        }
        sub={
          "Whether you drive a classic domestic or a modern import, our team combines advanced diagnostic tools with the honest, hard-working values of a traditional garage."
        }
      />
      <section className={styles.slantContainer}>
        <div className={styles.slantImageWrap}>
          <img
            className={styles.slantImage}
            src={serviceInspectionImage}
            srcSet={`${serviceInspection640} 640w, ${serviceInspection800} 800w, ${serviceInspection1000} 1000w, ${serviceInspectionImage} 1582w`}
            sizes="(max-width: 1024px) 100vw, 800px"
            alt="Burns Auto Repair shop exterior"
            width="1582"
            height="1001"
            loading="lazy"
            decoding="async"
          />
        </div>

        <section
          id="state-inspections-emissions"
          className={styles.slantContent}
        >
          <h2>PA State Inspections & Emissions</h2>

          <p>
            If you're a Pennsylvania resident, you already know the routine:
            once a year, your vehicle needs a state inspection. At Burns' Auto
            Repair, we treat that inspection as more than a legal requirement —
            it's a yearly safety check designed to protect you, your passengers,
            and everyone else on the road.
          </p>

          <p>
            Our goal isn't to fail vehicles. It's to make sure they're genuinely
            safe, compliant, and evaluated honestly.
          </p>

          <h3>The Safety Inspection</h3>

          <p>
            When your car comes into the bay, we're looking for real safety
            concerns — not technicalities. Following PennDOT regulations, our
            certified technicians inspect:
          </p>

          <ul>
            <li>
              <strong>Brakes</strong> - Measuring pad thickness and checking for
              leaks so you can stop confidently.
            </li>
            <li>
              <strong>Tires</strong> - Verifying tread depth and inspecting for
              dry rot or sidewall damage.
            </li>
            <li>
              <strong>Steering & Suspension</strong> - Checking components that
              affect control and stability.
            </li>
            <li>
              <strong>Lights & Electrical</strong> - Ensuring all required
              safety lighting functions properly.
            </li>
            <li>
              <strong>Glass & Mirrors</strong> - Confirming clear visibility
              with no obstructing cracks.
            </li>
            <li>
              <strong>Exhaust & Fuel Systems</strong> - Inspecting for leaks
              that could allow harmful fumes into the cabin.
            </li>
          </ul>

          <h3>Emissions Testing</h3>

          <p>
            Because we're in the Philadelphia region, emissions standards are
            more strict. We connect to your vehicle's onboard computer to ensure
            it's not releasing excessive pollutants.
          </p>

          <p>
            <strong>
              If your Check Engine Light is on, your vehicle will automatically
              fail emissions.
            </strong>
            <br />
            <br />
            <em>
              Pro tip: Don't clear the code right before your appointment. The
              system needs time to reset. If the light is on, bring it to us
              first — we'll diagnose it properly and explain your options.
            </em>
          </p>

          <div className="checklist-box">
            <h3>📝 What to Bring</h3>
            <ul>
              <li>Valid PA registration</li>
              <li>Valid insurance (physical or digital)</li>
              <li>Wheel lock key (if applicable)</li>
            </ul>
          </div>
        </section>
      </section>
      <section id="scheduled-maintenance" className={styles.scheduledServices}>
        <h2 className={styles.maintenanceHeader}>
          Scheduled Maintenance Services
        </h2>
        <ValueProp
          img={maintenanceImage}
          imgSrcSet={`${maintenance640} 640w, ${maintenance800} 800w, ${maintenance1000} 1000w, ${maintenanceImage} 1920w`}
          imgSizes="(max-width: 1150px) 100vw, 50vw"
          imgWidth="1920"
          imgHeight="1440"
          imgAlt="Technician working on a vehicle at Burns Auto Repair"
          reverse
        >
          <div>
            <p>
              Every vehicle comes with a maintenance roadmap designed to
              maximize longevity and reliability. We use professional diagnostic
              tools to pull the exact factory recommendations for your specific
              year, make, and model — then apply real-world experience to
              determine what actually matters.
            </p>

            <p>
              No guessing. No blanket schedules. Just data-backed decisions.
            </p>

            <h3>Common Maintenance Services</h3>

            <ul>
              <li className={styles.services}>
                <strong>Oil & Filter Changes</strong>
                <ul>
                  <li>
                    Protects internal engine components and prevents premature
                    wear.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Fluid Services</strong>
                <ul>
                  <li>
                    Transmission, coolant, brake, and power steering fluids
                    tested before service is recommended.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Air & Cabin Filters</strong>
                <ul>
                  <li>
                    Keeps engines efficient and passengers breathing clean air.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Tire Rotations</strong>
                <ul>
                  <li>Promotes even tire wear and extends tire life.</li>
                </ul>
              </li>
            </ul>

            <h3>The Burns' Approach</h3>

            <p>
              Many shops treat scheduled maintenance as a checklist. We treat it
              as a conversation.
            </p>

            <p>
              When reviewing your vehicle's service schedule, we break it into
              two categories:
            </p>

            <ul>
              <li>
                <strong>Essential Services</strong>
                <ul>
                  <li>
                    What's required for safety, reliability, and warranty
                    protection.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Professional Insight</strong>
                <ul>
                  <li>
                    What manufacturers suggest versus what we consistently see
                    in real-world driving.
                  </li>
                </ul>
              </li>
            </ul>

            <p>
              If a recommended service isn't necessary yet for your vehicle,
              we'll tell you. Our goal is long-term trust — not short-term
              upselling.
            </p>
          </div>
        </ValueProp>
      </section>

      <div className={styles.tabsContainer}>
        <TabsCard tabs={tabs} />
      </div>
      <CtaBanner
        title={"Not Sure What You Need?"}
        body={
          "We're happy to provide an expert's second opinion on any \"required\" maintenance list you've been given elsewhere."
        }
        ctaText={"Schedule an Appointment Today"}
        link={"Tel: (215) 968-3791"}
      />
    </main>
  );
}

export default Services;
