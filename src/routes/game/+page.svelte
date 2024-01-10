
<script>

  // four reactive variables: count, disarmCode, saved, and color
  let count = 40;
  let disarmCode = "";

  $: saved = (disarmCode === "007");

	// $: color = saved ? "green" : (count < 10) ? "red" : (count < 30)  ? "yellow" : "white";
  $: color = getColor(count, saved);  // better: you can call functions


  function startCountdown() {
    count = 40;
    disarmCode = "";

    let interval = setInterval(function() {
      count--;

      if (saved || (count < 0)) {
        clearInterval(interval);
      }
    }, 1000); // Run for each second
  }

  function getColor(count, saved) {
    if (saved)
      return "green";
    return (count < 10) ? "red" : (count < 30)  ? "yellow" : "white";
  }

</script>


<style>
  .yellow {
    background-color: yellow;
  }
  .red {
    background-color: red;
  }
  .green {
    background-color: lightgreen;
  }

  main {
    margin-left: 2rem;
  }

</style>


<main>
<h2>Time for you to die 007!</h2>
<button on:click={startCountdown}> Start Game</button>

<div class={color}>
  <label for="disarm">Disarm Code:</label>
  <input id="disarm" bind:value={disarmCode} title={saved? "Saved" : "You are running out of time 007!"}/>
</div>

{#if saved}
  <h3> You saved the day!</h3>
{:else if count > 0}
  <h3> Only {count} seconds until this bomb explodes!</h3>
{:else}
  <h3> BOOM! </h3>
{/if}

</main>
