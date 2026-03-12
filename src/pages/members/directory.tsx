import { SEO } from "@/components/SEO";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { MembersNav } from "@/components/Layout/MembersNav";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, Tractor, Wrench, MapPin, Calendar } from "lucide-react";
import { useState } from "react";

export default function MemberDirectory() {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock member data - in production this would come from a database
  const members = [
    {
      id: "1",
      name: "John Smith",
      location: "Yorkshire",
      joinDate: "2020",
      tractorCount: 3,
      implementCount: 5,
      avatar: "",
      bio: "Passionate about Ferguson TE20s and restoration projects.",
      publicProfile: true
    },
    {
      id: "2",
      name: "Sarah Johnson",
      location: "Lancashire",
      joinDate: "2018",
      tractorCount: 2,
      implementCount: 8,
      avatar: "",
      bio: "Collector of vintage Ferguson implements and literature.",
      publicProfile: true
    },
    {
      id: "3",
      name: "David Williams",
      location: "Cornwall",
      joinDate: "2015",
      tractorCount: 5,
      implementCount: 12,
      avatar: "",
      bio: "Restoration specialist with 30 years experience.",
      publicProfile: true
    },
    {
      id: "4",
      name: "Michael Brown",
      location: "Scotland",
      joinDate: "2019",
      tractorCount: 1,
      implementCount: 3,
      avatar: "",
      bio: "New to the Ferguson family, learning restoration.",
      publicProfile: true
    },
    {
      id: "5",
      name: "Emma Davies",
      location: "Wales",
      joinDate: "2017",
      tractorCount: 4,
      implementCount: 10,
      avatar: "",
      bio: "Ferguson enthusiast and regular show attendee.",
      publicProfile: true
    },
    {
      id: "6",
      name: "Robert Taylor",
      location: "Somerset",
      joinDate: "2016",
      tractorCount: 2,
      implementCount: 6,
      avatar: "",
      bio: "Specialist in Ferguson hydraulic systems.",
      publicProfile: true
    }
  ];

  const filteredMembers = members.filter(member =>
    member.publicProfile && 
    (member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     member.location.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      <SEO 
        title="Member Directory - Ferguson Club"
        description="Connect with Ferguson Club members and their tractor collections"
      />
      
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <MembersNav />

        {/* Page Header */}
        <section className="py-12 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Member <span className="text-[#ad1018]">Directory</span>
            </h1>
            <p className="text-lg text-gray-600">
              Connect with fellow Ferguson enthusiasts from around the UK and beyond
            </p>
          </div>
        </section>

        {/* Search and Stats */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#ad1018] rounded-full"></div>
                <span>{filteredMembers.length} Members</span>
              </div>
              <div className="flex items-center gap-2">
                <Tractor className="w-4 h-4 text-[#ad1018]" />
                <span>{members.reduce((acc, m) => acc + m.tractorCount, 0)} Tractors</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#ad1018]" />
                <span>{members.reduce((acc, m) => acc + m.implementCount, 0)} Implements</span>
              </div>
            </div>
            
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Member Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member) => (
              <Link key={member.id} href={`/members/${member.id}`}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <Avatar className="w-16 h-16 border-2 border-[#ad1018]">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback className="bg-[#ad1018] text-white text-lg">
                          {member.name.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-gray-900 mb-1 truncate">
                          {member.name}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                          <MapPin className="w-4 h-4" />
                          <span>{member.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>Member since {member.joinDate}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {member.bio}
                    </p>

                    <div className="flex gap-2">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Tractor className="w-3 h-3" />
                        {member.tractorCount} {member.tractorCount === 1 ? "Tractor" : "Tractors"}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Wrench className="w-3 h-3" />
                        {member.implementCount} {member.implementCount === 1 ? "Implement" : "Implements"}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredMembers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No members found matching your search.</p>
            </div>
          )}
        </section>

        <Footer />
      </div>
    </>
  );
}