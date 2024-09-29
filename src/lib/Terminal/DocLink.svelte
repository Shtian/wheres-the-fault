<script lang="ts">
  import type { DocLink } from "./models";
  import LineSidebarCharacter from "./LineSidebarCharacter.svelte";
  import { BookText } from "lucide-svelte";
  interface DocLinkProps {
    docLink: DocLink;
  }

  const { docLink }: DocLinkProps = $props();
</script>

<span
  ><LineSidebarCharacter>│</LineSidebarCharacter><BookText
    class="size-4 inline-block mr-2 -ml-[4px]"
  /><a href={docLink.id} class="underline hover:text-zinc-100">{docLink.text}</a
  ></span
>
