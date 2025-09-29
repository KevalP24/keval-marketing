"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-teal-800 to-teal-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* <div className="bg-gradient-to-r from-teal-500 to-teal-400 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div> */}
              <span className="text-xl font-bold">Keval Marketing</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted electrical solutions partner since 2017. Quality
              products, expert service.
            </p>
            <p className="text-sm text-gray-400">
              Serving Vadodara with dedication and excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center md:justify-center">
            <div className="text-center md:text-left md:ml-8">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-teal-300 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-teal-300 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-gray-300 hover:text-teal-300 transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-teal-300 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-300 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  7, Sitaram Complex, Near Gorwa Workshop, New IPCL Road,
                  Subhanpura, Vadodara
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-300 flex-shrink-0" />
                <a
                  href="tel:+917096038481"
                  className="text-gray-300 hover:text-teal-300 transition-colors"
                >
                  +91-7096038481
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-300 flex-shrink-0 block" />
                <a
                  href="mailto:kevalmarketing2017@gmail.com"
                  className="text-gray-300 hover:text-teal-300 transition-colors"
                >
                  kevalmarketing2017@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-teal-300 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Mon - Sat: 9:00 AM - 10:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Keval Marketing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
