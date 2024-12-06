import {User} from "../../models/user.tsx";
import { useState} from "react";
import {Toxicity} from "../../models/label.tsx";


export default function UserTable ({ users }: { users: Array<User> }) {
    const [hoverId, setHoverId] = useState(0)

    function MouseEnter (id: number){
        document.getElementById(id.toString())
        setHoverId(id)
    }

    function MouseLeave (){
        setHoverId(0)
    }

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

    return <div className="flex justify-center w-full py-20 bg-base-200">
        <table className="bg-base-100 table max-w-screen-md shadow-2xl">
            {/* head */}
            <thead>
            <tr className="text-white">
            <th>Top</th>
                <th>Profile Name</th>
                <th>Username</th>
                <th>Toxicity Level</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user: User) => (
                <tr onMouseEnter={()=>MouseEnter(user.id)}
                    onMouseLeave={MouseLeave}
                    className={hoverId === user.id ? "cursor-pointer py-5 px-5 bg-base-200" : "cursor-pointer py-5 px-5"}
                    key={user.id} id={user.id.toString()}>
                    <th>{user.id}</th>
                    <td>{user.name}</td>
                    <td>@{user.pseudo}</td>
                    <td>{getLabel(user.label, Toxicity.get(user.label))}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
}
