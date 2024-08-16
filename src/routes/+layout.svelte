<script lang="ts">
  import '$theme/variables.css'
  import '$theme/custom-components.css'
  import '$theme/global.css'

  import { page } from '$app/stores'

  const isLoggedOut = $page.data.error === 'not-logged-in'

  function handleLogin() {
    const username = (document.querySelector('#username') as HTMLInputElement)?.value
    const humanDetector = (document.querySelector('#human-detector') as HTMLInputElement)?.value

    if (username && humanDetector.toLowerCase().trim() === 'sun') {
      window.location.href = `/sign-in/${username}`
    }
  }
</script>

<style>
  main {
    display: flex;
  }
</style>

<main>
  <page-slot>
    {#if isLoggedOut}
      hey dude you gotta log in! username: <input id="username" type="text" />
      love you more than the: <input id="human-detector" type="text" />
      <button onclick={handleLogin}>log in</button>
    {:else}
      slot it
      <slot />
    {/if}
  </page-slot>
</main>
