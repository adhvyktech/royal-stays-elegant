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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.716447854842!2d77.59428517507779!3d12.988259187329836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1676e98a1249%3A0x9c3c0e9d0f6c8e8a!2sShivajinagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1706000000000!5m2!1sen!2sin"
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
