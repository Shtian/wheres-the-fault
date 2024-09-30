import type { Entity, Prompt } from "./Terminal/models";
import { promptCollection, PROMPT_IDS } from "./prompts";

const promptIndex: Map<Entity["id"], Prompt> = new Map();
promptCollection.forEach((prompt) => {
  promptIndex.set(prompt.id, prompt);
});

let prompts = $state<Prompt[]>([promptIndex.get(PROMPT_IDS.start)!]);
let currentChoiceIndex = $state(0);

export function createPrompts() {
  return {
    get prompts() {
      return prompts;
    },
    get currentPrompt() {
      return prompts.at(-1);
    },
    get currentChoiceIndex() {
      return currentChoiceIndex;
    },
    moveNext: () => {
      const currentPrompt = prompts.at(-1);
      if (currentPrompt?.type !== "Question") return;
      const selectedChoice = currentPrompt.choices[currentChoiceIndex];
      if (!selectedChoice) {
        throw new Error("No selected choice found");
      }
      if (!selectedChoice.nextEntityId) {
        return;
      }
      const nextPrompt = promptIndex.get(selectedChoice.nextEntityId);
      if (!nextPrompt) {
        throw new Error(
          `Prompt with id ${selectedChoice.nextEntityId} not found`
        );
      }
      currentChoiceIndex = 0;
      prompts.push(nextPrompt);
      prompts = prompts;
    },
    clear: () => {
      prompts = [promptIndex.get(PROMPT_IDS.start)!];
    },
    previous: () => {
      if (prompts.length === 1) return;
      currentChoiceIndex = 0;
      prompts.pop();
      prompts = prompts;
    },
    incrementChoiceIndex: () => {
      const currentPrompt = prompts.at(-1);
      if (currentPrompt?.type !== "Question") return;
      if (currentPrompt.choices.length === 1) return;
      if (currentChoiceIndex === currentPrompt.choices.length - 1) {
        currentChoiceIndex = 0;
        return;
      }
      currentChoiceIndex += 1;
    },
    decrementChoiceIndex: () => {
      const currentPrompt = prompts.at(-1);
      if (currentPrompt?.type !== "Question") return;
      if (currentPrompt.choices.length === 1) return;
      if (currentChoiceIndex === 0) {
        currentChoiceIndex = currentPrompt.choices.length - 1;
        return;
      }
      currentChoiceIndex -= 1;
    },
  };
}
