<script>
  /** /books/+layout.svelte */

  import Header from '$lib/Header.svelte';

  export let data;

</script>

<style>
  main {
    margin-left: 2rem;
  }
</style>


<Header status={data.status} />

<main>

<slot />

</main>
