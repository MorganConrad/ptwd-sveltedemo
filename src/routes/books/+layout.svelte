<script>
  /** /books/+layout.svelte */

  import Header from '$lib/Header.svelte';

  export let data;

  console.dir(data);
</script>


<!--header class="mainheader">
  <h1> Boomer's Books</h1>

  <nav class="breadcrumb">
    <a href="/">Home</a>
    <a href="/About">About</a>
    <a href="/Help">Help</a>
  </nav>
</header-->

<Header status={data.status} />

<main>

<slot />

</main>
