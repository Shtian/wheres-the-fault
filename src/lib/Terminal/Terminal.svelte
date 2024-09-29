<script lang="ts">
  import { createPrompts } from "../prompt-state.svelte";
  import Line from "./Line.svelte";
  import LineEnd from "./LineEnd.svelte";
  import LineHeader from "./LineHeader.svelte";
  import LineQuestion from "./LineQuestion.svelte";
  import LineInformation from "./LineInfromation.svelte";
  import { confetti } from "../confetti";
  import KeyboardShortcuts from "./KeyboardShortcuts.svelte";
  import { Keyboard } from "lucide-svelte";
  const prompts = createPrompts();
  let sectionElement: HTMLElement;
  async function scrollToBottom(node: HTMLElement) {
    node.scroll({ top: node.scrollHeight, behavior: "smooth" });
  }

  $effect(() => {
    prompts.prompts.length;
    console.log("scroll");
    // scroll to bottom of section
    scrollToBottom(sectionElement);
  });

  function handleKeyDown(e: KeyboardEvent) {
    // if repeated keypress, ignore
    if (e.repeat) return;

    // ctrl + l
    if (e.key === "l" && e.ctrlKey) {
      prompts.clear();
    }

    // p
    if (e.key === "c" && !e.ctrlKey && !e.metaKey) {
      confetti();
    }

    if (e.key === "Backspace") {
      prompts.previous();
    }
  }
</script>

<svelte:window on:keydown={handleKeyDown} />
<section
  bind:this={sectionElement}
  class="relative bg-zinc-900 h-50 md:h-[100svh] w-100 font-mono px-4 py-2 flex flex-col text-zinc-400 overflow-y-auto flex-1"
>
  <KeyboardShortcuts />
  <LineHeader>Velkommen til WTF (Where's The Fault)!</LineHeader>
  <Line>ctrl+h for hjelp <Keyboard class="size-4 inline-block" /></Line>
  <Line></Line>
  {#each prompts.prompts as prompt, i}
    {#if prompt.type === "Question"}
      <LineQuestion active={i == prompts.prompts.length - 1} question={prompt}
      ></LineQuestion>
    {/if}
    {#if prompt.type === "Information"}
      <LineInformation>{prompt.message}</LineInformation>
    {/if}
  {/each}
  <LineEnd active={prompts.prompts.at(-1)?.type === "Question"} />
</section>
