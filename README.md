# Adel's Website

Includes the original 夜 (night) character, seven backgrounds and six music tracks from yo-ru/yoru.moe, plus 187 movies and series with embedded posters and IMDb ratings.

## Deploy to Vercel
1. Extract this ZIP.
2. Create a new GitHub repository for Adel.
3. Upload the extracted files and folders, with package.json at the repository root. Do not upload the ZIP itself.
4. In Vercel choose Add New > Project, then import that repository.
5. Use framework Vite, build command npm run build, output directory dist, and install command npm install.
6. Deploy.

Vercel settings are included in vercel.json. No API keys or environment variables are required. Music starts only when Play is clicked.

## Run locally
Install Node.js, open a terminal in this folder, then run:

    npm install
    npm run dev

Production build:

    npm run build

## Edit
- index.html: profile wording and section titles
- src/config.ts: name, character, backgrounds and playlist
- src/movies.json: movie collection and embedded poster data
- src/movies.css: movie section styles
- src/style.css: original page styling

Sources: https://github.com/mykiller010-ui/aycoo and https://github.com/yo-ru/yoru.moe
Movie ratings: IMDb public dataset snapshot retrieved October 2, 2026. Series ratings apply to the whole show; assumed film versions are noted in the collection. Artwork and music remain the property of their respective owners.
