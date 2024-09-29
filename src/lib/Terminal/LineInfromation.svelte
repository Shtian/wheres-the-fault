<script lang="ts">
  import LineSidebarCharacter from "./LineSidebarCharacter.svelte";
  const { children } = $props();
</script>
<LineSidebarCharacter>│</LineSidebarCharacter>
<span class="border-solid border-l-[1px] pl-4 my-[2px] ml-[4.3px] border-l-zinc-400 text-zinc-100">{@render children?.()}</span>