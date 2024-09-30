<script lang="ts">
  import LineQuestionChoice from "./LineQuestionChoice.svelte";
  import LineQuestionHeader from "./LineQuestionHeader.svelte";
  import LineEnd from "./LineEnd.svelte";
  import { type Question, type DocumentationLink } from "./models";
  import { createPrompts } from "../prompt-state.svelte";
  import DocLink from "./DocLink.svelte";
  interface LineQuestionProps {
    question: Question;
    docLinks?: DocumentationLink[];
  }
  const { question, docLinks = [] }: LineQuestionProps = $props();
  const prompts = createPrompts();
  const active = $derived(
    (() => {
      const isActive = prompts.currentPrompt?.id === question.id;
      return isActive;
    })()
  );

  // Need to keep track of selected index for history
  let previousChoiceIndex = 0;
  let selectedIndex = $derived(
    (() => {
      if (!active) return previousChoiceIndex;
      previousChoiceIndex = prompts.currentChoiceIndex;
      return prompts.currentChoiceIndex;
    })()
  );

  let selectedChoice = $derived(
    (() => {
      return question.choices[selectedIndex].nextEntityId;
    })()
  );

  function handleKeyDown(e: KeyboardEvent) {
    if (!active) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      prompts.moveNext();
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      prompts.decrementChoiceIndex();
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      prompts.incrementChoiceIndex();
    }
  }
</script>

<svelte:window on:keydown={handleKeyDown} />
<div
  class="question-container flex flex-col"
  class:line-question-active={active}
  class:text-zinc-100={active}
>
  <LineQuestionHeader>{question.question}</LineQuestionHeader>
  {#each docLinks as docLink}
    <DocLink {docLink} />
  {/each}
  {#each question.choices as choice}
    <LineQuestionChoice
      answerText={choice.text}
      selected={selectedChoice === choice.nextEntityId}
    ></LineQuestionChoice>
  {/each}
</div>

<style>
  .line-question-active :global(.line-sidebar-character) {
    @apply text-emerald-400;
  }
</style>
