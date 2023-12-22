
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
    height: 160px;
  }
</style>


<header class="mainheader">
  <h1> {titles[status.language]}</h1>

  <nav class="breadcrumb">
    <a href="/">Home</a>
    <a href="/About">About</a>
    <a href="/Help">Help</a>
  </nav>

  {#if status.userName}
    Welcome {status.userName}
  {/if}
</header>

