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

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Membership Options
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
              Choose the membership level that's right for you
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* UK Membership */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-200">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">UK Membership</h3>
                  <p className="text-gray-600 mb-6">For members in the United Kingdom</p>
                  <div className="text-5xl font-bold text-[#8B1538] mb-2">£30</div>
                  <div className="text-gray-600">per year</div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#8B1538] mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Full access to technical library</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#8B1538] mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Quarterly magazine delivered</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#8B1538] mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Priority event booking</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#8B1538] mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Local area representative support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#8B1538] mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Member forum access</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#8B1538] mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Partner discounts</span>
                  </li>
                </ul>

                <Link href="/members/register">
                  <Button className="w-full bg-[#8B1538] hover:bg-[#6B1028] text-white text-lg py-6">
                    Join Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>

              {/* Overseas Membership */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-200">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Overseas Membership</h3>
                  <p className="text-gray-600 mb-6">For members outside the UK</p>
                  <div className="text-5xl font-bold text-[#8B1538] mb-2">£35</div>
                  <div className="text-gray-600">per year</div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#8B1538] mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Full access to technical library</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#8B1538] mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Quarterly magazine (airmail)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#8B1538] mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Event information & booking</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#8B1538] mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">International representative support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#8B1538] mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Member forum access</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#8B1538] mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Partner discounts</span>
                  </li>
                </ul>

                <Link href="/members/register">
                  <Button className="w-full bg-[#8B1538] hover:bg-[#6B1028] text-white text-lg py-6">
                    Join Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Have questions about membership?
              </p>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-2 border-[#8B1538] text-[#8B1538] hover:bg-[#8B1538] hover:text-white">
                  Contact Us
                </Button>
              </Link>
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