import { Benefits } from "@/components/benefits";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Guarantee } from "@/components/guarantee";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Navbar } from "@/components/navbar";
import { NotionPartner } from "@/components/notion-partner";
import { Purchase } from "@/components/purchase";
import { TargetedProblemSolution } from "@/components/targeted-problem-solution";
import { TargetedProvenConcepts } from "@/components/targeted-proven-concepts";
import { TargetedResults } from "@/components/targeted-results";
import solutions from "@/content/solutions";

const promoBanner = {
  show: true,
  text: "Special launch offer: Get 20% off when you pre- order V.I.T.A template today!",
};

export default function Page() {
  return (
    <>
      <Navbar promoBanner={promoBanner} />
      <Hero {...solutions.adhd.hero} />
      <NotionPartner />
      <TargetedProblemSolution {...solutions.adhd.problemSolution} />
      <TargetedResults {...solutions.adhd.results} />
      <Benefits {...solutions.adhd.benefits} />
      <HowItWorks {...solutions.adhd.howItWorks} />
      <TargetedProvenConcepts {...solutions.adhd.provenCocepts} />
      <Guarantee {...solutions.adhd.guarantee} />
      <Purchase {...solutions.adhd.purchase} />
      <FAQ {...solutions.adhd.faqs} />
      <FinalCTA {...solutions.adhd.cta} />
      <Footer />
    </>
  );
}
