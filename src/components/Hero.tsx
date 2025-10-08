import { Button } from "@/components/ui/button";
import { Rocket, Github, Server, Home, Brain, Wifi } from "lucide-react";
import heroImage from "@/assets/versanode-hero.png";
import logo from "@/assets/versanode-logo.png";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyOSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                Launching on Kickstarter Soon
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              VersaNode<span className="text-primary">™</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-accent">
                Home & Business
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl font-medium">
              The all-in-one smart hub that connects, expands, and adapts to your world.
            </p>
            
            <p className="text-lg text-muted-foreground/90 max-w-xl">
              Engineered for expansion — with SSD, TPU, or eSIM modules, local or remote I/O modules, and multi-network connectivity via eSIM, Wi-Fi 7, and dual Gigabit LAN.
            </p>
            
            <p className="text-lg text-muted-foreground/80 max-w-xl">
              Packing the powerful Raspberry Pi CM5 module with a web dashboard that simplifies Linux for non-technical users through pre-developed, community-maintained application containers.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="group">
                <Rocket className="group-hover:translate-x-1 transition-transform" />
                Back on Kickstarter
              </Button>
              <Button variant="glass" size="lg">
                <Github />
                View Documentation
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Server className="w-6 h-6 text-primary" />
                </div>
                <div className="text-sm font-semibold">Home Server</div>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <div className="text-sm font-semibold">Home Automation</div>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <div className="text-sm font-semibold">Home AI</div>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Wifi className="w-6 h-6 text-primary" />
                </div>
                <div className="text-sm font-semibold">Home Connectivity</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -inset-4 bg-gradient-accent opacity-20 blur-3xl rounded-full"></div>
            <img 
              src={heroImage} 
              alt="VersaNode Home & Business microserver with glowing LED indicators" 
              className="relative rounded-2xl shadow-glow border border-border/50"
            />
            <img 
              src={logo} 
              alt="VersaNode Logo" 
              className="absolute top-4 left-4 h-16 md:h-20 w-auto z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
