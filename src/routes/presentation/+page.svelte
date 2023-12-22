
<script>
  export let data

  // onsole.dir(data, {depth:99});
</script>

<h2>Presentation</h2>

<ul class="posts">
  {#each data.posts as post}
    <li>
      <a href="/presentation/{post.path}">{post.meta.title}</a>
    </li>
  {/each}
</ul>


