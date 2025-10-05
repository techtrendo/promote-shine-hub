import { BarChart3, TrendingUp, Users, Activity, ArrowUp, ArrowDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSpace from "@/components/AdSpace";
import PageLayout from "@/components/PageLayout";
import analyticsImage from "@/assets/analytics-visual.jpg";

const Analytics = () => {
  const stats = [
    {
      title: "Total Panels",
      value: "523",
      change: "+12%",
      trend: "up",
      icon: BarChart3,
    },
    {
      title: "Active Users",
      value: "127K",
      change: "+8%",
      trend: "up",
      icon: Users,
    },
    {
      title: "Total Reviews",
      value: "54.2K",
      change: "+15%",
      trend: "up",
      icon: Activity,
    },
    {
      title: "Avg. Rating",
      value: "4.6",
      change: "+0.2",
      trend: "up",
      icon: TrendingUp,
    },
  ];

  const topPanels = [
    { name: "SocialBoost Pro", users: "50K+", growth: "+25%" },
    { name: "InstaGrowth Elite", users: "35K+", growth: "+18%" },
    { name: "MediaMarket Plus", users: "28K+", growth: "+12%" },
    { name: "TikTok Masters", users: "15K+", growth: "+30%" },
    { name: "YouTube Growth Hub", users: "12K+", growth: "+8%" },
  ];

  const categoryData = [
    { name: "Instagram", percentage: 35, panels: 183 },
    { name: "YouTube", percentage: 22, panels: 115 },
    { name: "TikTok", percentage: 18, panels: 94 },
    { name: "Facebook", percentage: 15, panels: 78 },
    { name: "Twitter", percentage: 10, panels: 52 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <PageLayout>
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Platform Analytics & Reports</h1>
          <p className="text-muted-foreground">Real-time insights and performance metrics</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="flex items-center text-sm">
                  {stat.trend === "up" ? (
                    <ArrowUp className="h-4 w-4 text-success mr-1" />
                  ) : (
                    <ArrowDown className="h-4 w-4 text-destructive mr-1" />
                  )}
                  <span className={stat.trend === "up" ? "text-success" : "text-destructive"}>
                    {stat.change}
                  </span>
                  <span className="text-muted-foreground ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Analytics Visual */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Growth Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={analyticsImage}
                    alt="Analytics Dashboard"
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">+23%</div>
                    <div className="text-sm text-muted-foreground">New Panels</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">+45%</div>
                    <div className="text-sm text-muted-foreground">User Growth</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary">+31%</div>
                    <div className="text-sm text-muted-foreground">Engagement</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Panels */}
          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Top Performing Panels</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPanels.map((panel, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div>
                        <div className="font-medium">{panel.name}</div>
                        <div className="text-sm text-muted-foreground">{panel.users} users</div>
                      </div>
                      <div className="flex items-center text-success font-medium text-sm">
                        <ArrowUp className="h-4 w-4 mr-1" />
                        {panel.growth}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Category Distribution */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Category Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {categoryData.map((category, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{category.name}</span>
                        <span className="text-muted-foreground">
                          {category.panels} panels ({category.percentage}%)
                        </span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-primary rounded-full transition-all"
                          style={{ width: `${category.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <AdSpace size="large" label="Analytics Ad Space" />
        </div>

        {/* Bottom Ad Spaces */}
        <div className="grid md:grid-cols-2 gap-6">
          <AdSpace size="medium" label="Analytics Report Ad 1" />
          <AdSpace size="medium" label="Analytics Report Ad 2" />
        </div>
      </PageLayout>

      <Footer />
    </div>
  );
};

export default Analytics;
