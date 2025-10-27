import { useState } from 'react';
import { useCart } from './CartContext';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Checkout() {
  const { items, total, clear } = useCart();
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', city: '', notes: '' });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setError('');
    try {
      const res = await fetch(`${API_BASE}/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map((i) => ({ slug: i.slug, title: i.title, price: i.price, quantity: i.quantity, image: i.image })),
          customer: form,
          total: Number(total.toFixed(2)),
          currency: 'RON',
        }),
      });
      if (!res.ok) throw new Error('Failed to create order');
      const data = await res.json();
      clear();
      setStatus('success');
    } catch (e) {
      setError(e.message || 'Error');
      setStatus('error');
    }
  };

  if (items.length === 0 && status !== 'success') {
    return (
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl text-[var(--yellow)] mb-6" style={{ fontFamily: 'Moniqa Heading, serif' }}>Checkout</h2>
        <p className="text-[var(--yellow)]/80">Your cart is empty.</p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl text-[var(--yellow)] mb-6" style={{ fontFamily: 'Moniqa Heading, serif' }}>Checkout</h2>
      {status === 'success' ? (
        <div className="rounded-xl border border-[var(--border)] bg-[var(--dark-green)] p-6 text-[var(--yellow)]">
          <h3 className="text-xl mb-2">Thank you!</h3>
          <p className="text-[var(--yellow)]/80">Your order has been placed successfully.</p>
        </div>
      ) : (
        <form onSubmit={submit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
              <Input label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
              <Input label="Phone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
              <Input label="City" value={form.city} onChange={(v) => setForm({ ...form, city: v })} />
            </div>
            <Input label="Address" value={form.address} onChange={(v) => setForm({ ...form, address: v })} required />
            <Textarea label="Notes" value={form.notes} onChange={(v) => setForm({ ...form, notes: v })} />
            {error && <p className="text-red-400">{error}</p>}
            <button disabled={status==='loading'} className="w-full sm:w-auto bg-[var(--yellow)] text-[var(--green)] hover:bg-[var(--yellow)]/90 px-5 py-2 rounded-md font-medium">
              {status==='loading' ? 'Placing...' : 'Place Order'}
            </button>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--dark-green)] p-6 h-fit">
            <h3 className="text-lg text-[var(--yellow)] mb-4">Summary</h3>
            <div className="space-y-3 mb-4">
              {items.map((i) => (
                <div key={i.slug} className="flex items-center justify-between text-[var(--yellow)]/85">
                  <span>{i.title} × {i.quantity}</span>
                  <span>{(i.price * i.quantity).toFixed(2)} RON</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between text-[var(--yellow)]">
              <span className="font-medium">Total</span>
              <span className="font-semibold">{total.toFixed(2)} RON</span>
            </div>
          </div>
        </form>
      )}
    </section>
  );
}

function Input({ label, value, onChange, type = 'text', required }) {
  return (
    <label className="block">
      <span className="block text-sm text-[var(--yellow)]/80 mb-1">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full rounded-md bg-[#002c20] border border-[var(--border)] px-3 py-2 text-[var(--yellow)] placeholder:text-[var(--yellow)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--light-gree)]"
      />
    </label>
  );
}

function Textarea({ label, value, onChange }) {
  return (
    <label className="block">
      <span className="block text-sm text-[var(--yellow)]/80 mb-1">{label}</span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        className="w-full rounded-md bg-[#002c20] border border-[var(--border)] px-3 py-2 text-[var(--yellow)] placeholder:text-[var(--yellow)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--light-gree)]"
      />
    </label>
  );
}
