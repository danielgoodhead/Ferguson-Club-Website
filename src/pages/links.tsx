import { SEO } from "@/components/SEO";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { MembersNav } from "@/components/Layout/MembersNav";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ExternalLink, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const linkCategories = [
  {
    name: "Ferguson Clubs & Associations",
    links: [
      { title: "Ferguson Heritage", url: "https://www.fergusonheritage.com", description: "Official Ferguson Heritage website with historical information" },
      { title: "Harry Ferguson Invention Centre", url: "https://www.harryfergusoninventioncentre.com", description: "Museum and exhibition centre celebrating Harry Ferguson's innovations" },
      { title: "Ulster History Circle", url: "https://www.ulsterhistory.co.uk", description: "Commemorating historical figures including Harry Ferguson" },
      { title: "Ferguson Club Australia", url: "https://www.fergusonclub.com.au", description: "Australian Ferguson enthusiasts club" },
      { title: "Ferguson Club Netherlands", url: "https://www.fergusonclub.nl", description: "Dutch Ferguson owners association" }
    ]
  },
  {
    name: "Parts & Restoration",
    links: [
      { title: "Agriline Products", url: "https://www.agrilineproducts.com", description: "Tractor parts and agricultural supplies" },
      { title: "Vintage Tractor Parts", url: "https://www.vintagetractorparts.co.uk", description: "Specialist vintage tractor restoration parts" },
      { title: "A.D. Spares", url: "https://www.adspares.co.uk", description: "Ferguson and Massey Ferguson parts supplier" },
      { title: "Mascot Spares", url: "https://www.mascotspares.co.uk", description: "Quality tractor parts and accessories" },
      { title: "Messicks", url: "https://www.messicks.com", description: "North American tractor parts and service" }
    ]
  },
  {
    name: "Technical Resources",
    links: [
      { title: "Yesterday's Tractors", url: "https://www.yesterdaystractors.com", description: "Forum, classifieds, and technical information" },
      { title: "The Ferguson Club Forum", url: "/forum", description: "Our own community forum for members" },
      { title: "Tractor Data", url: "https://www.tractordata.com", description: "Comprehensive tractor specifications database" },
      { title: "Old Engine", url: "https://www.oldengine.org", description: "Vintage engine and tractor discussion" }
    ]
  },
  {
    name: "Shows & Events",
    links: [
      { title: "National Vintage Tractor & Engine Club", url: "https://www.nvtec.org.uk", description: "UK vintage machinery shows and rallies" },
      { title: "Steam & Country", url: "https://www.steamandcountry.co.uk", description: "Heritage machinery events calendar" },
      { title: "Tractor World", url: "https://www.tractorworld.co.uk", description: "Vintage tractor news and show listings" }
    ]
  },
  {
    name: "Publications & Media",
    links: [
      { title: "Tractor & Machinery", url: "https://www.tractorandmachinery.co.uk", description: "Leading tractor magazine" },
      { title: "Classic Tractor", url: "https://www.classictractor.co.uk", description: "Vintage tractor enthusiast magazine" },
      { title: "Farmers Weekly", url: "https://www.fwi.co.uk", description: "Agricultural news and machinery" },
      { title: "Old Glory Magazine", url: "https://www.oldglorymagazine.co.uk", description: "Heritage machinery and preservation" }
    ]
  },
  {
    name: "Museums & Collections",
    links: [
      { title: "Museum of English Rural Life", url: "https://www.reading.ac.uk/merl", description: "Agricultural heritage and machinery collection" },
      { title: "National Museum of Rural Life", url: "https://www.nms.ac.uk/rural", description: "Scotland's farming heritage museum" },
      { title: "Rural Life Centre", url: "https://www.rural-life.org.uk", description: "Surrey museum of rural heritage" },
      { title: "Beamish Museum", url: "https://www.beamish.org.uk", description: "Living museum of the North" }
    ]
  }
];

export default function UsefulLinks() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <SEO
        title="Useful Links - Ferguson Club"
        description="Helpful resources for Ferguson tractor owners and enthusiasts"
      />
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <MembersNav />

        {/* Page Header */}
        <section className="bg-white py-16 border-b">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Useful <span className="text-[#8B1538]">Links</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              A curated collection of helpful resources, suppliers, clubs, and information for Ferguson tractor enthusiasts
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search links..."
                className="pl-10 h-12"
              />
            </div>
          </div>

          {/* Links Categories */}
          <div className="mt-12 space-y-8">
            {linkCategories.map((category, index) => (
              <div key={index}>
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-3xl font-bold text-gray-900">{category.name}</h2>
                  <Badge variant="outline" className="text-sm">
                    {category.links.length} links
                  </Badge>
                </div>
                
                <div className="grid gap-4">
                  {category.links.map((link, linkIndex) => (
                    <Card key={linkIndex} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                              {link.title}
                            </h3>
                            <p className="text-gray-600 mb-3">
                              {link.description}
                            </p>
                            {link.url.startsWith("http") ? (
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#8B1538] hover:text-[#6B0F2A] text-sm font-medium inline-flex items-center gap-1"
                              >
                                Visit Website
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            ) : (
                              <Link
                                href={link.url}
                                className="text-[#8B1538] hover:text-[#6B0F2A] text-sm font-medium inline-flex items-center gap-1"
                              >
                                Visit Page
                                <ExternalLink className="h-4 w-4" />
                              </Link>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Submit Link Section */}
        <Card className="mt-12 border-blue-200 bg-blue-50">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Know a Great Resource?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              If you know of a website, supplier, or resource that would be valuable to our 
              members, please let us know. We're always looking to expand our links directory.
            </p>
            <Link href="/contact">
              <button className="bg-[#8B1538] hover:bg-[#6B0F2A] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Suggest a Link
              </button>
            </Link>
          </CardContent>
        </Card>

        <Footer />
      </div>
    </>
  );
}