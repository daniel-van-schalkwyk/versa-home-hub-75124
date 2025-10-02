import { Card } from "@/components/ui/card";
import ecosystemImage from "@/assets/ecosystem.jpg";
import { Layers, Puzzle, Workflow, Cable } from "lucide-react";

const modules = [
  {
    icon: Layers,
    title: "Expandable Backplane",
    description: "Unlimited submodules with auto-addressing in local backplane. All VersaNode submodules have WiFi capability for remote IO. High speed control and sampling via VersaNode's custom bus."
  },
  {
    icon: Puzzle,
    title: "Flexible Programming",
    description: "Code in CODESYS, Python, C++, C#, or your language of choice"
  },
  {
    icon: Workflow,
    title: "Service Packages",
    description: "Pre-built services: home automation, media server, backup, firewall, VPN, and more"
  },
  {
    icon: Cable,
    title: "Hot-Swappable Modules",
    description: "NVMe SSD, Serial, Coral TPU, high-speed I/O modules"
  }
];

export const Ecosystem = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hardware <span className="text-transparent bg-clip-text bg-gradient-accent">Ecosystem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            VersaNode's modular architecture means infinite expandability. 
            Add the modules you need, when you need them.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 animate-fade-in">
            {modules.map((module, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-card backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all group"
              >
                <div className="flex gap-4 items-start">
                  <module.icon className="w-8 h-8 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold mb-1">{module.title}</h3>
                    <p className="text-sm text-muted-foreground">{module.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -inset-4 bg-gradient-accent opacity-10 blur-3xl rounded-full"></div>
            <img 
              src={ecosystemImage} 
              alt="VersaNode modular backplane showing expandable architecture with multiple submodules" 
              className="relative rounded-2xl shadow-card border border-border/50"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
