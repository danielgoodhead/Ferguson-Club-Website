import Link from "next/link";
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="relative w-48 h-24">
                <Image
                  src="/ferguson-club-logo.png"
                  alt="Ferguson Club"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Celebrating and preserving Ferguson tractor heritage since 1998. Join our community of enthusiasts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/membership", label: "Membership" },
                { href: "/events", label: "Events" },
                { href: "/news", label: "News" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#8B1538] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Member Resources */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Members</h3>
            <ul className="space-y-2">
              {[
                { href: "/members", label: "Members Area" },
                { href: "/members/login", label: "Login" },
                { href: "/members/register", label: "Register" },
                { href: "/members/resources", label: "Resources" },
                { href: "/members/forum", label: "Forum" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#8B1538] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#8B1538] mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@fergusonclub.com"
                  className="text-sm text-gray-600 hover:text-[#8B1538] transition-colors"
                >
                  info@fergusonclub.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#8B1538] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">+44 (0) 1234 567890</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#8B1538] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              © {currentYear} Ferguson Club. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-gray-500 hover:text-[#8B1538] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-500 hover:text-[#8B1538] transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-sm text-gray-500 hover:text-[#8B1538] transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}