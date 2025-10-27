import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  updateQty: () => {},
  clear: () => {},
  total: 0,
});

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem('diketo_cart');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('diketo_cart', JSON.stringify(items));
  }, [items]);

  const addItem = (product, qty = 1) => {
    setItems((prev) => {
      const idx = prev.findIndex((p) => p.slug === product.slug);
      if (idx !== -1) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], quantity: copy[idx].quantity + qty };
        return copy;
      }
      return [
        ...prev,
        {
          slug: product.slug,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: qty,
        },
      ];
    });
  };

  const removeItem = (slug) => setItems((prev) => prev.filter((p) => p.slug !== slug));
  const updateQty = (slug, qty) => setItems((prev) => prev.map((p) => (p.slug === slug ? { ...p, quantity: Math.max(1, qty) } : p)));
  const clear = () => setItems([]);
  const total = useMemo(() => items.reduce((sum, i) => sum + i.price * i.quantity, 0), [items]);

  const value = { items, addItem, removeItem, updateQty, clear, total };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
