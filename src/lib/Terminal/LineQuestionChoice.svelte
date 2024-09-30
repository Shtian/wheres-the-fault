<script lang="ts">
  import LineSidebarCharacter from "./LineSidebarCharacter.svelte";
  interface LineQuestionChoiceProps {
    answerText: string;
    selected: boolean;
  }
  const { answerText, selected }: LineQuestionChoiceProps = $props();
</script>

<span
  ><LineSidebarCharacter>│</LineSidebarCharacter><span
    class="choice-form-control"
    class:text-zinc-400={!selected}
  >
    {#if selected}
      ● {answerText}
    {:else}
      ○ {answerText}
    {/if}
  </span>
</span>
