import { Phone, View } from "lucide-react";
import heroImage from "@/assets/hero-hotel.jpg";

const highlights = [
  { icon: "✨", text: "Premium Comfort" },
  { icon: "🕐", text: "24 Hours Check-in / Check-out" },
  { icon: "📍", text: "Prime City Location" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Royal Inn Lodge - Comfortable hotel room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-hotel section-padding pt-28 md:pt-32 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-primary-foreground/90 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            Premium Budget Stays in Bangalore
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary-foreground leading-tight mb-6">
            Comfortable Stay in the Heart of{" "}
            <span className="text-gold-light">Shivajinagar, Bangalore</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Modern rooms with premium comfort, ideal for families, corporate
            guests & transit stays.
          </p>

          {/* Highlight Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2.5 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium border border-primary-foreground/20"
              >
                <span className="text-lg">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#tour"
              className="btn-primary text-base px-8 py-4 w-full sm:w-auto"
            >
              <View className="w-5 h-5" />
              View 360° Virtual Tour
            </a>
            <a
              href="tel:+919900754180"
              className="btn-secondary text-base px-8 py-4 w-full sm:w-auto"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-2">
          <div className="w-1.5 h-2.5 bg-primary-foreground/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
