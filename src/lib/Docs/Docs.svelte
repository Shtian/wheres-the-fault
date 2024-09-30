<script>
  import AppInsights from "./Sections/AppInsights.svelte";
  import CommonErrors from "./Sections/CommonErrors.svelte";
  import Hotjar from "./Sections/Hotjar.svelte";
  import OurTools from "./Sections/OurTools.svelte";
</script>

<div
  class="bg-zinc-800 h-50 max-w-none md:h-[100svh] w-100 overflow-y-auto flex-1"
>
  <article class="p-4 prose prose-zinc dark:prose-invert">
    <h1>
      Hjelp! Jeg har blitt <img
        src="/images/butt-detective.png"
        alt="Butt detective"
        class="inline-block w-10 h-10 align-middle m-0"
      />
    </h1>
    <OurTools />
    <AppInsights />
    <Hotjar />
    <CommonErrors />
  </article>
</div>

<style>
  div {
    scroll-behavior: smooth;
  }

  article :global(h2),
  article :global(h3) {
    scroll-margin-top: 1rem;
  }
</style>
