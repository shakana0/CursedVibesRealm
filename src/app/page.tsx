"use client";
import { useEffect, useState } from "react";
import IntroSequence from "../components/intro/IntroSequence";
import MainUI from "../components/intro/MainUI";

export default function LandingPage() {
  const [showIntro, setShowIntro] = useState(true);
  const [isEntryPromptVisible, setIsEntryPromptVisible] = useState(false);

  useEffect(() => {
    if (showIntro) return;
    const uiTextTimer = setTimeout(() => {
      setIsEntryPromptVisible(true);
    }, 3000);

    return () => {
      clearTimeout(uiTextTimer);
    };
  }, [showIntro]);

  return (
    <main className="h-screen flex flex-col items-center justify-center p-8 sm:p-20 bg-obsidian text-mist">
      {showIntro ? (
        <IntroSequence onComplete={() => setShowIntro(false)} />
      ) : (
        <MainUI showEntryPrompt={isEntryPromptVisible} />
      )}
    </main>
  );
}
