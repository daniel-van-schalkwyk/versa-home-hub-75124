import { Card } from "@/components/ui/card";
import { Home, Workflow, Zap, Wifi, Network, Brain, BarChart3, Database, Shield, MessageSquare, Send, FolderOpen, Code, FileCode, Video, Image, Server, Globe } from "lucide-react";

const containers = [
  {
    icon: Home,
    name: "VersaNode Home Assistant Container",
    description: "Complete home automation platform"
  },
  {
    icon: Workflow,
    name: "VersaNode NodeRed Container",
    description: "Flow-based development tool"
  },
  {
    icon: Zap,
    name: "VersaNode OpenEMS Container",
    description: "Energy management system"
  },
  {
    icon: Wifi,
    name: "VersaNode Wireless APN Container",
    description: "Wireless access point networking"
  },
  {
    icon: Network,
    name: "VersaNode Mesh Network Container",
    description: "Mesh networking capabilities"
  },
  {
    icon: Brain,
    name: "VersaNode Machine Learning Container",
    description: "AI and ML processing"
  },
  {
    icon: BarChart3,
    name: "VersaNode Analytics Container",
    description: "Data analytics and visualization"
  },
  {
    icon: Database,
    name: "VersaNode Database Container",
    description: "Database management"
  },
  {
    icon: Shield,
    name: "VersaNode Netbird VPN Peer Container",
    description: "Secure VPN connectivity"
  },
  {
    icon: MessageSquare,
    name: "VersaNode MQTT Broker Container",
    description: "MQTT message broker"
  },
  {
    icon: Send,
    name: "VersaNode MQTT Client Container",
    description: "MQTT client interface"
  },
  {
    icon: FolderOpen,
    name: "VersaNode NAS Container",
    description: "Network-attached storage"
  },
  {
    icon: Code,
    name: "VersaNode Python Container",
    description: "Python development environment"
  },
  {
    icon: FileCode,
    name: "VersaNode Template Container",
    description: "Custom container template"
  },
  {
    icon: Video,
    name: "VersaNode Media Server Container",
    description: "Stream movies, TV shows, and music"
  },
  {
    icon: Server,
    name: "VersaNode Web Server Container",
    description: "Host web pages and home applications"
  },
  {
    icon: Image,
    name: "VersaNode Photo Management Container",
    description: "Organize and backup your photos"
  },
  {
    icon: Globe,
    name: "VersaNode Git Server Container",
    description: "Version control hosting"
  }
];

export const ContainerizedSoftware = () => {
  return (
    <section className="py-24 px-4 relative bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Containerized <span className="text-transparent bg-clip-text bg-gradient-accent">Software Packages</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pre-configured software containers ready to deploy on your VersaNode
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {containers.map((container, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-card backdrop-blur-sm border-border/50 group hover:border-secondary/50 transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                <div className="flex gap-3 items-start">
                  <container.icon className="w-5 h-5 text-secondary flex-shrink-0 group-hover:scale-110 transition-transform mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-sm leading-tight">{container.name}</h4>
                    <p className="text-xs text-muted-foreground">{container.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
