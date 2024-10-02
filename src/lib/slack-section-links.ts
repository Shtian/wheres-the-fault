import type { DocumentationLink } from "./Terminal/models";

export const SLACK_CANVAS_LINKS = {
  PERFORMANCE: {
    href: "https://lyse.slack.com/docs/T03SP4MBC/F07PR47B753?focus_section_id=temp:C:IKJa3a783e827fb470c9acdecf8a",
    text: "Ytelse og ressursbruk",
  },
  PERFORMANCE_DASHBOARD: {
    href: "https://portal.azure.com/#@lysesecure.no/dashboard/arm/subscriptions/b38e1ed4-bcab-4714-8a90-cda040984c7c/resourcegroups/webteam-common/providers/microsoft.portal/dashboards/4f3c739c-5579-4333-adf5-fb2a282124cd",
    text: "Dashboard for ice.no",
  },
  INCIDENTS: {
    href: "https://lyse.slack.com/docs/T03SP4MBC/F07PR47B753?focus_section_id=temp:C:IKJd947ba4ac86e4a9ebd6d1fb7c",
    text: "Incident-håndtering",
  },
  KNOWN_ISSUES_ORDERFORM: {
    href: "https://lyse.slack.com/canvas/C079T9CE7CN?focus_section_id=temp:C:ZaC3e520dca1f934a80866dd673d",
    text: "Kjente feilmeldinger - Orderform",
  },
  KNOWN_ISSUES_ICE_NO: {
    href: "https://lyse.slack.com/canvas/C079T9CE7CN?focus_section_id=temp:C:ZaC2c4e7ccb946449c9af99b8022",
    text: "Kjente feilmeldinger - ice.no",
  },
  KQL_1_2_3: {
    href: "https://lyse.slack.com/docs/T03SP4MBC/F07PR47B753?focus_section_id=temp:C:IKJf6b40fc7ab3442e4b25954f33",
    text: "KQL på 1-2-3",
  },
  UNMINIFIY_STACKTRACE: {
    href: "https://lyse.slack.com/docs/T03SP4MBC/F07PR47B753?focus_section_id=temp:C:IKJ601e63ff7011409699bb704a6",
    text: "How-To Unminify Stack Trace",
  },
  KIBANA_1_2_3: {
    href: "https://lyse.slack.com/docs/T03SP4MBC/F07PR47B753?focus_section_id=temp:C:IKJ2e3660500d874baaa89752be4",
    text: "Kibana på 1-2-3",
  },
} satisfies Record<string, DocumentationLink>;
