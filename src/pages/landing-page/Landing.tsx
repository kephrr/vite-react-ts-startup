import Navbar from "../../components/navbar.tsx";
import HeroBanner from "../../components/hero-banner.tsx";
import HeroHow, {HeroType} from "../../components/hero-how.tsx";
import UserTable from "../../components/user-table.tsx";
import {User} from "../../models/user.tsx";
import Footer from "../../components/footer.tsx";
import FeedBack from "../../components/feedback.tsx";

function Landing() {
    const heros:Array<HeroType> = [
        {
            reverse:true,
            title:'How does it works ?',
            content:'Every Time  user uses a slur, an insult etc... his hatful ranking upscales in our database. We repertory every hateful users so you can decide to block or mask them all in one click.',
            button:'Get Started',
            src:'card.png'
        }
    ]

    const users:Array<User> = [
        {
            id: 1,
            name: 'LAND OF WANO',
            pseudo: 'Wano_Kuni',
            label:'High Toxicity'
        },
        {
            id: 2,
            name: 'Kreatiive_',
            pseudo: 'kephrr',
            label:'Low Toxicity'
        },
        {
            id: 3,
            name: 'RYO Sensei',
            pseudo: 'RyoSenseiTV',
            label:'Mid Toxicity'
        },
        {
            id: 4,
            name: 'GOJI',
            pseudo: 'GojiYouTube',
            label:'Low Toxicity'
        }
    ]

    return (
        <div className="relative bg-base-200">
            <Navbar/>
            <HeroBanner></HeroBanner>
            {heros.map(h => <HeroHow
                reverse={h.reverse} button={h.button}
                title={h.title} content={h.content} src={h.src}></HeroHow>
            )}
            <div className="flex justify-center">
                <h1 className="text-5xl font-bold">Top
                    <span className="text-blue-500"> 0.1% </span>
                    <span className="text-red-600"> most toxic </span>
                    users</h1>
            </div>
            <UserTable users={users}></UserTable>
            <FeedBack/>
            <Footer></Footer>
        </div>
    );
}

export default Landing;