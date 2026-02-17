import { SEO } from "@/components/SEO";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { MembersNav } from "@/components/Layout/MembersNav";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Gift, ShoppingCart, CreditCard, Info, ExternalLink, Percent } from "lucide-react";
import Image from "next/image";

export default function Benefits() {
  return (
    <>
      <SEO 
        title="Member Benefits - Ferguson Club"
        description="Exclusive discounts and benefits for Ferguson Club members"
      />
      
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <MembersNav />

        {/* Page Header */}
        <section className="py-12 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-3">
              <Gift className="h-10 w-10 text-[#8B1538]" />
              <h1 className="text-4xl font-bold text-gray-900">
                Member <span className="text-[#8B1538]">Benefits</span>
              </h1>
            </div>
            <p className="text-lg text-gray-600">
              Exclusive discounts and perks for Ferguson Club members
            </p>
          </div>
        </section>

        {/* Benefits Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Old 20 Parts Discount Card */}
            <Card className="border-2 border-[#8B1538]">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-[#8B1538] text-lg px-4 py-2">
                    <Percent className="h-5 w-5 mr-2" />
                    10% OFF
                  </Badge>
                </div>
                <div className="bg-white p-6 rounded-lg border mb-4">
                  <Image 
                    src="/old20-parts-logo.png" 
                    alt="Old 20 Parts Company" 
                    width={400} 
                    height={150}
                    className="w-full h-auto"
                  />
                </div>
                <CardTitle className="text-2xl">Old 20 Parts Company</CardTitle>
                <CardDescription>Quality Ferguson tractor parts and accessories</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-3">About Old 20 Parts</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Old 20 Parts Company is a trusted supplier of genuine and reproduction parts for Ferguson tractors. 
                    They offer a comprehensive range of parts, from engine components to sheet metal, ensuring you can 
                    keep your Ferguson tractor running smoothly.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5 text-[#8B1538]" />
                    How to Use Your Discount
                  </h3>
                  <ol className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <Badge className="bg-[#8B1538] shrink-0 mt-1">1</Badge>
                      <span>Browse and add items to your cart on the Old 20 Parts website</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge className="bg-[#8B1538] shrink-0 mt-1">2</Badge>
                      <span>Proceed to checkout as normal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge className="bg-[#8B1538] shrink-0 mt-1">3</Badge>
                      <span>In the <strong>"Delivery Instructions"</strong> field, enter your Ferguson Club membership number</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge className="bg-[#8B1538] shrink-0 mt-1">4</Badge>
                      <span>Complete your order - your 10% discount will be applied</span>
                    </li>
                  </ol>
                </div>

                <Alert className="bg-blue-50 border-blue-200">
                  <Info className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-gray-700">
                    <strong>Your Membership Number:</strong> You can find your membership number on your membership card 
                    or in the "My Profile" section of your dashboard.
                  </AlertDescription>
                </Alert>

                <div className="pt-4">
                  <Button className="w-full bg-[#8B1538] hover:bg-[#6B0E28]" asChild>
                    <a href="https://old20.co.uk" target="_blank" rel="noopener noreferrer">
                      Visit Old 20 Parts
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Additional Benefits */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>More Member Benefits</CardTitle>
                  <CardDescription>Additional perks of Ferguson Club membership</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4 pb-4 border-b">
                    <div className="bg-[#8B1538]/10 p-3 rounded-lg">
                      <Gift className="h-6 w-6 text-[#8B1538]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Exclusive Resources</h4>
                      <p className="text-sm text-gray-600">
                        Access to technical manuals, wiring diagrams, and restoration guides
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pb-4 border-b">
                    <div className="bg-[#8B1538]/10 p-3 rounded-lg">
                      <Gift className="h-6 w-6 text-[#8B1538]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Club Shop Discounts</h4>
                      <p className="text-sm text-gray-600">
                        Special member pricing on club merchandise and regalia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pb-4 border-b">
                    <div className="bg-[#8B1538]/10 p-3 rounded-lg">
                      <Gift className="h-6 w-6 text-[#8B1538]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Priority Event Registration</h4>
                      <p className="text-sm text-gray-600">
                        Early access to register for popular club events and rallies
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pb-4 border-b">
                    <div className="bg-[#8B1538]/10 p-3 rounded-lg">
                      <Gift className="h-6 w-6 text-[#8B1538]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Free Quarterly Journal</h4>
                      <p className="text-sm text-gray-600">
                        Receive the Ferguson Club Journal featuring restorations, technical articles, and news
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#8B1538]/10 p-3 rounded-lg">
                      <Gift className="h-6 w-6 text-[#8B1538]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Expert Advice Network</h4>
                      <p className="text-sm text-gray-600">
                        Connect with experienced members for restoration tips and technical support
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Alert className="bg-[#8B1538]/5 border-[#8B1538]">
                <Info className="h-4 w-4 text-[#8B1538]" />
                <AlertDescription className="text-gray-700">
                  <strong>Coming Soon:</strong> We're negotiating additional member discounts with more Ferguson parts 
                  suppliers and service providers. Check back regularly for updates.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}