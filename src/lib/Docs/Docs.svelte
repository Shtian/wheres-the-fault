<script>
  import AppInsights from "./Sections/AppInsights.svelte";
  import CommonErrors from "./Sections/CommonErrors.svelte";
  import Hotjar from "./Sections/Hotjar.svelte";
  import OurTools from "./Sections/OurTools.svelte";
</script>

<div
  class="h-50 w-100 max-w-none flex-1 overflow-y-auto bg-zinc-800 md:h-[100svh]"
>
  <article class="prose prose-zinc p-4 dark:prose-invert">
    <h1>
      Hjelp! Jeg har blitt <img
        src="/images/butt-detective.png"
        alt="Butt detective"
        class="m-0 inline-block h-10 w-10 align-middle"
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
