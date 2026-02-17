import { SEO } from "@/components/SEO";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { GDPRConsent } from "@/components/Layout/GDPRConsent";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Link from "next/link";

const newsArticles = [
  {
    id: 1,
    title: "Record Turnout at Annual Ferguson Rally 2024",
    excerpt: "Over 500 Ferguson tractors gathered at the National Heritage Centre for our biggest rally yet. Members from across the UK and Europe showcased their beautifully restored machines.",
    date: "2024-03-15",
    author: "Club Secretary",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=500&fit=crop",
    category: "Events"
  },
  {
    id: 2,
    title: "New Technical Manual Series Released",
    excerpt: "We're excited to announce the release of our comprehensive TE20 restoration guide, featuring detailed photographs and step-by-step instructions from our expert restoration team.",
    date: "2024-03-10",
    author: "Technical Committee",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=800&h=500&fit=crop",
    category: "Resources"
  },
  {
    id: 3,
    title: "Ferguson Club Celebrates 50 Years",
    excerpt: "This year marks half a century since the Ferguson Club was founded. Join us for special anniversary events throughout the year, including a gala dinner in September.",
    date: "2024-03-01",
    author: "Club Chairman",
    image: "https://images.unsplash.com/photo-1464639351491-a172c2aa2911?w=800&h=500&fit=crop",
    category: "Club News"
  },
  {
    id: 4,
    title: "Winter Workshop Series Announced",
    excerpt: "Sign up now for our winter workshop series covering engine rebuilds, electrical systems, and hydraulics. Limited spaces available at our technical centre.",
    date: "2024-02-28",
    author: "Events Coordinator",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop",
    category: "Workshops"
  },
  {
    id: 5,
    title: "Member Spotlight: The Smith Family Collection",
    excerpt: "Meet the Smith family and their incredible collection of 12 Ferguson tractors, spanning from 1947 to 1965. Each machine has its own story and has been lovingly restored.",
    date: "2024-02-20",
    author: "Magazine Editor",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=800&h=500&fit=crop",
    category: "Members"
  },
  {
    id: 6,
    title: "Parts Availability Update",
    excerpt: "Good news for TE20 owners - we've secured a new supply of reproduction parts including steering boxes, clutch components, and engine gasket sets through our supplier network.",
    date: "2024-02-15",
    author: "Parts Coordinator",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop",
    category: "Parts"
  }
];

export default function News() {
  return (
    <>
      <SEO
        title="Club News - Ferguson Club"
        description="Latest news, updates, and stories from the Ferguson Club community"
      />
      
      <div className="min-h-screen bg-white">
        <Header />
        <GDPRConsent />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                Club <span className="text-[#BE0032]">News</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Stay updated with the latest news, events, and stories from the Ferguson Club community
              </p>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden border-2 border-[#BE0032]">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-full">
                  <img
                    src={newsArticles[0].image}
                    alt={newsArticles[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#BE0032] text-white px-4 py-2 rounded-lg font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(newsArticles[0].date).toLocaleDateString('en-GB', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {newsArticles[0].author}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {newsArticles[0].title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {newsArticles[0].excerpt}
                  </p>
                  <Button className="bg-[#BE0032] hover:bg-[#9A0028] w-fit">
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.slice(1).map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="p-0">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 backdrop-blur-sm text-[#BE0032] px-3 py-1 rounded-lg text-sm font-semibold">
                          {article.category}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(article.date).toLocaleDateString('en-GB', { 
                          day: 'numeric', 
                          month: 'short', 
                          year: 'numeric' 
                        })}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {article.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter className="px-6 pb-6">
                    <Button variant="outline" className="w-full group">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#BE0032] to-[#9A0028] rounded-3xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay Updated
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive the latest club news, event announcements, and technical tips directly to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button size="lg" className="bg-white text-[#BE0032] hover:bg-gray-100 whitespace-nowrap">
                  Subscribe
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