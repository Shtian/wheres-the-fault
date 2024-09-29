<script>
  import AppInsights from "./AppInsights.svelte";
  import OurTools from "./OurTools.svelte";
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
</article>

<style>
  article h1,
  :global(article h2),
  :global(article h3) {
    word-spacing: -1rem;
  }
</style>
