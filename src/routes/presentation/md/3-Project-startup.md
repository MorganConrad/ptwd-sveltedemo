---
title: Your First Project
prev: 2-Sveltekit-intro
next: 4-YourFirstSvelteComponent
---


```
npm create svelte@latest my-project-name
   (will ask questions about TypeScript, project type, etc.)
cd my-project-name
npm install
npm run dev   (hot reloading etc...)
```

## Folders

### static/

 - available from other web pages
 - mainly images, CSS files

### src/  the main part of the app

 - [app.html](https://raw.githubusercontent.com/MorganConrad/ptwd-sveltedemo/main/src/app.html) - base HTML

#### src/lib/
 - shared .js files, .svelte components
 - access via `$lib/...` so no need for `../../../lib/foo.js`

#### src/routes/
 - folder based routing
 - +page.svelte: home or landing page (i.e. index.html on most sites)
 - +error.svelte: if you want


## files

 - [svelte.config.js](https://raw.githubusercontent.com/MorganConrad/ptwd-sveltedemo/main/svelte.config.js)
   - preprocessing (e.g. mdsvex)
   - aliases for easier folder finding  (`$lib` is standard)
   - "adapter"
 - vite.config.js
 - package.json, .gitignore, and other usual suspects


