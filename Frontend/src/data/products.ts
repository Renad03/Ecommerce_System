import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'skincare',
    name: 'Skincare',
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Nourish and rejuvenate your skin with our premium skincare collection'
  },
  {
    id: 'makeup',
    name: 'Makeup',
    image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Express your beauty with our vibrant makeup essentials'
  },
  {
    id: 'fragrance',
    name: 'Fragrance',
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Discover your signature scent from our luxurious fragrance collection'
  }
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Vitamin C Brightening Serum',
    price: 89.99,
    originalPrice: 109.99,
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'skincare',
    rating: 4.8,
    reviews: 342,
    description: 'A powerful vitamin C serum that brightens and evens skin tone',
    isNew: true,
    isSale: true
  },
  {
    id: 2,
    name: 'Hydrating Face Moisturizer',
    price: 65.99,
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'skincare',
    rating: 4.9,
    reviews: 528,
    description: 'Deeply moisturizes and nourishes all skin types',
    isNew: false
  },
  {
    id: 3,
    name: 'Matte Liquid Lipstick Set',
    price: 45.99,
    image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'makeup',
    rating: 4.7,
    reviews: 289,
    description: 'Long-lasting matte finish in 6 stunning shades',
    isNew: true
  },
  {
    id: 4,
    name: 'Radiant Foundation',
    price: 55.99,
    image: 'https://images.pexels.com/photos/3685538/pexels-photo-3685538.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'makeup',
    rating: 4.6,
    reviews: 412,
    description: 'Full coverage foundation with natural radiant finish',
    isNew: false
  },
  {
    id: 5,
    name: 'Signature Eau de Parfum',
    price: 125.99,
    originalPrice: 149.99,
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'fragrance',
    rating: 4.9,
    reviews: 156,
    description: 'Elegant floral fragrance with notes of jasmine and rose',
    isNew: false,
    isSale: true
  },
  {
    id: 6,
    name: 'Retinol Night Cream',
    price: 95.99,
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'skincare',
    rating: 4.8,
    reviews: 234,
    description: 'Anti-aging night cream with retinol and peptides',
    isNew: true
  },
  {
    id: 7,
    name: 'Eyeshadow Palette',
    price: 75.99,
    image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'makeup',
    rating: 4.7,
    reviews: 367,
    description: '18 highly pigmented shades in matte and shimmer finishes',
    isNew: false
  },
  {
    id: 8,
    name: 'Gentle Cleansing Oil',
    price: 42.99,
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'skincare',
    rating: 4.9,
    reviews: 445,
    description: 'Deep cleansing oil that removes makeup and impurities',
    isNew: false
  },
  {
    id: 9,
    name: 'Hyaluronic Acid Serum',
    price: 78.99,
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'skincare',
    rating: 4.7,
    reviews: 298,
    description: 'Intense hydration serum with multiple molecular weights',
    isNew: true
  },
  {
    id: 10,
    name: 'Niacinamide Pore Refining Serum',
    price: 52.99,
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'skincare',
    rating: 4.6,
    reviews: 187,
    description: 'Minimizes pores and controls oil production',
    isNew: false
  },
  {
    id: 11,
    name: 'Waterproof Mascara',
    price: 32.99,
    image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'makeup',
    rating: 4.8,
    reviews: 456,
    description: 'Long-lasting, smudge-proof formula for dramatic lashes',
    isNew: false
  },
  {
    id: 12,
    name: 'Contouring Palette',
    price: 68.99,
    image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'makeup',
    rating: 4.5,
    reviews: 234,
    description: 'Professional contouring and highlighting palette',
    isNew: true
  },
  {
    id: 13,
    name: 'Luxury Perfume Collection',
    price: 189.99,
    originalPrice: 220.99,
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'fragrance',
    rating: 4.9,
    reviews: 89,
    description: 'Exclusive collection of three signature scents',
    isNew: true,
    isSale: true
  },
  {
    id: 14,
    name: 'Fresh Citrus Cologne',
    price: 95.99,
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'fragrance',
    rating: 4.6,
    reviews: 167,
    description: 'Refreshing citrus blend perfect for everyday wear',
    isNew: false
  },
  {
    id: 15,
    name: 'Evening Glamour Perfume',
    price: 145.99,
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'fragrance',
    rating: 4.8,
    reviews: 123,
    description: 'Sophisticated evening fragrance with warm, sensual notes',
    isNew: false
  }
];