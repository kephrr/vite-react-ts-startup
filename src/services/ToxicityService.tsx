import {RestResponse} from "../models/RestResponse.ts";
import {User, UserDetails} from "../models/user.tsx";

export interface ToxicityService {
    findAll(): Promise<RestResponse<User[]>>;
    findAllDetailsPageWithFilter(keyword?:string, size?:number|undefined): Promise<RestResponse<UserDetails[]>>;
}