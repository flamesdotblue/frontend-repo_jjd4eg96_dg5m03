import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import { LanguageProvider } from './components/LanguageProvider';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#01372a] text-white">
        <Navbar />
        <main>
          <Hero />
          <ProductGrid />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
