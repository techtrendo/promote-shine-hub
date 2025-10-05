import { HelpCircle, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSpace from "@/components/AdSpace";
import PageLayout from "@/components/PageLayout";

const FAQ = () => {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What is Promote SMM?",
          a: "Promote SMM is a comprehensive platform that helps you discover, compare, and showcase the best SMM (Social Media Marketing) panels. We connect users with trusted service providers for all major social media platforms.",
        },
        {
          q: "How do I find the right SMM panel?",
          a: "Use our advanced search and filtering options to find panels based on your needs. You can filter by platform, rating, price range, and specific services. Read user reviews and compare features to make an informed decision.",
        },
        {
          q: "Are the listed panels verified?",
          a: "Yes, all panels with a verified badge have been thoroughly reviewed by our team. We check for service quality, delivery times, customer support, and overall reliability before awarding verification status.",
        },
      ],
    },
    {
      category: "For Panel Owners",
      questions: [
        {
          q: "How do I list my SMM panel?",
          a: "Navigate to the 'Add Your Panel' page and fill out the submission form with your panel details, services offered, and contact information. Our team will review your submission within 24-48 hours.",
        },
        {
          q: "What are the requirements for getting verified?",
          a: "To get verified, your panel must have: active customer support, consistent service delivery, positive user reviews, secure payment methods, and at least 3 months of operation history.",
        },
        {
          q: "Can I advertise my panel?",
          a: "Yes! We offer various advertising packages including featured listings, banner ads, and promotional spots. Visit our Advertisement page for detailed information and pricing.",
        },
      ],
    },
    {
      category: "Services & Pricing",
      questions: [
        {
          q: "How much does it cost to use Promote SMM?",
          a: "Browsing and searching panels is completely free. Panel owners can list their services for free with optional premium features available for enhanced visibility and promotion.",
        },
        {
          q: "What social media platforms are supported?",
          a: "We feature panels offering services for Instagram, Facebook, YouTube, TikTok, Twitter, LinkedIn, Spotify, SoundCloud, Telegram, and many other platforms.",
        },
        {
          q: "How do reviews work?",
          a: "Users can leave reviews for panels they've used. Reviews are moderated to ensure authenticity. We verify purchase history when possible and remove fake or spam reviews.",
        },
      ],
    },
    {
      category: "Account & Support",
      questions: [
        {
          q: "Do I need an account to browse panels?",
          a: "No account is needed to browse and search panels. However, creating an account allows you to save favorites, leave reviews, and receive personalized recommendations.",
        },
        {
          q: "How can I contact support?",
          a: "Visit our Contact page to reach our support team via email or live chat. We typically respond within 24 hours on business days.",
        },
        {
          q: "Can I report suspicious panels?",
          a: "Yes, please report any suspicious activity or panels that violate our terms of service. Use the 'Report' button on the panel page or contact our support team directly.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <PageLayout showRightSidebar={true}>
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-base">
              <HelpCircle className="h-4 w-4 mr-2 fill-primary" />
              Help Center
            </Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to common questions about Promote SMM
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for answers..."
              className="pl-12 h-14 text-lg"
            />
          </div>
        </div>

        {/* FAQ Content */}
        <div className="space-y-8">
          {faqs.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h2 className="text-2xl font-bold mb-4">{section.category}</h2>
              <Accordion type="single" collapsible className="space-y-2">
                {section.questions.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`${sectionIndex}-${faqIndex}`}
                    className="bg-card border border-border rounded-lg px-6 hover:shadow-md transition-all"
                  >
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="font-medium">{faq.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pt-2">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Still Need Help */}
        <div className="mt-12 bg-gradient-subtle rounded-lg p-8 text-center">
          <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <button className="px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
                Contact Support
              </button>
            </a>
            <a href="/about">
              <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors">
                Learn More About Us
              </button>
            </a>
          </div>
        </div>
      </PageLayout>

      <Footer />
    </div>
  );
};

export default FAQ;
