---
title: Typical Svelte Component / Page
prev: 3-Project-startup
next: 5-Sveltekit-routing
---


```
<script>
  imports...

  export let data;  // can be another name

  ... more JS code, reactive variables ...
</script>

<style>
  optional style stuff
</style>

Then, just write some HTML, use { } for templating,  Handlebars-like but subtle diffs (just enough to throw you off)

<h2>{data.title}</h2>

```

## A fuller Example: [/game/+page.svelte](https://raw.githubusercontent.com/MorganConrad/ptwd-sveltedemo/main/src/routes/game/%2Bpage.svelte)

#### `<script> ... </script>`  (simplified)

```
  let count = 40;
  let disarmCode = "";

  $: saved = (disarmCode === "007");
  $: color = getColor(count, saved);

  function startCountdown() { ... }

  function getColor(count, saved) { ... }
  ```
 - defines 4 variables
 - `$:` is Svelte's goofy syntax to define them as reactive
   - within that you have "real JS", _e.g._ can use `{ }`, call functions...
 - two functions for good measure

#### `<style> ... </style>`

 - add some colors

#### `<main> ... </main>`

 - mainly HTML
 - simple, little boilerplate,
   - most logic is _already covered_ in the `<script>`
 - `<button on:click={startCountdown}>` DOM events
 - `<input bind:value={disarmCode}` "bottom up" binding   ($: is top down)
   - disarmCode is then used reactively is `$: saved = ...`
 - `{#if} ... {:else} ... {/if}` basic template logic


### Life Cycle Events

You may handle these in your `<script>` tag
 - onMount()
 - beforeUpdate() afterUpdate()
 - tick()

### Component Nesting

For components that have children e.g. a layout, use a `<slot />`
