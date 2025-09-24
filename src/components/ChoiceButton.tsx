interface ChoiceButtonProps {
  label: string;
  onClick: () => void;
}

export function ChoiceButton({ label, onClick }: ChoiceButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-blood text-white px-6 py-3 rounded-xl text-lg hover:scale-105 transition"
    >
      {label}
    </button>
  );
}
