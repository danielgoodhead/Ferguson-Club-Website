import { SEO } from "@/components/SEO";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { CheckCircle2, Calendar, Users, FileText, ShoppingBag, Link2, MessageSquare, Camera, Newspaper, Wrench, Store } from "lucide-react";

export default function MemberDashboard() {
  return (
    <>
      <SEO 
        title="Member Dashboard - Ferguson Club"
        description="Access your Ferguson Club member dashboard, resources, and community features"
      />
      <div className="min-h-screen flex flex-col bg-white">
        <Header />

        {/* Member Navigation */}
        <section className="bg-gradient-to-r from-[#8B1538] to-[#6B1028] text-white py-4 sticky top-0 z-40 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-1 overflow-x-auto scrollbar-hide">
              <Link href="/members/dashboard">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 whitespace-nowrap">
                  Dashboard
                </Button>
              </Link>
              <Link href="/members/resources">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 whitespace-nowrap">
                  Resources
                </Button>
              </Link>
              <Link href="/news">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 whitespace-nowrap">
                  News
                </Button>
              </Link>
              <Link href="/events">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 whitespace-nowrap">
                  Events
                </Button>
              </Link>
              <Link href="/gallery">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 whitespace-nowrap">
                  Gallery
                </Button>
              </Link>
              <Link href="/tvo-licence">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 whitespace-nowrap">
                  TVO Licence
                </Button>
              </Link>
              <Link href="/marketplace">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 whitespace-nowrap">
                  Marketplace
                </Button>
              </Link>
              <Link href="/shop">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 whitespace-nowrap">
                  Shop
                </Button>
              </Link>
              <Link href="/links">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 whitespace-nowrap">
                  Links
                </Button>
              </Link>
              <Link href="/forum">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 whitespace-nowrap">
                  Forum
                </Button>
              </Link>
            </nav>
          </div>
        </section>

        {/* Page Header */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Welcome Back, <span className="text-[#8B1538]">Member</span>
            </h1>
            <p className="text-xl text-gray-600">
              Your Ferguson Club dashboard and member resources
            </p>
          </div>
        </section>

        {/* Dashboard Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Membership Status */}
          <Card className="mb-8 border-[#8B1538]/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Membership Status</CardTitle>
                  <CardDescription>Your current membership details</CardDescription>
                </div>
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  <CheckCircle2 className="w-4 h-4 mr-1" />
                  Active
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Member Type</p>
                  <p className="text-lg font-semibold text-gray-900">Full Member</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Member Since</p>
                  <p className="text-lg font-semibold text-gray-900">January 2020</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Renewal Date</p>
                  <p className="text-lg font-semibold text-gray-900">January 2027</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Access */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Access</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/members/resources">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer border-[#8B1538]/20 h-full">
                  <CardHeader>
                    <FileText className="w-10 h-10 text-[#8B1538] mb-3" />
                    <CardTitle className="text-lg">Resources</CardTitle>
                    <CardDescription>Technical manuals & documents</CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/marketplace">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer border-[#8B1538]/20 h-full">
                  <CardHeader>
                    <Store className="w-10 h-10 text-[#8B1538] mb-3" />
                    <CardTitle className="text-lg">Marketplace</CardTitle>
                    <CardDescription>Buy, sell & trade</CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/forum">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer border-[#8B1538]/20 h-full">
                  <CardHeader>
                    <MessageSquare className="w-10 h-10 text-[#8B1538] mb-3" />
                    <CardTitle className="text-lg">Forum</CardTitle>
                    <CardDescription>Community discussions</CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/events">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer border-[#8B1538]/20 h-full">
                  <CardHeader>
                    <Calendar className="w-10 h-10 text-[#8B1538] mb-3" />
                    <CardTitle className="text-lg">Events</CardTitle>
                    <CardDescription>Upcoming shows & rallies</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </div>
          </div>

          {/* Member Features Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Member Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/news">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <Newspaper className="w-8 h-8 text-[#8B1538] mb-2" />
                    <CardTitle>Club News</CardTitle>
                    <CardDescription>Latest updates and articles</CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/gallery">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <Camera className="w-8 h-8 text-[#8B1538] mb-2" />
                    <CardTitle>Photo Gallery</CardTitle>
                    <CardDescription>Event photos & restorations</CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/tvo-licence">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <Wrench className="w-8 h-8 text-[#8B1538] mb-2" />
                    <CardTitle>TVO Licence</CardTitle>
                    <CardDescription>Apply for TVO usage</CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/shop">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <ShoppingBag className="w-8 h-8 text-[#8B1538] mb-2" />
                    <CardTitle>Club Shop</CardTitle>
                    <CardDescription>Merchandise & books</CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/links">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <Link2 className="w-8 h-8 text-[#8B1538] mb-2" />
                    <CardTitle>Useful Links</CardTitle>
                    <CardDescription>Resources & suppliers</CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Card className="h-full bg-gray-50">
                <CardHeader>
                  <Users className="w-8 h-8 text-gray-400 mb-2" />
                  <CardTitle className="text-gray-600">More Coming Soon</CardTitle>
                  <CardDescription>Additional features in development</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Recent Activity</CardTitle>
              <CardDescription>Your latest interactions with the club</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 pb-4 border-b border-gray-200">
                  <Calendar className="w-5 h-5 text-[#8B1538] mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Registered for Spring Rally 2027</p>
                    <p className="text-sm text-gray-600">3 days ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 pb-4 border-b border-gray-200">
                  <MessageSquare className="w-5 h-5 text-[#8B1538] mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Posted in Technical Questions forum</p>
                    <p className="text-sm text-gray-600">1 week ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FileText className="w-5 h-5 text-[#8B1538] mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Downloaded Ferguson TE20 Manual</p>
                    <p className="text-sm text-gray-600">2 weeks ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Footer />
      </div>
    </>
  );
}