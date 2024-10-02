<script lang="ts">
  import Terminal from "./lib/Terminal/Terminal.svelte";
  import ButtDetective from "$lib/components/ButtDetective.svelte";
  import Blobs from "$lib/Terminal/Blobs.svelte";
</script>

<main
  class="terminal-wrapper h-screen flex-1 items-center overflow-hidden bg-zinc-900"
>
  <Blobs></Blobs>
  <Terminal />
</main>
<ButtDetective />

<style>
  .terminal-wrapper {
    display: grid;
    place-items: center;
  }
  .terminal-wrapper > :global(*) {
    grid-area: 1 / 1;
  }
</style>
