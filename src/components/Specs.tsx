import { Card } from "@/components/ui/card";
import { Cpu, HardDrive, Zap, Clock, Usb, Wifi, Ruler, Cable, Shield, Workflow, Wind } from "lucide-react";

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
    value: "MicroHDMI, USB",
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
    value: "Local Bus / Wi-Fi",
    detail: "Connect modules via direct bus or wireless"
  },
  {
    icon: Shield,
    label: "Security",
    value: "TPM",
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
    value: "175 × 125 × 28mm",
    detail: "Compact form factor for any space"
  }
];

export const Specs = () => {
  return (
    <section className="py-24 px-4 relative bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built on <span className="text-transparent bg-clip-text bg-gradient-accent">Performance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powered by the latest Raspberry Pi Compute Module technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {specs.map((spec, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card backdrop-blur-sm border-border/50 text-center group hover:border-primary/50 transition-all hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <spec.icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-sm text-muted-foreground mb-2">{spec.label}</div>
              <div className="text-2xl font-bold mb-2">{spec.value}</div>
              <div className="text-xs text-muted-foreground">{spec.detail}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
