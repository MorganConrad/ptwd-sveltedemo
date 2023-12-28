
<script>

  export let status;

  const titles = {
    "en": "Boomer's Books",
    "fr": "Livres de Boomer"
  }

</script>

<style>
  .mainheader {
    background-color: goldenrod;
    border: 2px solid blue;
    height: 15rem;
    padding-left: 2rem;
  }
</style>


<header class="mainheader">
  <a href="/books"><h2> {titles[status.language]}</h2></a>

  <nav class="breadcrumb">
    <a href="/">Home</a>
    <a href="/About">About</a>
    <a href="/Help">Help</a>
  </nav>

  {#if status.userName}
    Welcome {status.userName}
  {/if}
</header>

