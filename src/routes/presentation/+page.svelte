<script>
  export let data;
</script>

<h2>Presentation</h2>

<ul class="posts">
  {#each data.posts as post}
    <li>
      <a href="/presentation/{post.path}">{post.meta.title}</a>
    </li>
  {/each}
</ul>


