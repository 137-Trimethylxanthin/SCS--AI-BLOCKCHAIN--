<script lang="ts">
  import { invoke } from "@tauri-apps/api/core";

  let name = $state("");
  let greetMsg = $state("");

  async function greet(event: Event) {
    event.preventDefault();
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    greetMsg = await invoke("greet", { name });
  }
</script>

<main class="bg-CCCPBlack text-CCCPVVihte p-4 h-screen flex flex-col">
  <h1 class="text-4xl">Page</h1>
  <form onsubmit={greet}>
    <label for="name">Name:</label>
    <input type="text" id="name" bind:value={name} />
    <button type="submit">Greet</button>
  </form>
  {#if greetMsg}
    <p>{greetMsg}</p>
  {/if}
</main>
