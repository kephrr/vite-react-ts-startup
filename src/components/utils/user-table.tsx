import { User} from "../../models/user.tsx";
import { useEffect, useState} from "react";
import {TOXICITY} from "../../resources.ts";
import Label from "./label.tsx";
import {ToxicityServiceImpl} from "../../services/Impl/ToxicityServiceImpl.tsx";
import {Loader} from "./loader.tsx";

const toxicityService = new ToxicityServiceImpl();

export default function UserTable () {
    const [hoverId, setHoverId] = useState(0)
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    function MouseEnter (id: number){
        document.getElementById(id.toString())
        setHoverId(id)
    }

    function MouseLeave (){
        setHoverId(0)
    }

    useEffect(() => {
        const findAll = async () => {
            try {
                const data = await toxicityService.findAll();
                setUsers(data.results);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };
        findAll();
    }, []);

    if (loading) return <Loader></Loader>;
    if (error) return <p>Error: {error}</p>;

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
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>@{user.pseudo}</td>
                    <td>
                        <Label id={user.level} text={TOXICITY.get(user.level)}></Label>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
}
