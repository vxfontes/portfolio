"use client";

import posthog from "posthog-js";

export type AnalyticsEvent =
    | "navigation_clicked"
    | "project_opened"
    | "project_link_clicked"
    | "contact_clicked"
    | "experience_expanded";

export const analyticsConfigured = Boolean(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN);

export function track(event: AnalyticsEvent, properties: Record<string, string | number | boolean>) {
    if (!analyticsConfigured || !posthog.has_opted_in_capturing()) return;

    posthog.capture(event, properties);
}
