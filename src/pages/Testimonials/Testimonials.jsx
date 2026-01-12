import PageHeader from "./../../components/PageHeader/PageHeader";
import RatingDisplay from "./../../components/RatingDisplay/RatingDisplay";

function Testimonials() {
  return (
    <main className="subPage">
      <PageHeader
        title={"Customer Testimonials"}
        sub="Don't just take our word for it. Here's what our satisfied customers have to say about their experience with ProAuto Repair. We're proud of the relationships we've built over the years."
      />
      <RatingDisplay />
    </main>
  );
}

export default Testimonials;
