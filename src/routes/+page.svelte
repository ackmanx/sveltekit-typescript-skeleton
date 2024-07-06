<script lang="ts">
  import { page } from '$app/stores'

  const stuff = $page.data.collectionDocuments
</script>

<svelte:head>
  <title>I Already Saw That</title>
</svelte:head>

<!-- svelte-ignore component_name_lowercase -->
<page>
  <h1>Hello World</h1>
  <ul>
    {#each stuff as doc}
      <li>
        {doc.createdForTesting}
      </li>
    {/each}
  </ul>
</page>
