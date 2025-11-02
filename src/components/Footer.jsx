import React from 'react';

const copy = {
  en: {
    contact: 'Contact',
    legal: 'Legal',
    returns: 'Returns',
    rights: 'All rights reserved.',
    about: 'About Passion Sports',
    policies: ['Privacy Policy', 'Terms of Service', 'Refund policy'],
  },
  fr: {
    contact: 'Contact',
    legal: 'Légal',
    returns: 'Retours',
    rights: 'Tous droits réservés.',
    about: 'À propos de Passion Sports',
    policies: ['Politique de confidentialité', "Conditions d'utilisation", 'Politique de remboursement'],
  },
};

export default function Footer({ lang = 'en' }) {
  const c = copy[lang];
  return (
    <footer className="mt-16 border-t border-gray-200 bg-neutral-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-red-700" />
            <span className="text-lg font-extrabold text-gray-900">Passion Sports</span>
          </div>
          <p className="mt-3 text-sm text-gray-700">
            {lang === 'fr' ? 'Boutique canadienne de maillots sportifs personnalisés.' : 'Canadian shop for personalized sports jerseys.'}
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-gray-900">{c.contact}</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Email: <a className="text-red-700 hover:underline" href="mailto:passionstorejerseys@gmail.com">passionstorejerseys@gmail.com</a></li>
            <li>Phone: <a className="text-red-700 hover:underline" href="tel:+14388745562">(438) 874-5562</a></li>
            <li>{lang === 'fr' ? 'Livraison partout au Canada' : 'Shipping across Canada'}</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-gray-900">{c.legal}</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            {c.policies.map((p) => (
              <li key={p}><a href="#" className="hover:underline">{p}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-gray-900">{c.returns}</h4>
          <p className="text-sm text-gray-700">
            {lang === 'fr'
              ? 'Retours sous 14 jours sur les produits non personnalisés. Les maillots avec nom/numéro ne sont pas remboursables.'
              : '14-day returns on non-personalized items. Jerseys with name/number are final sale.'}
          </p>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4">
        <p className="mx-auto max-w-7xl px-4 text-sm text-gray-600">© {new Date().getFullYear()} Passion Sports. {c.rights}</p>
      </div>
    </footer>
  );
}
