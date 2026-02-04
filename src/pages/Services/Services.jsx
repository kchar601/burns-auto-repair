import PageHeader from "./../../components/PageHeader/PageHeader";
import styles from "./Services.module.css";
import AccordionCard from "./../../components/AccordionCard/AccordionCard";
import TabsCard from "./../../components/TabsCard/TabsCard";
import CtaBanner from "./../../components/CtaBanner/CtaBanner";
import ValueProp from "./../../components/ValueProp/ValueProp";

const tabs = [
  {
    title: "State Inspections & Emissions",
    slug: "state-inspections-emissions",
    content: (
      <>
        <h3>PA State Inspections & Emissions</h3>

        <p>
          If you're a Pennsylvania resident, you already know the routine: once
          a year, your vehicle needs a state inspection. At Burns' Auto Repair,
          we treat that inspection as more than a legal requirement — it's a
          yearly safety check designed to protect you, your passengers, and
          everyone else on the road.
        </p>

        <p>
          Our goal isn't to fail vehicles. It's to make sure they're genuinely
          safe, compliant, and evaluated honestly.
        </p>

        <h4>The Safety Inspection</h4>

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
            <strong>Lights & Electrical</strong> - Ensuring all required safety
            lighting functions properly.
          </li>
          <li>
            <strong>Glass & Mirrors</strong> - Confirming clear visibility with
            no obstructing cracks.
          </li>
          <li>
            <strong>Exhaust & Fuel Systems</strong> - Inspecting for leaks that
            could allow harmful fumes into the cabin.
          </li>
        </ul>

        <h4>Emissions Testing</h4>

        <p>
          Because we're in the Philadelphia region, emissions standards are more
          strict. We connect to your vehicle's onboard computer to ensure it's
          not releasing excessive pollutants.
        </p>

        <p>
          <strong>
            If your Check Engine Light is on, your vehicle will automatically
            fail emissions.
          </strong>
        </p>

        <p>
          <em>
            Pro tip: Don't clear the code right before your appointment. The
            system needs time to reset. If the light is on, bring it to us first
            — we'll diagnose it properly and explain your options.
          </em>
        </p>

        <div className="checklist-box">
          <h4>📝 What to Bring</h4>
          <ul>
            <li>Valid PA registration</li>
            <li>Valid insurance (physical or digital)</li>
            <li>Wheel lock key (if applicable)</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title: "Scheduled Maintenance",
    slug: "scheduled-maintenance",
    content: (
      <>
        <h3>Scheduled Maintenance</h3>
        <p>
          Every car comes with a roadmap for longevity. Whether it's a high-tech
          import or a classic domestic, we use advanced diagnostic tools to pull
          the exact factory requirements for your specific year, make, and
          model. We don't just guess—we follow the data, but we apply real-world
          experience to it.
        </p>
        <h4>Essential Maintenance Services</h4>
        <table>
          <tr>
            <th>Service</th>
            <th>Why It Matters</th>
            <th>Our Approach</th>
          </tr>
          <tr>
            <td>
              <strong>Oil & Filter</strong>
            </td>
            <td>Prevents internal engine wear.</td>
            <td>
              Regular intervals based on your specific oil type to maintain a
              healthy engine.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Fluid Flushes</strong>
            </td>
            <td>Protects transmissions and prevents overheating.</td>
            <td>We test the fluid quality before recommending a flush.</td>
          </tr>
          <tr>
            <td>Air Filters</td>
            <td>Keeps the engine breathing and the cabin fresh</td>
            <td>
              We'll show you the dirty filter so you see the need for yourself.
            </td>
          </tr>
          <tr>
            <td>Tire Rotation</td>
            <td>Prevents uneven wear and saves you money on rubber.</td>
            <td>Included with state inspections to maximize tire life</td>
          </tr>
        </table>
        <ul>
          <li>
            <strong>Oil & Filter Changes:</strong> The simplest way to prevent
            engine wear. We recommend intervals based on your driving habits and
            oil type.
          </li>

          <li>
            <strong>Fluid Flushes (Transmission & Coolant):</strong> Heat is the
            enemy of your car. Regular flushes keep your transmission shifting
            smoothly and your engine running cool.
          </li>

          <li>
            <strong>Air & Cabin Filters:</strong> Protecting your engine from
            debris and your lungs from allergens.
          </li>

          <li>
            <strong>Tire Rotations:</strong> Extending the life of your rubber
            and ensuring a balanced, safe ride.
          </li>
        </ul>
        <h5>The "Burns" Difference: Cutting Through the BS</h5>
        <p>
          Most shops use "scheduled maintenance" as an excuse to pad the bill.
          We do things differently. When we look up your vehicle's mileage-based
          recommendations, we give you a transparent breakdown of two things:
        </p>
        <ul>
          <li>
            <strong>The Essentials:</strong> What is actually required to keep
            your car safe, efficient, and under warranty.
          </li>

          <li>
            <strong>The "Expert Opinion":</strong> What the manufacturer
            suggests vs. what we actually see under the hood.
          </li>

          <li>
            <strong>Our Promise:</strong> If a "recommended" flush or
            replacement isn't actually necessary for the health of your specific
            vehicle yet, we'll tell you. We'd rather have your trust for the
            next ten years than an extra $50 today.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Brakes & Tires",
    slug: "brakes-tires",
    content: (
      <>
        <h3>Brakes & Tires</h3>
        <p>
          Brake inspections, repairs, tire services, and replacements to keep
          you safe and confident on the road.
        </p>
      </>
    ),
  },
  {
    title: "Steering & Suspension",
    slug: "steering-suspension",
    content: (
      <>
        <h3>Steering & Suspension</h3>
        <p>
          Ride quality, handling, alignment, and suspension issues diagnosed and
          repaired to restore a smoother, safer drive
        </p>
      </>
    ),
  },
  {
    title: "AC & Heating",
    slug: "ac-heating",
    content: (
      <>
        <h3>AC & Heating</h3>
        <p>
          Climate control system diagnostics and repairs to keep you comfortable
          year-round.
        </p>
      </>
    ),
  },
  {
    title: "Check Engine & Diagnostics",
    slug: "check-engine-diagnostics",
    content: (
      <>
        <h3>Check Engine & Diagnostics</h3>
        <p>
          Warning lights, drivability issues, and performance concerns explained
          clearly before any work is done.
        </p>
      </>
    ),
  },
  {
    title: "Electrical Systems",
    slug: "electrical-systems",
    content: (
      <>
        <h3>Electrical Systems</h3>
        <p>
          Battery, starter, alternator, and electrical system diagnostics and
          repairs you can trust.
        </p>
      </>
    ),
  },
];

function Services() {
  return (
    <main className="subPage">
      <PageHeader
        title={"Old-School Service, Modern Technology"}
        sub={
          "Whether you drive a classic domestic or a modern import, our team combines advanced diagnostic tools with the honest, hard-working values of a traditional garage."
        }
      />
      <section className={styles.slantContainer}>
        <div className={styles.slantImageWrap}>
          <img
            className={styles.slantImage}
            src="https://media.gettyimages.com/id/dv485039/photo/smiling-car-mechanic-working-on-car-engine.jpg?s=1024x1024&w=gi&k=20&c=k14xtvIS-QZSkgcBsOj1ExiqawNTxirG1reelzPXHLw="
            alt="Mechanic working on car engine"
            loading="lazy"
          />
        </div>

        <div className={styles.slantContent}>
          <h3>PA State Inspections & Emissions</h3>

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

          <h4>The Safety Inspection</h4>

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

          <h4>Emissions Testing</h4>

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
            <h4>📝 What to Bring</h4>
            <ul>
              <li>Valid PA registration</li>
              <li>Valid insurance (physical or digital)</li>
              <li>Wheel lock key (if applicable)</li>
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.scheduledServices}>
        <h3>Scheduled Maintenance Services</h3>
        <ValueProp
          img={
            "https://www.metromotor.com/sites/default/files/Oil%20Change%20in%20DC%20Maryland%20and%20Northern%20Virginia.jpg"
          }
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

            <h4>Common Maintenance Services</h4>

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

            <h4>The Burns Approach</h4>

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
