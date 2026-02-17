import { SEO } from "@/components/SEO";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { GDPRConsent } from "@/components/Layout/GDPRConsent";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const upcomingEvents = [
  {
    id: 1,
    title: "Spring Rally 2026",
    date: "April 12-13, 2026",
    location: "Stoneleigh Park, Warwickshire",
    description: "Our flagship annual rally featuring Ferguson tractors from around the world, trade stands, and expert demonstrations.",
    attendees: "500+ expected",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?w=800&q=80"
  },
  {
    id: 2,
    title: "Restoration Workshop",
    date: "May 18, 2026",
    location: "Workshop Venue, Yorkshire",
    description: "Hands-on workshop covering engine rebuilding, paint restoration, and hydraulic system maintenance.",
    attendees: "30 spaces",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80"
  },
  {
    id: 3,
    title: "Summer Show",
    date: "July 20-21, 2026",
    location: "National Agricultural Centre",
    description: "Display your Ferguson tractor at our prestigious summer show with awards in multiple categories.",
    attendees: "Open to all members",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
  },
  {
    id: 4,
    title: "Technical Seminar",
    date: "September 14, 2026",
    location: "Online & In-Person",
    description: "Expert-led seminar on Ferguson hydraulic systems, with live demonstrations and Q&A sessions.",
    attendees: "100 spaces",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
  },
  {
    id: 5,
    title: "Autumn Road Run",
    date: "October 5, 2026",
    location: "Cotswolds Route",
    description: "Scenic 50-mile road run through the Cotswolds, ending with a traditional pub lunch.",
    attendees: "Limited to 75 tractors",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80"
  },
  {
    id: 6,
    title: "AGM & Awards Dinner",
    date: "November 22, 2026",
    location: "Conference Centre, Birmingham",
    description: "Annual General Meeting followed by our prestigious awards dinner celebrating member achievements.",
    attendees: "Members only",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80"
  }
];

export default function Events() {
  return (
    <>
      <SEO
        title="Events - Ferguson Club"
        description="Join Ferguson Club events including rallies, shows, workshops, and social gatherings across the UK and beyond."
      />
      
      <div className="min-h-screen bg-white">
        <Header />
        <GDPRConsent />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                Upcoming <span className="text-[#8B1538]">Events</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join fellow enthusiasts at our rallies, shows, workshops, and social gatherings. 
                From technical seminars to scenic road runs, there's something for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <div 
                  key={event.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center text-white text-sm font-medium">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.date}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#8B1538] transition-colors">
                      {event.title}
                    </h3>

                    <div className="space-y-2">
                      <div className="flex items-start text-gray-600">
                        <MapPin className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0 text-[#8B1538]" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-start text-gray-600">
                        <Users className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0 text-[#8B1538]" />
                        <span className="text-sm">{event.attendees}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>

                    <Button 
                      className="w-full bg-[#8B1538] hover:bg-[#6B1028] text-white group"
                      asChild
                    >
                      <Link href="/members/events">
                        Book Now
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Calendar CTA */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Calendar className="w-16 h-16 text-[#8B1538] mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Don't Miss Out
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Members receive priority booking, exclusive discounts, and access to members-only events. 
              Join today to secure your place at our upcoming events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/membership">
                <Button size="lg" className="bg-[#8B1538] hover:bg-[#6B1028] text-white">
                  Become a Member
                </Button>
              </Link>
              <Link href="/members/events">
                <Button size="lg" variant="outline" className="border-2 border-[#8B1538] text-[#8B1538] hover:bg-[#8B1538] hover:text-white">
                  View Full Calendar
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Event Highlights
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
              See what you missed at our recent events
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <div className="aspect-video">
                  <img
                    src="https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&q=80"
                    alt="Winter Rally 2025"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Winter Rally 2025</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Over 300 Ferguson tractors gathered at our Winter Rally, featuring vintage models 
                    from the 1940s through to modern restorations. A truly spectacular turnout!
                  </p>
                  <Link href="/gallery" className="text-[#8B1538] hover:underline font-medium">
                    View Gallery →
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <div className="aspect-video">
                  <img
                    src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=800&q=80"
                    alt="Technical Workshop 2025"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Technical Workshop Series</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Our expert-led workshops covered engine rebuilding, electrical systems, and 
                    hydraulic restoration. Members gained invaluable hands-on experience.
                  </p>
                  <Link href="/news" className="text-[#8B1538] hover:underline font-medium">
                    Read Article →
                  </Link>
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