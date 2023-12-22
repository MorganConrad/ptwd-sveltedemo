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
npm run dev
```

## Folders

### static

 - available from other web pages
 - mainly images, CSS files

### src  main part of the app


 - routes/
 - app.html - base HTML

#### lib/
 - shared .js files, .svelte components
 - access via `$lib/...` so no need for `../../../lib/foo.js`

#### routes/
 - folder based routing
 - +page.svelte: home or landing page (i.e. index.html on most sites)
 - +error.svelte: if you want


## files

 - svelte.config.js
   - preprocessing (e.g. mdsvex)
   - aliases for easier folder finding  (`$lib` is standard)
   - "adapter"
 - vite.config.js
 - package.json, .gitignore, and other usual suspects


