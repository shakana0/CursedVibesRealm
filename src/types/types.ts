export interface ChoiceProps {
    text: string;
    tone: string;
    statImpact?: PlayerStats;
    outcome: string;
    nextScene: string;
}

export interface SceneProps {
    sceneId: string;
    chapter: string;
    background: string;
    narration: string[];
    choices: ChoiceProps[];
}

export type PlayerStats = {
    [key: string]: number | string;
};
