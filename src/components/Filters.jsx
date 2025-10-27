import { useEffect, useState } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Filters({ onChange }) {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [q, setQ] = useState('');
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [tags, setTags] = useState('');

  useEffect(() => {
    fetch(`${API_BASE}/categories`).then((r) => r.json()).then(setCategories).catch(() => setCategories([]));
  }, []);

  useEffect(() => {
    const payload = {
      category: category || undefined,
      q: q || undefined,
      min_price: min || undefined,
      max_price: max || undefined,
      tags: tags || undefined,
    };
    onChange(payload);
  }, [category, q, min, max, tags, onChange]);

  return (
    <aside className="w-full sm:w-64 shrink-0 rounded-xl border border-[var(--border)] bg-[var(--dark-green)] p-4 h-fit">
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-[var(--yellow)]/80 mb-1">Search</label>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search..." className="w-full rounded-md bg-[#002c20] border border-[var(--border)] px-3 py-2 text-[var(--yellow)] placeholder:text-[var(--yellow)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--light-gree)]" />
        </div>
        <div>
          <label className="block text-sm text-[var(--yellow)]/80 mb-1">Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full rounded-md bg-[#002c20] border border-[var(--border)] px-3 py-2 text-[var(--yellow)] focus:outline-none">
            <option value="">All</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-sm text-[var(--yellow)]/80 mb-1">Min</label>
            <input value={min} onChange={(e) => setMin(e.target.value)} type="number" min="0" className="w-full rounded-md bg-[#002c20] border border-[var(--border)] px-3 py-2 text-[var(--yellow)] focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm text-[var(--yellow)]/80 mb-1">Max</label>
            <input value={max} onChange={(e) => setMax(e.target.value)} type="number" min="0" className="w-full rounded-md bg-[#002c20] border border-[var(--border)] px-3 py-2 text-[var(--yellow)] focus:outline-none" />
          </div>
        </div>
        <div>
          <label className="block text-sm text-[var(--yellow)]/80 mb-1">Tags (comma)</label>
          <input value={tags} onChange={(e) => setTags(e.target.value)} placeholder="keto, gluten-free" className="w-full rounded-md bg-[#002c20] border border-[var(--border)] px-3 py-2 text-[var(--yellow)] placeholder:text-[var(--yellow)]/40 focus:outline-none" />
        </div>
      </div>
    </aside>
  );
}
