import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LocationSection from "@/components/LocationSection";
import RoomsSection from "@/components/RoomsSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import VirtualTourSection from "@/components/VirtualTourSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <LocationSection />
        <RoomsSection />
        <AmenitiesSection />
        <VirtualTourSection />
        <GallerySection />
        <ContactSection />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
