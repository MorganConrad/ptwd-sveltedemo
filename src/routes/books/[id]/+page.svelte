<script>
  import { enhance } from '$app/forms'; // Import the enhance action

  export let data;

  $: book = data.books[0];
  $: available = book.available;
</script>


<section>

  <h2>Title: {book.title}</h2>
  <h3>Author: {book.author}</h3>

  <ul>
    <li>Price: {book.price}</li>
    <li>Availablility: {available}</li>
  </ul>

  {#if available < 10}
    <em>Low Availablilty, Order Now!</em>
  {/if}

</section>


<form method="POST" action="?/buy" use:enhance>
<button type="Submit">Buy</button>
<!--button formaction="?/restock">Return</button-->
</form>

<form method="POST" action="?/restock" use:enhance>
  <button type="Submit">Return</button>
  <!--button formaction="?/restock">Return</button-->
</form>
