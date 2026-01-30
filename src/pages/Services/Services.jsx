import PageHeader from "./../../components/PageHeader/PageHeader";
import styles from "./Services.module.css";
import AccordionCard from "./../../components/AccordionCard/AccordionCard";
import TabsCard from "./../../components/TabsCard/TabsCard";
import CtaBanner from "./../../components/CtaBanner/CtaBanner";

const tabs = [
  {
    title: "State Inspections & Emissions",
    slug: "state-inspections-emissions",
    content: (
      <>
        <h3>PA State Inspections: The "No-Stress" Guide</h3>
        <p>
          If you are a Pennsylvania resident, you already know the drill: once a
          year, your vehicle needs a check-up. But at Burns’ Auto Repair, we
          view the state inspection as more than just a legal hoop to jump
          through—it is your yearly "health check" to ensure your car is safe
          for your family and our community.
        </p>

        <h4>Part 1: The Safety Inspection</h4>
        <p>
          <i>What are we actually looking for?</i> When we pull your car into
          the bay, we aren't just looking for reasons to fail you. We are
          looking for safety hazards that could endanger you or other drivers.
          Per PennDOT regulations, our certified mechanics inspect:
        </p>
        <ul>
          <li>
            <strong>Brakes:</strong> We measure pad thickness and check for
            leaking lines. (You want to know your car will stop when it needs
            to!)
          </li>
          <li>
            <strong>Tires:</strong> We check tread depth and look for dangerous
            dry rot or sidewall bubbles.
          </li>
          <li>
            <strong>Steering & Suspension:</strong> We check for loose tie rods,
            ball joints, and worn shocks that affect your ability to control the
            car.
          </li>
          <li>
            <strong>Lights & Electrical:</strong> Headlights, turn signals, and
            brake lights must all be functional.
          </li>
          <li>
            <strong>Glass & Mirrors:</strong> We check for windshield cracks
            that obstruct your view.
          </li>
          <li>
            <strong>Exhaust & Fuel Systems:</strong> We look for leaks that
            could allow dangerous fumes (like Carbon Monoxide) to enter your
            cabin.
          </li>
        </ul>

        <h4>Part 2: The Emissions Test</h4>
        <p>
          Since we are in the Philadelphia region, air quality standards are
          stricter. We test your car's computer to ensure it isn't releasing
          harmful pollutants.{" "}
          <strong>
            If your Check Engine light is illuminated, your vehicle will
            automatically fail the PA Emissions test.
          </strong>
          <br />
          <br />
          <em>
            <strong>Pro Tip:</strong> Don't clear the code right before you come
            in! The system needs time to reset. Bring it to us first for a
            diagnostic.
          </em>
        </p>

        <div class="checklist-box">
          <h4>📝 What to Bring</h4>
          <p>
            You can get inspected up to <strong>90 days</strong> before your
            stickers expire. When you come in, please have:
          </p>
          <ul>
            <li>Valid PA Registration Card</li>
            <li>Valid Insurance Card (Physical or Digital)</li>
            <li>Your Wheel Lock Key (if your tires have locks)</li>
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
          We do things differently. When we look up your vehicle’s mileage-based
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

{
  /* <div className={styles.serviceContainer}>
        <AccordionCard
          title={"General Repairs"}
          content={
            "From minor fixes to major repairs, we handle all your automotive needs with expertise and care. Our skilled technicians can diagnose and repair any issue."
          }
          icon={<i className="fa-solid fa-wrench"></i>}
          className={styles.card}
        />
        <AccordionCard
          title={"Engine Diagnostics"}
          content={
            "Advanced diagnostic tools to quickly identify and resolve engine issues and warning lights. We use state-of-the-art computer systems for accurate results."
          }
          icon={<i className="fa-solid fa-gauge-high"></i>}
        />
        <AccordionCard
          title={"Oil Changes & Fluid Service"}
          content={
            "Regular oil changes and fluid checks to keep your engine running smoothly and efficiently. We use quality oils and filters for optimal performance."
          }
          icon={<i className="fa-solid fa-droplet"></i>}
        />
        <AccordionCard
          title={"Electrical Systems"}
          content={
            "Expert repair and maintenance of batteries, alternators, starters, and all electrical components. We ensure your vehicle's electrical system runs flawlessly."
          }
          icon={<i className="fa-solid fa-car-battery"></i>}
        />
        <AccordionCard
          title={"AC & Heating"}
          content={
            "Complete climate control service including AC repairs, heating systems, and refrigerant recharge. Stay comfortable in any weather condition."
          }
          icon={<i className="fa-solid fa-wind"></i>}
        />
        <AccordionCard
          title={"Brake Service"}
          content={
            "Comprehensive brake inspection, pad replacement, rotor resurfacing, and fluid service. Your safety is our priority with reliable brake systems."
          }
          icon={<i className="fa-solid fa-traffic-light"></i>}
        />
        <AccordionCard
          title={"Transmission Service"}
          content={
            "Expert transmission repair, maintenance, and fluid changes. We service both automatic and manual transmissions to ensure smooth shifting."
          }
          icon={<i className="fa-solid fa-gear"></i>}
        />
        <AccordionCard
          title={"Tire Service"}
          content={
            "Tire rotation, balancing, alignment, and replacement. We help you get the most life out of your tires and ensure safe handling."
          }
          icon={<i className="fa-solid fa-truck-monster"></i>}
        />
        <AccordionCard
          title={"Tune-Ups"}
          content={
            "Complete engine tune-ups including spark plug replacement, filter changes, and system optimization for peak performance and fuel efficiency."
          }
          icon={<i className="fa-solid fa-bolt"></i>}
        />
        <AccordionCard
          title={"Suspension & Steering"}
          content={
            "Repair and replacement of shocks, struts, and steering components. Enjoy a smooth, comfortable ride with proper suspension maintenance."
          }
          icon={<i className="fa-solid fa-shield"></i>}
        />
        <AccordionCard
          title={"Cooling System"}
          content={
            "Radiator repair, coolant flushes, and thermostat replacement. We prevent overheating and keep your engine at the right temperature."
          }
          icon={<i className="fa-solid fa-temperature-high"></i>}
        />
        <AccordionCard
          title={"Check Engine Light"}
          content={
            "Professional diagnosis and repair of check engine light issues. We identify the root cause and provide lasting solutions to keep you on the road."
          }
          icon={<i className="fa-solid fa-triangle-exclamation"></i>}
        />
      </div> */
}
