import { useState } from "react"
import { Link } from "react-router-dom"
import SearchBar from "./LogicPerPage/SearchBar"
import Categories from "./LogicPerPage/Categories"
import MangaItem from "./Components/MangaItem"
import MangaPageList from "./Components/MangaPageList.js"

const Manga = () => {
    // FOR THE CATEGORIES
    const [categoryItem, setCategoryItem] = useState(MangaPageList);

    const filter = (selectedCategory) => {
        if(selectedCategory == 'all') {
            return setCategoryItem(MangaPageList);
        }

        const filteredData = MangaPageList.filter(MangaPageList => MangaPageList.category === selectedCategory)
        setCategoryItem(filteredData)
    }
    // END FOR THE CATEGORIES

    return (
        <div>
            <section id="manga--body">
                <div className="manga--bodypic">
                    <img id="manga--pic1" src="/images/Home/mangabanner.webp" alt=""/>
                    <img id="manga--pic2" src="/images/Home/mobilemangabanner.webp" alt=""/>
                </div>
            </section>

            <main id="main_doc" className="reveal">
            <div className="update">
                <div className="lilupdate">
                <img src="https://drive.google.com/uc?id=1wZod87_AsayYoAFxWnB5UNqGWVtEpZHV" alt=""/>
                <h1>Manga</h1>
                <h3>Updated: 28/07/2022</h3>
            </div>

            <SearchBar />

            {/* FOR THE CATEGORIES */}
            <Categories filter={filter}/>

            <div className="manga--featured">
                <button><a href="#">Find Manga</a></button>
                </div>
            </div>

            {/* CONTAINS CATEGORIES AND CATEGORYITEMS*/}
            <div id="container">
                <div id="compiler">
                    <MangaItem categoryItem={categoryItem}/>
                </div>
            </div>

            {/* BANNER SECTION */}
            <section id="banner" className="reveal">
                <div className="banner">
                    <Link to="/LightNovel" target="_blank">
                        <img src="https://drive.google.com/uc?id=1X9Azk2MRLtU9AKlpWOFlr3mjZV-aHGdu" alt="Banner_Image"/>
                    </Link>
                </div>
            </section>
            </main>
        </div>
    )
}

export default Manga;