'use client';

import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./components/MobileMenu";
import ScrollProgress from "./components/ScrollProgress";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { useTranslations } from '@/app/hooks/useTranslations';

export default function HomePage() {
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

      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-display text-gray-900 mb-6 leading-tight">
              <span className="text-gray-900">{t('createModern')}</span> <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">{t('modern')}</span><br />
              <span className="text-gray-900">{t('websites')}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">{t('heroDescription')}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                {t('getFreeConsultation')}
              </a>
              <Link href="/pricing" className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-xl text-lg font-semibold hover:bg-indigo-50 transition-all duration-300 hover:shadow-lg">
                {t('viewPricing')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Соціальне підтвердження */}
      <section className="py-12 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">💼 {t('whyChooseMe')}</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-indigo-600 mb-2">4+</div>
              <div className="text-gray-700 font-medium">{t('completedProjects')}</div>
              <div className="text-sm text-gray-500">За останній рік</div>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-700 font-medium">{t('satisfiedClients2')}</div>
              <div className="text-sm text-gray-500">Рейтинг 5/5.0</div>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-purple-600 mb-2">5 хв</div>
              <div className="text-gray-700 font-medium">{t('responseTime')}</div>
              <div className="text-sm text-gray-500">{t('usually')} &lt; 5хв</div>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-orange-600 mb-2">6+</div>
              <div className="text-gray-700 font-medium">{t('experience')}</div>
              <div className="text-sm text-gray-500">{t('months')} {t('commercialDev')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display text-gray-900 mb-4">{t('technologiesIUse')}</h2>
            <p className="text-gray-600">{t('modernProvenTools')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "Next.js", icon: "⚡" },
              { name: "React", icon: "⚛️" },
              { name: "TypeScript", icon: "📘" },
              { name: "Tailwind CSS", icon: "🎨" },
              { name: "JavaScript", icon: "💛" },
              { name: "Figma", icon: "🎯" },
            ].map((skill) => (
              <div key={skill.name} className="text-center p-6 rounded-xl bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-gray-100 hover:border-indigo-200">
                <div className="text-4xl mb-3">{skill.icon}</div>
                <h3 className="font-semibold text-gray-900">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-display text-gray-900 mb-6">{t('aboutTitle')}</h2>
              <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: t('aboutP1') }} />
              <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: t('aboutP2') }} />
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-800">{t('superFastMVP')}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-800">{t('responsiveDesignAll')}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-800">{t('seoOptimizationBox')}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-800">{t('supportAfterLaunch')}</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 rounded-xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6">{t('whyChooseMeAbout')}</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-white"><span className="text-2xl mr-3">🚀</span>{t('fastDevelopmentDeploy')}</li>
                <li className="flex items-center text-white"><span className="text-2xl mr-3">💡</span>{t('modernTechnologies')}</li>
                <li className="flex items-center text-white"><span className="text-2xl mr-3">📱</span>{t('mobileAdaptation')}</li>
                <li className="flex items-center text-white"><span className="text-2xl mr-3">🔍</span>{t('seoOptimization')}</li>
                <li className="flex items-center text-white"><span className="text-2xl mr-3">💬</span>{t('constantCommunication')}</li>
                <li className="flex items-center text-white"><span className="text-2xl mr-3">🛠️</span>{t('projectSupport')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display text-gray-900 mb-4">{t('myWorks')}</h2>
            <p className="text-gray-600">{t('portfolioExamplesSuccess')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">📖</div>
                  <div className="text-lg font-semibold">Biblical Site</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('biblicalSchool')}</h3>
                <p className="text-gray-600 mb-4">{t('biblicalSchoolDescription')}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Tailwind</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">{t('duration')}: {t('oneDay')}</div>
                  <a href="https://uebs.com.ua" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 font-medium text-sm">{t('viewProject')} →</a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">⛪</div>
                  <div className="text-lg font-semibold">Church Site</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('churchSite')}</h3>
                <p className="text-gray-600 mb-4">{t('churchSiteDescription')}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">TypeScript</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">{t('duration')}: {t('oneDay')}</div>
                  <a href="https://slti-church.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium text-sm">{t('viewProject')} →</a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🐴</div>
                  <div className="text-lg font-semibold">Pony Sales</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('ponySalesWebsite')}</h3>
                <p className="text-gray-600 mb-4">{t('ponySalesDescription')}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">MongoDB</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">{t('duration')}: {t('oneDay')}</div>
                  <a href="https://mlp-gray.vercel.app" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 font-medium text-sm">{t('viewProject')} →</a>
                </div>
              </div>
            </div>

            

            

            

          </div>
        </div>
      </section>



      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('myServices')}</h2>
            <p className="text-gray-600">{t('fullCycleWebDevelopment')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-indigo-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('mvpDevelopment')}</h3>
              <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: t('mvpDevelopmentDescription') }} />
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• {t('superFastDevelopmentOneDay')}</li>
                <li>• {t('basicFunctionality')}</li>
                <li>• {t('responsiveDesign')}</li>
                <li>• {t('readyForScaling')}</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-purple-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('saasApps')}</h3>
              <p className="text-gray-600 mb-4">
                {t('saasAppsDescription')}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• {t('userDashboards')}</li>
                <li>• {t('paymentIntegration')}</li>
                <li>• {t('database')}</li>
                <li>• {t('apiDevelopment')}</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-cyan-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('corporateSites')}</h3>
              <p className="text-gray-600 mb-4">
                {t('corporateSitesDescription')}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• {t('landingPagesServices')}</li>
                <li>• {t('productCatalogs')}</li>
                <li>• {t('cmsIntegration')}</li>
                <li>• {t('seoOptimization')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display text-gray-900 mb-4">{t('pricingPlans')}</h2>
            <p className="text-gray-600 mb-4">{t('transparentPricesNoHidden')}</p>
            <Link href="/pricing" className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all">
              {t('viewFullPricingDescription')}
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100 hover:border-indigo-200 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">🌱</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('basic')}</h3>
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">$99</div>
                <p className="text-gray-600 text-sm">{t('landingOrBusinessCard')}</p>
              </div>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2 text-lg">✓</span>{t('pages1to3')}</li>
                <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2 text-lg">✓</span>{t('responsiveDesign')}</li>
                <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2 text-lg">✓</span>{t('basicSeoShort')}</li>
                <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2 text-lg">✓</span>{t('contactFormShort')}</li>
                <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2 text-lg">✓</span>{t('ultraFastDev1to3Days')}</li>
                <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2 text-lg">✓</span>{t('oneMonthSupport')}</li>
              </ul>
              <a href="#contact" className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 block text-center text-sm">
                {t('orderNow')}
              </a>
            </div>


            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100 hover:border-indigo-200 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('startupTariff')}</h3>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">$499</div>
                <p className="text-gray-600 text-sm">{t('mvpFunctionalSites')}</p>
              </div>
              <ul className="space-y-2 mb-6 text-sm text-gray-800">
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>{t('upTo5Pages')}</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>{t('responsiveDesign')}</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>{t('fullSeoOptimization')}</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>{t('basicAuth')}</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>{t('contactForms')}</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>{t('twoMonthsSupport')}</li>
              </ul>
              <a href="#contact" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 block text-center text-sm">
                {t('orderNow')}
              </a>
            </div>


            <div className="bg-white rounded-xl p-6 shadow-xl border-2 border-green-500 relative hover:shadow-2xl transition-all duration-300">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                {t('popularBadge')}
              </div>
              <div className="text-center mb-4 mt-2">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">⭐</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('businessPlan')}</h3>
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">$999</div>
                <p className="text-gray-600 text-sm">{t('saasAndEcommerce')}</p>
              </div>
              <ul className="space-y-2 mb-6 text-sm text-gray-800">
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>{t('upTo15Pages')}</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>{t('fullAuth')}</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>{t('database')}</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>{t('adminPanel')}</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>{t('apiIntegrations')}</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>{t('threeMonthsSupport')}</li>
              </ul>
              <a href="#contact" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 block text-center text-sm">
                {t('orderNow')}
              </a>
            </div>


            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100 hover:border-indigo-200 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">🏢</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('enterprisePlan')}</h3>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">$1699+</div>
                <p className="text-gray-600 text-sm">{t('complexCorporateSolutions')}</p>
              </div>
              <ul className="space-y-2 mb-6 text-sm text-gray-800">
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>{t('unlimitedPagesText')}</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>{t('fullApiIntegrations')}</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>{t('paymentSystems')}</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>{t('analyticsReports')}</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>{t('scaling')}</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>{t('sixMonthsSupport')}</li>
              </ul>
              <a href="#contact" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 block text-center text-sm">
                {t('discuss')}
              </a>
            </div>
          </div>
          

          <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t('whatsIncludedAllPlans')}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{t('fastDevelopmentTitle')}</h4>
                <p className="text-gray-600 text-sm">{t('fastDevelopmentDesc')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📱</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{t('mobileAdaptationTitle')}</h4>
                <p className="text-gray-600 text-sm">{t('mobileAdaptationDesc')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🔍</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{t('seoOptimizationTitle')}</h4>
                <p className="text-gray-600 text-sm">{t('seoOptimizationDesc')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🛠️</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{t('supportTitle')}</h4>
                <p className="text-gray-600 text-sm">{t('supportDesc')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💬</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{t('constantContactTitle')}</h4>
                <p className="text-gray-600 text-sm">{t('constantContactDesc')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🚀</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{t('deployTitle')}</h4>
                <p className="text-gray-600 text-sm">{t('deployDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display text-gray-900 mb-4">❓ {t('faqTitle')}</h2>
            <p className="text-gray-600">{t('faqSubtitle')}</p>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="p-6">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🚀</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Як швидко ви можете розпочати роботу над проектом?</h3>
                    <p className="text-gray-700">
                      Зазвичай розпочинаю роботу в перший день після погодження технічного завдання та внесення передоплати. 
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="p-6">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">💰</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Яка схема оплати?</h3>
                    <p className="text-gray-700">
                      50% передоплата при підписанні договору, 50% при здачі проекту. 
                      Для великих проектів (Enterprise) можлива поетапна оплата по 25% за кожний milestone.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="p-6">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🛠️</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Що входить в підтримку сайту?</h3>
                    <p className="text-gray-700">
                      Технічні правки, оновлення контенту, резервні копії, моніторинг роботи сайту, 
                      дрібні доопрацювання дизайну та функціоналу. Великі зміни обговорюються окремо.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="p-6">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📱</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Чи буде сайт адаптований під мобільні пристрої?</h3>
                    <p className="text-gray-700">
                      Так, всі сайти обов'язково адаптуються під мобільні пристрої та планшети. 
                      Використовую mobile-first підхід для найкращої продуктивності на всіх пристроях.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="p-6">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🔍</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Чи оптимізуєте сайт для пошукових систем?</h3>
                    <p className="text-gray-700">
                      Базове SEO входить у всі тарифи: мета-теги, структуровані дані, швидкість завантаження. 
                      Повна SEO-оптимізація доступна як додаткова послуга за $180.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="p-6">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📊</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Чи надаєте доступ до адміністрування сайту?</h3>
                    <p className="text-gray-700">
                      Так, після здачі проекту передаю всі паролі та навчаю користуванню адмін-панеллю. 
                      Також надаю детальну документацію та відеоінструкції.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA в кінці FAQ */}
          <div className="mt-12 text-center bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('noAnswer')} 🤔</h3>
            <p className="text-gray-600 mb-6">
              {t('telegramResponse')}
            </p>
            <a href="https://t.me/ms5e60" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              <span className="mr-2">💬</span>
              {t('writeToTelegram')}
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('contactMeTitle')}</h2>
            <p className="text-gray-600">{t('readyToDiscussProject')}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">{t('contactInformationTitle')}</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-600">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">maryanlikesyou@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-600">💬</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Telegram</p>
                    <p className="text-gray-600">@ms5e60</p>
                  </div>
                </div>

              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('nameLabel')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    placeholder={t('yourName')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('projectTypeLabel')}
                  </label>
                  <select
                    id="project"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  >
                    <option>{t('mvpDevelopmentOption')}</option>
                    <option>{t('saasAppOption')}</option>
                    <option>{t('corporateWebsiteOption')}</option>
                    <option>{t('landingPageOption')}</option>
                    <option>{t('otherOption')}</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('projectDescriptionLabel')}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    placeholder={t('tellAboutProject')}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  {t('sendMessage')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            {t('copyrightText')}
          </p>
          <p className="text-gray-400 mt-2">
            {t('webDeveloperFooter')} | Next.js | React | TypeScript
          </p>
        </div>
      </footer>
    </div>
  );
}
