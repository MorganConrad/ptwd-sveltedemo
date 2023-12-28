
---
title: Adapters and Deployment
prev: 6-Sveltekit-routing2
next: 8-Other-resources
---

During development (`npm run dev`), you use a NodeJS environment.
Before a "real" build, you must _adapt_ it for your deployment target, using a small plugin in svelte.config.js.

- `npm run build` builds
- `npm run preview` to preview on your development machine

The [adapters](https://kit.svelte.dev/docs/adapters) have a lot of small differences and minor "gotchas".

 - They definitely violate the Liskov Substitution Principle!
   - static sites
   - a full server (e.g. node)
   - Jamstack
 - options about prerendering, SSR, CSR, trailing slash...
 - You may also need to add a few special parameters or files, _e.g._
   - `.nojekyl`, `netlify.toml`
   - site specific options, e.g. environment, serverless functions

## Official Adapters
 - @sveltejs/adapter-cloudflare for Cloudflare Pages
 - @sveltejs/adapter-cloudflare-workers for Cloudflare Workers
 - @sveltejs/adapter-netlify for Netlify
 - @sveltejs/adapter-node for Node servers
 - @sveltejs/adapter-static for static site generation (SSG)
   - tries to crawl all your links.  You can help it out.
 - @sveltejs/adapter-vercel for Vercel

## Unofficial
 - Bun
 - Deno
 - Firebase
 - Azure Static Web Apps
 - Electron
 - Google Cloud App Engine
 - Github Pages
 - AWS with SST
 - Apache Cordova or Ionic Capacitor
 - Neutralinojs (what's that?)
 - DigitalOcean

