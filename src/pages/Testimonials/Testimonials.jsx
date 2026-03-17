import React from "react";
import PageHeader from "./../../components/PageHeader/PageHeader";
import RatingDisplay from "./../../components/RatingDisplay/RatingDisplay";
import ReviewList from "./../../components/ReviewList/ReviewList";
import CtaLink from "./../../components/CtaLink/CtaLink";
import noBreak from "./../../hooks/noBreak.module.css";
import Seo from "../../components/Seo/Seo";
import { buildBreadcrumbSchema } from "../../seo/seoConfig";

const TESTIMONIALS_TITLE = "Auto Repair Reviews in Newtown, PA | Burns' Auto Repair";
const TESTIMONIALS_DESCRIPTION =
  "Read reviews from Newtown-area drivers who trust Burns' Auto Repair for honest mechanics, clear communication, and reliable auto repair service.";

function Testimonials() {
  return (
    <main className="subPage">
      <Seo
        title={TESTIMONIALS_TITLE}
        description={TESTIMONIALS_DESCRIPTION}
        canonicalPath="/testimonials"
        structuredData={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Testimonials", path: "/testimonials" },
          ]),
        ]}
      />
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
