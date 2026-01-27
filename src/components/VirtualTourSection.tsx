import { View } from "lucide-react";

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
            <div className="relative aspect-video bg-muted text-center flex items-center justify-center">
              <iframe
                src="https://ai.tapit.club/RoyalInnLodge/"
                className="w-full h-full"
                title="Royal Inn Lodge Virtual Tour"
                loading="lazy"
                allowFullScreen
              />
            </div>

            {/* Bottom CTA */}
            <div className="p-6 bg-card flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-medium text-foreground">
                  Want to see the property?
                </p>
                <p className="text-sm text-muted-foreground">
                  Take a virtual walk through our rooms
                </p>
              </div>
              <a
                href="https://ai.tapit.club/RoyalInnLodge/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <View className="w-4 h-4" />
                Open Full Screen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTourSection;
