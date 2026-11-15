# Next.js Collaborative Filtering (WIS) — Boilerplate

Boilerplate Front-End minimalis menggunakan **Next.js (App Router)**, **TypeScript**, dan **Tailwind CSS**.

## Struktur Folder

```text
├── public/                 # Aset statis
├── src/
│   ├── app/                # Next.js App Router (layout, page, globals.css)
│   ├── components/         # Komponen UI reusable
│   ├── lib/                # Utilitas dan helper functions
│   ├── services/           # Konfigurasi pemanggilan API / fetcher
│   └── types/              # Definisi tipe data TypeScript
├── .env.example            # Contoh variabel environment
├── next.config.ts          # Konfigurasi Next.js
├── postcss.config.mjs      # Konfigurasi PostCSS
├── tailwind.config.ts      # Konfigurasi Tailwind CSS
└── tsconfig.json           # Konfigurasi TypeScript
```

## Cara Menjalankan

1. Install dependencies:
   ```bash
   npm install
   ```

2. Jalankan server development:
   ```bash
   npm run dev
   ```

3. Buka `http://localhost:3000` di browser.
