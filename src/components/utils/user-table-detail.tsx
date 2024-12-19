import {UserDetails} from "../../models/user.tsx";
import {TOXICITY} from "../../resources.ts";
import DetailModal from "./detail-modal.tsx";
import Label from "./label.tsx";
import { useState} from "react";




function UserTableDetail({users}: { users: UserDetails[]|undefined }) {
    const [hoverId, setHoverId] = useState(0)
    if (users === undefined) users = []
    function MouseEnter (id: number){
        document.getElementById(id.toString())
        setHoverId(id)
    }

    function MouseLeave (){
        setHoverId(0)
    }


    return <table className="table max-h-96 overflow-auto">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Followers</th>
                    <th>Toxicity</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {users.map((user: UserDetails) => (
                    <tr
                        onMouseEnter={() => MouseEnter(user.id)}
                        onMouseLeave={MouseLeave}
                        className={hoverId === user.id ? "cursor-pointer py-5 px-5 bg-base-200" : "cursor-pointer py-5 px-5"}
                        key={user.id}>
                        <td>{user.id}</td>
                        <td>
                            <p className="font-semibold">{user.name}</p>
                            <p className="italic">@{user.pseudo}</p>
                        </td>
                        <td>{user.followers}</td>
                        <td>
                            <Label id={user.level} text={TOXICITY.get(user.level)}/>
                        </td>
                        <td>
                            <DetailModal name={user.name}
                                         pseudo={user.pseudo}
                                         followers={user.followers}
                                         followed={user.following}
                                         score={user.totalInsults}
                                         level={user.level}
                                         totalInsults={user.totalInsults}
                                         totalTweets={user.totalTweets}></DetailModal>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
}

export default UserTableDetail;