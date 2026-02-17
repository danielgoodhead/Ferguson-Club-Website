import { SEO } from "@/components/SEO";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { GDPRConsent } from "@/components/Layout/GDPRConsent";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const newsArticles = [
  {
    id: 1,
    title: "Record Attendance at 2026 Spring Rally",
    excerpt: "Our Spring Rally saw unprecedented attendance with over 500 Ferguson tractors from 15 countries, making it the largest gathering in club history.",
    date: "February 15, 2026",
    author: "Club Secretary",
    category: "Events",
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&q=80",
    featured: true
  },
  {
    id: 2,
    title: "New Digital Archive Now Available",
    excerpt: "Members can now access over 10,000 digitized documents including original workshop manuals, parts catalogs, and historical photographs.",
    date: "February 10, 2026",
    author: "Archives Team",
    category: "Resources",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80"
  },
  {
    id: 3,
    title: "Rare TE-20 'Grey Fergie' Restoration Complete",
    excerpt: "Member John Davies completes stunning restoration of a 1948 TE-20, bringing it back to original factory specification.",
    date: "February 5, 2026",
    author: "Restoration Editor",
    category: "Restoration",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
  },
  {
    id: 4,
    title: "Technical Workshop Series Announced",
    excerpt: "Six new hands-on workshops scheduled for 2026, covering hydraulics, engine rebuilding, and electrical systems.",
    date: "January 28, 2026",
    author: "Events Team",
    category: "Events",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80"
  },
  {
    id: 5,
    title: "Partnership with National Museum Announced",
    excerpt: "Ferguson Club partners with National Agricultural Museum to preserve and display historic Ferguson tractors.",
    date: "January 20, 2026",
    author: "Club Chairman",
    category: "News",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80"
  },
  {
    id: 6,
    title: "Member Spotlight: Sarah Thompson's Collection",
    excerpt: "Meet Sarah Thompson and tour her impressive collection of six Ferguson tractors spanning three decades.",
    date: "January 15, 2026",
    author: "Features Editor",
    category: "Members",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80"
  }
];

export default function News() {
  return (
    <>
      <SEO
        title="News & Articles - Ferguson Club"
        description="Latest news, restoration stories, technical articles, and updates from the Ferguson Club community."
      />
      
      <div className="min-h-screen bg-white">
        <Header />
        <GDPRConsent />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                News & <span className="text-[#8B1538]">Articles</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Stay updated with the latest club news, restoration stories, technical articles, 
                and insights from the Ferguson tractor community.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {newsArticles.filter(article => article.featured).map(article => (
          <section key={article.id} className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-xl border border-gray-200">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="aspect-[4/3] lg:aspect-auto">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="inline-flex items-center space-x-2 text-[#8B1538] font-semibold mb-4">
                      <Tag className="w-4 h-4" />
                      <span>Featured Article</span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                      {article.title}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center space-x-6 text-sm text-gray-500 mb-8">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {article.date}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {article.author}
                      </div>
                    </div>
                    <Link href={`/news/${article.id}`}>
                      <Button className="bg-[#8B1538] hover:bg-[#6B1028] text-white group">
                        Read Full Article
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Recent Articles Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Recent Articles</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.filter(article => !article.featured).map((article) => (
                <article 
                  key={article.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#8B1538] text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#8B1538] transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="text-sm text-gray-500">
                        {article.date}
                      </div>
                      <Link 
                        href={`/news/${article.id}`}
                        className="text-[#8B1538] hover:underline font-medium text-sm flex items-center"
                      >
                        Read More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-gradient-to-br from-[#8B1538] to-[#6B1028] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Stay Informed
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Members receive our quarterly magazine featuring in-depth articles, technical guides, 
              and exclusive content delivered directly to your door.
            </p>
            <Link href="/membership">
              <Button size="lg" className="bg-white text-[#8B1538] hover:bg-gray-100">
                Become a Member
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}