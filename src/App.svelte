<script lang="ts">
  import Terminal from "./lib/Terminal/Terminal.svelte";
  import Docs from "./lib/Docs/Docs.svelte";
  import ButtDetective from "$lib/components/ButtDetective.svelte";
</script>

<main
  class="flex flex-col h-screen overflow-hidden overflow-y-auto md:flex-row font-sans"
>
  <Terminal />
  <Docs />
</main>
<ButtDetective />

<style>
</style>
