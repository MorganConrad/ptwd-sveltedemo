<script>

  export let prefersColorScheme = "";

  import { onMount } from 'svelte';

  onMount(() => {
    if (! prefersColorScheme && window.matchMedia) {
      prefersColorScheme = ["light", "dark"].find((s) =>
        window.matchMedia(`(prefers-color-scheme: ${s})`).matches) || "";
    }

    document.body.classList.add(prefersColorScheme);
  });
  </script>

<slot />
