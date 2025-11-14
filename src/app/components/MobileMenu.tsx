'use client';

import { useState } from 'react';
import { useTranslations } from '@/app/hooks/useTranslations';
import LanguageSwitcher from './LanguageSwitcher';

export default function MobileMenu() {
  const { t } = useTranslations();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 hover:text-blue-600 focus:outline-none"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-2 space-y-2">
            <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>
              {t('aboutMe')}
            </a>
            <a href="#services" className="block py-2 text-gray-700 hover:text-indigo-600" onClick={() => setIsOpen(false)}>
              {t('services')}
            </a>
            <a href="#portfolio" className="block py-2 text-gray-700 hover:text-indigo-600" onClick={() => setIsOpen(false)}>
              {t('portfolio')}
            </a>
            <a href="#pricing" className="block py-2 text-gray-700 hover:text-indigo-600" onClick={() => setIsOpen(false)}>
              {t('pricing')}
            </a>
            <a href="#contact" className="block py-2 text-gray-700 hover:text-indigo-600" onClick={() => setIsOpen(false)}>
              {t('contact')}
            </a>
            <div className="flex justify-center py-2">
              <LanguageSwitcher />
            </div>
            <a href="#contact" className="block mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg text-center" onClick={() => setIsOpen(false)}>
              {t('getFreeConsultation')}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}