<script lang="ts">
  import { createPrompts } from "$lib/prompt-state.svelte";
  import { confetti } from "$lib/confetti";
  import { Keyboard } from "lucide-svelte";
  import Line from "$lib/Terminal/LineFeeds/Line.svelte";
  import LineEnd from "$lib/Terminal/LineFeeds/LineEnd.svelte";
  import LineHeader from "$lib/Terminal/LineFeeds/LineHeader.svelte";
  import LineQuestion from "$lib/Terminal/LineFeeds/LineQuestion.svelte";
  import LineInformation from "$lib/Terminal/LineFeeds/LineInformation.svelte";
  import ShortcutIcon from "$lib/components/ShortcutIcon.svelte";
  import OnScreenKeyboard from "$lib/Terminal/OnScreenKeyboard.svelte";
  import WindowTopBar from "$lib/Terminal/WindowTopBar.svelte";
  import Dock from "$lib/Terminal/Dock.svelte";
  import HelpDialog from "$lib/Terminal/HelpDialog.svelte";
  import MenuButtons from "$lib/Terminal/MenuButtons.svelte";

  const prompts = createPrompts();

  let sectionElement: HTMLElement;
  let windowState: "normal" | "minimized" | "closed" | "maximized" =
    $state("normal");
  let openDock = $state(false);
  let openOnScreenKeyboard = $state(false);
  let openHelpDialog = $state(false);

  async function scrollToBottom(node: HTMLElement) {
    node.scroll({ top: node.scrollHeight, behavior: "smooth" });
  }

  $effect(() => {
    prompts.prompts.length;
    scrollToBottom(sectionElement);
  });

  function handleKeyDown(e: KeyboardEvent) {
    if (e.repeat) return;

    if ((e.ctrlKey && e.key === "l") || (e.altKey && e.key === "l")) {
      prompts.clear();
    }

    if (e.key === "c" && !e.ctrlKey && !e.metaKey) {
      confetti();
    }

    if (e.key === "Backspace") {
      prompts.previous();
    }

    if (e.key === "h") {
      openHelpDialog = true;
    }
  }

  function handleWindowButtonClick(e: CustomEvent) {
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

  function handleMenuButtonClick(e: CustomEvent<any>): void {
    switch (e.detail.action) {
      case "help":
        openHelpDialog = true;
        break;
      case "on-screen-keyboard":
        openOnScreenKeyboard = !openOnScreenKeyboard;
        break;
    }
  }
</script>

<svelte:window on:keydown={handleKeyDown} />

<section
  bind:this={sectionElement}
  class="scale-1 duration-400 relative flex h-full origin-bottom-left transform-gpu flex-col overflow-y-auto px-4 py-2 font-mono text-zinc-400 transition-all md:max-h-[800px] md:min-h-[300px] md:w-[700px] md:self-center md:rounded-lg md:border md:border-zinc-700 md:bg-zinc-900 md:opacity-95"
  class:minimized={windowState === "minimized"}
  class:maximized={windowState === "maximized"}
  class:closed={windowState === "closed"}
>
  <WindowTopBar on:menu-button-click={handleWindowButtonClick} />
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
  <OnScreenKeyboard open={openOnScreenKeyboard} />
</section>
<HelpDialog bind:open={openHelpDialog} />
<MenuButtons on:menu-button-click={handleMenuButtonClick} />
<Dock open={openDock} on:open-app={handleOpenApp} />

<style>
  section {
    font-family: "JetBrains Mono";
  }

  .minimized {
    height: 38px;
    min-height: auto;
    align-self: flex-end;
    margin-bottom: 8px;
  }
  .maximized {
    height: 100%;
    max-height: none;
    align-self: stretch;
    width: 100%;
  }

  .closed {
    scale: 0;
  }
</style>
