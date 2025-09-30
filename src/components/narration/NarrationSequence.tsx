import { useState, useEffect } from "react";
import CursedText from "../text/CursedText";
import { NarrationLine } from "./NarrationLine";

interface NarrationSequenceProps {
  narration: string[];
  onComplete: () => void;
}

export function NarrationSequence({
  narration,
  onComplete,
}: NarrationSequenceProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showContinue, setShowContinue] = useState(false);

  useEffect(() => {
    if (currentIndex < narration.length) {
      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 3500); // delay per sentence
      return () => clearTimeout(timeout);
    } else {
      // All narration shown, reveal Continue button
      const revealTimeout = setTimeout(() => {
        setShowContinue(true);
      }, 4000); // optional pause before showing button
      return () => clearTimeout(revealTimeout);
    }
  }, [currentIndex, narration.length]);

  return (
    <article className="absolute inset-0 flex flex-col items-center justify-evenly z-5 px-6 ">
      <div className="h-[60%] sm:h-[50%] lg:h-[40%] overflow-y-auto bg-black/50 backdrop-blur-md p-6 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl text-center space-y-6">
        {narration.slice(0, currentIndex).map((sentence, i) => (
          <NarrationLine key={i} text={sentence} />
        ))}
      </div>
      {showContinue && (
        <CursedText
          as="button"
          text="Continue"
          variant="glow"
          intensity="high"
          blur={true}
          pulseSpeed={0.9}
          cursedText={true}
          className="text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 md:mt-0 cursor-crosshair"
          onClick={onComplete}
        />
      )}
    </article>
  );
}
