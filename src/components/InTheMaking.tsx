import { Wrench } from "lucide-react";
import { InTheMakingSection } from "./InTheMakingSection";
import earlyImage from "@/assets/making-early.jpg";

export const InTheMakingEarly = () => {
  return (
    <InTheMakingSection
      title="In the Making"
      subtitle="(Early)"
      description="From concept to first breadboard - exploring the core technology and validating our vision for VersaNode. This early stage showcases our initial prototyping efforts, testing fundamental components, and establishing the technical foundation."
      image={earlyImage}
      icon={Wrench}
      phase="Phase 1: Early Stage"
      reverse={false}
    />
  );
};