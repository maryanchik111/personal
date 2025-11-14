'use client';

import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./components/MobileMenu";
import ScrollProgress from "./components/ScrollProgress";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { useTranslations } from '@/app/hooks/useTranslations';

export default function Home() {
  const { t } = useTranslations();
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      <ScrollProgress />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-indigo-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold font-display bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Мар'ян Собчук
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">{t('aboutMe')}</a>
              <a href="#services" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">{t('services')}</a>
              <a href="#portfolio" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">{t('portfolio')}</a>
              <a href="#pricing" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">{t('pricing')}</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">{t('contact')}</a>
              <LanguageSwitcher />
              <a href="#contact" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                {t('getFreeConsultation')}
              </a>
            </div>
            <MobileMenu />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-display text-gray-900 mb-6 leading-tight">
              Test Page
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Simple test content
            </p>
          </div>
        </div>
      </section>

      {/* Test Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2>Test Skills Section</h2>
        </div>
      </section>

    </div>
  );
}