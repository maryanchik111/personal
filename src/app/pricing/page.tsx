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
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">$150</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('includesText')}</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start"><span className="text-green-500 mr-3 mt-1">✓</span><span>{t('pages1to3Details')}</span></li>
                    <li className="flex items-start"><span className="text-green-500 mr-3 mt-1">✓</span><span>{t('fullResponsive')}</span></li>
                    <li className="flex items-start"><span className="text-green-500 mr-3 mt-1">✓</span><span>{t('basicSeoOptimization')}</span></li>
                    <li className="flex items-start"><span className="text-green-500 mr-3 mt-1">✓</span><span>{t('contactFormValidation')}</span></li>
                    <li className="flex items-start"><span className="text-green-500 mr-3 mt-1">✓</span><span>{t('googleMapsIntegration')}</span></li>
                    <li className="flex items-start"><span className="text-green-500 mr-3 mt-1">✓</span><span>{t('socialNetworks')}</span></li>
                    <li className="flex items-start"><span className="text-green-500 mr-3 mt-1">✓</span><span>{t('oneMonthFreeSupport')}</span></li>
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
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">$600</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Що входить:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start"><span className="text-blue-500 mr-3 mt-1">✓</span><span>До 5 сторінок</span></li>
                    <li className="flex items-start"><span className="text-blue-500 mr-3 mt-1">✓</span><span>Сучасний адаптивний дизайн</span></li>
                    <li className="flex items-start"><span className="text-blue-500 mr-3 mt-1">✓</span><span>Повна SEO оптимізація</span></li>
                    <li className="flex items-start"><span className="text-blue-500 mr-3 mt-1">✓</span><span>Базова система авторизації</span></li>
                    <li className="flex items-start"><span className="text-blue-500 mr-3 mt-1">✓</span><span>Декілька контактних форм</span></li>
                    <li className="flex items-start"><span className="text-blue-500 mr-3 mt-1">✓</span><span>Блог або новини</span></li>
                    <li className="flex items-start"><span className="text-blue-500 mr-3 mt-1">✓</span><span>Інтеграція з соц. мережами</span></li>
                    <li className="flex items-start"><span className="text-blue-500 mr-3 mt-1">✓</span><span>Google Analytics</span></li>
                    <li className="flex items-start"><span className="text-blue-500 mr-3 mt-1">✓</span><span>2 місяці безкоштовної підтримки</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Ідеально для:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• MVP проекти</li>
                    <li>• Стартапи</li>
                    <li>• Функціональні сайти</li>
                    <li>• Середній бізнес</li>
                  </ul>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <div className="font-semibold text-blue-800">Терміни виконання:</div>
                    <div className="text-blue-700">1-2 тижні</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Бізнес тариф */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-indigo-500 relative">
              <div className="absolute -top-4 left-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                НАЙПОПУЛЯРНІШИЙ
              </div>
              <div className="flex items-center mb-6 mt-2">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mr-6">
                  <span className="text-white text-2xl">💼</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold font-display text-gray-900">Бізнес</h2>
                  <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">$1200</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Що входить:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start"><span className="text-indigo-500 mr-3 mt-1">✓</span><span>До 15 сторінок</span></li>
                    <li className="flex items-start"><span className="text-indigo-500 mr-3 mt-1">✓</span><span>Повна система авторизації</span></li>
                    <li className="flex items-start"><span className="text-indigo-500 mr-3 mt-1">✓</span><span>База даних та бекенд</span></li>
                    <li className="flex items-start"><span className="text-indigo-500 mr-3 mt-1">✓</span><span>Панель адміністратора</span></li>
                    <li className="flex items-start"><span className="text-indigo-500 mr-3 mt-1">✓</span><span>API інтеграції</span></li>
                    <li className="flex items-start"><span className="text-indigo-500 mr-3 mt-1">✓</span><span>Користувацькі ролі</span></li>
                    <li className="flex items-start"><span className="text-indigo-500 mr-3 mt-1">✓</span><span>Email повідомлення</span></li>
                    <li className="flex items-start"><span className="text-indigo-500 mr-3 mt-1">✓</span><span>Аналітика та звіти</span></li>
                    <li className="flex items-start"><span className="text-indigo-500 mr-3 mt-1">✓</span><span>Мобільний додаток (PWA)</span></li>
                    <li className="flex items-start"><span className="text-indigo-500 mr-3 mt-1">✓</span><span>3 місяці безкоштовної підтримки</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Ідеально для:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• SaaS додатки</li>
                    <li>• E-commerce</li>
                    <li>• CRM системи</li>
                    <li>• Платформи навчання</li>
                    <li>• Соціальні мережі</li>
                  </ul>
                  
                  <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
                    <div className="font-semibold text-indigo-800">Терміни виконання:</div>
                    <div className="text-indigo-700">2-3 тижні</div>
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
                  <h2 className="text-3xl font-bold font-display text-gray-900">Ентерпрайз</h2>
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">$2000+</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Що входить:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start"><span className="text-purple-500 mr-3 mt-1">✓</span><span>Необмежена кількість сторінок</span></li>
                    <li className="flex items-start"><span className="text-purple-500 mr-3 mt-1">✓</span><span>Повні API інтеграції</span></li>
                    <li className="flex items-start"><span className="text-purple-500 mr-3 mt-1">✓</span><span>Платіжні системи</span></li>
                    <li className="flex items-start"><span className="text-purple-500 mr-3 mt-1">✓</span><span>Мікросервісна архітектура</span></li>
                    <li className="flex items-start"><span className="text-purple-500 mr-3 mt-1">✓</span><span>Розширена аналітика</span></li>
                    <li className="flex items-start"><span className="text-purple-500 mr-3 mt-1">✓</span><span>Автоматичне масштабування</span></li>
                    <li className="flex items-start"><span className="text-purple-500 mr-3 mt-1">✓</span><span>Інтеграція з CRM/ERP</span></li>
                    <li className="flex items-start"><span className="text-purple-500 mr-3 mt-1">✓</span><span>Багатомовність</span></li>
                    <li className="flex items-start"><span className="text-purple-500 mr-3 mt-1">✓</span><span>DevOps та CI/CD</span></li>
                    <li className="flex items-start"><span className="text-purple-500 mr-3 mt-1">✓</span><span>6 місяців безкоштовної підтримки</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Ідеально для:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Великі корпорації</li>
                    <li>• Складні платформи</li>
                    <li>• Фінтех проекти</li>
                    <li>• Маркетплейси</li>
                    <li>• Банківські системи</li>
                  </ul>
                  
                  <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                    <div className="font-semibold text-purple-800">Терміни виконання:</div>
                    <div className="text-purple-700">3-4 тижні (до місяця)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Додаткові послуги */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold font-display text-gray-900 mb-8 text-center">Додаткові послуги</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">Редизайн існуючого сайту</h3>
                <p className="text-gray-600 text-sm mb-3">Оновлення дизайну та функціональності</p>
                <div className="text-2xl font-bold text-indigo-600">від $300</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">Підтримка та оновлення</h3>
                <p className="text-gray-600 text-sm mb-3">Технічна підтримка, оновлення контенту</p>
                <div className="text-2xl font-bold text-indigo-600">$50/місяць</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">SEO оптимізація</h3>
                <p className="text-gray-600 text-sm mb-3">Повна оптимізація для пошукових систем</p>
                <div className="text-2xl font-bold text-indigo-600">$200</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">Мобільний додаток</h3>
                <p className="text-gray-600 text-sm mb-3">PWA або нативний додаток</p>
                <div className="text-2xl font-bold text-indigo-600">від $800</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">Інтеграція API</h3>
                <p className="text-gray-600 text-sm mb-3">Підключення зовнішніх сервісів</p>
                <div className="text-2xl font-bold text-indigo-600">від $100</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border-2 border-green-200">
                <h3 className="font-semibold text-gray-900 mb-2">Навчання команди</h3>
                <p className="text-gray-600 text-sm mb-3">Навчання роботи з системою</p>
                <div className="text-2xl font-bold text-green-600">Безкоштовно</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold font-display mb-4">Готові почати проект?</h2>
              <p className="text-xl mb-6 text-indigo-100">Зв'яжіться зі мною для обговорення деталей та отримання персональної пропозиції</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contact" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Замовити консультацію
                </Link>
                <Link href="/" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                  Назад на головну
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}