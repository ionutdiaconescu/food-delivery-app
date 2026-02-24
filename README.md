# Tasty - Food Delivery App

Aplicație web de food delivery construită cu React, Tailwind CSS și Firebase.

## Funcționalități principale

- Landing page cu secțiuni navigabile (`Home`, `Menu`, `About Us`, `Service`)
- Filtrare produse pe categorii
- Adăugare produse în coș (persistență în `localStorage`)
- Autentificare Google (Firebase Auth)
- Panou admin pentru creare produse (`/createItem`)
- Stocare date în Firestore + upload imagini în Firebase Storage

## Stack tehnic

- React 18
- React Router DOM 6
- Tailwind CSS
- Framer Motion
- Firebase v9 (Auth, Firestore, Storage)

## Rulare locală

### 1) Instalare dependențe

```bash
npm install
```

### 2) Start proiect

```bash
npm start
```

Aplicația va porni pe `http://localhost:3000`.

### 3) Build producție

```bash
npm run build
```

## Structură proiect

```text
src/
	components/       # UI components (header, home, menu, cart, create item)
	context/          # state global (reducer + provider)
	utils/            # date statice + funcții Firebase
	firebase.config.js
public/
	index.html        # metadata SEO
	manifest.json     # PWA metadata
	robots.txt
	sitemap.xml
```

## Configurare Firebase

Configurația Firebase este în `src/firebase.config.js`.

Pentru producție, recomandat:

- mută cheile în variabile de mediu (`.env`)
- folosește reguli stricte în Firestore/Storage
- restricționează accesul admin la nivel de backend/rules

## SEO implementat

Au fost adăugate îmbunătățiri SEO de bază:

- `title` + `meta description` relevante
- Open Graph (`og:*`) pentru share pe social
- Twitter card tags
- `robots` + `canonical`
- JSON-LD (`WebSite` schema)
- `robots.txt` cu referință la `sitemap.xml`

## Scripturi disponibile

- `npm start` - rulează aplicația în development
- `npm run build` - creează build de producție
- `npm test` - rulează testele

## Posibile îmbunătățiri viitoare

- Migrare de la CRA la Vite pentru performanță mai bună
- Generare dinamică sitemap pe domeniul final (URL-uri absolute)
- Pagină dedicată pentru fiecare produs (SEO mai bun)
- `react-helmet-async` pentru meta per pagină/rută
- Lighthouse audit (Performance, SEO, Accessibility, Best Practices)
