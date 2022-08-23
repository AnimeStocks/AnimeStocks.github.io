import { Link } from 'react-router-dom'
import MangaSec from "./Home/Components/MangaSec"
import MangaSecList from "./Home/Components/MangaSecList.js"
import NovelSec from './Home/Components/NovelSec'
import NovelSecList from './Home/Components/NovelSecList.js'


const Home = () => {
    const Manga = MangaSecList.map(item => {
        return (
            <MangaSec 
                key = {item.id}
                {...item}
            />
        )
    })

    const Novel = NovelSecList.map(item => {
        return (
            <NovelSec 
                key = {item.id}
                {...item}
            />
        )
    })

    return (
        <div>
            <section id="body">
                <div className="bodypic">
                    <img id="pic1" src="/images/Home/1banner.webp" alt=""/>
                    <img id="pic2" src="/images/Home/2banner.webp" alt=""/>
                </div>
            </section>

        {/* MANGA SECTION */}
        <section className="manga reveal">
            <div className="featuredtitle">
                <h2>Manga</h2>
                <button><Link to="/Manga">See more</Link></button>
            </div>
                <div className="maincontainer">
                {Manga}
            </div>
        </section>

        {/* BANNER SECTION */}
        <section id="banner" className="reveal">
            <div className="banner">
                <Link to="/Merch">
                    <img src="/images/Home/banner.png" alt="Banner Image"/>
                </Link>
            </div>
        </section>

        {/* NOVEL SECTION */}
        <section className="novel reveal">
            <div className="featuredtitle">
                <h2>Light Novels</h2>
                <button><Link to="/LightNovel">See more</Link></button>
            </div>
            <div className="maincontainer">
                {Novel}
            </div>
        </section>
    </div>
    )
}

export default Home;