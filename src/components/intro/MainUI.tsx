import CursedText from "../text/CursedText";
import { motion } from "framer-motion";

interface MainUIProps {
  showEntryPrompt: boolean;
  onEnterStory: () => void;
}

export default function MainUI({ showEntryPrompt, onEnterStory }: MainUIProps) {
  return (
    <section className="min-h-[80vh] w-full max-w-6xl mx-auto flex flex-col justify-between items-center text-center animate-fade">
      <CursedText
        as="h1"
        text="Welcome To The Realm"
        variant="melt"
        intensity="medium"
        blur={true}
        className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl text-blood"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showEntryPrompt ? 1 : 0 }}
        transition={{ duration: 1.5 }}
        className="relative w-full lg:max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px] max-w-screen-2xl aspect-[16/9] mx-auto rounded-2xl overflow-hidden shadow-inner shadow-blood/40"
      >
        <video
          src="/media/intro-entre.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="mask-fade z-10 w-full h-full object-cover rounded-2xl"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showEntryPrompt ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 3.8 }}
      >
        <CursedText
          as="button"
          text="Enter If You Dare"
          variant="glow"
          intensity="high"
          blur={true}
          pulseSpeed={0.9}
          cursedText={true}
          className="text-xl md:text-2xl lg:text-3xl xl:text-4xl cursor-crosshair"
          onClick={() => onEnterStory()}
        />
      </motion.div>
    </section>
  );
}
