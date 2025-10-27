import { ShoppingCart, Globe2 } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-[#01372a]/70 border-b border-[#e6dca11a]">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#ebdea0]" />
          <span className="text-[#ebdea0] text-lg font-semibold tracking-wide" style={{ fontFamily: 'Moniqa Heading, serif' }}>diketo</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-[#ebdea0]/90 hover:text-[#ebdea0] transition">{t('nav_products')}</a>
          <a href="#about" className="text-[#ebdea0]/90 hover:text-[#ebdea0] transition">{t('nav_about')}</a>
          <a href="#contact" className="text-[#ebdea0]/90 hover:text-[#ebdea0] transition">{t('nav_contact')}</a>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === 'ru' ? 'ro' : 'ru')}
            className="inline-flex items-center gap-2 text-[#ebdea0] bg-[#2c5d4e] hover:bg-[#2c5d4e]/90 border border-[#e6dca11a] px-3 py-2 rounded-md transition"
            aria-label="Switch language"
          >
            <Globe2 size={18} />
            <span className="text-sm" style={{ fontFamily: 'Satoshi, Inter, system-ui, sans-serif' }}>{lang.toUpperCase()}</span>
          </button>
          <button className="relative inline-flex items-center gap-2 text-[#01372a] bg-[#ebdea0] hover:bg-[#ebdea0]/90 px-3 py-2 rounded-md transition">
            <ShoppingCart size={18} />
            <span className="hidden sm:inline text-sm" style={{ fontFamily: 'Satoshi, Inter, system-ui, sans-serif' }}>Cart</span>
            <span className="absolute -top-1 -right-1 bg-[#f54e4e] text-white text-xs rounded-full px-1">0</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
