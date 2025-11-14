'use client'

import { useState, useEffect, useCallback } from 'react'

// Global state for language
let globalLanguage = 'ua'
const listeners = new Set<() => void>()

const notifyListeners = () => {
  listeners.forEach(listener => listener())
}

export const useTranslations = () => {
  const [language, setLanguage] = useState(globalLanguage)
  const [isClient, setIsClient] = useState(false)

  // Subscribe to global language changes
  useEffect(() => {
    setIsClient(true)
    
    const handleLanguageChange = () => {
      setLanguage(globalLanguage)
    }
    
    listeners.add(handleLanguageChange)
    
    // Initialize from localStorage
    try {
      const savedLanguage = localStorage.getItem('language')
      const targetLanguage = (savedLanguage === 'en') ? 'en' : 'ua'
      
      if (globalLanguage !== targetLanguage) {
        globalLanguage = targetLanguage
        setLanguage(targetLanguage)
      }
      localStorage.setItem('language', targetLanguage)
    } catch (error) {
      globalLanguage = 'ua'
      setLanguage('ua')
      localStorage.setItem('language', 'ua')
    }
    
    return () => {
      listeners.delete(handleLanguageChange)
    }
  }, [])

  const changeLanguage = useCallback((lang: string) => {
    if (lang === 'ua' || lang === 'en') {
      globalLanguage = lang
      setLanguage(lang)
      localStorage.setItem('language', lang)
      notifyListeners()
    }
  }, [])

  const translations = {
    ua: {
      // Navigation
      home: 'Головна',
      about: 'Про мене',
      aboutMe: 'Про мене',
      services: 'Послуги',
      portfolio: 'Портфоліо',
      pricing: 'Тарифи',
      contact: 'Контакти',

      // Hero Section
      hiIam: 'Привіт, я',
      fullStackDeveloper: 'Fullstack розробник',
      webDeveloper: 'Веб-розробник',
      iCreateModernWebsites: 'Я створюю сучасні веб-сайти та додатки, які допомагають бізнесу рости',
      createApplications: 'Створюю додатки, які працюють швидко, виглядають сучасно і приносять результат',
      viewMyWork: 'Переглянути роботи',
      getInTouch: 'Звязатися зі мною',
      getFreeConsultation: 'Консультація',
      createModern: 'Створюю сучасні',
      modern: 'сучасні',
      websites: 'веб-сайти',
      heroDescription: 'Я створюю сучасні веб-сайти та додатки, які допомагають бізнесу рости та залучати більше клієнтів',
      viewPricing: 'Переглянути ціни',

      // Skills
      mySkills: 'Мої навички',
      technologiesIUse: 'Технології, з якими я працюю',
      modernProvenTools: 'Сучасні перевірені інструменти',
      reactNextjs: 'React & Next.js',
      typescript: 'TypeScript',
      tailwindcss: 'TailwindCSS',
      nodejs: 'Node.js',
      databases: 'Бази даних',
      devtools: 'Dev Tools',

      // About Section  
      aboutTitle: 'Про мене',
      aboutDescription: 'Я - веб-розробник з активним досвідом створення сучасних, швидких та зручних веб-додатків. Спеціалізуюся на React, Next.js, TypeScript та створенні повнофункціональних рішень від ідеї до запуску. За час роботи я освоїв найкращі практики розробки та працюю з найсучаснішими технологіями.',
      aboutP1: 'Я - веб-розробник з активним досвідом створення сучасних, швидких та зручних веб-додатків.',
      aboutP2: 'Спеціалізуюся на React, Next.js, TypeScript та створенні повнофункціональних рішень від ідеї до запуску.',
      yearsExperience: 'Досвід роботи',
      completedProjects: 'Завершені проекти',
      satisfiedClients: 'Задоволені клієнти',
      linesOfCode: 'Рядків коду',
      superFastMVP: 'Надшвидка розробка MVP',
      responsiveDesignAll: 'Адаптивний дизайн для всіх пристроїв',
      seoOptimizationBox: 'SEO оптимізація для кращої видимості',
      supportAfterLaunch: 'Підтримка після запуску',
      whyChooseMeAbout: 'Чому обирають мене',
      fastDevelopmentDeploy: 'Швидка розробка та деплой',
      modernTechnologies: 'Сучасні технології',
      mobileAdaptation: 'Мобільна адаптація',
      seoOptimization: 'SEO оптимізація',
      constantCommunication: 'Постійний звязок',
      projectSupport: 'Підтримка проєктів',

      // Marketing Section
      specialOffer: 'СПЕЦІАЛЬНА ПРОПОЗИЦІЯ',
      freeAuditOffer: 'Безкоштовний аудит сайту при замовленні будь-якого тарифу до кінця місяця!',
      placesLeft: 'Залишилось місць',
      savings: 'Економія',
      whyChooseMe: 'Чому обирають мене',
      lastYear: 'За останній рік',
      satisfiedClients2: 'Задоволених клієнтів',
      responseTime: 'Середній час відповіді',
      usually: 'Зазвичай',
      experience: 'Досвід',
      commercialDev: 'Комерційної розробки',
      months: 'Місяців',
      faqTitle: 'Часті запитання',
      faqSubtitle: 'Відповіді на популярні питання про співпрацю',
      noAnswer: 'Не знайшли відповідь на своє запитання?',
      telegramResponse: 'Напишіть мені в Telegram або заповніть форму нижче - відповім протягом 1 хвилини!',
      writeToTelegram: 'Написати в Telegram',
      freeConsultation: 'Безкоштовна консультація',
      quickResponse: 'Відповідаю протягом 1 хвилини',

      // Portfolio Section
      myPortfolio: 'Моє портфоліо',
      myWorks: 'Мої роботи',
      recentWork: 'Останні роботи',
      portfolioExamplesSuccess: 'Приклади успішних проектів',
      viewLiveDemo: 'Переглянути демо',
      viewCode: 'Код на GitHub',
      viewProject: 'Переглянути проект',
      ecommercePlatform: 'E-commerce платформа',
      ecommerceDescription: 'Повнофункціональна платформа електронної комерції з кошиком покупок та системою платежів',
      modernFeatures: 'Сучасні можливості',
      paymentIntegration: 'Інтеграція платежів',
      adminPanel: 'Адміністративна панель',
      taskManagement: 'Система управління завданнями',
      taskDescription: 'Додаток для управління проектами з функціями співпраці та відстеження часу',
      realTimeUpdates: 'Оновлення в реальному часі',
      teamCollaboration: 'Командна співпраця',
      analyticsReports: 'Звіти та аналітика',
      churchCommunityWebsite: 'Сайт церковної спільноти',
      churchDescription: 'Повнофункціональний сайт для церковної спільноти з управлінням подіями та зоною для членів',
      educationalPortal: 'Освітній портал',
      educationalDescription: 'Навчальна платформа з управлінням курсами, відстеженням прогресу та сертифікатами',
      complexWebApplication: 'Складний веб-додаток',
      communityPlatform: 'Платформа спільноти',
      learningManagementSystem: 'Система управління навчанням',
      biblicalSchool: 'Біблійна школа',
      biblicalSchoolDescription: 'Освітня платформа для вивчення Біблії з інтерактивними курсами',
      churchSite: 'Сайт церкви',
      churchSiteDescription: 'Сучасний сайт церкви з управлінням подіями та спільнотою',
      ponySalesWebsite: 'Сайт продажу поні',
      ponySalesDescription: 'Онлайн магазин для продажу поні з каталогом, фільтрами та системою замовлень',
      duration: 'Тривалість',
      oneDay: '1 день',

      // Services Section
      myServices: 'Мої послуги',
      fullCycleWebDevelopment: 'Повний цикл розробки веб-рішень',
      mvpDevelopment: 'MVP розробка',
      mvpDevelopmentDescription: 'MVP за 1 день! Мінімально життєздатний продукт для швидкого тестування вашої ідеї.',
      superFastDevelopmentOneDay: 'Надшвидка розробка (1 день)',
      basicFunctionality: 'Основний функціонал',
      readyForScaling: 'Готовність до масштабування',
      saasApps: 'SaaS додатки', 
      saasAppsDescription: 'Повнофункціональні SaaS-платформи з системами авторизації, платежів та аналітики.',
      userDashboards: 'Користувацькі панелі',
      database: 'База даних',
      apiDevelopment: 'API розробка',
      corporateSites: 'Корпоративні сайти',
      corporateSitesDescription: 'Професійні сайти для бізнесу з фокусом на конверсію та SEO-оптимізацію.',
      landingPagesServices: 'Лендінг пейджи',
      productCatalogs: 'Каталоги товарів',
      cmsIntegration: 'CMS інтеграція',

      // Pricing Section
      pricingPlans: 'Тарифні плани',
      transparentPricesNoHidden: 'Прозорі ціни без прихованих платежів',
      viewFullPricingDescription: 'Переглянути повний опис тарифів',
      viewDetailedPricing: 'Переглянути детальні тарифи',
      basic: 'Базовий',
      landingOrBusinessCard: 'Лендінг або сайт-візитка',
      pages1to3: '1-3 сторінки',
      responsiveDesign: 'Адаптивний дизайн',
      basicSeoShort: 'Базове SEO',
      contactFormShort: 'Форма звязку',
      ultraFastDev1to3Days: 'Надшвидка розробка (1-3 дні)',
      oneMonthSupport: '1 місяць підтримки',
      orderNow: 'Замовити',
      startupTariff: 'Стартап',
      mvpFunctionalSites: 'MVP та функціональні сайти',
      upTo5Pages: 'До 5 сторінок',
      fullSeoOptimization: 'Повна SEO оптимізація',
      basicAuth: 'Базова авторизація',
      contactForms: 'Контактні форми',
      twoMonthsSupport: '2 місяці підтримки',
      businessPlan: 'Бізнес',
      popularBadge: 'РЕКОМЕНДОВАНИЙ',
      saasAndEcommerce: 'SaaS додатки та е-комерс',
      upTo15Pages: 'До 15 сторінок',
      fullAuth: 'Повна авторизація',
      apiIntegrations: 'API інтеграції',
      threeMonthsSupport: '3 місяці підтримки',
      enterprisePlan: 'Ентерпрайз',
      complexCorporateSolutions: 'Складні корпоративні рішення',
      unlimitedPagesText: 'Необмежено сторінок',
      fullApiIntegrations: 'Повні API інтеграції',
      paymentSystems: 'Платіжні системи',
      scaling: 'Масштабування',
      sixMonthsSupport: '6 місяців підтримки',
      discuss: 'Обговорити',
      whatsIncludedAllPlans: 'Що входить у всі тарифи?',
      fastDevelopmentTitle: 'Швидка розробка',
      fastDevelopmentDesc: 'Від 3 днів до 4 тижнів залежно від складності',
      mobileAdaptationTitle: 'Мобільна адаптація',
      mobileAdaptationDesc: 'Ідеальний вигляд на всіх пристроях',
      seoOptimizationTitle: 'SEO оптимізація',
      seoOptimizationDesc: 'Налаштування для пошукових систем',
      supportTitle: 'Підтримка',
      supportDesc: 'Безкоштовні правки та технічна підтримка',
      constantContactTitle: 'Постійний звязок',
      constantContactDesc: 'Регулярні звіти про прогрес',
      deployTitle: 'Деплой',
      deployDesc: 'Запуск на високошвидкісному хостингу',

      // Contact Section
      contactMe: 'Звязатися зі мною',
      contactMeTitle: 'Звязатися зі мною',
      letsDiscuss: 'Давайте обговоримо ваш проект',
      readyToDiscussProject: 'Готовий обговорити ваш проект',
      contactInformationTitle: 'Контактна інформація',
      yourName: 'Ваше імя',
      nameLabel: 'Імя',
      projectTypeLabel: 'Тип проекту',
      mvpDevelopmentOption: 'MVP розробка',
      saasAppOption: 'SaaS додаток',
      corporateWebsiteOption: 'Корпоративний сайт',
      landingPageOption: 'Лендінг сторінка',
      otherOption: 'Інше',
      projectDescriptionLabel: 'Опис проекту',
      tellAboutProject: 'Розкажіть про ваш проект...',
      sendMessage: 'Надіслати повідомлення',

      // Pricing Page
      backToHomepage: 'Назад на головну',
      pricingServicesTitle: 'Тарифи та послуги',
      detailedDescription: 'Детальний опис всіх тарифів та послуг, що входять до кожного пакету',
      includesText: 'Включає:',
      idealFor: 'Ідеально для:',
      businessCards: 'Сайти-візитки',
      simpleLandings: 'Прості лендінги',
      personalPortfolio: 'Особисті портфоліо',
      smallBusiness: 'Малий бізнес',
      executionTime: 'Терміни виконання:',
      days1to3: '1-3 дні',
      pages1to3Details: '1-3 сторінки (головна, про нас, контакти)',
      fullResponsive: 'Повністю responsive дизайн',
      basicSeoOptimization: 'Базова SEO оптимізація',
      contactFormValidation: 'Контактна форма з валідацією',
      googleMapsIntegration: 'Інтеграція з Google Maps',
      socialNetworks: 'Соціальні мережі',
      oneMonthFreeSupport: '1 місяць безкоштовної підтримки',
      chooseThisPlan: 'Обрати цей тариф',
      contactForDiscussion: 'Звязатись для обговорення',
      
      // Pricing Page Details
      whatIncludes: 'Що входить:',
      idealForTitle: 'Ідеально для:',
      executionTimeTitle: 'Терміни виконання:',
      mostPopular: 'НАЙПОПУЛЯРНІШИЙ',
      businessTariff: 'Бізнес',
      enterpriseTariff: 'Ентерпрайз',
      
      // Startup Tariff
      upTo5PagesDetails: 'До 5 сторінок',
      modernResponsiveDesign: 'Сучасний адаптивний дизайн',
      fullSeoOptimizationDetails: 'Повна SEO оптимізація',
      basicAuthSystem: 'Базова система авторизації',
      multipleContactForms: 'Декілька контактних форм',
      blogOrNews: 'Блог або новини',
      socialNetworksIntegration: 'Інтеграція з соц. мережами',
      googleAnalytics: 'Google Analytics',
      twoMonthsFreeSupport: '2 місяці безкоштовної підтримки',
      mvpProjects: 'MVP проекти',
      startups: 'Стартапи',
      functionalSites: 'Функціональні сайти',
      mediumBusiness: 'Середній бізнес',
      weeks1to2: '1-2 тижні',
      
      // Business Tariff
      upTo15PagesDetails: 'До 15 сторінок',
      fullAuthSystem: 'Повна система авторизації',
      databaseAndBackend: 'База даних та бекенд',
      apiIntegrationsDetails: 'API інтеграції',
      userRoles: 'Користувацькі ролі',
      emailNotifications: 'Email повідомлення',
      analyticsAndReports: 'Аналітика та звіти',
      mobilePWA: 'Мобільний додаток (PWA)',
      threeMonthsFreeSupport: '3 місяці безкоштовної підтримки',
      saasAppsIdeal: 'SaaS додатки',
      ecommerce: 'E-commerce',
      crmSystems: 'CRM системи',
      learningPlatforms: 'Платформи навчання',
      socialNetworksIdeal: 'Соціальні мережі',
      weeks2to3: '2-3 тижні',
      
      // Enterprise Tariff
      unlimitedPages: 'Необмежена кількість сторінок',
      fullApiIntegrationsDetails: 'Повні API інтеграції',
      paymentSystemsDetails: 'Платіжні системи',
      microserviceArchitecture: 'Мікросервісна архітектура',
      advancedAnalytics: 'Розширена аналітика',
      autoScaling: 'Автоматичне масштабування',
      crmErpIntegration: 'Інтеграція з CRM/ERP',
      multiLanguage: 'Багатомовність',
      devOpsCiCd: 'DevOps та CI/CD',
      sixMonthsFreeSupport: '6 місяців безкоштовної підтримки',
      unlimitedSupport: 'Необмежена підтримка',
      largeCorporations: 'Великі корпорації',
      complexPlatforms: 'Складні платформи',
      internationalProjects: 'Міжнародні проекти',
      bankingSystems: 'Банківські системи',
      governmentProjects: 'Державні проекти',
      monthsIndividual: 'Індивідуально',
      
      // Additional Services
      additionalServices: 'Додаткові послуги',
      siteAudit: 'Аудит сайту',
      siteAuditDescription: 'Детальний аналіз продуктивності, SEO та UX вашого сайту з рекомендаціями',
      readyIn2Days: 'Готово за 2 дні',
      redesign: 'Редизайн',
      redesignDescription: 'Сучасне оновлення дизайну з покращенням UX/UI та конверсії',
      from: 'від',
      speedOptimization: 'Прискорення',
      speedOptimizationDescription: 'Оптимізація швидкості завантаження до 95+ балів в Google PageSpeed',
      resultGuarantee: 'Гарантія результату',
      seoBoost: 'SEO Boost',
      seoBoostDescription: 'Комплексне SEO: технічна оптимізація + контент + структуровані дані',
      googleAnalyticsSetup: '+ Google Analytics настройка',
      aiChatbot: 'AI Чат-бот',
      aiChatbotDescription: 'Інтелектуальний чат-бот для автоматизації клієнтської підтримки 24/7',
      trainingOnYourData: 'Навчання на ваших даних',
      securityPro: 'Безпека Pro',
      securityProDescription: 'SSL, захист від DDoS, бекапи, моніторинг безпеки та відновлення',
      automaticBackups: 'Автоматичні бекапи',
      analyticsPlus: 'Аналітика+',
      analyticsPlusDescription: 'Розширена аналітика, heat maps, A/B тести та звіти конверсій',
      monthlyReportsIncluded: 'Місячні звіти включені',
      apiMagic: 'API Magic',
      apiMagicDescription: 'Інтеграція з CRM, платіжними системами, соц.мережами та іншими сервісами',
      forYourNeeds: 'Під ваші потреби',
      vipSupport: 'VIP Підтримка',
      vipSupportDescription: 'Пріоритетна підтримка, безлімітні правки, оновлення контенту',
      perMonth: '/міс',
      responseIn2Hours: 'Відповідь протягом 2 год',
      
      // Special Offers
      specialOffers: 'Спеціальні пропозиції',
      specialOffersDescription: 'При замовленні основного тарифу отримуєте знижки на додаткові послуги',
      auditSeoDiscount: 'Аудит + SEO = -20%',
      redesignSpeedDiscount: 'Редизайн + Прискорення = -15%',
      any3ServicesDiscount: 'Любі 3 послуги = -25%',
      
      // CTA Section
      readyToStart: 'Готові почати проект?',
      readyToStartDescription: 'Звяжіться зі мною для обговорення деталей та отримання персональної пропозиції',
      orderConsultation: 'Замовити консультацію',
      backToHome: 'Назад на головну',

      // Footer
      copyrightText: 'Марйан Собчук. Всі права захищені.',
      webDeveloperFooter: 'Веб-розробник',
    },
    en: {
      // Navigation
      home: 'Home',
      about: 'About',
      aboutMe: 'About Me',
      services: 'Services',
      portfolio: 'Portfolio',
      pricing: 'Pricing',
      contact: 'Contact',

      // Hero Section
      hiIam: 'Hi, I am',
      fullStackDeveloper: 'Full Stack Developer',
      webDeveloper: 'Web Developer',
      iCreateModernWebsites: 'I create modern websites and applications that help businesses grow',
      createApplications: 'I build applications that work fast, look modern and deliver results',
      viewMyWork: 'View My Work',
      getInTouch: 'Get In Touch',
      getFreeConsultation: 'Consultation',
      createModern: 'I create modern',
      modern: 'modern',
      websites: 'websites',
      heroDescription: 'I create modern websites and applications that help businesses grow and attract more clients',
      viewPricing: 'View Pricing',

      // Skills
      mySkills: 'My Skills',
      technologiesIUse: 'Technologies I work with',
      modernProvenTools: 'Modern proven tools',
      reactNextjs: 'React & Next.js',
      typescript: 'TypeScript',
      tailwindcss: 'TailwindCSS',
      nodejs: 'Node.js',
      databases: 'Databases',
      devtools: 'Dev Tools',

      // About Section
      aboutTitle: 'About Me',
      aboutDescription: 'I am a web developer with active experience creating modern, fast and user-friendly web applications. I specialize in React, Next.js, TypeScript and creating full-featured solutions from idea to launch. During my career, I have mastered best development practices and work with cutting-edge technologies.',
      aboutP1: 'I am a web developer with active experience creating modern, fast and user-friendly web applications.',
      aboutP2: 'I specialize in React, Next.js, TypeScript and creating full-featured solutions from idea to launch.',
      yearsExperience: 'Experience',
      satisfiedClients: 'Satisfied Clients',
      linesOfCode: 'Lines of Code',
      superFastMVP: 'Super fast MVP development',
      responsiveDesignAll: 'Responsive design for all devices',
      seoOptimizationBox: 'SEO optimization for better visibility',
      supportAfterLaunch: 'Support after launch',
      whyChooseMeAbout: 'Why choose me',
      fastDevelopmentDeploy: 'Fast development and deploy',
      modernTechnologies: 'Modern technologies',
      mobileAdaptation: 'Mobile Adaptation',
      seoOptimization: 'SEO Optimization',
      constantCommunication: 'Constant communication',
      projectSupport: 'Project support',

      // Marketing Section
      specialOffer: 'SPECIAL OFFER',
      freeAuditOffer: 'Free website audit when ordering any plan until the end of the month!',
      placesLeft: 'Places left',
      savings: 'Savings',
      whyChooseMe: 'Why choose me',
      completedProjects: 'Completed projects',
      lastYear: 'Last year',
      satisfiedClients2: 'Satisfied clients',
      responseTime: 'Average response time',
      usually: 'Usually',
      experience: 'Experience',
      commercialDev: 'Of commercial development',
      months: 'Months',
      faqTitle: 'Frequently Asked Questions',
      faqSubtitle: 'Answers to popular questions about cooperation',
      noAnswer: "Didn't find an answer to your question?",
      telegramResponse: 'Write to me on Telegram or fill out the form below - I will respond within 1 minute!',
      writeToTelegram: 'Write to Telegram',
      freeConsultation: 'Free consultation',
      quickResponse: 'I respond within 1 minute',

      // Portfolio Section
      myPortfolio: 'My Portfolio',
      myWorks: 'My Works',
      recentWork: 'Recent Work',
      portfolioExamplesSuccess: 'Examples of successful projects',
      viewLiveDemo: 'View Live Demo',
      viewCode: 'View Code',
      viewProject: 'View Project',
      ecommercePlatform: 'E-commerce Platform',
      ecommerceDescription: 'Full-featured e-commerce platform with shopping cart and payment system',
      modernFeatures: 'Modern Features',
      paymentIntegration: 'Payment Integration',
      adminPanel: 'Admin Panel',
      taskManagement: 'Task Management System',
      taskDescription: 'Project management app with collaboration features and time tracking',
      realTimeUpdates: 'Real-time Updates',
      teamCollaboration: 'Team Collaboration',
      analyticsReports: 'Analytics & Reports',
      churchCommunityWebsite: 'Church Community Website',
      churchDescription: 'Full-featured website for church community with event management and member area',
      educationalPortal: 'Educational Portal',
      educationalDescription: 'Learning platform with course management, progress tracking, and certificates',
      complexWebApplication: 'Complex Web Application',
      communityPlatform: 'Community Platform',
      learningManagementSystem: 'Learning Management System',
      biblicalSchool: 'Biblical School',
      biblicalSchoolDescription: 'Educational platform for Bible study with interactive courses',
      churchSite: 'Church Site',
      churchSiteDescription: 'Modern church website with event management and community',
      ponySalesWebsite: 'Pony Sales Website',
      ponySalesDescription: 'Online store for pony sales with catalog, filters and order system',
      duration: 'Duration',
      oneDay: '1 day',

      // Services Section
      myServices: 'My Services',
      fullCycleWebDevelopment: 'Full cycle web development solutions',
      mvpDevelopment: 'MVP Development',
      mvpDevelopmentDescription: 'MVP in 1 day! Minimum viable product for quick testing of your idea.',
      superFastDevelopmentOneDay: 'Super fast development (1 day)',
      basicFunctionality: 'Basic functionality',
      readyForScaling: 'Ready for scaling',
      saasApps: 'SaaS Apps', 
      saasAppsDescription: 'Full-featured SaaS platforms with authorization, payment and analytics systems.',
      userDashboards: 'User Dashboards',
      database: 'Database',
      apiDevelopment: 'API Development',
      corporateSites: 'Corporate Sites',
      corporateSitesDescription: 'Professional business websites with focus on conversion and SEO optimization.',
      landingPagesServices: 'Landing Pages',
      productCatalogs: 'Product Catalogs',
      cmsIntegration: 'CMS Integration',

      // Pricing Section
      pricingPlans: 'Pricing Plans',
      transparentPricesNoHidden: 'Transparent prices with no hidden fees',
      viewFullPricingDescription: 'View Full Pricing Description',
      viewDetailedPricing: 'View Detailed Pricing',
      basic: 'Basic',
      landingOrBusinessCard: 'Landing or business card',
      pages1to3: '1-3 pages',
      responsiveDesign: 'Responsive design',
      basicSeoShort: 'Basic SEO',
      contactFormShort: 'Contact form',
      ultraFastDev1to3Days: 'Ultra fast development (1-3 days)',
      oneMonthSupport: '1 month support',
      orderNow: 'Order Now',
      startupTariff: 'Startup',
      mvpFunctionalSites: 'MVP and functional sites',
      upTo5Pages: 'Up to 5 pages',
      fullSeoOptimization: 'Full SEO optimization',
      basicAuth: 'Basic authorization',
      contactForms: 'Contact forms',
      twoMonthsSupport: '2 months support',
      businessPlan: 'Business',
      popularBadge: 'RECOMMENDED',
      saasAndEcommerce: 'SaaS apps and e-commerce',
      upTo15Pages: 'Up to 15 pages',
      fullAuth: 'Full authorization',
      apiIntegrations: 'API integrations',
      threeMonthsSupport: '3 months support',
      enterprisePlan: 'Enterprise',
      complexCorporateSolutions: 'Complex corporate solutions',
      unlimitedPagesText: 'Unlimited pages',
      fullApiIntegrations: 'Full API integrations',
      paymentSystems: 'Payment systems',
      scaling: 'Scaling',
      sixMonthsSupport: '6 months support',
      discuss: 'Discuss',
      whatsIncludedAllPlans: 'What\'s included in all plans?',
      
      // Pricing Page
      backToHomepage: 'Back to Homepage',
      pricingServicesTitle: 'Pricing & Services',
      detailedDescription: 'Detailed description of all tariffs and services included in each package',
      includesText: 'Includes:',
      idealFor: 'Ideal for:',
      businessCards: 'Business cards',
      simpleLandings: 'Simple landings',
      personalPortfolio: 'Personal portfolios',
      smallBusiness: 'Small business',
      executionTime: 'Execution time:',
      days1to3: '1-3 days',
      pages1to3Details: '1-3 pages (home, about, contacts)',
      fullResponsive: 'Fully responsive design',
      basicSeoOptimization: 'Basic SEO optimization',
      contactFormValidation: 'Contact form with validation',
      googleMapsIntegration: 'Google Maps integration',
      socialNetworks: 'Social networks',
      oneMonthFreeSupport: '1 month free support',
      chooseThisPlan: 'Choose this plan',
      contactForDiscussion: 'Contact for discussion',
      
      // Pricing Page Details
      whatIncludes: 'What includes:',
      idealForTitle: 'Ideal for:',
      executionTimeTitle: 'Execution time:',
      mostPopular: 'MOST POPULAR',
      businessTariff: 'Business',
      enterpriseTariff: 'Enterprise',
      
      // Startup Tariff
      upTo5PagesDetails: 'Up to 5 pages',
      modernResponsiveDesign: 'Modern responsive design',
      fullSeoOptimizationDetails: 'Full SEO optimization',
      basicAuthSystem: 'Basic authorization system',
      multipleContactForms: 'Multiple contact forms',
      blogOrNews: 'Blog or news',
      socialNetworksIntegration: 'Social networks integration',
      googleAnalytics: 'Google Analytics',
      twoMonthsFreeSupport: '2 months free support',
      mvpProjects: 'MVP projects',
      startups: 'Startups',
      functionalSites: 'Functional sites',
      mediumBusiness: 'Medium business',
      weeks1to2: '1-2 weeks',
      
      // Business Tariff
      upTo15PagesDetails: 'Up to 15 pages',
      fullAuthSystem: 'Full authorization system',
      databaseAndBackend: 'Database and backend',
      apiIntegrationsDetails: 'API integrations',
      userRoles: 'User roles',
      emailNotifications: 'Email notifications',
      analyticsAndReports: 'Analytics and reports',
      mobilePWA: 'Mobile app (PWA)',
      threeMonthsFreeSupport: '3 months free support',
      saasAppsIdeal: 'SaaS apps',
      ecommerce: 'E-commerce',
      crmSystems: 'CRM systems',
      learningPlatforms: 'Learning platforms',
      socialNetworksIdeal: 'Social networks',
      weeks2to3: '2-3 weeks',
      
      // Enterprise Tariff
      unlimitedPages: 'Unlimited pages',
      fullApiIntegrationsDetails: 'Full API integrations',
      paymentSystemsDetails: 'Payment systems',
      microserviceArchitecture: 'Microservice architecture',
      advancedAnalytics: 'Advanced analytics',
      autoScaling: 'Auto scaling',
      crmErpIntegration: 'CRM/ERP integration',
      multiLanguage: 'Multi-language',
      devOpsCiCd: 'DevOps and CI/CD',
      sixMonthsFreeSupport: '6 months free support',
      unlimitedSupport: 'Unlimited support',
      largeCorporations: 'Large corporations',
      complexPlatforms: 'Complex platforms',
      internationalProjects: 'International projects',
      bankingSystems: 'Banking systems',
      governmentProjects: 'Government projects',
      monthsIndividual: 'Individual',
      fastDevelopmentTitle: 'Fast Development',
      fastDevelopmentDesc: 'From 3 days to 4 weeks depending on complexity',
      mobileAdaptationTitle: 'Mobile Adaptation',
      mobileAdaptationDesc: 'Perfect look on all devices',
      seoOptimizationTitle: 'SEO Optimization',
      seoOptimizationDesc: 'Search engine optimization',
      supportTitle: 'Support',
      supportDesc: 'Free edits and technical support',
      constantContactTitle: 'Constant Contact',
      constantContactDesc: 'Regular progress reports',
      deployTitle: 'Deploy',
      deployDesc: 'Launch on high-speed hosting',

      // Contact Section
      contactMe: 'Contact Me',
      contactMeTitle: 'Contact Me',
      letsDiscuss: 'Let\'s discuss your project',
      readyToDiscussProject: 'Ready to discuss your project',
      contactInformationTitle: 'Contact Information',
      yourName: 'Your Name',
      nameLabel: 'Name',
      projectTypeLabel: 'Project Type',
      mvpDevelopmentOption: 'MVP Development',
      saasAppOption: 'SaaS Application',
      corporateWebsiteOption: 'Corporate Website',
      landingPageOption: 'Landing Page',
      otherOption: 'Other',
      projectDescriptionLabel: 'Project Description',
      tellAboutProject: 'Tell us about your project...',
      sendMessage: 'Send Message',

      // Additional Services
      additionalServices: 'Additional Services',
      siteAudit: 'Site Audit',
      siteAuditDescription: 'Detailed analysis of performance, SEO and UX of your site with recommendations',
      readyIn2Days: 'Ready in 2 days',
      redesign: 'Redesign',
      redesignDescription: 'Modern design update with UX/UI and conversion improvements',
      from: 'from',
      speedOptimization: 'Speed Optimization',
      speedOptimizationDescription: 'Loading speed optimization up to 95+ points in Google PageSpeed',
      resultGuarantee: 'Result guarantee',
      seoBoost: 'SEO Boost',
      seoBoostDescription: 'Comprehensive SEO: technical optimization + content + structured data',
      googleAnalyticsSetup: '+ Google Analytics setup',
      aiChatbot: 'AI Chatbot',
      aiChatbotDescription: 'Intelligent chatbot for 24/7 customer support automation',
      trainingOnYourData: 'Training on your data',
      securityPro: 'Security Pro',
      securityProDescription: 'SSL, DDoS protection, backups, security monitoring and recovery',
      automaticBackups: 'Automatic backups',
      analyticsPlus: 'Analytics+',
      analyticsPlusDescription: 'Advanced analytics, heat maps, A/B tests and conversion reports',
      monthlyReportsIncluded: 'Monthly reports included',
      apiMagic: 'API Magic',
      apiMagicDescription: 'Integration with CRM, payment systems, social networks and other services',
      forYourNeeds: 'For your needs',
      vipSupport: 'VIP Support',
      vipSupportDescription: 'Priority support, unlimited edits, content updates',
      perMonth: '/month',
      responseIn2Hours: 'Response within 2 hours',
      
      // Special Offers
      specialOffers: 'Special Offers',
      specialOffersDescription: 'When ordering main tariff you get discounts on additional services',
      auditSeoDiscount: 'Audit + SEO = -20%',
      redesignSpeedDiscount: 'Redesign + Speed = -15%',
      any3ServicesDiscount: 'Any 3 services = -25%',
      
      // CTA Section
      readyToStart: 'Ready to start project?',
      readyToStartDescription: 'Contact me to discuss details and get a personalized offer',
      orderConsultation: 'Order consultation',
      backToHome: 'Back to Home',

      // Footer
      copyrightText: 'Maryan Sobchuk. All rights reserved.',
      webDeveloperFooter: 'Web Developer',
    }
  }

  const t = (key: string) => {
    if (!isClient) {
      // During SSR, return the Ukrainian translation to avoid hydration mismatches
      const uaTranslations = translations.ua
      return uaTranslations[key as keyof typeof uaTranslations] || key
    }
    
    try {
      const currentLang = (language === 'en' || language === 'ua') ? language : 'ua'
      const langTranslations = translations[currentLang as keyof typeof translations]
      const translation = langTranslations[key as keyof typeof langTranslations]
      
      if (translation === undefined) {
        // Fallback to Ukrainian if current language is English
        if (currentLang === 'en') {
          const uaTranslations = translations.ua
          const fallbackTranslation = uaTranslations[key as keyof typeof uaTranslations]
          return fallbackTranslation || key
        }
        return key
      }
      
      return translation
    } catch (error) {
      return key
    }
  }

  return { t, language, changeLanguage, isClient }
}

export default useTranslations