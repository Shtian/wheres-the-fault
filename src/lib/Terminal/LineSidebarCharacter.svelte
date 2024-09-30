<script lang="ts">
  import type { Snippet } from "svelte";
  type LineSidebarCharacterProps = {
    children: Snippet;
  }
  const { children }: LineSidebarCharacterProps = $props();
</script>

<span class="line-sidebar-character mr-2 text-zinc-400">{@render children()}</span>