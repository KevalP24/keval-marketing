"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, Zap, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import KMLogo from "@/public/logos/KMLogoMain.png";

const brands = [
  { name: "RR KABEL", slug: "rrkabel" },
  { name: "LAPP", slug: "lapp" },
  { name: "Trinity Touch", slug: "trinitytouch" },
  { name: "Dowell's", slug: "dowells" },
  { name: "Schneider", slug: "schneider" },
  { name: "Mean Well", slug: "meanwell" },
  { name: "Jigo", slug: "jigo" },
  { name: "Almonard", slug: "almonard" },
];

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [showBrandsDropdown, setShowBrandsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div>
              {/* <Zap className="w-6 h-6 text-white" /> */}
              <img
                src=   { typeof KMLogo === "string"
                              ? KMLogo
                              : KMLogo.src}
                alt="Logo"
                className="max-h-12 max-w-20 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-xl font-bold text-teal-800">
              Keval Marketing
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative transition-colors duration-200 ${
                  pathname === item.href
                    ? "text-teal-600"
                    : "text-gray-700 hover:text-teal-600"
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-500"
                  />
                )}
              </Link>
            ))}

            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowBrandsDropdown(!showBrandsDropdown)}
                className={`flex items-center space-x-1 relative transition-colors duration-200 ${
                  pathname === "/products"
                    ? "text-teal-600"
                    : "text-gray-700 hover:text-teal-600"
                }`}
              >
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
                {pathname === "/products" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-500"
                  />
                )}
              </button>

              {showBrandsDropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  {brands.map((brand) => (
                    <Link
                      key={brand.slug}
                      href={`/products?brand=${brand.slug}`}
                      onClick={() => setShowBrandsDropdown(false)}
                      className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                    >
                      {brand.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop Action Buttons with reduced spacing */}
            <div className="flex items-center space-x-2">
              <Button
                asChild
                size="sm"
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2"
              >
                <a href="mailto:kevalmarketing2017@gmail.com">Inquire</a>
              </Button>
              <Button
                asChild
                size="sm"
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2"
              >
                <a href="tel:+917096038481">Call Now</a>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg transition-colors text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-lg transition-colors ${
                    pathname === item.href
                      ? "text-teal-600 bg-teal-50"
                      : "text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Products Section */}
              <div className="px-4 py-2">
                <div className="font-medium text-gray-700 mb-2">
                  Products by Brand
                </div>
                <div className="ml-4 space-y-1">
                  {brands.map((brand) => (
                    <Link
                      key={brand.slug}
                      href={`/products?brand=${brand.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="block py-1 text-sm text-gray-600 hover:text-teal-600 transition-colors"
                    >
                      {brand.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Action Buttons - Fixed Layout */}
              <div className="px-4 pt-4 space-y-3">
                <Button
                  asChild
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3"
                >
                  <a href="mailto:kevalmarketing2017@gmail.com" className="flex items-center justify-center">
                    Inquire
                  </a>
                </Button>
                <Button
                  asChild
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3"
                >
                  <a href="tel:+917096038481" className="flex items-center justify-center">
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}