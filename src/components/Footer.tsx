const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-hotel section-padding py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          {/* Logo & Copyright */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-1">
              Royal Inn Lodge
            </h4>
            <div className="flex flex-col sm:flex-row items-center sm:gap-4 justify-center md:justify-start">
              <p className="text-sm text-primary-foreground/70">
                © {currentYear} Royal Inn Lodge. All Rights Reserved.
              </p>
              <a href="/sitemap.html" className="text-sm text-gold hover:text-gold-light mt-1 sm:mt-0 transition-colors">
                Sitemap
              </a>
            </div>
          </div>

          {/* Credits */}
          <div className="text-sm text-primary-foreground/60">
            <p>
              Built and Managed by{" "}
              <a
                href="https://adhvyk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-light hover:text-gold transition-colors"
              >
                Adhvyk Tech Solution
              </a>{" "}
              –{" "}
              <a
                href="https://instagram.com/sarveshastrax"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-light hover:text-gold transition-colors"
              >
                @SarveshAstraX
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
