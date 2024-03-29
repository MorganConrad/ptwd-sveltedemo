# ptwd-sveltedemo

Svelte - Sveltekit Demo for the Jan 10 2024 [Port Townsend Web Developers Meetup](https://www.meetup.com/port-townsend-web-developers-meetup/)

This is a bit of a mish-mash illustrating the many possibilities of SvelteKit.  It is definitely not intended as an example of "good design".  The major routes:

 - `/books` an example Rare Book Store
 - `/presentation` the PTWD presentation, but also an example of a blog
 - `/game` a simple game showing reactivity on a web page

[A version of this might be online at Netlify](https://pensive-hugle-9e5891.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/46e07044-1e46-4fb0-8b95-0ac51772a14c/deploy-status)](https://app.netlify.com/sites/pensive-hugle-9e5891/deploys)

## Install and Run

```
git clone https://github.com/MorganConrad/ptwd-sveltedemo.git
npm install
npm run dev

  then point your browser at http://localhost:5173/
```

## static folder

 - Truly static files - images, local css files, favicon.png
 - One _could_ put about.html  _etc._ here but you'd lose the templating

## src folder

 - **app.html**

   - framework HTML.
   - good place to put global CSS files (this uses Chota.css for some basic styling)
   - SEO meta tags could go here
     - there are modules to help with SEO via `%sveltekit.head%`

 - **+page.svelte**
   - landing page
   - corresponds to /index.html in a "normal" web site

 - **+error.svelte**
   - main error page (e.g. for 404s).  I think it only handles 400s, not 500s.

### src/lib

 - "Library" .js or .ts files
 - Svelte Components go here - standard Headers, Buttons, Footers, etc...
 - Not much here!

### src/routes

 - **The heart of the Sveltekit routing and app.**

#### About, Help

 - [Mdsvex](https://mdsvex.pngwn.io/) preprocessor concerts these +page.md files to Svelte

#### books

 - Demo of a site that sells products
 - **+layout.svelte:** a layout template for _all_ pages about books (and subfolders)
 - **+page.js:** retrieves all books from the API and puts them into +page.svelte's `data`
 - **+page.svelte:** demonstrates the `{#each}` to list all books.

#### books/[id]

 - `[id]` in brackets means this is a variable path parameter
   - doesn't need to be "id", could use "uid", "ISBN", "slug", whatever...
 - **+page.server.js:**
   - loads data from the "backend DB API"  (see below)
   - `*.server.js` means this _must run on the server_ to _protect secrets_
     - will matter when the app gets "adapted" and deployed
   - also provides "Form Actions" under `export const actions`
 - **+page.svelte:**
   - Details about an individual book
   - Form / Buttons to "Buy" and "Return"
   - `$: book = data.books[0];` funky syntax means that **book** is reactive.


### src/routes/api

 - simulates an external API (e.g. a database) to get books from a "backend"
 - underlying folder structure typically mimics your routes
 - **+server.js:** for _all_ books (could add some actual query stuff)
 - **[id]/+server.js:** for an individual book
   - GET
   - POST for form actions (Buy and Return a book)
     - notice the redirect, this was hard to figure out.


### Routes that are not part of the "Book Store"

#### src/presentation

 - unrelated to the "store", slides for a presentation
 - Example of how one would structure a Markdown blog
   - md folder has the files
   - base folder lists them (vite incantation in presentation/page.js)
   - [slug] is dynamic path to an individual "blog article"

#### game

 - Demo of a highly "reactive" game using simple Svelte
