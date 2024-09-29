<script lang="ts">
  import DocLink from "./DocLink.svelte";
  import LineSidebarCharacter from "./LineSidebarCharacter.svelte";
  import {BookText} from "lucide-svelte"
  const { children, docLinks = [] } = $props();
</script>
<LineSidebarCharacter>│</LineSidebarCharacter>
<span class="border-solid border-l-[2px] pl-[12px] my-[2px] ml-[4.3px] border-l-zinc-400 text-zinc-100">{@render children?.()}</span>
{#each docLinks as docLink}
<DocLink {docLink} />
{/each} 