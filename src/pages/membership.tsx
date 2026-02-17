import { SEO } from "@/components/SEO";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { GDPRConsent } from "@/components/Layout/GDPRConsent";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Gift, BookOpen, Calendar, Users, Mail, Download } from "lucide-react";

export default function Membership() {
  return (
    <>
      <SEO
        title="Membership - Ferguson Club"
        description="Join the Ferguson Club and access exclusive benefits including events, resources, expert support, and a global community of enthusiasts."
      />
      
      <div className="min-h-screen bg-white">
        <Header />
        <GDPRConsent />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                Become a <span className="text-[#8B1538]">Member</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join the world's premier Ferguson tractor community and unlock exclusive benefits, 
                resources, and connections with fellow enthusiasts worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Member Benefits
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-[#8B1538]/10 rounded-xl flex items-center justify-center mb-6">
                  <BookOpen className="w-7 h-7 text-[#8B1538]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical Library</h3>
                <p className="text-gray-600 leading-relaxed">
                  Access our extensive collection of workshop manuals, parts lists, restoration 
                  guides, and historical documentation.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-[#8B1538]/10 rounded-xl flex items-center justify-center mb-6">
                  <Calendar className="w-7 h-7 text-[#8B1538]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Exclusive Events</h3>
                <p className="text-gray-600 leading-relaxed">
                  Priority booking and member discounts for rallies, shows, restoration workshops, 
                  and social gatherings.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-[#8B1538]/10 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-[#8B1538]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Network</h3>
                <p className="text-gray-600 leading-relaxed">
                  Connect with experienced restorers, historians, and fellow enthusiasts who 
                  can provide advice and support.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-[#8B1538]/10 rounded-xl flex items-center justify-center mb-6">
                  <Mail className="w-7 h-7 text-[#8B1538]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quarterly Magazine</h3>
                <p className="text-gray-600 leading-relaxed">
                  Receive our full-color quarterly magazine with articles, restoration stories, 
                  event coverage, and technical features.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-[#8B1538]/10 rounded-xl flex items-center justify-center mb-6">
                  <Download className="w-7 h-7 text-[#8B1538]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Resources</h3>
                <p className="text-gray-600 leading-relaxed">
                  Download technical documents, access our photo archive, and browse the 
                  members-only forum.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-[#8B1538]/10 rounded-xl flex items-center justify-center mb-6">
                  <Gift className="w-7 h-7 text-[#8B1538]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Member Discounts</h3>
                <p className="text-gray-600 leading-relaxed">
                  Exclusive discounts from partner suppliers for parts, tools, and restoration 
                  services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Membership Tiers */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Membership Options</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the membership plan that's right for you and your family
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Full Membership */}
              <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-[#BE0032] transition-all duration-300 hover:shadow-xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Full</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-[#BE0032]">£22</span>
                    <span className="text-gray-600 ml-2">/year</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#BE0032] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Full magazine subscription</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#BE0032] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Access to all events</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#BE0032] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Members-only resources</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#BE0032] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Technical support</span>
                  </li>
                </ul>
                <Button className="w-full bg-[#BE0032] hover:bg-[#9A0028]">
                  Join Now
                </Button>
              </div>

              {/* Family Membership */}
              <div className="bg-gradient-to-br from-[#BE0032] to-[#9A0028] rounded-3xl p-8 border-2 border-[#BE0032] shadow-xl transform lg:scale-105 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                    BEST VALUE
                  </span>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Family</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">£30</span>
                    <span className="text-white/80 ml-2">/year</span>
                  </div>
                  <p className="text-white/90 text-sm mt-2">Same address, children under 18</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-white">All Full membership benefits</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-white">Covers entire family</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-white">Children under 18 included</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-white">Same address required</span>
                  </li>
                </ul>
                <Button className="w-full bg-white text-[#BE0032] hover:bg-gray-100">
                  Join Now
                </Button>
              </div>

              {/* Junior Membership */}
              <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-[#BE0032] transition-all duration-300 hover:shadow-xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Junior</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-[#BE0032]">£9</span>
                    <span className="text-gray-600 ml-2">/year</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">Under 18 years</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#BE0032] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Magazine subscription</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#BE0032] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Event access</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#BE0032] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Youth activities</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#BE0032] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Learning resources</span>
                  </li>
                </ul>
                <Button className="w-full bg-[#BE0032] hover:bg-[#9A0028]">
                  Join Now
                </Button>
              </div>

              {/* Life Membership */}
              <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-[#BE0032] transition-all duration-300 hover:shadow-xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Life</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-[#BE0032]">£220</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">One-time payment</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#BE0032] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Lifetime membership</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#BE0032] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">All Full benefits forever</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#BE0032] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">No renewal fees</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#BE0032] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">VIP status</span>
                  </li>
                </ul>
                <Button className="w-full bg-[#BE0032] hover:bg-[#9A0028]">
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How to Join Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              How to Join
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#8B1538] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Application</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fill out our online membership form with your details and choose your 
                  membership level.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#8B1538] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Submit Payment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Pay your annual membership fee securely online via credit card, debit card, 
                  or PayPal.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#8B1538] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Get Access</h3>
                <p className="text-gray-600 leading-relaxed">
                  Receive your welcome pack and instant access to the members area, resources, 
                  and community.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link href="/members/register">
                <Button size="lg" className="bg-[#8B1538] hover:bg-[#6B1028] text-white text-lg px-12">
                  Start Your Membership
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}