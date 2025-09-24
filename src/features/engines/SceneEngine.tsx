import { useEffect, useState } from "react";
import { fetchScene } from "@/utils/sceneLoader";
import { ChoiceButton } from "@/components/ChoiceButton";
import { SceneProps, StatImpact, PlayerStats } from "@/types/types";

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

  useEffect(() => {
    fetchScene(sceneId).then(setScene);
  }, [sceneId]);

  if (!scene) return <div>Loading scene...</div>;

  return (
    <section className="relative w-full h-screen overflow-hidden text-center flex flex-col justify-center items-center px-6 py-12 gap-8">
      {/* Background */}
      <video
        src={scene.background}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Narration */}
      <div className="relative z-10 text-white text-xl md:text-2xl max-w-2xl">
        {scene.narration}
      </div>

      {/* Choices */}
      <div className="relative z-10 flex flex-col gap-4">
        {scene.choices.map((choice, index) => (
          <ChoiceButton
            key={index}
            label={choice.text}
            onClick={() => {
              if (choice.statImpact) {
                applyStatImpact(choice.statImpact);
              }
              // Navigate to next scene
              setScene(null);
              fetchScene(choice.nextScene).then(setScene);
              onSceneChange(choice.nextScene);
            }}
          />
        ))}
      </div>
    </section>
  );
}
