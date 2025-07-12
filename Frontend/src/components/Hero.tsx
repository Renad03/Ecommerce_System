import React from 'react';
import { ArrowRight } from 'lucide-react';
import { AuthModal } from './AuthModal';

// Accept as prop
export const Hero: React.FC<{ setUser: (user: any) => void }> = ({ setUser }) => {

  const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);
  const [authMode, setAuthMode] = React.useState<'login' | 'signup'>('signup');

  return (
    <>
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Discover Your
                <span className="text-pink-500 block">Natural Beauty</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Explore our curated collection of premium skincare, makeup, and fragrances 
                designed to enhance your natural radiance.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => {
                  setAuthMode('signup');
                  setIsAuthModalOpen(true);
                }}
                className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors duration-200 flex items-center justify-center group"
              >
                Join Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border border-pink-500 text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-pink-500 hover:text-white transition-colors duration-200">
                Learn More
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Premium Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">4.9</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-purple-300 rounded-3xl transform rotate-6 opacity-20"></div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Beauty products"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              
              {/* Floating Product Cards */}
              <div className="absolute top-4 right-4 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                    <span className="text-pink-500 font-bold">★</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Premium Quality</div>
                    <div className="text-sm text-gray-600">Certified Products</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-500 font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Free Shipping</div>
                    <div className="text-sm text-gray-600">On orders over $50</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
        setUser={setUser}
      />

    </>
  );
};