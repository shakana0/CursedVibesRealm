export async function fetchScene(sceneId: string) {
    const res = await fetch(`/data/scenes/chapter1/${sceneId}.json`)
    if (!res.ok) throw new Error("Scene not found")
    return await res.json()
}
