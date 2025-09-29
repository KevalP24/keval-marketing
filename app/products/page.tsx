"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Search, Star, X, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useSearchParams } from "next/navigation";
import { products, brands, generalCategories } from "./productsData";
import Image from "next/image";
import emailjs from '@emailjs/browser';

// Type definitions
interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  description: string;
  image: string;
}

interface Brand {
  name: string;
  slug: string;
  categories: string[];
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

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

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Products");
  const [searchTerm, setSearchTerm] = useState<string>("");
  
  // Modal states
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const brandFilter = searchParams.get("brand");

  const currentBrand = (brands as Brand[]).find((b) => b.slug === brandFilter);
  const availableCategories = currentBrand
    ? currentBrand.categories
    : generalCategories;

  // ✅ Reset category if not in available categories
  useEffect(() => {
    if (!availableCategories.includes(selectedCategory)) {
      setSelectedCategory("All Products");
    }
  }, [availableCategories, selectedCategory]);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Filter products
  const filteredProducts = (products as Product[]).filter((product) => {
    const matchesCategory =
      selectedCategory === "All Products" ||
      product.category === selectedCategory;
    const matchesBrand = !brandFilter || product.brand === brandFilter;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesBrand && matchesSearch;
  });

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: `Hi, I'm interested in the ${product.name}. Please provide more details about pricing and availability.`,
    });
    setIsSubmitted(false);
    setSubmitError(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitted(false);
    setSubmitError(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // EmailJS configuration - handle potential undefined values
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      // Check if all required environment variables are present
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is incomplete. Please check your environment variables.');
      }

      // Template parameters for EmailJS
      const templateParams = {
        to_name: 'Keval Marketing Team',
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        message: formData.message,
        reply_to: formData.email,
        // Product specific information
        product_name: selectedProduct?.name || 'N/A',
        product_category: selectedProduct?.category || 'N/A',
        product_brand: selectedProduct?.brand || 'N/A',
        product_id: selectedProduct?.id?.toString() || 'N/A',
        inquiry_type: 'Product Inquiry',
        submission_date: new Date().toLocaleString('en-IN', { 
          timeZone: 'Asia/Kolkata',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        }),
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('Email sent successfully:', result);
      setIsSubmitted(true);
      setTimeout(() => {
        closeModal();
      }, 3000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitError('Failed to send inquiry. Please try again or contact us directly.');
      setTimeout(() => setSubmitError(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - White Background */}
      <section className="relative py-20 px-4 bg-white pt-24">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-teal-800">
              {currentBrand ? `${currentBrand.name} Products` : "Our Products"}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentBrand
                ? `Discover our comprehensive range of ${currentBrand.name} electrical products`
                : "Discover our comprehensive range of quality electrical products from trusted brands"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter - Gray Background */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search Bar with Fixed Width */}
            <div className="relative w-full lg:w-64 flex-shrink-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-gray-300 focus:border-teal-500 bg-white w-full"
              />
            </div>

            {/* Category Buttons */}
            <div className="flex flex-wrap gap-2 w-full">
              {availableCategories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-teal-600 hover:bg-teal-700 text-white"
                      : "border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white bg-white"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid - White Background */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={fadeInUp}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg h-full bg-white">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={400}
                        height={192}
                        className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300 bg-white"
                      />
                      <div className="absolute top-2 right-2">
                        <span className="bg-teal-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          {product.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-4 flex flex-col h-full">
                      <h3 className="font-semibold text-teal-800 mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 flex-1 line-clamp-2">
                        {product.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <Button
                          size="sm"
                          onClick={() => openModal(product)}
                          className="bg-teal-600 hover:bg-teal-700 text-white"
                        >
                          Inquire
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <p className="text-gray-600 text-lg">
                No products found matching your criteria.
              </p>
              <Button
                onClick={() => {
                  setSelectedCategory("All Products");
                  setSearchTerm("");
                }}
                className="mt-4 bg-teal-600 hover:bg-teal-700 text-white"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action - Gray Background */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-teal-800">
              Need Help Choosing?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our expert team is here to help you find the perfect electrical
              solutions for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white"
              >
                <a href="tel:+917096038481">Call Us Now</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white bg-white"
              >
                <a href="/contact">Visit Our Store</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Inquiry Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div>
                <h3 className="text-xl font-semibold text-teal-800">Product Inquiry</h3>
                <p className="text-sm text-gray-600 mt-1">Get details about this product</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={closeModal}
                className="border-gray-300 hover:bg-gray-100"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Product Info */}
            {selectedProduct && (
              <div className="p-6 border-b bg-gray-50">
                <div className="flex items-start space-x-3">
                  <Image
                    src={selectedProduct.image || "/placeholder.svg"}
                    alt={selectedProduct.name}
                    width={60}
                    height={60}
                    className="w-15 h-15 object-contain bg-white rounded border"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-teal-800 text-sm">
                      {selectedProduct.name}
                    </h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs text-gray-600">Category:</span>
                      <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded">
                        {selectedProduct.category}
                      </span>
                    </div>
                    {selectedProduct.brand && (
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-gray-600">Brand:</span>
                        <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded capitalize">
                          {selectedProduct.brand}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Modal Content */}
            <div className="p-6">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-4"
                >
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h4 className="text-lg font-semibold text-green-600 mb-2">
                    Inquiry Sent Successfully!
                  </h4>
                  <p className="text-sm text-gray-600">
                    Thank you for your interest. We'll get back to you within 24 hours with product details and pricing.
                  </p>
                </motion.div>
              ) : submitError ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-4"
                >
                  <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-3" />
                  <h4 className="text-lg font-semibold text-red-600 mb-2">
                    Failed to Send Inquiry
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    {submitError}
                  </p>
                  <Button
                    onClick={() => setSubmitError(null)}
                    className="bg-teal-600 hover:bg-teal-700 text-white"
                  >
                    Try Again
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="border-gray-300 focus:border-teal-500 bg-white disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="border-gray-300 focus:border-teal-500 bg-white disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone Number *"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="border-gray-300 focus:border-teal-500 bg-white disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your message or specific requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      disabled={isSubmitting}
                      className="border-gray-300 focus:border-teal-500 bg-white disabled:opacity-50"
                    />
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={closeModal}
                      disabled={isSubmitting}
                      className="flex-1 border-gray-300 hover:bg-gray-100"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-teal-600 hover:bg-teal-700 text-white disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Inquiry <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}

      <Footer />
    </div>
  );
}