import { useState } from "react";
import { Upload, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSpace from "@/components/AdSpace";
import { toast } from "sonner";

const AddPanel = () => {
  const [formData, setFormData] = useState({
    panelName: "",
    website: "",
    description: "",
    email: "",
    categories: [] as string[],
    agreeTerms: false,
  });

  const categories = [
    "Instagram",
    "Facebook",
    "YouTube",
    "TikTok",
    "Twitter",
    "LinkedIn",
    "Spotify",
    "Telegram",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      toast.error("Please agree to the terms and conditions");
      return;
    }
    toast.success("Panel submitted successfully! We'll review it shortly.");
  };

  const handleCategoryToggle = (category: string) => {
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Submit Your SMM Panel</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join our platform and showcase your services to thousands of potential customers
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 md:p-8 space-y-6">
                {/* Panel Name */}
                <div className="space-y-2">
                  <Label htmlFor="panelName">Panel Name *</Label>
                  <Input
                    id="panelName"
                    value={formData.panelName}
                    onChange={(e) => setFormData({ ...formData, panelName: e.target.value })}
                    placeholder="Enter your panel name"
                    required
                  />
                </div>

                {/* Website URL */}
                <div className="space-y-2">
                  <Label htmlFor="website">Website URL *</Label>
                  <Input
                    id="website"
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://your-panel.com"
                    required
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe your panel services, features, and what makes you unique..."
                    rows={5}
                    required
                  />
                  <p className="text-xs text-muted-foreground">Minimum 50 characters</p>
                </div>

                {/* Contact Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Contact Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contact@your-panel.com"
                    required
                  />
                </div>

                {/* Categories */}
                <div className="space-y-3">
                  <Label>Service Categories *</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {categories.map((category) => (
                      <div
                        key={category}
                        className="flex items-center space-x-2 p-3 bg-muted/30 rounded-md hover:bg-muted/50 transition-colors"
                      >
                        <Checkbox
                          id={`cat-${category}`}
                          checked={formData.categories.includes(category)}
                          onCheckedChange={() => handleCategoryToggle(category)}
                        />
                        <label
                          htmlFor={`cat-${category}`}
                          className="text-sm cursor-pointer flex-1"
                        >
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Logo Upload */}
                <div className="space-y-2">
                  <Label>Panel Logo (Optional)</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground mb-1">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground">
                      PNG, JPG up to 2MB
                    </p>
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-start space-x-2 p-4 bg-muted/30 rounded-lg">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, agreeTerms: checked as boolean })
                    }
                  />
                  <label htmlFor="terms" className="text-sm cursor-pointer leading-relaxed">
                    I agree to the terms and conditions and confirm that all information provided is accurate.
                    I understand that my panel will be reviewed before being published.
                  </label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-primary hover:opacity-90"
                >
                  <Check className="h-5 w-5 mr-2" />
                  Submit Panel for Review
                </Button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Benefits Card */}
              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <h3 className="font-semibold text-lg">Why List Your Panel?</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                    <span>Reach thousands of potential customers</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                    <span>Build credibility with verified badge</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                    <span>Get featured in search results</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                    <span>Collect customer reviews and ratings</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                    <span>Free listing with premium options</span>
                  </li>
                </ul>
              </div>

              {/* Ad Space */}
              <AdSpace size="medium" label="Submission Page Ad" />

              {/* Help Card */}
              <div className="bg-gradient-primary rounded-lg p-6 text-primary-foreground">
                <h3 className="font-semibold text-lg mb-2">Need Help?</h3>
                <p className="text-sm opacity-90 mb-4">
                  Have questions about submitting your panel? Our support team is here to help.
                </p>
                <Button variant="secondary" size="sm" className="w-full">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AddPanel;
