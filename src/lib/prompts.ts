import type { Prompt } from "./Terminal/models";

const COMMON_PROMPT_TEXTS = {
  YES: "Ja ✔",
  NO: "Nei ✘",
} as const;

export const PROMPT_IDS = {
  start: "start",
  end: "end",
} as const;

const startPrompt: Prompt = {
  type: "Question",
  question: "Hvor kom feilmeldingen fra?",
  choices: [
    {
      text: "#ice-team-web-notifications",
      nextEntityId: "many-notifications-in-ice-operations",
    },
    { text: "#ice-operations", nextEntityId: "is-app-responding" },
  ],
  id: PROMPT_IDS.start,
};

const dynatraceErrorFlow: Prompt[] = [
  {
    type: "Question",
    question: "Svarer tjenesten i din nettleser?",
    choices: [
      {
        text: COMMON_PROMPT_TEXTS.YES,
        nextEntityId: "application-responding-yes",
      },
      {
        text: COMMON_PROMPT_TEXTS.NO,
        nextEntityId: "application-responding-no",
      },
    ],
    id: "is-app-responding",
  },
  {
    type: "Information",
    message:
      "Pust ut. Se gjerne over ressursbruk og antall requests (2) i Azure Portalen om det gjaldt ice.no",
    id: "application-responding-yes",
    docLinks: [
      {
        id: "#app-insights-intro",
        text: "Hvordan bruke app insights",
      },
    ],
  },
  {
    type: "Information",
    message:
      "Meld i fra på #ice-team-web. Aktiver incident workflow (1) og be om bistand.",
    id: "application-responding-no",
    docLinks: [
      {
        id: "#app-insights-intro",
        text: "Hvordan bruke app insights",
      },
    ],
  },
];

const iceWebTeamNotificationsErrorFlow: Prompt[] = [
  {
    type: "Question",
    question: "Er det mange feilmeldinger på #ice-operations?",
    choices: [
      {
        text: COMMON_PROMPT_TEXTS.YES,
        nextEntityId: "errors-in-dependent-services",
      },
      {
        text: COMMON_PROMPT_TEXTS.NO,
        nextEntityId: "is-it-a-known-issue",
      },
    ],
    id: "many-notifications-in-ice-operations",
  },
  {
    type: "Question",
    question:
      "Er feilene fra tjenester vi er avhengig av? Navi/PROFFS/CDS etc.",
    choices: [
      { text: COMMON_PROMPT_TEXTS.YES, nextEntityId: "dependency-issues-info" },
      { text: COMMON_PROMPT_TEXTS.NO, nextEntityId: "is-it-a-known-issue" },
    ],
    id: "errors-in-dependent-services",
  },
  {
    type: "Information",
    message:
      'Sikre at "noen" er klar over problemene og kryss fingrene for at det løser seg fort 🤞',
    id: "dependency-issues-info",
  },
  {
    type: "Question",
    question: 'Er feilen en del av "Kjente feilmeldinger" (4)?',
    choices: [
      {
        text: COMMON_PROMPT_TEXTS.YES,
        nextEntityId: "follow-known-issue-instructions",
      },
      { text: COMMON_PROMPT_TEXTS.NO, nextEntityId: "is-error-in-code" },
    ],
    id: "is-it-a-known-issue",
  },
  {
    type: "Question",
    question:
      "Skyldes det åpenbare feil i vår kode, som en NullPointer eller undefined variabel?",
    choices: [
      {
        text: COMMON_PROMPT_TEXTS.YES,
        nextEntityId: "is-stack-trace-minified",
      },
      {
        text: COMMON_PROMPT_TEXTS.NO,
        nextEntityId: "is-error-from-outdated-browser",
      },
    ],
    docLinks: [
      {
        id: "#kql-1-2-3",
        text: "KQL på 1-2-3",
      },
    ],
    id: "is-error-in-code",
  },
  {
    type: "Question",
    question:
      "Gjør minified js i stacktracen det vanskelig å finne frem til koden?",
    choices: [
      {
        text: COMMON_PROMPT_TEXTS.YES,
        nextEntityId: "how-to-debug-minified-js",
      },
      {
        text: COMMON_PROMPT_TEXTS.NO,
        nextEntityId: "is-error-from-outdated-browser",
      },
    ],
    id: "is-stack-trace-minified",
  },
  {
    type: "Question",
    question:
      'Finn tilsvarende feil i Failures-viewet i App Insights og "Unminify" den',
    choices: [
      {
        text: "OK 👍",
        nextEntityId: "is-error-from-outdated-browser",
      },
    ],
    docLinks: [
      {
        id: "#appinsights-unminify-stacktrace",
        text: "How-To",
      },
    ],
    id: "how-to-debug-minified-js",
  },
  {
    type: "Question",
    id: "is-error-from-outdated-browser",
    question: "Er feilen fra en utdatert nettleser?",
    choices: [
      { text: COMMON_PROMPT_TEXTS.YES, nextEntityId: "ignore-error" },
      { text: COMMON_PROMPT_TEXTS.NO, nextEntityId: "can-you-reproduce" },
    ],
  },
  {
    type: "Information",
    message: "Ignorer feilen 🙈",
    id: "ignore-error",
  },
  {
    type: "Question",
    question: "Kan du reprodusere feilen?",
    choices: [
      { text: COMMON_PROMPT_TEXTS.YES, nextEntityId: "success-create-issue" },
      { text: COMMON_PROMPT_TEXTS.NO, nextEntityId: "find-hotjar-recording" },
    ],
    id: "can-you-reproduce",
  },
  {
    type: "Information",
    message: "Fantastisk! Lag en bug i Jira med detaljer for å reprodusere ✨",
    id: "success-create-issue",
  },
  {
    type: "Question",
    question: "Finner du en recording i Hotjar?",
    choices: [
      {
        text: COMMON_PROMPT_TEXTS.YES,
        nextEntityId: "can-you-reproduce-after-hotjar",
      },
      { text: COMMON_PROMPT_TEXTS.NO, nextEntityId: "does-it-happen-often" },
    ],
    id: "find-hotjar-recording",
  },
  {
    type: "Question",
    question: "Kan du reprodusere feilen lokalt nå?",
    choices: [
      { text: COMMON_PROMPT_TEXTS.YES, nextEntityId: "success-create-issue" },
      { text: COMMON_PROMPT_TEXTS.NO, nextEntityId: "does-it-happen-often" },
    ],
    id: "can-you-reproduce-after-hotjar",
  },
  {
    type: "Question",
    question: "Skjer det ofte? Se fremgangsmetode (6)",
    choices: [
      { text: COMMON_PROMPT_TEXTS.YES, nextEntityId: "find-a-rubber-duck" },
      { text: COMMON_PROMPT_TEXTS.NO, nextEntityId: "consider-ignoring-error" },
    ],
    id: "does-it-happen-often",
  },
  {
    type: "Information",
    message: "Finn din nærmeste Web Team Rubber Duck! 🦆",
    id: "find-a-rubber-duck",
  },
  {
    type: "Information",
    message:
      "Vurder om det er noe som bør ignoreres (7) sammen med andre i teamet.",
    id: "consider-ignoring-error",
  },
  {
    type: "Information",
    message: "Følg instruks for punktet i dokumentasjonen",
    id: "follow-known-issue-instructions",
  },
  {
    type: "Information",
    message: "Good luck!",
    id: PROMPT_IDS.end,
  },
];

export const promptCollection: Prompt[] = [
  startPrompt,
  ...dynatraceErrorFlow,
  ...iceWebTeamNotificationsErrorFlow,
];
