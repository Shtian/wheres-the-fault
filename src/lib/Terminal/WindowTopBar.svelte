<script lang="ts">
  import { createEventDispatcher } from "svelte";

  type MenuButtonActions = "close" | "minimize" | "maximize";
  const dispatch = createEventDispatcher();

  function handleButtonClick(action: MenuButtonActions) {
    dispatch("menu-button-click", { action });
  }
</script>

<div
  class="absolute left-0 top-0 hidden w-full items-center gap-2 border-b border-zinc-700 bg-zinc-950 px-3 py-2 md:flex"
>
  <button
    type="button"
    class="size-3 rounded-full bg-[#FF5F57]"
    on:click={() => handleButtonClick("close")}
    ><span class="sr-only">close window</span></button
  >
  <button
    type="button"
    class="size-3 rounded-full bg-[#FEBC2E]"
    on:click={() => handleButtonClick("minimize")}
    ><span class="sr-only">minimize window</span></button
  >
  <button
    type="button"
    class="size-3 rounded-full bg-[#28C840]"
    on:click={() => handleButtonClick("maximize")}
    ><span class="sr-only">maximize window</span></button
  >
  <h1 class="ml-2 grow text-sm font-bold">Web Team Terminal</h1>
</div>
