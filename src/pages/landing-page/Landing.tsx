import Navbar from "../../components/navbar.tsx";
import HeroBanner from "../../components/hero-banner.tsx";
import HeroHow, {HeroType} from "../../components/hero-how.tsx";

function Landing() {
    const heros:Array<HeroType> = [
        {
            reverse:true,
            title:'How does it works ?',
            content:'Every Time  user uses a slur, an insult etc... his hatful ranking upscales in our database. We repertory every hateful users so you can decide to block or mask them all in one click.',
            button:'Get Started',
            src:'card.png'}
    ]

    return (
        <div className="relative">
            <Navbar/>
            <HeroBanner></HeroBanner>
            {heros.map(h=> <HeroHow 
                reverse={h.reverse} button={h.button}
                title={h.title} content={h.content} src={h.src}></HeroHow>
            )}
        </div>
    );
}

export default Landing;