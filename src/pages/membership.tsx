import { SEO } from "@/components/SEO";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Users, Wrench, Calendar, BookOpen, MessageSquare, Award, Globe } from "lucide-react";
import Link from "next/link";

export default function MembershipPage() {
  const benefits = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Technical Resources",
      description: "Access to extensive archives, manuals, and technical documentation for Ferguson tractors"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Network",
      description: "Connect with fellow enthusiasts, share knowledge, and get expert advice"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Exclusive Events",
      description: "Priority access to rallies, shows, and member-only gatherings throughout the year"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Member Forum",
      description: "Private discussion boards for restoration tips, parts sourcing, and community support"
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Parts & Services",
      description: "Discounts on parts, services, and merchandise from approved suppliers"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Monthly Magazine",
      description: "Receive our acclaimed magazine featuring restoration stories, history, and technical articles"
    }
  ];

  const membershipTiers = [
    {
      name: "Individual Membership",
      price: "£25",
      period: "per year",
      description: "Perfect for individual enthusiasts",
      features: [
        "Full access to member resources",
        "Monthly magazine subscription",
        "Forum access",
        "Event discounts",
        "Area representative support",
        "Online member directory"
      ],
      highlighted: false
    },
    {
      name: "Family Membership",
      price: "£30",
      period: "per year",
      description: "Great value for the whole family",
      features: [
        "All Individual benefits",
        "Up to 4 family members",
        "Additional member cards",
        "Family event packages",
        "Shared online access",
        "Priority event registration"
      ],
      highlighted: true
    },
    {
      name: "Overseas Membership",
      price: "£35",
      period: "per year",
      description: "For members outside the UK",
      features: [
        "All Individual benefits",
        "International magazine delivery",
        "Digital magazine access",
        "Global community network",
        "International event updates",
        "Currency flexibility"
      ],
      highlighted: false
    }
  ];

  return (
    <>
      <SEO 
        title="Membership - The Ferguson Club"
        description="Join the world's premier Ferguson tractor community. Access exclusive resources, events, and connect with fellow enthusiasts."
      />
      
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-20 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Join The Ferguson Club
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Become part of a passionate global community dedicated to preserving Ferguson heritage. 
                Access exclusive resources, events, and connect with fellow enthusiasts worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#ad1018] hover:bg-[#8d0d14] text-white">
                  Join Now
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Membership Benefits
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience the full range of benefits designed to support your passion for Ferguson tractors
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-2 hover:border-[#ad1018] transition-colors">
                  <CardHeader>
                    <div className="h-12 w-12 bg-[#ad1018]/10 rounded-lg flex items-center justify-center text-[#ad1018] mb-4">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Choose Your Membership
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Select the membership tier that best suits your needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {membershipTiers.map((tier, index) => (
                <Card 
                  key={index} 
                  className={`relative ${tier.highlighted ? 'border-[#ad1018] border-2 shadow-lg' : 'border-2'}`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-[#ad1018] text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                    <CardDescription className="text-base">{tier.description}</CardDescription>
                    <div className="mt-6">
                      <span className="text-4xl font-bold text-[#ad1018]">{tier.price}</span>
                      <span className="text-gray-600 ml-2">{tier.period}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-[#ad1018] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </CardContent>

                  <CardFooter>
                    <Button 
                      className={`w-full ${tier.highlighted ? 'bg-[#ad1018] hover:bg-[#8d0d14] text-white' : 'bg-white hover:bg-gray-50 text-[#ad1018] border-2 border-[#ad1018]'}`}
                      size="lg"
                    >
                      Select {tier.name}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="h-8 w-8 text-[#ad1018]" />
                    <h3 className="text-2xl font-serif font-bold">Global Community</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Join over 5,000 active members from around the world who share your passion for Ferguson 
                    tractors. Our community spans across the UK, Europe, North America, and beyond.
                  </p>
                  <p className="text-gray-600">
                    Connect with local area representatives, attend regional events, and participate in 
                    international gatherings celebrating Ferguson heritage.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="h-8 w-8 text-[#ad1018]" />
                    <h3 className="text-2xl font-serif font-bold">70+ Years of Heritage</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    The Ferguson Club was established to preserve and celebrate the legacy of Harry Ferguson's 
                    revolutionary contributions to agriculture and engineering.
                  </p>
                  <p className="text-gray-600">
                    As a member, you're part of keeping this important history alive for future generations 
                    while enjoying the camaraderie of fellow enthusiasts.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-16 text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-lg border-2 border-[#ad1018]/20">
                <h3 className="text-2xl font-serif font-bold mb-4">
                  Ready to Join?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Start your membership journey today and gain immediate access to our community, 
                  resources, and exclusive benefits.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-[#ad1018] hover:bg-[#8d0d14] text-white">
                    Complete Membership Application
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/contact">Have Questions? Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}