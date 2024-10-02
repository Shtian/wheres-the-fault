<script lang="ts">
  import type { Snippet } from "svelte";

  type ShortcutIconProps = {
    children: Snippet;
  };
  const { children }: ShortcutIconProps = $props();
</script>

<span class="keyboard-shortcut border border-zinc-700 bg-zinc-800"
  >{@render children()}</span
>

<style>
  .keyboard-shortcut {
    display: inline-block;
    padding: 2px;
    min-width: 20px;
    font-size: 11px;
    vertical-align: baseline;
    text-align: center;
    line-height: 1.1;
    border-radius: 3px;
  }
</style>
