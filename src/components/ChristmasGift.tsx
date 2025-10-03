import { Button } from "@/components/ui/button";
import { Gift, Sparkles, Calendar } from "lucide-react";

export const ChristmasGift = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyOSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-accent/10 px-6 py-3 rounded-full border border-primary/20">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Limited Time Offer</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            The Perfect{" "}
            <span className="text-transparent bg-clip-text bg-gradient-accent">
              Christmas Gift 2025
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Give the gift of unlimited possibilities. VersaNode Home & Business is the innovative tech gift that keeps on giving—exclusive to Kickstarter backers this holiday season.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="p-6 rounded-xl bg-gradient-card backdrop-blur-sm border border-border/50">
              <Gift className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Kickstarter Exclusive</h3>
              <p className="text-sm text-muted-foreground">
                Special pricing and perks only available to early backers
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-card backdrop-blur-sm border border-border/50">
              <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Holiday Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Estimated delivery in time for the 2025 holiday season
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-card backdrop-blur-sm border border-border/50">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Tech That Amazes</h3>
              <p className="text-sm text-muted-foreground">
                A gift for tech enthusiasts, creators, and smart home lovers
              </p>
            </div>
          </div>
          
          <div className="pt-4">
            <Button variant="hero" size="lg" className="group">
              <Gift className="group-hover:rotate-12 transition-transform" />
              Reserve Your Holiday Gift
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
