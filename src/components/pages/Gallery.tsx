import React, { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import PosterCard from '../PosterCard';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Designs' },
    { id: 'birth', name: 'Birth Announcements' },
    { id: 'memorial', name: 'Memorial' },
    { id: 'festival', name: 'Festivals' },
    { id: 'wedding', name: 'Weddings' },
    { id: 'birthday', name: 'Birthdays' },
    { id: 'graduation', name: 'Graduation' }
  ];

  const posters = [
    {
      title: "Birth Announcement - Little Star",
      category: "birth",
      image: "https://images.pexels.com/photos/1682497/pexels-photo-1682497.jpeg",
      price: "$24.99",
      featured: true
    },
    {
      title: "Memorial - Eternal Garden",
      category: "memorial",
      image: "https://images.pexels.com/photos/1616470/pexels-photo-1616470.jpeg",
      price: "$29.99"
    },
    {
      title: "Festival Celebration - Diwali Joy",
      category: "festival",
      image: "https://images.pexels.com/photos/1387176/pexels-photo-1387176.jpeg",
      price: "$19.99"
    },
    {
      title: "Wedding Invitation - Royal Romance",
      category: "wedding",
      image: "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg",
      price: "$34.99"
    },
    {
      title: "Birth Announcement - Rainbow Baby",
      category: "birth",
      image: "https://images.pexels.com/photos/1116302/pexels-photo-1116302.jpeg",
      price: "$24.99"
    },
    {
      title: "Memorial - Peaceful Memories",
      category: "memorial",
      image: "https://images.pexels.com/photos/1374125/pexels-photo-1374125.jpeg",
      price: "$29.99"
    },
    {
      title: "Birthday Celebration - Golden Years",
      category: "birthday",
      image: "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg",
      price: "$22.99"
    },
    {
      title: "Graduation Success - Achievement",
      category: "graduation",
      image: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg",
      price: "$26.99"
    },
    {
      title: "Festival - Christmas Wonder",
      category: "festival",
      image: "https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg",
      price: "$19.99"
    },
    {
      title: "Wedding - Elegant Union",
      category: "wedding",
      image: "https://images.pexels.com/photos/1445416/pexels-photo-1445416.jpeg",
      price: "$34.99"
    },
    {
      title: "Birth Announcement - Sweet Dreams",
      category: "birth",
      image: "https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg",
      price: "$24.99"
    },
    {
      title: "Memorial - Loving Tribute",
      category: "memorial",
      image: "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg",
      price: "$29.99"
    }
  ];

  const filteredPosters = posters.filter(poster => {
    const matchesCategory = selectedCategory === 'all' || poster.category === selectedCategory;
    const matchesSearch = poster.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Poster Gallery
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Browse our complete collection of beautifully crafted poster designs
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search designs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 border border-gray-200'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm">
                  ({selectedCategory === category.id ? filteredPosters.length : posters.filter(p => category.id === 'all' ? true : p.category === category.id).length})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Poster Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosters.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No designs found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedCategory === 'all' ? 'All Designs' : categories.find(c => c.id === selectedCategory)?.name}
                  <span className="text-lg font-normal text-gray-600 ml-2">
                    ({filteredPosters.length} designs)
                  </span>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredPosters.map((poster, index) => (
                  <PosterCard
                    key={index}
                    title={poster.title}
                    category={poster.category.charAt(0).toUpperCase() + poster.category.slice(1)}
                    image={poster.image}
                    price={poster.price}
                    featured={poster.featured}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}