import { ChoiceButton } from "../ChoiceButton";
import { BackgroundLayer } from "../BackgroundLayer";
import { motion } from "framer-motion";
import { SceneProps, ChoiceProps } from "@/types/types";

interface InteractionUIProps {
  scene: SceneProps;
  onChoice: (choice: ChoiceProps) => void;
}

export function InteractionUI({ scene, onChoice }: InteractionUIProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="w-screen h-screen relative flex items-center justify-center px-2"
    >
      <BackgroundLayer image={scene.sceneAura.background} />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-1" />

      <section
        aria-label="Scene content"
        className="z-10 min-h-[70vh] sm:min-h-[65vh] md:min-h-[70vh] lg:min-h-[75vh] xl:min-h-[80vh] max-h-[90vh] xl:min-w-[60%] flex flex-col items-center justify-evenly p-6"
      >
        <article
          aria-label="Narration"
          className="overflow-y-auto
                 h-[30vh] sm:min-h-[35vh] md:min-h-[40vh] lg:min-h-[50vh] xl:min-h-[40vh]
                 max-h-[70vh] xl:max-h-[80vh] 2xl:max-h-[90vh]
                 w-full
                 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl 2xl:max-w-[60%]
                 mx-auto
                 p-4 bg-black/50 backdrop-blur-md text-center flex flex-col justify-evenly space-y-6"
        >
          {scene.narration.map((sentence, i) => (
            <p
              key={i}
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif tracking-wide mb-4"
            >
              <motion.span className="inline-block mr-1">
                {sentence}
              </motion.span>
            </p>
          ))}
        </article>

        <div
          aria-label="Choices"
          className="flex flex-col w-full 2xl:w-[60%] space-y-6 z-2 mt-8"
        >
          {scene.choices.map((choice, i) => (
            <ChoiceButton
              key={i}
              label={choice.text}
              onClick={() => onChoice(choice)}
            />
          ))}
        </div>
      </section>
    </motion.section>
  );
}
