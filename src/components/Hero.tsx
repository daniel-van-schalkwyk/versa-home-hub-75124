import { Button } from "@/components/ui/button";
import { Rocket, Github } from "lucide-react";
import heroImage from "@/assets/versanode-hero.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
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
            
            <p className="text-xl text-muted-foreground max-w-xl">
              RPI CM5 powered microserver for home automation, NAS, hotspot, P2P VPN, and much more. Managed via VersaNode webserver with pre-built container packages. Expandable with local or remote WiFi submodules.
            </p>
            
            <p className="text-lg text-muted-foreground/80 max-w-xl">
              Expandable storage with M.2 submodule and enhanced processing with TPU acceleration.
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
            
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">64-bit</div>
                <div className="text-sm text-muted-foreground">Quad-Core 2.4GHz</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">16 GB</div>
                <div className="text-sm text-muted-foreground">LPDDR4-3200 RAM</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">64 GB</div>
                <div className="text-sm text-muted-foreground">eMMC Storage</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">12-24V</div>
                <div className="text-sm text-muted-foreground">Solar Ready</div>
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
          </div>
        </div>
      </div>
    </section>
  );
};
