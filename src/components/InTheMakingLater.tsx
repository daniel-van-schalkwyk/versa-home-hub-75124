import { Zap } from "lucide-react";
import { InTheMakingSection } from "./InTheMakingSection";
import laterImage from "@/assets/making-later.jpg";

export const InTheMakingLater = () => {
  return (
    <InTheMakingSection
      title="In the Making"
      subtitle="(Later Development)"
      description="Refining the architecture, optimizing performance, and integrating all components into a cohesive system. Our engineering team worked tirelessly to enhance every aspect, from power efficiency to thermal management."
      image={laterImage}
      icon={Zap}
      phase="Development Journey: Later Development"
      reverse={true}
    />
  );
};
