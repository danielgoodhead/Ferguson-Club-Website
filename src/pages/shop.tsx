import { SEO } from "@/components/SEO";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { GDPRConsent } from "@/components/Layout/GDPRConsent";
import { useState } from "react";
import { ShoppingCart, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Ferguson Club Badge",
    category: "Merchandise",
    price: 8.50,
    image: "https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?w=400&h=400&fit=crop",
    description: "Official club badge with Ferguson logo"
  },
  {
    id: 2,
    name: "Technical Manual - TE20",
    category: "Books & Manuals",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=400&fit=crop",
    description: "Comprehensive technical manual for TE20 models"
  },
  {
    id: 3,
    name: "Ferguson Club Cap",
    category: "Merchandise",
    price: 12.00,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
    description: "Embroidered club cap in navy blue"
  },
  {
    id: 4,
    name: "Parts Catalogue - Ferguson System",
    category: "Books & Manuals",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=400&fit=crop",
    description: "Complete parts catalogue for Ferguson System tractors"
  },
  {
    id: 5,
    name: "Ferguson Club T-Shirt",
    category: "Merchandise",
    price: 15.00,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    description: "100% cotton t-shirt with Ferguson Club logo"
  },
  {
    id: 6,
    name: "Workshop Manual - MF35",
    category: "Books & Manuals",
    price: 27.50,
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=400&fit=crop",
    description: "Detailed workshop manual for Massey Ferguson 35"
  },
  {
    id: 7,
    name: "Ferguson Heritage Book",
    category: "Books & Manuals",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=400&fit=crop",
    description: "The complete history of Ferguson tractors"
  },
  {
    id: 8,
    name: "Club Keyring",
    category: "Merchandise",
    price: 5.00,
    image: "https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?w=400&h=400&fit=crop",
    description: "Metal keyring with Ferguson Club emblem"
  },
  {
    id: 9,
    name: "Ferguson Club Mug",
    category: "Merchandise",
    price: 9.50,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop",
    description: "Ceramic mug with vintage tractor design"
  }
];

export default function Shop() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEO
        title="Shop - Ferguson Club"
        description="Browse our selection of Ferguson Club merchandise, technical manuals, and books"
      />
      
      <div className="min-h-screen bg-white">
        <Header />

        {/* Members Navigation */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8 overflow-x-auto py-4">
              <Link href="/members/dashboard" className="text-gray-600 hover:text-[#8B1538] whitespace-nowrap transition-colors">
                Dashboard
              </Link>
              <Link href="/members/resources" className="text-gray-600 hover:text-[#8B1538] whitespace-nowrap transition-colors">
                Resources
              </Link>
              <Link href="/members/directory" className="text-gray-600 hover:text-[#8B1538] whitespace-nowrap transition-colors">
                Member Directory
              </Link>
              <Link href="/members/registrations" className="text-gray-600 hover:text-[#8B1538] whitespace-nowrap transition-colors">
                DVLA Registrations
              </Link>
              <Link href="/news" className="text-gray-600 hover:text-[#8B1538] whitespace-nowrap transition-colors">
                News
              </Link>
              <Link href="/events" className="text-gray-600 hover:text-[#8B1538] whitespace-nowrap transition-colors">
                Events
              </Link>
              <Link href="/gallery" className="text-gray-600 hover:text-[#8B1538] whitespace-nowrap transition-colors">
                Gallery
              </Link>
              <Link href="/tvo-licence" className="text-gray-600 hover:text-[#8B1538] whitespace-nowrap transition-colors">
                TVO Licence
              </Link>
              <Link href="/marketplace" className="text-gray-600 hover:text-[#8B1538] whitespace-nowrap transition-colors">
                Marketplace
              </Link>
              <Link href="/shop" className="text-[#8B1538] font-semibold whitespace-nowrap border-b-2 border-[#8B1538]">
                Shop
              </Link>
              <Link href="/links" className="text-gray-600 hover:text-[#8B1538] whitespace-nowrap transition-colors">
                Useful Links
              </Link>
              <Link href="/forum" className="text-gray-600 hover:text-[#8B1538] whitespace-nowrap transition-colors">
                Forum
              </Link>
            </nav>
          </div>
        </section>

        <GDPRConsent />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                Club <span className="text-[#BE0032]">Shop</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Browse our selection of official Ferguson Club merchandise, technical manuals, 
                books, and accessories for enthusiasts and collectors.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-12 text-lg"
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full md:w-64 h-12">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Merchandise">Merchandise</SelectItem>
                  <SelectItem value="Books & Manuals">Books & Manuals</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-gray-600">No products found matching your search.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="p-0">
                      <div className="relative h-64 overflow-hidden bg-gray-100">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="text-sm text-[#BE0032] font-medium mb-2">{product.category}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                      <div className="text-2xl font-bold text-gray-900">£{product.price.toFixed(2)}</div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button className="w-full bg-[#BE0032] hover:bg-[#9A0028]">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Member Benefits</h2>
            <p className="text-lg text-gray-600 mb-8">
              All Ferguson Club members receive exclusive discounts on shop purchases. 
              Login to your member account to see member pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#BE0032] hover:bg-[#9A0028]">
                Member Login
              </Button>
              <Button size="lg" variant="outline">
                Join the Club
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}