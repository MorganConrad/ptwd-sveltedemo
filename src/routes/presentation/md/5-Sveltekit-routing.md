---
title: Basic Sveltekit Routing
prev: 4-YourFirstSvelteComponent
next: 6-Sveltekit-routing2
---

## Folder Based (Only)

 - breaking change from Sapper, where about.svelte etc. were possible
 - when you see the file organization you will understand
 - special files begin with a "+"
 - all are optional, but you probably want a +page.svelte or a +server.js

### +page.svelte

 - web page for that folder / route (like an index.html)

### +page.js or +page.server.js

 - provides the data for the page via a `load()` function.
 - _.server.js_ means this must run on a server to _protect secrets_
   - can only return serializable JSON
   - no access to window, document, etc...
   - may or may not have access to file system
 - else it is a "universal" load function, with more options
   - varies by adapter, a bit confusing...
 - you can also use the page's `onMount()`, with caveats.

## +layout.svelte

 - provides a layout for _all pages_ in this folder _or below._
 - e.g. a common header, footer, `<main> </main>`
 - if user is logged in, language or darkmode prefs,...
 - underlying page HTML placed into a `<slot />`

## +layout.js or +layout.server.js

 - provides data for layout.svelte via `load()`
 - again, _.server.js_ means it must run on the server

## +server.js

 - an API endpoint, must run on a server (doh!)
 - GET, POST etc...
 - form actions
 - Brave programmers _can combine_ this with +page.js!
   - using [Content Negotiation](https://kit.svelte.dev/docs/routing#server-content-negotiation)
   - `/api/the/path/`  simpler alternatives
   - `/the/path.json/`

## +error.svelte

 - if you want more route specific errors than in the default one in /



