<script lang="ts">
  import type { Snippet } from "svelte";
  import LineSidebarCharacter from "./LineSidebarCharacter.svelte";
  type LineProps = {
    children?: Snippet;
  }
  const { children }: LineProps = $props();
</script>
<span><LineSidebarCharacter>│</LineSidebarCharacter>{@render children?.()}</span>
