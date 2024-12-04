function FeedBack(){
    return (
        <div className="flex flex-col mx-44 items-start bg-base-200">
            <h1 className="text-5xl my-10 font-bold">Report
                <span className="text-blue-500"> bug</span> and enhancement ideas
            </h1>
            <textarea
                placeholder="Propose and make feedback on the service"
                className="textarea textarea-bordered textarea-lg w-full max-w-xs"></textarea>
            <div className="rating my-5">
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500"/>
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" defaultChecked/>
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500"/>
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500"/>
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500"/>
            </div>
        </div>
    )
}

export default FeedBack;