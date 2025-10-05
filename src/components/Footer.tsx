import { Link } from "react-router-dom";
import { TrendingUp, Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import AdSpace from "./AdSpace";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Search Panels", path: "/search" },
    { name: "Top Panels", path: "/top-panels" },
    { name: "Add Your Panel", path: "/add-panel" },
  ];

  const resources = [
    { name: "New Services", path: "/new-services" },
    { name: "Analytics", path: "/analytics" },
    { name: "Domain Marketplace", path: "/domains" },
    { name: "Advertisement", path: "/advertisement" },
  ];

  const support = [
    { name: "FAQ", path: "/faq" },
    { name: "Contact Us", path: "/contact" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <footer className="bg-gradient-subtle border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Ad Spaces */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <AdSpace size="medium" label="Footer Ad 1" />
          <AdSpace size="medium" label="Footer Ad 2" />
          <AdSpace size="medium" label="Footer Ad 3" />
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <TrendingUp className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Promote SMM
              </span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-sm">
              Your trusted platform to discover, compare, and showcase the best SMM panels. 
              Connecting businesses with top-rated social media marketing services.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              {support.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 Promote SMM. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
