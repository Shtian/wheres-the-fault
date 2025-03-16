import type { DocumentationLink } from "./Terminal/models";

export const SLACK_CANVAS_LINKS = {
  PERFORMANCE: {
    href: "www.google.com",
    text: "Ytelse og ressursbruk",
  },
  PERFORMANCE_DASHBOARD: {
    href: "www.google.com",
    text: "Dashboard for example.com",
  },
  INCIDENTS: {
    href: "www.google.com",
    text: "Incident-håndtering",
  },
  KNOWN_ISSUES_SERVICE_2: {
    href: "www.google.com",
    text: "Kjente feilmeldinger - Orderform",
  },
  KNOWN_ISSUES_EXAMPLE_COM: {
    href: "www.google.com",
    text: "Kjente feilmeldinger - example.com",
  },
  KQL_1_2_3: {
    href: "www.google.com",
    text: "KQL på 1-2-3",
  },
  UNMINIFIY_STACKTRACE: {
    href: "www.google.com",
    text: "How-To Unminify Stack Trace",
  },
  KIBANA_1_2_3: {
    href: "www.google.com",
    text: "Kibana på 1-2-3",
  },
} satisfies Record<string, DocumentationLink>;
