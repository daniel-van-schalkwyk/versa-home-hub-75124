import { Terminal, Download, Zap } from "lucide-react";
import { Button } from "./ui/button";

export const VersaNodeOS = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Custom Operating System</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            VersaNode <span className="text-gradient">OS</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A purpose-built, lightweight headless 64-bit Raspberry Pi OS image with our hardware drivers baked in.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Boot</h3>
            <p className="text-muted-foreground">
              Power on and you're ready. Optimized kernel with all drivers pre-loaded.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Terminal className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Plug In</h3>
            <p className="text-muted-foreground">
              Connect your hardware and everything just works. Zero configuration needed.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Download className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Go</h3>
            <p className="text-muted-foreground">
              Start building immediately. No scripts, no guesswork, no hassle.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="group">
            Download VersaNode OS
            <Download className="ml-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
