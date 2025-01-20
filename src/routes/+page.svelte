<script lang="ts">
  import { invoke } from "@tauri-apps/api/core";
  import CircelJerker from "../comps/circelJerker.svelte";

  let name = $state("");
  let greetMsg = $state("");

  async function greet(event: Event) {
    event.preventDefault();
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    greetMsg = await invoke("greet", { name });
  }
</script>

<main class="bg-CCPBlack text-CCPVVihte p-4 h-screen flex flex-col">
  <h1 class="text-4xl">Page</h1>
  <form onsubmit={greet}>
    <label for="name">Name:</label>
    <input type="text" id="name" bind:value={name} />
    <button type="submit">Greet</button>
  </form>
  {#if greetMsg}
    <p>{greetMsg}</p>
  {/if}
  <div class="mt-3 justify-center items-center flex flex-col">
  <CircelJerker curr={50} max={100} radius={50} len={270} />
    <div class="bg-CCPVVihte text-CCPBlack text-4xl p-2 w-fit self-center -translate-y-56">
      50/100
    </div>
  </div>
</main>
