import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { Products } from './components/Products';
import { CategoryPage } from './components/CategoryPage';
import { About } from './components/About';
import { ContactPage } from './components/ContactPage';
import { UserProfile } from './components/UserProfile';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { useCart } from './hooks/useCart';
import { products } from './data/products';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems
  } = useCart();

  const renderPage = () => {
    switch (currentPage) {
      case 'skincare':
        return <CategoryPage category="skincare" products={products} onAddToCart={addToCart} />;
      case 'makeup':
        return <CategoryPage category="makeup" products={products} onAddToCart={addToCart} />;
      case 'fragrance':
        return <CategoryPage category="fragrance" products={products} onAddToCart={addToCart} />;
      case 'about':
        return <About />;
      case 'contact':
        return <ContactPage />;
      case 'profile':
        return <UserProfile />;
      default:
        return (
          <>
            <Hero />
            <Categories />
            <Products onAddToCart={addToCart} />
            <About />
          </>
        );
    }
  };
  return (
    <div className="min-h-screen bg-white">
      <Header
        onCartClick={() => setIsCartOpen(true)}
        cartItemCount={getTotalItems()}
        onNavigate={setCurrentPage}
      />
      {renderPage()}
      <Footer />
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        totalPrice={getTotalPrice()}
      />
    </div>
  );
}

export default App;