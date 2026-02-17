import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function MembersNav() {
  const router = useRouter();
  const path = router.pathname;

  const isActive = (href: string) => path === href || path.startsWith(href + "/");
  
  const isClubActive = path.includes("/news") || path.includes("/events") || path.includes("/gallery");
  const isServicesActive = path.includes("/tvo-licence") || path.includes("/marketplace") || path.includes("/shop") || path.includes("/members/registrations");
  const isCommunityActive = path.includes("/links") || path.includes("/forum");

  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center space-x-8 py-4">
          <Link 
            href="/members/dashboard" 
            className={`font-semibold whitespace-nowrap transition-colors ${isActive('/members/dashboard') ? 'text-[#8B1538] border-b-2 border-[#8B1538]' : 'text-gray-600 hover:text-[#8B1538]'}`}
          >
            Dashboard
          </Link>
          <Link 
            href="/members/resources" 
            className={`font-semibold whitespace-nowrap transition-colors ${isActive('/members/resources') ? 'text-[#8B1538] border-b-2 border-[#8B1538]' : 'text-gray-600 hover:text-[#8B1538]'}`}
          >
            Resources
          </Link>
          <Link 
            href="/members/directory" 
            className={`font-semibold whitespace-nowrap transition-colors ${path.includes('/members/directory') || path.includes('/members/[id]') ? 'text-[#8B1538] border-b-2 border-[#8B1538]' : 'text-gray-600 hover:text-[#8B1538]'}`}
          >
            Directory
          </Link>
          <Link 
            href="/members/profile" 
            className={`font-semibold whitespace-nowrap transition-colors ${isActive('/members/profile') ? 'text-[#8B1538] border-b-2 border-[#8B1538]' : 'text-gray-600 hover:text-[#8B1538]'}`}
          >
            My Profile
          </Link>
          
          {/* Club Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className={`flex items-center gap-1 font-semibold whitespace-nowrap transition-colors outline-none ${isClubActive ? 'text-[#8B1538]' : 'text-gray-600 hover:text-[#8B1538]'}`}>
              Club <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/news" className={path.includes("/news") ? "text-[#8B1538] font-medium" : ""}>News</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/events" className={path.includes("/events") ? "text-[#8B1538] font-medium" : ""}>Events</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/gallery" className={path.includes("/gallery") ? "text-[#8B1538] font-medium" : ""}>Gallery</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className={`flex items-center gap-1 font-semibold whitespace-nowrap transition-colors outline-none ${isServicesActive ? 'text-[#8B1538]' : 'text-gray-600 hover:text-[#8B1538]'}`}>
              Services <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/tvo-licence" className={path.includes("/tvo-licence") ? "text-[#8B1538] font-medium" : ""}>TVO Licence</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/marketplace" className={path.includes("/marketplace") ? "text-[#8B1538] font-medium" : ""}>Marketplace</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/shop" className={path.includes("/shop") ? "text-[#8B1538] font-medium" : ""}>Shop</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/members/registrations" className={path.includes("/members/registrations") ? "text-[#8B1538] font-medium" : ""}>DVLA Registrations</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Community Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className={`flex items-center gap-1 font-semibold whitespace-nowrap transition-colors outline-none ${isCommunityActive ? 'text-[#8B1538]' : 'text-gray-600 hover:text-[#8B1538]'}`}>
              Community <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/links" className={path.includes("/links") ? "text-[#8B1538] font-medium" : ""}>Useful Links</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/forum" className={path.includes("/forum") ? "text-[#8B1538] font-medium" : ""}>Forum</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </section>
  );
}