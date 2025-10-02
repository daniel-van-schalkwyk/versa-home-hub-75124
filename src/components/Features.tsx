import { Card } from "@/components/ui/card";
import { 
  Wifi, 
  Shield, 
  HardDrive, 
  Zap, 
  Home, 
  Brain,
  Wrench,
  Network,
  Container,
  Film,
  Lock,
  Plug
} from "lucide-react";

const features = [
  {
    icon: Wifi,
    title: "IoT Gateway",
    description: "Connect and control all your smart home devices seamlessly"
  },
  {
    icon: Shield,
    title: "Secure VPN",
    description: "Access your home network securely from anywhere"
  },
  {
    icon: HardDrive,
    title: "Network Storage",
    description: "High-speed NAS for all your photos, videos, and files"
  },
  {
    icon: Zap,
    title: "Energy Monitor",
    description: "Track and optimize your home power consumption"
  },
  {
    icon: Home,
    title: "Home Automation",
    description: "Control lights, thermostats, and smart devices"
  },
  {
    icon: Brain,
    title: "AI/ML Ready",
    description: "Run AI assistants and smart analytics at home"
  },
  {
    icon: Wrench,
    title: "Predictive Maintenance",
    description: "Monitor system health and prevent issues before they happen"
  },
  {
    icon: Network,
    title: "Mesh Network",
    description: "Create whole-home WiFi coverage with multiple nodes"
  },
  {
    icon: Container,
    title: "Docker Apps",
    description: "Run any application in containers via simple dashboard"
  },
  {
    icon: Film,
    title: "Media Server",
    description: "Stream your media library to any device in your home"
  },
  {
    icon: Lock,
    title: "Hardware Security",
    description: "TPM-based encryption keeps your data safe"
  },
  {
    icon: Plug,
    title: "PoE Powered",
    description: "Single cable for power and network - clean setup"
  }
];

export const Features = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Endless <span className="text-transparent bg-clip-text bg-gradient-accent">Possibilities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            One device, unlimited applications. VersaNode Home & Business adapts to your needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <feature.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
