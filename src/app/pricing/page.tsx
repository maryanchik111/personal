'use client';

import Link from "next/link";
import { useTranslations } from '@/app/hooks/useTranslations';
import { useState } from 'react';
import { FadeIn } from '../components/Animations';

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const Icon = {
  Zap: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  Rocket: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.5-2 4-1 5s3.5-.5 5-2l6-6-4-4-6 6z" /><path d="M12 8s0-2 2-4 6-1 6-1-1 4-2 6-4 3-4 3" />
    </svg>
  ),
  ShoppingCart: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  ),
  Code: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Check: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  ArrowRight: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  MessageCircle: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  ),
  Paintbrush: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22a7 7 0 0 1-7-7c0-2 1.5-3.5 3-3.5a1.5 1.5 0 1 0 0-3C5.5 8.5 4 7 4 5a7 7 0 0 1 14 0c0 2-1.5 3.5-3 3.5a1.5 1.5 0 1 0 0 3c1.5 0 3 1.5 3 3.5a7 7 0 0 1-7 7Z" />
    </svg>
  ),
  Settings: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  TrendingUp: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  Globe: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
};

export default function PricingPage() {
  const { t } = useTranslations();
  const [activeCategory, setActiveCategory] = useState('tariffs');

  const tariffs = [
    {
      icon: <Icon.Zap />,
      name: 'Лендінг "під ключ"',
      price: '$150',
      priceNote: '~6,500 грн',
      desc: 'Для локального бізнесу',
      color: '#00ff88',
      gradient: 'linear-gradient(135deg, #00ff88, #00d4aa)',
      forWho: 'Ресторани, барбершопи, майстри',
      features: [
        '1 продаюча сторінка (6-8 блоків)',
        'Форма замовлення/запису',
        'Telegram/WhatsApp інтеграція',
        'Google Maps + контакти',
        '100% мобільна версія',
        'Базове SEO (Google знайде)',
        'Домен + хостинг (допомога)',
      ],
      bonus: '🎁 Інструкція: як самому змінювати ціни',
      deliveryTime: '3-5 днів',
    },
    {
      icon: <Icon.Rocket />,
      name: 'Сайт для бізнесу',
      price: '$290',
      priceNote: '~12,500 грн',
      desc: 'Малий та середній бізнес',
      color: '#00f5ff',
      gradient: 'linear-gradient(135deg, #00f5ff, #3b82f6)',
      forWho: 'Інтернет-магазини, сервісні компанії',
      features: [
        'До 5 сторінок (повний сайт)',
        'Каталог послуг/товарів',
        'Калькулятор вартості (якщо треба)',
        'Месенджери (Telegram/Viber/WhatsApp)',
        'Google Analytics (статистика)',
        'Швидкість < 2 сек',
        '1 місяць підтримки',
      ],
      bonus: '🎁 3 безкоштовні правки + чек-лист лідогенерації',
      deliveryTime: '7-10 днів',
      featured: true,
    },
    {
      icon: <Icon.ShoppingCart />,
      name: 'Інтернет-магазин',
      price: '$550',
      priceNote: '~24,000 грн',
      desc: 'E-commerce стартап',
      color: '#a855f7',
      gradient: 'linear-gradient(135deg, #a855f7, #7c3aed)',
      forWho: 'Онлайн-магазини, дропшипінг',
      features: [
        'До 50 товарів (категорії, фільтри)',
        'Кошик + оформлення',
        'Нова Пошта API (автоматично)',
        'Telegram-сповіщення про замовлення',
        'Адмінка (додаєш товари сам)',
        'Реєстрація/логін клієнтів',
        '2 місяці підтримки',
      ],
      bonus: '🎁 Допомога з запуском Google Ads',
      deliveryTime: '14-18 днів',
    },
    {
      icon: <Icon.Code />,
      name: 'SaaS / MVP',
      price: '$950',
      priceNote: '~41,500 грн',
      desc: 'Складні системи',
      color: '#f472b6',
      gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
      forWho: 'Стартапи, B2B, корпорації',
      features: [
        'До 10 сторінок',
        'CRM/Dashboard для клієнтів',
        'Авторизація (Google, Facebook)',
        'Платіжні системи (Stripe, Monobank)',
        'База даних (Firebase/Supabase)',
        'Адмін-панель',
        '3 місяці підтримки',
      ],
      bonus: '🎁 Технічна документація',
      deliveryTime: '21-30 днів',
    },
  ];

  const additionalServices = [
    {
      icon: <Icon.MessageCircle />,
      name: 'Telegram-бот',
      price: '+$100',
      desc: 'Приймання замовлень через бота',
      color: '#00f5ff',
    },
    {
      icon: <Icon.Paintbrush />,
      name: 'Редизайн сайту',
      price: 'від $200',
      desc: 'Оновлення застарілого дизайну',
      color: '#a855f7',
    },
    {
      icon: <Icon.Settings />,
      name: 'Підтримка',
      price: '$50/міс',
      desc: 'Дрібні правки + моніторинг',
      color: '#00ff88',
    },
    {
      icon: <Icon.TrendingUp />,
      name: 'SEO пакет',
      price: '+$100',
      desc: 'Аудит + налаштування Google',
      color: '#f472b6',
    },
    {
      icon: <Icon.Globe />,
      name: 'Багатомовність',
      price: '+$80',
      desc: 'Додавання додаткових мов',
      color: '#00f5ff',
    },
  ];

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', paddingBottom: 100 }}>
      <div className="grid-bg" style={{ position: 'fixed', inset: 0, opacity: 0.3 }} />
      <div className="orb-cyan" style={{ width: 600, height: 600, top: -200, left: -200, opacity: 0.4 }} />
      <div className="orb-purple" style={{ width: 500, height: 500, bottom: 0, right: -150, opacity: 0.3 }} />

      {/* Navigation */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: 'rgba(5,5,16,0.88)', backdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', height: 70, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem' }}>
              <span className="gradient-text">veryrary agency</span>
            </span>
          </Link>
          <Link href="/" className="nav-link" style={{ fontSize: '0.9rem' }}>
            {t('backToHomepage')}
          </Link>
        </div>
      </nav>

      <main style={{ position: 'relative', zIndex: 1, paddingTop: 120, paddingLeft: 20, paddingRight: 20 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          {/* Header */}
          <FadeIn style={{ textAlign: 'center', marginBottom: 80 }}>
            <span className="badge badge-green" style={{ marginBottom: 16 }}>{t('pricingPlans')}</span>
            <h1 className="gradient-text animate-gradient-shift" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: 20, lineHeight: 1.1 }}>
              {t('pricingServicesTitle')}
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: 650, margin: '0 auto', lineHeight: 1.6 }}>
              {t('detailedDescription')}
              <br />
              <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>Набиваю кейси — поки ціни нижчі за ринок.</span>
            </p>
          </FadeIn>

          {/* Tariffs Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, marginBottom: 100 }}>
            {tariffs.map((plan, i) => (
              <FadeIn
                key={i}
                delay={i * 0.1}
                className={`pricing-card${plan.featured ? ' featured' : ''}`}
                style={{
                  position: 'relative',
                  background: 'rgba(255,255,255,0.02)',
                  border: plan.featured ? `2px solid ${plan.color}` : '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 24,
                  padding: plan.featured ? '40px 30px' : '36px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.4s ease',
                  transform: plan.featured ? 'scale(1.05)' : 'none',
                  zIndex: plan.featured ? 2 : 1,
                  boxShadow: plan.featured ? `0 20px 50px ${plan.color}20` : 'none',
                }}
              >
                {plan.featured && (
                  <div style={{
                    position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                    background: plan.gradient, color: '#000', padding: '6px 20px', borderRadius: 100,
                    fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.05em', whiteSpace: 'nowrap',
                    boxShadow: `0 5px 20px ${plan.color}40`,
                  }}>
                    ⭐ {t('mostPopular')}
                  </div>
                )}

                <div style={{ textAlign: 'center', marginBottom: 28 }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 16, background: `${plan.color}15`,
                    border: `1.5px solid ${plan.color}35`, color: plan.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px',
                  }}>
                    {plan.icon}
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 4 }}>{plan.name}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: 20 }}>{plan.forWho}</p>

                  <div style={{ marginBottom: 4 }}>
                    <span style={{ fontSize: '2.8rem', fontWeight: 900, background: plan.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {plan.price}
                    </span>
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: 12 }}>{plan.priceNote}</div>
                  <p style={{ color: plan.color, fontSize: '0.82rem', fontWeight: 600 }}>⚡ {plan.deliveryTime}</p>
                </div>

                <div style={{ flexGrow: 1, marginBottom: 30 }}>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {plan.features.map((feature, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                        <span style={{ color: plan.color, marginTop: 2, flexShrink: 0 }}><Icon.Check /></span>
                        <span style={{ lineHeight: 1.4 }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ padding: '14px', borderRadius: 12, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24 }}>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5, textAlign: 'center' }}>{plan.bonus}</p>
                </div>

                <a href="/#contact" className={plan.featured ? "btn-neon-purple" : "btn-neon-cyan"} style={{ width: '100%', padding: '12px', fontSize: '0.9rem', borderRadius: 12 }}>
                  {plan.name.includes('SaaS') ? 'Обговорити' : 'Замовити зараз'}
                </a>
              </FadeIn>
            ))}
          </div>

          {/* Additional Services */}
          <FadeIn delay={0.4}>
            <div style={{ textAlign: 'center', marginBottom: 50 }}>
              <h2 style={{ fontSize: '2.2rem', marginBottom: 12 }}>{t('additionalServices')}</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Додайте ще більше потужності вашому проекту</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20, marginBottom: 100 }}>
              {additionalServices.map((service, i) => (
                <div key={i} className="glass-card" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: 18 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12, background: `${service.color}15`,
                    border: `1px solid ${service.color}30`, color: service.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                  }}>
                    {service.icon}
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>{service.name}</h4>
                      <span style={{ color: service.color, fontWeight: 800 }}>{service.price}</span>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Guarantee */}
          <FadeIn delay={0.6} className="glass-card-strong" style={{ padding: '60px 40px', textAlign: 'center', border: '1px solid rgba(0, 255, 136, 0.2)' }}>
            <div style={{ fontSize: '3rem', marginBottom: 20 }}>🛡️</div>
            <h2 style={{ fontSize: '2rem', marginBottom: 16 }}>Гарантія якості</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto 30px', lineHeight: 1.6 }}>
              Я ціную свою репутацію, тому працюю на результат. <br />
              <b>Якщо вам не сподобається фінальний продукт — я поверну гроші.</b>
            </p>
            <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--accent-green)', fontWeight: 600 }}>
                <Icon.Check /> 50% передоплата
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--accent-green)', fontWeight: 600 }}>
                <Icon.Check /> Офіційний договір (за бажанням)
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--accent-green)', fontWeight: 600 }}>
                <Icon.Check /> Підтримка після запуску
              </div>
            </div>
          </FadeIn>

        </div>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '50px 20px', marginTop: 100 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} veryrary agency. {t('copyrightText')}
          </p>
        </div>
      </footer>

      <style jsx>{`
        .pricing-card:hover {
          transform: translateY(-8px) ${tariffs.find(t => t.featured) ? 'scale(1.06)' : 'scale(1.02)'} !important;
          border-color: rgba(0, 245, 255, 0.4) !important;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5) !important;
        }
      `}</style>
    </div>
  );
}
