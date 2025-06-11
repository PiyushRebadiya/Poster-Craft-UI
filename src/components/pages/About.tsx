import React from 'react';
import { Heart, Users, Award, Target, Lightbulb, Palette } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We understand the importance of every moment and treat each project with care and respect."
    },
    {
      icon: Lightbulb,
      title: "Creativity",
      description: "Our designs blend artistic vision with personal meaning to create truly unique posters."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in design quality and customer satisfaction."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Founder & Creative Director",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      bio: "With 12 years in graphic design, Sarah founded PosterCraft to help families celebrate life's precious moments."
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Designer",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
      bio: "Michael specializes in memorial and celebration designs, bringing sensitivity and artistry to every piece."
    },
    {
      name: "Emma Thompson",
      role: "Customer Experience Manager",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      bio: "Emma ensures every customer receives personalized attention and support throughout their journey."
    }
  ];

  const milestones = [
    { year: "2016", event: "PosterCraft Founded", description: "Started with a simple mission to create beautiful memorials" },
    { year: "2018", event: "10,000+ Designs", description: "Reached our first major milestone in design creation" },
    { year: "2020", event: "International Expansion", description: "Extended services to customers worldwide" },
    { year: "2023", event: "AI Integration", description: "Launched AI-assisted design customization" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Crafting beautiful memories since 2016
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At PosterCraft, we believe every life moment deserves to be celebrated and remembered beautifully. 
                Whether it's welcoming a new baby, honoring a loved one's memory, or celebrating cultural festivals, 
                our designs help you express what words cannot.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Founded in 2016, we've grown from a small design studio to a trusted partner for families 
                worldwide, creating over 50,000 custom posters that capture the essence of life's most 
                meaningful moments.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-full">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Our Goal</h3>
                  <p className="text-gray-600">To make beautiful design accessible to everyone</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" 
                alt="Design process"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <Palette className="h-8 w-8 text-indigo-600" />
                  <div>
                    <div className="font-bold text-2xl text-gray-900">50,000+</div>
                    <div className="text-sm text-gray-600">Designs Created</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The passionate people behind PosterCraft
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-indigo-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 max-w-sm mx-auto">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our growth story
            </p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold px-4 py-2 rounded-full min-w-[80px] text-center">
                  {milestone.year}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.event}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}