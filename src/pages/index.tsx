import { SEO } from "@/components/SEO";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { GDPRConsent } from "@/components/Layout/GDPRConsent";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, BookOpen, MapPin } from "lucide-react";

export default function Home() {
  return (
    <>
      <SEO
        title="Ferguson Club - Premier Community for Ferguson Tractor Enthusiasts"
        description="Join the world's leading community for Ferguson tractor collectors, enthusiasts, and historians. Connect with members, attend events, and preserve agricultural heritage." />
      
      
      <div className="min-h-screen bg-white">
        <Header />
        <GDPRConsent />

        {/* Hero Section */}
        <section className="relative bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="font-serif text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                    The Ferguson
                    <span className="block text-brand">Heritage Lives On</span>
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                    Join the world's premier community dedicated to preserving and celebrating Harry Ferguson's revolutionary tractors and agricultural innovations.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link href="/membership">
                    <Button size="lg" className="bg-[#ad1018] hover:bg-[#8d0d14] text-white px-8">
                      Become a Member
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button size="lg" variant="outline" className="border-gray-300">
                      Learn More
                    </Button>
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t">
                  <div>
                    <div className="text-5xl font-bold text-brand mb-2">3,000+</div>
                    <p className="text-lg text-muted-foreground">Active Members</p>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-brand mb-2">40+</div>
                    <p className="text-lg text-muted-foreground">Years Heritage</p>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-brand mb-2">Regular</div>
                    <p className="text-lg text-muted-foreground">Annual Events</p>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/Gemini_Generated_Image_b3xgrrb3xgrrb3xg.png"
                    alt="Vintage Ferguson Tractor"
                    className="h-[500px] w-full object-cover" />
                  
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
                Why Join the <span className="text-brand">Ferguson Club</span>?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Connect with a global community of enthusiasts and access exclusive benefits
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 - Large */}
              <div className="lg:col-span-2 bg-gradient-to-br from-[#ad1018] to-[#8d0d14] rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <Users className="w-12 h-12 mb-4 opacity-90" />
                <h3 className="text-2xl font-bold mb-3">Global Community</h3>
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Join over 2,500 passionate Ferguson enthusiasts from 25+ countries. Share knowledge, 
                  restore tractors together, and celebrate our shared heritage.
                </p>
                <Link href="/membership">
                  <Button variant="secondary" className="bg-white text-[#ad1018] hover:bg-gray-100">
                    Join Today
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <Calendar className="w-12 h-12 text-[#ad1018] mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Exclusive Events</h3>
                <p className="text-gray-600 leading-relaxed">
                  Access 50+ annual events including rallies, shows, and restoration workshops across the UK and beyond.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <BookOpen className="w-12 h-12 text-[#ad1018] mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Member Resources</h3>
                <p className="text-gray-600 leading-relaxed">
                  Extensive library of technical manuals, restoration guides, historical archives, and expert advice.
                </p>
              </div>

              {/* Card 4 */}
              <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <MapPin className="w-12 h-12 text-[#ad1018] mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Local Area Representatives</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Connect with your local area representative for personalized support, regional events, and nearby members.
                </p>
                <Link href="/contact">
                  <Button variant="outline" className="border-2 border-[#ad1018] text-[#ad1018] hover:bg-[#ad1018] hover:text-white">
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
                  className="w-full sm:w-auto bg-[#ad1018] hover:bg-[#8d0d14] text-white shadow-xl text-lg px-8">
                  
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