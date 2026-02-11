import PageHeader from "./../../components/PageHeader/PageHeader";
import RatingDisplay from "./../../components/RatingDisplay/RatingDisplay";
import ReviewList from "./../../components/ReviewList/ReviewList";
import CtaLink from "./../../components/CtaLink/CtaLink";
import noBreak from "./../../hooks/noBreak.module.css";

function Testimonials() {
  return (
    <main className="subPage">
      <PageHeader
        title={
          <>
            What Your Neighbors{" "}
            <span className={noBreak.noBreak}>Are Saying</span>
          </>
        }
        sub="Don't just take our word for it. With a 5.0 rating across 1,400+ reviews, we are proud to be Newtown's most trusted mechanics."
      />
      <RatingDisplay />
      <ReviewList />
    </main>
  );
}

export default Testimonials;
