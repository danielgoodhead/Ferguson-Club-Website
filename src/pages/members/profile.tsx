import { SEO } from "@/components/SEO";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Mail, Phone, MapPin, Calendar, Tractor, Wrench, Plus, Edit, Trash2, Eye, EyeOff, Save } from "lucide-react";
import { useState } from "react";

export default function MyProfile() {
  const [isPublicProfile, setIsPublicProfile] = useState(true);
  const [isAddTractorOpen, setIsAddTractorOpen] = useState(false);
  const [isAddImplementOpen, setIsAddImplementOpen] = useState(false);

  // Mock user data - in production this would come from database
  const [profile, setProfile] = useState({
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "07700 900123",
    location: "Yorkshire",
    postcode: "YO1",
    bio: "Passionate about Ferguson TE20s and restoration projects. I've been restoring vintage tractors for over 15 years.",
    joinDate: "2020",
    membershipNumber: "FC2020-1234",
    avatar: ""
  });

  const [tractors, setTractors] = useState([
    {
      id: "1",
      model: "Ferguson TE20",
      year: "1948",
      serialNumber: "TE20/123456",
      color: "Grey",
      condition: "Fully Restored",
      description: "Complete ground-up restoration finished in 2019.",
      image: ""
    },
    {
      id: "2",
      model: "Ferguson TEF20",
      year: "1954",
      serialNumber: "TEF20/789012",
      color: "Grey & Gold",
      condition: "Original",
      description: "All original tractor in working condition.",
      image: ""
    }
  ]);

  const [userImplements, setUserImplements] = useState([
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
    }
  ]);

  return (
    <>
      <SEO 
        title="My Profile - Ferguson Club"
        description="Manage your Ferguson Club profile, tractors, and implements"
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

        {/* Page Header */}
        <section className="py-12 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              My <span className="text-[#8B1538]">Profile</span>
            </h1>
            <p className="text-lg text-gray-600">
              Manage your profile information, tractors, and implements
            </p>
          </div>
        </section>

        {/* Profile Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full max-w-2xl grid-cols-3 mb-8">
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="tractors">My Tractors ({tractors.length})</TabsTrigger>
              <TabsTrigger value="implements">My Implements ({userImplements.length})</TabsTrigger>
            </TabsList>

            {/* Personal Information Tab */}
            <TabsContent value="personal">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Profile Card */}
                <Card className="lg:col-span-1">
                  <CardHeader>
                    <CardTitle>Profile Picture</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    <Avatar className="w-32 h-32 mb-4 border-4 border-[#8B1538]">
                      <AvatarImage src={profile.avatar} alt={profile.name} />
                      <AvatarFallback className="bg-[#8B1538] text-white text-4xl">
                        {profile.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="sm">
                      Upload Photo
                    </Button>
                    <div className="mt-6 text-center">
                      <Badge className="bg-[#8B1538]">Active Member</Badge>
                      <p className="text-sm text-gray-500 mt-2">Member since {profile.joinDate}</p>
                      <p className="text-xs text-gray-400 font-mono mt-1">{profile.membershipNumber}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Personal Details Form */}
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Personal Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" value={profile.name} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" value={profile.email} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" value={profile.phone} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" value={profile.location} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="postcode">Postcode Area</Label>
                      <Input id="postcode" value={profile.postcode} maxLength={4} placeholder="e.g., YO1" />
                      <p className="text-xs text-gray-500">Used to connect you with local members and area representatives</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea 
                        id="bio" 
                        value={profile.bio}
                        rows={4}
                        placeholder="Tell other members about your Ferguson passion..."
                      />
                      <p className="text-xs text-gray-500">This will be visible on your public profile</p>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        {isPublicProfile ? <Eye className="w-5 h-5 text-[#8B1538]" /> : <EyeOff className="w-5 h-5 text-gray-400" />}
                        <div>
                          <p className="font-medium">Public Profile</p>
                          <p className="text-sm text-gray-600">Show my profile in the Member Directory</p>
                        </div>
                      </div>
                      <Switch 
                        checked={isPublicProfile} 
                        onCheckedChange={setIsPublicProfile}
                      />
                    </div>

                    <div className="flex justify-end pt-4">
                      <Button className="bg-[#8B1538] hover:bg-[#6B0E28]">
                        <Save className="w-4 h-4 mr-2" />
                        Save Changes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Tractors Tab */}
            <TabsContent value="tractors">
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">My Tractors</h2>
                <Dialog open={isAddTractorOpen} onOpenChange={setIsAddTractorOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-[#8B1538] hover:bg-[#6B0E28]">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Tractor
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Add New Tractor</DialogTitle>
                      <DialogDescription>
                        Add a Ferguson tractor to your collection
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="tractor-model">Model</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select model" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="te20">Ferguson TE20</SelectItem>
                              <SelectItem value="tea20">Ferguson TEA20</SelectItem>
                              <SelectItem value="tef20">Ferguson TEF20</SelectItem>
                              <SelectItem value="to20">Ferguson TO20</SelectItem>
                              <SelectItem value="to30">Ferguson TO30</SelectItem>
                              <SelectItem value="to35">Ferguson TO35</SelectItem>
                              <SelectItem value="mf35">Massey Ferguson 35</SelectItem>
                              <SelectItem value="mf65">Massey Ferguson 65</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="tractor-year">Year</Label>
                          <Input id="tractor-year" placeholder="e.g., 1948" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="serial-number">Serial Number</Label>
                        <Input id="serial-number" placeholder="e.g., TE20/123456" />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="color">Color</Label>
                          <Input id="color" placeholder="e.g., Grey, Grey & Gold" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="condition">Condition</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select condition" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="fully-restored">Fully Restored</SelectItem>
                              <SelectItem value="original">Original</SelectItem>
                              <SelectItem value="work-in-progress">Work in Progress</SelectItem>
                              <SelectItem value="for-restoration">For Restoration</SelectItem>
                              <SelectItem value="parts">For Parts</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="tractor-description">Description</Label>
                        <Textarea 
                          id="tractor-description" 
                          rows={3}
                          placeholder="Tell us about this tractor..."
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="tractor-image">Photos</Label>
                        <Input id="tractor-image" type="file" accept="image/*" multiple />
                        <p className="text-xs text-gray-500">Upload up to 5 photos</p>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setIsAddTractorOpen(false)}>
                        Cancel
                      </Button>
                      <Button className="bg-[#8B1538] hover:bg-[#6B0E28]">
                        Add Tractor
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {tractors.map((tractor) => (
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
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                            <Trash2 className="w-4 h-4" />
                          </Button>
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

              {tractors.length === 0 && (
                <Card className="text-center py-12">
                  <CardContent>
                    <Tractor className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 mb-4">You haven't added any tractors yet</p>
                    <Button onClick={() => setIsAddTractorOpen(true)} className="bg-[#8B1538] hover:bg-[#6B0E28]">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Your First Tractor
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Implements Tab */}
            <TabsContent value="implements">
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">My Implements</h2>
                <Dialog open={isAddImplementOpen} onOpenChange={setIsAddImplementOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-[#8B1538] hover:bg-[#6B0E28]">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Implement
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Add New Implement</DialogTitle>
                      <DialogDescription>
                        Add a Ferguson implement to your collection
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="implement-name">Implement Name</Label>
                        <Input id="implement-name" placeholder="e.g., Ferguson 2-Furrow Plough" />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="implement-type">Type</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="plough">Plough</SelectItem>
                              <SelectItem value="harrow">Harrow</SelectItem>
                              <SelectItem value="cultivator">Cultivator</SelectItem>
                              <SelectItem value="mower">Mower</SelectItem>
                              <SelectItem value="baler">Baler</SelectItem>
                              <SelectItem value="spreader">Spreader</SelectItem>
                              <SelectItem value="transport">Transport Box</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="implement-year">Year/Era</Label>
                          <Input id="implement-year" placeholder="e.g., 1950s" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="implement-condition">Condition</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select condition" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="excellent">Excellent</SelectItem>
                            <SelectItem value="very-good">Very Good</SelectItem>
                            <SelectItem value="good">Good</SelectItem>
                            <SelectItem value="fair">Fair</SelectItem>
                            <SelectItem value="restoration">Needs Restoration</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="implement-description">Description (Optional)</Label>
                        <Textarea 
                          id="implement-description" 
                          rows={3}
                          placeholder="Any additional details..."
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="implement-image">Photos</Label>
                        <Input id="implement-image" type="file" accept="image/*" multiple />
                        <p className="text-xs text-gray-500">Upload up to 3 photos</p>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setIsAddImplementOpen(false)}>
                        Cancel
                      </Button>
                      <Button className="bg-[#8B1538] hover:bg-[#6B0E28]">
                        Add Implement
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {userImplements.map((implement) => (
                  <Card key={implement.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-bold text-lg">{implement.name}</h3>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
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

              {userImplements.length === 0 && (
                <Card className="text-center py-12">
                  <CardContent>
                    <Wrench className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 mb-4">You haven't added any implements yet</p>
                    <Button onClick={() => setIsAddImplementOpen(true)} className="bg-[#8B1538] hover:bg-[#6B0E28]">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Your First Implement
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </section>

        <Footer />
      </div>
    </>
  );
}