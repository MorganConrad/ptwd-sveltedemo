<script>

  /* /books/+page.svelte */

  export let data;
</script>

<section>
<h2>All Books Available</h2>

<ul>
{#each data.books as book}
  <li><a href="/books/{book.id}">{book.title}</a></li>
{/each}
</ul>

</section>
