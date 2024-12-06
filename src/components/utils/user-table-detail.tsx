import {UserDetails} from "../../models/user.tsx";
import {Toxicity} from "../../models/label.tsx";

function UserTableDetail({ users }: { users: Array<UserDetails> }) {

    function getLabel(id: number, text: string | undefined){
        switch (id) {
            case 1:
                return <div className="badge badge-outline badge-primary">{text}</div>
            case 2:
                return <div className="badge badge-outline badge-info">{text}</div>
            case 3:
                return <div className="badge badge-outline badge-success">{text}</div>
            case 4:
                return <div className="badge badge-outline badge-warning">{text}</div>
            case 5:
                return <div className="badge badge-outline badge-error">{text}</div>
        }
    }

    return <div className="overflow-x-auto flex-1 border border-gray-600 rounded-lg">
        <table className="table max-h-96 overflow-auto">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Pseudo</th>
                <th>Followers</th>
                <th>Followed</th>
                <th>Score</th>
                <th>Label</th>
                <th>Tweets</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {users.map((user: UserDetails) => (
                <tr>
                    <th>{user.id}</th>
                    <td>{user.name}</td>
                    <td>@{user.pseudo}</td>
                    <td>{user.followers}</td>
                    <td>{user.followed}</td>
                    <td>{user.score}</td>
                    <td>{getLabel(user.label, Toxicity.get(user.label))}</td>
                    <td>{user.ntweets}</td>
                    <td></td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
}

export default UserTableDetail;