<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { CircleHelp, Keyboard } from "lucide-svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  function handleMenuButtonClick(action: string) {
    dispatch("menu-button-click", { action });
  }
</script>

<div class="fixed right-2 top-2">
  <Button
    variant="outline"
    size="icon"
    on:click={() => handleMenuButtonClick("help")}
    ><CircleHelp class="h-5 w-5" /></Button
  >
  <Button
    variant="outline"
    size="icon"
    onclick={() => handleMenuButtonClick("on-screen-keyboard")}
    ><Keyboard class="h-5 w-5" /></Button
  >
</div>
