<script lang="ts">
  import LineSidebarCharacter from "./LineSidebarCharacter.svelte";
  const { children } = $props();
</script>
<LineSidebarCharacter>│</LineSidebarCharacter>
<span><LineSidebarCharacter>│</LineSidebarCharacter>{@render children?.()}</span>