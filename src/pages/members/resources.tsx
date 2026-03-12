import { SEO } from "@/components/SEO";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { MembersNav } from "@/components/Layout/MembersNav";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Download, BookOpen, Wrench, Image as ImageIcon, FileImage, Calendar, HelpCircle, Trophy } from "lucide-react";

export default function Resources() {
  const technicalManuals = [
    { name: "TE20 Workshop Manual", type: "pdf", size: "12.3 MB", icon: FileText },
    { name: "TEF20 Parts Catalogue", type: "pdf", size: "8.7 MB", icon: FileText },
    { name: "TO20 Service Guide", type: "pdf", size: "6.2 MB", icon: FileText },
    { name: "Ferguson System Explained", type: "pdf", size: "3.1 MB", icon: FileText },
    { name: "Hydraulics Troubleshooting Guide", type: "pdf", size: "4.5 MB", icon: FileText }
  ];

  const wiringDiagrams = [
    { name: "TE20 Early Wiring Diagram", type: "pdf", size: "1.2 MB", icon: FileImage },
    { name: "TE20 Late Wiring Diagram", type: "pdf", size: "1.4 MB", icon: FileImage },
    { name: "TEF20 Wiring Diagram", type: "pdf", size: "1.5 MB", icon: FileImage },
    { name: "TO30 Wiring Diagram", type: "pdf", size: "1.3 MB", icon: FileImage },
    { name: "Standard Electrics Color Guide", type: "pdf", size: "800 KB", icon: FileText }
  ];

  const restorationGuides = [
    { name: "Complete Restoration Guide", type: "pdf", size: "15.2 MB", icon: Wrench },
    { name: "Engine Rebuild Manual", type: "pdf", size: "9.8 MB", icon: Wrench },
    { name: "Gearbox Overhaul Guide", type: "pdf", size: "7.3 MB", icon: Wrench },
    { name: "Paint & Finishes Guide", type: "pdf", size: "5.1 MB", icon: ImageIcon },
    { name: "Sheet Metal Restoration", type: "pdf", size: "6.4 MB", icon: Wrench },
    { name: "Decal Placement Guide", type: "pdf", size: "2.8 MB", icon: ImageIcon }
  ];

  const journals = [
    { issue: "Issue 76 - Winter 2024", year: "2024", size: "18.5 MB" },
    { issue: "Issue 75 - Autumn 2024", year: "2024", size: "17.8 MB" },
    { issue: "Issue 74 - Summer 2024", year: "2024", size: "19.2 MB" },
    { issue: "Issue 73 - Spring 2024", year: "2024", size: "16.9 MB" },
    { issue: "Issue 72 - Winter 2023", year: "2023", size: "18.1 MB" },
    { issue: "Issue 71 - Autumn 2023", year: "2023", size: "17.5 MB" },
    { issue: "Issue 70 - Summer 2023", year: "2023", size: "19.8 MB" },
    { issue: "Issue 69 - Spring 2023", year: "2023", size: "16.3 MB" },
    { issue: "Issue 68 - Winter 2022", year: "2022", size: "17.9 MB" },
    { issue: "Issue 67 - Autumn 2022", year: "2022", size: "18.4 MB" }
  ];

  const renderFileList = (files: any[]) => (
    <div className="space-y-3">
      {files.map((file, index) => (
        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
          <div className="flex items-center gap-4">
            <div className="bg-[#ad1018]/10 p-3 rounded-lg group-hover:bg-[#ad1018]/20 transition-colors">
              <file.icon className="h-6 w-6 text-[#ad1018]" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">{file.name}</p>
              <div className="flex items-center gap-3 mt-1">
                <Badge variant="outline" className="text-xs uppercase">{file.type}</Badge>
                <span className="text-sm text-gray-500">{file.size}</span>
              </div>
            </div>
          </div>
          <Button size="sm" variant="outline" className="border-[#ad1018] text-[#ad1018] hover:bg-[#ad1018] hover:text-white">
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <SEO 
        title="Resources - Ferguson Club"
        description="Technical manuals, wiring diagrams, and restoration guides for Ferguson tractors"
      />
      
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <MembersNav />

        {/* Page Header */}
        <section className="py-12 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="h-10 w-10 text-[#ad1018]" />
              <h1 className="text-4xl font-bold text-gray-900">
                Member <span className="text-[#ad1018]">Resources</span>
              </h1>
            </div>
            <p className="text-lg text-gray-600">
              Technical manuals, guides, and documentation for your Ferguson tractor
            </p>
          </div>
        </section>

        {/* Quick Links */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Link href="#technical" className="block">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-[#ad1018] h-full">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                  <FileText className="h-10 w-10 text-[#ad1018] mb-3" />
                  <p className="font-semibold text-gray-900">Technical Manuals</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="#wiring" className="block">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-[#ad1018] h-full">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                  <FileImage className="h-10 w-10 text-[#ad1018] mb-3" />
                  <p className="font-semibold text-gray-900">Wiring Diagrams</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="#restoration" className="block">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-[#ad1018] h-full">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                  <Wrench className="h-10 w-10 text-[#ad1018] mb-3" />
                  <p className="font-semibold text-gray-900">Restoration Guides</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="#journals" className="block">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-[#ad1018] h-full">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                  <Calendar className="h-10 w-10 text-[#ad1018] mb-3" />
                  <p className="font-semibold text-gray-900">Journal Archive</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Link href="/members/ploughing" className="block">
              <Card className="border-2 border-[#ad1018] hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <div className="bg-[#ad1018]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                    <Trophy className="h-6 w-6 text-[#ad1018]" />
                  </div>
                  <CardTitle>Ploughing Information</CardTitle>
                  <CardDescription>
                    Rules, classes, and guidelines for Ferguson Club ploughing competitions
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/members/benefits" className="block">
              <Card className="border-2 border-[#ad1018] hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <div className="bg-[#ad1018]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                    <Download className="h-6 w-6 text-[#ad1018]" />
                  </div>
                  <CardTitle>Member Benefits</CardTitle>
                  <CardDescription>
                    Exclusive discounts and perks available to Ferguson Club members
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Card className="border-2 border-[#ad1018] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-[#ad1018]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                  <HelpCircle className="h-6 w-6 text-[#ad1018]" />
                </div>
                <CardTitle>Need Help?</CardTitle>
                <CardDescription>
                  Contact our technical team or post in the forum for restoration advice
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Technical Manuals Section */}
        <section id="technical" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <FileText className="h-6 w-6 text-[#ad1018]" />
                Technical Manuals
              </CardTitle>
              <CardDescription>
                Official workshop manuals and service guides for Ferguson tractors
              </CardDescription>
            </CardHeader>
            <CardContent>
              {renderFileList(technicalManuals)}
            </CardContent>
          </Card>
        </section>

        {/* Wiring Diagrams Section */}
        <section id="wiring" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <FileImage className="h-6 w-6 text-[#ad1018]" />
                Wiring Diagrams
              </CardTitle>
              <CardDescription>
                Electrical wiring diagrams for various Ferguson models
              </CardDescription>
            </CardHeader>
            <CardContent>
              {renderFileList(wiringDiagrams)}
            </CardContent>
          </Card>
        </section>

        {/* Restoration Guides Section */}
        <section id="restoration" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Wrench className="h-6 w-6 text-[#ad1018]" />
                Restoration Guides
              </CardTitle>
              <CardDescription>
                Step-by-step guides for restoring and maintaining your Ferguson
              </CardDescription>
            </CardHeader>
            <CardContent>
              {renderFileList(restorationGuides)}
            </CardContent>
          </Card>
        </section>

        {/* Journal Archive Section */}
        <section id="journals" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Calendar className="h-6 w-6 text-[#ad1018]" />
                Journal Archive
              </CardTitle>
              <CardDescription>
                Back catalogue of Ferguson Club quarterly journals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {journals.map((journal, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
                    <div className="flex items-center gap-4">
                      <div className="bg-[#ad1018]/10 p-3 rounded-lg group-hover:bg-[#ad1018]/20 transition-colors">
                        <BookOpen className="h-6 w-6 text-[#ad1018]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{journal.issue}</p>
                        <div className="flex items-center gap-3 mt-1">
                          <Badge variant="outline" className="text-xs">PDF</Badge>
                          <span className="text-sm text-gray-500">{journal.size}</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="border-[#ad1018] text-[#ad1018] hover:bg-[#ad1018] hover:text-white">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <Footer />
      </div>
    </>
  );
}