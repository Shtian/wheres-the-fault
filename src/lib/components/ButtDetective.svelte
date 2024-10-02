<script lang="ts">
  import { fade, slide, fly } from "svelte/transition";
  let visible = $state(false);

  // trigger visible at random intervals, between 30 and 120 seconds
  $effect(() => {
    const interval = Math.random() * 120 + 30;
    setTimeout(() => {
      visible = true;
      // disappear after 10 seconds
      setTimeout(() => {
        visible = false;
      }, 7000);
    }, interval * 1000);
  });
  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "b") {
      visible = !visible;
    }
  }
</script>

<svelte:window on:keydown={handleKeyDown} />
<img
  class="butt-detective"
  class:visible
  src="/images/butt-detective.png"
  alt="Butt detective"
/>
{#if visible}
  <span
    class="speech-bubble"
    in:slide={{ duration: 250, delay: 500, axis: "x" }}
    out:fade={{ duration: 100 }}>Hmm... det lukter mistenkelig!</span
  >
{/if}

<style>
  .butt-detective {
    position: fixed;
    bottom: -200px;
    right: 5px;
    width: 100%;
    max-width: 200px;
    transition: bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .visible {
    bottom: -5px;
  }

  .speech-bubble {
    @apply fixed overflow-hidden whitespace-nowrap rounded-md bg-zinc-50 px-4 py-2 text-zinc-900 shadow-md;
    bottom: 120px;
    right: 120px;
    transition: bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transition-delay: 0.5s;
  }

  @media (min-width: 500px) {
    .speech-bubble {
      bottom: 100px;
      right: 190px;
    }
  }
</style>
