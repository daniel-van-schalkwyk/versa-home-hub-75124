import { Hero } from "@/components/Hero";
import { ChristmasGift } from "@/components/ChristmasGift";
import { InTheMaking } from "@/components/InTheMaking";
import { Features } from "@/components/Features";
import { Specs } from "@/components/Specs";
import { Ecosystem } from "@/components/Ecosystem";
import { ProductFamily } from "@/components/ProductFamily";
import { ContainerizedSoftware } from "@/components/ContainerizedSoftware";
import { UseCases } from "@/components/UseCases";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ChristmasGift />
      <InTheMaking />
      <Features />
      <Specs />
      <Ecosystem />
      <ProductFamily />
      <ContainerizedSoftware />
      <UseCases />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
