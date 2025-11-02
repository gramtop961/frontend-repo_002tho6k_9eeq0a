import React from 'react';
import { ShoppingCart, User, Search, Globe, Phone, Mail, Instagram } from 'lucide-react';

const copy = {
  en: {
    promo: 'Shipping across Canada',
    catalog: 'Catalog',
    teams: 'Teams',
    custom: 'Custom Orders',
    bulk: 'Bulk & Team Orders',
    about: 'About',
    contact: 'Contact',
    account: 'Account',
    cart: 'Cart',
    searchPlaceholder: 'Search jerseys, teams, players…',
    email: 'Email',
    phone: 'Phone',
    lang: 'EN',
  },
  fr: {
    promo: 'Livraison partout au Canada',
    catalog: 'Catalogue',
    teams: 'Équipes',
    custom: 'Commandes personnalisées',
    bulk: "Commandes d'équipe et en gros",
    about: 'À propos',
    contact: 'Contact',
    account: 'Compte',
    cart: 'Panier',
    searchPlaceholder: 'Rechercher maillots, équipes, joueurs…',
    email: 'Courriel',
    phone: 'Téléphone',
    lang: 'FR',
  },
};

export default function Header({ lang = 'en', onToggleLang }) {
  const c = copy[lang];
  return (
    <header className="w-full border-b border-gray-200 bg-neutral-50">
      {/* Promo strip */}
      <div className="w-full bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm text-gray-700">
          <div className="flex items-center gap-3">
            <span className="font-medium text-gray-900">Passion Sports</span>
            <span className="hidden h-4 w-px bg-gray-300 md:block" />
            <span className="text-red-700 font-medium">{c.promo}</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="mailto:passionstorejerseys@gmail.com" className="flex items-center gap-2 hover:text-gray-900">
              <Mail className="h-4 w-4" /> passionstorejerseys@gmail.com
            </a>
            <a href="tel:+14388745562" className="hidden items-center gap-2 hover:text-gray-900 sm:flex">
              <Phone className="h-4 w-4" /> (438) 874-5562
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hidden items-center gap-2 hover:text-gray-900 sm:flex">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-red-700" />
              <span className="text-xl font-extrabold tracking-tight text-gray-900">Passion Sports</span>
            </div>
          </div>

          {/* Search */}
          <div className="hidden flex-1 items-center md:flex">
            <div className="relative w-full max-w-lg">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                aria-label="search"
                placeholder={c.searchPlaceholder}
                className="w-full rounded-full border border-gray-300 bg-white py-2 pl-9 pr-4 text-sm outline-none ring-red-600 placeholder:text-gray-400 focus:ring-2"
              />
            </div>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1 rounded-full border border-gray-300 px-3 py-1.5 text-sm text-gray-800 hover:bg-gray-100"
              aria-label="Toggle language"
            >
              <Globe className="h-4 w-4" /> {c.lang}
            </button>
            <button className="rounded-full border border-gray-300 p-2 hover:bg-gray-100" aria-label="Account">
              <User className="h-5 w-5" />
            </button>
            <button className="relative rounded-full border border-gray-300 p-2 hover:bg-gray-100" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-red-700 px-1 text-[10px] font-bold text-white">2</span>
            </button>
          </div>
        </div>

        {/* Links */}
        <nav className="mt-4 hidden justify-center gap-6 text-sm font-medium text-gray-700 md:flex">
          <a className="hover:text-gray-900" href="#catalog">{c.catalog}</a>
          <a className="hover:text-gray-900" href="#teams">{c.teams}</a>
          <a className="hover:text-gray-900" href="#custom">{c.custom}</a>
          <a className="hover:text-gray-900" href="#bulk">{c.bulk}</a>
          <a className="hover:text-gray-900" href="#about">{c.about}</a>
          <a className="hover:text-gray-900" href="#contact">{c.contact}</a>
          <a className="hover:text-gray-900" href="#account">{c.account}</a>
          <a className="hover:text-gray-900" href="#cart">{c.cart}</a>
        </nav>
      </div>
    </header>
  );
}
