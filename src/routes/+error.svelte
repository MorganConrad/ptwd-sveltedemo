<script>

  /* routes/+error.svelte    Main Error Page */

    import { page } from '$app/stores';
</script>

<h1>{$page.status}: {$page.error.message}</h1>

<em>Someday</em> Boomer might add a custom error message...
