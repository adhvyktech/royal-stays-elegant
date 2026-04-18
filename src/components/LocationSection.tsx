import {
  MapPin,
  Bus,
  Train,
  ShoppingBag,
  Hospital,
  Shield,
  Utensils,
  Users,
  Building,
  Camera,
  Flame,
  Headphones,
} from "lucide-react";

const nearbyPlaces = [
  { icon: Bus, text: "Shivajinagar Bus Stand & Metro Station – walkable" },
  { icon: ShoppingBag, text: "Famous Markets (Commercial Street, Russell Market) – nearby" },
  { icon: Train, text: "Bangalore Cantonment Railway Station – short drive" },
  { icon: Building, text: "Indian Express, MG Road & Vidhana Soudha – close by" },
  { icon: Camera, text: "Lalbagh Botanical Garden & City Attractions" },
  { icon: Hospital, text: "Hospitals & clinics close by" },
];

const whyChoose = [
  { icon: Utensils, text: "Veg & Non-Veg restaurants within 50 meters" },
  { icon: Camera, text: "24/7 CCTV surveillance" },
  { icon: Flame, text: "Fire Safety standards compliant" },
  { icon: Headphones, text: "Front Desk support available" },
  { icon: Shield, text: "Couple Friendly – Safe for all guests" },
  { icon: Users, text: "Ideal for corporate, groups & transit guests" },
];

const LocationSection = () => {
  return (
    <section id="location" className="section-padding bg-background">
      <div className="container-hotel">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-3 block">
            Why Stay With Us
          </span>
          <h2 className="section-title">Key Highlights & Location Advantages</h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Nearby Places */}
          <div className="card-hotel p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="icon-box">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground">
                Prime Location – Nearby Places
              </h3>
            </div>

            <div className="space-y-4">
              {nearbyPlaces.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Why Choose */}
          <div className="card-hotel p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="icon-box">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground">
                Why Choose Royal Inn Lodge
              </h3>
            </div>

            <div className="space-y-4">
              {whyChoose.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Highlight */}
        <div className="mt-8 p-6 bg-primary/5 rounded-2xl border border-primary/10 text-center">
          <p className="text-lg text-foreground">
            <span className="font-serif font-semibold">20+ well-maintained rooms</span>{" "}
            ready to welcome you with comfort and hospitality
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
