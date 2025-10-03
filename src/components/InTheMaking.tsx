import { Wrench, Zap, Sparkles } from "lucide-react";
import earlyImage from "@/assets/making-early.jpg";
import laterImage from "@/assets/making-later.jpg";
import prototypeImage from "@/assets/making-prototype.jpg";

export const InTheMaking = () => {
  const stages = [
    {
      title: "Early Stage",
      description: "From concept to first breadboard - exploring the core technology and validating our vision for VersaNode.",
      image: earlyImage,
      icon: Wrench,
      phase: "Phase 1"
    },
    {
      title: "Later Development",
      description: "Refining the architecture, optimizing performance, and integrating all components into a cohesive system.",
      image: laterImage,
      icon: Zap,
      phase: "Phase 2"
    },
    {
      title: "Final Prototype",
      description: "The culmination of our engineering efforts - a polished, production-ready prototype ready to change the game.",
      image: prototypeImage,
      icon: Sparkles,
      phase: "Phase 3"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mb-4">
            <Wrench className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Development Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            In the <span className="text-transparent bg-clip-text bg-gradient-accent">Making</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow our journey from initial concept to production-ready hardware
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={stage.image} 
                    alt={stage.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60"></div>
                  <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-bold text-primary-foreground">{stage.phase}</span>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">{stage.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
