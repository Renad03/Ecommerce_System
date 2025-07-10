import React from 'react';
import { Award, Shield, Truck, Users } from 'lucide-react';

export const About: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Only the finest ingredients and materials in every product'
    },
    {
      icon: Shield,
      title: 'Cruelty-Free',
      description: 'All our products are ethically sourced and never tested on animals'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Free shipping on orders over $50 with express delivery options'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Our beauty experts are here to help you find the perfect products'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Beauty That Inspires Confidence
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              At LuxeBeauty, we believe that beauty is more than skin deep. Our carefully curated 
              collection of premium skincare, makeup, and fragrances is designed to enhance your 
              natural radiance while promoting self-confidence and well-being.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Founded by beauty enthusiasts for beauty enthusiasts, we're committed to bringing 
              you the latest innovations in cosmetics and skincare from around the world. Every 
              product in our collection is chosen for its quality, effectiveness, and ethical standards.
            </p>
            <button className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors duration-200">
              Learn More About Us
            </button>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="About us"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};