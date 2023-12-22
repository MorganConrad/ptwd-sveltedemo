---
title: Svelte Intro
prev:
next: 2-Sveltekit-intro
---

## Svelte's Approach

### Compiled.
 - Produces highly optimized _vanilla JavaScript_.
 - smaller application bundles and better performance
   - 1.7KB vs. Reacts 44.5KB
   - helps with PWAs
   - TODO: add link to (Benchmarks)
 - _more approachable_

### Sticks closely to the classsic web development model
 - HTML, CSS, JS
 - a few extensions and rare syntaxes: "_almost_ vanilla JS"
 - uses the real DOM:

 - _more approachable_
 - TypeScript support (also JSDoc support)

 ### Uses the "real" DOM
  - Tools such as D3.js and Svelte work together
  - you seldom need Svelte specific library.

### Other Advantages (at least, claimed advantages)
 - less boilerplate
 - reactivity built in: no need for boilerplate "hooks"
 - easier to "Sveltify" vanilla JS cause Svelte is closer to vanilla JS
 - built in testing-library/svelte

### Disadvantages
 - Younger than React, Vue, Angular etc... => smaller ecosystem
 - minor language differences on events, templating, etc.


## Where it's good

 - Web applications intended for low-power devices
 - data-visualizations that need to display a large number of DOM elements
 - Smaller projects
 - Onboarding people with basic web development knowledge


Much of this taken from [MDN](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)

