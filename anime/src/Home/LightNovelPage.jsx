import { useState } from "react"
import { Link } from "react-router-dom"
import Categories from "./LogicPerPage/Categories"
import LightNovelItem from "./Components/LightNovelItem"
import LightNovelPageList from "./Components/LightNovelPageList.js"

const LightNovel = () => {
    // FOR SEARCH BAR
    const [searching, setSearching] = useState("");


    // FOR THE CATEGORIES
    const [categoryItem, setCategoryItem] = useState(LightNovelPageList);

    const filter = (selectedCategory) => {
        if(selectedCategory == 'all') {
            return setCategoryItem(LightNovelPageList);
        }

        const filteredData = LightNovelPageList.filter(LightNovelPageList => LightNovelPageList.category === selectedCategory)
        setCategoryItem(filteredData)
    }
    // END FOR THE CATEGORIES

    return (
        <div>
            <section id="manga--body">
                <div className="manga--bodypic">
                    <img id="manga--pic1" src="/images/Home/LightNovelBanner.webp" alt=""/>
                    <img id="manga--pic2" src="/images/Home/MobileLightNovelBanner.webp" alt=""/>
                </div>
            </section>

            <main id="main_doc" className="reveal">
            <div className="update">
                <div className="lilupdate">
                <img src="https://drive.google.com/uc?id=1EIFaCnCk4ezKN3nEo0qMum3zsZVAHSD7" alt=""/>
                <h1>Light Novel</h1>
                <h3>Updated: 28/07/2022</h3>
            </div>

            {/* SEARCH BAR */}
            <div className="product--searchbar">
                <input type="text" id="search-item" placeholder="Search products" onChange={event => {setSearching(event.target.value)}}/>
            </div>

            {/* FOR THE CATEGORIES */}
            <Categories filter={filter}/>

            <div className="manga--featured">
                <button><a href="#">Find Manga</a></button>
                </div>
            </div>

            {/* CONTAINS CATEGORIES AND CATEGORYITEMS*/}
            <div id="container">
                <div id="compiler">
                    <LightNovelItem categoryItem={categoryItem}/>
                </div>
            </div>

            {/* BANNER SECTION */}
            <section id="banner" className="reveal">
                <div className="banner">
                    <Link to="/Merch" target="_blank">
                        <img src="https://drive.google.com/uc?id=1X9Azk2MRLtU9AKlpWOFlr3mjZV-aHGdu" alt="Banner_Image"/>
                    </Link>
                </div>
            </section>
            </main>
        </div>
    )
}

export default LightNovel;