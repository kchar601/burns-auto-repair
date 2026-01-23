import PageHeader from "./../../components/PageHeader/PageHeader";
import YouTube from "react-youtube";

function About() {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
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
      <p>
        At Burns' Auto Repair, history isn't just something we look back on—it's
        the foundation of how we do business today. Our story on Sycamore Street
        began decades ago. While the shop originally served Newtown under the
        Steele family, Dave Burns Sr. took the wheel in 1977, cementing a legacy
        of hard work and honest diagnostics. In 1995, the torch was passed to
        his son, Dave Burns Jr., who had been learning the trade bolt-by-bolt
        since he was a teenager. Today, we are proud to say that we are a
        multi-generational business serving multi-generational customers. We are
        fixing the vehicles for the grandchildren of our very first patrons.
        When you bring your car to Burns, you aren't just a ticket number;
        you're a neighbor.
      </p>
      <YouTube opts={opts} videoId="lQAWI_3EKV0" />
    </main>
  );
}

export default About;
