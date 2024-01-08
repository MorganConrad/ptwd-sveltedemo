---
title: Svelte Intro
prev:
next: 2-Sveltekit-intro
---

## Svelte's Approach

"A UI framework that uses a compiler to let you write breathtakingly concise components that do minimal work in the browser, using languages you already know — HTML, CSS and JavaScript..."

"a frontend framework & compiler to generate minimal, optimized JavaScript code for web applications."

### Compiled.
 - Produces highly optimized _vanilla JavaScript_.
 - smaller application bundles and better performance
   - 1.7KB vs. Reacts 44.5KB
   - helps with PWAs
   - fares well on most benchmarks
 - _more approachable_

### Sticks closely to the classsic web development model
 - HTML, CSS, JS
 - a few extensions and rare syntaxes: "_French_ Vanilla JS"
 - uses the real DOM:
 - _more approachable_
 - TypeScript support (also JSDoc support, they are moving away from TS)

### Uses the "real" DOM
  - Tools such as D3.js and Svelte work together
  - you seldom need a Svelte specific library.

### Other Advantages (at least, claimed advantages)
 - less boilerplate
 - reactivity built in: no need for boilerplate "hooks"
 - easier to "Sveltify" vanilla JS because Svelte is closer to vanilla JS
 - built in testing-library/svelte

### Disadvantages
 - Younger than React, Vue, Angular etc... => smaller ecosystem
 - support via Discord
 - minor language differences on events, templating, etc.

## Where it's good

 - Web applications intended for low-power devices
 - data-visualizations that need to display a large number of DOM elements
 - Smaller projects
 - Onboarding people with basic web development knowledge

### Caveat
- Svelte 5 is soon to be released... (@latest is 4.2.8)

Much of this taken from [MDN](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)

