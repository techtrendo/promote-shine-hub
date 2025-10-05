import { Link } from "react-router-dom";
import { Search, TrendingUp, Star, Award, BarChart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSpace from "@/components/AdSpace";
import PanelCard from "@/components/PanelCard";
import heroImage from "@/assets/hero-bg.jpg";
import promoImage from "@/assets/promo-banner.jpg";

const Index = () => {
  const featuredPanels = [
    {
      name: "SocialBoost Pro",
      description: "Premium SMM services with instant delivery and 24/7 support. Top-rated panel for all major platforms.",
      rating: 4.9,
      reviews: 2543,
      users: "50K+",
      verified: true,
      featured: true,
      categories: ["Instagram", "Facebook", "YouTube"],
    },
    {
      name: "InstaGrowth Elite",
      description: "Specialized Instagram growth panel with organic followers and engagement services.",
      rating: 4.8,
      reviews: 1876,
      users: "35K+",
      verified: true,
      featured: true,
      categories: ["Instagram", "TikTok", "Twitter"],
    },
    {
      name: "MediaMarket Plus",
      description: "All-in-one social media marketing solution with competitive pricing and fast delivery.",
      rating: 4.7,
      reviews: 1432,
      users: "28K+",
      verified: false,
      featured: true,
      categories: ["YouTube", "Spotify", "SoundCloud"],
    },
  ];

  const features = [
    {
      icon: Search,
      title: "Discover Top Panels",
      description: "Browse and compare the best SMM panels with detailed reviews and ratings.",
    },
    {
      icon: TrendingUp,
      title: "Real-time Analytics",
      description: "Track performance metrics and growth statistics of featured panels.",
    },
    {
      icon: Award,
      title: "Verified Services",
      description: "All panels are verified for quality, reliability, and customer satisfaction.",
    },
    {
      icon: Shield,
      title: "Secure Marketplace",
      description: "Safe and trusted platform for promoting and discovering SMM services.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div
            className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-primary opacity-5" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in-up">
                <div className="inline-block">
                  <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1.5">
                    <Star className="h-3 w-3 mr-1 fill-primary" />
                    #1 SMM Panel Directory
                  </Badge>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Discover & Showcase
                  <span className="bg-gradient-primary bg-clip-text text-transparent block">
                    Top SMM Panels
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl">
                  Connect with the best social media marketing panels. Compare services, read reviews,
                  and grow your business with trusted providers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/search">
                    <Button size="lg" className="bg-gradient-primary hover:opacity-90 w-full sm:w-auto">
                      <Search className="h-5 w-5 mr-2" />
                      Explore Panels
                    </Button>
                  </Link>
                  <Link to="/add-panel">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Submit Your Panel
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="hidden lg:block">
                <AdSpace size="large" label="Hero Ad Space" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Promote SMM?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Your trusted platform for discovering reliable SMM services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Panels Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured SMM Panels</h2>
                <p className="text-muted-foreground">Top-rated and verified services</p>
              </div>
              <Link to="/top-panels">
                <Button variant="outline">
                  View All Panels
                  <TrendingUp className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPanels.map((panel, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <PanelCard {...panel} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ad Space Section */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AdSpace size="medium" label="Promotional Ad 1" />
              <AdSpace size="medium" label="Promotional Ad 2" />
            </div>
          </div>
        </section>

        {/* Promotion Banner */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div
              className="relative rounded-2xl overflow-hidden p-8 md:p-12 text-center"
              style={{
                backgroundImage: `url(${promoImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-90" />
              <div className="relative z-10 text-primary-foreground space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Ready to Grow Your Business?</h2>
                <p className="text-lg opacity-90 max-w-2xl mx-auto">
                  Join thousands of satisfied users and discover the perfect SMM panel for your needs
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Link to="/search">
                    <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                      <Search className="h-5 w-5 mr-2" />
                      Browse Panels
                    </Button>
                  </Link>
                  <Link to="/add-panel">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                      List Your Panel
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  500+
                </div>
                <p className="text-muted-foreground">SMM Panels</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  100K+
                </div>
                <p className="text-muted-foreground">Happy Users</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  50K+
                </div>
                <p className="text-muted-foreground">Reviews</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  4.8
                </div>
                <p className="text-muted-foreground">Avg Rating</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

const Badge = ({ className = "", children }: { className?: string; children: React.ReactNode }) => {
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${className}`}>
      {children}
    </span>
  );
};

export default Index;
