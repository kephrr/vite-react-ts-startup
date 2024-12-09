import {UserDetails} from "../../models/user.tsx";
import {TOXICITY} from "../../resources.ts";
import DetailModal from "./detail-modal.tsx";
import Label from "./label.tsx";
import {Loader} from "./loader.tsx";

function UserTableDetail({ users }: { users: Array<UserDetails> }) {

    return <div className="overflow-x-auto flex-1 border border-base-100 rounded-lg">
        {users.length === 0 ? <Loader></Loader> : ''}
        <table className="table max-h-96 overflow-auto">
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
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>
                        <p className="font-semibold">{user.name}</p>
                        <p className="italic">@{user.pseudo}</p>
                    </td>
                    <td>{user.followers}</td>
                    <td>
                        <Label id={user.label} text={TOXICITY.get(user.label)}/>
                    </td>
                    <td>
                        <DetailModal name={user.name} pseudo={user.pseudo}
                                     followers={user.followers} followed={user.followed}
                                     score={user.slurs} label={user.label}
                                     slurs={user.slurs} ntweets={user.ntweets}></DetailModal>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        <div className="join">
            <button className="join-item btn">1</button>
            <button className="join-item btn btn-active">2</button>
            <button className="join-item btn">3</button>
            <button className="join-item btn">4</button>
        </div>
    </div>
}

export default UserTableDetail;