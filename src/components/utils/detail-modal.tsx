import React, { useRef } from 'react';
import {UserModal} from "../../models/user.tsx";
import Label from "./label.tsx";
import {TOXICITY} from "../../resources.ts";


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

    const label = user.label;
    return (
        <div>
            <button className="btn bg-base-100 btn-sm" onClick={openModal}>
                More
            </button>
            <dialog id="my_modal_2" className="modal" ref={modalRef}>
                <div className="modal-box">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="font-bold text-lg">{user.name}</p>
                            <p className="py-4 italic">@{user.pseudo}</p>
                        </div>
                        <Label id={label} text={TOXICITY.get(label)}></Label>
                    </div>
                    <div className="flex gap-2.5">
                        <div>
                        <p className={head}>Score</p>
                            <p className={content}>{user.score}</p>
                        </div>
                        <div>
                            <p className={head}>Followers</p>
                            <p className={content}>{user.followers}</p>
                        </div>
                        <div>
                            <p className={head}>Followed</p>
                            <p className={content}>{user.followed}</p>
                        </div>
                    </div>
                    <button className="btn btn-sm mt-5" onClick={closeModal}>Close</button>
                </div>
            </dialog>
        </div>
    );
};

export default DetailModal;
