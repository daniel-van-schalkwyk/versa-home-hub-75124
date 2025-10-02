import { Card } from "@/components/ui/card";
import { Home, Gamepad2, Users, Database } from "lucide-react";

const useCases = [
  {
    icon: Home,
    title: "Complete Smart Home",
    description: "Centralize all your smart devices, automate routines, monitor energy usage, and run AI-powered assistants - all from one hub.",
    features: ["IoT Gateway", "Energy Monitor", "Home Automation", "Voice Control"]
  },
  {
    icon: Gamepad2,
    title: "Entertainment Center",
    description: "Stream your personal media library, run game servers, and create the ultimate home entertainment system.",
    features: ["Media Server", "Plex/Jellyfin", "Game Servers", "4K Streaming"]
  },
  {
    icon: Database,
    title: "Data and Processing",
    description: "Run databases, collect and analyze data, deploy machine learning models, and run custom Linux software.",
    features: ["NAS Storage", "Database", "Data Collection", "Analytics", "Machine Learning"]
  },
  {
    icon: Users,
    title: "Media and Networking",
    description: "Safely store family photos, documents, and backups. Access your files from anywhere with built-in VPN. Host an APN or create mesh networks with multiple VersaNodes.",
    features: ["NAS Server", "Auto Backup", "VPN Access", "Photo Library", "Mesh Network"]
  }
];

export const UseCases = () => {
  return (
    <section className="py-24 px-4 relative bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Designed for <span className="text-transparent bg-clip-text bg-gradient-accent">Every Need</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From home automation to data solutions, networking, service hosting to predictive maintenance
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:shadow-glow group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <useCase.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
              <p className="text-muted-foreground mb-6">{useCase.description}</p>
              <div className="flex flex-wrap gap-2">
                {useCase.features.map((feature, idx) => (
                  <span 
                    key={idx}
                    className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
