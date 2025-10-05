import { Trophy, Medal, Award, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSpace from "@/components/AdSpace";
import PanelCard from "@/components/PanelCard";
import { Badge } from "@/components/ui/badge";

const TopPanels = () => {
  const topPanels = [
    {
      name: "SocialBoost Pro",
      description: "Premium SMM services with instant delivery and 24/7 support. Winner of Best Overall Panel 2024.",
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
      verified: true,
      featured: true,
      categories: ["YouTube", "Spotify", "SoundCloud"],
    },
    {
      name: "TikTok Masters",
      description: "TikTok-focused panel with viral growth strategies and authentic engagement.",
      rating: 4.6,
      reviews: 987,
      users: "15K+",
      verified: true,
      featured: false,
      categories: ["TikTok", "Instagram"],
    },
    {
      name: "YouTube Growth Hub",
      description: "Specialized in YouTube subscribers, views, and engagement with fast delivery.",
      rating: 4.5,
      reviews: 754,
      users: "12K+",
      verified: true,
      featured: false,
      categories: ["YouTube"],
    },
    {
      name: "Twitter Boost Pro",
      description: "Premium Twitter growth services for businesses and influencers.",
      rating: 4.4,
      reviews: 623,
      users: "10K+",
      verified: true,
      featured: false,
      categories: ["Twitter", "LinkedIn"],
    },
  ];

  const rankings = [
    { icon: Trophy, color: "text-yellow-500", title: "Top Rated", panels: 3 },
    { icon: Medal, color: "text-primary", title: "Most Reviewed", panels: 5 },
    { icon: Award, color: "text-secondary", title: "Best Growth", panels: 4 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-base">
                <Trophy className="h-4 w-4 mr-2 fill-primary" />
                Top Rated Panels
              </Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Best SMM Panels of 2024
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover the highest-rated and most trusted SMM panels based on user reviews and performance
            </p>
          </div>

          {/* Rankings Categories */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {rankings.map((ranking, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-all"
              >
                <ranking.icon className={`h-12 w-12 mx-auto mb-3 ${ranking.color}`} />
                <h3 className="font-semibold text-lg mb-1">{ranking.title}</h3>
                <p className="text-muted-foreground text-sm">{ranking.panels} Panels</p>
              </div>
            ))}
          </div>

          {/* Ad Space */}
          <div className="mb-8">
            <AdSpace size="banner" label="Top Panels Banner Ad" />
          </div>

          {/* Top Panels Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {topPanels.map((panel, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                {index < 3 && (
                  <div className="mb-3 flex items-center justify-center">
                    <Badge className="bg-gradient-primary text-primary-foreground">
                      #{index + 1} Rank
                    </Badge>
                  </div>
                )}
                <PanelCard {...panel} />
              </div>
            ))}
          </div>

          {/* User Reviews Section */}
          <div className="bg-gradient-subtle rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center">What Users Are Saying</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((review) => (
                <div key={review} className="bg-card rounded-lg p-6 border border-border">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    "Excellent service! Fast delivery and great customer support. Highly recommended for anyone looking to grow their social media."
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-gradient-primary" />
                    <div>
                      <div className="font-medium text-sm">User #{review}</div>
                      <div className="text-xs text-muted-foreground">Verified Customer</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Ad Spaces */}
          <div className="grid md:grid-cols-2 gap-6">
            <AdSpace size="medium" label="Top Panels Ad 1" />
            <AdSpace size="medium" label="Top Panels Ad 2" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TopPanels;
