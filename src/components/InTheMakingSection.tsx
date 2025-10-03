import { LucideIcon } from "lucide-react";

interface InTheMakingSectionProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: LucideIcon;
  phase: string;
  reverse?: boolean;
}

export const InTheMakingSection = ({
  title,
  subtitle,
  description,
  image,
  icon: Icon,
  phase,
  reverse = false
}: InTheMakingSectionProps) => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto">
        <div className={`grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          <div className={`space-y-6 animate-fade-in ${reverse ? 'lg:order-2' : ''}`}>
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              <Icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">{phase}</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {title}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-accent">
                {subtitle}
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          <div className={`relative group animate-fade-in ${reverse ? 'lg:order-1' : ''}`}>
            <div className="relative overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-all duration-300">
              <img 
                src={image} 
                alt={`${title} ${subtitle}`}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
