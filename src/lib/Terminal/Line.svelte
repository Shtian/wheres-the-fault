<script lang="ts">
  import LineSidebarCharacter from "./LineSidebarCharacter.svelte";
  const { children } = $props();
</script>
<span><LineSidebarCharacter>│</LineSidebarCharacter>{@render children?.()}</span>
