'use client';

import { useTranslations } from '@/app/hooks/useTranslations';

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useTranslations();

  const handleLanguageChange = (lang: string) => {
    changeLanguage(lang);
  };

  return (
    <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
      <button
        onClick={() => handleLanguageChange('ua')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          language === 'ua'
            ? 'bg-indigo-600 text-white'
            : 'text-gray-600 hover:text-indigo-600'
        }`}
        type="button"
      >
        UA
      </button>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          language === 'en'
            ? 'bg-indigo-600 text-white'
            : 'text-gray-600 hover:text-indigo-600'
        }`}
        type="button"
      >
        EN
      </button>
    </div>
  );
}