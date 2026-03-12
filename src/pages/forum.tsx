import { SEO } from "@/components/SEO";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { MembersNav } from "@/components/Layout/MembersNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { MessageSquare, Users, Clock, Search, Pin, Lock, AlertCircle, Plus } from "lucide-react";
import { useState } from "react";

const forumCategories = [
  {
    id: "general",
    name: "General Discussion",
    description: "General Ferguson tractor topics and chat",
    topics: 1247,
    posts: 8932,
    lastPost: {
      title: "Advice on purchasing my first TE20",
      author: "JohnSmith",
      time: "2 hours ago"
    },
    icon: MessageSquare,
    color: "bg-blue-500"
  },
  {
    id: "technical",
    name: "Technical Questions",
    description: "Get help with repairs, maintenance, and technical issues",
    topics: 2156,
    posts: 15678,
    lastPost: {
      title: "Hydraulic system not lifting properly",
      author: "MikeJones",
      time: "45 minutes ago"
    },
    icon: MessageSquare,
    color: "bg-green-500"
  },
  {
    id: "restoration",
    name: "Restoration Projects",
    description: "Share your restoration progress and get advice",
    topics: 892,
    posts: 6734,
    lastPost: {
      title: "1948 TE20 Barn Find - Complete Rebuild",
      author: "DavidWilson",
      time: "3 hours ago"
    },
    icon: MessageSquare,
    color: "bg-orange-500"
  },
  {
    id: "history",
    name: "Ferguson History",
    description: "Discuss the history of Ferguson tractors and Harry Ferguson",
    topics: 445,
    posts: 3221,
    lastPost: {
      title: "Ferguson's patent disputes with Ford",
      author: "HistoryBuff",
      time: "1 day ago"
    },
    icon: MessageSquare,
    color: "bg-purple-500"
  },
  {
    id: "parts",
    name: "Parts & Suppliers",
    description: "Discuss parts availability, suppliers, and alternatives",
    topics: 1567,
    posts: 9845,
    lastPost: {
      title: "Recommended suppliers for engine rebuild kits",
      author: "TomBrown",
      time: "5 hours ago"
    },
    icon: MessageSquare,
    color: "bg-yellow-500"
  },
  {
    id: "shows",
    name: "Shows & Events",
    description: "Discuss upcoming shows, rallies, and club events",
    topics: 678,
    posts: 4521,
    lastPost: {
      title: "Planning for next year's National Rally",
      author: "EventCoordinator",
      time: "1 day ago"
    },
    icon: MessageSquare,
    color: "bg-red-500"
  },
  {
    id: "implements",
    name: "Implements & Attachments",
    description: "Discussion about Ferguson implements and attachments",
    topics: 534,
    posts: 3876,
    lastPost: {
      title: "Ferguson plough adjustment tips",
      author: "FarmerJack",
      time: "6 hours ago"
    },
    icon: MessageSquare,
    color: "bg-teal-500"
  },
  {
    id: "photos",
    name: "Photos & Videos",
    description: "Share photos and videos of your Fergusons",
    topics: 1123,
    posts: 8234,
    lastPost: {
      title: "My collection of Ferguson grey beauties",
      author: "PhotoFan",
      time: "4 hours ago"
    },
    icon: MessageSquare,
    color: "bg-pink-500"
  }
];

const recentTopics = [
  {
    title: "Best practice for winter storage?",
    author: "NewMember123",
    category: "General Discussion",
    replies: 15,
    views: 234,
    lastReply: "12 minutes ago",
    isPinned: false
  },
  {
    title: "Official: 2026 National Rally Dates Announced",
    author: "ClubAdmin",
    category: "Shows & Events",
    replies: 47,
    views: 892,
    lastReply: "1 hour ago",
    isPinned: true
  },
  {
    title: "Gearbox making unusual noise - help needed",
    author: "WorriedOwner",
    category: "Technical Questions",
    replies: 23,
    views: 456,
    lastReply: "2 hours ago",
    isPinned: false
  },
  {
    title: "TE20 Restoration - Week 12 Update",
    author: "RestorationDave",
    category: "Restoration Projects",
    replies: 89,
    views: 1234,
    lastReply: "3 hours ago",
    isPinned: false
  }
];

