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
    health: number;
    curseLevel: number;
    status: string;
    trust: {
        [characterId: string]: number;
    };
    emotionalState: string;
    desireLevel: number;
    corruption: number;
    chatTone: string;
};

export type CharacterStats = {
    strength: number;
    agility: number;
    intelligence: number;
    luck: number;
};

export type StatImpact = Partial<Omit<PlayerStats, "trust">> & {
    trust?: { [characterId: string]: number };
};
