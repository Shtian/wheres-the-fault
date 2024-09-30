<script lang="ts">
  let blobMovementToggle = $state(0);

  setTimeout(() => {
    blobMovementToggle = Math.floor(Math.random() * 4) + 1;
  }, 100);

  $effect(() => {
    const interval = setInterval(() => {
      blobMovementToggle = Math.floor(Math.random() * 4) + 1;
    }, 20000);
    return () => clearInterval(interval);
  });
</script>

<span
  class="blur-2xl blob-1 size-12 md:size-32 bg-sky-400 rounded-full transition-transform duration-[20000ms] opacity-20 md:opacity-5"
  class:move-1={blobMovementToggle === 1}
></span>
<span
  class="blur-2xl blob-2 size-12 md:size-48 bg-emerald-400 rounded-full transition-transform duration-[20000ms] opacity-20 md:opacity-5"
  class:move-2={blobMovementToggle === 2}
></span>
<span
  class="blur-2xl blob-3 size-20 md:size-80 bg-amber-400 rounded-full transition-transform duration-[20000ms] opacity-20 md:opacity-5"
  class:move-3={blobMovementToggle === 3}
></span>
<span
  class="blur-2xl blob-4 size-16 md:size-64 bg-red-400 rounded-full transition-transform duration-[20000ms] opacity-20 md:opacity-5"
  class:move-4={blobMovementToggle === 4}
></span>

<style lang="postcss">
  .blob-1 {
    transform: translate(80vw, 40vh);
  }
  .move-1 {
    transform: translate(20vw, 10vh);
  }

  .blob-2 {
    transform: translate(70vw, -10vh);
  }
  .move-2 {
    transform: translate(0, 0);
  }

  .blob-3 {
    transform: translate(0, 0vh);
  }
  .move-3 {
    transform: translate(50vw, -10vh);
  }

  .blob-4 {
    transform: translate(20vw, 10vh);
  }
  .move-4 {
    transform: translate(25vw, -10vh);
  }

  @media (min-width: 768px) {
    .blob-1 {
      transform: translate(40vw, 40vh);
    }
    .move-1 {
      transform: translate(20vw, 10vh);
    }

    .blob-2 {
      transform: translate(0, 0);
    }
    .move-2 {
      transform: translate(20vw, 10vh);
    }

    .blob-3 {
      transform: translate(0, 0);
    }
    .move-3 {
      transform: translate(50vw, -10vh);
    }

    .blob-4 {
      transform: translate(20vw, 10vh);
    }
    .move-4 {
      transform: translate(25vw, -10vh);
    }
  }
</style>
