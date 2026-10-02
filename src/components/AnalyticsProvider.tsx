"use client";

import posthog from "posthog-js";
import { usePathname } from "next/navigation";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { analyticsConfigured } from "@/lib/analytics";

const consentKey = "vf-analytics-consent";
let initialized = false;

function startAnalytics() {
    if (!analyticsConfigured) return;

    if (!initialized) {
        posthog.init(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN!, {
            api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
            capture_pageview: false,
            capture_pageleave: true,
            autocapture: false,
            disable_session_recording: false,
            opt_out_capturing_by_default: true,
            person_profiles: "identified_only",
            mask_personal_data_properties: true,
            session_recording: {
                maskAllInputs: true,
                maskTextSelector: ".ph-mask",
            },
        });
        initialized = true;
    }

    posthog.opt_in_capturing();
}

export default function AnalyticsProvider({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const [consent, setConsent] = useState<"granted" | "denied" | null>(null);
    const [showPreferences, setShowPreferences] = useState(false);

    useEffect(() => {
        if (!analyticsConfigured) return;

        const savedConsent = window.localStorage.getItem(consentKey) as "granted" | "denied" | null;
        setConsent(savedConsent);
        setShowPreferences(!savedConsent);

        if (savedConsent === "granted") startAnalytics();

        const openPreferences = () => setShowPreferences(true);
        window.addEventListener("portfolio:open-privacy-settings", openPreferences);
        return () => window.removeEventListener("portfolio:open-privacy-settings", openPreferences);
    }, []);

    useEffect(() => {
        if (consent !== "granted") return;

        startAnalytics();
        posthog.capture("$pageview", { $current_url: window.location.href, path: pathname });
    }, [consent, pathname]);

    const saveConsent = useCallback((value: "granted" | "denied") => {
        window.localStorage.setItem(consentKey, value);
        setConsent(value);
        setShowPreferences(false);

        if (value === "granted") {
            startAnalytics();
            return;
        }

        if (initialized) {
            posthog.stopSessionRecording();
            posthog.opt_out_capturing();
        }
    }, []);

    return (
        <>
            {children}
            {analyticsConfigured && showPreferences && (
                <section
                    aria-label="Preferências de privacidade"
                    aria-live="polite"
                    className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-md rounded-2xl border border-stone-900/10 bg-[#fffdf7] p-5 shadow-2xl shadow-stone-900/20 sm:bottom-6"
                >
                    <p className="text-sm font-semibold text-stone-900">Análise de navegação</p>
                    <p className="mt-2 text-xs leading-5 text-stone-900/60">
                        Com sua permissão, usamos métricas anônimas e replay de sessão para entender páginas, cliques e melhorar este portfólio. Não identificamos visitantes por nome ou e-mail.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        <button type="button" onClick={() => saveConsent("granted")} className="rounded-full bg-orange-700 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-orange-800">
                            Aceitar análise
                        </button>
                        <button type="button" onClick={() => saveConsent("denied")} className="rounded-full border border-stone-900/15 px-4 py-2 text-xs font-semibold text-stone-900/65 transition-colors hover:border-stone-900/35 hover:text-stone-900">
                            Recusar
                        </button>
                    </div>
                </section>
            )}
        </>
    );
}
