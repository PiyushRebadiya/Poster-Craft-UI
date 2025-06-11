import React from 'react';
import { ArrowRight, Star, Users, Clock, Award, Sparkles, Download, Share2 } from 'lucide-react';
import PosterCard from '../PosterCard';
import { PageName } from '../../types';

interface HomeProps {
  onPageChange: (page: PageName) => void;
}

export default function Home({ onPageChange }: HomeProps) {
  const featuredPosters = [
    {
      title: "Birth Announcement - Little Star",
      category: "Birth",
      image: "https://images.pexels.com/photos/1682497/pexels-photo-1682497.jpeg",
      price: "$24.99",
      featured: true
    },
    {
      title: "Memorial - Eternal Garden",
      category: "Memorial",
      image: "https://images.pexels.com/photos/1616470/pexels-photo-1616470.jpeg",
      price: "$29.99"
    },
    {
      title: "Festival Celebration - Diwali Joy",
      category: "Festival",
      image: "https://images.pexels.com/photos/1387176/pexels-photo-1387176.jpeg",
      price: "$19.99"
    },
    {
      title: "Wedding Invitation - Royal Romance",
      category: "Wedding",
      image: "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg",
      price: "$34.99"
    }
  ];

  const stats = [
    { icon: Users, label: "Happy Customers", value: "10,000+" },
    { icon: Award, label: "Design Awards", value: "25+" },
    { icon: Clock, label: "Years Experience", value: "8+" },
    { icon: Star, label: "Average Rating", value: "4.9" }
  ];

  const features = [
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "High-resolution designs with professional printing quality"
    },
    {
      icon: Download,
      title: "Instant Download",
      description: "Get your customized poster immediately after purchase"
    },
    {
      icon: Share2,
      title: "Multiple Formats",
      description: "Available in PDF, PNG, and print-ready formats"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Beautiful Posters for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                {" "}Life's Moments
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Create stunning posters for births, memorials, festivals, and special occasions. 
              Professional designs delivered instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onPageChange('gallery')}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 flex items-center justify-center group"
              >
                Browse Gallery
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => onPageChange('plans')}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Plans
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posters */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Designs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular poster designs, carefully crafted for life's special moments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredPosters.map((poster, index) => (
              <PosterCard
                key={index}
                title={poster.title}
                category={poster.category}
                image={poster.image}
                price={poster.price}
                featured={poster.featured}
                onClick={() => onPageChange('gallery')}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => onPageChange('gallery')}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300"
            >
              View All Designs
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose PosterCraft?
            </h2>
            <p className="text-xl text-gray-600">
              We deliver quality, speed, and exceptional design
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Something Beautiful?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Join thousands of satisfied customers who trust PosterCraft for their special moments
          </p>
          <button 
            onClick={() => onPageChange('plans')}
            className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 text-lg"
          >
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}