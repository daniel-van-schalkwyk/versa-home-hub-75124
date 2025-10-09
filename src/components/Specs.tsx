import { Card } from "@/components/ui/card";
import { Cpu, HardDrive, Zap, Clock, Usb, Wifi, Ruler, Cable, Shield, Workflow, Wind, ChevronDown } from "lucide-react";
import productImage from "@/assets/product-family-assembly.png";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const specs = [
  {
    icon: Cpu,
    label: "Processor",
    value: "Raspberry Pi 5",
    detail: "Compute Module - ARM Cortex-A76, 2.4 GHz Quad-Core"
  },
  {
    icon: Wind,
    label: "Cooling",
    value: "Passive Heatsink",
    detail: "Fanless design with integrated thermal management"
  },
  {
    icon: HardDrive,
    label: "PCIe Bus",
    value: "High-Speed Peripheral",
    detail: "Extend with NVMe, TPU, or mobile communication"
  },
  {
    icon: Workflow,
    label: "I/O Bus",
    value: "Custom VersaNode Design",
    detail: "Super fast read/write to inputs and outputs"
  },
  {
    icon: Zap,
    label: "Power",
    value: "12-24V / PoE",
    detail: "Solar compatible, Power over Ethernet"
  },
  {
    icon: Usb,
    label: "I/O Ports",
    value: "HDMI Mini, USB",
    detail: "USB 3.0, USB 2.0 connectivity"
  },
  {
    icon: Wifi,
    label: "Network",
    value: "2x Gigabit Ethernet",
    detail: "Wi-Fi 802.11ac, BT 5.0, LTE Cellular module"
  },
  {
    icon: Cable,
    label: "Submodules",
    value: "Local Bus, Wi-Fi",
    detail: "Connect modules via direct bus or wireless"
  },
  {
    icon: Shield,
    label: "Security",
    value: "TPM 2.0",
    detail: "Trusted Platform Module for secure operations"
  },
  {
    icon: Clock,
    label: "Real-Time Clock",
    value: "Supercapacitor Backup",
    detail: "Maintains accurate time during power loss"
  },
  {
    icon: Ruler,
    label: "Dimensions",
    value: "(H x L x W): 105 mm x 103 mm x 47 mm",
    detail: "Compact form factor for any space"
  }
];

export const Specs = () => {
  const [showSpecs, setShowSpecs] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && !showSpecs) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, -rect.top / (rect.height * 0.3)));
        
        if (scrollProgress > 0.3) {
          setShowSpecs(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showSpecs]);

  const handleShowSpecs = () => {
    setShowSpecs(true);
  };

  return (
    <section ref={sectionRef} className="py-24 px-4 relative bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built on <span className="text-transparent bg-clip-text bg-gradient-accent">Performance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powered by the latest Raspberry Pi Compute Module technology
          </p>
        </div>

        <div className="mb-8 flex justify-center animate-fade-in">
          <img 
            src={productImage} 
            alt="VersaNode Product Assembly" 
            className="rounded-lg shadow-2xl max-w-2xl w-full"
          />
        </div>
        
        {!showSpecs && (
          <div className="text-center mb-12 animate-fade-in">
            <Button
              variant="outline"
              size="lg"
              onClick={handleShowSpecs}
              className="group"
            >
              View Specifications
              <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        )}
        
        <div 
          className={`transition-all duration-700 ${
            showSpecs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 max-h-0 overflow-hidden'
          }`}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {specs.map((spec, index) => (
              <Card 
                key={index}
                className="p-8 bg-gradient-card backdrop-blur-sm border-border/50 text-center group hover:border-primary/50 transition-all hover:shadow-glow animate-fade-in"
                style={{ animationDelay: showSpecs ? `${index * 0.1}s` : '0s' }}
              >
                <spec.icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-sm text-muted-foreground mb-2">{spec.label}</div>
                <div className="text-2xl font-bold mb-2">{spec.value}</div>
                <div className="text-xs text-muted-foreground">{spec.detail}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
