export type HeroType = {
    reverse: boolean,
    title: string,
    content: string,
    button: string,
    src: string,
    hero?: HeroType
}


function HeroHow({reverse, title, button, content, src}: HeroType) {
    return <div className="hero bg-base-200 min-h-screen">
        <div
            className={reverse ? "mx-44 hero-content flex-col lg:flex-row-reverse" : "mx-44 hero-content flex-col lg:flex-row"}>
            <img
                src={src}
                className=" rounded-lg shadow-2xl" alt=""/>
            <div className="max-w-full">
                <h1 className="text-5xl font-bold">{title}</h1>
                <p className="py-6">
                    {content}
                </p>
                <button className="bg-blue-500 py-2 px-5 rounded-lg text-white">{button}</button>
            </div>
        </div>
    </div>
}

export default HeroHow;