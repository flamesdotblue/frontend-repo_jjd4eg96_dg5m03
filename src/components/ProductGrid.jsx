import { Star, Plus } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const products = [
  {
    id: 1,
    name: { ru: 'Кето батончик Миндаль', ro: 'Baton keto cu migdale' },
    price: '89 MDL',
    image: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjE1MDAxMzd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    rating: 4.9,
  },
  {
    id: 2,
    name: { ru: 'Хлеб без глютена', ro: 'Pâine fără gluten' },
    price: '115 MDL',
    image: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjE1MDAxMzd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    rating: 4.8,
  },
  {
    id: 3,
    name: { ru: 'Джем без сахара', ro: 'Gem fără zahăr' },
    price: '95 MDL',
    image: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjE1MDAxMzd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    rating: 4.7,
  },
  {
    id: 4,
    name: { ru: 'Ореховая паста', ro: 'Pastă de arahide' },
    price: '129 MDL',
    image: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjE1MDAxMzd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    rating: 5.0,
  },
];

export default function ProductGrid() {
  const { lang, t } = useLanguage();

  return (
    <section id="products" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl text-[#ebdea0]" style={{ fontFamily: 'Moniqa Heading, serif' }}>{t('popular')}</h2>
        </div>
        <a href="#" className="text-sm text-[#ebdea0]/80 hover:text-[#ebdea0] underline-offset-4 hover:underline">
          View all
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <article key={p.id} className="group rounded-xl overflow-hidden border border-[#e6dca11a] bg-[#002c20] hover:bg-[#2c5d4e]/10 transition shadow-[0_10px_30px_rgba(1,55,42,0.06)]">
            <div className="aspect-square overflow-hidden">
              <img src={p.image} alt={p.name[lang]} className="w-full h-full object-cover group-hover:scale-[1.03] transition" />
            </div>
            <div className="p-4">
              <h3 className="text-[#ebdea0] text-lg mb-1" style={{ fontFamily: 'Satoshi, Inter, system-ui, sans-serif' }}>{p.name[lang]}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-[#ebdea0]/80">
                  <Star size={16} className="fill-[#ebdea0] text-[#ebdea0]" />
                  <span className="text-sm">{p.rating}</span>
                </div>
                <span className="text-[#ebdea0] font-semibold">{p.price}</span>
              </div>
              <button className="mt-3 w-full inline-flex items-center justify-center gap-2 bg-[#ebdea0] text-[#01372a] hover:bg-[#ebdea0]/90 px-3 py-2 rounded-md transition">
                <Plus size={18} /> {t('add_to_cart')}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
