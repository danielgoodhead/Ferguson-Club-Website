import { SEO } from "@/components/SEO";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { GDPRConsent } from "@/components/Layout/GDPRConsent";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { ArrowLeft, Upload, AlertCircle, ImageIcon, Save } from "lucide-react";
import { useState } from "react";

export default function PostListingPage() {
  const [listingType, setListingType] = useState("for-sale");
  const isEditMode = false;

  return (
    <>
      <SEO
        title="Post a Listing - Ferguson Club Marketplace"
        description="List your Ferguson tractor, parts, or accessories for sale or post what you're looking for in our marketplace."
      />
      <div className="min-h-screen bg-white">
        <Header />
        <GDPRConsent />

        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-[#ad1018]">Home</Link>
              <span>/</span>
              <Link href="/marketplace" className="hover:text-[#ad1018]">Marketplace</Link>
              <span>/</span>
              <span className="text-gray-900">Post Listing</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="mb-6">
              <Link href="/marketplace">
                <Button variant="ghost" className="text-[#ad1018] hover:text-[#8d0d14]">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Marketplace
                </Button>
              </Link>
            </div>

            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Post a Listing</h1>
              <p className="text-lg text-gray-600">
                List your Ferguson tractor, parts, or accessories for sale, or let members know what you're looking for.
              </p>
            </div>

            {/* Member Notice */}
            <Card className="border-blue-200 bg-blue-50 mb-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Members Only Feature</h3>
                    <p className="text-sm text-gray-700 mb-3">
                      Posting listings in the marketplace is available to Ferguson Club members only. 
                      Not a member yet?
                    </p>
                    <Link href="/membership">
                      <Button size="sm" className="bg-[#ad1018] hover:bg-[#8d0d14]">
                        Join Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Listing Form */}
            <Card>
              <CardHeader>
                <CardTitle>Listing Details</CardTitle>
                <CardDescription>
                  Fill in the details about your listing. Required fields are marked with *
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  {/* Listing Type */}
                  <div className="space-y-3">
                    <Label className="text-base font-semibold">Listing Type *</Label>
                    <RadioGroup value={listingType} onValueChange={setListingType} className="flex gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="for-sale" id="for-sale" />
                        <Label htmlFor="for-sale" className="font-normal cursor-pointer">For Sale</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="wanted" id="wanted" />
                        <Label htmlFor="wanted" className="font-normal cursor-pointer">Wanted</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Title */}
                  <div className="space-y-2">
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      placeholder="e.g. Ferguson TE20 Tractor - Excellent Condition"
                      className="text-base"
                    />
                    <p className="text-sm text-gray-500">
                      Be specific and descriptive to attract the right buyers/sellers
                    </p>
                  </div>

                  {/* Category */}
                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tractors">Tractors</SelectItem>
                        <SelectItem value="parts">Parts & Accessories</SelectItem>
                        <SelectItem value="implements">Implements & Attachments</SelectItem>
                        <SelectItem value="manuals">Manuals & Literature</SelectItem>
                        <SelectItem value="merchandise">Merchandise</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Condition (only for For Sale) */}
                  {listingType === "for-sale" && (
                    <div className="space-y-2">
                      <Label htmlFor="condition">Condition *</Label>
                      <Select>
                        <SelectTrigger id="condition">
                          <SelectValue placeholder="Select condition" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">New</SelectItem>
                          <SelectItem value="excellent">Excellent</SelectItem>
                          <SelectItem value="very-good">Very Good</SelectItem>
                          <SelectItem value="good">Good</SelectItem>
                          <SelectItem value="fair">Fair</SelectItem>
                          <SelectItem value="for-parts">For Parts/Restoration</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {/* Price (only for For Sale) */}
                  {listingType === "for-sale" && (
                    <div className="space-y-2">
                      <Label htmlFor="price">Price *</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">£</span>
                        <Input
                          id="price"
                          type="number"
                          placeholder="0.00"
                          className="pl-7 text-base"
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="negotiable" />
                        <Label htmlFor="negotiable" className="font-normal text-sm cursor-pointer">
                          Price is negotiable
                        </Label>
                      </div>
                    </div>
                  )}

                  {/* Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Provide a detailed description including condition, history, any issues, etc."
                      rows={6}
                      className="text-base"
                    />
                    <p className="text-sm text-gray-500">
                      Minimum 50 characters. Be honest and detailed to help buyers/sellers make informed decisions.
                    </p>
                  </div>

                  {/* Specifications (optional, for For Sale) */}
                  {listingType === "for-sale" && (
                    <div className="space-y-2">
                      <Label htmlFor="specifications">Specifications (Optional)</Label>
                      <Textarea
                        id="specifications"
                        placeholder="List key specifications, one per line:&#10;Year: 1952&#10;Engine: Petrol/TVO&#10;Hours: 3,200"
                        rows={4}
                        className="text-base font-mono text-sm"
                      />
                      <p className="text-sm text-gray-500">
                        Add technical details, one specification per line
                      </p>
                    </div>
                  )}

                  {/* Photos */}
                  <div className="space-y-2">
                    <Label>Photos {listingType === "for-sale" && "*"}</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#ad1018] transition-colors cursor-pointer">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-sm text-gray-500">
                        PNG, JPG up to 10MB each (maximum 5 images)
                      </p>
                    </div>
                    {listingType === "for-sale" && (
                      <p className="text-sm text-gray-500">
                        At least one photo is required for items for sale
                      </p>
                    )}
                  </div>

                  {/* Location */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="location">Location *</Label>
                      <Input
                        id="location"
                        placeholder="e.g. Yorkshire"
                        className="text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postcode">Postcode Area *</Label>
                      <Input
                        id="postcode"
                        placeholder="e.g. YO1"
                        maxLength={4}
                        className="text-base uppercase"
                      />
                      <p className="text-sm text-gray-500">
                        First 3-4 characters of your postcode (for area only)
                      </p>
                    </div>
                  </div>

                  {/* Contact Preferences */}
                  <div className="space-y-3">
                    <Label className="text-base font-semibold">Contact Preferences *</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="email-contact" defaultChecked />
                        <Label htmlFor="email-contact" className="font-normal cursor-pointer">
                          Allow contact via email
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="phone-contact" />
                        <Label htmlFor="phone-contact" className="font-normal cursor-pointer">
                          Allow contact via phone
                        </Label>
                      </div>
                    </div>
                  </div>

                  {/* Phone Number (conditional) */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="e.g. 01234 567890"
                      className="text-base"
                    />
                  </div>

                  {/* Terms Agreement */}
                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" className="mt-1" />
                    <Label htmlFor="terms" className="font-normal text-sm cursor-pointer leading-relaxed">
                      I agree to the Ferguson Club marketplace terms and conditions. I confirm that this listing 
                      is accurate and I am authorized to post it. I understand that the club is not responsible 
                      for transactions between members.
                    </Label>
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button type="submit" className="bg-[#ad1018] hover:bg-[#8d0d14] flex-1">
                      <Save className="h-5 w-5 mr-2" />
                      {isEditMode ? "Update Listing" : "Post Listing"}
                    </Button>
                    <Button type="button" variant="outline" className="flex-1">
                      Save as Draft
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Guidelines */}
            <Card className="mt-8 border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Listing Guidelines</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Be honest and accurate in your descriptions</li>
                  <li>• Use clear, well-lit photos showing all angles</li>
                  <li>• Price items fairly based on condition and market value</li>
                  <li>• Respond promptly to inquiries from interested members</li>
                  <li>• Update or remove your listing once sold/found</li>
                  <li>• Report any suspicious or fraudulent activity to club administrators</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}