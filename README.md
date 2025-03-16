## Where's the fault (WTF)?

This is an assistant for a dev team, to help find the source of an alert in our monitoring channel.
It's basically an interactive flow chart styled as a terminal, with questions and choices.

Made with [Svelte ❤️](https://svelte.dev/).

## Workflow configuration

The prompts are defined in the `promptCollection` array in `src/lib/prompts.ts`. The prompts are then displayed in a terminal-like interface, and the user can choose to follow the next step in the prompt flow, or to skip it. You can create questions, information messages, and links to documentation. All of it assisted with types.

## Development

Once you've cloned the repo, run `pnpm install` to install dependencies. Then, run `pnpm dev` to start a development server.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).
