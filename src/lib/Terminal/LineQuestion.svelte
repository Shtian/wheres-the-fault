<script lang="ts">
  import LineQuestionChoice from "./LineQuestionChoice.svelte";
  import LineQuestionHeader from "./LineQuestionHeader.svelte";
  import LineEnd from "./LineEnd.svelte";
  import { type Question } from "./models";
  import { createPrompts } from "../prompt-state.svelte";
  import DocLink from "./DocLink.svelte";
  interface LineQuestionProps {
    question: Question;
    active: boolean;
    docLinks?: DocLink[];
  }
  const { question, active, docLinks = [] }: LineQuestionProps = $props();
  const prompts = createPrompts();

  let numberOfChoices = question.choices.length;
  let selectedIndex = $state(0);
  let selectedChoice = $state(question.choices[selectedIndex].nextEntityId);

  function incrementIndex() {
    if (numberOfChoices === 1) return;
    if (selectedIndex === numberOfChoices - 1) {
      selectedIndex = 0;
      return;
    }
    selectedIndex += 1;
  }

  function decrementIndex() {
    if (numberOfChoices === 1) return;
    if (selectedIndex === 0) {
      selectedIndex = numberOfChoices - 1;
      return;
    }
    selectedIndex -= 1;
  }

  $effect(() => {
    selectedChoice = question.choices[selectedIndex].nextEntityId;
  });

  function handleKeyDown(e: KeyboardEvent) {
    if (!active) return;
    if (e.key === "Enter" || e.key === " ") {
      prompts.moveNext(selectedChoice);
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      decrementIndex();
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      incrementIndex();
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
      name={question.id}
      answerText={choice.text}
      value={choice.nextEntityId}
      selected={selectedChoice === choice.nextEntityId}
    ></LineQuestionChoice>
  {/each}
</div>

<style>
  .line-question-active :global(.line-sidebar-character) {
    @apply text-emerald-400;
  }
</style>
