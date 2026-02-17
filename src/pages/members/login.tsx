import { SEO } from "@/components/SEO";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { GDPRConsent } from "@/components/Layout/GDPRConsent";
import { useState } from "react";
import { User, Lock, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Authentication logic would go here
    console.log("Login attempt:", { email, rememberMe });
  };

  return (
    <>
      <SEO
        title="Member Login - Ferguson Club"
        description="Access your Ferguson Club member account to view exclusive content, resources, and member benefits."
      />
      
      <div className="min-h-screen bg-white">
        <Header />
        <GDPRConsent />

        <section className="py-20 bg-gradient-to-br from-gray-50 to-white min-h-[calc(100vh-200px)] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Branding */}
              <div className="hidden lg:block">
                <div className="w-20 h-20 bg-[#8B1538] rounded-2xl flex items-center justify-center mb-8">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Welcome Back to the <span className="text-[#8B1538]">Ferguson Club</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Access exclusive member resources, technical documentation, event bookings, 
                  and connect with fellow Ferguson enthusiasts worldwide.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#8B1538] rounded-full mt-2 mr-4"></div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Digital Archives</h3>
                      <p className="text-gray-600">Access thousands of technical documents and manuals</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#8B1538] rounded-full mt-2 mr-4"></div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Priority Booking</h3>
                      <p className="text-gray-600">Early access to events and workshops</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#8B1538] rounded-full mt-2 mr-4"></div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Member Directory</h3>
                      <p className="text-gray-600">Connect with Ferguson owners near you</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Login Form */}
              <div className="max-w-md mx-auto w-full">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Member Login</h2>
                  <p className="text-gray-600 mb-8">Sign in to access your account</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="email" className="text-gray-900 font-semibold">
                        Email Address
                      </Label>
                      <div className="relative mt-2">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your@email.com"
                          className="pl-12 h-14 text-lg"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="password" className="text-gray-900 font-semibold">
                        Password
                      </Label>
                      <div className="relative mt-2">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter your password"
                          className="pl-12 h-14 text-lg"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="remember" 
                          checked={rememberMe}
                          onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                        />
                        <Label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">
                          Remember me
                        </Label>
                      </div>
                      <Link href="/members/forgot-password" className="text-sm text-[#8B1538] hover:underline">
                        Forgot password?
                      </Link>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-[#8B1538] hover:bg-[#6B1028] text-white h-14 text-lg group"
                    >
                      Sign In
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>

                  <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                    <p className="text-gray-600">
                      Not a member yet?{" "}
                      <Link href="/membership" className="text-[#8B1538] hover:underline font-semibold">
                        Join the Ferguson Club
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}