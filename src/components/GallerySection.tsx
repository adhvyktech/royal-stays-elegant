import { useState } from "react";
import { X } from "lucide-react";
import roomAcImage from "@/assets/room-ac.jpg";
import roomNonAcImage from "@/assets/room-nonac.jpg";
import galleryReception from "@/assets/gallery-reception.jpg";
import galleryBathroom from "@/assets/gallery-bathroom.jpg";
import galleryCorridor from "@/assets/gallery-corridor.jpg";
import heroImage from "@/assets/hero-hotel.jpg";

const galleryImages = [
  {
    src: heroImage,
    alt: "Deluxe room interior",
    category: "Rooms",
  },
  {
    src: roomAcImage,
    alt: "Deluxe AC Room",
    category: "Rooms",
  },
  {
    src: roomNonAcImage,
    alt: "Deluxe Non-AC Room",
    category: "Rooms",
  },
  {
    src: galleryReception,
    alt: "Hotel Reception",
    category: "Common Areas",
  },
  {
    src: galleryBathroom,
    alt: "Clean Bathroom",
    category: "Facilities",
  },
  {
    src: galleryCorridor,
    alt: "Hotel Corridor",
    category: "Common Areas",
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container-hotel">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-3 block">
            See For Yourself
          </span>
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle mx-auto">
            Take a visual tour of our rooms and facilities
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div
                className={`${
                  index === 0 ? "aspect-[4/3] md:aspect-square" : "aspect-[4/3]"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs text-primary-foreground/80 uppercase tracking-wider">
                    {image.category}
                  </span>
                  <p className="text-primary-foreground font-medium">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
