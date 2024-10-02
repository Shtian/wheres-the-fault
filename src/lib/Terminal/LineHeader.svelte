<script lang="ts">
  import type { Snippet } from "svelte";
  import LineSidebarCharacter from "./LineSidebarCharacter.svelte";
  type LineHeaderProps = {
    children: Snippet;
  };
  const { children }: LineHeaderProps = $props();
</script>

<span class="mt-auto"
  ><LineSidebarCharacter>┌</LineSidebarCharacter><span class="text-cyan-400"
    >{@render children()}</span
  ></span
>
