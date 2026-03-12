import { SEO } from "@/components/SEO";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { GDPRConsent } from "@/components/Layout/GDPRConsent";
import { Award, Users, Calendar, BookOpen, Target, Heart } from "lucide-react";

export default function About() {
  return (
    <>
      <SEO
        title="About Us - Ferguson Club"
        description="Learn about the Ferguson Club's history, mission, and commitment to preserving Harry Ferguson's agricultural heritage since 1998."
      />
      
      <div className="min-h-screen bg-white">
        <Header />
        <GDPRConsent />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                About the <span className="text-[#ad1018]">Ferguson Club</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Established in 1998, the Ferguson Club is dedicated to preserving and celebrating 
                the remarkable legacy of Harry Ferguson and his revolutionary contributions to agricultural machinery.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    The Ferguson Club exists to bring together enthusiasts, collectors, and historians 
                    who share a passion for Ferguson tractors and Harry Ferguson's pioneering work in 
                    agricultural engineering.
                  </p>
                  <p>
                    We are committed to preserving these iconic machines, sharing knowledge across 
                    generations, and celebrating the innovative spirit that revolutionized farming worldwide.
                  </p>
                  <p>
                    Through our events, publications, and member resources, we ensure that Ferguson's 
                    legacy continues to inspire and educate for years to come.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80"
                    alt="Ferguson tractor at work"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              What We Stand For
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-[#ad1018]/10 rounded-xl flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7 text-[#ad1018]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Passion</h3>
                <p className="text-gray-600 leading-relaxed">
                  We're driven by a genuine love for Ferguson tractors and their remarkable history. 
                  Our enthusiasm is infectious and brings members together.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-[#ad1018]/10 rounded-xl flex items-center justify-center mb-6">
                  <BookOpen className="w-7 h-7 text-[#ad1018]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Knowledge</h3>
                <p className="text-gray-600 leading-relaxed">
                  We preserve and share technical expertise, historical records, and restoration 
                  knowledge to keep these machines running for future generations.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-[#ad1018]/10 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-[#ad1018]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Community</h3>
                <p className="text-gray-600 leading-relaxed">
                  We foster connections between members worldwide, creating lasting friendships 
                  built on shared interests and mutual respect.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-[#ad1018]/10 rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-[#ad1018]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  We maintain the highest standards in restoration, documentation, and club 
                  operations to honor Ferguson's commitment to quality.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-[#ad1018]/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-[#ad1018]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Preservation</h3>
                <p className="text-gray-600 leading-relaxed">
                  We're dedicated to protecting Ferguson's heritage through careful restoration, 
                  documentation, and education initiatives.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-[#ad1018]/10 rounded-xl flex items-center justify-center mb-6">
                  <Calendar className="w-7 h-7 text-[#ad1018]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Events</h3>
                <p className="text-gray-600 leading-relaxed">
                  We organize rallies, shows, and gatherings that celebrate Ferguson tractors 
                  and bring our community together in person.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* History Timeline */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Journey</h2>
            
            <div className="space-y-12">
              <div className="flex gap-8">
                <div className="flex-shrink-0 w-32">
                  <div className="text-3xl font-bold text-[#ad1018]">1998</div>
                </div>
                <div className="flex-grow pb-12 border-l-2 border-gray-200 pl-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Club Founded</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A small group of passionate Ferguson enthusiasts came together to form 
                    the Ferguson Club, creating a dedicated community for preservation and celebration.
                  </p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="flex-shrink-0 w-32">
                  <div className="text-3xl font-bold text-[#ad1018]">2005</div>
                </div>
                <div className="flex-grow pb-12 border-l-2 border-gray-200 pl-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">First Major Rally</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our inaugural national rally brought together over 200 Ferguson tractors and 
                    established our reputation for world-class events.
                  </p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="flex-shrink-0 w-32">
                  <div className="text-3xl font-bold text-[#ad1018]">2010</div>
                </div>
                <div className="flex-grow pb-12 border-l-2 border-gray-200 pl-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">International Expansion</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Membership grew beyond the UK with members joining from across Europe, 
                    North America, and beyond.
                  </p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="flex-shrink-0 w-32">
                  <div className="text-3xl font-bold text-[#ad1018]">2015</div>
                </div>
                <div className="flex-grow pb-12 border-l-2 border-gray-200 pl-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Digital Archive Launch</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We launched our comprehensive digital archive of technical manuals, 
                    historical documents, and restoration guides.
                  </p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="flex-shrink-0 w-32">
                  <div className="text-3xl font-bold text-[#ad1018]">2025</div>
                </div>
                <div className="flex-grow pl-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">27 Years Strong</h3>
                  <p className="text-gray-600 leading-relaxed">
                    With over 2,500 members worldwide and 50+ annual events, we continue to 
                    grow and preserve Ferguson's incredible legacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-[#ad1018] to-[#8d0d14] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">2,500+</div>
                <div className="text-white/80 text-lg">Active Members</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-white/80 text-lg">Annual Events</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">25+</div>
                <div className="text-white/80 text-lg">Countries</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">27</div>
                <div className="text-white/80 text-lg">Years of Service</div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}