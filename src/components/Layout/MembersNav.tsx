import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronDown, Menu, X, Home, Book, Users, ShoppingBag, ShieldCheck, Map, MessageSquare, Link as LinkIcon, Newspaper, Calendar, Image as ImageIcon, CreditCard, ShoppingCart, Tractor } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function MembersNav() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => router.pathname === path;
  const isGroupActive = (paths: string[]) => paths.includes(router.pathname);

  const navGroups = {
    club: ["/news", "/events", "/gallery", "/shop", "/members/directory"],
    services: ["/tvo-licence", "/marketplace", "/members/registrations", "/members/benefits"],
    community: ["/links", "/forum"]
  };

  return (
    <section className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-14">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="/members/dashboard" 
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive("/members/dashboard") 
                  ? "text-[#ad1018] border-b-2 border-[#ad1018] rounded-none" 
                  : "text-gray-600 hover:text-[#ad1018] hover:bg-gray-50"
              }`}
            >
              Dashboard
            </Link>

            <Link 
              href="/members/resources" 
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive("/members/resources") 
                  ? "text-[#ad1018] border-b-2 border-[#ad1018] rounded-none" 
                  : "text-gray-600 hover:text-[#ad1018] hover:bg-gray-50"
              }`}
            >
              Resources
            </Link>

            <Link 
              href="/members/profile" 
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive("/members/profile") 
                  ? "text-[#ad1018] border-b-2 border-[#ad1018] rounded-none" 
                  : "text-gray-600 hover:text-[#ad1018] hover:bg-gray-50"
              }`}
            >
              My Profile
            </Link>

            {/* Club Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors text-sm font-medium">
                Club
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <div className="py-1">
                  <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    About Us
                  </Link>
                  <Link href="/membership" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Membership
                  </Link>
                  <Link href="/members/benefits" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Benefits
                  </Link>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors text-sm font-medium">
                Resources
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <div className="py-1">
                  <Link href="/events" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Events
                  </Link>
                  <Link href="/news" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    News
                  </Link>
                  <Link href="/gallery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Gallery
                  </Link>
                  <Link href="/links" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Useful Links
                  </Link>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors text-sm font-medium">
                Services
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <div className="py-1">
                  <Link href="/members/registrations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Registrations
                  </Link>
                  <Link href="/members/ploughing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Ploughing Records
                  </Link>
                  <Link href="/tvo-licence" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    TVO Licence
                  </Link>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Shop & Forum */}
            <Link href="/shop" className="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors text-sm font-medium">
              Shop
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-[#ad1018]"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden space-y-1 py-2">
        <Link
          href="/members/dashboard"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          Dashboard
        </Link>

        <div className="border-t border-gray-100 my-2 pt-2">
          <div className="px-4 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Club
          </div>
          <Link
            href="/members/directory"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Member Directory
          </Link>
          <Link
            href="/members/benefits"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Member Benefits
          </Link>
          <Link
            href="/forum"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Forum
          </Link>
        </div>

        <div className="border-t border-gray-100 my-2 pt-2">
          <div className="px-4 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Resources
          </div>
          <Link
            href="/members/resources"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Documents & Manuals
          </Link>
          <Link
            href="/links"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Useful Links
          </Link>
        </div>

        <div className="border-t border-gray-100 my-2 pt-2">
          <div className="px-4 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Services
          </div>
          <Link
            href="/members/registrations"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Registrations
          </Link>
          <Link
            href="/members/ploughing"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Ploughing
          </Link>
          <Link
            href="/tvo-licence"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            TVO Licence
          </Link>
          <Link
            href="/marketplace"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Marketplace
          </Link>
        </div>

        <Link
          href="/shop"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          Shop
        </Link>

        <Link
          href="/members/profile"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          My Profile
        </Link>
      </div>
    </section>
  );
}