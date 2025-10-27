import { useLanguage } from './LanguageProvider';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="mt-16 border-t border-[#e6dca11a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#ebdea0]" />
          <span className="text-[#ebdea0]/80">diketo</span>
        </div>
        <p className="text-[#ebdea0]/60 text-sm">© {year} Diketo. {t('footer_rights')}.</p>
      </div>
    </footer>
  );
}
