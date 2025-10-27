import { createContext, useContext, useMemo, useState } from 'react';

const LanguageContext = createContext({ lang: 'ru', setLang: () => {}, t: (key) => key });

const messages = {
  ru: {
    nav_products: 'Продукты',
    nav_about: 'О нас',
    nav_contact: 'Контакты',
    cta_shop: 'Каталог',
    cta_subtitle: 'Натуральные кетопродукты с доставкой на дом',
    hero_title: 'Дикето — вкусно, полезно, по-настоящему',
    popular: 'Популярное сейчас',
    add_to_cart: 'В корзину',
    footer_rights: 'Все права защищены',
    tagline: 'Чистый состав • Низкие углеводы • Без сахара',
  },
  ro: {
    nav_products: 'Produse',
    nav_about: 'Despre',
    nav_contact: 'Contacte',
    cta_shop: 'Catalog',
    cta_subtitle: 'Produse keto naturale cu livrare la domiciliu',
    hero_title: 'Diketo — gustoase, sănătoase, autentice',
    popular: 'Popular acum',
    add_to_cart: 'În coș',
    footer_rights: 'Toate drepturile rezervate',
    tagline: 'Ingrediente curate • Carbohidrați puțini • Fără zahăr',
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('ru');
  const t = useMemo(() => {
    return (key) => messages[lang]?.[key] ?? key;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang]);
  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
