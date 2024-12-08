import {ArrowLeft, House} from "lucide-react";
import {BASE_LINK} from "../../resources.ts";


function NotFound(){
    const home_link = BASE_LINK + "/"

    function onClick(){
        history.back()
    }

    return <div className="flex justify-center items-center min-h-screen">
        <div id="content" className="max-h-96 max-w-screen-md flex flex-col gap-2.5">
            <p id="back" className="text-7xl font-bold">404</p>
            <div id="text">
                <h1>Page Not Found</h1>
                <p>It seems the page you are looking for is unavailable or does not exists</p>
            </div>
            <div className="flex gap-2.5">
                <a href={home_link}>
                    <button className="btn btn-sm"><ArrowLeft/> Previous page</button>
                </a>
                <button className="btn btn-sm" onClick={onClick}><House/>Home</button>
            </div>
        </div>
    </div>
}

export default NotFound;