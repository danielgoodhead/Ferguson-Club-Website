import { SEO } from "@/components/SEO";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { MembersNav } from "@/components/Layout/MembersNav";
import { Download, FileText, Book, Wrench, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const resourceCategories = [
  {
    title: "Workshop Manuals",
    icon: Wrench,
    count: 47,
    description: "Complete service and repair manuals"
  },
  {
    title: "Parts Catalogs",
    icon: Book,
    count: 35,
    description: "Detailed parts lists and diagrams"
  },
  {
    title: "Technical Bulletins",
    icon: FileText,
    count: 128,
    description: "Service updates and technical notes"
  },
  {
    title: "Historical Documents",
    icon: Book,
    count: 89,
    description: "Original brochures and specifications"
  }
];

const popularDownloads = [
  {
    title: "TE-20 Workshop Manual (Complete)",
    type: "Workshop Manual",
    size: "24.5 MB",
    downloads: 1234
  },
  {
    title: "Ferguson TO-20 Parts Catalog",
    type: "Parts Catalog",
    size: "18.2 MB",
    downloads: 987
  },
  {
    title: "TEF-20 Service Manual",
    type: "Workshop Manual",
    size: "31.8 MB",
    downloads: 856
  },
  {
    title: "Ferguson 35 Technical Data",
    type: "Technical Bulletin",
    size: "5.4 MB",
    downloads: 745
  }
];

export default function MemberResources() {
  return (
    <>
      <SEO
        title="Member Resources - Ferguson Club"
        description="Access technical manuals, documents, and resources for Ferguson tractor owners"
      />
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        <MembersNav />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#8B1538] to-[#6B1028] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold mb-6">Technical Resources</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Access our comprehensive digital library of workshop manuals, parts catalogs, 
              and technical documentation for all Ferguson tractor models.
            </p>
          </div>
        </section>

        {/* Search Bar */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search manuals, parts catalogs, model numbers..."
                  className="pl-12 h-14 text-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse by Category</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resourceCategories.map((category, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-[#8B1538] group">
                  <div className="w-12 h-12 bg-[#8B1538]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#8B1538] transition-colors">
                    <category.icon className="w-6 h-6 text-[#8B1538] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B1538] transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                  <div className="text-[#8B1538] font-semibold text-sm">{category.count} documents</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Downloads */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Downloads</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {popularDownloads.map((resource, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-[#8B1538]">
                  <div className="flex items-start justify-between">
                    <div className="flex-grow">
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">{resource.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                        <span className="bg-gray-100 px-3 py-1 rounded">{resource.type}</span>
                        <span>{resource.size}</span>
                        <span>↓ {resource.downloads}</span>
                      </div>
                    </div>
                    <Button size="sm" className="bg-[#8B1538] hover:bg-[#6B1028] text-white">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Can't Find What You Need?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact our technical team for assistance or to request specific documentation.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-[#8B1538] hover:bg-[#6B1028] text-white">
                Contact Technical Support
              </Button>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}