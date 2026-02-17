import { SEO } from "@/components/SEO";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { MembersNav } from "@/components/Layout/MembersNav";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Users, Calendar, MapPin, Info, BookOpen, Award } from "lucide-react";

export default function Ploughing() {
  return (
    <>
      <SEO 
        title="Ploughing - Ferguson Club"
        description="Ferguson Club ploughing information, competitions, and match ploughing guidelines"
      />
      
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <MembersNav />

        {/* Page Header */}
        <section className="py-12 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-3">
              <Trophy className="h-10 w-10 text-[#8B1538]" />
              <h1 className="text-4xl font-bold text-gray-900">
                Ferguson <span className="text-[#8B1538]">Ploughing</span>
              </h1>
            </div>
            <p className="text-lg text-gray-600">
              Celebrating the heritage of match ploughing with vintage Ferguson tractors
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full max-w-3xl grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="classes">Classes</TabsTrigger>
              <TabsTrigger value="rules">Rules</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5 text-[#8B1538]" />
                    About Ferguson Ploughing
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Ferguson Club actively promotes and supports ploughing with vintage Ferguson tractors. Match ploughing is a traditional agricultural skill that tests both the operator's ability and the tractor's performance in creating perfectly straight, evenly spaced furrows.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Ferguson tractors, with their revolutionary three-point linkage system designed by Harry Ferguson, revolutionized ploughing and made it safer and more efficient. Today, club members continue this heritage through competitive ploughing matches across the UK.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg text-gray-900 mb-3 flex items-center gap-2">
                        <Users className="h-5 w-5 text-[#8B1538]" />
                        Who Can Compete?
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-[#8B1538] font-bold">•</span>
                          <span>Ferguson Club members in good standing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#8B1538] font-bold">•</span>
                          <span>Competitors using eligible Ferguson tractors</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#8B1538] font-bold">•</span>
                          <span>Both experienced ploughmen and novices welcome</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#8B1538] font-bold">•</span>
                          <span>Multiple age and skill categories available</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg text-gray-900 mb-3 flex items-center gap-2">
                        <Trophy className="h-5 w-5 text-[#8B1538]" />
                        Competition Format
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-[#8B1538] font-bold">•</span>
                          <span>Individual plots marked out for each competitor</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#8B1538] font-bold">•</span>
                          <span>Timed ploughing with quality judging</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#8B1538] font-bold">•</span>
                          <span>Points awarded for straightness, depth, and finish</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#8B1538] font-bold">•</span>
                          <span>Championship points awarded throughout season</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Alert className="bg-[#8B1538]/5 border-[#8B1538]">
                <Info className="h-4 w-4 text-[#8B1538]" />
                <AlertDescription className="text-gray-700">
                  <strong>New to Ploughing?</strong> The Ferguson Club welcomes beginners! Many experienced members are happy to provide guidance and mentoring. Contact your local area representative to find training opportunities.
                </AlertDescription>
              </Alert>
            </TabsContent>

            {/* Classes Tab */}
            <TabsContent value="classes" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Vintage Class</CardTitle>
                    <CardDescription>Classic Ferguson models in original or restored condition</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900 mb-2">Eligible Tractors:</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Ferguson TE20</Badge>
                        <Badge variant="outline">Ferguson TEA20</Badge>
                        <Badge variant="outline">Ferguson TEF20</Badge>
                        <Badge variant="outline">Ferguson TO20</Badge>
                        <Badge variant="outline">Ferguson TO30</Badge>
                      </div>
                    </div>
                    <div className="pt-3 border-t">
                      <p className="text-sm text-gray-600">
                        Tractors must be in period-correct specification with original or period Ferguson implements.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Classic Class</CardTitle>
                    <CardDescription>Later Ferguson and early Massey Ferguson models</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900 mb-2">Eligible Tractors:</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Ferguson TO35</Badge>
                        <Badge variant="outline">MF35</Badge>
                        <Badge variant="outline">MF65</Badge>
                        <Badge variant="outline">MF135</Badge>
                        <Badge variant="outline">MF165</Badge>
                      </div>
                    </div>
                    <div className="pt-3 border-t">
                      <p className="text-sm text-gray-600">
                        Tractors from the Ferguson heritage line, including early Massey Ferguson models.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Novice Class</CardTitle>
                    <CardDescription>For competitors new to match ploughing</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900 mb-2">Requirements:</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <span className="text-[#8B1538]">•</span>
                          <span>Open to first-time competitors or those with limited experience</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#8B1538]">•</span>
                          <span>Any eligible Ferguson tractor permitted</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#8B1538]">•</span>
                          <span>Longer time allowance and simplified judging criteria</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Youth Class</CardTitle>
                    <CardDescription>Encouraging the next generation of ploughmen</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900 mb-2">Requirements:</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <span className="text-[#8B1538]">•</span>
                          <span>Competitors aged 14-25 years</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#8B1538]">•</span>
                          <span>Parental consent required for under 18s</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#8B1538]">•</span>
                          <span>Smaller plot sizes with adapted judging</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Rules Tab */}
            <TabsContent value="rules" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-[#8B1538]" />
                    Competition Rules
                  </CardTitle>
                  <CardDescription>Standard regulations for Ferguson Club ploughing matches</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-3">Equipment Requirements</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <Badge className="bg-[#8B1538] shrink-0 mt-1">1</Badge>
                        <span>Tractors must be Ferguson models or Ferguson heritage tractors as defined by class rules</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge className="bg-[#8B1538] shrink-0 mt-1">2</Badge>
                        <span>Ploughs must be period-correct Ferguson or compatible two-furrow or single-furrow implements</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge className="bg-[#8B1538] shrink-0 mt-1">3</Badge>
                        <span>All safety equipment must be fitted and functional (PTO guards, seat belts if fitted)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge className="bg-[#8B1538] shrink-0 mt-1">4</Badge>
                        <span>Tractors must pass pre-match safety inspection</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-semibold text-lg text-gray-900 mb-3">Match Procedure</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <Badge className="bg-[#8B1538] shrink-0 mt-1">1</Badge>
                        <span>Competitors are allocated plots by random draw before the match</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge className="bg-[#8B1538] shrink-0 mt-1">2</Badge>
                        <span>Each competitor ploughs their allocated plot within the time limit (typically 2-3 hours)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge className="bg-[#8B1538] shrink-0 mt-1">3</Badge>
                        <span>Judges assess work based on straightness, depth consistency, finish, and covering</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge className="bg-[#8B1538] shrink-0 mt-1">4</Badge>
                        <span>Penalty points deducted for faults, with lowest score winning</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-semibold text-lg text-gray-900 mb-3">Judging Criteria</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Opening and Finish</h4>
                        <p className="text-sm text-gray-600">Quality of the first and last furrows, ridge formation</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Straightness</h4>
                        <p className="text-sm text-gray-600">Alignment of furrows, crown consistency</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Depth & Width</h4>
                        <p className="text-sm text-gray-600">Consistent depth throughout, uniform furrow width</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Ins & Outs</h4>
                        <p className="text-sm text-gray-600">Tidiness of headland turns, furrow connections</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">General Appearance</h4>
                        <p className="text-sm text-gray-600">Overall quality, covering, finish</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Covering</h4>
                        <p className="text-sm text-gray-600">Complete burial of trash and vegetation</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Alert className="bg-blue-50 border-blue-200">
                <Info className="h-4 w-4 text-blue-600" />
                <AlertDescription className="text-gray-700">
                  <strong>Full Rule Book:</strong> Complete competition rules and scoring guidelines are available in the Resources section. Contact the Ploughing Secretary for clarification on any rules.
                </AlertDescription>
              </Alert>
            </TabsContent>

            {/* Events Tab */}
            <TabsContent value="events" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-[#8B1538]" />
                    Annual Ploughing Calendar
                  </CardTitle>
                  <CardDescription>Ferguson Club ploughing matches throughout the year</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-[#8B1538] pl-4 py-2">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">Spring Ploughing Match</h3>
                        <Badge>March-April</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Season opener with all classes competing</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          Location varies by region
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          40-60 competitors
                        </span>
                      </div>
                    </div>

                    <div className="border-l-4 border-[#8B1538] pl-4 py-2">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">Regional Championships</h3>
                        <Badge>May-July</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Multiple regional events across the UK</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          Various locations
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          Championship points awarded
                        </span>
                      </div>
                    </div>

                    <div className="border-l-4 border-[#8B1538] pl-4 py-2">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">National Ferguson Ploughing Championship</h3>
                        <Badge className="bg-[#8B1538]">September</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">The premier event of the Ferguson ploughing calendar</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          Hosted by different regions
                        </span>
                        <span className="flex items-center gap-1">
                          <Award className="h-4 w-4" />
                          National Champion crowned
                        </span>
                      </div>
                    </div>

                    <div className="border-l-4 border-[#8B1538] pl-4 py-2">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">Autumn Match Series</h3>
                        <Badge>October-November</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Final matches of the season with overall awards</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          Regional venues
                        </span>
                        <span className="flex items-center gap-1">
                          <Trophy className="h-4 w-4" />
                          Season championship decided
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">How to Enter</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-gray-700">
                    <p>To compete in Ferguson Club ploughing matches:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B1538] font-bold">1.</span>
                        <span>Ensure current Ferguson Club membership</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B1538] font-bold">2.</span>
                        <span>Register for events via the Events page</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B1538] font-bold">3.</span>
                        <span>Entry fees payable on registration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B1538] font-bold">4.</span>
                        <span>Receive plot allocation and timing details</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-gray-700">
                    <div>
                      <p className="font-semibold text-gray-900">Ploughing Secretary</p>
                      <p className="text-gray-600">For match entries and queries</p>
                      <p className="text-[#8B1538]">ploughing@fergusonclub.com</p>
                    </div>
                    <div className="pt-3 border-t">
                      <p className="font-semibold text-gray-900">Chief Steward</p>
                      <p className="text-gray-600">For rules and technical queries</p>
                      <p className="text-[#8B1538]">steward@fergusonclub.com</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <Footer />
      </div>
    </>
  );
}