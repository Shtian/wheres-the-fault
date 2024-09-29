<script lang="ts">
  import { codeToHtml } from "shiki";

  interface ShikiCodeProps {
    codeToFormat: string;
    theme?: string;
    lang: string;
  }
  const { codeToFormat, theme = "nord", lang }: ShikiCodeProps = $props();

  async function formatCode() {
    return await codeToHtml(codeToFormat, {
      lang: lang,
      theme: theme,
    });
  }
</script>

{#await formatCode()}Formatterer kode 💅{:then formattedCode}{@html formattedCode}{/await}
