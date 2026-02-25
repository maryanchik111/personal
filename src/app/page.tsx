'use client';

import Link from "next/link";
import MobileMenu from "./components/MobileMenu";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { useTranslations } from '@/app/hooks/useTranslations';
import { useEffect, useRef, useState } from 'react';
import { FadeIn, AnimatedNumber } from './components/Animations';

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const Icon = {
  Rocket: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.5-2 4-1 5s3.5-.5 5-2l6-6-4-4-6 6z" /><path d="M12 8s0-2 2-4 6-1 6-1-1 4-2 6-4 3-4 3" />
    </svg>
  ),
  Briefcase: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><line x1="12" y1="12" x2="12" y2="12.01" />
    </svg>
  ),
  Globe: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  Lightning: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  Star: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  Building: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="1" /><path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
    </svg>
  ),
  Leaf: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  ),
  Mobile: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  Search: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
    </svg>
  ),
  Wrench: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  Chat: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  Server: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  CreditCard: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  ),
  Database: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  Lock: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  Clock: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Check: () => (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Mail: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  Telegram: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  ),
  ArrowRight: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  Question: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  Money: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  Chart: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  ),
  Upload: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 16 12 12 8 16" /><line x1="12" y1="12" x2="12" y2="21" /><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
    </svg>
  ),
  Scale: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="3" x2="12" y2="21" /><path d="m3 9 9-7 9 7" /><path d="M3 9h18" />
    </svg>
  ),
};

