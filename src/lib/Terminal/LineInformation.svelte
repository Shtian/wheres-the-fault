<script lang="ts">
  import DocLink from "./DocLink.svelte";
  import LineSidebarCharacter from "./LineSidebarCharacter.svelte";
  import type { Snippet } from "svelte";
  import type { DocumentationLink } from "./models";
  type LineInformationProps = {
    children?: Snippet;
    docLinks?: DocumentationLink[];
  }
  const { children, docLinks = [] }: LineInformationProps = $props();
</script>

<LineSidebarCharacter>│</LineSidebarCharacter>
<span class="border-solid border-l-[2px] pl-[12px] my-[2px] ml-[4.3px] border-l-zinc-400 text-zinc-100">{@render children?.()}</span>
{#each docLinks as docLink}
<DocLink {docLink} />
{/each} 