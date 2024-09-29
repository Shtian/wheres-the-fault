<script>
  import AppInsights from "./Sections/AppInsights.svelte";
  import Hotjar from "./Sections/Hotjar.svelte";
  import OurTools from "./Sections/OurTools.svelte";
</script>

<article
  class="bg-zinc-800 p-4 prose prose-zinc dark:prose-invert flex-1 overflow-y-auto"
>
  <h1>
    Hjelp! Jeg har blitt <img
      src="/images/butt-detective.png"
      alt="Butt detective"
      class="inline-block w-10 h-10 align-middle m-0"
    />
  </h1>
  <OurTools />
  <AppInsights />
  <Hotjar></Hotjar>
</article>

<style>
  article {
    scroll-behavior: smooth;
  }

  article :global(h2),
  article :global(h3) {
    scroll-margin-top: 1rem;
  }
</style>
