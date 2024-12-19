import {ToxicityService} from "../ToxicityService.tsx";
import {RestResponse} from "../../models/RestResponse.ts";
import {User, UserDetails} from "../../models/user.tsx";


export class ToxicityServiceImpl implements ToxicityService {
    private readonly baseUrl: string;

    constructor() {
        this.baseUrl = "http://localhost:8000"; // Exemple d'API
    }
    async findAll(): Promise<RestResponse<User[]>> {
        const response = await fetch(`${this.baseUrl}/profiles?size=3`);
        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }
        return await response.json();
    }

    async findAllDetailsPageWithFilter(keyword:string, page:number|undefined): Promise<RestResponse<UserDetails[]>> {
        const response = await fetch(`${this.baseUrl}/profiles-details?page=${page}&size=6&keyword=${keyword}`);
        if (!response.ok) {
            throw new Error("Failed to fetch users details");
        }
        return await response.json();
    }
}

