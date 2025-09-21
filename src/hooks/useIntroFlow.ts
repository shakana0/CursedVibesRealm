import { useEffect } from "react";

export function useIntroFlow({
    hasInteracted,
    introLines,
    setCurrentLine,
    setShowInitializing,
    setGlitchActive,
    onComplete,
}: {
    hasInteracted: boolean;
    introLines: string[];
    setCurrentLine: (i: number | null) => void;
    setShowInitializing: (v: boolean) => void;
    setGlitchActive: (v: boolean) => void;
    onComplete: () => void;
}) {
    useEffect(() => {
        if (!hasInteracted) return;

        const audio = new Audio("/media/intro-realm.mp3");
        audio.volume = 0.8;
        audio.play();

        const lineTimers: NodeJS.Timeout[] = [];

        introLines.forEach((_, i) => {
            const timer = setTimeout(() => {
                setCurrentLine(i);
            }, 6000 + i * 2850);
            lineTimers.push(timer);
        });

        const curseTimer = setTimeout(() => {
            setShowInitializing(true);
        }, 30000);

        const glitchTimer = setTimeout(() => {
            setGlitchActive(true);
        }, 34000); // 4s after initializing

        const uiTimer = setTimeout(() => {
            onComplete();
        }, 40000);

        return () => {
            lineTimers.forEach(clearTimeout);
            clearTimeout(curseTimer);
            clearTimeout(glitchTimer);
            clearTimeout(uiTimer);
        };
    }, [hasInteracted]);
}
