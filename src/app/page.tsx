import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./components/MobileMenu";
import ScrollProgress from "./components/ScrollProgress";

export default function Home() {
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
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Про мене</a>
              <a href="#services" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Послуги</a>
              <a href="#portfolio" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Портфоліо</a>
              <a href="#pricing" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Тарифи</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Контакти</a>
            </div>
            <a href="#contact" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Замовити проект
            </a>
            <MobileMenu />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-display text-gray-900 mb-6 leading-tight">
              Створюю <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">сучасні</span><br />
              веб-додатки та сайти
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Професійний веб-розробник з досвідом 6+ місяців. Спеціалізуюся на Next.js, React, 
              Tailwind CSS. <strong>MVP за 1 день</strong>, розробка від 1 дня до місяця залежно від складності.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Почати проект
              </a>
              <Link href="/pricing" className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-xl text-lg font-semibold hover:bg-indigo-50 transition-all duration-300 hover:shadow-lg">
                Детальні тарифи
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display text-gray-900 mb-4">Технології</h2>
            <p className="text-gray-600">Використовую найсучасніші інструменти для розробки</p>
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
              <h2 className="text-3xl font-bold font-display text-gray-900 mb-6">Про мене</h2>
              <p className="text-gray-600 mb-4">
                Привіт! Мене звати Мар'ян Собчук, я веб-розробник з досвідом 6+ місяців. 
                Спеціалізуюся на створенні сучасних веб-додатків та сайтів.
              </p>
              <p className="text-gray-600 mb-4">
                Моя головна перевага — швидкість розробки без втрати якості. Використовую 
                найновіші технології: Next.js, React, TypeScript, Tailwind CSS.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Надшвидка розробка MVP (1 день!)</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Responsive дизайн для всіх пристроїв</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>SEO-оптимізація з коробки</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Підтримка після запуску</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 rounded-xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Чому обирають мене?</h3>
              <ul className="space-y-4">
                <li className="flex items-center"><span className="text-2xl mr-3">🚀</span>Швидка розробка і деплой</li>
                <li className="flex items-center"><span className="text-2xl mr-3">💡</span>Сучасні технології</li>
                <li className="flex items-center"><span className="text-2xl mr-3">📱</span>Мобільна адаптація</li>
                <li className="flex items-center"><span className="text-2xl mr-3">🔍</span>SEO-оптимізація</li>
                <li className="flex items-center"><span className="text-2xl mr-3">💬</span>Постійний зв'язок</li>
                <li className="flex items-center"><span className="text-2xl mr-3">🛠️</span>Підтримка проекту</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display text-gray-900 mb-4">Мої роботи</h2>
            <p className="text-gray-600">Приклади успішно реалізованих проектів</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">📖</div>
                  <div className="text-lg font-semibold">Biblical Site</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Біблійна школа</h3>
                <p className="text-gray-600 mb-4">Освітній сайт для вивчення Біблії з курсами, відео-уроками, тестами та системою прогресу студентів.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Tailwind</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">Тривалість: 1 день</div>
                  <a href="https://uebs.com.ua" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 font-medium text-sm">Переглянути →</a>
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">Церковний сайт</h3>
                <p className="text-gray-600 mb-4">Сайт для церковної громади з розкладом служб, проповідями, подіями та можливістю онлайн пожертв.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">TypeScript</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">Тривалість: 1 день</div>
                  <a href="https://slti-church.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium text-sm">Переглянути →</a>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Мої послуги</h2>
            <p className="text-gray-600">Повний цикл розробки веб-рішень</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-indigo-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">MVP розробка</h3>
              <p className="text-gray-600 mb-4">
                <strong>MVP за 1 день!</strong> Мінімально життєздатний продукт для швидкого тестування вашої ідеї.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Надшвидка розробка (1 день)</li>
                <li>• Основний функціонал</li>
                <li>• Responsive дизайн</li>
                <li>• Готовність до масштабування</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-purple-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">SaaS додатки</h3>
              <p className="text-gray-600 mb-4">
                Повнофункціональні SaaS-платформи з системами авторизації, платежів та аналітики.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Користувацькі панелі</li>
                <li>• Інтеграція платежів</li>
                <li>• База даних</li>
                <li>• API розробка</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-cyan-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Корпоративні сайти</h3>
              <p className="text-gray-600 mb-4">
                Професійні сайти для бізнесу з фокусом на конверсію та SEO-оптимізацію.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Лендінг пейджи</li>
                <li>• Каталоги товарів</li>
                <li>• CMS інтеграція</li>
                <li>• SEO оптимізація</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display text-gray-900 mb-4">Тарифні плани</h2>
            <p className="text-gray-600 mb-4">Прозорі ціни без прихованих платежів</p>
            <Link href="/pricing" className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all">
              Переглянути повний опис тарифів →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Мінімальний тариф */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100 hover:border-indigo-200 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">🌱</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Базовий</h3>
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">$150</div>
                <p className="text-gray-600 text-sm">Лендінг або сайт-візитка</p>
              </div>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>1-3 сторінки</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>Responsive дизайн</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>Базова SEO</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>Форма зв'язку</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>Надшвидка розробка (1-3 дні)</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>1 місяць підтримки</li>
              </ul>
              <a href="#contact" className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 block text-center text-sm">
                Замовити
              </a>
            </div>

            {/* Стартап тариф */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100 hover:border-indigo-200 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Стартап</h3>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">$600</div>
                <p className="text-gray-600 text-sm">MVP та функціональні сайти</p>
              </div>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>До 5 сторінок</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>Responsive дизайн</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>Повна SEO оптимізація</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>Базова авторизація</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>Контактні форми</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>2 місяці підтримки</li>
              </ul>
              <a href="#contact" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 block text-center text-sm">
                Замовити
              </a>
            </div>

            {/* Популярний тариф */}
            <div className="bg-white rounded-xl p-6 shadow-xl border-2 border-indigo-500 relative hover:shadow-2xl transition-all duration-300">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                ПОПУЛЯРНИЙ
              </div>
              <div className="text-center mb-4 mt-2">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">💼</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Бізнес</h3>
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">$1200</div>
                <p className="text-gray-600 text-sm">SaaS додатки та е-комерс</p>
              </div>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>До 15 сторінок</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>Повна авторизація</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>База даних</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>Панель адміністратора</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>API інтеграції</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>3 місяці підтримки</li>
              </ul>
              <a href="#contact" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 block text-center text-sm">
                Замовити
              </a>
            </div>

            {/* Ентерпрайз тариф */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100 hover:border-indigo-200 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">🏢</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ентерпрайз</h3>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">$2000+</div>
                <p className="text-gray-600 text-sm">Складні корпоративні рішення</p>
              </div>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>Необмежено сторінок</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>Повні API інтеграції</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>Платіжні системи</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>Аналітика та звіти</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>Масштабування</li>
                <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span>6 місяців підтримки</li>
              </ul>
              <a href="#contact" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 block text-center text-sm">
                Обговорити
              </a>
            </div>
          </div>
          
          {/* Додаткова інформація про тарифи */}
          <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Що входить у всі тарифи?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h4 className="font-semibold mb-2">Швидка розробка</h4>
                <p className="text-gray-600 text-sm">Від 3 днів до 4 тижнів залежно від складності</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📱</span>
                </div>
                <h4 className="font-semibold mb-2">Мобільна адаптація</h4>
                <p className="text-gray-600 text-sm">Ідеальний вигляд на всіх пристроях</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🔍</span>
                </div>
                <h4 className="font-semibold mb-2">SEO оптимізація</h4>
                <p className="text-gray-600 text-sm">Налаштування для пошукових систем</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🛠️</span>
                </div>
                <h4 className="font-semibold mb-2">Підтримка</h4>
                <p className="text-gray-600 text-sm">Безкоштовні правки та технічна підтримка</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💬</span>
                </div>
                <h4 className="font-semibold mb-2">Постійний зв'язок</h4>
                <p className="text-gray-600 text-sm">Регулярні звіти про прогрес</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🚀</span>
                </div>
                <h4 className="font-semibold mb-2">Деплой</h4>
                <p className="text-gray-600 text-sm">Запуск на високошвидкісному хостингу</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Зв'яжіться зі мною</h2>
            <p className="text-gray-600">Готовий обговорити ваш проект та почати роботу</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Контактна інформація</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-600">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">maryan.sobchuk@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-600">💬</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Telegram</p>
                    <p className="text-gray-600">@maryan_sobchuk</p>
                  </div>
                </div>

              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Ім'я
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ваше ім'я"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                    Тип проекту
                  </label>
                  <select
                    id="project"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option>MVP розробка</option>
                    <option>SaaS додаток</option>
                    <option>Корпоративний сайт</option>
                    <option>Лендінг пейдж</option>
                    <option>Інше</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Опис проекту
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Розкажіть про ваш проект..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Надіслати запит
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
            © 2024 Мар'ян Собчук. Всі права захищені. 
          </p>
          <p className="text-gray-400 mt-2">
            Веб-розробник | Next.js | React | TypeScript
          </p>
        </div>
      </footer>
    </div>
  );
}
