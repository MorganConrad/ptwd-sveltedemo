---
title: Basic Sveltekit Routing
prev: 4-YourFirstSvelteComponent
next: 6-Sveltekit-routing2
---

## Folder Based

 - breaking change from earlier where about.svelte, help.svelte were possible
 - when you see the file organization you will understand
 - special files begin with a "+"
 - all are optional, but you probably want a +page.svelte or a +server.js

### +page.svelte

 - web page for that folder / route (like an index.html on a static site)

### +page.js or +page.server.js

 - provides the data for the page via a `load()` function.
 - _.server.js_ means this must run on a server to _protect secrets_

## +layout.svelte

 - provides a layout for _all pages_ in this folder or below
 - e.g. a common header, footer, `<main> </main>`
 - if user is logged in, language or darkmode prefs,...
 - underlying page HTML placed into a `<slot />`

## +layout.js or +layout.server.js

 - provides data for layout.svelte

## +server.js

 - an API endpoint
 - GET, POST etc...
 - form actions
 - I doubt if you can combine this with +page.js

## +error.svelte

 - if you want more route specific errors that the default one in /



