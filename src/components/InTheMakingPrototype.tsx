import { Sparkles } from "lucide-react";
import { InTheMakingSection } from "./InTheMakingSection";
import prototypeImage from "@/assets/making-prototype.jpg";

export const InTheMakingPrototype = () => {
  return (
    <InTheMakingSection
      title="In the Making"
      subtitle="(Final Prototype)"
      description="The culmination of our engineering efforts - a polished, production-ready prototype ready to change the game. Every detail has been refined, tested, and perfected to deliver the ultimate VersaNode experience."
      image={prototypeImage}
      icon={Sparkles}
      phase="Development Journey: Final Prototype"
      reverse={false}
    />
  );
};
