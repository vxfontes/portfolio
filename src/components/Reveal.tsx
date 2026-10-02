"use client";

import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from "react";

type RevealProps = {
    children: ReactNode;
    delay?: number;
};

const Reveal = ({ children, delay = 0 }: RevealProps) => {
    const element = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const target = element.current;
        if (!target) return;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.08, rootMargin: "0px 0px -40px" });

        observer.observe(target);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={element}
            className={`motion-reveal${visible ? " is-visible" : ""}`}
            style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
        >
            {children}
        </div>
    );
};

export default Reveal;
