'use client';

import Link from "next/link";
import { useTranslations } from "@/app/hooks/useTranslations";
import { useState } from "react";

export default function PricingPage() {
  const { t } = useTranslations();
  const [activeCategory, setActiveCategory] = useState('tariffs');

  const tariffs = [
    {
      name: t('basic'),
      price: '$99',
      currency: '',
      emoji: '🌱',
      borderColor: 'border-green-200',
      bgColor: 'from-green-400 to-blue-500',
      includes: [
        t('pages1to3Details'),
        t('fullResponsive'),
        t('basicSeoOptimization'),
        t('contactFormValidation'),
        t('googleMapsIntegration'),
        t('socialNetworks'),
        t('oneMonthFreeSupport'),
      ],
      idealFor: [
        t('businessCards'),
        t('simpleLandings'),
        t('personalPortfolio'),
        t('smallBusiness'),
      ],
      execution: t('days1to3'),
      highlighted: false,
    },
    {
      name: t('startupTariff'),
      price: '$499',
      currency: '',
      emoji: '🚀',
      borderColor: 'border-blue-200',
      bgColor: 'from-blue-400 to-purple-500',
      includes: [
        t('upTo5PagesDetails'),
        t('modernResponsiveDesign'),
        t('fullSeoOptimizationDetails'),
        t('basicAuthSystem'),
        t('multipleContactForms'),
        t('blogOrNews'),
        t('socialNetworksIntegration'),
        t('googleAnalytics'),
        t('twoMonthsFreeSupport'),
      ],
      idealFor: [
        t('mvpProjects'),
        t('startups'),
        t('functionalSites'),
        t('mediumBusiness'),
      ],
      execution: t('weeks1to2'),
      highlighted: false,
    },
    {
      name: t('businessTariff'),
      price: '$999',
      currency: '',
      emoji: '💼',
      borderColor: 'border-indigo-500',
      bgColor: 'from-indigo-500 to-purple-600',
      includes: [
        t('upTo15PagesDetails'),
        t('fullAuthSystem'),
        t('databaseAndBackend'),
        t('apiIntegrationsDetails'),
        t('userRoles'),
        t('emailNotifications'),
        t('analyticsAndReports'),
        t('mobilePWA'),
        t('threeMonthsFreeSupport'),
      ],
      idealFor: [
        t('saasAppsIdeal'),
        t('ecommerce'),
        t('crmSystems'),
        t('learningPlatforms'),
        t('socialNetworksIdeal'),
      ],
      execution: t('weeks2to3'),
      highlighted: true,
      badge: t('mostPopular'),
    },
    {
      name: t('enterpriseTariff'),
      price: '$1699+',
      currency: '',
      emoji: '🏢',
      borderColor: 'border-purple-200',
      bgColor: 'from-purple-500 to-pink-500',
      includes: [
        t('unlimitedPages'),
        t('fullApiIntegrationsDetails'),
        t('paymentSystemsDetails'),
        t('microserviceArchitecture'),
        t('advancedAnalytics'),
        t('autoScaling'),
        t('crmErpIntegration'),
        t('multiLanguage'),
        t('devOpsCiCd'),
        t('sixMonthsFreeSupport'),
      ],
      idealFor: [
        t('largeCorporations'),
        t('complexPlatforms'),
        t('internationalProjects'),
        t('bankingSystems'),
        t('governmentProjects'),
      ],
      execution: t('monthsIndividual'),
      highlighted: false,
    },
  ];

  const smallBusinessServices = [
    {
      title: t('businessWebsiteService'),
      desc: t('businessWebsiteDesc'),
      price: '$299',
      icon: '🏪',
      features: ['1-3 сторінки', 'Каталог товарів', 'Контакти', '1 місяць підтримки'],
      timeline: '3-5 днів',
      color: 'bg-blue-50',
    },
    {
      title: t('onlineStoreService'),
      desc: t('onlineStoreDesc'),
      price: '$599',
      icon: '🛒',
      features: ['До 50 товарів', 'Платежі (Stripe, Liqpay)', 'Управління замовленнями', '2 місяці підтримки'],
      timeline: '1-2 тижні',
      color: 'bg-green-50',
    },
    {
      title: t('bookingSystemService'),
      desc: t('bookingSystemDesc'),
      price: '$699',
      icon: '📅',
      features: ['Календар запису', 'Email повідомлення', 'Управління клієнтами', 'Автоматизація'],
      timeline: '1-2 тижні',
      color: 'bg-purple-50',
    },
    {
      title: t('portfolioWebsiteService'),
      desc: t('portfolioWebsiteDesc'),
      price: '$399',
      icon: '🎨',
      features: ['Сучасний дизайн', 'Галереї та портфоліо', 'SEO оптимізація', '1 місяць підтримки'],
      timeline: '4-7 днів',
      color: 'bg-pink-50',
    },
  ];

  const saasServices = [
    {
      title: t('saasAppService'),
      desc: t('saasAppDesc'),
      price: '$1299+',
      icon: '⚙️',
      features: ['Повна авторизація', 'Платежі та підписка', 'API', 'Розширена аналітика'],
      timeline: '3-4 тижні',
      color: 'bg-indigo-50',
    },
    {
      title: t('crmSystemService'),
      desc: t('crmSystemDesc'),
      price: '$899',
      icon: '👥',
      features: ['Управління контактами', 'Пайплайн продажів', 'Завдання та нотатки', 'Звіти'],
      timeline: '2-3 тижні',
      color: 'bg-yellow-50',
    },
    {
      title: t('projectManagementService'),
      desc: t('projectManagementDesc'),
      price: '$799',
      icon: '✓',
      features: ['Управління задачами', 'Таймер часу', 'Командна співпраця', 'Звіти'],
      timeline: '2-3 тижні',
      color: 'bg-cyan-50',
    },
    {
      title: t('analyticsToolService'),
      desc: t('analyticsToolDesc'),
      price: '$599',
      icon: '📊',
      features: ['Персональні дашборди', 'Real-time дані', 'Експорт звітів', 'AI аналізи'],
      timeline: '1-2 тижні',
      color: 'bg-orange-50',
    },
  ];

  const landingServices = [
    {
      title: t('convertingLandingService'),
      desc: t('convertingLandingDesc'),
      price: '$399',
      icon: '💰',
      features: ['1 сторінка', 'CTA оптимізація', 'A/B тести', '1 місяць правок'],
      timeline: '3-5 днів',
      color: 'bg-emerald-50',
    },
    {
      title: t('eventLandingService'),
      desc: t('eventLandingDesc'),
      price: '$349',
      icon: '🎉',
      features: ['Реєстрація', 'Email лист', 'Платіжна форма', 'QR код'],
      timeline: '2-4 дні',
      color: 'bg-red-50',
    },
    {
      title: t('funnelLandingService'),
      desc: t('funnelLandingDesc'),
      price: '$699',
      icon: '🔀',
      features: ['3-5 сторінок', 'Автосеквенс', 'Умовна логіка', 'Аналітика'],
      timeline: '1-2 тижні',
      color: 'bg-violet-50',
    },
  ];

  const additionalServices = [
    { title: t('siteAudit'), desc: t('siteAuditDescription'), price: '$45', icon: '🔍', time: '2 дні' },
    { title: t('redesign'), desc: t('redesignDescription'), price: '$250', icon: '✨', time: '1 тиждень' },
    { title: t('speedOptimization'), desc: t('speedOptimizationDescription'), price: '$89', icon: '⚡', time: '2-3 дні' },
    { title: t('seoBoost'), desc: t('seoBoostDescription'), price: '$180', icon: '📈', time: '1 тиждень' },
    { title: t('aiChatbot'), desc: t('aiChatbotDescription'), price: '$199', icon: '🤖', time: '3-5 днів' },
    { title: t('securityPro'), desc: t('securityProDescription'), price: '$79', icon: '🛡️', time: 'Миттєво' },
    { title: t('analyticsPlus'), desc: t('analyticsPlusDescription'), price: '$120', icon: '📊', time: '2 дні' },
    { title: t('apiMagic'), desc: t('apiMagicDescription'), price: '$50', icon: '🔌', time: '3-7 днів' },
    { title: t('contentManagementService'), desc: t('contentManagementDesc'), price: '$99/міс', icon: '📝', time: 'Щомісячно' },
    { title: t('trainingService'), desc: t('trainingServiceDesc'), price: '$150', icon: '👨‍🏫', time: '2 години' },
    { title: t('emailMarketingService'), desc: t('emailMarketingDesc'), price: '$199', icon: '📧', time: '3-5 днів' },
    { title: t('smsMarketingService'), desc: t('smsMarketingDesc'), price: '$149', icon: '📱', time: '2-3 дні' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-indigo-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold font-display bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Мар'ян Собчук
            </Link>
            <Link href="/" className="text-gray-600 hover:text-indigo-600">
              {t('backToHomepage')}
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-6">
            {t('pricingServicesTitle')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('detailedDescription')}
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-md z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActiveCategory('tariffs')}
              className={`px-4 py-2 rounded-lg font-semibold ${
                activeCategory === 'tariffs'
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              📦 Тарифи
            </button>
            <button
              onClick={() => setActiveCategory('smallBusiness')}
              className={`px-4 py-2 rounded-lg font-semibold ${
                activeCategory === 'smallBusiness'
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              🏢 Малий бізнес
            </button>
            <button
              onClick={() => setActiveCategory('saas')}
              className={`px-4 py-2 rounded-lg font-semibold ${
                activeCategory === 'saas'
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              ⚙️ SaaS
            </button>
            <button
              onClick={() => setActiveCategory('landing')}
              className={`px-4 py-2 rounded-lg font-semibold ${
                activeCategory === 'landing'
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              🎯 Лендінги
            </button>
            <button
              onClick={() => setActiveCategory('additional')}
              className={`px-4 py-2 rounded-lg font-semibold ${
                activeCategory === 'additional'
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              🔧 Додаткові
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* TARIFFS SECTION */}
          {activeCategory === 'tariffs' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center mb-12">💎 Основні тарифні плани</h2>
              {tariffs.map((tariff, idx) => (
                <div key={idx} className={`bg-white rounded-2xl shadow-xl p-8 border-2 ${tariff.borderColor} ${tariff.highlighted ? 'relative lg:scale-105' : ''}`}>
                  {tariff.highlighted && (
                    <div className="absolute -top-4 left-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      {tariff.badge}
                    </div>
                  )}
                  <div className="flex items-center mb-6 mt-2">
                    <div className={`w-16 h-16 bg-gradient-to-r ${tariff.bgColor} rounded-full flex items-center justify-center mr-6`}>
                      <span className="text-white text-2xl">{tariff.emoji}</span>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold font-display text-gray-900">{tariff.name}</h3>
                      <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{tariff.price}</div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">{t('includesText')}</h4>
                      <ul className="space-y-3">
                        {tariff.includes.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className={`${tariff.highlighted ? 'text-indigo-500' : 'text-green-500'} mr-3 mt-1`}>✓</span>
                            <span className="text-gray-800">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">{t('idealForTitle')}</h4>
                      <ul className="space-y-2 text-gray-600 mb-6">
                        {tariff.idealFor.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                      <div className={`p-4 ${tariff.highlighted ? 'bg-indigo-50' : 'bg-gray-50'} rounded-lg`}>
                        <div className={`font-semibold ${tariff.highlighted ? 'text-indigo-800' : 'text-gray-800'}`}>{t('executionTimeTitle')}</div>
                        <div className={`${tariff.highlighted ? 'text-indigo-700' : 'text-gray-700'}`}>{tariff.execution}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* SMALL BUSINESS SECTION */}
          {activeCategory === 'smallBusiness' && (
            <div>
              <h2 className="text-3xl font-bold text-center mb-12">🏢 Рішення для малого бізнесу</h2>
              <p className="text-center text-gray-600 mb-8">Готові рішення для малих бізнесів, які хочуть отримати присутність в інтернеті</p>
              <div className="grid md:grid-cols-2 gap-6">
                {smallBusinessServices.map((service, idx) => (
                  <div key={idx} className={`${service.color} rounded-2xl p-8 shadow-lg`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="text-4xl mr-3">{service.icon}</span>
                        <h3 className="text-2xl font-bold text-gray-900 inline">{service.title}</h3>
                      </div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{service.price}</div>
                    </div>
                    <p className="text-gray-700 mb-4">{service.desc}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Включає:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        {service.features.map((f, i) => (
                          <li key={i}>✓ {f}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-xs text-blue-600 font-semibold">⏱️ {service.timeline}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SAAS SECTION */}
          {activeCategory === 'saas' && (
            <div>
              <h2 className="text-3xl font-bold text-center mb-12">⚙️ SaaS платформи та системи</h2>
              <p className="text-center text-gray-600 mb-8">Повнофункціональні системи управління для розширення вашого бізнесу</p>
              <div className="grid md:grid-cols-2 gap-6">
                {saasServices.map((service, idx) => (
                  <div key={idx} className={`${service.color} rounded-2xl p-8 shadow-lg`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="text-4xl mr-3">{service.icon}</span>
                        <h3 className="text-2xl font-bold text-gray-900 inline">{service.title}</h3>
                      </div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{service.price}</div>
                    </div>
                    <p className="text-gray-700 mb-4">{service.desc}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Функції:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        {service.features.map((f, i) => (
                          <li key={i}>✓ {f}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-xs text-blue-600 font-semibold">⏱️ {service.timeline}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* LANDING PAGES SECTION */}
          {activeCategory === 'landing' && (
            <div>
              <h2 className="text-3xl font-bold text-center mb-12">🎯 Лендінг пейджи та Sales Funnels</h2>
              <p className="text-center text-gray-600 mb-8">Висококонвертуючі сторінки для продажу ваших продуктів та послуг</p>
              <div className="grid md:grid-cols-3 gap-6">
                {landingServices.map((service, idx) => (
                  <div key={idx} className={`${service.color} rounded-2xl p-8 shadow-lg`}>
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-4xl">{service.icon}</span>
                      <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{service.price}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-700 mb-4">{service.desc}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Включає:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        {service.features.map((f, i) => (
                          <li key={i}>✓ {f}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-xs text-blue-600 font-semibold">⏱️ {service.timeline}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ADDITIONAL SERVICES SECTION */}
          {activeCategory === 'additional' && (
            <div>
              <h2 className="text-3xl font-bold text-center mb-12">🔧 Додаткові послуги</h2>
              <p className="text-center text-gray-600 mb-8">Послуги які можна додати до основного проекту або замовити окремо</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {additionalServices.map((service, idx) => (
                  <div key={idx} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-4xl">{service.icon}</span>
                      <span className="text-sm text-green-600 font-semibold">{service.time}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{service.desc}</p>
                    <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{service.price}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl p-8 border-2 border-yellow-300 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🎁 {t('specialOffers')}</h2>
            <p className="text-lg text-gray-600 mb-6">{t('specialOffersDescription')}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">💚 {t('auditSeoDiscount')}</span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">💙 {t('redesignSpeedDiscount')}</span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold">💜 {t('any3ServicesDiscount')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">{t('readyToStart')}</h2>
            <p className="text-xl mb-8 text-indigo-100">{t('readyToStartDescription')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
                {t('orderConsultation')}
              </Link>
              <Link href="/" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600">
                {t('backToHome')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
