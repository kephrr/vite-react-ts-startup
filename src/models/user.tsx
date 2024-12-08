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
    followers:number,
    followed:number,
    score: number,
    label: number,
    slurs: number,
    ntweets:number,
    tweets: string[];
}

export type UserModal = {
    name: string,
    pseudo: string,
    followers:number,
    followed:number,
    score: number,
    label: number,
    slurs: number,
    ntweets:number,
}