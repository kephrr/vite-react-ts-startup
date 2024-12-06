export type User = {
    id: number,
    name: string,
    pseudo: string,
    label: number
}

export type UserDetails = {
    id: number,
    name: string,
    pseudo: string,
    score: number,
    label: number,
    slurs: number,
    tweets: string[]
}