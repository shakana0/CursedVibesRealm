import { useEffect, useState } from "react";
import { fetchScene } from "@/utils/sceneLoader";
import {
  SceneProps,
  ChoiceProps,
  StatImpact,
  PlayerStats,
} from "@/types/types";
import { SceneIntroUI } from "@/components/story/SceneIntroUI";
import { InteractionUI } from "@/components/story/InteractionUI";

interface SceneEngineProps {
  sceneId: string;
  stats: PlayerStats;
  onSceneChange: (sceneId: string) => void;
  applyStatImpact: (statImpact: StatImpact) => void;
}

export function SceneEngine({
  sceneId,
  stats,
  onSceneChange,
  applyStatImpact,
}: SceneEngineProps) {
  const [scene, setScene] = useState<SceneProps | null>(null);
  const [phase, setPhase] = useState<"intro" | "choice">("intro");

  useEffect(() => {
    fetchScene(sceneId).then(setScene);
  }, [sceneId]);

  if (!scene) return <div>Loading scene...</div>;

  function handleChoice(choice: ChoiceProps) {
    if (choice.statImpact) {
      applyStatImpact(choice.statImpact);
    }

    setScene(null);
    fetchScene(choice.nextScene).then(setScene);
    onSceneChange(choice.nextScene);
  }

  return (
    <section className="relative w-full h-screen overflow-hidden text-center flex flex-col justify-center items-center px-6 py-12 gap-8">
      {phase === "intro" ? (
        <SceneIntroUI scene={scene} onComplete={() => setPhase("choice")} />
      ) : (
        <InteractionUI scene={scene} onChoice={handleChoice} />
      )}
    </section>
  );
}
