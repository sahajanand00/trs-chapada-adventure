import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { DistanceSection } from "@/components/sections/DistanceSection";
import { BonusSection } from "@/components/sections/BonusSection";
import { ExpertSection } from "@/components/sections/ExpertSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ProblemSection />
      <SocialProofSection />
      <DistanceSection />
      <BonusSection />
      <ExpertSection />
      <OfferSection />
      <GuaranteeSection />
    </div>
  );
};

export default Index;
