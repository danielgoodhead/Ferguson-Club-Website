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

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  category: string;
  attendees: number;
  lat?: number;
  lng?: number;
  fullDescription: string;
  organizer: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  registrationDeadline: string;
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
      id: 1,
      title: "Annual Vintage Tractor Rally",
      date: "2026-06-15",
      location: "Yorkshire Showground",
      description: "Join us for the biggest vintage tractor rally of the year featuring hundreds of classic Ferguson tractors.",
      category: "Rally",
      attendees: 250,
      lat: 53.9915,
      lng: -1.3501,
      fullDescription: "The Annual Vintage Tractor Rally is our flagship event, bringing together Ferguson enthusiasts from across the UK and beyond. This year marks our 45th anniversary, and we're planning the biggest celebration yet. Expect to see over 300 vintage tractors on display, including rare Ferguson models from the 1940s through to the 1960s. There will be working demonstrations, expert talks, a trade area with parts and memorabilia, and our famous tractor parade. Entry includes access to all areas, parking, and a commemorative programme.",
      organizer: "Yorkshire Ferguson Club",
      contactEmail: "rally@fergusonclub.com",
      contactPhone: "01904 123456",
      address: "Great Yorkshire Showground, Harrogate Road, Harrogate, North Yorkshire, HG2 8NZ",
      registrationDeadline: "2026-06-01"
    },
    {
      id: 2,
      title: "Ferguson Ploughing Match",
      date: "2026-08-20",
      location: "Kent Agricultural Society",
      description: "Annual ploughing competition for Ferguson tractors. All skill levels welcome!",
      category: "Competition",
      attendees: 85,
      lat: 51.2787,
      lng: 0.5217,
      fullDescription: "Our annual ploughing match is a highlight of the Ferguson calendar. Whether you're a seasoned competitor or trying your hand at ploughing for the first time, this event offers classes for all abilities. We have vintage and classic classes, as well as demonstrations of modern ploughing techniques using Ferguson equipment. The day includes a farmers' market, refreshments, and the chance to network with fellow enthusiasts. Prizes will be awarded for best furrow, straightest line, and overall champion. Pre-registration is required for competitors.",
      organizer: "Kent Ferguson Society",
      contactEmail: "ploughing@fergusonclub.com",
      contactPhone: "01622 987654",
      address: "Kent Showground, Detling, Maidstone, Kent, ME14 3JF",
      registrationDeadline: "2026-08-10"
    },
    {
      id: 3,
      title: "Spring Restoration Workshop",
      date: "2026-04-12",
      location: "Ferguson Heritage Centre, Coventry",
      description: "Hands-on workshop covering engine rebuilds, electrical systems, and hydraulics.",
      category: "Workshop",
      attendees: 35,
      lat: 52.4068,
      lng: -1.5197,
      fullDescription: "This intensive one-day workshop is perfect for anyone restoring a Ferguson tractor or looking to improve their mechanical skills. Led by our team of expert engineers, the workshop covers engine teardown and rebuild, electrical system diagnostics and repair, hydraulic system maintenance, and paint preparation techniques. Each participant will work on real Ferguson components and receive a comprehensive restoration manual. Limited to 35 participants to ensure hands-on time with instructors. Lunch and refreshments included. Tools provided, but bring your own overalls.",
      organizer: "Ferguson Heritage Centre",
      contactEmail: "workshop@fergusonclub.com",
      contactPhone: "024 7655 4321",
      address: "Ferguson Heritage Centre, Banner Lane, Coventry, CV4 9GH",
      registrationDeadline: "2026-04-01"
    },
    {
      id: 4,
      title: "Scottish Ferguson Meet",
      date: "2026-07-08",
      location: "Royal Highland Centre, Edinburgh",
      description: "Northern members meet-up with display, swap meet, and social activities.",
      category: "Social",
      attendees: 120,
      lat: 55.9278,
      lng: -3.3089,
      fullDescription: "The Scottish Ferguson Meet is a relaxed gathering for members from Scotland and Northern England. The day includes a static display of members' tractors, a large swap meet for parts and memorabilia, technical Q&A sessions with experienced restorers, and a buffet lunch in our marquee. In the afternoon, we'll have a guided tour of local Ferguson collections and a scenic tractor drive through the Scottish countryside. Evening social event at a nearby pub (optional). A great opportunity to make new friends and share your passion for Ferguson tractors in a stunning setting.",
      organizer: "Scottish Ferguson Group",
      contactEmail: "scotland@fergusonclub.com",
      contactPhone: "0131 234 5678",
      address: "Royal Highland Centre, Ingliston, Edinburgh, EH28 8NB",
      registrationDeadline: "2026-06-28"
    },
    {
      id: 5,
      title: "Ferguson Family Fun Day",
      date: "2026-09-05",
      location: "Somerset Steam Rally",
      description: "Family-friendly event with tractor rides, vintage games, and children's activities.",
      category: "Family",
      attendees: 180,
      lat: 51.1079,
      lng: -2.9971,
      fullDescription: "Bring the whole family to our Ferguson Family Fun Day! While you admire the vintage tractors, kids can enjoy tractor trailer rides, vintage fairground games, face painting, and our popular 'Young Ferguson Drivers' experience where children can sit on tractors and learn about their history. There's a dedicated family marquee with refreshments and baby changing facilities. Local food vendors, craft stalls, and a brass band provide entertainment throughout the day. The event culminates in our Grand Parade of Fergusons at 4pm. Entry includes all activities - great value for a full day out.",
      organizer: "Somerset Ferguson Club",
      contactEmail: "family@fergusonclub.com",
      contactPhone: "01823 456789",
      address: "Somerset Steam Rally Ground, Low Ham, Langport, Somerset, TA10 9DP",
      registrationDeadline: "2026-08-25"
    },
    {
      id: 6,
      title: "Winter Technical Seminar",
      date: "2026-11-14",
      location: "Birmingham Conference Centre",
      description: "Indoor technical presentations covering advanced restoration techniques and sourcing rare parts.",
      category: "Seminar",
      attendees: 65,
      lat: 52.4782,
      lng: -1.9026,
      fullDescription: "Our Winter Technical Seminar is an indoor event perfect for the off-season. Expert speakers will present on topics including: sourcing rare Ferguson parts internationally, advanced welding and fabrication techniques, converting Ferguson tractors to 12V electrical systems, hydraulic pump rebuilding, and documenting your restoration project. The afternoon includes breakout sessions where you can get specific advice on your own projects. Includes lunch, refreshments, and a comprehensive technical handbook. Plenty of networking time with fellow restoration enthusiasts. Trade stands selling parts, manuals, and tools.",
      organizer: "Midlands Ferguson Society",
      contactEmail: "seminar@fergusonclub.com",
      contactPhone: "0121 789 0123",
      address: "NEC Birmingham, North Avenue, Marston Green, Birmingham, B40 1NT",
      registrationDeadline: "2026-11-01"
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
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredEvents.length === 0 ? (
              <div className="text-center py-16">
                <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
                <p className="text-gray-600">Try adjusting your filters to see more events</p>
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event) => (
                  <div
                    key={event.id}
                    className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <Calendar className="h-16 w-16 text-gray-400" />
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-xl font-bold text-gray-900 font-serif flex-1">
                          {event.title}
                        </h3>
                        <Badge variant="secondary" className="text-xs shrink-0">
                          {event.category}
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-[#ad1018]" />
                          <span>{new Date(event.date).toLocaleDateString("en-GB", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                          })}</span>
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
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {event.description}
                      </p>
                      <Button 
                        className="w-full bg-[#ad1018] hover:bg-[#8d0d14] text-white"
                        onClick={() => openEventDetails(event)}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredEvents.map((event) => (
                  <div
                    key={event.id}
                    className="bg-white border rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-full md:w-48 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center shrink-0">
                        <Calendar className="h-12 w-12 text-gray-400" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-2xl font-bold text-gray-900 font-serif">
                            {event.title}
                          </h3>
                          <Badge variant="secondary" className="shrink-0">
                            {event.category}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-[#ad1018]" />
                            <span>{new Date(event.date).toLocaleDateString("en-GB", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric"
                            })}</span>
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
                        <p className="text-gray-600">
                          {event.description}
                        </p>
                        <Button 
                          className="bg-[#ad1018] hover:bg-[#8d0d14] text-white"
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
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold font-serif text-gray-900">
                {selectedEvent?.title}
              </DialogTitle>
              <DialogDescription>
                <Badge variant="secondary" className="mt-2">
                  {selectedEvent?.category}
                </Badge>
              </DialogDescription>
            </DialogHeader>
            
            {selectedEvent && (
              <div className="space-y-6 pt-4">
                {/* Event Details Grid */}
                <div className="grid md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-[#ad1018] mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-sm text-gray-500">Date</p>
                        <p className="text-gray-900">
                          {new Date(selectedEvent.date).toLocaleDateString("en-GB", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-[#ad1018] mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-sm text-gray-500">Location</p>
                        <p className="text-gray-900">{selectedEvent.location}</p>
                        <p className="text-sm text-gray-600 mt-1">{selectedEvent.address}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-[#ad1018] mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-sm text-gray-500">Expected Attendees</p>
                        <p className="text-gray-900">{selectedEvent.attendees} people</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Tag className="h-5 w-5 text-[#ad1018] mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-sm text-gray-500">Registration Deadline</p>
                        <p className="text-gray-900">
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
                  <h4 className="font-semibold text-lg mb-3 text-gray-900">About This Event</h4>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {selectedEvent.fullDescription}
                  </p>
                </div>

                {/* Organizer Contact */}
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-gray-900">Event Contact</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-semibold">Organizer:</span> {selectedEvent.organizer}</p>
                    <p><span className="font-semibold">Email:</span> <a href={`mailto:${selectedEvent.contactEmail}`} className="text-[#ad1018] hover:underline">{selectedEvent.contactEmail}</a></p>
                    <p><span className="font-semibold">Phone:</span> <a href={`tel:${selectedEvent.contactPhone}`} className="text-[#ad1018] hover:underline">{selectedEvent.contactPhone}</a></p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t">
                  <Button className="flex-1 bg-[#ad1018] hover:bg-[#8d0d14] text-white">
                    Register for Event
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Add to Calendar
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        <Footer />
      </div>
    </>
  );
}