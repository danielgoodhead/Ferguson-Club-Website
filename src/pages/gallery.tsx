import { SEO } from "@/components/SEO";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { MembersNav } from "@/components/Layout/MembersNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Filter } from "lucide-react";
import { useState } from "react";

const galleryImages = [
  {
    id: 1,
    title: "1948 TE-20 Grey Ferguson",
    category: "Vintage",
    year: "1948",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
  },
  {
    id: 2,
    title: "Spring Rally 2025",
    category: "Events",
    year: "2025",
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&q=80"
  },
  {
    id: 3,
    title: "Ferguson TO-20",
    category: "Vintage",
    year: "1951",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?w=800&q=80"
  },
  {
    id: 4,
    title: "Restoration Workshop",
    category: "Events",
    year: "2025",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80"
  },
  {
    id: 5,
    title: "Ferguson TED-20",
    category: "Vintage",
    year: "1952",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80"
  },
  {
    id: 6,
    title: "Summer Show Display",
    category: "Events",
    year: "2025",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80"
  },
  {
    id: 7,
    title: "1949 TE-20 Restoration",
    category: "Restorations",
    year: "1949",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
  },
  {
    id: 8,
    title: "Autumn Road Run",
    category: "Events",
    year: "2025",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80"
  },
  {
    id: 9,
    title: "Ferguson TEF-20",
    category: "Vintage",
    year: "1954",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80"
  },
  {
    id: 10,
    title: "Engine Rebuild Workshop",
    category: "Technical",
    year: "2025",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80"
  },
  {
    id: 11,
    title: "Member's Collection",
    category: "Collections",
    year: "2025",
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&q=80"
  },
  {
    id: 12,
    title: "Ferguson 35",
    category: "Vintage",
    year: "1956",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
  }
];

const categories = ["All", "Vintage", "Events", "Restorations", "Technical", "Collections"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <>
      <SEO
        title="Gallery - Ferguson Club"
        description="Browse our collection of Ferguson tractor photos including vintage models, restoration projects, events, and member collections."
      />
      
      <div className="min-h-screen bg-white">
        <Header />
        <MembersNav />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                Photo <span className="text-[#8B1538]">Gallery</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Explore our collection of Ferguson tractors, from vintage models to modern restorations, 
                club events, and member collections from around the world.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 mb-4">
              <Filter className="w-5 h-5 text-[#8B1538]" />
              <span className="font-semibold text-gray-900">Filter by Category:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={
                    activeCategory === category
                      ? "bg-[#8B1538] hover:bg-[#6B1028] text-white"
                      : "border-gray-300 hover:border-[#8B1538] hover:text-[#8B1538]"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image) => (
                <div 
                  key={image.id}
                  className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                    <div className="flex items-center justify-between text-sm">
                      <span className="opacity-90">{image.category}</span>
                      <span className="opacity-90">{image.year}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-[#8B1538] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {image.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upload CTA */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Share Your Photos
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Members can submit photos of their Ferguson tractors, restorations, and events 
              to be featured in our gallery. Share your passion with the community!
            </p>
            <Button size="lg" className="bg-[#8B1538] hover:bg-[#6B1028] text-white">
              Submit Photos
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}