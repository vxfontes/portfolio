"use client";

import { motion, useReducedMotion } from "framer-motion";

const HeroSignal = () => {
    const reduceMotion = useReducedMotion();
    const looping = reduceMotion ? {} : { rotate: 360 };

    return (
        <div className="hero-signal relative aspect-square overflow-hidden border border-stone-900/20 bg-[#f6f3eb]" aria-hidden="true">
            <div className="absolute inset-0 opacity-60" style={{ backgroundImage: "linear-gradient(rgba(112, 95, 72, .12) 1px, transparent 1px), linear-gradient(90deg, rgba(112, 95, 72, .12) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
            <svg viewBox="0 0 480 480" className="absolute inset-0 h-full w-full p-8">
                <motion.g
                    animate={looping}
                    transition={{ duration: 28, ease: "linear", repeat: Infinity }}
                    style={{ transformOrigin: "240px 240px" }}
                    fill="none"
                    stroke="#88775f"
                    strokeWidth="1.5"
                >
                    <circle cx="240" cy="240" r="150" />
                    <circle cx="240" cy="240" r="100" strokeDasharray="4 8" />
                    <path d="M90 240h300M240 90v300M134 134l212 212m0-212L134 346" opacity="0.45" />
                </motion.g>
                <motion.path
                    d="M92 240 H175 L206 187 L248 302 L287 221 H388"
                    fill="none"
                    stroke="#c64b27"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={reduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: [0, 1, 1], opacity: [0, 1, 1] }}
                    transition={{ duration: 2.4, times: [0, 0.42, 1], ease: "easeOut", repeat: reduceMotion ? 0 : Infinity, repeatDelay: 1.8 }}
                />
                <motion.g
                    animate={reduceMotion ? {} : { scale: [1, 1.22, 1] }}
                    transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity }}
                    style={{ transformOrigin: "388px 221px" }}
                    fill="#c64b27"
                >
                    <circle cx="388" cy="221" r="8" />
                    <circle cx="388" cy="221" r="15" opacity="0.16" />
                </motion.g>
                <circle cx="240" cy="240" r="47" fill="#f6f3eb" stroke="#30271f" strokeWidth="2" />
                <path d="M216 218 L240 260 L264 218" fill="none" stroke="#30271f" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.18em] text-stone-900/55">01 / sistema em movimento</span>
            <span className="absolute bottom-5 right-5 font-mono text-[10px] uppercase tracking-[0.18em] text-orange-700">Produto · engenharia · impacto</span>
        </div>
    );
};

export default HeroSignal;
