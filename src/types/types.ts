export interface SceneProps {
    sceneId: string;
    sceneType: string,
    chapter: string;
    sceneAura: SceneAura;
    narration: string[];
    choices: ChoiceProps[];
    effects: string[];
}

export type SceneAura = {
    background: string,
    ambientAudio?: string,
    music?: string,
    sfx?: string[]
}

export interface ChoiceProps {
    text: string;
    tone: string;
    statImpact: StatDelta;
    outcome: string;
    nextScene: string;
}

export type StatDelta = {
    health?: number;
    curseLevel?: number;
    status?: string;
    emotionalState?: string;
    desireLevel?: number;
    corruption?: number;
    chatTone?: string;
    trust?: {
        [characterId: string]: number;
    };
};

export type CharacterStats = {
    strength: number;
    agility: number;
    intelligence: number;
    luck: number;
};

export type StatImpact = Partial<Omit<StatDelta, "trust">> & {
    trust?: { [characterId: string]: number };
};
