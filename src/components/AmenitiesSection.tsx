import {
  Tv,
  Wifi,
  Bed,
  PenTool,
  AirVent,
  Sparkles,
  Droplets,
  Zap,
  Camera,
  Flame,
} from "lucide-react";

const amenities = [
  {
    icon: Tv,
    title: "Android Smart TVs",
    description: "With DTH in every room",
  },
  {
    icon: Wifi,
    title: "Free High-Speed Wi-Fi",
    description: "Stay connected always",
  },
  {
    icon: Bed,
    title: "Premium Mattresses",
    description: "8-inch comfort mattresses",
  },
  {
    icon: PenTool,
    title: "Work Space",
    description: "Dedicated desk for work",
  },
  {
    icon: AirVent,
    title: "AC & Non-AC Options",
    description: "Choose your comfort",
  },
  {
    icon: Sparkles,
    title: "Daily Housekeeping",
    description: "Quick fresh-up service",
  },
  {
    icon: Droplets,
    title: "24/7 Hot Water",
    description: "Always available",
  },
  {
    icon: Zap,
    title: "Power Backup",
    description: "Uninterrupted comfort",
  },
  {
    icon: Camera,
    title: "CCTV Surveillance",
    description: "For your safety",
  },
  {
    icon: Flame,
    title: "Fire Safety",
    description: "Safety standards met",
  },
];

const AmenitiesSection = () => {
  return (
    <section id="amenities" className="section-padding bg-background">
      <div className="container-hotel">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-3 block">
            What We Offer
          </span>
          <h2 className="section-title">Amenities & Facilities</h2>
          <p className="section-subtitle mx-auto">
            Every comfort you need for a pleasant and hassle-free stay
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="group p-5 md:p-6 rounded-2xl bg-card border border-border/50 text-center hover:border-primary/30 hover:shadow-card transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <amenity.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-medium text-foreground text-sm mb-1">
                {amenity.title}
              </h4>
              <p className="text-xs text-muted-foreground">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
