<script lang="ts">
  import LineSidebarCharacter from "$lib/Terminal/LineFeeds/LineSidebarCharacter.svelte";
  import type { Snippet } from "svelte";
  type LineQuestionHeaderProps = {
    children: Snippet;
    className?: string;
  };
  const { children, className = "" }: LineQuestionHeaderProps = $props();
</script>

<span class={className}
  ><LineSidebarCharacter>◇</LineSidebarCharacter>{@render children()}</span
>
