import { motion } from "framer-motion";

export function NarrationLine({ text }: { text: string }) {
  const sentences = text.split(" ");

  return (
    <p className="text-lg font-serif tracking-wide mb-4">
      {sentences.map((sentence, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
          className="inline-block mr-1"
        >
          {sentence}
        </motion.span>
      ))}
    </p>
  );
}
