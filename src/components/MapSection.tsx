const MapSection = () => {
  return (
    <section className="bg-background">
      <div className="container-hotel px-4 md:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
            Find Us on Map
          </h3>
          <p className="text-muted-foreground text-sm">
            Conveniently located in the heart of Shivajinagar, Bangalore
          </p>
        </div>
      </div>
      <div className="w-full h-[400px] md:h-[450px]">
        <iframe
          src="https://maps.google.com/maps?q=Royal%20Inn%20Lodge,%20N.K.P.road,%20shivajinagar,%20Bangalore&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Royal Inn Lodge Location"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </section>
  );
};

export default MapSection;
