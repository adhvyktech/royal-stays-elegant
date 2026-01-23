import { View, Play } from "lucide-react";

const VirtualTourSection = () => {
  return (
    <section id="tour" className="section-padding bg-cream">
      <div className="container-hotel">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-3 block">
              Experience Before You Book
            </span>
            <h2 className="section-title">
              Experience Royal Inn Lodge – 360° Virtual Tour
            </h2>
            <p className="section-subtitle mx-auto">
              Explore our rooms and facilities virtually before you book
            </p>
          </div>

          {/* Virtual Tour Placeholder */}
          <div className="card-hotel overflow-hidden">
            <div className="relative aspect-video bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
              {/* Placeholder Visual */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--primary))_0%,_transparent_50%)]" />
              </div>

              {/* Content */}
              <div className="relative z-10 text-center px-6">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-card">
                    <Play className="w-7 h-7 text-primary-foreground ml-1" />
                  </div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  360° Virtual Tour Coming Soon
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  We're preparing an immersive virtual tour experience for you.
                  In the meantime, explore our gallery or contact us for a
                  walkthrough.
                </p>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="p-6 bg-card flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-medium text-foreground">
                  Want to see the property?
                </p>
                <p className="text-sm text-muted-foreground">
                  Call us for a guided virtual walkthrough
                </p>
              </div>
              <a
                href="#contact"
                className="btn-primary"
              >
                <View className="w-4 h-4" />
                Explore Virtual Tour
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTourSection;
