import { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // TODO: Replace with your actual Web3Forms access key
          access_key: "f7a283f8-4718-440f-8844-49ececcce3c7",
          ...formData,
          subject: "New Enquiry from Royal Inn Lodge Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Enquiry sent successfully! We'll get back to you soon.");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        toast.error(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send enquiry. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-cream">
      <div className="container-hotel">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-3 block">
            Get in Touch
          </span>
          <h2 className="section-title">Contact & Booking</h2>
          <p className="section-subtitle mx-auto">
            Ready to book your stay? Reach out to us for enquiries and
            reservations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left: Contact Details */}
          <div className="card-hotel p-6 md:p-8">
            <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
              Contact Information
            </h3>

            {/* Address */}
            <div className="flex items-start gap-4 mb-6">
              <div className="icon-box flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">Address</h4>
                <p className="text-muted-foreground">
                  ROYAL INN LODGE
                  <br />
                  151, H.K.P. (Broadway) Road,
                  <br />
                  Shivajinagar, Bangalore – 560051
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 mb-6">
              <div className="icon-box flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">Phone</h4>
                <a
                  href="tel:+919900754180"
                  className="text-primary hover:underline"
                >
                  +91 99007 54180
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 mb-8">
              <div className="icon-box flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">Email</h4>
                <a
                  href="mailto:royalinnshivajinagar@gmail.com"
                  className="text-primary hover:underline block"
                >
                  royalinnshivajinagar@gmail.com
                </a>
                <a
                  href="mailto:info@royalinnlodge.in"
                  className="text-primary hover:underline block"
                >
                  info@royalinnlodge.in
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Quick Actions</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+919900754180"
                  className="btn-primary text-sm py-2"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/919900754180?text=${encodeURIComponent(
                    "Hello, I would like to enquire about room availability at Royal Inn Lodge."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm py-2"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="card-hotel p-6 md:p-8">
            <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
              Send an Enquiry
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  maxLength={15}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  placeholder="+91 9XXXXXXXXX"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={255}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  maxLength={1000}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your booking requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full py-4 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Enquiry
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
