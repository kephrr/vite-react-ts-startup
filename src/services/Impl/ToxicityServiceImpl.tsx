import {ToxicityService} from "../ToxicityService.tsx";
import {RestResponse} from "../../models/RestResponse.ts";
import {User, UserDetails} from "../../models/user.tsx";
import {API_URL} from "../../resources.ts";


export class ToxicityServiceImpl implements ToxicityService {
    private readonly baseUrl: string;

    constructor() {
        this.baseUrl = API_URL;
    }

    async findAll(): Promise<RestResponse<User[]>> {
        const response = await fetch(`${this.baseUrl}/profiles?size=3`);
        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }
        return await response.json();
    }

    async findAllDetailsPageWithFilter(keyword?:string, page?:number|undefined): Promise<RestResponse<UserDetails[]>> {
        const response = await fetch(`${this.baseUrl}/profiles-details?page=${page}&size=10&keyword=${keyword}`);
        if (!response.ok) {
            throw new Error("Failed to fetch users details");
        }
        return await response.json();
    }
}

