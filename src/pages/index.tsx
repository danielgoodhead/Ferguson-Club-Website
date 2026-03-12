import { SEO } from "@/components/SEO";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { GDPRConsent } from "@/components/Layout/GDPRConsent";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, BookOpen, Trophy, MapPin, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <>
      <SEO
        title="Ferguson Club - Premier Community for Ferguson Tractor Enthusiasts"
        description="Join the world's leading community for Ferguson tractor collectors, enthusiasts, and historians. Connect with members, attend events, and preserve agricultural heritage." />
      
      
      <div className="min-h-screen bg-white">
        <Header />
        <GDPRConsent />

        {/* Hero Section - Asymmetric Design */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-red-50/30" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 lg:pt-32 lg:pb-40">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8 animate-in slide-in-from-left duration-700">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#8B1538]/5 rounded-full border border-[#8B1538]/10">
                  <Sparkles className="w-4 h-4 text-[#8B1538]" />
                  <span className="text-sm font-medium text-[#8B1538]">Est. 1986 •</span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                  Preserving
                  <span className="block text-[#8B1538] mt-2">Ferguson Heritage</span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  The world's premier community for Ferguson tractor enthusiasts. Connect with passionate collectors, 
                  access exclusive resources, and celebrate the legacy of Harry Ferguson's revolutionary designs.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/membership">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-[#8B1538] hover:bg-[#6B1028] text-white shadow-xl shadow-red-900/20 text-lg px-8 group">
                      
                      Become a Member
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto border-2 border-gray-300 hover:border-[#8B1538] hover:text-[#8B1538] text-lg px-8">
                      
                      Learn More
                    </Button>
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                  <div>
                    <div className="text-3xl font-bold text-[#8B1538]">3000+</div>
                    <div className="text-sm text-gray-600 mt-1">Active Members</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#8B1538]">50+</div>
                    <div className="text-sm text-gray-600 mt-1">Annual Events</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#8B1538]">25+</div>
                    <div className="text-sm text-gray-600 mt-1">Countries</div>
                  </div>
                </div>
              </div>

              {/* Right - Hero Image with Decorative Elements */}
              <div className="relative lg:pl-12 animate-in slide-in-from-right duration-700 delay-150">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
                    alt="Classic Ferguson tractor"
                    className="w-full h-full object-cover" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                {/* Floating Card */}
                <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 animate-in zoom-in duration-500 delay-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#8B1538] to-[#5a0e24] rounded-xl flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">40</div>
                      <div className="text-sm text-gray-600">Years honoring Harry Ferguson</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid - Bento Style */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                Why Join the <span className="text-[#8B1538]">Ferguson Club</span>?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Connect with a global community of enthusiasts and access exclusive benefits
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 - Large */}
              <div className="lg:col-span-2 bg-gradient-to-br from-[#8B1538] to-[#6B1028] rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <Users className="w-12 h-12 mb-4 opacity-90" />
                <h3 className="text-2xl font-bold mb-3">Global Community</h3>
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Join over 2,500 passionate Ferguson enthusiasts from 25+ countries. Share knowledge, 
                  restore tractors together, and celebrate our shared heritage.
                </p>
                <Link href="/membership">
                  <Button variant="secondary" className="bg-white text-[#8B1538] hover:bg-gray-100">
                    Join Today
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <Calendar className="w-12 h-12 text-[#8B1538] mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Exclusive Events</h3>
                <p className="text-gray-600 leading-relaxed">
                  Access 50+ annual events including rallies, shows, and restoration workshops across the UK and beyond.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <BookOpen className="w-12 h-12 text-[#8B1538] mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Member Resources</h3>
                <p className="text-gray-600 leading-relaxed">
                  Extensive library of technical manuals, restoration guides, historical archives, and expert advice.
                </p>
              </div>

              {/* Card 4 */}
              <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <MapPin className="w-12 h-12 text-[#8B1538] mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Local Area Representatives</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Connect with your local area representative for personalized support, regional events, and nearby members.
                </p>
                <Link href="/contact">
                  <Button variant="outline" className="border-2 border-[#8B1538] text-[#8B1538] hover:bg-[#8B1538] hover:text-white">
                    Find Your Rep
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Join the Legacy?
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Become part of the world's most respected Ferguson tractor community today. 
              Connect, learn, and preserve history together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/membership">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#8B1538] hover:bg-[#6B1028] text-white shadow-xl text-lg px-8">
                  
                  View Membership Options
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8">
                  
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>);

}