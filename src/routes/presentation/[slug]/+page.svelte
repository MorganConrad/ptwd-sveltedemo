<script>
	export let data;
</script>

<main style="margin-left:2rem;">
{#if data.meta.prev}
  <a href="{data.meta.prev}"> &lt;Previous&nbsp; </a>
{/if}
{#if data.meta.next}
  <a href="{data.meta.next}"> &nbsp;Next&gt;</a>
{/if}

<br>

<article>
	<h1>{data.meta.title}</h1>
	<svelte:component this={data.content} />
</article>

</main>

{#if data.meta.prev}
  <a href="{data.meta.prev}"> &lt;Previous&nbsp; </a>
{/if}
{#if data.meta.next}
  <a href="{data.meta.next}"> &nbsp;Next&gt;</a>
{/if}
