<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Dialog from "$lib/components/ui/dialog/index.js";
  import { CircleHelp } from "lucide-svelte";
  import ShortcutIcon from "$lib/components/ShortcutIcon.svelte";
  let open = false;
  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "h") {
      open = true;
    }
  }
</script>

<svelte:window on:keydown={handleKeyDown} />
<Button
  class="fixed right-2 top-2"
  variant="outline"
  size="icon"
  on:click={() => (open = true)}><CircleHelp class="h-5 w-5" /></Button
>
<Dialog.Root bind:open>
  <Dialog.Trigger></Dialog.Trigger>
  <Dialog.Content class="bg-zinc-900 font-sans sm:max-w-[425px]">
    <Dialog.Header>
      <Dialog.Title>Tips, triks og hjelp</Dialog.Title>
      <Dialog.Description></Dialog.Description>
    </Dialog.Header>
    <article
      class="prose prose-zinc max-h-[60vh] overflow-y-auto dark:prose-invert"
    >
      <p>
        Er du på mobilen? Trykk på tastaturknappen på toppen for å åpne et
        tastatur
      </p>
      <p>Disse snarveiene er tilgjengelig for å navigere terminalen:</p>
      <table>
        <thead>
          <tr>
            <th>Hva</th>
            <th>Snarvei</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Endre alternativ</td>
            <td
              ><ShortcutIcon>↑</ShortcutIcon> / <ShortcutIcon>↓</ShortcutIcon
              ></td
            >
          </tr>
          <tr>
            <td>Velg alternativ</td>
            <td
              ><ShortcutIcon>↵</ShortcutIcon> / <ShortcutIcon>␣</ShortcutIcon
              ></td
            >
          </tr>
          <tr>
            <td>Angre</td>
            <td><ShortcutIcon>⌫</ShortcutIcon></td>
          </tr>
          <tr>
            <td>Start på nytt</td>
            <td
              ><ShortcutIcon>CTRL</ShortcutIcon> + <ShortcutIcon>L</ShortcutIcon
              ></td
            >
          </tr>
          <tr>
            <td>🎉</td>
            <td><ShortcutIcon>C</ShortcutIcon></td>
          </tr>
          <tr>
            <td>🤔</td>
            <td><ShortcutIcon>B</ShortcutIcon></td>
          </tr>
        </tbody>
      </table>
    </article>
    <Dialog.Footer>
      <Button type="button" variant="outline" on:click={() => (open = false)}
        >Lukk</Button
      >
    </Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>
