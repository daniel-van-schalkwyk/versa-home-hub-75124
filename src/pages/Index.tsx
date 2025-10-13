import { Hero } from "@/components/Hero";
import { ChristmasGift } from "@/components/ChristmasGift";
import { InTheMakingEarly } from "@/components/InTheMaking";
import { InTheMakingLater } from "@/components/InTheMakingLater";
import { InTheMakingPrototype } from "@/components/InTheMakingPrototype";
import { Features } from "@/components/Features";
import { Specs } from "@/components/Specs";
import { Ecosystem } from "@/components/Ecosystem";
import { ProductFamily } from "@/components/ProductFamily";
import { ContainerizedSoftware } from "@/components/ContainerizedSoftware";
import { VersaNodeOS } from "@/components/VersaNodeOS";
import { UseCases } from "@/components/UseCases";
import { CTA } from "@/components/CTA";
import { EmailSignup } from "@/components/EmailSignup";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <EmailSignup />
      <ChristmasGift />
      <Features />
      <InTheMakingEarly />
      <InTheMakingLater />
      <InTheMakingPrototype />
      <Specs />
      <Ecosystem />
      <ProductFamily />
      <ContainerizedSoftware />
      <VersaNodeOS />
      <UseCases />
      <CTA />
      <EmailSignup />
      <Footer />
    </div>
  );
};

export default Index;
