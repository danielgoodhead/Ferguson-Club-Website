import { SEO } from "@/components/SEO";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { GDPRConsent } from "@/components/Layout/GDPRConsent";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ExternalLink, Search } from "lucide-react";

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

export default function UsefulLinksPage() {
  return (
    <>
      <SEO
        title="Useful Links - Ferguson Club"
        description="A curated collection of useful links for Ferguson tractor enthusiasts including clubs, parts suppliers, technical resources, and more."
      />
      <div className="min-h-screen bg-white">
        <Header />
        <GDPRConsent />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-[#8B1538] to-gray-900 text-white py-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Useful Links</h1>
              <p className="text-xl text-gray-200">
                A curated collection of resources for Ferguson enthusiasts. From parts suppliers to museums, 
                find everything you need to support your passion for Ferguson tractors.
              </p>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-8 border-b bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search links..."
                  className="pl-12 h-12 text-base"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Links Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="space-y-12">
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
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}