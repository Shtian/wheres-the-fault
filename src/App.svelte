<script lang="ts">
  import Terminal from "./lib/Terminal/Terminal.svelte";
  import ButtDetective from "$lib/components/ButtDetective.svelte";
</script>

<main
  class="flex h-screen flex-col overflow-hidden overflow-y-auto font-sans md:flex-row"
>
  <Terminal />
</main>
<ButtDetective />

<style>
</style>
