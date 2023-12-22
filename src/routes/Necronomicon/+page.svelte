<script>
  export let data;
</script>


<section>

  <h2>Title: {data.title}</h2>
  <h3>Author: {data.author}</h3>

  <ul>
    <li>Price: {data.price}</li>
    <li>Availablility: {data.available}</li>
  </ul>

  {#if data.available < 10}
    <em>Low Availablilty, Order Now!</em>
  {/if}

</section>

<form method="POST">
<button formaction="?/buy">Buy</button>
</form>
