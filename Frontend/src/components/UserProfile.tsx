import React, { useState } from 'react';
import {
  User,
  Settings,
  Package,
  Heart,
  MapPin,
  CreditCard,
  Bell,
  Shield,
  Edit3,
  Camera,
  Save,
  X,
  Star,
  Calendar,
  Truck,
  Gift,
  Award,
  Eye,
  Download
} from 'lucide-react';
import { AuthModal } from './AuthModal';

export const UserProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1990-05-15',
    skinType: 'combination',
    beautyPreferences: ['cruelty-free', 'organic', 'vegan'],
    avatar: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=200'
  });
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
  return !!localStorage.getItem('token'); // or sessionStorage
});

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: 'home',
      name: 'Home Address',
      street: '123 Beauty Lane',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      isDefault: true
    },
    {
      id: 2,
      type: 'work',
      name: 'Work Address',
      street: '456 Office Plaza',
      city: 'New York',
      state: 'NY',
      zip: '10002',
      isDefault: false
    }
  ]);

  const orders = [
    {
      id: 'ORD-2024-001',
      date: '2024-01-15',
      status: 'delivered',
      total: 156.99,
      items: 3,
      products: [
        { name: 'Vitamin C Serum', image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=100' },
        { name: 'Hydrating Moisturizer', image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=100' }
      ]
    },
    {
      id: 'ORD-2024-002',
      date: '2024-01-20',
      status: 'shipped',
      total: 89.50,
      items: 2,
      products: [
        { name: 'Matte Lipstick Set', image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=100' }
      ]
    },
    {
      id: 'ORD-2024-003',
      date: '2024-01-25',
      status: 'processing',
      total: 234.75,
      items: 4,
      products: [
        { name: 'Signature Perfume', image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=100' },
        { name: 'Night Cream', image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=100' }
      ]
    }
  ];

  const wishlistItems = [
    {
      id: 1,
      name: 'Luxury Face Mask Set',
      price: 125.99,
      originalPrice: 149.99,
      image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=200',
      inStock: true
    },
    {
      id: 2,
      name: 'Premium Foundation',
      price: 68.99,
      image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=200',
      inStock: false
    },
    {
      id: 3,
      name: 'Floral Eau de Parfum',
      price: 95.99,
      image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=200',
      inStock: true
    }
  ];

  const tabs = [
  { id: 'overview', name: 'Overview', icon: User },
  { id: 'orders', name: 'Orders', icon: Package },
  { id: 'wishlist', name: 'Wishlist', icon: Heart },
  { id: 'addresses', name: 'Addresses', icon: MapPin },
  { id: 'payment', name: 'Payment', icon: CreditCard },
  { id: 'preferences', name: 'Preferences', icon: Settings },
  { id: 'notifications', name: 'Notifications', icon: Bell },
  { id: 'security', name: 'Security', icon: Shield },
  {
    id: isLoggedIn ? 'logout' : 'login',
    name: isLoggedIn ? 'Logout' : 'Login',
    icon: X
  }
];


  const handleLogout = () => {
  localStorage.removeItem('token'); // or sessionStorage.clear()
  setIsLoggedIn(false);
  window.location.href = '/login';
};

const handleLogin = () => {
  window.location.href = '/login';
};

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'shipped': return 'bg-blue-100 text-blue-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };


  const renderOverview = () => (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className="bg-white rounded-2xl shadow-md p-8">
        <div className="flex items-center space-x-6">
          <div className="relative">
            <img
              src={profileData.avatar}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
            <button className="absolute bottom-0 right-0 bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition-colors duration-200">
              <Camera className="h-4 w-4" />
            </button>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {profileData.firstName} {profileData.lastName}
            </h2>
            <p className="text-gray-600 mb-4">{profileData.email}</p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-pink-500" />
                <span className="text-sm text-gray-600">VIP Member</span>
              </div>
              <div className="flex items-center space-x-2">
                <Gift className="h-5 w-5 text-purple-500" />
                <span className="text-sm text-gray-600">1,250 Points</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors duration-200 flex items-center space-x-2"
          >
            <Edit3 className="h-4 w-4" />
            <span>Edit Profile</span>
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Package className="h-6 w-6 text-pink-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">12</div>
          <div className="text-sm text-gray-600">Total Orders</div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="h-6 w-6 text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">8</div>
          <div className="text-sm text-gray-600">Wishlist Items</div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="h-6 w-6 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">4.8</div>
          <div className="text-sm text-gray-600">Avg Rating</div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift className="h-6 w-6 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">1,250</div>
          <div className="text-sm text-gray-600">Reward Points</div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-2xl shadow-md p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Recent Orders</h3>
          <button
            onClick={() => setActiveTab('orders')}
            className="text-pink-500 hover:text-pink-600 transition-colors duration-200 font-medium"
          >
            View All
          </button>
        </div>
        <div className="space-y-4">
          {orders.slice(0, 3).map((order) => (
            <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {order.products.slice(0, 2).map((product, index) => (
                    <img
                      key={index}
                      src={product.image}
                      alt={product.name}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{order.id}</div>
                  <div className="text-sm text-gray-600">{order.items} items • {order.date}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-gray-900">${order.total}</div>
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderOrders = () => (
    <div className="bg-white rounded-2xl shadow-md p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Order History</h3>
      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="border border-gray-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="font-semibold text-gray-900 text-lg">{order.id}</h4>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                  <span className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{order.date}</span>
                  </span>
                  <span>{order.items} items</span>
                  <span className="font-semibold">${order.total}</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                  {order.status}
                </span>
                <button className="text-pink-500 hover:text-pink-600 transition-colors duration-200">
                  <Eye className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 mb-4">
              {order.products.map((product, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <span className="text-sm text-gray-700">{product.name}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-4">
                {order.status === 'delivered' && (
                  <button className="text-pink-500 hover:text-pink-600 transition-colors duration-200 text-sm font-medium">
                    Reorder
                  </button>
                )}
                {order.status === 'shipped' && (
                  <button className="flex items-center space-x-1 text-blue-500 hover:text-blue-600 transition-colors duration-200 text-sm font-medium">
                    <Truck className="h-4 w-4" />
                    <span>Track Package</span>
                  </button>
                )}
              </div>
              <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors duration-200 text-sm">
                <Download className="h-4 w-4" />
                <span>Download Invoice</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderWishlist = () => (
    <div className="bg-white rounded-2xl shadow-md p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">My Wishlist</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistItems.map((item) => (
          <div key={item.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow duration-200">
            <div className="relative mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <button className="absolute top-2 right-2 bg-white text-red-500 p-2 rounded-full shadow-md hover:bg-red-50 transition-colors duration-200">
                <Heart className="h-4 w-4 fill-current" />
              </button>
              {!item.inStock && (
                <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                  <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                    Out of Stock
                  </span>
                </div>
              )}
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">{item.name}</h4>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-gray-900">${item.price}</span>
                {item.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
                )}
              </div>
            </div>
            <button
              disabled={!item.inStock}
              className={`w-full py-2 rounded-lg font-medium transition-colors duration-200 ${
                item.inStock
                  ? 'bg-pink-500 text-white hover:bg-pink-600'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              {item.inStock ? 'Add to Cart' : 'Notify When Available'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
  const renderAddresses = () => (
  <div className="bg-white rounded-2xl shadow-md p-8">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-2xl font-bold text-gray-900">Saved Addresses</h3>
      <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors duration-200">
        Add New Address
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {addresses.map((address) => (
        <div key={address.id} className="border border-gray-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-gray-900">{address.name}</h4>
            {address.isDefault && (
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                Default
              </span>
            )}
          </div>
          <div className="text-gray-600 space-y-1">
            <p>{address.street}</p>
            <p>{address.city}, {address.state} {address.zip}</p>
          </div>
          <div className="flex items-center space-x-3 mt-4">
            <button className="text-pink-500 hover:text-pink-600 transition-colors duration-200 text-sm font-medium">
              Edit
            </button>
            <button className="text-red-500 hover:text-red-600 transition-colors duration-200 text-sm font-medium">
              Delete
            </button>
            {!address.isDefault && (
              <button className="text-gray-500 hover:text-gray-700 transition-colors duration-200 text-sm font-medium">
                Set as Default
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);


 const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'orders':
        return renderOrders();
      case 'wishlist':
        return renderWishlist();
      case 'addresses':
        return renderAddresses(); // assuming you put the addresses JSX into a `renderAddresses()` function
      default:
        return (
          <div className="bg-white rounded-2xl shadow-md p-8 text-center">
            <div className="text-gray-400 text-6xl mb-4">🚧</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Coming Soon</h3>
            <p className="text-gray-600">This section is under development.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">My Account</h1>
          <p className="text-gray-600 mt-2">Manage your profile, orders, and preferences</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      if (tab.id === 'logout') {
                        handleLogout();
                      } else if (tab.id === 'login') {
                        setIsAuthModalOpen(true);
                      } else {
                        setActiveTab(tab.id);
                      }
                    }}
                    
                    
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'bg-pink-50 text-pink-600 border-r-2 border-pink-500'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    <span className="font-medium">{tab.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>

      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          {/* Edit Modal Code - no changes needed here */}
        </div>
      )}

       {isAuthModalOpen && (
  <AuthModal
    isOpen={isAuthModalOpen}
    onClose={() => setIsAuthModalOpen(false)}
    initialMode="login"
  />
)}
    </div>
  );
 

};