<script lang="ts">
  import { page } from '$app/stores'
  import { DateTime } from 'luxon'

  const documents = $page.data.collectionDocuments

  const stylesForDocs = documents.map(() => {
    const top = Math.floor(Math.random() * 100)
    const left = Math.floor(Math.random() * 100)

    return `position: absolute; top: ${top}vh; left: ${left}vw`
  })
</script>

<style>
  div {
    overflow: hidden;
  }
</style>

<svelte:head>
  <title>I Already Saw That</title>
</svelte:head>

<!-- svelte-ignore component_name_lowercase -->
<page>
  {#each documents as doc, index}
    <div style={stylesForDocs[index]}>
      {DateTime.fromISO(doc.createdForTesting).toRelative()}
    </div>
  {/each}
</page>
