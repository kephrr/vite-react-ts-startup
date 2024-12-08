import Naviguation from "../components/includes/naviguation.tsx";
import {UserDetails} from "../models/user.tsx";
import UserTableDetail from "../components/utils/user-table-detail.tsx";
import {TOXICITY} from "../resources.ts";
import Label from "../components/utils/label.tsx";
import {FormEvent, useState} from "react";

type Option = {
    id: number, text:string, value:number, select:number
}

function Explore(){
    const [textInput, setTextInput] = useState("")
    const [users, setUsers] = useState<UserDetails[]>([
        {id: 1, name: 'ActuRyo', pseudo: 'RyoSesneiActuu', followers:19303, followed:192, score: 851,
            label: 4, slurs: 124, ntweets:11982093, tweets:['']},
        {id: 2, name: 'Byilhan TWITCH', pseudo: 'byliahn', followers:442, followed:10, score: 50,
            label: 2, slurs: 12, ntweets:11903, tweets:['']},
        {id: 3, name: 'ART', pseudo: 'arisky', followers:250, followed:100, score: 20,
            label: 1, slurs: 20, ntweets:100002, tweets:['']},
        {id: 4, name: 'Ryo Sensei', pseudo: 'RyoSesneiActuu', followers:19303, followed:192, score: 851,
            label: 4, slurs: 124, ntweets:11982093, tweets:['']},
        {id: 5, name: 'Houken D. Xebec', pseudo: 'mrlafayette', followers:442, followed:10, score: 50,
            label: 5, slurs: 12, ntweets:11903, tweets:['']},
        {id: 6, name: 'Hashirama_', pseudo: 'ashramass33', followers:250, followed:100, score: 20,
            label: 1, slurs: 20, ntweets:100002, tweets:['']}
    ]);
    const default_data:UserDetails[] = [
        {id: 1, name: 'ActuRyo', pseudo: 'RyoSesneiActuu', followers:19303, followed:192, score: 851,
            label: 4, slurs: 124, ntweets:11982093, tweets:['']},
        {id: 2, name: 'Byilhan TWITCH', pseudo: 'byliahn', followers:442, followed:10, score: 50,
            label: 2, slurs: 12, ntweets:11903, tweets:['']},
        {id: 3, name: 'ART', pseudo: 'arisky', followers:250, followed:100, score: 20,
            label: 1, slurs: 20, ntweets:100002, tweets:['']},
        {id: 4, name: 'Ryo Sensei', pseudo: 'RyoSesneiActuu', followers:19303, followed:192, score: 851,
            label: 4, slurs: 124, ntweets:11982093, tweets:['']},
        {id: 5, name: 'Houken D. Xebec', pseudo: 'mrlafayette', followers:442, followed:10, score: 50,
            label: 2, slurs: 12, ntweets:11903, tweets:['']},
        {id: 6, name: 'Hashirama_', pseudo: 'ashramass33', followers:250, followed:100, score: 20,
            label: 1, slurs: 20, ntweets:100002, tweets:['']}
    ]
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

    function filterInput(e:FormEvent<HTMLInputElement>){
        setTextInput(e.currentTarget.value)
        const keyword = textInput.toString()
        if(keyword.length>=2){
            const data:UserDetails[] = [];
            users.forEach((u: UserDetails)=>{
                if((u.name.toLowerCase().includes(keyword.toLowerCase())) ||
                    u.pseudo.toLowerCase().includes(keyword.toLowerCase())) {
                    data.push(u)
                }
            })
            setUsers(data);
        }else{
            setUsers(default_data);
        }
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
                <UserTableDetail users={users}/>
                <div className="overflow-x-auto flex flex-col flex-3 min-h-52 min-w-80 border border-base-100 rounded-lg p-2">
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