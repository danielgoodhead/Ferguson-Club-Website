import { SEO } from "@/components/SEO";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { GDPRConsent } from "@/components/Layout/GDPRConsent";
import { FileText, AlertCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function TVOLicence() {
  return (
    <>
      <SEO
        title="TVO Licence - Ferguson Club"
        description="Apply for your TVO (Tractor Vaporising Oil) licence for historic Ferguson tractors"
      />
      
      <div className="min-h-screen bg-white">
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
              <Link href="/tvo-licence" className="text-[#8B1538] font-semibold whitespace-nowrap border-b-2 border-[#8B1538]">
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

        <GDPRConsent />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-[#BE0032]/10 rounded-2xl flex items-center justify-center">
                  <FileText className="w-8 h-8 text-[#BE0032]" />
                </div>
                <h1 className="text-5xl sm:text-6xl font-bold text-gray-900">
                  TVO <span className="text-[#BE0032]">Licence</span>
                </h1>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Apply for your Tractor Vaporising Oil (TVO) licence for historic Ferguson tractors
              </p>
            </div>
          </div>
        </section>

        {/* What is TVO Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-12 border border-blue-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is TVO?</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Tractor Vaporising Oil (TVO) was a low-grade fuel specifically designed for agricultural tractors 
                  in the mid-20th century. Many vintage Ferguson tractors were originally designed to run on TVO, 
                  which was significantly cheaper than petrol at the time.
                </p>
                <p>
                  TVO has a lower octane rating than modern petrol and requires the engine to be started on petrol 
                  before switching over to TVO once the engine is warm. This unique fuel system is part of the 
                  authentic heritage of Ferguson tractors.
                </p>
                <p>
                  Today, TVO is still available for historic vehicle enthusiasts who wish to maintain the authenticity 
                  of their vintage tractors. However, special licensing and documentation are required to purchase and use TVO.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Eligibility Requirements</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Historic Vehicle</h3>
                    <p className="text-gray-600">
                      Your tractor must be a genuine historic vehicle manufactured before 1970 and originally 
                      designed to run on TVO
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Club Membership</h3>
                    <p className="text-gray-600">
                      You must be a current member of the Ferguson Club to apply for a TVO licence
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Documentation</h3>
                    <p className="text-gray-600">
                      Provide proof of ownership, vehicle registration documents, and photographs of your tractor
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Intended Use</h3>
                    <p className="text-gray-600">
                      TVO is licensed for use in historic vehicles for preservation, demonstration, and exhibition purposes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <AlertCircle className="w-8 h-8 text-yellow-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Important Information</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>TVO licences are issued on an annual basis and must be renewed each year</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Licensed TVO must only be used in vehicles specified on your licence</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Storage of TVO must comply with all relevant health and safety regulations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>The club reserves the right to verify vehicle authenticity and intended use</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Applications typically take 2-4 weeks to process</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Apply for TVO Licence</h2>
              <p className="text-xl text-gray-600">
                Complete the form below to submit your TVO licence application
              </p>
            </div>

            <form className="bg-white rounded-3xl p-8 md:p-12 shadow-xl space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" type="text" placeholder="Your first name" className="mt-2" required />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" type="text" placeholder="Your last name" className="mt-2" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="mt-2" required />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" placeholder="Your phone number" className="mt-2" required />
                </div>
              </div>

              <div>
                <Label htmlFor="membershipNumber">Ferguson Club Membership Number *</Label>
                <Input id="membershipNumber" type="text" placeholder="e.g. FC12345" className="mt-2" required />
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tractor Details</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="tractorMake">Make *</Label>
                    <Input id="tractorMake" type="text" placeholder="e.g. Ferguson" className="mt-2" required />
                  </div>
                  <div>
                    <Label htmlFor="tractorModel">Model *</Label>
                    <Input id="tractorModel" type="text" placeholder="e.g. TE20" className="mt-2" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="tractorYear">Year of Manufacture *</Label>
                    <Input id="tractorYear" type="text" placeholder="e.g. 1948" className="mt-2" required />
                  </div>
                  <div>
                    <Label htmlFor="registrationNumber">Registration Number *</Label>
                    <Input id="registrationNumber" type="text" placeholder="e.g. ABC 123" className="mt-2" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="engineNumber">Engine Number *</Label>
                  <Input id="engineNumber" type="text" placeholder="Engine serial number" className="mt-2" required />
                </div>
              </div>

              <div>
                <Label htmlFor="intendedUse">Intended Use *</Label>
                <Textarea 
                  id="intendedUse" 
                  placeholder="Please describe how you intend to use TVO (e.g., preservation, demonstrations, exhibitions)" 
                  className="mt-2 min-h-[120px]" 
                  required 
                />
              </div>

              <div>
                <Label htmlFor="additionalInfo">Additional Information</Label>
                <Textarea 
                  id="additionalInfo" 
                  placeholder="Any additional information to support your application" 
                  className="mt-2 min-h-[100px]" 
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">Required Documents</h4>
                <p className="text-sm text-gray-700 mb-3">
                  Please have the following documents ready to upload or send separately:
                </p>
                <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                  <li>Proof of vehicle ownership (V5C or bill of sale)</li>
                  <li>Current photographs of the tractor (at least 3 angles)</li>
                  <li>Copy of Ferguson Club membership card</li>
                  <li>Proof of address (utility bill or bank statement)</li>
                </ul>
              </div>

              <Button type="submit" size="lg" className="w-full bg-[#BE0032] hover:bg-[#9A0028] text-white">
                Submit Application
              </Button>

              <p className="text-sm text-gray-600 text-center">
                By submitting this application, you confirm that all information provided is accurate and complete.
              </p>
            </form>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}