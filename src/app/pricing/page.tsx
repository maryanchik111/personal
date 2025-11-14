'use client';

import Link from "next/link";
import { useTranslations } from "@/app/hooks/useTranslations";

export default function PricingPage() {
  const { t } = useTranslations();
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-indigo-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold font-display bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Мар'ян Собчук
            </Link>
            <Link href="/" className="text-gray-600 hover:text-indigo-600 transition-colors">
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

      {/* Detailed Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            
            {/* Базовий тариф */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-6">
                  <span className="text-white text-2xl">🌱</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold font-display text-gray-900">{t('basic')}</h2>
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">$99</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('includesText')}</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start"><span className="text-green-500 mr-3 mt-1">✓</span><span className="text-gray-800">{t('pages1to3Details')}</span></li>
                    <li className="flex items-start"><span className="text-green-500 mr-3 mt-1">✓</span><span className="text-gray-800">{t('fullResponsive')}</span></li>
                    <li className="flex items-start"><span className="text-green-500 mr-3 mt-1">✓</span><span className="text-gray-800">{t('basicSeoOptimization')}</span></li>
                    <li className="flex items-start"><span className="text-green-500 mr-3 mt-1">✓</span><span className="text-gray-800">{t('contactFormValidation')}</span></li>
                    <li className="flex items-start"><span className="text-green-500 mr-3 mt-1">✓</span><span className="text-gray-800">{t('googleMapsIntegration')}</span></li>
                    <li className="flex items-start"><span className="text-green-500 mr-3 mt-1">✓</span><span className="text-gray-800">{t('socialNetworks')}</span></li>
                    <li className="flex items-start"><span className="text-green-500 mr-3 mt-1">✓</span><span className="text-gray-800">{t('oneMonthFreeSupport')}</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('idealFor')}</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• {t('businessCards')}</li>
                    <li>• {t('simpleLandings')}</li>
                    <li>• {t('personalPortfolio')}</li>
                    <li>• {t('smallBusiness')}</li>
                  </ul>
                  
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <div className="font-semibold text-green-800">{t('executionTime')}</div>
                    <div className="text-green-700">{t('days1to3')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Стартап тариф */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-6">
                  <span className="text-white text-2xl">🚀</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold font-display text-gray-900">{t('startupTariff')}</h2>
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">$499</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('whatIncludes')}</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start"><span className="text-blue-500 mr-3 mt-1">✓</span><span className="text-gray-800">{t('upTo5PagesDetails')}</span></li>
                    <li className="flex items-start"><span className="text-blue-500 mr-3 mt-1">✓</span><span className="text-gray-800">{t('modernResponsiveDesign')}</span></li>
                    <li className="flex items-start"><span className="text-blue-500 mr-3 mt-1">✓</span><span className="text-gray-800">{t('fullSeoOptimizationDetails')}</span></li>
                    <li className="flex items-start"><span className="text-blue-500 mr-3 mt-1">✓</span><span className="text-gray-800">{t('basicAuthSystem')}</span></li>
                    <li className="flex items-start"><span className="text-blue-500 mr-3 mt-1">✓</span><span className="text-gray-800">{t('multipleContactForms')}</span></li>
                    <li className="flex items-start"><span className="text-blue-500 mr-3 mt-1">✓</span><span className="text-gray-800">{t('blogOrNews')}</span></li>
                    <li className="flex items-start"><span className="text-blue-500 mr-3 mt-1">✓</span><span className="text-gray-800">{t('socialNetworksIntegration')}</span></li>
                    <li className="flex items-start"><span className="text-blue-500 mr-3 mt-1">✓</span><span className="text-gray-800">{t('googleAnalytics')}</span></li>
                    <li className="flex items-start"><span className="text-blue-500 mr-3 mt-1">✓</span><span className="text-gray-800">{t('twoMonthsFreeSupport')}</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('idealForTitle')}</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• {t('mvpProjects')}</li>
                    <li>• {t('startups')}</li>
                    <li>• {t('functionalSites')}</li>
                    <li>• {t('mediumBusiness')}</li>
                  </ul>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <div className="font-semibold text-blue-800">{t('executionTimeTitle')}</div>
                    <div className="text-blue-700">{t('weeks1to2')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Бізнес тариф */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-indigo-500 relative">
              <div className="absolute -top-4 left-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                {t('mostPopular')}
              </div>
              <div className="flex items-center mb-6 mt-2">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mr-6">
                  <span className="text-white text-2xl">💼</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold font-display text-gray-900">{t('businessTariff')}</h2>
                  <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">$999</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('whatIncludes')}</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start"><span className="text-indigo-500 mr-3 mt-1">✓</span><span className="text-gray-800">{t('upTo15PagesDetails')}</span></li>
                    <li className="flex items-start"><span className="text-indigo-500 mr-3 mt-1">✓</span><span className="text-gray-800">{t('fullAuthSystem')}</span></li>
                    <li className="flex items-start"><span className="text-indigo-500 mr-3 mt-1">✓</span><span className="text-gray-800">{t('databaseAndBackend')}</span></li>
                    <li className="flex items-start"><span className="text-indigo-500 mr-3 mt-1">✓</span><span className="text-gray-800">{t('adminPanel')}</span></li>
                    <li className="flex items-start"><span className="text-indigo-500 mr-3 mt-1">✓</span><span className="text-gray-800">{t('apiIntegrationsDetails')}</span></li>
                    <li className="flex items-start"><span className="text-indigo-500 mr-3 mt-1">✓</span><span className="text-gray-800">{t('userRoles')}</span></li>
                    <li className="flex items-start"><span className="text-indigo-500 mr-3 mt-1">✓</span><span className="text-gray-800">{t('emailNotifications')}</span></li>
                    <li className="flex items-start"><span className="text-indigo-500 mr-3 mt-1">✓</span><span className="text-gray-800">{t('analyticsAndReports')}</span></li>
                    <li className="flex items-start"><span className="text-indigo-500 mr-3 mt-1">✓</span><span className="text-gray-800">{t('mobilePWA')}</span></li>
                    <li className="flex items-start"><span className="text-indigo-500 mr-3 mt-1">✓</span><span className="text-gray-800">{t('threeMonthsFreeSupport')}</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('idealForTitle')}</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• {t('saasAppsIdeal')}</li>
                    <li>• {t('ecommerce')}</li>
                    <li>• {t('crmSystems')}</li>
                    <li>• {t('learningPlatforms')}</li>
                    <li>• {t('socialNetworksIdeal')}</li>
                  </ul>
                  
                  <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
                    <div className="font-semibold text-indigo-800">{t('executionTimeTitle')}</div>
                    <div className="text-indigo-700">{t('weeks2to3')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ентерпрайз тариф */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-purple-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-6">
                  <span className="text-white text-2xl">🏢</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold font-display text-gray-900">{t('enterpriseTariff')}</h2>
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">$1699+</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('whatIncludes')}</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start"><span className="text-purple-500 mr-3 mt-1">✓</span><span className="text-gray-800">{t('unlimitedPages')}</span></li>
                    <li className="flex items-start"><span className="text-purple-500 mr-3 mt-1">✓</span><span className="text-gray-800">{t('fullApiIntegrationsDetails')}</span></li>
                    <li className="flex items-start"><span className="text-purple-500 mr-3 mt-1">✓</span><span className="text-gray-800">{t('paymentSystemsDetails')}</span></li>
                    <li className="flex items-start"><span className="text-purple-500 mr-3 mt-1">✓</span><span className="text-gray-800">{t('microserviceArchitecture')}</span></li>
                    <li className="flex items-start"><span className="text-purple-500 mr-3 mt-1">✓</span><span className="text-gray-800">{t('advancedAnalytics')}</span></li>
                    <li className="flex items-start"><span className="text-purple-500 mr-3 mt-1">✓</span><span className="text-gray-800">{t('autoScaling')}</span></li>
                    <li className="flex items-start"><span className="text-purple-500 mr-3 mt-1">✓</span><span className="text-gray-800">{t('crmErpIntegration')}</span></li>
                    <li className="flex items-start"><span className="text-purple-500 mr-3 mt-1">✓</span><span className="text-gray-800">{t('multiLanguage')}</span></li>
                    <li className="flex items-start"><span className="text-purple-500 mr-3 mt-1">✓</span><span className="text-gray-800">{t('devOpsCiCd')}</span></li>
                    <li className="flex items-start"><span className="text-purple-500 mr-3 mt-1">✓</span><span className="text-gray-800">{t('sixMonthsFreeSupport')}</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('idealForTitle')}</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• {t('largeCorporations')}</li>
                    <li>• {t('complexPlatforms')}</li>
                    <li>• {t('internationalProjects')}</li>
                    <li>• {t('bankingSystems')}</li>
                    <li>• {t('governmentProjects')}</li>
                  </ul>
                  
                  <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                    <div className="font-semibold text-purple-800">{t('executionTimeTitle')}</div>
                    <div className="text-purple-700">{t('monthsIndividual')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Додаткові послуги */}
          <div className="mt-16 bg-gradient-to-br from-gray-50 to-indigo-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold font-display text-gray-900 mb-8 text-center">🚀 {t('additionalServices')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Швидкий аудит */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-3">🔍</span>
                  <h3 className="font-bold text-gray-900">{t('siteAudit')}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{t('siteAuditDescription')}</p>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">$45</div>
                <div className="text-xs text-green-600 mt-1">⚡ {t('readyIn2Days')}</div>
              </div>

              {/* Редизайн */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-3">✨</span>
                  <h3 className="font-bold text-gray-900">{t('redesign')}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{t('redesignDescription')}</p>
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{t('from')} $250</div>
                <div className="text-xs text-blue-600 mt-1">🎨 {t('mobileAdaptation')}</div>
              </div>

              {/* Швидкість сайту */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-3">⚡</span>
                  <h3 className="font-bold text-gray-900">{t('speedOptimization')}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{t('speedOptimizationDescription')}</p>
                <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">$89</div>
                <div className="text-xs text-orange-600 mt-1">🚀 {t('resultGuarantee')}</div>
              </div>

              {/* SEO Boost */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-yellow-500">
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-3">📈</span>
                  <h3 className="font-bold text-gray-900">{t('seoBoost')}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{t('seoBoostDescription')}</p>
                <div className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">$180</div>
                <div className="text-xs text-purple-600 mt-1">📊 {t('googleAnalyticsSetup')}</div>
              </div>

              {/* Чат-бот */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-cyan-500">
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-3">🤖</span>
                  <h3 className="font-bold text-gray-900">{t('aiChatbot')}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{t('aiChatbotDescription')}</p>
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">$199</div>
                <div className="text-xs text-green-600 mt-1">🧠 {t('trainingOnYourData')}</div>
              </div>

              {/* Безпека */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-red-500">
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-3">🛡️</span>
                  <h3 className="font-bold text-gray-900">{t('securityPro')}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{t('securityProDescription')}</p>
                <div className="text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">$79</div>
                <div className="text-xs text-indigo-600 mt-1">🔒 {t('automaticBackups')}</div>
              </div>

              {/* Аналітика */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-500">
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-3">📊</span>
                  <h3 className="font-bold text-gray-900">{t('analyticsPlus')}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{t('analyticsPlusDescription')}</p>
                <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">$120</div>
                <div className="text-xs text-cyan-600 mt-1">📈 {t('monthlyReportsIncluded')}</div>
              </div>

              {/* API Integration */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-teal-500">
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-3">🔌</span>
                  <h3 className="font-bold text-gray-900">{t('apiMagic')}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{t('apiMagicDescription')}</p>
                <div className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">{t('from')} $50</div>
                <div className="text-xs text-orange-600 mt-1">🎯 {t('forYourNeeds')}</div>
              </div>

              {/* Підтримка VIP */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-yellow-400">
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-3">👑</span>
                  <h3 className="font-bold text-gray-900">{t('vipSupport')}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{t('vipSupportDescription')}</p>
                <div className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">$69{t('perMonth')}</div>
                <div className="text-xs text-green-600 mt-1">⚡ {t('responseIn2Hours')}</div>
              </div>

            </div>
            
            {/* Додатковий блок з інформацією */}
            <div className="mt-8 bg-white rounded-xl p-6 border-2 border-dashed border-indigo-200">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">🎁 {t('specialOffers')}</h3>
                <p className="text-gray-600 mb-4">{t('specialOffersDescription')}</p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">💚 {t('auditSeoDiscount')}</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">💙 {t('redesignSpeedDiscount')}</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">💜 {t('any3ServicesDiscount')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold font-display mb-4">{t('readyToStart')}</h2>
              <p className="text-xl mb-6 text-indigo-100">{t('readyToStartDescription')}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contact" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  {t('orderConsultation')}
                </Link>
                <Link href="/" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                  {t('backToHome')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}