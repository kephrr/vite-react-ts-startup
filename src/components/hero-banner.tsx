function HeroBanner() {
    return <div className="hero bg-base-200 min-h-lvh">
        <div className="hero-content text-center">
            <div className="max-w-screen-md">
                <h1 className="relative text-5xl font-bold">
                    Clean your Twitter timeline from all slurs,
                    <span className="text-blue-500"> curse words</span> and hateful people
                </h1>
                <p className="py-6">
                    Here you can start by browsing if you are a considered an hateful people on Twitter.
                </p>
                <div className="flex flex-row gap-2.5 items-center justify-center">
                    <input
                        type="text"
                        placeholder="Type an user @ to see if they are hateful or not"
                        className="input input-bordered border-blue-500 w-full max-w-full"/>
                    <button className="bg-blue-500 py-3 px-5 rounded-lg text-white font-semibold">Rechercher</button>
                </div>
            </div>
        </div>
    </div>
}

export default HeroBanner;