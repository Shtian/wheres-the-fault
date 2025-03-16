<script lang="ts">
  let blobMovementToggle = $state(0);

  setTimeout(() => {
    blobMovementToggle = Math.floor(Math.random() * 6) + 1;
  }, 100);

  $effect(() => {
    const interval = setInterval(() => {
      blobMovementToggle = Math.floor(Math.random() * 6) + 1;
    }, 10000);
    return () => clearInterval(interval);
  });
</script>

<div
  class="hidden md:grid blob-wrapper relative h-full w-full overflow-hidden md:h-screen"
>
  <span
    class="blob blob-1 size-12 rounded-full bg-sky-400 opacity-30 blur-2xl transition-transform md:size-24 md:opacity-50"
    class:move-1={blobMovementToggle === 1}
  ></span>
  <span
    class="blob blob-2 size-32 rounded-full bg-emerald-400 opacity-30 blur-2xl transition-transform md:size-64 md:opacity-50"
    class:move-2={blobMovementToggle === 2}
  ></span>
  <span
    class="blob blob-3 size-20 rounded-full bg-amber-400 opacity-30 blur-2xl transition-transform md:size-40 md:opacity-50"
    class:move-3={blobMovementToggle === 3}
  ></span>
  <span
    class="blob blob-4 size-16 rounded-full bg-red-400 opacity-30 blur-2xl transition-transform md:size-32 md:opacity-50"
    class:move-4={blobMovementToggle === 4}
  ></span>
  <span
    class="blob blob-5 size-20 rounded-full bg-purple-400 opacity-30 blur-2xl transition-transform md:size-40 md:opacity-50"
    class:move-5={blobMovementToggle === 5}
  ></span>
  <span
    class="blob blob-6 size-12 rounded-full bg-indigo-400 opacity-30 blur-2xl transition-transform md:size-24 md:opacity-50"
    class:move-6={blobMovementToggle === 6}
  ></span>
</div>

<style lang="postcss">
  .blob {
    transition-duration: 10000ms;
  }
  .blob-wrapper > * {
    grid-area: 1 / 1;
  }
  .blob-1 {
    transform: translate(10vw, 30vh);
  }
  .move-1 {
    transform: translate(20vw, 20vh) scale(3);
  }

  .blob-2 {
    transform: translate(80vw, 10vh);
  }
  .move-2 {
    transform: translate(70vw, 20vh) scale(1.3);
  }

  .blob-3 {
    transform: translate(10vw, 80vh);
  }
  .move-3 {
    transform: translate(20vw, 70vh) scale(1.3);
  }

  .blob-4 {
    transform: translate(80vw, 80vh);
  }
  .move-4 {
    transform: translate(70vw, 70vh) scale(1.5);
  }

  .blob-5 {
    transform: translate(45vw, 30vh);
  }
  .move-5 {
    transform: translate(35vw, 40vh) scale(2);
  }

  .blob-6 {
    transform: translate(45vw, 70vh);
  }
  .move-6 {
    transform: translate(55vw, 60vh) scale(2.2);
  }
</style>
