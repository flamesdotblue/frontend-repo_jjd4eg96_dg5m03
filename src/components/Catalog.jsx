import { useCallback, useEffect, useMemo, useState } from 'react';
import ProductCard from './ProductCard';
import Filters from './Filters';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Catalog() {
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const query = useMemo(() => {
    const params = new URLSearchParams();
    for (const [k, v] of Object.entries(filters)) {
      if (v !== undefined && v !== '') params.append(k, v);
    }
    return params.toString();
  }, [filters]);

  const load = useCallback(async (seedIfEmpty = true) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/products${query ? `?${query}` : ''}`);
      const data = await res.json();
      if ((data.items || []).length === 0 && seedIfEmpty) {
        await fetch(`${API_BASE}/seed`, { method: 'POST' }).catch(() => {});
        return load(false);
      }
      setProducts(data.items || []);
    } catch (e) {
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col sm:flex-row gap-6">
        <Filters onChange={setFilters} />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl text-[var(--yellow)]" style={{ fontFamily: 'Moniqa Heading, serif' }}>Catalog</h2>
            {loading && <span className="text-sm text-[var(--yellow)]/70">Loading...</span>}
          </div>
          {products.length === 0 && !loading ? (
            <p className="text-[var(--yellow)]/70">No products found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
