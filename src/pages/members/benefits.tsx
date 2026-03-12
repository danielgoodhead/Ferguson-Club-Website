import { SEO } from "@/components/SEO";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { MembersNav } from "@/components/Layout/MembersNav";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info, ExternalLink, Gift, ShoppingCart, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BenefitsPage() {
  return (
    <>
      <SEO
        title="Member Benefits - Ferguson Club"
        description="Exclusive member benefits including 10% discount at Old 20 Parts and more"
      />
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <MembersNav />

        {/* Page Header */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-900">Member </span>
              <span className="text-[#8B1538]">Benefits</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Exclusive discounts and perks for Ferguson Club members
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Membership Number Info */}
          <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-blue-900">
                <strong>Your membership number can be found:</strong> On your membership card, 
                in your welcome email, or on your profile page. You'll need this to claim your discounts.
              </p>
            </div>
          </div>

          {/* Old 20 Parts Discount Card */}
          <Card className="overflow-hidden border-2 border-gray-200 hover:border-[#8B1538] hover:shadow-lg transition-all">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-[300px,1fr] gap-0">
                
                {/* Logo Section */}
                <div className="bg-white p-8 flex flex-col items-center justify-center border-r border-gray-200 relative">
                  <div className="relative w-full max-w-[220px]">
                    <Image
                      src="/old20-parts-logo.png"
                      alt="Old 20 Parts Company"
                      width={220}
                      height={120}
                      className="w-full h-auto"
                    />
                  </div>
                  <Badge className="mt-6 bg-[#8B1538] hover:bg-[#6B1028] text-white px-4 py-2 text-base font-semibold">
                    10% Member Discount
                  </Badge>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Old 20 Parts Company Discount
                  </h2>
                  <p className="text-gray-600 mb-6">
                    As a Ferguson Club member, enjoy <strong className="text-[#8B1538]">10% off</strong> all 
                    purchases at Old 20 Parts Company - specialists in Ferguson tractor parts and restoration supplies.
                  </p>

                  {/* Tabbed Content */}
                  <Tabs defaultValue="online" className="w-full">
                    <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
                      <TabsTrigger value="online" className="flex items-center gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        Online Orders
                      </TabsTrigger>
                      <TabsTrigger value="shows" className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        At Shows
                      </TabsTrigger>
                    </TabsList>

                    {/* Online Orders Tab */}
                    <TabsContent value="online" className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <Badge variant="outline" className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#8B1538] text-white border-[#8B1538]">
                            1
                          </Badge>
                          <p className="text-gray-700 pt-0.5">Browse the Old 20 Parts website and add items to your cart</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <Badge variant="outline" className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#8B1538] text-white border-[#8B1538]">
                            2
                          </Badge>
                          <p className="text-gray-700 pt-0.5">Proceed to checkout as normal</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <Badge variant="outline" className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#8B1538] text-white border-[#8B1538]">
                            3
                          </Badge>
                          <p className="text-gray-700 pt-0.5">
                            In the <strong>"Delivery Instructions"</strong> field, enter your Ferguson Club membership number
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <Badge variant="outline" className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#8B1538] text-white border-[#8B1538]">
                            4
                          </Badge>
                          <p className="text-gray-700 pt-0.5">
                            Complete your order as normal. <strong>Old 20 Parts will discount the order when they process it.</strong>
                          </p>
                        </div>
                      </div>

                      <Link 
                        href="https://www.old20.co.uk" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#8B1538] hover:text-[#6B1028] font-semibold transition-colors mt-4"
                      >
                        Visit Old 20 Parts Website
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </TabsContent>

                    {/* At Shows Tab */}
                    <TabsContent value="shows">
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-amber-100 rounded-full">
                            <Users className="w-6 h-6 text-amber-700" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                              In-Person at Shows & Events
                            </h3>
                            <p className="text-gray-700 mb-3">
                              If visiting Old 20 Parts at a tractor show or event, simply <strong>present your Ferguson Club membership card</strong> to receive your 10% discount at the point of sale.
                            </p>
                            <p className="text-sm text-gray-600">
                              No need to mention it in advance - just show your card when making your purchase and the discount will be applied immediately.
                            </p>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
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