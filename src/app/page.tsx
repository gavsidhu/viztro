import { Benefits } from "@/components/benefits";
import { FeaturedReviews } from "@/components/featured-reviews";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <FeaturedReviews />

    </>
  );
}
