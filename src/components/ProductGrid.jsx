import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useLanguage } from './LanguageProvider';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function ProductGrid() {
  const { t } = useLanguage();
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function load(seedIfEmpty = true) {
      try {
        const res = await fetch(`${API_BASE}/products?limit=8`);
        const data = await res.json();
        if ((data.items || []).length === 0 && seedIfEmpty) {
          await fetch(`${API_BASE}/seed`, { method: 'POST' }).catch(() => {});
          return load(false);
        }
        setItems(data.items || []);
      } catch {
        setItems([]);
      }
    }
    load();
  }, []);

  return (
    <section id="products" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl text-[var(--yellow)]" style={{ fontFamily: 'Moniqa Heading, serif' }}>{t('popular')}</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  );
}
