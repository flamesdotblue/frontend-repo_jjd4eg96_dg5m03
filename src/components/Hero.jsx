import { ArrowRight, Leaf } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full blur-3xl bg-[#ebdea0]/10" />
        <div className="absolute bottom-0 -right-10 w-[28rem] h-[28rem] rounded-full blur-3xl bg-[#2c5d4e]/30" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-[#ebdea0] bg-[#2c5d4e]/60 border border-[#e6dca11a] px-3 py-1 rounded-full mb-6">
            <Leaf size={16} />
            <span className="text-sm" style={{ fontFamily: 'Satoshi, Inter, system-ui, sans-serif' }}>{t('tagline')}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight text-[#ebdea0]" style={{ fontFamily: 'Moniqa Heading, serif' }}>
            {t('hero_title')}
          </h1>
          <p className="mt-5 text-lg text-[#ebdea0]/80 max-w-xl" style={{ fontFamily: 'Satoshi, Inter, system-ui, sans-serif' }}>
            {t('cta_subtitle')}
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#products" className="inline-flex items-center gap-2 bg-[#ebdea0] text-[#01372a] hover:bg-[#ebdea0]/90 px-5 py-3 rounded-md font-medium transition">
              {t('cta_shop')} <ArrowRight size={18} />
            </a>
            <a href="#about" className="inline-flex items-center gap-2 text-[#ebdea0] hover:text-white/90 transition">
              <span className="underline-offset-4 hover:underline">About</span>
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-2xl border border-[#e6dca11a] bg-[#002c20] shadow-[0_10px_30px_rgba(1,55,42,0.1)] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1604908176997-43162d23b6aa?q=80&w=1600&auto=format&fit=crop"
              alt="Diketo selection"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
