
---
title: Adapters and Deployment
prev: 6-Sveltekit-routing2
next: 8-Other-resources
---

During development (`npm run dev`), you use a NodeJS environment.
Before a "real" build, you must _adapt_ it for your deployment target, using a small plugin in svelte.config.js.

Some adapters may have access to additional information about the request. For example, Cloudflare Workers can access an env object containing KV namespaces etc.

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
