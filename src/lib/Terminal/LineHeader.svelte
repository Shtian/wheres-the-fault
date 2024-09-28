<script lang="ts">
  import LineSidebarCharacter from "./LineSidebarCharacter.svelte";
  const { children } = $props();
</script>
<span class="mt-auto"><LineSidebarCharacter>┌ </LineSidebarCharacter><span class="text-cyan-400">{@render children()}</span></span>
