import { Building2, Users, Briefcase, Heart } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "30+ Rooms",
    description: "Well-maintained accommodations",
  },
  {
    icon: Users,
    title: "Family Friendly",
    description: "Safe for all guests",
  },
  {
    icon: Briefcase,
    title: "Corporate Ready",
    description: "Business traveler amenities",
  },
  {
    icon: Heart,
    title: "Comfort First",
    description: "Premium hospitality experience",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container-hotel">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="animate-fade-up">
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-3 block">
              About Us
            </span>
            <h2 className="section-title">Welcome to Royal Inn Lodge</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Royal Inn Lodge offers well-maintained, comfortable rooms in a
              prime Shivajinagar location, designed for budget, premium, and
              mid-segment travelers. Perfect for families, solo travelers,
              corporate guests, and transit stays.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our commitment to cleanliness, safety, and guest satisfaction has
              made us a trusted choice for visitors from across the country.
              Experience the perfect blend of affordability and comfort in the
              heart of Bangalore.
            </p>

            {/* Mini Features */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50"
                >
                  <div className="icon-box flex-shrink-0">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats Card */}
          <div className="relative">
            <div className="card-hotel p-8 md:p-10">
              <div className="text-center mb-8">
                <span className="text-6xl md:text-7xl font-serif font-bold text-primary">
                  30+
                </span>
                <p className="text-muted-foreground mt-2">
                  Well-Maintained Rooms
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 rounded-xl bg-secondary">
                  <span className="text-2xl font-serif font-semibold text-foreground">
                    24/7
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">
                    Front Desk Support
                  </p>
                </div>
                <div className="text-center p-4 rounded-xl bg-secondary">
                  <span className="text-2xl font-serif font-semibold text-foreground">
                    100%
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">
                    Safety Assured
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border text-center">
                <p className="text-muted-foreground text-sm">
                  Trusted by thousands of guests since our establishment
                </p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -z-10 -top-4 -right-4 w-full h-full bg-primary/10 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
