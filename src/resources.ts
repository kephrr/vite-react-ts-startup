export const BASE_URL = 'http://localhost:5173'
export const LINKS = {
    twitter: 'https://x.com/KephJS',
    github: 'https://github.com/kephrr',
    linkedin: 'https://www.linkedin.com/in/kephren-emmanuel-evoung-a54158252/'
}
export const LABEL = {
    1: ''
}
export const TOXICITY:Map<number, string> = new Map([
    [1, "Not toxic"],
    [2, "Lowly toxic"],
    [3, "Middly toxic"],
    [4, "Highly toxic"],
    [5, "Insufferable Level of toxicity"]
])