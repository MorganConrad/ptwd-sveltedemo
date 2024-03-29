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
   - 1.7KB vs. React's 44.5KB
   - fares very well on most benchmarks

### Sticks closely to classic web development model
 - HTML, CSS, JS
 - a few extensions and rare syntaxes: "_French_ Vanilla JS"
 - uses the real DOM:
   - Tools such as D3.js and Svelte work together
   - you seldom need a Svelte specific library.
 - _more approachable?_
 - TypeScript support (also JSDoc support, they are moving away from TS)

### Other Advantages (at least, claimed advantages)
 - reactivity built in: less boilerplate "hooks"
 - easier to "Sveltify" vanilla JS because Svelte is closer to vanilla JS
 - built in testing-library/svelte

### Disadvantages
 - Younger than React, Vue, Angular etc... => smaller ecosystem
 - support via Discord (some have complained)
 - minor language differences on events, templating, etc.

### History & Notes
- Open Source, compiler written in Javascript / TS
- v1 late 2016, based on Ractive.js
- v2 2018, `{{ }} -> {}`
- v3 2019, written in Typescript, easier reactivity
- v4 2023, "maintenance" for speed, TS -> JS + JSDoc
- v5 coming soon, will add Runes, another way of doing reactivity

Much of this taken from [MDN](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)

