import { SEO } from "@/components/SEO";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { MembersNav } from "@/components/Layout/MembersNav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Users, 
  Calendar, 
  MessageSquare, 
  Wrench, 
  Award,
  FileText,
  Shield,
  Star,
  Zap
} from "lucide-react";

export default function MemberBenefitsPage() {
  const benefits = [
    {
      category: "Knowledge & Resources",
      icon: <BookOpen className="h-6 w-6" />,
      items: [
        "Complete digital archive of technical manuals",
        "Historical documentation and restoration guides",
        "Parts identification and sourcing assistance",
        "Technical helpline with expert advisors",
        "Workshop tips and maintenance schedules"
      ]
    },
    {
      category: "Community Access",
      icon: <Users className="h-6 w-6" />,
      items: [
        "Member directory with 5,000+ enthusiasts worldwide",
        "Regional area representative network",
        "Mentorship programs for new restorers",
        "Social media group access",
        "Annual general meeting voting rights"
      ]
    },
    {
      category: "Events & Activities",
      icon: <Calendar className="h-6 w-6" />,
      items: [
        "Priority registration for national rally",
        "Discounted entry to all club events",
        "Exclusive member-only gatherings",
        "Workshop days and training sessions",
        "International event coordination"
      ]
    },
    {
      category: "Communications",
      icon: <MessageSquare className="h-6 w-6" />,
      items: [
        "Monthly Ferguson Heritage magazine",
        "Digital newsletter updates",
        "Private member forum access",
        "Email bulletins and announcements",
        "Regional meeting notifications"
      ]
    },
    {
      category: "Commercial Benefits",
      icon: <Wrench className="h-6 w-6" />,
      items: [
        "Discounts with approved parts suppliers",
        "Trade member directory access",
        "Insurance scheme recommendations",
        "Transport and logistics connections",
        "Restoration service recommendations"
      ]
    },
    {
      category: "Recognition",
      icon: <Award className="h-6 w-6" />,
      items: [
        "Tractor registration certification",
        "Concours competition eligibility",
        "Feature opportunities in magazine",
        "Long service member recognition",
        "Restoration achievement awards"
      ]
    }
  ];

  const exclusivePerks = [
    {
      title: "Insurance Discounts",
      description: "Access to specialist classic vehicle insurance with member-only rates",
      icon: <Shield className="h-5 w-5" />
    },
    {
      title: "Premium Magazine",
      description: "Full-color monthly magazine delivered to your door",
      icon: <FileText className="h-5 w-5" />
    },
    {
      title: "Expert Helpline",
      description: "Direct access to technical experts for restoration advice",
      icon: <Star className="h-5 w-5" />
    },
    {
      title: "Fast-Track Support",
      description: "Priority response on all member inquiries and requests",
      icon: <Zap className="h-5 w-5" />
    }
  ];

  return (
    <>
      <SEO 
        title="Member Benefits - The Ferguson Club"
        description="Explore the comprehensive benefits available to Ferguson Club members including resources, events, and exclusive perks."
      />
      
      <div className="min-h-screen bg-white">
        <Header />
        <MembersNav />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-12 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <Badge className="mb-4 bg-[#ad1018] hover:bg-[#8d0d14]">Member Benefits</Badge>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Everything You Get as a Member
              </h1>
              <p className="text-lg text-gray-600">
                Comprehensive benefits designed to support your Ferguson passion and connect you 
                with a global community of enthusiasts.
              </p>
            </div>
          </div>
        </section>

        {/* Main Benefits Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-2 hover:border-[#ad1018] transition-colors">
                  <CardHeader>
                    <div className="h-12 w-12 bg-[#ad1018]/10 rounded-lg flex items-center justify-center text-[#ad1018] mb-4">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl">{benefit.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {benefit.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-[#ad1018] mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Exclusive Perks */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">
                Exclusive Member Perks
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Additional benefits that make membership even more valuable
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {exclusivePerks.map((perk, index) => (
                <Card key={index} className="text-center border-2">
                  <CardHeader>
                    <div className="h-12 w-12 bg-[#ad1018]/10 rounded-full flex items-center justify-center text-[#ad1018] mx-auto mb-3">
                      {perk.icon}
                    </div>
                    <CardTitle className="text-lg">{perk.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{perk.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold mb-4">
                Not a Member Yet?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join today to unlock all these benefits and become part of our thriving community
              </p>
              <Button size="lg" className="bg-[#ad1018] hover:bg-[#8d0d14] text-white">
                View Membership Options
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}