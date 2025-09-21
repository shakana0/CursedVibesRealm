import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIntroFlow } from "@/hooks/useIntroFlow";
import { introLines } from "@/data/strings";

export default function IntroSequence({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [currentLine, setCurrentLine] = useState<number | null>(null);
  const [showInitializing, setShowInitializing] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);

  useIntroFlow({
    hasInteracted,
    introLines,
    setCurrentLine,
    setShowInitializing,
    setGlitchActive,
    onComplete,
  });

  useEffect(() => {
    const handleInteraction = () => setHasInteracted(true);
    window.addEventListener("click", handleInteraction);
    return () => window.removeEventListener("click", handleInteraction);
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {!hasInteracted && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <button
            onClick={() => setHasInteracted(true)}
            className="text-white text-xl animate-pulse"
          >
            <p className="md:text-xl lg:text-2xl">Begin the Ritual</p>
          </button>
        </div>
      )}

      <AnimatePresence>
        {hasInteracted && currentLine !== null && (
          <motion.div
            key={currentLine}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1 }}
            className="absolute text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center"
          >
            {introLines[currentLine]}
          </motion.div>
        )}
      </AnimatePresence>

      {showInitializing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className={`absolute bottom-10 text-white text-sm tracking-widest fade-in ${
            glitchActive ? "glitch" : ""
          }`}
          style={{
            textShadow: glitchActive
              ? "1px 0 red, -1px 0 cyan, 0 1px lime"
              : "none",
          }}
        >
          <p className="md:text-xl lg:text-2xl">Initializing curse...</p>
        </motion.div>
      )}
    </div>
  );
}
