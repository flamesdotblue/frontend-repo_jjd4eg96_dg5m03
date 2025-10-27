import { Trash2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

export default function CartPage() {
  const { items, removeItem, updateQty, total } = useCart();

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl text-[var(--yellow)] mb-6" style={{ fontFamily: 'Moniqa Heading, serif' }}>Cart</h2>
      {items.length === 0 ? (
        <div className="rounded-xl border border-[var(--border)] bg-[var(--dark-green)] p-6 text-[var(--yellow)]/80">
          Your cart is empty. <Link to="/catalog" className="underline">Continue shopping</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {items.map((it) => (
              <div key={it.slug} className="flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--dark-green)] p-4">
                <img src={it.image} alt={it.title} className="w-20 h-20 rounded-md object-cover" />
                <div className="flex-1">
                  <h3 className="text-[var(--yellow)]">{it.title}</h3>
                  <div className="text-sm text-[var(--yellow)]/70">{(it.price).toFixed(2)} RON</div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => updateQty(it.slug, it.quantity - 1)} className="p-2 rounded-md border border-[var(--border)] text-[var(--yellow)]/80 hover:bg-[#002c20]"><Minus size={16} /></button>
                  <span className="w-8 text-center text-[var(--yellow)]">{it.quantity}</span>
                  <button onClick={() => updateQty(it.slug, it.quantity + 1)} className="p-2 rounded-md border border-[var(--border)] text-[var(--yellow)]/80 hover:bg-[#002c20]"><Plus size={16} /></button>
                </div>
                <div className="w-24 text-right text-[var(--yellow)] font-semibold">{(it.price * it.quantity).toFixed(2)} RON</div>
                <button onClick={() => removeItem(it.slug)} className="p-2 text-red-400 hover:text-red-300" aria-label="Remove"><Trash2 size={18} /></button>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--dark-green)] p-6 h-fit">
            <div className="flex items-center justify-between text-[var(--yellow)] mb-2">
              <span>Subtotal</span>
              <span className="font-semibold">{total.toFixed(2)} RON</span>
            </div>
            <p className="text-sm text-[var(--yellow)]/70 mb-4">Taxes and shipping calculated at checkout.</p>
            <Link to="/checkout" className="block text-center w-full bg-[var(--yellow)] text-[var(--green)] hover:bg-[var(--yellow)]/90 px-4 py-2 rounded-md font-medium">Proceed to Checkout</Link>
          </div>
        </div>
      )}
    </section>
  );
}
