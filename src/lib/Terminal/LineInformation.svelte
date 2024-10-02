<script lang="ts">
  import DocLink from "./DocLink.svelte";
  import LineSidebarCharacter from "./LineSidebarCharacter.svelte";
  import type { Snippet } from "svelte";
  import type { DocumentationLink } from "./models";
  type LineInformationProps = {
    children?: Snippet;
    docLinks?: DocumentationLink[];
  };
  const { children, docLinks = [] }: LineInformationProps = $props();
</script>

<LineSidebarCharacter>│</LineSidebarCharacter>
<span
  class="my-[2px] ml-[4.3px] border-l-[2px] border-solid border-l-zinc-400 pl-[12px] text-zinc-100"
  >{@render children?.()}</span
>
{#each docLinks as docLink}
  <DocLink {docLink} />
{/each}
