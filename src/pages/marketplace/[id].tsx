import { SEO } from "@/components/SEO";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { GDPRConsent } from "@/components/Layout/GDPRConsent";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/router";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, User, Mail, Phone, AlertCircle, Share2, MessageSquare } from "lucide-react";

// Mock data - in production this would come from a database
const mockListings = {
  "1": {
    id: "1",
    title: "Ferguson TE20 Tractor - Excellent Condition",
    type: "For Sale",
    category: "Tractors",
    condition: "Excellent",
    price: "£4,500",
    location: "Yorkshire, UK",
    postcode: "YO1",
    postedDate: "2026-02-10",
    seller: "John Smith",
    memberSince: "2020",
    email: "john.smith@example.com",
    phone: "01234 567890",
    description: "Beautiful 1952 Ferguson TE20 tractor in excellent working condition. This grey Ferguson has been lovingly restored and maintained. All original parts where possible, runs perfectly. New battery, rebuilt carburettor, fresh service. Ideal for shows or light farm work. Comes with original tool kit and documentation.",
    specifications: [
      "Year: 1952",
      "Engine: Petrol/TVO",
      "Hours: Approximately 3,200",
      "Hydraulics: Working perfectly",
      "Tyres: Good condition (70%)",
      "Paint: Original grey with recent touch-ups"
    ],
    images: [
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800",
      "https://images.unsplash.com/photo-1581578017093-cd30ed7d2b59?w=800"
    ],
    views: 142,
    featured: true
  },
  "2": {
    id: "2",
    title: "Wanted: Ferguson Plough Parts",
    type: "Wanted",
    category: "Parts & Accessories",
    location: "Lancashire, UK",
    postcode: "LA1",
    postedDate: "2026-02-12",
    seller: "David Wilson",
    memberSince: "2018",
    email: "david.wilson@example.com",
    description: "Looking for Ferguson plough parts, specifically mouldboards and shares for a 2-furrow plough. Any condition considered. Please contact with details and price.",
    images: [],
    views: 67,
    featured: false
  }
};

export default function MarketplaceItemPage() {
  const router = useRouter();
  const { id } = router.query;
  
  const listing = mockListings[id as string];

  if (!listing) {
    return (
      <>
        <SEO
          title="Listing Not Found - Ferguson Club Marketplace"
          description="The marketplace listing you're looking for could not be found."
        />
        <div className="min-h-screen bg-white">
          <Header />
          <GDPRConsent />
          
          <div className="container mx-auto px-4 py-20 text-center">
            <AlertCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Listing Not Found</h1>
            <p className="text-gray-600 mb-8">The marketplace listing you're looking for doesn't exist or has been removed.</p>
            <Link href="/marketplace">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Marketplace
              </Button>
            </Link>
          </div>
          
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title={`${listing.title} - Ferguson Club Marketplace`}
        description={listing.description.substring(0, 160)}
      />
      <div className="min-h-screen bg-white">
        <Header />
        <GDPRConsent />

        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-[#ad1018]">Home</Link>
              <span>/</span>
              <Link href="/marketplace" className="hover:text-[#ad1018]">Marketplace</Link>
              <span>/</span>
              <span className="text-gray-900">{listing.title}</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <Link href="/marketplace">
                <Button variant="ghost" className="text-[#ad1018] hover:text-[#8d0d14]">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Marketplace
                </Button>
              </Link>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Images and Details */}
              <div className="lg:col-span-2 space-y-6">
                {/* Title and Badges */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge className={listing.type === "For Sale" ? "bg-green-600" : "bg-blue-600"}>
                      {listing.type}
                    </Badge>
                    <Badge variant="outline">{listing.category}</Badge>
                    {listing.condition && (
                      <Badge variant="outline">{listing.condition}</Badge>
                    )}
                    {listing.featured && (
                      <Badge className="bg-yellow-600">Featured</Badge>
                    )}
                  </div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">{listing.title}</h1>
                  {listing.price && (
                    <p className="text-3xl font-bold text-[#ad1018]">{listing.price}</p>
                  )}
                </div>

                {/* Images */}
                {listing.images && listing.images.length > 0 && (
                  <div className="space-y-4">
                    <div className="aspect-video relative overflow-hidden rounded-lg">
                      <img
                        src={listing.images[0]}
                        alt={listing.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {listing.images.length > 1 && (
                      <div className="grid grid-cols-4 gap-4">
                        {listing.images.slice(1).map((image, index) => (
                          <div key={index} className="aspect-square relative overflow-hidden rounded-lg cursor-pointer hover:opacity-80 transition-opacity">
                            <img
                              src={image}
                              alt={`${listing.title} - Image ${index + 2}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Description */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
                    <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                      {listing.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Specifications */}
                {listing.specifications && (
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Specifications</h2>
                      <ul className="space-y-2">
                        {listing.specifications.map((spec, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-[#ad1018] mt-1">•</span>
                            <span className="text-gray-700">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Right Column - Seller Info and Actions */}
              <div className="space-y-6">
                {/* Seller Information */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Seller Information</h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-[#ad1018] flex items-center justify-center text-white font-bold text-lg">
                          {listing.seller.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{listing.seller}</p>
                          <p className="text-sm text-gray-600">Member since {listing.memberSince}</p>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-[#ad1018] mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">Location</p>
                            <p className="text-sm text-gray-600">{listing.location}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Calendar className="h-5 w-5 text-[#ad1018] mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">Posted</p>
                            <p className="text-sm text-gray-600">
                              {new Date(listing.postedDate).toLocaleDateString("en-GB", {
                                day: "numeric",
                                month: "long",
                                year: "numeric"
                              })}
                            </p>
                          </div>
                        </div>

                        {listing.views && (
                          <div className="flex items-start gap-3">
                            <User className="h-5 w-5 text-[#ad1018] mt-0.5" />
                            <div>
                              <p className="text-sm font-medium text-gray-900">Views</p>
                              <p className="text-sm text-gray-600">{listing.views} views</p>
                            </div>
                          </div>
                        )}
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <Button className="w-full bg-[#ad1018] hover:bg-[#8d0d14]">
                          <MessageSquare className="h-5 w-5 mr-2" />
                          Contact Seller
                        </Button>
                        <Button variant="outline" className="w-full">
                          <Share2 className="h-4 w-4 mr-2" />
                          Share Listing
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Safety Notice */}
                <Card className="border-yellow-200 bg-yellow-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Safety Tips</h3>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Meet in a safe, public location</li>
                          <li>• Inspect items before purchase</li>
                          <li>• Never send money in advance</li>
                          <li>• Be cautious of too-good deals</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}