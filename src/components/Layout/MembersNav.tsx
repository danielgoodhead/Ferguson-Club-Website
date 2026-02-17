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
                  ? "text-[#8B1538] border-b-2 border-[#8B1538] rounded-none" 
                  : "text-gray-600 hover:text-[#8B1538] hover:bg-gray-50"
              }`}
            >
              Dashboard
            </Link>

            <Link 
              href="/members/resources" 
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive("/members/resources") 
                  ? "text-[#8B1538] border-b-2 border-[#8B1538] rounded-none" 
                  : "text-gray-600 hover:text-[#8B1538] hover:bg-gray-50"
              }`}
            >
              Resources
            </Link>

            <Link 
              href="/members/profile" 
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive("/members/profile") 
                  ? "text-[#8B1538] border-b-2 border-[#8B1538] rounded-none" 
                  : "text-gray-600 hover:text-[#8B1538] hover:bg-gray-50"
              }`}
            >
              My Profile
            </Link>

            {/* Club Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors outline-none ${
                isGroupActive(navGroups.club) 
                  ? "text-[#8B1538] border-b-2 border-[#8B1538] rounded-none" 
                  : "text-gray-600 hover:text-[#8B1538] hover:bg-gray-50"
              }`}>
                Club <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48 bg-white">
                <DropdownMenuItem asChild>
                  <Link href="/news" className={`w-full cursor-pointer ${isActive("/news") ? "text-[#8B1538] bg-red-50" : ""}`}>
                    <Newspaper className="mr-2 h-4 w-4" /> News
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/events" className={`w-full cursor-pointer ${isActive("/events") ? "text-[#8B1538] bg-red-50" : ""}`}>
                    <Calendar className="mr-2 h-4 w-4" /> Events
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/gallery" className={`w-full cursor-pointer ${isActive("/gallery") ? "text-[#8B1538] bg-red-50" : ""}`}>
                    <ImageIcon className="mr-2 h-4 w-4" /> Gallery
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/shop" className={`w-full cursor-pointer ${isActive("/shop") ? "text-[#8B1538] bg-red-50" : ""}`}>
                    <ShoppingBag className="mr-2 h-4 w-4" /> Shop
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/members/directory" className={`w-full cursor-pointer ${isActive("/members/directory") ? "text-[#8B1538] bg-red-50" : ""}`}>
                    <Users className="mr-2 h-4 w-4" /> Directory
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors outline-none ${
                isGroupActive(navGroups.services) 
                  ? "text-[#8B1538] border-b-2 border-[#8B1538] rounded-none" 
                  : "text-gray-600 hover:text-[#8B1538] hover:bg-gray-50"
              }`}>
                Services <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48 bg-white">
                <DropdownMenuItem asChild>
                  <Link href="/tvo-licence" className={`w-full cursor-pointer ${isActive("/tvo-licence") ? "text-[#8B1538] bg-red-50" : ""}`}>
                    <ShieldCheck className="mr-2 h-4 w-4" /> TVO Licence
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/marketplace" className={`w-full cursor-pointer ${isActive("/marketplace") ? "text-[#8B1538] bg-red-50" : ""}`}>
                    <ShoppingCart className="mr-2 h-4 w-4" /> Marketplace
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/members/registrations" className={`w-full cursor-pointer ${isActive("/members/registrations") ? "text-[#8B1538] bg-red-50" : ""}`}>
                    <CreditCard className="mr-2 h-4 w-4" /> DVLA Registrations
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/members/benefits" className={`w-full cursor-pointer ${isActive("/members/benefits") ? "text-[#8B1538] bg-red-50" : ""}`}>
                    <Tractor className="mr-2 h-4 w-4" /> Member Benefits
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Community Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors outline-none ${
                isGroupActive(navGroups.community) 
                  ? "text-[#8B1538] border-b-2 border-[#8B1538] rounded-none" 
                  : "text-gray-600 hover:text-[#8B1538] hover:bg-gray-50"
              }`}>
                Community <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48 bg-white">
                <DropdownMenuItem asChild>
                  <Link href="/links" className={`w-full cursor-pointer ${isActive("/links") ? "text-[#8B1538] bg-red-50" : ""}`}>
                    <LinkIcon className="mr-2 h-4 w-4" /> Useful Links
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/forum" className={`w-full cursor-pointer ${isActive("/forum") ? "text-[#8B1538] bg-red-50" : ""}`}>
                    <MessageSquare className="mr-2 h-4 w-4" /> Forum
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-[#8B1538]"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/members/dashboard"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/members/dashboard") ? "text-[#8B1538] bg-red-50" : "text-gray-600 hover:text-[#8B1538] hover:bg-gray-50"
              }`}
            >
              Dashboard
            </Link>
            <Link 
              href="/members/resources"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/members/resources") ? "text-[#8B1538] bg-red-50" : "text-gray-600 hover:text-[#8B1538] hover:bg-gray-50"
              }`}
            >
              Resources
            </Link>
            <Link 
              href="/members/profile"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/members/profile") ? "text-[#8B1538] bg-red-50" : "text-gray-600 hover:text-[#8B1538] hover:bg-gray-50"
              }`}
            >
              My Profile
            </Link>
            
            <div className="border-t border-gray-100 my-2 pt-2">
              <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Club</p>
              <Link href="/news" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-[#8B1538] hover:bg-gray-50">News</Link>
              <Link href="/events" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-[#8B1538] hover:bg-gray-50">Events</Link>
              <Link href="/gallery" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-[#8B1538] hover:bg-gray-50">Gallery</Link>
              <Link href="/shop" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-[#8B1538] hover:bg-gray-50">Shop</Link>
              <Link href="/members/directory" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-[#8B1538] hover:bg-gray-50">Directory</Link>
            </div>

            <div className="border-t border-gray-100 my-2 pt-2">
              <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Services</p>
              <Link href="/tvo-licence" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-[#8B1538] hover:bg-gray-50">TVO Licence</Link>
              <Link href="/marketplace" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-[#8B1538] hover:bg-gray-50">Marketplace</Link>
              <Link href="/members/registrations" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-[#8B1538] hover:bg-gray-50">DVLA Registrations</Link>
              <Link href="/members/benefits" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-[#8B1538] hover:bg-gray-50">Member Benefits</Link>
            </div>

            <div className="border-t border-gray-100 my-2 pt-2">
              <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Community</p>
              <Link href="/links" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-[#8B1538] hover:bg-gray-50">Useful Links</Link>
              <Link href="/forum" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-[#8B1538] hover:bg-gray-50">Forum</Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}