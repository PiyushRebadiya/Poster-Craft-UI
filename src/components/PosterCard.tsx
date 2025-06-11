import React from 'react';
import { Star, Calendar, Heart } from 'lucide-react';

interface PosterCardProps {
  title: string;
  category: string;
  image: string;
  price?: string;
  rating?: number;
  featured?: boolean;
  onClick?: () => void;
}

export default function PosterCard({ 
  title, 
  category, 
  image, 
  price, 
  rating = 4.9, 
  featured = false,
  onClick 
}: PosterCardProps) {
  return (
    <div 
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group overflow-hidden"
      onClick={onClick}
    >
      {featured && (
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg absolute top-0 right-0 z-10">
          FEATURED
        </div>
      )}
      
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Heart className="h-8 w-8" />
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
            {category}
          </span>
          {rating && (
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-gray-600">{rating}</span>
            </div>
          )}
        </div>
        
        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center justify-between">
          {price && (
            <span className="text-lg font-bold text-gray-900">{price}</span>
          )}
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-1" />
            <span>Quick Delivery</span>
          </div>
        </div>
      </div>
    </div>
  );
}