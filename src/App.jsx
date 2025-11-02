import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CatalogShowcase from './components/CatalogShowcase';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState('en');
  const toggleLang = () => setLang((l) => (l === 'en' ? 'fr' : 'en'));

  return (
    <div className="min-h-screen bg-neutral-50 text-gray-900">
      <Header lang={lang} onToggleLang={toggleLang} />
      <main>
        <Hero lang={lang} />
        <CatalogShowcase lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
