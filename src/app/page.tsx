import { AboutFounder } from "@/components/about-founder";
import { DesignedFor } from "@/components/designed-for";
import { Benefits } from "@/components/benefits";
import { FAQ } from "@/components/faq";
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
import { TrustQuote } from "@/components/trust-quote";

const promoBanner = { show: true, text: "Special launch offer: Get 20% off when you pre- order V.I.T.A template today!" }

export default function Page() {
  return (
    <>
      <Navbar promoBanner={promoBanner} />
      <Hero />
      <NotionPartner />
      <ProblemSolution />
      <Results />
      <TrustQuote />
      <Benefits />
      <DesignedFor />
      <ProvenConcepts />
      <HowItWorks />
      <AboutFounder />
      <Guarantee />
      <Purchase />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}

