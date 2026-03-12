import { SEO } from "@/components/SEO";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { MembersNav } from "@/components/Layout/MembersNav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Calendar, 
  FileText, 
  MessageSquare, 
  Settings,
  Bell,
  TrendingUp,
  Users,
  Award,
  Clock
} from "lucide-react";
import Link from "next/link";

export default function MemberDashboardPage() {
  // Mock user data - in production this would come from authentication
  const memberData = {
    name: "John Smith",
    memberNumber: "FC-2024-1234",
    memberSince: "January 2020",
    membershipType: "Family",
    expiryDate: "31st December 2024",
    tractors: 3,
    eventsAttended: 12
  };

  const quickActions = [
    {
      title: "Update Profile",
      description: "Edit your personal details and preferences",
      icon: <User className="h-5 w-5" />,
      href: "/members/profile",
      color: "bg-blue-500"
    },
    {
      title: "Event Calendar",
      description: "View and register for upcoming events",
      icon: <Calendar className="h-5 w-5" />,
      href: "/events",
      color: "bg-green-500"
    },
    {
      title: "Member Resources",
      description: "Access technical guides and documents",
      icon: <FileText className="h-5 w-5" />,
      href: "/members/resources",
      color: "bg-purple-500"
    },
    {
      title: "Community Forum",
      description: "Connect with other members",
      icon: <MessageSquare className="h-5 w-5" />,
      href: "/forum",
      color: "bg-orange-500"
    }
  ];

  const recentActivity = [
    {
      type: "event",
      title: "Spring Rally Registration Confirmed",
      date: "2 days ago",
      icon: <Calendar className="h-4 w-4" />
    },
    {
      type: "forum",
      title: "New reply in 'TE20 Restoration Tips'",
      date: "5 days ago",
      icon: <MessageSquare className="h-4 w-4" />
    },
    {
      type: "document",
      title: "March Magazine Now Available",
      date: "1 week ago",
      icon: <FileText className="h-4 w-4" />
    }
  ];

  const upcomingEvents = [
    {
      title: "National Spring Rally",
      date: "15th April 2024",
      location: "Staffordshire Showground"
    },
    {
      title: "Regional Workshop Day",
      date: "22nd April 2024",
      location: "Birmingham"
    },
    {
      title: "Technical Webinar: Hydraulics",
      date: "5th May 2024",
      location: "Online"
    }
  ];

  return (
    <>
      <SEO 
        title="Member Dashboard - The Ferguson Club"
        description="Your personal Ferguson Club member dashboard with quick access to resources, events, and community features."
      />
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        <MembersNav />

        <div className="container mx-auto px-4 py-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">
              Welcome back, {memberData.name}
            </h1>
            <p className="text-gray-600">
              Member since {memberData.memberSince} • {memberData.memberNumber}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-8">
              {/* Membership Status */}
              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Membership Status</CardTitle>
                    <Badge className="bg-green-500">Active</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Membership Type</p>
                      <p className="text-lg font-semibold">{memberData.membershipType}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Renewal Date</p>
                      <p className="text-lg font-semibold">{memberData.expiryDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Registered Tractors</p>
                      <p className="text-lg font-semibold">{memberData.tractors}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Events Attended</p>
                      <p className="text-lg font-semibold">{memberData.eventsAttended}</p>
                    </div>
                  </div>
                  <Button className="mt-6 bg-[#ad1018] hover:bg-[#8d0d14] text-white">
                    Renew Membership
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div>
                <h2 className="text-2xl font-serif font-bold mb-4">Quick Actions</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {quickActions.map((action, index) => (
                    <Link key={index} href={action.href}>
                      <Card className="border-2 hover:border-[#ad1018] transition-colors cursor-pointer h-full">
                        <CardHeader>
                          <div className="flex items-start gap-4">
                            <div className={`h-10 w-10 ${action.color} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                              {action.icon}
                            </div>
                            <div>
                              <CardTitle className="text-lg mb-1">{action.title}</CardTitle>
                              <CardDescription className="text-sm">{action.description}</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start gap-3 pb-4 border-b last:border-0 last:pb-0">
                        <div className="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 flex-shrink-0">
                          {activity.icon}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{activity.title}</p>
                          <p className="text-xs text-gray-600 mt-1">{activity.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Upcoming Events */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Upcoming Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="pb-4 border-b last:border-0 last:pb-0">
                        <p className="font-semibold text-sm mb-1">{event.title}</p>
                        <p className="text-xs text-gray-600">{event.date}</p>
                        <p className="text-xs text-gray-500">{event.location}</p>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4" asChild>
                    <Link href="/events">View All Events</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Stats Card */}
              <Card className="border-2 bg-gradient-to-br from-[#ad1018] to-[#8d0d14] text-white">
                <CardHeader>
                  <CardTitle>Member Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm opacity-90">Community Rank</span>
                      <Badge className="bg-white/20">Top 25%</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm opacity-90">Forum Posts</span>
                      <span className="font-bold">47</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm opacity-90">Years Member</span>
                      <span className="font-bold">4</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Support Card */}
              <Card className="border-2 border-[#ad1018]/20 bg-[#ad1018]/5">
                <CardHeader>
                  <CardTitle className="text-lg">Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Our member support team is here to assist you with any questions.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}