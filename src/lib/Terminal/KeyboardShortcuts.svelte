<script lang="ts">
  import { Button, buttonVariants } from "$lib/components/ui/button/index.js";
  import * as Dialog from "$lib/components/ui/dialog/index.js";
  import { Keyboard } from "lucide-svelte";
  let open = false;
</script>

<Button
  class="absolute top-2 right-2"
  variant="outline"
  size="icon"
  on:click={() => (open = true)}><Keyboard class="w-5 h-5" /></Button
>
<Dialog.Root bind:open>
  <Dialog.Trigger></Dialog.Trigger>
  <Dialog.Content class="sm:max-w-[425px] font-sans">
    <Dialog.Header>
      <Dialog.Title>Tastatur-snarveier</Dialog.Title>
      <Dialog.Description>
        Disse snarveiene er tilgjengelig for å navigere siden:
      </Dialog.Description>
    </Dialog.Header>
    <div class="grid gap-4 py-4"></div>
    <Dialog.Footer>
      <Button type="button" on:click={() => (open = false)}>Lukk</Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>
