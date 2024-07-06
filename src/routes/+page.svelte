<script lang="ts">
  import { page } from '$app/stores'
  import { DateTime } from 'luxon'

  const stuff = $page.data.collectionDocuments
</script>

<svelte:head>
  <title>I Already Saw That</title>
</svelte:head>

<!-- todo: left off here... create a random placement of each date with the most recent being bigger and a different color -->

<!-- svelte-ignore component_name_lowercase -->
<page>
  <ul>
    {#each stuff as doc}
      <li>
        {DateTime.fromISO(doc.createdForTesting).toRelative()}
      </li>
    {/each}
  </ul>
</page>
