import React, { useRef } from 'react';
import {UserModal} from "../../models/user.tsx";
import Label from "./label.tsx";
import {TOXICITY} from "../../resources.ts";
import {Download} from "lucide-react";


const DetailModal: React.FC<UserModal> = (user) => {
    const modalRef = useRef<HTMLDialogElement>(null);

    const openModal = () => {
        modalRef.current?.showModal();

    };

    const closeModal = () => {
        modalRef.current?.close();
    }

    const head:string = "font-semibold"
    const content:string = "text-lg"
    const label = user.level;
    const rate:string = user.rate.toString().slice(0,5)

    return (
        <div>
            <button className="btn bg-base-100 btn-sm" onClick={openModal}>
                More
            </button>
            <dialog id="my_modal_2" className="modal" ref={modalRef}>
                <div className="modal-box">
                    <div className="flex justify-between items-start mb-1">
                        <div className="">
                            <p className="font-bold text-lg">{user.name}</p>
                            <p className="italic text-sm text-white my-2 badge badge-info">@{user.pseudo}</p>
                        </div>
                        <Label id={label} text={TOXICITY.get(label)}></Label>
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <div className="flex gap-2.5">
                            <div>
                                <p className={head}>Followers</p>
                                <p className={content}>{user.followers}</p>
                            </div>
                            <div>
                                <p className={head}>Following</p>
                                <p className={content}>{user.following}</p>
                            </div>
                            <a href="">
                                <Download/>
                            </a>
                        </div>
                        <div className="flex gap-2.5">
                            <div>
                                <p className={head}>Insult per tweet</p>
                                <p className="text-lg font-semibold">{rate}%</p>
                            </div>

                            <div>
                                <p className={head}>Total Tweets</p>
                                <p className={content}>{user.totalTweets}</p>
                            </div>
                            <div>
                                <p className={head}>Total Insults</p>
                                <p className={content}>{user.totalInsults}</p>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-sm mt-5" onClick={closeModal}>Close</button>
                </div>
            </dialog>
        </div>
    );
};

export default DetailModal;
