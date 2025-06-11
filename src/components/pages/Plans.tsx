import React from 'react';
import { Check, Star, Crown, Zap } from 'lucide-react';
import { Plan } from '../../types';

export default function Plans() {
  const plans: Plan[] = [
    {
      id: 'basic',
      name: 'Basic',
      price: '$9.99',
      period: 'per design',
      features: [
        '1 Custom Poster Design',
        'High-Resolution Download',
        'PDF & PNG Formats',
        'Email Support',
        '3 Minor Revisions'
      ],
      cta: 'Get Started'
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '$24.99',
      period: 'per month',
      features: [
        '5 Custom Poster Designs',
        'All Basic Features',
        'Priority Support',
        'Unlimited Revisions',
        'Print-Ready Files',
        'Commercial License',
        'Template Library Access'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      id: 'business',
      name: 'Business',
      price: '$49.99',
      period: 'per month',
      features: [
        'Unlimited Poster Designs',
        'All Premium Features',
        'Dedicated Account Manager',
        'Rush Delivery (24hrs)',
        'Brand Guidelines Setup',
        'Team Collaboration',
        'Bulk Discounts',
        'API Access'
      ],
      cta: 'Contact Sales'
    }
  ];

  const features = [
    {
      icon: Star,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee or your money back"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Most designs delivered within 24-48 hours"
    },
    {
      icon: Crown,
      title: "Professional Designers",
      description: "Expert designers with years of experience"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Select the perfect plan for your poster design needs. All plans include our satisfaction guarantee.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? 'border-2 border-indigo-600 transform scale-105' : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Plans?
            </h2>
            <p className="text-xl text-gray-600">
              Every plan comes with these amazing benefits
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
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

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "Can I cancel my subscription anytime?",
                answer: "Yes, you can cancel your subscription at any time. There are no long-term commitments, and you'll continue to have access until the end of your billing period."
              },
              {
                question: "What if I'm not satisfied with my design?",
                answer: "We offer unlimited revisions on Premium and Business plans, and up to 3 revisions on Basic plans. If you're still not satisfied, we provide a 100% money-back guarantee within 30 days."
              },
              {
                question: "How long does it take to receive my poster?",
                answer: "Most designs are delivered within 24-48 hours. Business plan customers can request rush delivery for completion within 24 hours at no extra charge."
              },
              {
                question: "What file formats do I receive?",
                answer: "All plans include high-resolution PDF and PNG files. Premium and Business plans also include print-ready files optimized for professional printing."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Join thousands of satisfied customers who create beautiful posters with PosterCraft
          </p>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 text-lg">
            Start Your Free Trial
          </button>
        </div>
      </section>
    </div>
  );
}