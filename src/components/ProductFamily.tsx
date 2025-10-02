import { Card } from "@/components/ui/card";
import { Server, Box, Activity, Gauge, Zap, HardDrive, Cable, Waypoints } from "lucide-react";

const products = [
  {
    icon: Server,
    name: "VersaNode Controller",
    description: "Powerful miniserver with expansion capability",
    isMainProduct: true
  },
  {
    icon: Box,
    name: "VersaNode Controller Bus",
    description: "Attachment to extend controller capability",
    isMainProduct: true
  },
  {
    icon: Waypoints,
    name: "VersaNode Submodules",
    description: "Modular attachments for specialized functionality. Can be attached directly or connected remotely via WiFi.",
    isMainProduct: true
  }
];

const submodules = [
  {
    icon: Activity,
    name: "Analogue-PM-AI4",
    description: "4 channels: Predictive Maintenance specialized simultaneous sampling analogue input"
  },
  {
    icon: Gauge,
    name: "Analogue-ST-AIn",
    description: "n channels: Standard analogue simultaneous sampling input"
  },
  {
    icon: Gauge,
    name: "Analogue-ST-AOn",
    description: "n channels: Standard analogue output"
  },
  {
    icon: Zap,
    name: "Digital-ST-IO16",
    description: "16 Digital bidirectional I/O (Read or write to AC/DC)"
  },
  {
    icon: Zap,
    name: "Digital-ST-O8-Relay",
    description: "8 digital outputs with solid state relays (300V Max AC/DC)"
  },
  {
    icon: HardDrive,
    name: "M.2 Module",
    description: "Extend with more SSD storage or Tensor Processing Unit (TPU)"
  },
  {
    icon: Cable,
    name: "Serial-ST-IO4",
    description: "4 bidirectional serial interfaces"
  }
];

export const ProductFamily = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            VersaNode <span className="text-transparent bg-clip-text bg-gradient-accent">Product Family</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete ecosystem for your smart home needs
          </p>
        </div>

        <div className="space-y-12 max-w-7xl mx-auto">
          {/* Main Products */}
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card 
                key={index}
                className="p-8 bg-gradient-card backdrop-blur-sm border-primary/30 group hover:border-primary/50 transition-all hover:shadow-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <product.icon className="w-16 h-16 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </Card>
            ))}
          </div>

          {/* Submodules */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Waypoints className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-bold">Submodules</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {submodules.map((module, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-gradient-card backdrop-blur-sm border-border/50 group hover:border-primary/50 transition-all animate-fade-in"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  <div className="flex gap-4 items-start">
                    <module.icon className="w-6 h-6 text-primary flex-shrink-0 group-hover:scale-110 transition-transform mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">{module.name}</h4>
                      <p className="text-xs text-muted-foreground">{module.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
