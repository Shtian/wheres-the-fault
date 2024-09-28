import type { Entity, Prompt } from "./Terminal/models";
import { promptCollection, PROMPT_IDS } from "./prompts";

const promptIndex: Map<Entity["id"], Prompt> = new Map();
promptCollection.forEach((prompt) => {
  promptIndex.set(prompt.id, prompt);
});

let prompts = $state<Prompt[]>([promptIndex.get(PROMPT_IDS.start)!]);

export function createPrompts() {
  return {
    get prompts() {
      return prompts;
    },
    moveNext: (nextId: string) => {
      console.log("movenext", prompts);
      const nextPrompt = promptIndex.get(nextId);
      if (!nextPrompt) {
        throw new Error(`Prompt with id ${nextId} not found`);
      }
      prompts.push(nextPrompt);
      prompts = prompts;
    },
    clear: () => {
      prompts = [promptIndex.get(PROMPT_IDS.start)!];
    },
    previous: () => {
      if (prompts.length === 1) return;
      prompts.pop();
      prompts = prompts;
    },
  };
}
