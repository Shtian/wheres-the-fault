<script lang="ts">
  import type { DocumentationLink } from "../models";
  import LineSidebarCharacter from "$lib/Terminal/LineFeeds/LineSidebarCharacter.svelte";
  import { BookText } from "lucide-svelte";
  interface DocLinkProps {
    docLink: DocumentationLink;
  }

  const { docLink }: DocLinkProps = $props();
</script>

<span
  ><LineSidebarCharacter>│</LineSidebarCharacter><BookText
    class="-ml-[4px] mr-2 inline-block size-4"
  /><a target="_blank" href={docLink.href} class="underline hover:text-zinc-100"
    >{docLink.text}</a
  ></span
>
