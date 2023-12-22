---
title: Typical Svelte Component / Page
prev: 3-Project-startup
next: 5-Sveltekit-routing
---

e.g.  src/routes/Necronomicon

```
<script>
  imports...

  export let data;  // can be another name
</script>

<style>
  optional style stuff
</style>

Then, just write some HTML, use { } for templating,  Handlebars-like but subtle diffs

<h2>{data.title}</h2>

```

## Need Content
