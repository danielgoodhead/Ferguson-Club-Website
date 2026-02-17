import { SEO } from "@/components/SEO";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Search, FileText, AlertCircle, Calendar, Info } from "lucide-react";

export default function DVLARegistrations() {
  return (
    <>
      <SEO 
        title="DVLA Registrations - Ferguson Club"
        description="Complete guide to DVLA registration numbers for Ferguson tractors, including age-related and cherished number information"
      />
      
      <div className="min-h-screen flex flex-col">
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
              <Link href="/members/registrations" className="text-[#8B1538] font-semibold whitespace-nowrap border-b-2 border-[#8B1538]">
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
        <section className="bg-white py-12 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              DVLA <span className="text-[#8B1538]">Registrations</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Complete guide to registration numbers for Ferguson tractors, including age-related and cherished number information
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="flex-1 bg-gray-50 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Important Notice */}
            <Alert className="mb-8 border-[#8B1538] bg-red-50">
              <AlertCircle className="h-5 w-5 text-[#8B1538]" />
              <AlertDescription className="text-gray-700">
                <strong>Important:</strong> This information is provided as a general guide. Always verify registration details with DVLA directly for official purposes.
              </AlertDescription>
            </Alert>

            <Tabs defaultValue="age-related" className="space-y-8">
              <TabsList className="grid w-full grid-cols-3 bg-white border border-gray-200">
                <TabsTrigger value="age-related" className="data-[state=active]:bg-[#8B1538] data-[state=active]:text-white">
                  Age-Related Numbers
                </TabsTrigger>
                <TabsTrigger value="cherished" className="data-[state=active]:bg-[#8B1538] data-[state=active]:text-white">
                  Cherished Numbers
                </TabsTrigger>
                <TabsTrigger value="resources" className="data-[state=active]:bg-[#8B1538] data-[state=active]:text-white">
                  Useful Resources
                </TabsTrigger>
              </TabsList>

              {/* Age-Related Numbers Tab */}
              <TabsContent value="age-related" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-[#8B1538]" />
                      Age-Related Registration Numbers
                    </CardTitle>
                    <CardDescription>
                      Understanding the registration number system for Ferguson tractors
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="prose prose-gray max-w-none">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">What are Age-Related Numbers?</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Age-related registration numbers are issued by DVLA for vehicles that don't have a registration document or where the original registration has been lost. These numbers reflect the approximate age of the vehicle and follow a specific format.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Format and Structure</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Age-related numbers typically consist of:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                        <li>A letter prefix indicating the year (or year range)</li>
                        <li>A sequence of numbers</li>
                        <li>A three-letter suffix representing the registration area</li>
                      </ul>

                      <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Ferguson Tractor Years</h3>
                      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">TE20 (Grey Ferguson)</h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li><strong>UK Production:</strong> 1946-1956</li>
                              <li><strong>Typical Prefix:</strong> A-P series</li>
                              <li><strong>Example:</strong> JFC 123</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">TO20/TO30/TO35</h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li><strong>Production:</strong> 1948-1960</li>
                              <li><strong>Typical Prefix:</strong> Various based on import year</li>
                              <li><strong>Note:</strong> American-built models</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">TEA/TEF20</h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li><strong>Production:</strong> 1951-1958</li>
                              <li><strong>Typical Prefix:</strong> K-V series</li>
                              <li><strong>Features:</strong> Petrol/TVO variants</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">MF35/MF65</h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li><strong>Production:</strong> 1957-1964</li>
                              <li><strong>Typical Prefix:</strong> R onwards</li>
                              <li><strong>Note:</strong> Massey Ferguson era</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Year Letter Guide</h3>
                      <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div><strong>A:</strong> 1946-1948</div>
                          <div><strong>B:</strong> 1948-1949</div>
                          <div><strong>C:</strong> 1949-1950</div>
                          <div><strong>D:</strong> 1950-1951</div>
                          <div><strong>E:</strong> 1951-1952</div>
                          <div><strong>F:</strong> 1952-1953</div>
                          <div><strong>G:</strong> 1953-1954</div>
                          <div><strong>H:</strong> 1954-1955</div>
                          <div><strong>J:</strong> 1955-1956</div>
                          <div><strong>K:</strong> 1956-1957</div>
                          <div><strong>L:</strong> 1957-1958</div>
                          <div><strong>M:</strong> 1958-1959</div>
                          <div><strong>N:</strong> 1959-1960</div>
                          <div><strong>P:</strong> 1960-1961</div>
                          <div><strong>R:</strong> 1961-1962</div>
                          <div><strong>S:</strong> 1962-1963</div>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mt-6">
                        <div className="flex gap-3">
                          <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-blue-900 mb-2">Important Notes</h4>
                            <ul className="space-y-2 text-sm text-blue-800">
                              <li>Letters I, O, Q, U, and Z were not used to avoid confusion</li>
                              <li>The letter reflects registration year, not necessarily manufacture year</li>
                              <li>Import tractors may have later registration than manufacture date</li>
                              <li>Some tractors retained their original registration if properly documented</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Cherished Numbers Tab */}
              <TabsContent value="cherished" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-[#8B1538]" />
                      Cherished and Personalized Numbers
                    </CardTitle>
                    <CardDescription>
                      Information about transferring and retaining registration numbers
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="prose prose-gray max-w-none">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">What are Cherished Numbers?</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Cherished or personalized registration numbers are those that have special significance to the owner. Many Ferguson owners choose to retain original registrations or acquire period-appropriate numbers for their tractors.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Transferring a Registration</h3>
                      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-4">Steps to Transfer:</h4>
                        <ol className="list-decimal list-inside space-y-3 text-gray-700">
                          <li>Both vehicles must be registered with DVLA</li>
                          <li>Both vehicles must be available for inspection if required</li>
                          <li>The registration must not make the vehicle appear younger than it is</li>
                          <li>Complete form V317 (Application to transfer or retain a vehicle registration number)</li>
                          <li>Pay the transfer fee (currently £80)</li>
                          <li>Send to DVLA with both V5C documents</li>
                        </ol>
                      </div>

                      <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Retaining a Number</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        If you want to keep a registration number for future use, you can apply to retain it on a certificate (V778). This allows you to:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                        <li>Hold the number for up to 10 years</li>
                        <li>Transfer it to another vehicle at any time</li>
                        <li>Sell or gift the number to someone else</li>
                      </ul>

                      <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 mt-6">
                        <h4 className="font-semibold text-amber-900 mb-3">Important Rules</h4>
                        <ul className="space-y-2 text-sm text-amber-800">
                          <li><strong>Age Rule:</strong> You cannot use a registration that makes your tractor appear younger than it is</li>
                          <li><strong>MOT/Tax:</strong> Historic vehicles (over 40 years) are MOT and tax exempt</li>
                          <li><strong>Documentation:</strong> Keep all original paperwork safe</li>
                          <li><strong>Original Numbers:</strong> If you have the original registration, consider keeping it with the tractor</li>
                        </ul>
                      </div>

                      <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Popular Ferguson Number Styles</h3>
                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <h4 className="font-semibold text-gray-900 mb-2">Dateless Numbers</h4>
                          <p className="text-sm text-gray-700 mb-3">Examples: FC 123, TEF 20, MF 35</p>
                          <p className="text-xs text-gray-600">These are highly sought after and can be expensive</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <h4 className="font-semibold text-gray-900 mb-2">Period Numbers</h4>
                          <p className="text-sm text-gray-700 mb-3">Examples: JFC 123, KTE 456</p>
                          <p className="text-xs text-gray-600">Numbers from the era of manufacture</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <h4 className="font-semibold text-gray-900 mb-2">Reversed Numbers</h4>
                          <p className="text-sm text-gray-700 mb-3">Examples: 20 TEF, 35 MF</p>
                          <p className="text-xs text-gray-600">Number after the letters (older style)</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <h4 className="font-semibold text-gray-900 mb-2">Three Letter Numbers</h4>
                          <p className="text-sm text-gray-700 mb-3">Examples: 123 ABC, 456 DEF</p>
                          <p className="text-xs text-gray-600">Common format for the era</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Resources Tab */}
              <TabsContent value="resources" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Search className="h-5 w-5 text-[#8B1538]" />
                      Useful Resources
                    </CardTitle>
                    <CardDescription>
                      Links and information for registration research
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="prose prose-gray max-w-none">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Official DVLA Resources</h3>
                      <div className="space-y-4">
                        <div className="bg-white p-5 rounded-lg border border-gray-200 hover:border-[#8B1538] transition-colors">
                          <h4 className="font-semibold text-gray-900 mb-2">DVLA Personalised Registrations</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Search, buy, and transfer personalized registration numbers
                          </p>
                          <a 
                            href="https://www.gov.uk/personalised-vehicle-registration-numbers" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#8B1538] hover:underline text-sm font-medium"
                          >
                            Visit DVLA Personalised Registrations →
                          </a>
                        </div>

                        <div className="bg-white p-5 rounded-lg border border-gray-200 hover:border-[#8B1538] transition-colors">
                          <h4 className="font-semibold text-gray-900 mb-2">Vehicle Registration Certificate (V5C)</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Information about the V5C logbook and how to update vehicle details
                          </p>
                          <a 
                            href="https://www.gov.uk/vehicle-registration-certificate-v5c-logbook" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#8B1538] hover:underline text-sm font-medium"
                          >
                            Learn about V5C →
                          </a>
                        </div>

                        <div className="bg-white p-5 rounded-lg border border-gray-200 hover:border-[#8B1538] transition-colors">
                          <h4 className="font-semibold text-gray-900 mb-2">Historic Vehicles Tax Exemption</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Information about tax exemption for vehicles over 40 years old
                          </p>
                          <a 
                            href="https://www.gov.uk/historic-vehicles" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#8B1538] hover:underline text-sm font-medium"
                          >
                            View Historic Vehicle Info →
                          </a>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">Helpful Tools</h3>
                      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-3">Registration Number Formats</h4>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div className="flex items-start gap-3">
                            <div className="bg-[#8B1538] text-white px-3 py-1 rounded font-mono text-xs">ABC 123</div>
                            <p>Three letters followed by up to 3 numbers (1963-1983)</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="bg-[#8B1538] text-white px-3 py-1 rounded font-mono text-xs">A123 BCD</div>
                            <p>Letter, up to 3 numbers, three letters (1983-2001)</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="bg-[#8B1538] text-white px-3 py-1 rounded font-mono text-xs">AB12 CDE</div>
                            <p>Current format: two letters, two numbers, three letters (2001-present)</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="bg-[#8B1538] text-white px-3 py-1 rounded font-mono text-xs">123 ABC</div>
                            <p>Dateless: up to 3 numbers followed by three letters (pre-1963)</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mt-6">
                        <h4 className="font-semibold text-blue-900 mb-3">Need Help?</h4>
                        <p className="text-sm text-blue-800 mb-4">
                          Our community has extensive knowledge about Ferguson tractor registrations. If you have questions about:
                        </p>
                        <ul className="space-y-2 text-sm text-blue-800 list-disc list-inside ml-4">
                          <li>Finding the original registration for your tractor</li>
                          <li>Choosing an appropriate age-related number</li>
                          <li>The registration transfer process</li>
                          <li>Historical registration research</li>
                        </ul>
                        <div className="mt-4 pt-4 border-t border-blue-200">
                          <Link href="/forum">
                            <Button className="bg-[#8B1538] hover:bg-[#6B0E28]">
                              Ask in the Forum
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}