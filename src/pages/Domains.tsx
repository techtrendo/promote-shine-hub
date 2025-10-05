import { Globe, TrendingUp, DollarSign, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSpace from "@/components/AdSpace";
import PageLayout from "@/components/PageLayout";

const Domains = () => {
  const featuredDomains = [
    {
      name: "socialboost.com",
      price: "$4,999",
      category: "Premium",
      traffic: "5K/month",
      age: "5 years",
      featured: true,
    },
    {
      name: "smmmarket.net",
      price: "$2,499",
      category: "Popular",
      traffic: "2K/month",
      age: "3 years",
      featured: true,
    },
    {
      name: "instapanel.io",
      price: "$1,999",
      category: "Trending",
      traffic: "1.5K/month",
      age: "2 years",
      featured: false,
    },
    {
      name: "tiktokgrowth.co",
      price: "$3,499",
      category: "Premium",
      traffic: "3K/month",
      age: "4 years",
      featured: false,
    },
    {
      name: "smmpro.shop",
      price: "$899",
      category: "Starter",
      traffic: "500/month",
      age: "1 year",
      featured: false,
    },
    {
      name: "socialmedia-panel.com",
      price: "$5,999",
      category: "Premium",
      traffic: "8K/month",
      age: "6 years",
      featured: true,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <PageLayout>
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-base">
              <Globe className="h-4 w-4 mr-2 fill-primary" />
              Domain Marketplace
            </Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Buy & Sell SMM Panel Domains
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Premium domain names for your SMM panel business. Start with a trusted domain or sell yours.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search domains by keyword..."
              className="pl-12 h-14 text-lg"
            />
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="buy" className="mb-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="buy" className="flex items-center">
              <DollarSign className="h-4 w-4 mr-2" />
              Buy Domains
            </TabsTrigger>
            <TabsTrigger value="sell" className="flex items-center">
              <TrendingUp className="h-4 w-4 mr-2" />
              Sell Your Domain
            </TabsTrigger>
          </TabsList>

          <TabsContent value="buy">
            {/* Ad Space */}
            <div className="mb-8">
              <AdSpace size="banner" label="Domain Marketplace Banner Ad" />
            </div>

            {/* Domain Listings */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredDomains.map((domain, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all group"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge
                        className={
                          domain.category === "Premium"
                            ? "bg-gradient-primary text-primary-foreground"
                            : domain.category === "Popular"
                            ? "bg-accent text-accent-foreground"
                            : "bg-muted text-muted-foreground"
                        }
                      >
                        {domain.category}
                      </Badge>
                      {domain.featured && (
                        <Badge variant="outline" className="border-primary text-primary">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors break-all">
                      {domain.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Monthly Traffic</span>
                      <span className="font-medium">{domain.traffic}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Domain Age</span>
                      <span className="font-medium">{domain.age}</span>
                    </div>
                    <div className="pt-3 border-t border-border">
                      <div className="text-3xl font-bold text-primary">{domain.price}</div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      Details
                    </Button>
                    <Button className="flex-1 bg-gradient-primary hover:opacity-90">
                      Buy Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sell">
            <div className="max-w-2xl mx-auto">
              <Card className="p-8">
                <CardHeader className="text-center px-0 pt-0">
                  <div className="h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl mb-2">List Your Domain for Sale</CardTitle>
                  <p className="text-muted-foreground">
                    Reach thousands of potential buyers looking for premium SMM panel domains
                  </p>
                </CardHeader>
                <CardContent className="space-y-6 px-0">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Domain Name</label>
                    <Input placeholder="yourdomain.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Asking Price (USD)</label>
                    <Input type="number" placeholder="1000" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Monthly Traffic (Optional)</label>
                    <Input placeholder="e.g., 5K/month" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Description</label>
                    <textarea
                      className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="Describe your domain, its history, benefits, etc."
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4 px-0 pb-0">
                  <div className="bg-muted/50 rounded-lg p-4 w-full text-sm text-muted-foreground">
                    <p className="mb-2">
                      <strong className="text-foreground">Benefits:</strong>
                    </p>
                    <ul className="space-y-1 ml-4">
                      <li>• Reach verified buyers only</li>
                      <li>• Secure escrow service</li>
                      <li>• No listing fees</li>
                      <li>• Quick sale process</li>
                    </ul>
                  </div>
                  <Button className="w-full bg-gradient-primary hover:opacity-90" size="lg">
                    List Domain for Sale
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Bottom Ad Spaces */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <AdSpace size="medium" label="Domain Marketplace Ad 1" />
          <AdSpace size="medium" label="Domain Marketplace Ad 2" />
        </div>
      </PageLayout>

      <Footer />
    </div>
  );
};

export default Domains;
