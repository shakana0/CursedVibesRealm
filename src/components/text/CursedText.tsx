import React from "react";
import type { ElementType } from "react";

interface CursedTextProps {
  text: string;
  as?: ElementType;
  variant?: "glow" | "drip" | "melt" | "glitch" | "bleed";
  intensity?: "low" | "medium" | "high";
  blur?: boolean;
  pulseSpeed?: number;
  cursedText?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function CursedText({
  text,
  as = "h1",
  variant = "glow",
  intensity = "medium",
  blur = false,
  pulseSpeed = undefined,
  cursedText = false,
  className = "",
  onClick,
}: CursedTextProps) {
  const classes = [
    cursedText ? "cursed-text" : "",
    `variant-${variant}`,
    `intensity-${intensity}`,
    blur ? "blurred" : "",
    className,
  ].join(" ");

  const style = pulseSpeed ? { animationDuration: `${pulseSpeed}s` } : {};

  return React.createElement(as, {
    className: classes,
    style,
    "data-text": text,
    children: text,
    onClick,
  });
}
