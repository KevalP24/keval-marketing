"use client"

import { motion } from "framer-motion"
import { Shield, Award, Users, Heart, Zap, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const values = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "We only stock genuine products from trusted brands to ensure safety and reliability.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Our customers are at the heart of everything we do. Your satisfaction is our priority.",
  },
  {
    icon: Award,
    title: "Expert Guidance",
    description: "Our experienced team provides professional advice to help you make the right choices.",
  },
  {
    icon: Heart,
    title: "Community Focus",
    description: "We're proud to serve the Vadodara community and contribute to its growth.",
  },
]

const timeline = [
  {
    year: "2017",
    title: "Foundation",
    description: "Keval Marketing was established with a vision to provide quality electrical solutions to Vadodara.",
  },
  {
    year: "2019",
    title: "Expansion",
    description: "Expanded our product range and established partnerships with leading electrical brands.",
  },
  {
    year: "2021",
    title: "Digital Presence",
    description: "Launched our digital initiatives to better serve customers in the modern era.",
  },
  {
    year: "2025",
    title: "Present Day",
    description: "Continuing to grow and serve thousands of satisfied customers across Vadodara.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - White Background */}
      <section className="relative py-20 px-4 bg-white pt-24">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="bg-teal-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Zap className="w-12 h-12 text-teal-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-teal-800">About Keval Marketing</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner in electrical solutions, serving Vadodara with dedication and excellence since 2017.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story - Gray Background */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-teal-800 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Founded in 2017, Keval Marketing began as a small electrical shop with a big vision - to provide quality
                electrical products and exceptional service to the people of Vadodara. What started as a humble
                beginning has grown into one of the most trusted names in the electrical retail industry.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Located in the heart of Subhanpura, our shop at Sitaram Complex has become a go-to destination for
                electricians, contractors, and homeowners alike. We pride ourselves on maintaining strong relationships
                with our customers and understanding their unique electrical needs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we continue to uphold our founding principles of quality, integrity, and customer satisfaction
                while embracing modern technology and expanding our product offerings.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Keval Marketing Storefront"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-teal-600 text-white p-4 rounded-lg shadow-lg">
                <Clock className="w-6 h-6 mb-2" />
                <p className="font-semibold">7+ Years</p>
                <p className="text-sm">Serving Vadodara</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values - White Background */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-teal-800 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These values guide everything we do and shape our commitment to excellence in serving our customers.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-teal-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-teal-800 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline - Gray Background */}
      {/* <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-teal-800 mb-4">Our Journey</h2>
            <p className="text-gray-600">Milestones that mark our growth and commitment to excellence</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-400 to-teal-600"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-teal-500 mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-teal-800 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Mission & Vision - White Background */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h2 className="text-3xl font-bold mb-6 text-teal-800">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To provide high-quality electrical products and exceptional customer service that empowers our community
                to build safer, more efficient electrical systems. We strive to be the most trusted electrical retailer
                in Vadodara by maintaining the highest standards of integrity, quality, and customer satisfaction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h2 className="text-3xl font-bold mb-6 text-teal-800">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To become the leading electrical solutions provider in Gujarat, known for our comprehensive product
                range, expert guidance, and unwavering commitment to customer success. We envision a future where every
                electrical project in our community is powered by quality products and supported by our expertise.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
