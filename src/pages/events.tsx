import { SEO } from "@/components/SEO";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { Calendar, MapPin, Users, Tag, Grid3x3, List, Navigation, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  category: string;
  attendees: number;
  lat?: number;
  lng?: number;
  fullDescription: string;
  organizer: {
    name: string;
    email: string;
    phone: string;
  };
  address: string;
  registrationDeadline: string;
  image: string;
}

export default function EventsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedMonth, setSelectedMonth] = useState<string>("all");
  const [radiusFilter, setRadiusFilter] = useState<string>("all");
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locationError, setLocationError] = useState<string>("");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const events: Event[] = [
    {
      id: "1",
      title: "Annual Vintage Tractor Rally",
      date: "2026-06-15",
      location: "Yorkshire Showground",
      description: "Join us for the biggest vintage tractor rally of the year featuring hundreds of classic Ferguson tractors.",
      fullDescription: "The Annual Vintage Tractor Rally is our flagship event, bringing together Ferguson enthusiasts from across the UK and beyond. Experience a spectacular display of beautifully restored Ferguson tractors spanning decades of agricultural history. The event features static displays, working demonstrations, parade laps, trade stands, and refreshments. Whether you're a seasoned collector or new to vintage machinery, this is an unmissable celebration of Ferguson heritage.",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
      category: "Rally",
      attendees: 250,
      lat: 53.9917, 
      lng: -1.0574,
      registrationDeadline: "2026-06-01",
      organizer: {
        name: "John Smith",
        email: "john.smith@fergusonclub.com",
        phone: "+44 1234 567890"
      },
      address: "Great Yorkshire Showground, Harrogate, North Yorkshire, HG2 8NZ"
    },
    {
      id: "2",
      title: "Ferguson Ploughing Match",
      date: "2026-08-20",
      location: "Kent Agricultural Society",
      description: "Annual ploughing competition for Ferguson tractors. All skill levels welcome!",
      fullDescription: "Test your ploughing skills at our annual Ferguson Ploughing Match. This competitive yet friendly event welcomes both novice and experienced ploughmen. Categories include vintage class, working class, and demonstration class. Judges will assess straightness, depth consistency, finish quality, and overall presentation. Entry includes lunch and refreshments. Spectators welcome - watch skilled operators demonstrate the art of traditional ploughing.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
      category: "Competition",
      attendees: 85,
      lat: 51.2787, 
      lng: 0.5217,
      registrationDeadline: "2026-08-01",
      organizer: {
        name: "David Brown",
        email: "david.brown@fergusonclub.com",
        phone: "+44 1987 654321"
      },
      address: "Kent County Showground, Detling, Maidstone, Kent, ME14 3JF"
    },
    {
      id: "3",
      title: "Spring Restoration Workshop",
      date: "2026-04-12",
      location: "Ferguson Heritage Centre, Coventry",
      description: "Hands-on workshop covering engine rebuilds, electrical systems, and hydraulics.",
      fullDescription: "Our popular Spring Restoration Workshop returns with expert-led sessions covering essential Ferguson tractor maintenance and restoration techniques. Topics include engine strip-down and rebuild, electrical system troubleshooting, hydraulic system service, bodywork preparation and painting. Bring your questions and learn from experienced restorers. Workshop includes comprehensive handouts, tool demonstrations, and parts supplier information. Limited to 35 participants to ensure hands-on learning.",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
      category: "Workshop",
      attendees: 35,
      lat: 52.4068, 
      lng: -1.5197,
      registrationDeadline: "2026-03-28",
      organizer: {
        name: "Mike Wilson",
        email: "mike.wilson@fergusonclub.com",
        phone: "+44 2476 123456"
      },
      address: "Ferguson Heritage Centre, Banner Lane, Coventry, CV4 9GH"
    },
    {
      id: "4",
      title: "Summer Steam & Vintage Day",
      date: "2026-07-18",
      location: "Berkshire Showground",
      description: "Combined event featuring Ferguson tractors, steam engines, and vintage vehicles.",
      fullDescription: "A fantastic family day out celebrating all things vintage! Our Summer Steam & Vintage Day brings together Ferguson tractors, steam engines, classic cars, vintage motorcycles, and stationary engines. Enjoy arena displays, working demonstrations, children's activities, craft stalls, and food vendors. Live commentary throughout the day. Grand parade at 3pm featuring all exhibits. Free parking and entry for under-16s.",
      image: "https://images.unsplash.com/photo-1530267981375-f0dd48a74a4c?w=800&q=80",
      category: "Show",
      attendees: 400,
      lat: 51.4074, 
      lng: -1.0031,
      registrationDeadline: "2026-07-01",
      organizer: {
        name: "Sarah Thompson",
        email: "sarah.thompson@fergusonclub.com",
        phone: "+44 1189 876543"
      },
      address: "Berkshire Showground, Bath Road, Newbury, Berkshire, RG14 2BN"
    },
    {
      id: "5",
      title: "Autumn Technical Seminar",
      date: "2026-09-25",
      location: "National Agricultural Centre",
      description: "Technical presentations and Q&A sessions with Ferguson experts and historians.",
      fullDescription: "Our Autumn Technical Seminar features presentations from leading Ferguson historians, restorers, and engineers. Sessions cover Ferguson history and development, identification and dating, correct specifications and colors, parts sourcing strategies, and restoration best practices. Includes lunch, technical manual displays, and networking opportunities. Perfect for serious enthusiasts and those starting restoration projects.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      category: "Seminar",
      attendees: 60,
      lat: 52.2933, 
      lng: -1.6847,
      registrationDeadline: "2026-09-10",
      organizer: {
        name: "Robert Davies",
        email: "robert.davies@fergusonclub.com",
        phone: "+44 2476 234567"
      },
      address: "National Agricultural Centre, Stoneleigh Park, Warwickshire, CV8 2LG"
    },
    {
      id: "6",
      title: "Christmas Social & Awards",
      date: "2026-12-05",
      location: "Royal Hotel, Birmingham",
      description: "Annual club dinner with presentations, awards ceremony, and festive celebrations.",
      fullDescription: "Celebrate the year's achievements at our Christmas Social & Awards evening. Enjoy a three-course dinner, club awards presentation (Restoration of the Year, Member of the Year, Best Display), photo competition results, and festive entertainment. Cash bar available. Dress code: smart casual. This is our main social event of the year - a perfect opportunity to meet fellow members and share your Ferguson stories. Partners welcome.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
      category: "Social",
      attendees: 120,
      lat: 52.4862, 
      lng: -1.8904,
      registrationDeadline: "2026-11-20",
      organizer: {
        name: "Jennifer Clarke",
        email: "jennifer.clarke@fergusonclub.com",
        phone: "+44 121 456 7890"
      },
      address: "The Royal Hotel, 16 Temple Street, Birmingham, B2 5BG"
    }
  ];

  useEffect(() => {
    if (navigator.geolocation && radiusFilter !== "all") {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setLocationError("");
        },
        (error) => {
          setLocationError("Unable to get your location. Please enable location services.");
          console.error("Geolocation error:", error);
        }
      );
    }
  }, [radiusFilter]);

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 3959; // Earth's radius in miles
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  const filteredEvents = events.filter((event) => {
    // Month filter
    if (selectedMonth !== "all") {
      const eventMonth = new Date(event.date).toLocaleString("default", { month: "long" });
      if (eventMonth !== selectedMonth) return false;
    }

    // Radius filter
    if (radiusFilter !== "all" && userLocation && event.lat && event.lng) {
      const distance = calculateDistance(
        userLocation.lat,
        userLocation.lng,
        event.lat,
        event.lng
      );
      const maxDistance = parseInt(radiusFilter);
      if (distance > maxDistance) return false;
    }

    return true;
  });

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const openEventDetails = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const formatDateString = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  return (
    <>
      <SEO 
        title="Events - Ferguson Club"
        description="Join Ferguson Club events including rallies, workshops, competitions, and social gatherings for vintage tractor enthusiasts."
      />
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif">
                Upcoming <span className="text-[#ad1018]">Events</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                Join us at rallies, workshops, and social gatherings celebrating Ferguson heritage
              </p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="bg-gray-50 border-b py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              {/* Left side - Filters */}
              <div className="flex flex-col sm:flex-row gap-4 flex-1 w-full lg:w-auto">
                <div className="flex items-center gap-2 min-w-[200px]">
                  <Navigation className="h-5 w-5 text-gray-600" />
                  <Select value={radiusFilter} onValueChange={setRadiusFilter}>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Distance" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="25">Within 25 miles</SelectItem>
                      <SelectItem value="50">Within 50 miles</SelectItem>
                      <SelectItem value="100">Within 100 miles</SelectItem>
                      <SelectItem value="200">Within 200 miles</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center gap-2 min-w-[200px]">
                  <Filter className="h-5 w-5 text-gray-600" />
                  <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Months</SelectItem>
                      {months.map((month) => (
                        <SelectItem key={month} value={month}>
                          {month}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Right side - View toggle */}
              <div className="flex items-center gap-2 bg-white rounded-lg p-1 border">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={viewMode === "grid" ? "bg-gray-100" : ""}
                >
                  <Grid3x3 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={viewMode === "list" ? "bg-gray-100" : ""}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Location error message */}
            {locationError && radiusFilter !== "all" && (
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
                {locationError}
              </div>
            )}

            {/* Results count */}
            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredEvents.length} of {events.length} events
            </div>
          </div>
        </section>

        {/* Events Display */}
        <section className="py-16 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredEvents.length === 0 ? (
              <div className="text-center py-16">
                <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
                <p className="text-gray-600">Try adjusting your filters to see more events</p>
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col bg-white border-0 shadow-md">
                    <div className="aspect-[4/3] bg-gray-100 relative group">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Badge className="absolute top-4 right-4 bg-white text-[#ad1018] border-[#ad1018] font-semibold">
                        {event.category}
                      </Badge>
                    </div>
                    <CardHeader className="flex-grow p-6">
                      <CardTitle className="text-2xl font-serif text-gray-900 leading-tight mb-2">
                        {event.title}
                      </CardTitle>
                      <div className="space-y-3 text-sm text-gray-600 mt-4 bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="p-1.5 bg-red-50 rounded-full">
                            <Calendar className="h-4 w-4 text-[#ad1018]" />
                          </div>
                          <span className="font-medium">{formatDateString(event.date)}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="p-1.5 bg-red-50 rounded-full">
                            <MapPin className="h-4 w-4 text-[#ad1018]" />
                          </div>
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="p-1.5 bg-red-50 rounded-full">
                            <Users className="h-4 w-4 text-[#ad1018]" />
                          </div>
                          <span>{event.attendees} attendees</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mt-5 line-clamp-3 leading-relaxed">
                        {event.description}
                      </p>
                    </CardHeader>
                    <CardFooter className="mt-auto p-6 pt-0">
                      <Button 
                        className="w-full bg-[#ad1018] hover:bg-[#8B1538] text-white py-6 text-lg font-medium shadow-md hover:shadow-lg transition-all"
                        onClick={() => openEventDetails(event)}
                      >
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredEvents.map((event) => (
                  <div
                    key={event.id}
                    className="bg-white border-0 shadow-md rounded-xl p-6 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="w-full md:w-64 h-48 bg-gray-100 rounded-lg overflow-hidden shrink-0 relative">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <h3 className="text-2xl font-bold text-gray-900 font-serif">
                            {event.title}
                          </h3>
                          <Badge variant="secondary" className="shrink-0 bg-red-50 text-[#ad1018] border-0">
                            {event.category}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-6 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-[#ad1018]" />
                            <span className="font-medium">{formatDateString(event.date)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-[#ad1018]" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-[#ad1018]" />
                            <span>{event.attendees} attendees</span>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-6 flex-grow">
                          {event.description}
                        </p>
                        <Button 
                          className="w-fit min-w-[200px] bg-[#ad1018] hover:bg-[#8d0d14] text-white self-end"
                          onClick={() => openEventDetails(event)}
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Event Details Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
            {selectedEvent && (
              <>
                <div className="w-full h-64 relative">
                  <img 
                    src={selectedEvent.image} 
                    alt={selectedEvent.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <Badge className="bg-[#ad1018] text-white hover:bg-[#8B1538] mb-3 border-0">
                      {selectedEvent.category}
                    </Badge>
                    <DialogTitle className="text-3xl font-bold font-serif text-white">
                      {selectedEvent.title}
                    </DialogTitle>
                  </div>
                </div>
                
                <div className="p-6 space-y-8">
                  {/* Event Details Grid */}
                  <div className="grid md:grid-cols-2 gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-red-50 rounded-lg">
                          <Calendar className="h-5 w-5 text-[#ad1018] shrink-0" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-gray-500 mb-1">Date</p>
                          <p className="text-gray-900 font-medium">{formatDateString(selectedEvent.date)}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-red-50 rounded-lg">
                          <MapPin className="h-5 w-5 text-[#ad1018] shrink-0" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-gray-500 mb-1">Location</p>
                          <p className="text-gray-900 font-medium">{selectedEvent.location}</p>
                          <p className="text-sm text-gray-600 mt-1">{selectedEvent.address}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-red-50 rounded-lg">
                          <Users className="h-5 w-5 text-[#ad1018] shrink-0" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-gray-500 mb-1">Expected Attendees</p>
                          <p className="text-gray-900 font-medium">{selectedEvent.attendees} people</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-red-50 rounded-lg">
                          <Tag className="h-5 w-5 text-[#ad1018] shrink-0" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-gray-500 mb-1">Registration Deadline</p>
                          <p className="text-gray-900 font-medium">
                            {new Date(selectedEvent.registrationDeadline).toLocaleDateString("en-GB", {
                              year: "numeric",
                              month: "long",
                              day: "numeric"
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Full Description */}
                  <div>
                    <h4 className="font-semibold text-xl mb-4 text-gray-900 font-serif border-b pb-2">About This Event</h4>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
                      {selectedEvent.fullDescription}
                    </p>
                  </div>

                  {/* Organizer Contact */}
                  <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                    <h4 className="font-semibold text-xl mb-4 text-gray-900 font-serif">Event Contact</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Organizer</p>
                        <p className="font-medium text-gray-900">{selectedEvent.organizer.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Email</p>
                        <a href={`mailto:${selectedEvent.organizer.email}`} className="font-medium text-[#ad1018] hover:underline">
                          {selectedEvent.organizer.email}
                        </a>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Phone</p>
                        <a href={`tel:${selectedEvent.organizer.phone}`} className="font-medium text-[#ad1018] hover:underline">
                          {selectedEvent.organizer.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t">
                    <Button className="flex-1 bg-[#ad1018] hover:bg-[#8d0d14] text-white py-6 text-lg">
                      Register for Event
                    </Button>
                    <Button variant="outline" className="flex-1 py-6 text-lg">
                      Add to Calendar
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        <Footer />
      </div>
    </>
  );
}