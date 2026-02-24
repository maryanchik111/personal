'use client';

import { useState } from 'react';
import { useTranslations } from '@/app/hooks/useTranslations';
import LanguageSwitcher from './LanguageSwitcher';

export default function MobileMenu() {
  const { t } = useTranslations();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden" style={{ position: 'relative' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: 'transparent',
          border: '1px solid rgba(0,245,255,0.3)',
          borderRadius: 8,
          padding: '8px 10px',
          cursor: 'pointer',
          color: 'var(--accent-cyan)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
        }}
        aria-label="Toggle menu"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen
            ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            style={{ position: 'fixed', inset: 0, background: 'rgba(5,5,16,0.7)', zIndex: 99, backdropFilter: 'blur(4px)' }}
            onClick={() => setIsOpen(false)}
          />
          <div style={{
            position: 'fixed',
            top: 68,
            left: 0,
            right: 0,
            zIndex: 100,
            background: 'rgba(5,5,20,0.98)',
            backdropFilter: 'blur(24px)',
            borderBottom: '1px solid rgba(0,245,255,0.1)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}>
            {[
              ['#about', t('aboutMe')],
              ['#services', t('services')],
              ['#portfolio', t('portfolio')],
              ['#pricing', t('pricing')],
              ['#contact', t('contact')],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                style={{
                  padding: '14px 16px',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '1rem',
                  borderRadius: 8,
                  transition: 'all 0.2s ease',
                  borderLeft: '2px solid transparent',
                  display: 'block',
                }}
                onMouseEnter={e => {
                  (e.target as HTMLElement).style.color = 'var(--accent-cyan)';
                  (e.target as HTMLElement).style.borderLeftColor = 'var(--accent-cyan)';
                  (e.target as HTMLElement).style.background = 'rgba(0,245,255,0.05)';
                }}
                onMouseLeave={e => {
                  (e.target as HTMLElement).style.color = 'var(--text-secondary)';
                  (e.target as HTMLElement).style.borderLeftColor = 'transparent';
                  (e.target as HTMLElement).style.background = 'transparent';
                }}
              >
                {label}
              </a>
            ))}
            <div style={{ padding: '8px 0', borderTop: '1px solid rgba(255,255,255,0.07)', marginTop: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <LanguageSwitcher />
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="btn-neon-purple"
                style={{ padding: '10px 20px', fontSize: '0.85rem' }}
              >
                {t('getFreeConsultation')}
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}