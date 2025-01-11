import { AboutFounder } from "@/components/about-founder";
import { AlternativeSocialProof } from "@/components/alternative-social-proof";
import { DesignedFor } from "@/components/designed-for";
import { Benefits } from "@/components/benefits";
import { FAQ } from "@/components/faq";
import { FeaturedReviews } from "@/components/featured-reviews";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Guarantee } from "@/components/guarantee";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Navbar } from "@/components/navbar";
import { NotionPartner } from "@/components/notion-partner";
import { ProblemSolution } from "@/components/problem-solution";
import { ProvenConcepts } from "@/components/proven-concepts";
import { Purchase } from "@/components/purchase";
import { Results } from "@/components/results";
import { SocialProof } from "@/components/social-proof";
import { TrustQuote } from "@/components/trust-quote";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <NotionPartner />
      <ProblemSolution />
      <TrustQuote />
      <ProvenConcepts />
      <AlternativeSocialProof />
      <AboutFounder />
      <Results />
      <Benefits />
      <DesignedFor />
      <SocialProof />
      <HowItWorks />
      <FeaturedReviews />
      <Guarantee />
      <Purchase />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
