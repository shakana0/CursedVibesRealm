import { useState } from "react"
import { PlayerStats, StatImpact } from "@/types/types"

export function usePlayerState() {
    const [stats, setStats] = useState<PlayerStats>({
        health: 100,
        curseLevel: 0,
        status: "normal",
        trust: {
            X: 0,
            Y: 0
        },
        emotionalState: "neutral",
        desireLevel: 0,
        corruption: 0,
        chatTone: "soft"
    })

    function updateStat(stat: keyof PlayerStats, amount: number | string) {
        setStats((prev) => ({
            ...prev,
            [stat]: typeof amount === "number"
                ? (typeof prev[stat] === "number" ? (prev[stat] as number) : 0) + amount
                : amount
        }))
    }

    function applyStatImpact(impact: StatImpact) {
        const { trust, ...rest } = impact;

        Object.entries(rest).forEach(([stat, amount]) => {
            updateStat(stat as keyof PlayerStats, amount);
        });

        if (trust) {
            Object.entries(trust).forEach(([id, trustAmount]) => {
                updateTrust(id, trustAmount);
            });
        }
    }

    function updateTrust(characterId: string, amount: number) {
        setStats((prev) => ({
            ...prev,
            trust: {
                ...prev.trust,
                [characterId]: (prev.trust[characterId] || 0) + amount
            }
        }))
    }


    return { stats, applyStatImpact, updateTrust }
}
