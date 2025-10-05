import { Target, Users, Award, TrendingUp, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSpace from "@/components/AdSpace";
import PageLayout from "@/components/PageLayout";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To connect businesses with the best SMM services and help panel owners grow their reach.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building a trusted community of users and service providers through transparency.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous verification process to ensure only the best panels are featured.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "Constantly evolving with the latest trends in social media marketing.",
    },
  ];

  const achievements = [
    { value: "500+", label: "Verified Panels" },
    { value: "100K+", label: "Happy Users" },
    { value: "50K+", label: "Reviews" },
    { value: "4.8/5", label: "Average Rating" },
  ];

  const teamMembers = [
    { role: "Founder & CEO", initials: "JS" },
    { role: "Head of Operations", initials: "MK" },
    { role: "Lead Developer", initials: "AR" },
    { role: "Marketing Director", initials: "LW" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <PageLayout showRightSidebar={true}>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-subtle -mx-4 px-4">
          <div className="text-center">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-base mb-6">
              About Promote SMM
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Your Trusted SMM Panel Directory
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Promote SMM is the leading platform for discovering, comparing, and showcasing social media marketing panels.
              We've been connecting businesses with quality SMM services since 2020.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {achievements.map((achievement, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {achievement.value}
                </div>
                <p className="text-muted-foreground">{achievement.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ad Space */}
        <section className="py-8">
          <AdSpace size="banner" label="About Page Banner Ad" />
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-gradient-subtle -mx-4 px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2020, Promote SMM started with a simple mission: to create a transparent
                  marketplace where businesses could find reliable SMM services and panel owners could
                  showcase their offerings to a targeted audience.
                </p>
                <p>
                  What began as a small directory has grown into the leading platform in the industry,
                  serving over 100,000 users and featuring more than 500 verified panels. Our commitment
                  to quality and community has made us the go-to resource for social media marketing services.
                </p>
                <p>
                  Today, we continue to innovate and expand our platform, adding new features, improving
                  user experience, and maintaining the highest standards of service quality.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  "Verified panels with quality guarantee",
                  "Real user reviews and ratings",
                  "Advanced search and filtering",
                  "Secure and trusted marketplace",
                  "24/7 customer support",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <AdSpace size="large" label="About Story Ad" />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals working to bring you the best SMM platform experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4 mx-auto h-32 w-32 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-3xl font-bold group-hover:scale-105 transition-transform">
                  {member.initials}
                </div>
                <h3 className="font-semibold text-lg mb-1">{member.role}</h3>
                <p className="text-sm text-muted-foreground">Team Member</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-primary -mx-4 px-4 rounded-2xl">
          <div className="text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust Promote SMM for their social media marketing needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/search">
                <button className="px-8 py-4 bg-white text-primary rounded-lg font-medium hover:bg-white/90 transition-colors">
                  Browse Panels
                </button>
              </a>
              <a href="/add-panel">
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
                  List Your Panel
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Bottom Ad Spaces */}
        <section className="py-8">
          <div className="grid md:grid-cols-2 gap-6">
            <AdSpace size="medium" label="About Footer Ad 1" />
            <AdSpace size="medium" label="About Footer Ad 2" />
          </div>
        </section>
      </PageLayout>

      <Footer />
    </div>
  );
};

export default About;
