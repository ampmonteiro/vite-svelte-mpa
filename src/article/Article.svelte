<script>
  import AppLayout from '../components/AppLayout.svelte';
  export let data = {};
</script>

<AppLayout>
  <h1>{data.title}</h1>
  <p>{data.date}</p>
  {#each data.content as item}
    <p>{item}</p>
  {/each}
</AppLayout>
