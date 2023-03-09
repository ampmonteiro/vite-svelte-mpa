<script>
  import AppLayout from '../components/AppLayout.svelte';
  export let data = [];
</script>

<AppLayout>
  <h1>Blog</h1>
  {#each data as item}
    <article>
      <h2>{item.title}</h2>
      <p class="article-info">
        {item.date}
        <a href={'/article/?id=' + item.id}>read</a>
      </p>
    </article>
  {/each}
</AppLayout>
