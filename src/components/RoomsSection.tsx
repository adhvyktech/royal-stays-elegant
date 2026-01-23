import {
  AirVent,
  Bed,
  Tv,
  Wifi,
  PenTool,
  Bath,
  Wind,
  Check,
} from "lucide-react";
import roomAcImage from "@/assets/room-ac.jpg";
import roomNonAcImage from "@/assets/room-nonac.jpg";

const rooms = [
  {
    name: "Deluxe AC Room",
    image: roomAcImage,
    description: "Air-conditioned comfort for a refreshing stay",
    icon: AirVent,
    features: [
      { icon: AirVent, text: "Air-conditioned" },
      { icon: Bed, text: "Premium 8-inch mattress" },
      { icon: Tv, text: "Android Smart TV with DTH" },
      { icon: Wifi, text: "High-speed Wi-Fi" },
      { icon: PenTool, text: "Work desk" },
      { icon: Bath, text: "Attached bathroom with 24/7 hot water" },
    ],
  },
  {
    name: "Deluxe Non-AC Room",
    image: roomNonAcImage,
    description: "Spacious and well-ventilated for natural comfort",
    icon: Wind,
    features: [
      { icon: Wind, text: "Spacious & well-ventilated" },
      { icon: Bed, text: "Premium 8-inch mattress" },
      { icon: Tv, text: "Android Smart TV with DTH" },
      { icon: Wifi, text: "High-speed Wi-Fi" },
      { icon: PenTool, text: "Work desk" },
      { icon: Bath, text: "Attached bathroom with 24/7 hot water" },
    ],
  },
];

const RoomsSection = () => {
  return (
    <section id="rooms" className="section-padding bg-cream">
      <div className="container-hotel">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-3 block">
            Accommodations
          </span>
          <h2 className="section-title">Our Room Categories</h2>
          <p className="section-subtitle mx-auto">
            Choose from our comfortable room options designed to suit your needs
            and budget
          </p>
        </div>

        {/* Room Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {rooms.map((room, index) => (
            <div key={index} className="card-hotel overflow-hidden group">
              {/* Room Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-primary rounded-full">
                    <room.icon className="w-4 h-4 text-primary-foreground" />
                    <span className="text-sm font-medium text-primary-foreground">
                      {room.name.includes("AC Room") && !room.name.includes("Non")
                        ? "AC"
                        : "Non-AC"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Room Details */}
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  {room.name}
                </h3>
                <p className="text-muted-foreground mb-5">{room.description}</p>

                {/* Features List */}
                <div className="space-y-3">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-6 pt-5 border-t border-border">
                  <a
                    href="#contact"
                    className="btn-outline w-full justify-center"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
