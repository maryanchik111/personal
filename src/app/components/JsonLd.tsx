export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Мар'ян Собчук",
    "jobTitle": "Веб-розробник",
    "description": "Професійний веб-розробник з досвідом 6+ місяців. Спеціалізуюся на Next.js, React, Tailwind CSS.",
    "image": "https://devs-plus.com/profile.jpg",
    "url": "https://devs-plus.com",
    "email": "maryan.sobchuk@gmail.com",
    "telephone": "+380-XX-XXX-XXXX",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "UA",
      "addressLocality": "Україна"
    },
    "knowsAbout": [
      "Next.js",
      "React",
      "TypeScript", 
      "JavaScript",
      "Tailwind CSS",
      "Figma",
      "Web Development",
      "Frontend Development",
      "MVP Development",
      "SaaS Development"
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "MVP розробка",
        "description": "Швидко створюю мінімально життєздатний продукт",
        "price": "800",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer", 
        "name": "SaaS додатки",
        "description": "Повнофункціональні SaaS-платформи",
        "price": "1500",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "name": "Корпоративні сайти", 
        "description": "Професійні сайти для бізнесу",
        "price": "2500",
        "priceCurrency": "USD"
      }
    ],
    "sameAs": [
      "https://github.com/maryanchik111",
      "https://t.me/maryan_sobchuk"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}