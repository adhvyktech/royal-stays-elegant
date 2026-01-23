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
            <p className="text-sm text-primary-foreground/70">
              © {currentYear} Royal Inn Lodge. All Rights Reserved.
            </p>
          </div>

          {/* Credits */}
          <div className="text-sm text-primary-foreground/60">
            <p>
              Built and Managed by{" "}
              <a
                href="https://adhvyktech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-light hover:text-gold transition-colors"
              >
                Adhvyk Tech Solution
              </a>{" "}
              –{" "}
              <a
                href="https://twitter.com/SarveshAstraX"
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
