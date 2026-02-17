import { SEO } from "@/components/SEO";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { GDPRConsent } from "@/components/Layout/GDPRConsent";
import { User, FileText, Calendar, BookOpen, Users, Settings, Download, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const quickLinks = [
  {
    icon: FileText,
    title: "Technical Library",
    description: "Workshop manuals & parts catalogs",
    href: "/members/resources",
    color: "bg-blue-500"
  },
  {
    icon: Calendar,
    title: "Event Bookings",
    description: "Manage your event registrations",
    href: "/members/events",
    color: "bg-green-500"
  },
  {
    icon: Users,
    title: "Member Directory",
    description: "Connect with other members",
    href: "/members/directory",
    color: "bg-purple-500"
  },
  {
    icon: BookOpen,
    title: "Magazine Archive",
    description: "Read past issues online",
    href: "/members/magazine",
    color: "bg-orange-500"
  }
];

const recentActivity = [
  {
    title: "Spring Rally 2026 - Registration Confirmed",
    date: "February 15, 2026",
    type: "Event"
  },
  {
    title: "Downloaded: TE-20 Workshop Manual",
    date: "February 10, 2026",
    type: "Resource"
  },
  {
    title: "New Forum Post: Engine Rebuild Tips",
    date: "February 8, 2026",
    type: "Community"
  }
];

export default function MemberDashboard() {
  return (
    <>
      <SEO
        title="Member Dashboard - Ferguson Club"
        description="Your Ferguson Club member dashboard - access resources, manage bookings, and connect with the community."
      />
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        <GDPRConsent />

        {/* Welcome Banner */}
        <section className="bg-gradient-to-br from-[#8B1538] to-[#6B1028] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-2">Welcome back, John!</h1>
                <p className="text-white/90 text-lg">Member since 2020 • Membership #12345</p>
              </div>
              <Link href="/members/profile">
                <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Settings className="w-4 h-4 mr-2" />
                  Account Settings
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Access</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <Link key={index} href={link.href}>
                  <Card className="p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-[#8B1538] group">
                    <div className={`w-12 h-12 ${link.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <link.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B1538] transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{link.description}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Recent Activity */}
              <div className="lg:col-span-2">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start pb-4 border-b border-gray-100 last:border-0">
                        <div className="w-2 h-2 bg-[#8B1538] rounded-full mt-2 mr-4"></div>
                        <div className="flex-grow">
                          <h3 className="font-semibold text-gray-900">{activity.title}</h3>
                          <div className="flex items-center space-x-3 mt-1">
                            <span className="text-sm text-gray-600">{activity.date}</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                              {activity.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Membership Status */}
                <Card className="p-6 bg-gradient-to-br from-gray-50 to-white">
                  <h3 className="font-bold text-gray-900 mb-4">Membership Status</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Type:</span>
                      <span className="font-semibold text-gray-900">Full Member</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Renewal:</span>
                      <span className="font-semibold text-gray-900">Dec 31, 2026</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className="text-green-600 font-semibold">Active</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-[#8B1538] hover:bg-[#6B1028] text-white">
                    Renew Membership
                  </Button>
                </Card>

                {/* Upcoming Events */}
                <Card className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-[#8B1538]" />
                    Your Events
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="font-semibold text-gray-900 text-sm">Spring Rally 2026</div>
                      <div className="text-xs text-gray-600 mt-1">April 12-13, 2026</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="font-semibold text-gray-900 text-sm">Workshop Session</div>
                      <div className="text-xs text-gray-600 mt-1">May 18, 2026</div>
                    </div>
                  </div>
                  <Link href="/members/events">
                    <Button variant="outline" className="w-full mt-4 border-[#8B1538] text-[#8B1538] hover:bg-[#8B1538] hover:text-white">
                      View All Events
                    </Button>
                  </Link>
                </Card>

                {/* Notifications */}
                <Card className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                    <Bell className="w-5 h-5 mr-2 text-[#8B1538]" />
                    Notifications
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-600">
                      <span className="font-semibold text-gray-900">New:</span> March magazine now available
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold text-gray-900">Reminder:</span> Event registration closes in 5 days
                    </p>
                  </div>
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