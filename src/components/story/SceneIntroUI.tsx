import { NarrationSequence } from "../narration/NarrationSequence";
import { BackgroundLayer } from "../BackgroundLayer";
import { SceneProps } from "@/types/types";

interface SceneIntroUIProps {
  scene: SceneProps;
  onComplete: () => void;
}

export function SceneIntroUI({ scene, onComplete }: SceneIntroUIProps) {
  return (
    <section className="relative w-screen h-screen z-0">
      <BackgroundLayer image={scene.background} />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-2" />
      <NarrationSequence narration={scene.narration} onComplete={onComplete} />
    </section>
  );
}
