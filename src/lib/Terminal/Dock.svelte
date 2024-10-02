<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { fly } from "svelte/transition";

  const { open } = $props();
  type App = "Terminal";
  const dispatch = createEventDispatcher();

  function openApp(app: App) {
    dispatch("open-app", { app });
  }
</script>

{#if open}
  <div
    transition:fly={{ y: 50, duration: 200 }}
    class="fixed bottom-3 left-[50%] flex h-16 w-2/3 -translate-x-[50%] rounded-xl border border-zinc-600 bg-zinc-50/10 p-2 backdrop-blur-sm"
  >
    <button
      class="size-12 origin-bottom-left rounded-xl bg-gradient-to-br from-zinc-50 via-sky-200 to-zinc-400 p-1 transition-transform hover:scale-150"
      onclick={() => openApp("Terminal")}
      ><span class="sr-only">open terminal</span><img
        src="/images/butt-detective.png"
        alt="Butt detective"
      /></button
    >
  </div>
{/if}
