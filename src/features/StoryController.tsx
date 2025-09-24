import { useState } from "react";
import { SceneEngine } from "./engines/SceneEngine";
import { usePlayerState } from "../hooks/usePlayerState";

export function StoryController() {
  const [sceneId, setSceneId] = useState("chapter1-bite-corridor");
  const { stats, applyStatImpact } = usePlayerState();

  function handleSceneChange(nextSceneId: string) {
    setSceneId(nextSceneId);
  }

  return (
    <SceneEngine
      sceneId={sceneId}
      stats={stats}
      onSceneChange={handleSceneChange}
      applyStatImpact={applyStatImpact}
    />
  );
}
