import { useState } from "react";
import { ExternalLink, Copy, ThumbsUp, ThumbsDown, MessageCircle, Plus, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageLayout from "@/components/PageLayout";
import { toast } from "sonner";

interface Store {
  id: number;
  name: string;
  description: string;
  country: string;
  countryCode: string;
  thumbnail: string;
  website: string;
  likes: number;
  dislikes: number;
  comments: number;
  tags: string[];
  gradient: string;
}

const SocialMediaStores = () => {
  const [stores, setStores] = useState<Store[]>([
    {
      id: 1,
      name: "PanelRegion.com",
      description: "SMM Panel Service PROVIDER",
      country: "United States",
      countryCode: "🇺🇸",
      thumbnail: "from-blue-500 to-purple-600",
      website: "https://panelregion.com",
      likes: 245,
      dislikes: 12,
      comments: 67,
      tags: ["Social Media Market", "Automatic Dealership Panel", "24/7", "Fast Service"],
      gradient: "from-blue-500 to-purple-600",
    },
    {
      id: 2,
      name: "SMMTurk.org",
      description: "Türkiye'nin En Büyük Sosyal Medya Bayilik Paneli",
      country: "Turkey",
      countryCode: "🇹🇷",
      thumbnail: "from-red-500 to-orange-600",
      website: "https://smmturk.org",
      likes: 312,
      dislikes: 8,
      comments: 89,
      tags: ["Social Media Market", "Affordable Price", "Automatic Panel", "Turkish Services"],
      gradient: "from-red-500 to-orange-600",
    },
    {
      id: 3,
      name: "Dijitalistasyon.com",
      description: "Otomatik Bayilik Panel - Yıldız Gibi Parlamak Artık Çok Kolay",
      country: "Turkey",
      countryCode: "🇹🇷",
      thumbnail: "from-pink-500 to-purple-600",
      website: "https://dijitalistasyon.com",
      likes: 198,
      dislikes: 15,
      comments: 43,
      tags: ["Automatic Dealership Panel", "24/7", "Fast Service", "Premium Quality"],
      gradient: "from-pink-500 to-purple-600",
    },
    {
      id: 4,
      name: "SMMTok.com",
      description: "Best prices and support, You won't find them elsewhere",
      country: "United Kingdom",
      countryCode: "🇬🇧",
      thumbnail: "from-cyan-500 to-blue-600",
      website: "https://smmtok.com",
      likes: 456,
      dislikes: 7,
      comments: 123,
      tags: ["Social Media Market", "Best Price", "24/7 Support", "Fast Service"],
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      id: 5,
      name: "SMMXL.com",
      description: "Premium SMM Services with Instant Delivery",
      country: "Germany",
      countryCode: "🇩🇪",
      thumbnail: "from-green-500 to-emerald-600",
      website: "https://smmxl.com",
      likes: 289,
      dislikes: 19,
      comments: 72,
      tags: ["Premium Services", "Instant Delivery", "24/7", "Verified Panel"],
      gradient: "from-green-500 to-emerald-600",
    },
    {
      id: 6,
      name: "BayiSMM.com",
      description: "En Kaliteli Sosyal Medya Paneli - Hızlı & Garantili",
      country: "Turkey",
      countryCode: "🇹🇷",
      thumbnail: "from-orange-500 to-red-600",
      website: "https://bayismm.com",
      likes: 178,
      dislikes: 11,
      comments: 54,
      tags: ["Social Media Market", "Fast Service", "Guaranteed", "Affordable Price"],
      gradient: "from-orange-500 to-red-600",
    },
  ]);

  const [userReactions, setUserReactions] = useState<{[key: number]: 'like' | 'dislike' | null}>({});

  const copyToClipboard = (text: string, storeName: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`Copied ${storeName} website link!`);
  };

  const handleReaction = (storeId: number, type: 'like' | 'dislike') => {
    const currentReaction = userReactions[storeId];
    
    setStores(stores.map(store => {
      if (store.id === storeId) {
        let newLikes = store.likes;
        let newDislikes = store.dislikes;

        // Remove previous reaction
        if (currentReaction === 'like') newLikes--;
        if (currentReaction === 'dislike') newDislikes--;

        // Add new reaction if different
        if (currentReaction !== type) {
          if (type === 'like') newLikes++;
          if (type === 'dislike') newDislikes++;
        }

        return { ...store, likes: newLikes, dislikes: newDislikes };
      }
      return store;
    }));

    setUserReactions({
      ...userReactions,
      [storeId]: currentReaction === type ? null : type
    });

    if (currentReaction === type) {
      toast.info("Reaction removed");
    } else {
      toast.success(type === 'like' ? "Liked!" : "Disliked");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageLayout>
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 animate-fade-in">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Social Media Stores
            </h1>
            <p className="text-muted-foreground">
              Discover verified SMM panel providers from around the world
            </p>
          </div>
          <Button size="lg" className="bg-gradient-primary hover:opacity-90">
            <Plus className="w-5 h-5 mr-2" />
            Add New Store
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 animate-fade-in">
          <Card className="border-primary/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Stores</p>
                  <p className="text-2xl font-bold">{stores.length}</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{stores.length}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Reactions</p>
                  <p className="text-2xl font-bold">
                    {stores.reduce((acc, store) => acc + store.likes + store.dislikes, 0)}
                  </p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-600 rounded-full flex items-center justify-center">
                  <ThumbsUp className="w-5 h-5 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Comments</p>
                  <p className="text-2xl font-bold">
                    {stores.reduce((acc, store) => acc + store.comments, 0)}
                  </p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-cyan-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stores List */}
        <div className="space-y-4">
          {stores.map((store, index) => (
            <Card
              key={store.id}
              className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row">
                  {/* Sidebar Indicator */}
                  <div className="hidden lg:flex items-center justify-center w-12 bg-gradient-to-b from-primary/10 to-purple-600/10 group-hover:from-primary/20 group-hover:to-purple-600/20 transition-colors">
                    <ChevronRight className="w-6 h-6 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>

                  {/* Thumbnail/Banner */}
                  <div className={`w-full lg:w-48 h-32 lg:h-auto bg-gradient-to-br ${store.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="relative z-10 text-center text-white">
                      <p className="text-3xl font-bold mb-1">{store.countryCode}</p>
                      <p className="text-xs font-semibold px-2">{store.name.split('.')[0]}</p>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 p-4 lg:p-6">
                    <div className="flex flex-col lg:flex-row gap-4">
                      {/* Provider Info */}
                      <div className="flex-1 space-y-3">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                {store.name}
                              </h3>
                              <span className="text-lg">{store.countryCode}</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                              {store.description}
                            </p>
                          </div>
                        </div>

                        {/* Website Link */}
                        <div className="flex items-center gap-2 p-2 bg-muted/30 rounded-md">
                          <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                          <a
                            href={store.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline truncate flex-1 font-mono"
                          >
                            {store.website}
                          </a>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => copyToClipboard(store.website, store.name)}
                            className="flex-shrink-0"
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {store.tags.map((tag, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="bg-primary/10 text-primary hover:bg-primary/20"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Reactions Section */}
                      <div className="flex lg:flex-col gap-3 lg:items-end justify-between lg:justify-start lg:min-w-[120px]">
                        <Button
                          size="sm"
                          variant={userReactions[store.id] === 'like' ? 'default' : 'outline'}
                          onClick={() => handleReaction(store.id, 'like')}
                          className="flex items-center gap-2"
                        >
                          <ThumbsUp className="w-4 h-4" />
                          <span className="font-semibold">{store.likes}</span>
                        </Button>

                        <Button
                          size="sm"
                          variant={userReactions[store.id] === 'dislike' ? 'default' : 'outline'}
                          onClick={() => handleReaction(store.id, 'dislike')}
                          className="flex items-center gap-2"
                        >
                          <ThumbsDown className="w-4 h-4" />
                          <span className="font-semibold">{store.dislikes}</span>
                        </Button>

                        <Button
                          size="sm"
                          variant="outline"
                          className="flex items-center gap-2"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span className="font-semibold">{store.comments}</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <Card className="mt-8 bg-gradient-to-r from-primary via-purple-600 to-pink-600 border-0 text-white animate-fade-in">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Want to List Your SMM Panel?
            </h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              Join our growing community of verified SMM panel providers and reach thousands of potential customers.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 font-semibold"
            >
              <Plus className="w-5 h-5 mr-2" />
              Submit Your Store
            </Button>
          </CardContent>
        </Card>
      </PageLayout>
      <Footer />
    </div>
  );
};

export default SocialMediaStores;
