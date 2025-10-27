import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import { LanguageProvider } from './components/LanguageProvider';
import { CartProvider } from './components/CartContext';
import Catalog from './components/Catalog';
import CartPage from './components/CartPage';
import Checkout from './components/Checkout';

function Home() {
  return (
    <>
      <Hero />
      <ProductGrid />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <div className="min-h-screen bg-[var(--green)] text-white">
          <BrowserRouter>
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </div>
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;
