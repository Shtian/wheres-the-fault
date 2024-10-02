<script lang="ts">
  import LineSidebarCharacter from "$lib/Terminal/LineFeeds/LineSidebarCharacter.svelte";
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
    {#if selected}●{:else}○{/if}
    {answerText}
  </span>
</span>
