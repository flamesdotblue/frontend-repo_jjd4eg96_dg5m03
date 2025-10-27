import { Star, Plus } from 'lucide-react';
import { useCart } from './CartContext';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <article className="group rounded-xl overflow-hidden border border-[#e6dca11a] bg-[var(--dark-green)] hover:bg-[var(--light-gree)]/10 transition shadow-[0_10px_30px_var(--shadow)]">
      <div className="aspect-square overflow-hidden">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition" />
      </div>
      <div className="p-4">
        <h3 className="text-[var(--yellow)] text-lg mb-1" style={{ fontFamily: 'Satoshi, Inter, system-ui, sans-serif' }}>{product.title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-[var(--yellow)]/80">
            <Star size={16} className="fill-[var(--yellow)] text-[var(--yellow)]" />
            <span className="text-sm">{product.rating?.toFixed?.(1) ?? '4.8'}</span>
          </div>
          <span className="text-[var(--yellow)] font-semibold">{product.price.toFixed(2)} RON</span>
        </div>
        <button
          onClick={() => addItem(product, 1)}
          className="mt-3 w-full inline-flex items-center justify-center gap-2 bg-[var(--yellow)] text-[var(--green)] hover:bg-[var(--yellow)]/90 px-3 py-2 rounded-md transition"
        >
          <Plus size={18} /> Add to cart
        </button>
      </div>
    </article>
  );
}
