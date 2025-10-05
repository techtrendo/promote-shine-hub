import { useState } from "react";
import { Search as SearchIcon, Filter, Star, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSpace from "@/components/AdSpace";
import PanelCard from "@/components/PanelCard";

const Search = () => {
  const [showFilters, setShowFilters] = useState(true);

  const panels = [
    {
      name: "SocialBoost Pro",
      description: "Premium SMM services with instant delivery and 24/7 support",
      rating: 4.9,
      reviews: 2543,
      users: "50K+",
      verified: true,
      featured: true,
      categories: ["Instagram", "Facebook", "YouTube"],
    },
    {
      name: "InstaGrowth Elite",
      description: "Specialized Instagram growth panel with organic followers",
      rating: 4.8,
      reviews: 1876,
      users: "35K+",
      verified: true,
      featured: false,
      categories: ["Instagram", "TikTok"],
    },
    {
      name: "MediaMarket Plus",
      description: "All-in-one social media marketing solution with competitive pricing",
      rating: 4.7,
      reviews: 1432,
      users: "28K+",
      verified: false,
      featured: false,
      categories: ["YouTube", "Spotify"],
    },
    {
      name: "TikTok Masters",
      description: "TikTok-focused panel with viral growth strategies",
      rating: 4.6,
      reviews: 987,
      users: "15K+",
      verified: true,
      featured: false,
      categories: ["TikTok", "Instagram"],
    },
    {
      name: "YouTube Growth Hub",
      description: "Specialized in YouTube subscribers, views, and engagement",
      rating: 4.5,
      reviews: 754,
      users: "12K+",
      verified: false,
      featured: false,
      categories: ["YouTube"],
    },
    {
      name: "Twitter Boost Pro",
      description: "Premium Twitter growth services for businesses and influencers",
      rating: 4.4,
      reviews: 623,
      users: "10K+",
      verified: true,
      featured: false,
      categories: ["Twitter", "LinkedIn"],
    },
  ];

  const categories = [
    "Instagram",
    "Facebook",
    "YouTube",
    "TikTok",
    "Twitter",
    "LinkedIn",
    "Spotify",
    "SoundCloud",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Search SMM Panels</h1>
            <p className="text-muted-foreground">Find the perfect panel for your social media needs</p>
          </div>

          {/* Search Bar */}
          <div className="flex gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search panels by name, category, or service..."
                  className="pl-10 h-12"
                />
              </div>
            </div>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowFilters(!showFilters)}
              className="hidden md:flex"
            >
              <SlidersHorizontal className="h-5 w-5 mr-2" />
              Filters
            </Button>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Sidebar Filters */}
            {showFilters && (
              <aside className="lg:col-span-1 space-y-6">
                <div className="bg-card border border-border rounded-lg p-6 space-y-6">
                  {/* Sort By */}
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Star className="h-4 w-4 mr-2 text-primary" />
                      Sort By
                    </h3>
                    <Select defaultValue="rating">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rating">Highest Rated</SelectItem>
                        <SelectItem value="reviews">Most Reviews</SelectItem>
                        <SelectItem value="users">Most Users</SelectItem>
                        <SelectItem value="newest">Newest First</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Categories */}
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Filter className="h-4 w-4 mr-2 text-primary" />
                      Categories
                    </h3>
                    <div className="space-y-3">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox id={category} />
                          <label
                            htmlFor={category}
                            className="text-sm cursor-pointer hover:text-primary transition-colors"
                          >
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Rating Filter */}
                  <div>
                    <h3 className="font-semibold mb-3">Minimum Rating</h3>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Ratings</SelectItem>
                        <SelectItem value="4.5">4.5+ Stars</SelectItem>
                        <SelectItem value="4">4.0+ Stars</SelectItem>
                        <SelectItem value="3.5">3.5+ Stars</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Verified Only */}
                  <div className="flex items-center space-x-2">
                    <Checkbox id="verified" />
                    <label htmlFor="verified" className="text-sm cursor-pointer">
                      Verified panels only
                    </label>
                  </div>

                  <Button className="w-full bg-gradient-primary hover:opacity-90">
                    Apply Filters
                  </Button>
                </div>

                {/* Sidebar Ad */}
                <AdSpace size="medium" label="Sidebar Ad" />
              </aside>
            )}

            {/* Results Grid */}
            <div className={showFilters ? "lg:col-span-3" : "lg:col-span-4"}>
              <div className="mb-6 flex items-center justify-between">
                <p className="text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">{panels.length}</span> results
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                {panels.map((panel, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                    <PanelCard {...panel} />
                  </div>
                ))}
              </div>

              {/* Bottom Ad Spaces */}
              <div className="grid md:grid-cols-2 gap-6">
                <AdSpace size="medium" label="Search Results Ad 1" />
                <AdSpace size="medium" label="Search Results Ad 2" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Search;
