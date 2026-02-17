import Link from "next/link";
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#c6c6cd] text-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-6">
              <div className="relative w-48 h-24">
                <Image
                  src="/ferguson-club-logo-grey.png"
                  alt="Ferguson Club Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-gray-900 leading-relaxed mb-4">
              Celebrating and preserving the legacy of Harry Ferguson and his revolutionary tractors since 1998.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-900 hover:text-[#BE0032] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-900 hover:text-[#BE0032] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-900 hover:text-[#BE0032] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/membership", label: "Membership" },
                { href: "/events", label: "Events" },
                { href: "/news", label: "News" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-900 hover:text-[#BE0032] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Members Area */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-4">Members Area</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/members/login" className="text-gray-900 hover:text-[#BE0032] transition-colors">
                  Member Login
                </Link>
              </li>
              <li>
                <Link href="/members/dashboard" className="text-gray-900 hover:text-[#BE0032] transition-colors">
                  Member Dashboard
                </Link>
              </li>
              <li>
                <Link href="/members/resources" className="text-gray-900 hover:text-[#BE0032] transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-gray-900 hover:text-[#BE0032] transition-colors">
                  Join Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@fergusonclub.com" className="text-gray-900 hover:text-[#BE0032] transition-colors">
                  info@fergusonclub.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                <a href="tel:+441234567890" className="text-gray-900 hover:text-[#BE0032] transition-colors">
                  +44 (0) 1234 567890
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                <span className="text-gray-900">United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-900 text-sm">
              © 2026 Ferguson Club. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-900 hover:text-[#BE0032] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-900 hover:text-[#BE0032] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}