export default function Forum() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <SEO
        title="Forum - Ferguson Club"
        description="Community forum for Ferguson tractor discussions and support"
      />
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <MembersNav />

        {/* Page Header */}
        <section className="bg-white py-16 border-b">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Community <span className="text-[#ad1018]">Forum</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl">
              Connect with fellow Ferguson enthusiasts, get technical help, share your projects, and discuss everything related to Ferguson tractors.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>2,456 Members</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                <span>8,642 Topics</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>62,043 Posts</span>
              </div>
            </div>
          </div>
        </section>

        {/* Forum Actions */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search topics..."
                className="pl-10"
              />
            </div>
            <Button className="bg-[#ad1018] hover:bg-[#8d0d14] text-white">
              <Plus className="h-5 w-5 mr-2" />
              New Discussion
            </Button>
          </div>
        </section>

        {/* Member Notice */}
        <section className="py-6 bg-blue-50 border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-start gap-3 max-w-4xl">
              <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Members Only Forum</h3>
                <p className="text-sm text-gray-700">
                  You must be logged in as a Ferguson Club member to post topics and replies. 
                  <Link href="/members/login" className="text-[#ad1018] hover:text-[#8d0d14] font-medium ml-1">
                    Login here
                  </Link> or 
                  <Link href="/membership" className="text-[#ad1018] hover:text-[#8d0d14] font-medium ml-1">
                    join the club
                  </Link> to participate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Forum Categories */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Forum Categories</h2>
            
            <div className="space-y-4">
              {forumCategories.map((category) => (
                <Card key={category.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`${category.color} p-3 rounded-lg flex-shrink-0`}>
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <Link href={`/forum/${category.id}`}>
                              <h3 className="text-xl font-semibold text-gray-900 hover:text-[#ad1018] transition-colors">
                                {category.name}
                              </h3>
                            </Link>
                            <p className="text-gray-600 text-sm mt-1">
                              {category.description}
                            </p>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <p className="text-sm text-gray-600">
                              <span className="font-semibold text-gray-900">{category.topics.toLocaleString()}</span> topics
                            </p>
                            <p className="text-sm text-gray-600">
                              <span className="font-semibold text-gray-900">{category.posts.toLocaleString()}</span> posts
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-3 pt-3 border-t">
                          <MessageSquare className="h-4 w-4" />
                          <span className="font-medium">{category.lastPost.title}</span>
                          <span>·</span>
                          <span>by {category.lastPost.author}</span>
                          <span>·</span>
                          <span>{category.lastPost.time}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Topics</h2>
            
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {recentTopics.map((topic, index) => (
                    <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start gap-2 mb-2">
                            {topic.isPinned && (
                              <Pin className="h-4 w-4 text-[#ad1018] flex-shrink-0 mt-1" />
                            )}
                            <Link href={`/forum/topic/${index + 1}`}>
                              <h3 className="text-lg font-semibold text-gray-900 hover:text-[#ad1018] transition-colors">
                                {topic.title}
                              </h3>
                            </Link>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                            <span className="font-medium">{topic.author}</span>
                            <Badge variant="outline" className="text-xs">
                              {topic.category}
                            </Badge>
                            <span>·</span>
                            <span>{topic.replies} replies</span>
                            <span>·</span>
                            <span>{topic.views} views</span>
                            <span>·</span>
                            <span>Last reply {topic.lastReply}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                View All Topics
              </Button>
            </div>
          </div>
        </section>

        {/* Forum Rules */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Forum Guidelines</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#ad1018] font-bold mt-1">•</span>
                    <span>Be respectful and courteous to all members</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ad1018] font-bold mt-1">•</span>
                    <span>Stay on topic and post in the appropriate category</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ad1018] font-bold mt-1">•</span>
                    <span>No spam, advertising, or commercial solicitation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ad1018] font-bold mt-1">•</span>
                    <span>Search before posting to avoid duplicate topics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ad1018] font-bold mt-1">•</span>
                    <span>Use clear, descriptive titles for your topics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ad1018] font-bold mt-1">•</span>
                    <span>Share knowledge and help other members when you can</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}