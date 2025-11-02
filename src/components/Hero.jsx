import React from 'react';
import Spline from '@splinetool/react-spline';
import { ChevronRight } from 'lucide-react';

const copy = {
  en: {
    title1: 'Customize your jersey',
    title2: 'Make it yours today',
    cta1: 'Shop jerseys',
    cta2: 'See teams',
  },
  fr: {
    title1: 'Personnalise ton maillot',
    title2: 'Fais-le à ton image',
    cta1: 'Magasiner les maillots',
    cta2: 'Voir les équipes',
  },
};

export default function Hero({ lang = 'en' }) {
  const c = copy[lang];
  return (
    <section className="relative w-full" style={{ minHeight: 520 }}>
      {/* Spline cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Overlay gradient for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/20" />

      <div className="relative mx-auto flex max-w-7xl flex-col px-4 py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            <span className="block">{lang === 'fr' ? 'Personnalise ton maillot' : 'Customize your jersey'}</span>
            <span className="mt-2 block text-red-700">{c.title2}</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-gray-700">
            Passion Sports — official quality jerseys with name and number personalization. Fast delivery across Canada.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#catalog" className="inline-flex items-center gap-2 rounded-full bg-red-700 px-5 py-2.5 text-white shadow hover:bg-red-800">
              {c.cta1} <ChevronRight className="h-4 w-4" />
            </a>
            <a href="#teams" className="inline-flex items-center gap-2 rounded-full border border-red-700 px-5 py-2.5 text-red-700 hover:bg-red-50">
              {c.cta2}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
