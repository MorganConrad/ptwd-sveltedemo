---
title: Advanced Sveltekit Routing
prev: 5-Sveltekit-routing
next: 7-Adapters-deployment
---

## Special Folder Names

 *Note*
  - more specific routes will be _tested first_.
  - You can add parameter matchers (e.g. regex) for fancy stuff

### [name]

 - A "dynamic" route
 - name is often something like slug, id

### [[name]]

 - a single dynamic name, but optional
 - e.g. for locale
   - `/fr/path...`   `/de/path...`
   - but a default `/path...` for English

### [...rest]

 - variable length dynamic parameters, "rest" or "varargs"

### (vname)

 - Create a "virtual" grouping that does not appear to the user in the URL route
 - Useful of you want a common layout & logic for a bunch of folders
   - e.g. some folders require authentication, perhaps use `(authed)`



## the load() function

To help you navigate through all these routes, the `load()` function is passed a kitchen sink of stuff

 Typically destructured at call time, e.g.  `load({ foo, bar}) { ... }`

 - cookies
 - url
 - route
 - params  (those dynamic routes)
 - fetch:   a souped up fetch function
 - setHeaders
 - more...

