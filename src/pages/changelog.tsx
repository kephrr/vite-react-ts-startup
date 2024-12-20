import Naviguation from "../components/includes/naviguation.tsx";

function ChangeLog(){
    const location = [
        {text:'Home', url:'/'},
        {text:'Changelog', url:'/changelog'}
    ]


    return <div className="relative bg-base-200 py-2 px-20 min-h-screen">
        <Naviguation location={location}/>
    </div>
}

export default ChangeLog;