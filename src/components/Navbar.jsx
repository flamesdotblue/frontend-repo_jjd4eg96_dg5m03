import { ShoppingCart, Globe2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from './LanguageProvider';
import { useCart } from './CartContext';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const { items } = useCart();
  const count = items.reduce((s, i) => s + i.quantity, 0);
  const { pathname } = useLocation();

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-[#01372a]/70 border-b border-[var(--border)]">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[var(--yellow)]" />
          <span className="text-[var(--yellow)] text-lg font-semibold tracking-wide" style={{ fontFamily: 'Moniqa Heading, serif' }}>diketo</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/catalog" className={`text-[var(--yellow)]/90 hover:text-[var(--yellow)] transition ${pathname==='/catalog' ? 'underline' : ''}`}>{t('nav_products')}</Link>
          <a href="#about" className="text-[var(--yellow)]/90 hover:text-[var(--yellow)] transition">{t('nav_about')}</a>
          <a href="#contact" className="text-[var(--yellow)]/90 hover:text-[var(--yellow)] transition">{t('nav_contact')}</a>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === 'ru' ? 'ro' : 'ru')}
            className="inline-flex items-center gap-2 text-[var(--yellow)] bg-[var(--light-gree)] hover:bg-[var(--light-gree)]/90 border border-[var(--border)] px-3 py-2 rounded-md transition"
            aria-label="Switch language"
          >
            <Globe2 size={18} />
            <span className="text-sm" style={{ fontFamily: 'Satoshi, Inter, system-ui, sans-serif' }}>{lang.toUpperCase()}</span>
          </button>
          <Link to="/cart" className="relative inline-flex items-center gap-2 text-[var(--green)] bg-[var(--yellow)] hover:bg-[var(--yellow)]/90 px-3 py-2 rounded-md transition">
            <ShoppingCart size={18} />
            <span className="hidden sm:inline text-sm" style={{ fontFamily: 'Satoshi, Inter, system-ui, sans-serif' }}>Cart</span>
            {count > 0 && <span className="absolute -top-1 -right-1 bg-[var(--red)] text-white text-xs rounded-full px-1">{count}</span>}
          </Link>
        </div>
      </nav>
    </header>
  );
}
