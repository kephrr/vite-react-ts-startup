export const Toxicity:Map<number, string> = new Map([
    [1, "Not toxic"],
    [2, "Lowly toxic"],
    [3, "Middly toxic"],
    [4, "Highly toxic"],
    [5, "Insufferable Level of toxicity"]
])

/*
interface Dictionary<T> {
    [key: number]: T
}

export const ToxicLevelsFilter:Dictionary<string> = {
    1: 'All toxic users',
    2: 'Middly toxic users',
    3: 'Most 1% toxic users'
}*/