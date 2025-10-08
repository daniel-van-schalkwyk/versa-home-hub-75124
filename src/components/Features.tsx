import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Wifi, 
  Shield, 
  HardDrive, 
  Zap, 
  Home, 
  Brain,
  Network,
  BarChart,
  Database,
  MessageSquare,
  Code,
  Film,
  Server,
  Image,
  GitBranch,
  ExternalLink
} from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Home Assist",
    description: "Home Automation"
  },
  {
    icon: GitBranch,
    title: "NodeRed",
    description: "Flow-Based Development tool"
  },
  {
    icon: Zap,
    title: "OpenEMS",
    description: "Energy Management"
  },
  {
    icon: Wifi,
    title: "Wireless APN",
    description: "Wireless Access Point Network"
  },
  {
    icon: Network,
    title: "Mesh Network",
    description: "Distributed network connectivity"
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "AI and ML capabilities"
  },
  {
    icon: BarChart,
    title: "Analytics",
    description: "Data analysis and visualisation"
  },
  {
    icon: Database,
    title: "Database",
    description: "Data storage and management"
  },
  {
    icon: Shield,
    title: "Netbird VPN Peer",
    description: "Secure VPN connectivity"
  },
  {
    icon: MessageSquare,
    title: "MQTT Broker and Client",
    description: "Messaging protocol for IoT"
  },
  {
    icon: HardDrive,
    title: "NAS",
    description: "Network Access Storage"
  },
  {
    icon: Code,
    title: "Development",
    description: "Python, C, C++"
  },
  {
    icon: Film,
    title: "Media Server",
    description: "Stream your media library"
  },
  {
    icon: Server,
    title: "Web Server",
    description: "Host web applications"
  },
  {
    icon: Image,
    title: "Photo Manager",
    description: "Organize and manage photos"
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
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            asChild
            className="group"
          >
            <a 
              href="https://github.com/Versa-Node/container-packages" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              and much more (community packages)
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
