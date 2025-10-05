import { TrendingUp, Users, Eye, BarChart3, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSpace from "@/components/AdSpace";
import PageLayout from "@/components/PageLayout";

const Advertisement = () => {
  const adPackages = [
    {
      name: "Banner Ads",
      price: "$99/month",
      impressions: "50K+",
      placement: "Homepage & Search",
      features: ["728x90 pixels", "Above fold placement", "Click tracking", "Monthly reports"],
      popular: false,
    },
    {
      name: "Sidebar Ads",
      price: "$149/month",
      impressions: "75K+",
      placement: "All Pages",
      features: ["300x250 pixels", "Sticky positioning", "Analytics dashboard", "A/B testing"],
      popular: true,
    },
    {
      name: "Featured Listing",
      price: "$199/month",
      impressions: "100K+",
      placement: "Top Search Results",
      features: ["Priority placement", "Featured badge", "Enhanced profile", "Premium support"],
      popular: false,
    },
    {
      name: "Full Page Takeover",
      price: "$499/month",
      impressions: "200K+",
      placement: "Homepage",
      features: ["Custom design", "Video support", "Mobile optimized", "Dedicated account manager"],
      popular: false,
    },
  ];

  const stats = [
    { icon: Users, value: "127K+", label: "Monthly Visitors" },
    { icon: Eye, value: "2M+", label: "Page Views" },
    { icon: TrendingUp, value: "4.5min", label: "Avg. Session" },
    { icon: BarChart3, value: "65%", label: "Return Rate" },
  ];

  const adSizes = [
    { name: "Leaderboard", size: "728x90", location: "Header" },
    { name: "Medium Rectangle", size: "300x250", location: "Sidebar" },
    { name: "Wide Skyscraper", size: "160x600", location: "Side Panel" },
    { name: "Mobile Banner", size: "320x50", location: "Mobile" },
    { name: "Large Rectangle", size: "336x280", location: "Content" },
    { name: "Half Page", size: "300x600", location: "Sidebar" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <PageLayout showRightSidebar={true}>
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-base">
              <TrendingUp className="h-4 w-4 mr-2 fill-primary" />
              Advertise With Us
            </Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Reach Your Target Audience
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Promote your SMM panel to thousands of potential customers actively searching for services
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ad Packages */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Advertising Packages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {adPackages.map((pkg, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-all ${
                  pkg.popular ? "border-primary border-2" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="bg-gradient-primary text-primary-foreground text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="mt-4">
                    <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                    <div className="text-sm text-muted-foreground mt-1">{pkg.impressions} impressions</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Placement: </span>
                    <span className="font-medium">{pkg.placement}</span>
                  </div>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      pkg.popular ? "bg-gradient-primary hover:opacity-90" : ""
                    }`}
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Available Ad Spaces */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Available Ad Spaces</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Ad Sizes List */}
            <Card>
              <CardHeader>
                <CardTitle>Standard Ad Sizes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {adSizes.map((ad, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div>
                        <div className="font-medium">{ad.name}</div>
                        <div className="text-sm text-muted-foreground">{ad.size} pixels</div>
                      </div>
                      <Badge variant="outline">{ad.location}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Visual Examples */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Ad Space Examples</h3>
              <AdSpace size="banner" label="Banner Ad (728x90)" />
              <AdSpace size="medium" label="Medium Rectangle (300x250)" />
              <div className="grid grid-cols-2 gap-4">
                <AdSpace size="small" label="Small (320x50)" />
                <AdSpace size="small" label="Small (320x50)" />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Advertising?
          </h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Contact our advertising team to discuss custom packages and get started today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Contact Sales
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Media Kit
            </Button>
          </div>
        </div>

        {/* Bottom Ad Spaces */}
        <div className="grid md:grid-cols-3 gap-6">
          <AdSpace size="medium" label="Demo Ad Space 1" />
          <AdSpace size="medium" label="Demo Ad Space 2" />
          <AdSpace size="medium" label="Demo Ad Space 3" />
        </div>
      </PageLayout>

      <Footer />
    </div>
  );
};

export default Advertisement;
