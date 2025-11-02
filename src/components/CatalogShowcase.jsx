import React from 'react';
import { Star, ChevronRight } from 'lucide-react';

const copy = {
  en: {
    featuredTitle: 'Featured categories',
    trendingTitle: 'Trending jerseys',
    size: 'Size',
    addToCart: 'Add to cart',
    customize: 'Customize',
    teamOrdersTitle: 'Team / Bulk Orders',
    teamOrdersDesc: 'Outfit your whole squad. Upload your roster or send a spreadsheet – we handle names, numbers, and delivery.',
    teamOrdersCTA: 'Start a team order',
    whyTitle: 'Why buy from Passion Sports',
    why: [
      'Official products and premium materials',
      'Fast delivery anywhere in Canada',
      'Personalized jerseys with name and number',
    ],
  },
  fr: {
    featuredTitle: 'Catégories en vedette',
    trendingTitle: 'Maillots tendance',
    size: 'Taille',
    addToCart: 'Ajouter au panier',
    customize: 'Personnaliser',
    teamOrdersTitle: "Commandes d'équipe / en gros",
    teamOrdersDesc: "Habille toute ton équipe. Téléverse ta liste ou un CSV – on gère les noms, numéros et la livraison.",
    teamOrdersCTA: "Commencer une commande d'équipe",
    whyTitle: 'Pourquoi acheter chez Passion Sports',
    why: [
      'Produits officiels et matériaux premium',
      'Livraison rapide partout au Canada',
      'Maillots personnalisés avec nom et numéro',
    ],
  },
};

const categories = [
  { key: 'soccer', labelEn: 'Soccer', labelFr: 'Soccer', img: 'https://images.unsplash.com/photo-1543322748-33df6d3db806?q=80&w=1200&auto=format&fit=crop' },
  { key: 'hockey', labelEn: 'Hockey', labelFr: 'Hockey', img: 'https://images.unsplash.com/photo-1603297612661-7603c961de2b?q=80&w=1200&auto=format&fit=crop' },
  { key: 'basketball', labelEn: 'Basketball', labelFr: 'Basketball', img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop' },
  { key: 'football', labelEn: 'Football', labelFr: 'Football', img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop' },
  { key: 'baseball', labelEn: 'Baseball', labelFr: 'Baseball', img: 'https://images.unsplash.com/photo-1546502203-c0a2c59317df?q=80&w=1200&auto=format&fit=crop' },
  { key: 'f1', labelEn: 'Formula 1', labelFr: 'Formule 1', img: 'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1200&auto=format&fit=crop' },
];

const products = [
  { id: 1, team: 'PSG 24/25', price: 139.99, img: 'https://images.unsplash.com/photo-1547347298-4074fc08b7b8?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, team: 'Maple Leafs Home', price: 169.99, img: 'https://images.unsplash.com/photo-1517260739337-6799d9d02b28?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, team: 'Raptors City', price: 149.99, img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, team: 'Alouettes', price: 129.99, img: 'https://images.unsplash.com/photo-1526672818407-335c136748cd?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, team: 'Blue Jays', price: 159.99, img: 'https://images.unsplash.com/photo-1622047223689-06b4815b16a6?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, team: 'Ferrari F1', price: 179.99, img: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop' },
];

function CategoryCard({ title, img }) {
  return (
    <a href="#catalog" className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img src={img} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="flex items-center justify-between p-4">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
      </div>
    </a>
  );
}

function ProductCard({ item, lang }) {
  const cta = lang === 'fr' ? 'Ajouter au panier' : 'Add to cart';
  const customize = lang === 'fr' ? 'Personnaliser' : 'Customize';
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-square w-full overflow-hidden">
        <img src={item.img} alt={item.team} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 hidden items-center justify-center bg-black/30 backdrop-blur-sm transition group-hover:flex">
          <span className="pointer-events-auto rounded-full border border-white bg-white/10 px-3 py-1.5 text-sm font-medium text-white">{customize}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-sm text-gray-500">Passion Sports</p>
            <h4 className="font-semibold text-gray-900">{item.team}</h4>
          </div>
          <p className="font-semibold text-gray-900">${item.price.toFixed(2)}</p>
        </div>
        <div className="mt-3 flex items-center gap-2">
          {['XS','S','M','L','XL','XXL'].map((s) => (
            <button key={s} className="rounded-full border border-gray-300 px-2.5 py-1 text-xs text-gray-700 hover:bg-gray-100">{s}</button>
          ))}
        </div>
        <button className="mt-3 inline-flex items-center justify-center rounded-full bg-red-700 px-4 py-2 text-sm font-semibold text-white hover:bg-red-800">
          {cta}
        </button>
      </div>
    </div>
  );
}

export default function CatalogShowcase({ lang = 'en' }) {
  const c = copy[lang];
  return (
    <div className="mx-auto max-w-7xl px-4">
      {/* Featured categories */}
      <section id="catalog" className="py-12">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold text-gray-900">{c.featuredTitle}</h2>
          <a href="#" className="text-sm font-medium text-red-700 hover:text-red-800">{lang === 'fr' ? 'Voir tout' : 'View all'}</a>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.key} title={lang === 'fr' ? cat.labelFr : cat.labelEn} img={cat.img} />
          ))}
        </div>
      </section>

      {/* Trending grid */}
      <section className="py-8">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold text-gray-900">{c.trendingTitle}</h2>
          <div className="flex items-center gap-2 text-yellow-600">
            <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
            <span className="text-sm font-medium">Hot this week</span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} item={p} lang={lang} />
          ))}
        </div>
      </section>

      {/* Team/Bulk orders */}
      <section id="bulk" className="py-12">
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 shadow-sm md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{c.teamOrdersTitle}</h3>
              <p className="mt-3 text-gray-700">{c.teamOrdersDesc}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#" className="inline-flex items-center gap-2 rounded-full bg-red-700 px-5 py-2.5 text-white hover:bg-red-800">
                  {c.teamOrdersCTA} <ChevronRight className="h-4 w-4" />
                </a>
                <a href="#" className="inline-flex items-center gap-2 rounded-full border border-red-700 px-5 py-2.5 text-red-700 hover:bg-red-50">
                  {lang === 'fr' ? 'Téléverser CSV' : 'Upload CSV'}
                </a>
              </div>
            </div>
            <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-white">
              <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop" alt="Team jerseys" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Why buy */}
      <section className="py-8">
        <h3 className="mb-6 text-2xl font-bold text-gray-900">{c.whyTitle}</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {c.why.map((w, idx) => (
            <div key={idx} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-700">
                <Star className="h-5 w-5" />
              </div>
              <p className="font-medium text-gray-900">{w}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
