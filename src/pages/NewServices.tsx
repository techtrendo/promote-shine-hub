import { Sparkles, Clock, TrendingUp, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSpace from "@/components/AdSpace";
import PageLayout from "@/components/PageLayout";
import promoImage from "@/assets/promo-banner.jpg";

const NewServices = () => {
  const newServices = [
    {
      title: "Instagram Reels Boost",
      panel: "SocialBoost Pro",
      description: "Get your Reels trending with real views and engagement",
      price: "$9.99",
      discount: "50% OFF",
      isNew: true,
      icon: TrendingUp,
    },
    {
      title: "TikTok Viral Package",
      panel: "TikTok Masters",
      description: "Complete package for viral TikTok growth",
      price: "$14.99",
      discount: "Limited Time",
      isNew: true,
      icon: Zap,
    },
    {
      title: "YouTube Shorts Growth",
      panel: "YouTube Growth Hub",
      description: "Boost your Shorts with real views and subscribers",
      price: "$12.99",
      discount: "30% OFF",
      isNew: true,
      icon: Sparkles,
    },
    {
      title: "Twitter Blue Verified",
      panel: "Twitter Boost Pro",
      description: "Premium Twitter growth with verified badge support",
      price: "$19.99",
      discount: "New Launch",
      isNew: true,
      icon: TrendingUp,
    },
    {
      title: "LinkedIn Premium Growth",
      panel: "Professional SMM",
      description: "Grow your professional network with targeted engagement",
      price: "$24.99",
      discount: "20% OFF",
      isNew: false,
      icon: Sparkles,
    },
    {
      title: "Spotify Playlist Push",
      panel: "MediaMarket Plus",
      description: "Get your music on popular playlists",
      price: "$17.99",
      discount: "Launch Offer",
      isNew: false,
      icon: Zap,
    },
  ];

  const promotions = [
    {
      title: "Weekend Special",
      description: "50% off all Instagram services",
      validUntil: "2 days left",
    },
    {
      title: "New Customer Bonus",
      description: "Get 20% extra credits on first order",
      validUntil: "Limited time",
    },
    {
      title: "Bundle Deal",
      description: "Buy 3 services, get 1 free",
      validUntil: "5 days left",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <PageLayout>
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-base animate-pulse">
              <Sparkles className="h-4 w-4 mr-2 fill-primary" />
              New & Trending
            </Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Latest SMM Services
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the newest social media marketing services and exclusive promotions
          </p>
        </div>

        {/* Promotional Banner */}
        <div
          className="relative rounded-2xl overflow-hidden p-8 md:p-12 mb-12 text-center"
          style={{
            backgroundImage: `url(${promoImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-secondary opacity-90" />
          <div className="relative z-10 text-primary-foreground space-y-4">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              <Clock className="h-3 w-3 mr-1" />
              Limited Time Offer
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Flash Sale: Up to 50% OFF</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Get incredible discounts on premium SMM services. Offer ends soon!
            </p>
            <Button size="lg" variant="secondary" className="mt-4">
              View All Deals
            </Button>
          </div>
        </div>

        {/* Active Promotions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Active Promotions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {promotions.map((promo, index) => (
              <Card key={index} className="hover:shadow-lg transition-all border-primary/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-gradient-primary text-primary-foreground">
                      {promo.validUntil}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{promo.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{promo.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-primary hover:opacity-90">
                    Claim Offer
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Ad Space */}
        <div className="mb-8">
          <AdSpace size="banner" label="New Services Banner Ad" />
        </div>

        {/* New Services Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Newly Launched Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newServices.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    {service.isNew && (
                      <Badge className="bg-success text-success-foreground">
                        NEW
                      </Badge>
                    )}
                    <Badge variant="outline">{service.discount}</Badge>
                  </div>
                  <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-3">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">by {service.panel}</span>
                    <span className="text-xl font-bold text-primary">{service.price}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-primary hover:opacity-90">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom Ad Spaces */}
        <div className="grid md:grid-cols-2 gap-6">
          <AdSpace size="medium" label="Services Ad 1" />
          <AdSpace size="medium" label="Services Ad 2" />
        </div>
      </PageLayout>

      <Footer />
    </div>
  );
};

export default NewServices;
