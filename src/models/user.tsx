export type User = {
    id: number,
    name: string,
    pseudo: string,
    level: number
}

export type UserDetails = {
    id: number,
    name: string,
    pseudo: string,
    followers:number,
    following:number,
    totalInsults: number,
    totalTweets:number,
    score: number,
    rate:number,
    level: number,
}

export type UserModal = {
    name: string,
    pseudo: string,
    followers:number,
    following:number,
    rate: number,
    level: number,
    totalInsults: number,
    totalTweets:number,
}