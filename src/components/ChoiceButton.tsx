import { motion } from "framer-motion";

interface ChoiceButtonProps {
  label: string;
  onClick: () => void;
}

export function ChoiceButton({ label, onClick }: ChoiceButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.08,
        boxShadow: "0 0 12px rgba(255, 255, 255, 0.6)",
        backgroundColor: "rgba(255, 255, 255, 0.4)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white/25 border border-white text-white px-6 py-2 rounded-xl text-sm sm:text-lg font-semibold cursor-pointer"
    >
      {label}
    </motion.button>
  );
}
