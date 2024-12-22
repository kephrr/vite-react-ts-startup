import Naviguation from "../components/includes/naviguation.tsx";
import {UserDetails} from "../models/user.tsx";
import UserTableDetail from "../components/utils/user-table-detail.tsx";
import {TOXICITY} from "../resources.ts";
import Label from "../components/utils/label.tsx";
import {FormEvent, useEffect, useState} from "react";
import {Loader} from "../components/utils/loader.tsx";
import {ToxicityServiceImpl} from "../services/Impl/ToxicityServiceImpl.tsx";
import {RestResponse} from "../models/RestResponse.ts";


type Option = {
    id: number, text:string, value:number, select:number
}
const toxicityService = new ToxicityServiceImpl();

function Explore(){
    const location = [
        {text:'Home', url:'/'},
        {text:'Explore', url:'/explore'}
    ]
    const options:Option[] = [
        {id: 1, text:'Less than 100', value:1, select:1},
        {id: 2, text:'100 - 500', value:1, select:1},
        {id: 3, text:'500 - 1K', value:1, select:1},
        {id: 4, text:'1K - 5K', value:1, select:1},
        {id: 5, text:'5K - 10K', value:1, select:1},
        {id: 6, text:'More than 10K', value:1, select:1},
        {id: 7, text:'Less than 100', value:1, select:2},
        {id: 8, text:'100 - 1K', value:1, select:2},
        {id: 9, text:'More than 1K', value:1, select:2},
        {id: 10, text:'Rare', value:1, select:3},
        {id: 11, text:'Often', value:1, select:3},
        {id: 12, text:'Frequently', value:1, select:3}
    ]
    const [textInput, setTextInput] = useState("")
    const [currentPage, setCurrentPage] = useState<number | undefined>(0)
    const [response, setResponse] = useState<RestResponse<UserDetails[]>>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const findAllDetails = async (textInput:string) => {
            try {
                const data = await toxicityService.findAllDetailsPageWithFilter(textInput, currentPage);
                setResponse(data)
                setCurrentPage(data.currentPage)
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };
        setTimeout(()=>{
                findAllDetails(textInput)
            },
            1000)

    });

    if (error) return <p>Error: {error}</p>;

    function filterInput(e:FormEvent<HTMLInputElement>){
        const keyword = e.currentTarget.value;
        setTextInput(keyword);
    }

    return (
        <div className="relative bg-base-200 py-2 px-20 min-h-screen">
            <Naviguation location={location}/>
            <div className="flex flex-row gap-2.5 items-center justify-center">
                <input
                    onChange={(e)=>filterInput(e)}
                    type="text"
                    value={textInput}
                    placeholder="Type here"
                    className="input input-bordered input-sm w-full max-w-full focus:outline-blue-500"/>
                <select defaultValue={0} className="select select-bordered select-sm max-w-xs">
                    <option disabled value={0}>Followers users</option>
                    {options.map((opt: Option) => (
                        opt.select === 1? <option value={opt.value} key={opt.id}>{opt.text}</option> : ''
                    ))}
                </select>
                <select defaultValue={0} className="select select-bordered select-sm max-w-xs">
                    <option disabled value={0}>Followed</option>
                    {options.map((opt: Option) => (
                        opt.select === 2? <option value={opt.value} key={opt.id}>{opt.text}</option> : ''
                    ))}
                </select>
                <select defaultValue={0} className="select select-bordered select-sm max-w-xs">
                    <option disabled value={0}>Frequency</option>
                    {options.map((opt: Option) => (
                        opt.select === 3? <option value={opt.value} key={opt.id}>{opt.text}</option> : ''
                    ))}
                </select>
                <a href="/explore">
                    <button className="btn btn-sm bg-blue-500 rounded-lg text-white font-semibold">Browse</button>
                </a>
            </div>
            <div className="flex flex-row my-5 gap-2.5">
                <div className="overflow-x-auto flex-1 border border-base-100 rounded-lg">
                    {(loading || response?.results.length===0)? <div className="flex-1 min-h-96 flex justify-center items-center"> <Loader></Loader> </div> :
                        <UserTableDetail users={response?.results}/>
                    }
                </div>
                <div
                    className="overflow-x-auto flex flex-col flex-3 min-h-52 min-w-80 border border-base-100 rounded-lg p-2">
                    <h3 className="text-lg font-semibold my-2">Possible toxicity levels</h3>
                    <div className="flex gap-2.5 max-w-xs flex-wrap">
                            {Array.from(TOXICITY.entries()).map(([key, value]) => (
                                <Label key={key} id={key} text={value}></Label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            )
            }

            export default Explore;