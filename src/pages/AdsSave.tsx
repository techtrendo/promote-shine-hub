import { useState } from "react";
import { Save, Heart, ExternalLink, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageLayout from "@/components/PageLayout";
import { toast } from "sonner";

interface AdItem {
  id: number;
  title: string;
  description: string;
  category: string;
  discount: string;
  rating: number;
  price: string;
  gradient: string;
}

const AdsSave = () => {
  const [savedAds, setSavedAds] = useState<number[]>([]);

  const adItems: AdItem[] = [
    {
      id: 1,
      title: "Instagram Followers Boost",
      description: "Get 10K+ real followers with instant delivery",
      category: "Instagram",
      discount: "30% OFF",
      rating: 4.8,
      price: "$49.99",
      gradient: "from-pink-500 to-purple-600",
    },
    {
      id: 2,
      title: "YouTube Views Package",
      description: "100K+ views for your videos, high retention rate",
      category: "YouTube",
      discount: "25% OFF",
      rating: 4.9,
      price: "$79.99",
      gradient: "from-red-500 to-orange-600",
    },
    {
      id: 3,
      title: "TikTok Engagement Pro",
      description: "Boost likes, comments & shares organically",
      category: "TikTok",
      discount: "40% OFF",
      rating: 4.7,
      price: "$39.99",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      id: 4,
      title: "Twitter Growth Suite",
      description: "Gain followers & increase engagement instantly",
      category: "Twitter",
      discount: "20% OFF",
      rating: 4.6,
      price: "$59.99",
      gradient: "from-blue-400 to-indigo-600",
    },
    {
      id: 5,
      title: "Facebook Page Likes",
      description: "Grow your page with real, active users",
      category: "Facebook",
      discount: "35% OFF",
      rating: 4.8,
      price: "$44.99",
      gradient: "from-blue-600 to-purple-600",
    },
    {
      id: 6,
      title: "Spotify Plays Booster",
      description: "Increase your streams and monthly listeners",
      category: "Spotify",
      discount: "50% OFF",
      rating: 4.9,
      price: "$29.99",
      gradient: "from-green-500 to-emerald-600",
    },
  ];

  const handleSaveAd = (adId: number, adTitle: string) => {
    if (savedAds.includes(adId)) {
      setSavedAds(savedAds.filter(id => id !== adId));
      toast.success(`Removed "${adTitle}" from saved ads`);
    } else {
      setSavedAds([...savedAds, adId]);
      toast.success(`Saved "${adTitle}" to your collection!`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageLayout>
        {/* Hero Section */}
        <section className="text-center mb-12 animate-fade-in">
          <div className="inline-block mb-4">
            <Badge className="bg-gradient-to-r from-primary to-purple-600 text-white px-4 py-2 text-sm">
              <Heart className="w-4 h-4 mr-1 inline" />
              Save Your Favorite Deals
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Discover & Save Amazing SMM Deals
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Browse through our curated collection of premium SMM services. 
            Save your favorites and never miss out on exclusive deals and promotions. 
            All ads are verified and offer the best value for your social media growth!
          </p>
        </section>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in">
          <Card className="border-primary/20 hover-scale">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-1">{savedAds.length}</h3>
              <p className="text-sm text-muted-foreground">Saved Deals</p>
            </CardContent>
          </Card>
          
          <Card className="border-primary/20 hover-scale">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-1">500+</h3>
              <p className="text-sm text-muted-foreground">Active Deals</p>
            </CardContent>
          </Card>
          
          <Card className="border-primary/20 hover-scale">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-1">50K+</h3>
              <p className="text-sm text-muted-foreground">Happy Users</p>
            </CardContent>
          </Card>
        </div>

        {/* Ad Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {adItems.map((ad, index) => (
            <Card
              key={ad.id}
              className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Header */}
              <div className={`h-32 bg-gradient-to-br ${ad.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute top-3 right-3">
                  <Badge className="bg-white/90 text-primary font-bold">
                    {ad.discount}
                  </Badge>
                </div>
                <div className="absolute bottom-3 left-3 text-white">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    {ad.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                    {ad.title}
                  </h3>
                  <button
                    onClick={() => handleSaveAd(ad.id, ad.title)}
                    className="transition-all duration-300"
                  >
                    <Heart
                      className={`w-5 h-5 transition-all duration-300 ${
                        savedAds.includes(ad.id)
                          ? "fill-red-500 text-red-500 scale-110"
                          : "text-muted-foreground hover:text-red-500 hover:scale-110"
                      }`}
                    />
                  </button>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {ad.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(ad.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-1">
                      {ad.rating}
                    </span>
                  </div>
                  <span className="text-lg font-bold text-primary">{ad.price}</span>
                </div>

                <Button className="w-full group/btn" variant="default">
                  View Deal
                  <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 border-0 text-white mb-12 animate-fade-in">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Boost Your Social Media?
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Start saving your favorite deals and get instant access to premium SMM services. 
              Join thousands of satisfied users today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
              >
                <Save className="w-5 h-5 mr-2" />
                Save All Deals
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                View Saved ({savedAds.length})
              </Button>
            </div>
          </CardContent>
        </Card>
      </PageLayout>
      <Footer />
    </div>
  );
};

export default AdsSave;
