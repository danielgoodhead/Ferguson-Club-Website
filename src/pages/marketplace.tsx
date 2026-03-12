import { SEO } from "@/components/SEO";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { MembersNav } from "@/components/Layout/MembersNav";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Plus, Tractor, Wrench, MapPin, Calendar, Eye, Filter, Clock, Heart, Tag, MessageSquare } from "lucide-react";

const listings = [
  {
    id: 1,
    title: "Ferguson TE20 1948 - Fully Restored",
    price: 4500,
    category: "Tractors",
    condition: "Excellent",
    location: "Yorkshire",
    postedDate: "2024-03-10",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop",
    description: "Beautiful grey Fergie, completely restored with new paint, rebuilt engine, and all new seals.",
    type: "For Sale"
  },
  {
    id: 2,
    title: "Original Ferguson System Plough",
    price: 350,
    category: "Implements",
    condition: "Good",
    location: "Devon",
    postedDate: "2024-03-08",
    image: "https://images.unsplash.com/photo-1464639351491-a172c2aa2911?w=600&h=400&fit=crop",
    description: "Genuine Ferguson 2-furrow plough in good working order. Some surface rust but fully functional.",
    type: "For Sale"
  },
  {
    id: 3,
    title: "Wanted: TE20 Front Axle",
    price: null,
    category: "Parts",
    condition: "Any",
    location: "Scotland",
    postedDate: "2024-03-07",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop",
    description: "Looking for a TE20 front axle in reasonable condition. Will consider any condition if price is right.",
    type: "Wanted"
  },
  {
    id: 4,
    title: "Ferguson TE20 Workshop Manual Original",
    price: 45,
    category: "Books & Manuals",
    condition: "Good",
    location: "Kent",
    postedDate: "2024-03-06",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=600&h=400&fit=crop",
    description: "Original Ferguson workshop manual in good condition with some age-related wear. All pages intact.",
    type: "For Sale"
  },
  {
    id: 5,
    title: "TVO TEA20 1952 - Running Project",
    price: 2800,
    category: "Tractors",
    condition: "Fair",
    location: "Somerset",
    postedDate: "2024-03-05",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop",
    description: "TVO model in running condition. Needs some cosmetic work and minor mechanical attention. Good project tractor.",
    type: "For Sale"
  },
  {
    id: 6,
    title: "Ferguson Finger Bar Mower",
    price: 280,
    category: "Implements",
    condition: "Good",
    location: "Wales",
    postedDate: "2024-03-04",
    image: "https://images.unsplash.com/photo-1464639351491-a172c2aa2911?w=600&h=400&fit=crop",
    description: "Original Ferguson finger bar mower. Been stored in dry barn, good working condition.",
    type: "For Sale"
  },
  {
    id: 7,
    title: "Wanted: Rear Wheel Rims for TE20",
    price: null,
    category: "Parts",
    condition: "Good",
    location: "Lancashire",
    postedDate: "2024-03-03",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop",
    description: "Seeking pair of rear wheel rims for TE20 restoration project. Must be in good condition without major damage.",
    type: "Wanted"
  },
  {
    id: 8,
    title: "Ferguson TE20 Spares Collection",
    price: 650,
    category: "Parts",
    condition: "Various",
    location: "Cornwall",
    postedDate: "2024-03-02",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop",
    description: "Large collection of TE20 spares including engine parts, hydraulic components, and tinwork. Selling as lot.",
    type: "For Sale"
  },
  {
    id: 9,
    title: "Ferguson FE35 1958 - Original Condition",
    price: 3200,
    category: "Tractors",
    condition: "Good",
    location: "Lincolnshire",
    postedDate: "2024-03-01",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop",
    description: "FE35 in original unrestored condition. Good runner with working hydraulics. Ideal restoration project.",
    type: "For Sale"
  }
];

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [conditionFilter, setConditionFilter] = useState("all");

  const filteredListings = listings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         listing.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || listing.category === categoryFilter;
    const matchesType = typeFilter === "all" || listing.type === typeFilter;
    const matchesCondition = conditionFilter === "all" || listing.condition === conditionFilter;
    return matchesSearch && matchesCategory && matchesType && matchesCondition;
  });

  return (
    <>
      <SEO
        title="Marketplace - Ferguson Club"
        description="Buy and sell Ferguson tractors, parts, implements, and memorabilia"
      />
      
      <div className="min-h-screen bg-white">
        <Header />
        <MembersNav />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                Members' <span className="text-[#BE0032]">Marketplace</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Buy, sell, and trade Ferguson tractors, parts, implements, and memorabilia with fellow club members
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-gray-50 border-y border-gray-200 sticky top-20 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-grow relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search listings..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-12 text-lg"
                />
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:w-auto">
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="h-12">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="For Sale">For Sale</SelectItem>
                    <SelectItem value="Wanted">Wanted</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="Tractors">Tractors</SelectItem>
                    <SelectItem value="Parts">Parts</SelectItem>
                    <SelectItem value="Implements">Implements</SelectItem>
                    <SelectItem value="Books & Manuals">Books & Manuals</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={conditionFilter} onValueChange={setConditionFilter}>
                  <SelectTrigger className="h-12 col-span-2 lg:col-span-1">
                    <SelectValue placeholder="Condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Conditions</SelectItem>
                    <SelectItem value="Excellent">Excellent</SelectItem>
                    <SelectItem value="Good">Good</SelectItem>
                    <SelectItem value="Fair">Fair</SelectItem>
                    <SelectItem value="Any">Any</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Showing {filteredListings.length} of {listings.length} listings
              </p>
              <Link href="/marketplace/post" className="flex-1">
                <Button size="lg" className="w-full bg-[#ad1018] hover:bg-[#8d0d14]">
                  <Plus className="w-5 h-5 mr-2" />
                  Post Listing
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Listings Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredListings.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-gray-600">No listings found matching your criteria.</p>
                <Button className="mt-6 bg-[#BE0032] hover:bg-[#9A0028]">
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredListings.map((listing) => (
                  <Card key={listing.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="p-0">
                      <div className="relative h-56 overflow-hidden bg-gray-100">
                        <img
                          src={listing.image}
                          alt={listing.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className={listing.type === "For Sale" ? "bg-green-600" : "bg-blue-600"}>
                            {listing.type}
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
                            {listing.condition}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-[#BE0032] font-semibold">{listing.category}</span>
                        {listing.price && (
                          <span className="text-2xl font-bold text-gray-900">
                            £{listing.price.toLocaleString()}
                          </span>
                        )}
                        {!listing.price && (
                          <span className="text-lg font-semibold text-gray-600">Offers</span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {listing.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {listing.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {listing.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {new Date(listing.postedDate).toLocaleDateString('en-GB', { 
                            day: 'numeric', 
                            month: 'short' 
                          })}
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-3 pt-4">
                      <Link href={`/marketplace/${listing.id}`} className="flex-1">
                        <Button className="w-full bg-[#ad1018] hover:bg-[#8d0d14]">
                          View Details
                        </Button>
                      </Link>
                      <Button variant="outline" size="icon">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Info Banner */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 text-center">
              <Tag className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Members Only Marketplace</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Only current Ferguson Club members can post and respond to marketplace listings. 
                This helps maintain quality and trust within our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#BE0032] hover:bg-[#9A0028]">
                  Login to Post
                </Button>
                <Button variant="outline">
                  Join the Club
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}