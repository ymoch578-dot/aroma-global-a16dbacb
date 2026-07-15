# Spices Premium Indonesia — React + Vite (cPanel)

Standalone React + Vite + React Router build of the site, ready to deploy on standard cPanel hosting.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The output is written to `dist/`. Upload the **contents** of `dist/` (not the folder itself) to your cPanel `public_html/` directory (or a subdirectory). The included `.htaccess` handles SPA client-side routing so deep links and page refreshes work correctly.

## Deploying to cPanel

1. Run `npm run build` locally.
2. Open cPanel → File Manager → `public_html`.
3. Upload every file inside `dist/` (including the hidden `.htaccess`).
4. Visit your domain — done.

## Notes

- No SSR, no Node runtime, no Cloudflare Workers — pure static output.
- All page metadata (`<title>`, description, Open Graph, JSON-LD) is set client-side via `react-helmet-async`.
- Uses `base: "./"` so the build works whether you deploy at the domain root or in a subfolder.
