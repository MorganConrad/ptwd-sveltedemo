<script>

  // Data usually flows down.
  // To get downstream data, use $app/stores.page.data
	import { page } from '$app/stores';

  let prefersColorScheme = "";

  import { onMount } from 'svelte';

  onMount(() => {
    if (! prefersColorScheme && window.matchMedia) {
      prefersColorScheme = ["light", "dark"].find((s) =>
        window.matchMedia(`(prefers-color-scheme: ${s})`).matches) || "";
    }

    // set color scheme for now...
     document.body.classList.add(prefersColorScheme);
  });

</script>

<svelte:head>
	<title>{$page.data.pageTitle || "Boomer's Books and Dog Treats"}</title>
</svelte:head>

<slot />
