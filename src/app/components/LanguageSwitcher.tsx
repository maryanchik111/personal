'use client';

import { useTranslations } from '@/app/hooks/useTranslations';

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useTranslations();

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 8,
        padding: 3,
        gap: 2,
      }}
    >
      {(['ua', 'en'] as const).map((lang) => {
        const active = language === lang;
        return (
          <button
            key={lang}
            onClick={() => changeLanguage(lang)}
            type="button"
            style={{
              padding: '5px 11px',
              borderRadius: 6,
              fontSize: '0.75rem',
              fontWeight: 700,
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.06em',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              background: active
                ? 'rgba(0,245,255,0.15)'
                : 'transparent',
              color: active
                ? 'var(--accent-cyan)'
                : 'rgba(255,255,255,0.4)',
              boxShadow: active
                ? 'inset 0 0 0 1px rgba(0,245,255,0.35)'
                : 'none',
            }}
          >
            {lang.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}