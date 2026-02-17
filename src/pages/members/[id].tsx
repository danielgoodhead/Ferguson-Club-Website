import { SEO } from "@/components/SEO";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/router";
import { ArrowLeft, MapPin, Calendar, Mail, Phone, Tractor, Wrench, Award } from "lucide-react";

export default function MemberProfile() {
  const router = useRouter();
  const { id } = router.query;

  // Mock member data - in production this would come from a database
  const member = {
    id: "1",
    name: "John Smith",
    location: "Yorkshire",
    joinDate: "2020",
    avatar: "",
    bio: "Passionate about Ferguson TE20s and restoration projects. I've been restoring vintage tractors for over 15 years and love sharing my knowledge with fellow enthusiasts. My garage is always open for club members who need help with their projects.",
    email: "john.smith@email.com",
    phone: "07700 900123",
    tractors: [
      {
        id: "1",
        model: "Ferguson TE20",
        year: "1948",
        serialNumber: "TE20/123456",
        color: "Grey",
        condition: "Fully Restored",
        description: "Complete ground-up restoration finished in 2019. Original engine rebuilt, new wiring loom, resprayed in correct grey.",
        image: ""
      },
      {
        id: "2",
        model: "Ferguson TEF20",
        year: "1954",
        serialNumber: "TEF20/789012",
        color: "Grey & Gold",
        condition: "Original",
        description: "All original tractor in working condition. Used regularly on the farm. Minimal restoration needed.",
        image: ""
      },
      {
        id: "3",
        model: "Massey Ferguson 35",
        year: "1960",
        serialNumber: "MF35/345678",
        color: "Red & Grey",
        condition: "Work in Progress",
        description: "Currently undergoing restoration. Engine rebuilt, body work in progress. Estimated completion 2024.",
        image: ""
      }
    ],
    implements: [
      {
        id: "1",
        name: "Ferguson 2-Furrow Plough",
        type: "Plough",
        condition: "Excellent",
        year: "1950s"
      },
      {
        id: "2",
        name: "Ferguson Disc Harrow",
        type: "Harrow",
        condition: "Good",
        year: "1950s"
      },
      {
        id: "3",
        name: "Ferguson Cultivator",
        type: "Cultivator",
        condition: "Very Good",
        year: "1960s"
      },
      {
        id: "4",
        name: "Ferguson Mower",
        type: "Mower",
        condition: "Fair",
        year: "1950s"
      },
      {
        id: "5",
        name: "Ferguson Transport Box",
        type: "Transport",
        condition: "Excellent",
        year: "1950s"
      }
    ]
  };

  return (
    <>
      <SEO 
        title={`${member.name} - Member Profile - Ferguson Club`}
        description={`View ${member.name}'s Ferguson tractor collection and profile`}
      />
      
      <div className="min-h-screen flex flex-col bg-white">
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
              <Link href="/shop" className="text-gray-600 hover:text-[#8B1538] whitespace-nowrap transition-colors">
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

        {/* Back Button */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Link href="/members/directory">
            <Button variant="ghost" className="group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Directory
            </Button>
          </Link>
        </section>

        {/* Member Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card>
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <Avatar className="w-32 h-32 border-4 border-[#8B1538]">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="bg-[#8B1538] text-white text-4xl">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h1>
                      <div className="flex flex-wrap gap-4 text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{member.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>Member since {member.joinDate}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Badge className="bg-[#8B1538] hover:bg-[#6B0E28]">
                        <Award className="w-3 h-3 mr-1" />
                        Active Member
                      </Badge>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{member.bio}</p>

                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail className="w-4 h-4" />
                      <a href={`mailto:${member.email}`} className="hover:text-[#8B1538]">{member.email}</a>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>{member.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tractors and Implements */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <Tabs defaultValue="tractors" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="tractors" className="flex items-center gap-2">
                <Tractor className="w-4 h-4" />
                Tractors ({member.tractors.length})
              </TabsTrigger>
              <TabsTrigger value="implements" className="flex items-center gap-2">
                <Wrench className="w-4 h-4" />
                Implements ({member.implements.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="tractors" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {member.tractors.map((tractor) => (
                  <Card key={tractor.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl mb-2">{tractor.model}</CardTitle>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline">{tractor.year}</Badge>
                            <Badge variant="outline">{tractor.color}</Badge>
                            <Badge className={
                              tractor.condition === "Fully Restored" ? "bg-green-500" :
                              tractor.condition === "Work in Progress" ? "bg-yellow-500" :
                              "bg-blue-500"
                            }>
                              {tractor.condition}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <span className="text-sm text-gray-500">Serial Number:</span>
                          <p className="font-mono text-sm">{tractor.serialNumber}</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Description:</span>
                          <p className="text-sm text-gray-700 mt-1">{tractor.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="implements" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {member.implements.map((implement) => (
                  <Card key={implement.id}>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-2">{implement.name}</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Type:</span>
                          <Badge variant="outline">{implement.type}</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Year:</span>
                          <span className="text-sm font-medium">{implement.year}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Condition:</span>
                          <Badge className={
                            implement.condition === "Excellent" ? "bg-green-500" :
                            implement.condition === "Very Good" ? "bg-blue-500" :
                            implement.condition === "Good" ? "bg-yellow-500" :
                            "bg-orange-500"
                          }>
                            {implement.condition}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <Footer />
      </div>
    </>
  );
}