import { Button } from "@/components/ui/button";
import { Rocket, Bell } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-card backdrop-blur-sm border border-border/50 p-12 md:p-16 text-center shadow-glow">
          <div className="absolute inset-0 bg-gradient-accent opacity-5"></div>
          
          <div className="relative z-10 space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                Early Bird Special
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold">
              Be Part of the
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-accent">
                VersaNode Revolution
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Back our Kickstarter campaign and be among the first to experience 
              the future of home computing. Limited early bird rewards available.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button variant="hero" size="lg" className="group text-lg px-8 py-6">
                <Rocket className="group-hover:translate-x-1 transition-transform" />
                Back on Kickstarter
              </Button>
              <Button variant="glass" size="lg" className="text-lg px-8 py-6">
                <Bell />
                Get Notified
              </Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 pt-8 max-w-3xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Early Backers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">$50K</div>
                <div className="text-sm text-muted-foreground">Funding Goal</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">30 Days</div>
                <div className="text-sm text-muted-foreground">To Launch</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
