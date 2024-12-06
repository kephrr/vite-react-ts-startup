import Naviguation from "../components/includes/naviguation.tsx";
import {UserDetails} from "../models/user.tsx";
import UserTableDetail from "../components/utils/user-table-detail.tsx";

type Option = {
    id: number, text:string, value:number, select:number
}

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

    const users:Array<UserDetails> = [
        {id: 1, name: 'ActuRyo', pseudo: 'RyoSesneiActuu', followers:19303, followed:192, score: 851,
            label: 4, slurs: 124, ntweets:11982093, tweets:['']},
        {id: 2, name: 'ActuRyo', pseudo: 'byliahn', followers:442, followed:10, score: 50,
            label: 2, slurs: 12, ntweets:11903, tweets:['']},
        {id: 3, name: 'ActuRyo', pseudo: 'arisky', followers:250, followed:100, score: 20,
            label: 1, slurs: 20, ntweets:100002, tweets:['']},
        {id: 4, name: 'ActuRyo', pseudo: 'RyoSesneiActuu', followers:19303, followed:192, score: 851,
            label: 4, slurs: 124, ntweets:11982093, tweets:['']},
        {id: 5, name: 'ActuRyo', pseudo: 'byliahn', followers:442, followed:10, score: 50,
            label: 2, slurs: 12, ntweets:11903, tweets:['']},
        {id: 6, name: 'ActuRyo', pseudo: 'arisky', followers:250, followed:100, score: 20,
            label: 1, slurs: 20, ntweets:100002, tweets:['']}
    ]

    return (
        <div className="relative bg-base-200 py-2 px-20 min-h-screen">
            <Naviguation location={location}/>
            <div className="flex flex-row gap-2.5 items-center justify-center">
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-sm w-full max-w-full"/>
                <select className="select select-bordered select-sm max-w-xs">
                    <option disabled selected>Followers users</option>
                    {options.map((opt: Option) => (
                        opt.select === 1? <option key={opt.id}>{opt.text}</option> : ''
                    ))}
                </select>
                <select className="select select-bordered select-sm max-w-xs">
                    <option disabled selected>Followed</option>
                    {options.map((opt: Option) => (
                        opt.select === 2? <option key={opt.id}>{opt.text}</option> : ''
                    ))}
                </select>
                <select className="select select-bordered select-sm max-w-xs">
                    <option disabled selected>Frequency</option>
                    {options.map((opt: Option) => (
                        opt.select === 3? <option key={opt.id}>{opt.text}</option> : ''
                    ))}
                </select>
                <a href="/explore">
                    <button className="btn btn-sm bg-blue-500 rounded-lg text-white font-semibold">Browse</button>
                </a>
            </div>
            <div className="flex flex-row my-5 gap-2.5">
                <UserTableDetail users={users}/>
                <div className="overflow-x-auto flex-3 min-h-52 min-w-80 border border-gray-600 rounded-lg p-2">
                    <div className="badge badge-outline badge-primary m-2">Not a Toxic</div>
                    <div className="badge badge-outline badge-info">Lowly toxic</div>
                    <br/>
                    <div className="badge badge-outline badge-success m-2">Middly toxic</div>
                    <div className="badge badge-outline badge-warning">Highly toxic</div>
                    <br/>
                    <div className="badge badge-outline badge-error m-2">Extremely toxic</div>
                    <br/>
                    <div className="badge badge-outline badge-error m-2">Insufferable level toxic</div>
                </div>
            </div>
        </div>
    )
}

export default Explore;