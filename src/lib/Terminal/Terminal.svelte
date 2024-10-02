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
  import WindowTopBar from "./WindowTopBar.svelte";
  import Dock from "./Dock.svelte";
  const prompts = createPrompts();

  let sectionElement: HTMLElement;
  let windowState: "normal" | "minimized" | "closed" | "maximized" =
    $state("normal");
  let openDock = $state(false);

  async function scrollToBottom(node: HTMLElement) {
    node.scroll({ top: node.scrollHeight, behavior: "smooth" });
  }

  $effect(() => {
    prompts.prompts.length;
    scrollToBottom(sectionElement);
  });

  function handleKeyDown(e: KeyboardEvent) {
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

  function handleTopMenuButtonClick(e: CustomEvent) {
    switch (e.detail.action) {
      case "close":
        windowState = "closed";
        openDock = true;
        break;
      case "minimize":
        windowState = windowState === "minimized" ? "normal" : "minimized";
        break;
      case "maximize":
        windowState = windowState === "maximized" ? "normal" : "maximized";
        break;
    }
  }

  function handleOpenApp(e: CustomEvent<any>): void {
    if (e.detail.app === "Terminal") {
      windowState = "normal";
      openDock = false;
    }
  }
</script>

<svelte:window on:keydown={handleKeyDown} />

<section
  bind:this={sectionElement}
  class="scale-1 relative flex h-full origin-bottom-left flex-col overflow-y-auto px-4 py-2 font-mono text-zinc-400 transition-all duration-500 md:h-[90svh] md:w-[700px] md:self-center md:rounded-lg md:border md:border-zinc-700 md:bg-zinc-900 md:opacity-95"
  class:minimized={windowState === "minimized"}
  class:maximized={windowState === "maximized"}
  class:closed={windowState === "closed"}
>
  <WindowTopBar on:menu-button-click={handleTopMenuButtonClick} />
  <LineHeader>Velkommen til WTF (Where's The Fault)!</LineHeader>
  <Line
    ><ShortcutIcon>H</ShortcutIcon> for hjelp <Keyboard
      class="inline-block size-4"
    /></Line
  >
  <Line />
  {#each prompts.prompts as prompt (prompt.id)}
    {#if prompt.type === "Question"}
      <LineQuestion question={prompt} docLinks={prompt.docLinks}></LineQuestion>
    {/if}
    {#if prompt.type === "Information"}
      <LineInformation docLinks={prompt.docLinks}
        >{prompt.message}</LineInformation
      >
    {/if}
  {/each}
  <LineEnd active={prompts.prompts.at(-1)?.type === "Question"} />
  <OnScreenKeyboard />
</section>
<KeyboardShortcuts />
<Dock open={openDock} on:open-app={handleOpenApp} />

<style>
  section {
    font-family: "JetBrains Mono";
  }

  .minimized {
    height: 38px;
    align-self: flex-end;
    margin-bottom: 8px;
  }
  .maximized {
    height: 100%;
    align-self: stretch;
    width: 100%;
  }

  .closed {
    scale: 0;
  }
</style>