// ─── Scroll Progress ───────────────────────────────────────────────────────────
function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handler = () => {
      const el = document.documentElement;
      setProgress((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return <div className="scroll-indicator" style={{ width: `${progress}%` }} />;
}

// ─── Particle Canvas ───────────────────────────────────────────────────────────
function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    const colors = ['#00f5ff', '#a855f7', '#f472b6', '#00ff88'];
    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: Math.random() * 1.4 + 0.4,
      opacity: Math.random() * 0.45 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 6; ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();
    window.addEventListener('resize', setSize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', setSize); };
  }, []);
  return <canvas ref={ref} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }} />;
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function HomePage() {
  const { t } = useTranslations();

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', overflowX: 'hidden' }}>
      <ScrollProgress />

      {/* ── NAV ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: 'rgba(5,5,16,0.88)', backdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(0,245,255,0.07)',
        width: '100%',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64, gap: 12 }}>
            {/* Logo */}
            <a href="/" style={{ textDecoration: 'none', flexShrink: 0, display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem' }}>
                <span className="gradient-text">vr</span>
              </span>
              <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '1rem' }}>/</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>agency</span>
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex" style={{ alignItems: 'center', gap: 28, flex: 1, justifyContent: 'center' }}>
              {([['#about', t('aboutMe')], ['#services', t('services')], ['#portfolio', t('portfolio')], ['#pricing', t('pricing')], ['#contact', t('contact')]] as [string, string][]).map(([href, label]) => (
                <a key={href} href={href} className="nav-link" style={{ fontSize: '0.88rem' }}>{label}</a>
              ))}
            </div>

            {/* Desktop right */}
            <div className="hidden md:flex" style={{ alignItems: 'center', gap: 14, flexShrink: 0 }}>
              <LanguageSwitcher />
              <a href="#contact" className="btn-neon-purple" style={{ padding: '9px 18px', fontSize: '0.82rem' }}>
                {t('getFreeConsultation')}
              </a>
            </div>

            {/* Mobile hamburger */}
            <MobileMenu />
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', paddingTop: 64 }}>
        <ParticleCanvas />
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.45 }} />
        <div className="orb-cyan" style={{ width: 600, height: 600, top: -100, right: -200, opacity: 0.55 }} />
        <div className="orb-purple" style={{ width: 500, height: 500, bottom: 0, left: -150, opacity: 0.45 }} />

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 20px', maxWidth: 860, margin: '0 auto', width: '100%' }}>
          <div className="badge animate-fadeIn" style={{ marginBottom: 28 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-green)', display: 'inline-block' }} />
            Available for new projects
          </div>

          <h1 className="animate-fadeInUp" style={{ fontSize: 'clamp(2.2rem, 6.5vw, 5rem)', fontFamily: 'var(--font-display)', fontWeight: 800, lineHeight: 1.06, marginBottom: 24 }}>
            <span style={{ color: 'var(--text-primary)', display: 'block' }}>{t('createModern')}</span>
            <span className="gradient-text animate-gradient-shift" style={{ display: 'block', backgroundImage: 'linear-gradient(135deg, #00f5ff, #a855f7, #f472b6, #00f5ff)' }}>
              {t('modern')} {t('websites')}
            </span>
          </h1>

          <p className="animate-fadeInUp delay-200" style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: 580, margin: '0 auto 36px', lineHeight: 1.8 }}>
            {t('heroDescription')}
          </p>

          <div className="animate-fadeInUp delay-300" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn-neon-purple" style={{ fontSize: '0.96rem', padding: '15px 32px', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Icon.Lightning /> {t('getFreeConsultation')}
            </a>
            <a href="/pricing" className="btn-neon-cyan" style={{ fontSize: '0.96rem', padding: '15px 32px', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              {t('viewPricing')} <Icon.ArrowRight />
            </a>
          </div>

          <div className="animate-fadeIn delay-500" style={{ marginTop: 64, display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap' }}>
            {['Next.js', 'React', 'TypeScript', 'Tailwind', 'Node.js', 'Figma'].map(tech => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', animation: 'float 2s ease-in-out infinite', opacity: 0.45 }}>
          <div style={{ width: 24, height: 40, border: '1.5px solid rgba(0,245,255,0.4)', borderRadius: 12, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '6px 0' }}>
            <div style={{ width: 4, height: 8, borderRadius: 2, background: 'var(--accent-cyan)', animation: 'float 1.5s ease-in-out infinite' }} />
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 18 }}>
            {([
              { value: 6, prefix: '', suffix: '+', label: t('completedProjects'), sub: 'Реальних клієнтів', color: '#00f5ff', icon: <Icon.Rocket /> },
              { value: 100, prefix: '', suffix: '%', label: t('satisfiedClients2'), sub: 'Рейтинг 5/5', color: '#a855f7', icon: <Icon.Star /> },
              { value: 5, prefix: '<', suffix: 'хв', label: t('responseTime'), sub: t('usually'), color: '#00ff88', icon: <Icon.Chat /> },
              { value: 10, prefix: '', suffix: '+', label: t('experience'), sub: 'Місяців досвіду', color: '#f472b6', icon: <Icon.Clock /> },
            ] as { value: number; prefix: string; suffix: string; label: string; sub: string; color: string; icon: React.ReactNode }[]).map((s, i) => (
              <FadeIn key={i} delay={i * 0.15} className="stat-card">
                <div style={{ color: s.color, marginBottom: 12, opacity: 0.7 }}>{s.icon}</div>
                <div style={{ fontSize: '2.2rem', fontFamily: 'var(--font-display)', fontWeight: 800, color: s.color, textShadow: `0 0 30px ${s.color}60`, marginBottom: 6 }}>
                  <AnimatedNumber value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <div style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.92rem', marginBottom: 4 }}>{s.label}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>{s.sub}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: '100px 20px', position: 'relative' }}>
        <div className="orb-purple" style={{ width: 400, height: 400, top: 0, right: -100, opacity: 0.25 }} />
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 56, alignItems: 'center' }}>
            <FadeIn direction="right">
              <div style={{ marginBottom: 16 }}>
                <span className="badge">{t('aboutMe')}</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontFamily: 'var(--font-display)', marginBottom: 20 }}>
                {t('aboutTitle')}
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: 14, fontSize: '0.95rem' }} dangerouslySetInnerHTML={{ __html: t('aboutP1') }} />
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: 28, fontSize: '0.95rem' }} dangerouslySetInnerHTML={{ __html: t('aboutP2') }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[t('superFastMVP'), t('responsiveDesignAll'), t('seoOptimizationBox'), t('supportAfterLaunch')].map((item, i) => (
                  <div key={i} className="check-item">
                    <span className="check-icon"><Icon.Check /></span>
                    <span style={{ fontSize: '0.92rem' }}>{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="left" className="glass-card-strong" style={{ padding: 36, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: 200, height: 200, background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 24 }}>
                <span className="gradient-text-warm">{t('whyChooseMeAbout')}</span>
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {([
                  { icon: <Icon.Lightning />, text: t('fastDevelopmentDeploy') },
                  { icon: <Icon.Star />, text: t('modernTechnologies') },
                  { icon: <Icon.Mobile />, text: t('mobileAdaptation') },
                  { icon: <Icon.Search />, text: t('seoOptimization') },
                  { icon: <Icon.Chat />, text: t('constantCommunication') },
                  { icon: <Icon.Wrench />, text: t('projectSupport') },
                ] as { icon: React.ReactNode; text: string }[]).map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, color: 'var(--text-secondary)', fontSize: '0.92rem', listStyle: 'none' }}>
                    <span style={{ color: 'var(--accent-cyan)', opacity: 0.8, flexShrink: 0 }}>{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: '100px 20px', background: 'rgba(10,10,26,0.55)', position: 'relative' }}>
        <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.25 }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
          <FadeIn style={{ textAlign: 'center', marginBottom: 60 }}>
            <span className="badge badge-purple" style={{ marginBottom: 14 }}>Services</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontFamily: 'var(--font-display)' }}>{t('myServices')}</h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: 12, maxWidth: 480, margin: '12px auto 0', fontSize: '0.95rem' }}>{t('fullCycleWebDevelopment')}</p>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 22 }}>
            {([
              { icon: <Icon.Rocket />, title: t('mvpDevelopment'), desc: t('mvpDevelopmentDescription'), items: [t('superFastDevelopmentOneDay'), t('basicFunctionality'), t('responsiveDesign'), t('readyForScaling')], color: '#00f5ff', bg: 'rgba(0,245,255,0.08)', border: 'rgba(0,245,255,0.2)' },
              { icon: <Icon.Briefcase />, title: t('saasApps'), desc: t('saasAppsDescription'), items: [t('userDashboards'), t('paymentIntegration'), t('database'), t('apiDevelopment')], color: '#a855f7', bg: 'rgba(168,85,247,0.08)', border: 'rgba(168,85,247,0.2)' },
              { icon: <Icon.Globe />, title: t('corporateSites'), desc: t('corporateSitesDescription'), items: [t('landingPagesServices'), t('productCatalogs'), t('cmsIntegration'), t('seoOptimization')], color: '#f472b6', bg: 'rgba(244,114,182,0.08)', border: 'rgba(244,114,182,0.2)' },
            ] as { icon: React.ReactNode; title: string; desc: string; items: string[]; color: string; bg: string; border: string }[]).map((s, i) => (
              <FadeIn key={i} delay={i * 0.15} className="service-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 56, height: 56, borderRadius: 14, background: s.bg, border: `1px solid ${s.border}`, marginBottom: 22, color: s.color }}>
                  {s.icon}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', marginBottom: 10, color: s.color }}>{s.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.75, marginBottom: 18 }} dangerouslySetInnerHTML={{ __html: s.desc }} />
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {s.items.map((item, j) => (
                    <li key={j} className="check-item" style={{ fontSize: '0.84rem' }}>
                      <span className="check-icon" style={{ background: `${s.color}18`, borderColor: `${s.color}35`, color: s.color }}><Icon.Check /></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="portfolio" style={{ padding: '100px 20px', position: 'relative' }}>
        <div className="orb-cyan" style={{ width: 450, height: 450, bottom: -80, left: -80, opacity: 0.18 }} />
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <FadeIn style={{ textAlign: 'center', marginBottom: 60 }}>
            <span className="badge" style={{ marginBottom: 14 }}>Portfolio</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontFamily: 'var(--font-display)' }}>{t('myWorks')}</h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: 12, fontSize: '0.95rem' }}>{t('portfolioExamplesSuccess')}</p>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 22 }}>
            {([
              { icon: <Icon.Globe />, title: t('biblicalSchool'), desc: t('biblicalSchoolDescription'), tags: ['Next.js', 'React', 'TypeScript'], url: 'https://uebs.com.ua', accent: '#f59e0b', label: 'Education' },
              { icon: <Icon.Building />, title: t('churchSite'), desc: t('churchSiteDescription'), tags: ['Next.js', 'React', 'Tailwind'], url: 'https://slti-church.com', accent: '#3b82f6', label: 'Community' },
              { icon: <Icon.Briefcase />, title: t('everlightAgency'), desc: t('everlightDescription'), tags: ['Next.js', 'TypeScript', 'Tailwind'], url: 'https://everlight.pp.ua', accent: '#00f5ff', label: 'Agency' },
              { icon: <Icon.Scale />, title: t('advocateSite'), desc: t('advocateDescription'), tags: ['Next.js', 'React', 'CSS'], url: 'https://адвокат-мусевич.com', accent: '#d4af37', label: 'Legal' },
              { icon: <Icon.Star />, title: t('ponySalesWebsite'), desc: t('ponySalesDescription'), tags: ['React', 'Node.js', 'MongoDB'], url: 'https://mlpcutiefamily.pp.ua', accent: '#ec4899', label: 'E-commerce' },
            ] as { icon: React.ReactNode; title: string; desc: string; tags: string[]; url: string; accent: string; label: string }[]).map((p, i) => (
              <FadeIn key={i} delay={i * 0.12} className="project-card">
                <div style={{ height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', background: `radial-gradient(ellipse at 50% 60%, ${p.accent}20 0%, transparent 70%)` }}>
                  <div style={{ position: 'absolute', top: 14, right: 14 }}>
                    <span className="badge" style={{ background: `${p.accent}18`, borderColor: `${p.accent}45`, color: p.accent, fontSize: '0.68rem' }}>{p.label}</span>
                  </div>
                  <span style={{ color: p.accent, filter: `drop-shadow(0 0 18px ${p.accent}80)` }}>{p.icon}</span>
                </div>
                <div style={{ padding: 22, position: 'relative', zIndex: 1 }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', marginBottom: 8, color: p.accent }}>{p.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.84rem', lineHeight: 1.7, marginBottom: 14 }}>{p.desc}</p>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
                    {p.tags.map(tag => <span key={tag} className="tech-tag">{tag}</span>)}
                  </div>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ color: p.accent, fontSize: '0.84rem', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    {t('viewProject')} <Icon.ArrowRight />
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{ padding: '100px 20px', background: 'rgba(10,10,26,0.5)', position: 'relative' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <FadeIn style={{ textAlign: 'center', marginBottom: 60 }}>
            <span className="badge badge-green" style={{ marginBottom: 14 }}>Pricing</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontFamily: 'var(--font-display)' }}>{t('pricingPlans')}</h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: 12, fontSize: '0.95rem' }}>{t('transparentPricesNoHidden')}</p>
            <Link href="/pricing" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 14, color: 'var(--accent-cyan)', fontSize: '0.88rem', fontWeight: 600, textDecoration: 'none' }}>
              {t('viewFullPricingDescription')} <Icon.ArrowRight />
            </Link>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 18 }}>
            {([
              {
                icon: <Icon.Leaf />, name: t('basic'), price: '$150', desc: t('landingOrBusinessCard'), color: '#00ff88',
                gradient: 'linear-gradient(135deg, #00ff88, #00d4aa)',
                features: [t('pages1to3'), t('responsiveDesign'), t('basicSeoShort'), t('contactFormShort'), t('ultraFastDev1to3Days'), t('oneMonthSupport')],
              },
              {
                icon: <Icon.Rocket />, name: t('startupTariff'), price: '$450', desc: t('mvpFunctionalSites'), color: '#00f5ff',
                gradient: 'linear-gradient(135deg, #00f5ff, #3b82f6)',
                features: [t('upTo5Pages'), t('responsiveDesign'), t('fullSeoOptimization'), t('basicAuth'), t('contactForms'), t('twoMonthsSupport')],
              },
              {
                icon: <Icon.Star />, name: t('businessPlan'), price: '$999', desc: t('saasAndEcommerce'), color: '#a855f7',
                gradient: 'linear-gradient(135deg, #a855f7, #7c3aed)',
                features: [t('upTo15Pages'), t('fullAuth'), t('database'), t('adminPanel'), t('apiIntegrations'), t('threeMonthsSupport')],
                featured: true,
              },
              {
                icon: <Icon.Building />, name: t('enterprisePlan'), price: '$1499+', desc: t('complexCorporateSolutions'), color: '#f472b6',
                gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
                features: [t('unlimitedPagesText'), t('fullApiIntegrations'), t('paymentSystems'), t('analyticsReports'), t('scaling'), t('sixMonthsSupport')],
              },
            ] as { icon: React.ReactNode; name: string; price: string; desc: string; color: string; gradient: string; features: string[]; featured?: boolean }[]).map((plan, i) => (
              <FadeIn key={i} delay={i * 0.1} className={`pricing-card${plan.featured ? ' featured' : ''}`} style={{ position: 'relative' }}>
                {plan.featured && (
                  <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #a855f7, #7c3aed)', color: '#fff', padding: '4px 16px', borderRadius: 100, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>
                    ★ {t('popularBadge')}
                  </div>
                )}
                <div style={{ textAlign: 'center', marginBottom: 24, paddingTop: plan.featured ? 12 : 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, borderRadius: 12, background: `${plan.color}15`, border: `1px solid ${plan.color}35`, color: plan.color, margin: '0 auto 10px' }}>
                    {plan.icon}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', marginBottom: 5 }}>{plan.name}</h3>
                  <div style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'var(--font-display)', background: plan.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: 4 }}>{plan.price}</div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>{plan.desc}</p>
                </div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 24 }}>
                  {plan.features.map((f, j) => (
                    <li key={j} className="check-item" style={{ fontSize: '0.8rem' }}>
                      <span className="check-icon" style={{ background: `${plan.color}18`, borderColor: `${plan.color}35`, color: plan.color }}><Icon.Check /></span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" style={{ display: 'block', textAlign: 'center', padding: '11px', borderRadius: 8, background: plan.gradient, color: '#000', fontWeight: 700, fontSize: '0.84rem', textDecoration: 'none', letterSpacing: '0.02em', transition: 'all 0.3s ease', boxShadow: `0 0 20px ${plan.color}25` }}>
                  {i === 3 ? t('discuss') : t('orderNow')}
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '100px 20px', position: 'relative' }}>
        <div className="orb-purple" style={{ width: 380, height: 380, top: 0, right: -80, opacity: 0.25 }} />
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <FadeIn style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="badge" style={{ marginBottom: 14 }}>FAQ</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontFamily: 'var(--font-display)' }}>{t('faqTitle')}</h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: 12, fontSize: '0.95rem' }}>{t('faqSubtitle')}</p>
          </FadeIn>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {([
              { icon: <Icon.Rocket />, q: 'Як швидко ви можете розпочати роботу над проектом?', a: 'Зазвичай розпочинаю роботу в перший день після погодження технічного завдання та внесення передоплати.' },
              { icon: <Icon.Money />, q: 'Яка схема оплати?', a: '50% передоплата при підписанні договору, 50% при здачі проекту. Для великих проектів можлива поетапна оплата.' },
              { icon: <Icon.Wrench />, q: 'Що входить в підтримку сайту?', a: 'Технічні правки, оновлення контенту, резервні копії, моніторинг роботи сайту, дрібні доопрацювання.' },
              { icon: <Icon.Mobile />, q: 'Чи буде сайт адаптований під мобільні пристрої?', a: "Так, всі сайти обов'язково адаптуються. Використовую mobile-first підхід для найкращої продуктивності." },
              { icon: <Icon.Search />, q: 'Чи оптимізуєте сайт для пошукових систем?', a: 'Базове SEO входить у всі тарифи: мета-теги, структуровані дані, швидкість завантаження. Повна SEO-оптимізація як додатковий сервіс.' },
              { icon: <Icon.Chart />, q: 'Чи надаєте доступ до адміністрування сайту?', a: 'Так, передаю всі паролі та навчаю користуванню адмін-панеллю. Надаю документацію та відеоінструкції.' },
            ] as { icon: React.ReactNode; q: string; a: string }[]).map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="faq-item">
                <div style={{ padding: '22px 26px', display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent-cyan)', opacity: 0.7, marginTop: 2, flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.96rem', marginBottom: 8, color: 'var(--text-primary)' }}>{item.q}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.75 }}>{item.a}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3} className="glass-card-strong" style={{ marginTop: 44, padding: '36px 28px', textAlign: 'center', borderColor: 'rgba(0,245,255,0.14)' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', marginBottom: 10 }}>{t('noAnswer')} <Icon.Question /></h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 22, fontSize: '0.92rem' }}>{t('telegramResponse')}</p>
            <a href="https://t.me/ms5e60" target="_blank" rel="noopener noreferrer" className="btn-neon-cyan" style={{ padding: '13px 30px', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <Icon.Telegram /> {t('writeToTelegram')}
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: '100px 20px', background: 'rgba(10,10,26,0.55)', position: 'relative' }}>
        <div className="orb-cyan" style={{ width: 380, height: 380, top: -80, left: -80, opacity: 0.18 }} />
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          <FadeIn style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="badge" style={{ marginBottom: 14 }}>Contact</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontFamily: 'var(--font-display)' }}>{t('contactMeTitle')}</h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: 12, fontSize: '0.95rem' }}>{t('readyToDiscussProject')}</p>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48, alignItems: 'start' }}>
            <FadeIn direction="right">
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', marginBottom: 26 }}>{t('contactInformationTitle')}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 36 }}>
                {([
                  { icon: <Icon.Mail />, label: 'Email', val: 'maryanlikesyou@gmail.com', href: 'mailto:maryanlikesyou@gmail.com' },
                  { icon: <Icon.Telegram />, label: 'Telegram', val: '@ms5e60', href: 'https://t.me/ms5e60' },
                ] as { icon: React.ReactNode; label: string; val: string; href: string }[]).map((c, i) => (
                  <a key={i} href={c.href} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none' }}>
                    <div className="contact-icon-box">{c.icon}</div>
                    <div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.76rem', marginBottom: 2, fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>{c.label}</div>
                      <div style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.92rem' }}>{c.val}</div>
                    </div>
                  </a>
                ))}
              </div>
              <div className="glass-card" style={{ padding: 22, borderColor: 'rgba(0,255,136,0.14)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 7 }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent-green)', display: 'block', boxShadow: '0 0 10px var(--accent-green)' }} />
                  <span style={{ color: 'var(--accent-green)', fontSize: '0.84rem', fontWeight: 600 }}>Open to Work</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.83rem', lineHeight: 1.65 }}>Приймаю нові проєкти. Зазвичай відповідаю протягом кількох хвилин.</p>
              </div>
            </FadeIn>
            <FadeIn direction="left" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <form style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: 7, fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>{t('nameLabel')}</label>
                  <input type="text" className="input-dark" placeholder={t('yourName')} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: 7, fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>Email</label>
                  <input type="email" className="input-dark" placeholder="your@email.com" />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: 7, fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>{t('projectTypeLabel')}</label>
                  <select className="select-dark">
                    <option>{t('mvpDevelopmentOption')}</option>
                    <option>{t('saasAppOption')}</option>
                    <option>{t('corporateWebsiteOption')}</option>
                    <option>{t('landingPageOption')}</option>
                    <option>{t('otherOption')}</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: 7, fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>{t('projectDescriptionLabel')}</label>
                  <textarea rows={4} className="input-dark" placeholder={t('tellAboutProject')} style={{ resize: 'vertical' }} />
                </div>
                <button type="submit" className="btn-neon-purple" style={{ marginTop: 4, padding: '15px', width: '100%', fontSize: '0.94rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                  <Icon.Lightning /> {t('sendMessage')}
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '36px 20px', background: 'rgba(5,5,16,0.92)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.05rem', marginBottom: 3 }}>
              <span className="gradient-text">veryrary agency</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{t('webDeveloperFooter')}</p>
          </div>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'center' }}>
            {([['Next.js', '#00f5ff'], ['React', '#61dafb'], ['TypeScript', '#3178c6']] as [string, string][]).map(([tech, color]) => (
              <span key={tech} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color }}>{tech}</span>
            ))}
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{t('copyrightText')}</p>
        </div>
      </footer>
    </div>
  );
}
