"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Users, Package, Calendar, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import rrkabellogo from "@/public/logos/rrkabel1.png";
import lapplogo from "@/public/logos/lapp1.jpg";
import dowellslogo from "@/public/logos/dowells1.png";
import jigologo from "@/public/logos/jigo1.jpg";
import schniderlogo from "@/public/logos/schneider1.png";
import meanwelllogo from "@/public/logos/meanwell1.png";
import trinitytouchlogo from "@/public/logos/trinitytouch1.png";
import almonardlogo from "@/public/logos/almonard1.png";
import KMLogo from "@/public/logos/KMLogoMain.png";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Counter = ({
  end,
  label,
  icon: Icon,
}: {
  end: number;
  label: string;
  icon: any;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev < end) {
          return prev + Math.ceil(end / 100);
        }
        return end;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <motion.div className="text-center" variants={fadeInUp}>
      <Card className="bg-gray-50 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
        <CardContent className="p-6">
          <div className="flex justify-center mb-4">
            <div className="bg-teal-100 p-3 rounded-full">
              <Icon className="w-8 h-8 text-teal-600" />
            </div>
          </div>
          <div className="text-3xl font-bold text-teal-800 mb-2">
            {count.toLocaleString()}+
          </div>
          <div className="text-gray-600 font-medium">{label}</div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const featuredBrands = [
  {
    name: "RR KABEL",
    description: "Premium wires, cables & electrical solutions",
    image: rrkabellogo,
    slug: "rrkabel",
  },
  {
    name: "LAPP",
    description: "Switches, fans & lighting solutions",
    image: lapplogo,
    slug: "lapp",
  },
  {
    name: "Trinity Touch",
    description: "Modular switches & electrical accessories",
    image: trinitytouchlogo,
    slug: "trinitytouch",
  },
  {
    name: "Dowell's",
    description: "Switches, sockets & electrical fittings",
    image: dowellslogo,
    slug: "dowells",
  },
  {
    name: "Schneider",
    description: "Fans, lighting & home appliances",
    image: schniderlogo,
    slug: "schneider",
  },
  {
    name: "Mean Well",
    description: "Electrical appliances & lighting",
    image: meanwelllogo,
    slug: "meanwell",
  },
  {
    name: "Jigo",
    description: "LED lighting & electrical solutions",
    image: jigologo,
    slug: "jigo",
  },
  {
    name: "Almonard",
    description: "LED lights & electrical accessories",
    image: almonardlogo,
    slug: "almonard",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - White Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-16">
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="bg-teal-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              {/* <Zap className="w-12 h-12 text-teal-600" /> */}
              <img
                src=   { typeof KMLogo === "string"
                              ? KMLogo
                              : KMLogo.src}
                alt="Logo"
                className="max-h-24 max-w-40 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              {/* {KMLogo} */}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-teal-800">
              Keval Marketing
            </h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Your Trusted Electrical Solutions Partner Since 2017
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white"
            >
              <Link href="/about">
                About Us <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Teaser - Gray Background */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-teal-800 mb-6">
              About Keval Marketing
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Established in 2017, Keval Marketing has been serving Vadodara
              with premium electrical products and exceptional customer service.
              We are your one-stop destination for all electrical needs, from
              basic wiring to advanced lighting solutions.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white bg-transparent"
            >
              <Link href="/about">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Brands - White Background */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-teal-800 mb-4">
              Featured Brands
            </h2>
            <p className="text-gray-600">
              Trusted electrical brands we proudly serve
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {featuredBrands.map((brand, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Link href={`/products?brand=${brand.slug}`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-200 hover:border-teal-300 shadow-lg cursor-pointer bg-white rounded-lg">
                    <CardContent className="p-6 text-center h-40 w-full flex flex-col justify-center items-center">
                      <div className="h-full w-full flex items-center justify-center">
                        <img
                          src={
                            typeof brand.image === "string"
                              ? brand.image
                              : brand.image.src
                          }
                          alt={brand.name}
                          className="max-h-24 max-w-40 object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            {/* <Button
              asChild
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white"
            >
              <Link href="/products">
                View All Products <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button> */}
          </motion.div>
        </div>
      </section>

      {/* Counters Section - Gray Background */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-teal-800">
              Our Achievements
            </h2>
            <p className="text-gray-600">
              Numbers that speak for our commitment
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            <Counter end={7} label="Years in Service" icon={Calendar} />
            {/* <Counter end={5000} label="Happy Customers" icon={Users} /> */}
            <Counter end={2500} label="Products Sold" icon={Package} />
            <Counter end={20} label="Brand Partners" icon={Award} />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
