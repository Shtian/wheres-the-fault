<script lang="ts">
  import { createPrompts } from "../prompt-state.svelte";
  import Line from "./Line.svelte";
  import LineEnd from "./LineEnd.svelte";
  import LineHeader from "./LineHeader.svelte";
  import LineQuestion from "./LineQuestion.svelte";
  import LineInformation from "./LineInformation.svelte";
  import { confetti } from "../confetti";
  import KeyboardShortcuts from "./KeyboardShortcuts.svelte";
  import { Keyboard } from "lucide-svelte";
  import ShortcutIcon from "$lib/components/ShortcutIcon.svelte";
  import OnScreenKeyboard from "./OnScreenKeyboard.svelte";
  import Blobs from "./Blobs.svelte";

  const prompts = createPrompts();

  let sectionElement: HTMLElement;
  async function scrollToBottom(node: HTMLElement) {
    node.scroll({ top: node.scrollHeight, behavior: "smooth" });
  }

  $effect(() => {
    prompts.prompts.length;
    scrollToBottom(sectionElement);
  });

  function handleKeyDown(e: KeyboardEvent) {
    // if repeated keypress, ignore
    if (e.repeat) return;

    if (e.ctrlKey && e.key === "l") {
      prompts.clear();
    }

    if (e.key === "c" && !e.ctrlKey && !e.metaKey) {
      confetti();
    }

    if (e.key === "Backspace") {
      prompts.previous();
    }
  }
</script>

<svelte:window on:keydown={handleKeyDown} />
<div class="flex-1 bg-zinc-900 terminal-wrapper overflow-hidden">
  <div class="relative md:h-screen w-100 terminal-wrapper overflow-hidden">
    <Blobs></Blobs>
  </div>
  <section
    bind:this={sectionElement}
    class="relative md:h-screen w-100 font-mono px-4 py-2 flex flex-col text-zinc-400 overflow-y-auto"
  >
    <LineHeader>Velkommen til WTF (Where's The Fault)!</LineHeader>
    <Line
      ><ShortcutIcon>H</ShortcutIcon> for hjelp <Keyboard
        class="size-4 inline-block"
      /></Line
    >
    <Line />
    {#each prompts.prompts as prompt}
      {#if prompt.type === "Question"}
        <LineQuestion question={prompt} docLinks={prompt.docLinks}
        ></LineQuestion>
      {/if}
      {#if prompt.type === "Information"}
        <LineInformation docLinks={prompt.docLinks}
          >{prompt.message}</LineInformation
        >
      {/if}
    {/each}
    <LineEnd active={prompts.prompts.at(-1)?.type === "Question"} />
    <OnScreenKeyboard />
    <KeyboardShortcuts />
  </section>
</div>

<style>
  section {
    font-family: "JetBrains Mono";
  }
  .terminal-wrapper {
    display: grid;
  }
  .terminal-wrapper > * {
    grid-area: 1 / 1;
  }
</style>
