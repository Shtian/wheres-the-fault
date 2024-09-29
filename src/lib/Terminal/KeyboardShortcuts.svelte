<script lang="ts">
  import { Button, buttonVariants } from "$lib/components/ui/button/index.js";
  import * as Dialog from "$lib/components/ui/dialog/index.js";
  import { Keyboard } from "lucide-svelte";
  let open = false;
  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "h") {
      open = true;
    }
  }
</script>

<svelte:window on:keydown={handleKeyDown} />
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
        Disse snarveiene er tilgjengelig for å navigere terminalen:
      </Dialog.Description>
    </Dialog.Header>
    <article class="prose prose-zinc dark:prose-invert">
      <table>
        <thead>
          <tr>
            <th>Hva</th>
            <th>Snarvei</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Velg alternativ</td>
            <td>Enter / Space</td>
          </tr>
          <tr>
            <td>Endre alternativ</td>
            <td>Pil opp / pil ned</td>
          </tr>
          <tr>
            <td>Angre</td>
            <td>Backspace</td>
          </tr>
          <tr>
            <td>Start på nytt</td>
            <td>ctrl + l</td>
          </tr>
        </tbody>
      </table>
    </article>
    <Dialog.Footer>
      <Button type="button" on:click={() => (open = false)}>Lukk</Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>
