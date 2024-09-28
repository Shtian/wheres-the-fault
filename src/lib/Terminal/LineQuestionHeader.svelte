<script lang="ts">
  import LineSidebarCharacter from "./LineSidebarCharacter.svelte";
  let { children, className="" } = $props();
</script>

<span class={className}><LineSidebarCharacter>◇ </LineSidebarCharacter>{@render children()}</span>
