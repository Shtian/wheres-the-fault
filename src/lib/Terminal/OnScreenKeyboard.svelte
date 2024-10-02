<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import {
    ArrowUp,
    ArrowDown,
    CornerDownLeft,
    Trash2,
    Undo,
    Keyboard,
  } from "lucide-svelte";
  import { fly } from "svelte/transition";
  import { createPrompts } from "$lib/prompt-state.svelte";
  import { createEventDispatcher } from "svelte";

  const prompts = createPrompts();
  const actions = ["Up", "Down", "Select", "Undo", "Reset"] as const;
  type Action = (typeof actions)[number];
  let open = $state(false);

  function actionClick(key: Action) {
    switch (key) {
      case "Up":
        prompts.decrementChoiceIndex();
        break;
      case "Down":
        prompts.incrementChoiceIndex();
        break;
      case "Select":
        prompts.moveNext();
        break;
      case "Undo":
        prompts.previous();
        break;
      case "Reset":
        prompts.clear();
        break;
    }
  }

  const dispatch = createEventDispatcher();
  function handleToggleClick() {
    open = !open;
    dispatch("toggle", { open });
  }
</script>

<Button
  class="fixed right-14 top-2"
  variant="outline"
  size="icon"
  on:click={handleToggleClick}><Keyboard class="h-5 w-5" /></Button
>
{#if open}
  <div
    class="flex gap-2 rounded-md border border-zinc-700 bg-zinc-800 p-2 shadow-md"
    transition:fly={{ y: 50, duration: 200 }}
  >
    <Button variant="outline" size="icon" on:click={() => actionClick("Up")}>
      <ArrowUp class="h-5 w-5" />
    </Button>
    <Button variant="outline" size="icon" on:click={() => actionClick("Down")}>
      <ArrowDown class="h-5 w-5" />
    </Button>
    <Button
      variant="outline"
      size="icon"
      on:click={() => actionClick("Select")}
    >
      <CornerDownLeft class="h-5 w-5" />
    </Button>
    <Button variant="outline" size="icon" on:click={() => actionClick("Undo")}>
      <Undo class="h-5 w-5" />
    </Button>
    <Button variant="outline" size="icon" on:click={() => actionClick("Reset")}>
      <Trash2 class="h-5 w-5" />
    </Button>
  </div>
{/if}
